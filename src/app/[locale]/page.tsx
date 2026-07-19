import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { RecipeCard } from "@/components/recipe/RecipeCard";
import { listClusters, listPublishedRecipes } from "@/lib/data/repository";
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
  const recipes = (await listPublishedRecipes()).slice(0, 4);
  const clusters = await listClusters();

  return (
    <div className="space-y-16">
      <section className="relative min-h-[70dvh] overflow-hidden rounded-[calc(var(--radius)+8px)]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=2000&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,oklch(0.2_0.02_25/0.75),oklch(0.2_0.02_25/0.2)_55%,transparent)]" />
        <div className="relative flex min-h-[70dvh] flex-col justify-end p-6 sm:p-10">
          <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-white/90">
            <span className="text-[oklch(0.72_0.16_27)]">Alemniam</span>
          </p>
          <h1 className="mt-3 max-w-[14ch] font-display text-[clamp(2.4rem,8vw,4.5rem)] font-semibold text-white">
            {t("headline")}
          </h1>
          <p className="mt-3 max-w-[40ch] text-base text-white/90 sm:text-lg">
            {t("sub")}
          </p>
          <div className="mt-6">
            <Link
              href="/rezepte"
              className="inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-medium text-[#dc143c]"
            >
              {t("cta")}
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-end justify-between gap-3">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            {t("cta")}
          </h2>
          <Link href="/rezepte" className="text-sm text-muted">
            →
          </Link>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} locale={locale} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl font-semibold">{t("clusters")}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
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
                className="rounded-[var(--radius)] border border-border bg-surface px-4 py-5 transition-colors hover:border-accent"
              >
                <p className="text-xs uppercase tracking-wide text-muted">
                  {cluster.kind === "region"
                    ? tc("regions")
                    : cluster.kind === "occasion"
                      ? tc("occasions")
                      : tc("techniques")}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold">
                  {cluster.title[locale]}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {cluster.description[locale]}
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
