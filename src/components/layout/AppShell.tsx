import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getSessionUser } from "@/lib/auth/session";
import { BottomNav } from "./BottomNav";
import { LanguageSwitcher } from "./LanguageSwitcher";

export async function AppShell({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const t = await getTranslations("nav");
  const brand = await getTranslations("brand");
  const legal = await getTranslations("legal");
  const user = await getSessionUser();

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-4 sm:px-6">
      <header className="sticky top-0 z-40 -mx-4 border-b border-border/70 bg-[color-mix(in_oklch,var(--bg)_88%,transparent)] px-4 backdrop-blur-md sm:-mx-6 sm:px-6">
        <div className="flex h-14 items-center justify-between gap-3">
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight"
          >
            <span className="text-accent">A</span>
            {brand("name").slice(1)}
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-muted md:flex">
            <Link href="/rezepte" className="hover:text-foreground">
              {t("recipes")}
            </Link>
            <Link href="/listen" className="hover:text-foreground">
              {t("lists")}
            </Link>
            <Link href="/community/hochladen" className="hover:text-foreground">
              {t("community")}
            </Link>
            <Link href="/profil" className="hover:text-foreground">
              {t("profile")}
            </Link>
            {user?.role === "admin" || user?.role === "moderator" ? (
              <Link href="/admin" className="hover:text-foreground">
                {t("admin")}
              </Link>
            ) : null}
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitcher locale={locale} />
            {!user ? (
              <Link
                href="/anmelden"
                className="btn-primary !min-h-9 px-3 text-sm"
              >
                {t("login")}
              </Link>
            ) : (
              <span className="hidden text-sm text-muted sm:inline">
                {user.displayName}
              </span>
            )}
          </div>
        </div>
      </header>

      <main className="safe-pb flex-1 pt-6 md:pt-10">{children}</main>

      <footer className="mt-auto hidden border-t border-border py-8 text-sm text-muted md:block">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p>{brand("tagline")}</p>
          <div className="flex gap-4">
            <Link href="/impressum">{legal("imprint")}</Link>
            <Link href="/datenschutz">{legal("privacy")}</Link>
          </div>
        </div>
      </footer>

      <BottomNav />
    </div>
  );
}
