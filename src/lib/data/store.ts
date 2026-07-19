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
  recipes: Recipe[];
  clusters: Cluster[];
  profiles: Profile[];
  saved: SavedRecipe[];
  lists: ShoppingList[];
  submissions: CommunitySubmission[];
};

const STORE_PATH = path.join(process.cwd(), ".data", "store.json");

function defaultStore(): AppStore {
  return {
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
    return JSON.parse(raw) as AppStore;
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
