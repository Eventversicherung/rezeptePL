import type { Recipe } from "@/types/content";

/**
 * Wave 9 Paket A — Fleisch / Sonntag (Żeberka, Rolada śląska).
 * E merges into seed.ts — do not import from seed.ts until Integrator.
 */
export const seedRecipesWave9A: Recipe[] = [
  {
    id: "recipe-zeberka",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-zeberka/98688ec5-e446-4597-9628-69251c9d6448.webp",
    prepMinutes: 25,
    cookMinutes: 90,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
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
        title: "Żeberka pieczone",
        slug: "zeberka",
        excerpt:
          "Żeberka pieczone sind polnische Ofenrippchen aus einer Senf-Majoran-Marinade, die im Backofen langsam gar werden, bis die Ränder knusprig sind und das Fleisch fast von selbst vom Knochen fällt.",
        steps: [
          {
            text: "Die Rippchen waschen, trocken tupfen und zwischen den Knochen in Portionen teilen. Mit Salz, Pfeffer, Senf und [Majoran](/de/blog/majeranek) einreiben, optional mit etwas Knoblauch und Öl. Mindestens eine Stunde marinieren, besser über Nacht im Kühlschrank.",
            tip: "Majoran gehört früh in die Marinade, denn er braucht Zeit, um sein Aroma an das Fleisch abzugeben. Dosierung und Einkauf stehen im [Majoran-Lexikon](/de/blog/majeranek).",
          },
          {
            text: "Den Ofen auf 180 Grad Ober- und Unterhitze vorheizen. Die Rippchen in eine Auflaufform oder auf ein Gitter mit Auffangblech legen und etwas Wasser oder Brühe in die Form gießen, damit nichts anbrennt.",
            tip: "Die Flüssigkeit im Boden der Form verdampft langsam und hält die Luft im Ofen feucht, sodass die Rippchen innen saftig bleiben, während die Oberfläche trotzdem knusprig wird.",
          },
          {
            text: "Etwa 75 bis 90 Minuten backen und die Rippchen zwischendurch wenden. Gegen Ende die Hitze erhöhen oder kurz den Grill nutzen, bis die Kanten knusprig sind, während das Fleisch innen saftig bleibt.",
            tip: "Żeberka gehören in den Ofen und nicht in den Schmortopf, denn das ist ein anderes Gericht als [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy), bei dem Würfelfleisch lange in Flüssigkeit gart.",
          },
          {
            text: "Die Rippchen kurz ruhen lassen und mit Kartoffeln oder Kraut servieren. Wer am selben Tag lieber paniert, bleibt beim [Kotlet schabowy](/de/rezepte/kotlet-schabowy) als eigenem Rezept, und wer Ofenschab ohne Panade mag, findet ihn beim [Schab pieczony](/de/rezepte/schab-pieczony).",
            tip: "Den Rahmen für den ganzen Tisch liefert das [polnische Sonntagsessen](/de/blog/sonntagsessen-polnisch), hier geht es nur um die Rippchen selbst.",
          },
        ],
        seoTitle: "Żeberka pieczone Rezept | Ofenrippchen polnisch | Alemniam",
        seoDescription:
          "Żeberka pieczone: polnische Ofenrippchen mit Majoran und Senf, bilingual mit Einkaufstipps für Deutschland und Sonntagskontext.",
      },
      pl: {
        title: "Żeberka pieczone",
        slug: "zeberka",
        excerpt:
          "Żeberka pieczone to żeberka wieprzowe w marynacie z musztardą i majerankiem, które powoli dochodzą w piekarniku, aż brzegi robią się chrupiące, a mięso samo odchodzi od kości.",
        steps: [
          {
            text: "Żebra umyj, osusz i podziel na porcje między kośćmi. Natrzyj solą, pieprzem, musztardą i [majerankiem](/pl/blog/majeranek-leksykon), opcjonalnie dodaj czosnek i odrobinę oleju. Marynuj co najmniej godzinę, najlepiej całą noc w lodówce.",
            tip: "Majeranek dodaj do marynaty wcześnie, bo potrzebuje czasu, żeby oddać aromat mięsu. Dawkowanie i zakupy znajdziesz w [leksykonie majeranku](/pl/blog/majeranek-leksykon).",
          },
          {
            text: "Nagrzej piekarnik do 180 stopni, góra i dół. Ułóż żebra w naczyniu żaroodpornym albo na ruszcie z blachą pod spodem i wlej na dno odrobinę wody lub bulionu, żeby nic się nie przypaliło.",
            tip: "Płyn na dnie naczynia powoli odparowuje i utrzymuje wilgotne powietrze w piekarniku, dzięki czemu żeberka zostają soczyste w środku, a wierzch i tak zdąży się ładnie zrumienić.",
          },
          {
            text: "Piecz od 75 do 90 minut, od czasu do czasu przewracając żebra. Pod koniec podnieś temperaturę albo na chwilę włącz grill, aż brzegi zrobią się chrupiące, a środek zostanie soczysty.",
            tip: "Żeberka pieczesz w piekarniku, a nie dusisz w garnku, bo to zupełnie inne danie niż [gulasz wieprzowy](/pl/rezepte/gulasz-wieprzowy), gdzie mięso w kostce długo gotuje się w płynie.",
          },
          {
            text: "Odstaw na chwilę, potem podawaj z ziemniakami lub kapustą. Jeśli tego samego dnia panierujesz, zostań przy [kotlecie schabowym](/pl/rezepte/kotlet-schabowy) jako osobnym przepisie, a schab z pieca bez panierki znajdziesz w [schabie pieczonym](/pl/rezepte/schab-pieczony).",
            tip: "Ramy całego menu opisuje [obiad niedzielny](/pl/blog/obiad-niedzielny), a tutaj chodzi wyłącznie o same żeberka.",
          },
        ],
        seoTitle: "Żeberka pieczone przepis | Alemniam",
        seoDescription:
          "Żeberka pieczone z majerankiem i musztardą. Dwujęzycznie z zakupami w Niemczech i kontekstem niedzieli.",
      },
    },
    ingredients: [
      {
        id: "zb-1",
        name: { de: "Schweinerippchen", pl: "Żeberka wieprzowe" },
        amount: 1200,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Von der Fleischtheke, gleichmäßige Stücke, nicht zu mager",
      },
      {
        id: "zb-2",
        name: { de: "Senf (mittelscharf)", pl: "Musztarda (średnio ostra)" },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "zb-3",
        name: { de: "Majoran getrocknet", pl: "Majeranek suszony" },
        amount: 2,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
        storeHintDe: "Im Polenladen oft aromatischer als im Supermarkt",
      },
      {
        id: "zb-4",
        name: { de: "Knoblauch", pl: "Czosnek" },
        amount: 3,
        unit: { de: "Zehen", pl: "ząbki" },
        group: "produce",
      },
      {
        id: "zb-5",
        name: { de: "Öl", pl: "Olej" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "zb-6",
        name: { de: "Salz", pl: "Sól" },
        amount: 1.5,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
      },
      {
        id: "zb-7",
        name: { de: "Pfeffer", pl: "Pieprz" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "zb-8",
        name: {
          de: "Wasser oder leichte Brühe (für die Form)",
          pl: "Woda lub lekki bulion (do naczynia)",
        },
        amount: 150,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T22:00:00.000Z",
    updatedAt: "2026-07-20T22:00:00.000Z",
  },
  {
    id: "recipe-rolada-slaska",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-rolada-slaska/6e7b623d-c9f9-413e-a64e-54ccaf613396.webp",
    prepMinutes: 45,
    cookMinutes: 100,
    servings: 4,
    regionIds: ["region-slask"],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-schmoren", "technique-fuellen"],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-dutch-oven",
      "post-majeranek",
      "post-kasza",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Rolada śląska",
        slug: "rolada-slaska",
        excerpt:
          "Rolada śląska ist die geschmorte Fleischroulade der schlesischen Sonntagsküche, gefüllt mit Speck und Zwiebel und serviert mit dunkler Soße und Kluski.",
        steps: [
          {
            text: "Die Fleischscheiben aus Rind oder Schwein flach klopfen, salzen, pfeffern und dünn mit Senf bestreichen. Für die Füllung Speckstreifen und fein gehackte Zwiebel darauf verteilen, optional mit etwas Majoran, dann fest rollen und mit Küchengarn oder Zahnstochern fixieren.",
            tip: "Das ist eine andere Logik als bei [Zrazy zawijane](/de/rezepte/zrazy), denn dort trägt eine saure Gurke die Füllung. Hier geht es um die schlesische Sonntagsroulade mit Speck, Zwiebel und Kluski.",
          },
          {
            text: "Die Rouladen rundum in heißem Fett scharf anbraten, bis sie überall Farbe angenommen haben. Die restliche Zwiebel und ein Lorbeerblatt in denselben Topf geben.",
            tip: "Ein schwerer Schmortopf hält die Hitze über die ganze Garzeit gleichmäßig, was gerade bei so langen Schmorzeiten den Unterschied macht. Worauf es beim Kauf ankommt, steht im [Dutch-Oven-Guide](/de/blog/dutch-oven-kaufberatung).",
          },
          {
            text: "Mit Brühe ablöschen und zugedeckt 80 bis 100 Minuten schmoren, bis sich das Fleisch mit der Gabel leicht zerteilen lässt. Die Soße abschmecken und bei Bedarf leicht binden.",
            tip: "[Majoran](/de/blog/majeranek) nur sparsam in die Soße geben, denn zu viel davon macht sie schnell bitter statt würzig.",
          },
          {
            text: "Die Rolada in Scheiben schneiden und mit der Soße sowie [Kluski śląskie](/de/rezepte/kluski-slaskie) servieren.",
            tip: "Den Rahmen für den ganzen Tisch liefert das [polnische Sonntagsessen](/de/blog/sonntagsessen-polnisch), das den Menüplatz dieses Schmorgerichts einordnet.",
          },
        ],
        seoTitle: "Rolada śląska Rezept | Schlesische Roulade | Alemniam",
        seoDescription:
          "Rolada śląska: geschmorte Fleischroulade mit Speck-Zwiebel-Füllung, bilingual und klar getrennt von Zrazy zawijane.",
      },
      pl: {
        title: "Rolada śląska",
        slug: "rolada-slaska",
        excerpt:
          "Rolada śląska to duszona rolada mięsna śląskiej kuchni niedzielnej, nadziewana boczkiem i cebulą, podawana z ciemnym sosem i kluskami.",
        steps: [
          {
            text: "Plastry mięsa z wołowiny lub wieprzowiny rozbij na płasko, posól, popieprz i posmaruj cienko musztardą. Na wierzch nałóż paski boczku i drobno posiekaną cebulę, opcjonalnie z odrobiną majeranku, a potem zwiń szczelnie i spnij nitką kuchenną lub wykałaczkami.",
            tip: "To inna logika niż w [zrazach zawijanych](/pl/rezepte/zrazy), bo tam farsz niesie kiszony ogórek. Tutaj chodzi o śląską roladę niedzielną z boczkiem, cebulą i kluskami.",
          },
          {
            text: "Obsmaż rolady ze wszystkich stron na rozgrzanym tłuszczu, aż nabiorą koloru. Resztki cebuli i liść laurowy wrzuć do tego samego garnka.",
            tip: "Ciężki garnek do duszenia trzyma stałą temperaturę przez cały czas gotowania, co przy tak długim duszeniu robi różnicę. Na co zwrócić uwagę przy zakupie, pisze [przewodnik dutch oven](/pl/blog/garnek-do-duszenia).",
          },
          {
            text: "Zalej bulionem i duś pod przykryciem 80 do 100 minut, aż mięso da się łatwo rozdzielić widelcem. Dopraw sos i w razie potrzeby lekko zagęść.",
            tip: "[Majeranek](/pl/blog/majeranek-leksykon) dodawaj do sosu oszczędnie, bo w nadmiarze szybko robi się gorzki zamiast korzenny.",
          },
          {
            text: "Pokrój roladę w plastry i podawaj z sosem oraz [kluskami śląskimi](/pl/rezepte/kluski-slaskie).",
            tip: "Ramy całego stołu opisuje [obiad niedzielny](/pl/blog/obiad-niedzielny), który wyjaśnia miejsce tego dania duszonego w menu.",
          },
        ],
        seoTitle: "Rolada śląska przepis | Alemniam",
        seoDescription:
          "Rolada śląska: duszona rolada z farszem z boczku i cebuli, dwujęzycznie i wyraźnie osobno od zrazów zawijanych.",
      },
    },
    ingredients: [
      {
        id: "rl-1",
        name: {
          de: "Fleischscheiben (Rind oder Schwein)",
          pl: "Plastry mięsa (wołowina lub wieprzowina)",
        },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Dünn geschnittene Scheiben zum Rollen, am besten beim Metzger nachfragen",
      },
      {
        id: "rl-2",
        name: { de: "Senf", pl: "Musztarda" },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "rl-3",
        name: { de: "Speck", pl: "Boczek" },
        amount: 120,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "rl-4",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "rl-5",
        name: { de: "Brühe", pl: "Bulion" },
        amount: 500,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
      {
        id: "rl-6",
        name: { de: "Majoran", pl: "Majeranek" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "rl-7",
        name: { de: "Lorbeerblatt", pl: "Liść laurowy" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "rl-8",
        name: { de: "Öl oder Schmalz zum Anbraten", pl: "Olej lub smalec do obsmażenia" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "rl-9",
        name: { de: "Salz, Pfeffer", pl: "Sól, pieprz" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T22:05:00.000Z",
    updatedAt: "2026-07-20T22:05:00.000Z",
  },
];
