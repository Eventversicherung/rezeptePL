import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getSessionUser } from "@/lib/auth/session";
import { listSubmissionsByUser } from "@/lib/data/repository";
import type { CommunitySubmission, Locale } from "@/types/content";

const statusKey = {
  pending: "status_pending",
  approved: "status_approved",
  rejected: "status_rejected",
} as const;

function StatusBadge({
  status,
  label,
}: {
  status: CommunitySubmission["status"];
  label: string;
}) {
  const tone =
    status === "approved"
      ? "bg-emerald-50 text-emerald-800"
      : status === "rejected"
        ? "bg-red-50 text-red-800"
        : "bg-amber-50 text-amber-800";
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${tone}`}
    >
      {label}
    </span>
  );
}

export default async function MyRecipesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("myRecipes");
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

  const submissions = await listSubmissionsByUser(user.id);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="section-kicker">{t("kicker")}</p>
          <h1 className="font-display text-3xl font-semibold">{t("title")}</h1>
          <p className="mt-2 max-w-2xl text-muted">{t("help")}</p>
        </div>
        <Link href="/community/hochladen" className="btn-primary">
          {t("upload")}
        </Link>
      </div>

      {submissions.length === 0 ? (
        <p className="text-muted">{t("empty")}</p>
      ) : (
        <ul className="space-y-3">
          {submissions.map((item) => (
            <li
              key={item.id}
              className="rounded-[var(--radius)] border border-border bg-surface p-4"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="font-display text-xl font-semibold">
                    {item.title}
                  </h2>
                  {item.excerpt ? (
                    <p className="mt-1 text-sm text-muted">{item.excerpt}</p>
                  ) : null}
                </div>
                <StatusBadge
                  status={item.status}
                  label={t(statusKey[item.status])}
                />
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
