import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { RecipeCatalogCard } from "@/components/recipe/RecipeCatalogCard";
import { listRecipeCatalog } from "@/lib/data/repository";
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
  const tCommon = await getTranslations("common");
  const items = await listRecipeCatalog(locale, q);

  return (
    <div className="space-y-10">
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
        <form className="mt-6">
          <input
            name="q"
            defaultValue={q}
            placeholder={t("search")}
            className="min-h-14 w-full max-w-xl rounded-full border-2 border-border bg-surface px-6 text-base shadow-[0_10px_30px_rgba(220,20,60,0.06)] outline-none transition focus:border-accent"
          />
        </form>
      </div>
      {items.length === 0 ? (
        <p className="text-lg text-muted">{t("empty")}</p>
      ) : (
        <div className="stagger grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
        </div>
      )}
    </div>
  );
}
