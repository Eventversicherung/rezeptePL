// Ad-hoc verification helper (not part of the app). Parses a chunk SQL file's
// `insert into public.blog_post_translations (post_id, locale, title, slug,
// excerpt, body, seo_title, seo_description) values (...)` statements and
// prints md5 hashes of each text field, so they can be compared 1:1 against
// `select md5(title), md5(excerpt), ... from blog_post_translations where ...`
// run through the Supabase execute_sql tool. This lets us catch same-length
// character-substitution transcription errors that a plain length check misses.
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

const file = process.argv[2];
const sql = readFileSync(file, "utf8");

function md5(s) {
  return createHash("md5").update(s, "utf8").digest("hex");
}

// Parse top-level single-quoted SQL literals (handling '' escapes) for a given
// statement substring, returning them as an array of JS strings, in order.
function parseLiterals(stmt) {
  const literals = [];
  let i = 0;
  while (i < stmt.length) {
    if (stmt[i] === "'") {
      let j = i + 1;
      let buf = "";
      while (j < stmt.length) {
        if (stmt[j] === "'" && stmt[j + 1] === "'") {
          buf += "'";
          j += 2;
          continue;
        }
        if (stmt[j] === "'") break;
        buf += stmt[j];
        j++;
      }
      literals.push(buf);
      i = j + 1;
    } else {
      i++;
    }
  }
  return literals;
}

// Find each "insert into public.blog_post_translations (...) values (...)" statement.
const re = /insert into public\.blog_post_translations \([^)]*\) values\s*\(/g;
let match;
const results = [];
while ((match = re.exec(sql))) {
  const startParen = match.index + match[0].length - 1;
  // find matching closing paren for this values(...) by scanning, respecting quotes
  let depth = 1;
  let i = startParen + 1;
  let inQuote = false;
  while (i < sql.length && depth > 0) {
    const c = sql[i];
    if (inQuote) {
      if (c === "'" && sql[i + 1] === "'") {
        i += 2;
        continue;
      }
      if (c === "'") inQuote = false;
    } else {
      if (c === "'") inQuote = true;
      else if (c === "(") depth++;
      else if (c === ")") depth--;
    }
    i++;
  }
  const valuesInner = sql.slice(startParen + 1, i - 1);
  const lits = parseLiterals(valuesInner);
  // order: post_id, locale, title, slug, excerpt, body, seo_title, seo_description
  const [post_id, locale, title, slug, excerpt, body, seo_title, seo_description] = lits;
  results.push({ post_id, locale, title, slug, excerpt, body, seo_title, seo_description });
}

for (const r of results) {
  console.log(`post_id=${r.post_id} locale=${r.locale}`);
  console.log(`  title_md5=${md5(r.title)} len=${r.title.length}`);
  console.log(`  excerpt_md5=${md5(r.excerpt)} len=${r.excerpt.length}`);
  console.log(`  body_md5=${md5(r.body)} len=${r.body.length}`);
  console.log(`  seo_title_md5=${md5(r.seo_title)} len=${r.seo_title.length}`);
  console.log(`  seo_description_md5=${md5(r.seo_description)} len=${r.seo_description.length}`);
}
