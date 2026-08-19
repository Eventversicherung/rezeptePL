/**
 * Wave 8 Paket D — Knedle FACTS (new).
 *
 * Agent E merge into recipe-articles.ts:
 * import { W8_FACTS_D } from "./recipe-articles-w8-d";
 * Object.assign(FACTS, W8_FACTS_D_RETROFIT, W8_FACTS_D);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
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

export const W8_FACTS_D: Record<string, ArticleFacts> = {
 "recipe-knedle-sliwki": {
 dishDe: "Knedle ze śliwkami",
 dishPl: "Knedle ze śliwkami",
 vibeDe: "süß, weich, nach Pflaume und Butterbröseln",
 vibePl: "słodkie, miękkie, ze śliwką i bułką na maśle",
 originDe:
 "Knedle ze śliwkami stammen aus der gemeinsamen Küche der k. u. k. Monarchie, wo Kartoffelteig um eine ganze Pflaume gewickelt wurde und sich diese Idee über die ganze Doppelmonarchie verbreitete. Erst die breite Verfügbarkeit der Kartoffel im 18. und 19. Jahrhundert machte diesen weichen, formbaren Teig überhaupt möglich, und so entstand ein Gericht, das heute unter vielen Namen bekannt ist: Zwetschkenknödel in Österreich, szilvásgombóc in Ungarn, švestkové knedlíky in Tschechien, slivkové knedle in der Slowakei und Knedle ze śliwkami in Polen. In Polen setzten sich die Pflaumenknödel vor allem in Regionen mit habsburgischer Geschichte durch, allen voran in Galizien, das bis 1918 zu Österreich-Ungarn gehörte, und blieben von dort aus ein fester Bestandteil der Küche. Traditionell werden sie in gerösteten Butterbröseln gewälzt, eine Technik, die sich bis heute kaum verändert hat. Mit der eigenständigen slawischen Teigtaschen-Tradition der [Pierogi-Familie](/de/blog/pierogi-guide) haben sie trotz der thematischen Nähe zu Obst nichts zu tun, denn dort wird der Teig gefaltet und nicht rundherum verschlossen. Auch [Pierogi leniwe](/de/rezepte/pierogi-leniwe) sind etwas anderes, nämlich Quark-Klößchen ganz ohne Füllung. Pyzy tragen oft Fleisch, Uszka sind kleine Wigilia-Taschen, und Knedle bleiben klar das Rezept für Knödel mit ganzer Pflaume im Kern.",
 originPl:
 "Knedle ze śliwkami wywodzą się ze wspólnej kuchni monarchii austro-węgierskiej, gdzie ciasto ziemniaczane owijano wokół całej śliwki, a pomysł ten rozprzestrzenił się po całej podwójnej monarchii. Dopiero powszechna dostępność ziemniaka w XVIII i XIX wieku umożliwiła powstanie tego miękkiego, formowalnego ciasta, i tak powstało danie znane dziś pod wieloma nazwami: Zwetschkenknödel w Austrii, szilvásgombóc na Węgrzech, švestkové knedlíky w Czechach, slivkové knedle na Słowacji oraz knedle ze śliwkami w Polsce. W Polsce knedle ze śliwkami przyjęły się przede wszystkim w regionach o historii habsburskiej, na czele z Galicją, która do 1918 roku należała do Austro-Węgier, i od tamtej pory pozostają stałym elementem tamtejszej kuchni. Tradycyjnie tarza się je w podsmażonej na maśle bułce tartej, a ta technika niemal się nie zmieniła do dziś. Z odrębną słowiańską tradycją zawijanych ciast, czyli [rodziną pierogów](/pl/blog/przewodnik-pierogi), mimo tematycznej bliskości do owoców nie mają nic wspólnego, bo tam ciasto się lepi w półksiężyc, a nie zamyka dookoła. Także [pierogi leniwe](/pl/rezepte/pierogi-leniwe) to coś innego, czyli kluseczki z twarogu zupełnie bez nadzienia. Pyzy często niosą mięso, uszka to małe pierożki wigilijne, a knedle zostają jasno przepisem na knedle z całą śliwką w środku.",
 shopDe:
 "Nimm mehlig kochende Kartoffeln, Mehl und Ei für den Teig sowie Pflaumen, frisch oder gut abgetropft aus dem Glas, dazu Butter, Semmelbrösel, Zucker und Zimt. Saisonware bekommst du im Supermarkt, Glasware und gute Brösel oft günstiger im [Polenladen](/de/blog/polenladen-einkaufen). Das sind keine [Pierogi](/de/rezepte/pierogi/ruskie) und keine [Leniwe](/de/rezepte/pierogi-leniwe), denn hier umschließt der Kartoffelteig die ganze Frucht statt nur eine Füllung darin zu verstecken.",
 shopPl:
 "Weź ziemniaki mączyste, mąkę i jajko na ciasto oraz śliwki, świeże albo dobrze odsączone ze słoika, do tego masło, bułkę tartą, cukier i cynamon. Towar sezonowy kupisz w markecie, a słoiki i dobrą bułkę tartą często taniej w [sklepie polskim](/pl/blog/sklep-polski-zakupy). To nie [pierogi](/pl/rezepte/pierogi/ruskie) i nie [leniwe](/pl/rezepte/pierogi-leniwe), bo tutaj ciasto ziemniaczane otula cały owoc, zamiast tylko chować w sobie nadzienie.",
 techniqueDe:
 "Die Kartoffeln gut ausdampfen lassen, damit der Teig weich bleibt, aber trotzdem tragfähig genug ist, um die Pflaume fest einzupacken. In leicht siedendem Wasser garen, bis die Knedle aufschwimmen. Ein zu nasser Teig platzt beim Kochen leicht auf, ein zu trockener reißt schon beim Formen. Deshalb lohnt es sich, zuerst eine einzelne Probe-Knedle zu kochen, bevor die ganze Charge geformt wird.",
 techniquePl:
 "Ziemniaki trzeba dobrze odparować, żeby ciasto zostało miękkie, ale wystarczająco nośne, by szczelnie owinąć śliwkę. Gotować w lekko wrzącej wodzie, aż knedle wypłyną na wierzch. Zbyt mokre ciasto łatwo pęka podczas gotowania, a zbyt suche pęka już przy formowaniu. Dlatego warto najpierw ugotować jedną próbną knedlę, zanim uformuje się całą partię.",
 serveDe:
 "Klassisch mit gerösteten Butterbröseln und Zucker oder Zimt, warm serviert. Als süßes Hauptgericht oder Dessert passt es nach dem [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer lieber Apfel aus der Pfanne mag, findet das bei [Racuchy z jabłkami](/de/rezepte/racuchy-jablka). Śmietana ist optional am Rand, aber keine Pflicht.",
 servePl:
 "Klasycznie z bułką tartą podsmażoną na maśle i cukrem lub cynamonem, podane na ciepło. Jako słodkie danie główne albo deser pasują po [obiedzie niedzielnym](/pl/blog/obiad-niedzielny). Kto woli jabłko z patelni, znajdzie to w [racuchach z jabłkami](/pl/rezepte/racuchy-jablka). Śmietana z boku jest opcjonalna, nie obowiązkowa.",
 diasporaDe:
 "In Deutschland wird daraus oft ein Wochenendprojekt: vormittags die Kartoffeln kochen, nachmittags formen. Kinder dürfen die Pflaumen einpacken, während Erwachsene die Naht sicher verschließen. Pflaumen aus dem Glas retten den Winter, wenn der Markt gerade keine frische Ware hat, und die alte habsburgische Reiseroute des Rezepts zeigt sich hier ganz praktisch im Alltag.",
 diasporaPl:
 "W Niemczech robi się z tego często projekt weekendowy: rano ziemniaki, po południu formowanie. Dzieci mogą owijać śliwki, dorośli pewnie domykają brzeg. Śliwki ze słoika ratują zimę, gdy na rynku nie ma świeżych, a dawna habsburska droga tego przepisu widać tu bardzo praktycznie w codziennym gotowaniu.",
 mistakesDe:
 "Zu nasse Kartoffeln, zu viel Mehl und Risse an der Naht sind die häufigsten Ursachen für geplatzte Knedle. Zu stark sprudelndes statt sanft siedendes Wasser reißt den Teig zusätzlich auf. Knedle mit den gefalteten Pierogi oder mit Leniwe zu verwechseln, verfehlt außerdem die eigentliche Form dieses Gerichts, denn hier bleibt es bei runden Obst-Knödeln, dort bei ganz anderen Formen.",
 mistakesPl:
 "Zbyt mokre ziemniaki, za dużo mąki i pęknięcia na łączeniu to najczęstsze powody, dla których knedle się rozpadają. Zbyt gwałtownie burząca się woda zamiast delikatnego wrzenia dodatkowo rozrywa ciasto. Mylenie knedli z lepionymi pierogami albo z leniwymi także rozmija się z formą tego dania, bo tu zostają okrągłe knedle owocowe, a tam zupełnie inne kształty.",
 variantsDe:
 "Mit Aprikose oder Mirabelle entsteht eine fruchtige Variante, mit etwas Quark im Teig kommt man geschmacklich näher an Leniwe heran, bleibt aber weiterhin gefüllt, und in einer herzhaften Version mit Fleisch rückt das Ganze eher in Richtung Pyzy als eigenständigem Rezept. Die weiterführende Teigfamilie erklärt der [Pierogi-Guide](/de/blog/pierogi-guide), die schnelle Quark-Linie ganz ohne Obst bleiben [Pierogi leniwe](/de/rezepte/pierogi-leniwe). In Österreich, Ungarn und der Slowakei kocht man mit Zwetschkenknödel, szilvásgombóc und slivkové knedle im Grunde dieselbe Familie, nur unter anderem Namen.",
 variantsPl:
 "Z morelą lub mirabelką powstaje owocowy wariant, z dodatkiem twarogu w cieście smak zbliża się do leniwych, ale danie zostaje nadal nadziewane, a w wytrawnej wersji z mięsem robi się to bliższe pyzom jako osobnemu przepisowi. Szerszą rodzinę ciasta opisuje [przewodnik po pierogach](/pl/blog/przewodnik-pierogi), a szybka linia twarogowa bez owocu to [pierogi leniwe](/pl/rezepte/pierogi-leniwe). W Austrii, na Węgrzech i na Słowacji Zwetschkenknödel, szilvásgombóc i slivkové knedle to w gruncie rzeczy ta sama rodzina dań, tylko pod inną nazwą.",
 },
};
