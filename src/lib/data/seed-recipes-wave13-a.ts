import type { Recipe } from "@/types/content";

/**
 * Wave 13 Paket A — Suppen-Rest (+2).
 * - recipe-krupnik — Gersten-/Gemüsesuppe (Gerste + Wurzelgemüse, optional Huhn) ≠ Grochówka/Grzybowa
 * - recipe-szczawiowa — Sauerampfersuppe mit Ei/Sahne ≠ Botwinka/Ogórkowa/Chłodnik
 *
 * Integrator E: merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave13A: Recipe[] = [
  {
    id: "recipe-krupnik",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1636044993194-9d2ec4b0cb89?w=1600&q=80",
    prepMinutes: 20,
    cookMinutes: 55,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-bulion"],
    categoryIds: ["category-suppen"],
    relatedPostIds: [
      "post-polnische-suppen",
      "post-sonntagsessen",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Krupnik",
        slug: "krupnik",
        excerpt:
          "Polnische Gerstensuppe mit Perlgerste und Wurzelgemüse — optional mit Hühnerfleisch. Klar ≠ Grochówka (Erbsen) und ≠ Zupa grzybowa (Pilzfond).",
        steps: [
          {
            text: "Perlgerste (kasza jęczmienna) abspülen. Zwiebel, Karotte, Sellerie und Petersilienwurzel würfeln; optional Hühnerfleisch in Stücke. In Butter oder Öl Zwiebel glasig dünsten, Gerste kurz mitrösten.",
            tip: "Das ist Gerste, keine Erbse: [Grochówka](/de/rezepte/grochowka) bleibt anderer Cook. Überblick: [Polnische Suppen](/de/blog/polnische-suppen).",
          },
          {
            text: "Mit Wasser oder leichter Hühner-/Gemüsebrühe auffüllen; Lorbeer, Pfeffer und restliches Wurzelgemüse zugeben. Ruhig 35–45 Minuten köcheln, bis die Gerste weich und der Topf leicht bindet — nicht zu Erbsenbrei pürieren.",
            tip: "Brühe-Technik [Rosół-Technik](/de/blog/rosol-technik). Einkauf oft [Polenladen](/de/blog/polenladen-einkaufen) für gute Gerste.",
          },
          {
            text: "Optional Hühnerstücke mitgaren oder vorgegartes Fleisch spät zugeben. Mit Salz abschmecken; Säure nur sparsam. Frischen Dill oder Petersilie einrühren. Das ist kein dunkler Trockenpilz-Fond wie [Zupa grzybowa](/de/rezepte/zupa-grzybowa).",
            tip: "Menüplatz: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch). Fokus bleibt Krupnik.",
          },
          {
            text: "Heiß in tiefen Tellern servieren; Brot dazu. Reste halten sich und werden oft am zweiten Tag runder — Gerste zieht weiter Flüssigkeit, ggf. Brühe nachgießen.",
            tip: "Fehlt Gerste: ehrlich ersetzen laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) — Intent bleibt Gerstensuppe, nicht Erbsen.",
          },
        ],
        seoTitle: "Krupnik Rezept | Polnische Gerstensuppe | Alemniam",
        seoDescription:
          "Krupnik — polnische Gerstensuppe mit Wurzelgemüse. Bilingual, Diaspora-Einkauf DE, klar ≠ Grochówka und ≠ Grzybowa.",
      },
      pl: {
        title: "Krupnik",
        slug: "krupnik",
        excerpt:
          "Polska zupa z kaszy jęczmiennej i warzyw korzeniowych — opcjonalnie z kurczakiem. Jasno ≠ grochówka i ≠ zupa grzybowa.",
        steps: [
          {
            text: "Kaszą jęczmienną przepłucz. Cebulę, marchew, seler i pietruszkę pokrój; opcjonalnie kurczaka na kawałki. Na maśle lub oleju zeszklij cebulę, krótko podsmaż kaszę.",
            tip: "To kasza, nie groch: [grochówka](/pl/rezepte/grochowka) to inny cook. Przegląd: [polskie zupy](/pl/blog/polskie-zupy).",
          },
          {
            text: "Zalej wodą lub lekkim bulionem; dodaj liść laurowy, pieprz i resztę warzyw. Gotuj spokojnie 35–45 minut, aż kasza zmięknie i zupa lekko zgęstnieje — nie blenduj na papkę.",
            tip: "Technika bulionu [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Opcjonalnie dogotuj kurczaka lub dodaj ugotowane mięso późno. Dopraw solą; kwasu mało. Wymieszaj koperkiem lub pietruszką. To nie ciemny wywar z suszu jak [zupa grzybowa](/pl/rezepte/zupa-grzybowa).",
            tip: "Miejsce w menu: [obiad niedzielny](/pl/blog/obiad-niedzielny). tu zostaje krupnik.",
          },
          {
            text: "Podawaj gorącą w głębokich talerzach; chleb obok. Resztki często lepsze nazajutrz — kasza ciągnie płyn, dolej bulionu.",
            tip: "Brak kaszy: uczciwa zamiana według [zamienników](/pl/blog/zamienniki-skladnikow) — intent zostaje zupą jęczmienną, nie grochową.",
          },
        ],
        seoTitle: "Krupnik przepis | Zupa jęczmienna | Alemniam",
        seoDescription:
          "Krupnik — zupa z kaszy jęczmiennej i warzyw. Dwujęzycznie, zakupy w DE, jasno ≠ grochówka i ≠ grzybowa.",
      },
    },
    ingredients: [
      {
        id: "kr-1",
        name: {
          de: "Perlgerste (kasza jęczmienna)",
          pl: "Kasza jęczmienna (pęczak)",
        },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Polenladen oder Supermarkt — Getreide/Hülsenfrüchte",
      },
      {
        id: "kr-2",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "kr-3",
        name: { de: "Karotte", pl: "Marchew" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "kr-4",
        name: {
          de: "Sellerie / Petersilienwurzel",
          pl: "Seler / pietruszka",
        },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "kr-5",
        name: {
          de: "Hühnerfleisch (optional)",
          pl: "Kurczak (opcjonalnie)",
        },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "other",
        substitute: {
          de: "Vegetarisch weglassen — ehrlich benennen",
          pl: "Wege bez mięsa — nazwać uczciwie",
        },
      },
      {
        id: "kr-6",
        name: {
          de: "Wasser oder leichte Brühe",
          pl: "Woda lub lekki bulion",
        },
        amount: 1.5,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "kr-7",
        name: {
          de: "Butter oder Öl",
          pl: "Masło lub olej",
        },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "dairy",
      },
      {
        id: "kr-8",
        name: {
          de: "Lorbeer, Salz, Pfeffer, Dill",
          pl: "Liść laurowy, sól, pieprz, koperek",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T11:00:00.000Z",
    updatedAt: "2026-07-21T11:00:00.000Z",
  },
  {
    id: "recipe-szczawiowa",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1626200949840-179d3e52f7fd?w=1600&q=80",
    prepMinutes: 15,
    cookMinutes: 35,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-bulion"],
    categoryIds: ["category-suppen", "category-vegetarisch"],
    relatedPostIds: [
      "post-polnische-suppen",
      "post-ersatzprodukte-de",
      "post-smietana-schmand",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Zupa szczawiowa",
        slug: "szczawiowa",
        excerpt:
          "Grüne polnische Sauerampfersuppe mit Ei und Śmietana — Frühlings-/Sommerteller. Klar ≠ Botwinka (Bete), ≠ Ogórkowa und ≠ kalter Chłodnik.",
        steps: [
          {
            text: "Leichte Brühe oder Wasser mit Zwiebel und Kartoffelwürfeln aufsetzen; weich kochen. Frischen Sauerampfer (szczaw) waschen, grob schneiden — Stiele zäh: weglassen oder fein.",
            tip: "Sauerampfer DE: saisonal Markt/Polenladen; fehlt er: ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Überblick: [Polnische Suppen](/de/blog/polnische-suppen).",
          },
          {
            text: "Sauerampfer kurz in Butter oder Brühe zusammenfallen lassen, dann in den Topf. Nur wenige Minuten mitköcheln — zu lang wird die Farbe oliv und bitter. Mit Salz und Pfeffer abschmecken.",
            tip: "Das ist Grün und Sauerampfer-Säure, nicht junge Rote Bete: [Botwinka](/de/rezepte/botwinka) bleibt anderes Gericht. Auch nicht [Ogórkowa](/de/rezepte/ogorkowa).",
          },
          {
            text: "Vom Herd nehmen. Śmietana temperieren und einrühren — nicht kochend. Hartgekochte Eier halbieren oder würfeln und in die Teller legen; Dill darüber.",
            tip: "Śmietana temperieren wie im [Śmietana/Schmand](/de/blog/smietana-schmand)-Guide. Kalt und rosa wäre [Chłodnik](/de/rezepte/chlodnik-litewski) — anderer Intent.",
          },
          {
            text: "Heiß servieren, solange die Suppe noch kräftig grün ist. Brot dazu. Reste kühlen; Farbe dunkelt nach — am besten frisch am gleichen Tag.",
            tip: "Überblick: [Polnische Suppen](/de/blog/polnische-suppen). hier geht es nur um Szczawiowa.",
          },
        ],
        seoTitle: "Szczawiowa Rezept | Sauerampfersuppe polnisch | Alemniam",
        seoDescription:
          "Zupa szczawiowa — grüne Sauerampfersuppe mit Ei und Śmietana. Bilingual, klar ≠ Botwinka/Ogórkowa/Chłodnik.",
      },
      pl: {
        title: "Zupa szczawiowa",
        slug: "szczawiowa",
        excerpt:
          "Zielona polska zupa ze szczawiu z jajkiem i śmietaną — wiosna/lato. Jasno ≠ botwinka, ≠ ogórkowa i ≠ zimny chłodnik.",
        steps: [
          {
            text: "Zagotuj lekki bulion lub wodę z cebulą i kostką ziemniaka; dogotuj. Szczaw umyj, pokrój grubo — twarde ogonki odrzuć lub drobno.",
            tip: "Szczaw w DE sezonowo: targ/sklep polski; brak: uczciwie według [zamienników](/pl/blog/zamienniki-skladnikow). Przegląd: [polskie zupy](/pl/blog/polskie-zupy).",
          },
          {
            text: "Szczaw krótko zwiędź na maśle lub w bulionie, potem do garnka. Gotuj tylko kilka minut — za długo kolor oliwkowy i gorzki. Dopraw solą i pieprzem.",
            tip: "To zieleń i kwas szczawiu, nie młode buraki: [botwinka](/pl/rezepte/botwinka) to inny fokus. Też nie [ogórkowa](/pl/rezepte/ogorkowa).",
          },
          {
            text: "Zdejmij z ognia. Zahartuj śmietanę i wmieszaj — nie do wrzątku. Jajka na twardo przekrój lub pokrój do talerzy; koperek.",
            tip: "Śmietanę jak w [śmietana/Schmand](/pl/blog/smietana-czy-schmand). Zimno i różowo to [chłodnik](/pl/rezepte/chlodnik-litewski) — inny intent.",
          },
          {
            text: "Podawaj gorącą, póki zupa jest wyraźnie zielona. Chleb obok. Resztki chłodź; kolor ciemnieje — najlepiej tego samego dnia.",
            tip: "Przegląd: [polskie zupy](/pl/blog/polskie-zupy). tu chodzi tylko o szczawiowa.",
          },
        ],
        seoTitle: "Zupa szczawiowa przepis | Szczaw z jajkiem | Alemniam",
        seoDescription:
          "Zupa szczawiowa — zielona ze szczawiu, jajkiem i śmietaną. Dwujęzycznie, jasno ≠ botwinka/ogórkowa/chłodnik.",
      },
    },
    ingredients: [
      {
        id: "sz-1",
        name: {
          de: "Frischer Sauerampfer (szczaw)",
          pl: "Świeży szczaw",
        },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "produce",
        storeHintDe: "Saison Markt / Polenladen — gefroren ehrlich benennen",
        substitute: {
          de: "Gefrorener Szczaw — Intent benennen",
          pl: "Mrożony szczaw — nazwać intent",
        },
      },
      {
        id: "sz-2",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "sz-3",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "sz-4",
        name: {
          de: "Wasser oder leichte Brühe",
          pl: "Woda lub lekki bulion",
        },
        amount: 1.2,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "sz-5",
        name: {
          de: "Butter",
          pl: "Masło",
        },
        amount: 1,
        unit: { de: "EL", pl: "łyżka" },
        group: "dairy",
      },
      {
        id: "sz-6",
        name: {
          de: "Śmietana / Schmand",
          pl: "Śmietana",
        },
        amount: 100,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
        storeHintDe: "Temperieren — siehe Śmietana-Guide",
      },
      {
        id: "sz-7",
        name: {
          de: "Eier (hartgekocht)",
          pl: "Jajka (na twardo)",
        },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "sz-8",
        name: {
          de: "Salz, Pfeffer, Dill",
          pl: "Sól, pieprz, koperek",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T11:00:00.000Z",
    updatedAt: "2026-07-21T11:00:00.000Z",
  },
];
