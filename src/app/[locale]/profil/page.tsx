import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { logoutAction } from "@/app/actions/auth";
import { getSessionUser } from "@/lib/auth/session";
import {
  getRecipeById,
  listSavedRecipeIds,
} from "@/lib/data/repository";
import { RecipeCard } from "@/components/recipe/RecipeCard";
import type { Locale } from "@/types/content";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("profile");
  const tn = await getTranslations("nav");
  const user = await getSessionUser();

  if (!user) {
    return (
      <div className="mx-auto max-w-lg space-y-4">
        <h1 className="font-display text-3xl font-semibold">{t("title")}</h1>
        <p className="text-muted">{t("guest")}</p>
        <Link
          href="/anmelden"
          className="btn-primary"
        >
          {tn("login")}
        </Link>
      </div>
    );
  }

  const savedIds = await listSavedRecipeIds(user.id);
  const recipes = (
    await Promise.all(savedIds.map((id) => getRecipeById(id)))
  ).filter(Boolean);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold">{t("title")}</h1>
          <p className="mt-1 text-muted">
            {user.displayName} · {user.email}
          </p>
        </div>
        <form action={logoutAction}>
          <input type="hidden" name="locale" value={locale} />
          <button
            type="submit"
            className="btn-secondary"
          >
            {tn("logout")}
          </button>
        </form>
      </div>

      {(user.role === "admin" || user.role === "moderator") && (
        <Link href="/admin" className="text-sm text-accent">
          {tn("admin")} →
        </Link>
      )}

      <section>
        <h2 className="font-display text-2xl font-semibold">
          {t("savedRecipes")}
        </h2>
        {recipes.length === 0 ? (
          <p className="mt-3 text-muted">{t("emptySaved")}</p>
        ) : (
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            {recipes.map((recipe) =>
              recipe ? (
                <RecipeCard key={recipe.id} recipe={recipe} locale={locale} />
              ) : null,
            )}
          </div>
        )}
      </section>
    </div>
  );
}
