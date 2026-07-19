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
    <div className="mode-switch" role="tablist" aria-label="Recipe mode">
      <span className="mode-switch__thumb" data-mode={mode} aria-hidden />
      {(
        [
          ["cook", t("modeCook")],
          ["shop", t("modeShop")],
        ] as const
      ).map(([value, label]) => (
        <button
          key={value}
          type="button"
          role="tab"
          aria-selected={mode === value}
          onClick={() => onChange(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
