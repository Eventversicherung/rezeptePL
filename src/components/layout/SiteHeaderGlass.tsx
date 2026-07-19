"use client";

import { useEffect, useState } from "react";

/** Sticky glass shell that frosts full-width when content scrolls underneath. */
export function SiteHeaderGlass({ children }: { children: React.ReactNode }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header sticky top-0 z-50 w-full ${
        scrolled ? "site-header--scrolled" : ""
      }`}
    >
      {children}
    </header>
  );
}
