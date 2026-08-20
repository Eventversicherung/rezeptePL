import type { Recipe } from "@/types/content";

/** Wave 7: Karp, Krokiety, Sernik, Śledź — depth over spray, no new blog pillars. */
export const seedRecipesWave7: Recipe[] = [
  {
    id: "recipe-karp",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-karp/4273a101-045f-4bcf-952b-dfc7d9e226d6.webp",
    prepMinutes: 30,
    cookMinutes: 40,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-post"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Karp po polsku",
        slug: "karp",
        excerpt:
          "Im Ofen gebackener Karpfen mit angeschwitzten Zwiebeln, die warme, herzhafte Wigilia-Variante, deutlich anders als der süßsauer eingelegte Karp po żydowsku in Gelee.",
        steps: [
          {
            text: "Die Karpfenportionen abspülen, gründlich trockentupfen, salzen, pfeffern und mit Zitronensaft sowie Majoran einreiben, dann etwa 20 Minuten ziehen lassen.",
            tip: "Achte beim Portionieren auf feine Gräten, sie lassen sich am besten mit einer Pinzette entfernen, bevor der Fisch gewürzt wird. Wo der Fisch im Menü seinen Platz hat, zeigt der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
          },
          {
            text: "Die Zwiebeln in Ringe schneiden und in Butter oder Öl bei mittlerer Hitze goldgelb anschwitzen, bis sie weich und leicht süßlich werden.",
            tip: "Wer mag, karamellisiert die Zwiebeln noch einen Moment länger, das macht die Note runder und passt gut zum milden Fischgeschmack.",
          },
          {
            text: "Den Fisch in eine gefettete Form legen, die Zwiebeln darüber verteilen und bei 180 Grad etwa 30 bis 40 Minuten backen, bis sich das Fleisch leicht von der Gräte löst.",
            tip: "Trocknet die Oberfläche zu schnell, deckst du die Form am besten locker mit Folie ab, damit der Fisch innen saftig bleibt.",
          },
          {
            text: "Heiß mit frischer Zitrone und Dill servieren, traditionell nach klarem [Barszcz](/de/rezepte/barszcz-czerwony) mit [Uszka](/de/rezepte/uszka) als vorherigem Gang.",
            tip: "Wer den kalten Gegenpart probieren möchte, findet ihn bei [Śledź](/de/rezepte/sledz), der eingelegte Hering bleibt aber ein völlig anderes Gericht als der warm gebackene Karpfen.",
          },
        ],
        seoTitle: "Karp Rezept | Karpfen Wigilia | Alemniam",
        seoDescription:
          "Karpfen richtig backen, der traditionelle polnische Wigilia-Fisch mit Einkaufstipps für Deutschland und Platz im Menü.",
      },
      pl: {
        title: "Karp po polsku",
        slug: "karp",
        excerpt:
          "Karp pieczony w piekarniku z zeszkloną cebulą, ciepły i wytrawny wariant wigilijny, zupełnie inny niż słodko-kwaśny, marynowany w galarecie karp po żydowsku.",
        steps: [
          {
            text: "Opłucz porcje karpia, dokładnie osusz, posól, popieprz i natrzyj sokiem z cytryny oraz majerankiem, a potem odstaw na około 20 minut.",
            tip: "Przy porcjowaniu zwróć uwagę na drobne ości, najłatwiej usunąć je pincetą, zanim ryba trafi na przyprawy. Miejsce dania w menu pokazuje [menu wigilijne](/pl/blog/menu-wigilijne).",
          },
          {
            text: "Pokrój cebulę w krążki i zeszklij ją na maśle lub oleju na średnim ogniu, aż zmięknie i zrobi się lekko słodkawa.",
            tip: "Kto chce, może cebulę podsmażyć jeszcze chwilę dłużej do lekkiej karmelizacji, to zaokrągla smak i dobrze łączy się z delikatną rybą.",
          },
          {
            text: "Ułóż rybę w natłuszczonej formie, rozłóż na wierzchu cebulę i piecz w 180 stopniach około 30 do 40 minut, aż mięso zacznie łatwo odchodzić od ości.",
            tip: "Jeśli wierzch zbyt szybko brązowieje, przykryj formę luźno folią, dzięki temu ryba w środku zostanie soczysta.",
          },
          {
            text: "Podawaj na gorąco ze świeżą cytryną i koperkiem, tradycyjnie po klarownym [barszczu](/pl/rezepte/barszcz-czerwony) z [uszkami](/pl/rezepte/uszka) jako wcześniejszym daniu.",
            tip: "Kto szuka zimnego przeciwieństwa, znajdzie je w [śledziu](/pl/rezepte/sledz), marynowana ryba to jednak zupełnie inne danie niż ciepło pieczony karp.",
          },
        ],
        seoTitle: "Karp przepis | Karp na Wigilię | Alemniam",
        seoDescription:
          "Karp pieczony krok po kroku, wigilijna ryba z podpowiedziami zakupowymi w Niemczech i miejscem w menu.",
      },
    },
    ingredients: [
      {
        id: "kp-1",
        name: { de: "Karpfen (Portionen / Filets)", pl: "Karp (porcje / filety)" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Fischtheke oder Polenladen, frisch oder tiefgekühlt erhältlich",
      },
      {
        id: "kp-2",
        name: { de: "Zwiebeln", pl: "Cebule" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "kp-3",
        name: { de: "Zitrone", pl: "Cytryna" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "kp-4",
        name: { de: "Butter oder Öl", pl: "Masło lub olej" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "kp-5",
        name: { de: "Majoran", pl: "Majeranek" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
        storeHintDe: "Im Polenladen erhältlich, das Majeranek-Lexikon erklärt mehr zum Gewürz",
      },
      {
        id: "kp-6",
        name: { de: "Salz, Pfeffer", pl: "Sól, pieprz" },
        amount: 1,
        unit: { de: "Prise", pl: "szczypta" },
        group: "spices",
      },
      {
        id: "kp-7",
        name: { de: "Dill (optional)", pl: "Koperek (opcjonalnie)" },
        amount: 1,
        unit: { de: "Bund", pl: "pęczek" },
        group: "produce",
      },
    ],
    createdAt: "2026-07-20T20:00:00.000Z",
    updatedAt: "2026-07-20T20:00:00.000Z",
  },
  {
    id: "recipe-krokiety",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-krokiety/28329c37-3ab6-4593-97c3-92b1e86787bf.webp",
    prepMinutes: 50,
    cookMinutes: 25,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela", "occasion-wigilia"],
    techniqueIds: ["technique-teig", "technique-panieren"],
    categoryIds: ["category-hauptgerichte", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Krokiety",
        slug: "krokiety",
        excerpt:
          "Dünne Naleśniki, fest mit Sauerkraut-Pilz-Füllung gerollt, paniert und knusprig gebraten, ein herzhaftes Gegenstück zu süß gefüllten Naleśniki.",
        steps: [
          {
            text: "Einen dünnen Naleśniki-Teig anrühren und mehrere hauchdünne Pfannkuchen ausbacken, denn die Rollen lassen sich nur bei dünnem Teig sauber schließen.",
            tip: "Wie sich der Teig richtig anfühlt, zeigt der [Naleśniki-Guide](/de/blog/nalesniki-guide), ein zu dicker Teig macht die fertigen Rollen schwer und lässt sie beim Panieren leicht aufreißen.",
          },
          {
            text: "Das Sauerkraut mit den eingeweichten, gehackten Pilzen und der Zwiebel ohne zusätzliche Flüssigkeit weich schmoren, abkühlen lassen und abschmecken.",
            tip: "Eine verwandte Füllungslogik nutzen auch [Pierogi mit Kraut und Pilzen](/de/rezepte/pierogi/kraut-pilze), dort bleibt die gleiche Mischung aber im Teigtäschchen statt in der Rolle.",
          },
          {
            text: "Die abgekühlte Füllung gleichmäßig auf den Naleśniki verteilen, straff zu Rollen aufwickeln und die Enden nach innen einklappen, damit später beim Braten nichts austritt.",
            tip: "Zu wenig Füllung lässt die Rollen hohl wirken, zu viel sprengt später die Panade, eine gute Handvoll pro Pfannkuchen ist meist die richtige Menge.",
          },
          {
            text: "Die Rollen zuerst in Mehl, dann in Ei und zuletzt in Semmelbröseln panieren und in reichlich Fett goldbraun braten, klassisch serviert zu heißem [Barszcz](/de/rezepte/barszcz-czerwony).",
            tip: "Brate in nicht zu heißem Fett und wende die Rollen vorsichtig, sonst platzt die Panade auf, bevor sie richtig durchgebräunt ist.",
          },
        ],
        seoTitle: "Krokiety Rezept | Naleśniki gerollt | Alemniam",
        seoDescription:
          "Krokiety mit Kraut und Pilzen braten, die panierten Naleśniki-Rollen mit Einkaufstipps für Deutschland.",
      },
      pl: {
        title: "Krokiety",
        slug: "krokiety",
        excerpt:
          "Cienkie naleśniki zwinięte z farszem z kapusty kiszonej i grzybów, panierowane i chrupiąco usmażone, wytrawny odpowiednik słodko nadziewanych naleśników.",
        steps: [
          {
            text: "Zamieszaj cienkie ciasto na naleśniki i usmaż kilka bardzo cieniutkich placków, bo tylko cienkie ciasto pozwala potem szczelnie zwinąć rolki.",
            tip: "Jak powinno wyglądać dobre ciasto, opisuje [przewodnik po naleśnikach](/pl/blog/nalesniki-przewodnik), za gęste ciasto robi ciężkie rolki, które łatwo pękają podczas panierowania.",
          },
          {
            text: "Kapustę kiszoną uduś razem z namoczonymi, posiekanymi grzybami i cebulą bez dodatku wody, ostudź i dopraw do smaku.",
            tip: "Podobną logikę farszu wykorzystują też [pierogi z kapustą i grzybami](/pl/rezepte/pierogi/kapusta-grzyby), tam ta sama mieszanka zostaje jednak w cieście, a nie w rolce.",
          },
          {
            text: "Rozłóż wystudzony farsz równo na naleśnikach, zwiń je ciasno w rolki i wsuń końce do środka, żeby podczas smażenia nic nie wypłynęło.",
            tip: "Za mało farszu robi rolki puste w środku, za dużo rozsadza później panierkę, dobra garść na jeden naleśnik zwykle wystarcza.",
          },
          {
            text: "Panieruj rolki najpierw w mące, potem w jajku, a na końcu w bułce tartej i smaż na złoto w dużej ilości tłuszczu, klasycznie do gorącego [barszczu](/pl/rezepte/barszcz-czerwony).",
            tip: "Smaż na średnim ogniu i obracaj rolki delikatnie, inaczej panierka pęka, zanim zdąży się dobrze zrumienić.",
          },
        ],
        seoTitle: "Krokiety przepis | Naleśniki zwinięte | Alemniam",
        seoDescription:
          "Krokiety z kapustą i grzybami krok po kroku, panierowane rolki z podpowiedziami zakupowymi w Niemczech.",
      },
    },
    ingredients: [
      {
        id: "kr-1",
        name: { de: "Mehl (für Naleśniki)", pl: "Mąka (na naleśniki)" },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "kr-2",
        name: { de: "Milch", pl: "Mleko" },
        amount: 400,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "kr-3",
        name: { de: "Eier", pl: "Jajka" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "kr-4",
        name: { de: "Sauerkraut", pl: "Kapusta kiszona" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen oder Supermarkt, vor der Verwendung gut abtropfen lassen",
      },
      {
        id: "kr-5",
        name: { de: "Getrocknete Pilze", pl: "Suszone grzyby" },
        amount: 30,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Im Polenladen erhältlich, vor der Verwendung einweichen",
      },
      {
        id: "kr-6",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "kr-7",
        name: { de: "Semmelbrösel", pl: "Bułka tarta" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "kr-8",
        name: { de: "Öl zum Braten", pl: "Olej do smażenia" },
        amount: 100,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T20:10:00.000Z",
    updatedAt: "2026-07-20T20:10:00.000Z",
  },
  {
    id: "recipe-sernik",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-sernik/038984fe-b127-439e-bfe0-3799f727e1b3.webp",
    prepMinutes: 35,
    cookMinutes: 60,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-niedziela", "occasion-wielkanoc"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Sernik",
        slug: "sernik",
        excerpt:
          "Cremiger polnischer Käsekuchen auf Twaróg-Basis, dichter und höher als viele deutsche Käsekuchen, klar zu unterscheiden vom Apfelkuchen Szarlotka und vom flachen Festtags-Mazurek.",
        steps: [
          {
            text: "Den Twaróg glatt rühren oder fein mahlen, dann mit Eiern, Zucker, etwas Mehl oder Puddingpulver und Vanille zu einer homogenen Masse verrühren.",
            tip: "Wie du in Deutschland an geeigneten Twaróg oder gut abgetropften Speisequark kommst, erklärt der [Twaróg-Guide](/de/blog/twarog-deutschland), zu feuchter Quark macht die Masse später wässrig.",
          },
          {
            text: "Optional einen Mürbeteigboden in die Form legen und die Käsemasse gleichmäßig darauf verteilen.",
            tip: "Wer ganz auf den Boden verzichtet, backt die österreichisch geprägte Variante ohne Boden, die in Polen als sernik wiedeński bekannt ist.",
          },
          {
            text: "Bei mittlerer Ofentemperatur backen, bis die Mitte nur noch ganz leicht wackelt, dann den Ofen ausschalten und den Kuchen darin nachruhen lassen.",
            tip: "Ein zu heißer Ofen oder ein abruptes Öffnen der Tür lässt die Oberfläche reißen, deshalb lieber Geduld haben und die Tür erst nach dem Abkühlen einen Spalt öffnen.",
          },
          {
            text: "Den Kuchen vollständig auskühlen lassen, kalt stellen und erst danach in Stücke schneiden, serviert mit Puderzucker oder frischen Früchten.",
            tip: "Zu früh geschnittene Stücke brechen leicht, über Nacht im Kühlschrank wird die Masse fester und lässt sich danach sauber schneiden.",
          },
        ],
        seoTitle: "Sernik Rezept | Polnischer Käsekuchen | Alemniam",
        seoDescription:
          "Sernik mit Twaróg backen, der polnische Käsekuchen mit Einkaufstipps für Deutschland.",
      },
      pl: {
        title: "Sernik",
        slug: "sernik",
        excerpt:
          "Kremowy polski sernik na twarogu, gęstszy i wyższy niż wiele niemieckich serników, wyraźnie różny od jabłecznika szarlotki i płaskiego świątecznego mazurka.",
        steps: [
          {
            text: "Utrzyj twaróg na gładko lub zmiel go, a potem wymieszaj z jajkami, cukrem, odrobiną mąki lub budyniu i wanilią na jednolitą masę.",
            tip: "Jak w Niemczech znaleźć dobry twaróg albo dobrze odsączony Quark, opisuje [przewodnik po twarogu](/pl/blog/twarog-w-niemczech), za mokry twaróg robi masę wodnistą.",
          },
          {
            text: "Opcjonalnie ułóż w formie spód z ciasta kruchego i równo rozlej na nim masę serową.",
            tip: "Kto woli obejść się bez spodu, piecze wersję nawiązującą do austriackiego pochodzenia, znaną w Polsce jako sernik wiedeński.",
          },
          {
            text: "Piecz w średniej temperaturze, aż środek będzie tylko lekko drgał, a potem wyłącz piekarnik i pozwól serniku dociągnąć w jego cieple.",
            tip: "Zbyt gorący piekarnik albo nagłe otwarcie drzwiczek pękają powierzchnię, więc lepiej mieć cierpliwość i otwierać drzwiczki tylko odrobinę, gdy ciasto już ostygnie.",
          },
          {
            text: "Ostudź całkowicie, schłodź w lodówce i pokrój na kawałki dopiero potem, podawaj z cukrem pudrem albo świeżymi owocami.",
            tip: "Zbyt wcześnie pokrojone kawałki łatwo się łamią, noc w lodówce usztywnia masę i pozwala potem kroić równe kawałki.",
          },
        ],
        seoTitle: "Sernik przepis | Polski sernik | Alemniam",
        seoDescription:
          "Sernik na twarogu krok po kroku, z podpowiedziami zakupowymi w Niemczech.",
      },
    },
    ingredients: [
      {
        id: "sn-1",
        name: { de: "Twaróg (sernikowy / Speisequark)", pl: "Twaróg sernikowy" },
        amount: 1000,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen oder abgetropfter Speisequark 20%",
      },
      {
        id: "sn-2",
        name: { de: "Eier", pl: "Jajka" },
        amount: 5,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "sn-3",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "sn-4",
        name: { de: "Butter", pl: "Masło" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
      {
        id: "sn-5",
        name: { de: "Mehl oder Vanillepuddingpulver", pl: "Mąka lub budyń waniliowy" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "sn-6",
        name: { de: "Vanillezucker / Vanille", pl: "Cukier waniliowy / wanilia" },
        amount: 1,
        unit: { de: "Päckchen", pl: "opak." },
        group: "pantry",
      },
      {
        id: "sn-7",
        name: { de: "Mehl für Boden (optional)", pl: "Mąka na spód (opcjonalnie)" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T20:20:00.000Z",
    updatedAt: "2026-07-20T20:20:00.000Z",
  },
  {
    id: "recipe-sledz",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-sledz/0c4050e5-1b47-4bd0-bd45-831394b85b0c.webp",
    prepMinutes: 25,
    cookMinutes: 0,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-post"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte", "category-schnell"],
    videoUrl: null,
    translations: {
      de: {
        title: "Śledź w oleju",
        slug: "sledz",
        excerpt:
          "Eingelegter Hering in neutralem Öl mit Zwiebelringen und Gewürzen, der klassische kalte Wigilia-Klassiker, spürbar leichter als der cremige Śledź in Sahne oder die Apfelvariante po kaszubsku.",
        steps: [
          {
            text: "Matjes oder Salzhering wässern beziehungsweise gut abtropfen lassen und dann in mundgerechte Stücke schneiden.",
            tip: "Guten Matjes oder fertige Filets bekommst du zuverlässig im Polenladen, achte beim Kauf auf ein frisches, mildes Aroma ohne strengen Fischgeruch.",
          },
          {
            text: "Die Zwiebeln in feine Ringe schneiden und optional kurz mit heißem Wasser überbrühen, das nimmt ihnen einen Teil der Schärfe.",
            tip: "Wer die Schärfe komplett mag, lässt das Überbrühen weg, für Kinder oder empfindliche Gäste macht der kurze Guss aber einen deutlichen Unterschied.",
          },
          {
            text: "Die Heringstücke abwechselnd mit den Zwiebelringen in ein Glas oder eine Schüssel schichten, mit Öl auffüllen und Lorbeerblätter, Pimentkörner und Pfeffer dazwischen verteilen, dann mindestens einige Stunden im Kühlschrank ziehen lassen.",
            tip: "Über Nacht ziehen zu lassen verbessert den Geschmack noch einmal deutlich, weil sich Öl und Gewürze dann vollständig mit dem Fisch verbinden.",
          },
          {
            text: "Kalt mit frischem Brot servieren, klassisch neben Salaten und anderen kalten Wigilia-Vorspeisen.",
            tip: "Den warmen Gegenpart auf dem Wigilia-Tisch liefert der gebackene [Karp](/de/rezepte/karp), beide Fischgänge ergänzen sich, ohne sich zu ähneln.",
          },
        ],
        seoTitle: "Śledź Rezept | Hering in Öl | Alemniam",
        seoDescription:
          "Śledź w oleju einlegen, der polnische Hering mit Einkaufstipps für Deutschland und Platz im Wigilia-Menü.",
      },
      pl: {
        title: "Śledź w oleju",
        slug: "sledz",
        excerpt:
          "Śledź marynowany w neutralnym oleju z krążkami cebuli i przyprawami, klasyczny zimny wigilijny przysmak, wyraźnie lżejszy niż kremowy śledź w śmietanie czy wariant po kaszubsku z jabłkiem.",
        steps: [
          {
            text: "Namocz matjasa lub śledzia solonego albo dobrze go odsącz, a potem pokrój na kawałki wielkości jednego kęsa.",
            tip: "Dobrego matjasa albo gotowe filety kupisz najpewniej w sklepie polskim, przy zakupie zwróć uwagę na świeży, delikatny zapach bez ostrej rybnej nuty.",
          },
          {
            text: "Pokrój cebulę w cienkie krążki i opcjonalnie zalej ją na chwilę wrzątkiem, to zdejmuje część jej ostrości.",
            tip: "Kto lubi wyrazistą cebulę, może ten krok pominąć, dla dzieci albo wrażliwych gości krótkie zalanie robi jednak zauważalną różnicę.",
          },
          {
            text: "Ułóż warstwami kawałki śledzia i krążki cebuli w słoiku albo misce, zalej olejem i rozłóż między warstwami liście laurowe, ziele angielskie i pieprz, a potem odstaw do lodówki na co najmniej kilka godzin.",
            tip: "Odstawienie na całą noc jeszcze wyraźnie poprawia smak, bo olej i przyprawy mają wtedy czas w pełni połączyć się z rybą.",
          },
          {
            text: "Podawaj na zimno ze świeżym chlebem, klasycznie obok sałatek i innych zimnych przystawek wigilijnych.",
            tip: "Ciepłym przeciwieństwem na wigilijnym stole jest pieczony [karp](/pl/rezepte/karp), obie ryby dobrze się uzupełniają, choć wcale do siebie nie przypominają.",
          },
        ],
        seoTitle: "Śledź przepis | Śledź w oleju | Alemniam",
        seoDescription:
          "Śledź w oleju krok po kroku, z podpowiedziami zakupowymi w Niemczech i miejscem w menu wigilijnym.",
      },
    },
    ingredients: [
      {
        id: "sl-1",
        name: { de: "Matjes / Heringfilets", pl: "Matjas / filety śledziowe" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Polenladen oder Kühltruhe, vor der Verwendung gut abtropfen lassen",
      },
      {
        id: "sl-2",
        name: { de: "Zwiebeln", pl: "Cebule" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "sl-3",
        name: { de: "Rapsöl oder neutrales Öl", pl: "Olej rzepakowy" },
        amount: 150,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
      {
        id: "sl-4",
        name: { de: "Lorbeerblätter", pl: "Liście laurowe" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "sl-5",
        name: { de: "Pimentkörner", pl: "Ziele angielskie" },
        amount: 6,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "sl-6",
        name: { de: "Pfeffer", pl: "Pieprz" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
    ],
    createdAt: "2026-07-20T20:30:00.000Z",
    updatedAt: "2026-07-20T20:30:00.000Z",
  },
];
