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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-ogorkowa/fe6aee59-9d09-475d-8464-4012dab7203a.webp",
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
          "Saure-Gurken-Suppe mit Kartoffeln und Dill, ein warmer Alltagsklassiker aus fermentierten Gurken, der nichts mit Żurek zu tun hat.",
        steps: [
          {
            text: "Brühe erhitzen, Kartoffeln und Suppengrün würfeln und darin weich garen, ähnlich wie beim Brühe-Ansatz aus der [Rosół-Technik](/de/blog/rosol-technik), hier aber als Basis für eine Einlagen-Suppe.",
            tip: "Eine klare Festtagsbrühe brauchst du dafür nicht, ein guter Fond reicht völlig aus. Einen Überblick über verwandte Suppen gibt [Polnische Suppen](/de/blog/polnische-suppen).",
          },
          {
            text: "Saure Gurken (ogórki kiszone) grob raspeln oder fein würfeln und etwas Lake beiseitestellen.",
            tip: "Gurken kannst du selbst nach dem [Kiszenie-Guide](/de/blog/kiszenie-guide) einlegen oder fertig im Glas aus dem Polenladen kaufen, Essiggurken verändern dagegen den Charakter der Suppe deutlich.",
          },
          {
            text: "Gurken und Lake zur Suppe geben und 10 bis 15 Minuten sanft köcheln lassen, dann mit Salz, Pfeffer und Dill abschmecken.",
          },
          {
            text: "Vom Herd nehmen, temperierte Śmietana einrühren und heiß mit frischem Dill servieren.",
            tip: "Verwechsle die Suppe nicht mit [Żurek](/de/rezepte/zurek), der auf Zakwas basiert, oder mit dem kalten [Chłodnik](/de/rezepte/chlodnik-litewski).",
          },
        ],
        seoTitle: "Zupa ogórkowa Rezept | Saure-Gurken-Suppe | Alemniam",
        seoDescription:
          "Zupa ogórkowa kochen, saure Gurkensuppe mit Kartoffeln und Dill. Bilingual mit DE-Einkauf und Kiszenie-Tipps.",
      },
      pl: {
        title: "Zupa ogórkowa",
        slug: "ogorkowa",
        excerpt:
          "Zupa z ogórków kiszonych z ziemniakami i koperkiem, ciepły klasyk na co dzień, który nie ma nic wspólnego z żurkiem.",
        steps: [
          {
            text: "Podgrzej wywar, pokrój w kostkę ziemniaki i włoszczyznę, gotuj do miękkości, podobnie jak przy przygotowaniu wywaru w [technice rosołu](/pl/blog/jak-ugotowac-rosol), tu jednak jako bazę pod zupę z dodatkami.",
            tip: "Nie musisz gotować klarownego wywaru świątecznego, dobry fond w zupełności wystarczy. Przegląd pokrewnych zup znajdziesz w artykule o [polskich zupach](/pl/blog/polskie-zupy).",
          },
          {
            text: "Ogórki kiszone zetrzyj lub drobno pokrój, a trochę zalewy odłóż na później.",
            tip: "Ogórki możesz ukisić sam według [kiszenia w domu](/pl/blog/kiszenie-w-domu) albo kupić gotowe w słoiku ze sklepu polskiego, ogórki z octu zmieniają jednak charakter zupy.",
          },
          {
            text: "Dodaj ogórki i zalewę, gotuj łagodnie 10 do 15 minut, a potem dopraw solą, pieprzem i koperkiem.",
          },
          {
            text: "Zdejmij z ognia, wmieszaj letnią śmietanę i podawaj gorącą ze świeżym koperkiem.",
            tip: "Nie myl tej zupy z [żurkiem](/pl/rezepte/zurek), który opiera się na zakwasie, ani z zimnym [chłodnikiem](/pl/rezepte/chlodnik-litewski).",
          },
        ],
        seoTitle: "Zupa ogórkowa przepis | Ogórkowa | Alemniam",
        seoDescription:
          "Zupa ogórkowa, przepis z ziemniakami i koperkiem. Dwujęzycznie z zakupami w DE i wskazówkami kiszenia.",
      },
    },
    ingredients: [
      {
        id: "og-1",
        name: { de: "Gemüse- oder Fleischbrühe", pl: "Bulion warzywny lub mięsny" },
        amount: 1.5,
        unit: { de: "l", pl: "l" },
        group: "pantry",
        storeHintDe: "Am besten Eigenbrühe oder ein guter Fond, nicht nur Brühwürfel",
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
        storeHintDe: "Aus dem Polenladen, wirklich kiszone Gurken und keine Essiggurken",
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
        storeHintDe: "Einfach aus dem gleichen Glas dosieren",
      },
      {
        id: "og-7",
        name: { de: "Śmietana / Schmand", pl: "Śmietana" },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        storeHintDe: "Schmand mit 20 bis 24 Prozent Fett als Alltagsersatz",
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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kapusniak/d602b625-35e3-4b65-88c1-1202fd7d9507.webp",
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
          "Sauerkrautsuppe mit Kartoffeln und geräucherter Wurst, ein löffelbarer Suppenklassiker und klar kein Bigos.",
        steps: [
          {
            text: "Rauchfleisch oder Kiełbasa anbraten, Zwiebel glasig anschwitzen und mit Brühe aufgießen.",
            tip: "Bei der Wurstwahl hilft [Kiełbasa-Arten](/de/blog/kielbasa-arten), denn geräucherte Wurst trägt die Suppe besser als milde biała kiełbasa.",
          },
          {
            text: "Kartoffeln und Karotte zugeben, Sauerkraut ausdrücken, grob schneiden und ebenfalls in den Topf geben.",
            tip: "Die Qualität der Kapusta entscheidet über den Geschmack der ganzen Suppe, mehr dazu im [Kiszenie-Guide](/de/blog/kiszenie-guide).",
          },
          {
            text: "Mit Lorbeer, Piment und Majoran 40 bis 50 Minuten sanft köcheln lassen und dann abschmecken.",
            tip: "Majoran sparsam und möglichst frisch dosieren, mehr Hintergrund liefert das Lexikon zu [Majeranek](/de/blog/majeranek).",
          },
          {
            text: "Heiß mit Brot servieren, optional mit einem Klecks Schmand.",
            tip: "Das hier ist eine Suppe zum Löffeln, kein Schmorgericht wie [Bigos](/de/rezepte/bigos). Eine verwandte Schwester-Suppe ist [Ogórkowa](/de/rezepte/ogorkowa).",
          },
        ],
        seoTitle: "Kapuśniak Rezept | Sauerkrautsuppe | Alemniam",
        seoDescription:
          "Kapuśniak kochen, polnische Sauerkrautsuppe mit Wurst und Kartoffeln. Bilingual, klar getrennt von Bigos.",
      },
      pl: {
        title: "Kapuśniak",
        slug: "kapusniak",
        excerpt:
          "Zupa z kapusty kiszonej z ziemniakami i wędzoną kiełbasą, klasyczna zupa na łyżkę, zdecydowanie nie bigos.",
        steps: [
          {
            text: "Podsmaż wędzonkę lub kiełbasę, zeszklij cebulę i zalej wywarem.",
            tip: "Przy wyborze kiełbasy pomogą [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy), bo wędzona niesie smak zupy lepiej niż łagodna biała kiełbasa.",
          },
          {
            text: "Dodaj ziemniaki i marchew, kapustę odciśnij, pokrój i również wrzuć do garnka.",
            tip: "Jakość kapusty decyduje o smaku całej zupy, więcej w [kiszeniu w domu](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Gotuj łagodnie 40 do 50 minut z liściem laurowym, zielem angielskim i majerankiem, a potem dopraw.",
            tip: "Majeranek dodawaj oszczędnie i możliwie świeży, więcej opisuje leksykon [majeranku](/pl/blog/majeranek-leksykon).",
          },
          {
            text: "Podawaj gorący z chlebem, opcjonalnie z łyżką śmietany.",
            tip: "To zupa na łyżkę, nie danie duszone jak [bigos](/pl/rezepte/bigos). Siostrzana zupa to [ogórkowa](/pl/rezepte/ogorkowa).",
          },
        ],
        seoTitle: "Kapuśniak przepis | Zupa z kapusty | Alemniam",
        seoDescription:
          "Kapuśniak, zupa z kapusty kiszonej z kiełbasą i ziemniakami. Dwujęzycznie, jasno odróżniony od bigosu.",
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
        storeHintDe: "Aus dem Polenladen, nicht zu süß-industriell",
      },
      {
        id: "ka-3",
        name: { de: "Geräucherte Kiełbasa oder Räucherspeck", pl: "Kiełbasa wędzona lub wędzonka" },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Aus dem Polenladen, siehe auch Kiełbasa-Arten",
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
        storeHintDe: "Aus dem Polenladen, getrocknet und aromatisch",
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
