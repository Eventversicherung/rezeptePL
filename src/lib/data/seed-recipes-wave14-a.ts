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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-wuzetka/af352ac0-8bba-44dd-a4d2-8bb8d02e6865.webp",
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
          "Polnische Schoko-Sahne-Torte aus dunklem Kakao-Biskuit, dicker Sahnefüllung und glänzender Schoko-Glasur, ein Warschauer Bäckerei-Klassiker, klar zu unterscheiden von der Blätterteig-Napoleonka sowie von Sernik und Szarlotka.",
        steps: [
          {
            text: "Für den Kakao-Biskuit Eier mit Zucker schaumig schlagen, Mehl und Kakao vorsichtig unterheben. In eine gefettete Rechteckform (ca. 20×30 cm) geben und bei 180 °C etwa 25–30 Minuten backen, bis der Spieß trocken kommt. Auskühlen lassen, horizontal einmal durchschneiden.",
            tip: "Das ist dunkler Kakao-Biskuit und kein Blätterteig, [Napoleonka](/de/rezepte/napoleonka) bleibt ein ganz anderes Rezept. Gutes Kakaopulver und Vanille bekommst du oft günstiger im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Sahne sehr kalt steif schlagen, leicht süßen (Puderzucker) und optional mit etwas Gelatine oder Speisestärke stabilisieren. Untere Biskuithälfte leicht mit Kaffee oder Kakao-Milch bepinseln, dicke Sahne-Schicht gleichmäßig streichen, zweite Hälfte daraufsetzen. Fest andrücken.",
            tip: "Zwischen Blätterteig gehört Vanillecreme, das wäre [Napoleonka](/de/rezepte/napoleonka), und mit Quark hätte die Torte eher etwas von [Sernik](/de/rezepte/sernik).",
          },
          {
            text: "Für die Glasur Kuvertüre oder dunkle Schokolade mit etwas Butter oder Sahne schmelzen, über die kalte Torte gießen und glatt streichen. Mindestens 2–3 Stunden kühlen, besser über Nacht, bis der Schnitt sauber ist.",
            tip: "Apfelkuchen vom Blech bleibt bei [Szarlotka](/de/rezepte/szarlotka). Zum Kaffee nach dem [polnischen Sonntagsessen](/de/blog/sonntagsessen-polnisch) passt die Wuzetka besonders gut.",
          },
          {
            text: "Mit einem scharfen Messer in Rechtecke schneiden und kalt servieren, klassisch mit einem optionalen Sahnetupfer obendrauf. Reste halten sich gekühlt zwei bis drei Tage, vor dem Servieren die Glasur bei Bedarf kurz glattstreichen.",
            tip: "Falls gute Sahne oder Kakao fehlen, findest du ehrliche Alternativen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de), ohne dass die Torte ihren Charakter verliert.",
          },
        ],
        seoTitle: "Wuzetka Rezept | Schoko-Sahne-Torte polnisch | Alemniam",
        seoDescription:
          "Wuzetka backen: Kakao-Biskuit, Sahnefüllung, Schoko-Glasur. Bilingual, klar unterschieden von Napoleonka, Sernik und Szarlotka.",
      },
      pl: {
        title: "Wuzetka",
        slug: "wuzetka",
        excerpt:
          "Polski tort czekoladowo-śmietankowy z ciemnego biszkoptu kakaowego, gęstej śmietany i błyszczącej polewy, warszawski klasyk cukierniczy, wyraźnie inny niż napoleonka z ciasta francuskiego oraz niż sernik i szarlotka.",
        steps: [
          {
            text: "Na biszkopt kakaowy ubij jajka z cukrem na puszysto, delikatnie wmieszaj mąkę i kakao. Przełóż do natłuszczonej formy prostokątnej (ok. 20×30 cm) i piecz w 180 °C ok. 25–30 min, aż patyczek będzie suchy. Ostudź, przekrój poziomo na pół.",
            tip: "To ciemny biszkopt kakaowy, a nie ciasto francuskie, [napoleonka](/pl/rezepte/napoleonka) to zupełnie inny przepis. Dobre kakao i wanilię kupisz często taniej w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Bardzo zimną śmietankę ubij na sztywno, lekko osłodź (cukier puder) i opcjonalnie ustabilizuj żelatyną lub skrobią. Dolną połowę biszkoptu lekko skrop kawą lub kakao z mlekiem, nałóż grubą warstwę śmietany, przykryj drugą połową. Dociskaj równo.",
            tip: "Między płatami ciasta francuskiego jest krem waniliowy, to byłaby [napoleonka](/pl/rezepte/napoleonka), a z twarogiem wyszedłby raczej [sernik](/pl/rezepte/sernik).",
          },
          {
            text: "Na polewę rozpuść czekoladę z odrobiną masła lub śmietanki, wylej na zimny tort i wygładź. Chłodź co najmniej 2–3 godziny, lepiej przez noc, aż krojenie będzie czyste.",
            tip: "Jabłecznik z blachy zostaje przy [szarlotce](/pl/rezepte/szarlotka). Do kawy po [obiedzie niedzielnym](/pl/blog/obiad-niedzielny) wuzetka pasuje wyjątkowo dobrze.",
          },
          {
            text: "Ostrym nożem kroić w prostokąty i podawać na zimno, klasycznie z opcjonalnym czubkiem śmietany na wierzchu. Resztki trzymają się w chłodzie dwa do trzech dni, przed podaniem polewę w razie potrzeby krótko wygładź.",
            tip: "Gdy brakuje dobrej śmietanki lub kakao, uczciwe zamienniki znajdziesz pod [zamiennikami składników](/pl/blog/zamienniki-skladnikow), bez utraty charakteru ciasta.",
          },
        ],
        seoTitle: "Wuzetka przepis | Tort czekoladowo-śmietankowy | Alemniam",
        seoDescription:
          "Wuzetka w domu: biszkopt kakaowy, śmietana, polewa. Dwujęzycznie, jasno różna od napoleonki, sernika i szarlotki.",
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
        storeHintDe: "Gute Qualität findest du oft im Polenladen oder im Backregal",
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
          de: "Weglassen, dann wird der Biskuit etwas trockener, das im Rezept ehrlich benennen",
          pl: "Pominąć, wtedy biszkopt będzie nieco suchszy, warto to uczciwie napisać",
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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-drozdzowka/d180cda8-d1ac-47f9-bd43-2b0c19ceecdb.webp",
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
          "Polnischer Hefekuchen vom Blech mit dicker kruszonka-Streuseldecke und optional Apfel, ein Alltagsklassiker zum Kaffee, klar zu unterscheiden vom geflochtenen Chałka-Zopf, vom Babka-Gugelhupf und von Pączki.",
        steps: [
          {
            text: "Hefe in lauwarmer Milch mit 1 TL Zucker auflösen, 10 Minuten gehen lassen. Mit Mehl, restlichem Zucker, Ei, weicher Butter und Prise Salz zu glattem Hefeteig kneten. Abgedeckt gehen lassen, bis verdoppelt (ca. 60–90 Min).",
            tip: "Der Teig wird flach aufs Blech gedrückt statt geflochten oder in eine Gugelhupf-Form gefüllt, das bleibt [Chałka](/de/rezepte/chalka) und [Babka](/de/rezepte/babka) vorbehalten. Mehr zum Umgang mit Hefe erklärt die [Makowiec-Technik](/de/blog/makowiec-technik).",
          },
          {
            text: "Teig auf ein gefettetes Blech (ca. 30×40 cm) drücken oder ausrollen, er bleibt ein flacher Placek ohne Flechtstränge. Optional dünne Apfelscheiben oder Apfelwürfel auflegen. Für die Streusel kalte Butter, Mehl und Zucker zu groben Krümeln reiben und dick über den Teig streuen.",
            tip: "Frittiert wird hier nicht, das bleibt [Pączki](/de/rezepte/paczki) vorbehalten, und Apfel-Pfannkuchen aus der Pfanne findest du bei [Racuchy](/de/rezepte/racuchy-jablka).",
          },
          {
            text: "Kurz nachgehen lassen (15–20 Min). Bei 180 °C (Umluft etwas niedriger) 30–35 Minuten goldbraun backen, bis der Streusel knusprig und der Teig durchgebacken ist.",
            tip: "Butter und Hefe in guter Qualität bekommst du oft im [Polenladen](/de/blog/polenladen-einkaufen), zum Kaffee passt der Kuchen gut ins [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Auf dem Blech abkühlen lassen und in Rechtecke schneiden. Warm oder lauwarm zum Kaffee servieren, optional leicht mit Puderzucker bestäuben. Reste luftdicht aufbewahren und am nächsten Tag kurz aufwärmen.",
            tip: "Falls Hefe oder ein bestimmter Mehltyp fehlt, findest du ehrliche Alternativen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
        ],
        seoTitle:
          "Drożdżówka Rezept | Polnischer Hefekuchen Streusel | Alemniam",
        seoDescription:
          "Placek drożdżowy mit Streusel backen. Bilingual, klar unterschieden von Chałka, Babka, Pączki und Racuchy.",
      },
      pl: {
        title: "Drożdżówka / Placek drożdżowy",
        slug: "drozdzowka",
        excerpt:
          "Polski placek drożdżowy z blachy z grubą kruszonką i opcjonalnie jabłkiem, klasyk do kawy, wyraźnie inny niż pleciona chałka, babka z formy i pączki.",
        steps: [
          {
            text: "Rozpuść drożdże w letnim mleku z 1 łyżeczką cukru, odstaw 10 min. Zagnieć z mąką, resztą cukru, jajkiem, miękkim masłem i szczyptą soli na gładkie ciasto. Przykryte odstaw aż podwoi objętość (ok. 60–90 min).",
            tip: "Ciasto trafia płasko na blachę, bez warkocza i bez formy babkowej, to zostaje przy [chałce](/pl/rezepte/chalka) i [babce](/pl/rezepte/babka). Więcej o wyczuciu drożdży znajdziesz w [technice makowca](/pl/blog/makowiec-technika).",
          },
          {
            text: "Ciasto rozciągnij na natłuszczonej blasze (ok. 30×40 cm) na płaski placek, bez splotów. Opcjonalnie ułóż cienkie plasterki lub kostkę jabłka. Na kruszonkę zimne masło, mąkę i cukier zetrzyj w grube okruchy i gęsto posyp nimi ciasto.",
            tip: "Smażenia tu nie ma, to zostaje przy [pączkach](/pl/rezepte/paczki), a jabłkowe racuchy z patelni znajdziesz przy [racuchach](/pl/rezepte/racuchy-jablka).",
          },
          {
            text: "Krótko odczekaj drugiego wyrastania (15–20 min). Piecz w 180 °C (termoobieg nieco niżej) 30–35 min na złoto, aż kruszonka będzie chrupiąca, a ciasto wypieczone.",
            tip: "Dobre masło i drożdże kupisz często w [sklepie polskim](/pl/blog/sklep-polski-zakupy), do kawy placek pasuje dobrze przy [obiedzie niedzielnym](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Ostudź na blasze i pokrój w prostokąty. Podawaj ciepłe lub letnie do kawy, opcjonalnie lekko oprósz cukrem pudrem. Resztki przechowuj szczelnie i nazajutrz krótko podgrzej.",
            tip: "Gdy brakuje drożdży albo konkretnego typu mąki, uczciwe zamienniki znajdziesz pod [zamiennikami składników](/pl/blog/zamienniki-skladnikow).",
          },
        ],
        seoTitle:
          "Drożdżówka przepis | Placek drożdżowy z kruszonką | Alemniam",
        seoDescription:
          "Placek drożdżowy z kruszonką w domu. Dwujęzycznie, jasno różny od chałki, babki, pączków i racuchów.",
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
          de: "Pflaume passt saisonal genauso gut, der Streusel-Hefekuchen-Charakter bleibt erhalten",
          pl: "Śliwka pasuje sezonowo równie dobrze, charakter placka z kruszonką zostaje zachowany",
        },
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
];
