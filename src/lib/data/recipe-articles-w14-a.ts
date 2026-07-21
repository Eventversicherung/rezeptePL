/**
 * Wave 14 Paket A — FACTS for wuzetka, drozdzowka.
 *
 * Agent E merge into recipe-articles.ts:
 *   import { W14_FACTS_A } from "./recipe-articles-w14-a";
 *   Object.assign(FACTS, …, W14_FACTS_A);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Wuzetka ≠ Napoleonka (Blätterteig) / Sernik / Szarlotka / Mazurek
 * - Drożdżówka ≠ Chałka (Zopf) / Babka (Gugelhupf) / Pączki / Racuchy
 * - Sonntagsessen bleibt Kultur-Owner; hier nur Cook-Primary
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

export const W14_FACTS_A: Record<string, ArticleFacts> = {
  "recipe-wuzetka": {
    dishDe: "Wuzetka",
    dishPl: "Wuzetka",
    vibeDe:
      "dunkel-schokoladig, sahnig-kalt, Bäckerei-Schnitt — Schoko-Sahne, kein Blätterteig",
    vibePl:
      "ciemno-czekoladowy, śmietankowo-zimny, cukierniczy przekrój — czekolada+śmietana, nie francuskie",
    originDe:
      "Wuzetka ist der Cook-Intent für die klassische polnische Schoko-Sahne-Torte — hier als eine klare Hauslinie: Kakao-Biskuit, dicke geschlagene Sahne dazwischen, dunkle Schoko-Glasur oben. Der Schnitt zeigt dunkle Biskuitschichten und eine helle Sahnefüllung, oft als Rechteck vom Blech. Das ist weder Blätterteig mit Vanillecreme wie [Napoleonka](/de/rezepte/napoleonka) noch Quarkkuchen [Sernik](/de/rezepte/sernik) noch Apfelkuchen [Szarlotka](/de/rezepte/szarlotka) und auch kein flacher Osterbelag [Mazurek](/de/rezepte/mazurek). Am [Sonntagsessen](/de/blog/sonntagsessen-polnisch) darf sie der Kaffee-Schluss sein — Kultur-Owner bleibt der Guide, Cook-Primary diese URL. In der Diaspora oft der Bäckerei-Klassiker, den man zu Hause nachbaut, wenn Kühlschrank und Ruhezeit zum Kühlen da sind.",
    originPl:
      "Wuzetka to intent cook: klasyczny polski tort czekoladowo-śmietankowy — tu jedna linia domowa: biszkopt kakaowy, gęsta ubita śmietana w środku, ciemna polewa na wierzchu. Przekrój pokazuje ciemne warstwy biszkoptu i jasną śmietanę, często prostokąt z blachy. To ani ciasto francuskie z kremem waniliowym jak [napoleonka](/pl/rezepte/napoleonka), ani [sernik](/pl/rezepte/sernik), ani [szarlotka](/pl/rezepte/szarlotka), ani płaski [mazurek](/pl/rezepte/mazurek). Przy [obiadzie niedzielnym](/pl/blog/obiad-niedzielny) bywa domknięciem przy kawie — owner kultury zostaje przy guide, cook-primary przy tej URL. W diasporze często klasyk cukierniczy, który w domu odtwarza się, gdy jest lodówka i czas na chłodzenie.",
    shopDe:
      "Kakao, Mehl, Eier, Zucker, Schlagsahne, dunkle Schokolade/Kuvertüre, Butter — Basis im Supermarkt; gutes Kakao und manchmal bessere Kuvertüre im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt Sahne-Qualität oder Kakao: ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de), ohne in Blätterteig-Intent zu kippen. Kein Fertig-Blätterteig als Basis — sonst driftet der Intent zu [Napoleonka](/de/rezepte/napoleonka). Kein Quark und kein Apfelkern — sonst [Sernik](/de/rezepte/sernik) bzw. [Szarlotka](/de/rezepte/szarlotka).",
    shopPl:
      "Kakao, mąka, jajka, cukier, śmietanka, gorzka czekolada/couverture, masło — baza w markecie; dobre kakao i czasem lepsza couverture w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Brak jakości śmietanki lub kakao: uczciwie według [zamienników](/pl/blog/zamienniki-skladnikow), bez dryfu w francuskie. Bez gotowego ciasta francuskiego jako bazy — inaczej intent idzie w [napoleonkę](/pl/rezepte/napoleonka). Bez twarogu i bez jabłka — inaczej [sernik](/pl/rezepte/sernik) lub [szarlotka](/pl/rezepte/szarlotka).",
    techniqueDe:
      "Biskuit luftig backen, vollständig abkühlen, dann einmal teilen — heiß reißt und saugt die Sahne falsch. Sahne sehr kalt und steif; leichte Stabilisierung verhindert Rutschen im Schnitt. Tränken sparsam (Kaffee/Kakao-Milch), nicht nass. Glasur auf kalte Torte; danach lange kühlen, bis der Schnitt sauber ist. Zu flüssige Sahne = matschiger Schnitt; zu trockener Biskuit = bröckelig. Das ist kein Blätterteig-Bau wie [Napoleonka](/de/rezepte/napoleonka) und kein Quarkboden wie [Sernik](/de/rezepte/sernik). Backruhe und Sonntagsrhythmus descriptiv: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    techniquePl:
      "Biszkopt piecz puszysto, całkowicie ostudź, potem przekrój — na gorąco się rwie i źle bierze śmietanę. Śmietanka bardzo zimna i sztywna; lekka stabilizacja chroni przed ślizganiem. Nasączanie oszczędnie (kawa/kakao z mlekiem), nie mokro. Polewa na zimny tort; potem długie chłodzenie aż krojenie czyste. Za rzadka śmietana = rozmokły przekrój; za suchy biszkopt = kruszenie. To nie budowa z francuskiego jak [napoleonka](/pl/rezepte/napoleonka) i nie spód twarogowy jak [sernik](/pl/rezepte/sernik). Rytm niedzielny opisowo: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
    serveDe:
      "Kalt in Rechtecken, oft mit Sahnetupfer, zu Kaffee oder Tee. Als Sonntagsschluss descriptiv unter [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Abgrenzung auf dem Tisch: Blätterteig-Creme = [Napoleonka](/de/rezepte/napoleonka); Quark = [Sernik](/de/rezepte/sernik); Apfelblech = [Szarlotka](/de/rezepte/szarlotka). Einkaufskontext: [Polenladen](/de/blog/polenladen-einkaufen). Hält gekühlt zwei bis drei Tage; Glasur vor dem Servieren ggf. glätten.",
    servePl:
      "Na zimno w prostokątach, często z czubkiem śmietany, do kawy lub herbaty. Jako niedzielne domknięcie opisowo pod [obiadem niedzielnym](/pl/blog/obiad-niedzielny). Na stole: francuskie+krem = [napoleonka](/pl/rezepte/napoleonka); twaróg = [sernik](/pl/rezepte/sernik); jabłko z blachy = [szarlotka](/pl/rezepte/szarlotka). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy). Trzyma 2–3 dni w chłodzie; polewę przed podaniem ewentualnie wygładź.",
    diasporaDe:
      "Wuzetka ist der Diaspora-Bäckerei-Klassiker, den deutsche Gäste als „Schoko-Sahne-Schnitt“ verstehen und polnische Familien sofort wiedererkennen, wenn Biskuit dunkel und Sahne hell ist. Ein Blech für den Sonntag, Stücke für Gäste, Rest für den nächsten Tag. Kühlzeit ist kein Luxus — ohne sie zerfließt der Schnitt. Kein Zwang zu Blätterteig-Ästhetik und kein Quark als „Ersatzfüllung“. Einkauf und Ersatz: [Polenladen](/de/blog/polenladen-einkaufen), [Ersatzprodukte](/de/blog/ersatzprodukte-de). Kulturrahmen bleibt [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    diasporaPl:
      "Wuzetka to klasyk cukierniczy diasporze, który niemieccy goście rozumieją jako „przekrój czekoladowo-śmietankowy”, a polskie rodziny rozpoznają od razu, gdy biszkopt jest ciemny, a śmietana jasna. Jedna blacha na niedzielę, kawałki dla gości, resztka na następny dzień. Czas chłodzenia nie jest luksusem — bez niego przekrój się rozjeżdża. Bez przymusu estetyki francuskiego i bez twarogu jako „zamiennika”. Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy), [zamienniki](/pl/blog/zamienniki-skladnikow). Rama kultury: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
    mistakesDe:
      "Mit [Napoleonka](/de/rezepte/napoleonka) verwechseln (Blätterteig). Mit [Sernik](/de/rezepte/sernik) oder [Szarlotka](/de/rezepte/szarlotka) verwechseln. Sahne zu weich; Biskuit heiß schichten; zu kurz kühlen. Ownership vom [Sonntagsessen](/de/blog/sonntagsessen-polnisch) stehlen — nein, dort Kultur.",
    mistakesPl:
      "Mylenie z [napoleonką](/pl/rezepte/napoleonka) (francuskie). Mylenie z [sernikiem](/pl/rezepte/sernik) lub [szarlotką](/pl/rezepte/szarlotka). Za miękka śmietana; gorący biszkopt; za krótkie chłodzenie. Kradzież ownership z [obiadu niedzielnego](/pl/blog/obiad-niedzielny) — nie.",
    variantsDe:
      "Mit stärkerer Kaffee-Tränke, mit etwas Kakao in der Sahne (ehrlich benennen), mit dünnerer Glasur. Nachbarn: [Napoleonka](/de/rezepte/napoleonka), [Sernik](/de/rezepte/sernik), [Szarlotka](/de/rezepte/szarlotka). Guides: [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Polenladen](/de/blog/polenladen-einkaufen), [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Z mocniejszym nasączeniem kawą, z odrobiną kakao w śmietanie (nazwać uczciwie), z cieńszą polewą. Sąsiedzi: [napoleonka](/pl/rezepte/napoleonka), [sernik](/pl/rezepte/sernik), [szarlotka](/pl/rezepte/szarlotka). Przewodniki: [obiad niedzielny](/pl/blog/obiad-niedzielny), [sklep polski](/pl/blog/sklep-polski-zakupy), [zamienniki](/pl/blog/zamienniki-skladnikow).",
  },

  "recipe-drozdzowka": {
    dishDe: "Drożdżówka / Placek drożdżowy",
    dishPl: "Drożdżówka / placek drożdżowy",
    vibeDe:
      "hefewarm, streuselig-süß, Alltag und Sonntagskaffee — Blech, kein Zopf",
    vibePl:
      "drożdżowo-ciepły, kruszonkowy, codzienność i niedzielna kawa — blacha, nie warkocz",
    originDe:
      "Drożdżówka bzw. Placek drożdżowy ist der Cook-Intent für den klassischen polnischen Hefekuchen vom Blech — hier als eine klare Hauslinie: weicher Hefeteig flach auf dem Blech, dicke kruszonka (Streusel) oben, optional Apfel- oder Pflaumenscheiben darunter. Das ist weder der geflochtene Hefezopf [Chałka](/de/rezepte/chalka) noch der hohe Gugelhupf [Babka](/de/rezepte/babka) noch die frittierten [Pączki](/de/rezepte/paczki) und auch keine Apfel-Pfannkuchen [Racuchy](/de/rezepte/racuchy-jablka). Am [Sonntagsessen](/de/blog/sonntagsessen-polnisch) darf sie zum Kaffee gehören — Kultur-Owner bleibt der Guide. Hefe-Feeling descriptiv bei [Makowiec-Technik](/de/blog/makowiec-technik), ohne Makowiec-Primary zu stehlen. In der Diaspora oft der Blechkuchen, den man samstags backt und sonntags nur noch schneidet.",
    originPl:
      "Drożdżówka / placek drożdżowy to intent cook: klasyczny polski placek drożdżowy z blachy — tu jedna linia domowa: miękkie ciasto drożdżowe płasko na blasze, gęsta kruszonka na wierzchu, opcjonalnie jabłko lub śliwka pod spodem. To ani pleciona [chałka](/pl/rezepte/chalka), ani wysoka [babka](/pl/rezepte/babka) z formy, ani smażone [pączki](/pl/rezepte/paczki), ani jabłkowe [racuchy](/pl/rezepte/racuchy-jablka). Przy [obiadzie niedzielnym](/pl/blog/obiad-niedzielny) bywa do kawy — owner kultury zostaje przy guide. Wyczucie drożdży opisowo: [technika makowca](/pl/blog/makowiec-technika), bez kradzieży primary makowca. W diasporze często placek z soboty, w niedzielę tylko krojenie.",
    shopDe:
      "Mehl, Milch, Hefe, Zucker, Ei, Butter, Salz; für Streusel zusätzliche kalte Butter, Mehl, Zucker; optional Apfel. Hefe und gute Butter oft im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt Hefe oder Mehltyp: ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Keine Gugelhupf-Form und kein Frittieröl — sonst driftet der Intent zu [Babka](/de/rezepte/babka) bzw. [Pączki](/de/rezepte/paczki). Kein Flechtwerk wie [Chałka](/de/rezepte/chalka).",
    shopPl:
      "Mąka, mleko, drożdże, cukier, jajko, masło, sól; na kruszonkę dodatkowe zimne masło, mąka, cukier; opcjonalnie jabłko. Drożdże i dobre masło często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Brak drożdży lub typu mąki: uczciwie według [zamienników](/pl/blog/zamienniki-skladnikow). Bez formy babkowej i bez oleju do smażenia — inaczej intent idzie w [babkę](/pl/rezepte/babka) lub [pączki](/pl/rezepte/paczki). Bez splotu jak [chałka](/pl/rezepte/chalka).",
    techniqueDe:
      "Hefe lauwarm aktivieren, Teig elastisch kneten und verdoppeln lassen. Flach aufs Blech drücken — nicht flechten, nicht in Gugelhupf pressen. Streusel aus kalter Butter zu groben Krümeln; dick streuen, damit der Charakter „kruszonka“ bleibt. Optional Obst vor dem Streusel. Zweites Gehen kurz; backen bis goldbraun und durch. Zu heiße Milch tötet Hefe; zu wenig Gehen macht den Placek kompakt; zu wenig Streusel wirkt wie nackter Hefeteig. Hefe-Feeling descriptiv: [Makowiec-Technik](/de/blog/makowiec-technik). Form-Nachbar: [Chałka](/de/rezepte/chalka) (Zopf), [Babka](/de/rezepte/babka) (Form).",
    techniquePl:
      "Drożdże aktywować na letnio, ciasto elastycznie wyrabiać i podwoić. Płasko na blachę — bez splotu, bez formy babkowej. Kruszonkę z zimnego masła w grube okruchy; sypać gęsto, żeby został charakter „kruszonka”. Opcjonalnie owoce przed kruszonką. Drugie wyrastanie krótko; piec na złoto i wypieczone. Za gorące mleko zabija drożdże; za krótkie wyrastanie zbija placek; za mało kruszonki wygląda jak gołe ciasto. Wyczucie: [technika makowca](/pl/blog/makowiec-technika). Sąsiedzi formy: [chałka](/pl/rezepte/chalka) (warkocz), [babka](/pl/rezepte/babka) (forma).",
    serveDe:
      "In Rechtecken, warm oder lauwarm, zum Kaffee. Menüplatz descriptiv: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer Zopf will: [Chałka](/de/rezepte/chalka); wer Formkuchen: [Babka](/de/rezepte/babka); wer frittiert: [Pączki](/de/rezepte/paczki); wer Pfanne: [Racuchy](/de/rezepte/racuchy-jablka). Einkauf: [Polenladen](/de/blog/polenladen-einkaufen). Reste luftdicht — toasten oder kurz aufwärmen.",
    servePl:
      "W prostokątach, ciepłe lub letnie, do kawy. Miejsce w menu opisowo: [obiad niedzielny](/pl/blog/obiad-niedzielny). Warkocz: [chałka](/pl/rezepte/chalka); forma: [babka](/pl/rezepte/babka); smażone: [pączki](/pl/rezepte/paczki); patelnia: [racuchy](/pl/rezepte/racuchy-jablka). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy). Resztki szczelnie — tosty lub krótkie podgrzanie.",
    diasporaDe:
      "Placek drożdżowy ist diaspora-freundlich: ein Blech, Hefe aus dem Vorrat, Streusel aus Butter-Mehl-Zucker, Obst aus dem Supermarkt. Samstag backen, Sonntag nur schneiden — entlastet den Morgen. Kinder dürfen Streusel reiben; heißer Ofen bei Erwachsenen. Qualität vor drei verschiedenen Hefegebäcken am selben Tag. Einkauf: [Polenladen](/de/blog/polenladen-einkaufen), [Ersatzprodukte](/de/blog/ersatzprodukte-de). Kultur ohne Primary-Diebstahl: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    diasporaPl:
      "Placek drożdżowy lubi diasporę: jedna blacha, drożdże ze spiżarni, kruszonka z masła-mąki-cukru, owoce z marketu. Sobota pieczenie, niedziela tylko krojenie — odciąża poranek. Dzieci zetrą kruszonkę; gorący piec u dorosłych. Jakość przed trzema wypiekami drożdżowymi tego samego dnia. Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy), [zamienniki](/pl/blog/zamienniki-skladnikow). Kultura bez kradzieży primary: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
    mistakesDe:
      "Mit [Chałka](/de/rezepte/chalka) verwechseln (Zopf). Mit [Babka](/de/rezepte/babka) verwechseln (Form). Mit [Pączki](/de/rezepte/paczki) oder [Racuchy](/de/rezepte/racuchy-jablka) verwechseln. Zu heiße Milch; zu wenig Gehen; zu dünner Streusel. Ownership vom [Sonntagsessen](/de/blog/sonntagsessen-polnisch) stehlen — nein.",
    mistakesPl:
      "Mylenie z [chałką](/pl/rezepte/chalka) (warkocz). Mylenie z [babką](/pl/rezepte/babka) (forma). Mylenie z [pączkami](/pl/rezepte/paczki) lub [racuchami](/pl/rezepte/racuchy-jablka). Za gorące mleko; za krótkie wyrastanie; za cienka kruszonka. Kradzież ownership z [obiadu niedzielnego](/pl/blog/obiad-niedzielny) — nie.",
    variantsDe:
      "Mit mehr Apfel; mit Pflaume saisonal; ohne Obst nur Streusel; kleinere Teilchen statt ganzes Blech (Intent bleibt Hefe+Streusel). Nachbarn: [Chałka](/de/rezepte/chalka), [Babka](/de/rezepte/babka), [Pączki](/de/rezepte/paczki), [Racuchy](/de/rezepte/racuchy-jablka). Guides: [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Makowiec-Technik](/de/blog/makowiec-technik), [Polenladen](/de/blog/polenladen-einkaufen), [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Z większą ilością jabłka; ze śliwką sezonowo; bez owoców tylko kruszonka; mniejsze bułeczki zamiast całej blachy (intent zostaje drożdże+kruszonka). Sąsiedzi: [chałka](/pl/rezepte/chalka), [babka](/pl/rezepte/babka), [pączki](/pl/rezepte/paczki), [racuchy](/pl/rezepte/racuchy-jablka). Przewodniki: [obiad niedzielny](/pl/blog/obiad-niedzielny), [technika makowca](/pl/blog/makowiec-technika), [sklep polski](/pl/blog/sklep-polski-zakupy), [zamienniki](/pl/blog/zamienniki-skladnikow).",
  },
};
