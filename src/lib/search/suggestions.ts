import {
  listClusters,
  listFamilies,
  listPublishedRecipes,
} from "@/lib/data/repository";
import type { Locale, Recipe, RecipeCatalogItem, RecipeFamily } from "@/types/content";
import { searchRecipeHits } from "./recipe-search";
import { SEARCH_RESULT_LIMIT, type SearchHit } from "./types";

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

export async function searchRecipeSuggestions(
  locale: Locale,
  query: string,
  limit = SEARCH_RESULT_LIMIT,
): Promise<SearchHit[]> {
  const [recipes, families, clusters] = await Promise.all([
    listPublishedRecipes(),
    listFamilies(),
    listClusters(),
  ]);
  return searchRecipeHits(
    buildRecipeCatalog(recipes, families),
    clusters,
    locale,
    query,
    limit,
  );
}
