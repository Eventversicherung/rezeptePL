"use client";

import { useEffect, useRef, useState } from "react";
import { SearchIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SearchHitRow } from "@/components/search/SearchHitRow";
import {
  SEARCH_PICKER_LIMIT,
  SEARCH_QUERY_MAX,
  type SearchHit,
} from "@/lib/search/types";
import type { PlanRecipe } from "@/lib/plan/recipe";
import type { Locale } from "@/types/content";
import { cn } from "@/lib/utils";

export function RecipePickerSheet({
  open,
  locale,
  saved,
  onOpenChange,
  onPick,
}: {
  open: boolean;
  locale: Locale;
  saved: PlanRecipe[];
  onOpenChange: (open: boolean) => void;
  onPick: (recipe: PlanRecipe) => void;
}) {
  const t = useTranslations("plan");
  const ts = useTranslations("search");
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const [query, setQuery] = useState("");
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [loading, setLoading] = useState(false);
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    if (!open) {
      setQuery("");
      setHits([]);
      return;
    }
    const frame = window.requestAnimationFrame(() => inputRef.current?.focus());
    return () => window.cancelAnimationFrame(frame);
  }, [open]);

  useEffect(() => {
    const q = query.trim();
    if (!open || q.length < 2) {
      abortRef.current?.abort();
      setHits([]);
      setLoading(false);
      return;
    }

    const handle = window.setTimeout(async () => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      setLoading(true);
      try {
        const params = new URLSearchParams({
          q: q.slice(0, SEARCH_QUERY_MAX),
          locale,
          limit: String(SEARCH_PICKER_LIMIT),
        });
        const res = await fetch(`/api/search?${params}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("search failed");
        const data = (await res.json()) as { hits?: SearchHit[] };
        setHits(Array.isArray(data.hits) ? data.hits : []);
      } catch (error) {
        if ((error as { name?: string }).name === "AbortError") return;
        setHits([]);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 160);

    return () => window.clearTimeout(handle);
  }, [locale, open, query]);

  async function pick(id: string) {
    setBusyId(id);
    const { loadPlanRecipeAction } = await import("@/app/actions/account");
    const recipe = await loadPlanRecipeAction(id, locale);
    setBusyId(null);
    if (!recipe) return;
    onPick(recipe);
    onOpenChange(false);
  }

  const searching = query.trim().length >= 2;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="meal-picker"
        showCloseButton
      >
        <DialogHeader>
          <DialogTitle className="font-display text-xl">
            {t("pickRecipe")}
          </DialogTitle>
          <DialogDescription>{t("trayHelp")}</DialogDescription>
        </DialogHeader>
        <label className="meal-picker__field">
          <SearchIcon />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={t("searchRecipes")}
            autoComplete="off"
          />
        </label>
        <div className="meal-picker__list">
          {searching ? (
            <>
              <p className="meal-picker__label">
                {loading ? ts("loading") : t("searchHeading")}
              </p>
              {hits.length ? (
                hits.map((hit) => (
                  <button
                    key={`${hit.kind}-${hit.id}`}
                    type="button"
                    className="meal-picker__hit"
                    disabled={busyId === hit.id}
                    onClick={() => pick(hit.id)}
                  >
                    <SearchHitRow hit={hit} />
                  </button>
                ))
              ) : !loading ? (
                <p className="meal-picker__empty">
                  {ts("empty", { query: query.trim() })}
                </p>
              ) : null}
            </>
          ) : (
            <>
              <p className="meal-picker__label">{t("savedHeading")}</p>
              {saved.length ? (
                saved.map((recipe) => (
                  <button
                    key={recipe.id}
                    type="button"
                    className={cn("meal-picker__saved", busyId === recipe.id && "is-busy")}
                    disabled={busyId === recipe.id}
                    onClick={() => pick(recipe.id)}
                  >
                    <SearchHitRow
                      hit={{
                        id: recipe.id,
                        kind: "recipe",
                        href: "#",
                        title: recipe.title,
                        image: recipe.image,
                        minutes: recipe.minutes,
                        matchKind: "title",
                        matchValue: recipe.title,
                      }}
                    />
                  </button>
                ))
              ) : (
                <p className="meal-picker__empty">{t("savedEmpty")}</p>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
