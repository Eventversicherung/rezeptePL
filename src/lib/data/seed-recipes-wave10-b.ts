import type { Recipe } from "@/types/content";

/**
 * Wave 10 Paket B — Piernik + Zupa pomidorowa.
 * Isolated for Integrator E: do not import into seed.ts until merge.
 * Affiliate: guide-only (no relatedProductIds / no catalog recipeIds).
 * No new blog pillar. Piernik ≠ Makowiec/Sernik/Babka primary.
 * Pomidorowa = narrow cook primary; polnische-suppen remains overview owner.
 */
export const seedRecipesWave10B: Recipe[] = [
  {
    id: "recipe-piernik",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-piernik/b47c4a36-f26f-45ef-8c53-cf5ce1db1319.webp",
    prepMinutes: 25,
    cookMinutes: 55,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: [],
    categoryIds: ["category-suess", "category-vegetarisch"],
    videoUrl: null,
    relatedPostIds: [
      "post-wigilia",
      "post-makowiec-technik",
      "post-polenladen",
    ],
    translations: {
      de: {
        title: "Piernik",
        slug: "piernik",
        excerpt:
          "Piernik ist der polnische Honig-Gewürzkuchen mit siebenhundertjähriger Geschichte aus Toruń, weich statt hart, oft zur Wigilia oder zum Alltagskaffee.",
        steps: [
          {
            text: "Honig mit Butter und Zucker vorsichtig erwärmen, bis alles flüssig und glatt ist, danach abkühlen lassen, bis die Masse nur noch lauwarm ist.",
            tip: "Lass den Honig nicht kochen, sonst karamellisiert er zu stark und schmeckt bitter. Gute Gewürze findest du oft im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Mehl mit Backpulver, Kakao (optional) und Gewürzen (Zimt, Nelke, Ingwer, Muskat, Piment) mischen, dann Eier und die Honigmasse einrühren, bis ein zäher Teig entsteht.",
            tip: "Das ist kein Hefe-Rollenkuchen wie [Makowiec](/de/rezepte/makowiec): Dort trägt eine Mohnspirale den Geschmack, hier tragen ihn Honig und Gewürz.",
          },
          {
            text: "Den Teig in eine gefettete Form geben und bei mittlerer Ofentemperatur goldbraun backen, mit der Stäbchenprobe die Mitte prüfen. Vollständig auskühlen lassen, bevor du ihn anschneidest.",
            tip: "Dieselbe Ofengeduld wie im [Makowiec-Technik](/de/blog/makowiec-technik)-Guide zahlt sich auch hier aus, denn zu heiß gebacken bleibt der Kern klebrig.",
          },
          {
            text: "Optional mit dünner Schokoglasur oder Puderzucker bestreuen, dann in Scheiben oder Würfeln servieren, zu Tee oder Kaffee oder als süßer Schluss nach der [Wigilia](/de/blog/wigilia-speiseplan).",
          },
        ],
        seoTitle: "Piernik Rezept | Polnischer Lebkuchen | Alemniam",
        seoDescription:
          "Piernik, polnischer Lebkuchen mit Honig und Gewürz. Bilingual mit DE-Einkauf, klar getrennt von Makowiec, Sernik und Babka.",
      },
      pl: {
        title: "Piernik",
        slug: "piernik",
        excerpt:
          "Piernik to polski korzenno-miodowy piernik z siedmiuset lat historii sięgającej Torunia, miękkie ciasto, często na Wigilię lub do kawy.",
        steps: [
          {
            text: "Podgrzej miód z masłem i cukrem ostrożnie, aż będzie płynny i gładki, potem ostudź do ledwo letniej temperatury.",
            tip: "Nie doprowadzaj miodu do wrzenia, inaczej zbyt się skarmelizuje i wyjdzie gorzki. Dobre przyprawy znajdziesz często w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Wymieszaj mąkę z proszkiem do pieczenia, kakao (opcjonalnie) i przyprawami (cynamon, goździk, imbir, gałka, ziele angielskie), dodaj jajka i masę miodową, aż powstanie gęste ciasto.",
            tip: "To nie rolada drożdżowa jak [makowiec](/pl/rezepte/makowiec): tam smak niesie spirala z makiem, tu niosą go miód i korzenie.",
          },
          {
            text: "Przełóż ciasto do natłuszczonej formy i piecz na złoto w średniej temperaturze, sprawdzając środek patyczkiem. Ostudź całkowicie przed krojeniem.",
            tip: "Ta sama cierpliwość pieca co w [technice makowca](/pl/blog/makowiec-technika) sprawdza się i tutaj, bo za gorący piec zostawia klejący środek.",
          },
          {
            text: "Opcjonalnie polej cienkim lukrem czekoladowym albo oprósz cukrem pudrem, podawaj w plastrach lub kostkach, do herbaty czy kawy albo jako słodki finał po [menu wigilijnym](/pl/blog/menu-wigilijne).",
          },
        ],
        seoTitle: "Piernik przepis | Piernik miodowy | Alemniam",
        seoDescription:
          "Piernik, polski piernik miodowo-korzenny. Dwujęzycznie z zakupami w DE, jasno osobno od makowca, sernika i babki.",
      },
    },
    ingredients: [
      {
        id: "pn-1",
        name: { de: "Honig", pl: "Miód" },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Milder Blütenhonig, dunkler Honig schmeckt intensiver",
      },
      {
        id: "pn-2",
        name: { de: "Butter", pl: "Masło" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "pn-3",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "pn-4",
        name: { de: "Mehl Type 405/550", pl: "Mąka typ 405/550" },
        amount: 350,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "pn-5",
        name: { de: "Eier", pl: "Jajka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pn-6",
        name: { de: "Backpulver", pl: "Proszek do pieczenia" },
        amount: 2,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "pantry",
      },
      {
        id: "pn-7",
        name: {
          de: "Gewürzmischung Piernik (Zimt, Nelke, Ingwer, Muskat)",
          pl: "Przyprawa do piernika (cynamon, goździk, imbir, gałka)",
        },
        amount: 2,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
        storeHintDe: "Fertigmischung im Polenladen oder einzeln selbst gemischt",
      },
      {
        id: "pn-8",
        name: { de: "Kakao (optional)", pl: "Kakao (opcjonalnie)" },
        amount: 1,
        unit: { de: "EL", pl: "łyżka" },
        group: "pantry",
      },
      {
        id: "pn-9",
        name: { de: "Prise Salz", pl: "Szczypta soli" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T23:30:00.000Z",
    updatedAt: "2026-07-20T23:30:00.000Z",
  },
  {
    id: "recipe-zupa-pomidorowa",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-zupa-pomidorowa/1dc1deb5-b454-41f4-a58d-5561a4cf7613.webp",
    prepMinutes: 15,
    cookMinutes: 35,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-bulion"],
    categoryIds: ["category-suppen"],
    videoUrl: null,
    relatedPostIds: [
      "post-polnische-suppen",
      "post-smietana-schmand",
      "post-sonntagsessen",
    ],
    translations: {
      de: {
        title: "Zupa pomidorowa",
        slug: "zupa-pomidorowa",
        excerpt:
          "Zupa pomidorowa ist die polnische Alltags-Tomatensuppe mit Reis oder Nudeln und Śmietana, deutlich anders als Barszcz und Ogórkowa.",
        steps: [
          {
            text: "Eine leichte Brühe erhitzen, oft aus Resten von [Rosół](/de/rezepte/rosol), und Zwiebel sowie Karotte kurz darin anschwitzen oder mitkochen.",
            tip: "Das ist eine Alltags-Suppe und keine klare Festtagsbrühe. Den Überblick über die ganze Familie gibt der Beitrag zu [polnischen Suppen](/de/blog/polnische-suppen).",
          },
          {
            text: "Tomatensauce oder passierte Tomaten einrühren und 10 bis 15 Minuten sanft köcheln lassen. Reis oder kleine Nudeln separat garen oder direkt in der Suppe weich kochen.",
            tip: "Das ist weder [Barszcz](/de/rezepte/barszcz-czerwony) mit roter Bete noch [Ogórkowa](/de/rezepte/ogorkowa) mit Kiszone-Gurke, sondern eine eigene, mild-tomatige Linie.",
          },
          {
            text: "Mit Salz, Pfeffer und etwas Zucker oder Basilikum abschmecken, dann vom Herd nehmen und die temperierte Śmietana einrühren.",
            tip: "Temperiere die Śmietana wie im Beitrag zu [Śmietana und Schmand](/de/blog/smietana-schmand) beschrieben, sonst flockt sie beim Einrühren in die heiße Suppe.",
          },
          {
            text: "Heiß mit Dill oder Petersilie servieren, als leichter Mittagsteller oder als Starter im Rahmen eines [polnischen Sonntagsessens](/de/blog/sonntagsessen-polnisch).",
          },
        ],
        seoTitle: "Zupa pomidorowa Rezept | Polnische Tomatensuppe | Alemniam",
        seoDescription:
          "Zupa pomidorowa, polnische Tomatensuppe mit Reis oder Nudeln und Śmietana. Bilingual, klar getrennt von Barszcz und Ogórkowa.",
      },
      pl: {
        title: "Zupa pomidorowa",
        slug: "zupa-pomidorowa",
        excerpt:
          "Zupa pomidorowa to polska zupa codzienna z ryżem lub makaronem i śmietaną, jasno inna niż barszcz i ogórkowa.",
        steps: [
          {
            text: "Podgrzej lekki wywar, często z resztek [rosołu](/pl/rezepte/rosol), i krótko zeszklij w nim albo dogotuj cebulę i marchew.",
            tip: "To zupa na co dzień, nie klarowny wywar świąteczny. Przegląd całej rodziny zup daje artykuł o [polskich zupach](/pl/blog/polskie-zupy).",
          },
          {
            text: "Wymieszaj przecier lub passatę pomidorową i gotuj łagodnie 10 do 15 minut. Ryż lub drobny makaron ugotuj osobno albo wprost w zupie do miękkości.",
            tip: "To ani [barszcz](/pl/rezepte/barszcz-czerwony) z burakiem, ani [ogórkowa](/pl/rezepte/ogorkowa) z ogórkiem kiszonym, tylko własna, łagodnie pomidorowa linia.",
          },
          {
            text: "Dopraw solą, pieprzem i odrobiną cukru lub bazylii, zdejmij z ognia i włącz ocieploną śmietanę.",
            tip: "Zahartuj śmietanę zgodnie z opisem w artykule [śmietana czy Schmand](/pl/blog/smietana-czy-schmand), inaczej zważy się w gorącej zupie.",
          },
          {
            text: "Podawaj gorącą z koperkiem lub pietruszką, jako lekki obiad albo starter w ramach [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
          },
        ],
        seoTitle: "Zupa pomidorowa przepis | Zupa z pomidorów | Alemniam",
        seoDescription:
          "Zupa pomidorowa, z ryżem lub makaronem i śmietaną. Dwujęzycznie, jasno osobno od barszczu i ogórkowej.",
      },
    },
    ingredients: [
      {
        id: "zp-1",
        name: { de: "Brühe (Huhn oder Gemüse)", pl: "Wywar (drobiowy lub warzywny)" },
        amount: 1.2,
        unit: { de: "l", pl: "l" },
        group: "pantry",
        storeHintDe: "Oft Reste von Rosół, sonst ein leichter Fond",
      },
      {
        id: "zp-2",
        name: {
          de: "Passierte Tomaten / Tomatensauce",
          pl: "Przecier pomidorowy / passata",
        },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Gute Passata, polnische Flaschen im Polenladen schmecken oft runder",
      },
      {
        id: "zp-3",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "zp-4",
        name: { de: "Karotte", pl: "Marchew" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "zp-5",
        name: { de: "Reis oder kleine Nudeln", pl: "Ryż lub drobny makaron" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        substitute: {
          de: "Nach Hausbrauch entweder Reis oder Nudeln, nicht beides gleichzeitig als Pflicht",
          pl: "Zwyczajowo ryż albo makaron, nie oba naraz jako obowiązek",
        },
      },
      {
        id: "zp-6",
        name: { de: "Śmietana / Schmand", pl: "Śmietana" },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        storeHintDe: "18 bis 22 %, vor dem Einrühren temperieren",
      },
      {
        id: "zp-7",
        name: { de: "Butter oder Öl", pl: "Masło lub olej" },
        amount: 1,
        unit: { de: "EL", pl: "łyżka" },
        group: "pantry",
      },
      {
        id: "zp-8",
        name: { de: "Salz, Pfeffer, Prise Zucker", pl: "Sól, pieprz, szczypta cukru" },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
      {
        id: "zp-9",
        name: { de: "Dill oder Petersilie", pl: "Koperek lub pietruszka" },
        amount: 1,
        unit: { de: "EL", pl: "łyżka" },
        group: "produce",
      },
    ],
    createdAt: "2026-07-20T23:30:00.000Z",
    updatedAt: "2026-07-20T23:30:00.000Z",
  },
];
