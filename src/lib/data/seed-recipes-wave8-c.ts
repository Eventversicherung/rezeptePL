import type { Recipe } from "@/types/content";

/**
 * Wave 8 Paket C — Pączki money page.
 * Integrator E merges into seed-recipes-wave8 / seed.ts.
 */
export const seedRecipesWave8C: Recipe[] = [
  {
    id: "recipe-paczki",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1578257264874-5a9858af7d68?w=1600&q=80",
    prepMinutes: 120,
    cookMinutes: 30,
    servings: 16,
    regionIds: [],
    occasionIds: ["occasion-tlusty-czwartek"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Pączki",
        slug: "paczki",
        excerpt:
          "Weiche Hefe-Pączki mit Füllung — Klassiker für Tłusty Czwartek, bilingual für DE-Küchen.",
        steps: [
          {
            text: "Hefe in lauwarmer Milch mit etwas Zucker auflösen, 10 Minuten gehen lassen, bis sie schäumt.",
            tip: "Milch nur lauwarm — zu heiß tötet Hefe. Technik-Details: [Pączki-Technik](/de/blog/paczek-technik).",
          },
          {
            text: "Mit Mehl, restlichem Zucker, Eiern, Butter, Prise Salz zu glattem, elastischem Teig kneten. Abgedeckt gehen lassen, bis verdoppelt (ca. 60–90 Min).",
          },
          {
            text: "Teig portionieren, flach drücken, je einen Teelöffel abgetropfte Füllung (Rose/Pflaume) einlegen, gut verschließen, Kugeln formen. 20–30 Min zweites Gehen.",
            tip: "Füllung nicht wässrig — sonst läuft sie aus. Anlass-Kontext: [Tłusty Czwartek](/de/blog/tlusty-czwartek).",
          },
          {
            text: "Fett auf 170–180 °C erhitzen. Pączki portionsweise goldbraun frittieren, wenden, auf Küchenpapier abtropfen.",
            tip: "Kleine Charge zuerst testen. Verwandtes knuspriges Gebäck: [Faworki](/de/rezepte/faworki).",
          },
          {
            text: "Noch warm mit Puderzucker bestäuben oder leicht glasieren. Zum Kaffee servieren.",
          },
        ],
        seoTitle: "Pączki Rezept | Polnische Hefe-Krapfen | Alemniam",
        seoDescription:
          "Pączki selbst machen: Hefeteig, Füllung, Frittieren — bilingual mit DE-Einkauf und Tłusty-Czwartek-Kontext.",
      },
      pl: {
        title: "Pączki",
        slug: "paczki",
        excerpt:
          "Miękkie pączki drożdżowe z nadzieniem — klasyk na Tłusty Czwartek, dwujęzycznie dla kuchni w DE.",
        steps: [
          {
            text: "Rozpuść drożdże w letnim mleku z odrobiną cukru, odstaw 10 min aż spienieją.",
            tip: "Mleko tylko letnie — za gorące zabija drożdże. Technika: [technika pączków](/pl/blog/paczki-technika).",
          },
          {
            text: "Zagnieć z mąką, resztą cukru, jajkami, masłem i szczyptą soli na gładkie, elastyczne ciasto. Przykryte odstaw aż podwoi objętość (ok. 60–90 min).",
          },
          {
            text: "Podziel ciasto, spłaszcz, włóż po łyżeczce odsączonego nadzienia (róża/powidła), szczelnie sklej, uformuj kulki. 20–30 min drugie wyrastanie.",
            tip: "Nadzienie nie może być wodniste. Kontekst dnia: [Tłusty Czwartek](/pl/blog/tlusty-czwartek-przepisy).",
          },
          {
            text: "Rozgrzej tłuszcz do 170–180 °C. Smaż pączki partiami na złoto, odwracaj, odsącz na papierze.",
            tip: "Najpierw mała partia testowa. Pokrewne chrupiące ciasto: [faworki](/pl/rezepte/faworki).",
          },
          {
            text: "Jeszcze ciepłe posyp cukrem pudrem albo lekko polukruj. Podawaj do kawy.",
          },
        ],
        seoTitle: "Pączki przepis | Drożdżowe z nadzieniem | Alemniam",
        seoDescription:
          "Pączki w domu: ciasto drożdżowe, nadzienie, smażenie — dwujęzycznie z zakupami w DE i kontekstem Tłustego Czwartku.",
      },
    },
    ingredients: [
      {
        id: "pc-1",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "pc-2",
        name: { de: "Milch", pl: "Mleko" },
        amount: 200,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "pc-3",
        name: { de: "Frischhefe", pl: "Drożdże świeże" },
        amount: 25,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "oder Trockenhefe nach Packung",
      },
      {
        id: "pc-4",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "pc-5",
        name: { de: "Eier", pl: "Jajka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pc-6",
        name: { de: "Butter", pl: "Masło" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "pc-7",
        name: {
          de: "Rosenmarmelade oder Pflaumenmus",
          pl: "Konfitura różana lub powidła",
        },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen — gut abtropfen lassen",
      },
      {
        id: "pc-8",
        name: { de: "Frittieröl oder Schmalz", pl: "Olej do smażenia lub smalec" },
        amount: 1,
        unit: { de: "l", pl: "l" },
        group: "pantry",
        storeHintDe: "genug Tiefe zum Schwimmen",
      },
      {
        id: "pc-9",
        name: { de: "Puderzucker", pl: "Cukier puder" },
        amount: 50,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T21:00:00.000Z",
    updatedAt: "2026-07-20T21:00:00.000Z",
  },
];
