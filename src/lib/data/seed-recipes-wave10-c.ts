import type { Recipe } from "@/types/content";

/**
 * Wave 10 Paket C — Family variants (Pierogi jagody + Naleśniki dżem).
 * Isolated export `seedRecipesWave10C`.
 *
 * Integrator E:
 * 1) Merge into wave10 aggregator / seed.ts (same path as other W10 packages), OR
 *    append these two recipes into `seedFamilyVariantRecipes` in seed-families.ts
 *    (see content/wave-10-status-c.md § wave10-c-family-patch).
 * 2) seed-families.ts variantIds + excerpts are already patched by C (local consistency).
 * No SEED_VERSION bump here. No Placki / kraut-pilze invent.
 */
export const seedRecipesWave10C: Recipe[] = [
  {
    id: "recipe-pierogi-jagody",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1764831257619-24aa3930e02d?w=1600&q=80",
    prepMinutes: 50,
    cookMinutes: 20,
    servings: 4,
    familyId: "family-pierogi",
    variantLabel: { de: "Heidelbeeren", pl: "z jagodami" },
    variantImage:
      "https://images.unsplash.com/photo-1764831257619-24aa3930e02d?w=400&q=80",
    regionIds: [],
    occasionIds: [],
    techniqueIds: ["technique-teig", "technique-freezer"],
    categoryIds: [
      "category-suess",
      "category-hauptgerichte",
      "category-vegetarisch",
    ],
    relatedPostIds: [
      "post-pierogi-guide",
      "post-pierogi-teig",
      "post-freezer-meal-prep",
      "post-pierogi-formen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Pierogi mit Heidelbeeren",
        slug: "jagody",
        excerpt:
          "Süße Pierogi mit Heidelbeeren — gefaltete Teigtaschen, nicht Knedle. Mit Zucker und Butter.",
        steps: [
          {
            text: "Pierogi-Teig kneten, 20–30 Minuten ruhen lassen, dünn ausrollen und Kreise ausstechen.",
            tip: "Teig-Feeling: [Pierogi-Teig](/de/blog/pierogi-teig). Überblick Varianten: [Pierogi-Guide](/de/blog/pierogi-guide).",
          },
          {
            text: "Heidelbeeren waschen, abtropfen, mit Zucker und 1 TL Speisestärke mischen.",
            tip: "Beeren müssen trocken sein — nasse Füllung platzt. Das sind keine [Knedle ze śliwkami](/de/rezepte/knedle-sliwki) (runde Obst-Knödel).",
          },
          {
            text: "Wenig Füllung pro Kreis, Ränder fest schließen, Luft herausstreichen.",
            tip: "Gleichmäßige Größe: [Pierogi-Formen](/de/blog/pierogi-formen).",
          },
          {
            text: "In leicht siedendem Salzwasser garen, bis sie aufschwimmen; 1–2 Minuten nachziehen.",
          },
          {
            text: "Mit Butter und Zucker oder Puderzucker servieren. Optional Sahne.",
            tip: "Batch einfrieren: [Pierogi einfrieren](/de/blog/freezer-meal-prep) — Beeren-Charge extra beschriften.",
          },
        ],
        seoTitle: "Pierogi mit Heidelbeeren Rezept | Pierogi z jagodami | Alemniam",
        seoDescription:
          "Pierogi z jagodami: süße Heidelbeer-Füllung, Teig und Kochen — bilingual, klar ≠ Knedle śliwki.",
        article: `## Pierogi mit Heidelbeeren — süße Switcher-Variante

Gefaltete Pierogi mit Heidelbeeren: dieselbe Teigfamilie wie [Ruskie](/de/rezepte/pierogi/ruskie), [Fleisch](/de/rezepte/pierogi/fleisch) und [Kraut & Pilze](/de/rezepte/pierogi/kraut-pilze) — anderer Tag, anderer Intent. Broad-Owner bleibt der [Pierogi-Guide](/de/blog/pierogi-guide).

### Nicht Knedle

[Knedle ze śliwkami](/de/rezepte/knedle-sliwki) sind runde Obst-Knödel mit Kartoffelteig. Hier: halbmondförmige Taschen, Mehlteig, Beerenfüllung.

### Technik

Füllung trocken und kalt. Teig: [Pierogi-Teig](/de/blog/pierogi-teig). Freezer: [Meal Prep](/de/blog/freezer-meal-prep).

### Geschwister

Oben wechseln zu Ruskie, Fleisch oder Kraut-Pilze.`,
      },
      pl: {
        title: "Pierogi z jagodami",
        slug: "jagody",
        excerpt:
          "Słodkie pierogi z jagodami — sklejane pierogi, nie knedle. Z cukrem i masłem.",
        steps: [
          {
            text: "Zagnieć ciasto na pierogi, odstaw 20–30 min, rozwałkuj i wykrawaj kółka.",
            tip: "Ciasto: [ciasto na pierogi](/pl/blog/ciasto-na-pierogi). Przegląd: [przewodnik pierogi](/pl/blog/przewodnik-pierogi).",
          },
          {
            text: "Umyj jagody, odsącz, wymieszaj z cukrem i 1 łyżeczką skrobi.",
            tip: "Jagody muszą być suche — mokry farsz pęka. To nie [knedle ze śliwkami](/pl/rezepte/knedle-sliwki).",
          },
          {
            text: "Mało farszu na kółko, szczelnie sklej, wypchnij powietrze.",
            tip: "Równy rozmiar: [foremki do pierogów](/pl/blog/foremki-do-pierogow).",
          },
          {
            text: "Gotuj w lekko wrzącej osolonej wodzie aż wypłyną; 1–2 min dogotuj.",
          },
          {
            text: "Podawaj z masłem i cukrem albo cukrem pudrem. Opcjonalnie śmietana.",
            tip: "Mrożenie: [mrożenie pierogów](/pl/blog/mrozenie-pierogow) — osobna etykieta na jagody.",
          },
        ],
        seoTitle: "Pierogi z jagodami przepis | Alemniam",
        seoDescription:
          "Pierogi z jagodami: słodki farsz, ciasto i gotowanie — dwujęzycznie, jasno ≠ knedle ze śliwkami.",
        article: `## Pierogi z jagodami — słodki wariant w przełączniku

Sklejane pierogi z jagodami: ta sama rodzina co [ruskie](/pl/rezepte/pierogi/ruskie), [mięso](/pl/rezepte/pierogi/mieso) i [kapusta z grzybami](/pl/rezepte/pierogi/kapusta-grzyby). Broad-owner: [przewodnik pierogi](/pl/blog/przewodnik-pierogi).

### Nie knedle

[Knedle ze śliwkami](/pl/rezepte/knedle-sliwki) to okrągłe knedle ziemniaczane. Tu: półksiężyce, ciasto mączne, jagody.

### Technika

Farsz suchy i zimny. [Ciasto](/pl/blog/ciasto-na-pierogi). Freezer: [mrożenie](/pl/blog/mrozenie-pierogow).

### Rodzeństwo

Przełącz u góry na ruskie, mięso albo kapustę z grzybami.`,
      },
    },
    ingredients: [
      {
        id: "pj-1",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "pj-2",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pj-3",
        name: { de: "Heidelbeeren (frisch oder TK)", pl: "Jagody (świeże lub mrożone)" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
        storeHintDe: "TK gut abgetaut und abgetropft",
      },
      {
        id: "pj-4",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "pj-5",
        name: { de: "Speisestärke", pl: "Skrobia ziemniaczana" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "pantry",
      },
      {
        id: "pj-6",
        name: { de: "Butter", pl: "Masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
    ],
    createdAt: "2026-07-20T18:00:00.000Z",
    updatedAt: "2026-07-20T18:00:00.000Z",
  },
  {
    id: "recipe-nalesniki-dzem",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1770802803773-35cd82bc215b?w=1600&q=80",
    prepMinutes: 25,
    cookMinutes: 25,
    servings: 4,
    familyId: "family-nalesniki",
    variantLabel: { de: "Marmelade", pl: "z dżemem" },
    variantImage:
      "https://images.unsplash.com/photo-1770802803773-35cd82bc215b?w=400&q=80",
    regionIds: [],
    occasionIds: [],
    techniqueIds: ["technique-teig"],
    categoryIds: [
      "category-schnell",
      "category-suess",
      "category-vegetarisch",
    ],
    relatedPostIds: [
      "post-nalesniki-guide",
      "post-twarog",
      "post-ersatzprodukte-de",
      "post-tlusty-czwartek",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Naleśniki mit Marmelade",
        slug: "dzem",
        excerpt:
          "Süße Naleśniki mit Dżem — eigene Varianten-URL, nicht die Twaróg-Primary. Schnell und kinderfreundlich.",
        steps: [
          {
            text: "Naleśniki-Teig anrühren, 20–30 Minuten ruhen, dünne Pfannkuchen backen.",
            tip: "Technik: [Naleśniki-Guide](/de/blog/nalesniki-guide). Nicht mit [Twaróg-Füllung](/de/rezepte/nalesniki/twarog) verwechseln — eigener Primary.",
          },
          {
            text: "Jeden Pfannkuchen mit dicker Marmelade oder Powidła bestreichen — nicht randvoll.",
            tip: "Dicker Dżem hält besser. Einkauf: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) wenn Polenladen-Powidła fehlen.",
          },
          {
            text: "Fest rollen oder falten, optional in Butter goldbraun anbraten.",
          },
          {
            text: "Mit Puderzucker servieren. Optional Śmietana oder frische Beeren.",
            tip: "Twaróg bleibt Zutaten-Owner: [Twaróg-Guide](/de/blog/twarog-deutschland) — hier nur descriptive Nachbarschaft.",
          },
        ],
        seoTitle: "Naleśniki mit Marmelade Rezept | Naleśniki z dżemem | Alemniam",
        seoDescription:
          "Naleśniki z dżemem: süße Marmeladen-Variante bilingual — klar getrennt von Twaróg-Naleśniki.",
        article: `## Naleśniki mit Marmelade — süße Switcher-Variante

Dieselbe dünne Plattform wie [Twaróg](/de/rezepte/nalesniki/twarog), [Fleisch](/de/rezepte/nalesniki/fleisch) und [Spinat](/de/rezepte/nalesniki/szpinak) — Primary hier nur Dżem/Marmelade. Broad-Owner: [Naleśniki-Guide](/de/blog/nalesniki-guide).

### Nicht Twaróg stehlen

Die Quark-Füllung bleibt unter [/rezepte/nalesniki/twarog](/de/rezepte/nalesniki/twarog). Hier: Dżem oder Powidła als Füllung.

### Technik

Dünn backen, trocken rollen. Guide: [Naleśniki](/de/blog/nalesniki-guide). Anlass-Feeling descriptiv: [Tłusty Czwartek](/de/blog/tlusty-czwartek).

### Geschwister

Oben zu Twaróg, Fleisch oder Spinat.`,
      },
      pl: {
        title: "Naleśniki z dżemem",
        slug: "dzem",
        excerpt:
          "Słodkie naleśniki z dżemem — własny URL wariantu, nie primary twarogu. Szybkie i przyjazne dzieciom.",
        steps: [
          {
            text: "Zrób ciasto na naleśniki, odstaw 20–30 min, usmaż cienkie placki.",
            tip: "Technika: [przewodnik naleśników](/pl/blog/nalesniki-przewodnik). Nie mylić z [twarogiem](/pl/rezepte/nalesniki/twarog) — osobny primary.",
          },
          {
            text: "Posmaruj każdy placek gęstym dżemem albo powidłami — nie do samej krawędzi.",
            tip: "Gęsty dżem trzyma lepiej. Zakupy: [zamienniki](/pl/blog/zamienniki-skladnikow) gdy brak powideł.",
          },
          {
            text: "Szczelnie zawiń lub złóż, opcjonalnie podsmaż na maśle na złoto.",
          },
          {
            text: "Podawaj z cukrem pudrem. Opcjonalnie śmietana albo świeże owoce.",
            tip: "Twaróg zostaje ownerem składnika: [twaróg w DE](/pl/blog/twarog-w-niemczech).",
          },
        ],
        seoTitle: "Naleśniki z dżemem przepis | Alemniam",
        seoDescription:
          "Naleśniki z dżemem: słodki wariant dwujęzycznie — jasno oddzielony od naleśników z twarogiem.",
        article: `## Naleśniki z dżemem — słodki wariant w przełączniku

Ta sama cienka platforma co [twaróg](/pl/rezepte/nalesniki/twarog), [mięso](/pl/rezepte/nalesniki/mieso) i [szpinak](/pl/rezepte/nalesniki/szpinak). Broad-owner: [nalesniki-przewodnik](/pl/blog/nalesniki-przewodnik).

### Nie kraść primary twarogu

Farsz twarogowy zostaje pod [/rezepte/nalesniki/twarog](/pl/rezepte/nalesniki/twarog). Tu: dżem lub powidła.

### Technika

Cienko, sucho zwinąć. [Przewodnik](/pl/blog/nalesniki-przewodnik). Okazja opisowo: [Tłusty Czwartek](/pl/blog/tlusty-czwartek).

### Rodzeństwo

Przełącz na twaróg, mięso albo szpinak.`,
      },
    },
    ingredients: [
      {
        id: "nd-1",
        name: { de: "Milch", pl: "Mleko" },
        amount: 400,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "nd-2",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "nd-3",
        name: { de: "Eier", pl: "Jajka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "nd-4",
        name: { de: "Marmelade oder Powidła", pl: "Dżem lub powidła" },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Dicke Konfitüre / Powidła im Polenladen",
        substitute: {
          de: "Dicke Aprikosen- oder Pflaumenmarmelade",
          pl: "Gęsty dżem morelowy lub śliwkowy",
        },
      },
      {
        id: "nd-5",
        name: { de: "Butter", pl: "Masło" },
        amount: 30,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "nd-6",
        name: { de: "Puderzucker", pl: "Cukier puder" },
        amount: 30,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T18:30:00.000Z",
    updatedAt: "2026-07-20T18:30:00.000Z",
  },
];
