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
 *   import { W10_FACTS_W9_RETROFIT } from "./recipe-articles-w10-d-retrofit";
 *   Object.assign(FACTS, …, W10_FACTS_W9_RETROFIT, W10_FACTS_D);
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
      "Twaróg oder abgetropfter Speisequark, Mehl, Ei, Butter, Semmelbrösel. Konsistenz und DE-Einkauf: [Twaróg-Guide](/de/blog/twarog-deutschland). Ladenroute: [Polenladen](/de/blog/polenladen-einkaufen). Ersatzquark ehrlich nach [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
    shopPl:
      "Twaróg lub odsączony Quark, mąka, jajko, masło, bułka tarta. Konsystencja i zakupy w DE: [przewodnik po twarogu](/pl/blog/twarog-w-niemczech). Trasa: [sklep polski](/pl/blog/sklep-polski-zakupy). Zamienniki według [zamienników składników](/pl/blog/zamienniki-skladnikow).",
    techniqueDe:
      "Teig weich aber formbar. Nicht zu viel Mehl. In leicht siedendem Wasser — nicht sprudelnd — garen bis sie schwimmen. Kein Nudelkochen mit Quark-Sauce — das wäre Makaron z serem.",
    techniquePl:
      "Ciasto miękkie, ale formowalne. Nie za dużo mąki. Gotować w lekko wrzącej wodzie — nie burząc — aż wypłyną. To nie gotowanie makaronu z sosem twarogowym — to byłby makaron z serem.",
    serveDe:
      "Klassisch mit Butterbröseln und Zucker, oder mit Śmietana — siehe [Śmietana vs. Schmand](/de/blog/smietana-schmand). Auch herzhaft mit Salz und Dill möglich. Als Sonntags-Dessert neben dem [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    servePl:
      "Klasycznie z bułką na maśle i cukrem albo ze śmietaną — [śmietana czy Schmand](/pl/blog/smietana-czy-schmand). Też wytrawnie z solą i koperkiem. Jako deser niedzielny obok [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
    diasporaDe:
      "Oft das erste „Pierogi“-Erlebnis für Kinder in DE — ohne Faltenlernen. Wer später Obst einpacken will, wechselt zu Knedle, nicht zu mehr Mehl hier. Wer gar keinen Teig will: [Makaron z serem](/de/rezepte/makaron-z-serem).",
    diasporaPl:
      "Często pierwsze „pierogi” dla dzieci w DE — bez nauki lepienia. Kto później chce owoc w środku, idzie w knedle, nie w więcej mąki tutaj. Kto w ogóle nie chce ciasta: [makaron z serem](/pl/rezepte/makaron-z-serem).",
    mistakesDe:
      "Zu viel Mehl, zu starkes Kochen, zu nasser Quark. Abtropfen und ruhig bleiben. Nicht mit [Pierogi Ruskie](/de/rezepte/pierogi/ruskie), Knedle oder Pasta+Quark ([Makaron z serem](/de/rezepte/makaron-z-serem)) vermischen.",
    mistakesPl:
      "Za dużo mąki, zbyt gwałtowne gotowanie, za mokry twaróg. Odsącz i spokój. Nie mieszać z [ruskimi](/pl/rezepte/pierogi/ruskie), knedlami ani makaronem z twarogiem ([makaron z serem](/pl/rezepte/makaron-z-serem)).",
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
      "Łazanki sind quadratische Nudeln, oft mit Sauerkraut und Speck — Diaspora-Alltagsteller zwischen [Bigos](/de/rezepte/bigos) und Pasta. Weniger Drama als Bigos, mehr Struktur als Kraut allein. Kapusta-Kontext: [Kiszenie-Guide](/de/blog/kiszenie-guide). Süß-cremige Pasta mit Quark ist ein anderer Intent: [Makaron z serem](/de/rezepte/makaron-z-serem).",
    originPl:
      "Łazanki to kwadratowy makaron, często z kapustą i boczkiem — talerz diasporowy między [bigosem](/pl/rezepte/bigos) a pastą. Mniej dramatu niż bigos, więcej struktury niż sama kapusta. Kontekst kapusty: [kiszenie w domu](/pl/blog/kiszenie-w-domu). Słodko-kremowy makaron z twarogiem to inny intent: [makaron z serem](/pl/rezepte/makaron-z-serem).",
    shopDe:
      "Łazanki im [Polenladen](/de/blog/polenladen-einkaufen) oder breite Bandnudeln, Sauerkraut, Zwiebel, Speck optional. Ferment-Logik: [Kiszenie-Guide](/de/blog/kiszenie-guide). Bigos-Tiefe zum Vergleich: [Bigos-Guide](/de/blog/bigos-guide).",
    shopPl:
      "Łazanki w [sklepie polskim](/pl/blog/sklep-polski-zakupy) lub szeroki makaron, kapusta kiszona, cebula, boczek opcjonalnie. Ferment: [kiszenie w domu](/pl/blog/kiszenie-w-domu). Głębia bigosu: [przewodnik po bigosie](/pl/blog/bigos-przewodnik).",
    techniqueDe:
      "Kraut schmoren bis weich und aromatisch, Nudeln al dente, dann mischen — nicht zu wässrig. Kein Quark-Butter-Zucker-Teller — das bleibt [Makaron z serem](/de/rezepte/makaron-z-serem).",
    techniquePl:
      "Kapustę dusić do miękkości i aromatu, makaron al dente, potem wymieszać — nie za rzadko. To nie talerz z twarogiem i cukrem — to zostaje [makaron z serem](/pl/rezepte/makaron-z-serem).",
    serveDe:
      "Heiß, mit Dill oder pur. Reste braten am nächsten Tag in der Pfanne auf. Wer länger schmoren will: [Bigos-Rezept](/de/rezepte/bigos).",
    servePl:
      "Gorące, z koperkiem albo same. Resztki podsmaż nazajutrz na patelni. Kto chce dłuższe duszenie: [przepis na bigos](/pl/rezepte/bigos).",
    diasporaDe:
      "Schneller als Bigos, nutzt dieselbe Kapusta-Logik. Gut für Wochentage nach dem [Sonntagsessen](/de/blog/sonntagsessen-polnisch)-Rest. Cremige Quark-Pasta ohne Kraut: [Makaron z serem](/de/rezepte/makaron-z-serem).",
    diasporaPl:
      "Szybsze niż bigos, ta sama logika kapusty. Dobre na tydzień po resztkach [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Kremowy makaron z twarogiem bez kapusty: [makaron z serem](/pl/rezepte/makaron-z-serem).",
    mistakesDe:
      "Zu nasses Kraut, zu weiche Nudeln, zu wenig Abschmecken. Pfeffer und Fett zählen. Nicht mit süßem [Makaron z serem](/de/rezepte/makaron-z-serem) vermischen.",
    mistakesPl:
      "Za mokra kapusta, za miękki makaron, za mało doprawienia. Pieprz i tłuszcz mają znaczenie. Nie mylić ze słodkim [makaronem z serem](/pl/rezepte/makaron-z-serem).",
    variantsDe:
      "Vegetarisch ohne Speck, mit Pilzen, oder neben [Bigos](/de/rezepte/bigos) als Kraut-Silo. Ferment vertiefen: [Kiszenie](/de/blog/kiszenie-guide). Einkauf: [Polenladen](/de/blog/polenladen-einkaufen). Quark-Pasta-Nachbar: [Makaron z serem](/de/rezepte/makaron-z-serem).",
    variantsPl:
      "Wegetariańskie bez boczku, z grzybami albo obok [bigosu](/pl/rezepte/bigos). Ferment: [kiszenie](/pl/blog/kiszenie-w-domu). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy). Sąsiad twarogowy: [makaron z serem](/pl/rezepte/makaron-z-serem).",
  },
};
