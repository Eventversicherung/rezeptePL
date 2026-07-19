"use server";

import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/auth/session";
import { createSubmission } from "@/lib/data/repository";
import type { Locale } from "@/types/content";

export async function submitCommunityRecipeAction(formData: FormData) {
  const user = await getSessionUser();
  const locale = String(formData.get("locale") ?? "de") as Locale;
  if (!user) {
    redirect(`/${locale}/anmelden`);
  }

  const title = String(formData.get("title") ?? "").trim();
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const steps = String(formData.get("steps") ?? "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  const ingredients = String(formData.get("ingredients") ?? "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  if (!title || steps.length === 0) {
    throw new Error("Invalid submission");
  }

  await createSubmission({
    userId: user.id,
    locale,
    title,
    excerpt,
    steps,
    ingredients,
  });

  redirect(`/${locale}/community/hochladen?ok=1`);
}
