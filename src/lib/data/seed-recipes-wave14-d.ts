import type { Recipe } from "@/types/content";

/**
 * Wave 14 Paket D — Alltag-Eintopf (1 Rezept).
 * - recipe-leczo — Leczo (Paprika + Zwiebel + Tomate + Kiełbasa)
 *
 * Ownership: Leczo Primary ≠ Gulasz wieprzowy (Schweine-Schmor) ≠ Bigos ≠ Fasolka.
 * Integrator (E): merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave14D: Recipe[] = [
  {
    id: "recipe-leczo",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=1600&q=80",
    prepMinutes: 15,
    cookMinutes: 35,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte", "category-schnell"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-polenladen",
      "post-kielbasa-arten",
      "post-majeranek",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Leczo",
        slug: "leczo",
        excerpt:
          "Paprika-Tomaten-Eintopf mit Kiełbasa — Gemüse-dominant, Alltagspfanne. Klar ≠ Gulasz wieprzowy (Schweine-Schmor mit Würfelfleisch).",
        steps: [
          {
            text: "Paprika in Streifen, Zwiebeln in Halbringe, Tomaten würfeln (oder passierte Tomaten bereitstellen). Kiełbasa in Scheiben schneiden.",
            tip: "Wurst-Qualität und welche Sorte wohin: [Kiełbasa-Arten](/de/blog/kielbasa-arten). Einkauf: [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "In einem breiten Topf oder einer tiefen Pfanne Zwiebeln in Öl oder Schmalz glasig dünsten. Paprika zugeben und 5–8 Minuten mitdünsten, bis sie weicher werden.",
          },
          {
            text: "Kiełbasa-Scheiben kurz mitbraten, bis sie Farbe nehmen. Tomaten (frisch oder passiert), Paprikapulver edelsüß, Salz und Pfeffer zugeben. Optional eine Prise Majeranek.",
            tip: "Das ist kein [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy): hier führen Paprika und Tomate, nicht langes Schmoren von Würfelfleisch. Majeranek dosieren: [Majeranek-Lexikon](/de/blog/majeranek).",
          },
          {
            text: "Zugedeckt 15–25 Minuten bei mittlerer Hitze köcheln, bis die Paprika weich und die Sauce gebunden ist. Abschmecken — Säure aus Tomate, Süße aus Paprika.",
          },
          {
            text: "Heiß mit Brot oder Reis servieren. Optional ein Ei in Mulden einschlagen und zugedeckt stocken lassen. Alltagskontext: [Sonntagsessen](/de/blog/sonntagsessen-polnisch) — Kulturrahmen bleibt bei dort; hier nur der Cook.",
            tip: "Nicht mit [Bigos](/de/rezepte/bigos) (Kraut-Fleisch) oder [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku) (Bohnen) verwechseln — anderes Gericht.",
          },
        ],
        seoTitle: "Leczo Rezept | Paprikagemüse polnisch | Alemniam",
        seoDescription:
          "Leczo — Paprika, Tomate und Kiełbasa. Bilingualer Alltagseintopf, klar getrennt von Gulasz wieprzowy.",
      },
      pl: {
        title: "Leczo",
        slug: "leczo",
        excerpt:
          "Gulasz warzywny z papryką, pomidorem i kiełbasą — warzywa prowadzą, patelnia na co dzień. Wyraźnie ≠ gulasz wieprzowy (długo duszone mięso w kostce).",
        steps: [
          {
            text: "Pokrój paprykę w paski, cebulę w półpierścienie, pomidory w kostkę (albo przygotuj passatę). Kiełbasę pokrój w plasterki.",
            tip: "Jakość kiełbasy i która gdzie pasuje: [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Na szerokim garnku lub głębokiej patelni zeszklij cebulę na oleju lub smalcu. Dodaj paprykę i duś 5–8 minut, aż zmięknie.",
          },
          {
            text: "Dodaj plasterki kiełbasy i krótko podsmaż. Wrzuć pomidory (świeże lub passata), paprykę słodką w proszku, sól i pieprz. Opcjonalnie szczypta majeranku.",
            tip: "To nie [gulasz wieprzowy](/pl/rezepte/gulasz-wieprzowy): tu papryka i pomidor prowadzą, nie długie duszenie kostki mięsa. Majeranek: [leksykon majeranku](/pl/blog/majeranek-leksykon).",
          },
          {
            text: "Duś pod przykryciem 15–25 minut na średnim ogniu, aż papryka będzie miękka, a sos związany. Dopraw — kwas z pomidora, słodycz z papryki.",
          },
          {
            text: "Podawaj gorące z chlebem lub ryżem. Opcjonalnie wbij jajko w zagłębienia i zestal pod przykryciem. Kontekst dnia: [obiad niedzielny](/pl/blog/obiad-niedzielny) — przewodnik kulturowy zostaje tam; tu tylko cook.",
            tip: "Nie mylić z [bigosem](/pl/rezepte/bigos) (kapusta-mięso) ani [fasolką po bretońsku](/pl/rezepte/fasolka-po-bretonsku) (fasola) — inne przepisy.",
          },
        ],
        seoTitle: "Leczo przepis | Papryka pomidor kiełbasa | Alemniam",
        seoDescription:
          "Leczo — papryka, pomidor i kiełbasa. Dwujęzyczny gulasz warzywny, wyraźnie osobny od gulaszu wieprzowego.",
      },
    },
    ingredients: [
      {
        id: "leczo-1",
        name: {
          de: "Paprika (rot und/oder gelb)",
          pl: "Papryka (czerwona i/lub żółta)",
        },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
        storeHintDe: "Supermarkt — große, fleischige Schoten",
      },
      {
        id: "leczo-2",
        name: { de: "Zwiebeln", pl: "Cebule" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "leczo-3",
        name: {
          de: "Tomaten reif oder passierte Tomaten",
          pl: "Pomidory dojrzałe lub passata",
        },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
        storeHintDe: "Supermarkt — passiert aus der Dose ist Alltagstauglich",
      },
      {
        id: "leczo-4",
        name: {
          de: "Kiełbasa (geräuchert oder Krakauer-Schnitt)",
          pl: "Kiełbasa (wędzona lub krakowska)",
        },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen — siehe Kiełbasa-Arten; nicht dunkle Grillwurst allein",
        substitute: {
          de: "Gute geräucherte DE-Bratwurst in Scheiben — ehrlich benennen",
          pl: "Dobra wędzona kiełbasa DE w plasterkach — nazwać uczciwie",
        },
      },
      {
        id: "leczo-5",
        name: {
          de: "Öl oder Schmalz zum Dünsten",
          pl: "Olej lub smalec do duszenia",
        },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "leczo-6",
        name: {
          de: "Paprikapulver edelsüß",
          pl: "Papryka słodka w proszku",
        },
        amount: 1,
        unit: { de: "EL", pl: "łyżka" },
        group: "spices",
      },
      {
        id: "leczo-7",
        name: {
          de: "Majeranek (optional)",
          pl: "Majeranek (opcjonalnie)",
        },
        amount: 0.5,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
        storeHintDe: "Polenladen oder Gewürzregal — siehe Majeranek-Lexikon",
      },
      {
        id: "leczo-8",
        name: {
          de: "Salz und Pfeffer",
          pl: "Sól i pieprz",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
      {
        id: "leczo-9",
        name: {
          de: "Eier (optional, zum Stocken im Eintopf)",
          pl: "Jajka (opcjonalnie, do zestalenia w leczo)",
        },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
];
