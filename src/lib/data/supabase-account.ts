import "server-only";
import { randomUUID } from "crypto";
import { createClient } from "@/lib/supabase/server";
import { addWeeks, mondayOf } from "@/lib/plan/week";
import type {
  CommunitySubmission,
  IngredientGroup,
  Locale,
  MealPlan,
  MealPlanItem,
  MealSlot,
  Profile,
  ShoppingList,
  ShoppingListItem,
  UserRole,
} from "@/types/content";

type ProfileRow = {
  id: string;
  email: string;
  display_name: string;
  role: UserRole;
  preferred_locale: Locale;
};

export function mapProfile(row: ProfileRow): Profile {
  return {
    id: row.id,
    email: row.email,
    displayName: row.display_name,
    role: row.role,
    preferredLocale: row.preferred_locale,
  };
}

export async function getProfileById(id: string): Promise<Profile | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("id, email, display_name, role, preferred_locale")
    .eq("id", id)
    .maybeSingle();
  if (error || !data) return null;
  return mapProfile(data as ProfileRow);
}

export async function updateOwnDisplayName(
  userId: string,
  displayName: string,
): Promise<void> {
  const supabase = await createClient();
  const { error } = await supabase
    .from("profiles")
    .update({ display_name: displayName })
    .eq("id", userId);
  if (error) {
    throw new Error(error.message);
  }
}

const SUBMISSION_COLUMNS =
  "id, user_id, status, locale, title, excerpt, steps, ingredients, created_at";

function mapSubmission(row: {
  id: string;
  user_id: string;
  status: CommunitySubmission["status"];
  locale: Locale;
  title: string;
  excerpt: string;
  steps: string[] | null;
  ingredients: string[] | null;
  created_at: string;
}): CommunitySubmission {
  return {
    id: row.id,
    userId: row.user_id,
    status: row.status,
    locale: row.locale,
    title: row.title,
    excerpt: row.excerpt,
    steps: row.steps ?? [],
    ingredients: row.ingredients ?? [],
    createdAt: row.created_at,
  };
}

export async function listSavedRecipeIds(userId: string): Promise<string[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("saved_recipes")
    .select("recipe_id")
    .eq("user_id", userId);
  if (error || !data) return [];
  return data.map((row) => row.recipe_id as string);
}

export async function toggleSavedRecipe(
  userId: string,
  recipeId: string,
): Promise<boolean> {
  const supabase = await createClient();
  const { data: existing } = await supabase
    .from("saved_recipes")
    .select("recipe_id")
    .eq("user_id", userId)
    .eq("recipe_id", recipeId)
    .maybeSingle();

  if (existing) {
    await supabase
      .from("saved_recipes")
      .delete()
      .eq("user_id", userId)
      .eq("recipe_id", recipeId);
    return false;
  }

  const { error } = await supabase.from("saved_recipes").insert({
    user_id: userId,
    recipe_id: recipeId,
  });
  if (error) {
    console.error("[supabase-account] toggleSavedRecipe", error.message);
    return false;
  }
  return true;
}

type ListRow = {
  id: string;
  user_id: string;
  name: string;
  updated_at: string;
};

type ListItemRow = {
  id: string;
  list_id: string;
  name: string;
  amount: number;
  unit: string;
  group_name: IngredientGroup;
  checked: boolean;
  recipe_id: string | null;
  store_hint_de: string | null;
};

function mapListItem(row: ListItemRow): ShoppingListItem {
  return {
    id: row.id,
    name: row.name,
    amount: Number(row.amount),
    unit: row.unit,
    group: row.group_name,
    checked: row.checked,
    recipeId: row.recipe_id ?? undefined,
    storeHintDe: row.store_hint_de ?? undefined,
  };
}

async function loadList(
  supabase: Awaited<ReturnType<typeof createClient>>,
  list: ListRow,
): Promise<ShoppingList> {
  const { data: items } = await supabase
    .from("shopping_list_items")
    .select(
      "id, list_id, name, amount, unit, group_name, checked, recipe_id, store_hint_de",
    )
    .eq("list_id", list.id);
  return {
    id: list.id,
    userId: list.user_id,
    name: list.name,
    updatedAt: list.updated_at,
    items: ((items ?? []) as ListItemRow[]).map(mapListItem),
  };
}

export async function getOrCreateShoppingList(
  userId: string,
): Promise<ShoppingList> {
  const supabase = await createClient();
  const { data: existing } = await supabase
    .from("shopping_lists")
    .select("id, user_id, name, updated_at")
    .eq("user_id", userId)
    .order("updated_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (existing) {
    return loadList(supabase, existing as ListRow);
  }

  const { data: created, error } = await supabase
    .from("shopping_lists")
    .insert({ user_id: userId, name: "Meine Liste" })
    .select("id, user_id, name, updated_at")
    .single();
  if (error || !created) {
    throw new Error(error?.message ?? "Could not create shopping list");
  }
  return loadList(supabase, created as ListRow);
}

export async function mergeIngredientsIntoList(
  userId: string,
  items: ShoppingListItem[],
): Promise<ShoppingList> {
  const list = await getOrCreateShoppingList(userId);
  const supabase = await createClient();

  for (const item of items) {
    const existing = list.items.find(
      (i) =>
        i.name === item.name &&
        i.unit === item.unit &&
        !i.checked &&
        i.recipeId === item.recipeId,
    );
    if (existing) {
      await supabase
        .from("shopping_list_items")
        .update({ amount: existing.amount + item.amount })
        .eq("id", existing.id);
    } else {
      await supabase.from("shopping_list_items").insert({
        list_id: list.id,
        name: item.name,
        amount: item.amount,
        unit: item.unit,
        group_name: item.group,
        checked: false,
        recipe_id: item.recipeId ?? null,
        store_hint_de: item.storeHintDe ?? null,
      });
    }
  }

  await supabase
    .from("shopping_lists")
    .update({ updated_at: new Date().toISOString() })
    .eq("id", list.id);

  return getOrCreateShoppingList(userId);
}

export async function updateListItems(
  listId: string,
  items: ShoppingListItem[],
): Promise<void> {
  const supabase = await createClient();
  const { data: current } = await supabase
    .from("shopping_list_items")
    .select("id")
    .eq("list_id", listId);
  const keep = new Set(items.map((i) => i.id));
  const toDelete = (current ?? [])
    .map((row) => row.id as string)
    .filter((id) => !keep.has(id));
  if (toDelete.length) {
    await supabase.from("shopping_list_items").delete().in("id", toDelete);
  }
  for (const item of items) {
    await supabase
      .from("shopping_list_items")
      .update({
        name: item.name,
        amount: item.amount,
        unit: item.unit,
        group_name: item.group,
        checked: item.checked,
        recipe_id: item.recipeId ?? null,
        store_hint_de: item.storeHintDe ?? null,
      })
      .eq("id", item.id);
  }
  await supabase
    .from("shopping_lists")
    .update({ updated_at: new Date().toISOString() })
    .eq("id", listId);
}

export async function listSubmissions(
  status?: CommunitySubmission["status"],
): Promise<CommunitySubmission[]> {
  const supabase = await createClient();
  let query = supabase
    .from("community_submissions")
    .select(SUBMISSION_COLUMNS)
    .order("created_at", { ascending: false });
  if (status) query = query.eq("status", status);
  const { data, error } = await query;
  if (error || !data) return [];
  return data.map((row) => mapSubmission(row as Parameters<typeof mapSubmission>[0]));
}

export async function listSubmissionsByUser(
  userId: string,
): Promise<CommunitySubmission[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("community_submissions")
    .select(SUBMISSION_COLUMNS)
    .eq("user_id", userId)
    .order("created_at", { ascending: false });
  if (error || !data) return [];
  return data.map((row) => mapSubmission(row as Parameters<typeof mapSubmission>[0]));
}

export async function createSubmission(
  input: Omit<CommunitySubmission, "id" | "createdAt" | "status">,
): Promise<CommunitySubmission> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("community_submissions")
    .insert({
      user_id: input.userId,
      locale: input.locale,
      title: input.title,
      excerpt: input.excerpt,
      steps: input.steps,
      ingredients: input.ingredients,
    })
    .select(
      "id, user_id, status, locale, title, excerpt, steps, ingredients, created_at",
    )
    .single();
  if (error || !data) {
    throw new Error(error?.message ?? "Could not create submission");
  }
  return {
    id: data.id as string,
    userId: data.user_id as string,
    status: data.status as CommunitySubmission["status"],
    locale: data.locale as Locale,
    title: data.title as string,
    excerpt: data.excerpt as string,
    steps: (data.steps as string[]) ?? [],
    ingredients: (data.ingredients as string[]) ?? [],
    createdAt: data.created_at as string,
  };
}

export { weekStartFor } from "@/lib/plan/week";

type MealPlanItemRow = {
  id: string;
  weekday: number;
  slot: MealSlot;
  recipe_id: string;
};

function mapItems(rows: MealPlanItemRow[] | null): MealPlan["items"] {
  return (rows ?? []).map((row) => ({
    id: row.id,
    weekday: row.weekday,
    slot: row.slot,
    recipeId: row.recipe_id,
  }));
}

export async function getMealPlan(
  userId: string,
  weekStart = mondayOf(),
): Promise<MealPlan> {
  const supabase = await createClient();
  const { data: existing } = await supabase
    .from("meal_plans")
    .select("id")
    .eq("user_id", userId)
    .eq("week_start", weekStart)
    .maybeSingle();

  if (!existing) {
    return { id: "", userId, weekStart, items: [] };
  }

  const { data: items } = await supabase
    .from("meal_plan_items")
    .select("id, weekday, slot, recipe_id")
    .eq("plan_id", existing.id);

  return {
    id: existing.id as string,
    userId,
    weekStart,
    items: mapItems(items as MealPlanItemRow[] | null),
  };
}

export async function ensureMealPlanId(
  userId: string,
  weekStart: string,
): Promise<string> {
  const existing = await getMealPlan(userId, weekStart);
  if (existing.id) return existing.id;

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("meal_plans")
    .insert({ user_id: userId, week_start: weekStart })
    .select("id")
    .single();

  if (data?.id) return data.id as string;

  const again = await getMealPlan(userId, weekStart);
  if (again.id) return again.id;
  throw new Error(error?.message ?? "Could not create meal plan");
}

export async function getOrCreateMealPlan(
  userId: string,
  weekStart = mondayOf(),
): Promise<MealPlan> {
  const planId = await ensureMealPlanId(userId, weekStart);
  const plan = await getMealPlan(userId, weekStart);
  return { ...plan, id: planId };
}

export async function copyEmptySlotsFromPreviousWeek(
  userId: string,
  weekStart: string,
): Promise<{ copied: number; plan: MealPlan }> {
  const previous = await getMealPlan(userId, addWeeks(weekStart, -1));
  if (!previous.items.length) {
    return { copied: 0, plan: await getMealPlan(userId, weekStart) };
  }

  const current = await getMealPlan(userId, weekStart);
  const taken = new Set(
    current.items.map((item) => `${item.weekday}-${item.slot}`),
  );
  const incoming = previous.items.filter(
    (item) => !taken.has(`${item.weekday}-${item.slot}`),
  );
  if (!incoming.length) {
    return { copied: 0, plan: current };
  }

  const planId = current.id || (await ensureMealPlanId(userId, weekStart));
  const supabase = await createClient();
  const { error } = await supabase.from("meal_plan_items").insert(
    incoming.map((item) => ({
      plan_id: planId,
      weekday: item.weekday,
      slot: item.slot,
      recipe_id: item.recipeId,
    })),
  );
  if (error) throw new Error(error.message);
  return { copied: incoming.length, plan: await getMealPlan(userId, weekStart) };
}

export async function setMealPlanItem(input: {
  planId: string;
  weekday: number;
  slot: MealSlot;
  recipeId: string | null;
}): Promise<void> {
  const supabase = await createClient();
  const { data: existing } = await supabase
    .from("meal_plan_items")
    .select("id")
    .eq("plan_id", input.planId)
    .eq("weekday", input.weekday)
    .eq("slot", input.slot)
    .maybeSingle();

  if (!input.recipeId) {
    if (existing) {
      await supabase.from("meal_plan_items").delete().eq("id", existing.id);
    }
    return;
  }

  if (existing) {
    await supabase
      .from("meal_plan_items")
      .update({ recipe_id: input.recipeId })
      .eq("id", existing.id);
    return;
  }

  await supabase.from("meal_plan_items").insert({
    plan_id: input.planId,
    weekday: input.weekday,
    slot: input.slot,
    recipe_id: input.recipeId,
  });
}

export async function listMealPlanRecipeIds(plan: MealPlan): Promise<string[]> {
  return [...new Set(plan.items.map((item) => item.recipeId))];
}

export function emptyMealItem(): MealPlanItem {
  return {
    id: randomUUID(),
    weekday: 0,
    slot: "dinner",
    recipeId: "",
  };
}
