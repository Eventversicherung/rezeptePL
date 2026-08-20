#!/usr/bin/env node
// One-off helper: parses a generated seed SQL chunk file and prints, for each
// `insert into public.recipe_translations (...) values (...)` statement,
// an md5 hash per text column so it can be diffed against what actually
// landed in the database after an execute_sql call. Not part of the app.
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const file = process.argv[2];
const dumpTarget = process.argv[3]; // optional "recipeId:locale:column"
if (!file) {
  console.error("usage: node verify-chunk-hash.mjs <path-to-chunk.sql> [recipeId:locale:column]");
  process.exit(1);
}

const sql = readFileSync(file, "utf8");

// Tokenizer for a single top-level SQL statement's parenthesized VALUES list.
// Handles standard '' escaping inside '...' string literals, which is the
// only escaping style used by the generator.
function splitTopLevelValues(valuesText) {
  const items = [];
  let depth = 0;
  let inString = false;
  let current = "";
  for (let i = 0; i < valuesText.length; i++) {
    const ch = valuesText[i];
    if (inString) {
      current += ch;
      if (ch === "'") {
        if (valuesText[i + 1] === "'") {
          current += "'";
          i++;
        } else {
          inString = false;
        }
      }
      continue;
    }
    if (ch === "'") {
      inString = true;
      current += ch;
      continue;
    }
    if (ch === "(") {
      depth++;
      if (depth === 1) {
        current = "";
        continue;
      }
    }
    if (ch === ")") {
      depth--;
      if (depth === 0) {
        items.push(current);
        continue;
      }
    }
    if (depth >= 1) current += ch;
  }
  return items;
}

// Split a values-tuple string into top-level comma-separated fields,
// respecting nested parens/casts and quoted strings.
function splitFields(tuple) {
  const fields = [];
  let depth = 0;
  let inString = false;
  let current = "";
  for (let i = 0; i < tuple.length; i++) {
    const ch = tuple[i];
    if (inString) {
      current += ch;
      if (ch === "'") {
        if (tuple[i + 1] === "'") {
          current += "'";
          i++;
        } else {
          inString = false;
        }
      }
      continue;
    }
    if (ch === "'") {
      inString = true;
      current += ch;
      continue;
    }
    if (ch === "[" || ch === "(") depth++;
    if (ch === "]" || ch === ")") depth--;
    if (ch === "," && depth === 0) {
      fields.push(current);
      current = "";
      continue;
    }
    current += ch;
  }
  fields.push(current);
  return fields.map((f) => f.trim());
}

function unquote(field) {
  const f = field.trim();
  if (f === "null") return null;
  const m = f.match(/^'([\s\S]*)'/);
  if (!m) return f; // not a string literal (number etc.)
  return m[1].replace(/''/g, "'");
}

function md5(text) {
  if (text === null) return "NULL";
  return createHash("md5").update(text, "utf8").digest("hex");
}

const stmtRegex =
  /insert into public\.recipe_translations \(([^)]*)\)\s*values\s*/gi;
let match;
const columnsCache = {};
while ((match = stmtRegex.exec(sql))) {
  const columns = match[1].split(",").map((c) => c.trim());
  const startIdx = stmtRegex.lastIndex;
  // Find the matching outer parens for the single tuple starting here.
  let depth = 0;
  let inString = false;
  let end = -1;
  for (let i = startIdx; i < sql.length; i++) {
    const ch = sql[i];
    if (inString) {
      if (ch === "'") {
        if (sql[i + 1] === "'") {
          i++;
        } else {
          inString = false;
        }
      }
      continue;
    }
    if (ch === "'") {
      inString = true;
      continue;
    }
    if (ch === "(") depth++;
    if (ch === ")") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  const tuple = sql.slice(startIdx + 1, end); // strip outer ( )
  const fields = splitFields(tuple);
  const byCol = {};
  columns.forEach((c, idx) => {
    byCol[c] = unquote(fields[idx]);
  });
  const recipeId = byCol["recipe_id"];
  const locale = byCol["locale"];
  if (dumpTarget) {
    const [wantId, wantLocale, wantCol] = dumpTarget.split(":");
    if (recipeId === wantId && locale === wantLocale) {
      if (wantCol === "steps_concat") {
        const steps = JSON.parse(byCol["steps"]);
        process.stdout.write(
          steps.map((s) => `${s.text}\u0001${s.tip}`).join("\u0002")
        );
      } else {
        process.stdout.write(byCol[wantCol] ?? "");
      }
    }
    continue;
  }
  console.log(`recipe_id=${recipeId} locale=${locale}`);
  for (const col of [
    "title",
    "slug",
    "excerpt",
    "steps",
    "article",
    "seo_title",
    "seo_description",
  ]) {
    const val = byCol[col];
    console.log(`  ${col}: len=${val === null ? 0 : val.length} md5=${md5(val)}`);
  }
}
