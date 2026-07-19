import { randomUUID } from "crypto";
import type {
  Cluster,
  ClusterKind,
  CommunitySubmission,
  Locale,
  Profile,
  Recipe,
  RecipeStatus,
  ShoppingList,
  ShoppingListItem,
} from "@/types/content";
import { readStore, updateStore } from "./store";

export async function listPublishedRecipes(): Promise<Recipe[]> {
  const store = await readStore();
  return store.recipes
    .filter((r) => r.status === "published")
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export async function listAllRecipes(): Promise<Recipe[]> {
  const store = await readStore();
  return store.recipes.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
}

export async function getRecipeBySlug(
  locale: Locale,
  slug: string,
): Promise<Recipe | null> {
  const store = await readStore();
  return (
    store.recipes.find(
      (r) => r.status === "published" && r.translations[locale]?.slug === slug,
    ) ?? null
  );
}

export async function getRecipeById(id: string): Promise<Recipe | null> {
  const store = await readStore();
  return store.recipes.find((r) => r.id === id) ?? null;
}

export async function searchRecipes(
  locale: Locale,
  query: string,
): Promise<Recipe[]> {
  const q = query.trim().toLowerCase();
  const recipes = await listPublishedRecipes();
  if (!q) return recipes;
  return recipes.filter((r) => {
    const t = r.translations[locale];
    return (
      t.title.toLowerCase().includes(q) ||
      t.excerpt.toLowerCase().includes(q) ||
      t.slug.includes(q)
    );
  });
}

export async function saveRecipe(recipe: Recipe): Promise<Recipe> {
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
  const id = `recipe-${randomUUID().slice(0, 8)}`;
  const now = new Date().toISOString();
  const recipe: Recipe = {
    id,
    status: "draft",
    coverImage:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&q=80",
    prepMinutes: 15,
    cookMinutes: 30,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
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
  await updateStore((store) => {
    const recipe = store.recipes.find((r) => r.id === id);
    if (recipe) {
      recipe.status = status;
      recipe.updatedAt = new Date().toISOString();
    }
  });
}

export async function listClusters(kind?: ClusterKind): Promise<Cluster[]> {
  const store = await readStore();
  return kind
    ? store.clusters.filter((c) => c.kind === kind)
    : store.clusters;
}

export async function getClusterBySlug(
  kind: ClusterKind,
  locale: Locale,
  slug: string,
): Promise<Cluster | null> {
  const store = await readStore();
  return (
    store.clusters.find(
      (c) => c.kind === kind && c.slug[locale] === slug,
    ) ?? null
  );
}

export async function recipesForCluster(clusterId: string): Promise<Recipe[]> {
  const recipes = await listPublishedRecipes();
  return recipes.filter(
    (r) =>
      r.regionIds.includes(clusterId) ||
      r.occasionIds.includes(clusterId) ||
      r.techniqueIds.includes(clusterId),
  );
}

export async function getProfile(id: string): Promise<Profile | null> {
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

export async function listSavedRecipeIds(userId: string): Promise<string[]> {
  const store = await readStore();
  return store.saved
    .filter((s) => s.userId === userId)
    .map((s) => s.recipeId);
}

export async function toggleSavedRecipe(
  userId: string,
  recipeId: string,
): Promise<boolean> {
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
  const store = await readStore();
  return store.submissions
    .filter((s) => (status ? s.status === status : true))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function createSubmission(
  input: Omit<CommunitySubmission, "id" | "createdAt" | "status">,
): Promise<CommunitySubmission> {
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
          "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&q=80",
        prepMinutes: 20,
        cookMinutes: 30,
        servings: 4,
        regionIds: [],
        occasionIds: [],
        techniqueIds: [],
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
