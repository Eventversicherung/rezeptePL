import type { Recipe } from "@/types/content";

/**
 * Wave 8 Paket B — Suppen-Vertiefung (Ogórkowa, Kapuśniak).
 * Isolated for Integrator E: do not import into seed.ts until merge.
 */
export const seedRecipesWave8B: Recipe[] = [
  {
    id: "recipe-ogorkowa",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1478144592103-25e218a04891?w=1600&q=80",
    prepMinutes: 25,
    cookMinutes: 45,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: ["technique-bulion"],
    categoryIds: ["category-suppen"],
    videoUrl: null,
    relatedPostIds: [
      "post-polnische-suppen",
      "post-kiszenie",
      "post-polenladen",
      "post-rosol-technik",
    ],
    translations: {
      de: {
        title: "Zupa ogórkowa",
        slug: "ogorkowa",
        excerpt:
          "Saure-Gurken-Suppe mit Kartoffeln und Dill — Alltagsklassiker aus Kiszone-Gurken, nicht Żurek.",
        steps: [
          {
            text: "Brühe erhitzen; Kartoffeln und Suppengrün würfeln und weich garen — Brühe-Feeling wie bei [Rosół-Technik](/de/blog/rosol-technik), hier aber für Einlagen-Suppe.",
            tip: "Keine klare Festtagsbrühe nötig; guter Fond reicht. Überblick: [Polnische Suppen](/de/blog/polnische-suppen).",
          },
          {
            text: "Saure Gurken (ogórki kiszone) grob raspeln oder fein würfeln; etwas Lake bereitstellen.",
            tip: "Gurken aus dem [Kiszenie-Guide](/de/blog/kiszenie-guide) oder Glas aus dem Polenladen — Essiggurken ändern den Charakter.",
          },
          {
            text: "Gurken und Lake zur Suppe geben, 10–15 Minuten sanft köcheln; mit Salz, Pfeffer und Dill abschmecken.",
          },
          {
            text: "Vom Herd nehmen, temperierte Śmietana einrühren; heiß mit frischem Dill servieren.",
            tip: "Nicht verwechseln mit [Żurek](/de/rezepte/zurek) (Zakwas) oder kaltem [Chłodnik](/de/rezepte/chlodnik-litewski).",
          },
        ],
        seoTitle: "Zupa ogórkowa Rezept | Saure-Gurken-Suppe | Alemniam",
        seoDescription:
          "Zupa ogórkowa kochen — saure Gurkensuppe mit Kartoffeln und Dill. Bilingual mit DE-Einkauf und Kiszenie-Tipps.",
      },
      pl: {
        title: "Zupa ogórkowa",
        slug: "ogorkowa",
        excerpt:
          "Zupa z ogórków kiszonych z ziemniakami i koperkiem — klasyk na co dzień, nie żurek.",
        steps: [
          {
            text: "Podgrzej wywar; pokrój ziemniaki i włoszczyznę, gotuj do miękkości — wyczucie wywaru jak w [technice rosołu](/pl/blog/jak-ugotowac-rosol), tu pod zupę z dodatkami.",
            tip: "Nie trzeba klarownego wywaru świątecznego; dobry fond wystarczy. Przegląd: [polskie zupy](/pl/blog/polskie-zupy).",
          },
          {
            text: "Ogórki kiszone zetrzyj lub drobno pokrój; odstaw trochę zalewy.",
            tip: "Ogórki z [kiszenia w domu](/pl/blog/kiszenie-w-domu) albo ze słoika ze sklepu polskiego — ogórki z octu zmieniają charakter.",
          },
          {
            text: "Dodaj ogórki i zalewę, gotuj łagodnie 10–15 minut; dopraw solą, pieprzem i koperkiem.",
          },
          {
            text: "Zdejmij z ognia, wmieszaj letnią śmietanę; podawaj gorącą z świeżym koperkiem.",
            tip: "Nie mylić z [żurkiem](/pl/rezepte/zurek) (zakwas) ani zimnym [chłodnikiem](/pl/rezepte/chlodnik-litewski).",
          },
        ],
        seoTitle: "Zupa ogórkowa przepis | Ogórkowa | Alemniam",
        seoDescription:
          "Zupa ogórkowa — przepis z ziemniakami i koperkiem. Dwujęzycznie z zakupami w DE i wskazówkami kiszenia.",
      },
    },
    ingredients: [
      {
        id: "og-1",
        name: { de: "Gemüse- oder Fleischbrühe", pl: "Bulion warzywny lub mięsny" },
        amount: 1.5,
        unit: { de: "l", pl: "l" },
        group: "pantry",
        storeHintDe: "Eigenbrühe oder guter Fond — nicht nur Würfel",
      },
      {
        id: "og-2",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "og-3",
        name: { de: "Karotte", pl: "Marchew" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "og-4",
        name: { de: "Petersilienwurzel oder Sellerie", pl: "Pietruszka lub seler" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "og-5",
        name: { de: "Saure Gurken (ogórki kiszone)", pl: "Ogórki kiszone" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "polish",
        storeHintDe: "Polenladen / Kiszone — nicht Essiggurken",
        substitute: {
          de: "Gute fermentierte Salzgurken aus dem Kühlregal",
          pl: "Dobre ogórki kiszone z lodówki supermarketu",
        },
      },
      {
        id: "og-6",
        name: { de: "Gurkenlake", pl: "Zalewa z ogórków" },
        amount: 100,
        unit: { de: "ml", pl: "ml" },
        group: "polish",
        storeHintDe: "Aus dem gleichen Glas dosieren",
      },
      {
        id: "og-7",
        name: { de: "Śmietana / Schmand", pl: "Śmietana" },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        storeHintDe: "Schmand 20–24 % als Alltagsersatz",
      },
      {
        id: "og-8",
        name: { de: "Dill", pl: "Koperek" },
        amount: 1,
        unit: { de: "Bund", pl: "pęczek" },
        group: "produce",
      },
      {
        id: "og-9",
        name: { de: "Salz, Pfeffer", pl: "Sól, pieprz" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T21:00:00.000Z",
    updatedAt: "2026-07-20T21:00:00.000Z",
  },
  {
    id: "recipe-kapusniak",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1543332164-6e82f355bad8?w=1600&q=80",
    prepMinutes: 25,
    cookMinutes: 60,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: ["technique-bulion", "technique-kiszenie"],
    categoryIds: ["category-suppen"],
    videoUrl: null,
    relatedPostIds: [
      "post-polnische-suppen",
      "post-kiszenie",
      "post-kielbasa-arten",
      "post-majeranek",
    ],
    translations: {
      de: {
        title: "Kapuśniak",
        slug: "kapusniak",
        excerpt:
          "Sauerkrautsuppe mit Kartoffeln und geräucherter Wurst — Suppe, kein Bigos.",
        steps: [
          {
            text: "Rauchfleisch oder Kiełbasa anbraten, Zwiebel glasig schwitzen; mit Brühe aufgießen.",
            tip: "Wurstwahl: [Kiełbasa-Arten](/de/blog/kielbasa-arten) — geräuchert trägt besser als biała.",
          },
          {
            text: "Kartoffeln und Karotte zugeben; Sauerkraut ausdrücken, grob schneiden, in den Topf geben.",
            tip: "Kapusta-Qualität entscheidet — Kontext im [Kiszenie-Guide](/de/blog/kiszenie-guide).",
          },
          {
            text: "Mit Lorbeer, Piment und Majoran 40–50 Minuten sanft köcheln; abschmecken.",
            tip: "Majoran sparsam und frisch genug — Lexikon: [Majeranek](/de/blog/majeranek).",
          },
          {
            text: "Heiß mit Brot servieren. Optional Schmand-Klecks.",
            tip: "Das ist Suppe mit Löffel — nicht [Bigos](/de/rezepte/bigos) (Schmorgericht). Schwester-Suppe: [Ogórkowa](/de/rezepte/ogorkowa).",
          },
        ],
        seoTitle: "Kapuśniak Rezept | Sauerkrautsuppe | Alemniam",
        seoDescription:
          "Kapuśniak kochen — polnische Sauerkrautsuppe mit Wurst und Kartoffeln. Bilingual, klar getrennt von Bigos.",
      },
      pl: {
        title: "Kapuśniak",
        slug: "kapusniak",
        excerpt:
          "Zupa z kapusty kiszonej z ziemniakami i wędzoną kiełbasą — zupa, nie bigos.",
        steps: [
          {
            text: "Podsmaż wędzonkę lub kiełbasę, zeszklij cebulę; zalej wywarem.",
            tip: "Wybór kiełbasy: [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy) — wędzona niesie lepiej niż biała.",
          },
          {
            text: "Dodaj ziemniaki i marchew; kapustę odciśnij, pokrój, wrzuć do garnka.",
            tip: "Jakość kapusty decyduje — kontekst w [kiszeniu w domu](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Gotuj łagodnie 40–50 minut z liściem laurowym, zielem angielskim i majerankiem; dopraw.",
            tip: "Majeranek oszczędnie i świeżo — leksykon: [majeranek](/pl/blog/majeranek-leksykon).",
          },
          {
            text: "Podawaj gorący z chlebem. Opcjonalnie łyżka śmietany.",
            tip: "To zupa na łyżkę — nie [bigos](/pl/rezepte/bigos) (danie duszone). Siostrzana zupa: [ogórkowa](/pl/rezepte/ogorkowa).",
          },
        ],
        seoTitle: "Kapuśniak przepis | Zupa z kapusty | Alemniam",
        seoDescription:
          "Kapuśniak — zupa z kapusty kiszonej z kiełbasą i ziemniakami. Dwujęzycznie, jasno odróżniony od bigosu.",
      },
    },
    ingredients: [
      {
        id: "ka-1",
        name: { de: "Fleisch- oder Gemüsebrühe", pl: "Bulion mięsny lub warzywny" },
        amount: 1.5,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "ka-2",
        name: { de: "Sauerkraut (Kapusta kiszona)", pl: "Kapusta kiszona" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen — nicht zu süß industriell",
      },
      {
        id: "ka-3",
        name: { de: "Geräucherte Kiełbasa oder Räucherspeck", pl: "Kiełbasa wędzona lub wędzonka" },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen — siehe Kiełbasa-Arten",
      },
      {
        id: "ka-4",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "ka-5",
        name: { de: "Karotte", pl: "Marchew" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ka-6",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ka-7",
        name: { de: "Majoran", pl: "Majeranek" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
        storeHintDe: "Polenladen — getrocknet, aromatisch",
      },
      {
        id: "ka-8",
        name: { de: "Lorbeerblätter", pl: "Liście laurowe" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "ka-9",
        name: { de: "Pimentkörner", pl: "Ziele angielskie" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "ka-10",
        name: { de: "Pfeffer, Salz", pl: "Pieprz, sól" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T21:10:00.000Z",
    updatedAt: "2026-07-20T21:10:00.000Z",
  },
];
