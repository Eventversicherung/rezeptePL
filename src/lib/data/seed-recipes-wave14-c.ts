import type { Recipe } from "@/types/content";

/**
 * Wave 14 Paket C — Composed Placki + Street.
 * - recipe-placek-po-wegiersku — Kartoffelpuffer + Gulasch-Topping (+ optional Käse)
 *   Primary = composed dish; Placki / Gulasz bleiben Einzeln-Owner
 * - recipe-zapiekanka — Baguette + Pilze/Schinken + Käse überbacken (klassische Linie)
 *
 * Integrator E: merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push. Keine 5. Placki-Family-Variante.
 */
export const seedRecipesWave14C: Recipe[] = [
  {
    id: "recipe-placek-po-wegiersku",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1780019676104-79da19c02d8f?w=1600&q=80",
    prepMinutes: 35,
    cookMinutes: 90,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-schmoren", "technique-panieren"],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-placki-guide",
      "post-sonntagsessen",
      "post-dutch-oven",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Placek po węgiersku",
        slug: "placek-po-wegiersku",
        excerpt:
          "Composed Teller: knusprige Kartoffelpuffer mit Schweinegulasch obenauf und optionalem Käse — Fokus ist der komplette Teller, nicht Placki allein und nicht Gulasz allein.",
        steps: [
          {
            text: "Gulasch vorbereiten: Schweinenacken würfeln, anbraten, Zwiebel und Paprika dünsten, Tomatenmark und Paprikapulver kurz rösten, mit Brühe ablöschen und 60–90 Min zugedeckt schmoren, bis das Fleisch zart ist.",
            tip: "Das Schmorfleisch allein bleibt [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy) — hier nur Topping für den Composed-Teller. Schmortopf: [Dutch Oven](/de/blog/dutch-oven-kaufberatung).",
          },
          {
            text: "Währenddessen Placki-Masse: Kartoffeln und Zwiebel reiben, kräftig ausdrücken, mit Ei, Mehl, Salz und Pfeffer verrühren.",
            tip: "Technik und Abtropfen detailliert im [Placki-Guide](/de/blog/placki-guide). Nackte Puffer ohne Soße sind [Placki ziemniaczane](/de/rezepte/placki/ziemniaczane) — anderes Gericht.",
          },
          {
            text: "In heißem Öl (ca. 3–5 mm) mittelgroße Puffer goldbraun ausbacken. Warm halten (Ofen 90 °C, einzeln auf Blech — nicht stapeln).",
          },
          {
            text: "Teller anrichten: 2–3 heiße Placki, großzügig Gulasch obenauf. Optional geriebenen Gouda/Edamer darüber und kurz unter Grill schmelzen lassen.",
            tip: "Käse ist Hauslinie, kein Pflichtbestandteil — ehrlich im Excerpt. Menüplatz: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Sofort servieren — Puffer verlieren sonst die Kruste unter der Soße. Optional Löffel Śmietana am Rand.",
            tip: "Zwei Gerichte getrennt kochen und erst auf dem Teller verbinden — so bleiben Placki- und Gulasz-URLs Abgrenzung-klar.",
          },
        ],
        seoTitle:
          "Placek po węgiersku Rezept | Ungarischer Kartoffelpuffer | Alemniam",
        seoDescription:
          "Placek po węgiersku: Kartoffelpuffer mit Gulasch-Topping und optional Käse. zusammengesetzter Teller, bilingual, klar ≠ Placki allein ≠ Gulasz allein.",
      },
      pl: {
        title: "Placek po węgiersku",
        slug: "placek-po-wegiersku",
        excerpt:
          "Composed talerz: chrupiące placki ziemniaczane z gulaszem wieprzowym na wierzchu i opcjonalnym serem — fokus to cały talerz, nie same placki i nie sam gulasz.",
        steps: [
          {
            text: "Przygotuj gulasz: kark wieprzowy w kostkę, obsmaż, zeszklij cebulę i paprykę, podsmaż koncentrat i paprykę w proszku, zalej bulionem i duś 60–90 min pod przykryciem, aż mięso będzie miękkie.",
            tip: "Sam gulasz zostaje przy [gulaszu wieprzowym](/pl/rezepte/gulasz-wieprzowy) — tu tylko topping composed. Garnek: [dutch oven](/pl/blog/garnek-do-duszenia).",
          },
          {
            text: "Równolegle masa na placki: zetrzyj ziemniaki i cebulę, mocno odciśnij, wymieszaj z jajkiem, mąką, solą i pieprzem.",
            tip: "Technika i odsączanie w [przewodniku po plackach](/pl/blog/placki-przewodnik). Gołe placki bez sosu to [placki ziemniaczane](/pl/rezepte/placki/ziemniaczane) — inny fokus.",
          },
          {
            text: "Smaż średnie placki na złoto na gorącym oleju (ok. 3–5 mm). Trzymaj ciepłe (piekarnik 90 °C, osobno na blasze — nie stosuj w stos).",
          },
          {
            text: "Na talerzu: 2–3 gorące placki, hojnie gulasz na wierzchu. Opcjonalnie starty gouda/edam i krótko pod grillem, aż ser się stopi.",
            tip: "Ser to linia domu, nie obowiązek — uczciwie w excerpt. Miejsce w menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Podawaj od razu — inaczej placki miękną pod sosem. Opcjonalnie łyżka śmietany z boku.",
            tip: "Gotuj dwa elementy osobno i łącz dopiero na talerzu — rozróżnienie placków i gulaszu zostaje jasne.",
          },
        ],
        seoTitle:
          "Placek po węgiersku przepis | Placki z gulaszem | Alemniam",
        seoDescription:
          "Placek po węgiersku: placki z gulaszem na wierzchu i opcjonalnym serem. talerz złożony, dwujęzycznie, jasno ≠ same placki ≠ sam gulasz.",
      },
    },
    ingredients: [
      {
        id: "ppw-1",
        name: { de: "Schweinenacken", pl: "Kark wieprzowy" },
        amount: 700,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "ppw-2",
        name: { de: "Kartoffeln (für Placki)", pl: "Ziemniaki (na placki)" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "ppw-3",
        name: { de: "Zwiebeln", pl: "Cebule" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ppw-4",
        name: { de: "Paprika (frisch)", pl: "Papryka (świeża)" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ppw-5",
        name: { de: "Tomatenmark", pl: "Koncentrat pomidorowy" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "ppw-6",
        name: {
          de: "Paprikapulver edelsüß",
          pl: "Papryka słodka w proszku",
        },
        amount: 2,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
        storeHintDe: "Oft aromatischer im Polenladen",
      },
      {
        id: "ppw-7",
        name: { de: "Fleischbrühe", pl: "Bulion mięsny" },
        amount: 400,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
      {
        id: "ppw-8",
        name: { de: "Eier (Placki)", pl: "Jajka (placki)" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "ppw-9",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 4,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "ppw-10",
        name: {
          de: "Gouda oder Edamer (optional)",
          pl: "Gouda lub edam (opcjonalnie)",
        },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        substitute: {
          de: "Weglassen — dann klar ohne Käse-Linie benennen",
          pl: "Pominąć — wtedy jasno bez linii serowej",
        },
      },
      {
        id: "ppw-11",
        name: {
          de: "Öl zum Braten, Salz, Pfeffer",
          pl: "Olej do smażenia, sól, pieprz",
        },
        amount: 1,
        unit: { de: "nach Bedarf", pl: "według potrzeby" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
  {
    id: "recipe-zapiekanka",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1670843633381-46d78a3fb6a0?w=1600&q=80",
    prepMinutes: 20,
    cookMinutes: 15,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: ["category-schnell", "category-hauptgerichte"],
    relatedPostIds: [
      "post-polenladen",
      "post-ersatzprodukte-de",
      "post-sonntagsessen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Zapiekanka",
        slug: "zapiekanka",
        excerpt:
          "Polnisches Straßen-Baguette: längs aufgeschnitten, mit Pilzen, Schinken und Käse überbacken — klar ≠ Krokiety, ≠ Naleśniki, ≠ Pierogi.",
        steps: [
          {
            text: "Champignons fein würfeln, Zwiebel klein schneiden. In Butter oder Öl anbraten, bis die Flüssigkeit verdampft ist; salzen und pfeffern.",
            tip: "Einkauf: [Polenladen](/de/blog/polenladen-einkaufen). Käse-Ersatz ehrlich: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Baguette längs halbieren (oder in Portionen teilen). Schnittflächen leicht andrösten — Ofenvorbereitung 200 °C Ober-/Unterhitze.",
            tip: "Das ist Baguette-Streetfood, keine gerollte [Krokiety](/de/rezepte/krokiety) und keine [Naleśniki](/de/rezepte/nalesniki/twarog).",
          },
          {
            text: "Pilzmasse auf die Baguettehälften verteilen, Schinkenwürfel darauf, großzügig geriebenen Käse (Gouda/Edamer/Mozzarella).",
          },
          {
            text: "Auf dem Blech 10–12 Minuten backen, bis der Käse schmilzt und die Ränder knusprig sind. Nicht austrocknen lassen.",
            tip: "Schnellgericht-Alltag neben [Sonntagsessen](/de/blog/sonntagsessen-polnisch) — Kulturrahmen bleibt bei dort.",
          },
          {
            text: "Heiß mit Ketchup (klassisch) und optional Schnittlauch servieren. Sofort essen — Käse zieht beim Abkühlen.",
            tip: "Nicht mit [Pierogi](/de/rezepte/pierogi/ruskie) verwechseln — anderer Teig-Intent. Reste kurz im Ofen aufwärmen, nicht Mikrowelle.",
          },
        ],
        seoTitle:
          "Zapiekanka Rezept | Polnisches Baguette überbacken | Alemniam",
        seoDescription:
          "Zapiekanka: Baguette mit Pilzen, Schinken und Käse. Straßenfood-Klassiker bilingual, klar ≠ Krokiety und Naleśniki.",
      },
      pl: {
        title: "Zapiekanka",
        slug: "zapiekanka",
        excerpt:
          "Polska zapiekanka uliczna: bagietka przekrojona wzdłuż, z pieczarkami, szynką i serem — jasno ≠ krokiety, ≠ naleśniki, ≠ pierogi.",
        steps: [
          {
            text: "Pieczarki drobno pokrój, cebulę posiekaj. Podsmaż na maśle lub oleju, aż odparuje woda; posól i popieprz.",
            tip: "Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy). Zamienniki sera: [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Bagietkę przekrój wzdłuż (albo na porcje). Lekko podpiecz powierzchnię — piekarnik 200 °C góra/dół.",
            tip: "To bagietka uliczna, nie zwijane [krokiety](/pl/rezepte/krokiety) i nie [naleśniki](/pl/rezepte/nalesniki/twarog).",
          },
          {
            text: "Rozłóż masę pieczarkową, dodaj kostkę szynki, hojnie starty ser (gouda/edam/mozzarella).",
          },
          {
            text: "Piecz na blasze 10–12 min, aż ser się roztopi, a brzegi chrupią. Nie wysusz.",
            tip: "Szybkie danie obok [obiadu niedzielnego](/pl/blog/obiad-niedzielny) — przewodnik kulturowy zostaje tam.",
          },
          {
            text: "Podawaj gorące z keczupem (klasyka) i opcjonalnie szczypiorkiem. Jedz od razu — ser stygnąc twardnieje.",
            tip: "Nie mylić z [pierogami](/pl/rezepte/pierogi/ruskie). Resztki krótko w piekarniku, nie mikrofalówka.",
          },
        ],
        seoTitle:
          "Zapiekanka przepis | Polska bagietka zapiekana | Alemniam",
        seoDescription:
          "Zapiekanka: bagietka z pieczarkami, szynką i serem. Klasyk uliczny dwujęzycznie, jasno ≠ krokiety i naleśniki.",
      },
    },
    ingredients: [
      {
        id: "zap-1",
        name: { de: "Baguette", pl: "Bagietka" },
        amount: 1,
        unit: { de: "Stück (ca. 300 g)", pl: "szt. (ok. 300 g)" },
        group: "pantry",
        substitute: {
          de: "Ciabatta oder längliches Weißbrot — Form ehrlich benennen",
          pl: "Ciabatta lub długi biały chleb — nazwać formę uczciwie",
        },
      },
      {
        id: "zap-2",
        name: { de: "Champignons", pl: "Pieczarki" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "zap-3",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "zap-4",
        name: { de: "Schinken (gekocht)", pl: "Szynka gotowana" },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Polenladen / Kühltruhe",
        substitute: {
          de: "Vegetarisch weglassen — dann klar „nur Pilze“ im Title",
          pl: "Wersja wege bez szynki — jasno „tylko pieczarki” w tytule",
        },
      },
      {
        id: "zap-5",
        name: {
          de: "Gouda, Edamer oder Mozzarella",
          pl: "Gouda, edam lub mozzarella",
        },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "zap-6",
        name: { de: "Butter oder Öl", pl: "Masło lub olej" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "dairy",
      },
      {
        id: "zap-7",
        name: {
          de: "Ketchup zum Servieren",
          pl: "Keczup do podania",
        },
        amount: 4,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "zap-8",
        name: {
          de: "Salz, Pfeffer, optional Schnittlauch",
          pl: "Sól, pieprz, opcjonalnie szczypiorek",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
];
