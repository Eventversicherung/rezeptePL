/**
 * Wave 10 Paket D — FACTS for recipe-makaron-z-serem (Markdown inline links).
 *
 * Agent E merge into recipe-articles.ts:
 * import { W10_FACTS_D } from "./recipe-articles-w10-d";
 * import { W10_FACTS_W9_RETROFIT } from "./recipe-articles-w10-d-retrofit";
 * Object.assign(FACTS, …, W10_FACTS_W9_RETROFIT, W10_FACTS_D);
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
    vibeDe: "mild, cremig, nach Butter und Quark, Alltagskomfort",
    vibePl: "łagodny, kremowy, z masłem i twarogiem, komfort na co dzień",
    originDe:
      "Makaron z serem wurde in der Zeit der Volksrepublik zum festen Bestandteil polnischer Schulkantinen und Haushaltsküchen, weil Nudeln, Twaróg und Butter fast immer verfügbar waren, selbst wenn andere Zutaten knapp wurden. Aus dieser Not entstand ein Gericht, das in nicht einmal dreißig Minuten satt macht und bis heute vor allem als süße Erinnerung an Kindertage gilt, klassisch mit Zucker, manchmal mit Vanille oder Zimt bestreut. In manchen Häusern gibt es daneben eine herzhafte Linie mit gerösteter Zwiebel, Speckwürfeln, Salz und Pfeffer. Es ist kein Teig-Klößchen wie [Pierogi leniwe](/de/rezepte/pierogi-leniwe) und kein Kapusta-Nudelteller wie [Łazanki](/de/rezepte/lazanki), auch Kartoffel-Teigstücke bleiben bei [Kopytka](/de/rezepte/kopytka). Hier geht es um Pasta aus dem Topf mit Quark obendrauf, fertig in wenig Zeit, ganz ohne Falten oder langes Schmoren.",
    originPl:
      "Makaron z serem stał się w czasach Polskiej Rzeczpospolitej Ludowej stałym elementem szkolnych stołówek i domowych kuchni, bo makaron, twaróg i masło były prawie zawsze dostępne, nawet gdy inne produkty bywały trudne do zdobycia. Z tej konieczności powstało danie, które sycił w mniej niż trzydzieści minut i do dziś jest przede wszystkim słodkim wspomnieniem z dzieciństwa, klasycznie z cukrem, czasem z wanilią lub cynamonem. W niektórych domach istnieje też wytrawna linia z podsmażoną cebulą, boczkiem, solą i pieprzem. To nie kluseczki jak [pierogi leniwe](/pl/rezepte/pierogi-leniwe) i nie talerz z kapustą jak [łazanki](/pl/rezepte/lazanki), kluski ziemniaczane zostają przy [kopytkach](/pl/rezepte/kopytka). Tu chodzi o makaron z garnka z twarogiem na wierzchu, gotowy szybko, bez lepienia i bez długiego duszenia.",
    shopDe:
      "Kurze Nudeln aus dem Supermarkt, dazu Butter, Zucker oder Salz. Den eigentlichen Charakter trägt der Twaróg oder gut abgetropfte Speisequark, Konsistenz und DE-Einkauf erklärt der [Twaróg-Guide](/de/blog/twarog-deutschland). Die Ladenroute samt Spezialitäten zeigt der [Polenladen](/de/blog/polenladen-einkaufen)-Beitrag. Wenn nur Magerquark verfügbar ist, hilft ehrliches Abseihen nach der Anleitung in [Ersatzprodukte DE](/de/blog/ersatzprodukte-de), Frischkäse dagegen passt hier nicht, er ist zu glatt und bringt die falsche Textur.",
    shopPl:
      "Krótki makaron z supermarketu, do tego masło, cukier lub sól. Charakter buduje twaróg albo dobrze odsączony Speisequark, o konsystencji i zakupach w DE pisze [przewodnik po twarogu](/pl/blog/twarog-w-niemczech). Trasę zakupową opisuje [sklep polski](/pl/blog/sklep-polski-zakupy). Gdy jest tylko Magerquark, pomaga uczciwe odsączenie według [zamienników składników](/pl/blog/zamienniki-skladnikow), serek kremowy natomiast nie sprawdza się tutaj, jest za gładki i daje niewłaściwą teksturę.",
    techniqueDe:
      "Nudeln al dente kochen und etwas Nudelwasser aufheben, dann Butter schmelzen, den Quark unterheben und mit wenig Wasser zu einer cremigen, nicht wässrigen Masse binden. Zu nasser Quark sollte vorher abgeseiht werden, sonst wird die Masse breiig statt cremig. Zucker erst nach dem Binden dazugeben und probieren, die salzige Linie würzt stattdessen mit Salz und Pfeffer. Optional lassen sich Semmelbrösel in Butter goldbraun rösten, das ergibt einen knusprigen Kontrast, ohne dass daraus ein neues Gericht wird.",
    techniquePl:
      "Makaron ugotuj al dente i odłóż odrobinę wody z gotowania, potem rozpuść masło, wmieszaj twaróg i zwiąż niewielką ilością wody do kremowej, nie wodnistej masy. Za mokry twaróg lepiej wcześniej odsączyć, inaczej masa robi się papkowata, nie kremowa. Cukier dodaj dopiero po związaniu i spróbuj, linia wytrawna zamiast tego korzysta z soli i pieprzu. Opcjonalnie można podsmażyć bułkę tartą na maśle na złoty kolor, co daje chrupiący kontrast, bez tworzenia nowego dania.",
    serveDe:
      "Sofort auf Tellern servieren, heiß. Süß mit Zucker und optional Vanille, salzig mit Dill oder Bröseln. Das ist ein Alltagsteller, nicht der Sonntagsbraten und nicht das Krautgericht. Wer Teig kneten möchte, greift zu [Pierogi leniwe](/de/rezepte/pierogi-leniwe), wer Kraut-Nudeln sucht, zu [Łazanki](/de/rezepte/lazanki). Der Quark-Einkauf bleibt im [Twaróg-Guide](/de/blog/twarog-deutschland) beschrieben.",
    servePl:
      "Podawaj od razu na talerzach, gorące. Na słodko z cukrem i opcjonalnie wanilią, wytrawnie z koperkiem lub bułką. To talerz codzienny, nie pieczeń niedzielna i nie danie z kapusty. Kto chce ciasto, sięga po [pierogi leniwe](/pl/rezepte/pierogi-leniwe), kto kapustę z makaronem, po [łazanki](/pl/rezepte/lazanki). Zakupy nabiału opisuje [przewodnik po twarogu](/pl/blog/twarog-w-niemczech).",
    diasporaDe:
      "Nach der Schicht, nach der Kita oder wenn der Polenladen zu weit weg ist, reichen Nudeln, Quark und Butter für eine warme Mahlzeit. Kinder dürfen den Zucker streuen oder die Brösel rühren, der heiße Topf bleibt bei den Erwachsenen. Reste lassen sich am nächsten Tag mit etwas Butter in der Pfanne wieder aufwärmen. Es braucht kein Freezer-Projekt und kein Falten-Training, nur reine Comfort-Pasta mit polnischer Quark-Logik.",
    diasporaPl:
      "Po zmianie, po przedszkolu albo gdy sklep polski jest daleko, wystarczą makaron, twaróg i masło na ciepły posiłek. Dzieci mogą sypać cukier lub mieszać bułkę, gorący garnek zostaje dla dorosłych. Resztki nazajutrz podgrzej na patelni z odrobiną masła. Nie trzeba freezera ani lepienia, wystarczy czysta comfort-pasta z polską logiką twarogu.",
    mistakesDe:
      "Zu nasser Quark macht die Masse breiig, und Frischkäse als direkter Ersatz bringt die falsche, zu glatte Textur. Verwechsle das Gericht außerdem nicht mit Leniwe, dort kochst du Teig statt Pasta, oder mit Łazanki, dort dreht sich alles um Kraut. Zu viel Nudelwasser macht aus dem cremigen Teller schnell eine Suppe, und wer den Zucker in großen Mengen vor dem Binden zugibt, kann die Süße später kaum noch korrigieren. Der [Twaróg-Guide](/de/blog/twarog-deutschland) bleibt dabei der Leitfaden für den Einkauf, nicht für dieses Rezept selbst.",
    mistakesPl:
      "Za mokry twaróg robi z masy papkę, a serek kremowy jako zamiennik daje niewłaściwą, za gładką teksturę. Nie myl też dania z leniwymi, tam gotujesz ciasto, nie makaron, ani z łazankami, tam wszystko kręci się wokół kapusty. Za dużo wody z gotowania szybko zamienia kremowy talerz w zupę, a kto doda dużo cukru przed związaniem masy, później trudno to skoryguje. [Przewodnik po twarogu](/pl/blog/twarog-w-niemczech) zostaje przy tym poradnikiem zakupowym, nie przepisem na to danie.",
    variantsDe:
      "Klassisch süß, wytrawnie mit Dill, mit geröstet Bröseln oder mit einem Klecks Śmietana am Rand, der Fokus bleibt dabei immer Pasta mit Quark. Der Teig-Nachbar dazu ist [Pierogi leniwe](/de/rezepte/pierogi-leniwe), der herzhafte Pasta-Nachbar mit Kraut [Łazanki](/de/rezepte/lazanki), und die Beilage aus Kartoffelteig sind [Kopytka](/de/rezepte/kopytka). Der Wigilia-Mohn-Klassiker [Makaron z makiem](/de/rezepte/makaron-z-makiem) läuft dagegen ohne Quark. Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du weitere Einkaufshilfen.",
    variantsPl:
      "Klasycznie na słodko, wytrawnie z koperkiem, z bułką na maśle albo z łyżką śmietany z boku, zawsze jednak w centrum zostaje makaron z twarogiem. Sąsiadem od strony ciasta są [pierogi leniwe](/pl/rezepte/pierogi-leniwe), wytrawnym sąsiadem z kapustą [łazanki](/pl/rezepte/lazanki), a dodatkiem z ciasta ziemniaczanego [kopytka](/pl/rezepte/kopytka). Wigilijny klasyk [makaron z makiem](/pl/rezepte/makaron-z-makiem) obchodzi się z kolei bez twarogu. W [sklepie polskim](/pl/blog/sklep-polski-zakupy) i pod [zamiennikami](/pl/blog/zamienniki-skladnikow) znajdziesz dalsze wskazówki zakupowe.",
  },
};
