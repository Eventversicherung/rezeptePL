/**
 * Wave 10 Paket D — FACTS for recipe-makaron-z-serem (Markdown inline links).
 *
 * Agent E merge into recipe-articles.ts:
 *   import { W10_FACTS_D } from "./recipe-articles-w10-d";
 *   import { W10_FACTS_W9_RETROFIT } from "./recipe-articles-w10-d-retrofit";
 *   Object.assign(FACTS, …, W10_FACTS_W9_RETROFIT, W10_FACTS_D);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Ownership: Cook-Primary „Makaron z serem“ — ≠ Leniwe / Łazanki / Knedle / Kopytka.
 * Affiliate: guide-only (no relatedProductIds on recipe).
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

export const W10_FACTS_D: Record<string, ArticleFacts> = {
  "recipe-makaron-z-serem": {
    dishDe: "Makaron z serem",
    dishPl: "Makaron z serem",
    vibeDe: "mild, cremig, nach Butter und Quark — Alltagskomfort",
    vibePl: "łagodny, kremowy, z masłem i twarogiem — komfort na co dzień",
    originDe:
      "Makaron z serem ist der Cook-Intent für heiße Nudeln mit Twaróg und Butter — klassisch süß mit Zucker, in manchen Häusern auch salzig mit Salz, Pfeffer oder Dill. Es ist kein Teig-Klößchen wie [Pierogi leniwe](/de/rezepte/pierogi-leniwe) und kein Kapusta-Nudelteller wie [Łazanki](/de/rezepte/lazanki). Kartoffel-Teigstücke bleiben bei [Kopytka](/de/rezepte/kopytka). Hier geht es um Pasta aus dem Topf, Quark darüber, fertig in unter 30 Minuten — Diaspora-Comfort ohne Falten, ohne Schmoren.",
    originPl:
      "Makaron z serem to intent cook: gorący makaron z twarogiem i masłem — klasycznie na słodko z cukrem, w niektórych domach też wytrawnie z solą, pieprzem lub koperkiem. To nie kluseczki jak [pierogi leniwe](/pl/rezepte/pierogi-leniwe) i nie talerz z kapustą jak [łazanki](/pl/rezepte/lazanki). Kluski ziemniaczane zostają przy [kopytkach](/pl/rezepte/kopytka). Tu chodzi o makaron z garnka, twaróg na wierzchu, gotowe poniżej 30 minut — komfort diaspory bez lepienia i bez duszenia.",
    shopDe:
      "Kurze Nudeln aus dem Supermarkt, Butter, Zucker oder Salz. Der Charakterträger ist Twaróg bzw. gut abgetropfter Speisequark — Konsistenz und DE-Einkauf im [Twaróg-Guide](/de/blog/twarog-deutschland). Ladenroute und Spezialitäten: [Polenladen](/de/blog/polenladen-einkaufen). Wenn nur Magerquark da ist: ehrlich abseihen laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Kein Frischkäse 1:1 — zu glatt, falsche Kultur.",
    shopPl:
      "Krótki makaron z supermarketu, masło, cukier lub sól. Charakter buduje twaróg albo dobrze odsączony Speisequark — konsystencja i zakupy w [przewodniku po twarogu](/pl/blog/twarog-w-niemczech). Trasa: [sklep polski](/pl/blog/sklep-polski-zakupy). Gdy jest tylko Magerquark: uczciwie odsącz według [zamienników składników](/pl/blog/zamienniki-skladnikow). Nie serek kremowy 1:1 — za gładko, zła kultura.",
    techniqueDe:
      "Nudeln al dente, Nudelwasser bereithalten, Butter schmelzen, Quark unterheben, mit wenig Wasser binden — cremig, nicht wässrig. Zu nasser Quark vorher abseihen. Zucker erst nach dem Binden streuen und kosten; salzige Linie würzt mit Salz und Pfeffer. Optional Brösel in Butter goldbraun — knuspriger Kontrast ohne neues Gericht zu erfinden.",
    techniquePl:
      "Makaron al dente, woda z gotowania pod ręką, masło rozpuścić, wmieszać twaróg, związać odrobiną wody — kremowo, nie wodniście. Za mokry twaróg wcześniej odsącz. Cukier dopiero po związaniu; linia wytrawna: sól i pieprz. Opcjonalnie bułka na maśle na złoto — chrupki kontrast bez nowego dania.",
    serveDe:
      "Sofort auf Tellern, heiß. Süß mit Zucker und optional Vanille; salzig mit Dill oder Bröseln. Das ist ein Alltagsteller — nicht der Sonntagsbraten und nicht das Kapusta-Silo. Wer Teig kneten will, geht zu [Pierogi leniwe](/de/rezepte/pierogi-leniwe); wer Kraut-Nudeln will, zu [Łazanki](/de/rezepte/lazanki). Quark-Einkauf bleibt im [Twaróg-Guide](/de/blog/twarog-deutschland).",
    servePl:
      "Od razu na talerzach, gorące. Na słodko z cukrem i opcjonalnie wanilią; wytrawnie z koperkiem lub bułką. To talerz codzienny — nie pieczeń niedzielna i nie silos kapusty. Kto chce ciasto: [pierogi leniwe](/pl/rezepte/pierogi-leniwe); kto kapustę z makaronem: [łazanki](/pl/rezepte/lazanki). Zakupy nabiału: [przewodnik po twarogu](/pl/blog/twarog-w-niemczech).",
    diasporaDe:
      "Nach Schicht, nach Kita, wenn der Polenladen zu weit ist: Nudeln, Quark, Butter. Kinder dürfen Zucker streuen oder Brösel rühren — heißer Topf bei Erwachsenen. Reste am nächsten Tag in der Pfanne mit etwas Butter aufwärmen. Kein Freezer-Projekt, kein Falten-Training — reine Comfort-Pasta mit polnischer Quark-Logik.",
    diasporaPl:
      "Po zmianie, po przedszkolu, gdy sklep polski jest daleko: makaron, twaróg, masło. Dzieci mogą sypać cukier lub mieszać bułkę — gorący garnek u dorosłych. Resztki nazajutrz na patelni z odrobiną masła. Bez freezera, bez lepienia — czysta comfort-pasta z polską logiką twarogu.",
    mistakesDe:
      "Zu nasser Quark (Brei). Frischkäse als 1:1-Ersatz. Mit Leniwe verwechseln (Teig kochen statt Pasta). Mit Łazanki verwechseln (Kapusta). Zu viel Nudelwasser → Suppe. Zucker vor dem Binden in großen Mengen — schwer zu korrigieren. Ownership stehlen vom [Twaróg-Guide](/de/blog/twarog-deutschland) — nein, dort bleibt Zutaten-Owner.",
    mistakesPl:
      "Za mokry twaróg (papka). Serek kremowy 1:1. Mylenie z leniwymi (ciasto zamiast makaronu). Mylenie z łazankami (kapusta). Za dużo wody → zupa. Dużo cukru przed związaniem — trudno cofnąć. Kradzież ownership z [przewodnika po twarogu](/pl/blog/twarog-w-niemczech) — nie, tam zostaje owner składnika.",
    variantsDe:
      "Süß klassisch; salzig mit Dill; mit gerösteten Bröseln; mit einem Klecks Śmietana am Rand (descriptiv, Primary bleibt Pasta+Quark). Teig-Nachbar: [Pierogi leniwe](/de/rezepte/pierogi-leniwe). Herzhafter Pasta-Nachbar mit Kraut: [Łazanki](/de/rezepte/lazanki). Beilage-Kartoffel-Teig: [Kopytka](/de/rezepte/kopytka). Einkauf und Ersatz: [Polenladen](/de/blog/polenladen-einkaufen), [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Słodko klasycznie; wytrawnie z koperkiem; z bułką na maśle; z łyżką śmietany z boku (descriptively, primary zostaje makaron+twaróg). Sąsiad ciasta: [pierogi leniwe](/pl/rezepte/pierogi-leniwe). Makaron z kapustą: [łazanki](/pl/rezepte/lazanki). Kluski ziemniaczane: [kopytka](/pl/rezepte/kopytka). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy), [zamienniki](/pl/blog/zamienniki-skladnikow).",
  },
};
