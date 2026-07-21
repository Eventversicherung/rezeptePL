import type { Recipe } from "@/types/content";

/**
 * Wave 14 Paket A — Bäckerei-Rest (+2).
 * - recipe-wuzetka — Kakao-Biskuit + Sahne + Schoko-Glasur (≠ Napoleonka/Sernik/Szarlotka)
 * - recipe-drozdzowka — Placek drożdżowy mit Streusel, optional Apfel (≠ Chałka/Babka/Pączki/Racuchy)
 *
 * Integrator E: merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave14A: Recipe[] = [
  {
    id: "recipe-wuzetka",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1536749605762-e7445a2d43ec?w=1600&q=80",
    prepMinutes: 45,
    cookMinutes: 35,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-ersatzprodukte-de",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Wuzetka",
        slug: "wuzetka",
        excerpt:
          "Polnische Schoko-Sahne-Torte: Kakao-Biskuit, dicke Sahnefüllung, Schoko-Glasur — klar ≠ Napoleonka (Blätterteig-Creme) und ≠ Sernik/Szarlotka.",
        steps: [
          {
            text: "Für den Kakao-Biskuit Eier mit Zucker schaumig schlagen, Mehl und Kakao vorsichtig unterheben. In eine gefettete Rechteckform (ca. 20×30 cm) geben und bei 180 °C etwa 25–30 Minuten backen, bis der Spieß trocken kommt. Auskühlen lassen, horizontal einmal durchschneiden.",
            tip: "Das ist dunkler Kakao-Biskuit, kein Blätterteig: [Napoleonka](/de/rezepte/napoleonka) bleibt andere Cook-URL. Einkauf Kakao/Vanille oft im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Sahne sehr kalt steif schlagen, leicht süßen (Puderzucker) und optional mit etwas Gelatine oder Speisestärke stabilisieren. Untere Biskuithälfte leicht mit Kaffee oder Kakao-Milch bepinseln, dicke Sahne-Schicht gleichmäßig streichen, zweite Hälfte daraufsetzen. Fest andrücken.",
            tip: "Keine Vanillecreme zwischen Blätterteig — das wäre [Napoleonka](/de/rezepte/napoleonka). Kein Quarkkern wie [Sernik](/de/rezepte/sernik).",
          },
          {
            text: "Für die Glasur Kuvertüre oder dunkle Schokolade mit etwas Butter oder Sahne schmelzen, über die kalte Torte gießen und glatt streichen. Mindestens 2–3 Stunden kühlen, besser über Nacht, bis der Schnitt sauber ist.",
            tip: "Apfelkuchen vom Blech bleibt [Szarlotka](/de/rezepte/szarlotka). Menüplatz: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Mit scharfem Messer in Rechtecke schneiden. Kalt servieren — klassisch mit einem Sahnetupfer optional. Reste gekühlt 2–3 Tage halten; Glasur vor dem Servieren kurz glätten.",
            tip: "Fehlt gute Sahne oder Kakao: ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Fokus bleibt Wuzetka.",
          },
        ],
        seoTitle: "Wuzetka Rezept | Schoko-Sahne-Torte polnisch | Alemniam",
        seoDescription:
          "Wuzetka backen: Kakao-Biskuit, Sahnefüllung, Schoko-Glasur. Bilingual, klar ≠ Napoleonka, Sernik und Szarlotka.",
      },
      pl: {
        title: "Wuzetka",
        slug: "wuzetka",
        excerpt:
          "Polski tort czekoladowo-śmietankowy: biszkopt kakaowy, gęsta śmietana, polewa — jasno ≠ napoleonka (ciasto francuskie) i ≠ sernik/szarlotka.",
        steps: [
          {
            text: "Na biszkopt kakaowy ubij jajka z cukrem na puszysto, delikatnie wmieszaj mąkę i kakao. Przełóż do natłuszczonej formy prostokątnej (ok. 20×30 cm) i piecz w 180 °C ok. 25–30 min, aż patyczek będzie suchy. Ostudź, przekrój poziomo na pół.",
            tip: "To ciemny biszkopt kakaowy, nie ciasto francuskie: [napoleonka](/pl/rezepte/napoleonka) to inny cook-URL. Zakupy kakao/wanilia często w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Bardzo zimną śmietankę ubij na sztywno, lekko osłodź (cukier puder) i opcjonalnie ustabilizuj żelatyną lub skrobią. Dolną połowę biszkoptu lekko skrop kawą lub kakao z mlekiem, nałóż grubą warstwę śmietany, przykryj drugą połową. Dociskaj równo.",
            tip: "Bez kremu waniliowego między francuskim — to byłaby [napoleonka](/pl/rezepte/napoleonka). Bez twarogu jak [sernik](/pl/rezepte/sernik).",
          },
          {
            text: "Na polewę rozpuść czekoladę z odrobiną masła lub śmietanki, wylej na zimny tort i wygładź. Chłodź co najmniej 2–3 godziny, lepiej przez noc, aż krojenie będzie czyste.",
            tip: "Jabłecznik z blachy zostaje [szarlotką](/pl/rezepte/szarlotka). Miejsce w menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Ostrym nożem kroić w prostokąty. Podawać zimne — klasycznie z opcjonalnym czubkiem śmietany. Resztki trzymają 2–3 dni w chłodzie; przed podaniem polewę lekko wygładź.",
            tip: "Brak dobrej śmietanki lub kakao: uczciwie według [zamienników](/pl/blog/zamienniki-skladnikow). fokus zostaje wuzetka.",
          },
        ],
        seoTitle: "Wuzetka przepis | Tort czekoladowo-śmietankowy | Alemniam",
        seoDescription:
          "Wuzetka w domu: biszkopt kakaowy, śmietana, polewa. Dwujęzycznie, jasno ≠ napoleonka, sernik i szarlotka.",
      },
    },
    ingredients: [
      {
        id: "wz-1",
        name: { de: "Eier", pl: "Jajka" },
        amount: 6,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "wz-2",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 180,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "wz-3",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 120,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "wz-4",
        name: {
          de: "Kakaopulver (ungesüßt)",
          pl: "Kakao (niesłodzone)",
        },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Gute Qualität — oft Polenladen / Backregal",
      },
      {
        id: "wz-5",
        name: {
          de: "Schlagsahne (sehr kalt)",
          pl: "Śmietanka do ubijania (bardzo zimna)",
        },
        amount: 500,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "wz-6",
        name: {
          de: "Puderzucker (für Sahne)",
          pl: "Cukier puder (do śmietany)",
        },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "wz-7",
        name: {
          de: "Dunkle Schokolade / Kuvertüre (Glasur)",
          pl: "Czekolada gorzka / couverture (polewa)",
        },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "wz-8",
        name: {
          de: "Butter (für Glasur)",
          pl: "Masło (do polewy)",
        },
        amount: 30,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "wz-9",
        name: {
          de: "Kaffee oder Kakao-Milch zum Tränken (optional)",
          pl: "Kawa lub kakao z mlekiem do nasączenia (opcjonalnie)",
        },
        amount: 80,
        unit: { de: "ml", pl: "ml" },
        group: "other",
        substitute: {
          de: "Weglassen — Biskuit etwas trockener, ehrlich benennen",
          pl: "Pominąć — biszkopt nieco suchszy, nazwać uczciwie",
        },
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
  {
    id: "recipe-drozdzowka",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1609099724543-937e6493fcd0?w=1600&q=80",
    prepMinutes: 40,
    cookMinutes: 35,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Drożdżówka / Placek drożdżowy",
        slug: "drozdzowka",
        excerpt:
          "Polnischer Hefekuchen vom Blech mit kruszonka (Streusel), optional Apfel — Alltagskaffee-Klassiker, klar ≠ Chałka-Zopf, ≠ Babka-Gugelhupf, ≠ Pączki.",
        steps: [
          {
            text: "Hefe in lauwarmer Milch mit 1 TL Zucker auflösen, 10 Minuten gehen lassen. Mit Mehl, restlichem Zucker, Ei, weicher Butter und Prise Salz zu glattem Hefeteig kneten. Abgedeckt gehen lassen, bis verdoppelt (ca. 60–90 Min).",
            tip: "Kein Zopf und keine Gugelhupf-Form: [Chałka](/de/rezepte/chalka) und [Babka](/de/rezepte/babka) bleiben andere Rezepte. Hefe-Kontext: [Makowiec-Technik](/de/blog/makowiec-technik).",
          },
          {
            text: "Teig auf ein gefettetes Blech (ca. 30×40 cm) drücken oder ausrollen — flacher Placek, keine Flechtstränge. Optional dünne Apfelscheiben oder -würfel auflegen. Für Streusel (kruszonka): kalte Butter, Mehl und Zucker zu Krümeln reiben; dick über den Teig streuen.",
            tip: "Kein Frittieren — [Pączki](/de/rezepte/paczki) bleiben eigene Cook-URL. Apfel-Pfannkuchen: [Racuchy](/de/rezepte/racuchy-jablka).",
          },
          {
            text: "Kurz nachgehen lassen (15–20 Min). Bei 180 °C (Umluft etwas niedriger) 30–35 Minuten goldbraun backen, bis der Streusel knusprig und der Teig durchgebacken ist.",
            tip: "Einkauf Butter/Hefe: [Polenladen](/de/blog/polenladen-einkaufen). Menüplatz: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Auf dem Blech abkühlen lassen, in Rechtecke schneiden. Warm oder lauwarm zum Kaffee. Optional leicht mit Puderzucker bestäuben. Reste luftdicht — am Folgetag kurz aufwärmen.",
            tip: "Fehlt Hefe oder Mehltyp: ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Fokus bleibt Drożdżówka / Placek drożdżowy.",
          },
        ],
        seoTitle:
          "Drożdżówka Rezept | Polnischer Hefekuchen Streusel | Alemniam",
        seoDescription:
          "Placek drożdżowy mit Streusel backen. Bilingual, klar ≠ Chałka, Babka, Pączki und Racuchy.",
      },
      pl: {
        title: "Drożdżówka / Placek drożdżowy",
        slug: "drozdzowka",
        excerpt:
          "Polski placek drożdżowy z blachy z kruszonką, opcjonalnie jabłko — klasyk do kawy, jasno ≠ chałka-warkocz, ≠ babka z formy, ≠ pączki.",
        steps: [
          {
            text: "Rozpuść drożdże w letnim mleku z 1 łyżeczką cukru, odstaw 10 min. Zagnieć z mąką, resztą cukru, jajkiem, miękkim masłem i szczyptą soli na gładkie ciasto. Przykryte odstaw aż podwoi objętość (ok. 60–90 min).",
            tip: "Bez warkocza i bez formy babkowej: [chałka](/pl/rezepte/chalka) i [babka](/pl/rezepte/babka) to inne przepisy. Wyczucie drożdży: [technika makowca](/pl/blog/makowiec-technika).",
          },
          {
            text: "Ciasto rozciągnij na natłuszczonej blasze (ok. 30×40 cm) — płaski placek, bez splotów. Opcjonalnie ułóż cienkie plasterki lub kostkę jabłka. Na kruszonkę: zimne masło, mąka i cukier zetrzyj w okruchy; gęsto posyp ciasto.",
            tip: "Bez smażenia — [pączki](/pl/rezepte/paczki) zostają osobnym cook-URL. Racuchy jabłkowe: [racuchy](/pl/rezepte/racuchy-jablka).",
          },
          {
            text: "Krótko odczekaj drugiego wyrastania (15–20 min). Piecz w 180 °C (termoobieg nieco niżej) 30–35 min na złoto, aż kruszonka będzie chrupiąca, a ciasto wypieczone.",
            tip: "Zakupy masło/drożdże: [sklep polski](/pl/blog/sklep-polski-zakupy). Miejsce w menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Ostudź na blasze, kroić w prostokąty. Ciepłe lub letnie do kawy. Opcjonalnie lekko oprósz cukrem pudrem. Resztki szczelnie — nazajutrz krótko podgrzej.",
            tip: "Brak drożdży lub typu mąki: uczciwie według [zamienników](/pl/blog/zamienniki-skladnikow). fokus zostaje drożdżówka / placek drożdżowy.",
          },
        ],
        seoTitle:
          "Drożdżówka przepis | Placek drożdżowy z kruszonką | Alemniam",
        seoDescription:
          "Placek drożdżowy z kruszonką w domu. Dwujęzycznie, jasno ≠ chałka, babka, pączki i racuchy.",
      },
    },
    ingredients: [
      {
        id: "dz-1",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "dz-2",
        name: { de: "Milch (lauwarm)", pl: "Mleko (letnie)" },
        amount: 200,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "dz-3",
        name: {
          de: "Frische Hefe oder Trockenhefe",
          pl: "Drożdże świeże lub suszone",
        },
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
        id: "dz-4",
        name: { de: "Zucker (Teig)", pl: "Cukier (ciasto)" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "dz-5",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "dz-6",
        name: { de: "Weiche Butter (Teig)", pl: "Miękkie masło (ciasto)" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "dz-7",
        name: { de: "Prise Salz", pl: "Szczypta soli" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "dz-8",
        name: {
          de: "Kalte Butter (Streusel)",
          pl: "Zimne masło (kruszonka)",
        },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "dz-9",
        name: {
          de: "Mehl (Streusel)",
          pl: "Mąka (kruszonka)",
        },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "dz-10",
        name: {
          de: "Zucker (Streusel)",
          pl: "Cukier (kruszonka)",
        },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "dz-11",
        name: {
          de: "Apfel (optional, Scheiben/Würfel)",
          pl: "Jabłko (opcjonalnie, plasterki/kostka)",
        },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
        substitute: {
          de: "Pflaume saisonal — Intent Streusel-Hefekuchen behalten",
          pl: "Śliwka sezonowo — intent placek z kruszonką",
        },
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
];
