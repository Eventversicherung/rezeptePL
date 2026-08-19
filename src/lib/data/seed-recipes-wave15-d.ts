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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-koperkowa/7963dc55-f93f-4402-a29d-3ab00ec4adea.webp",
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
          "Helle polnische Dillsuppe mit Kartoffeln, Śmietana und hartem Ei, in der der Dill führt und nicht Sauerampfer oder Kiszone-Gurke.",
        steps: [
          {
            text: "Kartoffeln würfeln, Zwiebel fein hacken. In Butter oder Öl die Zwiebel glasig dünsten, mit leichter Gemüse- oder Hühnerbrühe auffüllen, die Kartoffeln zugeben und in etwa 15 bis 20 Minuten weich kochen.",
            tip: "Das ist eine Suppe mit Dill-Fokus, keine klare Festtagsbrühe wie der [Rosół](/de/rezepte/rosol). Einen Überblick gibt der Beitrag zu [Polnischen Suppen](/de/blog/polnische-suppen).",
          },
          {
            text: "Einen Teil der Kartoffeln leicht zerdrücken oder kurz pürieren, damit der Topf leicht bindet, aber noch stückig bleibt. Frischen Dill grob hacken, die Stiele dabei fein schneiden oder weglassen.",
            tip: "Das ist nicht die Sauerampfer-Linie, die [Szczawiowa](/de/rezepte/szczawiowa) bleibt ein eigenes Gericht. Dill und Śmietana findest du oft im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Den Topf vom Herd nehmen oder die Hitze stark reduzieren. Die Śmietana temperieren, indem du sie mit etwas heißer Suppe verrührst, dann einrühren, ohne die Suppe erneut aufkochen zu lassen. Mit Salz und Pfeffer abschmecken und den größten Teil des Dills unterheben.",
            tip: "Zur Śmietana-Technik mehr im [Śmietana- und Schmand-Beitrag](/de/blog/smietana-schmand). Kiszone-Gurke gehört dagegen in die [Ogórkowa](/de/rezepte/ogorkowa).",
          },
          {
            text: "Hartgekochte Eier vierteln. Die Suppe heiß in tiefen Tellern anrichten, Ei und restlichen Dill darauf verteilen. Optional Butterkrümel oder etwas Brot dazu servieren.",
            tip: "Zum Menü passt der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), der Kulturrahmen bleibt dort, hier geht es nur um das Rezept.",
          },
        ],
        seoTitle: "Zupa koperkowa Rezept | Dillsuppe polnisch | Alemniam",
        seoDescription:
          "Zupa koperkowa: helle Dillsuppe mit Kartoffeln, Śmietana und Ei, anders als Szczawiowa oder Ogórkowa.",
      },
      pl: {
        title: "Zupa koperkowa",
        slug: "koperkowa",
        excerpt:
          "Jasna polska zupa koperkowa z ziemniakami, śmietaną i jajkiem na twardo, w której prowadzi koperek, nie szczaw i nie ogórek kiszony.",
        steps: [
          {
            text: "Ziemniaki pokrój w kostkę, cebulę drobno posiekaj. Na maśle lub oleju zeszklij cebulę, zalej lekkim bulionem warzywnym lub drobiowym, dodaj ziemniaki i gotuj do miękkości, około 15 do 20 minut.",
            tip: "To zupa z fokusem na koperek, nie klarowny wywar jak [rosół](/pl/rezepte/rosol). Przegląd znajdziesz w [polskich zupach](/pl/blog/polskie-zupy).",
          },
          {
            text: "Część ziemniaków lekko rozgnieć lub krótko zblenduj, żeby zupa lekko zgęstniała, ale nadal miała kawałki. Świeży koperek grubo posiekaj, łodygi drobno pokrój albo odłóż.",
            tip: "To nie linia szczawiu, [szczawiowa](/pl/rezepte/szczawiowa) to inny fokus. Koperek i śmietanę kupisz często w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Zdejmij zupę z ognia lub mocno zmniejsz płomień. Zahartuj śmietanę, mieszając ją z odrobiną gorącej zupy, potem wmieszaj całość bez ponownego zagotowania. Dopraw solą i pieprzem, a większość koperku wmieszaj.",
            tip: "O technice śmietany więcej w [przewodniku śmietana czy Schmand](/pl/blog/smietana-czy-schmand). Ogórek kiszony należy do [ogórkowej](/pl/rezepte/ogorkowa).",
          },
          {
            text: "Jajka na twardo pokrój na ćwiartki. Podawaj zupę gorącą w głębokich talerzach, z jajkiem i resztą koperku na wierzchu. Opcjonalnie dodaj bułkę lub chleb.",
            tip: "Do menu pasuje [obiad niedzielny](/pl/blog/obiad-niedzielny), przewodnik kulturowy zostaje tam, tu chodzi tylko o przepis.",
          },
        ],
        seoTitle: "Zupa koperkowa przepis | Dillsuppe | Alemniam",
        seoDescription:
          "Zupa koperkowa: jasna zupa z ziemniakami, śmietaną i jajkiem, inna niż szczawiowa czy ogórkowa.",
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
        storeHintDe: "Supermarkt oder Polenladen, frisch mit feinen Wedeln",
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
        storeHintDe: "Siehe Śmietana- und Schmand-Guide",
        substitute: {
          de: "Temperierte Crème fraîche, ehrlich benannt",
          pl: "Zahartowana crème fraîche, nazwana uczciwie",
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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kisiel/4907c5d0-2f4e-49d0-b95f-1105eed24779.webp",
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
          "Himbeer-Kisiel: eine mit Speisestärke gebundene, halbtransparente Fruchtcreme zum Löffeln, ganz anders als Kompot z suszu oder Kutia.",
        steps: [
          {
            text: "Himbeeren, frisch oder aufgetaut, mit 600 ml Wasser und Zucker aufkochen und 5 Minuten köcheln lassen, dann durch ein Sieb streichen, Kerne dabei optional entfernen, sodass ein klarer Fruchtsaft übrig bleibt.",
            tip: "Das ist eine mit Stärke gebundene Fruchtcreme, kein Trockenobstgetränk wie der [Kompot z suszu](/de/rezepte/kompot-z-suszu). Zum Anlass mehr im [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
          },
          {
            text: "Speisestärke, Kartoffel- oder Maisstärke, mit 100 ml kaltem Wasser glatt rühren. Den heißen Fruchtsaft wieder leicht köcheln lassen, die Stärkemilch unter Rühren einlaufen lassen, bis der Kisiel innerhalb von 1 bis 3 Minuten dicklich und glänzend bindet.",
            tip: "Stärke und Beeren findest du oft im [Polenladen](/de/blog/polenladen-einkaufen), Alternativen beschreibt der Beitrag zu [Ersatzprodukten DE](/de/blog/ersatzprodukte-de). Nicht zu lange kochen, sonst wird der Kisiel gummiartig.",
          },
          {
            text: "Vom Herd nehmen und abschmecken, Säure mit etwas Zitrone, Süße mit Zucker. Heiß in Gläser oder Schalen füllen, um eine Haut zu vermeiden, entweder Folie direkt auf die Oberfläche legen oder beim Abkühlen leicht umrühren.",
            tip: "Das ist kein Weizen-Mohn-Dessert, [Kutia](/de/rezepte/kutia) bleibt ein eigenes Gericht. Der Speiseplan bleibt bei Wigilia, hier geht es nur um das Rezept.",
          },
          {
            text: "Warm, lauwarm oder kalt servieren. Optional frische Beeren oder einen Löffel Śmietana dazugeben. Reste abgedeckt im Kühlschrank 1 bis 2 Tage aufbewahren.",
            tip: "Wer Beeren gegen Johannisbeere oder Erdbeere tauscht, sollte die andere Fruchtlinie im Titel ehrlich benennen.",
          },
        ],
        seoTitle: "Kisiel Rezept | Fruchtkisiel polnisch | Alemniam",
        seoDescription:
          "Kisiel owocowy: Himbeer-Fruchtkisiel mit Speisestärke, anders als Kompot z suszu oder Kutia.",
      },
      pl: {
        title: "Kisiel owocowy",
        slug: "kisiel",
        excerpt:
          "Kisiel malinowy: owocowa masa zagęszczona skrobią, półprzezroczysta i do łyżki, zupełnie inne danie niż kompot z suszu czy kutia.",
        steps: [
          {
            text: "Maliny, świeże lub rozmrożone, zagotuj z 600 ml wody i cukrem, gotuj 5 minut, potem przecedź przez sito, pestki opcjonalnie usuń, tak żeby został klarowny sok.",
            tip: "To owocowa masa ze skrobią, nie napój z suszu jak [kompot z suszu](/pl/rezepte/kompot-z-suszu). Więcej o okazji w [menu wigilijnym](/pl/blog/menu-wigilijne).",
          },
          {
            text: "Skrobię ziemniaczaną lub kukurydzianą rozetrzyj ze 100 ml zimnej wody. Sok ponownie doprowadź do lekkiego wrzenia, wlej zawiesinę skrobi, mieszając, aż kisiel zgęstnieje i nabierze połysku, zwykle w 1 do 3 minut.",
            tip: "Skrobię i owoce znajdziesz często w [sklepie polskim](/pl/blog/sklep-polski-zakupy), zamienniki opisują [zamienniki składników](/pl/blog/zamienniki-skladnikow). Nie gotuj za długo, bo kisiel zrobi się gumowaty.",
          },
          {
            text: "Zdejmij z ognia i dopraw, kwas cytryną, słodycz cukrem. Przelej gorący do szklanek lub miseczek, żeby uniknąć kożucha, połóż folię na powierzchni albo lekko mieszaj podczas studzenia.",
            tip: "To nie deser zbożowy, [kutia](/pl/rezepte/kutia) zostaje osobnym daniem. Plan stołu opisuje menu wigilijne, tu chodzi tylko o przepis.",
          },
          {
            text: "Podawaj ciepły, letni lub zimny. Opcjonalnie dodaj świeże owoce lub łyżkę śmietany. Resztki trzymaj przykryte w lodówce 1 do 2 dni.",
            tip: "Kto zamieni maliny na porzeczkę lub truskawkę, powinien uczciwie nazwać w tytule inną linię owocową.",
          },
        ],
        seoTitle: "Kisiel przepis | Kisiel owocowy | Alemniam",
        seoDescription:
          "Kisiel owocowy: malinowy kisiel ze skrobią, inny niż kompot z suszu i kutia.",
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
        storeHintDe: "Supermarkt TK ganzjährig, frisch saisonal",
        substitute: {
          de: "Johannisbeere oder Erdbeere, ehrlich als andere Fruchtlinie benannt",
          pl: "Porzeczka lub truskawka, uczciwie nazwana jako inna linia owocowa",
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
        storeHintDe: "Polenladen oder Backregal, Kartoffelstärke klassisch",
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
