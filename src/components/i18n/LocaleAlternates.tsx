"use client";

import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from "react";
import type { Locale } from "@/types/content";

type Alternates = Partial<Record<Locale, string>>;

const LocaleAlternatesContext = createContext<Alternates | null>(null);

export function LocaleAlternatesProvider({
  alternates,
  children,
}: {
  alternates: Alternates;
  children: ReactNode;
}) {
  const value = useMemo(() => alternates, [alternates]);
  return (
    <LocaleAlternatesContext.Provider value={value}>
      {children}
    </LocaleAlternatesContext.Provider>
  );
}

export function useLocaleAlternates(): Alternates | null {
  return useContext(LocaleAlternatesContext);
}
