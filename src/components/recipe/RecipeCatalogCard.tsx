import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Locale, RecipeCatalogItem } from "@/types/content";
import { recipePath } from "@/lib/data/recipe-paths";
import { FamilyCatalogCard } from "./FamilyCatalogCard";

export function RecipeCatalogCard({
  item,
  locale,
  variantsLabel,
}: {
  item: RecipeCatalogItem;
  locale: Locale;
  variantsLabel: string;
}) {
  if (item.kind === "family") {
    return (
      <FamilyCatalogCard
        family={item.family}
        defaultRecipe={item.defaultRecipe}
        variants={item.variants}
        locale={locale}
        variantsLabel={variantsLabel}
      />
    );
  }

  const recipe = item.recipe;
  const t = recipe.translations[locale];
  const mins = recipe.prepMinutes + recipe.cookMinutes;

  return (
    <Link
      href={recipePath(recipe, locale)}
      className="recipe-card group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="recipe-card__media">
        <Image
          src={recipe.coverImage}
          alt={t.title}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <span className="recipe-card__badge">{mins} min</span>
      </div>
      <div className="px-3 pb-3 pt-3">
        <h2 className="font-display text-[clamp(1.15rem,2.4vw,1.45rem)] font-semibold tracking-tight">
          {t.title}
        </h2>
        <p className="mt-1.5 line-clamp-2 max-w-[42ch] text-sm text-muted">
          {t.excerpt}
        </p>
      </div>
    </Link>
  );
}
