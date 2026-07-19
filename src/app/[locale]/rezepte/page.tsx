import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RecipeCatalogCard } from "@/components/recipe/RecipeCatalogCard";
import { RecipeCategoryTiles } from "@/components/recipe/RecipeCategoryTiles";
import { RecipeGridControls } from "@/components/recipe/RecipeGridControls";
import { RecipeSpotlight } from "@/components/recipe/RecipeSpotlight";
import {
  catalogForCluster,
  listClusters,
  listRecipeCatalog,
} from "@/lib/data/repository";
import type { Locale } from "@/types/content";

export default async function RecipesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string; kat?: string }>;
}) {
  const { locale: localeParam } = await params;
  const { q = "", kat = "" } = await searchParams;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("recipes");
  const tCommon = await getTranslations("common");
  const tClusters = await getTranslations("clusters");

  const categories = await listClusters("category");
  const activeCategory = kat
    ? categories.find((c) => c.slug[locale] === kat) ?? null
    : null;

  const allItems = await listRecipeCatalog(locale, q);
  const items = activeCategory
    ? await catalogForCluster(activeCategory.id, locale).then((rows) => {
        if (!q.trim()) return rows;
        const needle = q.trim().toLowerCase();
        return rows.filter((item) => {
          if (item.kind === "family") {
            const ft = item.family.translations[locale];
            return (
              ft.title.toLowerCase().includes(needle) ||
              ft.excerpt.toLowerCase().includes(needle)
            );
          }
          const rt = item.recipe.translations[locale];
          return (
            rt.title.toLowerCase().includes(needle) ||
            rt.excerpt.toLowerCase().includes(needle)
          );
        });
      })
    : allItems;

  const schnellCategory =
    categories.find((c) => c.id === "category-schnell") ?? null;
  const schnellItems = schnellCategory
    ? await catalogForCluster(schnellCategory.id, locale)
    : [];
  const suessCategory =
    categories.find((c) => c.id === "category-suess") ?? null;
  const suessItems = suessCategory
    ? await catalogForCluster(suessCategory.id, locale)
    : [];

  const showSpotlights = !q && !activeCategory;

  return (
    <div className="space-y-12 sm:space-y-16">
      <Breadcrumbs
        ariaLabel={tCommon("breadcrumbs")}
        items={[
          { label: tCommon("home"), href: "/" },
          { label: t("title") },
        ]}
      />

      {/* 1 — Quiet page label (categories carry the focus) */}
      <header className="reveal flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h1 className="font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
          {t("title")}
        </h1>
        <p className="text-sm text-muted">{tClusters("categories")}</p>
      </header>

      {/* 2 — Categories first */}
      <section className="reveal -mt-4 space-y-4 sm:-mt-6">
        <h2 className="font-display text-[clamp(1.55rem,3.5vw,2.15rem)] font-semibold">
          {t("browseByCategory")}
        </h2>
        <RecipeCategoryTiles
          categories={categories}
          locale={locale}
          activeSlug={activeCategory?.slug[locale]}
          recipesLabel={t("browseCategory")}
        />
      </section>

      {/* 3 — Clean, centered search (no soft wash) */}
      <section
        className="recipe-search reveal"
        aria-labelledby="recipe-search-heading"
      >
        <div className="recipe-search__inner">
          <h2 id="recipe-search-heading" className="sr-only">
            {t("searchHeading")}
          </h2>
          <form className="recipe-search__form">
            {activeCategory ? (
              <input
                type="hidden"
                name="kat"
                value={activeCategory.slug[locale]}
              />
            ) : null}
            <label className="sr-only" htmlFor="recipe-q">
              {t("search")}
            </label>
            <input
              id="recipe-q"
              name="q"
              defaultValue={q}
              placeholder={t("search")}
              className="recipe-search__input"
            />
            <button type="submit" className="recipe-search__submit">
              {t("searchSubmit")}
            </button>
          </form>
          {activeCategory || q ? (
            <p className="mt-3 text-center text-sm text-muted">
              {activeCategory ? (
                <span>
                  {t("filteringCategory", {
                    category: activeCategory.title[locale],
                  })}
                </span>
              ) : null}
              {q ? (
                <span>
                  {activeCategory ? " · " : null}
                  {t("filteringQuery", { query: q })}
                </span>
              ) : null}
            </p>
          ) : null}
        </div>
      </section>

      {showSpotlights && schnellCategory ? (
        <RecipeSpotlight
          category={schnellCategory}
          items={schnellItems}
          locale={locale}
          variantsLabel={t("variantsCount")}
          viewAllLabel={t("viewCategory")}
        />
      ) : null}

      {showSpotlights && suessCategory ? (
        <RecipeSpotlight
          category={suessCategory}
          items={suessItems}
          locale={locale}
          variantsLabel={t("variantsCount")}
          viewAllLabel={t("viewCategory")}
        />
      ) : null}

      <section className="reveal space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-[clamp(1.4rem,3vw,1.85rem)] font-semibold">
            {activeCategory
              ? activeCategory.title[locale]
              : t("allRecipes")}
          </h2>
          {activeCategory ? (
            <p className="max-w-[42ch] text-sm text-muted">
              {activeCategory.description[locale]}
            </p>
          ) : null}
        </div>

        {items.length === 0 ? (
          <p className="text-lg text-muted">{t("empty")}</p>
        ) : (
          <RecipeGridControls
            label={t("gridDensity")}
            optionLabels={{
              3: t("gridCols3"),
              4: t("gridCols4"),
              5: t("gridCols5"),
            }}
          >
            {items.map((item) => (
              <RecipeCatalogCard
                key={
                  item.kind === "family" ? item.family.id : item.recipe.id
                }
                item={item}
                locale={locale}
                variantsLabel={t("variantsCount")}
              />
            ))}
          </RecipeGridControls>
        )}
      </section>
    </div>
  );
}
