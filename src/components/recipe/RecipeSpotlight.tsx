import { Link } from "@/i18n/navigation";
import { RecipeCatalogCard } from "@/components/recipe/RecipeCatalogCard";
import type { Cluster, Locale, RecipeCatalogItem } from "@/types/content";

export function RecipeSpotlight({
  category,
  items,
  locale,
  variantsLabel,
  viewAllLabel,
}: {
  category: Cluster;
  items: RecipeCatalogItem[];
  locale: Locale;
  variantsLabel: string;
  viewAllLabel: string;
}) {
  if (items.length === 0) return null;
  const href = `/rezepte/kategorie/${category.slug[locale]}`;

  return (
    <section className="reveal space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="section-kicker">{category.title[locale]}</p>
          <h2 className="mt-2 max-w-[20ch] font-display text-[clamp(1.75rem,4vw,2.6rem)] font-semibold">
            {category.description[locale]}
          </h2>
        </div>
        <Link
          href={href}
          className="shrink-0 text-sm font-semibold text-accent"
        >
          {viewAllLabel} →
        </Link>
      </div>
      <div className="stagger grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        {items.slice(0, 4).map((item) => (
          <RecipeCatalogCard
            key={item.kind === "family" ? item.family.id : item.recipe.id}
            item={item}
            locale={locale}
            variantsLabel={variantsLabel}
          />
        ))}
      </div>
    </section>
  );
}
