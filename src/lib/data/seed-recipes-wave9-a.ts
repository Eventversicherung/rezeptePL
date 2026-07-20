import type { Recipe } from "@/types/content";

/**
 * Wave 9 Paket A — Fleisch / Sonntag (Żeberka, Rolada śląska).
 * E merges into seed.ts — do not import from seed.ts until Integrator.
 */
export const seedRecipesWave9A: Recipe[] = [
  {
    id: "recipe-zeberka",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=1600&q=80",
    prepMinutes: 25,
    cookMinutes: 90,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-majeranek",
      "post-polenladen",
      "post-dutch-oven",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Żeberka pieczone",
        slug: "zeberka",
        excerpt:
          "Ofenrippchen polnisch — Majeranek-Senf-Marinade, knusprig außen, saftig innen.",
        steps: [
          {
            text: "Rippen waschen, trocken tupfen, zwischen den Knochen in Portionen teilen. Mit Salz, Pfeffer, Senf und [Majeranek](/de/blog/majeranek) einreiben; optional Knoblauch und etwas Öl. Mindestens 1 Stunde marinieren, besser über Nacht.",
            tip: "Majoran früh in die Marinade — er braucht Zeit. Dosierung und Kauf: Majeranek-Lexikon.",
          },
          {
            text: "Ofen auf 180 °C Ober-/Unterhitze vorheizen. Rippen in eine Form oder auf ein Gitter mit Auffangblech legen; etwas Wasser oder Brühe in die Form, damit nichts anbrennt.",
          },
          {
            text: "Ca. 75–90 Minuten backen, zwischendurch wenden. Gegen Ende Hitze erhöhen oder Grill kurz nutzen, bis die Kanten knusprig sind — Innenseite soll saftig bleiben, nicht trocken.",
            tip: "Kein Eintopf: Żeberka gehören in den Ofen, nicht in den [Gulasz](/de/rezepte/gulasz-wieprzowy)-Topf.",
          },
          {
            text: "Ruhen lassen, mit Kartoffeln oder Kraut servieren. Menü-Rahmen: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer denselben Tag paniert, bleibt beim [Kotlet schabowy](/de/rezepte/kotlet-schabowy) als Nachbar — nicht als Ersatz.",
          },
        ],
        seoTitle: "Żeberka pieczone Rezept | Ofenrippchen polnisch | Alemniam",
        seoDescription:
          "Żeberka pieczone — polnische Ofenrippchen mit Majeranek und Senf. Bilingual mit DE-Einkauf und Sonntags-Kontext.",
      },
      pl: {
        title: "Żeberka pieczone",
        slug: "zeberka",
        excerpt:
          "Żeberka z piekarnika — marynata z majerankiem i musztardą, chrupiące na zewnątrz.",
        steps: [
          {
            text: "Żebra umyj, osusz, podziel między kośćmi. Natrzyj solą, pieprzem, musztardą i [majerankiem](/pl/blog/majeranek-leksykon); opcjonalnie czosnek i olej. Marynuj minimum 1 godzinę, lepiej na noc.",
            tip: "Majeranek wcześnie do marynaty — potrzebuje czasu. Dawka i zakup: leksykon majeranku.",
          },
          {
            text: "Nagrzej piekarnik do 180 °C. Ułóż żebra w naczyniu lub na ruszcie z blachą; odrobinę wody lub bulionu na dno, żeby nie przypalić.",
          },
          {
            text: "Piecz 75–90 minut, przewracaj. Pod koniec podnieś temperaturę lub użyj grilla, aż brzegi będą chrupiące — środek ma zostać soczysty.",
            tip: "To nie gulasz: żeberka idą do pieca, nie do garnka na [gulasz](/pl/rezepte/gulasz-wieprzowy).",
          },
          {
            text: "Odstaw chwilę, podawaj z ziemniakami lub kapustą. Ramy menu: [obiad niedzielny](/pl/blog/obiad-niedzielny). Tego samego dnia panierujesz — zostań przy [kotlecie schabowym](/pl/rezepte/kotlet-schabowy) jako sąsiedzie, nie zamienniku.",
          },
        ],
        seoTitle: "Żeberka pieczone przepis | Alemniam",
        seoDescription:
          "Żeberka pieczone z majerankiem i musztardą. Dwujęzycznie z zakupami w DE i kontekstem niedzieli.",
      },
    },
    ingredients: [
      {
        id: "zb-1",
        name: { de: "Schweinerippchen", pl: "Żeberka wieprzowe" },
        amount: 1200,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Fleischtheke — gleichmäßige Stücke, nicht zu mager",
      },
      {
        id: "zb-2",
        name: { de: "Senf (mittelscharf)", pl: "Musztarda (średnio ostra)" },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "zb-3",
        name: { de: "Majoran getrocknet", pl: "Majeranek suszony" },
        amount: 2,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
        storeHintDe: "Polenladen oft aromatischer — siehe Majeranek-Lexikon",
      },
      {
        id: "zb-4",
        name: { de: "Knoblauch", pl: "Czosnek" },
        amount: 3,
        unit: { de: "Zehen", pl: "ząbki" },
        group: "produce",
      },
      {
        id: "zb-5",
        name: { de: "Öl", pl: "Olej" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "zb-6",
        name: { de: "Salz", pl: "Sól" },
        amount: 1.5,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
      },
      {
        id: "zb-7",
        name: { de: "Pfeffer", pl: "Pieprz" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "zb-8",
        name: {
          de: "Wasser oder leichte Brühe (für die Form)",
          pl: "Woda lub lekki bulion (do naczynia)",
        },
        amount: 150,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T22:00:00.000Z",
    updatedAt: "2026-07-20T22:00:00.000Z",
  },
  {
    id: "recipe-rolada-slaska",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1432139509613-5c4255815697?w=1600&q=80",
    prepMinutes: 45,
    cookMinutes: 100,
    servings: 4,
    regionIds: ["region-slask"],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-schmoren", "technique-fuellen"],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-dutch-oven",
      "post-majeranek",
      "post-kasza",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Rolada śląska",
        slug: "rolada-slaska",
        excerpt:
          "Geschmorte Fleischroulade schlesischer Hausmannskost — mit Kluski und klarer Soße.",
        steps: [
          {
            text: "Fleischscheiben (Rind oder Schwein) flach klopfen, salzen, pfeffern, dünn mit Senf bestreichen. Füllung: Speckstreifen und fein gehackte Zwiebel (optional etwas Majoran) — fest rollen und mit Garn oder Zahnstocher fixieren.",
            tip: "Andere Logik als [Zrazy zawijane](/de/rezepte/zrazy): hier keine Gurken-Primärfüllung; Intent ist schlesische Sonntags-Roulade mit Kluski-Pairing.",
          },
          {
            text: "Rollen rundum in heißem Fett anbraten, bis sie Farbe haben. Zwiebelreste und Lorbeer in denselben Topf — ideal ein [Schmortopf / Dutch Oven](/de/blog/dutch-oven-kaufberatung).",
          },
          {
            text: "Mit Brühe ablöschen, zugedeckt 80–100 Minuten schmoren, bis das Fleisch gabelweich ist. Soße abschmecken; bei Bedarf leicht binden.",
            tip: "[Majeranek](/de/blog/majeranek) sparsam in die Soße — zu viel wird bitter.",
          },
          {
            text: "In Scheiben schneiden, mit Soße und [Kluski śląskie](/de/rezepte/kluski-slaskie) servieren. Menü: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
        ],
        seoTitle: "Rolada śląska Rezept | Schlesische Roulade | Alemniam",
        seoDescription:
          "Rolada śląska — geschmorte Fleischroulade mit Speck-Zwiebel-Füllung. Bilingual, klar getrennt von Zrazy.",
      },
      pl: {
        title: "Rolada śląska",
        slug: "rolada-slaska",
        excerpt:
          "Duszona rolada mięsna kuchni śląskiej — z kluskami i jasnym sosem.",
        steps: [
          {
            text: "Plastry mięsa (wołowina lub wieprzowina) rozbij, posól, popieprz, posmaruj musztardą. Farsz: paski boczku i drobno siekana cebula (opcjonalnie majeranek) — zwiń szczelnie i zepnij.",
            tip: "Inna logika niż [zrazy zawijane](/pl/rezepte/zrazy): tu nie farsz z ogórkiem jako primary; intent to śląska rolada niedzielna z kluskami.",
          },
          {
            text: "Obsmaż rolady ze wszystkich stron. Resztki cebuli i liść laurowy do tego samego garnka — idealnie [dutch oven / garnek do duszenia](/pl/blog/garnek-do-duszenia).",
          },
          {
            text: "Zalej bulionem, duś pod przykryciem 80–100 minut do miękkości. Dopraw sos; ewentualnie lekko zagęść.",
            tip: "[Majeranek](/pl/blog/majeranek-leksykon) oszczędnie do sosu — za dużo gorzknieje.",
          },
          {
            text: "Krój w plastry, podawaj z sosem i [klusami śląskimi](/pl/rezepte/kluski-slaskie). Menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
        ],
        seoTitle: "Rolada śląska przepis | Alemniam",
        seoDescription:
          "Rolada śląska — duszona rolada z farszem boczek-cebula. Dwujęzycznie, wyraźnie osobno od zrazów.",
      },
    },
    ingredients: [
      {
        id: "rl-1",
        name: {
          de: "Fleischscheiben (Rind oder Schwein)",
          pl: "Plastry mięsa (wołowina lub wieprzowina)",
        },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Dünn geschnittene Plätzchen zum Rollen — Metzger fragen",
      },
      {
        id: "rl-2",
        name: { de: "Senf", pl: "Musztarda" },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "rl-3",
        name: { de: "Speck", pl: "Boczek" },
        amount: 120,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "rl-4",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "rl-5",
        name: { de: "Brühe", pl: "Bulion" },
        amount: 500,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
      {
        id: "rl-6",
        name: { de: "Majoran", pl: "Majeranek" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "rl-7",
        name: { de: "Lorbeerblatt", pl: "Liść laurowy" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "rl-8",
        name: { de: "Öl oder Schmalz zum Anbraten", pl: "Olej lub smalec do obsmażenia" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "rl-9",
        name: { de: "Salz, Pfeffer", pl: "Sól, pieprz" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T22:05:00.000Z",
    updatedAt: "2026-07-20T22:05:00.000Z",
  },
];
