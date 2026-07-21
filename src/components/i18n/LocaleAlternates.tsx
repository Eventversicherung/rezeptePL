"use client";

import {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";
import type { Locale } from "@/types/content";

export type LocaleAlternatesMap = Partial<Record<Locale, string>>;

const AlternatesContext = createContext<LocaleAlternatesMap | null>(null);
const SetAlternatesContext = createContext<
  ((next: LocaleAlternatesMap | null) => void) | null
>(null);

/** Must wrap the header (LanguageSwitcher) and page content. */
export function LocaleAlternatesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [alternates, setAlternates] = useState<LocaleAlternatesMap | null>(
    null,
  );
  return (
    <SetAlternatesContext.Provider value={setAlternates}>
      <AlternatesContext.Provider value={alternates}>
        {children}
      </AlternatesContext.Provider>
    </SetAlternatesContext.Provider>
  );
}

/**
 * Register locale-specific paths for the header language switcher.
 * Renders nothing — pages call this so SiteHeader (sibling under AppShell)
 * can read the correct DE/PL slugs when switching language.
 */
export function SetLocaleAlternates({
  de,
  pl,
}: {
  de: string;
  pl: string;
}) {
  const setAlternates = useContext(SetAlternatesContext);

  useLayoutEffect(() => {
    if (!setAlternates) return;
    setAlternates({ de, pl });
    return () => setAlternates(null);
  }, [setAlternates, de, pl]);

  return null;
}

export function useLocaleAlternates(): LocaleAlternatesMap | null {
  return useContext(AlternatesContext);
}
