import "server-only";
import { randomUUID } from "crypto";
import { invalidateContentCache } from "@/lib/data/content-cache";
import {
  BLOG_DETAIL_SELECT,
  RECIPE_DETAIL_SELECT,
  hydrateBlogPostRows,
  hydrateRecipeRows,
} from "@/lib/data/supabase-repository";
import { createClient } from "@/lib/supabase/server";
import type { BlogPost, Locale, Recipe, RecipeStatus } from "@/types/content";

async function staffClient() {
  return createClient();
}

export async function listAllRecipes(): Promise<Recipe[]> {
  const supabase = await staffClient();
  const { data, error } = await supabase
    .from("recipes")
    .select(RECIPE_DETAIL_SELECT)
    .order("updated_at", { ascending: false });
  if (error || !data) {
    console.error("[supabase-cms] listAllRecipes", error?.message);
    return [];
  }
  return hydrateRecipeRows(data);
}

export async function getRecipeById(id: string): Promise<Recipe | null> {
  const supabase = await staffClient();
  const { data, error } = await supabase
    .from("recipes")
    .select(RECIPE_DETAIL_SELECT)
    .eq("id", id)
    .maybeSingle();
  if (error || !data) return null;
  const [recipe] = await hydrateRecipeRows([data]);
  return recipe ?? null;
}

function emptyTranslation(locale: Locale, title: string, slug: string) {
  return {
    title,
    slug,
    excerpt: "",
    steps: [{ text: "" }],
    article: "",
    seoTitle: "",
    seoDescription: "",
  };
}

export async function createRecipeDraft(): Promise<Recipe> {
  const id = `recipe-${randomUUID().slice(0, 8)}`;
  const now = new Date().toISOString();
  const recipe: Recipe = {
    id,
    status: "draft",
    coverImage: "",
    prepMinutes: 15,
    cookMinutes: 30,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: [],
    videoUrl: null,
    translations: {
      de: emptyTranslation("de", "Neues Rezept", `neues-rezept-${id.slice(-4)}`),
      pl: emptyTranslation("pl", "Nowy przepis", `nowy-przepis-${id.slice(-4)}`),
    },
    ingredients: [],
    createdAt: now,
    updatedAt: now,
  };
  return saveRecipe(recipe);
}

export async function saveRecipe(recipe: Recipe): Promise<Recipe> {
  const supabase = await staffClient();
  const now = new Date().toISOString();
  const next = { ...recipe, updatedAt: now };

  const { error: recipeError } = await supabase.from("recipes").upsert({
    id: next.id,
    status: next.status,
    cover_image: next.coverImage,
    prep_minutes: next.prepMinutes,
    cook_minutes: next.cookMinutes,
    servings: next.servings,
    video_url: next.videoUrl ?? null,
    family_id: next.familyId ?? null,
    variant_label: next.variantLabel ?? null,
    variant_image: next.variantImage ?? null,
    related_post_ids: next.relatedPostIds ?? [],
    author_id: next.authorId ?? null,
    updated_at: now,
  });
  if (recipeError) {
    throw new Error(recipeError.message);
  }

  for (const locale of ["de", "pl"] as Locale[]) {
    const t = next.translations[locale];
    const { error } = await supabase.from("recipe_translations").upsert({
      recipe_id: next.id,
      locale,
      title: t.title,
      slug: t.slug,
      excerpt: t.excerpt,
      steps: t.steps,
      article: t.article ?? "",
      seo_title: t.seoTitle,
      seo_description: t.seoDescription,
    });
    if (error) throw new Error(error.message);
  }

  await supabase.from("recipe_ingredients").delete().eq("recipe_id", next.id);
  if (next.ingredients.length) {
    const { error } = await supabase.from("recipe_ingredients").insert(
      next.ingredients.map((ing, index) => ({
        id: ing.id || `${next.id}-ing-${index}`,
        recipe_id: next.id,
        sort_order: index,
        amount: ing.amount,
        unit_de: ing.unit.de,
        unit_pl: ing.unit.pl,
        name_de: ing.name.de,
        name_pl: ing.name.pl,
        group_name: ing.group,
        store_hint_de: ing.storeHintDe ?? null,
        substitute_de: ing.substitute?.de ?? null,
        substitute_pl: ing.substitute?.pl ?? null,
      })),
    );
    if (error) throw new Error(error.message);
  }

  const clusterIds = [
    ...next.regionIds,
    ...next.occasionIds,
    ...next.techniqueIds,
    ...next.categoryIds,
  ];
  await supabase.from("recipe_clusters").delete().eq("recipe_id", next.id);
  if (clusterIds.length) {
    const { error } = await supabase.from("recipe_clusters").insert(
      clusterIds.map((cluster_id) => ({
        recipe_id: next.id,
        cluster_id,
      })),
    );
    if (error) throw new Error(error.message);
  }

  invalidateContentCache();
  return next;
}

export async function setRecipeStatus(
  id: string,
  status: RecipeStatus,
): Promise<void> {
  const supabase = await staffClient();
  const { error } = await supabase
    .from("recipes")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id);
  if (error) throw new Error(error.message);
  invalidateContentCache();
}

export async function listAllBlogPosts(): Promise<BlogPost[]> {
  const supabase = await staffClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select(BLOG_DETAIL_SELECT)
    .order("updated_at", { ascending: false });
  if (error || !data) {
    console.error("[supabase-cms] listAllBlogPosts", error?.message);
    return [];
  }
  return hydrateBlogPostRows(data);
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  const supabase = await staffClient();
  const { data, error } = await supabase
    .from("blog_posts")
    .select(BLOG_DETAIL_SELECT)
    .eq("id", id)
    .maybeSingle();
  if (error || !data) return null;
  return hydrateBlogPostRows([data])[0] ?? null;
}

export async function createBlogDraft(): Promise<BlogPost> {
  const id = `post-${randomUUID().slice(0, 8)}`;
  const now = new Date().toISOString();
  const post: BlogPost = {
    id,
    status: "draft",
    postType: "guide",
    coverImage: "",
    siloIds: [],
    relatedRecipeIds: [],
    relatedPostIds: [],
    relatedProductIds: [],
    clusterIds: [],
    translations: {
      de: {
        title: "Neuer Beitrag",
        slug: `neuer-beitrag-${id.slice(-4)}`,
        excerpt: "",
        body: "",
        seoTitle: "",
        seoDescription: "",
      },
      pl: {
        title: "Nowy wpis",
        slug: `nowy-wpis-${id.slice(-4)}`,
        excerpt: "",
        body: "",
        seoTitle: "",
        seoDescription: "",
      },
    },
    publishedAt: now,
    updatedAt: now,
  };
  return saveBlogPost(post);
}

export async function saveBlogPost(post: BlogPost): Promise<BlogPost> {
  const supabase = await staffClient();
  const now = new Date().toISOString();
  const next = { ...post, updatedAt: now };
  const { error: postError } = await supabase.from("blog_posts").upsert({
    id: next.id,
    status: next.status,
    post_type: next.postType,
    cover_image: next.coverImage,
    silo_ids: next.siloIds,
    related_recipe_ids: next.relatedRecipeIds,
    related_post_ids: next.relatedPostIds,
    related_product_ids: next.relatedProductIds,
    cluster_ids: next.clusterIds ?? [],
    published_at:
      next.status === "published" ? next.publishedAt || now : next.publishedAt,
    updated_at: now,
  });
  if (postError) throw new Error(postError.message);

  for (const locale of ["de", "pl"] as Locale[]) {
    const t = next.translations[locale];
    const { error } = await supabase.from("blog_post_translations").upsert({
      post_id: next.id,
      locale,
      title: t.title,
      slug: t.slug,
      excerpt: t.excerpt,
      body: t.body,
      seo_title: t.seoTitle,
      seo_description: t.seoDescription,
    });
    if (error) throw new Error(error.message);
  }

  invalidateContentCache();
  return next;
}

export async function moderateSubmission(
  id: string,
  status: "approved" | "rejected",
): Promise<void> {
  const supabase = await staffClient();
  const { data: sub, error } = await supabase
    .from("community_submissions")
    .select(
      "id, user_id, status, locale, title, excerpt, steps, ingredients, created_at",
    )
    .eq("id", id)
    .maybeSingle();
  if (error || !sub) throw new Error(error?.message ?? "Not found");

  const { error: updateError } = await supabase
    .from("community_submissions")
    .update({ status })
    .eq("id", id);
  if (updateError) throw new Error(updateError.message);

  if (status !== "approved") return;

  const submission = sub as {
    user_id: string;
    locale: Locale;
    title: string;
    excerpt: string;
    steps: string[];
    ingredients: string[];
  };
  const recipeId = `recipe-${randomUUID().slice(0, 8)}`;
  const slugBase = submission.title
    .toLowerCase()
    .replace(/[^a-z0-9äöüßąćęłńóśźż]+/gi, "-")
    .replace(/^-|-$/g, "");
  const steps = (submission.steps ?? []).map((text) => ({ text }));
  const now = new Date().toISOString();
  await saveRecipe({
    id: recipeId,
    status: "published",
    coverImage: "",
    prepMinutes: 20,
    cookMinutes: 30,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: [],
    authorId: submission.user_id,
    videoUrl: null,
    translations: {
      de: {
        title: submission.title,
        slug: `${slugBase}-de`,
        excerpt: submission.excerpt,
        steps,
        seoTitle: submission.title,
        seoDescription: submission.excerpt,
      },
      pl: {
        title: submission.title,
        slug: `${slugBase}-pl`,
        excerpt: submission.excerpt,
        steps,
        seoTitle: submission.title,
        seoDescription: submission.excerpt,
      },
    },
    ingredients: (submission.ingredients ?? []).map((line, i) => ({
      id: `${recipeId}-ing-${i}`,
      name: { de: line, pl: line },
      amount: 1,
      unit: { de: "", pl: "" },
      group: "other",
    })),
    createdAt: now,
    updatedAt: now,
  });
  void id;
}
