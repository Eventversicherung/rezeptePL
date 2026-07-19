"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

export function LanguageSwitcher({
  locale,
  variant = "default",
}: {
  locale: string;
  variant?: "default" | "onDark";
}) {
  const router = useRouter();
  const pathname = usePathname();

  function switchTo(next: Locale) {
    router.replace(pathname, { locale: next });
  }

  const onDark = variant === "onDark";

  return (
    <div
      className={`inline-flex rounded-full p-0.5 text-xs ${
        onDark
          ? "border border-white/25 bg-white/10"
          : "border border-border bg-surface"
      }`}
      role="group"
      aria-label="Language"
    >
      {(["de", "pl"] as Locale[]).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => switchTo(code)}
            className={`min-h-8 min-w-9 rounded-full px-2 uppercase ${
              active
                ? "bg-[#dc143c] font-semibold text-white"
                : onDark
                  ? "text-white/75"
                  : "text-muted"
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
