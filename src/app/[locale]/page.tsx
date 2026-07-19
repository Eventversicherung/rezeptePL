import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { RecipeCatalogCard } from "@/components/recipe/RecipeCatalogCard";
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
  const catalog = (await listRecipeCatalog(locale)).slice(0, 4);
  const clusters = (await listClusters()).filter((c) => c.kind !== "category");
  const tRecipes = await getTranslations("recipes");

  return (
    <div className="space-y-20 sm:space-y-28">
      <section className="hero-full relative min-h-[88dvh]">
        <div
          className="absolute inset-0 scale-[1.02] bg-cover bg-center"
          style={{
            backgroundImage: "url(/recipes/pierogi-ruskie.jpg)",
          }}
        />
        <div className="hero-full__wash" aria-hidden />
        <div className="hero-full__fade" aria-hidden />

        <div className="relative mx-auto flex min-h-[88dvh] w-full max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-8 sm:pb-24">
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
            <h1 className="mt-2 max-w-[12ch] font-display text-[clamp(3.2rem,12vw,6.5rem)] font-semibold text-white drop-shadow-[0_2px_24px_rgba(18,27,48,0.35)]">
              {t("headline")}
            </h1>
            <p className="mt-5 max-w-[36ch] text-lg text-white/90 sm:text-xl">
              {t("sub")}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
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

      <section className="reveal -mt-4 sm:-mt-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="section-kicker">{t("featured")}</p>
            <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.4rem)] font-semibold">
              {t("cta")}
            </h2>
          </div>
          <Link
            href="/rezepte"
            className="shrink-0 text-sm font-semibold text-accent"
          >
            {t("allRecipes")} →
          </Link>
        </div>
        <div className="stagger grid gap-10 sm:grid-cols-2">
          {catalog.map((item) => (
            <RecipeCatalogCard
              key={item.kind === "family" ? item.family.id : item.recipe.id}
              item={item}
              locale={locale}
              variantsLabel={tRecipes("variantsCount")}
            />
          ))}
        </div>
      </section>

      <section className="reveal">
        <p className="section-kicker">{t("clusters")}</p>
        <h2 className="mt-3 max-w-[16ch] font-display text-[clamp(2rem,5vw,3.2rem)] font-semibold">
          {locale === "de"
            ? "Regionen, Anlässe, Techniken"
            : "Regiony, okazje, techniki"}
        </h2>
        <div className="stagger mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                <p className="mt-2 max-w-[36ch] text-sm text-muted">
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
