/**
 * Wave 14 Paket A — FACTS for wuzetka, drozdzowka.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W14_FACTS_A } from "./recipe-articles-w14-a";
 * Object.assign(FACTS, …, W14_FACTS_A);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Cross-links to keep distinct: Wuzetka vs Napoleonka (Blätterteig) / Sernik / Szarlotka / Mazurek;
 * Drożdżówka vs Chałka (Zopf) / Babka (Gugelhupf) / Pączki / Racuchy.
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
      "dunkel-schokoladig, sahnig-kalt, ein Bäckerei-Schnitt aus Kakao-Biskuit und Sahne, kein Blätterteig",
    vibePl:
      "ciemno-czekoladowy, śmietankowo-zimny, cukierniczy przekrój z biszkoptu kakaowego i śmietany, nie francuskie",
    originDe:
      "Wuzetka ist eines der wenigen polnischen Gebäcke mit einem exakt dokumentierten Geburtsdatum: Ende der 1940er Jahre schrieb die Warschauer Zunft der Lebensmittelhandwerker (Cech Rzemiosł Spożywczych) einen Wettbewerb für ein neues Konditoreistück aus, das zum süßen Symbol der Hauptstadt werden sollte. Die Warschauer Zakłady Ciastkarskie gewannen mit genau diesem Schnitt aus Kakao-Biskuit, Sahnefüllung und Schokoglasur und verkauften ihn zunächst exklusiv in den Cafés der Kette Camargo. Woher der Name kommt, ist bis heute umstritten: Die meisten Historiker verbinden ihn mit der Warschauer Ost-West-Trasse, kurz W-Z, die am 22. Juli 1949 eröffnet wurde und in deren Nähe eine der ersten Konditoreien lag, andere leiten ihn vom Kürzel WZC (Warszawskie Zakłady Ciastkarskie) oder von „wypiek z kremem“ ab. Weil das Rezept nie patentiert wurde, verbreitete es sich in den 1970er Jahren über ganz Polen, nachdem ehemalige WZC-Mitarbeiter eigene Betriebe gegründet hatten. Popkulturell unsterblich wurde die Wuzetka durch Stanisław Barejas Kultfilm „Miś“ von 1980, in dem der Satz fällt, Kaffee und Wuzetka seien für jeden Pflicht. Heute steht sie auf der Liste der traditionellen Warschauer Produkte. Wer stattdessen Blätterteig mit Vanillecreme sucht, findet [Napoleonka](/de/rezepte/napoleonka); Quarkkuchen bleibt [Sernik](/de/rezepte/sernik), Apfelkuchen [Szarlotka](/de/rezepte/szarlotka).",
    originPl:
      "Wuzetka ma coś rzadkiego jak na polskie ciasto: dobrze udokumentowaną metrykę. Pod koniec lat czterdziestych Cech Rzemiosł Spożywczych w Warszawie ogłosił konkurs na nowe ciastko, które miało stać się słodkim symbolem stolicy. Warszawskie Zakłady Ciastkarskie wygrały właśnie tym przekrojem z biszkoptu kakaowego, śmietany i polewy czekoladowej i sprzedawały go najpierw wyłącznie w kawiarniach sieci Camargo. Skąd wzięła się nazwa, do dziś nie wiadomo na pewno: większość badaczy łączy ją z warszawską Trasą W-Z, otwartą 22 lipca 1949 roku, w pobliżu której działała jedna z pierwszych cukierni, inni wywodzą ją od skrótu WZC (Warszawskie Zakłady Ciastkarskie) albo od „wypieku z kremem”. Ponieważ przepisu nigdy nie opatentowano, w latach siedemdziesiątych rozprzestrzenił się po całej Polsce, gdy byli pracownicy WZC zakładali własne cukiernie. Nieśmiertelność popkulturową zapewnił jej kultowy film Stanisława Barei „Miś” z 1980 roku, w którym pada zdanie, że kawa i wuzetka są obowiązkowe dla każdego. Dziś figuruje na liście warszawskich produktów tradycyjnych. Kto szuka ciasta francuskiego z kremem waniliowym, znajdzie [napoleonkę](/pl/rezepte/napoleonka); sernikiem zostaje [sernik](/pl/rezepte/sernik), a jabłecznikiem [szarlotka](/pl/rezepte/szarlotka).",
    shopDe:
      "Für Biskuit und Füllung brauchst du Kakao, Mehl, Eier, Zucker, Schlagsahne, dunkle Schokolade oder Kuvertüre und Butter. Die Basis findest du im Supermarkt, gutes Kakaopulver und manchmal bessere Kuvertüre im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt Sahne in guter Qualität oder passendes Kakaopulver, hilft [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) weiter, ohne dass die Torte in Richtung Blätterteig kippt. Fertiger Blätterteig als Basis führt eigentlich zu [Napoleonka](/de/rezepte/napoleonka), ein Quark- oder Apfelkern zu [Sernik](/de/rezepte/sernik) beziehungsweise [Szarlotka](/de/rezepte/szarlotka).",
    shopPl:
      "Na biszkopt i nadzienie potrzebujesz kakao, mąki, jajek, cukru, śmietanki, gorzkiej czekolady lub couverture i masła. Bazę kupisz w markecie, dobre kakao i czasem lepszą couverture w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Gdy brakuje śmietanki dobrej jakości albo odpowiedniego kakao, pomogą [zamienniki składników](/pl/blog/zamienniki-skladnikow), bez zbaczania w stronę ciasta francuskiego. Gotowe ciasto francuskie jako baza prowadzi właściwie do [napoleonki](/pl/rezepte/napoleonka), a twaróg lub jabłko do [sernika](/pl/rezepte/sernik) albo [szarlotki](/pl/rezepte/szarlotka).",
    techniqueDe:
      "Der Biskuit muss vollständig auskühlen, bevor er geteilt wird, warm reißt er und saugt die Sahne ungleichmäßig auf. Die Sahne sollte sehr kalt und wirklich steif geschlagen sein, eine leichte Stabilisierung mit Gelatine oder Speisestärke verhindert, dass die Schicht beim Anschneiden wegrutscht. Beim Tränken mit Kaffee oder Kakao-Milch lieber sparsam arbeiten, sonst wird der Boden matschig statt saftig. Die Glasur kommt erst auf die bereits kalte Torte, danach braucht sie mehrere Stunden Kühlzeit, damit der Schnitt sauber bleibt statt zu verschmieren. Zu weiche Sahne oder zu kurze Kühlzeit sind die häufigsten Gründe, warum der charakteristische Schnitt mit dunklen Biskuitstreifen und heller Füllung nicht gelingt. Das unterscheidet die Wuzetka technisch klar vom Blätterteig-Aufbau der [Napoleonka](/de/rezepte/napoleonka) und vom Quarkboden des [Sernik](/de/rezepte/sernik).",
    techniquePl:
      "Biszkopt musi całkowicie wystygnąć, zanim go przekroisz, na gorąco się rwie i nierówno wchłania śmietanę. Śmietankę ubij bardzo zimną i naprawdę na sztywno, lekka stabilizacja żelatyną lub skrobią chroni warstwę przed zsuwaniem się podczas krojenia. Przy nasączaniu kawą lub kakao z mlekiem lepiej działać oszczędnie, inaczej spód zrobi się rozmokły zamiast wilgotny. Polewę nakładaj dopiero na zimny tort, potem potrzeba kilku godzin chłodzenia, żeby krojenie zostało czyste, a nie się rozmazywało. Za miękka śmietana albo za krótkie chłodzenie to najczęstsze powody, dla których charakterystyczny przekrój z ciemnymi paskami biszkoptu i jasnym nadzieniem się nie udaje. To odróżnia wuzetkę technicznie od budowy z ciasta francuskiego w [napoleonce](/pl/rezepte/napoleonka) i od spodu twarogowego w [serniku](/pl/rezepte/sernik).",
    serveDe:
      "Am besten kalt in Rechtecken, oft mit einem Sahnetupfer obendrauf, zu Kaffee oder Tee. Als süßer Abschluss passt sie gut zum [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Auf dem Kaffeetisch bleibt die Zuordnung einfach: Blätterteig mit Creme ist [Napoleonka](/de/rezepte/napoleonka), Quark ist [Sernik](/de/rezepte/sernik), Apfelkuchen vom Blech ist [Szarlotka](/de/rezepte/szarlotka). Typische Zutaten dafür findest du im [Polenladen](/de/blog/polenladen-einkaufen). Gekühlt hält sie sich zwei bis drei Tage, die Glasur vor dem Servieren bei Bedarf kurz glattstreichen.",
    servePl:
      "Najlepiej na zimno w prostokątach, często z czubkiem śmietany na wierzchu, do kawy lub herbaty. Jako słodkie zwieńczenie pasuje dobrze do [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Przy stole zapamiętać łatwo: ciasto francuskie z kremem to [napoleonka](/pl/rezepte/napoleonka), twaróg to [sernik](/pl/rezepte/sernik), jabłecznik z blachy to [szarlotka](/pl/rezepte/szarlotka). Typowe składniki znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). W chłodzie trzyma się dwa do trzech dni, polewę przed podaniem w razie potrzeby wygładź.",
    diasporaDe:
      "Wuzetka ist der Bäckerei-Klassiker, den deutsche Gäste einfach als Schoko-Sahne-Schnitt verstehen und polnische Familien sofort erkennen, sobald der dunkle Biskuit und die helle Sahnefüllung im Schnitt sichtbar werden. Ein Blech reicht für den Sonntagskaffee mit Gästen, der Rest hält sich gut bis zum nächsten Tag. Die Kühlzeit ist kein Luxus, sondern nötig, damit der Schnitt beim Servieren nicht zerfließt. Zutaten dafür findest du im [Polenladen](/de/blog/polenladen-einkaufen), Alternativen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Der kulturelle Rahmen bleibt beim [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    diasporaPl:
      "Wuzetka to cukierniczy klasyk, który niemieccy goście rozumieją po prostu jako przekrój czekoladowo-śmietankowy, a polskie rodziny rozpoznają od razu, gdy w przekroju widać ciemny biszkopt i jasną śmietanę. Jedna blacha starcza na niedzielną kawę z gośćmi, reszta dobrze trzyma się do następnego dnia. Czas chłodzenia to nie luksus, tylko konieczność, żeby przekrój nie rozjechał się przy podawaniu. Składniki znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), zamienniki pod [zamiennikami składników](/pl/blog/zamienniki-skladnikow). Rama kulturowa zostaje przy [obiedzie niedzielnym](/pl/blog/obiad-niedzielny).",
    mistakesDe:
      "Die Torte mit [Napoleonka](/de/rezepte/napoleonka) zu verwechseln ist der häufigste Fehler, dabei ist Blätterteig ein komplett anderer Teig. Auch die Verwechslung mit [Sernik](/de/rezepte/sernik) oder [Szarlotka](/de/rezepte/szarlotka) kommt vor, beide haben einen anderen Boden. Technisch scheitert die Wuzetka meist an zu weicher Sahne, an einem noch warm geschichteten Biskuit oder an zu kurzer Kühlzeit vor dem Anschneiden.",
    mistakesPl:
      "Najczęstszy błąd to mylenie wuzetki z [napoleonką](/pl/rezepte/napoleonka), a przecież ciasto francuskie to zupełnie inny wypiek. Zdarza się też mylenie z [sernikiem](/pl/rezepte/sernik) lub [szarlotką](/pl/rezepte/szarlotka), obie mają inny spód. Technicznie wuzetka najczęściej nie wychodzi przez zbyt miękką śmietanę, przekładanie jeszcze ciepłego biszkoptu albo zbyt krótkie chłodzenie przed krojeniem.",
    variantsDe:
      "Mit stärkerer Kaffeetränke wird der Biskuit intensiver, mit einem Hauch Kakao in der Sahne entsteht eine mokka-artige Variante, die man ehrlich benennen sollte, und mit dünnerer Glasur wird der Schnitt insgesamt leichter. Wer lieber Blätterteig mag, findet sein Rezept bei [Napoleonka](/de/rezepte/napoleonka), Quarkfans bei [Sernik](/de/rezepte/sernik) und Apfelkuchen-Liebhaber bei [Szarlotka](/de/rezepte/szarlotka). Zum Menürahmen passt das [Sonntagsessen](/de/blog/sonntagsessen-polnisch), Einkaufshilfen liefern der [Polenladen](/de/blog/polenladen-einkaufen) und die [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Z mocniejszym nasączeniem kawą biszkopt zyskuje intensywność, z odrobiną kakao w śmietanie powstaje wariant mokka, który warto uczciwie nazwać, a z cieńszą polewą całość robi się lżejsza. Kto woli ciasto francuskie, znajdzie swój przepis przy [napoleonce](/pl/rezepte/napoleonka), fani twarogu przy [serniku](/pl/rezepte/sernik), a miłośnicy jabłecznika przy [szarlotce](/pl/rezepte/szarlotka). Do ramy menu pasuje [obiad niedzielny](/pl/blog/obiad-niedzielny), zakupy ułatwią [sklep polski](/pl/blog/sklep-polski-zakupy) i [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
  },

  "recipe-drozdzowka": {
    dishDe: "Drożdżówka / Placek drożdżowy",
    dishPl: "Drożdżówka / placek drożdżowy",
    vibeDe:
      "hefewarm, streuselig-süß, ein Blechkuchen für Alltag und Sonntagskaffee, kein Zopf",
    vibePl:
      "drożdżowo-ciepły, kruszonkowy, na co dzień i do niedzielnej kawy, blacha, nie warkocz",
    originDe:
      "Placek drożdżowy geht direkt auf das Brotbacken zurück: Hefeteig kannten polnische Haushalte über Jahrhunderte vor allem als Grundlage für Brot, und die süße, mit Zucker, Butter und Eiern angereicherte Blechvariante war lange ein teures Festtagsgebäck. Landwirtschaftsministeriums-Dokumentationen aus der Kujawien-Region beschreiben, dass um 1900 Brot noch fast ausschließlich aus Roggensauerteig gebacken wurde, während der Hefekuchen aus Weizenmehl nur zu Kirchweihfesten (odpust) und hohen Feiertagen auf den Tisch kam, oft zusätzlich mit Trockenfrüchten verfeinert. Erst mit wachsendem Wohlstand der Region wurde er zum Alltagsgebäck. Rezepte für Streuselkuchen finden sich bereits in Kochbüchern des späten 19. und frühen 20. Jahrhunderts, etwa bei Lucyna Ćwierczakiewiczowa aus dem Jahr 1895 oder bei Maria Ochorowicz-Monatowa, und die Zubereitung hat sich seither kaum verändert. In der Zwischenkriegszeit standardisierten polnische Bäckereien die süßen Hefeteilchen, und selbst in den Mangeljahren nach 1945 hielten viele Bäckereien die Produktion aufrecht, sodass ein frischer Hefekuchen zu einem kleinen, verlässlichen Luxus wurde. Der Placek bleibt dabei klar von anderen Hefegebäcken abgegrenzt: kein geflochtener Zopf wie [Chałka](/de/rezepte/chalka), keine hohe Gugelhupfform wie [Babka](/de/rezepte/babka), kein Frittieren wie bei [Pączki](/de/rezepte/paczki) und keine Pfanne wie bei [Racuchy](/de/rezepte/racuchy-jablka).",
    originPl:
      "Placek drożdżowy wywodzi się bezpośrednio z pieczenia chleba: ciasto drożdżowe polskie domy znały przez wieki przede wszystkim jako bazę na chleb, a słodka wersja z blachy, wzbogacona cukrem, masłem i jajkami, długo była drogim wypiekiem odświętnym. Dokumentacje Ministerstwa Rolnictwa z Kujaw opisują, że około 1900 roku chleb piekło się niemal wyłącznie na zakwasie żytnim, a placek drożdżowy z mąki pszennej trafiał na stół tylko z okazji odpustu i większych świąt, często dodatkowo z bakaliami. Dopiero rosnący dobrobyt regionu uczynił go wypiekiem codziennym. Przepisy na ciasta z kruszonką znajdziemy już w książkach kucharskich z końca XIX i początku XX wieku, na przykład u Lucyny Ćwierczakiewiczowej z 1895 roku czy u Marii Ochorowicz-Monatowej, a sposób przygotowania od tamtej pory prawie się nie zmienił. W dwudziestoleciu międzywojennym polskie piekarnie ustandaryzowały słodkie wypieki drożdżowe, a nawet w trudnych latach po 1945 roku wiele piekarni utrzymywało ich produkcję, dzięki czemu świeży placek stał się małym, pewnym luksusem. Placek zostaje przy tym wyraźnie oddzielony od innych wypieków drożdżowych: to nie pleciony warkocz jak [chałka](/pl/rezepte/chalka), nie wysoka forma babkowa jak [babka](/pl/rezepte/babka), nie smażenie jak w [pączkach](/pl/rezepte/paczki) i nie patelnia jak w [racuchach](/pl/rezepte/racuchy-jablka).",
    shopDe:
      "Für den Hefeteig brauchst du Mehl, Milch, Hefe, Zucker, Ei, Butter und Salz, für die Streusel zusätzlich kalte Butter, Mehl und Zucker, optional Apfel. Hefe und gute Butter findest du oft im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt Hefe oder ein bestimmter Mehltyp, hilft [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) weiter. Eine Gugelhupfform oder Frittieröl führen eigentlich zu [Babka](/de/rezepte/babka) beziehungsweise [Pączki](/de/rezepte/paczki), geflochtener Zopf gehört zu [Chałka](/de/rezepte/chalka).",
    shopPl:
      "Na ciasto drożdżowe potrzebujesz mąki, mleka, drożdży, cukru, jajka, masła i soli, na kruszonkę dodatkowo zimnego masła, mąki i cukru, opcjonalnie jabłka. Drożdże i dobre masło często kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Gdy brakuje drożdży lub konkretnego typu mąki, pomogą [zamienniki składników](/pl/blog/zamienniki-skladnikow). Forma babkowa i olej do smażenia prowadzą właściwie do [babki](/pl/rezepte/babka) lub [pączków](/pl/rezepte/paczki), a splot należy do [chałki](/pl/rezepte/chalka).",
    techniqueDe:
      "Die Hefe sollte in lauwarmer, nicht heißer Milch aktiviert werden, zu heiße Flüssigkeit tötet sie ab und der Teig geht nicht auf. Nach dem Kneten braucht der Teig Zeit, bis er sich sichtbar verdoppelt hat, wird er zu kurz gehen gelassen, bleibt der Placek kompakt statt luftig. Auf dem Blech wird der Teig flach gedrückt statt geflochten oder in eine Form gepresst, das ist der entscheidende Formunterschied zu [Chałka](/de/rezepte/chalka) und [Babka](/de/rezepte/babka). Die Streusel entstehen, indem kalte Butter mit Mehl und Zucker zu groben Krümeln verrieben wird, zu wenig davon wirkt schnell wie nackter Hefeteig ohne den typischen kruszonka-Charakter. Nach dem Belegen mit Obst folgt noch eine kurze zweite Gare, bevor der Kuchen goldbraun und vollständig durchgebacken wird.",
    techniquePl:
      "Drożdże trzeba aktywować w letnim, nie gorącym mleku, bo zbyt gorący płyn je zabija i ciasto nie wyrośnie. Po wyrobieniu ciasto potrzebuje czasu, aż wyraźnie podwoi objętość, za krótkie wyrastanie sprawia, że placek zostaje zbity zamiast puszysty. Na blasze ciasto rozciąga się płasko, zamiast pleść je lub wciskać w formę, to kluczowa różnica formy względem [chałki](/pl/rezepte/chalka) i [babki](/pl/rezepte/babka). Kruszonka powstaje z zimnego masła zetartego z mąką i cukrem na grube okruchy, za mało kruszonki szybko wygląda jak goły placek bez charakterystycznej struktury. Po ułożeniu owoców następuje jeszcze krótkie drugie wyrastanie, zanim ciasto upiecze się na złoto i będzie w pełni wypieczone.",
    serveDe:
      "In Rechtecken geschnitten, warm oder lauwarm zum Kaffee. Der Menürahmen dafür ist das [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer lieber einen Zopf möchte, findet ihn bei [Chałka](/de/rezepte/chalka), Formkuchen bei [Babka](/de/rezepte/babka), Frittiertes bei [Pączki](/de/rezepte/paczki) und Pfannengebäck bei [Racuchy](/de/rezepte/racuchy-jablka). Typische Backzutaten gibt es im [Polenladen](/de/blog/polenladen-einkaufen). Reste luftdicht aufbewahren und kurz aufwärmen oder wie Toast überbacken.",
    servePl:
      "Pokrojony w prostokąty, ciepły lub letni do kawy. Ramę menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny). Kto woli warkocz, znajdzie go w [chałce](/pl/rezepte/chalka), ciasto z formy w [babce](/pl/rezepte/babka), smażone w [pączkach](/pl/rezepte/paczki), a wypiek z patelni w [racuchach](/pl/rezepte/racuchy-jablka). Typowe składniki do pieczenia kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Resztki przechowuj szczelnie, krótko podgrzej albo zapiecz jak tosty.",
    diasporaDe:
      "Placek drożdżowy passt gut in den Alltag der Diaspora: ein Blech, Hefe aus dem Vorrat, Streusel aus Butter, Mehl und Zucker, Obst aus dem Supermarkt. Wer samstags backt und sonntags nur noch schneidet, entlastet den Morgen deutlich. Kinder dürfen beim Streuselreiben helfen, den heißen Ofen übernehmen die Erwachsenen. Zutaten dafür findest du im [Polenladen](/de/blog/polenladen-einkaufen), Alternativen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Der kulturelle Rahmen bleibt beim [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    diasporaPl:
      "Placek drożdżowy dobrze pasuje do codzienności w diasporze: jedna blacha, drożdże ze spiżarni, kruszonka z masła, mąki i cukru, owoce z marketu. Sobotnie pieczenie i niedzielne krojenie wyraźnie odciąża poranek. Dzieci mogą pomóc przy tarciu kruszonki, gorący piekarnik zostaje przy dorosłych. Składniki znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), zamienniki pod [zamiennikami składników](/pl/blog/zamienniki-skladnikow). Rama kulturowa zostaje przy [obiedzie niedzielnym](/pl/blog/obiad-niedzielny).",
    mistakesDe:
      "Die Verwechslung mit [Chałka](/de/rezepte/chalka) wegen des Zopfs oder mit [Babka](/de/rezepte/babka) wegen der Form ist der häufigste Denkfehler, beide haben eine andere Struktur. Auch [Pączki](/de/rezepte/paczki) oder [Racuchy](/de/rezepte/racuchy-jablka) werden gelegentlich verwechselt, beide sind frittiert oder in der Pfanne gebacken statt im Ofen auf dem Blech. Technisch scheitert der Placek meist an zu heißer Milch, die die Hefe abtötet, an zu kurzer Gehzeit oder an zu dünn verteilten Streuseln.",
    mistakesPl:
      "Najczęstsza pomyłka to mylenie z [chałką](/pl/rezepte/chalka) przez warkocz albo z [babką](/pl/rezepte/babka) przez formę, obie mają inną strukturę. Zdarza się też mylenie z [pączkami](/pl/rezepte/paczki) lub [racuchami](/pl/rezepte/racuchy-jablka), oba są smażone zamiast pieczone na blasze. Technicznie placek najczęściej się nie udaje przez zbyt gorące mleko, które zabija drożdże, za krótkie wyrastanie albo zbyt cienką warstwę kruszonki.",
    variantsDe:
      "Mit mehr Apfel wird der Kuchen saftiger, mit saisonaler Pflaume entsteht eine ebenso gute Variante, und ganz ohne Obst bleibt nur die Streuseldecke im Vordergrund. Kleinere Teilchen statt eines ganzen Blechs behalten den Hefe-Streusel-Charakter bei. Wer lieber einen Zopf mag, findet ihn bei [Chałka](/de/rezepte/chalka), Formkuchen bei [Babka](/de/rezepte/babka), Frittiertes bei [Pączki](/de/rezepte/paczki) und Pfannengebäck bei [Racuchy](/de/rezepte/racuchy-jablka). Zum Rahmen passt das [Sonntagsessen](/de/blog/sonntagsessen-polnisch), Hefe-Technik erklärt die [Makowiec-Technik](/de/blog/makowiec-technik), Einkauf hilft der [Polenladen](/de/blog/polenladen-einkaufen) und die [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Z większą ilością jabłka ciasto robi się bardziej soczyste, ze śliwką sezonowo wychodzi równie dobry wariant, a bez owoców na pierwszy plan wysuwa się sama warstwa kruszonki. Mniejsze bułeczki zamiast całej blachy zachowują charakter drożdżowo-kruszonkowy. Kto woli warkocz, znajdzie go w [chałce](/pl/rezepte/chalka), formę w [babce](/pl/rezepte/babka), smażone w [pączkach](/pl/rezepte/paczki), a wypiek z patelni w [racuchach](/pl/rezepte/racuchy-jablka). Do ramy pasuje [obiad niedzielny](/pl/blog/obiad-niedzielny), technikę drożdży wyjaśnia [technika makowca](/pl/blog/makowiec-technika), zakupy ułatwiają [sklep polski](/pl/blog/sklep-polski-zakupy) i [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
  },
};
