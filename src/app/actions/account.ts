"use server";

import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { getSessionUser } from "@/lib/auth/session";
import {
  getFamilyById,
  getRecipeById,
  listSavedRecipeIds,
  mergeIngredientsIntoList,
  toggleSavedRecipe,
  updateListItems,
  getOrCreateShoppingList,
  updateOwnDisplayName,
} from "@/lib/data/repository";
import { parseWeekParam } from "@/lib/plan/week";
import { toPlanRecipe, type PlanRecipe } from "@/lib/plan/recipe";
import { scaleAmount } from "@/lib/utils";
import type { Locale, MealSlot, ShoppingListItem } from "@/types/content";

const SLOTS: MealSlot[] = ["breakfast", "lunch", "dinner"];

function isSlot(value: string): value is MealSlot {
  return SLOTS.includes(value as MealSlot);
}

export async function toggleSaveRecipeAction(recipeId: string) {
  const user = await getSessionUser();
  if (!user) return false;
  const saved = await toggleSavedRecipe(user.id, recipeId);
  revalidatePath("/[locale]/profil", "page");
  revalidatePath("/[locale]/rezepte/[slug]", "page");
  return saved;
}

export async function addRecipeToShoppingListAction(
  recipeId: string,
  servings: number,
  locale: Locale,
) {
  const user = await getSessionUser();
  if (!user) return;
  const recipe = await getRecipeById(recipeId);
  if (!recipe) return;

  const items: ShoppingListItem[] = recipe.ingredients.map((ing) => ({
    id: `item-${randomUUID().slice(0, 8)}`,
    name: ing.name[locale],
    amount: scaleAmount(ing.amount, recipe.servings, servings),
    unit: ing.unit[locale],
    group: ing.group,
    checked: false,
    recipeId: recipe.id,
    storeHintDe: ing.storeHintDe,
  }));

  await mergeIngredientsIntoList(user.id, items);
  revalidatePath("/[locale]/listen", "page");
}

export async function toggleListItemAction(listId: string, itemId: string) {
  const user = await getSessionUser();
  if (!user) return;
  const list = await getOrCreateShoppingList(user.id);
  if (list.id !== listId) return;
  const items = list.items.map((i) =>
    i.id === itemId ? { ...i, checked: !i.checked } : i,
  );
  await updateListItems(listId, items);
  revalidatePath("/[locale]/listen", "page");
}

export async function clearCheckedListAction(listId: string) {
  const user = await getSessionUser();
  if (!user) return;
  const list = await getOrCreateShoppingList(user.id);
  if (list.id !== listId) return;
  await updateListItems(
    listId,
    list.items.filter((i) => !i.checked),
  );
  revalidatePath("/[locale]/listen", "page");
}

export type ProfileFormState = {
  error?: string;
  message?: string;
};

export async function updateDisplayNameAction(
  _prev: ProfileFormState,
  formData: FormData,
): Promise<ProfileFormState> {
  const user = await getSessionUser();
  if (!user) return { error: "unauthorized" };

  const displayName = String(formData.get("displayName") ?? "").trim();
  if (displayName.length < 2 || displayName.length > 80) {
    return { error: "name" };
  }

  try {
    await updateOwnDisplayName(user.id, displayName);
  } catch {
    return { error: "save" };
  }

  revalidatePath("/[locale]", "layout");
  revalidatePath("/[locale]/einstellungen", "page");
  revalidatePath("/[locale]/profil", "page");
  return { message: "saved" };
}

export async function getSavedIdsForUser() {
  const user = await getSessionUser();
  if (!user) return [] as string[];
  return listSavedRecipeIds(user.id);
}

export async function loadPlanRecipeAction(
  id: string,
  locale: Locale,
): Promise<PlanRecipe | null> {
  let recipe = await getRecipeById(id);
  if (!recipe) {
    const family = await getFamilyById(id);
    if (family) recipe = await getRecipeById(family.defaultVariantId);
  }
  if (!recipe || recipe.status !== "published") return null;
  return toPlanRecipe(recipe, locale);
}

export async function assignMealSlot(input: {
  planId: string;
  weekStart: string;
  weekday: number;
  slot: string;
  recipeId: string | null;
}): Promise<{ ok: true; planId: string } | { ok: false }> {
  const user = await getSessionUser();
  if (!user) return { ok: false };
  if (!isSlot(input.slot)) return { ok: false };
  if (input.weekday < 0 || input.weekday > 6) return { ok: false };
  const weekStart = parseWeekParam(input.weekStart);

  const { ensureMealPlanId, setMealPlanItem } = await import(
    "@/lib/data/supabase-account"
  );
  const planId = input.planId || (await ensureMealPlanId(user.id, weekStart));
  await setMealPlanItem({
    planId,
    weekday: input.weekday,
    slot: input.slot,
    recipeId: input.recipeId,
  });
  return { ok: true, planId };
}

export async function copyLastWeekAction(
  weekStartRaw: string,
  locale: Locale,
): Promise<
  | {
      ok: true;
      planId: string;
      recipes: PlanRecipe[];
      items: { weekday: number; slot: MealSlot; recipeId: string }[];
      copied: number;
    }
  | { ok: false; reason: "empty" | "auth" }
> {
  const user = await getSessionUser();
  if (!user) return { ok: false, reason: "auth" };
  const weekStart = parseWeekParam(weekStartRaw);
  const { copyEmptySlotsFromPreviousWeek } = await import(
    "@/lib/data/supabase-account"
  );
  const { copied, plan } = await copyEmptySlotsFromPreviousWeek(
    user.id,
    weekStart,
  );
  if (!copied) return { ok: false, reason: "empty" };
  const recipes = (
    await Promise.all(plan.items.map((item) => getRecipeById(item.recipeId)))
  )
    .filter((recipe): recipe is NonNullable<typeof recipe> => Boolean(recipe))
    .map((recipe) => toPlanRecipe(recipe, locale));
  return {
    ok: true,
    planId: plan.id,
    recipes,
    items: plan.items.map((item) => ({
      weekday: item.weekday,
      slot: item.slot,
      recipeId: item.recipeId,
    })),
    copied,
  };
}

export async function addWeekToListAction(formData: FormData) {
  const user = await getSessionUser();
  if (!user) return;
  const { getMealPlan } = await import("@/lib/data/supabase-account");
  const weekStart = parseWeekParam(String(formData.get("weekStart") ?? ""));
  const locale = String(formData.get("locale") ?? "de") as Locale;
  const plan = await getMealPlan(user.id, weekStart);
  const ids = [...new Set(plan.items.map((item) => item.recipeId))];
  for (const recipeId of ids) {
    const recipe = await getRecipeById(recipeId);
    if (!recipe) continue;
    await addRecipeToShoppingListAction(recipeId, recipe.servings, locale);
  }
  revalidatePath("/[locale]/listen", "page");
}
