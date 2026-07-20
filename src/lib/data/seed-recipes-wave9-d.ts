import type { Recipe } from "@/types/content";

/**
 * Wave 9 Paket D — Kaszanka (Cook-Intent).
 * Types/Lexikon bleibt Owner: post-kielbasa-arten.
 * Intent: braten/grillen mit Zwiebel — nicht Flaki, nicht Piernik, nicht Kielbasa-Arten-Primary.
 * Integrator (E): merge into seed-recipes-wave9.ts + seed.ts related maps (no SEED_VERSION here).
 */
export const seedRecipesWave9D: Recipe[] = [
  {
    id: "recipe-kaszanka",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1779119866183-55f8f9c409c6?w=1600&q=80",
    prepMinutes: 15,
    cookMinutes: 25,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-schmoren"],
    categoryIds: ["category-hauptgerichte", "category-schnell"],
    relatedPostIds: [
      "post-kielbasa-arten",
      "post-polenladen",
      "post-sonntagsessen",
      "post-majeranek",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Kaszanka",
        slug: "kaszanka",
        excerpt:
          "Gebratene Kaszanka mit Zwiebel — Polenladen-Klassiker, klar getrennt vom Kiełbasa-Arten-Lexikon.",
        steps: [
          {
            text: "Kaszanka aus dem Kühlschrank nehmen, Hülle prüfen; in 2–3 cm Scheiben schneiden (oder im Ganzen anbraten und später teilen).",
            tip: "Einkauf und Qualitätscheck: [Polenladen](/de/blog/polenladen-einkaufen). Welche Wurst wohin gehört, bleibt im [Kiełbasa-Arten-Guide](/de/blog/kielbasa-arten) — hier nur Cook.",
          },
          {
            text: "Zwiebeln in Ringe oder Halbringe schneiden; Pfanne mit etwas Schmalz oder Öl auf mittlere Hitze bringen.",
          },
          {
            text: "Zwiebeln glasig bis goldbraun braten; Kaszanka-Scheiben dazugeben und von beiden Seiten knusprig anbraten, ohne die Füllung herauszudrücken.",
            tip: "Zu hohe Hitze reißt die Hülle. Majeranek sparsam am Ende — Details im [Majeranek-Lexikon](/de/blog/majeranek).",
          },
          {
            text: "Mit Salz und Pfeffer abschmecken; optional Apfelspalten kurz mitbraten für milde Säure.",
          },
          {
            text: "Heiß servieren mit Brot, Kartoffeln oder [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana) — Menü-Feeling: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
        ],
        seoTitle: "Kaszanka Rezept | Gebraten mit Zwiebel | Alemniam",
        seoDescription:
          "Kaszanka braten mit Zwiebel — bilingualer Cook-Guide aus dem Polenladen. Nicht das Kiełbasa-Arten-Lexikon.",
      },
      pl: {
        title: "Kaszanka",
        slug: "kaszanka",
        excerpt:
          "Smażona kaszanka z cebulą — klasyk ze sklepu polskiego, wyraźnie inny niż leksykon rodzajów kiełbasy.",
        steps: [
          {
            text: "Wyjmij kaszankę z lodówki, sprawdź osłonkę; pokrój w plastry 2–3 cm (albo smaż w całości i podziel później).",
            tip: "Zakupy i jakość: [sklep polski](/pl/blog/sklep-polski-zakupy). Która kiełbasa gdzie pasuje, zostaje w [przewodniku rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy) — tu tylko gotowanie.",
          },
          {
            text: "Pokrój cebulę w pierścienie lub półpierścienie; rozgrzej patelnię ze smalcem lub olejem na średnim ogniu.",
          },
          {
            text: "Zeszklij cebulę do złota; dodaj plastry kaszanki i obsmaż z obu stron na chrupko, bez wyciskania farszu.",
            tip: "Za mocny ogień pęka osłonka. Majeranek oszczędnie na końcu — [leksykon majeranku](/pl/blog/majeranek-leksykon).",
          },
          {
            text: "Dopraw solą i pieprzem; opcjonalnie krótko podsmaż plasterki jabłka dla łagodnej kwasowości.",
          },
          {
            text: "Podawaj gorącą z chlebem, ziemniakami lub [kapustą zasmażaną](/pl/rezepte/kapusta-zasmażana) — kontekst: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
        ],
        seoTitle: "Kaszanka przepis | Smażona z cebulą | Alemniam",
        seoDescription:
          "Kaszanka smażona z cebulą — dwujęzyczny przepis cook. Nie leksykon rodzajów kiełbasy.",
      },
    },
    ingredients: [
      {
        id: "ka-1",
        name: {
          de: "Kaszanka (Blutwurst mit Buchweizen/Gerste, aus dem Polenladen)",
          pl: "Kaszanka (ze sklepu polskiego)",
        },
        amount: 600,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe:
          "Polenladen — fest, würzig, nicht wässrig; Kühlkette prüfen",
        substitute: {
          de: "Gute deutsche Buchweizen-Blutwurst — ehrlich benennen, Charakter kann milder sein",
          pl: "Dobra niemiecka kaszanka gryczana — nazwać uczciwie, smak może być łagodniejszy",
        },
      },
      {
        id: "ka-2",
        name: { de: "Zwiebeln", pl: "Cebule" },
        amount: 2,
        unit: { de: "große", pl: "duże" },
        group: "produce",
      },
      {
        id: "ka-3",
        name: { de: "Schmalz oder neutrales Öl", pl: "Smalec lub olej" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "ka-4",
        name: { de: "Apfel (optional)", pl: "Jabłko (opcjonalnie)" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ka-5",
        name: { de: "Majoran (getrocknet)", pl: "Majeranek (suszony)" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
        storeHintDe: "Polenladen oft aromatischer",
      },
      {
        id: "ka-6",
        name: { de: "Pfeffer, Salz", pl: "Pieprz, sól" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "ka-7",
        name: {
          de: "Brot oder gekochte Kartoffeln zum Servieren",
          pl: "Chleb lub gotowane ziemniaki do podania",
        },
        amount: 4,
        unit: { de: "Portionen", pl: "porcje" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T22:00:00.000Z",
    updatedAt: "2026-07-20T22:00:00.000Z",
  },
];
