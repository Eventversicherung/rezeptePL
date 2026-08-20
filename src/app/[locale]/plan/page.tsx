import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { MealPlanBoard } from "@/components/plan/MealPlanBoard";
import { getSessionUser } from "@/lib/auth/session";
import { listPublishedRecipes } from "@/lib/data/repository";
import { getOrCreateMealPlan } from "@/lib/data/supabase-account";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { Locale } from "@/types/content";

export default async function PlanPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
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

  const [plan, recipes] = await Promise.all([
    getOrCreateMealPlan(user.id),
    listPublishedRecipes(),
  ]);
  const weekdayLabels = t.raw("weekdays") as string[];

  return (
    <div className="space-y-6">
      <div>
        <p className="section-kicker">{t("kicker")}</p>
        <h1 className="font-display text-3xl font-semibold">{t("title")}</h1>
        <p className="mt-2 max-w-2xl text-muted">{t("help")}</p>
      </div>
      <MealPlanBoard
        plan={plan}
        recipes={recipes}
        locale={locale}
        weekdayLabels={weekdayLabels}
      />
    </div>
  );
}
