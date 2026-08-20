#!/usr/bin/env node
// Verification-only helper: parses generated SQL chunk files and extracts
// the literal string values of each insert statement, plus an md5 hash
// per row (all text columns concatenated). Used to cross-check DB content
// against source files without relying on manual re-transcription.
//
// Usage: node scripts/verify-import.mjs <file1.sql> [file2.sql ...]
// Output: JSON lines, one per parsed insert row:
//   {"file","table","columns":[...],"values":[...],"md5":"..."}

import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

function md5(s) {
  return createHash("md5").update(s, "utf8").digest("hex");
}

// Tokenizes a SQL value-tuple starting right after the opening "(" (idx points
// at the char after "("). Returns { values: string[] (raw source slices), endIdx }
// where endIdx is the index of the matching closing ")".
function parseTuple(src, idx) {
  const values = [];
  let depth = 0;
  let cur = "";
  let inStr = false;
  let i = idx;
  for (; i < src.length; i++) {
    const c = src[i];
    if (inStr) {
      cur += c;
      if (c === "'") {
        if (src[i + 1] === "'") {
          cur += "'";
          i++;
        } else {
          inStr = false;
        }
      }
      continue;
    }
    if (c === "'") {
      inStr = true;
      cur += c;
      continue;
    }
    if (c === "(" || c === "[") {
      depth++;
      cur += c;
      continue;
    }
    if (c === ")" || c === "]") {
      if (c === ")" && depth === 0) {
        // end of tuple
        values.push(cur.trim());
        return { values, endIdx: i };
      }
      depth--;
      cur += c;
      continue;
    }
    if (c === "," && depth === 0) {
      values.push(cur.trim());
      cur = "";
      continue;
    }
    cur += c;
  }
  throw new Error("Unterminated tuple starting at " + idx);
}

// Decodes a raw SQL value token into a normalized JS value for hashing.
// - 'literal string' with '' escapes -> string
// - everything else (arrays, NULL, numbers, timestamps) -> raw token text
function decodeToken(tok) {
  // Matches a single-quoted literal optionally followed by a type cast,
  // e.g. '...'::jsonb or '...'::text[]
  const m = /^'([\s\S]*)'(?:::[\w.\[\]"]+)?$/.exec(tok);
  if (m) {
    return m[1].replace(/''/g, "'");
  }
  return tok;
}

function parseFile(filePath) {
  const src = readFileSync(filePath, "utf8");
  const rows = [];
  const insertRe = /insert into public\.(\w+)\s*\(([^)]*)\)\s*values\s*\(/g;
  let m;
  while ((m = insertRe.exec(src))) {
    const table = m[1];
    const columns = m[2].split(",").map((c) => c.trim());
    const tupleStart = m.index + m[0].length;
    const { values: rawValues, endIdx } = parseTuple(src, tupleStart);
    if (rawValues.length !== columns.length) {
      throw new Error(
        `Column/value count mismatch in ${filePath} table ${table}: ${columns.length} cols vs ${rawValues.length} values`
      );
    }
    const decoded = rawValues.map(decodeToken);
    const concatForHash = decoded.join("\u0001");
    rows.push({
      file: filePath,
      table,
      columns,
      values: decoded,
      md5: md5(concatForHash),
    });
    insertRe.lastIndex = endIdx;
  }
  return rows;
}

const files = process.argv.slice(2);
const out = [];
for (const f of files) {
  out.push(...parseFile(f));
}
console.log(JSON.stringify(out));
