"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { addWeekToListAction } from "@/app/actions/account";
import type { PlanRecipe } from "@/lib/plan/recipe";
import { groupLabelKey, scaleAmount } from "@/lib/utils";
import type { IngredientGroup, Locale } from "@/types/content";

type PreviewItem = {
  key: string;
  name: string;
  amount: number;
  unit: string;
  group: IngredientGroup;
  storeHintDe?: string;
};

function mergeIngredients(recipes: PlanRecipe[], locale: Locale): PreviewItem[] {
  const map = new Map<string, PreviewItem>();
  for (const recipe of recipes) {
    for (const ingredient of recipe.ingredients) {
      const name = ingredient.name[locale];
      const unit = ingredient.unit[locale];
      const key = `${name}|${unit}|${ingredient.group}`;
      const amount = scaleAmount(ingredient.amount, recipe.servings, recipe.servings);
      const existing = map.get(key);
      if (existing) {
        existing.amount = Math.round((existing.amount + amount) * 10) / 10;
      } else {
        map.set(key, {
          key,
          name,
          amount,
          unit,
          group: ingredient.group,
          storeHintDe: ingredient.storeHintDe,
        });
      }
    }
  }
  return [...map.values()];
}

export function PlanIngredientPreview({
  recipes,
  locale,
  weekStart,
  disabled,
}: {
  recipes: PlanRecipe[];
  locale: Locale;
  weekStart: string;
  disabled?: boolean;
}) {
  const t = useTranslations("plan");
  const tr = useTranslations("recipes");
  const [listed, setListed] = useState(false);
  const items = mergeIngredients(recipes, locale);
  const groups = [...new Set(items.map((item) => item.group))];

  return (
    <section className="meal-preview">
      <div className="meal-preview__head">
        <div>
          <h2>{t("previewTitle")}</h2>
          <p>
            {items.length
              ? t("previewCount", { count: items.length })
              : t("previewEmpty")}
          </p>
        </div>
        {items.length ? (
          listed ? (
            <Link href="/listen" className="btn-secondary">
              {t("openList")}
            </Link>
          ) : (
            <form
              action={async (formData) => {
                await addWeekToListAction(formData);
                setListed(true);
              }}
            >
              <input type="hidden" name="weekStart" value={weekStart} />
              <input type="hidden" name="locale" value={locale} />
              <button type="submit" className="btn-primary" disabled={disabled}>
                {t("addWeekToList")}
              </button>
            </form>
          )
        ) : null}
      </div>
      {groups.map((group) => (
        <div key={group} className="meal-preview__group">
          <h3>{tr(groupLabelKey(group))}</h3>
          <ul>
            {items
              .filter((item) => item.group === group)
              .map((item) => (
                <li key={item.key}>
                  <span>
                    {item.amount} {item.unit} {item.name}
                  </span>
                  {item.storeHintDe ? (
                    <small>
                      {tr("storeHint")}: {item.storeHintDe}
                    </small>
                  ) : null}
                </li>
              ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
