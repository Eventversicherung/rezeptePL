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
}: {
  family: RecipeFamily;
  variants: Recipe[];
  activeId: string;
  locale: Locale;
  label: string;
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
    <div className="variant-switch" role="navigation" aria-label={label}>
      <p className="variant-switch__label">{label}</p>
      <ul className="variant-switch__gallery">
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
                className={`variant-switch__card${active ? " is-active" : ""}`}
              >
                <span className="variant-switch__media">
                  <Image
                    src={thumb}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </span>
                <span className="variant-switch__name">{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
