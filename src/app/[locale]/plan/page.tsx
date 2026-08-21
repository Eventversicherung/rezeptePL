import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { privatePageMetadata } from "@/lib/seo/alternates";

export const metadata = privatePageMetadata;
import { MealPlanBoard } from "@/components/plan/MealPlanBoard";
import { getSessionUser } from "@/lib/auth/session";
import { getRecipeById, listSavedRecipeIds } from "@/lib/data/repository";
import { getMealPlan } from "@/lib/data/supabase-account";
import { toPlanRecipe } from "@/lib/plan/recipe";
import { parseWeekParam } from "@/lib/plan/week";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { Locale } from "@/types/content";

export default async function PlanPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ w?: string }>;
}) {
  const { locale: localeParam } = await params;
  const { w } = await searchParams;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("plan");
  const tn = await getTranslations("nav");
  const tp = await getTranslations("profile");
  const user = await getSessionUser();

  if (!user) {
    return (
      <div className="mx-auto max-w-lg space-y-4">
        <h1 className="font-display text-3xl font-semibold">{t("title")}</h1>
        <p className="text-muted">{tp("guest")}</p>
        <Link href="/anmelden" className="btn-primary">
          {tn("login")}
        </Link>
      </div>
    );
  }

  if (!isSupabaseConfigured()) {
    return (
      <div className="mx-auto max-w-lg space-y-4">
        <h1 className="font-display text-3xl font-semibold">{t("title")}</h1>
        <p className="text-muted">{t("unavailable")}</p>
      </div>
    );
  }

  const weekStart = parseWeekParam(w);
  const [plan, savedIds] = await Promise.all([
    getMealPlan(user.id, weekStart),
    listSavedRecipeIds(user.id),
  ]);
  const recipeIds = [
    ...new Set([...plan.items.map((item) => item.recipeId), ...savedIds]),
  ];
  const loaded = (
    await Promise.all(recipeIds.map((id) => getRecipeById(id)))
  ).filter((recipe): recipe is NonNullable<typeof recipe> => Boolean(recipe));
  const recipes = loaded
    .filter((recipe) => plan.items.some((item) => item.recipeId === recipe.id))
    .map((recipe) => toPlanRecipe(recipe, locale));
  const saved = loaded
    .filter((recipe) => savedIds.includes(recipe.id))
    .map((recipe) => toPlanRecipe(recipe, locale));
  const weekdayLabels = t.raw("weekdays") as string[];

  return (
    <div className="meal-plan-page">
      <div>
        <p className="section-kicker">{t("kicker")}</p>
        <h1 className="font-display text-3xl font-semibold">{t("title")}</h1>
        <p className="mt-2 max-w-2xl text-muted">{t("help")}</p>
      </div>
      <MealPlanBoard
        key={weekStart}
        plan={{ ...plan, weekStart }}
        recipes={recipes}
        saved={saved}
        locale={locale}
        weekdayLabels={weekdayLabels}
      />
    </div>
  );
}
