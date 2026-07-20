import { promises as fs } from "fs";
import path from "path";
import type {
  BlogPost,
  CommunitySubmission,
  Profile,
  Recipe,
  RecipeFamily,
  SavedRecipe,
  ShoppingList,
  Cluster,
} from "@/types/content";
import {
  seedBlogPosts,
  seedClusters,
  seedFamilies,
  seedLists,
  seedProfiles,
  seedRecipes,
  seedSaved,
  seedSubmissions,
} from "./seed";

export type AppStore = {
  seedVersion: number;
  recipes: Recipe[];
  families: RecipeFamily[];
  blogPosts: BlogPost[];
  clusters: Cluster[];
  profiles: Profile[];
  saved: SavedRecipe[];
  lists: ShoppingList[];
  submissions: CommunitySubmission[];
};

/** Bump when seed content changes so local/prod stores refresh. */
export const SEED_VERSION = 18;

const STORE_PATH = path.join(process.cwd(), ".data", "store.json");

/**
 * Vercel / Lambda: filesystem under cwd is read-only.
 * Use in-memory seed there; persist to disk only in local/dev.
 */
function useMemoryStore(): boolean {
  return (
    process.env.VERCEL === "1" ||
    process.env.AWS_LAMBDA_FUNCTION_NAME != null ||
    process.env.DATA_STORE === "memory"
  );
}

let memoryStore: AppStore | null = null;

function defaultStore(): AppStore {
  return {
    seedVersion: SEED_VERSION,
    recipes: structuredClone(seedRecipes),
    families: structuredClone(seedFamilies),
    blogPosts: structuredClone(seedBlogPosts),
    clusters: structuredClone(seedClusters),
    profiles: structuredClone(seedProfiles),
    saved: structuredClone(seedSaved),
    lists: structuredClone(seedLists),
    submissions: structuredClone(seedSubmissions),
  };
}

function normalizeStore(store: AppStore): AppStore {
  return {
    ...store,
    families: store.families?.length ? store.families : structuredClone(seedFamilies),
    blogPosts: store.blogPosts?.length
      ? store.blogPosts
      : structuredClone(seedBlogPosts),
    clusters: store.clusters?.length ? store.clusters : structuredClone(seedClusters),
    recipes: store.recipes?.length ? store.recipes : structuredClone(seedRecipes),
    profiles: store.profiles ?? [],
    saved: store.saved ?? [],
    lists: store.lists ?? [],
    submissions: store.submissions ?? [],
  };
}

export async function readStore(): Promise<AppStore> {
  if (useMemoryStore()) {
    if (!memoryStore || memoryStore.seedVersion !== SEED_VERSION) {
      memoryStore = defaultStore();
    }
    return memoryStore;
  }

  try {
    const raw = await fs.readFile(STORE_PATH, "utf8");
    const store = normalizeStore(JSON.parse(raw) as AppStore);
    if (store.seedVersion !== SEED_VERSION) {
      const next = defaultStore();
      next.saved = store.saved ?? [];
      next.lists = store.lists ?? [];
      next.submissions = store.submissions ?? [];
      next.profiles = store.profiles?.length ? store.profiles : next.profiles;
      await writeStore(next);
      return next;
    }
    memoryStore = store;
    return store;
  } catch {
    const store = defaultStore();
    await writeStore(store);
    return store;
  }
}

export async function writeStore(store: AppStore): Promise<void> {
  memoryStore = store;
  if (useMemoryStore()) return;

  try {
    await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
    await fs.writeFile(STORE_PATH, JSON.stringify(store, null, 2), "utf8");
  } catch (err) {
    // Read-only host (or disk full): keep serving from memory
    console.warn("[store] filesystem write skipped, using memory", err);
  }
}

export async function updateStore(
  updater: (store: AppStore) => AppStore | void,
): Promise<AppStore> {
  const store = await readStore();
  const next = updater(store) ?? store;
  await writeStore(next);
  return next;
}
