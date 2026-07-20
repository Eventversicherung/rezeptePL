import type { Recipe } from "@/types/content";

/**
 * Wave 10 Paket A — Flaki + Schab pieczony.
 * E merges into seed.ts — do not import from seed.ts until Integrator.
 */
export const seedRecipesWave10A: Recipe[] = [
  {
    id: "recipe-flaki",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=1600&q=80",
    prepMinutes: 40,
    cookMinutes: 120,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-bulion"],
    categoryIds: ["category-suppen"],
    relatedPostIds: [
      "post-polnische-suppen",
      "post-majeranek",
      "post-polenladen",
      "post-sonntagsessen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Flaki",
        slug: "flaki",
        excerpt:
          "Polnische Kuttelsuppe mit Majeranek — deftiger Klassiker, klar getrennt von Barszcz und Żurek.",
        steps: [
          {
            text: "Kutteln (vorbereitet gekauft oder gut gereinigt) in Streifen schneiden. In leicht gesalzenem Wasser 45–60 Minuten vorkochen, abgießen, mit klarem Wasser abspülen — so bleibt die Suppe mild statt streng.",
            tip: "Einkauf oft im [Polenladen](/de/blog/polenladen-einkaufen); fertig geputzte Rinderkutteln sparen Zeit.",
          },
          {
            text: "In einem großen Topf Zwiebel, Karotte, Sellerie und Lauch in etwas Fett anschwitzen. Paprika und etwas Tomatenmark kurz mitrösten, dann Brühe auffüllen.",
            tip: "Fond-Feeling wie bei [Rosół](/de/rezepte/rosol), aber Intent ist Kuttelsuppe — nicht klare Sonntagsbrühe.",
          },
          {
            text: "Kutteln, Lorbeer, Piment und reichlich [Majeranek](/de/blog/majeranek) zugeben. Sanft 60–90 Minuten köcheln, bis die Kutteln weich sind. Mit Salz, Pfeffer und ggf. etwas Paprikapulver abschmecken.",
          },
          {
            text: "Heiß mit Brot servieren. Überblick im Silo: [Polnische Suppen](/de/blog/polnische-suppen). Nicht mit [Barszcz](/de/rezepte/barszcz-czerwony), [Żurek](/de/rezepte/zurek) oder [Ogórkowa](/de/rezepte/ogorkowa) verwechseln — andere Primärzutaten, anderer Intent.",
          },
        ],
        seoTitle: "Flaki Rezept | Kuttelsuppe polnisch | Alemniam",
        seoDescription:
          "Flaki — polnische Kuttelsuppe mit Majeranek. Bilingual mit DE-Einkauf, klar getrennt von Barszcz und Żurek.",
      },
      pl: {
        title: "Flaki",
        slug: "flaki",
        excerpt:
          "Flaki po polsku z majerankiem — treściwy klasyk, jasno osobno od barszczu i żurku.",
        steps: [
          {
            text: "Flaki (kupione przygotowane lub dobrze oczyszczone) pokrój w paski. Podgotuj 45–60 minut w lekko osolonej wodzie, odcedź, spłucz — zupa zostanie łagodniejsza.",
            tip: "Zakupy często w [sklepie polskim](/pl/blog/sklep-polski-zakupy); gotowe flaki wołowe oszczędzają czas.",
          },
          {
            text: "Na dużym garnku zeszklij cebulę, marchew, seler i por. Krótko podsmaż paprykę i koncentrat pomidorowy, zalej bulionem.",
            tip: "Wyczucie wywaru jak przy [rosołe](/pl/rezepte/rosol), ale intent to flaki — nie klarowny rosół niedzielny.",
          },
          {
            text: "Dodaj flaki, liść laurowy, ziele angielskie i solidnie [majeranek](/pl/blog/majeranek-leksykon). Gotuj łagodnie 60–90 minut do miękkości. Dopraw solą, pieprzem, ewentualnie papryką.",
          },
          {
            text: "Podawaj gorące z chlebem. Przegląd silosu: [polskie zupy](/pl/blog/polskie-zupy). Nie mylić z [barszczem](/pl/rezepte/barszcz-czerwony), [żurkiem](/pl/rezepte/zurek) ani [ogórkową](/pl/rezepte/ogorkowa) — inne primary, inny intent.",
          },
        ],
        seoTitle: "Flaki przepis | Zupa flaczki | Alemniam",
        seoDescription:
          "Flaki — polska zupa z flaków z majerankiem. Dwujęzycznie z zakupami w DE, osobno od barszczu i żurku.",
      },
    },
    ingredients: [
      {
        id: "fl-1",
        name: { de: "Rinderkutteln (vorbereitet)", pl: "Flaki wołowe (przygotowane)" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Polenladen / Fleischtheke — oft schon geputzt und vorgekocht",
      },
      {
        id: "fl-2",
        name: { de: "Fleisch- oder Knochenbrühe", pl: "Bulion mięsny lub kostny" },
        amount: 2,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "fl-3",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "fl-4",
        name: { de: "Karotte", pl: "Marchew" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "fl-5",
        name: { de: "Sellerie / Suppengrün", pl: "Seler / włoszczyzna" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "fl-6",
        name: { de: "Tomatenmark", pl: "Koncentrat pomidorowy" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "fl-7",
        name: { de: "Paprikapulver (edelsüß)", pl: "Papryka słodka" },
        amount: 1.5,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
      },
      {
        id: "fl-8",
        name: { de: "Majoran getrocknet", pl: "Majeranek suszony" },
        amount: 2,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
        storeHintDe: "Polenladen oft aromatischer — siehe Majeranek-Lexikon",
      },
      {
        id: "fl-9",
        name: { de: "Lorbeerblatt", pl: "Liść laurowy" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "fl-10",
        name: { de: "Pimentkörner", pl: "Ziele angielskie" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "fl-11",
        name: { de: "Öl oder Schmalz", pl: "Olej lub smalec" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "fl-12",
        name: { de: "Salz, Pfeffer", pl: "Sól, pieprz" },
        amount: 1,
        unit: { de: "nach Bedarf", pl: "do smaku" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T23:00:00.000Z",
    updatedAt: "2026-07-20T23:00:00.000Z",
  },
  {
    id: "recipe-schab-pieczony",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?w=1600&q=80",
    prepMinutes: 20,
    cookMinutes: 90,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-majeranek",
      "post-dutch-oven",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Schab pieczony",
        slug: "schab-pieczony",
        excerpt:
          "Polnischer Ofenschweinebraten mit Majeranek — Sonntagsfleisch aus dem Ofen, nicht panierter Schabowy.",
        steps: [
          {
            text: "Schab (mit oder ohne Knochen) trocken tupfen, mit Salz, Pfeffer, Knoblauch und [Majeranek](/de/blog/majeranek) einreiben; optional dünn Senf. Mindestens 1 Stunde ruhen, besser über Nacht.",
            tip: "Das ist Ofenbraten — keine Panade. Panieren gehört zu [Kotlet schabowy](/de/rezepte/kotlet-schabowy).",
          },
          {
            text: "Ofen auf 180 °C Ober-/Unterhitze vorheizen. Fleisch in eine feste Form oder einen [Schmortopf](/de/blog/dutch-oven-kaufberatung) legen; etwas Wasser oder Brühe auf den Boden.",
          },
          {
            text: "Ca. 75–90 Minuten backen (je nach Stückgröße), zwischendurch mit Bratensaft begießen. Innenseite soll saftig bleiben — nicht austrocknen. Ruhezeit 10 Minuten vor dem Schneiden.",
            tip: "Rippen-Nachbar am gleichen Tag: [Żeberka pieczone](/de/rezepte/zeberka) — anderes Stück, gleiche Ofen-Logik.",
          },
          {
            text: "In Scheiben mit Kartoffeln und [Mizeria](/de/rezepte/mizeria) oder Salat servieren. Menü-Rahmen: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
        ],
        seoTitle: "Schab pieczony Rezept | Schweinebraten polnisch Ofen | Alemniam",
        seoDescription:
          "Schab pieczony — polnischer Ofenschweinebraten mit Majeranek. Klar getrennt vom panierten Kotlet schabowy.",
      },
      pl: {
        title: "Schab pieczony",
        slug: "schab-pieczony",
        excerpt:
          "Schab z piekarnika z majerankiem — niedzielne mięso z pieca, nie panierowany schabowy.",
        steps: [
          {
            text: "Schab (z kością lub bez) osusz, natrzyj solą, pieprzem, czosnkiem i [majerankiem](/pl/blog/majeranek-leksykon); opcjonalnie cienko musztarda. Odczekaj minimum 1 godzinę, lepiej na noc.",
            tip: "To pieczeń z pieca — bez panierki. Panierowanie należy do [kotleta schabowego](/pl/rezepte/kotlet-schabowy).",
          },
          {
            text: "Nagrzej piekarnik do 180 °C. Ułóż mięso w solidnym naczyniu lub [garnku do duszenia](/pl/blog/garnek-do-duszenia); odrobinę wody lub bulionu na dno.",
          },
          {
            text: "Piecz 75–90 minut (zależnie od kawałka), polewaj sokiem. Środek ma zostać soczysty. Odstaw 10 minut przed krojeniem.",
            tip: "Sąsiad żeber tego samego dnia: [żeberka pieczone](/pl/rezepte/zeberka) — inny kawałek, ta sama logika pieca.",
          },
          {
            text: "Kraj w plastry, podawaj z ziemniakami i [mizerią](/pl/rezepte/mizeria) lub surówką. Ramy menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
        ],
        seoTitle: "Schab pieczony przepis | Pieczeń wieprzowa | Alemniam",
        seoDescription:
          "Schab pieczony — pieczeń z piekarnika z majerankiem. Wyraźnie osobno od panierowanego kotleta schabowego.",
      },
    },
    ingredients: [
      {
        id: "sp-1",
        name: {
          de: "Schweinenacken oder -kamm (Schab), mit/ohne Knochen",
          pl: "Schab wieprzowy z kością lub bez",
        },
        amount: 1200,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Fleischtheke — gleichmäßiges Stück, etwas Fett für Saft",
      },
      {
        id: "sp-2",
        name: { de: "Knoblauch", pl: "Czosnek" },
        amount: 4,
        unit: { de: "Zehen", pl: "ząbki" },
        group: "produce",
      },
      {
        id: "sp-3",
        name: { de: "Majoran getrocknet", pl: "Majeranek suszony" },
        amount: 2,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
        storeHintDe: "Polenladen oft aromatischer",
      },
      {
        id: "sp-4",
        name: { de: "Senf (mittelscharf)", pl: "Musztarda (średnio ostra)" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "sp-5",
        name: { de: "Öl", pl: "Olej" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "sp-6",
        name: { de: "Salz", pl: "Sól" },
        amount: 1.5,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
      },
      {
        id: "sp-7",
        name: { de: "Pfeffer", pl: "Pieprz" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "sp-8",
        name: {
          de: "Wasser oder leichte Brühe (für die Form)",
          pl: "Woda lub lekki bulion (do naczynia)",
        },
        amount: 150,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T23:05:00.000Z",
    updatedAt: "2026-07-20T23:05:00.000Z",
  },
];
