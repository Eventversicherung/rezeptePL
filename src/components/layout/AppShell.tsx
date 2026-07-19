import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
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
    <div className="flex min-h-dvh w-full flex-col">
      {/* Full-bleed glass header (outside max-width shell) */}
      <SiteHeader locale={locale} />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 sm:px-8">
        <main className="safe-pb flex-1 pt-6 md:pt-8">{children}</main>

        <footer className="mt-auto hidden border-t border-border py-8 text-sm text-muted md:block">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>{brand("tagline")}</p>
            <div className="flex gap-4">
              <Link href="/impressum">{legal("imprint")}</Link>
              <Link href="/datenschutz">{legal("privacy")}</Link>
            </div>
          </div>
        </footer>
      </div>

      <BottomNav />
    </div>
  );
}
