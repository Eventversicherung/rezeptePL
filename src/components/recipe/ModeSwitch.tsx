"use client";

import { useTranslations } from "next-intl";
import type { RecipeMode } from "@/types/content";

export function ModeSwitch({
  mode,
  onChange,
}: {
  mode: RecipeMode;
  onChange: (mode: RecipeMode) => void;
}) {
  const t = useTranslations("recipes");

  return (
    <div
      className="inline-flex w-full max-w-sm rounded-full border border-border bg-elevated p-1"
      role="tablist"
      aria-label="Recipe mode"
    >
      {(
        [
          ["cook", t("modeCook")],
          ["shop", t("modeShop")],
        ] as const
      ).map(([value, label]) => {
        const active = mode === value;
        return (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(value)}
            className={`min-h-11 flex-1 rounded-full px-4 text-sm transition-colors duration-150 ${
              active ? "segment-active" : "text-muted"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
