import { getTranslations, setRequestLocale } from "next-intl/server";
import { RecipeCard } from "@/components/recipe/RecipeCard";
import { searchRecipes } from "@/lib/data/repository";
import type { Locale } from "@/types/content";

export default async function RecipesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { locale: localeParam } = await params;
  const { q = "" } = await searchParams;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("recipes");
  const recipes = await searchRecipes(locale, q);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          {t("title")}
        </h1>
        <form className="mt-4">
          <input
            name="q"
            defaultValue={q}
            placeholder={t("search")}
            className="min-h-12 w-full max-w-md rounded-full border border-border bg-surface px-5"
          />
        </form>
      </div>
      {recipes.length === 0 ? (
        <p className="text-muted">{t("empty")}</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}
