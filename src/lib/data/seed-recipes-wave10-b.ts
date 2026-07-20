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
      "https://images.unsplash.com/photo-1757522745938-c54b94802591?w=1600&q=80",
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
          "Polnischer Lebkuchen mit Honig und Gewürz — weicher Kuchen, oft Wigilia oder Alltagskaffee, klar ≠ Makowiec.",
        steps: [
          {
            text: "Honig mit Butter und Zucker vorsichtig erwärmen, bis alles flüssig und glatt ist; abkühlen lassen, bis lauwarm.",
            tip: "Nicht kochen lassen — sonst karamellisiert der Honig zu stark. Einkauf Gewürze: [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Mehl mit Backpulver, Kakao (optional) und Gewürzen (Zimt, Nelke, Ingwer, Muskat, Piment) mischen; Eier und die Honigmasse unterrühren zu einem zähen Teig.",
            tip: "Das ist kein Hefe-Rollenkuchen wie [Makowiec](/de/rezepte/makowiec) — hier arbeiten Honig und Gewürz, nicht Mohnspirale.",
          },
          {
            text: "Teig in eine gefettete Form geben, bei mittlerer Ofentemperatur goldbraun backen; Stäbchenprobe im Kern. Auskühlen lassen.",
            tip: "Ofengeduld descriptiv wie im [Makowiec-Technik](/de/blog/makowiec-technik)-Guide — Primary bleibt Piernik, nicht Hefe/Mohn.",
          },
          {
            text: "Optional mit dünner Schokoglasur oder Puderzucker; in Scheiben oder Würfeln servieren — zu Tee/Kaffee oder als süßer Schluss nach [Wigilia](/de/blog/wigilia-speiseplan).",
          },
        ],
        seoTitle: "Piernik Rezept | Polnischer Lebkuchen | Alemniam",
        seoDescription:
          "Piernik — polnischer Lebkuchen mit Honig und Gewürz. Bilingual mit DE-Einkauf, klar ≠ Makowiec/Sernik/Babka.",
      },
      pl: {
        title: "Piernik",
        slug: "piernik",
        excerpt:
          "Polski piernik miodowo-korzenny — miękkie ciasto, często na Wigilię lub do kawy, jasno ≠ makowiec.",
        steps: [
          {
            text: "Podgrzej miód z masłem i cukrem ostrożnie, aż będzie płynny i gładki; ostudź do letniego.",
            tip: "Nie gotuj — inaczej miód zbyt karmelizuje. Przyprawy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Wymieszaj mąkę z proszkiem do pieczenia, kakao (opcjonalnie) i przyprawami (cynamon, goździk, imbir, gałka, ziele angielskie); dodaj jajka i masę miodową do gęstego ciasta.",
            tip: "To nie rolada drożdżowa jak [makowiec](/pl/rezepte/makowiec) — tu niosą miód i korzeń, nie spirala makowa.",
          },
          {
            text: "Przełóż do natłuszczonej formy, piecz na złoto w średniej temperaturze; patyczek w środku. Ostudź.",
            tip: "Cierpliwość pieca opisowo jak w [technice makowca](/pl/blog/makowiec-technika) — primary zostaje piernik, nie drożdże/mak.",
          },
          {
            text: "Opcjonalnie lukier czekoladowy lub cukier puder; podawaj w plastrach lub kostkach — do herbaty/kawy albo jako słodki finał po [menu wigilijnym](/pl/blog/menu-wigilijne).",
          },
        ],
        seoTitle: "Piernik przepis | Piernik miodowy | Alemniam",
        seoDescription:
          "Piernik — polski piernik miodowo-korzenny. Dwujęzycznie z zakupami w DE, jasno ≠ makowiec/sernik/babka.",
      },
    },
    ingredients: [
      {
        id: "pn-1",
        name: { de: "Honig", pl: "Miód" },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Milder Blütenhonig; dunkler Honig intensiver",
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
        storeHintDe: "Fertigmischung im Polenladen oder einzeln mischen",
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
      "https://images.unsplash.com/photo-1752058238517-81cd22ef6087?w=1600&q=80",
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
          "Polnische Tomatensuppe mit Reis oder Nudeln und Śmietana — Alltagsklassiker, klar ≠ Barszcz und ≠ Ogórkowa.",
        steps: [
          {
            text: "Leichte Brühe erhitzen (oft Reste von [Rosół](/de/rezepte/rosol)); Zwiebel und Karotte kurz anschwitzen oder mitkochen.",
            tip: "Alltags-Suppe, keine klare Festtagsbrühe — Überblick: [Polnische Suppen](/de/blog/polnische-suppen).",
          },
          {
            text: "Tomatensauce oder passierte Tomaten einrühren; 10–15 Minuten sanft köcheln. Reis oder kleine Nudeln separat garen oder in der Suppe weich kochen.",
            tip: "Das ist nicht [Barszcz](/de/rezepte/barszcz-czerwony) (Bete) und nicht [Ogórkowa](/de/rezepte/ogorkowa) (Kiszone-Gurke).",
          },
          {
            text: "Mit Salz, Pfeffer und etwas Zucker oder Basilikum abschmecken; vom Herd nehmen und temperierte Śmietana einrühren.",
            tip: "Śmietana temperieren — siehe [Śmietana/Schmand](/de/blog/smietana-schmand); nicht kochend einrühren.",
          },
          {
            text: "Heiß mit Dill oder Petersilie servieren — als leichter Mittagsteller oder Sonntagsstarter im Sinne von [polnischem Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
        ],
        seoTitle: "Zupa pomidorowa Rezept | Polnische Tomatensuppe | Alemniam",
        seoDescription:
          "Zupa pomidorowa — polnische Tomatensuppe mit Reis/Nudeln und Śmietana. Bilingual, klar ≠ Barszcz/Ogórkowa.",
      },
      pl: {
        title: "Zupa pomidorowa",
        slug: "zupa-pomidorowa",
        excerpt:
          "Polska zupa pomidorowa z ryżem lub makaronem i śmietaną — klasyk codzienny, jasno ≠ barszcz i ≠ ogórkowa.",
        steps: [
          {
            text: "Podgrzej lekki wywar (często resztki [rosołu](/pl/rezepte/rosol)); cebulę i marchew krótko zeszklij lub dogotuj.",
            tip: "Zupa codzienna, nie klarowny wywar świąteczny — przegląd: [polskie zupy](/pl/blog/polskie-zupy).",
          },
          {
            text: "Wymieszaj przecier lub passatę pomidorową; gotuj łagodnie 10–15 minut. Ryż lub drobny makaron ugotuj osobno albo w zupie do miękkości.",
            tip: "To nie [barszcz](/pl/rezepte/barszcz-czerwony) (burak) i nie [ogórkowa](/pl/rezepte/ogorkowa) (ogórek kiszony).",
          },
          {
            text: "Dopraw solą, pieprzem i odrobiną cukru lub bazylii; zdejmij z ognia i włącz ocieploną śmietanę.",
            tip: "Śmietanę zahartuj — [śmietana/Schmand](/pl/blog/smietana-czy-schmand); nie wlewaj do wrzątku.",
          },
          {
            text: "Podawaj gorącą z koperkiem lub pietruszką — lekki obiad albo starter niedzielny w duchu [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
          },
        ],
        seoTitle: "Zupa pomidorowa przepis | Zupa z pomidorów | Alemniam",
        seoDescription:
          "Zupa pomidorowa — z ryżem/makaronem i śmietaną. Dwujęzycznie, jasno ≠ barszcz/ogórkowa.",
      },
    },
    ingredients: [
      {
        id: "zp-1",
        name: { de: "Brühe (Huhn oder Gemüse)", pl: "Wywar (drobiowy lub warzywny)" },
        amount: 1.2,
        unit: { de: "l", pl: "l" },
        group: "pantry",
        storeHintDe: "Oft Reste von Rosół — sonst leichter Fond",
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
        storeHintDe: "Gute Passata; polnische Flaschen im Polenladen oft runder",
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
          de: "Hausbrauch: Reis ODER Nudeln — nicht beides als Pflicht",
          pl: "Zwyczaj domu: ryż ALBO makaron — nie oba naraz jako obowiązek",
        },
      },
      {
        id: "zp-6",
        name: { de: "Śmietana / Schmand", pl: "Śmietana" },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        storeHintDe: "18–22 %; temperieren vor dem Einrühren",
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
