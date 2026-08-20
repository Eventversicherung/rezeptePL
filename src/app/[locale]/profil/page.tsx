import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { logoutAction } from "@/app/actions/auth";
import { isStaff, getSessionUser } from "@/lib/auth/session";
import {
  getOrCreateShoppingList,
  getRecipeById,
  listSavedRecipeIds,
} from "@/lib/data/repository";
import { getOrCreateMealPlan } from "@/lib/data/supabase-account";
import { RecipeCard } from "@/components/recipe/RecipeCard";
import { isSupabaseConfigured } from "@/lib/supabase/env";
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
  const tl = await getTranslations("lists");
  const tp = await getTranslations("plan");
  const user = await getSessionUser();

  if (!user) {
    return (
      <div className="mx-auto max-w-lg space-y-4">
        <h1 className="font-display text-3xl font-semibold">{t("title")}</h1>
        <p className="text-muted">{t("guest")}</p>
        <Link href="/anmelden" className="btn-primary">
          {tn("login")}
        </Link>
      </div>
    );
  }

  const savedIds = await listSavedRecipeIds(user.id);
  const recipes = (
    await Promise.all(savedIds.map((id) => getRecipeById(id)))
  ).filter(Boolean);
  const list = await getOrCreateShoppingList(user.id);
  let plan = null;
  if (isSupabaseConfigured()) {
    try {
      plan = await getOrCreateMealPlan(user.id);
    } catch {
      plan = null;
    }
  }
  const plannedCount = plan?.items.length ?? 0;

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="section-kicker">{t("account")}</p>
          <h1 className="font-display text-3xl font-semibold">{t("title")}</h1>
          <p className="mt-1 text-muted">
            {user.displayName} · {user.email}
          </p>
        </div>
        <form action={logoutAction}>
          <input type="hidden" name="locale" value={locale} />
          <button type="submit" className="btn-secondary">
            {tn("logout")}
          </button>
        </form>
      </div>

      <section className="grid gap-3 sm:grid-cols-3">
        <Link
          href="/profil#saved"
          className="rounded-[var(--radius)] border border-border bg-surface p-4"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-accent">
            {t("savedRecipes")}
          </p>
          <p className="mt-2 font-display text-3xl">{savedIds.length}</p>
        </Link>
        <Link
          href="/listen"
          className="rounded-[var(--radius)] border border-border bg-surface p-4"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-accent">
            {tl("title")}
          </p>
          <p className="mt-2 font-display text-3xl">{list.items.length}</p>
        </Link>
        <Link
          href="/plan"
          className="rounded-[var(--radius)] border border-border bg-surface p-4"
        >
          <p className="text-xs font-bold uppercase tracking-wide text-accent">
            {tp("title")}
          </p>
          <p className="mt-2 font-display text-3xl">{plannedCount}</p>
          <p className="mt-1 text-sm text-muted">{tp("thisWeek")}</p>
        </Link>
      </section>

      {isStaff(user) ? (
        <Link href="/admin" className="text-sm font-semibold text-accent">
          {tn("admin")} →
        </Link>
      ) : null}

      <section id="saved">
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
