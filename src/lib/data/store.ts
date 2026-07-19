import { promises as fs } from "fs";
import path from "path";
import type {
  CommunitySubmission,
  Profile,
  Recipe,
  SavedRecipe,
  ShoppingList,
  Cluster,
} from "@/types/content";
import {
  seedClusters,
  seedLists,
  seedProfiles,
  seedRecipes,
  seedSaved,
  seedSubmissions,
} from "./seed";

export type AppStore = {
  seedVersion: number;
  recipes: Recipe[];
  clusters: Cluster[];
  profiles: Profile[];
  saved: SavedRecipe[];
  lists: ShoppingList[];
  submissions: CommunitySubmission[];
};

/** Bump when seed content changes so local/prod stores refresh. */
export const SEED_VERSION = 3;

const STORE_PATH = path.join(process.cwd(), ".data", "store.json");

function defaultStore(): AppStore {
  return {
    seedVersion: SEED_VERSION,
    recipes: structuredClone(seedRecipes),
    clusters: structuredClone(seedClusters),
    profiles: structuredClone(seedProfiles),
    saved: structuredClone(seedSaved),
    lists: structuredClone(seedLists),
    submissions: structuredClone(seedSubmissions),
  };
}

export async function readStore(): Promise<AppStore> {
  try {
    const raw = await fs.readFile(STORE_PATH, "utf8");
    const store = JSON.parse(raw) as AppStore;
    if (store.seedVersion !== SEED_VERSION) {
      const next = defaultStore();
      // Keep user data across seed refreshes
      next.saved = store.saved ?? [];
      next.lists = store.lists ?? [];
      next.submissions = store.submissions ?? [];
      next.profiles = store.profiles?.length
        ? store.profiles
        : next.profiles;
      await writeStore(next);
      return next;
    }
    return store;
  } catch {
    const store = defaultStore();
    await writeStore(store);
    return store;
  }
}

export async function writeStore(store: AppStore): Promise<void> {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  await fs.writeFile(STORE_PATH, JSON.stringify(store, null, 2), "utf8");
}

export async function updateStore(
  updater: (store: AppStore) => AppStore | void,
): Promise<AppStore> {
  const store = await readStore();
  const next = updater(store) ?? store;
  await writeStore(next);
  return next;
}
