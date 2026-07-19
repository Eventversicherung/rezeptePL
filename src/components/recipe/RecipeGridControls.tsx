"use client";

import { useEffect, useState, type ReactNode } from "react";

export type GridDensity = 3 | 4 | 5;

function densityClass(cols: GridDensity): string {
  if (cols === 3) return "sm:grid-cols-2 lg:grid-cols-3";
  if (cols === 4) return "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
  return "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5";
}

export function RecipeGridControls({
  children,
  label,
  optionLabels,
  initial = 3,
  storageKey = "alemniam-recipe-grid-cols",
}: {
  children: ReactNode;
  label: string;
  optionLabels: Record<GridDensity, string>;
  initial?: GridDensity;
  storageKey?: string;
}) {
  const [cols, setCols] = useState<GridDensity>(initial);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw === "3" || raw === "4" || raw === "5") {
        setCols(Number(raw) as GridDensity);
      }
    } catch {
      /* ignore */
    }
  }, [storageKey]);

  function select(next: GridDensity) {
    setCols(next);
    try {
      window.localStorage.setItem(storageKey, String(next));
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm font-semibold text-muted">{label}</p>
        <div
          className="inline-flex rounded-full border border-border bg-surface p-1"
          role="group"
          aria-label={label}
        >
          {([3, 4, 5] as const).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => select(n)}
              className={`min-h-10 min-w-11 rounded-full px-3 text-sm font-semibold transition ${
                cols === n
                  ? "bg-accent text-white"
                  : "text-muted hover:text-foreground"
              }`}
              aria-pressed={cols === n}
            >
              {optionLabels[n]}
            </button>
          ))}
        </div>
      </div>
      <div className={`stagger grid gap-8 ${densityClass(cols)}`}>{children}</div>
    </div>
  );
}
