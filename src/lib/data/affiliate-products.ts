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
    tags: ["pierogi", "teig", "kitchen", "gear"],
    recipeIds: [
      "recipe-pierogi",
      "recipe-pierogi-meat",
      "recipe-pierogi-cabbage",
    ],
    postIds: ["post-teigmaschine", "post-pierogi-teig"],
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
    tags: ["teig", "kitchen", "gear"],
    recipeIds: [
      "recipe-pierogi",
      "recipe-pierogi-meat",
      "recipe-pierogi-cabbage",
    ],
    postIds: ["post-teigmaschine", "post-pierogi-teig"],
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
    tags: ["pierogi", "kitchen", "gear"],
    recipeIds: ["recipe-pierogi"],
    postIds: ["post-twarog", "post-teigmaschine"],
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
    tags: ["kitchen", "general", "gear"],
    recipeIds: ["recipe-placki", "recipe-schabowy", "recipe-oscypek"],
    active: true,
    sortOrder: 40,
  },
  {
    id: "aff-stand-mixer",
    partner: "amazon",
    url: "https://www.amazon.de/s?k=K%C3%BCchenmaschine+Knethaken",
    imageUrl:
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&q=80",
    title: {
      de: "Küchenmaschine mit Knethaken",
      pl: "Robot kuchenny z hakiem",
    },
    description: {
      de: "Für größere Pierogi-Batches und Hefeteig. Schüssel und Drehmoment prüfen.",
      pl: "Do większych partii pierogów i ciasta drożdżowego. Sprawdź misę i moc.",
    },
    cta: {
      de: "Maschinen vergleichen",
      pl: "Porównaj roboty",
    },
    tags: ["teigmaschine", "teig", "gear", "pierogi"],
    recipeIds: [
      "recipe-pierogi",
      "recipe-pierogi-meat",
      "recipe-pierogi-cabbage",
    ],
    postIds: ["post-teigmaschine"],
    active: true,
    sortOrder: 5,
  },
  {
    id: "aff-dutch-oven",
    partner: "amazon",
    url: "https://www.amazon.de/s?k=Dutch+Oven+Emaille",
    imageUrl:
      "https://images.unsplash.com/photo-1584990347448-a0df0c031b0b?w=800&q=80",
    title: {
      de: "Großer Schmortopf",
      pl: "Duży garnek do duszenia",
    },
    description: {
      de: "Für Bigos, Rosół und Gołąbki — gleichmäßige Hitze, große Portionen.",
      pl: "Do bigosu, rosołu i gołąbków — równe ciepło, duże porcje.",
    },
    cta: {
      de: "Töpfe ansehen",
      pl: "Zobacz garnki",
    },
    tags: ["bigos", "kitchen", "gear"],
    recipeIds: ["recipe-bigos", "recipe-rosol", "recipe-golabki"],
    active: true,
    sortOrder: 45,
  },
  {
    id: "aff-freezer-boxes",
    partner: "amazon",
    url: "https://www.amazon.de/s?k=Gefrierdosen+Set",
    imageUrl:
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
    title: {
      de: "Freezer-Boxen Set",
      pl: "Pojemniki do mrożenia",
    },
    description: {
      de: "Pierogi portionsweise einfrieren und beschriften — Wigilia ohne Panik.",
      pl: "Pierogi porcjami do mrożenia — Wigilia bez paniki.",
    },
    cta: {
      de: "Boxen finden",
      pl: "Znajdź pojemniki",
    },
    tags: ["freezer", "pierogi", "gear"],
    recipeIds: [
      "recipe-pierogi",
      "recipe-pierogi-meat",
      "recipe-pierogi-cabbage",
    ],
    postIds: ["post-wigilia"],
    active: true,
    sortOrder: 50,
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

export function getAffiliateForPost(
  postId: string,
  productIds: string[],
  limit = 4,
): AffiliateProduct[] {
  const all = listActiveAffiliateProducts();
  const byId = productIds
    .map((id) => all.find((p) => p.id === id))
    .filter((p): p is AffiliateProduct => Boolean(p));
  const tagged = all.filter((p) => p.postIds?.includes(postId));
  const seen = new Set<string>();
  const merged: AffiliateProduct[] = [];
  for (const p of [...byId, ...tagged]) {
    if (seen.has(p.id)) continue;
    seen.add(p.id);
    merged.push(p);
  }
  return merged.slice(0, limit);
}

export function affiliateLabel(
  product: AffiliateProduct,
  locale: Locale,
  field: "title" | "description" | "cta",
): string {
  return product[field][locale];
}
