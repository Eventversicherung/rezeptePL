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
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="font-display text-[clamp(1.4rem,3vw,1.85rem)] font-semibold">
          {category.title[locale]}
        </h2>
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
