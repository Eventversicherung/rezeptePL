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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-salatka-jarzynowa/90883e3d-0564-41f8-b756-433ec0078aa3.webp",
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
          "Sałatka jarzynowa ist der cremige polnische Gemüsesalat mit Mayonnaise, der zu Ostern und an vielen Sonntagen neben Schinken und Wurst auf dem Tisch steht.",
        steps: [
          {
            text: "Kartoffeln, Karotten und Sellerie in Salzwasser weich garen, dabei die Erbsen entweder kurz mitkochen oder aus dem Glas abtropfen lassen. Alles vollständig abkühlen lassen.",
            tip: "Das Gemüse lässt sich gut am Vortag kochen, denn kalt vermischt sich alles gleichmäßiger mit der Mayonnaise. Der passende Menürahmen steht im [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan).",
          },
          {
            text: "Das Gemüse und den Apfel in kleine, gleichmäßige Würfel schneiden, die sauren Gurken fein würfeln und die hartgekochten Eier klein hacken.",
            tip: "Gleichmäßige Würfelgröße entscheidet mehr über das Ergebnis als exotische Zutaten. Für den Alltagseinkauf lohnt sich ein Blick in den [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Alles mit Mayonnaise und etwas Gurkenlake oder Senf vermengen und mit Salz und Pfeffer abschmecken. Mindestens eine Stunde im Kühlschrank durchziehen lassen.",
            tip: "Erst nach dem Kühlen noch einmal abschmecken, denn die Aromen von Gurke und Senf ziehen mit der Zeit stärker in den Salat ein.",
          },
          {
            text: "Kalt servieren, klassisch neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy) oder als Teil der Osterplatte. Nicht mit [Mizeria](/de/rezepte/mizeria) verwechseln, denn das ist ein einfacher Gurkensalat mit Śmietana.",
            tip: "Der Menürahmen für den ganzen Tisch steht im [polnischen Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
        ],
        seoTitle: "Sałatka jarzynowa Rezept | Polnischer Gemüsesalat | Alemniam",
        seoDescription:
          "Sałatka jarzynowa: polnischer Gemüsesalat mit Mayo für Ostern und Sonntag, bilingual mit Einkaufstipps für Deutschland, klar getrennt von Mizeria.",
      },
      pl: {
        title: "Sałatka jarzynowa",
        slug: "salatka-jarzynowa",
        excerpt:
          "Sałatka jarzynowa to kremowa polska sałatka z majonezem, która na Wielkanoc i wiele niedziel stoi na stole obok szynki i wędlin.",
        steps: [
          {
            text: "Ugotuj ziemniaki, marchew i seler w osolonej wodzie, a groszek krótko dogotuj albo odsącz ze słoika. Całość ostudź do końca.",
            tip: "Warzywa spokojnie ugotujesz dzień wcześniej, bo zimne łączą się z majonezem równiej. Ramy menu opisuje [menu wielkanocne](/pl/blog/menu-wielkanocne).",
          },
          {
            text: "Pokrój warzywa i jabłko w drobną, równą kostkę, ogórki kiszone drobniej, a jaja na twardo posiekaj.",
            tip: "Równa wielkość kostki ważniejsza niż egzotyczne dodatki. Na co dzień po składniki warto zajrzeć do [sklepu polskiego](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Wymieszaj wszystko z majonezem i odrobiną zalewy lub musztardy, dopraw solą i pieprzem. Schłodź co najmniej godzinę.",
            tip: "Dopraw sałatkę jeszcze raz po schłodzeniu, bo smak ogórka i musztardy z czasem mocniej się wyczuwa.",
          },
          {
            text: "Podawaj na zimno, klasycznie obok [kotleta schabowego](/pl/rezepte/kotlet-schabowy) lub jako część wielkanocnego stołu. Nie myl jej z [mizerią](/pl/rezepte/mizeria), bo to prosta sałatka z ogórka ze śmietaną.",
            tip: "Ramy całego stołu opisuje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
        ],
        seoTitle: "Sałatka jarzynowa przepis | Sałatka z majonezem | Alemniam",
        seoDescription:
          "Sałatka jarzynowa: majonezowa sałatka warzywna na Wielkanoc i niedzielę, dwujęzycznie i wyraźnie inna niż mizeria.",
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
        storeHintDe: "Suppengrün-Sellerie oder Knolle, fest und nicht matschig",
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
        storeHintDe: "Im Polenladen, nicht die industriell süß-saure Variante",
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
        storeHintDe: "Eine gute Mayonnaise nehmen, polnische Marken im Polenladen schmecken oft runder",
        substitute: {
          de: "Mayonnaise mit etwas Joghurt strecken ergibt eine leichtere Hausvariante",
          pl: "Majonez wymieszany z odrobiną jogurtu daje lżejszy wariant domowy",
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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-botwinka/89452eee-624b-402a-8b6d-30048a20c238.webp",
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
          "Botwinka ist die warme Frühlingssuppe aus jungen Rote-Bete-Knollen mitsamt ihren Blättern und Stielen, die im Mai und Juni frisch auf den Markt kommen.",
        steps: [
          {
            text: "Die junge Rote Bete putzen: die Knollen schälen und würfeln, Blätter und Stiele waschen, die Stiele klein schneiden und die Blätter separat bereitlegen.",
            tip: "Gemeint ist echte Botwina, also junge Bund-Rote-Bete mit frischem Grün, keine ausgewachsene Knolle. Wann sie Saison hat und wo du sie findest, steht im [Suppen-Überblick](/de/blog/polnische-suppen).",
          },
          {
            text: "In leichter Brühe die Knollen und Stiele weich garen und die Kartoffeln dazugeben. Die Blätter erst gegen Ende einlegen, damit sie ihre Farbe behalten.",
            tip: "Anders als beim klaren Festtagssud für [Barszcz](/de/rezepte/barszcz-czerwony) wird hier nichts durchgeseiht, denn Gemüse und Grün bleiben Teil der Suppe.",
          },
          {
            text: "Mit Salz, Pfeffer und etwas Säure wie Zitronensaft oder Gurkenlake abschmecken, dann vom Herd nehmen und temperierte Śmietana einrühren.",
            tip: "Zur Wahl des Milchprodukts hilft der Beitrag zu [Śmietana und Schmand](/de/blog/smietana-schmand). Die Śmietana nie in die kochende Suppe geben, sonst flockt sie leicht aus.",
          },
          {
            text: "Heiß mit Dill und optional einem halbierten Ei servieren.",
            tip: "Botwinka wird warm serviert, anders als der kalte [Chłodnik](/de/rezepte/chlodnik-litewski) im Hochsommer und anders als die kräftig saure [Ogórkowa](/de/rezepte/ogorkowa) mit Gurke.",
          },
        ],
        seoTitle: "Botwinka Rezept | Junge Rote-Bete-Suppe | Alemniam",
        seoDescription:
          "Botwinka kochen: Suppe aus junger Rote Bete mit Blättern, warm und saisonal, klar getrennt von Barszcz und Chłodnik.",
      },
      pl: {
        title: "Botwinka",
        slug: "botwinka",
        excerpt:
          "Botwinka to ciepła, wiosenna zupa z młodych buraczków razem z liśćmi i ogonkami, które pojawiają się na straganach w maju i czerwcu.",
        steps: [
          {
            text: "Oczyść botwinę: bulwy obierz i pokrój, liście i ogonki umyj, ogonki potnij drobno, a liście odłóż osobno.",
            tip: "Chodzi o prawdziwą botwinę, czyli młode buraczki w pęczku ze świeżą nacią, a nie o dojrzałą bulwę. Sezon i miejsce zakupu opisuje [przegląd zup](/pl/blog/polskie-zupy).",
          },
          {
            text: "W lekkim wywarze ugotuj bulwy i ogonki, dodaj ziemniaki. Liście wrzuć dopiero pod koniec, żeby zachowały kolor.",
            tip: "W przeciwieństwie do klarownego wywaru na świąteczny [barszcz czerwony](/pl/rezepte/barszcz-czerwony) tutaj nic się nie przecedza, bo warzywa i zieleń zostają w zupie.",
          },
          {
            text: "Dopraw solą, pieprzem i odrobiną kwasu, na przykład sokiem z cytryny lub zalewą, zdejmij z ognia i wmieszaj letnią śmietanę.",
            tip: "Przy wyborze nabiału pomaga wpis o [śmietanie i Schmandzie](/pl/blog/smietana-czy-schmand). Śmietany nigdy nie wlewaj do wrzącej zupy, bo łatwo się zważy.",
          },
          {
            text: "Podawaj gorącą z koperkiem i opcjonalnie połówką jajka.",
            tip: "Botwinkę podaje się na ciepło, inaczej niż zimny letni [chłodnik](/pl/rezepte/chlodnik-litewski) i inaczej niż wyraźnie kwaśna [ogórkowa](/pl/rezepte/ogorkowa) na ogórkach.",
          },
        ],
        seoTitle: "Botwinka przepis | Zupa z botwiny | Alemniam",
        seoDescription:
          "Botwinka: zupa z młodych buraków z liśćmi, ciepła i sezonowa, wyraźnie odróżniona od barszczu i chłodnika.",
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
        storeHintDe: "Im Frühjahr auf dem Markt als Bund mit frischem Grün erhältlich, sonst ehrlich als Notvariante junge Knollen mit Blattspinat kombinieren",
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
        storeHintDe: "Schmand mit 20 bis 24 % Fettgehalt, siehe Śmietana-Guide",
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
