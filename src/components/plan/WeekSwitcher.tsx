"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  addWeeks,
  formatWeekRange,
  maxWeekStart,
  minWeekStart,
  mondayOf,
} from "@/lib/plan/week";
import type { Locale } from "@/types/content";
import { cn } from "@/lib/utils";

function hrefFor(weekStart: string) {
  const current = mondayOf();
  return weekStart === current ? "/plan" : `/plan?w=${weekStart}`;
}

export function WeekSwitcher({
  weekStart,
  locale,
}: {
  weekStart: string;
  locale: Locale;
}) {
  const t = useTranslations("plan");
  const prev = addWeeks(weekStart, -1);
  const next = addWeeks(weekStart, 1);
  const current = mondayOf();
  const canPrev = prev >= minWeekStart();
  const canNext = next <= maxWeekStart();

  return (
    <div className="meal-week">
      <Link
        href={hrefFor(prev)}
        aria-disabled={!canPrev}
        className={cn("meal-week__nav", !canPrev && "is-disabled")}
        tabIndex={canPrev ? 0 : -1}
        onClick={(event) => {
          if (!canPrev) event.preventDefault();
        }}
      >
        <ChevronLeftIcon />
        <span className="sr-only">{t("prevWeek")}</span>
      </Link>
      <div className="meal-week__label">
        <p>{formatWeekRange(weekStart, locale)}</p>
        {weekStart === current ? <span>{t("thisWeek")}</span> : null}
      </div>
      <Link
        href={hrefFor(next)}
        aria-disabled={!canNext}
        className={cn("meal-week__nav", !canNext && "is-disabled")}
        tabIndex={canNext ? 0 : -1}
        onClick={(event) => {
          if (!canNext) event.preventDefault();
        }}
      >
        <ChevronRightIcon />
        <span className="sr-only">{t("nextWeek")}</span>
      </Link>
      {weekStart !== current ? (
        <Link href="/plan" className="meal-week__today">
          {t("today")}
        </Link>
      ) : null}
    </div>
  );
}
