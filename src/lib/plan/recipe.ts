import type { Locale, Recipe, RecipeIngredient } from "@/types/content";

export type PlanRecipe = {
  id: string;
  title: string;
  image: string;
  minutes: number;
  servings: number;
  ingredients: RecipeIngredient[];
};

export function toPlanRecipe(recipe: Recipe, locale: Locale): PlanRecipe {
  return {
    id: recipe.id,
    title: recipe.translations[locale].title,
    image: recipe.coverImage,
    minutes: recipe.prepMinutes + recipe.cookMinutes,
    servings: recipe.servings,
    ingredients: recipe.ingredients,
  };
}
