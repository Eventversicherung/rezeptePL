import type { BlogPost, Recipe } from "@/types/content";
import { getAffiliateForRecipe } from "./affiliate-products";
import { recipeInlineAffiliateLimit } from "./affiliate-placement";
import { getBlogPostById } from "./repository";

/** Buying-guides / gear posts linked from a recipe (for recipe page cards). */
export async function getRelatedGuidesForRecipe(
  recipe: Recipe,
  extraPostIds: string[] = [],
): Promise<{
  gearGuides: BlogPost[];
  affiliateProducts: ReturnType<typeof getAffiliateForRecipe>;
}> {
  const ids = [...(recipe.relatedPostIds ?? []), ...extraPostIds];
  const gearGuides: BlogPost[] = [];
  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) continue;
    const post = await getBlogPostById(id);
    if (!post || post.status !== "published") continue;
    const isGear =
      post.postType === "buying-guide" || post.siloIds.includes("gear");
    if (!isGear) continue;
    seen.add(id);
    gearGuides.push(post);
  }
  const limit = recipeInlineAffiliateLimit();
  const affiliateProducts =
    limit > 0 ? getAffiliateForRecipe(recipe.id, limit) : [];
  return { gearGuides, affiliateProducts };
}
