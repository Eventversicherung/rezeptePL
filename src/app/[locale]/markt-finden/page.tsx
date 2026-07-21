import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PlacesFinder } from "@/components/places/PlacesFinder";
import { listPublishedPlaces } from "@/lib/data/places";
import { siteUrl } from "@/lib/utils";
import type { Locale } from "@/types/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const t = await getTranslations({ locale, namespace: "places" });
  const base = siteUrl();
  return {
    title: `${t("title")} | Alemniam`,
    description: t("sub"),
    alternates: {
      canonical: `${base}/${locale}/markt-finden`,
      languages: {
        de: `${base}/de/markt-finden`,
        pl: `${base}/pl/markt-finden`,
        "x-default": `${base}/de/markt-finden`,
      },
    },
  };
}

export default async function MarktFindenPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  setRequestLocale(locale);

  const t = await getTranslations("places");
  const tCommon = await getTranslations("common");
  const places = await listPublishedPlaces(locale);

  return (
    <div className="space-y-8 sm:space-y-10">
      <Breadcrumbs
        ariaLabel={tCommon("breadcrumbs")}
        items={[
          { href: "/", label: tCommon("home") },
          { label: t("title") },
        ]}
      />

      <header className="reveal max-w-3xl">
        <p className="section-kicker">{t("kicker")}</p>
        <h1 className="mt-2 font-display text-2xl font-semibold tracking-tight text-[var(--navy)] sm:text-[1.75rem]">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-muted sm:text-base">{t("sub")}</p>
      </header>

      {places.length === 0 ? (
        <p className="rounded-[var(--radius)] bg-[var(--bg-elevated)] px-4 py-6 text-[var(--fg-muted)]">
          {t("empty")}
        </p>
      ) : (
        <PlacesFinder places={places} locale={locale} />
      )}
    </div>
  );
}
