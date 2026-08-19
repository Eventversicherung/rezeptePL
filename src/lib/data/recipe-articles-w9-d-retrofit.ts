/**
 * Wave 9 Paket D — Wave-8 FACTS link audit / optional neighbor patches.
 *
 * Audit (2026-07-20): all six Wave-8 recipe IDs already meet ≥4 markdown
 * links per locale (≥2 recipe + ≥2 blog) in their W8 FACTS sources.
 * No gap-fill required for gate compliance.
 *
 * Optional: Kapusta zasmażana gets a descriptive Cook-pairing → Kaszanka
 * (new dish neighbor). Full ArticleFacts replacement for that one key only.
 *
 * Agent E merge:
 * import { W9_FACTS_W8_RETROFIT } from "./recipe-articles-w9-d-retrofit";
 * Object.assign(FACTS, …, W9_FACTS_W8_RETROFIT, W9_FACTS_D);
 *
 * Do NOT invent Flaki/Piernik. Do NOT rewrite Kielbasa Types ownership.
 */

import type { ArticleFacts } from "./recipe-articles-w9-d";

/** Empty keys for gap-fills — W8 already green. Only optional pairing below. */
export const W9_FACTS_W8_RETROFIT: Record<string, ArticleFacts> = {
 "recipe-kapusta-zasmażana": {
 dishDe: "Kapusta zasmażana",
 dishPl: "Kapusta zasmażana",
 vibeDe: "warm, säuerlich-mild, nach Butter und sanfter Schwitze",
 vibePl: "ciepła, kwaśno-łagodna, z masłem i delikatną zasmażką",
 originDe:
 "Kapusta zasmażana ist geschmortes Sauerkraut, das erst am Ende mit einer Zasmażka gebunden wird, einer hellen Mehlschwitze aus Butter oder Schmalz und Mehl, die der polnischen Küche seit Jahrhunderten ihre samtige Textur gibt. Der Name trägt die Technik direkt im Wort: zasmażać heißt so viel wie anschwitzen und binden. Kohl war in Polen lange ein Grundnahrungsmittel, weil er leicht anzubauen und durch Fermentation zu Kapusta kiszona über den ganzen Winter haltbar war, oft in Fässern im Keller, gleichrangig neben eingelegtem Hering. Aus dieser Vorratshaltung entstand mit der Zeit ein eigenständiges Beilagengericht, klar getrennt vom aufwendigeren [Bigos](/de/rezepte/bigos), der als Schmorgericht mit mehreren Fleischsorten über Stunden köchelt. Kapusta zasmażana bleibt schlanker: eine warme Beilage zum Fleisch, kein eigenständiger Schmortopf. In manchen Regionen wird sie fast suppig dünn serviert, in anderen so dick eingekocht, dass sie an Kartoffelpüree erinnert, und sie taucht bis heute neben Schlesischen Klößen, Eisbein oder gebratener Ente auf.",
 originPl:
 "Kapusta zasmażana to duszona kapusta kiszona, którą dopiero na końcu wiąże się zasmażką, jasną zasmażką z masła lub smalcu i mąki, która od wieków nadaje polskiej kuchni jej aksamitną konsystencję. Nazwa niesie technikę wprost w słowie: zasmażać znaczy tyle co podsmażyć i związać. Kapusta była w Polsce od dawna podstawą wyżywienia, bo łatwo ją uprawiać, a dzięki fermentacji jako kapusta kiszona przetrwać całą zimę, często w beczkach w piwnicy, obok śledzi jako fundament przetrwania. Z tej tradycji przechowywania powstało z czasem samodzielne danie dodatkowe, wyraźnie oddzielone od bardziej rozbudowanego [bigosu](/pl/rezepte/bigos), który jako danie duszone z kilkoma rodzajami mięsa gotuje się godzinami. Kapusta zasmażana zostaje skromniejsza: ciepły dodatek do mięsa, nie osobny gulasz. W niektórych regionach podaje się ją niemal jak zupę, w innych zagęszcza tak mocno, że przypomina puree ziemniaczane, a do dziś towarzyszy kluskom śląskim, golonce albo pieczonej kaczce.",
 shopDe:
 "Gute [Sauerkraut-Qualität](/de/blog/kiszenie-guide) aus dem Glas oder Beutel, dabei Säure und Salz vorher prüfen statt blind zu spülen. Dazu Zwiebel, Butter oder Schmalz, Mehl und Lorbeer. Optional passt ein Schuss leichte Brühe vom [Rosół](/de/rezepte/rosol)-Tag hinein. Wer selbst fermentiert, nutzt den Kiszenie-Guide nur als Technik-Nachbar, denn das eigentliche Thema Fermentieren bleibt dort ausführlich behandelt. Kraut aus dem Polenladen schmeckt oft aromatischer als industrielle Supermarktware, weil es langsamer und mit weniger Zucker fermentiert wird. Wer eine mildere Variante sucht, greift zu jüngerem Kraut mit kürzerer Gärzeit, wer kräftigere Säure will, nimmt ein Glas vom Boden des Fasses.",
 shopPl:
 "Dobra [jakość kiszonki](/pl/blog/kiszenie-w-domu) ze słoika lub worka, przy czym warto sprawdzić kwas i sól, zamiast płukać na ślepo. Do tego cebula, masło lub smalec, mąka i liść laurowy. Opcjonalnie pasuje łyżka lekkiego bulionu z dnia, gdy gotuje się [rosół](/pl/rezepte/rosol). Kto kisi sam, traktuje przewodnik kiszenia jedynie jako technicznego sąsiada, bo samo kiszenie zostaje tam opisane osobno i szczegółowo. Kapusta ze sklepu polskiego bywa aromatyczniejsza niż przemysłowa z supermarketu, bo kisi się wolniej i z mniejszą ilością cukru. Kto szuka łagodniejszej wersji, sięga po młodszą kapustę o krótszym czasie fermentacji, a kto lubi mocny kwas, bierze słoik z dna beczki.",
 techniqueDe:
 "Die Zwiebel zunächst glasig anschwitzen, dann das Kraut schmoren, bis es weich ist, und erst danach die helle, nicht nussbraun-bittere Zasmażka unterheben und kurz mitkochen. Zu viel Flüssigkeit sollte vorher reduzieren, sonst wird die Bindung am Ende zu dünn. Abschmecken mit Salz und Pfeffer, während Zucker nur als Notbremse gegen zu aggressive Säure dient und nicht standardmäßig dazugehört. Wichtig ist auch die Reihenfolge beim Binden: die Zasmażka löst sich am glattesten auf, wenn man sie zunächst mit etwas warmer Flüssigkeit aus dem Topf verrührt, bevor man sie ins Kraut zurückgibt, denn direkt hineingegeben klumpt sie leicht.",
 techniquePl:
 "Cebulę najpierw zeszklić, potem kapustę dusić do miękkości, a dopiero na końcu wmieszać jasną, nie gorzką zasmażkę i krótko podgotować. Nadmiar płynu lepiej wcześniej odparować, inaczej zasmażka nie zwiąże całości. Doprawić solą i pieprzem, a cukier trzymać w odwodzie tylko na wypadek zbyt ostrego kwasu, nie jako stały składnik. Ważna jest też kolejność przy wiązaniu: zasmażka rozpuszcza się najgładziej, gdy najpierw rozprowadzi się ją odrobiną ciepłego płynu z garnka, zanim wróci do kapusty, bo wrzucona wprost łatwo się zbryla.",
 serveDe:
 "Heiß zu [Kotlet schabowy](/de/rezepte/kotlet-schabowy), Braten oder einfachen Kartoffeln, eingebettet in den Rahmen des [polnischen Sonntagsessens](/de/blog/sonntagsessen-polnisch). Deftige Pfannen-Nachbarschaft bietet [Kaszanka mit Zwiebel](/de/rezepte/kaszanka), deren Wurst-Sorten der [Kiełbasa-Arten-Guide](/de/blog/kielbasa-arten) erklärt, hier dient sie höchstens als Aroma-Tupfer und nicht als Ersatz für Bigos. Reste schmecken am nächsten Tag oft runder, dafür beim Erwärmen etwas Wasser nachgießen. In manchen Familien landet sie auch neben Schlesischen Kartoffelklößen oder einem Löffel Apfelmus, was ihr eine mildere, fast süßliche Note verleiht.",
 servePl:
 "Gorąca do [kotleta schabowego](/pl/rezepte/kotlet-schabowy), pieczeni lub zwykłych ziemniaków, w ramach [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Treściwe sąsiedztwo z patelni oferuje [kaszanka z cebulą](/pl/rezepte/kaszanka), a jej odmiany opisuje [przewodnik rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy), tu wędzonka jest najwyżej akcentem smakowym, nie zamiennikiem bigosu. Resztki następnego dnia często smakują lepiej, przy odgrzewaniu warto dolać odrobinę wody. W niektórych rodzinach podaje się ją też obok śląskich klusek albo z łyżką musu jabłkowego, co dodaje jej łagodniejszej, niemal słodkawej nuty.",
 diasporaDe:
 "In deutschen Wohnungen riecht Kapusta zasmażana nach einem ruhigen Sonntag ohne stundenlanges Schmoren in mehreren Töpfen. Kraut kommt direkt aus dem Kühlregal, die Schwitze ist in fünf Minuten fertig, was das Gericht auch nach einer Spätschicht machbar macht. Wer Majoran mag, dosiert ihn zurückhaltend und findet im [Majeranek-Lexikon](/de/blog/majeranek) einen guten Gewürz-Nachbarn, ohne dass dieses Rezept dadurch ersetzt würde. Für Kinder, die Sauerkraut pur ablehnen, wirkt die milde, buttrige Zasmażka oft überzeugender als reines Kraut, weil die Säure abgerundet statt roh daherkommt.",
 diasporaPl:
 "W niemieckich mieszkaniach kapusta zasmażana pachnie spokojną niedzielą bez maratonu kilku garnków naraz. Kapusta pochodzi prosto z chłodni, zasmażka jest gotowa w pięć minut, co sprawdza się nawet po popołudniowej zmianie. Kto lubi majeranek, dawkuje go ostrożnie, a [leksykon majeranku](/pl/blog/majeranek-leksykon) podpowiada, jak dobierać przyprawy, choć samego przepisu nie zastępuje. Dzieciom, które nie lubią surowej kiszonki, łagodna, maślana zasmażka często smakuje lepiej, bo łagodzi kwas zamiast podawać go na surowo.",
 mistakesDe:
 "Eine zu dunkel geröstete Zasmażka schmeckt schnell bitter. Komplett gespültes Kraut verliert dagegen fast seine ganze Säure und wirkt fade. Das Gericht mit Bigos zu verwechseln oder mit zu viel Wasser zu einer Suppe statt einer Beilage zu verdünnen, sind zwei typische Fehler. Wurst zu früh hinzuzugeben verändert außerdem den Charakter komplett und macht daraus ein anderes Gericht. Wer die Zasmażka kalt in kochendes Kraut gießt, riskiert zudem Klümpchen, die sich später kaum noch glattrühren lassen.",
 mistakesPl:
 "Zbyt ciemno zasmażona mąka szybko robi się gorzka. Całkiem wypłukana kapusta traci za to niemal cały kwas i wychodzi mdła. Mylenie tego dania z bigosem albo rozwadnianie go zbyt dużą ilością wody, aż zamieni się w zupę zamiast dodatku, to dwa częste błędy. Zbyt wczesne dodanie kiełbasy zmienia charakter potrawy w zupełnie inne danie. Wlanie zimnej zasmażki wprost do wrzącej kapusty grozi grudkami, których później trudno się pozbyć.",
 variantsDe:
 "Mit Speckwürfeln entsteht eine herzhaftere Hausvariante, mit frischem Weißkohl gemischt wird sie milder, und mit Pilzen rückt sie näher an das Wigilia-Gefühl heran, was man dann auch ehrlich benennen sollte. In manchen Regionen kommen Schlesische Kartoffelklöße oder ein Löffel Apfelmus dazu, andernorts landet sie neben Eisbein oder gebratener Ente. Der verwandte, deftigere Kohl-Eintopf mit mehreren Fleischsorten bleibt der [Bigos](/de/rezepte/bigos), während ein deftiger Pfannen-Nachbar mit Wurst [Kaszanka](/de/rezepte/kaszanka) bleibt und Kapusta zasmażana klar eine Beilage bleibt.",
 variantsPl:
 "Z boczkiem powstaje bardziej wytrawny wariant domowy, ze świeżą kapustą robi się łagodniej, a z grzybami zbliża się do smaku wigilijnego, co warto uczciwie zaznaczyć. W niektórych regionach dodaje się śląskie kluski albo łyżkę musu jabłkowego, gdzie indziej podaje się ją do golonki albo pieczonej kaczki. Pokrewnym, bardziej sytym gulaszem z kilkoma rodzajami mięsa zostaje [bigos](/pl/rezepte/bigos), sąsiadem z patelni ze swojską wędliną zostaje [kaszanka](/pl/rezepte/kaszanka), a kapusta zasmażana pozostaje jasno dodatkiem.",
 },
};
