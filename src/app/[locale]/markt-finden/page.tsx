import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
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
    description: t("seoDescription"),
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
  const places = await listPublishedPlaces(locale);

  return (
    <div className="places-page">
      {/* Screen-reader / SEO title only — map is the composition */}
      <h1 className="sr-only">{t("title")}</h1>

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
