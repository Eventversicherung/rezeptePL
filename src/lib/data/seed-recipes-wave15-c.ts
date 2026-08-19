import type { Recipe } from "@/types/content";

/**
 * Wave 15 Paket C — Sonntags-Beilagen.
 * - recipe-marchewka-groszek — warme Möhren+Erbsen-Beilage (Butter/Glasur)
 *   ≠ Mizeria ≠ Buraczki ≠ Surówka
 * - recipe-fasolka-szparagowa — grüne Stangenbohnen po polsku (Butter/Semmelbrösel)
 *   ≠ Fasolka po bretońsku (Eintopf / recipe-fasolka + post-fasolka-guide)
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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-marchewka-groszek/009472cc-9559-425d-9660-aa0ea87b2781.webp",
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
          "Warme Möhren-Erbsen-Beilage mit Butterglasur, der ruhige Klassiker neben Schabowy und dem Sonntagsteller.",
        steps: [
          {
            text: "Möhren schälen und in gleichmäßige Würfel oder Scheiben von etwa 1 cm schneiden, damit alle Stücke gleichzeitig gar werden. Frische oder tiefgekühlte Erbsen bereitstellen, tiefgekühlte dabei nicht vorher auftauen.",
            tip: "Das ist eine warme Beilage, kein Rohkostsalat, die [Mizeria](/de/rezepte/mizeria) bleibt kalt mit Gurke, die [Buraczki](/de/rezepte/buraczki) bleiben bei Roter Bete.",
          },
          {
            text: "Möhren in wenig Salzwasser 8 bis 12 Minuten garen, bis sie bissfest-weich sind. Abgießen und etwas Kochwasser für später aufheben.",
            tip: "Nicht zu weich kochen, die Glasur braucht später noch Struktur, um an den Stücken zu haften. Einkauf für die Zutaten: [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "In einer Pfanne Butter schmelzen, optional mit einer halben Teelöffel Zucker. Möhren und Erbsen dazugeben und 3 bis 5 Minuten schwenken, bis alles glänzt und die Erbsen heiß sind.",
            tip: "Der Zucker rundet die natürliche Süße der Möhren ab, ohne die Beilage süß schmecken zu lassen.",
          },
          {
            text: "Mit Salz, Pfeffer und gehacktem Dill oder Petersilie abschmecken. Bei Bedarf 1 bis 2 Esslöffel Kochwasser für Seidenglanz einrühren, eine dicke Soße wie bei einem Eintopf ist hier nicht gewollt.",
            tip: "Zum Menü passt der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), klassisch steht die Beilage neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy).",
          },
          {
            text: "Sofort heiß servieren. Reste im Kühlschrank aufbewahren und kurz in der Pfanne mit etwas Butter aufwärmen, in der Mikrowelle werden die Möhren dagegen schnell weich statt glänzend.",
            tip: "Fehlt frischer Dill oder gute Butter, hilft der Beitrag zu [Ersatzprodukten DE](/de/blog/ersatzprodukte-de) weiter.",
          },
        ],
        seoTitle:
          "Marchewka z groszkiem Rezept | Möhren Erbsen Beilage | Alemniam",
        seoDescription:
          "Marchewka z groszkiem: warme Möhren und Erbsen mit Butter, eine polnische Sonntagsbeilage, anders als Mizeria oder Buraczki.",
      },
      pl: {
        title: "Marchewka z groszkiem",
        slug: "marchewka-groszek",
        excerpt:
          "Ciepły dodatek z marchewki i groszku w maśle, spokojny klasyk obok schabowego i niedzielnego talerza.",
        steps: [
          {
            text: "Marchewkę obierz i pokrój w równe kostki lub plasterki, około 1 cm, żeby wszystkie kawałki ugotowały się jednocześnie. Przygotuj świeży lub mrożony groszek, mrożonego nie rozmrażaj wcześniej.",
            tip: "To ciepły dodatek, nie surówka, [mizeria](/pl/rezepte/mizeria) zostaje zimna z ogórkiem, [buraczki](/pl/rezepte/buraczki) zostają przy burakach.",
          },
          {
            text: "Marchewkę gotuj w małej ilości osolonej wody 8 do 12 minut, aż będzie miękka, ale wciąż lekko twarda w środku. Odcedź i zachowaj odrobinę wody z gotowania na później.",
            tip: "Nie rozgotuj marchewki, glazura potrzebuje jeszcze trochę struktury, żeby przylegać do kawałków. Zakupy do przepisu: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Na patelni rozpuść masło, opcjonalnie z pół łyżeczki cukru. Dodaj marchewkę i groszek, smaż 3 do 5 minut, aż wszystko nabierze połysku, a groszek będzie gorący.",
            tip: "Cukier wygładza naturalną słodycz marchewki, bez sprawiania, że dodatek smakuje słodko.",
          },
          {
            text: "Dopraw solą, pieprzem i siekanym koprem lub pietruszką. W razie potrzeby wmieszaj 1 do 2 łyżek wody z gotowania dla połysku, gęsty sos jak w gulaszu nie jest tu potrzebny.",
            tip: "Do menu pasuje [obiad niedzielny](/pl/blog/obiad-niedzielny), klasycznie dodatek stoi obok [kotleta schabowego](/pl/rezepte/kotlet-schabowy).",
          },
          {
            text: "Podawaj od razu gorące. Resztki przechowuj w lodówce i krótko podgrzej na patelni z odrobiną masła, w mikrofalówce marchewka szybko robi się miękka, ale traci połysk.",
            tip: "Brak świeżego koperku lub dobrego masła uzupełniają [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
          },
        ],
        seoTitle:
          "Marchewka z groszkiem przepis | Ciepły dodatek | Alemniam",
        seoDescription:
          "Marchewka z groszkiem: ciepła marchewka i groszek z masłem, niedzielny dodatek, inny niż mizeria czy buraczki.",
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
          de: "Nur Möhren, dann ehrlich als „marchewka z masłem“ benennen",
          pl: "Tylko marchewka, wtedy jasno nazwana jako „marchewka z masłem”",
        },
      },
      {
        id: "mz-3",
        name: { de: "Butter", pl: "Masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        substitute: {
          de: "Pflanzenmargarine, den abweichenden Geschmack ehrlich nennen",
          pl: "Margaryna roślinna, inny smak nazwać uczciwie",
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
        storeHintDe: "Frischer Dill oft im Polenladen oder auf dem Markt",
      },
    ],
    createdAt: "2026-07-21T12:00:00.000Z",
    updatedAt: "2026-07-21T12:00:00.000Z",
  },
  {
    id: "recipe-fasolka-szparagowa",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-fasolka-szparagowa/b77438bf-1db3-4f2b-98d9-95076e60db03.webp",
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
          "Grüne Stangenbohnen als warme Beilage mit Butter und goldenen Semmelbröseln, deutlich anders als der weiße Bohnen-Eintopf Fasolka po bretońsku.",
        steps: [
          {
            text: "Grüne Stangenbohnen waschen, die Enden abschneiden und bei Bedarf halbieren. In Salzwasser 6 bis 10 Minuten bissfest garen und abgießen.",
            tip: "Das sind grüne Schoten, kein weißer Bohnen-Eintopf, dafür bleiben [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku) und der [Fasolka-Guide](/de/blog/fasolka-po-bretonsku) zuständig.",
          },
          {
            text: "In einer Pfanne Butter schmelzen. Optional fein gehackte Zwiebel oder Knoblauch kurz glasig dünsten, ohne sie braun werden zu lassen.",
            tip: "Butter, Semmelbrösel und Zwiebel findest du gebündelt oft im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Semmelbrösel (bułka tarta) in der Butter goldbraun rösten, dabei häufig umrühren. Das ist die polnische Hausvariante und keine Tomaten-Wurst-Sauce.",
            tip: "Die Bohnen vor diesem Schritt kurz abtropfen und ruhen lassen, sonst nehmen die Brösel Feuchtigkeit auf und werden weich statt knusprig.",
          },
          {
            text: "Abgetropfte Bohnen unterheben, mit Salz und Pfeffer abschmecken und 1 bis 2 Minuten schwenken, bis alles glänzt und die Brösel gut haften.",
            tip: "Zum Menü passt der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), klassisch neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy) oder einem Braten, nicht als eigenständiges Eintopf-Hauptgericht.",
          },
          {
            text: "Sofort heiß servieren, optional mit Dill oder Petersilie. Reste kurz in der Pfanne aufwärmen, in der Mikrowelle werden die Brösel dagegen schnell weich.",
            tip: "Wer Tomate, Kiełbasa und weiße Bohnen zusammen möchte, findet das bei [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku), einem ganz anderen Gericht.",
          },
        ],
        seoTitle:
          "Fasolka szparagowa Rezept | Grüne Bohnen polnisch | Alemniam",
        seoDescription:
          "Fasolka szparagowa po polsku: grüne Stangenbohnen mit Butter und Semmelbröseln, anders als der Eintopf Fasolka po bretońsku.",
      },
      pl: {
        title: "Fasolka szparagowa po polsku",
        slug: "fasolka-szparagowa",
        excerpt:
          "Zielona fasolka szparagowa jako ciepły dodatek z masłem i złotą bułką tartą, zupełnie inne danie niż gulasz z białej fasoli fasolka po bretońsku.",
        steps: [
          {
            text: "Fasolkę szparagową umyj, obetnij końce i ewentualnie przekrój na pół. Gotuj w osolonej wodzie 6 do 10 minut al dente, potem odcedź.",
            tip: "To zielone strąki, nie gulasz z białej fasoli, tamten fokus zostaje przy [fasolce po bretońsku](/pl/rezepte/fasolka-po-bretonsku) i [przewodniku po fasolce](/pl/blog/fasolka-po-bretonsku).",
          },
          {
            text: "Na patelni rozpuść masło. Opcjonalnie drobno posiekaną cebulę lub czosnek krótko zeszklij, nie przypalając ich.",
            tip: "Masło, bułkę tartą i cebulę kupisz w jednym miejscu, często w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Bułkę tartą zrumień na maśle na złoto, często mieszając. To linia domu, nie sos pomidorowo-kiełbasiany.",
            tip: "Fasolkę przed tym krokiem krótko odsącz i osusz, inaczej bułka wchłonie wilgoć i zmiękczy się, zamiast pozostać chrupiąca.",
          },
          {
            text: "Dodaj odsączoną fasolkę, dopraw solą i pieprzem, smaż 1 do 2 minut, aż wszystko nabierze połysku, a bułka dobrze przylega.",
            tip: "Do menu pasuje [obiad niedzielny](/pl/blog/obiad-niedzielny), obok [schabowego](/pl/rezepte/kotlet-schabowy) lub pieczenia, nie jako samodzielny gulasz główny.",
          },
          {
            text: "Podawaj od razu gorące, opcjonalnie z koprem lub pietruszką. Resztki krótko podgrzej na patelni, w mikrofalówce bułka szybko mięknie.",
            tip: "Kto chce pomidor, kiełbasę i białą fasolę razem, znajdzie to w [fasolce po bretońsku](/pl/rezepte/fasolka-po-bretonsku), zupełnie innym daniu.",
          },
        ],
        seoTitle:
          "Fasolka szparagowa przepis | Zielona fasolka po polsku | Alemniam",
        seoDescription:
          "Fasolka szparagowa po polsku: zielone strąki z masłem i bułką tartą, inne danie niż fasolka po bretońsku.",
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
        storeHintDe: "Frisch oder TK, keine weißen Bohnen aus dem Glas",
        substitute: {
          de: "TK-Bohnen, Garzeit verkürzen und ehrlich benennen",
          pl: "Mrożona fasolka, krócej gotować i nazwać uczciwie",
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
        storeHintDe: "Polenladen oder Backabteilung, fein und trocken",
        substitute: {
          de: "Ohne Brösel nur Butter, die Hausvariante dann ehrlich „z masłem“ nennen",
          pl: "Bez bułki tylko masło, wariant jasno nazwać „z masłem”",
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
