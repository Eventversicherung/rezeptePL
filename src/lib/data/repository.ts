import { randomUUID } from "crypto";
import { cache } from "react";
import type {
  BlogPost,
  Cluster,
  ClusterKind,
  CommunitySubmission,
  Locale,
  Profile,
  Recipe,
  RecipeCatalogItem,
  RecipeFamily,
  RecipeStatus,
  ShoppingList,
  ShoppingListItem,
} from "@/types/content";
import { filterCatalogByQuery } from "@/lib/search/recipe-search";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { isSupabaseContent } from "./source";
import { readStore, updateStore, type AppStore } from "./store";
import {
  fetchBlogPostById,
  fetchBlogPostBySlug,
  fetchRecipeById,
  fetchRecipeBySlug,
  fetchSupabaseContentStore,
} from "./supabase-repository";
import * as accountDb from "./supabase-account";
import * as cms from "./supabase-cms";

type ContentStore = Pick<AppStore, "recipes" | "families" | "clusters" | "blogPosts">;

const readContentStore = cache(async (): Promise<ContentStore> => {
  if (isSupabaseContent()) {
    return fetchSupabaseContentStore();
  }
  return readStore();
});

export async function listPublishedRecipes(): Promise<Recipe[]> {
  const store = await readContentStore();
  return store.recipes
    .filter((r) => r.status === "published")
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export async function listFamilies(): Promise<RecipeFamily[]> {
  const store = await readContentStore();
  return store.families ?? [];
}

export async function getFamilyById(
  id: string,
): Promise<RecipeFamily | null> {
  const store = await readContentStore();
  return store.families.find((f) => f.id === id) ?? null;
}

export async function getFamilyBySlug(
  locale: Locale,
  slug: string,
): Promise<RecipeFamily | null> {
  const store = await readContentStore();
  return (
    store.families.find((f) => f.translations[locale]?.slug === slug) ?? null
  );
}

export async function getFamilyVariants(
  familyId: string,
): Promise<Recipe[]> {
  const store = await readContentStore();
  const family = store.families.find((f) => f.id === familyId);
  if (!family) return [];
  return family.variantIds
    .map((id) => store.recipes.find((r) => r.id === id && r.status === "published"))
    .filter((r): r is Recipe => Boolean(r));
}

export async function getRecipeInFamily(
  locale: Locale,
  familySlug: string,
  variantSlug: string,
): Promise<{ family: RecipeFamily; recipe: Recipe } | null> {
  const family = await getFamilyBySlug(locale, familySlug);
  if (!family) return null;
  const variants = await getFamilyVariants(family.id);
  const recipe =
    variants.find((r) => r.translations[locale]?.slug === variantSlug) ?? null;
  if (!recipe) return null;
  const full = isSupabaseContent()
    ? ((await fetchRecipeById(recipe.id)) ?? recipe)
    : recipe;
  return { family, recipe: full };
}

/**
 * Resolve a family variant by slug in the current locale, or by the other
 * locale's slug (wrong-locale / shared links). Caller should redirect when
 * `needsRedirect` is true.
 */
export async function resolveRecipeInFamily(
  locale: Locale,
  familySlug: string,
  variantSlug: string,
): Promise<{ family: RecipeFamily; recipe: Recipe; needsRedirect: boolean } | null> {
  const exact = await getRecipeInFamily(locale, familySlug, variantSlug);
  if (exact) return { ...exact, needsRedirect: false };

  const store = await readContentStore();
  const family =
    store.families.find(
      (f) =>
        f.translations.de?.slug === familySlug ||
        f.translations.pl?.slug === familySlug,
    ) ?? null;
  if (!family) return null;

  const variants = await getFamilyVariants(family.id);
  const recipe =
    variants.find(
      (r) =>
        r.translations.de?.slug === variantSlug ||
        r.translations.pl?.slug === variantSlug,
    ) ?? null;
  if (!recipe) return null;

  const canonicalFamily = family.translations[locale]?.slug === familySlug;
  const canonicalVariant = recipe.translations[locale]?.slug === variantSlug;
  const full = isSupabaseContent()
    ? ((await fetchRecipeById(recipe.id)) ?? recipe)
    : recipe;
  return {
    family,
    recipe: full,
    needsRedirect: !(canonicalFamily && canonicalVariant),
  };
}

/** Family by either locale's slug (for cross-locale redirects). */
export async function resolveFamilyBySlug(
  locale: Locale,
  slug: string,
): Promise<{ family: RecipeFamily; needsRedirect: boolean } | null> {
  const exact = await getFamilyBySlug(locale, slug);
  if (exact) return { family: exact, needsRedirect: false };

  const store = await readContentStore();
  const family =
    store.families.find(
      (f) =>
        f.translations.de?.slug === slug || f.translations.pl?.slug === slug,
    ) ?? null;
  if (!family) return null;
  return { family, needsRedirect: true };
}

function buildRecipeCatalog(
  recipes: Recipe[],
  families: RecipeFamily[],
): RecipeCatalogItem[] {
  const familyById = new Map(families.map((f) => [f.id, f]));
  const seenFamilies = new Set<string>();
  const items: RecipeCatalogItem[] = [];

  for (const recipe of recipes) {
    if (recipe.familyId) {
      if (seenFamilies.has(recipe.familyId)) continue;
      const family = familyById.get(recipe.familyId);
      if (!family) continue;
      seenFamilies.add(recipe.familyId);
      const defaultRecipe =
        recipes.find((r) => r.id === family.defaultVariantId) ?? recipe;
      const variants = family.variantIds
        .map((id) => recipes.find((r) => r.id === id))
        .filter((r): r is Recipe => Boolean(r));
      items.push({ kind: "family", family, defaultRecipe, variants });
      continue;
    }

    items.push({ kind: "recipe", recipe });
  }

  return items;
}

/** Index/cluster cards: one entry per family + standalone recipes. */
export async function listRecipeCatalog(
  locale: Locale,
  query = "",
): Promise<RecipeCatalogItem[]> {
  const [recipes, families, clusters] = await Promise.all([
    listPublishedRecipes(),
    listFamilies(),
    listClusters(),
  ]);
  const items = buildRecipeCatalog(recipes, families);
  if (!query.trim()) return items;
  return filterCatalogByQuery(items, clusters, locale, query);
}

export async function listPublishedBlogPosts(): Promise<BlogPost[]> {
  const store = await readContentStore();
  return (store.blogPosts ?? [])
    .filter((p) => p.status === "published")
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getBlogPostBySlug(
  locale: Locale,
  slug: string,
): Promise<BlogPost | null> {
  if (isSupabaseContent()) {
    return fetchBlogPostBySlug(locale, slug);
  }
  const store = await readContentStore();
  return (
    (store.blogPosts ?? []).find(
      (p) =>
        p.status === "published" && p.translations[locale]?.slug === slug,
    ) ?? null
  );
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  if (isSupabaseContent()) {
    return fetchBlogPostById(id);
  }
  const store = await readContentStore();
  return (store.blogPosts ?? []).find((p) => p.id === id) ?? null;
}

/** Admin listing including drafts. */
export async function listAllRecipes(): Promise<Recipe[]> {
  if (isSupabaseContent()) {
    return cms.listAllRecipes();
  }
  const store = await readStore();
  return store.recipes.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export async function listAllBlogPosts(): Promise<BlogPost[]> {
  if (isSupabaseContent()) {
    return cms.listAllBlogPosts();
  }
  const store = await readStore();
  return (store.blogPosts ?? []).sort((a, b) =>
    b.updatedAt.localeCompare(a.updatedAt),
  );
}

export async function getRecipeBySlug(
  locale: Locale,
  slug: string,
): Promise<Recipe | null> {
  if (isSupabaseContent()) {
    return fetchRecipeBySlug(locale, slug);
  }
  const store = await readContentStore();
  return (
    store.recipes.find(
      (r) => r.status === "published" && r.translations[locale]?.slug === slug,
    ) ?? null
  );
}

/** Public detail + admin edit. Published rows come from the catalog/detail API. */
export async function getRecipeById(id: string): Promise<Recipe | null> {
  if (isSupabaseContent()) {
    const published = await fetchRecipeById(id);
    if (published) return published;
    return cms.getRecipeById(id);
  }
  const store = await readContentStore();
  const published = store.recipes.find((r) => r.id === id) ?? null;
  if (published) return published;
  const local = await readStore();
  return local.recipes.find((r) => r.id === id) ?? null;
}

export async function getAdminBlogPostById(
  id: string,
): Promise<BlogPost | null> {
  if (isSupabaseContent()) {
    return cms.getBlogPostById(id);
  }
  const store = await readStore();
  return (store.blogPosts ?? []).find((p) => p.id === id) ?? null;
}

export async function saveBlogPost(post: BlogPost): Promise<BlogPost> {
  if (isSupabaseContent()) {
    return cms.saveBlogPost(post);
  }
  const now = new Date().toISOString();
  const next = { ...post, updatedAt: now };
  await updateStore((store) => {
    store.blogPosts = store.blogPosts ?? [];
    const idx = store.blogPosts.findIndex((p) => p.id === next.id);
    if (idx >= 0) store.blogPosts[idx] = next;
    else store.blogPosts.push(next);
  });
  return next;
}

export async function createBlogDraft(): Promise<BlogPost> {
  if (isSupabaseContent()) {
    return cms.createBlogDraft();
  }
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

export async function searchRecipes(
  locale: Locale,
  query: string,
): Promise<Recipe[]> {
  const catalog = await listRecipeCatalog(locale, query);
  const recipes: Recipe[] = [];
  for (const item of catalog) {
    if (item.kind === "recipe") recipes.push(item.recipe);
    else recipes.push(item.defaultRecipe);
  }
  return recipes;
}

export async function saveRecipe(recipe: Recipe): Promise<Recipe> {
  if (isSupabaseContent()) {
    return cms.saveRecipe(recipe);
  }
  const now = new Date().toISOString();
  const next = { ...recipe, updatedAt: now };
  await updateStore((store) => {
    const idx = store.recipes.findIndex((r) => r.id === next.id);
    if (idx >= 0) store.recipes[idx] = next;
    else store.recipes.push({ ...next, createdAt: now });
  });
  return next;
}

export async function createRecipeDraft(): Promise<Recipe> {
  if (isSupabaseContent()) {
    return cms.createRecipeDraft();
  }
  const id = `recipe-${randomUUID().slice(0, 8)}`;
  const now = new Date().toISOString();
  const recipe: Recipe = {
    id,
    status: "draft",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pierogi/ffa4f850-6746-4b55-8710-b19e03abf532.webp",
    prepMinutes: 15,
    cookMinutes: 30,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: [],
    videoUrl: null,
    translations: {
      de: {
        title: "Neues Rezept",
        slug: `neues-rezept-${id.slice(-4)}`,
        excerpt: "",
        steps: [{ text: "" }],
        article: "",
        seoTitle: "",
        seoDescription: "",
      },
      pl: {
        title: "Nowy przepis",
        slug: `nowy-przepis-${id.slice(-4)}`,
        excerpt: "",
        steps: [{ text: "" }],
        article: "",
        seoTitle: "",
        seoDescription: "",
      },
    },
    ingredients: [],
    createdAt: now,
    updatedAt: now,
  };
  await saveRecipe(recipe);
  return recipe;
}

export async function setRecipeStatus(
  id: string,
  status: RecipeStatus,
): Promise<void> {
  if (isSupabaseContent()) {
    await cms.setRecipeStatus(id, status);
    return;
  }
  await updateStore((store) => {
    const recipe = store.recipes.find((r) => r.id === id);
    if (recipe) {
      recipe.status = status;
      recipe.updatedAt = new Date().toISOString();
    }
  });
}

export async function listClusters(kind?: ClusterKind): Promise<Cluster[]> {
  const store = await readContentStore();
  return kind
    ? store.clusters.filter((c) => c.kind === kind)
    : store.clusters;
}

export async function getClusterBySlug(
  kind: ClusterKind,
  locale: Locale,
  slug: string,
): Promise<Cluster | null> {
  const store = await readContentStore();
  return (
    store.clusters.find(
      (c) => c.kind === kind && c.slug[locale] === slug,
    ) ?? null
  );
}

/** Cluster by either locale's slug (for cross-locale redirects). */
export async function resolveClusterBySlug(
  kind: ClusterKind,
  locale: Locale,
  slug: string,
): Promise<{ cluster: Cluster; needsRedirect: boolean } | null> {
  const exact = await getClusterBySlug(kind, locale, slug);
  if (exact) return { cluster: exact, needsRedirect: false };

  const store = await readContentStore();
  const cluster =
    store.clusters.find(
      (c) =>
        c.kind === kind &&
        (c.slug.de === slug || c.slug.pl === slug),
    ) ?? null;
  if (!cluster) return null;
  return { cluster, needsRedirect: true };
}

export async function recipesForCluster(clusterId: string): Promise<Recipe[]> {
  const recipes = await listPublishedRecipes();
  const families = await listFamilies();
  const familyClusterMatch = (familyId: string) => {
    const f = families.find((x) => x.id === familyId);
    if (!f) return false;
    return (
      f.regionIds.includes(clusterId) ||
      f.occasionIds.includes(clusterId) ||
      f.techniqueIds.includes(clusterId) ||
      (f.categoryIds ?? []).includes(clusterId)
    );
  };
  return recipes.filter(
    (r) =>
      r.regionIds.includes(clusterId) ||
      r.occasionIds.includes(clusterId) ||
      r.techniqueIds.includes(clusterId) ||
      (r.categoryIds ?? []).includes(clusterId) ||
      (r.familyId ? familyClusterMatch(r.familyId) : false),
  );
}

/** Catalog items for a cluster (families once). */
export async function catalogForCluster(
  clusterId: string,
  locale: Locale,
): Promise<RecipeCatalogItem[]> {
  const recipes = await recipesForCluster(clusterId);
  const families = await listFamilies();
  const familyById = new Map(families.map((f) => [f.id, f]));
  const seen = new Set<string>();
  const items: RecipeCatalogItem[] = [];
  for (const recipe of recipes) {
    if (recipe.familyId) {
      if (seen.has(recipe.familyId)) continue;
      seen.add(recipe.familyId);
      const family = familyById.get(recipe.familyId);
      if (!family) continue;
      const defaultRecipe =
        recipes.find((r) => r.id === family.defaultVariantId) ?? recipe;
      const variants = family.variantIds
        .map((id) => recipes.find((r) => r.id === id))
        .filter((r): r is Recipe => Boolean(r));
      items.push({ kind: "family", family, defaultRecipe, variants });
    } else {
      items.push({ kind: "recipe", recipe });
    }
  }
  void locale;
  return items;
}

export async function getProfile(id: string): Promise<Profile | null> {
  if (isSupabaseConfigured()) {
    return accountDb.getProfileById(id);
  }
  const store = await readStore();
  return store.profiles.find((p) => p.id === id) ?? null;
}

export async function getProfileByEmail(
  email: string,
): Promise<Profile | null> {
  const store = await readStore();
  return (
    store.profiles.find(
      (p) => p.email.toLowerCase() === email.toLowerCase(),
    ) ?? null
  );
}

export async function upsertProfile(profile: Profile): Promise<Profile> {
  await updateStore((store) => {
    const idx = store.profiles.findIndex((p) => p.id === profile.id);
    if (idx >= 0) store.profiles[idx] = profile;
    else store.profiles.push(profile);
  });
  return profile;
}

export async function updateOwnDisplayName(
  userId: string,
  displayName: string,
): Promise<void> {
  if (isSupabaseConfigured()) {
    await accountDb.updateOwnDisplayName(userId, displayName);
    return;
  }
  await updateStore((store) => {
    const profile = store.profiles.find((p) => p.id === userId);
    if (profile) profile.displayName = displayName;
  });
}

export async function listSavedRecipeIds(userId: string): Promise<string[]> {
  if (isSupabaseConfigured()) {
    return accountDb.listSavedRecipeIds(userId);
  }
  const store = await readStore();
  return store.saved
    .filter((s) => s.userId === userId)
    .map((s) => s.recipeId);
}

export async function toggleSavedRecipe(
  userId: string,
  recipeId: string,
): Promise<boolean> {
  if (isSupabaseConfigured()) {
    return accountDb.toggleSavedRecipe(userId, recipeId);
  }
  let saved = false;
  await updateStore((store) => {
    const idx = store.saved.findIndex(
      (s) => s.userId === userId && s.recipeId === recipeId,
    );
    if (idx >= 0) {
      store.saved.splice(idx, 1);
      saved = false;
    } else {
      store.saved.push({
        userId,
        recipeId,
        createdAt: new Date().toISOString(),
      });
      saved = true;
    }
  });
  return saved;
}

export async function getOrCreateShoppingList(
  userId: string,
): Promise<ShoppingList> {
  if (isSupabaseConfigured()) {
    return accountDb.getOrCreateShoppingList(userId);
  }
  const store = await readStore();
  const existing = store.lists.find((l) => l.userId === userId);
  if (existing) return existing;
  const list: ShoppingList = {
    id: `list-${randomUUID().slice(0, 8)}`,
    userId,
    name: "Meine Liste",
    items: [],
    updatedAt: new Date().toISOString(),
  };
  await updateStore((s) => {
    s.lists.push(list);
  });
  return list;
}

export async function mergeIngredientsIntoList(
  userId: string,
  items: ShoppingListItem[],
): Promise<ShoppingList> {
  if (isSupabaseConfigured()) {
    return accountDb.mergeIngredientsIntoList(userId, items);
  }
  const list = await getOrCreateShoppingList(userId);
  await updateStore((store) => {
    const target = store.lists.find((l) => l.id === list.id);
    if (!target) return;
    for (const item of items) {
      const existing = target.items.find(
        (i) =>
          i.name === item.name &&
          i.unit === item.unit &&
          !i.checked &&
          i.recipeId === item.recipeId,
      );
      if (existing) existing.amount += item.amount;
      else target.items.push(item);
    }
    target.updatedAt = new Date().toISOString();
  });
  return (await getOrCreateShoppingList(userId));
}

export async function updateListItems(
  listId: string,
  items: ShoppingListItem[],
): Promise<void> {
  if (isSupabaseConfigured()) {
    await accountDb.updateListItems(listId, items);
    return;
  }
  await updateStore((store) => {
    const list = store.lists.find((l) => l.id === listId);
    if (!list) return;
    list.items = items;
    list.updatedAt = new Date().toISOString();
  });
}

export async function listSubmissions(
  status?: CommunitySubmission["status"],
): Promise<CommunitySubmission[]> {
  if (isSupabaseConfigured()) {
    return accountDb.listSubmissions(status);
  }
  const store = await readStore();
  return store.submissions
    .filter((s) => (status ? s.status === status : true))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function listSubmissionsByUser(
  userId: string,
): Promise<CommunitySubmission[]> {
  if (isSupabaseConfigured()) {
    return accountDb.listSubmissionsByUser(userId);
  }
  const store = await readStore();
  return store.submissions
    .filter((s) => s.userId === userId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function createSubmission(
  input: Omit<CommunitySubmission, "id" | "createdAt" | "status">,
): Promise<CommunitySubmission> {
  if (isSupabaseConfigured()) {
    return accountDb.createSubmission(input);
  }
  const submission: CommunitySubmission = {
    ...input,
    id: `sub-${randomUUID().slice(0, 8)}`,
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  await updateStore((store) => {
    store.submissions.push(submission);
  });
  return submission;
}

export async function moderateSubmission(
  id: string,
  status: "approved" | "rejected",
): Promise<void> {
  if (isSupabaseConfigured()) {
    await cms.moderateSubmission(id, status);
    return;
  }
  await updateStore((store) => {
    const sub = store.submissions.find((s) => s.id === id);
    if (!sub) return;
    sub.status = status;
    if (status === "approved") {
      const recipeId = `recipe-${randomUUID().slice(0, 8)}`;
      const now = new Date().toISOString();
      const slugBase = sub.title
        .toLowerCase()
        .replace(/[^a-z0-9äöüßąćęłńóśźż]+/gi, "-")
        .replace(/^-|-$/g, "");
      const steps = sub.steps.map((text) => ({ text }));
      const recipe: Recipe = {
        id: recipeId,
        status: "published",
        coverImage:
          "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pierogi/ffa4f850-6746-4b55-8710-b19e03abf532.webp",
        prepMinutes: 20,
        cookMinutes: 30,
        servings: 4,
        regionIds: [],
        occasionIds: [],
        techniqueIds: [],
        categoryIds: [],
        authorId: sub.userId,
        videoUrl: null,
        translations: {
          de: {
            title: sub.locale === "de" ? sub.title : `${sub.title}`,
            slug: `${slugBase}-de`,
            excerpt: sub.excerpt,
            steps,
            seoTitle: sub.title,
            seoDescription: sub.excerpt,
          },
          pl: {
            title: sub.locale === "pl" ? sub.title : `${sub.title}`,
            slug: `${slugBase}-pl`,
            excerpt: sub.excerpt,
            steps,
            seoTitle: sub.title,
            seoDescription: sub.excerpt,
          },
        },
        ingredients: sub.ingredients.map((line, i) => ({
          id: `${recipeId}-ing-${i}`,
          name: { de: line, pl: line },
          amount: 1,
          unit: { de: "", pl: "" },
          group: "other" as const,
        })),
        createdAt: now,
        updatedAt: now,
      };
      store.recipes.push(recipe);
    }
  });
}
