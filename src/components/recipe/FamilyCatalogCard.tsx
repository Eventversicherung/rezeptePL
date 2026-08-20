"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Link } from "@/i18n/navigation";
import type { Locale, Recipe, RecipeFamily } from "@/types/content";
import { familyVariantPath } from "@/lib/data/recipe-paths";

// Grace period before a preview reverts. Variant names differ in length and
// can wrap onto a second line, nudging the chip row a few pixels — without
// this delay, that tiny shift moves the chip out from under the cursor,
// which fires mouseleave, reverts the preview, shifts the layout back, and
// re-enters the chip, causing a rapid flicker loop. Debouncing the "leave"
// (but not the "enter") breaks that loop while still feeling instant.
const PREVIEW_LEAVE_DELAY = 120;

/**
 * Category-grid card for a recipe family. Hovering (or focusing) a variant
 * chip live-previews its name and image in the big card slot — the actual
 * click still needs to happen to navigate, nothing changes automatically.
 */
export function FamilyCatalogCard({
  family,
  defaultRecipe,
  variants,
  locale,
  variantsLabel,
}: {
  family: RecipeFamily;
  defaultRecipe: Recipe;
  variants: Recipe[];
  locale: Locale;
  variantsLabel: string;
}) {
  const [previewVariant, setPreviewVariant] = useState<Recipe | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    };
  }, []);

  function previewOn(variant: Recipe) {
    if (leaveTimer.current) {
      clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    setPreviewVariant(variant);
  }

  function previewOff() {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      setPreviewVariant(null);
    }, PREVIEW_LEAVE_DELAY);
  }

  const t = family.translations[locale];
  const activeRecipe = previewVariant ?? defaultRecipe;
  const activeTitle = previewVariant
    ? activeRecipe.translations[locale].title
    : t.title;
  const activeImage = previewVariant
    ? previewVariant.variantImage || previewVariant.coverImage
    : family.coverImage;
  const href = familyVariantPath(family, activeRecipe, locale);
  const mins = activeRecipe.prepMinutes + activeRecipe.cookMinutes;
  const count = variants.length || family.variantIds.length;

  return (
    <div className="recipe-card group">
      <Link
        href={href}
        className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <div className="recipe-card__media">
          <Image
            key={activeRecipe.id}
            src={activeImage}
            alt={activeTitle}
            fill
            className="mode-fade object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <span className="recipe-card__badge">{mins} min</span>
        </div>
        <div className="px-3 pt-3">
          <h2
            key={activeRecipe.id}
            className="mode-fade line-clamp-2 min-h-[2.5em] font-display text-[clamp(1.15rem,2.4vw,1.45rem)] font-semibold leading-tight tracking-tight"
          >
            {activeTitle}
          </h2>
          <p className="mt-1.5 line-clamp-2 max-w-[42ch] text-sm text-muted">
            {t.excerpt}
          </p>
        </div>
      </Link>
      {variants.length > 1 ? (
        <ul className="recipe-card__variants" aria-label={variantsLabel}>
          {variants.map((variant) => {
            const name =
              variant.variantLabel?.[locale] ||
              variant.translations[locale].title;
            const thumb = variant.variantImage || variant.coverImage;
            const isPreviewed = previewVariant?.id === variant.id;
            return (
              <li key={variant.id}>
                <Link
                  href={familyVariantPath(family, variant, locale)}
                  title={name}
                  prefetch
                  className={`recipe-card__variant-chip${
                    isPreviewed ? " is-active" : ""
                  }`}
                  onMouseEnter={() => previewOn(variant)}
                  onMouseLeave={previewOff}
                  onFocus={() => previewOn(variant)}
                  onBlur={previewOff}
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
