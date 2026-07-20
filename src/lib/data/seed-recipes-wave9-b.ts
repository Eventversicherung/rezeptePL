import type { Recipe } from "@/types/content";

/**
 * Wave 9 Paket B — Beilage + Suppe (Sałatka jarzynowa, Botwinka).
 * Isolated for Integrator E: do not import into seed.ts until merge.
 * Affiliate: guide-only (no relatedProductIds / no catalog recipeIds).
 */
export const seedRecipesWave9B: Recipe[] = [
  {
    id: "recipe-salatka-jarzynowa",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1718096125279-15f47cab1cc9?w=1600&q=80",
    prepMinutes: 40,
    cookMinutes: 45,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-niedziela", "occasion-wielkanoc"],
    techniqueIds: [],
    categoryIds: ["category-vegetarisch"],
    videoUrl: null,
    relatedPostIds: [
      "post-wielkanoc",
      "post-sonntagsessen",
      "post-polenladen",
    ],
    translations: {
      de: {
        title: "Sałatka jarzynowa",
        slug: "salatka-jarzynowa",
        excerpt:
          "Polnischer Gemüsesalat mit Mayo — Fest- und Sonntagsbeilage, klar getrennt von Mizeria.",
        steps: [
          {
            text: "Kartoffeln, Karotten und Sellerie in Salzwasser weich garen; Erbsen kurz mitkochen oder aus dem Glas abtropfen. Alles abkühlen lassen.",
            tip: "Vortag möglich — kalt mischen hält besser. Menü-Rahmen: [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan).",
          },
          {
            text: "Gemüse und Apfel in kleine, gleichmäßige Würfel schneiden; saure Gurken fein würfeln; hartgekochte Eier hacken.",
            tip: "Einheitliche Würfel entscheiden mehr als exotische Zutaten — Alltagseinkauf: [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Mit Mayonnaise und etwas Gurkenlake oder Senf vermengen; mit Salz und Pfeffer abschmecken. Mindestens eine Stunde kühlen.",
          },
          {
            text: "Kalt servieren neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy) oder zur Osterplatte — nicht mit [Mizeria](/de/rezepte/mizeria) verwechseln (Gurke/Śmietana).",
            tip: "Sonntagsteller-Logik: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
        ],
        seoTitle: "Sałatka jarzynowa Rezept | Polnischer Gemüsesalat | Alemniam",
        seoDescription:
          "Sałatka jarzynowa — polnischer Gemüsesalat mit Mayo für Ostern und Sonntag. Bilingual mit DE-Einkauf, klar ≠ Mizeria.",
      },
      pl: {
        title: "Sałatka jarzynowa",
        slug: "salatka-jarzynowa",
        excerpt:
          "Klasyczna sałatka z majonezem — na święta i niedzielę, jasno inna niż mizeria.",
        steps: [
          {
            text: "Ugotuj ziemniaki, marchew i seler w osolonej wodzie; groszek krótko dogotuj lub odsącz ze słoika. Całość ostudź.",
            tip: "Można dzień wcześniej — zimne mieszanie trzyma się lepiej. Ramy menu: [menu wielkanocne](/pl/blog/menu-wielkanocne).",
          },
          {
            text: "Pokrój warzywa i jabłko w drobną, równą kostkę; ogórki kiszone drobno; jaja na twardo posiekaj.",
            tip: "Równa kostka ważniejsza niż egzotyka — zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Wymieszaj z majonezem i odrobiną zalewy lub musztardy; dopraw solą i pieprzem. Schłodź co najmniej godzinę.",
          },
          {
            text: "Podawaj zimną obok [kotleta schabowego](/pl/rezepte/kotlet-schabowy) lub na wielkanocnym stole — nie mylić z [mizerią](/pl/rezepte/mizeria) (ogórek/śmietana).",
            tip: "Logika niedzieli: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
        ],
        seoTitle: "Sałatka jarzynowa przepis | Sałatka z majonezem | Alemniam",
        seoDescription:
          "Sałatka jarzynowa — majonezowa sałatka warzywna na Wielkanoc i niedzielę. Dwujęzycznie, jasno ≠ mizeria.",
      },
    },
    ingredients: [
      {
        id: "sj-1",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "sj-2",
        name: { de: "Karotten", pl: "Marchew" },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "sj-3",
        name: { de: "Sellerie / Pastinake", pl: "Seler / pietruszka" },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "produce",
        storeHintDe: "Suppengrün-Sellerie oder Knolle — fest, nicht matschig",
      },
      {
        id: "sj-4",
        name: { de: "Erbsen (Glas oder TK)", pl: "Groszek (słoik lub mrożony)" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "sj-5",
        name: { de: "Saure Gurken (kiszone)", pl: "Ogórki kiszone" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "polish",
        storeHintDe: "Polenladen — nicht süß-sauer industriell",
      },
      {
        id: "sj-6",
        name: { de: "Apfel säuerlich", pl: "Jabłko kwaśne" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "sj-7",
        name: { de: "Eier hartgekocht", pl: "Jaja na twardo" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "sj-8",
        name: { de: "Mayonnaise", pl: "Majonez" },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Gute Mayo; polnische Marken im Polenladen oft runder",
        substitute: {
          de: "Mayo + etwas Joghurt für leichtere Variante (Hausstil benennen)",
          pl: "Majonez + trochę jogurtu na lżejszą wersję (nazwać wariantem domu)",
        },
      },
      {
        id: "sj-9",
        name: { de: "Senf (optional)", pl: "Musztarda (opcjonalnie)" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "pantry",
      },
      {
        id: "sj-10",
        name: { de: "Salz, Pfeffer", pl: "Sól, pieprz" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T22:00:00.000Z",
    updatedAt: "2026-07-20T22:00:00.000Z",
  },
  {
    id: "recipe-botwinka",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1526401363794-c96708fb8089?w=1600&q=80",
    prepMinutes: 25,
    cookMinutes: 40,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc"],
    techniqueIds: ["technique-bulion"],
    categoryIds: ["category-suppen", "category-vegetarisch"],
    videoUrl: null,
    relatedPostIds: [
      "post-polnische-suppen",
      "post-barszcz-technik",
      "post-smietana-schmand",
    ],
    translations: {
      de: {
        title: "Botwinka",
        slug: "botwinka",
        excerpt:
          "Frühlings-Suppe aus junger Rote Bete inkl. Blätter — warm, grün-rosa, klar ≠ Barszcz und ≠ Chłodnik.",
        steps: [
          {
            text: "Junge Rote Bete putzen: Knollen schälen und würfeln, Blätter und Stiele waschen, Stiele klein schneiden, Blätter separat bereitlegen.",
            tip: "Ohne frische Botwina: junge Bund-Bete mit Grün — Einkauf und Saison im [Suppen-Überblick](/de/blog/polnische-suppen).",
          },
          {
            text: "In leichter Brühe Knollen und Stiele weich garen; Kartoffeln zugeben. Blätter erst gegen Ende einlegen, damit sie Farbe behalten.",
            tip: "Das ist keine klare Festtagsbrühe wie [Barszcz](/de/rezepte/barszcz-czerwony) — hier bleiben Gemüse und Grün im Topf.",
          },
          {
            text: "Mit Salz, Pfeffer und etwas Säure (Zitrone oder etwas Lake) abschmecken; vom Herd nehmen und temperierte Śmietana einrühren.",
            tip: "Śmietana-Wahl: [Śmietana/Schmand](/de/blog/smietana-schmand) — nicht kochend einrühren.",
          },
          {
            text: "Heiß mit Dill und optional Ei servieren. Nicht kalt wie [Chłodnik](/de/rezepte/chlodnik-litewski) und nicht Gurkensäure wie [Ogórkowa](/de/rezepte/ogorkowa).",
            tip: "Technik-Abgrenzung klarer Bete-Brühe: [Barszcz-Technik](/de/blog/barszcz-technik).",
          },
        ],
        seoTitle: "Botwinka Rezept | Junge Rote-Bete-Suppe | Alemniam",
        seoDescription:
          "Botwinka kochen — Suppe aus junger Rote Bete mit Blättern. Warm und saisonal, klar getrennt von Barszcz und Chłodnik.",
      },
      pl: {
        title: "Botwinka",
        slug: "botwinka",
        excerpt:
          "Wiosenna zupa z młodych buraków z botwiną — ciepła, zielono-różowa, jasno ≠ barszcz i ≠ chłodnik.",
        steps: [
          {
            text: "Oczyść botwinę: bulwy obierz i pokrój, liście i ogonki umyj; ogonki drobno, liście odłóż osobno.",
            tip: "Bez świeżej botwiny: młode buraki z naćią — zakupy i sezon w [przeglądzie zup](/pl/blog/polskie-zupy).",
          },
          {
            text: "W lekkim wywarze ugotuj bulwy i ogonki; dodaj ziemniaki. Liście wrzuć pod koniec, żeby zachowały kolor.",
            tip: "To nie klarowny barszcz świąteczny jak [barszcz czerwony](/pl/rezepte/barszcz-czerwony) — tu warzywa i zieleń zostają w garnku.",
          },
          {
            text: "Dopraw solą, pieprzem i odrobiną kwasu (cytryna lub zalewa); zdejmij z ognia i wmieszaj letnią śmietanę.",
            tip: "Wybór nabiału: [śmietana/Schmand](/pl/blog/smietana-czy-schmand) — nie wlewaj do wrzątku.",
          },
          {
            text: "Podawaj gorącą z koperkiem i opcjonalnie jajkiem. Nie zimna jak [chłodnik](/pl/rezepte/chlodnik-litewski) i nie z kwasem ogórkowym jak [ogórkowa](/pl/rezepte/ogorkowa).",
            tip: "Rozróżnienie techniki klarownego wywaru: [jak ugotować barszcz](/pl/blog/jak-ugotowac-barszcz).",
          },
        ],
        seoTitle: "Botwinka przepis | Zupa z botwiny | Alemniam",
        seoDescription:
          "Botwinka — zupa z młodych buraków z liśćmi. Ciepła i sezonowa, jasno odróżniona od barszczu i chłodnika.",
      },
    },
    ingredients: [
      {
        id: "bw-1",
        name: {
          de: "Junge Rote Bete mit Blättern (Botwina)",
          pl: "Młode buraki z botwiną",
        },
        amount: 1,
        unit: { de: "Bund", pl: "pęczek" },
        group: "produce",
        storeHintDe: "Frühjahr/Markt — Bund mit frischem Grün; sonst junge Knollen + Blattspinat ehrlich als Notvariante",
      },
      {
        id: "bw-2",
        name: { de: "Gemüse- oder leichte Fleischbrühe", pl: "Bulion warzywny lub lekki mięsny" },
        amount: 1.2,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "bw-3",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "bw-4",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "bw-5",
        name: { de: "Śmietana / Schmand", pl: "Śmietana" },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        storeHintDe: "Schmand 20–24 % — siehe Śmietana-Guide",
      },
      {
        id: "bw-6",
        name: { de: "Dill", pl: "Koperek" },
        amount: 1,
        unit: { de: "Bund", pl: "pęczek" },
        group: "produce",
      },
      {
        id: "bw-7",
        name: { de: "Zitronensaft oder etwas Säure", pl: "Sok z cytryny lub odrobina kwasu" },
        amount: 1,
        unit: { de: "EL", pl: "łyżka" },
        group: "pantry",
      },
      {
        id: "bw-8",
        name: { de: "Ei hartgekocht (optional)", pl: "Jajko na twardo (opcjonalnie)" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "bw-9",
        name: { de: "Salz, Pfeffer", pl: "Sól, pieprz" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T22:10:00.000Z",
    updatedAt: "2026-07-20T22:10:00.000Z",
  },
];
