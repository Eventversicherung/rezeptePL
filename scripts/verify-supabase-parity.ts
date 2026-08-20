/**
 * Compares the seed*.ts content (source of truth for the import) against
 * what `supabase-repository.ts` actually reads back from Supabase, field
 * by field. Run this before ever flipping `CONTENT_SOURCE=supabase` in a
 * real environment.
 *
 * Usage:
 *   npx tsx scripts/verify-supabase-parity.ts
 *
 * Exits with a non-zero code if any mismatch is found.
 */
import { existsSync, readFileSync } from "fs";
import path from "path";

function loadEnvLocal() {
  const envPath = path.join(process.cwd(), ".env.local");
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const value = trimmed.slice(eqIdx + 1).trim();
    if (!(key in process.env)) process.env[key] = value;
  }
}
loadEnvLocal();

/* eslint-disable @typescript-eslint/no-require-imports */
async function main() {
  const [{ seedRecipes, seedFamilies, seedBlogPosts, seedClusters }, { resolveRecipeArticle }, supabaseRepo] =
    await Promise.all([
      import("@/lib/data/seed"),
      import("@/lib/data/recipe-articles"),
      import("@/lib/data/supabase-repository"),
    ]);
  const { fetchClusters, fetchFamilies, fetchPublishedRecipes, fetchPublishedBlogPosts } = supabaseRepo;
  type Locale = "de" | "pl";
  const LOCALES: Locale[] = ["de", "pl"];

  const mismatches: string[] = [];
  const note = (msg: string) => mismatches.push(msg);

  function sorted(arr: readonly string[] | undefined): string[] {
    return [...(arr ?? [])].sort();
  }

  // Postgres jsonb does not preserve object key insertion order (it reorders
  // keys by length then lexically), so a naive JSON.stringify comparison
  // produces false positives for any jsonb column (e.g. recipe steps).
  // Canonicalize by sorting object keys recursively before comparing.
  function canonicalize(value: unknown): unknown {
    if (Array.isArray(value)) return value.map(canonicalize);
    if (value !== null && typeof value === "object") {
      const sortedEntries = Object.entries(value as Record<string, unknown>)
        .sort(([ka], [kb]) => ka.localeCompare(kb))
        .map(([k, v]) => [k, canonicalize(v)] as const);
      return Object.fromEntries(sortedEntries);
    }
    return value;
  }

  function deepEqual(a: unknown, b: unknown): boolean {
    return JSON.stringify(canonicalize(a)) === JSON.stringify(canonicalize(b));
  }

  // ---------------------------------------------------------------------
  // Clusters
  // ---------------------------------------------------------------------
  const supaClusters = await fetchClusters();
  const supaClusterById = new Map(supaClusters.map((c) => [c.id, c]));
  if (supaClusters.length !== seedClusters.length) {
    note(`clusters: count mismatch seed=${seedClusters.length} supabase=${supaClusters.length}`);
  }
  for (const c of seedClusters) {
    const s = supaClusterById.get(c.id);
    if (!s) {
      note(`cluster ${c.id}: missing in Supabase`);
      continue;
    }
    if (s.kind !== c.kind) note(`cluster ${c.id}: kind mismatch`);
    if ((s.coverImage ?? "") !== (c.coverImage ?? "")) note(`cluster ${c.id}: coverImage mismatch`);
    for (const l of LOCALES) {
      if (s.slug[l] !== c.slug[l]) note(`cluster ${c.id}.${l}: slug mismatch`);
      if (s.title[l] !== c.title[l]) note(`cluster ${c.id}.${l}: title mismatch`);
      if (s.description[l] !== c.description[l]) {
        note(
          `cluster ${c.id}.${l}: description mismatch (seed len=${c.description[l].length}, supabase len=${s.description[l].length})`,
        );
      }
      if (s.seoTitle[l] !== c.seoTitle[l]) note(`cluster ${c.id}.${l}: seoTitle mismatch`);
      if (s.seoDescription[l] !== c.seoDescription[l]) note(`cluster ${c.id}.${l}: seoDescription mismatch`);
    }
  }

  // ---------------------------------------------------------------------
  // Families
  // ---------------------------------------------------------------------
  const supaFamilies = await fetchFamilies();
  const supaFamilyById = new Map(supaFamilies.map((f) => [f.id, f]));
  if (supaFamilies.length !== seedFamilies.length) {
    note(`families: count mismatch seed=${seedFamilies.length} supabase=${supaFamilies.length}`);
  }
  for (const f of seedFamilies) {
    const s = supaFamilyById.get(f.id);
    if (!s) {
      note(`family ${f.id}: missing in Supabase`);
      continue;
    }
    if (s.defaultVariantId !== f.defaultVariantId) note(`family ${f.id}: defaultVariantId mismatch`);
    if (s.coverImage !== f.coverImage) note(`family ${f.id}: coverImage mismatch`);
    if (!deepEqual(s.variantIds, f.variantIds)) note(`family ${f.id}: variantIds order/content mismatch`);
    if (!deepEqual(sorted(s.regionIds), sorted(f.regionIds))) note(`family ${f.id}: regionIds mismatch`);
    if (!deepEqual(sorted(s.occasionIds), sorted(f.occasionIds))) note(`family ${f.id}: occasionIds mismatch`);
    if (!deepEqual(sorted(s.techniqueIds), sorted(f.techniqueIds))) note(`family ${f.id}: techniqueIds mismatch`);
    if (!deepEqual(sorted(s.categoryIds), sorted(f.categoryIds))) note(`family ${f.id}: categoryIds mismatch`);
    if (!deepEqual(sorted(s.relatedPostIds), sorted(f.relatedPostIds))) note(`family ${f.id}: relatedPostIds mismatch`);
    for (const l of LOCALES) {
      const st = s.translations[l];
      const ft = f.translations[l];
      if (st.title !== ft.title) note(`family ${f.id}.${l}: title mismatch`);
      if (st.slug !== ft.slug) note(`family ${f.id}.${l}: slug mismatch`);
      if (st.excerpt !== ft.excerpt) note(`family ${f.id}.${l}: excerpt mismatch`);
      if (st.seoTitle !== ft.seoTitle) note(`family ${f.id}.${l}: seoTitle mismatch`);
      if (st.seoDescription !== ft.seoDescription) note(`family ${f.id}.${l}: seoDescription mismatch`);
    }
  }

  // ---------------------------------------------------------------------
  // Recipes (published only, since RLS only exposes those to the anon key)
  // ---------------------------------------------------------------------
  const seedPublished = seedRecipes.filter((r) => r.status === "published");
  const supaRecipes = await fetchPublishedRecipes();
  const supaRecipeById = new Map(supaRecipes.map((r) => [r.id, r]));
  if (supaRecipes.length !== seedPublished.length) {
    note(`recipes: count mismatch seed(published)=${seedPublished.length} supabase=${supaRecipes.length}`);
  }
  for (const r of seedPublished) {
    const s = supaRecipeById.get(r.id);
    if (!s) {
      note(`recipe ${r.id}: missing in Supabase`);
      continue;
    }
    if (s.coverImage !== r.coverImage) note(`recipe ${r.id}: coverImage mismatch`);
    if (s.prepMinutes !== r.prepMinutes) note(`recipe ${r.id}: prepMinutes mismatch`);
    if (s.cookMinutes !== r.cookMinutes) note(`recipe ${r.id}: cookMinutes mismatch`);
    if (s.servings !== r.servings) note(`recipe ${r.id}: servings mismatch`);
    if ((s.familyId ?? "") !== (r.familyId ?? "")) note(`recipe ${r.id}: familyId mismatch`);
    if ((s.variantImage ?? "") !== (r.variantImage ?? "")) note(`recipe ${r.id}: variantImage mismatch`);
    if (!deepEqual(s.variantLabel ?? {}, r.variantLabel ?? {})) note(`recipe ${r.id}: variantLabel mismatch`);
    if (!deepEqual(sorted(s.relatedPostIds), sorted(r.relatedPostIds))) note(`recipe ${r.id}: relatedPostIds mismatch`);
    if ((s.videoUrl ?? null) !== (r.videoUrl ?? null)) note(`recipe ${r.id}: videoUrl mismatch`);
    if (!deepEqual(sorted(s.regionIds), sorted(r.regionIds))) note(`recipe ${r.id}: regionIds mismatch`);
    if (!deepEqual(sorted(s.occasionIds), sorted(r.occasionIds))) note(`recipe ${r.id}: occasionIds mismatch`);
    if (!deepEqual(sorted(s.techniqueIds), sorted(r.techniqueIds))) note(`recipe ${r.id}: techniqueIds mismatch`);
    if (!deepEqual(sorted(s.categoryIds ?? []), sorted(r.categoryIds ?? []))) note(`recipe ${r.id}: categoryIds mismatch`);

    if (s.ingredients.length !== r.ingredients.length) {
      note(`recipe ${r.id}: ingredient count mismatch seed=${r.ingredients.length} supabase=${s.ingredients.length}`);
    } else {
      for (let i = 0; i < r.ingredients.length; i++) {
        const si = s.ingredients[i];
        const ri = r.ingredients[i];
        if (
          !deepEqual(si.name, ri.name) ||
          si.amount !== ri.amount ||
          !deepEqual(si.unit, ri.unit) ||
          si.group !== ri.group ||
          (si.storeHintDe ?? "") !== (ri.storeHintDe ?? "") ||
          !deepEqual(si.substitute ?? {}, ri.substitute ?? {})
        ) {
          note(`recipe ${r.id}: ingredient[${i}] (${ri.name.de}) mismatch`);
        }
      }
    }

    for (const l of LOCALES) {
      const st = s.translations[l];
      const rt = r.translations[l];
      if (st.title !== rt.title) note(`recipe ${r.id}.${l}: title mismatch`);
      if (st.slug !== rt.slug) note(`recipe ${r.id}.${l}: slug mismatch`);
      if (st.excerpt !== rt.excerpt) note(`recipe ${r.id}.${l}: excerpt mismatch`);
      if (!deepEqual(st.steps, rt.steps)) note(`recipe ${r.id}.${l}: steps mismatch`);
      if (st.seoTitle !== rt.seoTitle) note(`recipe ${r.id}.${l}: seoTitle mismatch`);
      if (st.seoDescription !== rt.seoDescription) note(`recipe ${r.id}.${l}: seoDescription mismatch`);
      const expectedArticle = resolveRecipeArticle(r.id, l, rt.article);
      const supaArticle = st.article ?? "";
      if (supaArticle !== expectedArticle) {
        note(
          `recipe ${r.id}.${l}: article mismatch (expected len=${expectedArticle.length}, supabase len=${supaArticle.length})`,
        );
      }
    }
  }

  // ---------------------------------------------------------------------
  // Blog posts (published only)
  // ---------------------------------------------------------------------
  const seedPublishedPosts = seedBlogPosts.filter((p) => p.status === "published");
  const supaPosts = await fetchPublishedBlogPosts();
  const supaPostById = new Map(supaPosts.map((p) => [p.id, p]));
  if (supaPosts.length !== seedPublishedPosts.length) {
    note(
      `blog posts: count mismatch seed(published)=${seedPublishedPosts.length} supabase=${supaPosts.length}`,
    );
  }
  for (const p of seedPublishedPosts) {
    const s = supaPostById.get(p.id);
    if (!s) {
      note(`blog post ${p.id}: missing in Supabase`);
      continue;
    }
    if (s.postType !== p.postType) note(`blog post ${p.id}: postType mismatch`);
    if (s.coverImage !== p.coverImage) note(`blog post ${p.id}: coverImage mismatch`);
    if (!deepEqual(sorted(s.siloIds), sorted(p.siloIds))) note(`blog post ${p.id}: siloIds mismatch`);
    if (!deepEqual(sorted(s.relatedRecipeIds), sorted(p.relatedRecipeIds))) note(`blog post ${p.id}: relatedRecipeIds mismatch`);
    if (!deepEqual(sorted(s.relatedPostIds), sorted(p.relatedPostIds))) note(`blog post ${p.id}: relatedPostIds mismatch`);
    if (!deepEqual(sorted(s.relatedProductIds), sorted(p.relatedProductIds))) note(`blog post ${p.id}: relatedProductIds mismatch`);
    if (!deepEqual(sorted(s.clusterIds ?? []), sorted(p.clusterIds ?? []))) note(`blog post ${p.id}: clusterIds mismatch`);
    if (new Date(s.publishedAt).getTime() !== new Date(p.publishedAt).getTime()) {
      note(`blog post ${p.id}: publishedAt mismatch (seed=${p.publishedAt}, supabase=${s.publishedAt})`);
    }
    for (const l of LOCALES) {
      const st = s.translations[l];
      const pt = p.translations[l];
      if (st.title !== pt.title) note(`blog post ${p.id}.${l}: title mismatch`);
      if (st.slug !== pt.slug) note(`blog post ${p.id}.${l}: slug mismatch`);
      if (st.excerpt !== pt.excerpt) note(`blog post ${p.id}.${l}: excerpt mismatch`);
      if (st.body !== pt.body) {
        note(`blog post ${p.id}.${l}: body mismatch (seed len=${pt.body.length}, supabase len=${st.body.length})`);
      }
      if (st.seoTitle !== pt.seoTitle) note(`blog post ${p.id}.${l}: seoTitle mismatch`);
      if (st.seoDescription !== pt.seoDescription) note(`blog post ${p.id}.${l}: seoDescription mismatch`);
    }
  }

  // ---------------------------------------------------------------------
  // Report
  // ---------------------------------------------------------------------
  console.log(`\n=== Parity check: ${mismatches.length} mismatch(es) ===`);
  console.log(
    `clusters: seed=${seedClusters.length} supabase=${supaClusters.length} | ` +
      `families: seed=${seedFamilies.length} supabase=${supaFamilies.length} | ` +
      `recipes(published): seed=${seedPublished.length} supabase=${supaRecipes.length} | ` +
      `blog(published): seed=${seedPublishedPosts.length} supabase=${supaPosts.length}`,
  );
  for (const m of mismatches.slice(0, 200)) console.log(" - " + m);
  if (mismatches.length > 200) console.log(`  ... and ${mismatches.length - 200} more`);

  if (mismatches.length > 0) {
    process.exitCode = 1;
  } else {
    console.log("OK — Supabase content is byte-for-byte identical to the seed source.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
