"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import type { Locale, Recipe, RecipeFamily } from "@/types/content";
import { familyVariantPath } from "@/lib/data/recipe-paths";

export function VariantSwitcher({
  family,
  variants,
  activeId,
  locale,
  label,
  onPreview,
}: {
  family: RecipeFamily;
  variants: Recipe[];
  activeId: string;
  locale: Locale;
  label: string;
  /** Called on hover/focus with the variant to live-preview, or null to reset. */
  onPreview?: (variant: Recipe | null) => void;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    for (const variant of variants) {
      if (variant.id === activeId) continue;
      router.prefetch(familyVariantPath(family, variant, locale));
    }
  }, [activeId, family, locale, router, variants]);

  return (
    <aside className="variant-rail" role="navigation" aria-label={label}>
      <p className="variant-rail__label">{label}</p>
      <ul className="variant-rail__list">
        {variants.map((variant) => {
          const href = familyVariantPath(family, variant, locale);
          const name =
            variant.variantLabel?.[locale] ||
            variant.translations[locale].title;
          const thumb = variant.variantImage || variant.coverImage;
          const active =
            variant.id === activeId ||
            pathname === href ||
            pathname.endsWith(`/${variant.translations[locale].slug}`);

          return (
            <li key={variant.id}>
              <Link
                href={href}
                prefetch
                scroll={false}
                aria-current={active ? "page" : undefined}
                title={name}
                className={`variant-rail__item${active ? " is-active" : ""}`}
                onMouseEnter={() => onPreview?.(variant)}
                onMouseLeave={() => onPreview?.(null)}
                onFocus={() => onPreview?.(variant)}
                onBlur={() => onPreview?.(null)}
              >
                <span className="variant-rail__thumb">
                  <Image
                    src={thumb}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="72px"
                  />
                </span>
                <span className="variant-rail__name">{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
