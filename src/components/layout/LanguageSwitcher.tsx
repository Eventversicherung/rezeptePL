"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export function LanguageSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(next: Locale) {
    router.replace(pathname, { locale: next });
  }

  return (
    <div
      className="inline-flex rounded-full border border-border bg-surface p-0.5 text-xs"
      role="group"
      aria-label="Language"
    >
      {(["de", "pl"] as Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchTo(code)}
          className={`min-h-8 min-w-9 rounded-full px-2 uppercase ${
            locale === code
              ? "bg-foreground text-[var(--bg)]"
              : "text-muted"
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
