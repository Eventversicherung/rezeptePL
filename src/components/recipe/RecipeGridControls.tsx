"use client";

import { useState, useSyncExternalStore, type ReactNode } from "react";
import { useConsent } from "@/components/consent/CookieConsent";
import { CONSENT_CHANGE_EVENT } from "@/lib/consent";

export type GridDensity = 3 | 4 | 5;

function subscribeGrid(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
  };
}

function readStoredDensity(storageKey: string, allowed: boolean): GridDensity | null {
  if (!allowed) return null;
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (raw === "3" || raw === "4" || raw === "5") {
      return Number(raw) as GridDensity;
    }
  } catch {
    /* ignore */
  }
  return null;
}

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
  const { allowed } = useConsent();
  const canStorePrefs = allowed("preferences");
  const storedCols = useSyncExternalStore(
    subscribeGrid,
    () => readStoredDensity(storageKey, canStorePrefs),
    () => initial,
  );
  const [override, setOverride] = useState<GridDensity | null>(null);
  const cols = override ?? storedCols ?? initial;

  function select(next: GridDensity) {
    setOverride(next);
    if (!canStorePrefs) return;
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
