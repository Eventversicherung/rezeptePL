import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getSessionUser } from "@/lib/auth/session";
import { LanguageSwitcher } from "./LanguageSwitcher";

export async function SiteHeader({ locale }: { locale: string }) {
  const t = await getTranslations("nav");
  const brand = await getTranslations("brand");
  const user = await getSessionUser();

  return (
    <header className="site-header sticky top-0 z-50 -mx-4 border-b border-border/80 bg-[color-mix(in_srgb,#fffdfb_92%,transparent)] backdrop-blur-xl sm:-mx-6">
      <div className="mx-auto flex h-[4.75rem] w-full max-w-7xl items-center justify-between gap-3 px-4 sm:h-[5.25rem] sm:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 sm:gap-3.5"
          aria-label={brand("name")}
        >
          <Image
            src="/alemniam-logo.jpg"
            alt={brand("name")}
            width={96}
            height={96}
            className="size-14 shrink-0 rounded-full bg-white object-contain sm:size-16"
            priority
          />
          <span className="hidden font-display text-lg font-semibold tracking-tight text-[var(--navy)] sm:inline sm:text-xl">
            <span className="text-accent">Ale</span>Mniam
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {(
            [
              ["/rezepte", t("recipes")],
              ["/listen", t("lists")],
              ["/community/hochladen", t("community")],
              ["/profil", t("profile")],
            ] as const
          ).map(([href, label]) => (
            <Link key={href} href={href} className="site-header__link">
              {label}
            </Link>
          ))}
          {user?.role === "admin" || user?.role === "moderator" ? (
            <Link href="/admin" className="site-header__link">
              {t("admin")}
            </Link>
          ) : null}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher locale={locale} />
          {!user ? (
            <Link href="/anmelden" className="btn-primary !min-h-9 px-4 text-sm">
              {t("login")}
            </Link>
          ) : (
            <Link
              href="/profil"
              className="hidden max-w-[8rem] truncate text-sm font-medium text-[var(--navy)] sm:inline"
            >
              {user.displayName}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
