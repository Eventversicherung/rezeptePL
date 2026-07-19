import { getTranslations, setRequestLocale } from "next-intl/server";
import { redirect } from "next/navigation";
import { moderateAction } from "@/app/actions/admin";
import { getSessionUser } from "@/lib/auth/session";
import { listSubmissions } from "@/lib/data/repository";

export default async function ModerationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const user = await getSessionUser();
  if (!user || (user.role !== "admin" && user.role !== "moderator")) {
    redirect(`/${locale}/anmelden`);
  }

  const t = await getTranslations("admin");
  const pending = await listSubmissions("pending");

  return (
    <div className="space-y-8">
      <h1 className="font-display text-3xl font-semibold">{t("moderation")}</h1>
      {pending.length === 0 ? (
        <p className="text-muted">{t("pending")}: 0</p>
      ) : (
        <ul className="space-y-4">
          {pending.map((sub) => (
            <li
              key={sub.id}
              className="rounded-[var(--radius)] border border-border bg-surface p-4"
            >
              <h2 className="font-display text-xl font-semibold">{sub.title}</h2>
              <p className="mt-1 text-sm text-muted">{sub.excerpt}</p>
              <p className="mt-3 text-xs uppercase text-muted">
                {sub.locale} · {new Date(sub.createdAt).toLocaleString()}
              </p>
              <div className="mt-4 flex gap-2">
                <form action={moderateAction}>
                  <input type="hidden" name="id" value={sub.id} />
                  <input type="hidden" name="locale" value={locale} />
                  <input type="hidden" name="decision" value="approved" />
                  <button
                    type="submit"
                    className="min-h-10 rounded-full bg-foreground px-4 text-sm text-[var(--bg)]"
                  >
                    {t("approve")}
                  </button>
                </form>
                <form action={moderateAction}>
                  <input type="hidden" name="id" value={sub.id} />
                  <input type="hidden" name="locale" value={locale} />
                  <input type="hidden" name="decision" value="rejected" />
                  <button
                    type="submit"
                    className="min-h-10 rounded-full border border-border px-4 text-sm"
                  >
                    {t("reject")}
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
