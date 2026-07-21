/**
 * Wave 8 Paket D — Knedle FACTS (new).
 *
 * Agent E merge into recipe-articles.ts:
 *   import { W8_FACTS_D } from "./recipe-articles-w8-d";
 *   Object.assign(FACTS, W8_FACTS_D_RETROFIT, W8_FACTS_D);
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
      "Knedle ze śliwkami sind runde Obst-Knödel: Kartoffelteig umschließt eine Pflaume — eigene Form, eigener Intent. Sie gehören nicht zur [Pierogi-Familie](/de/blog/pierogi-guide): keine Falten, keine halbmondförmigen Teigtaschen. Auch [Pierogi leniwe](/de/rezepte/pierogi-leniwe) sind etwas anderes (Quark-Klößchen ohne Füllung). Pyzy tragen oft Fleisch; Uszka sind kleine Wigilia-Taschen. Knedle bleiben der klare Rezeptseite für „Knödel mit Pflaumen“.",
    originPl:
      "Knedle ze śliwkami to okrągłe knedle owocowe: ciasto ziemniaczane owija śliwkę — własna forma, własny intent. Nie należą do [rodziny pierogów](/pl/blog/przewodnik-pierogi): bez lepienia półksiężyców. [Pierogi leniwe](/pl/rezepte/pierogi-leniwe) to coś innego (kluseczki z twarogu bez nadzienia). Pyzy często niosą mięso; uszka to małe pierożki wigilijne. Knedle zostają przepisem na „knedle ze śliwkami”.",
    shopDe:
      "Mehlig kochende Kartoffeln, Mehl, Ei, Pflaumen (frisch oder gut abgetropft aus dem Glas), Butter, Semmelbrösel, Zucker, Zimt. Saisonware im Supermarkt; Glasware und gute Brösel oft im [Polenladen](/de/blog/polenladen-einkaufen). Ersatzlogik für Obst und Mehl: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Teiggefühl wie bei Kartoffel-Teigen — Technik-Guide für gefaltete Taschen bleibt der Pierogi-Teig-Guide, nicht dieses Rezept.",
    shopPl:
      "Ziemniaki mączyste, mąka, jajko, śliwki (świeże lub dobrze odsączone ze słoika), masło, bułka tarta, cukier, cynamon. Sezon w markecie; słoiki i dobra bułka często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Zamienniki owoców i mąki: [zamienniki składników](/pl/blog/zamienniki-skladnikow). Wyczucie ciasta jak przy kluskach ziemniaczanych — owner techniki sklejanych pierogów zostaje przy przewodniku po cieście, nie tu.",
    techniqueDe:
      "Kartoffeln gut ausdampfen, Teig weich aber tragfähig, Pflaume fest einpacken, in leicht siedendem Wasser garen bis sie schwimmen. Zu nasser Teig platzt; zu trockener reißt. Erste Probe-Knedle testen, bevor die ganze Charge geformt wird.",
    techniquePl:
      "Ziemniaki dobrze odparować, ciasto miękkie ale nośne, śliwkę szczelnie owinąć, gotować w lekko wrzącej wodzie aż wypłyną. Za mokre pęka; za suche pęka przy zwijaniu. Pierwsza próbna knedla przed całą partią.",
    serveDe:
      "Klassisch mit Butterbröseln und Zucker oder Zimt — warm. Als süßes Hauptgericht oder Dessert nach dem [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer lieber Apfel in der Pfanne will: [Racuchy z jabłkami](/de/rezepte/racuchy-jablka). Śmietana optional am Rand, nicht Pflicht.",
    servePl:
      "Klasycznie z bułką na maśle i cukrem lub cynamonem — ciepło. Jako słodkie danie główne lub deser po [obiadzie niedzielnym](/pl/blog/obiad-niedzielny). Kto woli jabłko na patelni: [racuchy z jabłkami](/pl/rezepte/racuchy-jablka). Śmietana opcjonalnie z boku, nie obowiązek.",
    diasporaDe:
      "In DE oft Wochenendprojekt: vormittags Kartoffeln, nachmittags formen. Kinder dürfen einpacken — Erwachsene schließen die Naht. Glas-Pflaumen retten den Winter, wenn der Markt keine frischen hat.",
    diasporaPl:
      "W DE często projekt weekendowy: rano ziemniaki, po południu formowanie. Dzieci mogą owijać — dorośli domykają. Śliwki ze słoika ratują zimę, gdy nie ma świeżych.",
    mistakesDe:
      "Zu nasse Kartoffeln, zu viel Mehl, Risse an der Naht, sprudelndes Wasser, Knedle mit gefalteten Pierogi oder Leniwe verwechseln. Abgrenzung bleibt klar: hier Obst-Knödel, dort andere Formen.",
    mistakesPl:
      "Zbyt mokre ziemniaki, za dużo mąki, pęknięcia na łączeniu, burząca woda, mylenie z pierogami lub leniwymi. Abgrenzung jasny: tu knedle owocowe, tam inne formy.",
    variantsDe:
      "Mit Aprikose oder Mirabelle, mit Quark-Anteil im Teig (dann nahe an Leniwe-Geschmack — aber weiter gefüllt), oder herzhaft mit Fleisch (dann eher Richtung Pyzy, eigene Rezeptseite). Abgrenzung und Teigfamilie: [Pierogi-Guide](/de/blog/pierogi-guide); schnelle Quark-Linie ohne Obst: [Pierogi leniwe](/de/rezepte/pierogi-leniwe).",
    variantsPl:
      "Z morelą lub mirabelką, z udziałem twarogu w cieście (blisko smaku leniwych — ale nadal z nadzieniem), albo wytrawnie z mięsem (bliżej pyzy, osobna Rezeptseite). Rozróżnienie: [przewodnik po pierogach](/pl/blog/przewodnik-pierogi); szybka linia twarogowa bez owocu: [pierogi leniwe](/pl/rezepte/pierogi-leniwe).",
  },
};
