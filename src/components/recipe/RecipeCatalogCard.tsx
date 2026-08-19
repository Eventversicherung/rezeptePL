import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Locale, RecipeCatalogItem } from "@/types/content";
import { familyVariantPath, recipePath } from "@/lib/data/recipe-paths";

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
    const { family, defaultRecipe, variants } = item;
    const t = family.translations[locale];
    const href = familyVariantPath(family, defaultRecipe, locale);
    const mins = defaultRecipe.prepMinutes + defaultRecipe.cookMinutes;
    const count = variants.length || family.variantIds.length;

    return (
      <div className="recipe-card group">
        <Link
          href={href}
          className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <div className="recipe-card__media">
            <Image
              src={family.coverImage}
              alt={t.title}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <span className="recipe-card__badge">{mins} min</span>
          </div>
          <div className="px-3 pt-3">
            <h2 className="font-display text-[clamp(1.15rem,2.4vw,1.45rem)] font-semibold tracking-tight">
              {t.title}
            </h2>
            <p className="mt-1.5 line-clamp-2 max-w-[42ch] text-sm text-muted">
              {t.excerpt}
            </p>
          </div>
        </Link>
        {variants.length > 1 ? (
          <ul
            className="recipe-card__variants"
            aria-label={variantsLabel}
          >
            {variants.map((variant) => {
              const name =
                variant.variantLabel?.[locale] ||
                variant.translations[locale].title;
              const thumb = variant.variantImage || variant.coverImage;
              return (
                <li key={variant.id}>
                  <Link
                    href={familyVariantPath(family, variant, locale)}
                    title={name}
                    prefetch
                    className="recipe-card__variant-chip"
                  >
                    <Image
                      src={thumb}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="px-3 pb-3 pt-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent">
            {count} {variantsLabel}
          </p>
        )}
      </div>
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
