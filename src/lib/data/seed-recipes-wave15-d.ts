import type { Recipe } from "@/types/content";

/**
 * Wave 15 Paket D — Suppe + Kisiel (2 Rezepte).
 * - recipe-koperkowa — Zupa koperkowa (Dillsuppe: Kartoffel/Ei/Śmietana)
 * - recipe-kisiel — Kisiel owocowy (Himbeer-/Beeren-Linie)
 *
 * Ownership: Koperkowa ≠ Rosół ≠ Szczawiowa ≠ Botwinka ≠ Ogórkowa.
 * Kisiel ≠ Kompot z suszu ≠ Kutia. Wigilia/Suppen-Overview nur descriptive.
 * Integrator (E): merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave15D: Recipe[] = [
  {
    id: "recipe-koperkowa",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1610725663727-08695a1ac3ff?w=1600&q=80",
    prepMinutes: 15,
    cookMinutes: 35,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-bulion"],
    categoryIds: ["category-suppen", "category-vegetarisch"],
    relatedPostIds: [
      "post-polnische-suppen",
      "post-sonntagsessen",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Zupa koperkowa",
        slug: "koperkowa",
        excerpt:
          "Helle polnische Dillsuppe mit Kartoffeln, Śmietana und hartem Ei — Dill führt, nicht Sauerampfer und nicht Kiszone-Gurke.",
        steps: [
          {
            text: "Kartoffeln würfeln, Zwiebel fein hacken. In Butter oder Öl Zwiebel glasig dünsten, mit leichter Gemüse- oder Hühnerbrühe auffüllen, Kartoffeln zugeben und weich kochen (ca. 15–20 Minuten).",
            tip: "Das ist Dill-Primary — nicht klare Festtagsbrühe wie [Rosół](/de/rezepte/rosol). Überblick: [Polnische Suppen](/de/blog/polnische-suppen).",
          },
          {
            text: "Einen Teil der Kartoffeln leicht zerdrücken oder kurz pürieren, damit der Topf leicht bindet — noch stückig lassen. Frischen Dill grob hacken (Stiele fein oder weglassen).",
            tip: "Nicht Sauerampfer-Linie: [Szczawiowa](/de/rezepte/szczawiowa) bleibt anderer Primary. Einkauf Dill/Śmietana: [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Topf vom Herd nehmen oder Hitze stark reduzieren. Śmietana temperieren (mit etwas heißer Suppe verrühren) und einrühren — nicht aufkochen lassen. Mit Salz und Pfeffer abschmecken; den größten Teil des Dills unterheben.",
            tip: "Śmietana-Technik descriptiv: [Śmietana/Schmand](/de/blog/smietana-schmand). Keine Kiszone-Gurke wie [Ogórkowa](/de/rezepte/ogorkowa).",
          },
          {
            text: "Hartgekochte Eier vierteln. Suppe heiß in tiefen Tellern anrichten, Ei und restlichen Dill darauf. Optional Butterkrümel oder Brot dazu.",
            tip: "Menüplatz descriptiv: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch) — Kultur-Owner bleibt dort; hier nur der Cook.",
          },
        ],
        seoTitle: "Zupa koperkowa Rezept | Dillsuppe polnisch | Alemniam",
        seoDescription:
          "Zupa koperkowa — helle Dillsuppe mit Kartoffeln, Śmietana und Ei. Bilingual, klar ≠ Szczawiowa und ≠ Ogórkowa.",
      },
      pl: {
        title: "Zupa koperkowa",
        slug: "koperkowa",
        excerpt:
          "Jasna polska zupa koperkowa z ziemniakami, śmietaną i jajkiem na twardo — prowadzi koperek, nie szczaw i nie ogórek kiszony.",
        steps: [
          {
            text: "Ziemniaki pokrój w kostkę, cebulę drobno. Na maśle lub oleju zeszklij cebulę, zalej lekkim bulionem warzywnym lub drobiowym, dodaj ziemniaki i gotuj do miękkości (ok. 15–20 minut).",
            tip: "To primary koperku — nie klarowny wywar jak [rosół](/pl/rezepte/rosol). Przegląd: [polskie zupy](/pl/blog/polskie-zupy).",
          },
          {
            text: "Część ziemniaków lekko rozgnieć lub krótko zblenduj, by zupa lekko zgęstniała — zostaw kawałki. Świeży koperek grubo posiekaj (łodygi drobno lub odłóż).",
            tip: "Nie linia szczawiu: [szczawiowa](/pl/rezepte/szczawiowa) to inny primary. Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Zdejmij z ognia lub mocno zmniejsz. Zahartuj śmietanę (z odrobiną gorącej zupy) i wmieszaj — nie gotuj. Dopraw solą i pieprzem; większość koperku wmieszaj.",
            tip: "Technika śmietany opisowo: [śmietana/Schmand](/pl/blog/smietana-czy-schmand). Bez ogórka kiszonego jak [ogórkowa](/pl/rezepte/ogorkowa).",
          },
          {
            text: "Jajka na twardo pokrój na ćwiartki. Podawaj gorącą w głębokich talerzach z jajkiem i resztą koperku. Opcjonalnie bułka lub chleb.",
            tip: "Miejsce w menu opisowo: [obiad niedzielny](/pl/blog/obiad-niedzielny) — owner kultury zostaje tam; tu tylko cook.",
          },
        ],
        seoTitle: "Zupa koperkowa przepis | Dillsuppe | Alemniam",
        seoDescription:
          "Zupa koperkowa — jasna z ziemniakami, śmietaną i jajkiem. Dwujęzycznie, jasno ≠ szczawiowa i ≠ ogórkowa.",
      },
    },
    ingredients: [
      {
        id: "kop-1",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "kop-2",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "kop-3",
        name: {
          de: "Leichte Gemüse- oder Hühnerbrühe",
          pl: "Lekki bulion warzywny lub drobiowy",
        },
        amount: 1.2,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "kop-4",
        name: {
          de: "Frischer Dill (koperek)",
          pl: "Świeży koperek",
        },
        amount: 1,
        unit: { de: "großes Bund", pl: "duży pęczek" },
        group: "produce",
        storeHintDe: "Supermarkt oder Polenladen — frisch, feine Wedel",
      },
      {
        id: "kop-5",
        name: {
          de: "Śmietana / Schmand (mind. 18 %)",
          pl: "Śmietana (min. 18 %)",
        },
        amount: 150,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
        storeHintDe: "Siehe Śmietana/Schmand-Guide",
        substitute: {
          de: "Crème fraîche temperiert — ehrlich benennen",
          pl: "Crème fraîche zahartowana — nazwać uczciwie",
        },
      },
      {
        id: "kop-6",
        name: {
          de: "Butter oder Öl",
          pl: "Masło lub olej",
        },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "dairy",
      },
      {
        id: "kop-7",
        name: {
          de: "Eier (hart gekocht)",
          pl: "Jajka (na twardo)",
        },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "kop-8",
        name: {
          de: "Salz und Pfeffer",
          pl: "Sól i pieprz",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T13:00:00.000Z",
    updatedAt: "2026-07-21T13:00:00.000Z",
  },
  {
    id: "recipe-kisiel",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1552503983-37e5802c2cf3?w=1600&q=80",
    prepMinutes: 10,
    cookMinutes: 15,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-suess", "category-vegetarisch", "category-schnell"],
    relatedPostIds: [
      "post-wigilia",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Kisiel owocowy",
        slug: "kisiel",
        excerpt:
          "Himbeer-Kisiel: mit Speisestärke gebundene Fruchtcreme — semi-transparent, löffelbar. Klar ≠ Kompot z suszu und ≠ Kutia.",
        steps: [
          {
            text: "Himbeeren (frisch oder aufgetaut) mit 600 ml Wasser und Zucker aufkochen; 5 Minuten köcheln, dann durch ein Sieb streichen (Kerne optional entfernen) — klarer Fruchtsaft bleibt.",
            tip: "Das ist gestärkte Fruchtcreme — kein Trockenobstgetränk wie [Kompot z suszu](/de/rezepte/kompot-z-suszu). Anlass descriptiv: [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
          },
          {
            text: "Speisestärke (Kartoffel- oder Maisstärke) mit 100 ml kaltem Wasser glatt rühren. Den heißen Fruchtsaft wieder zum leichten Köcheln bringen; Stärkemilch unter Rühren einlaufen lassen, bis der Kisiel dicklich-glänzend bindet (1–3 Minuten).",
            tip: "Stärke und Beeren oft im [Polenladen](/de/blog/polenladen-einkaufen); Alternativen: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Nicht zu lange kochen — sonst wird er gummiartig.",
          },
          {
            text: "Vom Herd nehmen, abschmecken (Säure mit etwas Zitrone, Süße mit Zucker). Heiß in Gläser oder Schalen füllen; Haut vermeiden: Folie direkt auf die Oberfläche oder leicht rühren beim Abkühlen.",
            tip: "Kein Weizen-Mohn-Dessert: [Kutia](/de/rezepte/kutia) bleibt anderer Primary. Speiseplan-Owner bleibt Wigilia — hier nur der Cook.",
          },
          {
            text: "Warm, lauwarm oder kalt servieren. Optional frische Beeren oder ein Löffel Śmietana. Reste abgedeckt im Kühlschrank 1–2 Tage.",
          },
        ],
        seoTitle: "Kisiel Rezept | Fruchtkisiel polnisch | Alemniam",
        seoDescription:
          "Kisiel owocowy — Himbeer-Fruchtkisiel mit Speisestärke. Bilingual, klar ≠ Kompot z suszu und ≠ Kutia.",
      },
      pl: {
        title: "Kisiel owocowy",
        slug: "kisiel",
        excerpt:
          "Kisiel malinowy: owocowa masa zagęszczona skrobią — półprzezroczysta, do łyżki. Jasno ≠ kompot z suszu i ≠ kutia.",
        steps: [
          {
            text: "Maliny (świeże lub rozmrożone) zagotuj z 600 ml wody i cukrem; gotuj 5 minut, przecedź przez sito (pestki opcjonalnie) — zostaje klarowny sok.",
            tip: "To owocowa masa ze skrobią — nie napój z suszu jak [kompot z suszu](/pl/rezepte/kompot-z-suszu). Okazja opisowo: [menu wigilijne](/pl/blog/menu-wigilijne).",
          },
          {
            text: "Skrobię ziemniaczaną lub kukurydzianą rozetrzyj ze 100 ml zimnej wody. Sok ponownie doprowadź do lekkiego wrzenia; wlej zawiesinę skrobi, mieszając, aż kisiel zgęstnieje i nabierze połysku (1–3 minuty).",
            tip: "Skrobia i owoce często w [sklepie polskim](/pl/blog/sklep-polski-zakupy); zamienniki: [zamienniki składników](/pl/blog/zamienniki-skladnikow). Nie gotuj za długo — zrobi się gumowaty.",
          },
          {
            text: "Zdejmij z ognia, dopraw (kwas cytryną, słodycz cukrem). Gorący przelej do szklanek lub miseczek; unikaj kożucha: folia na powierzchni lub lekkie mieszanie przy studzeniu.",
            tip: "To nie deser zbożowy: [kutia](/pl/rezepte/kutia) zostaje innym primary. Owner planu: menu wigilijne — tu tylko cook.",
          },
          {
            text: "Podawaj ciepły, letni lub zimny. Opcjonalnie świeże owoce lub łyżka śmietany. Resztki przykryte w lodówce 1–2 dni.",
          },
        ],
        seoTitle: "Kisiel przepis | Kisiel owocowy | Alemniam",
        seoDescription:
          "Kisiel owocowy — malinowy ze skrobią. Dwujęzycznie, jasno ≠ kompot z suszu i ≠ kutia.",
      },
    },
    ingredients: [
      {
        id: "kis-1",
        name: {
          de: "Himbeeren (frisch oder TK)",
          pl: "Maliny (świeże lub mrożone)",
        },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
        storeHintDe: "Supermarkt TK ganzjährig; frisch saisonal",
        substitute: {
          de: "Johannisbeere oder Erdbeere — ehrlich als andere Fruchtlinie",
          pl: "Porzeczka lub truskawka — uczciwie jako inna linia owocowa",
        },
      },
      {
        id: "kis-2",
        name: { de: "Wasser", pl: "Woda" },
        amount: 700,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
      {
        id: "kis-3",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "kis-4",
        name: {
          de: "Speisestärke (Kartoffel- oder Mais)",
          pl: "Skrobia (ziemniaczana lub kukurydziana)",
        },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen oder Backregal — Kartoffelstärke klassisch",
      },
      {
        id: "kis-5",
        name: {
          de: "Zitronensaft (optional)",
          pl: "Sok z cytryny (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "produce",
      },
    ],
    createdAt: "2026-07-21T13:00:00.000Z",
    updatedAt: "2026-07-21T13:00:00.000Z",
  },
];
