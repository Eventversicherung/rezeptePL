import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getSessionUser, isStaff } from "@/lib/auth/session";
import { RecipeSearch } from "@/components/search/RecipeSearch";
import type { Locale } from "@/types/content";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SiteHeaderGlass } from "./SiteHeaderGlass";
import { UserMenu } from "./UserMenu";

export async function SiteHeader({ locale }: { locale: string }) {
  const t = await getTranslations("nav");
  const brand = await getTranslations("brand");
  const user = await getSessionUser();

  return (
    <SiteHeaderGlass>
      <div className="site-header__bar mx-auto flex h-[5.5rem] w-full max-w-7xl items-center justify-between gap-3 px-4 sm:h-[6rem] sm:px-8">
        <Link href="/" className="shrink-0" aria-label={brand("name")}>
          <Image
            src="/alemniam-logo.jpg"
            alt={brand("name")}
            width={128}
            height={128}
            className="size-[4.5rem] rounded-full bg-white/90 object-contain shadow-sm sm:size-[5.25rem]"
            priority
          />
        </Link>

        <nav
          className="site-header__nav hidden items-center gap-1.5 md:flex"
          aria-label="Main"
        >
          {(
            [
              ["/rezepte", t("recipes")],
              ["/blog", t("blog")],
              ["/markt-finden", t("findMarket")],
              ["/listen", t("lists")],
              ["/community/hochladen", t("community")],
            ] as const
          ).map(([href, label]) => (
            <Link key={href} href={href} className="site-header__chip">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <RecipeSearch locale={locale as Locale} variant="header" />
          <LanguageSwitcher locale={locale} />
          {!user ? (
            <Link href="/anmelden" className="btn-primary site-header__login">
              {t("login")}
            </Link>
          ) : (
            <UserMenu
              displayName={user.displayName}
              email={user.email}
              locale={locale}
              isStaff={isStaff(user)}
            />
          )}
        </div>
      </div>
    </SiteHeaderGlass>
  );
}
