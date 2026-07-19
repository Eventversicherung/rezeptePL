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

      <div className="reveal">
        <p className="section-kicker">Alemniam</p>
        <h1 className="mt-3 font-display text-[clamp(2.6rem,8vw,4.5rem)] font-semibold">
          {t("title")}
        </h1>
        <p className="mt-4 max-w-[42ch] text-lg text-muted">{t("sub")}</p>
        <form className="mt-6">
          {activeCategory ? (
            <input type="hidden" name="kat" value={activeCategory.slug[locale]} />
          ) : null}
          <input
            name="q"
            defaultValue={q}
            placeholder={t("search")}
            className="min-h-14 w-full max-w-xl rounded-full border-2 border-border bg-surface px-6 text-base shadow-[0_10px_30px_rgba(220,20,60,0.06)] outline-none transition focus:border-accent"
          />
        </form>
      </div>

      <section className="reveal space-y-5">
        <div>
          <p className="section-kicker">{tClusters("categories")}</p>
          <h2 className="mt-2 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-semibold">
            {t("browseByCategory")}
          </h2>
        </div>
        <RecipeCategoryTiles
          categories={categories}
          locale={locale}
          activeSlug={activeCategory?.slug[locale]}
          recipesLabel={t("browseCategory")}
        />
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

      <section className="reveal space-y-6">
        <div>
          <p className="section-kicker">
            {activeCategory ? activeCategory.title[locale] : t("allRecipes")}
          </p>
          <h2 className="mt-2 font-display text-[clamp(1.8rem,4vw,2.8rem)] font-semibold">
            {activeCategory
              ? activeCategory.description[locale]
              : t("allRecipesSub")}
          </h2>
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
