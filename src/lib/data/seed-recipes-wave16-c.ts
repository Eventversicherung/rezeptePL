import type { Recipe } from "@/types/content";

/**
 * Wave 16 Paket C — Pierniczki + Knedle z truskawkami.
 * Affiliate: guide-only. NO SEED_VERSION bump here.
 */
export const seedRecipesWave16C: Recipe[] = [

  {
    id: "recipe-pierniczki",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pierniczki/c541e741-161d-41f4-a89d-93bd90d76fdb.webp",
    prepMinutes: 40,
    cookMinutes: 12,
    servings: 40,
    regionIds: [],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch"],
    relatedPostIds: ["post-wigilia", "post-makowiec-technik", "post-polenladen"],
    videoUrl: null,
    translations: {
      de: {
        title: "Pierniczki",
        slug: "pierniczki",
        excerpt:
          "Polnische Gewürzplätzchen mit Honig — ausgestochen und gebacken, klar als Kekse und nicht als Piernik-Laib.",
        steps: [
          {
            text: "Honig mit Butter erwärmen (nicht kochen), abkühlen. Mit Ei, Mehl, Gewürzen und Backpulver zu einem Teig kneten. 1 Stunde kalt ruhen.",
            tip: "Das sind Plätzchen — der Laib bleibt bei [Piernik](/de/rezepte/piernik). Gewürze oft im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Teig dünn ausrollen, Formen ausstechen, auf Backpapier legen. Bei 175 °C ca. 10–12 Minuten backen, bis die Ränder fest sind.",
            tip: "Zu lange = steinhart. Anlass-Rahmen: [Wigilia](/de/blog/wigilia-speiseplan). Back-Geduld: [Makowiec-Technik](/de/blog/makowiec-technik).",
          },
          {
            text: "Auf dem Rost abkühlen. Optional mit Zuckerglasur verzieren. In Dosen lagern.",
            tip: "Ersatz Honig: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Hefegebäck-Nachbar: [Drożdżówka](/de/rezepte/drozdzowka).",
          },
        ],
        seoTitle: "Pierniczki Rezept | Lebkuchenplätzchen polnisch | Alemniam",
        seoDescription:
          "Pierniczki: Gewürzplätzchen mit Honig. Bilingual — Plätzchen, nicht Piernik-Laib.",
      },
      pl: {
        title: "Pierniczki",
        slug: "pierniczki",
        excerpt:
          "Polskie korzenne ciasteczka z miodem — wykrawane i pieczone, jasno jako ciasteczka, nie jako bochenek piernika.",
        steps: [
          {
            text: "Podgrzej miód z masłem (nie gotuj), ostudź. Z jajkiem, mąką, przyprawami i proszkiem zagnieć ciasto. Schłodź 1 godzinę.",
            tip: "To ciasteczka — bochenek zostaje przy [pierniku](/pl/rezepte/piernik). Przyprawy w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Wałkuj cienko, wykrawaj, układaj na papierze. Piecz w 175 °C ok. 10–12 min, aż brzegi stwardnieją.",
            tip: "Za długo = kamień. Okazja: [menu wigilijne](/pl/blog/menu-wigilijne). Cierpliwość: [makowiec](/pl/blog/makowiec-technika).",
          },
          {
            text: "Studź na kratce. Opcjonalnie lukier. Przechowuj w puszce.",
            tip: "Zamienniki miodu: [zamienniki](/pl/blog/zamienniki-skladnikow). Sąsiad drożdżowy: [drożdżówka](/pl/rezepte/drozdzowka).",
          },
        ],
        seoTitle: "Pierniczki przepis | Lebkuchenplätzchen | Alemniam",
        seoDescription:
          "Pierniczki z miodem. Dwujęzycznie — ciasteczka, nie bochenek piernika.",
      },
    },
    ingredients: [
      { id: "pi-1", name: { de: "Mehl", pl: "Mąka" }, amount: 350, unit: { de: "g", pl: "g" }, group: "pantry" },
      { id: "pi-2", name: { de: "Honig", pl: "Miód" }, amount: 120, unit: { de: "g", pl: "g" }, group: "pantry" },
      { id: "pi-3", name: { de: "Butter", pl: "Masło" }, amount: 80, unit: { de: "g", pl: "g" }, group: "dairy" },
      { id: "pi-4", name: { de: "Ei", pl: "Jajko" }, amount: 1, unit: { de: "Stück", pl: "szt." }, group: "dairy" },
      { id: "pi-5", name: { de: "Piernik-Gewürz / Zimt-Nelke-Mix", pl: "Przyprawa do piernika" }, amount: 2, unit: { de: "TL", pl: "łyżeczki" }, group: "spices", storeHintDe: "Polenladen" },
      { id: "pi-6", name: { de: "Backpulver", pl: "Proszek do pieczenia" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "pantry" },
      { id: "pi-7", name: { de: "Puderzucker für Glasur (optional)", pl: "Cukier puder na lukier (opcjonalnie)" }, amount: 100, unit: { de: "g", pl: "g" }, group: "pantry" },
    ],
    createdAt: "2026-07-28T12:00:00.000Z",
    updatedAt: "2026-07-28T12:00:00.000Z",
  },
  {
    id: "recipe-knedle-truskawki",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-knedle-truskawki/63f87f48-6677-49ba-b171-a4df96d6f2c6.webp",
    prepMinutes: 45,
    cookMinutes: 20,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch", "category-hauptgerichte"],
    relatedPostIds: ["post-sonntagsessen", "post-twarog", "post-polenladen"],
    videoUrl: null,
    translations: {
      de: {
        title: "Knedle z truskawkami",
        slug: "knedle-truskawki",
        excerpt:
          "Kartoffelknödel mit ganzer Erdbeere — Sommerdessert mit Butterbröseln, klar getrennt von Pflaumenknödeln.",
        steps: [
          {
            text: "800 g mehlige Kartoffeln kochen, pressen, abkühlen. Mit Ei, 150–200 g Mehl und Prise Salz zu einem Teig kneten — nicht zu weich.",
            tip: "Erdbeer-Linie — Pflaume bleibt bei [Knedle ze śliwkami](/de/rezepte/knedle-sliwki). Twaróg-Variante: [Twaróg-Guide](/de/blog/twarog-deutschland).",
          },
          {
            text: "Teig portionieren, flach drücken, je eine trockene Erdbeere einwickeln, Naht fest. In leicht siedendem Wasser garen, bis sie aufsteigen; 2 Minuten nachziehen.",
            tip: "Zu nasse Frucht reißt den Teig. Gefaltete Beeren-Pierogi: [Pierogi jagody](/de/rezepte/pierogi/jagody).",
          },
          {
            text: "Semmelbrösel in Butter gold anbraten. Knödel abtropfen, mit Bröseln und Zucker servieren. Optional Śmietana.",
            tip: "Menü: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Brösel oft im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
        ],
        seoTitle: "Knedle z truskawkami Rezept | Erdbeerknödel | Alemniam",
        seoDescription:
          "Knedle z truskawkami mit Butterbröseln. Bilingual — Erdbeere, nicht Pflaume.",
      },
      pl: {
        title: "Knedle z truskawkami",
        slug: "knedle-truskawki",
        excerpt:
          "Knedle ziemniaczane z całą truskawką — deser latem z bułką na maśle, jasno oddzielony od knedli ze śliwkami.",
        steps: [
          {
            text: "Ugotuj 800 g mączystych ziemniaków, przeciśnij, ostudź. Z jajkiem, 150–200 g mąki i szczyptą soli zagnieć ciasto — nie za miękkie.",
            tip: "Linia truskawkowa — śliwka zostaje przy [knedlach ze śliwkami](/pl/rezepte/knedle-sliwki). Twaróg: [przewodnik](/pl/blog/twarog-w-niemczech).",
          },
          {
            text: "Porcjuj ciasto, spłaszcz, zawijaj po jednej suchej truskawce. Gotuj w lekkim wrzątku aż wypłyną; 2 minuty dogotuj.",
            tip: "Mokry owoc rwie ciasto. Pierogi z jagodami: [pierogi z jagodami](/pl/rezepte/pierogi/jagody).",
          },
          {
            text: "Zrumień bułkę na maśle. Knedle odsącz, podsyp bułką i cukrem. Opcjonalnie śmietana.",
            tip: "Menu: [obiad niedzielny](/pl/blog/obiad-niedzielny). Bułka w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
        ],
        seoTitle: "Knedle z truskawkami przepis | Erdbeerknödel | Alemniam",
        seoDescription:
          "Knedle z truskawkami z bułką. Dwujęzycznie — truskawka, nie śliwka.",
      },
    },
    ingredients: [
      { id: "kt-1", name: { de: "Mehlige Kartoffeln", pl: "Ziemniaki mączyste" }, amount: 800, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "kt-2", name: { de: "Erdbeeren", pl: "Truskawki" }, amount: 400, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "kt-3", name: { de: "Mehl", pl: "Mąka" }, amount: 180, unit: { de: "g", pl: "g" }, group: "pantry" },
      { id: "kt-4", name: { de: "Ei", pl: "Jajko" }, amount: 1, unit: { de: "Stück", pl: "szt." }, group: "dairy" },
      { id: "kt-5", name: { de: "Butter", pl: "Masło" }, amount: 60, unit: { de: "g", pl: "g" }, group: "dairy" },
      { id: "kt-6", name: { de: "Semmelbrösel", pl: "Bułka tarta" }, amount: 80, unit: { de: "g", pl: "g" }, group: "pantry" },
      { id: "kt-7", name: { de: "Zucker", pl: "Cukier" }, amount: 40, unit: { de: "g", pl: "g" }, group: "pantry" },
    ],
    createdAt: "2026-07-28T12:00:00.000Z",
    updatedAt: "2026-07-28T12:00:00.000Z",
  },

];
