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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-paczki/be50cfd6-63a9-423d-b088-3dedb5e6e93b.webp",
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
          "Weiche Hefe-Pączki mit Füllung, der süße Klassiker für Tłusty Czwartek, bilingual erklärt für DE-Küchen.",
        steps: [
          {
            text: "Hefe in lauwarmer Milch mit etwas Zucker auflösen und 10 Minuten gehen lassen, bis sie schäumt.",
            tip: "Die Milch sollte nur lauwarm sein, denn zu heiße Milch tötet die Hefe ab. Weitere Handgriffe zeigt die [Pączki-Technik](/de/blog/paczek-technik).",
          },
          {
            text: "Mit Mehl, restlichem Zucker, Eiern, Butter und einer Prise Salz zu glattem, elastischem Teig kneten. Abgedeckt gehen lassen, bis er sich verdoppelt hat, etwa 60 bis 90 Minuten.",
          },
          {
            text: "Teig portionieren, flach drücken, je einen Teelöffel abgetropfte Füllung aus Rosenmarmelade oder Pflaumenmus einlegen, gut verschließen und zu Kugeln formen. Danach 20 bis 30 Minuten ein zweites Mal gehen lassen.",
            tip: "Die Füllung sollte nicht wässrig sein, sonst läuft sie beim Frittieren aus. Den Anlass dahinter erklärt der Beitrag zu [Tłusty Czwartek](/de/blog/tlusty-czwartek).",
          },
          {
            text: "Fett auf 170 bis 180 Grad erhitzen und die Pączki portionsweise goldbraun frittieren, dabei wenden und danach auf Küchenpapier abtropfen lassen.",
            tip: "Teste zuerst eine kleine Charge, bevor du den ganzen Teig frittierst. Ein verwandtes, knuspriges Gebäck ohne Füllung sind [Faworki](/de/rezepte/faworki).",
          },
          {
            text: "Noch warm mit Puderzucker bestäuben oder leicht glasieren und zum Kaffee servieren.",
          },
        ],
        seoTitle: "Pączki Rezept | Polnische Hefe-Krapfen | Alemniam",
        seoDescription:
          "Pączki selbst machen: Hefeteig, Füllung, Frittieren, bilingual mit DE-Einkauf und Tłusty-Czwartek-Kontext.",
      },
      pl: {
        title: "Pączki",
        slug: "paczki",
        excerpt:
          "Miękkie pączki drożdżowe z nadzieniem, słodki klasyk na Tłusty Czwartek, opisany dwujęzycznie dla kuchni w DE.",
        steps: [
          {
            text: "Rozpuść drożdże w letnim mleku z odrobiną cukru i odstaw na 10 minut, aż zaczną się pienić.",
            tip: "Mleko powinno być tylko letnie, bo za gorące zabija drożdże. Kolejne kroki pokazuje [technika pączków](/pl/blog/paczki-technika).",
          },
          {
            text: "Zagnieć z mąką, resztą cukru, jajkami, masłem i szczyptą soli na gładkie, elastyczne ciasto. Przykryte odstaw, aż podwoi objętość, to zajmuje zwykle 60 do 90 minut.",
          },
          {
            text: "Podziel ciasto, spłaszcz je, włóż po łyżeczce odsączonego nadzienia z róży lub powideł, szczelnie sklej i uformuj kulki. Odstaw na 20 do 30 minut na drugie wyrastanie.",
            tip: "Nadzienie nie może być wodniste, bo inaczej wypłynie podczas smażenia. Kontekst tego dnia opisuje wpis o [Tłustym Czwartku](/pl/blog/tlusty-czwartek-przepisy).",
          },
          {
            text: "Rozgrzej tłuszcz do 170 do 180 stopni i smaż pączki partiami na złoty kolor, odwracając je, a potem odsącz na papierze.",
            tip: "Najpierw usmaż małą partię testową, zanim zajmiesz się resztą ciasta. Pokrewnym chrupiącym ciastem bez nadzienia są [faworki](/pl/rezepte/faworki).",
          },
          {
            text: "Jeszcze ciepłe posyp cukrem pudrem albo lekko polukruj i podawaj do kawy.",
          },
        ],
        seoTitle: "Pączki przepis | Drożdżowe z nadzieniem | Alemniam",
        seoDescription:
          "Pączki w domu: ciasto drożdżowe, nadzienie, smażenie, dwujęzycznie z zakupami w DE i kontekstem Tłustego Czwartku.",
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
        storeHintDe: "Oder Trockenhefe nach Packungsangabe",
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
        storeHintDe: "Aus dem Polenladen, vorher gut abtropfen lassen",
      },
      {
        id: "pc-8",
        name: { de: "Frittieröl oder Schmalz", pl: "Olej do smażenia lub smalec" },
        amount: 1,
        unit: { de: "l", pl: "l" },
        group: "pantry",
        storeHintDe: "So viel, dass die Pączki darin schwimmen können",
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
