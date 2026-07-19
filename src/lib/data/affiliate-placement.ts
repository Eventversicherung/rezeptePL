/**
 * Wave 2 default: monetize via gear/buying-guide blog posts on recipes.
 * Inline affiliate cards on recipe pages stay off unless "mixed" or "recipe-inline".
 */
export type AffiliatePlacement = "guide-only" | "mixed" | "recipe-inline";

export function getAffiliatePlacement(): AffiliatePlacement {
  const raw = process.env.NEXT_PUBLIC_AFFILIATE_PLACEMENT?.trim();
  if (raw === "mixed" || raw === "recipe-inline" || raw === "guide-only") {
    return raw;
  }
  return "guide-only";
}

export function recipeInlineAffiliateLimit(): number {
  const placement = getAffiliatePlacement();
  if (placement === "guide-only") return 0;
  if (placement === "mixed") return 1;
  return 3;
}
