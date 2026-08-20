/**
 * Read-only content source backed by Supabase (RLS-protected, publishable
 * key — no service role, no secrets beyond what's already public in
 * `.env.local`). Mirrors the shape of the local JSON store's content
 * fields (`recipes`, `families`, `clusters`, `blogPosts`) so `repository.ts`
 * can swap the source without touching any business logic.
 *
 * Only published content is visible here: the `recipes`/`blog_posts` RLS
 * policies restrict anonymous reads to `status = 'published'`. Draft
 * content (admin editing) intentionally keeps using the local store — see
 * the comment in `repository.ts` for why.
 */
import { cache } from "react";
import { createPublicClient } from "@/lib/supabase/public";
import type {
  BlogPost,
  BlogPostTranslation,
  Cluster,
  ClusterKind,
  Locale,
  Recipe,
  RecipeFamily,
  RecipeFamilyTranslation,
  RecipeIngredient,
  RecipeTranslation,
} from "@/types/content";

const LOCALES: Locale[] = ["de", "pl"];

function byLocale<T extends { locale: string }>(
  rows: readonly T[] | null | undefined,
): Record<Locale, T> {
  const out = {} as Record<Locale, T>;
  for (const row of rows ?? []) {
    if (row.locale === "de" || row.locale === "pl") out[row.locale] = row;
  }
  return out;
}

// ---------------------------------------------------------------------
// Clusters
// ---------------------------------------------------------------------
type ClusterTranslationRow = {
  locale: string;
  slug: string;
  title: string;
  description: string;
  seo_title: string;
  seo_description: string;
};

type ClusterRow = {
  id: string;
  kind: ClusterKind;
  cover_image: string | null;
  cluster_translations: ClusterTranslationRow[] | null;
};

function mapCluster(row: ClusterRow): Cluster {
  const t = byLocale(row.cluster_translations);
  const pick = (field: keyof ClusterTranslationRow) =>
    Object.fromEntries(LOCALES.map((l) => [l, t[l]?.[field] ?? ""])) as Record<
      Locale,
      string
    >;
  return {
    id: row.id,
    kind: row.kind,
    slug: pick("slug"),
    title: pick("title"),
    description: pick("description"),
    seoTitle: pick("seo_title"),
    seoDescription: pick("seo_description"),
    coverImage: row.cover_image || undefined,
  };
}

export const fetchClusters = cache(async (): Promise<Cluster[]> => {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("clusters")
    .select(
      "id, kind, cover_image, cluster_translations ( locale, slug, title, description, seo_title, seo_description )",
    );
  if (error || !data) {
    console.error("[supabase-repository] fetchClusters", error?.message);
    return [];
  }
  return (data as ClusterRow[]).map(mapCluster);
});

// ---------------------------------------------------------------------
// Recipe families
// ---------------------------------------------------------------------
type FamilyTranslationRow = {
  locale: string;
  title: string;
  slug: string;
  excerpt: string;
  seo_title: string;
  seo_description: string;
};

type FamilyRow = {
  id: string;
  default_variant_id: string;
  cover_image: string;
  variant_ids: string[] | null;
  related_post_ids: string[] | null;
  region_ids: string[] | null;
  occasion_ids: string[] | null;
  technique_ids: string[] | null;
  category_ids: string[] | null;
  recipe_family_translations: FamilyTranslationRow[] | null;
};

function mapFamily(row: FamilyRow): RecipeFamily {
  const t = byLocale(row.recipe_family_translations);
  const translations = {} as Record<Locale, RecipeFamilyTranslation>;
  for (const l of LOCALES) {
    const tr = t[l];
    translations[l] = {
      title: tr?.title ?? "",
      slug: tr?.slug ?? "",
      excerpt: tr?.excerpt ?? "",
      seoTitle: tr?.seo_title ?? "",
      seoDescription: tr?.seo_description ?? "",
    };
  }
  return {
    id: row.id,
    defaultVariantId: row.default_variant_id,
    coverImage: row.cover_image,
    regionIds: row.region_ids ?? [],
    occasionIds: row.occasion_ids ?? [],
    techniqueIds: row.technique_ids ?? [],
    categoryIds: row.category_ids ?? [],
    variantIds: row.variant_ids ?? [],
    relatedPostIds: row.related_post_ids ?? [],
    translations,
  };
}

export const fetchFamilies = cache(async (): Promise<RecipeFamily[]> => {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("recipe_families")
    .select(
      "id, default_variant_id, cover_image, variant_ids, related_post_ids, region_ids, occasion_ids, technique_ids, category_ids, recipe_family_translations ( locale, title, slug, excerpt, seo_title, seo_description )",
    );
  if (error || !data) {
    console.error("[supabase-repository] fetchFamilies", error?.message);
    return [];
  }
  return (data as FamilyRow[]).map(mapFamily);
});

// ---------------------------------------------------------------------
// Recipes (RLS: published-only for the anon/publishable key)
// ---------------------------------------------------------------------
type RecipeTranslationRow = {
  locale: string;
  title: string;
  slug: string;
  excerpt: string;
  steps: RecipeTranslation["steps"];
  article: string;
  seo_title: string;
  seo_description: string;
};

type RecipeIngredientRow = {
  id: string;
  sort_order: number;
  amount: number;
  unit_de: string;
  unit_pl: string;
  name_de: string;
  name_pl: string;
  group_name: RecipeIngredient["group"];
  store_hint_de: string | null;
  substitute_de: string | null;
  substitute_pl: string | null;
};

type RecipeRow = {
  id: string;
  status: Recipe["status"];
  cover_image: string;
  prep_minutes: number;
  cook_minutes: number;
  servings: number;
  video_url: string | null;
  family_id: string | null;
  variant_label: Record<string, string> | null;
  variant_image: string | null;
  related_post_ids: string[] | null;
  author_id: string | null;
  created_at: string;
  updated_at: string;
  recipe_translations: RecipeTranslationRow[] | null;
  recipe_ingredients: RecipeIngredientRow[] | null;
  recipe_clusters: { cluster_id: string }[] | null;
};

function mapRecipe(
  row: RecipeRow,
  clusterKindById: Map<string, ClusterKind>,
): Recipe {
  const t = byLocale(row.recipe_translations);
  const translations = {} as Record<Locale, RecipeTranslation>;
  for (const l of LOCALES) {
    const tr = t[l];
    translations[l] = {
      title: tr?.title ?? "",
      slug: tr?.slug ?? "",
      excerpt: tr?.excerpt ?? "",
      steps: tr?.steps ?? [],
      article: tr?.article ?? "",
      seoTitle: tr?.seo_title ?? "",
      seoDescription: tr?.seo_description ?? "",
    };
  }

  const regionIds: string[] = [];
  const occasionIds: string[] = [];
  const techniqueIds: string[] = [];
  const categoryIds: string[] = [];
  for (const { cluster_id } of row.recipe_clusters ?? []) {
    const kind = clusterKindById.get(cluster_id);
    if (kind === "region") regionIds.push(cluster_id);
    else if (kind === "occasion") occasionIds.push(cluster_id);
    else if (kind === "technique") techniqueIds.push(cluster_id);
    else if (kind === "category") categoryIds.push(cluster_id);
  }

  const ingredients: RecipeIngredient[] = [...(row.recipe_ingredients ?? [])]
    .sort((a, b) => a.sort_order - b.sort_order)
    .map((ing) => ({
      id: ing.id,
      name: { de: ing.name_de, pl: ing.name_pl },
      amount: ing.amount,
      unit: { de: ing.unit_de, pl: ing.unit_pl },
      group: ing.group_name,
      storeHintDe: ing.store_hint_de ?? undefined,
      substitute:
        ing.substitute_de || ing.substitute_pl
          ? { de: ing.substitute_de ?? "", pl: ing.substitute_pl ?? "" }
          : undefined,
    }));

  const variantLabel = row.variant_label as Record<Locale, string> | null;

  return {
    id: row.id,
    status: row.status,
    coverImage: row.cover_image,
    prepMinutes: row.prep_minutes,
    cookMinutes: row.cook_minutes,
    servings: row.servings,
    regionIds,
    occasionIds,
    techniqueIds,
    categoryIds,
    familyId: row.family_id ?? undefined,
    variantLabel:
      variantLabel && Object.keys(variantLabel).length > 0
        ? variantLabel
        : undefined,
    variantImage: row.variant_image || undefined,
    relatedPostIds: row.related_post_ids ?? [],
    authorId: row.author_id ?? undefined,
    videoUrl: row.video_url,
    translations,
    ingredients,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

export const fetchPublishedRecipes = cache(async (): Promise<Recipe[]> => {
  const [clusters, supabase] = [await fetchClusters(), createPublicClient()];
  const clusterKindById = new Map(clusters.map((c) => [c.id, c.kind]));
  const { data, error } = await supabase
    .from("recipes")
    .select(
      `id, status, cover_image, prep_minutes, cook_minutes, servings, video_url, family_id, variant_label, variant_image, related_post_ids, author_id, created_at, updated_at,
       recipe_translations ( locale, title, slug, excerpt, steps, article, seo_title, seo_description ),
       recipe_ingredients ( id, sort_order, amount, unit_de, unit_pl, name_de, name_pl, group_name, store_hint_de, substitute_de, substitute_pl ),
       recipe_clusters ( cluster_id )`,
    );
  if (error || !data) {
    console.error("[supabase-repository] fetchPublishedRecipes", error?.message);
    return [];
  }
  return (data as RecipeRow[]).map((row) => mapRecipe(row, clusterKindById));
});

// ---------------------------------------------------------------------
// Blog posts (RLS: published-only for the anon/publishable key)
// ---------------------------------------------------------------------
type BlogPostTranslationRow = {
  locale: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  seo_title: string;
  seo_description: string;
};

type BlogPostRow = {
  id: string;
  status: BlogPost["status"];
  post_type: BlogPost["postType"];
  cover_image: string;
  silo_ids: string[] | null;
  related_recipe_ids: string[] | null;
  related_post_ids: string[] | null;
  related_product_ids: string[] | null;
  cluster_ids: string[] | null;
  published_at: string | null;
  updated_at: string;
  blog_post_translations: BlogPostTranslationRow[] | null;
};

function mapBlogPost(row: BlogPostRow): BlogPost {
  const t = byLocale(row.blog_post_translations);
  const translations = {} as Record<Locale, BlogPostTranslation>;
  for (const l of LOCALES) {
    const tr = t[l];
    translations[l] = {
      title: tr?.title ?? "",
      slug: tr?.slug ?? "",
      excerpt: tr?.excerpt ?? "",
      body: tr?.body ?? "",
      seoTitle: tr?.seo_title ?? "",
      seoDescription: tr?.seo_description ?? "",
    };
  }
  return {
    id: row.id,
    status: row.status,
    postType: row.post_type,
    coverImage: row.cover_image,
    siloIds: row.silo_ids ?? [],
    relatedRecipeIds: row.related_recipe_ids ?? [],
    relatedPostIds: row.related_post_ids ?? [],
    relatedProductIds: row.related_product_ids ?? [],
    clusterIds: row.cluster_ids ?? [],
    translations,
    publishedAt: row.published_at ?? row.updated_at,
    updatedAt: row.updated_at,
  };
}

export const fetchPublishedBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      `id, status, post_type, cover_image, silo_ids, related_recipe_ids, related_post_ids, related_product_ids, cluster_ids, published_at, updated_at,
       blog_post_translations ( locale, title, slug, excerpt, body, seo_title, seo_description )`,
    );
  if (error || !data) {
    console.error("[supabase-repository] fetchPublishedBlogPosts", error?.message);
    return [];
  }
  return (data as BlogPostRow[]).map(mapBlogPost);
});

/**
 * Everything `repository.ts`'s public content reads need, shaped exactly
 * like the local store's content fields. Request-memoized (via React
 * `cache`) so multiple repository calls during one render only hit
 * Supabase once per entity type.
 */
export async function fetchSupabaseContentStore(): Promise<{
  recipes: Recipe[];
  families: RecipeFamily[];
  clusters: Cluster[];
  blogPosts: BlogPost[];
}> {
  const [recipes, families, clusters, blogPosts] = await Promise.all([
    fetchPublishedRecipes(),
    fetchFamilies(),
    fetchClusters(),
    fetchPublishedBlogPosts(),
  ]);
  return { recipes, families, clusters, blogPosts };
}
