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
    <header className="site-header sticky top-0 z-50 -mx-4 sm:-mx-6">
      <div className="site-header__bar">
        <div className="mx-auto flex h-[4.25rem] w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-2.5 sm:gap-3"
            aria-label={brand("name")}
          >
            <Image
              src="/alemniam-logo.jpg"
              alt=""
              width={52}
              height={52}
              className="size-11 shrink-0 rounded-full bg-white object-contain shadow-sm ring-2 ring-white/90 sm:size-[3.25rem]"
              priority
            />
            <span className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
              <span className="text-[#ff6b81]">Ale</span>
              <span className="text-white">Mniam</span>
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
            <LanguageSwitcher locale={locale} variant="onDark" />
            {!user ? (
              <Link href="/anmelden" className="site-header__cta">
                {t("login")}
              </Link>
            ) : (
              <Link
                href="/profil"
                className="hidden max-w-[8rem] truncate rounded-full bg-white/15 px-3 py-1.5 text-sm font-medium text-white sm:inline"
              >
                {user.displayName}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="site-header__trim" aria-hidden />
    </header>
  );
}
