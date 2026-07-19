import { getTranslations, setRequestLocale } from "next-intl/server";
import { redirect } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { createDraftAction, setStatusAction } from "@/app/actions/admin";
import { getSessionUser } from "@/lib/auth/session";
import { listAllRecipes } from "@/lib/data/repository";
import type { Locale } from "@/types/content";

export default async function AdminPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const user = await getSessionUser();
  if (!user || (user.role !== "admin" && user.role !== "moderator")) {
    redirect(`/${locale}/anmelden`);
  }

  const t = await getTranslations("admin");
  const recipes = await listAllRecipes();

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold">{t("title")}</h1>
          <p className="mt-1 text-sm text-muted">{t("recipes")}</p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/admin/moderation"
            className="min-h-11 rounded-full border border-border px-4 py-2 text-sm"
          >
            {t("moderation")}
          </Link>
          <form action={createDraftAction.bind(null, locale)}>
            <button
              type="submit"
              className="min-h-11 rounded-full bg-foreground px-4 text-sm text-[var(--bg)]"
            >
              {t("newRecipe")}
            </button>
          </form>
        </div>
      </div>

      <ul className="divide-y divide-border border-y border-border">
        {recipes.map((recipe) => {
          const tr = recipe.translations[locale];
          const other = locale === "de" ? "pl" : "de";
          const missing = !recipe.translations[other]?.title;
          return (
            <li
              key={recipe.id}
              className="flex flex-wrap items-center justify-between gap-3 py-4"
            >
              <div>
                <p className="font-medium">{tr.title}</p>
                <p className="text-xs text-muted">
                  {recipe.status}
                  {missing ? ` · ${t("missingTranslation")}` : ""}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/admin/rezepte/${recipe.id}`}
                  className="rounded-full border border-border px-3 py-1.5 text-sm"
                >
                  {t("edit")}
                </Link>
                <form action={setStatusAction}>
                  <input type="hidden" name="id" value={recipe.id} />
                  <input type="hidden" name="locale" value={locale} />
                  <input
                    type="hidden"
                    name="status"
                    value={
                      recipe.status === "published" ? "draft" : "published"
                    }
                  />
                  <button
                    type="submit"
                    className="rounded-full border border-border px-3 py-1.5 text-sm"
                  >
                    {recipe.status === "published" ? t("draft") : t("publish")}
                  </button>
                </form>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
