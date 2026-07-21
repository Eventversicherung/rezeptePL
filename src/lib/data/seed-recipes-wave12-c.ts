import type { Recipe } from "@/types/content";

/**
 * Wave 12 Paket C — Ostern + Sonntags-Beilage.
 * - recipe-mazurek — flacher Osterkuchen mit Nussbelag (≠ Babka/Sernik/Makowiec/Piernik)
 * - recipe-buraczki — warme Rote-Bete-Beilage (≠ Botwinka/Barszcz/Sałatka)
 *
 * Integrator E: merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave12C: Recipe[] = [
  {
    id: "recipe-mazurek",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1776268927285-21968dfe5fcb?w=1600&q=80",
    prepMinutes: 35,
    cookMinutes: 40,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch"],
    relatedPostIds: [
      "post-wielkanoc",
      "post-makowiec-technik",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Mazurek orzechowy",
        slug: "mazurek",
        excerpt:
          "Flacher Osterkuchen auf Mürbeteig mit Nuss-Honig-Belag — eine klare Hausvariante, festlich und ≠ Babka, Sernik oder Makowiec.",
        steps: [
          {
            text: "Für den Boden: Mehl, kalte Butter, Zucker, Ei und Prise Salz zu einem glatten Mürbeteig verkneten. Zu einer Scheibe formen, in Folie 30 Minuten kühlen.",
            tip: "Kurzer, flacher Teig — kein Hefegugelhupf wie [Babka](/de/rezepte/babka). Ostern-Rahmen: [Wielkanoc Speiseplan](/de/blog/wielkanoc-speiseplan).",
          },
          {
            text: "Backblech oder flache Form (ca. 30×40 cm) fetten, Teig dünn ausrollen (ca. 5 mm), einlegen, Ränder hochdrücken. Mit Gabel einstechen.",
            tip: "Kein Mohnwickel — das bleibt [Makowiec](/de/rezepte/makowiec). Käsekuchen-Linie: [Sernik](/de/rezepte/sernik).",
          },
          {
            text: "Boden bei 180 °C (Umluft etwas niedriger) 12–15 Minuten vorbacken, bis er matt und leicht golden ist. Herausnehmen.",
          },
          {
            text: "Belag: gehackte Nüsse (Walnuss, Haselnuss, Mandel nach Hausbrauch) mit Butter, Honig oder Zucker und Prise Salz in der Pfanne kurz rösten/bindig machen. Gleichmäßig auf dem heißen Boden verteilen.",
            tip: "Nüsse und Honig oft im [Polenladen](/de/blog/polenladen-einkaufen). Hefe-Feeling nur descriptiv: [Makowiec-Technik](/de/blog/makowiec-technik) — Owner bleibt Makowiec.",
          },
          {
            text: "Weitere 15–20 Minuten backen, bis der Belag goldbraun und gesetzt ist. Abkühlen, in Rauten schneiden. Optional mit etwas Puderzucker oder getrockneten Früchten garnieren.",
            tip: "Am Ostertisch descriptiv planen; Primary bleibt dieses Rezept — Speiseplan-Owner: [Wielkanoc](/de/blog/wielkanoc-speiseplan).",
          },
        ],
        seoTitle: "Mazurek Rezept | Osterkuchen polnisch orzechowy | Alemniam",
        seoDescription:
          "Mazurek orzechowy: flacher Mürbeteig mit Nussbelag. Bilingual, Wielkanoc-tauglich, klar ≠ Babka, Sernik, Makowiec.",
      },
      pl: {
        title: "Mazurek orzechowy",
        slug: "mazurek",
        excerpt:
          "Płaski mazurek na kruchym spodzie z orzechowo-miodowym wierzchem — jedna jasna wersja domowa, świątecznie i ≠ babka, sernik ani makowiec.",
        steps: [
          {
            text: "Spód: mąkę, zimne masło, cukier, jajko i szczyptę soli zagnieć na gładkie kruche ciasto. Uformuj placek, owiń folią, chłodź 30 minut.",
            tip: "Krótki, płaski spód — nie drożdżowa [babka](/pl/rezepte/babka). Rama świąt: [menu wielkanocne](/pl/blog/menu-wielkanocne).",
          },
          {
            text: "Blachę lub płaską formę (ok. 30×40 cm) natłuść, rozwałkuj ciasto cienko (ok. 5 mm), ułóż, brzegi unieś. Nakłuj widelcem.",
            tip: "Bez makowej rolady — to zostaje [makowiec](/pl/rezepte/makowiec). Linia sernika: [sernik](/pl/rezepte/sernik).",
          },
          {
            text: "Podpiecz spód w 180 °C (termoobieg nieco niżej) 12–15 minut, aż będzie matowy i lekko złoty. Wyjmij.",
          },
          {
            text: "Wierzch: posiekane orzechy (włoskie, laskowe, migdały wg domu) z masłem, miodem lub cukrem i szczyptą soli krótko na patelni zwiąż. Rozprowadź równomiernie na gorącym spodzie.",
            tip: "Orzechy i miód często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Drożdże opisowo: [technika makowca](/pl/blog/makowiec-technika) — owner zostaje makowiec.",
          },
          {
            text: "Piecz kolejne 15–20 minut, aż wierzch będzie złoty i związany. Ostudź, pokrój w romby. Opcjonalnie cukier puder lub suszone owoce.",
            tip: "Przy stole opisowo w menu; primary zostaje ten przepis — owner planu: [menu wielkanocne](/pl/blog/menu-wielkanocne).",
          },
        ],
        seoTitle: "Mazurek przepis | Mazurek orzechowy wielkanocny | Alemniam",
        seoDescription:
          "Mazurek orzechowy: kruche ciasto z orzechowym wierzchem. Dwujęzycznie, na Wielkanoc, jasno ≠ babka, sernik, makowiec.",
      },
    },
    ingredients: [
      {
        id: "mz-1",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "mz-2",
        name: { de: "Kalte Butter", pl: "Zimne masło" },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "mz-3",
        name: { de: "Zucker (Teig)", pl: "Cukier (ciasto)" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "mz-4",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "mz-5",
        name: { de: "Prise Salz", pl: "Szczypta soli" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "mz-6",
        name: {
          de: "Gemischte Nüsse (Walnuss, Haselnuss, Mandel)",
          pl: "Mieszanka orzechów (włoskie, laskowe, migdały)",
        },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Polenladen / Nussregal — frisch riechen",
        substitute: {
          de: "Nur eine Nusssorte — ehrlich benennen",
          pl: "Jeden rodzaj orzechów — nazwać uczciwie",
        },
      },
      {
        id: "mz-7",
        name: { de: "Butter (Belag)", pl: "Masło (wierzch)" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "mz-8",
        name: { de: "Honig oder Zucker (Belag)", pl: "Miód lub cukier (wierzch)" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Honig oft im Polenladen aromatischer",
      },
      {
        id: "mz-9",
        name: {
          de: "Getrocknete Früchte zum Garnieren (optional)",
          pl: "Suszone owoce do dekoracji (opcjonalnie)",
        },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        substitute: {
          de: "Weglassen — Belag reicht",
          pl: "Pominąć — wierzch wystarczy",
        },
      },
    ],
    createdAt: "2026-07-21T10:00:00.000Z",
    updatedAt: "2026-07-21T10:00:00.000Z",
  },
  {
    id: "recipe-buraczki",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1764314555345-2691cf16517b?w=1600&q=80",
    prepMinutes: 20,
    cookMinutes: 50,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela", "occasion-wielkanoc"],
    techniqueIds: [],
    categoryIds: ["category-vegetarisch", "category-schnell"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-panieren",
      "post-smietana-schmand",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Buraczki",
        slug: "buraczki",
        excerpt:
          "Warme geraspelte Rote-Bete-Beilage mit Apfel und Meerrettich — Sonntagsteller mit Schabowy, klar ≠ Botwinka-Suppe und ≠ Barszcz.",
        steps: [
          {
            text: "Rote Bete waschen, ungeschält in Salzwasser weich kochen (oder vorgekocht nutzen). Abkühlen, schälen, grob raspeln oder in feine Streifen schneiden.",
            tip: "Das ist eine Beilage, keine Suppe — [Botwinka](/de/rezepte/botwinka) und [Barszcz](/de/rezepte/barszcz-czerwony) bleiben eigene Cook-Primaries.",
          },
          {
            text: "Zwiebel fein würfeln, in Butter oder Öl glasig dünsten. Bete dazugeben, mit wenig Wasser oder Brühe und Prise Zucker 8–10 Minuten warm ziehen.",
          },
          {
            text: "Sauren Apfel raspeln, unterheben. Mit Salz, Pfeffer und geriebenem Meerrettich abschmecken — säuerlich-scharf, nicht wässrig.",
            tip: "Meerrettich und Bete oft im [Polenladen](/de/blog/polenladen-einkaufen). Śmietana separat: [Śmietana/Schmand](/de/blog/smietana-schmand).",
          },
          {
            text: "Optional 1 EL Essig oder Zitronensaft für Säure. Kurz erhitzen, nicht zu Brei kochen. Heiß oder lauwarm servieren.",
            tip: "Klassisch zu [Kotlet schabowy](/de/rezepte/kotlet-schabowy); Panier-Feeling: [Panieren-Guide](/de/blog/panieren-schabowy). Menü: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Nicht mit Mayo-Festsalat verwechseln: [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) ist kalt und gemischt — hier trägt nur Bete den Teller.",
          },
        ],
        seoTitle: "Buraczki Rezept | Rote-Bete-Beilage polnisch | Alemniam",
        seoDescription:
          "Buraczki — warme Rote Bete mit Apfel und Meerrettich. Bilingual, Sonntagsbeilage, klar ≠ Botwinka und Barszcz.",
      },
      pl: {
        title: "Buraczki",
        slug: "buraczki",
        excerpt:
          "Ciepły dodatek z tartych buraków z jabłkiem i chrzanem — do schabowego w niedzielę, jasno ≠ botwinka-zupa i ≠ barszcz.",
        steps: [
          {
            text: "Buraki umyj, ugotuj w skórce w osolonej wodzie (lub użyj gotowanych). Ostudź, obierz, zetrzyj grubo lub pokrój w cienkie paski.",
            tip: "To dodatek, nie zupa — [botwinka](/pl/rezepte/botwinka) i [barszcz](/pl/rezepte/barszcz-czerwony) zostają osobnymi cook-primary.",
          },
          {
            text: "Cebulę drobno pokrój, zeszklij na maśle lub oleju. Dodaj buraki, odrobinę wody lub bulionu i szczyptę cukru; duś 8–10 minut na ciepło.",
          },
          {
            text: "Zetrzyj kwaśne jabłko, wmieszaj. Dopraw solą, pieprzem i startym chrzanem — kwaśno-ostro, nie wodniście.",
            tip: "Chrzan i buraki często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Śmietana osobno: [śmietana/schmand](/pl/blog/smietana-czy-schmand).",
          },
          {
            text: "Opcjonalnie 1 łyżka octu lub soku z cytryny. Podgrzej krótko, nie gotuj na papkę. Podawaj gorące lub letnie.",
            tip: "Klasycznie do [kotleta schabowego](/pl/rezepte/kotlet-schabowy); panierka: [poradnik panierowania](/pl/blog/panierowanie-kotlet). Menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Nie mylić z majonezową sałatką: [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa) jest zimna i mieszana — tu burak niesie talerz.",
          },
        ],
        seoTitle: "Buraczki przepis | Ciepły dodatek z buraków | Alemniam",
        seoDescription:
          "Buraczki — ciepłe buraki z jabłkiem i chrzanem. Dwujęzycznie, dodatek niedzielny, jasno ≠ botwinka i barszcz.",
      },
    },
    ingredients: [
      {
        id: "bu-1",
        name: { de: "Rote Bete", pl: "Buraki" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "produce",
        storeHintDe: "Roh oder vorgekocht vakuumiert — Farbe prüfen",
      },
      {
        id: "bu-2",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "bu-3",
        name: { de: "Saurer Apfel", pl: "Kwaśne jabłko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
        substitute: {
          de: "Mehr Essig/Zitrone — ehrlich benennen",
          pl: "Więcej octu/cytryny — nazwać uczciwie",
        },
      },
      {
        id: "bu-4",
        name: { de: "Geriebener Meerrettich", pl: "Tarty chrzan" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
        storeHintDe: "Polenladen / Glasware — Schärfe kosten",
      },
      {
        id: "bu-5",
        name: { de: "Butter oder Öl", pl: "Masło lub olej" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "dairy",
      },
      {
        id: "bu-6",
        name: { de: "Prise Zucker", pl: "Szczypta cukru" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "pantry",
      },
      {
        id: "bu-7",
        name: {
          de: "Salz, Pfeffer, Essig oder Zitrone",
          pl: "Sól, pieprz, ocet lub cytryna",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
      {
        id: "bu-8",
        name: {
          de: "Śmietana zum Servieren (optional)",
          pl: "Śmietana do podania (opcjonalnie)",
        },
        amount: 100,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
        storeHintDe: "Schmand/Crème fraîche — siehe Śmietana-Guide",
        substitute: {
          de: "Weglassen — Meerrettich reicht",
          pl: "Pominąć — chrzan wystarczy",
        },
      },
    ],
    createdAt: "2026-07-21T10:00:00.000Z",
    updatedAt: "2026-07-21T10:00:00.000Z",
  },
];
