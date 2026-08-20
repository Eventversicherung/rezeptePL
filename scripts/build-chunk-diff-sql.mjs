#!/usr/bin/env node
// Given a parsed_rows.json, a table, key values, and a column, emits a SQL
// query that hashes fixed-size chunks of the column value in Postgres and
// compares them to locally computed chunk hashes, to localize exactly where
// two large text values diverge without transferring the full text.
//
// Usage: node scripts/build-chunk-diff-sql.mjs <parsed_rows.json> <table> <col> <chunkSize> <key=val> [key=val ...]

import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

function md5(s) {
  return createHash("md5").update(s, "utf8").digest("hex");
}
function sqlQuoteLiteral(s) {
  return "'" + s.replace(/'/g, "''") + "'";
}

const [rowsPath, table, col, chunkSizeStr, ...kv] = process.argv.slice(2);
const chunkSize = parseInt(chunkSizeStr, 10);
const keyPairs = kv.map((s) => s.split("="));

const rows = JSON.parse(readFileSync(rowsPath, "utf8"));
const row = rows.find((r) => {
  if (r.table !== table) return false;
  return keyPairs.every(([k, v]) => r.values[r.columns.indexOf(k)] === v);
});
if (!row) throw new Error("Row not found");

const text = row.values[row.columns.indexOf(col)];
const chunks = [];
for (let i = 0; i < text.length; i += chunkSize) {
  const chunk = text.slice(i, i + chunkSize);
  chunks.push({ start: i + 1, len: chunk.length, hash: md5(chunk) });
}

const valuesRows = chunks.map((c) => `(${c.start}, ${c.len}, '${c.hash}')`);
const whereClause = keyPairs
  .map(([k]) => {
    const val = row.values[row.columns.indexOf(k)];
    return `t.${k} = ${sqlQuoteLiteral(val)}${k === "locale" ? "::app_locale" : ""}`;
  })
  .join(" and ");

const q = `select v.start, v.len, v.expected_md5, md5(substr(t.${col}${col === "steps" ? "::text" : ""}, v.start, v.len)) as actual_md5
from (values ${valuesRows.join(",\n         ")}) as v(start, len, expected_md5)
cross join public.${table} t
where ${whereClause}
and md5(substr(t.${col}${col === "steps" ? "::text" : ""}, v.start, v.len)) is distinct from v.expected_md5;`;

console.log(q);
console.log("-- total chunks:", chunks.length, "text length:", text.length);
