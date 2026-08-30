import type { ComponentProps } from "react";
import { RecipeExperience } from "@/components/recipe/RecipeExperience";
import { getSessionUser } from "@/lib/auth/session";
import {
  getOwnRecipeRating,
  getRecipeRatingSummary,
} from "@/lib/data/recipe-ratings";
import { listSavedRecipeIds } from "@/lib/data/repository";

type Props = Omit<
  ComponentProps<typeof RecipeExperience>,
  "isSaved" | "isLoggedIn" | "ratingSummary" | "myRating"
>;

export async function RecipeExperienceWithSession(props: Props) {
  const user = await getSessionUser();
  const [savedIds, ratingSummary, myRating] = await Promise.all([
    user ? listSavedRecipeIds(user.id) : Promise.resolve([] as string[]),
    getRecipeRatingSummary(props.recipe.id),
    user ? getOwnRecipeRating(user.id, props.recipe.id) : Promise.resolve(null),
  ]);
  return (
    <RecipeExperience
      {...props}
      isSaved={savedIds.includes(props.recipe.id)}
      isLoggedIn={Boolean(user)}
      ratingSummary={ratingSummary}
      myRating={myRating}
    />
  );
}
