import type { Recipe } from "@/types/content";

/**
 * Wave 16 Paket C — Pierniczki + Knedle z truskawkami.
 * Affiliate: guide-only. NO SEED_VERSION bump here.
 */
export const seedRecipesWave16C: Recipe[] = [

  {
    id: "recipe-pierniczki",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pierniczki/c541e741-161d-41f4-a89d-93bd90d76fdb.webp",
    prepMinutes: 40,
    cookMinutes: 12,
    servings: 40,
    regionIds: [],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch"],
    relatedPostIds: ["post-wigilia", "post-makowiec-technik", "post-polenladen"],
    videoUrl: null,
    translations: {
      de: {
        title: "Pierniczki",
        slug: "pierniczki",
        excerpt:
          "Pierniczki sind kleine, würzige polnische Lebkuchenplätzchen mit Honig, ausgestochen und gebacken, oft mit einer feinen Zuckerglasur.",
        steps: [
          {
            text: "Honig mit Butter in einem Topf erwärmen, bis die Butter geschmolzen ist, dabei nicht kochen lassen. Etwas abkühlen lassen, dann mit Ei, Mehl, Gewürzmischung und Backpulver zu einem glatten Teig verkneten. Eine Stunde kalt ruhen lassen.",
            tip: "Das ist der Plätzchenteig, nicht der Teig für den geschnittenen [Piernik](/de/rezepte/piernik)-Laib. Gute Gewürzmischungen mit Zimt, Nelke und Ingwer findest du oft im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Den Teig dünn ausrollen, Formen ausstechen und auf ein mit Backpapier ausgelegtes Blech legen. Bei 175 Grad etwa 10 bis 12 Minuten backen, bis die Ränder fest sind.",
            tip: "Zu lange im Ofen werden die Plätzchen steinhart, deshalb lieber pünktlich herausnehmen. Der Anlassrahmen für die Weihnachtsbäckerei steht im Beitrag zu [Wigilia](/de/blog/wigilia-speiseplan), Geduld beim Backen erklärt zusätzlich die [Makowiec-Technik](/de/blog/makowiec-technik).",
          },
          {
            text: "Auf einem Rost vollständig abkühlen lassen, dann nach Belieben mit Zuckerglasur verzieren. In gut verschlossenen Dosen aufbewahren.",
            tip: "Fehlt guter Honig, hilft der Überblick zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) weiter. Wer stattdessen Hefegebäck sucht, findet das bei der [Drożdżówka](/de/rezepte/drozdzowka).",
          },
        ],
        seoTitle: "Pierniczki Rezept | Lebkuchenplätzchen polnisch | Alemniam",
        seoDescription:
          "Pierniczki: würzige Honigplätzchen zum Ausstechen, ideal für die Weihnachtsbäckerei.",
      },
      pl: {
        title: "Pierniczki",
        slug: "pierniczki",
        excerpt:
          "Pierniczki to małe, korzenne polskie ciasteczka z miodem, wykrawane i pieczone, często z delikatnym lukrem.",
        steps: [
          {
            text: "Podgrzej miód z masłem w garnku, aż masło się rozpuści, ale nie doprowadzaj do wrzenia. Odstaw do przestygnięcia, potem zagnieć z jajkiem, mąką, przyprawą do piernika i proszkiem do pieczenia na gładkie ciasto. Schłodź je godzinę.",
            tip: "To ciasto na ciasteczka, nie na krojony bochenek [piernika](/pl/rezepte/piernik). Dobre mieszanki przypraw z cynamonem, goździkami i imbirem znajdziesz często w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "Wałkuj ciasto cienko, wykrawaj foremkami i układaj na blasze wyłożonej papierem. Piecz w 175 stopniach około 10 do 12 minut, aż brzegi stwardnieją.",
            tip: "Za długie pieczenie zamienia ciasteczka w kamień, więc lepiej wyjąć je na czas. Okazja do świątecznego pieczenia opisana jest w [menu wigilijnym](/pl/blog/menu-wigilijne), a o cierpliwości przy pieczeniu więcej mówi [technika makowca](/pl/blog/makowiec-technika).",
          },
          {
            text: "Ostudź całkowicie na kratce, potem opcjonalnie udekoruj lukrem. Przechowuj w dobrze zamkniętej puszce.",
            tip: "Brak dobrego miodu? Sprawdź [zamienniki](/pl/blog/zamienniki-skladnikow). Kto szuka ciasta drożdżowego, znajdzie je w [drożdżówce](/pl/rezepte/drozdzowka).",
          },
        ],
        seoTitle: "Pierniczki przepis | Lebkuchenplätzchen | Alemniam",
        seoDescription:
          "Pierniczki z miodem i przyprawami, klasyczne ciasteczka na święta.",
      },
    },
    ingredients: [
      { id: "pi-1", name: { de: "Mehl", pl: "Mąka" }, amount: 350, unit: { de: "g", pl: "g" }, group: "pantry" },
      { id: "pi-2", name: { de: "Honig", pl: "Miód" }, amount: 120, unit: { de: "g", pl: "g" }, group: "pantry" },
      { id: "pi-3", name: { de: "Butter", pl: "Masło" }, amount: 80, unit: { de: "g", pl: "g" }, group: "dairy" },
      { id: "pi-4", name: { de: "Ei", pl: "Jajko" }, amount: 1, unit: { de: "Stück", pl: "szt." }, group: "dairy" },
      { id: "pi-5", name: { de: "Piernik-Gewürz (Zimt-Nelke-Mix)", pl: "Przyprawa do piernika" }, amount: 2, unit: { de: "TL", pl: "łyżeczki" }, group: "spices", storeHintDe: "Im Polenladen" },
      { id: "pi-6", name: { de: "Backpulver", pl: "Proszek do pieczenia" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "pantry" },
      { id: "pi-7", name: { de: "Puderzucker für Glasur (optional)", pl: "Cukier puder na lukier (opcjonalnie)" }, amount: 100, unit: { de: "g", pl: "g" }, group: "pantry" },
    ],
    createdAt: "2026-07-28T12:00:00.000Z",
    updatedAt: "2026-07-28T12:00:00.000Z",
  },
  {
    id: "recipe-knedle-truskawki",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-knedle-truskawki/63f87f48-6677-49ba-b171-a4df96d6f2c6.webp",
    prepMinutes: 45,
    cookMinutes: 20,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch", "category-hauptgerichte"],
    relatedPostIds: ["post-sonntagsessen", "post-twarog", "post-polenladen"],
    videoUrl: null,
    translations: {
      de: {
        title: "Knedle z truskawkami",
        slug: "knedle-truskawki",
        excerpt:
          "Knedle z truskawkami sind Kartoffelknödel mit einer ganzen Erdbeere in der Mitte, serviert mit gebutterten Bröseln, ein sommerliches Dessert.",
        steps: [
          {
            text: "800 g mehlige Kartoffeln kochen, durch die Presse drücken und abkühlen lassen. Mit Ei, 150 bis 200 g Mehl und einer Prise Salz zu einem nicht zu weichen Teig verkneten.",
            tip: "Das ist die Erdbeer-Linie der Knödel, Pflaumen gehören dagegen zu den [Knedle ze śliwkami](/de/rezepte/knedle-sliwki). Wer die Twaróg-Variante mag, findet Hintergrund im [Twaróg-Guide](/de/blog/twarog-deutschland).",
          },
          {
            text: "Den Teig portionieren, flach drücken und je eine trockene Erdbeere darin einwickeln, die Nahtstelle gut verschließen. In leicht siedendem Wasser garen, bis die Knödel aufsteigen, dann noch zwei Minuten nachziehen lassen.",
            tip: "Zu nasse Früchte reißen leicht den Teig auf, deshalb die Erdbeeren vorher gut trocken tupfen. Gefaltete Beeren-Pierogi sind ein anderes Rezept, das findest du bei den [Pierogi mit Heidelbeeren](/de/rezepte/pierogi/jagody).",
          },
          {
            text: "Semmelbrösel in Butter goldbraun anbraten. Die Knödel abtropfen lassen, mit den Bröseln und Zucker bestreuen und servieren. Ein Löffel Śmietana passt gut dazu.",
            tip: "Der Menürahmen für den Sommertisch steht im Beitrag zum [Sonntagsessen](/de/blog/sonntagsessen-polnisch), gute Semmelbrösel gibt es oft im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
        ],
        seoTitle: "Knedle z truskawkami Rezept | Erdbeerknödel | Alemniam",
        seoDescription:
          "Knedle z truskawkami: Kartoffelknödel mit ganzer Erdbeere und Butterbröseln, ein Sommerdessert.",
      },
      pl: {
        title: "Knedle z truskawkami",
        slug: "knedle-truskawki",
        excerpt:
          "Knedle z truskawkami to knedle ziemniaczane z całą truskawką w środku, podawane z bułką tartą na maśle, letni deser.",
        steps: [
          {
            text: "Ugotuj 800 g mączystych ziemniaków, przeciśnij przez praskę i ostudź. Z jajkiem, 150 do 200 g mąki i szczyptą soli zagnieć niezbyt miękkie ciasto.",
            tip: "To truskawkowa linia knedli, śliwki zostają przy [knedlach ze śliwkami](/pl/rezepte/knedle-sliwki). Kto woli wersję twarogową, znajdzie ją w [przewodniku o twarogu](/pl/blog/twarog-w-niemczech).",
          },
          {
            text: "Podziel ciasto na porcje, spłaszcz każdą i zawiń w niej jedną suchą truskawkę, dokładnie zaklejając brzegi. Gotuj w lekko wrzącej wodzie, aż knedle wypłyną, potem dogotuj jeszcze dwie minuty.",
            tip: "Zbyt mokry owoc łatwo rozrywa ciasto, więc truskawki dobrze osusz przed zawijaniem. Zwijane pierogi z owocami to inny przepis, znajdziesz go w [pierogach z jagodami](/pl/rezepte/pierogi/jagody).",
          },
          {
            text: "Zrumień bułkę tartą na maśle. Odciśnięte knedle posyp bułką i cukrem, podawaj od razu. Dobrze pasuje do nich łyżka śmietany.",
            tip: "Ramy letniego stołu opisuje wpis o [obiedzie niedzielnym](/pl/blog/obiad-niedzielny), a dobrą bułkę tartą znajdziesz często w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
        ],
        seoTitle: "Knedle z truskawkami przepis | Erdbeerknödel | Alemniam",
        seoDescription:
          "Knedle z truskawkami z bułką tartą na maśle, letni deser z całą truskawką w środku.",
      },
    },
    ingredients: [
      { id: "kt-1", name: { de: "Mehlige Kartoffeln", pl: "Ziemniaki mączyste" }, amount: 800, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "kt-2", name: { de: "Erdbeeren", pl: "Truskawki" }, amount: 400, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "kt-3", name: { de: "Mehl", pl: "Mąka" }, amount: 180, unit: { de: "g", pl: "g" }, group: "pantry" },
      { id: "kt-4", name: { de: "Ei", pl: "Jajko" }, amount: 1, unit: { de: "Stück", pl: "szt." }, group: "dairy" },
      { id: "kt-5", name: { de: "Butter", pl: "Masło" }, amount: 60, unit: { de: "g", pl: "g" }, group: "dairy" },
      { id: "kt-6", name: { de: "Semmelbrösel", pl: "Bułka tarta" }, amount: 80, unit: { de: "g", pl: "g" }, group: "pantry" },
      { id: "kt-7", name: { de: "Zucker", pl: "Cukier" }, amount: 40, unit: { de: "g", pl: "g" }, group: "pantry" },
    ],
    createdAt: "2026-07-28T12:00:00.000Z",
    updatedAt: "2026-07-28T12:00:00.000Z",
  },

];
