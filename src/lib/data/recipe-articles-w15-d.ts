/**
 * Wave 15 Paket D — FACTS for koperkowa, kisiel.
 *
 * Agent E merge into recipe-articles.ts:
 *   import { W15_FACTS_D } from "./recipe-articles-w15-d";
 *   Object.assign(FACTS, …, W15_FACTS_D);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Zupa koperkowa (Dill + Kartoffel/Ei/Śmietana) ≠ Rosół ≠ Szczawiowa ≠ Botwinka ≠ Ogórkowa
 * - Kisiel owocowy (Stärke-Fruchtcreme) ≠ Kompot z suszu ≠ Kutia
 * - Polnische Suppen / Wigilia bleiben Broad-/Anlass-Owner
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

export const W15_FACTS_D: Record<string, ArticleFacts> = {
  "recipe-koperkowa": {
    dishDe: "Zupa koperkowa",
    dishPl: "Zupa koperkowa",
    vibeDe: "hell, kräuterfrisch, nach Dill und milder Sahne — Alltag und Sonntagstarter",
    vibePl: "jasna, ziołowo-świeża, od koperku i łagodnej śmietany — codzienność i starter niedzielny",
    originDe:
      "Zupa koperkowa ist der Cook-Intent für die klassische polnische Dillsuppe — hier als eine klare Hauslinie: Kartoffelbasis, reichlich frischer Dill (koperek), temperierte Śmietana und hartgekochtes Ei im Teller. Die Farbe bleibt hell bis leicht grünlich; der Geschmack kräuterfrisch und mild, nicht scharf-sauer. Das ist keine klare Festtagsbrühe wie [Rosół](/de/rezepte/rosol), keine Sauerampfersuppe [Szczawiowa](/de/rezepte/szczawiowa), keine junge Rote-Bete-Suppe [Botwinka](/de/rezepte/botwinka) und keine Kiszone-Gurkensuppe [Ogórkowa](/de/rezepte/ogorkowa). Der Overview [Polnische Suppen](/de/blog/polnische-suppen) bleibt Broad-Owner der Landschaft; hier liegt nur der enge Dill-Primary. Menüplatz descriptiv beim [Sonntagsessen](/de/blog/sonntagsessen-polnisch) — Kultur-Owner bleibt der Guide, Cook-Primary dieses Rezept.",
    originPl:
      "Zupa koperkowa to intent cook: klasyczna polska zupa z koperku — tu jedna linia domowa: baza ziemniaczana, dużo świeżego koperku, zahartowana śmietana i jajko na twardo w talerzu. Kolor zostaje jasny do lekko zielonkawego; smak ziołowo-świeży i łagodny, nie ostro-kwaśny. To nie klarowny wywar jak [rosół](/pl/rezepte/rosol), nie [szczawiowa](/pl/rezepte/szczawiowa), nie [botwinka](/pl/rezepte/botwinka) i nie [ogórkowa](/pl/rezepte/ogorkowa). Przegląd [polskie zupy](/pl/blog/polskie-zupy) zostaje broad-ownerem; tu tylko wąski primary koperku. Miejsce w menu opisowo przy [obiadzie niedzielnym](/pl/blog/obiad-niedzielny) — owner kultury zostaje przy guide, cook-primary przy tym przepisie.",
    shopDe:
      "Frischer Dill ist der Charakterträger — Supermarkt oder [Polenladen](/de/blog/polenladen-einkaufen); getrocknet nur Notlösung und ehrlich benennen laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Kartoffeln, Zwiebel, Eier aus dem Markt. Śmietana/Schmand-Wahl im [Śmietana-Guide](/de/blog/smietana-schmand). Leichte Brühe selbst oder aus Resten — das ist kein Rosół-Showpiece wie [Rosół](/de/rezepte/rosol). Kein Sauerampfer-Bund und kein Gurkenglas als Basis — sonst driftet der Intent zu [Szczawiowa](/de/rezepte/szczawiowa) bzw. [Ogórkowa](/de/rezepte/ogorkowa).",
    shopPl:
      "Świeży koperek niesie charakter — market lub [sklep polski](/pl/blog/sklep-polski-zakupy); suszony tylko awaryjnie według [zamienników](/pl/blog/zamienniki-skladnikow). Ziemniaki, cebula, jajka z marketu. Wybór śmietany w [przewodniku](/pl/blog/smietana-czy-schmand). Lekki bulion z resztek — to nie showpiece jak [rosół](/pl/rezepte/rosol). Bez pęczka szczawiu i bez słoika ogórków jako bazy — inaczej intent idzie w [szczawiową](/pl/rezepte/szczawiowa) lub [ogórkową](/pl/rezepte/ogorkowa).",
    techniqueDe:
      "Kartoffelbasis weich kochen, leicht binden (zerdrücken, nicht Babybrei), Dill spät und reichlich — lange Hitze macht den Kräuterduft flach. Śmietana immer temperieren, nie in den kochenden Topf. Ei separat hart kochen und erst im Teller. Abschmecken: Salz, Pfeffer, Dill-Dominanz; Säure nur sparsam. Das ist kein Kiszone-Topf wie [Ogórkowa](/de/rezepte/ogorkowa) und kein Sauerampfer-Grün wie [Szczawiowa](/de/rezepte/szczawiowa). Brühe-Nachbarn descriptiv: [Rosół](/de/rezepte/rosol), [Botwinka](/de/rezepte/botwinka).",
    techniquePl:
      "Bazę ziemniaczaną dogotuj, lekko zagęść (rozgnieć, nie papkę), koperek późno i obficie — długi ogień spłaszcza aromat. Śmietanę zawsze zahartuj. Jajko osobno na twardo, do talerza. Dopraw: sól, pieprz, dominacja koperku; kwasu mało. To nie garnek kiszony jak [ogórkowa](/pl/rezepte/ogorkowa) i nie zieleń szczawiu jak [szczawiowa](/pl/rezepte/szczawiowa). Sąsiedzi bulionowi opisowo: [rosół](/pl/rezepte/rosol), [botwinka](/pl/rezepte/botwinka).",
    serveDe:
      "Heiß, hell, mit Ei und Dill. Passt als ruhiger Starter oder leichter Mittag im Sinne von [polnischem Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer klare Brühe will: [Rosół](/de/rezepte/rosol); wer Sauerampfer: [Szczawiowa](/de/rezepte/szczawiowa); wer Gurkensäure: [Ogórkowa](/de/rezepte/ogorkowa); wer junge Bete: [Botwinka](/de/rezepte/botwinka). Landschaft: [Polnische Suppen](/de/blog/polnische-suppen). Einkauf: [Polenladen](/de/blog/polenladen-einkaufen).",
    servePl:
      "Gorąca, jasna, z jajkiem i koperkiem. Spokojny starter lub lekki obiad w duchu [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Klarowny wywar: [rosół](/pl/rezepte/rosol); szczaw: [szczawiowa](/pl/rezepte/szczawiowa); kwas ogórkowy: [ogórkowa](/pl/rezepte/ogorkowa); młode buraki: [botwinka](/pl/rezepte/botwinka). Krajobraz: [polskie zupy](/pl/blog/polskie-zupy). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
    diasporaDe:
      "Koperkowa ist Diaspora-freundlich: Dill und Kartoffeln aus dem Supermarkt, Śmietana aus dem Kühlregal, ein Topf für denselben Tag. Kinder dürfen Dill zupfen und Eier schälen; heißer Topf bei Erwachsenen. Fehlt frischer Dill: ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) und Qualität im [Polenladen](/de/blog/polenladen-einkaufen) prüfen. Speiseplan entlasten heißt: klare Cook-URL, Kultur bleibt [Sonntagsessen](/de/blog/sonntagsessen-polnisch), Overview bleibt [Polnische Suppen](/de/blog/polnische-suppen).",
    diasporaPl:
      "Koperkowa lubi diasporę: koperek i ziemniaki z marketu, śmietana z lodówki, jeden garnek na ten sam dzień. Dzieci oberwą koper i obiorą jajka; gorący garnek u dorosłych. Brak świeżego koperku: uczciwie według [zamienników](/pl/blog/zamienniki-skladnikow) i jakość w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Odciążenie menu: jasny cook-URL, kultura zostaje w [obiadzie niedzielnym](/pl/blog/obiad-niedzielny), przegląd w [polskich zupach](/pl/blog/polskie-zupy).",
    mistakesDe:
      "Mit [Rosół](/de/rezepte/rosol) verwechseln (klare Brühe). Mit [Szczawiowa](/de/rezepte/szczawiowa) verwechseln (Sauerampfer). Mit [Ogórkowa](/de/rezepte/ogorkowa) verwechseln (Kiszone). Mit [Botwinka](/de/rezepte/botwinka) verwechseln (Bete). Dill zu spärlich oder zu früh mitkochen. Śmietana kochend einrühren. Ownership vom [Suppen-Overview](/de/blog/polnische-suppen) oder [Sonntagsessen](/de/blog/sonntagsessen-polnisch) stehlen — nein.",
    mistakesPl:
      "Mylenie z [rosołem](/pl/rezepte/rosol). Mylenie z [szczawiową](/pl/rezepte/szczawiowa). Mylenie z [ogórkową](/pl/rezepte/ogorkowa). Mylenie z [botwinką](/pl/rezepte/botwinka). Za mało koperku albo za wcześnie gotowany. Śmietana do wrzątku. Kradzież ownership z [przeglądu zup](/pl/blog/polskie-zupy) lub [obiadu niedzielnego](/pl/blog/obiad-niedzielny) — nie.",
    variantsDe:
      "Mit mehr Dill intensiver; mit weniger Śmietana leichter; vegetarisch auf Gemüsebrühe. Nachbarn: [Rosół](/de/rezepte/rosol), [Szczawiowa](/de/rezepte/szczawiowa), [Ogórkowa](/de/rezepte/ogorkowa), [Botwinka](/de/rezepte/botwinka). Guides: [Polnische Suppen](/de/blog/polnische-suppen), [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Śmietana/Schmand](/de/blog/smietana-schmand), [Polenladen](/de/blog/polenladen-einkaufen).",
    variantsPl:
      "Z większą ilością koperku intensywniej; z mniejszą śmietaną lżej; wege na warzywnym. Sąsiedzi: [rosół](/pl/rezepte/rosol), [szczawiowa](/pl/rezepte/szczawiowa), [ogórkowa](/pl/rezepte/ogorkowa), [botwinka](/pl/rezepte/botwinka). Przewodniki: [polskie zupy](/pl/blog/polskie-zupy), [obiad niedzielny](/pl/blog/obiad-niedzielny), [śmietana/Schmand](/pl/blog/smietana-czy-schmand), [sklep polski](/pl/blog/sklep-polski-zakupy).",
  },

  "recipe-kisiel": {
    dishDe: "Kisiel owocowy",
    dishPl: "Kisiel owocowy",
    vibeDe: "fruchtig-glänzend, semi-transparent, löffelbar — Dessert und leichter Abschluss",
    vibePl: "owocowo-błyszczący, półprzezroczysty, do łyżki — deser i lekki finał",
    originDe:
      "Kisiel owocowy ist der Cook-Intent für die klassische polnische Fruchtcreme aus Fruchtsaft und Speisestärke — hier als eine klare Himbeer-Linie: Beeren auskochen, absieben, mit Stärke binden, bis der Topf dicklich-glänzend und semi-transparent ist. Das ist kein Trockenobstkompot mit ganzen Fruchtstücken wie [Kompot z suszu](/de/rezepte/kompot-z-suszu) und kein Weizen-Mohn-Dessert wie [Kutia](/de/rezepte/kutia). An Wigilia descriptiv im [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan) verankern — Anlass-Owner bleibt der Speiseplan, Cook-Primary dieses Rezept. Diaspora-Einkauf und Ersatzlogik: [Polenladen](/de/blog/polenladen-einkaufen) und [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
    originPl:
      "Kisiel owocowy to intent cook: klasyczna polska masa owocowa z soku i skrobi — tu jedna linia malinowa: owoce ugotować, przecedzić, zagęścić skrobią, aż garnek będzie gęsty, błyszczący i półprzezroczysty. To nie kompot z całymi kawałkami suszu jak [kompot z suszu](/pl/rezepte/kompot-z-suszu) i nie deser zbożowy jak [kutia](/pl/rezepte/kutia). Na Wigilii opisowo w [menu wigilijnym](/pl/blog/menu-wigilijne) — owner okazji zostaje przy planie, cook-primary przy tym przepisie. Zakupy i zamienniki: [sklep polski](/pl/blog/sklep-polski-zakupy) i [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
    shopDe:
      "Himbeeren frisch oder TK — Supermarkt ganzjährig. Speisestärke (Kartoffelstärke klassisch) im Backregal oder [Polenladen](/de/blog/polenladen-einkaufen). Zucker, Zitrone, Wasser. Fehlt Himbeere: Johannisbeere oder Erdbeere ehrlich als andere Fruchtlinie laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Kein Susz-Mix und keine Weizenkörner — sonst driftet der Intent zu [Kompot z suszu](/de/rezepte/kompot-z-suszu) bzw. [Kutia](/de/rezepte/kutia). Anlass-Rahmen bleibt [Wigilia](/de/blog/wigilia-speiseplan).",
    shopPl:
      "Maliny świeże lub mrożone — market przez cały rok. Skrobia (klasycznie ziemniaczana) w dziale mąk lub [sklepie polskim](/pl/blog/sklep-polski-zakupy). Cukier, cytryna, woda. Brak malin: porzeczka lub truskawka uczciwie jako inna linia według [zamienników](/pl/blog/zamienniki-skladnikow). Bez mieszanki suszu i bez pszenicy — inaczej intent idzie w [kompot z suszu](/pl/rezepte/kompot-z-suszu) lub [kutię](/pl/rezepte/kutia). Rama okazji: [menu wigilijne](/pl/blog/menu-wigilijne).",
    techniqueDe:
      "Frucht erst auskochen und absieben, dann Stärke kalt anrühren und unter Rühren einlaufen lassen — Klumpen vermeiden. Kurz dick werden lassen, nicht minutenlang blubbern (sonst gummiartig). Abschmecken: Fruchtsäure gegen Zucker. Direkt abfüllen; Haut mit Folie auf der Oberfläche vermeiden. Das ist Bindung durch Stärke, nicht langes Ziehen von Susz wie bei [Kompot z suszu](/de/rezepte/kompot-z-suszu). Kein Quell- und Mahlschritt wie bei [Kutia](/de/rezepte/kutia).",
    techniquePl:
      "Najpierw ugotuj i przecedź owoce, potem skrobię rozetrzyj na zimno i wlej mieszając — bez grudek. Krótko zagęść, nie burz minutami (zrobi się gumowaty). Dopraw: kwas owoców kontra cukier. Od razu przelej; kożuch unikaj folią na powierzchni. To wiązanie skrobią, nie długie gotowanie suszu jak w [kompocie z suszu](/pl/rezepte/kompot-z-suszu). Bez moczenia i mielenia jak w [kutii](/pl/rezepte/kutia).",
    serveDe:
      "Warm, lauwarm oder kalt in Glas oder Schale — löffelbar, semi-transparent, Beerenfarbe klar. Optional frische Beeren oder Śmietana. Als leichter Abschluss neben dem [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan) — ohne den Anlass-Owner zu ersetzen. Wer dunkles Susz-Getränk will: [Kompot z suszu](/de/rezepte/kompot-z-suszu); wer Getreide+Mohn: [Kutia](/de/rezepte/kutia). Einkauf: [Polenladen](/de/blog/polenladen-einkaufen), Ersatz: [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    servePl:
      "Ciepły, letni lub zimny w szklance lub miseczce — do łyżki, półprzezroczysty, kolor owoców jasny. Opcjonalnie świeże owoce lub śmietana. Lekki finał obok [menu wigilijnego](/pl/blog/menu-wigilijne) — bez zastępowania ownera okazji. Napój z suszu: [kompot z suszu](/pl/rezepte/kompot-z-suszu); zboże+mak: [kutia](/pl/rezepte/kutia). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy), zamienniki: [zamienniki](/pl/blog/zamienniki-skladnikow).",
    diasporaDe:
      "Kisiel ist schnell und kinderfreundlich: TK-Beeren, Stärke aus dem Vorrat, zehn Minuten Herd. Am Vortag kochen und kaltstellen entlastet den Festtag — Primary bleibt dieses Rezept, Menü-Owner [Wigilia](/de/blog/wigilia-speiseplan). Stärke-Typen und fehlende Beeren ehrlich im [Ersatzprodukte](/de/blog/ersatzprodukte-de)-Guide und im [Polenladen](/de/blog/polenladen-einkaufen). Nicht mit Susz-Kompot verwechseln: [Kompot z suszu](/de/rezepte/kompot-z-suszu).",
    diasporaPl:
      "Kisiel jest szybki i przyjazny dzieciom: mrożone owoce, skrobia ze spiżarni, dziesięć minut przy kuchence. Dzień wcześniej ugotuj i schłodź — odciąża święto; primary zostaje ten przepis, owner menu [menu wigilijne](/pl/blog/menu-wigilijne). Typy skrobi i brak owoców uczciwie w [zamiennikach](/pl/blog/zamienniki-skladnikow) i [sklepie polskim](/pl/blog/sklep-polski-zakupy). Nie mylić z kompotem: [kompot z suszu](/pl/rezepte/kompot-z-suszu).",
    mistakesDe:
      "Mit [Kompot z suszu](/de/rezepte/kompot-z-suszu) verwechseln (Susz-Getränk mit Fruchtstücken). Mit [Kutia](/de/rezepte/kutia) verwechseln (Weizen+Mohn). Stärke klumpig einrühren. Zu lange kochen (Gummi). Als Speiseplan-Owner auftreten statt Rezept — nein, Anlass bleibt [Wigilia](/de/blog/wigilia-speiseplan). Einkaufs-Owner bleibt [Polenladen](/de/blog/polenladen-einkaufen).",
    mistakesPl:
      "Mylenie z [kompotem z suszu](/pl/rezepte/kompot-z-suszu). Mylenie z [kutią](/pl/rezepte/kutia). Skrobia w grudkach. Zbyt długie gotowanie. Udawanie ownera menu zamiast przepisu — nie, okazja zostaje przy [menu wigilijnym](/pl/blog/menu-wigilijne). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
    variantsDe:
      "Johannisbeere säuerlicher; Erdbeere milder; gemischte Beeren. Dünner als Trink-Kisiel, dicker als Pudding. Nachbarn: [Kompot z suszu](/de/rezepte/kompot-z-suszu), [Kutia](/de/rezepte/kutia). Guides: [Wigilia](/de/blog/wigilia-speiseplan), [Polenladen](/de/blog/polenladen-einkaufen), [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Porzeczka bardziej kwaskowa; truskawka łagodniejsza; mieszanka jagód. Rzadszy jak napój, gęstszy jak budyń. Sąsiedzi: [kompot z suszu](/pl/rezepte/kompot-z-suszu), [kutia](/pl/rezepte/kutia). Przewodniki: [menu wigilijne](/pl/blog/menu-wigilijne), [sklep polski](/pl/blog/sklep-polski-zakupy), [zamienniki](/pl/blog/zamienniki-skladnikow).",
  },
};
