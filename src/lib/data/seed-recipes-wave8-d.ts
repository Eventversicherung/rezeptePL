import type { Recipe } from "@/types/content";

/**
 * Wave 8 Paket D — Knedle ze śliwkami.
 * Intent: Obst-Knödel (Kartoffel-/Quark-Teig um Pflaume) ≠ Pierogi-Familie, ≠ Leniwe, ≠ Pyzy, ≠ Uszka.
 * Integrator (E): merge into seed-recipes-wave8.ts + seed.ts relatedPostIds (no SEED_VERSION here).
 */
export const seedRecipesWave8D: Recipe[] = [
  {
    id: "recipe-knedle-sliwki",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1747628857843-96f695316cfc?w=1600&q=80",
    prepMinutes: 45,
    cookMinutes: 25,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-teig"],
    categoryIds: [
      "category-suess",
      "category-hauptgerichte",
      "category-vegetarisch",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Knedle ze śliwkami",
        slug: "knedle-sliwki",
        excerpt:
          "Kartoffel-Knödel mit Pflaume — süß, sättigend, klar getrennt von Pierogi und Leniwe.",
        steps: [
          {
            text: "Kartoffeln kochen, ausdampfen, stampfen; mit Mehl, Ei und Prise Salz zu weichem, formbarem Teig verkneten.",
            tip: "Teiggefühl ähnlich wie bei [Kopytka](/de/rezepte/kopytka), aber die Kugel umschließt später die Pflaume — nicht mit [Pierogi leniwe](/de/rezepte/pierogi-leniwe) verwechseln (ohne Füllung).",
          },
          {
            text: "Pflaumen halbieren, Stein entfernen; optional ein Stück Zucker oder Zimt in die Mitte legen.",
          },
          {
            text: "Teig flach drücken, Pflaume einpacken, fest zu einer Kugel schließen — keine Luftblasen, keine Risse.",
            tip: "Abgrenzung: gefaltete Teigtaschen bleiben im [Pierogi-Guide](/de/blog/pierogi-guide); Knedle sind runde Obst-Knödel.",
          },
          {
            text: "In leicht siedendem Salzwasser garen, bis sie aufschwimmen; 2–3 Minuten nachziehen, herausnehmen.",
          },
          {
            text: "Mit Butterbröseln und Zucker oder Zimt servieren — warm als Dessert oder süßes Hauptgericht.",
            tip: "Süße Nachbarschaft: [Racuchy mit Apfel](/de/rezepte/racuchy-jablka). Einkaufshilfe: [Polenladen](/de/blog/polenladen-einkaufen).",
          },
        ],
        seoTitle: "Knedle mit Pflaumen Rezept | Knedle ze śliwkami | Alemniam",
        seoDescription:
          "Knedle ze śliwkami — Kartoffel-Knödel mit Pflaume, bilingual mit DE-Einkauf. Nicht Pierogi, nicht Leniwe.",
      },
      pl: {
        title: "Knedle ze śliwkami",
        slug: "knedle-sliwki",
        excerpt:
          "Knedle ziemniaczane ze śliwką — słodkie, sycące, wyraźnie inne niż pierogi i leniwe.",
        steps: [
          {
            text: "Ugotuj ziemniaki, odparuj, utłucz; zagnieć z mąką, jajkiem i szczyptą soli na miękkie, formowalne ciasto.",
            tip: "Wyczucie jak przy [kopytkach](/pl/rezepte/kopytka), ale kula owija śliwkę — nie mylić z [pierogami leniwymi](/pl/rezepte/pierogi-leniwe) (bez nadzienia).",
          },
          {
            text: "Przekrój śliwki, usuń pestkę; opcjonalnie włóż cukier lub cynamon do środka.",
          },
          {
            text: "Spłaszcz ciasto, owiń śliwkę, szczelnie zamknij w kulę — bez pęcherzy i pęknięć.",
            tip: "Rozróżnienie: sklejane pierogi zostają w [przewodniku po pierogach](/pl/blog/przewodnik-pierogi); knedle to okrągłe knedle owocowe.",
          },
          {
            text: "Gotuj w lekko wrzącej osolonej wodzie aż wypłyną; 2–3 minuty dociągnij, wyjmij.",
          },
          {
            text: "Podawaj z bułką tartą na maśle i cukrem lub cynamonem — ciepło jako deser lub słodkie danie główne.",
            tip: "Słodkie sąsiedztwo: [racuchy z jabłkami](/pl/rezepte/racuchy-jablka). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
        ],
        seoTitle: "Knedle ze śliwkami przepis | Alemniam",
        seoDescription:
          "Knedle ze śliwkami — knedle ziemniaczane ze śliwką, dwujęzycznie. Nie pierogi, nie leniwe.",
      },
    },
    ingredients: [
      {
        id: "kn-1",
        name: {
          de: "Mehlig kochende Kartoffeln",
          pl: "Ziemniaki mączyste",
        },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "kn-2",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "kn-3",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "kn-4",
        name: {
          de: "Pflaumen (frisch oder aus Glas, abgetropft)",
          pl: "Śliwki (świeże lub ze słoika, odsączone)",
        },
        amount: 12,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
        storeHintDe: "Saison frisch; sonst Glas — gut abtropfen",
        substitute: {
          de: "Aprikosen oder Mirabellen — Form und Garzeit anpassen",
          pl: "Morele lub mirabelki — dopasuj formę i czas",
        },
      },
      {
        id: "kn-5",
        name: { de: "Zucker (für die Füllung, optional)", pl: "Cukier (do środka, opcjonalnie)" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "kn-6",
        name: { de: "Butter", pl: "Masło" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "kn-7",
        name: { de: "Semmelbrösel", pl: "Bułka tarta" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "kn-8",
        name: { de: "Zimt, Zucker zum Servieren", pl: "Cynamon, cukier do podania" },
        amount: 1,
        unit: { de: "EL", pl: "łyżka" },
        group: "spices",
      },
      {
        id: "kn-9",
        name: { de: "Salz", pl: "Sól" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T21:00:00.000Z",
    updatedAt: "2026-07-20T21:00:00.000Z",
  },
];
