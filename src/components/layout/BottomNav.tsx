"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

const items = [
  { href: "/", key: "discover" as const },
  { href: "/rezepte", key: "recipes" as const },
  { href: "/listen", key: "lists" as const },
  { href: "/profil", key: "profile" as const },
];

export function BottomNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[color-mix(in_srgb,#1a2744_12%,transparent)] bg-[color-mix(in_srgb,#fffdfb_94%,transparent)] backdrop-blur-md md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      aria-label="Primary"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-4 px-2 py-2">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex min-h-12 flex-col items-center justify-center rounded-xl text-xs font-semibold ${
                  active
                    ? "bg-[color-mix(in_srgb,#dc143c_12%,transparent)] text-[#dc143c]"
                    : "text-[var(--navy)]/55"
                }`}
              >
                {t(item.key)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
