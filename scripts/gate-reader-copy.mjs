#!/usr/bin/env node
/**
 * Gate: expanded recipe articles must not contain SEO jargon,
 * brand-padding slogans, or telegraphic colon-label dumps.
 * Run: npm run gate:reader-copy
 */
const bannedSeo =
  /\b(Primary|SEO-Hinweis|Cook-Owner|Owner-URL|cannibal)\b/i;

/** Brand fluff / telegraphic templates that must never reach readers */
const bannedPhrases = [
  /Alemniam denkt/i,
  /Alemniam myśli/i,
  /Kochmodus zu blockieren/i,
  /blokując trybu gotowania/i,
  /Upgrade,\s*kein Muss/i,
  /upgrade,\s*nie obowiązek/i,
  /Morgens die Liste/i,
  /Rano lista,\s*wieczorem/i,
  /liefert Kontext,\s*ohne/i,
  /daje kontekst,\s*nie blokując/i,
  /Einkaufsalternativen:/i,
  /Switcher:/i,
  /Przełącznik:/i,
  /bilingual und praxisnah/i,
  /dwujęzycznie i praktycznie/i,
  /** SEO / ownership meta that must stay out of expand() prose */
  /Abgrenzung:/i,
  /\bstehlen\b/i,
  /\bstiehlt\b/i,
  /\bSteal\b/,
  /\bClash mit\b/i,
  /\bClash z\b/i,
  /\bdescriptiv\b/i,
  /\bbeanspruchen\b/i,
  /\bSpeiseplan stehlen\b/i,
  /\bIntent stehlen\b/i,
  /\bCook-Owner\b/i,
  /\bGuide-Owner\b/i,
  /Keywords im Title/i,
];

/**
 * Colon + markdown-link dumps at sentence starts (not mid-word like "ohne Teig:").
 * Matches ". Einkauf: [", " Abgrenzung: [", start-of-string "Technik: ["
 */
const colonLinkDump =
  /(^|[.!?]\s+|;\s+)(Einkauf|Zakupy|Technik|Technika|Ersatz|Zamienniki|Abgrenzung|Teig|Ciasto|Einkauf und Ersatz):\s*\[/m;

/** SEO English leftovers that rarely appear in natural DE/PL cooking prose */
const bannedSeoEnglish =
  /\b(Intent|Primary|Ownership|Pillar)\b/;

async function main() {
  const { getRecipeArticle } = await import(
    "../src/lib/data/recipe-articles.ts"
  );

  const { seedRecipes } = await import("../src/lib/data/seed.ts");
  const ids = seedRecipes.map((r) => r.id);
  const locales = ["de", "pl"];
  let checked = 0;
  const failures = [];

  for (const id of ids) {
    for (const locale of locales) {
      const text = getRecipeArticle(id, locale);
      checked += 1;

      const seo = text.match(bannedSeo);
      if (seo) {
        const idx = text.toLowerCase().indexOf(seo[0].toLowerCase());
        const snippet = text
          .slice(Math.max(0, idx - 40), idx + 60)
          .replace(/\s+/g, " ");
        failures.push({ id, locale, term: seo[0], snippet });
        continue;
      }

      let hitBanned = false;
      for (const re of bannedPhrases) {
        const m = text.match(re);
        if (m) {
          const idx = text.toLowerCase().indexOf(m[0].toLowerCase());
          const snippet = text
            .slice(Math.max(0, idx - 40), idx + 60)
            .replace(/\s+/g, " ");
          failures.push({ id, locale, term: m[0], snippet });
          hitBanned = true;
          break;
        }
      }
      if (hitBanned) continue;

      const dump = text.match(colonLinkDump);
      if (dump) {
        const idx = text.indexOf(dump[0]);
        const snippet = text
          .slice(Math.max(0, idx - 20), idx + 55)
          .replace(/\s+/g, " ");
        failures.push({ id, locale, term: dump[0].trim(), snippet });
        continue;
      }

      const eng = text.match(bannedSeoEnglish);
      if (eng) {
        const idx = text.indexOf(eng[0]);
        const snippet = text
          .slice(Math.max(0, idx - 40), idx + 60)
          .replace(/\s+/g, " ");
        failures.push({ id, locale, term: eng[0], snippet });
      }
    }
  }

  console.log(
    `Checked ${checked} expanded articles (${ids.length} recipes × 2 locales).`,
  );
  if (failures.length) {
    console.error(`FAIL: ${failures.length} hits`);
    for (const f of failures.slice(0, 60)) {
      console.error(
        ` - ${f.id} [${f.locale}] «${f.term}»: …${f.snippet}…`,
      );
    }
    process.exit(1);
  }
  console.log(
    "PASS: no SEO jargon, banned brand phrases, or colon-link dumps.",
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
