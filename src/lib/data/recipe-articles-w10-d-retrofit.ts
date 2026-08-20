/**
 * Wave 10 Paket D — Wave-9 FACTS link audit + neighbor patches (Makaron).
 *
 * Audit (2026-07-20): all six Wave-9 recipe IDs already meet ≥4 markdown
 * links per locale (≥2 recipe + ≥2 blog) in their W9 FACTS sources.
 * No gap-fill required for W9 gate compliance.
 *
 * Neighbor backlinks (descriptive Abgrenzung → Makaron z serem):
 * - recipe-pierogi-leniwe (W8 retrofit base + Makaron-Satz)
 * - recipe-lazanki (W8 retrofit base + Makaron-Satz)
 *
 * Agent E merge:
 * import { W10_FACTS_W9_RETROFIT } from "./recipe-articles-w10-d-retrofit";
 * Object.assign(FACTS, …, W10_FACTS_W9_RETROFIT, W10_FACTS_D);
 *
 * Do NOT invent Lane-Kluski. Do NOT rewrite Twaróg/Leniwe/Łazanki Primary.
 */

import type { ArticleFacts } from "./recipe-articles-w10-d";

/**
 * Empty for W9 gap-fills (already green). Neighbor pairing keys below.
 */
export const W10_FACTS_W9_RETROFIT: Record<string, ArticleFacts> = {
 "recipe-pierogi-leniwe": {
 dishDe: "Pierogi leniwe",
 dishPl: "Pierogi leniwe",
 vibeDe: "mild, weich und ganz ohne den Aufwand des Faltens",
 vibePl: "łagodne, miękkie i bez trudu związanego z lepieniem",
 originDe:
 "Pierogi leniwe verdanken ihren Namen nicht dem Kochvorgang, sondern der eingesparten Arbeit: Twaróg, Mehl und Ei sind dieselben Zutaten wie bei klassischen gefüllten Käse-Pierogi, nur knetet hier niemand Teig getrennt, rollt ihn aus, streicht Füllung darauf und kneift jeden einzelnen Rand zusammen. Stattdessen wird alles zu einer Masse verknetet, zu einer Rolle geformt und geschnitten, daher leniwe, also faul. Rezepte dafür sind in polnischen Kochbüchern schon seit dem 18. Jahrhundert belegt, richtig populär wurden sie aber durch die Milchbars, die sogenannten bary mleczne, 1896 von Stanisław Dłużewski gegründet und in der PRL-Zeit zu preiswerten Kantinen mit einfacher, milch- und eibasierter Küche geworden. Leniwe sind dabei keine gefalteten Pierogi wie [Pierogi Ruskie](/de/rezepte/pierogi/ruskie), sie enthalten keine Kartoffel wie [Kopytka](/de/rezepte/kopytka) und keine Kartoffelstärke wie [Kluski śląskie](/de/rezepte/kluski-slaskie). Die breite Teigfamilie ordnet der [Pierogi-Guide](/de/blog/pierogi-guide), gefüllte Obst-Knödel sind [Knedle ze śliwkami](/de/rezepte/knedle-sliwki), nicht diese Seite. Heiße Nudeln mit Twaróg-Sauce darüber sind wiederum ein anderer Teller: [Makaron z serem](/de/rezepte/makaron-z-serem).",
 originPl:
 "Pierogi leniwe zawdzięczają nazwę nie sposobowi gotowania, a zaoszczędzonej pracy: twaróg, mąka i jajko to te same składniki, co w klasycznych pierogach z serem, tylko że nikt nie wałkuje ciasta osobno, nie nakłada na nie farszu i nie zlepia każdego brzegu z osobna. Wszystko miesza się razem w jedną masę, formuje w wałek i kroi, stąd leniwe. Przepisy na nie są potwierdzone w polskich książkach kucharskich już od XVIII wieku, ale naprawdę rozpowszechniły się dzięki barom mlecznym, założonym w 1896 roku przez Stanisława Dłużewskiego i przekształconym w czasach PRL w tanie jadłodajnie z prostą kuchnią na bazie mleka i jajek. Leniwe to przy tym nie sklejane pierogi jak [ruskie](/pl/rezepte/pierogi/ruskie), nie ma w nich ziemniaka jak w [kopytkach](/pl/rezepte/kopytka) i nie ma skrobi ziemniaczanej jak w [kluskach śląskich](/pl/rezepte/kluski-slaskie). Rodzinę ciast porządkuje [przewodnik po pierogach](/pl/blog/przewodnik-pierogi), knedle owocowe to [knedle ze śliwkami](/pl/rezepte/knedle-sliwki), nie ta strona. Gorący makaron z sosem twarogowym to inny talerz: [makaron z serem](/pl/rezepte/makaron-z-serem).",
 shopDe:
 "Twaróg oder gut abgetropfter Speisequark, Mehl und Ei sowie Butter und Semmelbrösel reichen für dieses Rezept aus. Konsistenz und Einkauf in Deutschland erklärt der [Twaróg-Guide](/de/blog/twarog-deutschland), die Route über den [Polenladen](/de/blog/polenladen-einkaufen) lohnt sich oft, weil der Quark dort meist trockener und dadurch ergiebiger ist.",
 shopPl:
 "Twaróg lub dobrze odsączony Quark, mąka i jajko oraz masło i bułka tarta wystarczą na to danie. Konsystencję i zakupy w Niemczech opisuje [przewodnik po twarogu](/pl/blog/twarog-w-niemczech), trasa przez [sklep polski](/pl/blog/sklep-polski-zakupy) często się opłaca, bo tamtejszy twaróg jest zwykle suchszy i dzięki temu wydajniejszy.",
 techniqueDe:
 "Der Teig soll weich, aber formbar bleiben, zu viel Mehl macht die Klößchen gummiartig statt zart. Koche sie in leicht siedendem, nicht sprudelndem Wasser und nimm sie heraus, sobald sie aufschwimmen. Das ist kein Nudelkochen mit Quark-Sauce, das wäre [Makaron z serem](/de/rezepte/makaron-z-serem).",
 techniquePl:
 "Ciasto ma zostać miękkie, ale formowalne, za dużo mąki robi kluseczki gumowate, a nie delikatne. Gotuj je w lekko wrzącej, nie burzącej wodzie i wyjmuj, gdy wypłyną. To nie gotowanie makaronu z sosem twarogowym, tym byłby [makaron z serem](/pl/rezepte/makaron-z-serem).",
 serveDe:
 "Klassisch mit in Butter geröstetem Semmelbrösel und Zucker oder mit Śmietana, mehr zur Wahl zwischen beiden liefert [Śmietana vs. Schmand](/de/blog/smietana-schmand). Auch herzhaft mit Salz und Dill schmecken sie gut. Als Sonntags-Dessert passen sie neben das [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 servePl:
 "Klasycznie z bułką tartą podsmażoną na maśle i cukrem albo ze śmietaną, więcej o wyborze między nimi mówi [śmietana czy Schmand](/pl/blog/smietana-czy-schmand). Dobrze smakują też wytrawnie, z solą i koperkiem. Jako niedzielny deser pasują obok [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
 diasporaDe:
 "Für viele Kinder in Deutschland sind Leniwe das erste Pierogi-Erlebnis, weil niemand falten muss und das Ergebnis trotzdem vertraut schmeckt. Wer später Obst einpacken möchte, wechselt zu den [Knedle](/de/rezepte/knedle-sliwki), wer ganz auf Kloßteig verzichten will, landet bei [Makaron z serem](/de/rezepte/makaron-z-serem).",
 diasporaPl:
 "Dla wielu dzieci w Niemczech leniwe są pierwszym doświadczeniem pierogów, bo nikt nie musi lepić, a wynik smakuje mimo to swojsko. Kto później chce owoc w środku, przechodzi do [knedli](/pl/rezepte/knedle-sliwki), a kto zupełnie nie chce ciasta klusek, trafia do [makaronu z serem](/pl/rezepte/makaron-z-serem).",
 mistakesDe:
 "Zu viel Mehl, zu starkes Kochen und zu nasser Quark sind die klassischen Fehler. Tropfe den Twaróg gut ab und bleibe ruhig am Topf, und vermische die Technik nicht mit gefalteten [Pierogi Ruskie](/de/rezepte/pierogi/ruskie), mit Knedle oder mit Nudeln plus Quark-Sauce wie bei [Makaron z serem](/de/rezepte/makaron-z-serem).",
 mistakesPl:
 "Za dużo mąki, zbyt gwałtowne gotowanie i za mokry twaróg to klasyczne błędy. Dobrze odsącz twaróg i zachowaj spokój przy garnku, i nie mieszaj tej techniki ze sklejanymi [ruskimi](/pl/rezepte/pierogi/ruskie), z knedlami ani z makaronem z sosem twarogowym jak [makaron z serem](/pl/rezepte/makaron-z-serem).",
 variantsDe:
 "Mit etwas Kartoffelanteil werden Leniwe fester, mit mehr Zucker süßer und milder. Nicht verwechseln mit gefalteten [Pierogi Ruskie](/de/rezepte/pierogi/ruskie). Eine süße, gefüllte Nachbarschaft bilden die [Knedle mit Pflaumen](/de/rezepte/knedle-sliwki), ein Pasta-Comfort ganz ohne Kloßteig ist [Makaron z serem](/de/rezepte/makaron-z-serem).",
 variantsPl:
 "Z udziałem ziemniaka leniwe stają się bardziej zwarte, z większą ilością cukru słodsze i łagodniejsze. Nie mylić ze sklejanymi [ruskimi](/pl/rezepte/pierogi/ruskie). Słodkie, nadziewane sąsiedztwo tworzą [knedle ze śliwkami](/pl/rezepte/knedle-sliwki), a comfort food bez ciasta klusek to [makaron z serem](/pl/rezepte/makaron-z-serem).",
 },

 "recipe-lazanki": {
 dishDe: "Łazanki mit Kapusta",
 dishPl: "Łazanki z kapustą",
 vibeDe: "deftig, säuerlich und ein echter Alltagsteller",
 vibePl: "treściwe, kwaśne i danie na zwykły dzień",
 originDe:
 "Łazanki verdanken ihren Namen dem italienischen lasagne beziehungsweise lasagnette, flachen Nudelstücken. Der Legende nach brachte Königin Bona Sforza, die italienische Frau von Sigismund I., im 16. Jahrhundert italienische Köche und mit ihnen diese Nudelform nach Polen. Ursprünglich wurden die Nudelplatten tatsächlich wie eine echte Lasagne in Schichten mit Füllung gebacken, erst zu Beginn des 20. Jahrhunderts beschrieb die bekannte Kochbuchautorin Maria Ochorowicz-Monatowa die heute übliche Form, bei der kleingeschnittene Nudeln einfach mit Kraut, Pilzen oder Quark vermischt werden. Ein Mythos hält sich dabei hartnäckig: Dass auch das Sauerkraut dazu von Bona Sforza kam, stimmt nicht, Kraut stand schon zu Zeiten von König Władysław Jagiełło auf polnischen Tischen, also sechzig Jahre vor Bonas Geburt. Łazanki sind ein Diaspora-Alltagsteller zwischen [Bigos](/de/rezepte/bigos) und Pasta, weniger aufwendig als Bigos und mit mehr Struktur als Kraut allein. Ferment-Kontext gibt der [Kiszenie-Guide](/de/blog/kiszenie-guide). Süß-cremige Pasta mit Quark ist dagegen ein ganz anderer Charakter: [Makaron z serem](/de/rezepte/makaron-z-serem).",
 originPl:
 "Łazanki zawdzięczają nazwę włoskiemu lasagne albo lasagnette, czyli płaskim kawałkom makaronu. Według legendy królowa Bona Sforza, włoska żona Zygmunta I Starego, przywiozła w XVI wieku włoskich kucharzy, a wraz z nimi tę formę makaronu. Początkowo płaty ciasta układano faktycznie warstwami z farszem, tak jak prawdziwą lasagne, dopiero na początku XX wieku znana autorka książek kucharskich Maria Ochorowicz-Monatowa opisała dzisiejszą formę, w której pokrojony na małe kawałki makaron po prostu miesza się z kapustą, grzybami albo twarogiem. Jeden mit trzyma się jednak uparcie: to, że razem z Boną przyjechała też kapusta, nieprawda, kapusta gościła na polskich stołach już za czasów króla Władysława Jagiełły, czyli sześćdziesiąt lat przed narodzinami Bony. Łazanki to talerz diasporowy między [bigosem](/pl/rezepte/bigos) a pastą, mniej pracochłonny niż bigos i z większą strukturą niż sama kapusta. Kontekst fermentu daje [kiszenie w domu](/pl/blog/kiszenie-w-domu). Słodko-kremowy makaron z twarogiem to zupełnie inny charakter: [makaron z serem](/pl/rezepte/makaron-z-serem).",
 shopDe:
 "Łazanki holst du am einfachsten im [Polenladen](/de/blog/polenladen-einkaufen), sonst helfen breite Bandnudeln, die du selbst in Quadrate schneidest. Sauerkraut, Zwiebel und optional Speck tragen den Teller. Ferment-Logik erklärt der [Kiszenie-Guide](/de/blog/kiszenie-guide), Bigos-Tiefe zum Vergleich liefert der [Bigos-Guide](/de/blog/bigos-guide).",
 shopPl:
 "Łazanki kupisz najprościej w [sklepie polskim](/pl/blog/sklep-polski-zakupy), inaczej pomoże szeroki makaron pokrojony samodzielnie w kwadraty. Kapusta kiszona, cebula i opcjonalnie boczek niosą talerz. Ferment opisuje [kiszenie w domu](/pl/blog/kiszenie-w-domu), głębię bigosu porównasz w [przewodniku po bigosie](/pl/blog/bigos-przewodnik).",
 techniqueDe:
 "Schmore das Kraut, bis es weich und aromatisch ist, koche die Nudeln separat al dente und mische beides erst kurz vor dem Servieren. Zu viel Flüssigkeit macht den Teller wässrig statt deftig, abtropfen und kräftig abschmecken zählen hier mehr als zusätzliches Kraut. Das bleibt ein herzhafter Kraut-Teller, kein Quark-Butter-Zucker-Gericht wie [Makaron z serem](/de/rezepte/makaron-z-serem).",
 techniquePl:
 "Duś kapustę do miękkości i aromatu, ugotuj makaron osobno al dente i wymieszaj oba składniki tylko na krótko przed podaniem. Za dużo płynu robi talerz wodnisty zamiast treściwy, odsączenie i solidne doprawienie znaczą tu więcej niż dodatkowa kapusta. To zostaje wytrawny talerz z kapustą, nie danie z twarogiem i cukrem jak [makaron z serem](/pl/rezepte/makaron-z-serem).",
 serveDe:
 "Serviere Łazanki heiß, mit frischem Dill oder ganz pur. Reste brätst du am nächsten Tag am besten in der Pfanne auf, dann werden die Ränder wieder knusprig. Wer länger schmoren möchte, findet mehr Tiefe im [Bigos-Rezept](/de/rezepte/bigos).",
 servePl:
 "Podawaj łazanki gorące, z koperkiem albo zupełnie same. Resztki najlepiej podsmaż nazajutrz na patelni, brzegi znów zrobią się chrupiące. Kto chce dłuższego duszenia, znajdzie więcej głębi w [przepisie na bigos](/pl/rezepte/bigos).",
 diasporaDe:
 "Łazanki sind schneller als Bigos, nutzen aber dieselbe Kapusta-Logik und dieselben Reste aus dem Kühlschrank. Gut für Wochentage nach dem [Sonntagsessen](/de/blog/sonntagsessen-polnisch), wenn noch Sauerkraut übrig ist. Wer lieber cremige Quark-Pasta ohne Kraut möchte, findet sie bei [Makaron z serem](/de/rezepte/makaron-z-serem).",
 diasporaPl:
 "Łazanki są szybsze niż bigos, ale korzystają z tej samej logiki kapusty i tych samych resztek z lodówki. Dobre na dzień powszedni po [obiedzie niedzielnym](/pl/blog/obiad-niedzielny), gdy zostaje jeszcze kapusta. Kto woli kremowy makaron z twarogiem bez kapusty, znajdzie go w [makaronie z serem](/pl/rezepte/makaron-z-serem).",
 mistakesDe:
 "Zu nasses Kraut, zu weich gekochte Nudeln und zu wenig Abschmecken lassen Łazanki flach schmecken. Pfeffer und ausreichend Fett zählen hier mehr als noch mehr Sauerkraut, und verwechsle den Teller nicht mit dem süßen [Makaron z serem](/de/rezepte/makaron-z-serem).",
 mistakesPl:
 "Za mokra kapusta, za miękko ugotowany makaron i za mało doprawienia spłaszczają smak łazanek. Pieprz i wystarczająca ilość tłuszczu znaczą tu więcej niż dodatkowa kapusta, i nie myl tego dania ze słodkim [makaronem z serem](/pl/rezepte/makaron-z-serem).",
 variantsDe:
 "Vegetarisch ohne Speck, mit Pilzen statt oder neben dem Kraut, oder direkt neben [Bigos](/de/rezepte/bigos) als weiteres Krautgericht. Ferment vertieft der [Kiszenie-Guide](/de/blog/kiszenie-guide), typische Spezialzutaten findest du im [Polenladen](/de/blog/polenladen-einkaufen). Ein Quark-Pasta-Nachbar mit süßem statt herzhaftem Charakter ist [Makaron z serem](/de/rezepte/makaron-z-serem).",
 variantsPl:
 "Wegetariańskie bez boczku, z grzybami zamiast lub obok kapusty, albo obok [bigosu](/pl/rezepte/bigos) jako kolejne danie z kapustą na talerzu. Ferment pogłębia [kiszenie w domu](/pl/blog/kiszenie-w-domu), typowe specjalności i dobry makaron kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Sąsiadem twarogowym o słodkim, a nie wytrawnym charakterze jest [makaron z serem](/pl/rezepte/makaron-z-serem), a kto szuka czegoś pomiędzy tymi dwoma światami, może po prostu zmniejszyć ilość kapusty i dodać odrobinę masła więcej.",
 },
};
