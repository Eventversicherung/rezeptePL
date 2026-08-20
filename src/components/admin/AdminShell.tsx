"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const LINKS = [
  { href: "/admin", key: "recipes" as const },
  { href: "/admin/blog", key: "blog" as const },
  { href: "/admin/moderation", key: "moderation" as const },
] as const;

export function AdminShell({
  children,
  displayName,
}: {
  children: React.ReactNode;
  displayName: string;
}) {
  const t = useTranslations("admin");
  const tn = useTranslations("nav");
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div
      data-admin-shell
      className="fixed inset-0 z-[60] flex bg-[var(--navy-deep)] text-white"
    >
      <aside
        className={`absolute inset-y-0 left-0 z-20 w-[min(18rem,86vw)] transform border-r border-white/10 bg-[var(--navy)] transition-transform duration-200 md:static md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-4 md:h-16">
          <p className="font-display text-lg font-semibold">{t("title")}</p>
          <button
            type="button"
            className="min-h-11 min-w-11 rounded-full border border-white/15 text-sm md:hidden"
            onClick={() => setOpen(false)}
            aria-label={t("closeMenu")}
          >
            ×
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-3 pb-6" aria-label={t("title")}>
          {LINKS.map((link) => {
            const active =
              link.href === "/admin"
                ? pathname === "/admin"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex min-h-12 items-center rounded-xl px-3 text-sm font-semibold ${
                  active
                    ? "bg-[#dc143c] text-white"
                    : "text-white/80 hover:bg-white/8"
                }`}
              >
                {t(link.key)}
              </Link>
            );
          })}
          <Link
            href="/"
            className="mt-4 flex min-h-12 items-center rounded-xl px-3 text-sm text-white/60"
          >
            {tn("discover")} →
          </Link>
        </nav>
      </aside>

      {open ? (
        <button
          type="button"
          className="absolute inset-0 z-10 bg-black/40 md:hidden"
          aria-label={t("closeMenu")}
          onClick={() => setOpen(false)}
        />
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col bg-[var(--bg)] text-[var(--fg)]">
        <header className="flex h-14 items-center justify-between gap-3 border-b border-border px-4 md:h-16">
          <button
            type="button"
            className="min-h-11 rounded-full border border-border px-3 text-sm font-semibold md:hidden"
            onClick={() => setOpen(true)}
          >
            {t("menu")}
          </button>
          <p className="truncate text-sm font-semibold text-[var(--navy)]">
            {displayName}
          </p>
        </header>
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-6 sm:px-8">
          {children}
        </div>
      </div>
    </div>
  );
}
