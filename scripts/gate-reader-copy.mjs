#!/usr/bin/env node
/**
 * Gate: user-facing recipe and blog copy must not contain SEO jargon,
 * brand-padding slogans, or telegraphic colon-label dumps.
 * Run: npm run gate:reader-copy
 */
const bannedSeo =
  /\b(Primary|SEO-Hinweis|Cook-Owner|Owner-URL|cannibal|Silo|silosu|silosie|silos)\b/i;

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
  /** Editorial silo / ownership leftovers */
  /Verbindungen im Silo/i,
  /Połączenia w silosie/i,
  /Weiter im Silo/i,
  /Intern weiter/,
  /Varianten-Switcher/,
  /Switcher-Variante/,
  /w przełączniku/,
  /Types vs Cook/i,
  /Typy vs cook/i,
  /Types-Guide/,
  /Types bleiben/,
  /Cook-URL/,
  /hier nur Cook/,
  /hier nur der Cook/,
  /tu tylko cook/i,
  /\(Cook[;)]/,
  /\(cook[;)]/,
  /Broad-Owner/i,
  /ownerem/i,
  /owner planu/i,
  /nie owner/i,
  /inny owner/i,
  /inny intent/i,
  /anderem Intent/i,
  /anderer Intent/i,
  /Technik-Pillar/,
  /filar pieczenia/i,
  /\bHOLD\b/,
  /cook-URL/i,
  /osobnym cook/i,
];

/**
 * Colon + markdown-link dumps at sentence starts (not mid-word like "ohne Teig:").
 * Matches ". Einkauf: [", " Abgrenzung: [", start-of-string "Technik: ["
 */
const colonLinkDump =
  /(^|[.!?]\s+|;\s+)(Einkauf|Zakupy|Technik|Technika|Ersatz|Zamienniki|Abgrenzung|Teig|Ciasto|Einkauf und Ersatz):\s*\[/m;

/** SEO English leftovers that rarely appear in natural DE/PL cooking prose */
const bannedSeoEnglish =
  /\b(Intent|Primary|Ownership|Pillar|Owner|Switcher)\b/;

function scanJargon(text, id, locale, failures) {
  if (!text) return;

  const seo = text.match(bannedSeo);
  if (seo) {
    const idx = text.toLowerCase().indexOf(seo[0].toLowerCase());
    const snippet = text
      .slice(Math.max(0, idx - 40), idx + 60)
      .replace(/\s+/g, " ");
    failures.push({ id, locale, term: seo[0], snippet });
    return;
  }

  for (const re of bannedPhrases) {
    const m = text.match(re);
    if (m) {
      const idx = text.toLowerCase().indexOf(m[0].toLowerCase());
      const snippet = text
        .slice(Math.max(0, idx - 40), idx + 60)
        .replace(/\s+/g, " ");
      failures.push({ id, locale, term: m[0], snippet });
      return;
    }
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

/** Colon-link dumps only in longform (not short step tips like "Einkauf: [Link]"). */
function scanColonDump(text, id, locale, failures) {
  if (!text) return;
  const dump = text.match(colonLinkDump);
  if (dump) {
    const idx = text.indexOf(dump[0]);
    const snippet = text
      .slice(Math.max(0, idx - 20), idx + 55)
      .replace(/\s+/g, " ");
    failures.push({ id, locale, term: dump[0].trim(), snippet });
  }
}

function collectRecipeSeedTexts(recipe, locale) {
  const t = recipe.translations[locale];
  const parts = [];
  if (!t) return parts;
  parts.push(t.excerpt, t.article ?? "", t.seoTitle, t.seoDescription);
  for (const step of t.steps ?? []) {
    parts.push(step.text);
    if (step.tip) parts.push(step.tip);
  }
  if (recipe.variantLabel?.[locale]) parts.push(recipe.variantLabel[locale]);
  for (const ing of recipe.ingredients ?? []) {
    if (ing.substitute?.[locale]) parts.push(ing.substitute[locale]);
    if (locale === "de" && ing.storeHintDe) parts.push(ing.storeHintDe);
  }
  return parts.filter(Boolean);
}

function collectBlogTexts(post, locale) {
  const t = post.translations[locale];
  if (!t) return [];
  return [t.title, t.excerpt, t.body, t.seoTitle, t.seoDescription].filter(
    Boolean,
  );
}

function collectFamilyTexts(family, locale) {
  const t = family.translations[locale];
  if (!t) return [];
  return [t.title, t.excerpt, t.seoTitle, t.seoDescription].filter(Boolean);
}

async function main() {
  const { getRecipeArticle } = await import(
    "../src/lib/data/recipe-articles.ts"
  );

  const { seedRecipes, seedBlogPosts, seedFamilies } = await import(
    "../src/lib/data/seed.ts"
  );
  const ids = seedRecipes.map((r) => r.id);
  const locales = ["de", "pl"];
  let checked = 0;
  const failures = [];

  for (const recipe of seedRecipes) {
    for (const locale of locales) {
      const article = getRecipeArticle(recipe.id, locale);
      checked += 1;
      scanJargon(article, `${recipe.id}/article`, locale, failures);
      scanColonDump(article, `${recipe.id}/article`, locale, failures);
      for (const text of collectRecipeSeedTexts(recipe, locale)) {
        checked += 1;
        scanJargon(text, recipe.id, locale, failures);
      }
    }
  }

  let blogChecked = 0;
  for (const post of seedBlogPosts) {
    for (const locale of locales) {
      for (const text of collectBlogTexts(post, locale)) {
        blogChecked += 1;
        checked += 1;
        scanJargon(text, post.id, locale, failures);
      }
      scanColonDump(
        post.translations[locale]?.body ?? "",
        post.id,
        locale,
        failures,
      );
    }
  }

  for (const family of seedFamilies) {
    for (const locale of locales) {
      for (const text of collectFamilyTexts(family, locale)) {
        checked += 1;
        scanJargon(text, family.id, locale, failures);
      }
    }
  }

  console.log(
    `Checked ${checked} texts (${ids.length} recipes × 2 longform + seed fields, ${seedBlogPosts.length} blog posts, ${seedFamilies.length} families).`,
  );
  if (failures.length) {
    console.error(`FAIL: ${failures.length} hits`);
    for (const f of failures.slice(0, 80)) {
      console.error(
        ` - ${f.id} [${f.locale}] «${f.term}»: …${f.snippet}…`,
      );
    }
    if (failures.length > 80) {
      console.error(` … +${failures.length - 80} more`);
    }
    process.exit(1);
  }
  console.log(
    `PASS: no SEO jargon, banned brand phrases, or colon-link dumps (incl. ${blogChecked} blog fields).`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
