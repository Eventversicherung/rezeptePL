/**
 * Wave 10 Paket C — FACTS for Pierogi jagody + Naleśniki dżem.
 * Isolated export `W10_FACTS_C` — Integrator E merges into recipe-articles.ts FACTS map:
 * import { W10_FACTS_C } from "./recipe-articles-w10-c";
 * Object.assign(FACTS, …, W10_FACTS_C);
 *
 * Prose: full sentences DE/PL; links in sentences; no colon-label dumps.
 * Affiliate: guide-only (no relatedProductIds on these recipes).
 */

export type W10ArticleFacts = {
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

export const W10_FACTS_C: Record<string, W10ArticleFacts> = {
  "recipe-pierogi-jagody": {
    dishDe: "Pierogi mit Heidelbeeren",
    dishPl: "Pierogi z jagodami",
    vibeDe: "süß, fruchtig, sommerlich und festlich zugleich",
    vibePl: "słodkie, owocowe, letnie i odświętne zarazem",
    originDe:
      "Nach polnischer Überlieferung brachte der Dominikanermönch Jacek Odrowąż, heute als Heiliger Hyazinth verehrt, die Idee gefüllter Teigtaschen im 13. Jahrhundert aus Kiew mit nach Polen, wobei Sprachforscher die Wurzel des Wortes Pieróg eher im urslawischen pirъ für Festmahl vermuten. Süße Pierogi mit Obst galten lange als aufwendigere Variante, denn Zucker und importierte Gewürze waren im 17. und 18. Jahrhundert teuer und blieben eher wohlhabenderen Haushalten vorbehalten, während einfache Leute vor allem herzhafte Füllungen aus Getreide oder Kartoffeln kannten. Heute sind Pierogi mit Heidelbeeren ein unkomplizierter Sommergenuss, sobald die Beeren reif sind, und ein eigenes Rezept unter `/rezepte/pierogi/jagody`, nicht nur ein Absatz im [Pierogi-Guide](/de/blog/pierogi-guide). Sie gehören zur selben Teigfamilie wie [Ruskie](/de/rezepte/pierogi/ruskie), [Fleisch](/de/rezepte/pierogi/fleisch) und [Kraut & Pilze](/de/rezepte/pierogi/kraut-pilze), oben auf der Seite lässt sich jederzeit wechseln. Klar abzugrenzen sind sie von [Knedle ze śliwkami](/de/rezepte/knedle-sliwki): Knedle sind runde Obst-Knödel aus Kartoffelteig mit einer ganzen Pflaume im Kern, keine halbmondförmig gefalteten Taschen. Hier tragen Beeren und Zucker die ganze Süße.",
    originPl:
      "Według polskiej tradycji dominikanin Jacek Odrowąż, znany jako święty Jacek, przywiózł ideę pierogów z Kijowa w XIII wieku, choć językoznawcy wywodzą raczej słowo pieróg z prasłowiańskiego pirъ, oznaczającego festyn czy uroczystość. Słodkie pierogi z owocami przez długi czas uchodziły za wersję bardziej wytworną, bo cukier i importowane przyprawy w XVII i XVIII wieku były drogie i częściej trafiały do zamożniejszych domów, podczas gdy prostsze gospodarstwa znały głównie farsze z kaszy czy ziemniaków. Dziś pierogi z jagodami są prostą letnią przyjemnością, gdy jagody dojrzewają, i mają swój własny przepis pod `/rezepte/pierogi/jagody`, a nie tylko akapit w [przewodniku pierogi](/pl/blog/przewodnik-pierogi). Należą do tej samej rodziny ciasta co [ruskie](/pl/rezepte/pierogi/ruskie), [mięso](/pl/rezepte/pierogi/mieso) i [kapusta z grzybami](/pl/rezepte/pierogi/kapusta-grzyby), u góry strony można przełączyć w każdej chwili. Jasno oddzielone są od [knedli ze śliwkami](/pl/rezepte/knedle-sliwki): knedle to okrągłe knedle z ciasta ziemniaczanego z całą śliwką w środku, nie półksiężycowo sklejane kieszonki. Tu całą słodycz niosą jagody i cukier.",
    shopDe:
      "Für Teig und Füllung brauchst du Mehl (405 oder 550), Ei, Wasser und Öl sowie Heidelbeeren (frisch oder tiefgekühlt, gut abgetropft), Zucker, Speisestärke und Butter. Beeren findest du meist im Supermarkt, das nötige Teiggefühl erklärt der [Pierogi-Teig](/de/blog/pierogi-teig)-Guide. Wer lieber Ruskie faltet, bleibt bei [Pierogi ruskie](/de/rezepte/pierogi/ruskie), wer runde Obst-Knödel sucht, findet sie bei [Knedle](/de/rezepte/knedle-sliwki).",
    shopPl:
      "Na ciasto i farsz potrzebujesz mąki (405 lub 550), jajka, wody i oleju oraz jagód (świeżych lub mrożonych, dobrze odsączonych), cukru, skrobi i masła. Jagody znajdziesz zwykle w markecie, wyczucie ciasta daje [ciasto na pierogi](/pl/blog/ciasto-na-pierogi). Kto woli sklejać ruskie, zostaje przy [pierogach ruskich](/pl/rezepte/pierogi/ruskie), a kto szuka okrągłych knedli owocowych, znajdzie je w [knedlach](/pl/rezepte/knedle-sliwki).",
    techniqueDe:
      "Die Füllung muss trocken und kalt sein: Beeren gut abtropfen lassen und mit Zucker sowie wenig Stärke binden, ohne dass Flüssigkeit im Teig steht. Wenig Füllung pro Kreis verwenden, die Nähte doppelt andrücken und die Taschen in leicht siedendem Salzwasser garen. Dieselbe Naht-Logik gilt auch bei [Ruskie](/de/rezepte/pierogi/ruskie), doch Feuchtigkeit ist bei einer süßen Füllung noch kritischer, weil austretender Saft den Teig sofort aufplatzen lässt. Teigruhe und Ausrollen vertieft [Pierogi-Teig](/de/blog/pierogi-teig), roh einzeln einfrieren lässt sich am besten nach dem [Freezer-Guide](/de/blog/freezer-meal-prep).",
    techniquePl:
      "Farsz musi być suchy i zimny: jagody dobrze odsącz i zwiąż cukrem oraz odrobiną skrobi, tak żeby w cieście nie stał żaden płyn. Nakładaj mało farszu na kółko, mocno sklejaj szew i gotuj w lekko wrzącej wodzie. Ta sama logika szwu obowiązuje przy [ruskich](/pl/rezepte/pierogi/ruskie), ale przy słodkim farszu wilgoć jest jeszcze bardziej krytyczna, bo wypływający sok natychmiast rozsadza ciasto. Odpoczynek ciasta i wałkowanie pogłębia [ciasto na pierogi](/pl/blog/ciasto-na-pierogi), mrożenie pojedynczo na surowo opisuje [przewodnik mrożenia](/pl/blog/mrozenie-pierogow).",
    serveDe:
      "Serviere sie heiß mit Butter und Zucker oder Puderzucker, optional mit etwas Sahne. Als Dessert nach herzhaften [Fleisch-Pierogi](/de/rezepte/pierogi/fleisch) funktionieren sie genauso gut wie als alleiniger süßer Teller. Vermische sie auf dem Teller nicht mit [Knedle](/de/rezepte/knedle-sliwki), die Form und der Charakter unterscheiden sich deutlich.",
    servePl:
      "Podawaj gorące z masłem i cukrem lub cukrem pudrem, opcjonalnie ze śmietaną. Jako deser po [pierogach z mięsem](/pl/rezepte/pierogi/mieso) sprawdzają się równie dobrze jak jako samodzielny słodki talerz. Nie mieszaj ich na talerzu z [knedlami](/pl/rezepte/knedle-sliwki), forma i charakter obu dań są zupełnie inne.",
    diasporaDe:
      "In Deutschland sind frische Heidelbeeren nur im Sommer wirklich saisonal, tiefgekühlte Beeren sind eine legitime Alternative, solange du sie gut auftaust und abtropfen lässt. Süße Pierogi belohnen Geduld beim Falten, und Kinder helfen gern mit beim Zuckern der Füllung. Technik und Vorratshaltung erklären der [Pierogi-Teig](/de/blog/pierogi-teig)-Artikel und der [Freezer-Guide](/de/blog/freezer-meal-prep).",
    diasporaPl:
      "W Niemczech świeże jagody są sezonowe naprawdę tylko latem, mrożone owoce są uczciwą alternatywą, jeśli dobrze je rozmrozisz i odsączysz. Słodkie pierogi nagradzają cierpliwość przy lepieniu, a dzieci chętnie pomagają przy cukrzeniu farszu. Technikę i przechowywanie na zapas opisują [ciasto na pierogi](/pl/blog/ciasto-na-pierogi) oraz [przewodnik mrożenia](/pl/blog/mrozenie-pierogow).",
    mistakesDe:
      "Süße Pierogi scheitern am häufigsten an nassen, nicht abgetropften Beeren, an zu viel Füllung pro Tasche oder an zu wildem Kochen im sprudelnden Wasser. Verwechsle die Form außerdem nicht mit Knedle: Hier faltest du Halbmonde aus dünnem Mehlteig, dort formst du runde Knödel aus Kartoffelteig um eine ganze Pflaume.",
    mistakesPl:
      "Słodkie pierogi najczęściej nie wychodzą przez mokre, nieodsączone jagody, przez zbyt duży farsz w jednej kieszonce albo przez gwałtowne gotowanie we wrzącej wodzie. Nie myl też formy z knedlami: tu sklejasz półksiężyce z cienkiego ciasta mącznego, tam formujesz okrągłe knedle z ciasta ziemniaczanego wokół całej śliwki.",
    variantsDe:
      "Mit gemischten Beeren, mehr Zucker oder etwas Zitronenschale wird die Füllung nach Hausbrauch variiert, solche Abweichungen sollte man ehrlich benennen. Oben auf der Seite wechselst du zu den herzhaften Geschwistern [Ruskie](/de/rezepte/pierogi/ruskie), [Fleisch](/de/rezepte/pierogi/fleisch) oder [Kraut-Pilze](/de/rezepte/pierogi/kraut-pilze). Teig und Überblick stehen im [Pierogi-Teig](/de/blog/pierogi-teig)-Artikel und im [Pierogi-Guide](/de/blog/pierogi-guide), runde Obst-Knödel bleiben bei [Knedle śliwki](/de/rezepte/knedle-sliwki).",
    variantsPl:
      "Z mieszanką jagód, większą ilością cukru lub odrobiną skórki cytryny farsz staje się bardziej domowy, takie odstępstwa warto uczciwie nazywać. U góry strony przełączysz na wytrawne rodzeństwo, [ruskie](/pl/rezepte/pierogi/ruskie), [mięso](/pl/rezepte/pierogi/mieso) albo [kapustę z grzybami](/pl/rezepte/pierogi/kapusta-grzyby). Ciasto i przegląd znajdziesz w [cieście na pierogi](/pl/blog/ciasto-na-pierogi) oraz w [przewodniku pierogi](/pl/blog/przewodnik-pierogi), okrągłe knedle owocowe zostają przy [knedlach ze śliwkami](/pl/rezepte/knedle-sliwki).",
  },
  "recipe-nalesniki-dzem": {
    dishDe: "Naleśniki mit Marmelade",
    dishPl: "Naleśniki z dżemem",
    vibeDe: "süß, schnell, kinderfreundlich und alltagstauglich",
    vibePl: "słodkie, szybkie, przyjazne dzieciom i na co dzień",
    originDe:
      "Naleśniki stehen bereits im ersten gedruckten polnischen Kochbuch, dem Compendium Ferculorum von 1682, ihr Name wird meist von na lěsě (auf dem Flechtrahmen) oder na liściu (auf einem Blatt) abgeleitet, weil der Teig vermutlich einst auf einem Rost oder Kohlblatt gebacken wurde. Ihre heutige, dünne Form näherte sich im 19. Jahrhundert der französischen Crêpe an, als übersetzte Kochbücher wie Kucharz doskonały französische Küchentechnik nach Polen brachten. In der Zeit der Volksrepublik wurden Naleśniki zum Sparbrötchen der Küche, weil Mehl, Eier und Milch fast immer verfügbar waren, und in den Milchbars, den sogenannten bar mleczny, wurde vor allem die mit Twaróg gefüllte, mit Saurer Sahne servierte Version zum festen Klassiker. Naleśniki mit Marmelade sind die schnellere, süßere Alternative dazu, eine eigene Variante neben [Naleśniki mit Twaróg](/de/rezepte/nalesniki/twarog). Teig und Wendetechnik erklärt der [Naleśniki-Guide](/de/blog/nalesniki-guide) im Detail, herzhaft geht es weiter bei [Fleisch](/de/rezepte/nalesniki/fleisch) oder [Spinat](/de/rezepte/nalesniki/szpinak). Der Quark-Einkauf bleibt beim [Twaróg-Guide](/de/blog/twarog-deutschland), hier geht es um dicke Marmelade und Powidła.",
    originPl:
      "Naleśniki pojawiają się już w pierwszej wydanej polskiej książce kucharskiej, Compendium Ferculorum z 1682 roku, a ich nazwę wywodzi się najczęściej od wyrażenia na lěsě (na plecionym ruszcie) albo na liściu, bo ciasto pieczono niegdyś prawdopodobnie na ruszcie albo liściu kapusty. Dzisiejsza cienka forma zbliżyła się do francuskiego crêpe w XIX wieku, gdy tłumaczone książki kucharskie, takie jak Kucharz doskonały, przyniosły do Polski francuską technikę kuchenną. W czasach Polskiej Rzeczpospolitej Ludowej naleśniki stały się daniem oszczędnym, bo mąka, jajka i mleko były prawie zawsze dostępne, a w barach mlecznych to właśnie wersja z twarogiem, podawana ze śmietaną, została stałym klasykiem. Naleśniki z dżemem są szybszą, słodszą alternatywą dla tej wersji, osobnym wariantem obok [naleśników z twarogiem](/pl/rezepte/nalesniki/twarog). Ciasto i technikę obracania szczegółowo opisuje [przewodnik naleśników](/pl/blog/nalesniki-przewodnik), na wytrawnie przełączysz na [mięso](/pl/rezepte/nalesniki/mieso) albo [szpinak](/pl/rezepte/nalesniki/szpinak). Zakupy twarogu zostają w [poradniku twarogu](/pl/blog/twarog-w-niemczech), tu chodzi o gęsty dżem i powidła.",
    shopDe:
      "Milch, Mehl, Eier und Butter holst du im Supermarkt, für die Füllung brauchst du dicken Dżem oder Powidła und Puderzucker. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du oft aromatischere Powidła, aber gute Supermarkt-Marmelade reicht völlig aus. Fehlt ein bestimmtes Produkt, hilft die Übersicht [Ersatzprodukte](/de/blog/ersatzprodukte-de). Teigfragen beantwortet der [Naleśniki-Guide](/de/blog/nalesniki-guide).",
    shopPl:
      "Mleko, mąkę, jajka i masło kupisz w markecie, do farszu potrzebujesz gęstego dżemu lub powideł oraz cukru pudru. W [sklepie polskim](/pl/blog/sklep-polski-zakupy) często znajdziesz bardziej aromatyczne powidła, ale dobry dżem z marketu w zupełności wystarczy. Gdy brakuje produktu, pomaga przegląd [zamienników](/pl/blog/zamienniki-skladnikow). Pytania o ciasto rozstrzyga [przewodnik naleśników](/pl/blog/nalesniki-przewodnik).",
    techniqueDe:
      "Lass den Teig dünn und ruhen, dieselbe Basis wie bei [Twaróg-Naleśniki](/de/rezepte/nalesniki/twarog), aber die Füllung ist hier Dżem: dick auftragen, einen Rand frei lassen, fest rollen und optional in Butter goldbraun anbraten. Zu dünner Dżem läuft beim Rollen aus, zu viel Füllung lässt die Rolle beim Braten aufplatzen. Details zum Wenden und Braten stehen im [Naleśniki-Guide](/de/blog/nalesniki-guide).",
    techniquePl:
      "Ciasto ma być cienkie i odpoczęte, ta sama baza co przy [naleśnikach z twarogiem](/pl/rezepte/nalesniki/twarog), ale farsz to tutaj dżem: nakładaj go gęsto, zostaw margines, mocno zwiń i opcjonalnie podsmaż na maśle na złoty kolor. Za rzadki dżem wypływa podczas zwijania, za dużo farszu rozrywa rolkę podczas smażenia. Szczegóły obracania i smażenia są w [przewodniku naleśników](/pl/blog/nalesniki-przewodnik).",
    serveDe:
      "Serviere sie warm mit Puderzucker, optional mit Śmietana oder frischen Beeren. Das ist ein schneller Nachmittagsteller, keine Variante der Quark-Füllung. Wenn der Tisch lieber salzig will, wechselst du zu [Fleisch-Naleśniki](/de/rezepte/nalesniki/fleisch).",
    servePl:
      "Podawaj ciepłe z cukrem pudrem, opcjonalnie ze śmietaną lub owocami. To szybki talerz na popołudnie, nie wariant z twarogiem. Gdy stół chce coś słonego, przełącz na [naleśniki z mięsem](/pl/rezepte/nalesniki/mieso).",
    diasporaDe:
      "Dicke Supermarkt-Marmelade funktioniert im Alltag gut, Powidła aus dem Polenladen schmecken oft intensiver, sind aber kein Pflichtkauf. Für Kinder rollst du am besten kleinere Portionen, so halten sie besser in kleinen Händen. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du Powidła und dicke Konfitüren, fehlt etwas, hilft [Ersatzprodukte](/de/blog/ersatzprodukte-de) weiter. Teig und Wenden vertieft der [Naleśniki-Guide](/de/blog/nalesniki-guide).",
    diasporaPl:
      "Gęsty dżem z marketu sprawdza się na co dzień dobrze, powidła ze sklepu polskiego bywają intensywniejsze, ale nie są obowiązkowe. Dla dzieci zwijaj mniejsze porcje, lepiej trzymają się w małych rączkach. W [sklepie polskim](/pl/blog/sklep-polski-zakupy) znajdziesz powidła i gęste konfitury, gdy czegoś brakuje, pomaga przegląd [zamienników](/pl/blog/zamienniki-skladnikow). Ciasto i obracanie pogłębia [przewodnik naleśników](/pl/blog/nalesniki-przewodnik).",
    mistakesDe:
      "Häufige Fehler sind eine wässrige Quark-Füllung statt dickem Dżem, zu dünne Marmelade, zu dicke Pfannkuchen oder eine Pfanne, die entweder zu heiß oder zu kalt ist. Der Teig soll dünn bleiben und die Füllung streichfähig, nicht flüssig, sonst läuft alles aus der Rolle.",
    mistakesPl:
      "Częste błędy to wodnisty twaróg zamiast gęstego dżemu, zbyt rzadka marmolada, zbyt grube placki albo patelnia zbyt gorąca lub zbyt zimna. Ciasto ma zostać cienkie, a farsz smarowalny, nie płynny, inaczej wszystko wycieka z rolki.",
    variantsDe:
      "Statt Erdbeer-Marmelade passen genauso Powidła, Aprikose oder eine hausgemachte Konfitüre, ohne zweites Braten bleiben die Rollen leichter. Oben auf der Seite wechselst du zu den Geschwistern [Twaróg](/de/rezepte/nalesniki/twarog), [Fleisch](/de/rezepte/nalesniki/fleisch) oder [Spinat](/de/rezepte/nalesniki/szpinak). Quark-Fragen beantwortet der [Twaróg-Guide](/de/blog/twarog-deutschland), fehlende Gläser ersetzt oft der [Ersatzprodukte](/de/blog/ersatzprodukte-de)-Artikel.",
    variantsPl:
      "Zamiast dżemu truskawkowego równie dobrze pasują powidła, morela albo domowa konfitura, bez drugiego smażenia rolki wychodzą lżejsze. U góry strony przełączysz na rodzeństwo, [twaróg](/pl/rezepte/nalesniki/twarog), [mięso](/pl/rezepte/nalesniki/mieso) albo [szpinak](/pl/rezepte/nalesniki/szpinak). Pytania o twaróg rozstrzyga [poradnik twarogu](/pl/blog/twarog-w-niemczech), brakujące słoiki często zastąpi przegląd [zamienników](/pl/blog/zamienniki-skladnikow).",
  },
};
