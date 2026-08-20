"use server";

import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { getSessionUser } from "@/lib/auth/session";
import {
  getRecipeById,
  listSavedRecipeIds,
  mergeIngredientsIntoList,
  toggleSavedRecipe,
  updateListItems,
  getOrCreateShoppingList,
} from "@/lib/data/repository";
import { scaleAmount } from "@/lib/utils";
import type { Locale, ShoppingListItem } from "@/types/content";

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

export async function getSavedIdsForUser() {
  const user = await getSessionUser();
  if (!user) return [] as string[];
  return listSavedRecipeIds(user.id);
}

export async function setMealSlotAction(formData: FormData) {
  const user = await getSessionUser();
  if (!user) return;
  const { setMealPlanItem } = await import("@/lib/data/supabase-account");
  const recipeId = String(formData.get("recipeId") ?? "");
  await setMealPlanItem({
    planId: String(formData.get("planId")),
    weekday: Number(formData.get("weekday")),
    slot: String(formData.get("slot")) as "breakfast" | "lunch" | "dinner",
    recipeId: recipeId || null,
  });
  revalidatePath("/[locale]/plan", "page");
  revalidatePath("/[locale]/profil", "page");
}

export async function addWeekToListAction(formData: FormData) {
  const user = await getSessionUser();
  if (!user) return;
  const { getOrCreateMealPlan } = await import("@/lib/data/supabase-account");
  const weekStart = String(formData.get("weekStart") ?? "");
  const locale = String(formData.get("locale") ?? "de") as Locale;
  const plan = await getOrCreateMealPlan(user.id, weekStart || undefined);
  const ids = [...new Set(plan.items.map((item) => item.recipeId))];
  for (const recipeId of ids) {
    const recipe = await getRecipeById(recipeId);
    if (!recipe) continue;
    await addRecipeToShoppingListAction(recipeId, recipe.servings, locale);
  }
  revalidatePath("/[locale]/listen", "page");
}
