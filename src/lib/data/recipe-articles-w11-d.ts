/**
 * Wave 11 Paket D — FACTS for ryba-po-grecku, golonka, kompot-z-suszu.
 *
 * Agent E merge into recipe-articles.ts:
 *   import { W11_FACTS_D } from "./recipe-articles-w11-d";
 *   Object.assign(FACTS, …, W11_FACTS_D);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Ryba po grecku ≠ Karp (ganzer/panierter Wigilia-Fisch)
 * - Golonka ≠ Schabowy / Schab pieczony / Żeberka
 * - Kompot z suszu = Getränk-Primary; Wigilia-Pillar bleibt Anlass-Owner
 */

export type ArticleFacts = {
  dishDe: string;
  dishPl: string;
  vibeDe: string;
  vibePl: string;
  originDe: string;
  originPl: string;
  shopDe: string;
  shopPl: string;
  techniqueDe: string;
  techniquePl: string;
  serveDe: string;
  servePl: string;
  diasporaDe: string;
  diasporaPl: string;
  mistakesDe: string;
  mistakesPl: string;
  variantsDe: string;
  variantsPl: string;
};

export const W11_FACTS_D: Record<string, ArticleFacts> = {
  "recipe-ryba-po-grecku": {
    dishDe: "Ryba po grecku",
    dishPl: "Ryba po grecku",
    vibeDe: "süß-säuerlich, gemüsig, kalt oder lauwarm — Buffet und Wigilia",
    vibePl: "słodko-kwaśny, warzywny, zimny lub letni — bufet i Wigilia",
    originDe:
      "Ryba po grecku ist das Rezept für gebratenen Weißfisch unter einer dicken Sauce aus Karotte, Zwiebel, Wurzelgemüse und Tomate — klassisch kalt serviert, oft schon am Vortag gezogen. Der Name meint die polnische Hausküche-Linie „griechische Art“, nicht ein griechisches Restaurantgericht. Klar getrennt vom ganzen Ofkarpfen: [Karp](/de/rezepte/karp) bleibt die Knochen-/Ofen-Fischlinie der Wigilia; hier arbeiten Filet und Gemüsesauce. Menürahmen und Timeline bleiben im [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan) — dort Menü-Artikel, hier der enge Rezept. Als kalte Vorspeise oder Buffetstück trägt das Gericht auch außerhalb der Feiertage.",
    originPl:
      "Ryba po grecku to przepis na smażony biały filet pod gęstym sosem z marchewki, cebuli, warzyw korzeniowych i pomidora — klasycznie na zimno, często zrobiony dzień wcześniej. Nazwa to polska linia domowa „po grecku”, nie grecka restauracja. Wyraźnie osobno od całego karpia z pieca: [karp](/pl/rezepte/karp) zostaje linią kości/pieca na Wigilię; tu filet i sos warzywny. Ramę menu zostawiamy w [menu wigilijnym](/pl/blog/menu-wigilijne) — tam owner okazji, tu wąski Rezept. Jako zimna przystawka lub bufet działa też poza świętami.",
    shopDe:
      "Weißfischfilets aus der Frischtheke oder TK, Karotten, Zwiebeln, Tomatenmark. Petersilienwurzel oder Sellerie oft im [Polenladen](/de/blog/polenladen-einkaufen); fehlt sie, ehrlich mit mehr Karotte und Selleriestange arbeiten laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Lorbeer und Nelke aus dem Gewürzregal. Kein ganzer Karpfen nötig — das spart Grätenstress und hält den Fokus klar neben [Karp](/de/rezepte/karp).",
    shopPl:
      "Filety białej ryby z lady lub mrożone, marchew, cebula, koncentrat. Pietruszka korzeniowa lub seler często w [sklepie polskim](/pl/blog/sklep-polski-zakupy); gdy brak — uczciwie więcej marchewki i łodyga według [zamienników](/pl/blog/zamienniki-skladnikow). Liść laurowy i goździk z przypraw. Cały karp nie jest potrzebny — mniej ości i czysty fokus obok [karpia](/pl/rezepte/karp).",
    techniqueDe:
      "Fisch zuerst braten und ablegen, dann die Sauce separat weich dünsten — Gemüse süß, nicht bitter geröstet. Tomatenmark kurz mitkochen, Flüssigkeit reduzieren, bis die Sauce den Löffel trägt. Heiß über den Fisch, dann ziehen lassen. Zu dünne Sauce wässert den Teller; zu kurze Ziehzeit schmeckt nach getrenntem Fisch und Gemüse statt nach einem Gericht.",
    techniquePl:
      "Najpierw usmaż rybę i odstaw, potem osobno duś sos do miękkości — warzywa słodkie, nie gorzkie. Koncentrat krótko zagotuj, zredukuj płyn, aż sos niesie łyżkę. Gorący sos na rybę, potem odpoczynek. Za rzadki sos moczy talerz; za krótki czas nie łączy smaków.",
    serveDe:
      "Kalt oder lauwarm aus der Form, mit Zitrone und Dill. Passt nach [Barszcz](/de/rezepte/barszcz-czerwony) oder als Buffet neben [Śledź](/de/rezepte/sledz). Am Wigilia-Tisch neben dem Speiseplan planen; Fokus bleibt dieses Rezept. Reste halten sich im Kühlschrank und werden oft am zweiten Tag runder.",
    servePl:
      "Na zimno lub letnio z naczynia, z cytryną i koperkiem. Pasuje po [barszczu](/pl/rezepte/barszcz-czerwony) lub w bufecie obok [śledzia](/pl/rezepte/sledz). Przy stole wigilijnym w menu; tu zostaje ten przepis. Resztki w lodówce — często lepsze nazajutrz.",
    diasporaDe:
      "In DE oft die pragmatische Fischlinie: Filets statt ganzen Karpfen organisieren, Sauce am Vortag, Kühlschrank macht die Arbeit. Kinder dürfen Gemüse raspeln; heißes Öl und Braten bleiben bei Erwachsenen. Wer den Speiseplan entlasten will, kombiniert mit Freezer-Pierogi und klarer Suppe — Details im [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
    diasporaPl:
      "W DE często pragmatyczna linia ryby: filety zamiast całego karpia, sos dzień wcześniej, lodówka pracuje. Dzieci mogą tarć warzywa; gorący olej u dorosłych. Kto odciąża menu: pierogi z mrożenia i jasna zupa — szczegóły w [menu wigilijnym](/pl/blog/menu-wigilijne).",
    mistakesDe:
      "Sauce zu wässrig. Gemüse verbrannt statt gedünstet. Mit [Karp](/de/rezepte/karp) verwechseln (ganzer Fisch/Ofen). Zu kurz ziehen. Zu viel Zucker — Fruchtigkeit der Karotte reicht oft. Mengen und Schritte nicht mit dem verlinkten Nachbarn vermischen. nein, [Wigilia](/de/blog/wigilia-speiseplan) bleibt Menü-Artikel.",
    mistakesPl:
      "Za rzadki sos. Spalone warzywa zamiast duszenia. Mylenie z [karpem](/pl/rezepte/karp). Za krótki odpoczynek. Za dużo cukru. Nie mieszać ilości i kroków z sąsiednim przepisem. nie, tam zostaje owner okazji.",
    variantsDe:
      "Mit Sellerie statt Petersilienwurzel; ohne Nelke milder; etwas Paprika. Warm nur kurz anwärmen, nicht neu braten. Nachbar-Fisch: [Karp](/de/rezepte/karp), [Śledź](/de/rezepte/sledz). Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen.",
    variantsPl:
      "Z selerem zamiast pietruszki; bez goździka łagodniej; odrobina papryki. Na ciepło tylko krótko podgrzej. Pasujący sąsiedzi to [karp](/pl/rezepte/karp), [śledź](/pl/rezepte/sledz). W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe.",
  },

  "recipe-golonka": {
    dishDe: "Golonka",
    dishPl: "Golonka",
    vibeDe: "kräftig, knochig, nach Majoran und Fond — Sonntagsgeduld",
    vibePl: "treściwy, na kości, z majerankiem i sosem — niedzielna cierpliwość",
    originDe:
      "Golonka ist das Rezept für Schweinshaxe am Knochen — lange geschmort, optional knusprig nachgebräunt, mit Senf, Meerrettich oder Kapusta. Das ist weder panierter [Schabowy](/de/rezepte/kotlet-schabowy) noch Ofenschweinebraten [Schab pieczony](/de/rezepte/schab-pieczony) noch Ofenrippen [Żeberka](/de/rezepte/zeberka). Kultur und Menüwahl bleiben im [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch); hier liegt der enge Rezept-Fokus. In der Diaspora oft das Gericht, für das man bewusst Zeit blockt — nicht die schnelle Pfanne.",
    originPl:
      "Golonka to przepis na wieprzowina na kości — długo duszona, opcjonalnie chrupiąca z pieca, z musztardą, chrzanem lub kapustą. To ani panierowany [schabowy](/pl/rezepte/kotlet-schabowy), ani [schab pieczony](/pl/rezepte/schab-pieczony), ani [żeberka](/pl/rezepte/zeberka). Kulturę i wybór menu zostawiamy w [obiadzie niedzielnym](/pl/blog/obiad-niedzielny); tu wąski fokus przepisu. W diasporze często danie, na które świadomie blokujemy czas — nie szybka patelnia.",
    shopDe:
      "Gute Haxe mit Haut vom Metzger oder [Polenladen](/de/blog/polenladen-einkaufen). Majoran frisch oder getrocknet — Dosierung im [Majeranek-Lexikon](/de/blog/majeranek). Schwerer Topf hilft: [Dutch-Oven-Kaufberatung](/de/blog/dutch-oven-kaufberatung). Senf und Meerrettich zum Servieren aus dem Supermarkt.",
    shopPl:
      "Dobra golonka ze skórą od rzeźnika lub [sklepu polskiego](/pl/blog/sklep-polski-zakupy). Majeranek — dawkowanie w [leksykonie](/pl/blog/majeranek-leksykon). Ciężki garnek: [garnek do duszenia](/pl/blog/garnek-do-duszenia). Musztarda i chrzan z supermarketu.",
    techniqueDe:
      "Einreiben, anbraten, Flüssigkeit, lange niedrige Hitze — Geduld vor Hitzeextremen. Haut knusprig erst am Ende bei hoher Temperatur, sonst trocknet das Fleisch. Fond abschmecken; Majoran nicht als Oregano-Ersatz übertreiben. Knochenfleisch braucht Zeit; Abkürzungen enden zäh.",
    techniquePl:
      "Natrzeć, obsmażyć, płyn, długi mały ogień — cierpliwość przed ekstremami. Skórka na chrupko dopiero na końcu; inaczej mięso wyschnie. Sos dopraw; majeranku nie myl z oregano. Mięso na kości wymaga czasu.",
    serveDe:
      "Heiß mit Soße, Senf, Meerrettich, Sauerkraut oder Kartoffeln. Menüplatz: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer Rippen will: [Żeberka](/de/rezepte/zeberka); wer Braten ohne Haxe: [Schab pieczony](/de/rezepte/schab-pieczony); wer Panade: [Schabowy](/de/rezepte/kotlet-schabowy). Reste in Soße aufwärmen.",
    servePl:
      "Gorące z sosem, musztardą, chrzanem, kapustą lub ziemniakami. Miejsce w menu: [obiad niedzielny](/pl/blog/obiad-niedzielny). Żeberka: [żeberka](/pl/rezepte/zeberka); pieczeń: [schab pieczony](/pl/rezepte/schab-pieczony); panierka: [schabowy](/pl/rezepte/kotlet-schabowy). Resztki w sosie.",
    diasporaDe:
      "Samstag einreiben, Sonntag schmoren — oder umgekehrt, wenn Schichtarbeit den Rhythmus verschiebt. Ein Topf, wenig aktives Rühren, Zeit für Spaziergang. Gäste teilen sich eine große Haxe; Kinderportionen vom weichsten Fleisch. Kein Freezer-Heldentum nötig, aber Fond einfrieren lohnt.",
    diasporaPl:
      "Sobota natarcie, niedziela duszenie — albo odwrotnie przy zmianach. Jeden garnek, mało mieszania, czas na spacer. Goście dzielą dużą golonkę; dzieci z najmiększego mięsa. Freezer nie obowiązkowy, ale sos warto zamrozić.",
    mistakesDe:
      "Zu heiß und zu kurz. Mit Schabowy/Schab/Żeberka verwechseln. Majoran wie Oregano kippen. Haut von Anfang an knusprig wollen und Fleisch austrocknen. Zu wenig Flüssigkeit. Mengen und Schritte nicht mit dem verlinkten Nachbarn vermischen. nein.",
    mistakesPl:
      "Za ostro i za krótko. Mylenie ze schabowym/schabem/żeberkami. Za dużo majeranku. Skórka od początku i suche mięso. Za mało płynu. Nie mieszać ilości i kroków z sąsiednim przepisem. nie.",
    variantsDe:
      "Bier oder Apfelsaft im Fond; mit Kümmel; nur geschmort ohne Nachbräunen. Passende Nachbarn sind [Żeberka](/de/rezepte/zeberka), [Schab pieczony](/de/rezepte/schab-pieczony), [Schabowy](/de/rezepte/kotlet-schabowy). Gear: [Dutch Oven](/de/blog/dutch-oven-kaufberatung), Gewürz: [Majeranek](/de/blog/majeranek).",
    variantsPl:
      "Piwo lub sok jabłkowy w sosie; z kminkiem; tylko duszenie bez zapiekania. Pasujący sąsiedzi to [żeberka](/pl/rezepte/zeberka), [schab pieczony](/pl/rezepte/schab-pieczony), [schabowy](/pl/rezepte/kotlet-schabowy). Sprzęt: [garnek](/pl/blog/garnek-do-duszenia), przyprawa: [majeranek](/pl/blog/majeranek-leksykon).",
  },

  "recipe-kompot-z-suszu": {
    dishDe: "Kompot z suszu",
    dishPl: "Kompot z suszu",
    vibeDe: "dunkel, würzig-süß, nach Pflaume und Zimt — Getränk und Dessert",
    vibePl: "ciemny, korzenno-słodki, ze śliwką i cynamonem — napój i deser",
    originDe:
      "Kompot z suszu ist das Rezept für den klassischen Trockenobstkompot — Pflaume, Apfel, Birne, Aprikose, oft mit Zimt und Nelke — als Getränk und zugleich fruchtiger Abschluss. An Wigilia im [Speiseplan](/de/blog/wigilia-speiseplan) verankert, aber Fokus bleibt dieses Rezept: Mengen, Ziehzeit, Süße. Es ersetzt weder den Speiseplan noch die Fischrezepte [Karp](/de/rezepte/karp) oder [Ryba po grecku](/de/rezepte/ryba-po-grecku). Klar getrennt vom gestärkten Frucht-[Kisiel](/de/rezepte/kisiel) (keine ganzen Susz-Stücke, Stärke-Bindung). In der Diaspora oft der ruhigste Gang: ein Topf, wenig Handarbeit, großer Geschmack.",
    originPl:
      "Kompot z suszu to przepis na klasyczny kompot z suszonych owoców — śliwka, jabłko, gruszka, morela, często z cynamonem i goździkiem — jako napój i owocowy finał. Na Wigilii w [menu](/pl/blog/menu-wigilijne), ale tu zostaje ten przepis: ilości, czas, słodycz. Nie miesza się z filarem menu ani z rybami [karpia](/pl/rezepte/karp) lub [ryby po grecku](/pl/rezepte/ryba-po-grecku). Jasno osobno od owocowego [kisielu](/pl/rezepte/kisiel) (bez kawałków suszu, wiązanie skrobią). W diasporze często najspokojniejszy element: jeden garnek, mało pracy, duży smak.",
    shopDe:
      "Fertige Susz-Mischung oder einzelne Sorten im [Polenladen](/de/blog/polenladen-einkaufen); Supermarkt-Trockenobst geht, wenn Qualität stimmt. Fehlt eine Sorte: ehrlich ersetzen laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Zimt und Nelke aus dem Regal; Orangenschale ungespritzt. Wasser und Zucker/Honig reichen als Basis.",
    shopPl:
      "Gotowa mieszanka lub osobne owoce w [sklepie polskim](/pl/blog/sklep-polski-zakupy); supermarket też, gdy jakość OK. Brak sorty: uczciwa zamiana według [zamienników](/pl/blog/zamienniki-skladnikow). Cynamon, goździki, skórka pomarańczy. Woda i cukier/miód jako baza.",
    techniqueDe:
      "Kalt ansetzen, einmal kochen, lange bei kleiner Hitze — nicht zu heftig blubbern, sonst zerfallen die Früchte zu Brei. Süße am Ende kosten; Trockenobst bringt eigene Süße mit. Gewürze entfernen vor dem Servieren. Zu kurze Kochzeit schmeckt nach warmem Wasser mit Obststücken.",
    techniquePl:
      "Zimny start, zagotować, długo na małym ogniu — nie burzyć mocno, bo owoce się rozpadną. Słodycz na końcu; susz ma własny cukier. Przyprawy wyjmij przed podaniem. Za krótko = ciepła woda z kawałkami.",
    serveDe:
      "Kalt in Karaffe mit Früchten oder abgeseiht. Am Tisch neben Barszcz und Fisch; Menürahmen bleibt [Wigilia](/de/blog/wigilia-speiseplan). Passt zu [Makowiec](/de/rezepte/makowiec) am Folgetag. Nicht mit frischem Apfelkompot verwechseln — hier trägt Susz den Charakter.",
    servePl:
      "Na zimno w karafce z owocami lub przecedzony. Przy stole obok barszczu i ryby; owner planu: [menu wigilijne](/pl/blog/menu-wigilijne). Pasuje do [makowca](/pl/rezepte/makowiec) nazajutrz. Nie mylić z kompotem ze świeżych jabłek — tu charakter buduje susz.",
    diasporaDe:
      "Am 23. kochen, am 24. nur kaltstellen — entlastet den Herd. Kinder dürfen Obst abmessen und Zimt riechen; heißer Topf bei Erwachsenen. Reste zum Frühstück oder als Beilage. Einkauf früh im [Polenladen](/de/blog/polenladen-einkaufen), bevor die Susz-Regale leer sind.",
    diasporaPl:
      "Gotuj 23., 24. tylko schłodź — odciąża kuchenkę. Dzieci odmierzą owoce; gorący garnek u dorosłych. Resztki na śniadanie. Zakupy wcześniej w [sklepie polskim](/pl/blog/sklep-polski-zakupy), zanim zniknie susz.",
    mistakesDe:
      "Zu viel Zucker von Anfang an. Zu starkes Kochen (Brei). Frisches Obst 1:1 statt Susz — anderer Charakter. Mit [Kisiel](/de/rezepte/kisiel) verwechseln (Stärke-Fruchtcreme ohne Susz-Stücke). Als Speiseplan statt Rezept auftreten. Vergessen, Nelken zu entfernen. Links zum Anlass bleiben zum [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
    mistakesPl:
      "Za dużo cukru od razu. Zbyt mocne gotowanie. Świeże owoce 1:1 zamiast suszu. Mylenie z [kisiel](/pl/rezepte/kisiel) (masa ze skrobią bez kawałków suszu). Zastępowanie planu menu zamiast przepisu. Zostawione goździki. Linki do okazji do [menu wigilijnego](/pl/blog/menu-wigilijne).",
    variantsDe:
      "Mehr Pflaume dunkler; mehr Aprikose heller; ohne Nelke milder; mit etwas Zitronensaft. Nachbarn am Tisch: [Ryba po grecku](/de/rezepte/ryba-po-grecku), [Karp](/de/rezepte/karp), [Makowiec](/de/rezepte/makowiec); gestärkte Fruchtcreme bleibt [Kisiel](/de/rezepte/kisiel). Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen.",
    variantsPl:
      "Więcej śliwki ciemniej; więcej moreli jaśniej; bez goździka łagodniej; z sokiem z cytryny. Pasujący sąsiedzi to [ryba po grecku](/pl/rezepte/ryba-po-grecku), [karp](/pl/rezepte/karp), [makowiec](/pl/rezepte/makowiec); masa ze skrobią zostaje [kisiel](/pl/rezepte/kisiel). W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe.",
  },
};
