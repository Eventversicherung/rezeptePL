/**
 * Wave 13 Paket D — FACTS for biala-kielbasa.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W13_FACTS_D } from "./recipe-articles-w13-d";
 * Object.assign(FACTS, …, W13_FACTS_D);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Biała kiełbasa Cook (kochen/backen) ≠ Kiełbasa-Arten-Lexikon (Broad)
 * - ≠ Kaszanka (Blutwurst-Cook) ≠ dunkle geräucherte Grillwurst
 * - Żurek bleibt Suppen-Primary; Biała = Cook-Einlage/Haupt
 * - Wielkanoc bleibt Anlass-Owner
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

export const W13_FACTS_D: Record<string, ArticleFacts> = {
 "recipe-biala-kielbasa": {
 dishDe: "Biała kiełbasa",
 dishPl: "Biała kiełbasa",
 vibeDe: "mild, fleischig, nach Majoran und frischer Wurst — hell und festlich",
 vibePl: "łagodna, mięsna, z majerankiem i świeżą kiełbasą — jasna i świąteczna",
 originDe:
 "Biała kiełbasa ist das Rezept für helle, frische Weißwurst: schonend garziehen oder leicht backen, oft zu Ostern mit Meerrettich und Senf. Das ist kein Eintrag im [Kiełbasa-Arten-Lexikon](/de/blog/kielbasa-arten) — dort bleiben Arten, Qualität und Einsatzbreite. Hier liegen Mengen, Hitze und Anrichten. Sie ist auch keine [Kaszanka](/de/rezepte/kaszanka) (Blutwurst mit Grütze in der Pfanne) und keine dunkle Rauch-/Grillwurst. Als Einlage in [Żurek](/de/rezepte/zurek) bleibt die Suppe Suppenrezept; dieses Rezept deckt die Wurst als Gericht. Menü-Kultur Ostern: [Wielkanoc Speiseplan](/de/blog/wielkanoc-speiseplan) — Menü-Rahmen bleibt dort.",
 originPl:
 "Biała kiełbasa to przepis na jasna, świeża kiełbasa delikatnie gotowana lub lekko pieczona, często na Wielkanoc z chrzanem i musztardą. To nie wpis w [leksykonie rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy) — tam zostają typy, jakość i szerokie zastosowanie. Tu ilości, ogień i podanie. To też nie [kaszanka](/pl/rezepte/kaszanka) (krew z kaszą na patelni) ani ciemna wędzona/grillowa. Jako dodatek do [żurku](/pl/rezepte/zurek) zupa zostaje fokus zupy; tu zostaje danie z kiełbasy. Kultura menu: [menu wielkanocne](/pl/blog/menu-wielkanocne) — artykuł o okazji zostaje tam.",
 shopDe:
 "Frische biała kiełbasa im [Polenladen](/de/blog/polenladen-einkaufen): blassrosa bis grauweiß, kurze Liste, Kühlkette, kein stechender Kunstrauch. Dunkle Grill- oder Rauchwurst ist die falsche Linie für diesen Cook. Meerrettich, Senf, Brot aus dem Supermarkt. Welche Sorten wohin gehören, erklärt weiter das [Kiełbasa-Arten-Lexikon](/de/blog/kielbasa-arten). Für Żurek-Wochenende zusätzlich Zakwas — [Zakwas-Guide](/de/blog/zakwas-zurek).",
 shopPl:
 "Świeża biała kiełbasa w [sklepie polskim](/pl/blog/sklep-polski-zakupy): bladoróżowa do szarobiałej, krótki skład, chłodzenie, bez ostrego sztucznego dymu. Ciemna grillowa lub wędzona to zła linia pod ten cook. Chrzan, musztarda, chleb z marketu. Które rodzaje gdzie pasują, zostaje w [leksykonie rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy). Na weekend z żurkiem dodatkowo zakwas — [przewodnik po zakwasie](/pl/blog/zakwas-na-zurek).",
 techniqueDe:
 "Unter dem Siedepunkt garziehen: Hülle bleibt ganz, Inneres saftig. Sprudelndes Kochen platzt und trocknet. Ofen nur leicht färben — hell bleiben, kein Smokehouse-Char. Als Einlage in [Żurek](/de/rezepte/zurek) spät zugeben oder separat garen. Rohware durchgaren; Bretter nach Rohwurst trennen. Technik der Suppe und des Ansatzes bleibt bei Żurek bzw. [Zakwas](/de/blog/zakwas-zurek).",
 techniquePl:
 "Gotować poniżej wrzenia: osłonka cała, środek soczysty. Gwałtowne gotowanie pęka i suszy. Piekarnik tylko lekko zarumienić — zostać jasną, bez smokehouse-char. Jako dodatek do [żurku](/pl/rezepte/zurek) włożyć późno albo gotować osobno. Surową dogotować; deski po surowej kiełbasie rozdzielić. Technika zupy i zakwasu zostaje przy żurku i [zakwasie](/pl/blog/zakwas-na-zurek).",
 serveDe:
 "Klassisch mit Meerrettich, Senf und Brot — oder in Scheiben im Teller [Żurek](/de/rezepte/zurek). Ostern-Buffet laut [Wielkanoc](/de/blog/wielkanoc-speiseplan): Speiseplan bleibt Menü-Artikel, hier nur das Wurst-Cook. Nicht mit gebratener [Kaszanka](/de/rezepte/kaszanka) verwechseln. Reste kühlen, am nächsten Tag in der Suppe oder kurz erwärmt mit Brot.",
 servePl:
 "Klasycznie z chrzanem, musztardą i chlebem — albo w plastrach w [żurku](/pl/rezepte/zurek). Buffet wielkanocny według [menu](/pl/blog/menu-wielkanocne): plan zostaje przepisem na menu, tu tylko cook kiełbasy. Nie mylić ze smażoną [kaszanką](/pl/rezepte/kaszanka). Resztki schłodzić; nazajutrz w zupie albo krótko podgrzane z chlebem.",
 diasporaDe:
 "In DE oft der Ostern-Must-Kauf im [Polenladen](/de/blog/polenladen-einkaufen) vor dem Feiertag — Regale leeren sich früh. Kinder dürfen Senf/Meerrettich wählen; heißer Topf bei Erwachsenen. Parallel zu [Żurek](/de/rezepte/zurek) planen, ohne den Speiseplan zu überladen — [Wielkanoc](/de/blog/wielkanoc-speiseplan). Types-Fragen weiter im Lexikon, nicht hier umschreiben.",
 diasporaPl:
 "W DE często zakup must na Wielkanoc w [sklepie polskim](/pl/blog/sklep-polski-zakupy) przed świętem — półki pustoszeją wcześnie. Dzieci wybierają musztardę/chrzan; gorący garnek u dorosłych. Planuj równolegle z [żurkiem](/pl/rezepte/zurek), bez przeładowania menu — [menu wielkanocne](/pl/blog/menu-wielkanocne). Pytania o typy zostają w leksykonie, nie przepisujemy go tu.",
 mistakesDe:
 "Dunkle Grillwurst als „biała“ verwenden. Stark sprudelnd kochen (platzt). Mit [Kaszanka](/de/rezepte/kaszanka) oder dem Arten-Übersicht des [Kiełbasa-Lexikons](/de/blog/kielbasa-arten) verwechseln. nein: hier die Wurst, dort Suppe bzw. Menü.",
 mistakesPl:
 "Ciemna grillowa jako „biała”. Gwałtowne gotowanie (pęka). Mylenie z [kaszanką](/pl/rezepte/kaszanka) lub fokus rodzajów z [leksykonu kiełbasy](/pl/blog/rodzaje-kielbasy). Nie mieszać ilości i kroków z sąsiednim przepisem. nie: tu cook, tam zupa lub okazja.",
 variantsDe:
 "Nur Topf, nur Ofen, oder beides: kurz garziehen und leicht nachbacken. Mit Zwiebeln im Ofen. Einlage-Variante bleibt an [Żurek](/de/rezepte/zurek) gekoppelt. Nachbar Blutwurst: [Kaszanka](/de/rezepte/kaszanka). Types und Qualitätslesen: [Kiełbasa-Arten](/de/blog/kielbasa-arten). Zum Anlass passt [Wielkanoc](/de/blog/wielkanoc-speiseplan). Ansatz-Kontext: [Zakwas](/de/blog/zakwas-zurek).",
 variantsPl:
 "Tylko garnek, tylko piekarnik, albo jedno i drugie: krótko gotować i lekko dopiec. Z cebulą w piekarniku. Wariant dodatku zostaje przy [żurku](/pl/rezepte/zurek). Sąsiad: [kaszanka](/pl/rezepte/kaszanka). Typy i jakość: [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy). Do okazji pasuje [menu wielkanocne](/pl/blog/menu-wielkanocne). Zakwas: [zakwas na żur](/pl/blog/zakwas-na-zurek).",
 },
};
