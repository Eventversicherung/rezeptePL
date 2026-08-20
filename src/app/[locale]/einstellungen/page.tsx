import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SettingsForm } from "@/components/account/SettingsForm";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { getSessionUser } from "@/lib/auth/session";
import type { Locale } from "@/types/content";

export default async function SettingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("settings");
  const tn = await getTranslations("nav");
  const tp = await getTranslations("profile");
  const user = await getSessionUser();

  if (!user) {
    return (
      <div className="mx-auto max-w-lg space-y-4">
        <h1 className="font-display text-3xl font-semibold">{t("title")}</h1>
        <p className="text-muted">{tp("guest")}</p>
        <Link href="/anmelden" className="btn-primary">
          {tn("login")}
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="section-kicker">{t("kicker")}</p>
        <h1 className="font-display text-3xl font-semibold">{t("title")}</h1>
        <p className="mt-2 max-w-2xl text-muted">{t("help")}</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold">{t("displayName")}</h2>
        <SettingsForm displayName={user.displayName} email={user.email} />
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold">{tp("language")}</h2>
        <LanguageSwitcher locale={locale} />
      </section>
    </div>
  );
}
