"use client";

import { SearchIcon, XIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SEARCH_QUERY_MAX, type SearchHit } from "@/lib/search/types";
import type { Locale } from "@/types/content";
import { cn } from "@/lib/utils";
import { SearchHitRow } from "./SearchHitRow";

type Variant = "header" | "hub";

const CLOSE_INLINE_SEARCH = "alemniam:close-inline-search";

function closeOtherSearchPanels() {
  window.dispatchEvent(new Event(CLOSE_INLINE_SEARCH));
}

export function RecipeSearch({
  locale,
  variant,
  defaultQuery = "",
  categorySlug,
}: {
  locale: Locale;
  variant: Variant;
  defaultQuery?: string;
  categorySlug?: string;
}) {
  const t = useTranslations("search");
  const router = useRouter();
  const inputId = useId();
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const desktopInputRef = useRef<HTMLInputElement>(null);
  const dialogInputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const [query, setQuery] = useState(defaultQuery);
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const dialogOpenRef = useRef(false);

  useEffect(() => {
    dialogOpenRef.current = dialogOpen;
  }, [dialogOpen]);

  const goToIndex = useCallback(
    (value: string) => {
      const params = new URLSearchParams();
      const trimmed = value.trim();
      if (trimmed) params.set("q", trimmed);
      if (categorySlug) params.set("kat", categorySlug);
      const qs = params.toString();
      router.push(qs ? `/rezepte?${qs}` : "/rezepte");
      setOpen(false);
      setDialogOpen(false);
    },
    [categorySlug, router],
  );

  const goToHit = useCallback(
    (hit: SearchHit) => {
      router.push(hit.href);
      setOpen(false);
      setDialogOpen(false);
    },
    [router],
  );

  useEffect(() => {
    const q = query.trim();
    if (q.length < 2) {
      abortRef.current?.abort();
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
        });
        const res = await fetch(`/api/search?${params}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("search failed");
        const data = (await res.json()) as { hits?: SearchHit[] };
        setHits(Array.isArray(data.hits) ? data.hits : []);
        setActiveIndex(0);
      } catch (error) {
        if ((error as { name?: string }).name === "AbortError") return;
        setHits([]);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, 180);

    return () => window.clearTimeout(handle);
  }, [locale, query]);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (dialogOpenRef.current) return;
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  useEffect(() => {
    function onCloseInline() {
      setOpen(false);
      desktopInputRef.current?.blur();
    }
    window.addEventListener(CLOSE_INLINE_SEARCH, onCloseInline);
    return () => window.removeEventListener(CLOSE_INLINE_SEARCH, onCloseInline);
  }, []);

  const openDialog = useCallback(() => {
    setOpen(false);
    desktopInputRef.current?.blur();
    closeOtherSearchPanels();
    setDialogOpen(true);
  }, []);

  useEffect(() => {
    if (variant !== "header") return;
    function onKey(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        event.stopPropagation();
        openDialog();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openDialog, variant]);

  useEffect(() => {
    if (!dialogOpen) return;
    const frame = window.requestAnimationFrame(() => {
      dialogInputRef.current?.focus();
    });
    return () => window.cancelAnimationFrame(frame);
  }, [dialogOpen]);

  function onChange(value: string) {
    const next = value.slice(0, SEARCH_QUERY_MAX);
    setQuery(next);
    if (!dialogOpenRef.current) setOpen(true);
    if (next.trim().length < 2) {
      setHits([]);
      setLoading(false);
    }
  }

  function onKeyDown(event: ReactKeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") {
      setOpen(false);
      (event.target as HTMLInputElement).blur();
      return;
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (!dialogOpenRef.current) setOpen(true);
      setActiveIndex((i) => Math.min(i + 1, Math.max(hits.length - 1, 0)));
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
      return;
    }
    if (event.key === "Enter") {
      if ((dialogOpenRef.current || open) && hits[activeIndex]) {
        event.preventDefault();
        goToHit(hits[activeIndex]);
      }
    }
  }

  const showPanel = open && !dialogOpen && query.trim().length >= 2;
  const showEmpty = query.trim().length >= 2 && !loading && hits.length === 0;

  const results = (
    <Command shouldFilter={false} className="recipe-search__command">
      <CommandList id={listId} className="recipe-search__list">
        {loading && hits.length === 0 ? (
          <div className="recipe-search__empty">{t("loading")}</div>
        ) : showEmpty ? (
          <CommandEmpty className="recipe-search__empty">
            <strong>{t("empty", { query: query.trim() })}</strong>
            <span>{t("emptyHint")}</span>
          </CommandEmpty>
        ) : null}
        {hits.length > 0 ? (
          <CommandGroup className="recipe-search__group">
            {hits.map((hit, index) => (
              <CommandItem
                key={hit.id}
                value={hit.id}
                onMouseEnter={() => setActiveIndex(index)}
                onSelect={() => goToHit(hit)}
                data-checked={false}
                className={cn(
                  "recipe-search__item",
                  index === activeIndex && "is-active",
                )}
              >
                <SearchHitRow hit={hit} active={index === activeIndex} />
              </CommandItem>
            ))}
          </CommandGroup>
        ) : null}
      </CommandList>
      {query.trim().length >= 2 ? (
        <button
          type="button"
          className="recipe-search__all"
          onClick={() => goToIndex(query)}
        >
          {t("viewAll")}
        </button>
      ) : null}
    </Command>
  );

  if (variant === "header") {
    return (
      <div className="recipe-search recipe-search--header" ref={rootRef}>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="recipe-search__icon-btn lg:hidden"
          aria-label={t("open")}
          onClick={openDialog}
        >
          <SearchIcon />
        </Button>

        <form
          className="recipe-search__form recipe-search__form--header hidden lg:flex"
          action={`/${locale}/rezepte`}
          method="get"
          onSubmit={(event) => {
            event.preventDefault();
            if (open && hits[activeIndex]) {
              goToHit(hits[activeIndex]);
              return;
            }
            goToIndex(query);
          }}
        >
          {categorySlug ? (
            <input type="hidden" name="kat" value={categorySlug} />
          ) : null}
          <SearchIcon className="recipe-search__glyph" aria-hidden />
          <label className="sr-only" htmlFor={inputId}>
            {t("open")}
          </label>
          <input
            ref={desktopInputRef}
            id={inputId}
            name="q"
            value={query}
            maxLength={SEARCH_QUERY_MAX}
            placeholder={t("placeholder")}
            autoComplete="off"
            role="combobox"
            aria-expanded={showPanel}
            aria-controls={listId}
            aria-autocomplete="list"
            className="recipe-search__input recipe-search__input--header"
            onChange={(event) => onChange(event.target.value)}
            onFocus={() => {
              if (!dialogOpenRef.current && query.trim().length >= 2) {
                setOpen(true);
              }
            }}
            onKeyDown={onKeyDown}
          />
          {query ? (
            <button
              type="button"
              className="recipe-search__clear"
              aria-label={t("close")}
              onClick={() => {
                setQuery("");
                setHits([]);
                desktopInputRef.current?.focus();
              }}
            >
              <XIcon />
            </button>
          ) : (
            <kbd className="recipe-search__kbd hidden xl:inline">⌘K</kbd>
          )}
        </form>

        {showPanel ? (
          <div className="recipe-search__dropdown hidden lg:block">{results}</div>
        ) : null}

        <Dialog
          open={dialogOpen}
          onOpenChange={(next) => {
            setDialogOpen(next);
            if (next) {
              setOpen(false);
              closeOtherSearchPanels();
            }
          }}
        >
          <DialogContent
            showCloseButton
            overlayClassName="recipe-search__overlay"
            className="recipe-search__dialog top-[12vh] translate-y-0 sm:max-w-lg"
          >
            <DialogHeader className="sr-only">
              <DialogTitle>{t("open")}</DialogTitle>
              <DialogDescription>{t("placeholder")}</DialogDescription>
            </DialogHeader>
            <form
              action={`/${locale}/rezepte`}
              method="get"
              onSubmit={(event) => {
                event.preventDefault();
                if (hits[activeIndex]) {
                  goToHit(hits[activeIndex]);
                  return;
                }
                goToIndex(query);
              }}
            >
              <div className="recipe-search__dialog-field">
                <SearchIcon aria-hidden />
                <input
                  ref={dialogInputRef}
                  name="q"
                  value={query}
                  maxLength={SEARCH_QUERY_MAX}
                  placeholder={t("placeholder")}
                  autoComplete="off"
                  className="recipe-search__input recipe-search__input--dialog"
                  onChange={(event) => onChange(event.target.value)}
                  onKeyDown={onKeyDown}
                />
              </div>
            </form>
            <div className="recipe-search__dialog-results">{results}</div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <div className="recipe-search recipe-search--hub" ref={rootRef}>
      <form
        className="hub-search__form"
        action={`/${locale}/rezepte`}
        method="get"
        onSubmit={(event) => {
          event.preventDefault();
          if (open && hits[activeIndex]) {
            goToHit(hits[activeIndex]);
            return;
          }
          goToIndex(query);
        }}
      >
        {categorySlug ? (
          <input type="hidden" name="kat" value={categorySlug} />
        ) : null}
        <label className="sr-only" htmlFor={inputId}>
          {t("open")}
        </label>
        <input
          id={inputId}
          name="q"
          value={query}
          maxLength={SEARCH_QUERY_MAX}
          placeholder={t("placeholder")}
          autoComplete="off"
          role="combobox"
          aria-expanded={showPanel}
          aria-controls={listId}
          aria-autocomplete="list"
          className="hub-search__input"
          onChange={(event) => onChange(event.target.value)}
          onFocus={() => query.trim().length >= 2 && setOpen(true)}
          onKeyDown={onKeyDown}
        />
        <button type="submit" className="hub-search__submit">
          {t("submit")}
        </button>
      </form>
      {showPanel ? (
        <div className="recipe-search__dropdown recipe-search__dropdown--hub">
          {results}
        </div>
      ) : null}
    </div>
  );
}
