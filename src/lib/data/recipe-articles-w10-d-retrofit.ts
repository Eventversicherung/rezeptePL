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
 vibeDe: "mild, weich, ohne Falten-Stress",
 vibePl: "łagodne, miękkie, bez stresu lepienia",
 originDe:
 "Pierogi leniwe sind keine gefalteten Pierogi: Twaróg, Mehl und Ei werden zu Klößchen geformt und gekocht. Schneller Einstieg für Kinder und für Tage ohne Zeit zum Falten — verwandt mit Naleśniki-Twaróg-Geschmack, aber andere Technik. Die breite Teigfamilie ordnet der [Pierogi-Guide](/de/blog/pierogi-guide); gefüllte Obst-Knödel sind [Knedle ze śliwkami](/de/rezepte/knedle-sliwki), nicht diese Seite. Heiße Nudeln mit Quark darüber sind ein anderer Teller: [Makaron z serem](/de/rezepte/makaron-z-serem).",
 originPl:
 "Pierogi leniwe to nie sklejane pierogi: twaróg, mąka i jajko formuje się w kluseczki i gotuje. Szybki start dla dzieci i dni bez czasu na lepienie — blisko smaku naleśników z twarogiem, ale inna technika. Rodzinę ciast porządkuje [przewodnik po pierogach](/pl/blog/przewodnik-pierogi); knedle owocowe to [knedle ze śliwkami](/pl/rezepte/knedle-sliwki), nie ta strona. Gorący makaron z twarogiem to inny talerz: [makaron z serem](/pl/rezepte/makaron-z-serem).",
 shopDe:
 "Twaróg oder abgetropfter Speisequark, Mehl und Ei sowie Butter und Semmelbrösel reichen. Konsistenz und DE-Einkauf erklärt der [Twaróg-Guide](/de/blog/twarog-deutschland); die Route über den [Polenladen](/de/blog/polenladen-einkaufen) oft lohnt sich.",
 shopPl:
 "Twaróg lub odsączony Quark, mąka i jajko oraz masło i bułka tarta wystarczą. Konsystencję i zakupy w DE opisuje [przewodnik po twarogu](/pl/blog/twarog-w-niemczech); trasa przez [sklep polski](/pl/blog/sklep-polski-zakupy) często się opłaca.",
 techniqueDe:
 "Der Teig soll weich, aber formbar bleiben — zu viel Mehl macht die Klößchen gummiartig. Koche sie in leicht siedendem, nicht sprudelndem Wasser und nimm sie heraus, sobald sie aufschwimmen. Das ist kein Nudelkochen mit Quark-Sauce — das wäre [Makaron z serem](/de/rezepte/makaron-z-serem).",
 techniquePl:
 "Ciasto ma zostać miękkie, ale formowalne — za dużo mąki robi kluseczki gumowate. Gotuj w lekko wrzącej, nie burzącej wodzie i wyjmij, gdy wypłyną. To nie gotowanie makaronu z sosem twarogowym — to byłby [makaron z serem](/pl/rezepte/makaron-z-serem).",
 serveDe:
 "Klassisch mit Butterbröseln und Zucker, oder mit Śmietana — siehe [Śmietana vs. Schmand](/de/blog/smietana-schmand). Auch herzhaft mit Salz und Dill möglich. Als Sonntags-Dessert neben dem [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 servePl:
 "Klasycznie z bułką na maśle i cukrem albo ze śmietaną — [śmietana czy Schmand](/pl/blog/smietana-czy-schmand). Też wytrawnie z solą i koperkiem. Jako deser niedzielny obok [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
 diasporaDe:
 "Für viele Kinder in Deutschland sind Leniwe das erste „Pierogi“-Erlebnis, weil niemand falten muss. Wer später Obst einpacken will, wechselt zu Knedle; wer gar keinen Teig will, geht zu [Makaron z serem](/de/rezepte/makaron-z-serem).",
 diasporaPl:
 "Dla wielu dzieci w Niemczech leniwe są pierwszym doświadczeniem „pierogów”, bo nikt nie musi lepić. Kto później chce owoc w środku, idzie w knedle; kto w ogóle nie chce ciasta — do [makaronu z serem](/pl/rezepte/makaron-z-serem).",
 mistakesDe:
 "Zu viel Mehl, zu starkes Kochen und zu nasser Quark sind die klassischen Fehler. Tropfe den Twaróg gut ab und bleibe ruhig am Topf — und vermische die Technik nicht mit gefalteten [Pierogi Ruskie](/de/rezepte/pierogi/ruskie), mit Knedle oder mit Pasta plus Quark ([Makaron z serem](/de/rezepte/makaron-z-serem)).",
 mistakesPl:
 "Za dużo mąki, zbyt gwałtowne gotowanie i za mokry twaróg to klasyczne błędy. Dobrze odsącz twaróg i trzymaj spokój przy garnku — nie mieszaj techniki ze sklejanymi [ruskimi](/pl/rezepte/pierogi/ruskie), knedlami ani makaronem z twarogiem ([makaron z serem](/pl/rezepte/makaron-z-serem)).",
 variantsDe:
 "Mit Kartoffelanteil, süßer oder salziger. Nicht verwechseln mit gefalteten [Pierogi Ruskie](/de/rezepte/pierogi/ruskie). Süße gefüllte Nachbarschaft: [Knedle mit Pflaumen](/de/rezepte/knedle-sliwki). Pasta-Comfort ohne Teig: [Makaron z serem](/de/rezepte/makaron-z-serem).",
 variantsPl:
 "Z udziałem ziemniaka, słodsze lub słone. Nie mylić ze sklejanymi [ruskimi](/pl/rezepte/pierogi/ruskie). Słodkie sąsiedztwo z nadzieniem: [knedle ze śliwkami](/pl/rezepte/knedle-sliwki). Comfort bez ciasta: [makaron z serem](/pl/rezepte/makaron-z-serem).",
 },

 "recipe-lazanki": {
 dishDe: "Łazanki mit Kapusta",
 dishPl: "Łazanki z kapustą",
 vibeDe: "deftig, säuerlich, alltagstauglich",
 vibePl: "treściwe, kwaśne, na co dzień",
 originDe:
 "Łazanki sind quadratische Nudeln, oft mit Sauerkraut und Speck — ein Diaspora-Alltagsteller zwischen [Bigos](/de/rezepte/bigos) und Pasta. Weniger Drama als Bigos, mehr Struktur als Kraut allein. Ferment-Kontext gibt der [Kiszenie-Guide](/de/blog/kiszenie-guide). Süß-cremige Pasta mit Quark ist ein anderer Charakter: [Makaron z serem](/de/rezepte/makaron-z-serem).",
 originPl:
 "Łazanki to kwadratowy makaron, często z kapustą i boczkiem — talerz diasporowy między [bigosem](/pl/rezepte/bigos) a pastą. Mniej dramatu niż bigos, więcej struktury niż sama kapusta. Kontekst fermentu daje [kiszenie w domu](/pl/blog/kiszenie-w-domu). Słodko-kremowy makaron z twarogiem to inny charakter: [makaron z serem](/pl/rezepte/makaron-z-serem).",
 shopDe:
 "Łazanki holst du im [Polenladen](/de/blog/polenladen-einkaufen), sonst helfen breite Bandnudeln. Sauerkraut, Zwiebel und optional Speck tragen den Teller. Ferment-Logik erklärt der [Kiszenie-Guide](/de/blog/kiszenie-guide); Bigos-Tiefe zum Vergleich der [Bigos-Guide](/de/blog/bigos-guide).",
 shopPl:
 "Łazanki kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), inaczej pomaga szeroki makaron. Kapusta kiszona, cebula i opcjonalnie boczek niosą talerz. Ferment opisuje [kiszenie w domu](/pl/blog/kiszenie-w-domu); głębię bigosu porównasz w [przewodniku po bigosie](/pl/blog/bigos-przewodnik).",
 techniqueDe:
 "Schmore das Kraut, bis es weich und aromatisch ist, koche die Nudeln al dente und mische erst dann. Zu viel Flüssigkeit macht den Teller wässrig statt deftig — abtropfen und abschmecken entscheiden mehr als Extra-Kraut. Das bleibt ein herzhafter Kraut-Teller, kein Quark-Butter-Zucker-Gericht wie [Makaron z serem](/de/rezepte/makaron-z-serem).",
 techniquePl:
 "Duś kapustę do miękkości i aromatu, ugotuj makaron al dente i dopiero wtedy wymieszaj. Za dużo płynu robi talerz wodnisty zamiast treściwy — odsączenie i doprawienie decydują bardziej niż dodatkowa kapusta. To zostaje wytrawny talerz z kapustą, nie danie z twarogiem i cukrem jak [makaron z serem](/pl/rezepte/makaron-z-serem).",
 serveDe:
 "Serviere Łazanki heiß, mit Dill oder pur. Reste brät man am nächsten Tag in der Pfanne auf. Wer länger schmoren will, geht zum [Bigos-Rezept](/de/rezepte/bigos).",
 servePl:
 "Podawaj łazanki gorące, z koperkiem albo same. Resztki podsmaż nazajutrz na patelni. Kto chce dłuższe duszenie, idzie do [przepisu na bigos](/pl/rezepte/bigos).",
 diasporaDe:
 "Schneller als Bigos, aber mit derselben Kapusta-Logik. Gut für Wochentage nach dem [Sonntagsessen](/de/blog/sonntagsessen-polnisch), wenn noch Kraut übrig ist. Cremige Quark-Pasta ohne Kraut: [Makaron z serem](/de/rezepte/makaron-z-serem).",
 diasporaPl:
 "Szybsze niż bigos, ale z tą samą logiką kapusty. Dobre na tydzień po [obiedzie niedzielnym](/pl/blog/obiad-niedzielny), gdy zostaje kapusta. Kremowy makaron z twarogiem bez kapusty: [makaron z serem](/pl/rezepte/makaron-z-serem).",
 mistakesDe:
 "Zu nasses Kraut, zu weiche Nudeln und zu wenig Abschmecken lassen Łazanki flach. Pfeffer und genug Fett zählen — und vermische den Teller nicht mit süßem [Makaron z serem](/de/rezepte/makaron-z-serem).",
 mistakesPl:
 "Za mokra kapusta, za miękki makaron i za mało doprawienia spłaszczają łazanki. Pieprz i dość tłuszczu mają znaczenie — nie mylić ze słodkim [makaronem z serem](/pl/rezepte/makaron-z-serem).",
 variantsDe:
 "Vegetarisch ohne Speck, mit Pilzen oder neben [Bigos](/de/rezepte/bigos) als Kraut-Silo. Ferment vertieft der [Kiszenie-Guide](/de/blog/kiszenie-guide). Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten. Quark-Pasta-Nachbar: [Makaron z serem](/de/rezepte/makaron-z-serem).",
 variantsPl:
 "Wegetariańskie bez boczku, z grzybami albo obok [bigosu](/pl/rezepte/bigos). Ferment pogłębia [kiszenie w domu](/pl/blog/kiszenie-w-domu). W [sklepie polskim](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności. Sąsiad twarogowy: [makaron z serem](/pl/rezepte/makaron-z-serem).",
 },
};
