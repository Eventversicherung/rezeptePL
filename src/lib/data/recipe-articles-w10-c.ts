/**
 * Wave 10 Paket C — FACTS for Pierogi jagody + Naleśniki dżem.
 * Isolated export `W10_FACTS_C` — Integrator E merges into recipe-articles.ts FACTS map:
 *   import { W10_FACTS_C } from "./recipe-articles-w10-c";
 *   Object.assign(FACTS, …, W10_FACTS_C);
 *
 * Gates: expand ≥400 words/locale; ≥4 markdown links/locale (≥2 recipe + ≥2 blog).
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
      "Pierogi z jagodami sind gefaltete Teigtaschen mit Heidelbeerfüllung — eigene eigene Rezeptseite unter `/rezepte/pierogi/jagody`, nicht die Überblicksseite des [Pierogi-Guides](/de/blog/pierogi-guide). Sie gehören zur Pierogi-Familie neben [Ruskie](/de/rezepte/pierogi/ruskie), [Fleisch](/de/rezepte/pierogi/fleisch) und [Kraut & Pilze](/de/rezepte/pierogi/kraut-pilze): oben wechseln, Teig bleibt verwandt. Klar getrennt von [Knedle ze śliwkami](/de/rezepte/knedle-sliwki): Knedle sind runde Obst-Knödel mit Kartoffelteig und Pflaume, keine halbmondförmigen Falten. Hier tragen Beeren und Zucker die Süße; es geht um „süße Pierogi“, nicht „Knödel mit Obst“.",
    originPl:
      "Pierogi z jagodami to sklejane pierogi z farszem jagodowym — własny Rezept pod `/rezepte/pierogi/jagody`, nie broad [przewodnika pierogi](/pl/blog/przewodnik-pierogi). Należą do rodziny obok [ruskich](/pl/rezepte/pierogi/ruskie), [mięsa](/pl/rezepte/pierogi/mieso) i [kapusty z grzybami](/pl/rezepte/pierogi/kapusta-grzyby): przełącz u góry. Jasno oddzielone od [knedli ze śliwkami](/pl/rezepte/knedle-sliwki): knedle to okrągłe knedle ziemniaczane ze śliwką, bez półksiężycowego lepienia. Tu jagody i cukier niosą słodycz; chodzi o „słodkie pierogi”, nie „knedle z owocem”.",
    shopDe:
      "Mehl 405/550, Ei, Wasser, Öl; Heidelbeeren frisch oder TK (gut abgetropft); Zucker, Speisestärke, Butter. Beeren oft im Supermarkt; dicke Konfitüre nur als Notvariante, nicht als Hauptgericht hier. Teigarbeit und Formen: [Pierogi-Teig](/de/blog/pierogi-teig) und [Pierogi-Formen](/de/blog/pierogi-formen). Batch-Logik: [Pierogi einfrieren](/de/blog/freezer-meal-prep). Überblick.: [Pierogi-Guide](/de/blog/pierogi-guide).",
    shopPl:
      "Mąka 405/550, jajko, woda, olej; jagody świeże lub mrożone (dobrze odsączone); cukier, skrobia, masło. Jagody często w markecie. Ciasto i foremki: [ciasto na pierogi](/pl/blog/ciasto-na-pierogi) i [foremki](/pl/blog/foremki-do-pierogow). Batch: [mrożenie pierogów](/pl/blog/mrozenie-pierogow). Przegląd.: [przewodnik pierogi](/pl/blog/przewodnik-pierogi).",
    techniqueDe:
      "Füllung muss trocken und kalt sein: Beeren abtropfen, mit Zucker und wenig Stärke binden — nicht schwemmen. Wenig Füllung pro Kreis, Nähte doppelt andrücken, in leicht siedendem Salzwasser garen. Dieselbe Naht-Logik wie bei [Ruskie](/de/rezepte/pierogi/ruskie), aber Feuchtigkeit kritischer. Teigruhe und Ausrollen: [Pierogi-Teig](/de/blog/pierogi-teig). Roh einzeln anfrieren wie im [Freezer-Guide](/de/blog/freezer-meal-prep) — Beeren-Charge getrennt beschriften, weil Saft beim Tauen kritischer ist.",
    techniquePl:
      "Farsz musi być suchy i zimny: jagody odsączyć, związać cukrem i odrobiną skrobi — bez zalewania. Mało farszu, mocno skleić, gotować w lekko wrzącej wodzie. Ta sama logika szwu co przy [ruskich](/pl/rezepte/pierogi/ruskie), ale wilgoć bardziej krytyczna. Odpoczynek ciasta: [ciasto na pierogi](/pl/blog/ciasto-na-pierogi). Mrożenie pojedynczo jak w [przewodniku mrożenia](/pl/blog/mrozenie-pierogow) — osobna etykieta, bo sok przy rozmrażaniu jest trudniejszy.",
    serveDe:
      "Heiß mit Butter und Zucker oder Puderzucker; optional Sahne. Als Dessert nach herzhaften [Fleisch-Pierogi](/de/rezepte/pierogi/fleisch) oder als alleiniger süßer Teller. Nicht mit [Knedle](/de/rezepte/knedle-sliwki) auf demselben Fokus vermischen — andere Form, anderer Intent. Kulturrahmen Teigfamilie: [Pierogi-Guide](/de/blog/pierogi-guide).",
    servePl:
      "Gorące z masłem i cukrem lub cukrem pudrem; opcjonalnie śmietana. Jako deser po [pierogach z mięsem](/pl/rezepte/pierogi/mieso) albo sam słodki talerz. Nie mieszać na talerzu z [knedlami](/pl/rezepte/knedle-sliwki). Ramy rodziny: [przewodnik pierogi](/pl/blog/przewodnik-pierogi).",
    diasporaDe:
      "In DE sind frische Heidelbeeren saisonal; TK-Beeren sind legitim, wenn gut abgetaut und abgetropft. Süße Pierogi belohnen Geduld beim Nähen — Kinder helfen gern mit Zucker. Technik und Batch: [Pierogi-Teig](/de/blog/pierogi-teig), [Freezer](/de/blog/freezer-meal-prep). Technik steht im Guide; Mengen und Schritte hier.",
    diasporaPl:
      "W DE świeże jagody są sezonowe; mrożone są OK, gdy dobrze rozmrożone i odsączone. Słodkie pierogi nagradzają cierpliwość przy sklejaniu. Technika: [ciasto](/pl/blog/ciasto-na-pierogi), [mrożenie](/pl/blog/mrozenie-pierogow). Technika w przewodniku; ilości i kroki tutaj.",
    mistakesDe:
      "Nasse Beeren ohne Abtropfen; zu viel Füllung; Form mit Knedle verwechseln (rund statt falten); Pfanne zu heiß oder zu kalt braten; zu wildes Kochen.",
    mistakesPl:
      "Mokre jagody bez odsączenia; za dużo farszu; pomylić formę z knedlami (okrągłe zamiast sklejanych); smażyć na zbyt gorącej lub zbyt zimnej patelni; zbyt gwałtowne gotowanie.",
    variantsDe:
      "Mit gemischten Beeren (Hausbrauch), mehr Zucker oder Zitronenschale. Switcher: [Ruskie](/de/rezepte/pierogi/ruskie) · [Fleisch](/de/rezepte/pierogi/fleisch) · [Kraut-Pilze](/de/rezepte/pierogi/kraut-pilze). Technik: [Pierogi-Teig](/de/blog/pierogi-teig) · [Pierogi-Guide](/de/blog/pierogi-guide) · [Freezer](/de/blog/freezer-meal-prep). Obst-Knödel-Nachbar (Abgrenzung): [Knedle śliwki](/de/rezepte/knedle-sliwki).",
    variantsPl:
      "Z mieszanką jagód, więcej cukru lub skórka cytryny. Przełącznik: [ruskie](/pl/rezepte/pierogi/ruskie) · [mięso](/pl/rezepte/pierogi/mieso) · [kapusta-grzyby](/pl/rezepte/pierogi/kapusta-grzyby). Technika: [ciasto](/pl/blog/ciasto-na-pierogi) · [przewodnik](/pl/blog/przewodnik-pierogi) · [mrożenie](/pl/blog/mrozenie-pierogow). Sąsiad knedli (rozróżnienie): [knedle ze śliwkami](/pl/rezepte/knedle-sliwki).",
  },
  "recipe-nalesniki-dzem": {
    dishDe: "Naleśniki mit Marmelade",
    dishPl: "Naleśniki z dżemem",
    vibeDe: "süß, schnell, kinderfreundlich und alltagstauglich",
    vibePl: "słodkie, szybkie, przyjazne dzieciom i na co dzień",
    originDe:
      "Naleśniki z dżemem sind dünne polnische Pfannkuchen mit Marmeladen- oder Powidła-Füllung — eigene Varianten-URL `/rezepte/nalesniki/dzem`, nicht die Quark-Variante unter [Naleśniki mit Twaróg](/de/rezepte/nalesniki/twarog). Technik erklärt der [Naleśniki-Guide](/de/blog/nalesniki-guide). Geschwister im Switcher: [Fleisch](/de/rezepte/nalesniki/fleisch) und [Spinat](/de/rezepte/nalesniki/szpinak). Twaróg als Zutat bleibt Lexikon-Artikel im [Twaróg-Guide](/de/blog/twarog-deutschland); hier nur als verwandte süße Linie. eigene Füllung und eigene Mengen.",
    originPl:
      "Naleśniki z dżemem to cienkie placki z farszem dżemowym lub powidłami — własny URL `/rezepte/nalesniki/dzem`, nie wariant z twarogiem pod [naleśnikami z twarogiem](/pl/rezepte/nalesniki/twarog). Technika: [przewodnik naleśników](/pl/blog/nalesniki-przewodnik). Rodzeństwo: [mięso](/pl/rezepte/nalesniki/mieso) i [szpinak](/pl/rezepte/nalesniki/szpinak). Twaróg jako składnik zostaje w [poradniku twarogu](/pl/blog/twarog-w-niemczech); tu tylko sąsiedztwo, osobny farsz i osobne ilości.",
    shopDe:
      "Milch, Mehl, Eier, Butter; dicker Dżem oder Powidła (Polenladen oft besser), Puderzucker. Wenn Powidła fehlen: [Ersatzprodukte in DE](/de/blog/ersatzprodukte-de). Teig und Wenden: [Naleśniki-Guide](/de/blog/nalesniki-guide). Quark-Kontext: [Twaróg](/de/blog/twarog-deutschland) — Mengen für Quark bleiben bei der Twaróg-Variante. Anlass: (süßes Fett/Süßes): [Tłusty Czwartek](/de/blog/tlusty-czwartek).",
    shopPl:
      "Mleko, mąka, jajka, masło; gęsty dżem lub powidła (sklep polski często lepszy), cukier puder. Gdy brak powideł: [zamienniki składników](/pl/blog/zamienniki-skladnikow). Ciasto: [nalesniki-przewodnik](/pl/blog/nalesniki-przewodnik). Twaróg [twaróg w Niemczech](/pl/blog/twarog-w-niemczech). Okazja: [Tłusty Czwartek](/pl/blog/tlusty-czwartek).",
    techniqueDe:
      "Teig dünn und ruhen lassen — dieselbe Plattform wie bei [Twaróg-Naleśniki](/de/rezepte/nalesniki/twarog), aber Füllung ist Dżem: dick streichen, Rand frei, fest rollen, optional in Butter goldbraun. Zu dünner Dżem läuft; zu viel Füllung platzt. Details zum Braten: [Naleśniki-Guide](/de/blog/nalesniki-guide). Herzhafte Paralleltechnik: [Spinat](/de/rezepte/nalesniki/szpinak) — andere Feuchtigkeitsarbeit, gleiches Wenden.",
    techniquePl:
      "Ciasto cienkie i odpoczęte — ta sama platforma co przy [twarogu](/pl/rezepte/nalesniki/twarog), ale farsz to dżem: gęsto smarować, margines, mocno zwinąć, opcjonalnie masło. Zbyt rzadki dżem wypływa. Smażenie: [przewodnik](/pl/blog/nalesniki-przewodnik). Równoległa technika wytrawna: [szpinak](/pl/rezepte/nalesniki/szpinak).",
    serveDe:
      "Warm mit Puderzucker; optional Śmietana oder Beeren. Schneller Nachmittagsteller — nicht die Quark-Variante. Switcher zu [Fleisch](/de/rezepte/nalesniki/fleisch) wenn der Tisch salzig will. Guide für Teigfragen: [Naleśniki-Guide](/de/blog/nalesniki-guide). Festtags-Kontext: [Tłusty Czwartek](/de/blog/tlusty-czwartek).",
    servePl:
      "Ciepłe z cukrem pudrem; opcjonalnie śmietana lub owoce. Szybki talerz — nie wariant z twarogiem. Przełącz na [mięso](/pl/rezepte/nalesniki/mieso) gdy stół chce słono. Ciasto: [przewodnik](/pl/blog/nalesniki-przewodnik). Okazja [Tłusty Czwartek](/pl/blog/tlusty-czwartek).",
    diasporaDe:
      "Dicke Supermarkt-Marmelade funktioniert; Powidła aus dem Polenladen sind Upgrade, kein Muss. Kinderportionen kleiner rollen. Einkaufsalternativen: [Ersatzprodukte](/de/blog/ersatzprodukte-de). Technik: [Naleśniki-Guide](/de/blog/nalesniki-guide).",
    diasporaPl:
      "Gęsty dżem z marketu działa; powidła ze sklepu polskiego to upgrade, nie obowiązek. Zamienniki: [zamienniki](/pl/blog/zamienniki-skladnikow). Technika: [przewodnik naleśników](/pl/blog/nalesniki-przewodnik).",
    mistakesDe:
      "Füllung mit wässrigem Quark statt Dżem wählen; zu dünner Dżem; zu dicke Pfannkuchen; Pfanne zu heiß oder zu kalt braten.",
    mistakesPl:
      "wybrać wodnisty twaróg zamiast gęstego dżemu; zbyt rzadki dżem; zbyt grube placki; smażyć na zbyt gorącej lub zbyt zimnej patelni.",
    variantsDe:
      "Powidła, Aprikosen- oder Erdbeermarmelade; ohne zweites Braten leichter. Switcher: [Twaróg](/de/rezepte/nalesniki/twarog) · [Fleisch](/de/rezepte/nalesniki/fleisch) · [Spinat](/de/rezepte/nalesniki/szpinak). Technik: [Naleśniki-Guide](/de/blog/nalesniki-guide). Zutaten-Nachbar: [Twaróg](/de/blog/twarog-deutschland). Einkauf: [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Powidła, morela lub truskawka; bez drugiego smażenia lżej. Przełącznik: [twaróg](/pl/rezepte/nalesniki/twarog) · [mięso](/pl/rezepte/nalesniki/mieso) · [szpinak](/pl/rezepte/nalesniki/szpinak). Technika: [przewodnik](/pl/blog/nalesniki-przewodnik). Sąsiad składnika: [twaróg](/pl/blog/twarog-w-niemczech). Zakupy: [zamienniki](/pl/blog/zamienniki-skladnikow).",
  },
};
