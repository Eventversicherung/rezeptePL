/**
 * Wave 10 Paket C — FACTS for Pierogi jagody + Naleśniki dżem.
 * Isolated export `W10_FACTS_C` — Integrator E merges into recipe-articles.ts FACTS map:
 *   import { W10_FACTS_C } from "./recipe-articles-w10-c";
 *   Object.assign(FACTS, …, W10_FACTS_C);
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
      "Pierogi z jagodami sind gefaltete Teigtaschen mit Heidelbeerfüllung — eine eigene Rezeptseite unter `/rezepte/pierogi/jagody`, nicht die Überblicksseite des [Pierogi-Guides](/de/blog/pierogi-guide). Sie gehören zur Pierogi-Familie neben [Ruskie](/de/rezepte/pierogi/ruskie), [Fleisch](/de/rezepte/pierogi/fleisch) und [Kraut & Pilze](/de/rezepte/pierogi/kraut-pilze): oben wechseln, Teig bleibt verwandt. Klar getrennt von [Knedle ze śliwkami](/de/rezepte/knedle-sliwki): Knedle sind runde Obst-Knödel mit Kartoffelteig und Pflaume, keine halbmondförmigen Falten. Hier tragen Beeren und Zucker die Süße.",
    originPl:
      "Pierogi z jagodami to sklejane pierogi z farszem jagodowym — własny przepis pod `/rezepte/pierogi/jagody`, nie przegląd [przewodnika pierogi](/pl/blog/przewodnik-pierogi). Należą do rodziny obok [ruskich](/pl/rezepte/pierogi/ruskie), [mięsa](/pl/rezepte/pierogi/mieso) i [kapusty z grzybami](/pl/rezepte/pierogi/kapusta-grzyby): przełącz u góry. Jasno oddzielone od [knedli ze śliwkami](/pl/rezepte/knedle-sliwki): knedle to okrągłe knedle ziemniaczane ze śliwką, bez półksiężycowego lepienia. Tu jagody i cukier niosą słodycz.",
    shopDe:
      "Du brauchst Mehl 405 oder 550, Ei, Wasser, Öl, Heidelbeeren frisch oder TK (gut abgetropft), Zucker, Speisestärke und Butter. Beeren findest du oft im Supermarkt; dicke Konfitüre ist nur eine Notvariante. Teigarbeit und Formen erklären [Pierogi-Teig](/de/blog/pierogi-teig) und [Pierogi-Formen](/de/blog/pierogi-formen); Batch-Logik steht im [Freezer-Guide](/de/blog/freezer-meal-prep).",
    shopPl:
      "Potrzebujesz mąki 405 lub 550, jajka, wody, oleju, jagód świeżych lub mrożonych (dobrze odsączonych), cukru, skrobi i masła. Jagody często są w markecie. Ciasto i foremki opisują [ciasto na pierogi](/pl/blog/ciasto-na-pierogi) i [foremki](/pl/blog/foremki-do-pierogow); logikę partii znajdziesz w [przewodniku mrożenia](/pl/blog/mrozenie-pierogow).",
    techniqueDe:
      "Die Füllung muss trocken und kalt sein: Beeren abtropfen, mit Zucker und wenig Stärke binden — nicht schwemmen. Wenig Füllung pro Kreis, Nähte doppelt andrücken, in leicht siedendem Salzwasser garen. Dieselbe Naht-Logik wie bei [Ruskie](/de/rezepte/pierogi/ruskie), aber Feuchtigkeit ist kritischer. Teigruhe und Ausrollen vertieft [Pierogi-Teig](/de/blog/pierogi-teig); roh einzeln anfrieren wie im [Freezer-Guide](/de/blog/freezer-meal-prep).",
    techniquePl:
      "Farsz musi być suchy i zimny: jagody odsączyć, związać cukrem i odrobiną skrobi — bez zalewania. Mało farszu, mocno skleić, gotować w lekko wrzącej wodzie. Ta sama logika szwu co przy [ruskich](/pl/rezepte/pierogi/ruskie), ale wilgoć jest bardziej krytyczna. Odpoczynek ciasta pogłębia [ciasto na pierogi](/pl/blog/ciasto-na-pierogi); mroź pojedynczo jak w [przewodniku mrożenia](/pl/blog/mrozenie-pierogow).",
    serveDe:
      "Serviere heiß mit Butter und Zucker oder Puderzucker; optional Sahne. Als Dessert nach herzhaften [Fleisch-Pierogi](/de/rezepte/pierogi/fleisch) oder als alleiniger süßer Teller. Nicht mit [Knedle](/de/rezepte/knedle-sliwki) vermischen — andere Form, anderer Teller.",
    servePl:
      "Podawaj gorące z masłem i cukrem lub cukrem pudrem; opcjonalnie śmietana. Jako deser po [pierogach z mięsem](/pl/rezepte/pierogi/mieso) albo sam słodki talerz. Nie mieszaj na talerzu z [knedlami](/pl/rezepte/knedle-sliwki) — inna forma, inny charakter.",
    diasporaDe:
      "In Deutschland sind frische Heidelbeeren saisonal; TK-Beeren sind legitim, wenn du sie gut abtaust und abtropfst. Süße Pierogi belohnen Geduld beim Nähen — Kinder helfen gern mit dem Zucker. Technik und Batch findest du im [Pierogi-Teig](/de/blog/pierogi-teig)-Artikel und im [Freezer-Guide](/de/blog/freezer-meal-prep).",
    diasporaPl:
      "W Niemczech świeże jagody są sezonowe; mrożone są w porządku, gdy dobrze je rozmrozisz i odsączysz. Słodkie pierogi nagradzają cierpliwość przy sklejaniu — dzieci chętnie pomagają z cukrem. Technikę i partie znajdziesz w [cieście na pierogi](/pl/blog/ciasto-na-pierogi) oraz w [przewodniku mrożenia](/pl/blog/mrozenie-pierogow).",
    mistakesDe:
      "Häufig scheitern süße Pierogi an nassen Beeren ohne Abtropfen, zu viel Füllung oder zu wildem Kochen. Verwechsele die Form nicht mit Knedle: hier faltest du Halbmonde, dort rollst du runde Knödel.",
    mistakesPl:
      "Często słodkie pierogi nie wychodzą przez mokre jagody bez odsączenia, za dużo farszu albo zbyt gwałtowne gotowanie. Nie myl formy z knedlami: tu sklejasz półksiężyce, tam formujesz okrągłe knedle.",
    variantsDe:
      "Mit gemischten Beeren, mehr Zucker oder Zitronenschale wird die Füllung hausbrauchsüblich. Oben wechselst du zu [Ruskie](/de/rezepte/pierogi/ruskie), [Fleisch](/de/rezepte/pierogi/fleisch) oder [Kraut-Pilze](/de/rezepte/pierogi/kraut-pilze). Teig und Überblick stehen im [Pierogi-Teig](/de/blog/pierogi-teig)-Artikel und im [Pierogi-Guide](/de/blog/pierogi-guide); runde Obst-Knödel bleiben bei [Knedle śliwki](/de/rezepte/knedle-sliwki).",
    variantsPl:
      "Z mieszanką jagód, więcej cukru lub skórką cytryny farsz staje się domowy. U góry przełączysz na [ruskie](/pl/rezepte/pierogi/ruskie), [mięso](/pl/rezepte/pierogi/mieso) albo [kapustę z grzybami](/pl/rezepte/pierogi/kapusta-grzyby). Ciasto i przegląd znajdziesz w [cieście na pierogi](/pl/blog/ciasto-na-pierogi) oraz w [przewodniku pierogi](/pl/blog/przewodnik-pierogi); okrągłe knedle owocowe zostają przy [knedlach ze śliwkami](/pl/rezepte/knedle-sliwki).",
  },
  "recipe-nalesniki-dzem": {
    dishDe: "Naleśniki mit Marmelade",
    dishPl: "Naleśniki z dżemem",
    vibeDe: "süß, schnell, kinderfreundlich und alltagstauglich",
    vibePl: "słodkie, szybkie, przyjazne dzieciom i na co dzień",
    originDe:
      "Naleśniki mit Marmelade sind dünne polnische Pfannkuchen mit Dżem- oder Powidła-Füllung — eine eigene Variante neben [Naleśniki mit Twaróg](/de/rezepte/nalesniki/twarog). Teig und Wenden erklärt der [Naleśniki-Guide](/de/blog/nalesniki-guide); herzhaft wechselst du zu [Fleisch](/de/rezepte/nalesniki/fleisch) oder [Spinat](/de/rezepte/nalesniki/szpinak). Quark-Einkauf bleibt beim [Twaróg-Guide](/de/blog/twarog-deutschland) — hier geht es um dicke Marmelade und Powidła.",
    originPl:
      "Naleśniki z dżemem to cienkie placki z farszem dżemowym lub powidłami — własny wariant obok [naleśników z twarogiem](/pl/rezepte/nalesniki/twarog). Ciasto i obracanie opisuje [przewodnik naleśników](/pl/blog/nalesniki-przewodnik); na wytrawnie przełączysz na [mięso](/pl/rezepte/nalesniki/mieso) albo [szpinak](/pl/rezepte/nalesniki/szpinak). Zakupy twarogu zostają w [poradniku twarogu](/pl/blog/twarog-w-niemczech) — tu chodzi o gęsty dżem i powidła.",
    shopDe:
      "Milch, Mehl, Eier und Butter holst du im Supermarkt; für die Füllung brauchst du dicken Dżem oder Powidła und Puderzucker. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du oft aromatischere Powidła, aber gute Supermarkt-Marmelade reicht völlig. Wenn ein Produkt fehlt, hilft die Übersicht [Ersatzprodukte](/de/blog/ersatzprodukte-de). Teigfragen beantwortet der [Naleśniki-Guide](/de/blog/nalesniki-guide).",
    shopPl:
      "Mleko, mąkę, jajka i masło kupisz w markecie; do farszu potrzebujesz gęstego dżemu lub powideł oraz cukru pudru. W [sklepie polskim](/pl/blog/sklep-polski-zakupy) często są bardziej aromatyczne powidła, ale dobry dżem z marketu w zupełności wystarczy. Gdy brakuje produktu, pomaga przegląd [zamienników](/pl/blog/zamienniki-skladnikow). Pytania o ciasto rozstrzyga [przewodnik naleśników](/pl/blog/nalesniki-przewodnik).",
    techniqueDe:
      "Lass den Teig dünn und ruhen — dieselbe Basis wie bei [Twaróg-Naleśniki](/de/rezepte/nalesniki/twarog), aber die Füllung ist Dżem: dick streichen, Rand frei lassen, fest rollen, optional in Butter goldbraun braten. Zu dünner Dżem läuft aus; zu viel Füllung platzt die Rolle. Details zum Braten stehen im [Naleśniki-Guide](/de/blog/nalesniki-guide).",
    techniquePl:
      "Ciasto ma być cienkie i odpoczęte — ta sama baza co przy [naleśnikach z twarogiem](/pl/rezepte/nalesniki/twarog), ale farsz to dżem: gęsto smaruj, zostaw margines, mocno zwiń, opcjonalnie podsmaż na maśle. Zbyt rzadki dżem wypływa; za dużo farszu rozrywa rolkę. Szczegóły smażenia są w [przewodniku naleśników](/pl/blog/nalesniki-przewodnik).",
    serveDe:
      "Serviere warm mit Puderzucker; optional mit Śmietana oder Beeren. Es ist ein schneller Nachmittagsteller — nicht die Quark-Variante. Wenn der Tisch salzig will, wechselst du zu [Fleisch-Naleśniki](/de/rezepte/nalesniki/fleisch).",
    servePl:
      "Podawaj ciepłe z cukrem pudrem; opcjonalnie ze śmietaną lub owocami. To szybki talerz na popołudnie — nie wariant z twarogiem. Gdy stół chce słono, przełącz na [naleśniki z mięsem](/pl/rezepte/nalesniki/mieso).",
    diasporaDe:
      "Dicke Supermarkt-Marmelade funktioniert im Alltag gut; Powidła aus dem Polenladen schmecken oft intensiver, sind aber kein Pflichtkauf. Für Kinder rollst du kleinere Portionen — so halten sie besser in der Hand. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du Powidła und dicke Konfitüren; wenn etwas fehlt, hilft [Ersatzprodukte](/de/blog/ersatzprodukte-de). Teig und Wenden vertieft der [Naleśniki-Guide](/de/blog/nalesniki-guide).",
    diasporaPl:
      "Gęsty dżem z marketu sprawdza się na co dzień; powidła ze sklepu polskiego bywają intensywniejsze, ale nie są obowiązkowe. Dla dzieci zwijaj mniejsze porcje — lepiej trzymają się w dłoni. W [sklepie polskim](/pl/blog/sklep-polski-zakupy) znajdziesz powidła i gęste konfitury; gdy czegoś brakuje, pomaga przegląd [zamienników](/pl/blog/zamienniki-skladnikow). Ciasto i obracanie pogłębia [przewodnik naleśników](/pl/blog/nalesniki-przewodnik).",
    mistakesDe:
      "Häufige Fehler sind eine wässrige Quark-Füllung statt dickem Dżem, zu dünne Marmelade, zu dicke Pfannkuchen oder eine Pfanne, die zu heiß oder zu kalt ist. Der Teig soll dünn bleiben, die Füllung streichfähig — nicht flüssig.",
    mistakesPl:
      "Częste błędy to wodnisty twaróg zamiast gęstego dżemu, zbyt rzadka marmolada, zbyt grube placki albo patelnia zbyt gorąca lub zbyt zimna. Ciasto ma zostać cienkie, farsz smarowalny — nie płynny.",
    variantsDe:
      "Statt Erdbeer-Marmelade kannst du Powidła, Aprikose oder eine hausgemachte Konfitüre nehmen; ohne zweites Braten bleiben sie leichter. Oben wechselst du zu [Twaróg](/de/rezepte/nalesniki/twarog), [Fleisch](/de/rezepte/nalesniki/fleisch) oder [Spinat](/de/rezepte/nalesniki/szpinak). Quark-Fragen beantwortet der [Twaróg-Guide](/de/blog/twarog-deutschland); fehlende Gläser ersetzt oft der [Ersatzprodukte](/de/blog/ersatzprodukte-de)-Artikel.",
    variantsPl:
      "Zamiast dżemu truskawkowego możesz wziąć powidła, morelę albo domową konfiturę; bez drugiego smażenia wychodzą lżej. U góry przełączysz na [twaróg](/pl/rezepte/nalesniki/twarog), [mięso](/pl/rezepte/nalesniki/mieso) albo [szpinak](/pl/rezepte/nalesniki/szpinak). Pytania o twaróg rozstrzyga [poradnik twarogu](/pl/blog/twarog-w-niemczech); brakujące słoiki często zastąpi przegląd [zamienników](/pl/blog/zamienniki-skladnikow).",
  },
};
