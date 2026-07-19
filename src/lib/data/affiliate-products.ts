import type { AffiliateProduct, Locale } from "@/types/content";

/**
 * Local affiliate catalog (seed). Mirror of `affiliate_products` in Supabase.
 * Replace URLs with real partner links + associate tag when ready.
 */
export const seedAffiliateProducts: AffiliateProduct[] = [
  {
    id: "aff-pierogi-form",
    partner: "amazon",
    url: "https://www.amazon.de/s?k=Pierogi+Form+Set",
    imageUrl:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
    title: {
      de: "Pierogi-Formen Set",
      pl: "Zestaw foremek do pierogów",
    },
    description: {
      de: "Gleichmäßige Kreise, saubere Ränder. Spart Zeit beim Formen.",
      pl: "Równe kółka, czyste brzegi. Szybsze lepienie.",
    },
    cta: {
      de: "Bei Amazon ansehen",
      pl: "Zobacz na Amazon",
    },
    tags: ["pierogi", "teig", "kitchen"],
    recipeIds: ["recipe-pierogi"],
    active: true,
    sortOrder: 10,
  },
  {
    id: "aff-rolling-pin",
    partner: "amazon",
    url: "https://www.amazon.de/s?k=Teigroller+Holz",
    imageUrl:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80",
    title: {
      de: "Holz-Teigroller",
      pl: "Wałek drewniany",
    },
    description: {
      de: "Für dünnen, gleichmäßigen Teig. Das Fundament guter Pierogi.",
      pl: "Do cienkiego, równego ciasta. Podstawa dobrych pierogów.",
    },
    cta: {
      de: "Teigroller finden",
      pl: "Znajdź wałek",
    },
    tags: ["teig", "kitchen"],
    recipeIds: ["recipe-pierogi"],
    active: true,
    sortOrder: 20,
  },
  {
    id: "aff-potato-ricer",
    partner: "amazon",
    url: "https://www.amazon.de/s?k=Kartoffelpresse",
    imageUrl:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    title: {
      de: "Kartoffelpresse",
      pl: "Praska do ziemniaków",
    },
    description: {
      de: "Fluffige Füllung ohne Klumpen. Ideal für Ruskie.",
      pl: "Puszysty farsz bez grudek. Idealna do ruskich.",
    },
    cta: {
      de: "Presse ansehen",
      pl: "Zobacz praskę",
    },
    tags: ["pierogi", "kitchen"],
    recipeIds: ["recipe-pierogi"],
    active: true,
    sortOrder: 30,
  },
  {
    id: "aff-cast-iron",
    partner: "amazon",
    url: "https://www.amazon.de/s?k=Gusseisenpfanne+28cm",
    imageUrl:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80",
    title: {
      de: "Gusseisenpfanne",
      pl: "Patelnia żeliwna",
    },
    description: {
      de: "Für knusprige Zwiebeln und angebratene Pierogi am nächsten Tag.",
      pl: "Do chrupiącej cebuli i podsmażanych pierogów nazajutrz.",
    },
    cta: {
      de: "Pfanne entdecken",
      pl: "Odkryj patelnię",
    },
    tags: ["kitchen", "general"],
    active: true,
    sortOrder: 40,
  },
];

export function listActiveAffiliateProducts(): AffiliateProduct[] {
  return seedAffiliateProducts
    .filter((p) => p.active)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

/** Products for a recipe: targeted first, then general fillers. */
export function getAffiliateForRecipe(
  recipeId: string,
  limit = 3,
): AffiliateProduct[] {
  const all = listActiveAffiliateProducts();
  const targeted = all.filter((p) => p.recipeIds?.includes(recipeId));
  const rest = all.filter((p) => !p.recipeIds?.includes(recipeId));
  return [...targeted, ...rest].slice(0, limit);
}

export function affiliateLabel(
  product: AffiliateProduct,
  locale: Locale,
  field: "title" | "description" | "cta",
): string {
  return product[field][locale];
}
