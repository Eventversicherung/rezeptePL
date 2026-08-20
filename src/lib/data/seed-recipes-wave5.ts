import type { Recipe } from "@/types/content";

/** Wave 5 standalone money pages (leniwe, kopytka, łazanki, pyzy, zrazy). */
export const seedRecipesWave5: Recipe[] = [
  {
    id: "recipe-pierogi-leniwe",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pierogi-leniwe/85296ce9-d2f4-4900-a1fd-4323e53cccfa.webp",
    prepMinutes: 25,
    cookMinutes: 15,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-teig"],
    categoryIds: [
      "category-schnell",
      "category-hauptgerichte",
      "category-vegetarisch",
      "category-suess",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Pierogi leniwe",
        slug: "pierogi-leniwe",
        excerpt:
          "Pierogi leniwe sind weiche Klößchen aus Twaróg, Ei und Mehl, die geschnitten statt gefaltet werden, dadurch milder und schneller fertig als klassische gefüllte Pierogi oder die kartoffelbasierten Kopytka und Kluski śląskie.",
        steps: [
          {
            text: "Twaróg gut abtropfen lassen und mit Ei, Mehl und einer Prise Salz zu einem weichen, aber formbaren Teig verkneten.",
            tip: "Je feuchter der Twaróg, desto mehr Mehl braucht der Teig danach, drücke ihn deshalb vorher in einem Tuch gut aus, sonst wird die Masse am Ende klebrig.",
          },
          {
            text: "Den Teig zu einer Rolle mit etwa drei Zentimetern Durchmesser formen und schräg in mundgerechte Stücke schneiden.",
            tip: "Vor dem Schneiden lässt sich mit der stumpfen Messerseite ein feines Gittermuster in die Rolle drücken, darin hält später mehr Butter und Brösel.",
          },
          {
            text: "Die Klößchen in leicht siedendem Salzwasser garen, bis sie an die Oberfläche steigen, das dauert nur wenige Minuten.",
            tip: "Das Wasser darf nur sanft köcheln, in sprudelndem Wasser brechen die weichen Klößchen an den Kanten leicht auf.",
          },
          {
            text: "Mit in Butter gerösteten Semmelbröseln, Zucker oder saurer Sahne servieren.",
            tip: "Gefüllte Obst-Knödel wie die [Knedle ze śliwkami](/de/rezepte/knedle-sliwki) gehören zu einer ganz anderen Teigfamilie, einen Überblick über alle Formen gibt der [Pierogi-Guide](/de/blog/pierogi-guide).",
          },
        ],
        seoTitle: "Pierogi leniwe Rezept | Twaróg-Klößchen ohne Falten | Alemniam",
        seoDescription:
          "Pierogi leniwe: weiche Twaróg-Klößchen, geschnitten statt gefaltet. Schnelles Rezept mit Tipps zu Teig, Garzeit und Servieren, zweisprachig.",
      },
      pl: {
        title: "Pierogi leniwe",
        slug: "pierogi-leniwe",
        excerpt:
          "Pierogi leniwe to miękkie kluseczki z twarogu, jajka i mąki, które się kroi, a nie lepi, dlatego są łagodniejsze i szybsze niż sklejane pierogi czy ziemniaczane kopytka i kluski śląskie.",
        steps: [
          {
            text: "Dobrze odciśnięty twaróg zagnieć z jajkiem, mąką i szczyptą soli na miękkie, ale formowalne ciasto.",
            tip: "Im bardziej wilgotny twaróg, tym więcej mąki potrzeba później, więc najpierw odciśnij go w ściereczce, inaczej masa wyjdzie kleista.",
          },
          {
            text: "Uformuj wałek o średnicy około trzech centymetrów i pokrój go skośnie na kawałki wielkości kęsa.",
            tip: "Przed krojeniem można tępą stroną noża odbić na wałku siateczkę, dzięki niej kluseczki lepiej trzymają potem masło i bułkę tartą.",
          },
          {
            text: "Gotuj kluseczki w lekko wrzącej osolonej wodzie, aż wypłyną na powierzchnię, to zajmuje tylko kilka minut.",
            tip: "Woda ma tylko lekko bulgotać, w gwałtownie wrzącej wodzie miękkie kluseczki łatwo rozpadają się na brzegach.",
          },
          {
            text: "Podawaj z bułką tartą podsmażoną na maśle, cukrem albo śmietaną.",
            tip: "Nadziewane knedle owocowe, jak [knedle ze śliwkami](/pl/rezepte/knedle-sliwki), to zupełnie inna rodzina ciast, przegląd wszystkich form daje [przewodnik po pierogach](/pl/blog/przewodnik-pierogi).",
          },
        ],
        seoTitle: "Pierogi leniwe przepis | Kluseczki z twarogu bez lepienia | Alemniam",
        seoDescription:
          "Pierogi leniwe: miękkie kluseczki z twarogu, krojone, nie lepione. Przepis z poradami o cieście, gotowaniu i podawaniu.",
      },
    },
    ingredients: [
      {
        id: "pln-1",
        name: { de: "Twaróg", pl: "Twaróg" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Speisequark abgetropft / Magerquark",
      },
      {
        id: "pln-2",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "pln-3",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pln-4",
        name: { de: "Butter", pl: "Masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "pln-5",
        name: { de: "Semmelbrösel", pl: "Bułka tarta" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T15:00:00.000Z",
    updatedAt: "2026-07-20T15:00:00.000Z",
  },
  {
    id: "recipe-kopytka",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kopytka/a8e6e483-ff01-44f3-8f1e-10e00f54e8b4.webp",
    prepMinutes: 35,
    cookMinutes: 20,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-hauptgerichte", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Kopytka",
        slug: "kopytka",
        excerpt:
          "Kopytka sind feste Kartoffel-Teigstückchen in Rautenform, die klassische Beilage zu Gulasz oder Butterzwiebeln, kompakter als italienische Gnocchi und ohne Füllung im Gegensatz zu den großen Pyzy.",
        steps: [
          {
            text: "Kartoffeln in der Schale kochen, gut ausdampfen lassen und durch eine Kartoffelpresse drücken.",
            tip: "Nur gut ausgedampfte Kartoffeln geben wenig Restfeuchte ab, das spart später Mehl und hält den Teig locker statt zäh.",
          },
          {
            text: "Die Kartoffelmasse mit Mehl, Ei und Salz zügig zu einem festen, aber nicht zu weichen Teig verkneten.",
            tip: "Zu viel Mehl macht Kopytka gummiartig, gib es deshalb löffelweise dazu und höre auf, sobald der Teig gerade nicht mehr klebt.",
          },
          {
            text: "Aus dem Teig Rollen formen, leicht flach drücken, schräg in Rauten schneiden und in reichlich siedendem Salzwasser garen, bis sie aufschwimmen.",
            tip: "Die typische Rautenform hat Kopytka ihren Namen gegeben, polnisch für kleine Hufe, denn die geschnittenen Stücke erinnern an Tierhufe. Nimm sie zügig heraus, sobald sie oben schwimmen, sonst werden sie weich.",
          },
          {
            text: "Mit Butterzwiebeln oder [Gulasz](/de/rezepte/gulasz-wieprzowy) servieren.",
            tip: "Als regionale Schwester mit eigener Machart aus Kartoffeln und Kartoffelstärke bleibt [Kluski śląskie](/de/rezepte/kluski-slaskie) eine gute Alternative, gefüllt statt nur geschnitten sind dagegen die großen [Pyzy](/de/rezepte/pyzy).",
          },
        ],
        seoTitle: "Kopytka Rezept | Kartoffel-Teigstückchen wie Gnocchi | Alemniam",
        seoDescription:
          "Kopytka: feste Kartoffel-Teigstückchen in Rautenform, Beilage zu Gulasz. Rezept mit Tipps zu Teig, Form und Garzeit, zweisprachig.",
      },
      pl: {
        title: "Kopytka",
        slug: "kopytka",
        excerpt:
          "Kopytka to zwarte kluseczki ziemniaczane w kształcie rombów, klasyczny dodatek do gulaszu albo cebuli na maśle, bardziej zbite niż włoskie gnocchi i bez nadzienia w przeciwieństwie do dużych pyz.",
        steps: [
          {
            text: "Ugotuj ziemniaki w łupinach, dobrze odparuj i przepuść przez praskę.",
            tip: "Tylko dobrze odparowane ziemniaki oddają mało wilgoci, to oszczędza potem mąkę i utrzymuje ciasto lekkie, a nie ciężkie.",
          },
          {
            text: "Zagnieć masę ziemniaczaną z mąką, jajkiem i solą na zwarte, ale nie za miękkie ciasto.",
            tip: "Za dużo mąki robi kopytka gumowate, dosypuj ją więc po łyżce i przestań, gdy ciasto akurat przestaje się kleić.",
          },
          {
            text: "Uformuj z ciasta wałki, lekko spłaszcz, pokrój skośnie na romby i gotuj w dużej ilości osolonej wody, aż wypłyną.",
            tip: "Charakterystyczny kształt rombu dał kopytkom nazwę, bo pokrojone kawałki przypominają małe kopyta. Wyjmuj je od razu, gdy wypłyną, inaczej zmiękną.",
          },
          {
            text: "Podawaj z cebulą na maśle albo [gulaszem](/pl/rezepte/gulasz-wieprzowy).",
            tip: "Regionalną siostrą o innej technice, z ziemniaków i skrobi ziemniaczanej, są [kluski śląskie](/pl/rezepte/kluski-slaskie), a nadziewaną i dużo większą wersją są [pyzy](/pl/rezepte/pyzy).",
          },
        ],
        seoTitle: "Kopytka przepis | Kluseczki ziemniaczane jak gnocchi | Alemniam",
        seoDescription:
          "Kopytka: zwarte kluseczki ziemniaczane w kształcie rombów, dodatek do gulaszu. Przepis z poradami o cieście i gotowaniu.",
      },
    },
    ingredients: [
      {
        id: "ko-1",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "ko-2",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "ko-3",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "ko-4",
        name: { de: "Butter", pl: "Masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "ko-5",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
    ],
    createdAt: "2026-07-20T15:10:00.000Z",
    updatedAt: "2026-07-20T15:10:00.000Z",
  },
  {
    id: "recipe-lazanki",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-lazanki/6ba332e9-4f6a-4264-9700-45e5432d1de4.webp",
    prepMinutes: 20,
    cookMinutes: 35,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-schmoren"],
    categoryIds: ["category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Łazanki mit Kapusta",
        slug: "lazanki",
        excerpt:
          "Łazanki mit Kapusta sind quadratische Nudeln, die mit geschmortem Sauerkraut und optional Speck vermischt werden, herzhafter als der süße Makaron z serem und schneller fertig als ein ganzer Bigos.",
        steps: [
          {
            text: "Sauerkraut gut abtropfen lassen und mit Zwiebel und optional Speck in Öl oder Schmalz weich schmoren.",
            tip: "Zu nasses Kraut macht den ganzen Teller später wässrig, drücke es deshalb vor dem Schmoren nochmal kräftig aus.",
          },
          {
            text: "Łazanki oder quadratische Bandnudeln in reichlich Salzwasser al dente kochen.",
            tip: "Im Polenladen gibt es oft fertige Łazanki-Nudeln, sonst schneidest du breite Bandnudeln einfach selbst in Quadrate.",
          },
          {
            text: "Die abgetropften Nudeln unter das geschmorte Kraut heben und mit reichlich Pfeffer abschmecken.",
            tip: "Schmecke erst nach dem Mischen ab, vorher verteilt sich das Kraut noch ungleich und du würzt am Ende doppelt.",
          },
          {
            text: "Heiß mit frischem Dill oder ganz pur servieren.",
            tip: "Reste schmecken am nächsten Tag in der Pfanne aufgebraten fast noch besser, für ein süßes Nudelgericht mit Twaróg eignet sich dagegen [Makaron z serem](/de/rezepte/makaron-z-serem) besser.",
          },
        ],
        seoTitle: "Łazanki mit Kapusta Rezept | Quadratische Nudeln mit Kraut | Alemniam",
        seoDescription:
          "Łazanki mit Kapusta: quadratische Nudeln mit geschmortem Sauerkraut. Herzhaftes Alltagsrezept, klar unterschieden von Makaron z serem und Bigos.",
      },
      pl: {
        title: "Łazanki z kapustą",
        slug: "lazanki",
        excerpt:
          "Łazanki z kapustą to kwadratowy makaron wymieszany z duszoną kapustą kiszoną i opcjonalnie boczkiem, wytrawniejszy niż słodki makaron z serem i szybszy niż cały bigos.",
        steps: [
          {
            text: "Odciśnij dobrze kapustę kiszoną i duś ją z cebulą oraz opcjonalnie boczkiem na oleju lub smalcu, aż zmięknie.",
            tip: "Za mokra kapusta robi później cały talerz wodnisty, więc przed duszeniem jeszcze raz ją mocno odciśnij.",
          },
          {
            text: "Ugotuj łazanki albo kwadratowy makaron al dente w dużej ilości osolonej wody.",
            tip: "W sklepie polskim często dostaniesz gotowe łazanki, a jeśli nie, po prostu pokrój szeroki makaron w kwadraty.",
          },
          {
            text: "Odsączony makaron wymieszaj z duszoną kapustą i dopraw solidną ilością pieprzu.",
            tip: "Dopraw dopiero po wymieszaniu, wcześniej kapusta rozkłada się nierówno i ryzykujesz podwójne solenie.",
          },
          {
            text: "Podawaj gorące z koperkiem albo zupełnie same.",
            tip: "Resztki podsmażone nazajutrz na patelni smakują często jeszcze lepiej, a na słodki makaron z twarogiem lepiej sprawdzi się [makaron z serem](/pl/rezepte/makaron-z-serem).",
          },
        ],
        seoTitle: "Łazanki z kapustą przepis | Kwadratowy makaron z kapustą | Alemniam",
        seoDescription:
          "Łazanki z kapustą: kwadratowy makaron z duszoną kapustą kiszoną. Szybki przepis na co dzień, inny niż makaron z serem i bigos.",
      },
    },
    ingredients: [
      {
        id: "la-1",
        name: { de: "Łazanki / Bandnudeln", pl: "Łazanki / makaron" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen oder breite Bandnudeln",
      },
      {
        id: "la-2",
        name: { de: "Sauerkraut", pl: "Kapusta kiszona" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "polish",
      },
      {
        id: "la-3",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "la-4",
        name: { de: "Speck (optional)", pl: "Boczek (opcjonalnie)" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "la-5",
        name: { de: "Öl oder Schmalz", pl: "Olej lub smalec" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T15:20:00.000Z",
    updatedAt: "2026-07-20T15:20:00.000Z",
  },
  {
    id: "recipe-pyzy",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pyzy/ff5c7156-8041-4f10-8c56-9ad177c5fb70.webp",
    prepMinutes: 50,
    cookMinutes: 30,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-teig", "technique-fuellen"],
    categoryIds: ["category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Pyzy mit Fleisch",
        slug: "pyzy",
        excerpt:
          "Pyzy mit Fleisch sind große, gefüllte Kartoffelklöße, aufwendiger als die einfachen, ungefüllten Kopytka und ein anderes Gericht als die gleichnamigen Hefeklöße aus Wielkopolska.",
        steps: [
          {
            text: "Kartoffeln kochen, gut ausdampfen lassen, fein reiben oder pressen und mit Kartoffelstärke zu einer festen Masse verarbeiten.",
            tip: "Die Masse muss wirklich fest zusammenhalten, zu weicher Teig reißt im Kochwasser auf und die Füllung schwimmt aus.",
          },
          {
            text: "Hackfleisch mit fein gewürfelter Zwiebel anbraten, vollständig abkühlen lassen und zu kleinen Kugeln formen.",
            tip: "Die Füllung sollte komplett ausgekühlt sein, bevor sie in die Kartoffelmasse kommt, warme Füllung erweicht den Teig von innen.",
          },
          {
            text: "Kartoffelmasse portionsweise flach drücken, die Fleischkugel einlegen und den Rand glatt und dicht verschließen.",
            tip: "Eine undichte Nahtstelle öffnet sich im Wasser fast immer zuerst, drücke sie deshalb mit angefeuchteten Fingern besonders sorgfältig zu.",
          },
          {
            text: "In leicht siedendem Wasser garen, bis die Pyzy aufschwimmen, dann mit Butterzwiebeln servieren.",
            tip: "Anders als die einfachen, ungefüllten [Kopytka](/de/rezepte/kopytka) sind Pyzy ein eigenes Sonntagsprojekt, in Wielkopolska bezeichnet der gleiche Name übrigens ganz andere, ungefüllte Hefeklöße.",
          },
        ],
        seoTitle: "Pyzy mit Fleisch Rezept | Große gefüllte Kartoffelklöße | Alemniam",
        seoDescription:
          "Pyzy mit Fleisch: große Kartoffelklöße mit Hackfleischfüllung. Sonntagsprojekt mit Tipps zu Teig, Füllung und Nahtstelle, zweisprachig.",
      },
      pl: {
        title: "Pyzy z mięsem",
        slug: "pyzy",
        excerpt:
          "Pyzy z mięsem to duże, nadziewane kluski ziemniaczane, bardziej pracochłonne niż proste, nienadziewane kopytka i zupełnie inne danie niż tak samo nazywane drożdżowe kluski z Wielkopolski.",
        steps: [
          {
            text: "Ugotuj ziemniaki, dobrze odparuj, przeciśnij przez praskę i zagnieć ze skrobią ziemniaczaną na zwartą masę.",
            tip: "Masa musi naprawdę dobrze się trzymać, za miękkie ciasto pęka w wodzie i farsz wypływa na wierzch.",
          },
          {
            text: "Podsmaż mięso mielone z drobno posiekaną cebulą, ostudź całkowicie i uformuj małe kulki.",
            tip: "Farsz musi być całkiem wystudzony, zanim trafi do masy ziemniaczanej, ciepły farsz mięknie ciasto od wewnątrz.",
          },
          {
            text: "Rozpłaszcz porcję masy ziemniaczanej, włóż kulkę farszu i dokładnie zamknij brzegi.",
            tip: "Nieszczelny szew otwiera się w wodzie najczęściej pierwszy, dociśnij go więc wilgotnymi palcami wyjątkowo starannie.",
          },
          {
            text: "Gotuj w lekko wrzącej wodzie, aż pyzy wypłyną, i podawaj z cebulą podsmażoną na maśle.",
            tip: "W przeciwieństwie do prostych, nienadziewanych [kopytek](/pl/rezepte/kopytka) pyzy są osobnym niedzielnym projektem, a w Wielkopolsce ta sama nazwa oznacza zupełnie inne, drożdżowe kluski gotowane na parze.",
          },
        ],
        seoTitle: "Pyzy z mięsem przepis | Duże nadziewane kluski ziemniaczane | Alemniam",
        seoDescription:
          "Pyzy z mięsem: duże kluski ziemniaczane z farszem mięsnym. Niedzielny projekt z poradami o cieście, farszu i szwie.",
      },
    },
    ingredients: [
      {
        id: "py-1",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 1000,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "py-2",
        name: { de: "Kartoffelstärke", pl: "Skrobia ziemniaczana" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "py-3",
        name: { de: "Hackfleisch", pl: "Mięso mielone" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "py-4",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "py-5",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "py-6",
        name: { de: "Butter", pl: "Masło" },
        amount: 50,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
    ],
    createdAt: "2026-07-20T15:30:00.000Z",
    updatedAt: "2026-07-20T15:30:00.000Z",
  },
  {
    id: "recipe-zrazy",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-zrazy/56637b7b-9202-4ed1-8c0b-9aa4d927e40c.webp",
    prepMinutes: 40,
    cookMinutes: 90,
    servings: 4,
    regionIds: ["region-slask"],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-schmoren", "technique-fuellen"],
    categoryIds: ["category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Zrazy zawijane",
        slug: "zrazy",
        excerpt:
          "Zrazy zawijane sind Rinderrouladen mit Senf, Speck und Gewürzgurke, lange geschmort und dadurch würziger und säuerlicher als die schlesische Rolada mit ihrem Zwiebel-Speck-Fokus ohne Gurke.",
        steps: [
          {
            text: "Rinderplätzchen flach klopfen, mit Senf bestreichen und mit Speck und Gewürzgurke belegen.",
            tip: "Klopfe das Fleisch gleichmäßig dünn, dickere Stellen bleiben beim Schmoren sonst zäh, während die dünnen Ränder schon zerfallen.",
          },
          {
            text: "Fest zu Rouladen rollen, mit Zahnstocher oder Küchengarn fixieren und rundum scharf anbraten.",
            tip: "Eine locker gerollte Roulade öffnet sich beim Anbraten fast immer, wickle das Garn deshalb lieber einmal zu oft als zu wenig um.",
          },
          {
            text: "Mit Brühe ablöschen und zugedeckt 75 bis 90 Minuten bei niedriger Hitze schmoren.",
            tip: "Das Fleisch soll sich mit der Gabel mühelos zerteilen lassen, verlasse dich dabei lieber auf die Gabelprobe als allein auf die Uhr.",
          },
          {
            text: "Die Soße abschmecken und mit [Kluski śląskie](/de/rezepte/kluski-slaskie) oder Kartoffeln servieren.",
            tip: "Verwandt, aber ein anderes Gericht ist die [Rolada śląska](/de/rezepte/rolada-slaska), die auf Zwiebel und Speck statt auf die saure Gurkennote setzt.",
          },
        ],
        seoTitle: "Zrazy zawijane Rezept | Polnische Rinderrouladen geschmort | Alemniam",
        seoDescription:
          "Zrazy zawijane: Rinderrouladen mit Senf, Speck und Gewürzgurke, lange geschmort. Rezept mit Schmor-Technik, klar unterschieden von Rolada śląska.",
      },
      pl: {
        title: "Zrazy zawijane",
        slug: "zrazy",
        excerpt:
          "Zrazy zawijane to wołowe rolady z musztardą, boczkiem i ogórkiem kiszonym, długo duszone i przez to bardziej pikantne i kwaskowe niż śląska rolada z jej cebulowo-boczkowym charakterem bez ogórka.",
        steps: [
          {
            text: "Rozbij plastry wołowiny na płasko, posmaruj musztardą i ułóż na nich boczek oraz ogórek kiszony.",
            tip: "Rozbijaj mięso równomiernie, bo grubsze miejsca zostają twarde po duszeniu, a cieńsze brzegi rozpadają się za wcześnie.",
          },
          {
            text: "Zwiń szczelnie w roladki, zepnij wykałaczką lub nicią i obsmaż ze wszystkich stron na rozgrzanym tłuszczu.",
            tip: "Luźno zwinięta roladka rozkleja się prawie zawsze podczas smażenia, lepiej owiń nić raz więcej niż raz mniej.",
          },
          {
            text: "Zalej bulionem i duś pod przykryciem od 75 do 90 minut na małym ogniu.",
            tip: "Mięso ma się swobodnie rozchodzić pod widelcem, licz się więc bardziej z tym testem niż z samym zegarem.",
          },
          {
            text: "Dopraw sos i podawaj z [kluskami śląskimi](/pl/rezepte/kluski-slaskie) albo ziemniakami.",
            tip: "Pokrewnym, ale innym daniem jest [rolada śląska](/pl/rezepte/rolada-slaska), która stawia na cebulę i boczek, a nie na kwaskowość ogórka.",
          },
        ],
        seoTitle: "Zrazy zawijane przepis | Wołowe rolady długo duszone | Alemniam",
        seoDescription:
          "Zrazy zawijane: wołowe rolady z musztardą, boczkiem i ogórkiem, długo duszone. Przepis z techniką duszenia, inny niż rolada śląska.",
      },
    },
    ingredients: [
      {
        id: "zr-1",
        name: { de: "Rinderplätzchen", pl: "Plastry wołowiny" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "zr-2",
        name: { de: "Senf", pl: "Musztarda" },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "zr-3",
        name: { de: "Speck", pl: "Boczek" },
        amount: 120,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "zr-4",
        name: { de: "Gewürzgurken", pl: "Ogórki kiszone" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "polish",
      },
      {
        id: "zr-5",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "zr-6",
        name: { de: "Brühe", pl: "Bulion" },
        amount: 400,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
      {
        id: "zr-7",
        name: { de: "Majoran", pl: "Majeranek" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T15:40:00.000Z",
    updatedAt: "2026-07-20T15:40:00.000Z",
  },
];
