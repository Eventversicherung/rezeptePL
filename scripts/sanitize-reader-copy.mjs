#!/usr/bin/env node
/**
 * One-shot + reusable sanitizer: strip SEO/internal jargon from
 * user-facing recipe article FACTS and seed tip/description strings.
 *
 * Usage: node scripts/sanitize-reader-copy.mjs [--write]
 * Default is dry-run (report only). --write mutates source files.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const write = process.argv.includes("--write");

const GLOBS = [
  "src/lib/data/recipe-articles.ts",
  "src/lib/data/recipe-articles-w8-a.ts",
  "src/lib/data/recipe-articles-w8-b.ts",
  "src/lib/data/recipe-articles-w8-c.ts",
  "src/lib/data/recipe-articles-w8-d.ts",
  "src/lib/data/recipe-articles-w8-d-retrofit.ts",
  "src/lib/data/recipe-articles-w9-a.ts",
  "src/lib/data/recipe-articles-w9-b.ts",
  "src/lib/data/recipe-articles-w9-c.ts",
  "src/lib/data/recipe-articles-w9-d.ts",
  "src/lib/data/recipe-articles-w9-d-retrofit.ts",
  "src/lib/data/recipe-articles-w10-a.ts",
  "src/lib/data/recipe-articles-w10-b.ts",
  "src/lib/data/recipe-articles-w10-c.ts",
  "src/lib/data/recipe-articles-w10-d.ts",
  "src/lib/data/recipe-articles-w10-d-retrofit.ts",
  "src/lib/data/recipe-articles-w11-d.ts",
  "src/lib/data/recipe-articles-w12-a.ts",
  "src/lib/data/recipe-articles-w12-b.ts",
  "src/lib/data/recipe-articles-w12-c.ts",
  "src/lib/data/recipe-articles-w12-d.ts",
  "src/lib/data/recipe-articles-w13-a.ts",
  "src/lib/data/recipe-articles-w13-b.ts",
  "src/lib/data/recipe-articles-w13-c.ts",
  "src/lib/data/recipe-articles-w13-d.ts",
  "src/lib/data/recipe-articles-w14-a.ts",
  "src/lib/data/recipe-articles-w14-b.ts",
  "src/lib/data/recipe-articles-w14-c.ts",
  "src/lib/data/recipe-articles-w14-d.ts",
];

function listArticleFactFiles() {
  const dir = path.join(root, "src/lib/data");
  return fs
    .readdirSync(dir)
    .filter((f) => f.startsWith("recipe-articles") && f.endsWith(".ts"))
    .map((f) => path.join("src/lib/data", f));
}

function listSeedRecipeFiles() {
  const dir = path.join(root, "src/lib/data");
  return fs
    .readdirSync(dir)
    .filter((f) => f.startsWith("seed-recipes") && f.endsWith(".ts"))
    .map((f) => path.join("src/lib/data", f));
}

/** Phrase → natural cooking/reader language (order matters). */
const REPLACEMENTS = [
  // Full SEO-steal mistake clauses → real cooking tips
  [
    /Twaróg-Primary im Title stehlen;\s*/gi,
    "Füllung mit wässrigem Quark statt Dżem wählen; ",
  ],
  [
    /Guide als Cook-Owner beanspruchen;?\s*/gi,
    "Pfanne zu heiß oder zu kalt braten; ",
  ],
  [
    /Knedle-Primary stehlen;\s*/gi,
    "Form mit Knedle verwechseln (rund statt falten); ",
  ],
  [
    /kradzież primary twarogu w title;\s*/gi,
    "wybrać wodnisty twaróg zamiast gęstego dżemu; ",
  ],
  [
    /roszczenie przewodnika jako cook-ownera;?\s*/gi,
    "smażyć na zbyt gorącej lub zbyt zimnej patelni; ",
  ],
  [
    /kradzież primary knedli;\s*/gi,
    "pomylić formę z knedlami (okrągłe zamiast sklejanych); ",
  ],
  [
    /Ownership (vom|von|des|der|vom)[^.!—;]*stehlen[^.!—;]*[.!—;]?\s*/gi,
    "Mengen und Schritte nicht mit dem verlinkten Nachbarn vermischen. ",
  ],
  [
    /Kradzież ownership[^.!—;]*[.!—;]?\s*/gi,
    "Nie mieszać ilości i kroków z sąsiednim przepisem. ",
  ],
  [
    /Primary[^.!—;]{0,40}stehlen[^.!—;]*[.!—;]?\s*/gi,
    "Hitze, Feuchtigkeit oder Garzeit falsch einschätzen. ",
  ],
  [
    /Overview-Primary[^.!—;]*[.!—;]?\s*/gi,
    "",
  ],
  [
    /Speiseplan-Primary stehlen statt/gi,
    "Menüplan mit dem Rezept verwechseln statt",
  ],
  [
    /Primary „[^"]+" im Title stehlen,?\s*/gi,
    "mit dem panierten Schnitzel verwechseln, ",
  ],
  [
    /Primary „[^"]+" oder Hefeteig zu stehlen/gi,
    "Hefeteig oder eine andere Backlinie zu vermischen",
  ],
  [
    /ohne Primary[^.!—;]{0,30}zu stehlen/gi,
    "ohne die andere Backlinie zu vermischen",
  ],
  [
    /ohne Makowiec-Primary zu stehlen/gi,
    "ohne die Mohnrolle zu vermischen",
  ],
  [
    /ohne Cook-Steal\.?/gi,
    ".",
  ],
  [
    /ohne Primary-Diebstahl:?\s*/gi,
    "",
  ],
  [
    /ohne Primary-Steal\.?/gi,
    ".",
  ],
  [
    /kein Primary-Steal\.?/gi,
    "eigene Füllung und eigene Mengen.",
  ],
  [
    /bez kradzieży primary\.?/gi,
    "osobny farsz i osobne ilości.",
  ],
  [
    /bez kradzieży cook\.?/gi,
    ".",
  ],
  [
    /bez kradzieży primary makowca/gi,
    "bez mieszania z makowcem",
  ],
  [
    /Überblick ohne Cook-Steal:?\s*/gi,
    "Überblick: ",
  ],
  [
    /Przegląd bez kradzieży cook:?\s*/gi,
    "Przegląd: ",
  ],
  [
    /Kultur ohne Primary-Diebstahl:?\s*/gi,
    "Kulturrahmen: ",
  ],
  [
    /Overview ohne Primary-Diebstahl:?\s*/gi,
    "Überblick: ",
  ],

  // Identity / ownership jargon → reader language
  [/Cook-Intent-Money-Page für/gi, "Rezept für"],
  [/Cook-Intent für (die|den|das|einen|eine|ein)\s*/gi, "Rezept für $1 "],
  [/Cook-Intent für/gi, "Rezept für"],
  [/ist der Cook-Intent für/gi, "ist"],
  [/to intent cook:/gi, "to przepis:"],
  [/to intent cook /gi, "to "],
  [/intent cook:/gi, "przepis:"],
  [/intent cook /gi, ""],
  [/Cook-Primary unter/gi, "eigene Rezeptseite unter"],
  [/Cook-Primary/gi, "Rezept"],
  [/cook-primary/gi, "przepis"],
  [/Cook-Owner/gi, "Rezeptseite"],
  [/cook-owner/gi, "strona przepisu"],
  [/Cook-Intent/gi, "Rezept"],
  [/cook-intent/gi, "przepis"],
  [/Broad-Owner der Technik bleibt/gi, "Technik erklärt"],
  [/Broad-Owner/gi, "Überblicksseite"],
  [/broad-ownerem/gi, "przeglądem"],
  [/broad-owner/gi, "przegląd"],
  [/Broad-Seite/gi, "Überblicksseite"],
  [/Broad bleibt Guide, Cook bleibt diese URL\.?/gi, "Technik steht im Guide; Mengen und Schritte hier."],
  [/Broad zostaje przy przewodniku, cook przy tym URL\.?/gi, "Technika w przewodniku; ilości i kroki tutaj."],
  [/Broad techniki:/gi, "Technika:"],
  [/Money Page/gi, "Rezeptseite"],
  [/money-page/gi, "strona przepisu"],
  [/money page/gi, "strona przepisu"],
  [/Anlass-Owner bleibt/gi, "Menü-Rahmen bleibt bei"],
  [/Anlass-Owner/gi, "Menü-Artikel"],
  [/Kultur-Owner bleibt/gi, "Kulturrahmen bleibt bei"],
  [/Kultur-Owner/gi, "Kultur-Guide"],
  [/Recipe-Owner/gi, "Rezeptseite"],
  [/Zutaten-Owner/gi, "Zutaten-Guide"],
  [/Lexikon-Owner/gi, "Lexikon-Artikel"],
  [/Technik-Owner/gi, "Technik-Guide"],
  [/Suppen-Primary/gi, "Suppenrezept"],
  [/Schmorfleisch-Primary/gi, "Schmorfleisch-Rezept"],
  [/Schmor-Primary/gi, "Schmor-Rezept"],
  [/Arten-Primary/gi, "Arten-Übersicht"],
  [/Types-Primary/gi, "Typen-Übersicht"],
  [/Primary-KW/gi, "Fokus"],
  [/Primary Keywords/gi, "Fokus"],
  [/Primary Keyword/gi, "Fokus"],
  [/Primary-Kämpfe/gi, "getrennte Gerichte"],
  [/Composed Primary/gi, "zusammengesetzter Teller"],
  [/Primary composed/gi, "talerz złożony"],
  [/anderer Primary/gi, "anderes Gericht"],
  [/anderen Primary/gi, "anderes Gericht"],
  [/eigener Primary/gi, "eigene Variante"],
  [/eigene Primary/gi, "eigene Variante"],
  [/osobny primary/gi, "osobny wariant"],
  [/als Primary/gi, "als Hauptgericht hier"],
  [/nicht als Primary/gi, "nicht als Ersatz für die Beerenfüllung"],
  [/Primary bleibt dort/gi, "das Rezept dafür findest du dort"],
  [/Primary bleibt/gi, "Fokus bleibt"],
  [/Primary zostaje/gi, "fokus zostaje"],
  [/Primary hier nur/gi, "hier geht es nur um"],
  [/Primary tu tylko/gi, "tu chodzi tylko o"],
  [/Primary hier ist/gi, "Hier geht es um"],
  [/Primary tutaj to/gi, "Tu chodzi o"],
  [/Primary hier:/gi, "Hier:"],
  [/Primary tu:/gi, "Tu:"],
  [/Primary-KW bleibt/gi, "Fokus bleibt"],
  [/≠ Twaróg-Primary/gi, "≠ Twaróg-Variante"],
  [/nicht die Twaróg-Primary unter/gi, "nicht die Quark-Variante unter"],
  [/nie primary twarogu pod/gi, "nie wariant z twarogiem pod"],
  [/Piernik-Primary/gi, "Piernik-Rezept"],
  [/Kiszenie-Primary/gi, "Kiszenie-Thema"],
  [/„Salat“-Primary/gi, "Salat-Rezept"],
  [/Faworki- oder Tłusty-Primary im Title stehlen/gi, "mit Faworki oder dem Feiertagsartikel verwechseln"],
  [/Tłusty-Primary/gi, "Tłusty-Czwartek-Artikel"],
  [/Kiełbasa-Arten-Primary/gi, "Kiełbasa-Arten-Übersicht"],
  [/Erbsen-Primary/gi, "Erbsen-Rezept"],
  [/primary grochu/gi, "przepis na groch"],
  [/als „biała“ verwenden\. Stark/gi, "als „biała“ verwenden. Stark"],
  [
    /Mit \[Kaszanka\]\(([^)]+)\) oder dem Arten-Primary des \[Kiełbasa-Lexikons\]\(([^)]+)\) verwechseln/gi,
    "Mit [Kaszanka]($1) oder dunkler Grillwurst aus dem [Kiełbasa-Lexikon]($2) verwechseln",
  ],
  [
    /Ownership bleibt: Cook hier, Lexikon dort\.?/gi,
    "Mengen und Hitze hier; Arten und Qualität im Lexikon.",
  ],
  [
    /Ownership von \[Żurek\]\(([^)]+)\) oder \[Wielkanoc\]\(([^)]+)\) stehlen — nein: hier Cook, dort Suppe bzw\. Anlass\.?/gi,
    "Nicht mit [Żurek]($1) oder dem [Wielkanoc-Speiseplan]($2) vermischen: hier die Wurst, dort Suppe bzw. Menü.",
  ],
  [
    /hier Cook, dort Suppe bzw\. Anlass\.?/gi,
    "hier die Wurst, dort Suppe bzw. Menü.",
  ],
  [/Owner der Spirale/gi, "Rezept für die Mohnrolle"],
  [/Owner der Mohnrolle/gi, "Rezept für die Mohnrolle"],
  [/Owner der Apfel-Hefe/gi, "Rezept für die Apfel-Hefe"],
  [/Owner der Teigtaschen/gi, "Rezept für die Teigtaschen"],
  [/Owner der Suppe/gi, "Rezept für die Suppe"],
  [/bleibt Owner/gi, "bleibt das passende Rezept"],
  [/bleiben Owner/gi, "bleiben die Leitartikel"],
  [/zostaje ownerem/gi, "zostaje przepisem na"],
  [/zostają ownerem/gi, "zostają przepisem na"],
  [/zostaje ownerem okazji/gi, "zostaje artykułem o okazji"],
  [/zostaje owner kultury/gi, "zostaje przewodnikiem kulturowym"],
  [/owner kultury zostaje/gi, "przewodnik kulturowy zostaje"],
  [/owner menu zostaje/gi, "artykuł menu zostaje"],
  [/Owner „[^"]+"/gi, "Rezept"],
  [/Owner für „[^"]+"/gi, "Rezeptseite für"],
  [/Owner für/gi, "Rezeptseite für"],
  [/owns nur/gi, "deckt nur"],
  [/owns nur das Gericht/gi, "deckt nur dieses Gericht"],
  [/owną flaki/gi, "to przepis na flaki"],
  [/flaki owną flaki/gi, "flaki to flaki"],
  [/diese Money Page owns nur das Gericht/gi, "dieses Rezept deckt nur dieses Gericht"],
  [/ta money page owns tylko danie/gi, "ten przepis dotyczy tylko tego dania"],
  [/Menü-Owner/gi, "Menü-Artikel"],
  [/ownerem menu/gi, "artykułem menu"],
  [/ownerem leksykonu/gi, "hasłem w leksykonie"],
  [/ownerem klarownego wywaru/gi, "przepisem na klarowny wywar"],
  [/ownerem spirali/gi, "przepisem na spiralę"],
  [/ownerem rolady/gi, "przepisem na roladę"],
  [/owner składnika/gi, "przewodnikiem po składniku"],
  [/zostaje owner składnika/gi, "zostaje przewodnikiem po składniku"],
  [/Cook bleibt diese URL\.?/gi, "Mengen und Schritte stehen hier."],
  [/cook przy tej URL\.?/gi, "ilości i kroki są tutaj."],
  [/cook-primary przy tej URL\.?/gi, "ilości i kroki są tutaj."],
  [/Cook-Primary diese URL\.?/gi, "Mengen und Schritte stehen hier."],
  [/Cook-Primary dieses Rezept\.?/gi, "Mengen und Schritte stehen in diesem Rezept."],
  [/hier nur Cook-Primary/gi, "hier nur das Rezept"],
  [/hier nur das Gericht\.?/gi, "hier nur das Gericht."],
  [/hier nur Mengen und Schritte/gi, "hier nur Mengen und Schritte"],
  [/tu tylko ilości i kroki/gi, "tu tylko ilości i kroki"],
  [/tu tylko danie/gi, "tu tylko danie"],
  [/descriptive Nachbarschaft/gi, "Nachbarschaft"],
  [/descriptiv(?:e|en|er|es)?\s+/gi, ""],
  [/opisowo\s+/gi, ""],
  [/Topical Authority/gi, "Zusammenhang in der Küche"],
  [/topical authority/gi, "spójność kuchni"],
  [/SEO und Titel bleiben eng:[^.]+?\./gi, "Titel und Text bleiben beim konkreten Gericht."],
  [/SEO i tytuł zostają wąskie:[^.]+?\./gi, "Tytuł i tekst zostają przy konkretnym daniu."],
  [/Kein generisches „beste Apple Pie“-SEO: eng bei Szarlotka bleiben\.?/gi, "Eng bei Szarlotka bleiben, nicht bei generischem Apfelkuchen."],
  [/Bez generycznego SEO „best apple pie”: wąsko przy szarlotce\.?/gi, "Wąsko przy szarlotce, nie przy generycznym cieście jabłkowym."],
  [/generisches „beste Tomatensuppe“-SEO;?\s*/gi, "zu generische Tomatensuppe ohne polnischen Charakter; "],
  [/Generisches Apple-Pie-SEO statt Szarlotka\.?/gi, "Generischen Apfelkuchen statt Szarlotka backen."],
  [/kein Steal von Barszcz\/Żurek-Primary\.?/gi, "nicht mit Barszcz oder Żurek vermischen."],
  [/nicht „das“ Rezept als Primary\.?/gi, "nicht als einzig gültige Form verkaufen."],
  [/Hefe oder Ofenschritt als Primary erfinden\.?/gi, "Hefeteig oder Ofenschritt erfinden, wo keines hingehört."],
  [/nicht auf demselben Primary vermischen/gi, "nicht auf demselben Teller vermischen"],
  [/Nie mieszać primary z/gi, "Nie mieszać na talerzu z"],
  [/Form und Technik trennen die Primaries:/gi, "Form und Technik trennen die Gerichte:"],
  [/Forma i technika dzielą primary:/gi, "Forma i technika dzielą dania:"],
  [/enge Nudel-Cook-Primary/gi, "enge Nudel-Rezept"],
  [/waski cook-primary klusek/gi, "wąski przepis na kluski"],
  [/Primary „Mohnkuchen backen“/gi, "das Thema Mohnkuchen backen"],
  [/Primary „polnisches Backen“/gi, "das Thema polnisches Backen"],
  [/Primary „Schabowy“/gi, "das Thema Schabowy"],
  [/Primary „Schab pieczony[^.]*“/gi, "der Fokus „Schab pieczony"],
  [/Primary zostaje „schab pieczony”, nie „schabowy”/gi, "fokus zostaje „schab pieczony”, nie „schabowy”"],
  [/Primary-KW bleibt „Schab pieczony \/ Schweinebraten polnisch Ofen“, nicht „Schabowy”/gi, "Fokus bleibt Ofenschweinebraten, nicht paniertes Schabowy"],
  [/der Intent ist/gi, "es geht um"],
  [/intent to/gi, "chodzi o"],
  [/Intent „süße Pierogi“/gi, "Thema „süße Pierogi“"],
  [/Intent „polnischer Apfelkuchen \/ Szarlotka“/gi, "Thema „polnischer Apfelkuchen / Szarlotka“"],
  [/Cook-Intent „Zupa pomidorowa“/gi, "Thema „Zupa pomidorowa“"],
  [/cook-intent „zupa pomidorowa”/gi, "temat „zupa pomidorowa”"],
  [/Cook-Intent „Flaki \/ Kuttelsuppe“/gi, "Thema „Flaki / Kuttelsuppe“"],
  [/cook-intent „flaki”/gi, "temat „flaki”"],
  [/Ogórkowa-Intent stehlen;?\s*/gi, "mit Ogórkowa verwechseln; "],
  [/nicht generisches „beste Tomatensuppe“\.?/gi, "nicht eine belanglose Tomatensuppe."],
  [/nie generyczne „najlepsza zupa pomidorowa”\.?/gi, "nie byle jaka zupa pomidorowa."],
  [/Pillar bleibt Broad-Owner, hier nur/gi, "Überblick bleibt im Guide; hier nur"],
  [/filar zostaje broad-ownerem, tu tylko/gi, "przegląd zostaje w guide; tu tylko"],
  [/Landschaft bleibt beim Pillar:/gi, "Überblick:"],
  [/Krajobraz zostaje w pillarze:/gi, "Przegląd:"],
  [/Pillar:/gi, "Überblick:"],
  [/pillarze:/gi, "przeglądzie:"],
  [/eigene Money Page, eigene Primary Keywords\.?/gi, "eigene Rezeptseite mit eigenen Mengen und Schritten."],
  [/Uszka Owner der Teigtaschen\.?/gi, "Uszka haben ihre eigene Rezeptseite."],
  [/Barszcz bleibt Owner der Suppe; /gi, "Barszcz bleibt das Suppenrezept; "],
  [/Makowiec bleibt Mohn-Rollenkuchen; Sernik bleibt Käsekuchen\. Makowiec-Technik hilft bei Ofengeduld und Festtagsplanung, nicht als Rezept-Owner\.?/gi, "Makowiec bleibt die Mohnrolle; Sernik bleibt der Käsekuchen. Der Makowiec-Technik-Guide hilft bei Ofengeduld und Festtagsplanung."],
  [/Makowiec bleibt Mohnrolle — eigener Rezept-Owner\.?/gi, "Makowiec bleibt die Mohnrolle — anderes Rezept."],
  [/Wigilia-Speiseplan bleibt Owner für Menüreihenfolge und Anlass; hier bleibt der Koch-Intent „Karp Rezept“\.?/gi, "Der Wigilia-Speiseplan ordnet Menü und Anlass; hier geht es ums Karpfen-Rezept."],
  [/Wigilia-Speiseplan bleibt Menü-Owner; Karp bleibt warmer Fisch\.?/gi, "Der Wigilia-Speiseplan bleibt der Menü-Rahmen; Karp bleibt der warme Fisch."],
  [/menu wigilijne zostaje ownerem menu; karp zostaje rybą ciepłą\.?/gi, "menu wigilijne zostaje ramą menu; karp zostaje rybą ciepłą."],
  [/Owner „śledź przepis”; /gi, ""],
  [/andere Feuchtigkeitsarbeit, gleiches Wenden\.?/gi, "andere Feuchtigkeitsarbeit, gleiches Wenden."],
  [/nicht der Twaróg-Cook-Owner\.?/gi, "nicht die Quark-Variante."],
  [/nie cook-owner twarogu\.?/gi, "nie wariant z twarogiem."],
  [/Mengen und Primary bleiben bei der Twaróg-Variante\.?/gi, "Mengen für Quark bleiben bei der Twaróg-Variante."],
  [/Twaróg bleibt Zutaten-Owner:/gi, "Twaróg-Einkauf erklärt:"],
  [/hier nur descriptive Nachbarschaft\.?/gi, "hier nur als verwandte süße Linie."],
  [/hier nur Nachbarschaft\.?/gi, "hier nur als verwandte süße Linie."],
  [/— eigener Primary\.?/gi, "— eigene Variante."],
  [/— osobny primary\.?/gi, "— osobny wariant."],
  [/Primary hier nur Dżem\/Marmelade\. Broad-Owner:/gi, "Hier geht es um Dżem/Marmelade. Technik:"],
  [/Broad-owner:/gi, "Technika:"],
  [/Dieselbe dünne Plattform wie/gi, "Dieselbe dünne Teigplattform wie"],
  [/Primary „Kiszenie“ bleibt dort\.?/gi, "das Thema Kiszenie bleibt im Guide."],
  [/Primary „Kiszenie“ bleibt dort/gi, "das Thema Kiszenie bleibt im Guide"],
  [/Mit Bigos verwechseln oder Kiszenie-Primary stehlen\.?/gi, "Mit Bigos verwechseln oder den Kiszenie-Guide als Beilagenrezept missverstehen."],
  [/Mit dem Kiełbasa-Arten-Primary verwechseln oder Types-Guide umschreiben\.?/gi, "Mit der Kiełbasa-Arten-Übersicht verwechseln oder Blutwurst mit Grillwurst tauschen."],
  [/Flaki oder andere HOLD-Gerichte hier miterfinden — nein\.?/gi, "Keine anderen Suppen hier miterfinden."],
  [/Ownership bleibt: Mengen und Hitze hier; Arten und Qualität im Lexikon\.?/gi, "Mengen und Hitze hier; Arten und Qualität im Lexikon."],
  [/andere Primary\.?/gi, "anderes Gericht."],
  [/Composed-Teller nicht hier stehlen:/gi, "Zusammengesetzter Teller separat:"],
  [/kein Schweine-Schmor-Primary/gi, "kein Schweine-Schmorgericht"],
  [/nicht das Schmorfleisch-Primary/gi, "nicht das Schmorfleisch-Rezept"],
  [/anderer Cook-Primary als Packungsnudeln/gi, "andere frische Nudel als Packungsnudeln"],
  [/anderer Primary, andere Technik/gi, "anderes Rezept, andere Technik"],
  [/ohne Ownership der Einzelgerichte zu stehlen/gi, "ohne die Einzelgerichte zu vermischen"],
  [/bez kradzieży ownership osobnych dań/gi, "bez mieszania osobnych dań"],
  [/Ein Composed-Teller statt zwei getrennter getrennte Gerichte\.?/gi, "Ein zusammengesetzter Teller statt zwei getrennter Gerichte."],
  [/Ein Composed-Teller statt zwei getrennter Primary-Kämpfe\.?/gi, "Ein zusammengesetzter Teller statt zwei getrennter Gerichte."],
  [/Primary-Kämpfe/gi, "getrennte Gerichte"],
  [/composed Primary/gi, "zusammengesetzter Teller"],
  [/descriptiv,/gi, ""],
  [/\(descriptiv, Fokus bleibt Pasta\+Quark\)/gi, "(Fokus: Pasta mit Quark)"],
  [/\(descriptiv, Primary bleibt Pasta\+Quark\)/gi, "(Fokus: Pasta mit Quark)"],
  [/Primary bleibt Pasta\+Quark/gi, "Fokus: Pasta mit Quark"],
  [/Primary bleibt Dill-Linie auf dieser URL/gi, "Fokus bleibt die Dill-Sahne-Linie"],
  [/Primary bleibt Pomidorowa/gi, "Fokus bleibt Pomidorowa"],
  [/Primary bleibt dort/gi, "das Rezept dafür findest du dort"],
  [/Barszcz- oder Naleśniki-Primary-KW stehlen\.?/gi, "Füllung zu nass oder Pfannkuchen zu dick lassen."],
  [/Karp- oder Speiseplan-Primary stehlen\.?/gi, "Fisch zu trocken backen oder mit dem Menüplan vermischen."],
  [/Mit Racuchy verwechseln \(Pfanne\/Hefe\)\. Mit Piernik oder Sernik Primary stehlen\.?/gi, "Mit Racuchy verwechseln (Pfanne/Hefe). Mit Piernik oder Sernik vermischen."],
  [/Makowiec- oder Babka-Primary stehlen \(Hefe\/Mohn als Titel\);?\s*/gi, "mit Makowiec oder Babka vermischen; "],
  [/Panieren-Guide nicht stehlen\.?/gi, "Panieren-Guide nur für panierte Schnitzel nutzen."],
  [/Wer denselben Tag paniert, bleibt beim Schabowy als eigene Money Page\.?/gi, "Wer denselben Tag paniert, nimmt das Schabowy-Rezept."],
  [/Wer denselben Tag paniert, bleibt beim Schabowy als eigene Rezeptseite\.?/gi, "Wer denselben Tag paniert, nimmt das Schabowy-Rezept."],
  [/SEO-Text/gi, "langer Text"],
  [/ściany SEO-tekstu/gi, "ściany długiego tekstu"],
  [/SEO-Hinweis in Klartext/gi, "Kurz vor dem Kochen"],
  [/Budowanie topical authority to też połączenia/gi, "Warto też łączyć"],
  [/Zum Aufbau echter Zusammenhang in der Küche gehören auch Verbindungen/gi, "Zur Küche gehören auch Verbindungen"],
  [/Zum Aufbau echter Topical Authority gehören auch Verbindungen/gi, "Zur Küche gehören auch Verbindungen"],

  // Leftover bare tokens (after phrase cleanup)
  [/\bPrimary\b/g, "Fokus"],
  [/\bprimary\b/g, "fokus"],
  [/\bOwnership\b/g, "Abgrenzung"],
  [/\bownership\b/g, "rozróżnienie"],
  [/\bOwner-URL\b/g, "Rezept-URL"],
  [/\bCook-Owner\b/g, "Rezeptseite"],
  [/\bcannibali[sz]ation\b/gi, "Vermischung"],
  [/\bcannibal\b/gi, "Vermischung"],
  [/\bSEO\b/g, ""],
  [/Fokus Keywords/g, "Fokus"],
  [/Fokus Keyword/g, "Fokus"],
  [/  +/g, " "],
  [/ \./g, "."],
  [/ ,/g, ","],
  [/;;+/g, ";"],
  [/— —/g, "—"],
  [/\.\./g, "."],
  [/\. \./g, ". "],
];

function sanitizeString(input) {
  let s = input;
  for (const [re, to] of REPLACEMENTS) {
    s = s.replace(re, to);
  }
  // Collapse awkward leftovers from deletions
  s = s
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([,.;:!])/g, "$1")
    .replace(/([.!?])\s*\./g, "$1")
    .replace(/\s+—\s*\./g, ".")
    .replace(/:\s*\./g, ".")
    .replace(/\(\s*\)/g, "")
    .replace(/\s+;/g, ";")
    .replace(/^;\s*/g, "")
    .replace(/;\s*;/g, ";")
    .trim();
  return s;
}

/** Sanitize only double-quoted string literals (user-facing copy), not comments. */
function sanitizeFileContent(source) {
  let changed = 0;
  const out = source.replace(/"((?:\\.|[^"\\])*)"/g, (full, inner) => {
    // Skip obvious non-copy: ids, paths without spaces, import-like
    if (
      /^(recipe-|family-|post-|product-)/.test(inner) ||
      (/^[a-z0-9_./-]+$/i.test(inner) && !/\s/.test(inner))
    ) {
      return full;
    }
    const next = sanitizeString(inner);
    if (next !== inner) changed += 1;
    // Escape for TS string literal
    const escaped = next
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"')
      .replace(/\n/g, "\\n");
    return `"${escaped}"`;
  });
  return { out, changed };
}

const BANNED =
  /\b(Primary|SEO-Hinweis|Cook-Owner|Owner-URL|cannibal|Ownership|Cook-Intent|Broad-Owner|Money Page|Cook-Primary|Primary-KW)\b/i;

function main() {
  const files = [
    ...new Set([...GLOBS, ...listArticleFactFiles(), ...listSeedRecipeFiles()]),
  ];
  let totalChanged = 0;
  let filesTouched = 0;
  const remaining = [];

  for (const rel of files) {
    const abs = path.join(root, rel);
    if (!fs.existsSync(abs)) continue;
    const before = fs.readFileSync(abs, "utf8");
    const { out, changed } = sanitizeFileContent(before);
    if (changed > 0) {
      filesTouched += 1;
      totalChanged += changed;
      if (write) fs.writeFileSync(abs, out);
      console.log(`${write ? "WRITE" : "DRY"} ${rel}: ${changed} strings`);
    }
    // Check user-facing strings still banned (ignore comment lines)
    for (const line of out.split("\n")) {
      const trimmed = line.trim();
      if (trimmed.startsWith("*") || trimmed.startsWith("//")) continue;
      if (!trimmed.includes('"')) continue;
      if (BANNED.test(trimmed) && /"(?:\\.|[^"\\])*Primary|(?:Cook-Owner|SEO-Hinweis|Owner-URL|cannibal|Ownership|Cook-Intent|Broad-Owner|Money Page|Cook-Primary)/i.test(trimmed)) {
        remaining.push(`${rel}: ${trimmed.slice(0, 120)}`);
      }
    }
  }

  console.log(
    `\n${write ? "Wrote" : "Would change"} ${totalChanged} strings in ${filesTouched} files.`,
  );
  if (remaining.length) {
    console.log(`\nStill banned tokens in string literals (${remaining.length}):`);
    for (const r of remaining.slice(0, 40)) console.log(" -", r);
    if (remaining.length > 40) console.log(` … +${remaining.length - 40} more`);
    process.exitCode = 1;
  } else {
    console.log("No banned tokens left in string literals.");
  }
}

main();
