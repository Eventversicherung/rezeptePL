import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { loginAction } from "@/app/actions/auth";

export default async function LoginPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("auth");

  return (
    <div className="mx-auto max-w-md space-y-6">
      <h1 className="font-display text-3xl font-semibold">{t("loginTitle")}</h1>
      <p className="text-sm text-muted">{t("magicHint")}</p>
      <p className="rounded-[var(--radius)] bg-accent-soft px-4 py-3 text-sm">
        Demo: <code>admin@alemniam.local</code> / beliebiges Passwort (Admin)
        <br />
        oder <code>demo@alemniam.local</code>
      </p>
      <form action={loginAction} className="space-y-4">
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
            className="min-h-12 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
          />
        </label>
        <button
          type="submit"
          className="btn-primary w-full"
        >
          {t("login")}
        </button>
      </form>
      <p className="text-sm text-muted">
        {t("noAccount")}{" "}
        <Link href="/registrieren" className="text-foreground underline">
          {t("register")}
        </Link>
      </p>
    </div>
  );
}
