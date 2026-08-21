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
  const t = await getTranslations({ locale, namespace: "privacy" });
  const base = siteUrl();
  return {
    title: t("title"),
    description: t("seoDescription"),
    alternates: {
      canonical: `${base}/${locale}/datenschutz`,
      languages: localeLanguages(
        `${base}/de/datenschutz`,
        `${base}/pl/datenschutz`,
      ),
    },
  };
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5 text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");
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
      <p className="text-sm text-muted">{t("updated", { date: "21.08.2026" })}</p>

      <LegalSection title={t("controllerHeading")}>
        <p className="text-muted">{t("controllerLead")}</p>
        <LegalBox>
          <p className="font-semibold">
            {LEGAL.person} – {LEGAL.brand}
          </p>
          {address.slice(1).map((line) => (
            <p key={line}>{line}</p>
          ))}
          <p className="mt-3">
            {t("emailLabel")}:{" "}
            <a className="font-semibold text-accent underline" href={legalMailto()}>
              {LEGAL.email}
            </a>
          </p>
        </LegalBox>
        <p className="text-muted">{t("noDpo")}</p>
      </LegalSection>

      <LegalSection title={t("visitHeading")}>
        <p className="text-muted">{t("visitLead")}</p>
        <BulletList
          items={[
            t("visitIp"),
            t("visitTime"),
            t("visitUrl"),
            t("visitReferrer"),
            t("visitUa"),
          ]}
        />
        <p className="text-muted">{t("visitPurpose")}</p>
        <p className="text-muted">{t("visitLaw")}</p>
        <p className="text-muted">{t("visitRetention")}</p>
      </LegalSection>

      <LegalSection title={t("accountHeading")}>
        <p className="text-muted">{t("accountLead")}</p>
        <BulletList
          items={[
            t("accountEmail"),
            t("accountPassword"),
            t("accountName"),
            t("accountRecipes"),
            t("accountLists"),
            t("accountPlan"),
            t("accountCommunity"),
            t("accountActivity"),
          ]}
        />
        <p className="text-muted">{t("accountPurpose")}</p>
        <p className="text-muted">{t("accountLaw")}</p>
        <p className="text-muted">{t("accountRetention")}</p>
      </LegalSection>

      <LegalSection title={t("geoHeading")}>
        <p className="text-muted">{t("geoBody")}</p>
      </LegalSection>

      <LegalSection title={t("processorsHeading")}>
        <p className="text-muted">{t("processorsLead")}</p>
        <h3 className="font-display text-base font-semibold">
          {t("vercelHeading")}
        </h3>
        <p className="text-muted">
          {t("vercelBody")}{" "}
          <a
            className="break-all text-accent underline"
            href="https://vercel.com/legal/privacy-policy"
            rel="noopener noreferrer"
            target="_blank"
          >
            vercel.com/legal/privacy-policy
          </a>
        </p>
        <h3 className="font-display text-base font-semibold">
          {t("supabaseHeading")}
        </h3>
        <p className="text-muted">
          {t("supabaseBody")}{" "}
          <a
            className="break-all text-accent underline"
            href="https://supabase.com/privacy"
            rel="noopener noreferrer"
            target="_blank"
          >
            supabase.com/privacy
          </a>
        </p>
        <h3 className="font-display text-base font-semibold">
          {t("affiliateHeading")}
        </h3>
        <p className="text-muted">{t("affiliateBody")}</p>
      </LegalSection>

      <LegalSection title={t("cookiesHeading")}>
        <p className="text-muted">{t("cookiesLead")}</p>
        <BulletList items={[t("cookieSession"), t("cookieLocal")]} />
        <p className="text-muted">{t("cookiesOptional")}</p>
      </LegalSection>

      <LegalSection title={t("shareHeading")}>
        <p className="text-muted">{t("shareLead")}</p>
        <BulletList items={[t("shareConsent"), t("shareLegal"), t("shareLaw")]} />
      </LegalSection>

      <LegalSection title={t("rightsHeading")}>
        <p className="text-muted">{t("rightsLead")}</p>
        <BulletList
          items={[
            t("rightAccess"),
            t("rightRectify"),
            t("rightErase"),
            t("rightRestrict"),
            t("rightPort"),
            t("rightObject"),
            t("rightWithdraw"),
            t("rightComplain"),
          ]}
        />
        <p className="text-muted">
          {t("rightsContact")}{" "}
          <a className="font-semibold text-accent underline" href={legalMailto()}>
            {LEGAL.email}
          </a>
        </p>
      </LegalSection>

      <LegalSection title={t("profilingHeading")}>
        <p className="text-muted">{t("profilingBody")}</p>
      </LegalSection>

      <LegalSection title={t("securityHeading")}>
        <p className="text-muted">{t("securityBody")}</p>
      </LegalSection>

      <LegalSection title={t("changesHeading")}>
        <p className="text-muted">{t("changesBody")}</p>
      </LegalSection>
    </LegalPage>
  );
}
