#!/usr/bin/env node
/**
 * Gate: expanded recipe articles must not contain SEO/internal jargon.
 * Run: npx tsx scripts/gate-reader-copy.mjs
 * (also invoked via: node --import tsx … if preferred)
 */
import { createRequire } from "node:module";

const banned =
  /\b(Primary|SEO-Hinweis|Cook-Owner|Owner-URL|cannibal)\b/i;

async function main() {
  const { getRecipeArticle } = await import(
    "../src/lib/data/recipe-articles.ts"
  );

  // Collect all recipe ids that have FACTS by probing known seed ids
  const { seedRecipes } = await import("../src/lib/data/seed.ts");
  const ids = seedRecipes.map((r) => r.id);
  const locales = ["de", "pl"];
  let checked = 0;
  const failures = [];

  for (const id of ids) {
    for (const locale of locales) {
      const text = getRecipeArticle(id, locale);
      checked += 1;
      const m = text.match(banned);
      if (m) {
        const idx = text.toLowerCase().indexOf(m[0].toLowerCase());
        const snippet = text.slice(Math.max(0, idx - 40), idx + 60).replace(/\s+/g, " ");
        failures.push({ id, locale, term: m[0], snippet });
      }
    }
  }

  console.log(`Checked ${checked} expanded articles (${ids.length} recipes × 2 locales).`);
  if (failures.length) {
    console.error(`FAIL: ${failures.length} hits`);
    for (const f of failures.slice(0, 50)) {
      console.error(` - ${f.id} [${f.locale}] «${f.term}»: …${f.snippet}…`);
    }
    process.exit(1);
  }
  console.log("PASS: no Primary / SEO-Hinweis / Cook-Owner / Owner-URL / cannibal in expanded articles.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
