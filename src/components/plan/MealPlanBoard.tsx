"use client";

import { useTranslations } from "next-intl";
import {
  addWeekToListAction,
  setMealSlotAction,
} from "@/app/actions/account";
import type { Locale, MealPlan, MealSlot, Recipe } from "@/types/content";

const SLOTS: MealSlot[] = ["breakfast", "lunch", "dinner"];

export function MealPlanBoard({
  plan,
  recipes,
  locale,
  weekdayLabels,
}: {
  plan: MealPlan;
  recipes: Recipe[];
  locale: Locale;
  weekdayLabels: string[];
}) {
  const t = useTranslations("plan");
  const byKey = new Map(
    plan.items.map((item) => [`${item.weekday}-${item.slot}`, item]),
  );

  return (
    <div className="space-y-4">
      <form action={addWeekToListAction}>
        <input type="hidden" name="weekStart" value={plan.weekStart} />
        <input type="hidden" name="locale" value={locale} />
        <button type="submit" className="btn-primary w-full sm:w-auto">
          {t("addWeekToList")}
        </button>
      </form>

      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <div className="flex min-w-[52rem] gap-3 pb-2 md:grid md:min-w-0 md:grid-cols-7">
          {weekdayLabels.map((label, weekday) => (
            <section
              key={weekday}
              className="w-[12.5rem] shrink-0 rounded-[var(--radius)] border border-border bg-surface p-3 md:w-auto"
            >
              <h2 className="font-display text-base font-semibold">{label}</h2>
              <div className="mt-3 space-y-3">
                {SLOTS.map((slot) => {
                  const current = byKey.get(`${weekday}-${slot}`);
                  return (
                    <form
                      key={slot}
                      action={setMealSlotAction}
                      className="space-y-1"
                    >
                      <input type="hidden" name="planId" value={plan.id} />
                      <input type="hidden" name="weekday" value={weekday} />
                      <input type="hidden" name="slot" value={slot} />
                      <label className="block text-xs font-bold uppercase tracking-wide text-muted">
                        {t(slot)}
                      </label>
                      <select
                        name="recipeId"
                        defaultValue={current?.recipeId ?? ""}
                        onChange={(event) => event.currentTarget.form?.requestSubmit()}
                        className="min-h-11 w-full rounded-[10px] border border-border bg-[var(--bg)] px-2 text-sm"
                      >
                        <option value="">{t("emptySlot")}</option>
                        {recipes.map((recipe) => (
                          <option key={recipe.id} value={recipe.id}>
                            {recipe.translations[locale].title}
                          </option>
                        ))}
                      </select>
                    </form>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
