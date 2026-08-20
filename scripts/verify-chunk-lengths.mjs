// Ad-hoc verification helper (not part of the app) — extracts single-quoted
// SQL string literals from a chunk file and prints their character lengths,
// so they can be compared against length() results from the DB after import.
import { readFileSync } from "node:fs";

const file = process.argv[2];
const sql = readFileSync(file, "utf8");

const literals = [];
let i = 0;
while (i < sql.length) {
  if (sql[i] === "'") {
    let j = i + 1;
    let buf = "";
    while (j < sql.length) {
      if (sql[j] === "'" && sql[j + 1] === "'") {
        buf += "'";
        j += 2;
        continue;
      }
      if (sql[j] === "'") break;
      buf += sql[j];
      j++;
    }
    literals.push(buf);
    i = j + 1;
  } else {
    i++;
  }
}

for (const lit of literals) {
  if (lit.length > 20) {
    console.log(lit.length, JSON.stringify(lit.slice(0, 40)) + " ... " + JSON.stringify(lit.slice(-40)));
  }
}
