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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-mazurek/bfb03b99-ac14-47da-b69d-c24dc641771f.webp",
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
          "Flacher Osterkuchen auf Mürbeteig mit Nuss-Honig-Belag, eine festliche Hausvariante, die sich klar von Babka, Sernik oder Makowiec unterscheidet.",
        steps: [
          {
            text: "Für den Boden Mehl, kalte Butter, Zucker, Ei und eine Prise Salz zu einem glatten Mürbeteig verkneten. Zu einer Scheibe formen, in Folie wickeln und 30 Minuten kühlen.",
            tip: "Das ist ein kurzer, flacher Teig, kein Hefegugelhupf wie [Babka](/de/rezepte/babka). Den Rahmen für den ganzen Ostertisch liefert der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan).",
          },
          {
            text: "Ein Backblech oder eine flache Form von etwa 30 mal 40 Zentimetern fetten, den Teig dünn auf etwa 5 Millimeter ausrollen, einlegen und die Ränder hochdrücken. Mit einer Gabel mehrfach einstechen.",
            tip: "Eine gerollte Mohnrolle bleibt [Makowiec](/de/rezepte/makowiec) vorbehalten, die Käsekuchen-Linie führt zu [Sernik](/de/rezepte/sernik).",
          },
          {
            text: "Den Boden bei 180 Grad, bei Umluft etwas niedriger, 12 bis 15 Minuten vorbacken, bis er matt und leicht golden aussieht, dann herausnehmen.",
            tip: "Ein zu lange vorgebackener Boden wird beim zweiten Backgang leicht zu dunkel, deshalb reicht hier ein leichtes Anbräunen völlig aus.",
          },
          {
            text: "Für den Belag gehackte Nüsse, je nach Hausbrauch Walnuss, Haselnuss oder Mandel, mit Butter, Honig oder Zucker und einer Prise Salz kurz in der Pfanne rösten, bis die Masse bindet. Gleichmäßig auf dem heißen Boden verteilen.",
            tip: "Nüsse und guten Honig findest du oft im [Polenladen](/de/blog/polenladen-einkaufen). Wie Hefeteig sich anfühlt, zeigt zwar die [Makowiec-Technik](/de/blog/makowiec-technik), die gerollte Mohnvariante bleibt aber allein dem Makowiec vorbehalten.",
          },
          {
            text: "Weitere 15 bis 20 Minuten backen, bis der Belag goldbraun und fest geworden ist. Abkühlen lassen, dann in Rauten schneiden. Optional mit etwas Puderzucker oder getrockneten Früchten garnieren.",
            tip: "Den festlichen Rahmen für den ganzen Ostertisch liefert der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan), der Fokus hier bleibt trotzdem klar bei diesem einen Mazurek.",
          },
        ],
        seoTitle: "Mazurek Rezept | Osterkuchen polnisch orzechowy | Alemniam",
        seoDescription:
          "Mazurek orzechowy: flacher Mürbeteig mit Nussbelag. Bilingual, Wielkanoc-tauglich, klar getrennt von Babka, Sernik und Makowiec.",
      },
      pl: {
        title: "Mazurek orzechowy",
        slug: "mazurek",
        excerpt:
          "Płaski mazurek na kruchym spodzie z orzechowo-miodowym wierzchem, świąteczna wersja domowa, wyraźnie inna niż babka, sernik czy makowiec.",
        steps: [
          {
            text: "Na spód zagnieć mąkę, zimne masło, cukier, jajko i szczyptę soli na gładkie kruche ciasto. Uformuj placek, owiń folią i chłodź 30 minut.",
            tip: "To krótki, płaski spód, a nie drożdżowa [babka](/pl/rezepte/babka). Ramę na cały stół wielkanocny daje [menu wielkanocne](/pl/blog/menu-wielkanocne).",
          },
          {
            text: "Natłuść blachę lub płaską formę o wymiarach około 30 na 40 centymetrów, rozwałkuj ciasto cienko na około 5 milimetrów, ułóż je i podnieś brzegi. Nakłuj widelcem w kilku miejscach.",
            tip: "Zwijana rolada makowa zostaje przy [makowcu](/pl/rezepte/makowiec), linia sernikowa prowadzi do [sernika](/pl/rezepte/sernik).",
          },
          {
            text: "Podpiecz spód w 180 stopniach, przy termoobiegu nieco niżej, przez 12 do 15 minut, aż będzie matowy i lekko złoty, potem wyjmij.",
            tip: "Zbyt długo podpieczony spód łatwo się przypali podczas drugiego pieczenia, dlatego wystarczy tu lekkie zarumienienie.",
          },
          {
            text: "Na wierzch posiekane orzechy, według domu włoskie, laskowe lub migdały, z masłem, miodem lub cukrem i szczyptą soli krótko podgrzej na patelni, aż masa zwiąże się. Rozprowadź równomiernie na gorącym spodzie.",
            tip: "Orzechy i dobry miód znajdziesz często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Wyczucie ciasta drożdżowego pokazuje [technika makowca](/pl/blog/makowiec-technika), ale zwijana wersja makowa zostaje wyłącznie przy makowcu.",
          },
          {
            text: "Piecz kolejne 15 do 20 minut, aż wierzch będzie złoty i związany. Ostudź, pokrój w romby. Opcjonalnie udekoruj cukrem pudrem lub suszonymi owocami.",
            tip: "Ramę na cały stół wielkanocny daje [menu wielkanocne](/pl/blog/menu-wielkanocne), fokus tego przepisu zostaje jednak wyraźnie przy tym jednym mazurku.",
          },
        ],
        seoTitle: "Mazurek przepis | Mazurek orzechowy wielkanocny | Alemniam",
        seoDescription:
          "Mazurek orzechowy: kruche ciasto z orzechowym wierzchem. Dwujęzycznie, na Wielkanoc, jasno osobno od babki, sernika i makowca.",
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
        storeHintDe: "Polenladen im Nussregal, am Geruch die Frische prüfen",
        substitute: {
          de: "Auch nur eine Nusssorte funktioniert, das dann ehrlich benennen",
          pl: "Wystarczy też jeden rodzaj orzechów, tylko trzeba to uczciwie napisać",
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
        storeHintDe: "Honig aus dem Polenladen ist oft aromatischer",
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
          de: "Lässt sich weglassen, der Belag allein reicht schon aus",
          pl: "Można pominąć, sam wierzch całkowicie wystarczy",
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
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-buraczki/0b3858b6-7aea-471e-8d89-2f66aac1edfd.webp",
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
          "Warme geraspelte Rote-Bete-Beilage mit Apfel und Meerrettich, klassisch zum Sonntagsschnitzel, klar zu unterscheiden von Botwinka-Suppe und Barszcz.",
        steps: [
          {
            text: "Rote Bete waschen und ungeschält in Salzwasser weich kochen, oder bereits vorgekochte Bete verwenden. Abkühlen lassen, schälen und grob raspeln oder in feine Streifen schneiden.",
            tip: "Das ist eine Beilage und keine Suppe, die Suppen [Botwinka](/de/rezepte/botwinka) und [Barszcz](/de/rezepte/barszcz-czerwony) bleiben eigene Rezepte mit ganz anderer Konsistenz.",
          },
          {
            text: "Zwiebel fein würfeln und in Butter oder Öl glasig dünsten. Die Bete dazugeben, mit wenig Wasser oder Brühe und einer Prise Zucker 8 bis 10 Minuten warm ziehen lassen.",
            tip: "Wer die Bete lieber zu einem kalten, süßsauren Relish verarbeitet, findet das bei [Ćwikła](/de/rezepte/cwikla), ein ganz anderer Charakter als diese warme Beilage.",
          },
          {
            text: "Einen sauren Apfel raspeln und unterheben. Mit Salz, Pfeffer und geriebenem Meerrettich abschmecken, bis es säuerlich-scharf und nicht wässrig schmeckt.",
            tip: "Meerrettich und gute Bete findest du oft im [Polenladen](/de/blog/polenladen-einkaufen). Wie Śmietana getrennt dazu passt, zeigt der Guide zu [Śmietana und Schmand](/de/blog/smietana-schmand).",
          },
          {
            text: "Optional einen Esslöffel Essig oder Zitronensaft für mehr Säure zugeben. Kurz erhitzen, ohne es zu Brei zu kochen, und heiß oder lauwarm servieren.",
            tip: "Klassisch dazu passt [Kotlet schabowy](/de/rezepte/kotlet-schabowy), Panier-Wissen liefert der [Panieren-Guide](/de/blog/panieren-schabowy), und der Menürahmen steht im [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Nicht mit dem kalten Mayo-Festsalat [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) verwechseln, denn dort ist alles gemischt und kalt, während hier allein die warme Bete den Teller trägt.",
          },
        ],
        seoTitle: "Buraczki Rezept | Rote-Bete-Beilage polnisch | Alemniam",
        seoDescription:
          "Buraczki: warme Rote Bete mit Apfel und Meerrettich. Bilingual, Sonntagsbeilage, klar getrennt von Botwinka und Barszcz.",
      },
      pl: {
        title: "Buraczki",
        slug: "buraczki",
        excerpt:
          "Ciepły dodatek z tartych buraków z jabłkiem i chrzanem, klasycznie do schabowego w niedzielę, wyraźnie inny niż zupa botwinka i barszcz.",
        steps: [
          {
            text: "Buraki umyj i ugotuj w skórce w osolonej wodzie, albo użyj gotowanych. Ostudź, obierz i zetrzyj grubo lub pokrój w cienkie paski.",
            tip: "To dodatek, a nie zupa, zupy [botwinka](/pl/rezepte/botwinka) i [barszcz](/pl/rezepte/barszcz-czerwony) zostają osobnymi przepisami o zupełnie innej konsystencji.",
          },
          {
            text: "Cebulę drobno pokrój i zeszklij na maśle lub oleju. Dodaj buraki, odrobinę wody lub bulionu i szczyptę cukru, duś 8 do 10 minut na ciepło.",
            tip: "Kto woli zimny, słodko-kwaśny relish z buraków, znajdzie go w [ćwikle](/pl/rezepte/cwikla), to zupełnie inny charakter niż ten ciepły dodatek.",
          },
          {
            text: "Zetrzyj kwaśne jabłko i wmieszaj. Dopraw solą, pieprzem i startym chrzanem, aż smak będzie kwaśno-ostry, a nie wodnisty.",
            tip: "Chrzan i dobre buraki znajdziesz często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Jak dobrać śmietanę osobno, pokazuje przewodnik [śmietana czy schmand](/pl/blog/smietana-czy-schmand).",
          },
          {
            text: "Opcjonalnie dodaj łyżkę octu lub soku z cytryny dla większej kwasowości. Podgrzej krótko, nie gotuj na papkę, i podawaj gorące lub letnie.",
            tip: "Klasycznie pasuje do [kotleta schabowego](/pl/rezepte/kotlet-schabowy), o panierce opowiada [poradnik panierowania](/pl/blog/panierowanie-kotlet), a miejsce w menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Nie myl z zimną majonezową [sałatką jarzynową](/pl/rezepte/salatka-jarzynowa), tam wszystko jest wymieszane i zimne, tu za talerz odpowiada wyłącznie ciepły burak.",
          },
        ],
        seoTitle: "Buraczki przepis | Ciepły dodatek z buraków | Alemniam",
        seoDescription:
          "Buraczki: ciepłe buraki z jabłkiem i chrzanem. Dwujęzycznie, dodatek niedzielny, jasno osobno od botwinki i barszczu.",
      },
    },
    ingredients: [
      {
        id: "bu-1",
        name: { de: "Rote Bete", pl: "Buraki" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "produce",
        storeHintDe: "Roh oder vorgekocht im Vakuum, auf gute Farbe achten",
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
          de: "Mehr Essig oder Zitrone gleicht es aus, das dann ehrlich benennen",
          pl: "Więcej octu lub cytryny to wyrówna, tylko trzeba to uczciwie napisać",
        },
      },
      {
        id: "bu-4",
        name: { de: "Geriebener Meerrettich", pl: "Tarty chrzan" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
        storeHintDe: "Polenladen, Glasware vor dem Kauf auf die Schärfe prüfen",
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
        storeHintDe: "Schmand oder Crème fraîche, mehr dazu im Śmietana-Guide",
        substitute: {
          de: "Lässt sich weglassen, der Meerrettich trägt die Beilage auch allein",
          pl: "Można pominąć, sam chrzan również dobrze niesie ten dodatek",
        },
      },
    ],
    createdAt: "2026-07-21T10:00:00.000Z",
    updatedAt: "2026-07-21T10:00:00.000Z",
  },
];
