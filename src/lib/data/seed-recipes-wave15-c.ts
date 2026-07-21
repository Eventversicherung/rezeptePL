import type { Recipe } from "@/types/content";

/**
 * Wave 15 Paket C — Sonntags-Beilagen.
 * - recipe-marchewka-groszek — warme Möhren+Erbsen-Beilage (Butter/Glasur)
 *   ≠ Mizeria ≠ Buraczki ≠ Surówka
 * - recipe-fasolka-szparagowa — grüne Stangenbohnen po polsku (Butter/Semmelbrösel)
 *   ≠ Fasolka po bretońsku (Eintopf / recipe-fasolka + post-fasolka-guide Primary)
 *
 * Integrator E: merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push. Kein neuer Blog-Pillar.
 */
export const seedRecipesWave15C: Recipe[] = [
  {
    id: "recipe-marchewka-groszek",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1565711120607-903eb0a17e2f?w=1600&q=80",
    prepMinutes: 15,
    cookMinutes: 20,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-vegetarisch", "category-schnell"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Marchewka z groszkiem",
        slug: "marchewka-groszek",
        excerpt:
          "Warme Möhren-Erbsen-Beilage mit Butterglasur — Klassiker neben Schabowy und Sonntagsteller, klar ≠ Mizeria und ≠ Buraczki.",
        steps: [
          {
            text: "Möhren schälen und in gleichmäßige Würfel oder Scheiben schneiden (ca. 1 cm). Frische oder TK-Erbsen bereitstellen — TK nicht vorher auftauen.",
            tip: "Das ist eine warme Beilage, kein Rohkostsalat — [Mizeria](/de/rezepte/mizeria) bleibt kalt/Gurke, [Buraczki](/de/rezepte/buraczki) bleibt Rote Bete.",
          },
          {
            text: "Möhren in wenig Salzwasser 8–12 Minuten garen, bis sie bissfest-weich sind. Abgießen, etwas Kochwasser aufheben.",
            tip: "Nicht matschig kochen — die Glasur braucht Struktur. Einkauf: [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "In einer Pfanne Butter schmelzen, optional ½ TL Zucker. Möhren und Erbsen dazugeben, 3–5 Minuten schwenken, bis alles glänzt und die Erbsen heiß sind.",
          },
          {
            text: "Mit Salz, Pfeffer und gehacktem Dill oder Petersilie abschmecken. Bei Bedarf 1–2 EL Kochwasser für Seidenglanz — keine Soße wie bei Eintöpfen.",
            tip: "Menüplatz: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Klassisch neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy).",
          },
          {
            text: "Sofort heiß servieren. Reste im Kühlschrank, kurz in der Pfanne mit Butter aufwärmen — nicht mikrowellen-weich machen.",
            tip: "Ersatz Dill/Butter ehrlich: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Nicht mit Mayo-Salat oder Gurkensalat verwechseln.",
          },
        ],
        seoTitle:
          "Marchewka z groszkiem Rezept | Möhren Erbsen Beilage | Alemniam",
        seoDescription:
          "Marchewka z groszkiem: warme Möhren und Erbsen mit Butter. Polnische Sonntagsbeilage bilingual, klar ≠ Mizeria und Buraczki.",
      },
      pl: {
        title: "Marchewka z groszkiem",
        slug: "marchewka-groszek",
        excerpt:
          "Ciepły dodatek z marchewki i groszku w maśle — klasyk obok schabowego i niedzielnego talerza, jasno ≠ mizeria i ≠ buraczki.",
        steps: [
          {
            text: "Marchewkę obierz i pokrój w równe kostki lub plasterki (ok. 1 cm). Przygotuj świeży lub mrożony groszek — mrożonego nie rozmrażaj wcześniej.",
            tip: "To ciepły dodatek, nie surówka — [mizeria](/pl/rezepte/mizeria) zostaje zimna/ogórek, [buraczki](/pl/rezepte/buraczki) zostają buraki.",
          },
          {
            text: "Marchewkę gotuj w małej ilości osolonej wody 8–12 min, aż będzie miękka al dente. Odcedź, zachowaj odrobinę wody z gotowania.",
            tip: "Nie rozgotuj — glazura potrzebuje struktury. Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Na patelni rozpuść masło, opcjonalnie ½ łyżeczki cukru. Dodaj marchewkę i groszek, smaż 3–5 min, aż wszystko nabierze połysku, a groszek będzie gorący.",
          },
          {
            text: "Dopraw solą, pieprzem i siekanym koprem lub pietruszką. W razie potrzeby 1–2 łyżki wody z gotowania dla połysku — bez gęstego sosu jak w gulaszu.",
            tip: "Miejsce w menu: [obiad niedzielny](/pl/blog/obiad-niedzielny). Klasycznie obok [kotleta schabowego](/pl/rezepte/kotlet-schabowy).",
          },
          {
            text: "Podawaj od razu gorące. Resztki w lodówce, krótko podgrzej na patelni z masłem — nie rozmiękczaj w mikrofalówce.",
            tip: "Zamienniki koper/masło: [zamienniki składników](/pl/blog/zamienniki-skladnikow). Nie mylić z sałatką majonezową ani mizerią.",
          },
        ],
        seoTitle:
          "Marchewka z groszkiem przepis | Ciepły dodatek | Alemniam",
        seoDescription:
          "Marchewka z groszkiem: ciepła marchewka i groszek z masłem. Dodatek niedzielny dwujęzycznie, jasno ≠ mizeria i buraczki.",
      },
    },
    ingredients: [
      {
        id: "mz-1",
        name: { de: "Möhren", pl: "Marchewka" },
        amount: 600,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "mz-2",
        name: { de: "Erbsen (frisch oder TK)", pl: "Groszek (świeży lub mrożony)" },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "produce",
        substitute: {
          de: "Nur Möhren — dann ehrlich „marchewka z masłem“ benennen",
          pl: "Tylko marchewka — wtedy jasno „marchewka z masłem”",
        },
      },
      {
        id: "mz-3",
        name: { de: "Butter", pl: "Masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        substitute: {
          de: "Pflanzenmargarine — Geschmack ehrlich nennen",
          pl: "Margaryna roślinna — nazwać smak uczciwie",
        },
      },
      {
        id: "mz-4",
        name: { de: "Zucker (optional)", pl: "Cukier (opcjonalnie)" },
        amount: 0.5,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "pantry",
      },
      {
        id: "mz-5",
        name: {
          de: "Dill oder Petersilie, Salz, Pfeffer",
          pl: "Koper lub pietruszka, sól, pieprz",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
        storeHintDe: "Frischer Dill oft im Polenladen / Markt",
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
  {
    id: "recipe-fasolka-szparagowa",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1677449477669-03421e56a53d?w=1600&q=80",
    prepMinutes: 15,
    cookMinutes: 15,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-vegetarisch", "category-schnell"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-fasolka-guide",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Fasolka szparagowa po polsku",
        slug: "fasolka-szparagowa",
        excerpt:
          "Grüne Stangenbohnen als warme Beilage mit Butter und Semmelbröseln — klar ≠ Fasolka po bretońsku (weißer Bohnen-Eintopf).",
        steps: [
          {
            text: "Grüne Stangenbohnen waschen, Enden abschneiden, bei Bedarf halbieren. In Salzwasser 6–10 Minuten bissfest garen, abgießen.",
            tip: "Das sind grüne Schoten, kein weißer Bohnen-Eintopf — [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku) und der [Fasolka-Guide](/de/blog/fasolka-po-bretonsku) bleiben Eintopf-Owner.",
          },
          {
            text: "In einer Pfanne Butter schmelzen. Optional fein gehackte Zwiebel oder Knoblauch kurz glasig dünsten — nicht braun brennen.",
            tip: "Einkauf und Butter/Brösel: [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Semmelbrösel (bułka tarta) in der Butter goldbraun rösten — das ist die polnische Hauslinie, keine Tomaten-Wurst-Sauce.",
          },
          {
            text: "Abgetropfte Bohnen unterheben, mit Salz und Pfeffer abschmecken, 1–2 Minuten schwenken, bis alles glänzt und die Brösel haften.",
            tip: "Menü [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy) oder Braten — nie als Eintopf-Hauptgericht verkaufen.",
          },
          {
            text: "Sofort heiß servieren. Optional Dill oder Petersilie. Reste kurz in der Pfanne aufwärmen — Brösel sonst weich.",
            tip: "Wer Tomate+Kiełbasa+weiße Bohnen will: zurück zu [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku) — anderer Primary.",
          },
        ],
        seoTitle:
          "Fasolka szparagowa Rezept | Grüne Bohnen polnisch | Alemniam",
        seoDescription:
          "Fasolka szparagowa po polsku: grüne Stangenbohnen mit Butter und Semmelbröseln. Beilage bilingual, klar ≠ Fasolka po bretońsku.",
      },
      pl: {
        title: "Fasolka szparagowa po polsku",
        slug: "fasolka-szparagowa",
        excerpt:
          "Zielona fasolka szparagowa jako ciepły dodatek z masłem i bułką tartą — jasno ≠ fasolka po bretońsku (gulasz z białej fasoli).",
        steps: [
          {
            text: "Fasolkę szparagową umyj, obetnij końce, ewentualnie przekrój na pół. Gotuj w osolonej wodzie 6–10 min al dente, odcedź.",
            tip: "To zielone strąki, nie gulasz z białej fasoli — [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku) i [przewodnik fasolki](/pl/blog/fasolka-po-bretonsku) zostają ownerem eintopf/gulaszu.",
          },
          {
            text: "Na patelni rozpuść masło. Opcjonalnie drobno posiekaną cebulę lub czosnek krótko zeszklij — nie przypalaj.",
            tip: "Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Bułkę tartą zrumień na maśle na złoto — to linia domu, nie sos pomidorowo-kiełbasiany.",
          },
          {
            text: "Dodaj odsączoną fasolkę, dopraw solą i pieprzem, smaż 1–2 min, aż wszystko nabierze połysku, a bułka przylega.",
            tip: "Menu [obiad niedzielny](/pl/blog/obiad-niedzielny). Obok [schabowego](/pl/rezepte/kotlet-schabowy) lub pieczenia — nie sprzedawaj jako gulasz główny.",
          },
          {
            text: "Podawaj od razu gorące. Opcjonalnie koper lub pietruszka. Resztki krótko na patelni — inaczej bułka mięknie.",
            tip: "Kto chce pomidor+kiełbasę+białą fasolę: wróć do [fasolki po bretońsku](/pl/rezepte/fasolka-po-bretonsku) — inny primary.",
          },
        ],
        seoTitle:
          "Fasolka szparagowa przepis | Zielona fasolka po polsku | Alemniam",
        seoDescription:
          "Fasolka szparagowa po polsku: zielone strąki z masłem i bułką tartą. Dodatek dwujęzycznie, jasno ≠ fasolka po bretońsku.",
      },
    },
    ingredients: [
      {
        id: "fs-1",
        name: {
          de: "Grüne Stangenbohnen (Fasolka szparagowa)",
          pl: "Fasolka szparagowa",
        },
        amount: 700,
        unit: { de: "g", pl: "g" },
        group: "produce",
        storeHintDe: "Frisch oder TK — nicht weiße Bohnen aus Glas",
        substitute: {
          de: "TK-Bohnen — Garzeit kürzen, ehrlich benennen",
          pl: "Mrożona fasolka — krócej gotować, nazwać uczciwie",
        },
      },
      {
        id: "fs-2",
        name: { de: "Butter", pl: "Masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "fs-3",
        name: { de: "Semmelbrösel (bułka tarta)", pl: "Bułka tarta" },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
        storeHintDe: "Polenladen / Backabteilung — fein und trocken",
        substitute: {
          de: "Ohne Brösel nur Butter — Hauslinie ehrlich „z masłem“",
          pl: "Bez bułki tylko masło — jasno „z masłem”",
        },
      },
      {
        id: "fs-4",
        name: {
          de: "Zwiebel oder Knoblauch (optional)",
          pl: "Cebula lub czosnek (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "Stück / 1 Zehe", pl: "szt. / 1 ząbek" },
        group: "produce",
      },
      {
        id: "fs-5",
        name: {
          de: "Salz, Pfeffer, optional Dill",
          pl: "Sól, pieprz, opcjonalnie koper",
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
