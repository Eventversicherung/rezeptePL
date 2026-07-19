import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { registerAction } from "@/app/actions/auth";

export default async function RegisterPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("auth");

  return (
    <div className="mx-auto max-w-md space-y-6">
      <h1 className="font-display text-3xl font-semibold">
        {t("registerTitle")}
      </h1>
      <form action={registerAction} className="space-y-4">
        <input type="hidden" name="locale" value={locale} />
        <label className="block space-y-1 text-sm">
          <span>{t("email")}</span>
          <input
            name="email"
            type="email"
            required
            className="min-h-12 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
          />
        </label>
        <label className="block space-y-1 text-sm">
          <span>{t("password")}</span>
          <input
            name="password"
            type="password"
            required
            minLength={6}
            className="min-h-12 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
          />
        </label>
        <button
          type="submit"
          className="min-h-12 w-full rounded-full bg-foreground text-[var(--bg)]"
        >
          {t("register")}
        </button>
      </form>
      <p className="text-sm text-muted">
        {t("hasAccount")}{" "}
        <Link href="/anmelden" className="text-foreground underline">
          {t("login")}
        </Link>
      </p>
    </div>
  );
}
