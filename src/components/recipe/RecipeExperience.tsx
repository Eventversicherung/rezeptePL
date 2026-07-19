"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import type {
  AffiliateProduct,
  BlogPost,
  Locale,
  Recipe,
  RecipeFamily,
  RecipeMode,
} from "@/types/content";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/components/layout/Breadcrumbs";
import { LocaleAlternatesProvider } from "@/components/i18n/LocaleAlternates";
import { groupLabelKey, scaleAmount } from "@/lib/utils";
import { familyVariantPath } from "@/lib/data/recipe-paths";
import { ModeSwitch } from "./ModeSwitch";
import { RecipeArticle } from "./RecipeArticle";
import { RecipeGearGuides } from "./RecipeGearGuides";
import { VariantSwitcher } from "./VariantSwitcher";
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
  article,
  articleHeading,
  affiliateProducts,
  gearGuides = [],
  breadcrumbs,
  breadcrumbsLabel,
  family = null,
  variants = [],
  variantsLabel = "",
}: {
  recipe: Recipe;
  locale: Locale;
  initialMode: RecipeMode;
  isSaved: boolean;
  isLoggedIn: boolean;
  article: string;
  articleHeading: string;
  affiliateProducts: AffiliateProduct[];
  gearGuides?: BlogPost[];
  breadcrumbs: BreadcrumbItem[];
  breadcrumbsLabel: string;
  family?: RecipeFamily | null;
  variants?: Recipe[];
  variantsLabel?: string;
}) {
  const t = useTranslations("recipes");
  const tAff = useTranslations("affiliate");
  const tBlog = useTranslations("blog");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<RecipeMode>(initialMode);
  const [servings, setServings] = useState(recipe.servings);
  const [activeStep, setActiveStep] = useState(0);
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [saved, setSaved] = useState(isSaved);
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);
  const [focusCook, setFocusCook] = useState(false);

  const translation = recipe.translations[locale];
  const step = translation.steps[activeStep];

  useEffect(() => {
    setServings(recipe.servings);
    setActiveStep(0);
    setChecked({});
    setMessage(null);
  }, [recipe.id, recipe.servings]);

  function changeMode(next: RecipeMode) {
    setMode(next);
    if (next === "shop") setFocusCook(false);
    const params = new URLSearchParams(searchParams.toString());
    if (next === "cook") params.delete("mode");
    else params.set("mode", "shop");
    const qs = params.toString();
    router.replace(qs ? `?${qs}` : "?", { scroll: false });
  }

  // Keep screen awake while cooking (best-effort)
  useEffect(() => {
    if (mode !== "cook" || typeof navigator === "undefined") return;
    let wake: WakeLockSentinel | null = null;
    const request = async () => {
      try {
        if ("wakeLock" in navigator) {
          wake = await navigator.wakeLock.request("screen");
        }
      } catch {
        /* unsupported / denied */
      }
    };
    void request();
    return () => {
      void wake?.release();
    };
  }, [mode]);

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

  const localeAlternates = family
    ? {
        de: familyVariantPath(family, recipe, "de"),
        pl: familyVariantPath(family, recipe, "pl"),
      }
    : {
        de: `/rezepte/${recipe.translations.de.slug}`,
        pl: `/rezepte/${recipe.translations.pl.slug}`,
      };

  return (
    <LocaleAlternatesProvider alternates={localeAlternates}>
    <article className="mx-auto max-w-4xl pb-28 md:pb-16">
      {!focusCook ? (
        <Breadcrumbs items={breadcrumbs} ariaLabel={breadcrumbsLabel} />
      ) : null}

      {!focusCook && family && variants.length > 1 ? (
        <VariantSwitcher
          family={family}
          variants={variants}
          activeId={recipe.id}
          locale={locale}
          label={variantsLabel}
        />
      ) : null}

      {!focusCook ? (
        <div
          key={recipe.id}
          className={`reveal relative overflow-hidden rounded-[calc(var(--radius)+10px)] bg-elevated shadow-[0_24px_60px_rgba(28,20,18,0.18)] transition-[max-height,opacity] duration-300 ease-out ${
            mode === "shop"
              ? "max-h-36 opacity-95 sm:max-h-44"
              : "max-h-[48vh] sm:max-h-[56vh]"
          }`}
        >
          <div
            className={`relative w-full ${
              mode === "shop"
                ? "aspect-[21/9]"
                : "aspect-[4/5] sm:aspect-[16/10]"
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
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/70 via-transparent to-transparent" />
          </div>
        </div>
      ) : null}

      {/* In flow: no sticky mid-page bar that blocks scrolling */}
      <div className="mt-6 space-y-4" key={`meta-${recipe.id}`}>
        <div className="min-w-0">
          <h1 className="font-display text-[clamp(1.85rem,6vw,2.85rem)] font-semibold leading-[1.05]">
            {translation.title}
          </h1>
          {!focusCook ? (
            <p className="mt-2 max-w-[65ch] text-base text-muted">
              {translation.excerpt}
            </p>
          ) : (
            <p className="mt-2 text-sm font-semibold text-accent">
              {t("focusHint")}
            </p>
          )}
        </div>
        <ModeSwitch mode={mode} onChange={changeMode} />
        <p className="text-xs font-medium text-muted">{t("modeHelp")}</p>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted">
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
        <span className="rounded-full bg-accent-soft px-3 py-2 text-accent">
          {recipe.prepMinutes + recipe.cookMinutes} {t("minutes")}
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
        {mode === "cook" ? (
          <button
            type="button"
            onClick={() => setFocusCook((v) => !v)}
            className="btn-secondary !min-h-10 px-3 text-sm"
          >
            {focusCook ? t("exitFocus") : t("enterFocus")}
          </button>
        ) : null}
      </div>

      {mode === "cook" ? (
        <div key="cook" className="mode-fade mt-6 space-y-8">
          {/* One big active step. Kitchen readable */}
          <section className="cook-stage px-5 py-7 sm:px-9 sm:py-10">
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="font-bold uppercase tracking-[0.14em] text-accent">
                {t("steps")}
              </span>
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                {activeStep + 1} / {translation.steps.length}
              </span>
            </div>
            <p className="mt-5 font-display text-[clamp(1.55rem,5vw,2.25rem)] font-semibold leading-[1.15]">
              {step?.text}
            </p>
            {step?.tip ? (
              <p className="mt-5 rounded-2xl border border-accent/20 bg-accent-soft px-4 py-3.5 text-base font-medium text-accent">
                {t("tips")}: {step.tip}
              </p>
            ) : null}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                disabled={activeStep === 0}
                onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
                className="btn-secondary min-h-14 text-base disabled:opacity-40"
              >
                {t("prevStep")}
              </button>
              <button
                type="button"
                disabled={activeStep >= translation.steps.length - 1}
                onClick={() =>
                  setActiveStep((s) =>
                    Math.min(translation.steps.length - 1, s + 1),
                  )
                }
                className="btn-primary min-h-14 text-base disabled:opacity-40"
              >
                {t("nextStep")}
              </button>
            </div>
          </section>

          {!focusCook ? (
            <>
              <ol className="space-y-2">
                {translation.steps.map((s, index) => (
                  <li key={index}>
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={`flex w-full min-h-12 items-center gap-3 rounded-xl border px-3 py-3 text-left text-sm ${
                        index === activeStep
                          ? "border-accent bg-accent-soft"
                          : "border-border"
                      }`}
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-elevated text-xs font-semibold">
                        {index + 1}
                      </span>
                      <span className="line-clamp-2">{s.text}</span>
                    </button>
                  </li>
                ))}
              </ol>

              <section>
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-display text-xl font-semibold">
                    {t("compactIngredients")}
                  </h2>
                  <button
                    type="button"
                    onClick={() => changeMode("shop")}
                    className="text-sm font-medium text-accent"
                  >
                    {t("switchToShop")} →
                  </button>
                </div>
                <ul className="mt-3 divide-y divide-border border-y border-border">
                  {recipe.ingredients.map((ing) => (
                    <li
                      key={ing.id}
                      className="flex items-baseline justify-between gap-3 py-2.5 text-sm"
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
            </>
          ) : null}
        </div>
      ) : (
        <div key="shop" className="mode-fade mt-6 space-y-6">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={!isLoggedIn || pending}
              onClick={() =>
                startTransition(async () => {
                  await addRecipeToShoppingListAction(
                    recipe.id,
                    servings,
                    locale,
                  );
                  setMessage(t("addToList"));
                })
              }
              className="btn-primary disabled:opacity-40"
            >
              {t("addToList")}
            </button>
            <button type="button" onClick={shareList} className="btn-secondary">
              {t("shareList")}
            </button>
            <button
              type="button"
              onClick={() => changeMode("cook")}
              className="btn-ghost"
            >
              {t("switchToCook")} →
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
                          className="check-pop mt-1 size-5 accent-[#dc143c]"
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
        </div>
      )}

      {!focusCook ? (
        <>
          <RecipeArticle
            key={`article-${recipe.id}`}
            title={translation.title}
            article={article}
            heading={articleHeading}
            locale={locale}
            products={affiliateProducts}
            labels={{
              disclosure: tAff("disclosure"),
              ctaKicker: tAff("ctaKicker"),
              ctaTitle: tAff("ctaTitle"),
              ctaBody: tAff("ctaBody"),
              ctaButton: tAff("ctaButton"),
            }}
          />
          <RecipeGearGuides
            posts={gearGuides}
            locale={locale}
            heading={t("gearGuidesHeading")}
            cta={tBlog("readMore")}
          />
        </>
      ) : null}
    </article>
    </LocaleAlternatesProvider>
  );
}
