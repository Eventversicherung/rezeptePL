import type { Recipe } from "@/types/content";

/**
 * Wave 8 Paket A — Beilagen (Mizeria, Kapusta zasmażana).
 * E merges into seed.ts — do not import from seed.ts until Integrator.
 */
export const seedRecipesWave8A: Recipe[] = [
  {
    id: "recipe-mizeria",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1760368104784-79f5f757f66a?w=1600&q=80",
    prepMinutes: 20,
    cookMinutes: 0,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela", "occasion-wielkanoc"],
    techniqueIds: [],
    categoryIds: ["category-vegetarisch", "category-schnell"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-smietana-schmand",
      "post-wielkanoc",
      "post-panieren",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Mizeria",
        slug: "mizeria",
        excerpt:
          "Gurkensalat mit Śmietana und Dill — kühle Beilage zu Schabowy und Sonntagsteller.",
        steps: [
          {
            text: "Gurken waschen, in sehr dünne Scheiben hobeln oder schneiden; leicht salzen und 10–15 Minuten Saft ziehen lassen.",
            tip: "Salz entzieht Wasser — sonst verdünnt der Saft die Śmietana. Technik-Feeling zum Teller: [Panieren-Guide](/de/blog/panieren-schabowy).",
          },
          {
            text: "Gurken leicht ausdrücken oder abgießen. Mit [Śmietana/Schmand](/de/blog/smietana-schmand) (oder saurer Sahne), gehacktem Dill, einer Prise Zucker und Pfeffer vermengen.",
          },
          {
            text: "Abschmecken: Säure und Salz zuletzt. Optional etwas Zwiebel sehr fein.",
            tip: "Nicht zu früh anmischen, wenn Gäste später kommen — sonst wässrig.",
          },
          {
            text: "Kalt servieren zu [Kotlet schabowy](/de/rezepte/kotlet-schabowy), Kartoffeln oder als Oster-Beilage — siehe [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan).",
            tip: "Fest-Buffetsalat mit Mayo-Gemüse ist ein anderer Intent: [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa).",
          },
        ],
        seoTitle: "Mizeria Rezept | Gurkensalat mit Śmietana | Alemniam",
        seoDescription:
          "Mizeria — polnischer Gurkensalat mit Śmietana und Dill. Beilage zu Schabowy, bilingual mit DE-Einkauf.",
      },
      pl: {
        title: "Mizeria",
        slug: "mizeria",
        excerpt:
          "Sałatka z ogórków ze śmietaną i koperkiem — chłodny dodatek do schabowego i niedzielnego stołu.",
        steps: [
          {
            text: "Ogórki umyj, pokrój lub zetrzyj w bardzo cienkie plasterki; lekko posól i odstaw na 10–15 minut, żeby puściły sok.",
            tip: "Sól odciąga wodę — inaczej śmietana się rozrzedzi. Przy talerzu: [przewodnik panierowania](/pl/blog/panierowanie-kotlet).",
          },
          {
            text: "Lekko odciśnij lub odlej sok. Wymieszaj z [śmietaną/Schmandem](/pl/blog/smietana-czy-schmand) (lub kwaśną śmietaną), siekanym koperkiem, szczyptą cukru i pieprzem.",
          },
          {
            text: "Dopraw: kwas i sól na końcu. Opcjonalnie bardzo drobno cebula.",
            tip: "Nie mieszaj za wcześnie przed gośćmi — zrobi się wodnista.",
          },
          {
            text: "Podawaj zimną do [kotleta schabowego](/pl/rezepte/kotlet-schabowy), ziemniaków albo jako dodatek wielkanocny — [menu wielkanocne](/pl/blog/menu-wielkanocne).",
            tip: "Sałatka bufetowa z majonezem to inny intent: [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa).",
          },
        ],
        seoTitle: "Mizeria przepis | Sałatka z ogórków | Alemniam",
        seoDescription:
          "Mizeria — ogórki ze śmietaną i koperkiem. Dodatek do schabowego, dwujęzycznie z zakupami w DE.",
      },
    },
    ingredients: [
      {
        id: "mz-1",
        name: { de: "Salatgurken", pl: "Ogórki gruntowe / sałatkowe" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
        storeHintDe: "Feste Gurken — im Sommer auch Feldgurken aus dem Polenladen",
      },
      {
        id: "mz-2",
        name: { de: "Śmietana oder Schmand", pl: "Śmietana lub Schmand" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        storeHintDe: "Schmand oder saure Sahne 20–24 % — siehe Śmietana-Guide",
        substitute: {
          de: "Saure Sahne oder Crème fraîche (weniger)",
          pl: "Saure Sahne lub crème fraîche (mniej)",
        },
      },
      {
        id: "mz-3",
        name: { de: "Dill frisch", pl: "Koperek świeży" },
        amount: 1,
        unit: { de: "Bund", pl: "pęczek" },
        group: "produce",
      },
      {
        id: "mz-4",
        name: { de: "Salz", pl: "Sól" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "mz-5",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 0.5,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "pantry",
      },
      {
        id: "mz-6",
        name: { de: "Pfeffer", pl: "Pieprz" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "mz-7",
        name: { de: "Zwiebel (optional)", pl: "Cebula (opcjonalnie)" },
        amount: 0.5,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
    ],
    createdAt: "2026-07-20T21:00:00.000Z",
    updatedAt: "2026-07-20T21:00:00.000Z",
  },
  {
    id: "recipe-kapusta-zasmażana",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1745827223757-c98bc93108d2?w=1600&q=80",
    prepMinutes: 15,
    cookMinutes: 40,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-schmoren"],
    categoryIds: ["category-vegetarisch", "category-hauptgerichte"],
    relatedPostIds: [
      "post-kiszenie",
      "post-sonntagsessen",
      "post-kielbasa-arten",
      "post-majeranek",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Kapusta zasmażana",
        slug: "kapusta-zasmażana",
        excerpt:
          "Geschmortes Sauerkraut mit Zasmażka — warme Beilage zu Schabowy und Sonntagsfleisch.",
        steps: [
          {
            text: "Sauerkraut ausdrücken (Säure nach Geschmack behalten oder kurz spülen), grob hacken. Zwiebel in Fett glasig anschwitzen.",
            tip: "Kraut-Qualität und Ferment-Feeling: [Kiszenie-Guide](/de/blog/kiszenie-guide) — hier nur Verwertung, nicht der Ferment-Guide.",
          },
          {
            text: "Kraut dazugeben, mit wenig Wasser oder Brühe ansetzen, Lorbeer und Pfeffer; bei mittlerer Hitze 25–35 Minuten schmoren, bis weich aber nicht matschig.",
          },
          {
            text: "Zasmażka: Mehl in Butter hell anrösten, mit etwas Flüssigkeit vom Kraut glatt rühren, unterheben; kurz aufkochen und abschmecken.",
            tip: "Nicht zu dunkel rösten — sonst bitter. Klassiker-Teller mit [Kotlet schabowy](/de/rezepte/kotlet-schabowy).",
          },
          {
            text: "Heiß servieren zu Fleisch, [Rosół](/de/rezepte/rosol)-Sonntag oder Kartoffeln — Menü-Kontext: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
        ],
        seoTitle: "Kapusta zasmażana Rezept | Geschmortes Kraut | Alemniam",
        seoDescription:
          "Kapusta zasmażana — geschmortes Sauerkraut mit Mehlschwitze. Beilage zu Schabowy, bilingual.",
      },
      pl: {
        title: "Kapusta zasmażana",
        slug: "kapusta-zasmażana",
        excerpt:
          "Duszona kapusta kiszona z zasmażką — ciepły dodatek do schabowego i niedzielnego mięsa.",
        steps: [
          {
            text: "Odciśnij kapustę kiszoną (kwas według smaku zostaw lub krótko wypłucz), posiekaj. Cebulę zeszklij na tłuszczu.",
            tip: "Jakość kiszonki i ferment: [przewodnik kiszenia](/pl/blog/kiszenie-w-domu) — tu tylko wykorzystanie, nie owner fermentu.",
          },
          {
            text: "Dodaj kapustę, podlej odrobiną wody lub bulionu, liść laurowy i pieprz; duś 25–35 minut na średnim ogniu aż będzie miękka, nie rozgotowana.",
          },
          {
            text: "Zasmażka: zasmaż mąkę na maśle na jasno, rozprowadź płynem z kapusty, wlej; krótko zagotuj i dopraw.",
            tip: "Nie zasmażaj za ciemno — gorzknieje. Klasyka z [kotletem schabowym](/pl/rezepte/kotlet-schabowy).",
          },
          {
            text: "Podawaj gorącą do mięsa, niedzieli z [rosołem](/pl/rezepte/rosol) lub ziemniakami — kontekst: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
        ],
        seoTitle: "Kapusta zasmażana przepis | Alemniam",
        seoDescription:
          "Kapusta zasmażana — duszona kiszona z zasmażką. Dodatek do schabowego, dwujęzycznie.",
      },
    },
    ingredients: [
      {
        id: "kz-1",
        name: { de: "Sauerkraut", pl: "Kapusta kiszona" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen oder Supermarkt — Säure prüfen, nicht zu wässrig",
      },
      {
        id: "kz-2",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "große", pl: "duża" },
        group: "produce",
      },
      {
        id: "kz-3",
        name: { de: "Butter oder Schmalz", pl: "Masło lub smalec" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "kz-4",
        name: { de: "Mehl (Zasmażka)", pl: "Mąka (zasmażka)" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "kz-5",
        name: { de: "Butter für Zasmażka", pl: "Masło do zasmażki" },
        amount: 20,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "kz-6",
        name: { de: "Lorbeerblatt", pl: "Liść laurowy" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "kz-7",
        name: { de: "Pfeffer, Salz", pl: "Pieprz, sól" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "kz-8",
        name: {
          de: "Wasser oder leichte Brühe",
          pl: "Woda lub lekki bulion",
        },
        amount: 150,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
        storeHintDe: "Optional Rest von Rosół — nicht als Suppenrezept",
      },
    ],
    createdAt: "2026-07-20T21:05:00.000Z",
    updatedAt: "2026-07-20T21:05:00.000Z",
  },
];
