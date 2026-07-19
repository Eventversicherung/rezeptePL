"use client";

import Image from "next/image";
import { useMemo, useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import type { Locale, Recipe, RecipeMode } from "@/types/content";
import { groupLabelKey, scaleAmount } from "@/lib/utils";
import { ModeSwitch } from "./ModeSwitch";
import {
  addRecipeToShoppingListAction,
  toggleSaveRecipeAction,
} from "@/app/actions/account";

const GROUP_ORDER = [
  "produce",
  "dairy",
  "pantry",
  "spices",
  "polish",
  "other",
] as const;

export function RecipeExperience({
  recipe,
  locale,
  initialMode,
  isSaved,
  isLoggedIn,
}: {
  recipe: Recipe;
  locale: Locale;
  initialMode: RecipeMode;
  isSaved: boolean;
  isLoggedIn: boolean;
}) {
  const t = useTranslations("recipes");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<RecipeMode>(initialMode);
  const [servings, setServings] = useState(recipe.servings);
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState(isSaved);
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);

  const translation = recipe.translations[locale];

  function changeMode(next: RecipeMode) {
    setMode(next);
    const params = new URLSearchParams(searchParams.toString());
    if (next === "cook") params.delete("mode");
    else params.set("mode", "shop");
    const qs = params.toString();
    router.replace(`?${qs}`, { scroll: false });
  }

  const grouped = useMemo(() => {
    return GROUP_ORDER.map((group) => ({
      group,
      items: recipe.ingredients.filter((i) => i.group === group),
    })).filter((g) => g.items.length > 0);
  }, [recipe.ingredients]);

  function shareList() {
    const lines = recipe.ingredients.map((i) => {
      const amount = scaleAmount(i.amount, recipe.servings, servings);
      return `☐ ${amount} ${i.unit[locale]} ${i.name[locale]}`.trim();
    });
    const text = `${translation.title}\n\n${lines.join("\n")}`;
    if (navigator.share) {
      void navigator.share({ title: translation.title, text });
    } else {
      void navigator.clipboard.writeText(text);
      setMessage(t("shareList"));
    }
  }

  return (
    <article className="mx-auto max-w-3xl">
      <div
        className={`relative overflow-hidden rounded-[calc(var(--radius)+4px)] bg-elevated transition-[max-height,opacity] duration-200 ease-out ${
          mode === "shop"
            ? "max-h-40 opacity-90 sm:max-h-48"
            : "max-h-[55vh] sm:max-h-[60vh]"
        }`}
      >
        <div
          className={`relative w-full ${
            mode === "shop" ? "aspect-[21/9]" : "aspect-[4/5] sm:aspect-[16/10]"
          }`}
        >
          <Image
            src={recipe.coverImage}
            alt={translation.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </div>

      <div className="sticky top-14 z-30 -mx-1 mt-5 bg-[color-mix(in_oklch,var(--bg)_90%,transparent)] px-1 py-3 backdrop-blur-md">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="font-display text-[clamp(1.75rem,5vw,2.5rem)] font-semibold">
              {translation.title}
            </h1>
            <p className="mt-1 max-w-[65ch] text-muted">{translation.excerpt}</p>
          </div>
          <ModeSwitch mode={mode} onChange={changeMode} />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted">
        <label className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-2">
          <span>{t("servings")}</span>
          <input
            type="number"
            min={1}
            max={20}
            value={servings}
            onChange={(e) => setServings(Number(e.target.value) || 1)}
            className="w-12 border-0 bg-transparent text-foreground outline-none"
          />
        </label>
        <span>
          {t("prep")} {recipe.prepMinutes} {t("minutes")}
        </span>
        <span>
          {t("cook")} {recipe.cookMinutes} {t("minutes")}
        </span>
        <button
          type="button"
          disabled={!isLoggedIn || pending}
          onClick={() =>
            startTransition(async () => {
              const next = await toggleSaveRecipeAction(recipe.id);
              setSaved(next);
            })
          }
          className="btn-ghost !min-h-10 px-3 text-sm disabled:opacity-40"
        >
          {saved ? t("saved") : t("save")}
        </button>
      </div>

      {mode === "cook" ? (
        <div key="cook" className="mode-fade mt-8 space-y-10">
          <section>
            <div className="mb-4 flex items-end justify-between gap-3">
              <h2 className="font-display text-2xl font-semibold">{t("steps")}</h2>
              <p className="text-sm text-muted">
                {activeStep + 1} / {translation.steps.length}
              </p>
            </div>
            <ol className="space-y-3">
              {translation.steps.map((step, index) => {
                const active = index === activeStep;
                return (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`w-full rounded-[var(--radius)] border px-4 py-4 text-left transition-colors ${
                        active
                          ? "border-accent bg-accent-soft"
                          : "border-border bg-transparent"
                      }`}
                    >
                      <span className="text-xs font-medium uppercase tracking-wide text-muted">
                        {index + 1}
                      </span>
                      <p className={`mt-1 ${active ? "text-lg" : "text-base"}`}>
                        {step.text}
                      </p>
                      {step.tip && active ? (
                        <p className="mt-2 text-sm text-accent">
                          {t("tips")}: {step.tip}
                        </p>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ol>
            <div className="mt-4 flex gap-2">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
                className="min-h-11 flex-1 rounded-full border border-border disabled:opacity-40"
              >
                ←
              </button>
              <button
                type="button"
                disabled={activeStep >= translation.steps.length - 1}
                onClick={() =>
                  setActiveStep((s) =>
                    Math.min(translation.steps.length - 1, s + 1),
                  )
                }
                className="btn-primary flex-1 disabled:opacity-40"
              >
                →
              </button>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold">
              {t("compactIngredients")}
            </h2>
            <ul className="mt-3 divide-y divide-border border-y border-border">
              {recipe.ingredients.map((ing) => (
                <li
                  key={ing.id}
                  className="flex items-baseline justify-between gap-3 py-2 text-sm"
                >
                  <span>{ing.name[locale]}</span>
                  <span className="text-muted">
                    {scaleAmount(ing.amount, recipe.servings, servings)}{" "}
                    {ing.unit[locale]}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      ) : (
        <div key="shop" className="mode-fade mt-8 space-y-6">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={!isLoggedIn || pending}
              onClick={() =>
                startTransition(async () => {
                  await addRecipeToShoppingListAction(recipe.id, servings, locale);
                  setMessage(t("addToList"));
                })
              }
              className="btn-primary disabled:opacity-40"
            >
              {t("addToList")}
            </button>
            <button
              type="button"
              onClick={shareList}
              className="btn-secondary"
            >
              {t("shareList")}
            </button>
          </div>
          {message ? (
            <p className="text-sm text-accent" role="status">
              {message}
            </p>
          ) : null}

          {grouped.map(({ group, items }) => (
            <section key={group}>
              <h2 className="font-display text-lg font-semibold">
                {t(groupLabelKey(group))}
              </h2>
              <ul className="mt-2 space-y-2">
                {items.map((ing) => {
                  const amount = scaleAmount(
                    ing.amount,
                    recipe.servings,
                    servings,
                  );
                  const isChecked = Boolean(checked[ing.id]);
                  return (
                    <li key={ing.id}>
                      <label
                        className={`flex min-h-14 cursor-pointer items-start gap-3 rounded-[var(--radius)] border border-border px-3 py-3 ${
                          isChecked ? "bg-elevated opacity-60" : "bg-surface"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() =>
                            setChecked((c) => ({
                              ...c,
                              [ing.id]: !c[ing.id],
                            }))
                          }
                          className="mt-1 size-5 accent-[var(--accent)]"
                        />
                        <span className="flex-1">
                          <span
                            className={`block font-medium ${
                              isChecked ? "line-through" : ""
                            }`}
                          >
                            {amount} {ing.unit[locale]} {ing.name[locale]}
                          </span>
                          {ing.storeHintDe ? (
                            <span className="mt-0.5 block text-xs text-muted">
                              {t("storeHint")}: {ing.storeHintDe}
                            </span>
                          ) : null}
                          {ing.substitute?.[locale] ? (
                            <span className="mt-0.5 block text-xs text-accent">
                              {t("substitute")}: {ing.substitute[locale]}
                            </span>
                          ) : null}
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}

          <details className="rounded-[var(--radius)] border border-border px-4 py-3">
            <summary className="cursor-pointer font-medium">
              {t("showSteps")}
            </summary>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted">
              {translation.steps.map((step, i) => (
                <li key={i}>{step.text}</li>
              ))}
            </ol>
          </details>
        </div>
      )}
    </article>
  );
}
