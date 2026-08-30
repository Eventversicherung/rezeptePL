import "server-only";
import { createPublicClient } from "@/lib/supabase/public";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { RecipeRatingSummary } from "@/types/content";

function parseSummary(row: {
  rating_value: number | string | null;
  rating_count: number | string | null;
} | null): RecipeRatingSummary | null {
  if (!row) return null;
  const ratingCount = Number(row.rating_count);
  const ratingValue = Number(row.rating_value);
  if (!Number.isFinite(ratingCount) || ratingCount < 1) return null;
  if (!Number.isFinite(ratingValue)) return null;
  return {
    ratingValue: Math.round(ratingValue * 10) / 10,
    ratingCount,
  };
}

export async function getRecipeRatingSummary(
  recipeId: string,
): Promise<RecipeRatingSummary | null> {
  if (!isSupabaseConfigured()) return null;
  const supabase = createPublicClient();
  const { data, error } = await supabase
    .from("recipe_rating_stats")
    .select("rating_value, rating_count")
    .eq("recipe_id", recipeId)
    .maybeSingle();
  if (error) {
    console.error("[recipe-ratings] summary", error.message);
    return null;
  }
  return parseSummary(data);
}

export async function getOwnRecipeRating(
  userId: string,
  recipeId: string,
): Promise<number | null> {
  if (!isSupabaseConfigured()) return null;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("recipe_ratings")
    .select("rating")
    .eq("user_id", userId)
    .eq("recipe_id", recipeId)
    .maybeSingle();
  if (error) {
    console.error("[recipe-ratings] own", error.message);
    return null;
  }
  const rating = Number(data?.rating);
  return Number.isInteger(rating) && rating >= 1 && rating <= 5 ? rating : null;
}

export async function upsertRecipeRating(
  userId: string,
  recipeId: string,
  rating: number,
): Promise<{ ok: boolean; summary: RecipeRatingSummary | null }> {
  const supabase = await createClient();
  const { error } = await supabase.from("recipe_ratings").upsert(
    {
      user_id: userId,
      recipe_id: recipeId,
      rating,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,recipe_id" },
  );
  if (error) {
    console.error("[recipe-ratings] upsert", error.message);
    return { ok: false, summary: null };
  }
  return { ok: true, summary: await getRecipeRatingSummary(recipeId) };
}
