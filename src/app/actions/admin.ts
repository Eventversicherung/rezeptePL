"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth/session";
import {
  createRecipeDraft,
  moderateSubmission,
  saveRecipe,
  setRecipeStatus,
  getRecipeById,
} from "@/lib/data/repository";
import type { Locale, Recipe, RecipeStatus } from "@/types/content";

export async function createDraftAction(locale: string) {
  await requireAdmin();
  const recipe = await createRecipeDraft();
  redirect(`/${locale}/admin/rezepte/${recipe.id}`);
}

export async function saveRecipeAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id"));
  const editLocale = String(formData.get("editLocale")) as Locale;
  const existing = await getRecipeById(id);
  if (!existing) throw new Error("Not found");

  const status = String(formData.get("status")) as RecipeStatus;
  const coverImage = String(formData.get("coverImage") ?? existing.coverImage);
  const prepMinutes = Number(formData.get("prepMinutes") ?? existing.prepMinutes);
  const cookMinutes = Number(formData.get("cookMinutes") ?? existing.cookMinutes);
  const servings = Number(formData.get("servings") ?? existing.servings);

  const title = String(formData.get("title") ?? "");
  const slug = String(formData.get("slug") ?? "");
  const excerpt = String(formData.get("excerpt") ?? "");
  const seoTitle = String(formData.get("seoTitle") ?? "");
  const seoDescription = String(formData.get("seoDescription") ?? "");
  const bodyHtml = String(formData.get("bodyHtml") ?? "");
  const stepsRaw = String(formData.get("steps") ?? "");

  const steps = stepsRaw
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((text) => ({ text }));

  const ingredientsRaw = String(formData.get("ingredientsJson") ?? "[]");
  let ingredients = existing.ingredients;
  try {
    ingredients = JSON.parse(ingredientsRaw);
  } catch {
    /* keep existing */
  }

  const next: Recipe = {
    ...existing,
    status,
    coverImage,
    prepMinutes,
    cookMinutes,
    servings,
    videoUrl: existing.videoUrl ?? null,
    ingredients,
    translations: {
      ...existing.translations,
      [editLocale]: {
        title,
        slug,
        excerpt: excerpt || stripHtml(bodyHtml).slice(0, 180),
        steps: steps.length ? steps : existing.translations[editLocale].steps,
        seoTitle: seoTitle || title,
        seoDescription:
          seoDescription || excerpt || stripHtml(bodyHtml).slice(0, 160),
      },
    },
  };

  await saveRecipe(next);
  revalidatePath("/[locale]/admin", "layout");
  revalidatePath("/[locale]/rezepte", "layout");
  redirect(`/${String(formData.get("uiLocale") ?? "de")}/admin/rezepte/${id}`);
}

export async function setStatusAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id"));
  const status = String(formData.get("status")) as RecipeStatus;
  const locale = String(formData.get("locale") ?? "de");
  await setRecipeStatus(id, status);
  revalidatePath("/[locale]/rezepte", "layout");
  redirect(`/${locale}/admin`);
}

export async function moderateAction(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id"));
  const decision = String(formData.get("decision")) as "approved" | "rejected";
  const locale = String(formData.get("locale") ?? "de");
  await moderateSubmission(id, decision);
  revalidatePath("/[locale]/admin/moderation", "page");
  revalidatePath("/[locale]/rezepte", "layout");
  redirect(`/${locale}/admin/moderation`);
}

function stripHtml(html: string) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}
