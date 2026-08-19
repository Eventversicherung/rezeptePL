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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kaszanka/773ab0d3-89e2-41d8-b0e1-dd616cc97f5d.webp",
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
          "Gebratene Kaszanka mit Zwiebel ist ein deftiger polnischer Klassiker aus Blutwurst mit Buchweizen oder Gerste, der in etwa 25 Minuten fertig auf dem Tisch steht.",
        steps: [
          {
            text: "Die Kaszanka aus dem Kühlschrank nehmen und die Hülle prüfen, dann in 2 bis 3 cm dicke Scheiben schneiden, oder im Ganzen anbraten und erst später teilen.",
            tip: "Worauf du beim Einkauf achten solltest, steht im [Polenladen-Guide](/de/blog/polenladen-einkaufen). Welche Wurstsorte wofür geeignet ist, erklärt der [Kiełbasa-Arten-Guide](/de/blog/kielbasa-arten); hier geht es nur ums Braten.",
          },
          {
            text: "Die Zwiebeln in Ringe oder Halbringe schneiden und die Pfanne mit etwas Schmalz oder Öl auf mittlere Hitze bringen.",
            tip: "Schmalz bringt hier mehr Röstaroma als neutrales Öl, weil es höhere Temperaturen verträgt und der Zwiebel zusätzlich Fülle gibt.",
          },
          {
            text: "Die Zwiebeln glasig bis goldbraun braten, dann die Kaszanka-Scheiben dazugeben und von beiden Seiten knusprig anbraten, ohne dabei die Füllung herauszudrücken.",
            tip: "Zu hohe Hitze lässt die Hülle aufreißen und die Füllung austreten, deshalb lieber mittlere Hitze und etwas mehr Zeit einplanen. Majoran erst ganz am Ende sparsam dazugeben, Details dazu stehen im [Majoran-Lexikon](/de/blog/majeranek).",
          },
          {
            text: "Mit Salz und Pfeffer abschmecken und optional Apfelspalten kurz mitbraten, das sorgt für eine milde Säure.",
            tip: "Der Apfel gleicht die Deftigkeit der Wurst gut aus, denn seine Säure schneidet durch das Fett und macht das Gericht insgesamt leichter.",
          },
          {
            text: "Heiß mit Brot, Kartoffeln oder [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana) servieren.",
            tip: "Den Rahmen für den ganzen Tisch beschreibt das [polnische Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
        ],
        seoTitle: "Kaszanka Rezept | Gebraten mit Zwiebel | Alemniam",
        seoDescription:
          "Kaszanka braten mit Zwiebel: bilingualer Guide mit Einkaufstipps aus dem Polenladen und Technik für die Pfanne.",
      },
      pl: {
        title: "Kaszanka",
        slug: "kaszanka",
        excerpt:
          "Smażona kaszanka z cebulą to treściwy polski klasyk z krwi, gryki lub jęczmienia, gotowy w około 25 minut.",
        steps: [
          {
            text: "Wyjmij kaszankę z lodówki i sprawdź osłonkę, potem pokrój w plastry grubości 2 do 3 cm, albo usmaż w całości i podziel dopiero później.",
            tip: "Na co zwrócić uwagę przy zakupie, opisuje [przewodnik po sklepie polskim](/pl/blog/sklep-polski-zakupy). Który rodzaj kiełbasy do czego pasuje, wyjaśnia [przewodnik rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy), tu chodzi tylko o smażenie.",
          },
          {
            text: "Pokrój cebulę w pierścienie lub półpierścienie i rozgrzej patelnię ze smalcem lub olejem na średnim ogniu.",
            tip: "Smalec daje tu więcej smaku pieczonego niż neutralny olej, bo znosi wyższą temperaturę i dodatkowo wzbogaca smak cebuli.",
          },
          {
            text: "Zeszklij cebulę do złotego koloru, dodaj plastry kaszanki i obsmaż z obu stron na chrupko, bez wyciskania farszu.",
            tip: "Zbyt mocny ogień pęka osłonkę i wypuszcza farsz, dlatego lepiej smażyć na średnim ogniu trochę dłużej. Majeranek dodaj oszczędnie dopiero na końcu, szczegóły opisuje [leksykon majeranku](/pl/blog/majeranek-leksykon).",
          },
          {
            text: "Dopraw solą i pieprzem, opcjonalnie krótko podsmaż plasterki jabłka dla łagodnej kwasowości.",
            tip: "Jabłko dobrze równoważy treściwość kaszanki, bo jego kwasowość przecina tłuszcz i robi całe danie lżejszym.",
          },
          {
            text: "Podawaj gorącą z chlebem, ziemniakami lub [kapustą zasmażaną](/pl/rezepte/kapusta-zasmażana).",
            tip: "Ramy całego stołu opisuje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
        ],
        seoTitle: "Kaszanka przepis | Smażona z cebulą | Alemniam",
        seoDescription:
          "Kaszanka smażona z cebulą: dwujęzyczny przepis z zakupami ze sklepu polskiego i techniką smażenia na patelni.",
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
          "Im Polenladen, fest und würzig statt wässrig, Kühlkette am besten gleich prüfen",
        substitute: {
          de: "Eine gute deutsche Buchweizen-Blutwurst funktioniert auch, dann aber ehrlich benennen, denn der Charakter ist meist milder",
          pl: "Dobra niemiecka kaszanka gryczana też się sprawdzi, ale warto uczciwie zaznaczyć, że smak bywa łagodniejszy",
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
