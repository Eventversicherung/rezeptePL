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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-leczo/dfefb489-d2b6-40fb-ab9e-90c09754aca0.webp",
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
          "Paprika-Tomaten-Eintopf mit Kiełbasa, gemüsebetont und schnell auf dem Tisch, klar zu unterscheiden vom Gulasz wieprzowy mit langsam geschmortem Würfelfleisch.",
        steps: [
          {
            text: "Paprika in Streifen, Zwiebeln in Halbringe, Tomaten würfeln (oder passierte Tomaten bereitstellen). Kiełbasa in Scheiben schneiden.",
            tip: "Welche Wurstsorte wohin passt, erklärt das [Kiełbasa-Arten-Lexikon](/de/blog/kielbasa-arten), gute Ware dafür findest du im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "In einem breiten Topf oder einer tiefen Pfanne Zwiebeln in Öl oder Schmalz glasig dünsten. Paprika zugeben und 5–8 Minuten mitdünsten, bis sie weicher werden.",
            tip: "Wer die Paprika hier schon zu weich kocht, verliert später Biss, ein leichter Widerstand beim Anbeißen ist am Ende genau richtig.",
          },
          {
            text: "Kiełbasa-Scheiben kurz mitbraten, bis sie Farbe nehmen. Tomaten (frisch oder passiert), Paprikapulver edelsüß, Salz und Pfeffer zugeben. Optional eine Prise Majeranek.",
            tip: "Das ist kein [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy), dort führt langes Schmoren von Würfelfleisch, hier bestimmen Paprika und Tomate den Geschmack. Wie viel Majeranek sinnvoll ist, erklärt das [Majeranek-Lexikon](/de/blog/majeranek).",
          },
          {
            text: "Zugedeckt 15–25 Minuten bei mittlerer Hitze köcheln, bis die Paprika weich und die Sauce gebunden ist. Am Ende abschmecken, die Säure kommt von der Tomate, die Süße von der Paprika.",
          },
          {
            text: "Heiß mit Brot oder Reis servieren. Optional ein Ei in Mulden einschlagen und zugedeckt stocken lassen. Als Alltagsteller passt Leczo gut neben das [Sonntagsessen](/de/blog/sonntagsessen-polnisch), das den größeren Menürahmen liefert.",
            tip: "Leczo hat mit [Bigos](/de/rezepte/bigos) und seinem Kraut-Fleisch-Charakter nichts zu tun und ist auch kein Bohneneintopf wie [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku), beide sind eigenständige Gerichte.",
          },
        ],
        seoTitle: "Leczo Rezept | Paprikagemüse polnisch | Alemniam",
        seoDescription:
          "Leczo mit Paprika, Tomate und Kiełbasa. Bilingualer Alltagseintopf, klar getrennt von Gulasz wieprzowy.",
      },
      pl: {
        title: "Leczo",
        slug: "leczo",
        excerpt:
          "Gulasz warzywny z papryką, pomidorem i kiełbasą, warzywa prowadzą, a danie ląduje na patelni w codzienne popołudnie, wyraźnie inny niż gulasz wieprzowy z długo duszoną kostką mięsa.",
        steps: [
          {
            text: "Pokrój paprykę w paski, cebulę w półpierścienie, pomidory w kostkę (albo przygotuj passatę). Kiełbasę pokrój w plasterki.",
            tip: "Która kiełbasa gdzie pasuje, wyjaśnia [leksykon rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy), dobry wybór znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Na szerokim garnku lub głębokiej patelni zeszklij cebulę na oleju lub smalcu. Dodaj paprykę i duś 5–8 minut, aż zmięknie.",
            tip: "Jeśli papryka zmięknie tu zbyt mocno, straci przyjemny lekki opór przy gryzieniu, który na końcu dania jest pożądany.",
          },
          {
            text: "Dodaj plasterki kiełbasy i krótko podsmaż. Wrzuć pomidory (świeże lub passata), paprykę słodką w proszku, sól i pieprz. Opcjonalnie szczypta majeranku.",
            tip: "To nie [gulasz wieprzowy](/pl/rezepte/gulasz-wieprzowy), tam prowadzi długie duszenie kostki mięsa, tu smak nadają papryka i pomidor. O dawkowaniu majeranku pisze [leksykon majeranku](/pl/blog/majeranek-leksykon).",
          },
          {
            text: "Duś pod przykryciem 15–25 minut na średnim ogniu, aż papryka będzie miękka, a sos związany. Na koniec dopraw, kwas pochodzi z pomidora, słodycz z papryki.",
          },
          {
            text: "Podawaj gorące z chlebem lub ryżem. Opcjonalnie wbij jajko w zagłębienia i zestal pod przykryciem. Jako danie na co dzień pasuje dobrze obok [obiadu niedzielnego](/pl/blog/obiad-niedzielny), który daje szerszą ramę menu.",
            tip: "Leczo nie ma nic wspólnego z [bigosem](/pl/rezepte/bigos) i jego charakterem kapusta-mięso ani z fasolowym [fasolką po bretońsku](/pl/rezepte/fasolka-po-bretonsku), oba to zupełnie inne dania.",
          },
        ],
        seoTitle: "Leczo przepis | Papryka pomidor kiełbasa | Alemniam",
        seoDescription:
          "Leczo z papryką, pomidorem i kiełbasą. Dwujęzyczny gulasz warzywny, wyraźnie osobny od gulaszu wieprzowego.",
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
        storeHintDe: "Im Supermarkt große, fleischige Schoten auswählen",
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
        storeHintDe:
          "Im Supermarkt erhältlich, passierte Tomaten aus der Dose sind alltagstauglich",
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
        storeHintDe:
          "Im Polenladen erhältlich, siehe Kiełbasa-Arten, dunkle Grillwurst allein passt weniger gut",
        substitute: {
          de: "Gute geräucherte deutsche Bratwurst in Scheiben funktioniert auch, das im Rezept ehrlich benennen",
          pl: "Dobra wędzona kiełbasa niemiecka w plasterkach też się sprawdzi, warto to uczciwie napisać",
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
        storeHintDe:
          "Im Polenladen oder Gewürzregal erhältlich, siehe Majeranek-Lexikon",
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
