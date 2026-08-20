import type { Recipe } from "@/types/content";

/** Wave 6 Wigilia money pages: Makowiec + Uszka (after baking pillar). */
export const seedRecipesWave6: Recipe[] = [
  {
    id: "recipe-makowiec",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-makowiec/53f5d3bc-8156-4441-a67e-83ddff7184b9.webp",
    prepMinutes: 45,
    cookMinutes: 50,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Makowiec",
        slug: "makowiec",
        excerpt:
          "Gerollter Hefekuchen mit dichter Mohnfüllung, klassisch zur Wigilia gebacken, außen goldbraun und innen in jeder Scheibe saftig mohnig.",
        steps: [
          {
            text: "Mohn mit heißer Milch aufquellen lassen, vollständig abkühlen lassen und dann mit Zucker, Butter und Ei zu einer streichfähigen Masse verrühren.",
            tip: "Die Masse ist richtig, wenn sie schwer vom Löffel fällt und nicht bröckelt, mehr zur Konsistenz zeigt der [Makowiec-Technik-Guide](/de/blog/makowiec-technik).",
          },
          {
            text: "Hefeteig aus Mehl, Milch, Butter, Zucker, Ei und Hefe kneten und an einem warmen Ort gehen lassen, bis er sich sichtbar verdoppelt hat.",
            tip: "Ein Teig, der zu kühl steht, braucht deutlich länger, stelle die Schüssel daher am besten in die Nähe der Heizung oder in den leicht vorgewärmten, ausgeschalteten Ofen.",
          },
          {
            text: "Den Teig zu einem Rechteck ausrollen, die Mohnmasse gleichmäßig verteilen und dabei an den Rändern etwas Platz lassen, dann fest von der langen Seite aufrollen und mit der Nahtstelle nach unten auf das Blech legen.",
            tip: "Ein zu dünn ausgerollter Teig reißt beim Rollen leicht ein, deshalb lieber etwas dicker lassen und die Rolle vorsichtig, aber bestimmt schließen.",
          },
          {
            text: "Mit verquirltem Ei bestreichen und bei mittlerer Hitze goldbraun backen, dann vollständig auskühlen lassen, bevor der Kuchen in Scheiben geschnitten wird.",
            tip: "Bei zu hoher Hitze bräunt die Oberfläche, während der Kern innen noch roh bleibt, eine Stäbchenprobe mitten im Teigteil zeigt zuverlässig, ob die Rolle durch ist.",
          },
        ],
        seoTitle: "Makowiec Rezept | Mohnkuchen gerollt | Alemniam",
        seoDescription:
          "Makowiec Schritt für Schritt backen, der polnische Mohnkuchen mit Einkaufstipps für Deutschland und Einordnung in den Wigilia-Speiseplan.",
      },
      pl: {
        title: "Makowiec",
        slug: "makowiec",
        excerpt:
          "Zwinięta rolada drożdżowa z gęstym, aromatycznym nadzieniem makowym, tradycyjnie pieczona na Wigilię, złota z zewnątrz i wilgotna w każdym kawałku w środku.",
        steps: [
          {
            text: "Zalej mak gorącym mlekiem, zostaw do całkowitego wystudzenia, a potem wymieszaj z cukrem, masłem i jajkiem na gładką, smarowną masę.",
            tip: "Masa jest gotowa, gdy ciężko opada z łyżki i się nie kruszy, więcej o konsystencji znajdziesz w [technice makowca](/pl/blog/makowiec-technika).",
          },
          {
            text: "Wyrób ciasto drożdżowe z mąki, mleka, masła, cukru, jajka i drożdży, a potem odstaw je w ciepłe miejsce, aż widocznie podwoi swoją objętość.",
            tip: "Ciasto stojące w chłodnym miejscu rośnie znacznie dłużej, dlatego najlepiej postaw miskę blisko kaloryfera albo w lekko podgrzanym, wyłączonym piekarniku.",
          },
          {
            text: "Rozwałkuj ciasto na prostokąt, rozsmaruj masę makową równomiernie, zostawiając zapas od brzegów, a następnie zwiń mocno od dłuższej strony i ułóż roladę łączeniem do dołu na blasze.",
            tip: "Za cienko rozwałkowane ciasto łatwo pęka przy zwijaniu, więc lepiej zostawić je odrobinę grubsze i zwijać rolkę delikatnie, ale zdecydowanie.",
          },
          {
            text: "Posmaruj roztrzepanym jajkiem i piecz w średniej temperaturze na złoty kolor, a potem ostudź całkowicie, zanim pokroisz ciasto na kawałki.",
            tip: "Za wysoka temperatura przypala wierzch, a środek zostaje surowy, patyczek wbity w środkową część ciasta wiarygodnie pokaże, czy rolada jest upieczona.",
          },
        ],
        seoTitle: "Makowiec przepis | Rolada makowa | Alemniam",
        seoDescription:
          "Makowiec krok po kroku, polska rolada makowa z podpowiedziami zakupowymi w Niemczech i miejscem w menu wigilijnym.",
      },
    },
    ingredients: [
      {
        id: "mk-1",
        name: { de: "Blauer Mohn (gemahlen)", pl: "Mak niebieski (mielony)" },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe:
          "Polenladen oder Backregal, dort gibt es ihn frisch zum Mahlen oder bereits fertig gemahlen",
      },
      {
        id: "mk-2",
        name: { de: "Milch", pl: "Mleko" },
        amount: 250,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "mk-3",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "mk-4",
        name: { de: "Butter", pl: "Masło" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "mk-5",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 120,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "mk-6",
        name: { de: "Eier", pl: "Jajka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "mk-7",
        name: { de: "Frischhefe", pl: "Drożdże świeże" },
        amount: 25,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "oder Trockenhefe nach Packung",
      },
      {
        id: "mk-8",
        name: { de: "Rosinen (optional)", pl: "Rodzynki (opcjonalnie)" },
        amount: 50,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T18:00:00.000Z",
    updatedAt: "2026-07-20T18:00:00.000Z",
  },
  {
    id: "recipe-uszka",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-uszka/e1c529d7-d5b5-4dc1-8500-da989dc7efe9.webp",
    prepMinutes: 60,
    cookMinutes: 15,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-post"],
    techniqueIds: ["technique-teig", "technique-fuellen"],
    categoryIds: ["category-vegetarisch", "category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Uszka mit Pilzen",
        slug: "uszka",
        excerpt:
          "Kleine, fest verschlossene Teigtaschen mit würziger Trockenpilzfüllung, die klassisch schwimmend in klarem Barszcz zur Wigilia serviert werden.",
        steps: [
          {
            text: "Getrocknete Pilze in warmem Wasser einweichen, danach fein hacken und zusammen mit der Zwiebel in etwas Butter oder Öl weich schmoren, abkühlen lassen und mit Salz und Pfeffer abschmecken.",
            tip: "Die Füllung muss vollständig ausgekühlt und trocken sein, denn feuchte Füllung reißt später den dünnen Teig beim Verschließen der Öhrchen auf.",
          },
          {
            text: "Den Pierogi-Teig kneten, kurz ruhen lassen und deutlich kleinere Kreise ausstechen als für gefüllte Ruskie-Pierogi, denn Uszka bleiben bewusst klein.",
            tip: "Wie sich der Teig richtig anfühlt, zeigt der [Pierogi-Teig-Guide](/de/blog/pierogi-teig), Uszka bleiben davon unabhängig ihr eigenes Rezept mit eigener Füllung.",
          },
          {
            text: "Einen kleinen Löffel Füllung mittig auf jeden Kreis setzen, den Teig zum Halbmond falten und die Enden fest zu einem kleinen Öhrchen zusammendrücken.",
            tip: "Feuchte die Teigränder vor dem Falten leicht mit den Fingern an, das verschließt die Naht deutlich zuverlässiger und verhindert, dass die Uszka im Wasser wieder aufplatzen.",
          },
          {
            text: "In leicht siedendem Salzwasser garen, bis die Uszka an die Oberfläche steigen, dann herausnehmen und getrennt zu heißem [Barszcz](/de/rezepte/barszcz-czerwony) servieren.",
            tip: "Lass die Uszka nicht stundenlang in der heißen Suppe liegen, sonst weicht der Teig auf und trübt gleichzeitig den klaren Barszcz.",
          },
        ],
        seoTitle: "Uszka Rezept | Pilz-Teigtaschen Wigilia | Alemniam",
        seoDescription:
          "Uszka mit Pilzen kochen, die kleinen Pierogi für heißen Barszcz mit Einkaufstipps für Deutschland.",
      },
      pl: {
        title: "Uszka z grzybami",
        slug: "uszka",
        excerpt:
          "Małe, szczelnie zlepione pierożki z wyrazistym farszem z suszonych grzybów, podawane klasycznie w klarownym barszczu na Wigilię.",
        steps: [
          {
            text: "Namocz suszone grzyby w ciepłej wodzie, drobno je posiekaj i uduś razem z cebulą na maśle lub oleju do miękkości, ostudź i dopraw solą oraz pieprzem.",
            tip: "Farsz musi być całkiem wystudzony i suchy, bo mokre nadzienie rozrywa później cienkie ciasto podczas zamykania uszek.",
          },
          {
            text: "Wyrób ciasto na pierogi, odstaw je na chwilę do odpoczynku i wykrawaj znacznie mniejsze kółka niż na pierogi ruskie, bo uszka mają być naprawdę małe.",
            tip: "Jak powinno wyglądać dobre ciasto, opisuje [przewodnik po cieście na pierogi](/pl/blog/ciasto-na-pierogi), choć uszka zostają swoim własnym przepisem z innym farszem.",
          },
          {
            text: "Na środek każdego kółka nałóż odrobinę farszu, złóż ciasto na pół w półksiężyc i mocno złącz końce, tak by powstało małe uszko.",
            tip: "Zwilż brzegi ciasta wodą przed zlepieniem, dzięki temu szew trzyma się dużo pewniej i uszka nie rozklejają się w wodzie.",
          },
          {
            text: "Gotuj w lekko wrzącej osolonej wodzie, aż uszka wypłyną na powierzchnię, a potem podawaj je osobno, zalewając gorącym [barszczem](/pl/rezepte/barszcz-czerwony).",
            tip: "Nie trzymaj uszek godzinami w gorącej zupie, bo ciasto rozmięknie i jednocześnie zmętnieje klarowny barszcz.",
          },
        ],
        seoTitle: "Uszka przepis | Pierogi grzybowe Wigilia | Alemniam",
        seoDescription:
          "Uszka z grzybami krok po kroku, małe pierogi do gorącego barszczu z podpowiedziami zakupowymi w Niemczech.",
      },
    },
    ingredients: [
      {
        id: "us-1",
        name: { de: "Getrocknete Pilze", pl: "Suszone grzyby" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe:
          "Im Polenladen bekommst du meist getrocknete Steinpilze oder eine Mischung aus Waldpilzen",
      },
      {
        id: "us-2",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "us-3",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "us-4",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "us-5",
        name: { de: "Wasser", pl: "Woda" },
        amount: 120,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
      {
        id: "us-6",
        name: { de: "Öl", pl: "Olej" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "us-7",
        name: { de: "Butter oder Öl zum Schmoren", pl: "Masło lub olej do duszenia" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "dairy",
      },
      {
        id: "us-8",
        name: { de: "Salz, Pfeffer", pl: "Sól, pieprz" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T18:10:00.000Z",
    updatedAt: "2026-07-20T18:10:00.000Z",
  },
];
