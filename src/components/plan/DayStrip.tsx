"use client";

import { useTranslations } from "next-intl";
import { formatDayNumber } from "@/lib/plan/week";
import { cn } from "@/lib/utils";

export function DayStrip({
  weekStart,
  labels,
  selected,
  todayWeekday,
  isCurrentWeek,
  onSelect,
}: {
  weekStart: string;
  labels: string[];
  selected: number;
  todayWeekday: number;
  isCurrentWeek: boolean;
  onSelect: (weekday: number) => void;
}) {
  const t = useTranslations("plan");

  return (
    <div className="meal-days" role="tablist" aria-label={t("title")}>
      {labels.map((label, weekday) => {
        const isToday = isCurrentWeek && weekday === todayWeekday;
        return (
          <button
            key={weekday}
            type="button"
            role="tab"
            aria-selected={selected === weekday}
            className={cn(
              "meal-days__chip",
              selected === weekday && "is-selected",
              isToday && "is-today",
            )}
            onClick={() => onSelect(weekday)}
          >
            <span>{label}</span>
            <strong>{formatDayNumber(weekStart, weekday)}</strong>
            {isToday ? <em>{t("today")}</em> : null}
          </button>
        );
      })}
    </div>
  );
}
