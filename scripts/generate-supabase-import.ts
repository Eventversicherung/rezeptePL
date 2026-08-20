/**
 * Generates idempotent SQL import files from the TypeScript seed data
 * (recipes, families, clusters, blog posts, affiliate products) so every
 * recipe becomes its own row in Supabase instead of living in seed*.ts.
 *
 * Long-form article text is computed once here via `resolveRecipeArticle()`
 * (the exact same function the site currently calls at render time), so the
 * FACTS/retrofit assembly system in `recipe-articles.ts` does not need to be
 * ported to SQL.
 *
 * Usage:
 *   npx tsx scripts/generate-supabase-import.ts
 *
 * Writes:
 *   - supabase/seed-data/content-import.sql        (single file, for review)
 *   - supabase/seed-data/chunks/NN-*.sql            (same content, size-capped
 *                                                     per file so each chunk
 *                                                     can be applied via a
 *                                                     single execute_sql call)
 *
 * Safe to run multiple times: entity tables use `insert ... on conflict (id)
 * do update`, and pure child/junction rows (ingredients, cluster tags) are
 * deleted-and-reinserted per parent id.
 */
import { promises as fs } from "fs";
import path from "path";
import type { Locale } from "@/types/content";
import {
  seedRecipes,
  seedFamilies,
  seedBlogPosts,
  seedClusters,
} from "@/lib/data/seed";
import { seedAffiliateProducts } from "@/lib/data/affiliate-products";
import { resolveRecipeArticle } from "@/lib/data/recipe-articles";

const LOCALES: Locale[] = ["de", "pl"];
// Kept small on purpose: each chunk is transported into a tool-call
// argument by an LLM agent (no direct DB connection string is used, by
// design — see the migration plan). Large chunks risk the agent
// silently paraphrasing/shortening long article text, or hitting
// "resource exhausted" errors when generating the call. Small,
// single-purpose chunks are copy-pasted verbatim instead.
const MAX_CHUNK_BYTES = 12_000;

function sqlStr(v: string | null | undefined): string {
  if (v == null) return "null";
  return `'${v.replace(/'/g, "''")}'`;
}

function sqlTextArray(arr: readonly string[] | null | undefined): string {
  const a = arr ?? [];
  if (a.length === 0) return "'{}'::text[]";
  return `array[${a.map((s) => sqlStr(s)).join(", ")}]::text[]`;
}

function sqlJsonb(v: unknown): string {
  return `${sqlStr(JSON.stringify(v ?? null))}::jsonb`;
}

function sqlBool(v: boolean): string {
  return v ? "true" : "false";
}

function sqlNum(v: number | null | undefined): string {
  return v == null || Number.isNaN(v) ? "null" : String(v);
}

/** One coherent, self-contained group of statements (never split across chunks). */
type Block = { label: string; statements: string[] };

const blocks: Block[] = [];

// ---------------------------------------------------------------------
// 1) Clusters
// ---------------------------------------------------------------------
for (const c of seedClusters) {
  const statements: string[] = [];
  statements.push(
    `insert into public.clusters (id, kind, cover_image) values (${sqlStr(c.id)}, ${sqlStr(c.kind)}, ${sqlStr(c.coverImage ?? null)}) ` +
      `on conflict (id) do update set kind = excluded.kind, cover_image = excluded.cover_image;`,
  );
  for (const locale of LOCALES) {
    statements.push(
      `insert into public.cluster_translations (cluster_id, locale, slug, title, description, seo_title, seo_description) values (` +
        `${sqlStr(c.id)}, ${sqlStr(locale)}, ${sqlStr(c.slug[locale])}, ${sqlStr(c.title[locale])}, ${sqlStr(c.description[locale])}, ${sqlStr(c.seoTitle[locale])}, ${sqlStr(c.seoDescription[locale])}` +
        `) on conflict (cluster_id, locale) do update set slug = excluded.slug, title = excluded.title, description = excluded.description, seo_title = excluded.seo_title, seo_description = excluded.seo_description;`,
    );
  }
  blocks.push({ label: `cluster:${c.id}`, statements });
}

// ---------------------------------------------------------------------
// 2) Recipe families (before recipes: recipes.family_id references these)
// ---------------------------------------------------------------------
for (const f of seedFamilies) {
  const statements: string[] = [];
  statements.push(
    `insert into public.recipe_families (id, default_variant_id, cover_image, variant_ids, related_post_ids, region_ids, occasion_ids, technique_ids, category_ids) values (` +
      `${sqlStr(f.id)}, ${sqlStr(f.defaultVariantId)}, ${sqlStr(f.coverImage)}, ${sqlTextArray(f.variantIds)}, ${sqlTextArray(f.relatedPostIds)}, ${sqlTextArray(f.regionIds)}, ${sqlTextArray(f.occasionIds)}, ${sqlTextArray(f.techniqueIds)}, ${sqlTextArray(f.categoryIds)}` +
      `) on conflict (id) do update set default_variant_id = excluded.default_variant_id, cover_image = excluded.cover_image, variant_ids = excluded.variant_ids, related_post_ids = excluded.related_post_ids, region_ids = excluded.region_ids, occasion_ids = excluded.occasion_ids, technique_ids = excluded.technique_ids, category_ids = excluded.category_ids, updated_at = now();`,
  );
  for (const locale of LOCALES) {
    const t = f.translations[locale];
    statements.push(
      `insert into public.recipe_family_translations (family_id, locale, title, slug, excerpt, seo_title, seo_description) values (` +
        `${sqlStr(f.id)}, ${sqlStr(locale)}, ${sqlStr(t.title)}, ${sqlStr(t.slug)}, ${sqlStr(t.excerpt)}, ${sqlStr(t.seoTitle)}, ${sqlStr(t.seoDescription)}` +
        `) on conflict (family_id, locale) do update set title = excluded.title, slug = excluded.slug, excerpt = excluded.excerpt, seo_title = excluded.seo_title, seo_description = excluded.seo_description;`,
    );
  }
  blocks.push({ label: `family:${f.id}`, statements });
}

// ---------------------------------------------------------------------
// 3) Recipes + translations (article precomputed) + ingredients + clusters
// ---------------------------------------------------------------------
for (const r of seedRecipes) {
  const statements: string[] = [];
  statements.push(
    `insert into public.recipes (id, status, cover_image, prep_minutes, cook_minutes, servings, video_url, family_id, variant_label, variant_image, related_post_ids) values (` +
      `${sqlStr(r.id)}, ${sqlStr(r.status)}, ${sqlStr(r.coverImage)}, ${sqlNum(r.prepMinutes)}, ${sqlNum(r.cookMinutes)}, ${sqlNum(r.servings)}, ${sqlStr(r.videoUrl ?? null)}, ${sqlStr(r.familyId ?? null)}, ${sqlJsonb(r.variantLabel ?? {})}, ${sqlStr(r.variantImage ?? "")}, ${sqlTextArray(r.relatedPostIds)}` +
      `) on conflict (id) do update set status = excluded.status, cover_image = excluded.cover_image, prep_minutes = excluded.prep_minutes, cook_minutes = excluded.cook_minutes, servings = excluded.servings, video_url = excluded.video_url, family_id = excluded.family_id, variant_label = excluded.variant_label, variant_image = excluded.variant_image, related_post_ids = excluded.related_post_ids, updated_at = now();`,
  );

  for (const locale of LOCALES) {
    const t = r.translations[locale];
    const article = resolveRecipeArticle(r.id, locale, t.article);
    statements.push(
      `insert into public.recipe_translations (recipe_id, locale, title, slug, excerpt, steps, article, seo_title, seo_description) values (` +
        `${sqlStr(r.id)}, ${sqlStr(locale)}, ${sqlStr(t.title)}, ${sqlStr(t.slug)}, ${sqlStr(t.excerpt)}, ${sqlJsonb(t.steps)}, ${sqlStr(article)}, ${sqlStr(t.seoTitle)}, ${sqlStr(t.seoDescription)}` +
        `) on conflict (recipe_id, locale) do update set title = excluded.title, slug = excluded.slug, excerpt = excluded.excerpt, steps = excluded.steps, article = excluded.article, seo_title = excluded.seo_title, seo_description = excluded.seo_description;`,
    );
  }

  statements.push(`delete from public.recipe_ingredients where recipe_id = ${sqlStr(r.id)};`);
  for (const [i, ing] of r.ingredients.entries()) {
    statements.push(
      `insert into public.recipe_ingredients (recipe_id, sort_order, amount, unit_de, unit_pl, name_de, name_pl, group_name, store_hint_de, substitute_de, substitute_pl) values (` +
        `${sqlStr(r.id)}, ${i}, ${sqlNum(ing.amount)}, ${sqlStr(ing.unit.de)}, ${sqlStr(ing.unit.pl)}, ${sqlStr(ing.name.de)}, ${sqlStr(ing.name.pl)}, ${sqlStr(ing.group)}, ${sqlStr(ing.storeHintDe ?? null)}, ${sqlStr(ing.substitute?.de ?? null)}, ${sqlStr(ing.substitute?.pl ?? null)}` +
        `);`,
    );
  }

  const clusterIds = [
    ...r.regionIds,
    ...r.occasionIds,
    ...r.techniqueIds,
    ...(r.categoryIds ?? []),
  ];
  statements.push(`delete from public.recipe_clusters where recipe_id = ${sqlStr(r.id)};`);
  if (clusterIds.length > 0) {
    const values = clusterIds
      .map((cid) => `(${sqlStr(r.id)}, ${sqlStr(cid)})`)
      .join(", ");
    statements.push(
      `insert into public.recipe_clusters (recipe_id, cluster_id) values ${values} on conflict (recipe_id, cluster_id) do nothing;`,
    );
  }
  blocks.push({ label: `recipe:${r.id}`, statements });
}

// ---------------------------------------------------------------------
// 4) Blog posts
// ---------------------------------------------------------------------
for (const p of seedBlogPosts) {
  const statements: string[] = [];
  statements.push(
    `insert into public.blog_posts (id, status, post_type, cover_image, silo_ids, related_recipe_ids, related_post_ids, related_product_ids, cluster_ids, published_at, updated_at) values (` +
      `${sqlStr(p.id)}, ${sqlStr(p.status)}, ${sqlStr(p.postType)}, ${sqlStr(p.coverImage)}, ${sqlTextArray(p.siloIds)}, ${sqlTextArray(p.relatedRecipeIds)}, ${sqlTextArray(p.relatedPostIds)}, ${sqlTextArray(p.relatedProductIds)}, ${sqlTextArray(p.clusterIds)}, ${sqlStr(p.publishedAt)}, ${sqlStr(p.updatedAt)}` +
      `) on conflict (id) do update set status = excluded.status, post_type = excluded.post_type, cover_image = excluded.cover_image, silo_ids = excluded.silo_ids, related_recipe_ids = excluded.related_recipe_ids, related_post_ids = excluded.related_post_ids, related_product_ids = excluded.related_product_ids, cluster_ids = excluded.cluster_ids, published_at = excluded.published_at, updated_at = excluded.updated_at;`,
  );
  for (const locale of LOCALES) {
    const t = p.translations[locale];
    statements.push(
      `insert into public.blog_post_translations (post_id, locale, title, slug, excerpt, body, seo_title, seo_description) values (` +
        `${sqlStr(p.id)}, ${sqlStr(locale)}, ${sqlStr(t.title)}, ${sqlStr(t.slug)}, ${sqlStr(t.excerpt)}, ${sqlStr(t.body)}, ${sqlStr(t.seoTitle)}, ${sqlStr(t.seoDescription)}` +
        `) on conflict (post_id, locale) do update set title = excluded.title, slug = excluded.slug, excerpt = excluded.excerpt, body = excluded.body, seo_title = excluded.seo_title, seo_description = excluded.seo_description;`,
    );
  }
  blocks.push({ label: `blog:${p.id}`, statements });
}

// ---------------------------------------------------------------------
// 5) Affiliate products
// ---------------------------------------------------------------------
{
  const statements: string[] = [];
  for (const a of seedAffiliateProducts) {
    statements.push(
      `insert into public.affiliate_products (id, partner, url, image_url, title_de, title_pl, description_de, description_pl, cta_de, cta_pl, tags, recipe_ids, post_ids, active, sort_order) values (` +
        `${sqlStr(a.id)}, ${sqlStr(a.partner)}, ${sqlStr(a.url)}, ${sqlStr(a.imageUrl)}, ${sqlStr(a.title.de)}, ${sqlStr(a.title.pl)}, ${sqlStr(a.description.de)}, ${sqlStr(a.description.pl)}, ${sqlStr(a.cta.de)}, ${sqlStr(a.cta.pl)}, ${sqlTextArray(a.tags)}, ${sqlTextArray(a.recipeIds)}, ${sqlTextArray(a.postIds)}, ${sqlBool(a.active)}, ${sqlNum(a.sortOrder)}` +
        `) on conflict (id) do update set partner = excluded.partner, url = excluded.url, image_url = excluded.image_url, title_de = excluded.title_de, title_pl = excluded.title_pl, description_de = excluded.description_de, description_pl = excluded.description_pl, cta_de = excluded.cta_de, cta_pl = excluded.cta_pl, tags = excluded.tags, recipe_ids = excluded.recipe_ids, post_ids = excluded.post_ids, active = excluded.active, sort_order = excluded.sort_order, updated_at = now();`,
    );
  }
  blocks.push({ label: "affiliate_products", statements });
}

// ---------------------------------------------------------------------
// Emit: one full review file + size-capped chunk files for execution
// ---------------------------------------------------------------------
const header = [
  "-- AUTO-GENERATED by scripts/generate-supabase-import.ts — do not edit by hand.",
  "-- Regenerate after any seed*.ts content change: npx tsx scripts/generate-supabase-import.ts",
];

async function main() {
  const outDir = path.join(process.cwd(), "supabase", "seed-data");
  const chunkDir = path.join(outDir, "chunks");
  await fs.mkdir(chunkDir, { recursive: true });

  // Full review file
  const full = [
    ...header,
    "begin;",
    "",
    ...blocks.flatMap((b) => [`-- ${b.label}`, ...b.statements]),
    "",
    "commit;",
    "",
    `-- Row counts expected after this file runs: clusters=${seedClusters.length}, recipe_families=${seedFamilies.length}, recipes=${seedRecipes.length}, blog_posts=${seedBlogPosts.length}, affiliate_products=${seedAffiliateProducts.length}`,
  ].join("\n");
  await fs.writeFile(path.join(outDir, "content-import.sql"), full + "\n", "utf8");

  // Size-capped chunks, never splitting a block across files
  const existing = await fs.readdir(chunkDir).catch(() => [] as string[]);
  await Promise.all(
    existing.map((f) => fs.rm(path.join(chunkDir, f)).catch(() => {})),
  );

  let chunkIndex = 0;
  let current: Block[] = [];
  let currentBytes = 0;

  const flush = async () => {
    if (current.length === 0) return;
    const content = [
      ...header,
      "begin;",
      "",
      ...current.flatMap((b) => [`-- ${b.label}`, ...b.statements]),
      "",
      "commit;",
    ].join("\n");
    const name = `${String(chunkIndex).padStart(3, "0")}-${current[0].label.split(":")[0]}.sql`;
    await fs.writeFile(path.join(chunkDir, name), content + "\n", "utf8");
    chunkIndex += 1;
    current = [];
    currentBytes = 0;
  };

  for (const block of blocks) {
    const blockBytes = Buffer.byteLength(block.statements.join("\n"), "utf8");
    const sameKind = current[0]?.label.split(":")[0] === block.label.split(":")[0];
    if (current.length > 0 && (!sameKind || currentBytes + blockBytes > MAX_CHUNK_BYTES)) {
      await flush();
    }
    current.push(block);
    currentBytes += blockBytes;
  }
  await flush();

  console.log(
    `Wrote supabase/seed-data/content-import.sql and ${chunkIndex} chunk file(s) in supabase/seed-data/chunks/`,
  );
}

main();
