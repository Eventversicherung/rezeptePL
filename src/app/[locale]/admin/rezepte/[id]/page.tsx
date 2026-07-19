import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound, redirect } from "next/navigation";
import { RecipeEditorForm } from "@/components/admin/RecipeEditorForm";
import { getSessionUser } from "@/lib/auth/session";
import { getRecipeById } from "@/lib/data/repository";

export default async function AdminRecipeEditPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const user = await getSessionUser();
  if (!user || (user.role !== "admin" && user.role !== "moderator")) {
    redirect(`/${locale}/anmelden`);
  }

  const recipe = await getRecipeById(id);
  if (!recipe) notFound();
  const t = await getTranslations("admin");

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="font-display text-3xl font-semibold">{t("edit")}</h1>
      <RecipeEditorForm recipe={recipe} uiLocale={locale} />
    </div>
  );
}
