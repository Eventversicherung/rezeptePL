"use client";

import { useLocaleAlternates } from "@/components/i18n/LocaleAlternates";
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
  const alternates = useLocaleAlternates();

  function switchTo(next: Locale) {
    const target = alternates?.[next] ?? pathname;
    router.replace(target, { locale: next });
  }

  const onDark = variant === "onDark";

  return (
    <div
      className={
        onDark
          ? "inline-flex min-h-8 items-center rounded-full border border-white/25 bg-white/10 p-[0.15rem] text-xs font-semibold"
          : "site-header__lang"
      }
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
            data-active={active ? "true" : "false"}
            className={
              onDark
                ? `inline-flex min-h-[1.7rem] min-w-8 items-center justify-center rounded-full px-[0.45rem] text-xs font-semibold uppercase tracking-wide ${
                    active
                      ? "bg-[#dc143c] text-white"
                      : "bg-transparent text-white/75"
                  }`
                : "site-header__lang-btn"
            }
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
