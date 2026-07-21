import type { Recipe } from "@/types/content";

/**
 * Wave 11 Paket D — +3 Rezepte (ownership-safe Diaspora-/Wigilia-Lücken).
 * - recipe-ryba-po-grecku — Fisch griechische Art (Gemüse-Sauce) ≠ Karp
 * - recipe-golonka — geschmorte/gebratene Haxe ≠ Schabowy / Schab / Żeberka
 * - recipe-kompot-z-suszu — Trockenobstkompot (Getränk) ≠ Wigilia-Pillar-Steal
 *
 * Integrator (E): merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave11D: Recipe[] = [
  {
    id: "recipe-ryba-po-grecku",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1600&q=80",
    prepMinutes: 35,
    cookMinutes: 45,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-wigilia",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Ryba po grecku",
        slug: "ryba-po-grecku",
        excerpt:
          "Gebratener Weißfisch unter würzig-süßer Gemüsesauce aus Karotte, Zwiebel und Tomate — kalt oder lauwarm. Wigilia- und Buffetlinie, klar ≠ ganzer Karpfen.",
        steps: [
          {
            text: "Weißfischfilets (Kabeljau, Seelachs oder ähnliches) abtupfen, salzen, pfeffern; leicht mehlieren und in Öl goldbraun braten. Auf Küchenpapier abtropfen, in eine flache Form legen.",
            tip: "Das ist die Filet-Sauce-Linie — nicht der ganze Ofkarpfen wie [Karp](/de/rezepte/karp). Menürahmen: [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
          },
          {
            text: "Für die Sauce: Karotten und Petersilienwurzel in feine Streifen oder grob raspeln, Zwiebeln in Halbringe. In Öl weich dünsten, bis das Gemüse süß und glasig ist — nicht rösten bis bitter.",
            tip: "Wurzelgemüse und Tomatenmark oft im [Polenladen](/de/blog/polenladen-einkaufen); Alternativen ehrlich: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Tomatenmark einrühren, mit etwas Wasser oder Brühe lösen, Lorbeer und Gewürznelke optional. 10–15 Minuten köcheln, bis die Sauce dick und bindig ist. Mit Salz, Pfeffer, Prise Zucker und Zitronensaft abschmecken — süß-säuerlich, nicht scharf.",
          },
          {
            text: "Heiße Sauce über den Fisch geben, so dass die Filets bedeckt sind. Abkühlen lassen; ideal mehrere Stunden oder über Nacht im Kühlschrank ziehen.",
            tip: "Kalt servieren ist klassisch. Wer warmen Fischgang will, bleibt beim [Karp](/de/rezepte/karp) — anderer Rezept.",
          },
          {
            text: "Mit Zitrone und Dill oder Petersilie servieren — als Vorspeise, Buffet oder Wigilia-Fischgang neben Barszcz und Pierogi.",
          },
        ],
        seoTitle: "Ryba po grecku Rezept | Fisch griechische Art | Alemniam",
        seoDescription:
          "Ryba po grecku — Weißfisch mit Karotten-Zwiebel-Tomatensauce. Bilingual, Wigilia-tauglich, klar getrennt vom Karpfen-Rezept.",
      },
      pl: {
        title: "Ryba po grecku",
        slug: "ryba-po-grecku",
        excerpt:
          "Smażony biały filet pod warzywną, słodko-kwaśną sosem z marchewki, cebuli i pomidora — na zimno lub letnio. Linia wigilijna i bufetowa, jasno ≠ cały karp.",
        steps: [
          {
            text: "Filety białej ryby (dorsz, mintaj lub podobne) osusz, posól, popieprz; lekko obtocz w mące i usmaż na złoto. Odsącz na papierze, ułóż w płaskim naczyniu.",
            tip: "To linia filet–sos — nie cały karp z pieca jak [karp](/pl/rezepte/karp). Ramę menu: [menu wigilijne](/pl/blog/menu-wigilijne).",
          },
          {
            text: "Sos: marchew i pietruszkę korzeniową w drobne paski lub zetrzyj, cebulę w półplasterki. Duś na oleju do miękkości i słodyczy — nie pal.",
            tip: "Warzywa korzeniowe i koncentrat: [sklep polski](/pl/blog/sklep-polski-zakupy); zamienniki: [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Dodaj koncentrat pomidorowy, rozcieńcz wodą lub bulionem; opcjonalnie liść laurowy i goździk. Gotuj 10–15 minut do gęstego sosu. Dopraw solą, pieprzem, szczyptą cukru i sokiem z cytryny — słodko-kwaśno, nie ostro.",
          },
          {
            text: "Gorący sos wylej na rybę tak, by filety były przykryte. Ostudź; najlepiej kilka godzin lub noc w lodówce.",
            tip: "Na zimno to klasyka. Kto chce ciepłą rybę wigilijną, zostaje przy [karpie](/pl/rezepte/karp) — inny Rezept.",
          },
          {
            text: "Podawaj z cytryną i koperkiem lub pietruszką — jako przystawka, bufet lub ryba na Wigilię obok barszczu i pierogów.",
          },
        ],
        seoTitle: "Ryba po grecku przepis | Ryba z warzywami | Alemniam",
        seoDescription:
          "Ryba po grecku — biała ryba z sosem marchewkowo-cebulowo-pomidorowym. Dwujęzycznie, na Wigilię, jasno osobno od karpia.",
      },
    },
    ingredients: [
      {
        id: "rpg-1",
        name: {
          de: "Weißfischfilets (Kabeljau, Seelachs o. ä.)",
          pl: "Filety białej ryby (dorsz, mintaj itp.)",
        },
        amount: 700,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Frischtheke oder TK — Gräten prüfen",
      },
      {
        id: "rpg-2",
        name: { de: "Karotten", pl: "Marchew" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "rpg-3",
        name: {
          de: "Petersilienwurzel oder Sellerie",
          pl: "Pietruszka korzeniowa lub seler",
        },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "produce",
        storeHintDe: "Polenladen / Gemüseabteilung",
        substitute: {
          de: "Mehr Karotte + Selleriestange — ehrlich benennen",
          pl: "Więcej marchewki + łodyga selera — nazwać uczciwie",
        },
      },
      {
        id: "rpg-4",
        name: { de: "Zwiebeln", pl: "Cebule" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "rpg-5",
        name: { de: "Tomatenmark", pl: "Koncentrat pomidorowy" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "rpg-6",
        name: { de: "Mehl zum Panieren", pl: "Mąka do obtoczenia" },
        amount: 4,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "rpg-7",
        name: { de: "Öl zum Braten und Dünsten", pl: "Olej do smażenia i duszenia" },
        amount: 6,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "rpg-8",
        name: {
          de: "Zitrone, Salz, Pfeffer, Prise Zucker",
          pl: "Cytryna, sól, pieprz, szczypta cukru",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
      {
        id: "rpg-9",
        name: {
          de: "Lorbeerblatt (optional)",
          pl: "Liść laurowy (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T00:00:00.000Z",
    updatedAt: "2026-07-21T00:00:00.000Z",
  },
  {
    id: "recipe-golonka",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1601768474144-5b4f2738266e?w=1600&q=80",
    prepMinutes: 30,
    cookMinutes: 180,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-schmoren"],
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
        title: "Golonka",
        slug: "golonka",
        excerpt:
          "Schweinshaxe langsam gegart bis gabelweich — knusprige Haut optional aus dem Ofen. Sonntagsfleisch mit Knochen, klar ≠ Panade-Schabowy und ≠ Ofenrippen.",
        steps: [
          {
            text: "Haxe(n) abspülen, trocknen, großzügig mit Salz, Pfeffer und Majoran einreiben. Optional über Nacht im Kühlschrank ziehen lassen.",
            tip: "Majoran sparsam und ehrlich dosieren: [Majeranek-Lexikon](/de/blog/majeranek). Das ist keine panierte Schnitzel-Linie wie [Schabowy](/de/rezepte/kotlet-schabowy).",
          },
          {
            text: "In einem schweren Topf oder [Schmortopf](/de/blog/dutch-oven-kaufberatung) rundum anbraten. Zwiebeln, Möhre, Lorbeer und etwas Knoblauch mitrösten; mit Brühe oder Wasser ablöschen, sodass die Haxe zu zwei Dritteln steht.",
          },
          {
            text: "Zugedeckt 2,5–3 Stunden bei niedriger Hitze schmoren (oder im Ofen bei ca. 160 °C), bis das Fleisch sich vom Knochen löst. Flüssigkeit nachgießen, nicht austrocknen.",
            tip: "Andere Sonntags-Fleischlinien: [Schab pieczony](/de/rezepte/schab-pieczony) (Ofenbraten ohne Knochen-Haxe) und [Żeberka](/de/rezepte/zeberka) (Rippen). Menü: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Optional für knusprige Haut: Haxe aus der Flüssigkeit nehmen, bei 220 °C 15–25 Minuten nachbräunen. Fond abseihen, abschmecken, leicht binden.",
          },
          {
            text: "Mit Senf, Meerrettich, Sauerkraut oder Kartoffeln servieren. Reste am nächsten Tag in der Soße aufwärmen — oft runder.",
            tip: "Einkauf Knochenfleisch und Gewürze: [Polenladen](/de/blog/polenladen-einkaufen).",
          },
        ],
        seoTitle: "Golonka Rezept | Schweinshaxe polnisch | Alemniam",
        seoDescription:
          "Golonka — geschmorte Schweinshaxe mit Majoran. Bilingualer Sonntagsbraten, klar ≠ Schabowy, Schab pieczony und Żeberka.",
      },
      pl: {
        title: "Golonka",
        slug: "golonka",
        excerpt:
          "Golonka wieprzowa długo duszona do miękkości — skórka chrupiąca opcjonalnie z pieca. Mięso niedzielne na kości, jasno ≠ panierowany schabowy i ≠ żeberka.",
        steps: [
          {
            text: "Golonkę opłucz, osusz, natrzyj solą, pieprzem i majerankiem. Opcjonalnie odstaw na noc w lodówce.",
            tip: "Majeranek oszczędnie: [leksykon majeranku](/pl/blog/majeranek-leksykon). To nie linia panierowanego [schabowego](/pl/rezepte/kotlet-schabowy).",
          },
          {
            text: "Obsmaż ze wszystkich stron w ciężkim garnku lub [garnku do duszenia](/pl/blog/garnek-do-duszenia). Dodaj cebulę, marchew, liść laurowy i czosnek; zalej bulionem lub wodą do 2/3 wysokości.",
          },
          {
            text: "Duś pod przykryciem 2,5–3 godziny na małym ogniu (lub w piecu ok. 160 °C), aż mięso odchodzi od kości. Uzupełniaj płyn — nie wysusz.",
            tip: "Inne linie mięsa niedzielnego: [schab pieczony](/pl/rezepte/schab-pieczony) i [żeberka](/pl/rezepte/zeberka). Menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Opcjonalnie chrupiąca skórka: wyjmij z płynu, zapiecz w 220 °C przez 15–25 minut. Sos przecedź, dopraw, lekko zagęść.",
          },
          {
            text: "Podawaj z musztardą, chrzanem, kapustą kiszoną lub ziemniakami. Resztki nazajutrz w sosie — często lepiej.",
            tip: "Zakupy mięsa na kości i przypraw: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
        ],
        seoTitle: "Golonka przepis | Golonka wieprzowa | Alemniam",
        seoDescription:
          "Golonka — duszona golonka z majerankiem. Dwujęzyczny obiad niedzielny, jasno ≠ schabowy, schab pieczony i żeberka.",
      },
    },
    ingredients: [
      {
        id: "gol-1",
        name: {
          de: "Schweinshaxe(n), mit Haut",
          pl: "Golonka wieprzowa ze skórą",
        },
        amount: 1.5,
        unit: { de: "kg", pl: "kg" },
        group: "other",
        storeHintDe: "Metzger / Polenladen — hintere Haxe bevorzugen",
      },
      {
        id: "gol-2",
        name: { de: "Zwiebeln", pl: "Cebule" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gol-3",
        name: { de: "Karotte", pl: "Marchew" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gol-4",
        name: { de: "Knoblauchzehen", pl: "Ząbki czosnku" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gol-5",
        name: { de: "Fleischbrühe oder Wasser", pl: "Bulion lub woda" },
        amount: 1,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "gol-6",
        name: { de: "Majoran", pl: "Majeranek" },
        amount: 2,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
        storeHintDe: "Polenladen — siehe Majeranek-Lexikon",
      },
      {
        id: "gol-7",
        name: { de: "Lorbeerblätter", pl: "Liście laurowe" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "gol-8",
        name: { de: "Öl oder Schmalz zum Anbraten", pl: "Olej lub smalec" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "gol-9",
        name: { de: "Salz, Pfeffer", pl: "Sól, pieprz" },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
      {
        id: "gol-10",
        name: {
          de: "Senf / Meerrettich zum Servieren",
          pl: "Musztarda / chrzan do podania",
        },
        amount: 1,
        unit: { de: "nach Bedarf", pl: "według uznania" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-21T00:05:00.000Z",
    updatedAt: "2026-07-21T00:05:00.000Z",
  },
  {
    id: "recipe-kompot-z-suszu",
    status: "published",
    coverImage:
      "https://images.unsplash.com/photo-1534336294469-f77e4c59ada6?w=1600&q=80",
    prepMinutes: 15,
    cookMinutes: 45,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: [],
    categoryIds: ["category-suess", "category-vegetarisch", "category-schnell"],
    relatedPostIds: [
      "post-wigilia",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Kompot z suszu",
        slug: "kompot-z-suszu",
        excerpt:
          "Dunkler Trockenobstkompot aus Pflaume, Apfel, Birne und Aprikose — Getränk und Dessert der Wigilia. Fokus bleibt das Kompot, nicht der Speiseplan-Pillar.",
        steps: [
          {
            text: "Trockenobst (Pflaumen, Äpfel, Birnen, Aprikosen; optional Rosinen) abspülen. In einem großen Topf mit 2–2,5 l kaltem Wasser ansetzen; 30 Minuten einweichen, wenn die Früchte sehr hart sind.",
            tip: "Mischung oft im [Polenladen](/de/blog/polenladen-einkaufen). Ersatzlogik für fehlende Sorten: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
          {
            text: "Mit Zimtstange, 2–3 Gewürznelken und optional Orangenschale aufsetzen. Einmal aufkochen, dann 30–40 Minuten bei kleiner Hitze köcheln, bis die Früchte weich und die Flüssigkeit aromatisch-dunkel ist.",
            tip: "Anlass [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan) — dort bleibt der Menü-Artikel; hier der Rezept Kompot.",
          },
          {
            text: "Mit Zucker oder Honig abschmecken — nicht übergießen; die Fruchtsüße soll tragen. Zimtstange und Nelken entfernen.",
          },
          {
            text: "Abkühlen lassen. Kalt oder lauwarm in Karaffe oder Schüssel servieren — mit Früchten oder abgeseiht als Getränk.",
            tip: "Neben Barszcz und Fischgang planen; Fischlinien bleiben [Karp](/de/rezepte/karp) bzw. [Ryba po grecku](/de/rezepte/ryba-po-grecku).",
          },
          {
            text: "Reste im Kühlschrank 2–3 Tage halten; Geschmack rundet sich. Zum Frühstück am 25. oder als Beilage zu Makowiec.",
          },
        ],
        seoTitle: "Kompot z suszu Rezept | Trockenobstkompot | Alemniam",
        seoDescription:
          "Kompot z suszu — polnischer Trockenobstkompot für Wigilia. Bilingual mit DE-Einkauf, klar als Getränk-Fokus.",
      },
      pl: {
        title: "Kompot z suszu",
        slug: "kompot-z-suszu",
        excerpt:
          "Ciemny kompot z suszonych śliwek, jabłek, gruszek i moreli — napój i deser Wigilii. fokus zostaje kompot, nie pillar menu.",
        steps: [
          {
            text: "Susz (śliwki, jabłka, gruszki, morele; opcjonalnie rodzynki) opłucz. Zalej 2–2,5 l zimnej wody; namocz 30 minut, jeśli owoce są bardzo twarde.",
            tip: "Mieszankę często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Zamienniki brakujących owoców: [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Dodaj laskę cynamonu, 2–3 goździki i opcjonalnie skórkę pomarańczy. Zagotuj, potem gotuj 30–40 minut na małym ogniu, aż owoce zmiękną, a płyn będzie aromatyczny i ciemny.",
            tip: "Okazja [menu wigilijne](/pl/blog/menu-wigilijne) — tam owner planu; tu Rezept kompotu.",
          },
          {
            text: "Dopraw cukrem lub miodem — nie przesładzaj; słodycz owoców ma prowadzić. Wyjmij cynamon i goździki.",
          },
          {
            text: "Ostudź. Podawaj zimny lub letni w karafce lub misce — z owocami albo przecedzony jako napój.",
            tip: "Planuj obok barszczu i ryby; linie ryb: [karp](/pl/rezepte/karp) lub [ryba po grecku](/pl/rezepte/ryba-po-grecku).",
          },
          {
            text: "Resztki w lodówce 2–3 dni; smak się układa. Na śniadanie 25. lub do makowca.",
          },
        ],
        seoTitle: "Kompot z suszu przepis | Kompot wigilijny | Alemniam",
        seoDescription:
          "Kompot z suszu — polski kompot z suszonych owoców na Wigilię. Dwujęzycznie z zakupami w DE, fokus napoju.",
      },
    },
    ingredients: [
      {
        id: "kzs-1",
        name: {
          de: "Gemischtes Trockenobst (Pflaume, Apfel, Birne, Aprikose)",
          pl: "Mieszanka suszu (śliwka, jabłko, gruszka, morela)",
        },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen — fertige Wigilia-Mischung oder selbst mischen",
      },
      {
        id: "kzs-2",
        name: { de: "Wasser", pl: "Woda" },
        amount: 2.5,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "kzs-3",
        name: { de: "Zimtstange", pl: "Laska cynamonu" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "kzs-4",
        name: { de: "Gewürznelken", pl: "Goździki" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "kzs-5",
        name: {
          de: "Zucker oder Honig",
          pl: "Cukier lub miód",
        },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "kzs-6",
        name: {
          de: "Orangenschale (optional, ungespritzt)",
          pl: "Skórka pomarańczy (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "Streifen", pl: "pasek" },
        group: "produce",
      },
      {
        id: "kzs-7",
        name: {
          de: "Rosinen (optional)",
          pl: "Rodzynki (opcjonalnie)",
        },
        amount: 50,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-21T00:10:00.000Z",
    updatedAt: "2026-07-21T00:10:00.000Z",
  },
];
