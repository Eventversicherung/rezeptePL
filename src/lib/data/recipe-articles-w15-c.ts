/**
 * Wave 15 Paket C — FACTS for marchewka-groszek + fasolka-szparagowa.
 *
 * Agent E merge into recipe-articles.ts:
 *   import { W15_FACTS_C } from "./recipe-articles-w15-c";
 *   Object.assign(FACTS, …, W15_FACTS_C);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership CRITICAL:
 * - Marchewka z groszkiem = warme Möhren+Erbsen-Beilage ≠ Mizeria ≠ Buraczki
 * - Fasolka szparagowa = grüne Stangenbohnen-Beilage
 *   ≠ Fasolka po bretońsku (recipe-fasolka + post-fasolka-guide Primary)
 * - Sonntagsessen bleibt Kultur-Owner; Fasolka-Guide nur descriptive (Beilage ≠ Eintopf)
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

export const W15_FACTS_C: Record<string, ArticleFacts> = {
  "recipe-marchewka-groszek": {
    dishDe: "Marchewka z groszkiem",
    dishPl: "Marchewka z groszkiem",
    vibeDe:
      "süßlich-buttrig, warm glänzend, Dillgrün — die ruhige Sonntagsbeilage neben Fleisch",
    vibePl:
      "maślano-słodkawa, ciepła i błyszcząca, z koprem — spokojny dodatek niedzielny obok mięsa",
    originDe:
      "Marchewka z groszkiem ist der Rezept für die warme Möhren-Erbsen-Beilage der polnischen Haus- und Sonntagsküche: gewürfelt oder in Scheiben, in Butter glasig geschwenkt, oft mit Dill — heiß neben Fleisch und Kartoffeln. Das ist weder der kalte Gurkensalat [Mizeria](/de/rezepte/mizeria) noch die warme Rote-Bete-Beilage [Buraczki](/de/rezepte/buraczki) noch ein Rohkost-Salat. Menürahmen bleibt im [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch); hier liegt der enge Beilagen-Fokus. Klassischer Teller-Nachbar: [Kotlet schabowy](/de/rezepte/kotlet-schabowy). Einkaufspraxis: [Polenladen](/de/blog/polenladen-einkaufen).",
    originPl:
      "Marchewka z groszkiem to ciepłego dodatku z marchewki i groszku w polskiej kuchni domowej i niedzielnej: kostka lub plasterki, zeszkliwione na maśle, często z koprem — gorące obok mięsa i ziemniaków. To ani zimna [mizeria](/pl/rezepte/mizeria), ani ciepłe [buraczki](/pl/rezepte/buraczki), ani surowa surówka. Rama menu zostaje w [obiadzie niedzielnym](/pl/blog/obiad-niedzielny); tu wąski fokus dodatku. Klasyczny sąsiad: [kotlet schabowy](/pl/rezepte/kotlet-schabowy). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
    shopDe:
      "Möhren, Erbsen (frisch oder TK), Butter, optional Zucker, Dill oder Petersilie, Salz, Pfeffer — alles im deutschen Supermarkt; frischer Dill oft im [Polenladen](/de/blog/polenladen-einkaufen). Butter-/Kräuterersatz ehrlich: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Wer Gurke/Śmietana will: [Mizeria](/de/rezepte/mizeria). Wer Rote Bete warm: [Buraczki](/de/rezepte/buraczki). Menü: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    shopPl:
      "Marchewka, groszek (świeży lub mrożony), masło, opcjonalnie cukier, koper lub pietruszka, sól, pieprz — supermarket; świeży koper często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Zamienniki: [zamienniki składników](/pl/blog/zamienniki-skladnikow). Ogórek/śmietana: [mizeria](/pl/rezepte/mizeria). Ciepłe buraki: [buraczki](/pl/rezepte/buraczki). Menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
    techniqueDe:
      "Gleichmäßige Schnittgröße, damit die Möhren gleichzeitig gar sind. Wenig Wasser, bissfest abgießen — Matsch zerstört die Beilage. In der Pfanne Butter (± Prise Zucker) schmelzen, Erbsen und Möhren schwenken bis Glanz; Dill erst am Ende. Keine dicke Soße, kein Mayo-Bindemittel: das bleibt [Mizeria](/de/rezepte/mizeria)/Salat-Intent. Timing: parallel zu [Schabowy](/de/rezepte/kotlet-schabowy) oder Braten — die Beilage wartet schlecht offen.",
    techniquePl:
      "Równa kostka, żeby marchewka gotowała się równo. Mało wody, al dente — papka psuje dodatek. Na patelni masło (± szczypta cukru), groszek i marchewka do połysku; koper na końcu. Bez gęstego sosu i majonezu: to intent [mizerii](/pl/rezepte/mizeria)/sałatki. Timing: równolegle do [schabowego](/pl/rezepte/kotlet-schabowy) — dodatek źle czeka otwarty.",
    serveDe:
      "Heiß in Schüssel oder neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy), Kartoffeln, Kasza. Menüplatz descriptiv: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Nicht mit [Buraczki](/de/rezepte/buraczki) oder [Mizeria](/de/rezepte/mizeria) verwechseln — andere Farbe, andere Temperatur, anderer Intent. Einkaufsnachschlag: [Polenladen](/de/blog/polenladen-einkaufen).",
    servePl:
      "Gorące w misce lub obok [schabowego](/pl/rezepte/kotlet-schabowy), ziemniaków, kaszy. Menu opisowo: [obiad niedzielny](/pl/blog/obiad-niedzielny). Nie mylić z [buraczkami](/pl/rezepte/buraczki) ani [mizerią](/pl/rezepte/mizeria) — inny kolor, temperatura, intent. Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
    diasporaDe:
      "TK-Erbsen und vorbereitete Möhrenwürfel retten den Sonntag nach Schichtarbeit — ehrlich benennen. Kinder dürfen Dill hacken; heiße Pfanne bei Erwachsenen. Reste am Folgetag kurz mit Butter in der Pfanne. Kultur- und Speiseplan-Owner bleibt [Sonntagsessen](/de/blog/sonntagsessen-polnisch); Zutaten-Hilfe: [Ersatzprodukte](/de/blog/ersatzprodukte-de), [Polenladen](/de/blog/polenladen-einkaufen).",
    diasporaPl:
      "Mrożony groszek i przygotowana kostka marchewki ratują niedzielę po zmianie — nazwać uczciwie. Dzieci siekają koper; gorąca patelnia u dorosłych. Resztki nazajutrz krótko z masłem. Owner kultury: [obiad niedzielny](/pl/blog/obiad-niedzielny); pomoc: [zamienniki](/pl/blog/zamienniki-skladnikow), [sklep polski](/pl/blog/sklep-polski-zakupy).",
    mistakesDe:
      "Roh servieren oder als Surówka verkaufen → Clash mit Rohkost-Intent. Mit [Mizeria](/de/rezepte/mizeria) (Gurke/Śmietana) oder [Buraczki](/de/rezepte/buraczki) (Rote Bete) verwechseln. Zu lange kochen bis Brei. Speiseplan-Abgrenzung stehlen statt [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Zu wenig Butter — dann kein Glanz und kein Beilagen-Charakter.",
    mistakesPl:
      "Podawanie na surowo / jako surówka. Mylenie z [mizerią](/pl/rezepte/mizeria) lub [buraczkami](/pl/rezepte/buraczki). Rozgotowanie na papkę. Nie mieszać ilości i kroków z sąsiednim przepisem. Za mało masła — brak połysku i charakteru dodatku.",
    variantsDe:
      "Nur Möhren mit Butter; mit Petersilie statt Dill; Prise Zucker weglassen. Nachbarn-Beilagen: [Mizeria](/de/rezepte/mizeria), [Buraczki](/de/rezepte/buraczki), [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana). Fleisch: [Schabowy](/de/rezepte/kotlet-schabowy). Guides: [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Polenladen](/de/blog/polenladen-einkaufen), [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Tylko marchewka z masłem; pietruszka zamiast kopru; bez cukru. Sąsiedzi: [mizeria](/pl/rezepte/mizeria), [buraczki](/pl/rezepte/buraczki), [kapusta zasmażana](/pl/rezepte/kapusta-zasmażana). Mięso: [schabowy](/pl/rezepte/kotlet-schabowy). Przewodniki: [obiad niedzielny](/pl/blog/obiad-niedzielny), [sklep polski](/pl/blog/sklep-polski-zakupy), [zamienniki](/pl/blog/zamienniki-skladnikow).",
  },

  "recipe-fasolka-szparagowa": {
    dishDe: "Fasolka szparagowa po polsku",
    dishPl: "Fasolka szparagowa po polsku",
    vibeDe:
      "knackig-grün, butterig, Semmelbrösel-Gold — Beilage, kein Eintopf",
    vibePl:
      "chrupiąco-zielona, maślana, złota bułka tarta — dodatek, nie gulasz",
    originDe:
      "Fasolka szparagowa po polsku ist der Rezept für grüne Stangenbohnen als warme Beilage: bissfest gegart, in Butter (± Semmelbrösel/bułka tarta) geschwenkt — neben Fleisch am Sonntagstisch. Das ist **nicht** der Tomaten-Wurst-Eintopf mit weißen Bohnen [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku); Broad und Einkaufs-Pillar dazu bleiben beim [Fasolka-Guide](/de/blog/fasolka-po-bretonsku) — hier nur Abgrenzung Beilage ≠ Eintopf. Menü: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Einkauf: [Polenladen](/de/blog/polenladen-einkaufen). Teller-Nachbar oft [Kotlet schabowy](/de/rezepte/kotlet-schabowy).",
    originPl:
      "Fasolka szparagowa po polsku to zielonych strąków jako ciepłego dodatku: ugotowana al dente, zeszkliwiona na maśle (± bułka tarta) — obok mięsa w niedzielę. To **nie** pomidorowo-kiełbasiany gulasz z białą fasolą [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku); broad i zakupy zostają przy [przewodniku fasolki](/pl/blog/fasolka-po-bretonsku) — tu tylko opisowe: dodatek ≠ gulasz. Menu: [obiad niedzielny](/pl/blog/obiad-niedzielny). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy). Sąsiad: [kotlet schabowy](/pl/rezepte/kotlet-schabowy).",
    shopDe:
      "Grüne Stangenbohnen (frisch oder TK), Butter, bułka tarta, optional Zwiebel/Knoblauch, Dill — Supermarkt; gute Brösel und Kräuter im [Polenladen](/de/blog/polenladen-einkaufen). **Nicht** weiße Bohnen aus Glas/Dose für diesen Fokus — das gehört zu [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku) und dem [Fasolka-Guide](/de/blog/fasolka-po-bretonsku). Menü descriptiv: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    shopPl:
      "Fasolka szparagowa (świeża lub mrożona), masło, bułka tarta, opcjonalnie cebula/czosnek, koper — supermarket; bułka i zioła w [sklepie polskim](/pl/blog/sklep-polski-zakupy). **Nie** biała fasola ze słoika do tego fokus — to [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku) i [przewodnik](/pl/blog/fasolka-po-bretonsku). Menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
    techniqueDe:
      "Enden abschneiden, bissfest kochen, gut abtropfen. Butter heiß, Brösel goldbraun — dann Bohnen unterheben. Zu lange Garzeit = matschig und grau. Keine Tomatenmark-Kiełbasa-Basis: das stiehlt den Eintopf-Fokus von [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku). Ohne Brösel nur Butter ist ok — ehrlich benennen. Parallel zu [Schabowy](/de/rezepte/kotlet-schabowy) timingbar.",
    techniquePl:
      "Obciąć końce, ugotować al dente, dobrze odsączyć. Gorące masło, bułka na złoto — potem fasolka. Za długie gotowanie = papka i szarość. Bez bazy pomidor-kiełbasa: to kradnie fokus [fasolki po bretońsku](/pl/rezepte/fasolka-po-bretonsku). Bez bułki tylko masło — nazwać uczciwie. Timing z [schabowym](/pl/rezepte/kotlet-schabowy).",
    serveDe:
      "Heiß als Beilage neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy), Braten oder Kasza — nie als sättigender Eintopf mit Brot wie [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku). Menü: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Guide nur (Intent-Trennung): [Fasolka-Guide](/de/blog/fasolka-po-bretonsku). Einkauf: [Polenladen](/de/blog/polenladen-einkaufen).",
    servePl:
      "Gorące jako dodatek obok [schabowego](/pl/rezepte/kotlet-schabowy), pieczenia lub kaszy — nie jako sycący gulasz z chlebem jak [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku). Menu: [obiad niedzielny](/pl/blog/obiad-niedzielny). Przewodnik tylko opisowo: [fasolka guide](/pl/blog/fasolka-po-bretonsku). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
    diasporaDe:
      "TK-Bohnen und fertige bułka tarta machen den Alltag kurz — ehrlich. Kinder streuen Brösel; heiße Butter bei Erwachsenen. Reste kurz in der Pfanne, sonst weiche Krümel. Speiseplan-Owner: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer den Eintopf will, bleibt bei Cook+Guide: [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku), [Fasolka-Guide](/de/blog/fasolka-po-bretonsku).",
    diasporaPl:
      "Mrożona fasolka i gotowa bułka skracają dzień — uczciwie. Dzieci sypią bułkę; gorące masło u dorosłych. Resztki krótko na patelni. Owner menu: [obiad niedzielny](/pl/blog/obiad-niedzielny). Gulasz: [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku), [przewodnik](/pl/blog/fasolka-po-bretonsku).",
    mistakesDe:
      "Weiße Bohnen + Tomate + Kiełbasa kochen → Clash mit [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku) und Steal am [Fasolka-Guide](/de/blog/fasolka-po-bretonsku). Bohnen zu weich. Brösel verbrennen. Als Hauptgericht-Eintopf verkaufen statt Beilage. Sonntags-Abgrenzung stehlen statt [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    mistakesPl:
      "Biała fasola + pomidor + kiełbasa → clash z [fasolką po bretońsku](/pl/rezepte/fasolka-po-bretonsku) i kradzież [przewodnika](/pl/blog/fasolka-po-bretonsku). Za miękka fasolka. Spalona bułka. Sprzedaż jako gulasz zamiast dodatku. Nie mieszać ilości i kroków z sąsiednim przepisem.",
    variantsDe:
      "Nur Butter ohne Brösel; mit Knoblauch; mit Dill. Eintopf-Nachbar (anderes Gericht): [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku) + [Fasolka-Guide](/de/blog/fasolka-po-bretonsku). Andere Beilagen: [Marchewka z groszkiem](/de/rezepte/marchewka-groszek), [Mizeria](/de/rezepte/mizeria), [Buraczki](/de/rezepte/buraczki). Guides: [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Polenladen](/de/blog/polenladen-einkaufen).",
    variantsPl:
      "Tylko masło bez bułki; z czosnkiem; z koprem. Sąsiad-gulasz (inny fokus): [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku) + [przewodnik](/pl/blog/fasolka-po-bretonsku). Inne dodatki: [marchewka z groszkiem](/pl/rezepte/marchewka-groszek), [mizeria](/pl/rezepte/mizeria), [buraczki](/pl/rezepte/buraczki). Przewodniki: [obiad niedzielny](/pl/blog/obiad-niedzielny), [sklep polski](/pl/blog/sklep-polski-zakupy).",
  },
};
