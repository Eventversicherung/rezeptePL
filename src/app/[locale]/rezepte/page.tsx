import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RecipeSearch } from "@/components/search/RecipeSearch";
import { RecipeCatalogCard } from "@/components/recipe/RecipeCatalogCard";
import { RecipeCategoryTiles } from "@/components/recipe/RecipeCategoryTiles";
import { RecipeGridControls } from "@/components/recipe/RecipeGridControls";
import { RecipeSpotlight } from "@/components/recipe/RecipeSpotlight";
import { filterCatalogByQuery } from "@/lib/search/recipe-search";
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

  const allClusters = await listClusters();
  const categories = allClusters.filter((c) => c.kind === "category");
  const activeCategory = kat
    ? categories.find((c) => c.slug[locale] === kat) ?? null
    : null;

  const catalog = await listRecipeCatalog(locale);
  const items = activeCategory
    ? await catalogForCluster(activeCategory.id, locale).then((rows) =>
        q.trim() ? filterCatalogByQuery(rows, allClusters, locale, q) : rows,
      )
    : q.trim()
      ? filterCatalogByQuery(catalog, allClusters, locale, q)
      : catalog;

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

      {/* 3 — Solid red search band, round pills */}
      <section
        className="hub-search reveal"
        aria-labelledby="recipe-search-heading"
      >
        <div className="hub-search__inner">
          <p className="hub-search__label" id="recipe-search-heading">
            {t("searchKicker")}
          </p>
          <RecipeSearch
            locale={locale}
            variant="hub"
            defaultQuery={q}
            categorySlug={activeCategory?.slug[locale]}
          />
          {activeCategory || q ? (
            <p className="hub-search__meta">
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
