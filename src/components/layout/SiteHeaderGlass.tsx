"use client";

import { useEffect, useState } from "react";

/** Sticky glass shell that frosts when content scrolls underneath. */
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
      className={`site-header sticky top-0 z-50 -mx-4 sm:-mx-6 ${
        scrolled ? "site-header--scrolled" : ""
      }`}
    >
      {children}
    </header>
  );
}
