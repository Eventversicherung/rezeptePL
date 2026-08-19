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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-knedle-sliwki/f76d417a-c9bc-4421-ab92-c7460c2ecd04.webp",
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
          "Kartoffel-Knödel mit ganzer Pflaume im Kern, süß und sättigend, klar getrennt von Pierogi und Leniwe.",
        steps: [
          {
            text: "Kartoffeln kochen, gut ausdampfen lassen, stampfen und mit Mehl, Ei und einer Prise Salz zu weichem, formbarem Teig verkneten.",
            tip: "Das Teiggefühl ähnelt dem bei [Kopytka](/de/rezepte/kopytka), doch die Kugel umschließt hier später die ganze Pflaume. Verwechsle das nicht mit [Pierogi leniwe](/de/rezepte/pierogi-leniwe), die ganz ohne Füllung auskommen.",
          },
          {
            text: "Pflaumen halbieren und den Stein entfernen, dann optional ein Stück Zucker oder etwas Zimt in die Mitte legen.",
          },
          {
            text: "Teig flach drücken, die Pflaume darin einpacken und fest zu einer Kugel schließen, ohne Luftblasen und ohne Risse.",
            tip: "Gefaltete Teigtaschen bleiben ganz eigenes Thema im [Pierogi-Guide](/de/blog/pierogi-guide), Knedle dagegen sind runde Obst-Knödel mit anderer Form.",
          },
          {
            text: "In leicht siedendem Salzwasser garen, bis die Knedle aufschwimmen, dann noch 2 bis 3 Minuten ziehen lassen und herausnehmen.",
          },
          {
            text: "Mit Butterbröseln und Zucker oder Zimt servieren, warm als Dessert oder als süßes Hauptgericht.",
            tip: "Eine süße Nachbarschaft bieten [Racuchy mit Apfel](/de/rezepte/racuchy-jablka), passende Zutaten dafür findest du im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
        ],
        seoTitle: "Knedle mit Pflaumen Rezept | Knedle ze śliwkami | Alemniam",
        seoDescription:
          "Knedle ze śliwkami, Kartoffel-Knödel mit Pflaume, bilingual mit DE-Einkauf. Nicht Pierogi, nicht Leniwe.",
      },
      pl: {
        title: "Knedle ze śliwkami",
        slug: "knedle-sliwki",
        excerpt:
          "Knedle ziemniaczane z całą śliwką w środku, słodkie i sycące, wyraźnie inne niż pierogi i leniwe.",
        steps: [
          {
            text: "Ugotuj ziemniaki, dobrze odparuj, utłucz i zagnieć z mąką, jajkiem oraz szczyptą soli na miękkie, formowalne ciasto.",
            tip: "Wyczucie ciasta jest podobne jak przy [kopytkach](/pl/rezepte/kopytka), ale kula owija tu całą śliwkę. Nie myl tego z [pierogami leniwymi](/pl/rezepte/pierogi-leniwe), które są zupełnie bez nadzienia.",
          },
          {
            text: "Przekrój śliwki na pół, usuń pestkę, a opcjonalnie włóż do środka kawałek cukru lub odrobinę cynamonu.",
          },
          {
            text: "Spłaszcz ciasto, owiń nim śliwkę i szczelnie zamknij w kulę, bez pęcherzy powietrza i bez pęknięć.",
            tip: "Sklejane pierogi mają zupełnie osobny temat w [przewodniku po pierogach](/pl/blog/przewodnik-pierogi), knedle to za to okrągłe knedle owocowe o innej formie.",
          },
          {
            text: "Gotuj w lekko wrzącej osolonej wodzie, aż knedle wypłyną, potem dociągnij jeszcze 2 do 3 minut i wyjmij.",
          },
          {
            text: "Podawaj z bułką tartą podsmażoną na maśle i cukrem lub cynamonem, ciepłe jako deser albo słodkie danie główne.",
            tip: "Słodkim sąsiadem są [racuchy z jabłkami](/pl/rezepte/racuchy-jablka), a potrzebne składniki znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
        ],
        seoTitle: "Knedle ze śliwkami przepis | Alemniam",
        seoDescription:
          "Knedle ze śliwkami, knedle ziemniaczane ze śliwką, dwujęzycznie. Nie pierogi, nie leniwe.",
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
        storeHintDe:
          "In der Saison frisch, sonst Glasware gut abtropfen lassen",
        substitute: {
          de: "Aprikosen oder Mirabellen, dabei Form und Garzeit anpassen",
          pl: "Morele lub mirabelki, dopasuj wtedy formę i czas gotowania",
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
