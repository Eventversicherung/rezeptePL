import type { ComponentProps } from "react";
import { RecipeExperience } from "@/components/recipe/RecipeExperience";
import { getSessionUser } from "@/lib/auth/session";
import { listSavedRecipeIds } from "@/lib/data/repository";

type Props = Omit<
  ComponentProps<typeof RecipeExperience>,
  "isSaved" | "isLoggedIn"
>;

export async function RecipeExperienceWithSession(props: Props) {
  const user = await getSessionUser();
  const savedIds = user ? await listSavedRecipeIds(user.id) : [];
  return (
    <RecipeExperience
      {...props}
      isSaved={savedIds.includes(props.recipe.id)}
      isLoggedIn={Boolean(user)}
    />
  );
}
