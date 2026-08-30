"use client";

import { useState, useTransition } from "react";
import { useTranslations } from "next-intl";
import { Star1 } from "iconsax-reactjs";
import { rateRecipeAction } from "@/app/actions/account";
import type { RecipeRatingSummary } from "@/types/content";

const STARS = [1, 2, 3, 4, 5] as const;

function formatAverage(value: number, locale: string) {
  return new Intl.NumberFormat(locale === "pl" ? "pl-PL" : "de-DE", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(value);
}

export function RecipeRating({
  recipeId,
  locale,
  isLoggedIn,
  loginHref,
  summary,
  myRating,
}: {
  recipeId: string;
  locale: string;
  isLoggedIn: boolean;
  loginHref: string;
  summary: RecipeRatingSummary | null;
  myRating: number | null;
}) {
  const t = useTranslations("recipes");
  const [pending, startTransition] = useTransition();
  const [currentSummary, setCurrentSummary] = useState(summary);
  const [currentMine, setCurrentMine] = useState(myRating);
  const [hover, setHover] = useState<number | null>(null);
  const [error, setError] = useState(false);

  const filled = hover ?? currentMine ?? Math.round(currentSummary?.ratingValue ?? 0);
  const count = currentSummary?.ratingCount ?? 0;
  const averageLabel =
    currentSummary && count > 0
      ? `${formatAverage(currentSummary.ratingValue, locale)} · ${t("ratingCount", { count })}`
      : t("ratingEmpty");

  function rate(value: number) {
    if (!isLoggedIn || pending) return;
    startTransition(async () => {
      setError(false);
      const result = await rateRecipeAction(recipeId, value);
      if (!result.ok) {
        setError(true);
        return;
      }
      setCurrentMine(value);
      setCurrentSummary(result.summary);
    });
  }

  return (
    <div className="flex min-h-10 flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-border bg-surface px-3 py-1.5">
      <div
        role={isLoggedIn ? "radiogroup" : undefined}
        aria-label={isLoggedIn ? t("ratingLabel") : undefined}
        aria-hidden={isLoggedIn ? undefined : true}
        className="flex items-center gap-0.5"
        onMouseLeave={() => setHover(null)}
      >
        {STARS.map((value) => {
          const isFilled = value <= filled;
          const star = (
            <Star1
              size={18}
              variant={isFilled ? "Bold" : "Linear"}
              className={isFilled ? "text-accent" : "text-muted"}
            />
          );
          if (!isLoggedIn) {
            return (
              <span key={value} className="inline-flex p-0.5" aria-hidden="true">
                {star}
              </span>
            );
          }
          return (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={currentMine === value}
              aria-label={t("rateStar", { value })}
              disabled={pending}
              className="inline-flex min-h-9 min-w-9 items-center justify-center rounded-full disabled:opacity-50"
              onMouseEnter={() => setHover(value)}
              onFocus={() => setHover(value)}
              onBlur={() => setHover(null)}
              onClick={() => rate(value)}
            >
              {star}
            </button>
          );
        })}
      </div>
      <span className="text-xs font-medium text-muted" aria-live="polite">
        {averageLabel}
      </span>
      {!isLoggedIn ? (
        <a
          href={`/${locale}/anmelden?next=${encodeURIComponent(loginHref)}`}
          className="text-xs font-semibold text-accent underline-offset-2 hover:underline"
        >
          {t("rateLogin")}
        </a>
      ) : null}
      {error ? (
        <span className="text-xs text-accent" role="alert">
          {t("ratingError")}
        </span>
      ) : null}
    </div>
  );
}
