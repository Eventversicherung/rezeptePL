import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { submitCommunityRecipeAction } from "@/app/actions/community";
import { getSessionUser } from "@/lib/auth/session";

export default async function CommunityUploadPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ ok?: string }>;
}) {
  const { locale } = await params;
  const { ok } = await searchParams;
  setRequestLocale(locale);
  const t = await getTranslations("community");
  const user = await getSessionUser();

  if (!user) {
    return (
      <div className="mx-auto max-w-lg space-y-4">
        <h1 className="font-display text-3xl font-semibold">
          {t("uploadTitle")}
        </h1>
        <p className="text-muted">{t("uploadSub")}</p>
        <Link
          href="/anmelden"
          className="btn-primary"
        >
          Login
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div>
        <h1 className="font-display text-3xl font-semibold">
          {t("uploadTitle")}
        </h1>
        <p className="mt-2 text-muted">{t("uploadSub")}</p>
      </div>
      {ok ? (
        <p className="rounded-[var(--radius)] bg-accent-soft px-4 py-3 text-sm">
          {t("success")}
        </p>
      ) : null}
      <form action={submitCommunityRecipeAction} className="space-y-4">
        <input type="hidden" name="locale" value={locale} />
        <label className="block space-y-1 text-sm">
          <span>{t("title")}</span>
          <input
            name="title"
            required
            className="min-h-12 w-full rounded-[var(--radius)] border border-border bg-surface px-3"
          />
        </label>
        <label className="block space-y-1 text-sm">
          <span>{t("excerpt")}</span>
          <textarea
            name="excerpt"
            rows={3}
            className="w-full rounded-[var(--radius)] border border-border bg-surface px-3 py-2"
          />
        </label>
        <label className="block space-y-1 text-sm">
          <span>{t("steps")}</span>
          <textarea
            name="steps"
            required
            rows={6}
            className="w-full rounded-[var(--radius)] border border-border bg-surface px-3 py-2"
          />
        </label>
        <label className="block space-y-1 text-sm">
          <span>{t("ingredients")}</span>
          <textarea
            name="ingredients"
            rows={5}
            className="w-full rounded-[var(--radius)] border border-border bg-surface px-3 py-2"
          />
        </label>
        <button
          type="submit"
          className="btn-primary"
        >
          {t("submit")}
        </button>
      </form>
    </div>
  );
}
