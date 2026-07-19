import type { IngredientGroup, Locale, Recipe } from "@/types/content";

export function scaleAmount(amount: number, base: number, target: number) {
  if (base <= 0) return amount;
  return Math.round((amount * target) / base * 10) / 10;
}

export function groupLabelKey(group: IngredientGroup): string {
  const map: Record<IngredientGroup, string> = {
    produce: "groupProduce",
    dairy: "groupDairy",
    pantry: "groupPantry",
    spices: "groupSpices",
    polish: "groupPolish",
    other: "groupOther",
  };
  return map[group];
}

export function recipeHref(locale: Locale, recipe: Recipe) {
  return `/${locale}/rezepte/${recipe.translations[locale].slug}`;
}

export function siteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
}
