import type { Locale, Recipe, RecipeFamily } from "@/types/content";

/** Public path (without locale prefix) for a recipe or family variant. */
export function recipePath(
  recipe: Recipe,
  locale: Locale,
  family?: RecipeFamily | null,
): string {
  if (family) {
    return `/rezepte/${family.translations[locale].slug}/${recipe.translations[locale].slug}`;
  }
  return `/rezepte/${recipe.translations[locale].slug}`;
}

export function familyPath(family: RecipeFamily, locale: Locale): string {
  return `/rezepte/${family.translations[locale].slug}`;
}

export function familyVariantPath(
  family: RecipeFamily,
  recipe: Recipe,
  locale: Locale,
): string {
  return `/rezepte/${family.translations[locale].slug}/${recipe.translations[locale].slug}`;
}

export function blogPath(slug: string): string {
  return `/blog/${slug}`;
}
