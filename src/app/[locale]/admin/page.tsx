import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { createDraftAction, setStatusAction } from "@/app/actions/admin";
import { IndexNowPanel } from "@/components/admin/IndexNowPanel";
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
  const t = await getTranslations("admin");
  const recipes = await listAllRecipes();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-kicker">{t("cms")}</p>
          <h1 className="font-display text-3xl font-semibold">{t("recipes")}</h1>
          <p className="mt-1 text-sm text-muted">
            {recipes.length} · {t("recipesHelp")}
          </p>
        </div>
        <form action={createDraftAction.bind(null, locale)}>
          <button type="submit" className="btn-primary !min-h-11 px-4 text-sm">
            {t("newRecipe")}
          </button>
        </form>
      </div>

      <IndexNowPanel />

      <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
        <ul className="divide-y divide-border">
          {recipes.map((recipe) => {
            const tr = recipe.translations[locale];
            const other = locale === "de" ? "pl" : "de";
            const missing = !recipe.translations[other]?.title;
            return (
              <li
                key={recipe.id}
                className="flex flex-wrap items-center justify-between gap-3 px-4 py-4"
              >
                <div className="min-w-0">
                  <p className="font-semibold">{tr.title || recipe.id}</p>
                  <p className="text-xs text-muted">
                    <span
                      className={`mr-2 inline-flex rounded-full px-2 py-0.5 font-semibold uppercase ${
                        recipe.status === "published"
                          ? "bg-accent-soft text-accent"
                          : "bg-elevated text-muted"
                      }`}
                    >
                      {recipe.status === "published" ? t("publish") : t("draft")}
                    </span>
                    {missing ? t("missingTranslation") : recipe.id}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href={`/admin/rezepte/${recipe.id}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-semibold"
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
                      className="min-h-11 rounded-full border border-border px-4 text-sm font-semibold"
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
    </div>
  );
}
