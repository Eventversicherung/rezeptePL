import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  LegalBox,
  LegalPage,
  LegalSection,
} from "@/components/legal/LegalPage";
import { LEGAL, legalAddressLines, legalMailto } from "@/lib/legal/company";
import { localeLanguages } from "@/lib/seo/alternates";
import { siteUrl } from "@/lib/utils";
import type { Locale } from "@/types/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const t = await getTranslations({ locale, namespace: "imprint" });
  const base = siteUrl();
  return {
    title: t("title"),
    description: t("seoDescription"),
    alternates: {
      canonical: `${base}/${locale}/impressum`,
      languages: localeLanguages(
        `${base}/de/impressum`,
        `${base}/pl/impressum`,
      ),
    },
  };
}

export default async function ImprintPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("imprint");
  const tCommon = await getTranslations("common");
  const address = legalAddressLines(locale);

  return (
    <LegalPage
      title={t("title")}
      crumbsLabel={tCommon("breadcrumbs")}
      crumbs={[
        { label: tCommon("home"), href: "/" },
        { label: t("title") },
      ]}
    >
      <LegalSection title={t("tmgHeading")}>
        <LegalBox>
          <p className="font-semibold">{LEGAL.person}</p>
          <p className="mt-1 text-muted">
            {t("brandLabel")}: {LEGAL.brand}
          </p>
          <p className="mt-3">
            {address.slice(1).map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </LegalBox>
      </LegalSection>

      <LegalSection title={t("contactHeading")}>
        <LegalBox>
          <p>
            {t("emailLabel")}:{" "}
            <a className="font-semibold text-accent underline" href={legalMailto()}>
              {LEGAL.email}
            </a>
          </p>
        </LegalBox>
      </LegalSection>

      <LegalSection title={t("responsibleHeading")}>
        <LegalBox>
          {address.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </LegalBox>
      </LegalSection>

      <LegalSection title={t("disclaimerHeading")}>
        <h3 className="font-display text-base font-semibold">
          {t("contentHeading")}
        </h3>
        <p className="text-muted">{t("contentBody")}</p>
        <h3 className="pt-2 font-display text-base font-semibold">
          {t("linksHeading")}
        </h3>
        <p className="text-muted">{t("linksBody")}</p>
        <h3 className="pt-2 font-display text-base font-semibold">
          {t("copyrightHeading")}
        </h3>
        <p className="text-muted">{t("copyrightBody")}</p>
      </LegalSection>

      <LegalSection title={t("objectionHeading")}>
        <p className="text-muted">
          {t("objectionBody")}{" "}
          <a className="font-semibold text-accent underline" href={legalMailto()}>
            {LEGAL.email}
          </a>
        </p>
      </LegalSection>

      <LegalSection title={t("odrHeading")}>
        <p className="text-muted">
          {t("odrBody")}{" "}
          <a
            className="break-all text-accent underline"
            href="https://ec.europa.eu/consumers/odr/"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
        </p>
        <p className="text-muted">{t("odrEmail")}</p>
      </LegalSection>

      <LegalSection title={t("vsbgHeading")}>
        <p className="text-muted">{t("vsbgBody")}</p>
      </LegalSection>

      <p className="text-sm text-muted">{t("affiliateNote")}</p>
    </LegalPage>
  );
}
