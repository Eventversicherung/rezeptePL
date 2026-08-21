import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LocaleAlternatesProvider } from "@/components/i18n/LocaleAlternates";
import { BottomNav } from "./BottomNav";
import { SiteHeader } from "./SiteHeader";

export async function AppShell({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const brand = await getTranslations("brand");
  const legal = await getTranslations("legal");

  return (
    <LocaleAlternatesProvider>
      <div className="flex min-h-dvh w-full flex-col" lang={locale}>
        {/* Full-bleed glass header (outside max-width shell) */}
        <Suspense
          fallback={<div className="h-[5.5rem] sm:h-[6rem]" aria-hidden />}
        >
          <SiteHeader locale={locale} />
        </Suspense>

        <div className="safe-pb mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-8">
          <main className="flex-1 pt-6 md:pt-8">{children}</main>

          <footer className="mt-auto border-t border-border py-6 text-sm text-muted md:py-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
              <p>{brand("tagline")}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                <Link href="/impressum">{legal("imprint")}</Link>
                <Link href="/datenschutz">{legal("privacy")}</Link>
              </div>
            </div>
          </footer>
        </div>

        <BottomNav />
      </div>
    </LocaleAlternatesProvider>
  );
}
