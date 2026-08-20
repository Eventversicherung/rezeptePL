#!/usr/bin/env node
// Builds a read-only SQL query that recomputes md5 hashes in Postgres for the
// text-heavy columns of specific rows (parsed from source SQL chunk files)
// and reports any row whose hash differs from the source file's hash.
// This is a verification-only tool; it does not modify any data.
//
// Usage: node scripts/build-verify-sql.mjs <parsed_rows.json>
// Output: a single SQL SELECT statement on stdout.

import { readFileSync } from "node:fs";

const TABLE_SPECS = {
  recipe_translations: {
    keyCols: ["recipe_id", "locale"],
    textCols: ["title", "slug", "excerpt", "steps", "article", "seo_title", "seo_description"],
  },
  blog_post_translations: {
    keyCols: ["post_id", "locale"],
    textCols: ["title", "slug", "excerpt", "body", "seo_title", "seo_description"],
  },
  recipe_ingredients: {
    keyCols: ["recipe_id", "sort_order"],
    textCols: [
      "unit_de",
      "unit_pl",
      "name_de",
      "name_pl",
      "group_name",
      "store_hint_de",
      "substitute_de",
      "substitute_pl",
    ],
    castToText: ["group_name"],
  },
};

function sqlQuoteLiteral(s) {
  return "'" + s.replace(/'/g, "''") + "'";
}

function localMd5OfRow(row, spec) {
  // Mirrors Postgres: md5(concat_ws(chr(1), coalesce(col,''), ...))
  const parts = spec.textCols.map((col) => {
    const idx = row.columns.indexOf(col);
    let v = row.values[idx];
    if (v === "null" || v === "NULL") v = "";
    return v;
  });
  return parts.join("\u0001");
}

import { createHash } from "node:crypto";
function md5(s) {
  return createHash("md5").update(s, "utf8").digest("hex");
}

const [rowsPath] = process.argv.slice(2);
const rows = JSON.parse(readFileSync(rowsPath, "utf8"));

const queries = [];
for (const [table, spec] of Object.entries(TABLE_SPECS)) {
  const tableRows = rows.filter((r) => r.table === table);
  if (tableRows.length === 0) continue;

  const valuesRows = tableRows.map((row) => {
    const keyVals = spec.keyCols.map((col) => {
      const idx = row.columns.indexOf(col);
      const v = row.values[idx];
      return sqlQuoteLiteral(v);
    });
    const hash = md5(localMd5OfRow(row, spec));
    return "(" + keyVals.join(", ") + ", " + sqlQuoteLiteral(hash) + ")";
  });

  const keyColList = spec.keyCols.map((c, i) => `k${i}`).join(", ");
  const joinCond = spec.keyCols
    .map((c, i) => {
      if (c === "sort_order") return `t.${c} = v.k${i}::int`;
      if (c === "locale") return `t.${c} = v.k${i}::app_locale`;
      return `t.${c} = v.k${i}`;
    })
    .join(" and ");
  const castCols = new Set([...(spec.castToText || []), "steps"]);
  const concatExpr = spec.textCols
    .map((c) => (castCols.has(c) ? `coalesce(t.${c}::text, '')` : `coalesce(t.${c}, '')`))
    .join(" || chr(1) || ");
  const selectKeyList = spec.keyCols.map((c) => `v.k${c === spec.keyCols[0] ? "0" : spec.keyCols.indexOf(c)}`);

  const q = `
select '${table}' as table_name, ${spec.keyCols
    .map((c, i) => `v.k${i} as ${c}`)
    .join(", ")}, v.expected_md5, md5(${concatExpr}) as actual_md5
from (values ${valuesRows.join(",\n         ")}) as v(${keyColList}, expected_md5)
left join public.${table} t on ${joinCond}
where t.${spec.keyCols[0]} is null or md5(${concatExpr}) is distinct from v.expected_md5;`;
  queries.push(q);
}

console.log(queries.join("\nunion all\n").replace(/;\nunion all\n/g, "\nunion all\n") + (queries.length > 1 ? "" : ""));
