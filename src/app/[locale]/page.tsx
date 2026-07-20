import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { RecipeCatalogCard } from "@/components/recipe/RecipeCatalogCard";
import { RecipeCategoryTiles } from "@/components/recipe/RecipeCategoryTiles";
import { RecipeGridControls } from "@/components/recipe/RecipeGridControls";
import { listClusters, listRecipeCatalog } from "@/lib/data/repository";
import type { Locale } from "@/types/content";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const tc = await getTranslations("clusters");
  const brand = await getTranslations("brand");
  const tRecipes = await getTranslations("recipes");

  const catalog = (await listRecipeCatalog(locale)).slice(0, 12);
  const categories = await listClusters("category");
  const allClusters = await listClusters();
  const clusters = (
    ["region", "occasion", "technique"] as const
  ).flatMap((kind) =>
    allClusters.filter((c) => c.kind === kind).slice(0, 3),
  );

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* 1 — Cookbook hero (landing) */}
      <section className="hero-full relative -mt-6 md:-mt-8">
        <div className="hero-full__media" aria-hidden>
          <Image
            src="/recipes/pierogi-ruskie.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="hero-full__wash" aria-hidden />
        <div className="hero-full__grain" aria-hidden />
        <div className="hero-full__fade" aria-hidden />

        <div className="relative mx-auto flex min-h-[min(72dvh,40rem)] w-full max-w-7xl flex-col justify-end px-4 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
          <div className="reveal max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <Image
                src="/alemniam-logo.jpg"
                alt=""
                width={56}
                height={56}
                className="size-14 rounded-full bg-white object-contain shadow-lg ring-2 ring-white/90"
                priority
              />
              <p className="font-display text-sm font-bold uppercase tracking-[0.22em] text-white">
                {brand("name")}
              </p>
            </div>
            <h1 className="mt-2 max-w-[12ch] font-display text-[clamp(3rem,11vw,5.75rem)] font-semibold leading-[0.95] text-white drop-shadow-[0_2px_24px_rgba(18,27,48,0.35)]">
              {t("headline")}
            </h1>
            <p className="mt-5 max-w-[36ch] text-lg text-white/92 sm:text-xl">
              {t("sub")}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/rezepte"
                className="btn-primary min-h-13 px-7 text-base"
              >
                {t("cta")}
              </Link>
              <Link
                href="/rezepte/pierogi/ruskie"
                className="btn-hero-secondary min-h-13 px-7 text-base"
              >
                {t("ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2 — Hub search → recipes index */}
      <section
        className="hub-search reveal"
        aria-labelledby="home-search-heading"
      >
        <div className="hub-search__inner">
          <p className="hub-search__label" id="home-search-heading">
            {t("searchKicker")}
          </p>
          <form
            className="hub-search__form"
            action={`/${locale}/rezepte`}
            method="get"
          >
            <label className="sr-only" htmlFor="home-q">
              {t("search")}
            </label>
            <input
              id="home-q"
              name="q"
              placeholder={t("search")}
              className="hub-search__input"
            />
            <button type="submit" className="hub-search__submit">
              {t("searchSubmit")}
            </button>
          </form>
        </div>
      </section>

      {/* 3 — Cookbook philosophy */}
      <section className="reveal" aria-labelledby="home-about-heading">
        <p className="section-kicker">{t("aboutKicker")}</p>
        <h2
          id="home-about-heading"
          className="mt-3 max-w-[22ch] font-display text-[clamp(1.75rem,4vw,2.6rem)] font-semibold leading-tight"
        >
          {t("aboutHeading")}
        </h2>
        <p className="mt-5 max-w-[52ch] text-lg text-muted sm:text-xl">
          {t("aboutLead")}
        </p>
        <ul className="stagger mt-10 grid gap-8 sm:grid-cols-3 sm:gap-6">
          {(
            [
              ["aboutPillar1Title", "aboutPillar1Body"],
              ["aboutPillar2Title", "aboutPillar2Body"],
              ["aboutPillar3Title", "aboutPillar3Body"],
            ] as const
          ).map(([titleKey, bodyKey]) => (
            <li key={titleKey} className="border-t border-border pt-5">
              <h3 className="font-display text-xl font-semibold">
                {t(titleKey)}
              </h3>
              <p className="mt-2 max-w-[32ch] text-sm leading-relaxed text-muted">
                {t(bodyKey)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 4 — Categories (hub language) */}
      <section className="reveal space-y-4">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="font-display text-[clamp(1.55rem,3.5vw,2.15rem)] font-semibold">
            {t("browseByCategory")}
          </h2>
          <Link
            href="/rezepte"
            className="text-sm font-semibold text-accent"
          >
            {t("allRecipes")} →
          </Link>
        </div>
        <RecipeCategoryTiles
          categories={categories}
          locale={locale}
          recipesLabel={tRecipes("browseCategory")}
        />
      </section>

      {/* 5 — Recipe grid (more dishes, hub density controls) */}
      <section className="reveal space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="section-kicker">{t("featured")}</p>
            <h2 className="mt-2 font-display text-[clamp(1.55rem,3.5vw,2.15rem)] font-semibold">
              {t("featuredHeading")}
            </h2>
          </div>
          <Link
            href="/rezepte"
            className="shrink-0 text-sm font-semibold text-accent"
          >
            {tRecipes("allRecipes")} →
          </Link>
        </div>

        <RecipeGridControls
          label={tRecipes("gridDensity")}
          optionLabels={{
            3: tRecipes("gridCols3"),
            4: tRecipes("gridCols4"),
            5: tRecipes("gridCols5"),
          }}
          storageKey="alemniam-home-grid-cols"
        >
          {catalog.map((item) => (
            <RecipeCatalogCard
              key={item.kind === "family" ? item.family.id : item.recipe.id}
              item={item}
              locale={locale}
              variantsLabel={tRecipes("variantsCount")}
            />
          ))}
        </RecipeGridControls>
      </section>

      {/* 6 — Discover clusters (curated, landing-friendly) */}
      <section className="reveal space-y-5">
        <div>
          <p className="section-kicker">{t("clusters")}</p>
          <h2 className="mt-2 max-w-[18ch] font-display text-[clamp(1.55rem,3.5vw,2.15rem)] font-semibold">
            {t("clustersHeading")}
          </h2>
        </div>
        <div className="stagger grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {clusters.map((cluster) => {
            const base =
              cluster.kind === "region"
                ? "/regionen"
                : cluster.kind === "occasion"
                  ? "/anlaesse"
                  : "/techniken";
            return (
              <Link
                key={cluster.id}
                href={`${base}/${cluster.slug[locale]}`}
                className="group relative overflow-hidden rounded-[calc(var(--radius)+4px)] border border-border bg-surface px-5 py-6 transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_18px_40px_rgba(220,20,60,0.12)]"
              >
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-accent">
                  {cluster.kind === "region"
                    ? tc("regions")
                    : cluster.kind === "occasion"
                      ? tc("occasions")
                      : tc("techniques")}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold">
                  {cluster.title[locale]}
                </h3>
                <p className="mt-2 line-clamp-2 max-w-[36ch] text-sm text-muted">
                  {cluster.description[locale]}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-accent opacity-0 transition group-hover:opacity-100">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
