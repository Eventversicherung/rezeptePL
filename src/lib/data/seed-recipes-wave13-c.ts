import type { Recipe } from "@/types/content";

/**
 * Wave 13 Paket C — Hefezopf + Aufschnitt.
 * - recipe-chalka — geflochtener Hefezopf/Laib (≠ Babka-Gugelhupf ≠ Pączki ≠ Racuchy)
 * - recipe-pasztet — Haus-Pastete Geflügelleber (≠ Kaszanka ≠ Kotlet mielony)
 *
 * Integrator E: merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave13C: Recipe[] = [
  {
    id: "recipe-chalka",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1629321962567-e15cd77bb5ec?w=1600&q=80",
    prepMinutes: 40,
    cookMinutes: 35,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc", "occasion-niedziela"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch"],
    relatedPostIds: [
      "post-wielkanoc",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Chałka",
        slug: "chalka",
        excerpt:
          "Geflochtener helles Hefebrot mit optionalem Sesam — Laib/Zopf, klar ≠ Babka-Gugelhupf und ≠ Pączki.",
        steps: [
          {
            text: "Hefe in lauwarmer Milch mit 1 TL Zucker auflösen, 10 Minuten gehen lassen, bis sie schäumt.",
            tip: "Milch nur lauwarm — zu heiß tötet Hefe. Hefe-Kontext: [Makowiec-Technik](/de/blog/makowiec-technik). Gugelhupf-Form ist ein anderes Gericht: [Babka](/de/rezepte/babka).",
          },
          {
            text: "Mit Mehl, restlichem Zucker, Eiern, weicher Butter, Prise Salz zu glattem, elastischem Teig kneten. Abgedeckt gehen lassen, bis verdoppelt (ca. 60–90 Min).",
            tip: "Kein Frittier-Intent — [Pączki](/de/rezepte/paczki) bleiben eigene Cook-URL. Einkauf: [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Teig in 3 (oder 4) gleich schwere Stränge teilen, zu Rollen formen und zu einem Zopf flechten. Enden unterschieben, auf ein Backblech mit Backpapier setzen.",
          },
          {
            text: "Abgedeckt 20–30 Minuten nachgehen lassen. Mit verquirltem Ei bestreichen, optional Sesam streuen.",
            tip: "Zopf sichtbar lassen — keine Gugelhupf-Form wie bei [Babka](/de/rezepte/babka). Apfel-Pfannkuchen bleiben [Racuchy](/de/rezepte/racuchy-jablka).",
          },
          {
            text: "Bei 180 °C (Umluft etwas niedriger) 30–35 Minuten goldbraun backen. Abkühlen auf Gitter. Warm oder lauwarm in Scheiben servieren.",
            tip: "Am Ostertisch [Wielkanoc Speiseplan](/de/blog/wielkanoc-speiseplan) bleibt Menü-Artikel. Ersatzhinweise: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
        ],
        seoTitle: "Chałka Rezept | Polnisches Hefezopf-Brot | Alemniam",
        seoDescription:
          "Chałka backen: geflochtener Hefezopf mit Sesam. Bilingual, Ostern/Sonntag, klar ≠ Babka und Pączki.",
      },
      pl: {
        title: "Chałka",
        slug: "chalka",
        excerpt:
          "Pleciony jasny chleb drożdżowy z opcjonalnym sezamem — bochenek/warkocz, jasno ≠ babka z formy i ≠ pączki.",
        steps: [
          {
            text: "Rozpuść drożdże w letnim mleku z 1 łyżeczką cukru, odstaw 10 min aż spienieją.",
            tip: "Mleko tylko letnie — za gorące zabija drożdże. Wyczucie drożdży: [technika makowca](/pl/blog/makowiec-technika). Forma babkowa to inny fokus: [babka](/pl/rezepte/babka).",
          },
          {
            text: "Zagnieć z mąką, resztą cukru, jajkami, miękkim masłem i szczyptą soli na gładkie, elastyczne ciasto. Przykryte odstaw aż podwoi objętość (ok. 60–90 min).",
            tip: "Bez smażenia w tłuszczu — [pączki](/pl/rezepte/paczki) zostają osobnym cook-URL. Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Podziel ciasto na 3 (lub 4) równe wałki i splot w warkocz. Końce spój, ułóż na blasze z papierem.",
          },
          {
            text: "Przykryte odczekaj 20–30 min drugiego wyrastania. Posmaruj roztrzepanym jajkiem, opcjonalnie posyp sezamem.",
            tip: "Zostaw widoczny warkocz — nie forma babkowa jak [babka](/pl/rezepte/babka). Racuchy jabłkowe: [racuchy](/pl/rezepte/racuchy-jablka).",
          },
          {
            text: "Piecz w 180 °C (termoobieg nieco niżej) 30–35 min na złoto. Ostudź na kratce. Kroić ciepłe lub letnie.",
            tip: "Przy stole [menu wielkanocne](/pl/blog/menu-wielkanocne) zostaje artykułem o okazji. Zamienniki: [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
        ],
        seoTitle: "Chałka przepis | Polski chleb drożdżowy warkocz | Alemniam",
        seoDescription:
          "Chałka w domu: pleciony chleb drożdżowy z sezamem. Dwujęzycznie, na Wielkanoc/niedzielę, jasno ≠ babka i pączki.",
      },
    },
    ingredients: [
      {
        id: "ch-1",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "ch-2",
        name: { de: "Milch", pl: "Mleko" },
        amount: 200,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "ch-3",
        name: { de: "Frische Hefe oder Trockenhefe", pl: "Drożdże świeże lub suszone" },
        amount: 25,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Trockenhefe: Packungsangabe umrechnen",
        substitute: {
          de: "7–8 g Trockenhefe statt 25 g frisch",
          pl: "7–8 g drożdży suchych zamiast 25 g świeżych",
        },
      },
      {
        id: "ch-4",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "ch-5",
        name: { de: "Eier (Teig)", pl: "Jajka (ciasto)" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "ch-6",
        name: { de: "Weiche Butter", pl: "Miękkie masło" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "ch-7",
        name: { de: "Prise Salz", pl: "Szczypta soli" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "ch-8",
        name: { de: "Ei zum Bestreichen", pl: "Jajko do smarowania" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "ch-9",
        name: {
          de: "Sesam zum Bestreuen (optional)",
          pl: "Sezam do posypania (opcjonalnie)",
        },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
        storeHintDe: "Oft im Shopping-Aisle / Polenladen",
        substitute: {
          de: "Weglassen oder Mohn sparsam — ehrlich benennen",
          pl: "Pominąć lub mak oszczędnie — nazwać uczciwie",
        },
      },
    ],
    createdAt: "2026-07-21T11:00:00.000Z",
    updatedAt: "2026-07-21T11:00:00.000Z",
  },
  {
    id: "recipe-pasztet",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1605992728160-8d119bf2b5db?w=1600&q=80",
    prepMinutes: 35,
    cookMinutes: 70,
    servings: 10,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc", "occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-wielkanoc",
      "post-kielbasa-arten",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Pasztet drobiowy",
        slug: "pasztet",
        excerpt:
          "Haus-Pastete aus Geflügelleber, gebacken und angeschnitten — Fest-/Aufschnitt-Klassiker, klar ≠ Kaszanka und ≠ panierter Hackbraten.",
        steps: [
          {
            text: "Geflügelleber waschen, Sehnen entfernen. Zwiebel und Karotte grob würfeln; in Butter glasig dünsten, Leber kurz mitbraten (nicht durchgaren), abkühlen.",
            tip: "Das ist Pastete/Terrine, keine Blutwurst — [Kaszanka](/de/rezepte/kaszanka) bleibt eigener Cook. Aufschnitt-Kontext [Kiełbasa-Arten](/de/blog/kielbasa-arten).",
          },
          {
            text: "Leber-Gemüse-Masse mit Eiern, eingeweichtem Brötchen (ausgedrückt), Majoran, Salz und Pfeffer fein pürieren, bis streichfähig-fein.",
          },
          {
            text: "Kastenform ausfetten und mit Backpapier auslegen. Masse einfüllen, glatt streichen, optional mit Butterflocken belegen.",
            tip: "Keine Panade-Bulette — [Kotlet mielony](/de/rezepte/kotlet-mielony) ist anderer Intent. Einkauf: [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Im Wasserbad bei 170 °C ca. 60–70 Minuten backen, bis die Mitte fest ist (Stäbchenprobe). Abkühlen, dann kalt stellen (idealerweise über Nacht).",
          },
          {
            text: "In Scheiben schneiden, mit Brot, Meerrettich oder Senf servieren — kalt als Aufschnitt oder lauwarm.",
            tip: "Menüplatz: [Sonntagsessen](/de/blog/sonntagsessen-polnisch) oder [Wielkanoc](/de/blog/wielkanoc-speiseplan) — Speiseplan bleibt Menü-Artikel.",
          },
        ],
        seoTitle: "Pasztet Rezept | Polnische Pastete Geflügelleber | Alemniam",
        seoDescription:
          "Pasztet drobiowy: Haus-Pastete aus Geflügelleber. Bilingual, Festaufschnitt, klar ≠ Kaszanka und Mielony.",
      },
      pl: {
        title: "Pasztet drobiowy",
        slug: "pasztet",
        excerpt:
          "Domowy pasztet z wątróbki drobiowej, pieczony i pokrojony — klasyk świąteczny/wędlina, jasno ≠ kaszanka i ≠ panierowany kotlet mielony.",
        steps: [
          {
            text: "Wątróbkę opłucz, usuń żyłki. Cebulę i marchew pokrój grubo; zeszklij na maśle, dodaj wątróbkę krótko (nie doprowadzaj do pełnego ugotowania), ostudź.",
            tip: "To pasztet/terrina, nie kaszanka — [kaszanka](/pl/rezepte/kaszanka) zostaje osobnym cook. Kontekst wędlin [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy).",
          },
          {
            text: "Zmiksuj masę z jajkami, namoczoną i odciśniętą bułką, majerankiem, solą i pieprzem na gładko, do smarowania.",
          },
          {
            text: "Formę keksową natłuść i wyłóż papierem. Włóż masę, wygładź, opcjonalnie połóż płatki masła.",
            tip: "Bez panierki jak [kotlet mielony](/pl/rezepte/kotlet-mielony). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Piecz w kąpieli wodnej w 170 °C ok. 60–70 min, aż środek będzie zwarty (patyczek). Ostudź, potem schłodź (najlepiej przez noc).",
          },
          {
            text: "Krój w plasterki; podawaj z chlebem, chrzanem lub musztardą — zimny jako wędlina albo letni.",
            tip: "Miejsce w menu: [obiad niedzielny](/pl/blog/obiad-niedzielny) lub [menu wielkanocne](/pl/blog/menu-wielkanocne) — plan zostaje artykułem o okazji.",
          },
        ],
        seoTitle: "Pasztet przepis | Pasztet drobiowy domowy | Alemniam",
        seoDescription:
          "Pasztet drobiowy: domowa pasteta z wątróbki. Dwujęzycznie, na święta, jasno ≠ kaszanka i mielony.",
      },
    },
    ingredients: [
      {
        id: "pa-1",
        name: { de: "Geflügelleber", pl: "Wątróbka drobiowa" },
        amount: 600,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Frisch oder TK — Farbe und Geruch prüfen",
      },
      {
        id: "pa-2",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "pa-3",
        name: { de: "Karotte", pl: "Marchew" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "pa-4",
        name: { de: "Butter", pl: "Masło" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "pa-5",
        name: { de: "Eier", pl: "Jajka" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pa-6",
        name: { de: "Altes Brötchen (eingeweicht)", pl: "Czerstwa bułka (namoczona)" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "pantry",
        substitute: {
          de: "2 Scheiben Toast — gut ausdrücken",
          pl: "2 kromki tosta — dobrze odcisnąć",
        },
      },
      {
        id: "pa-7",
        name: { de: "Majeranek", pl: "Majeranek" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
        storeHintDe: "Oft im Polenladen aromatischer",
      },
      {
        id: "pa-8",
        name: {
          de: "Salz, Pfeffer",
          pl: "Sól, pieprz",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
      {
        id: "pa-9",
        name: {
          de: "Meerrettich oder Senf zum Servieren",
          pl: "Chrzan lub musztarda do podania",
        },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
        storeHintDe: "Polenladen / Glasware",
      },
    ],
    createdAt: "2026-07-21T11:00:00.000Z",
    updatedAt: "2026-07-21T11:00:00.000Z",
  },
];
