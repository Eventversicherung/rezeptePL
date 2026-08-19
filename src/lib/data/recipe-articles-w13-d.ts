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
 * - Biała kiełbasa Cook (kochen/backen), different from the broad Kiełbasa-Arten-Lexikon
 * - Different from Kaszanka (Blutwurst-Cook) and dark smoked grill sausage
 * - Żurek remains the soup recipe; Biała kiełbasa here is the sausage cook/main
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
    vibeDe: "mild, fleischig, nach Majoran und frischer Wurst, hell und festlich",
    vibePl: "łagodna, mięsna, z majerankiem i świeżą kiełbasą, jasna i świąteczna",
    originDe:
      "Der Legende nach erfand der Münchner Wirt Sepp Moser die Weißwurst 1857 aus der Not heraus, weil ihm für die geplanten Kalbsbratwürste die dünnen Schafsdärme ausgingen und er auf dickere Schweinedärme ausweichen musste. Weil er befürchtete, diese würden beim Braten platzen, brühte er die Würste stattdessen nur in heißem Wasser, ein Zufall, der zum bayerischen Klassiker wurde. Die polnische Biała kiełbasa geht auf diese deutsche Idee zurück, entwickelte aber schon im 17. Jahrhundert in Wielkopolska, also Großpolen, eine eigene, kräftigere Linie mit Knoblauch, Majoran und Pfeffer, erstmals schriftlich belegt in Maria Śleżańskas Kochbuch von 1904 und erwähnt in der Kronika Miasta Poznania, wo sie zum feierlichen Osterfrühstück des ausgehenden 19. Jahrhunderts gehörte, dort sogar mit Zwiebeln und Wacholder überbacken. Sie ist keine Blutwurst wie [Kaszanka](/de/rezepte/kaszanka) und keine dunkle Rauch- oder Grillwurst, sondern eine helle, milde Frischwurst, die vor allem zu Ostern gegessen wird, oft als Einlage in [Żurek](/de/rezepte/zurek). Arten und Qualitätsmerkmale von Wurst insgesamt bündelt das [Kiełbasa-Arten-Lexikon](/de/blog/kielbasa-arten).",
    originPl:
      "Według legendy monachijski karczmarz Sepp Moser wynalazł białą kiełbasę w 1857 roku z konieczności, bo zabrakło mu cienkich jelit baranich do planowanych kiełbasek cielęcych i musiał sięgnąć po grubsze jelita wieprzowe. Obawiając się, że pękną podczas pieczenia, zaparzył je zamiast tego we wrzątku, przypadek, który stał się bawarskim klasykiem. Polska biała kiełbasa nawiązuje do tego niemieckiego pomysłu, ale już w XVII wieku w Wielkopolsce wykształciła własną, bardziej wyrazistą linię z czosnkiem, majerankiem i pieprzem, po raz pierwszy spisaną w książce kucharskiej Marii Śleżańskiej z 1904 roku i wspomnianą w Kronice Miasta Poznania, gdzie należała do uroczystego śniadania wielkanocnego końca XIX wieku, tam nawet zapiekana z cebulą i jałowcem. To nie kaszanka, [kaszanka](/pl/rezepte/kaszanka), i nie ciemna wędzona lub grillowa kiełbasa, lecz jasna, łagodna kiełbasa świeża, jedzona przede wszystkim na Wielkanoc, często jako dodatek do [żurku](/pl/rezepte/zurek). Rodzaje i cechy jakościowe wędlin opisuje [leksykon rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy).",
    shopDe:
      "Frische Biała kiełbasa erkennst du im [Polenladen](/de/blog/polenladen-einkaufen) an der blassrosa bis grauweißen Farbe, einer kurzen Zutatenliste und lückenloser Kühlkette, ohne stechenden Kunstrauchgeruch. Dunkle Grill- oder Rauchwurst ist für dieses Rezept die falsche Wahl. Meerrettich, Senf und Brot bekommst du im Supermarkt. Welche Wurstsorten wofür stehen, erklärt weiter das [Kiełbasa-Arten-Lexikon](/de/blog/kielbasa-arten), für ein ganzes Żurek-Wochenende brauchst du zusätzlich Zakwas laut [Zakwas-Guide](/de/blog/zakwas-zurek).",
    shopPl:
      "Świeżą białą kiełbasę w [sklepie polskim](/pl/blog/sklep-polski-zakupy) poznasz po bladoróżowej do szarobiałej barwie, krótkim składzie i nieprzerwanym łańcuchu chłodniczym, bez ostrego zapachu sztucznego dymu. Ciemna grillowa lub wędzona kiełbasa to zła linia pod ten przepis. Chrzan, musztardę i chleb kupisz w markecie. Które rodzaje do czego pasują, wyjaśnia [leksykon rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy), a na cały żurkowy weekend potrzebny będzie jeszcze zakwas według [przewodnika po zakwasie](/pl/blog/zakwas-na-zurek).",
    techniqueDe:
      "Die Wurst unter dem Siedepunkt gar ziehen lassen, so bleibt die Hülle ganz und das Innere saftig, während sprudelndes Kochen sie platzen und austrocknen lässt. Im Ofen reicht ein leichtes Anfärben, die Wurst soll hell bleiben und keinen Smokehouse-Char bekommen. Als Einlage für [Żurek](/de/rezepte/zurek) entweder separat garen oder erst spät in die Suppe geben, damit sie nicht zerfällt. Rohe Ware immer vollständig durchgaren und Schneidebretter danach von anderen Zutaten trennen. Die eigentliche Suppentechnik und der Ansatz bleiben bei Żurek und dem [Zakwas-Guide](/de/blog/zakwas-zurek).",
    techniquePl:
      "Kiełbasę gotuj poniżej wrzenia, wtedy osłonka zostaje cała, a środek soczysty, podczas gdy gwałtowne gotowanie ją pęka i suszy mięso. W piekarniku wystarczy lekkie zarumienienie, kiełbasa ma zostać jasna, bez efektu wędzarni. Jako dodatek do [żurku](/pl/rezepte/zurek) gotuj ją osobno albo dodaj późno do zupy, żeby się nie rozpadła. Surową kiełbasę zawsze dogotuj do końca, a deski po niej oddziel od innych składników. Sama technika zupy i zakwasu zostaje przy żurku i [przewodniku po zakwasie](/pl/blog/zakwas-na-zurek).",
    serveDe:
      "Klassisch mit Meerrettich, Senf und Brot, oder in Scheiben im Teller [Żurek](/de/rezepte/zurek). Am Osterbuffet passt sie laut [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan), der als eigener Menü-Artikel den Rahmen liefert, während hier nur das Kochen der Wurst behandelt wird. Verwechsle sie nicht mit der gebratenen [Kaszanka](/de/rezepte/kaszanka). Reste kühl stellen und am nächsten Tag entweder in der Suppe oder kurz erwärmt mit Brot verwenden.",
    servePl:
      "Klasycznie z chrzanem, musztardą i chlebem, albo w plastrach w [żurku](/pl/rezepte/zurek). Na wielkanocnym stole pasuje według [menu wielkanocnego](/pl/blog/menu-wielkanocne), które jako osobny artykuł daje ramę święta, tu w centrum zostaje tylko gotowanie samej kiełbasy. Nie myl jej ze smażoną [kaszanką](/pl/rezepte/kaszanka). Resztki schłodź, a nazajutrz wykorzystaj w zupie albo krótko podgrzej z chlebem.",
    diasporaDe:
      "In Deutschland wird Biała kiełbasa oft zum Muss-Einkauf vor Ostern, weil die Regale im [Polenladen](/de/blog/polenladen-einkaufen) rechtzeitig vor dem Feiertag knapp werden. Kinder dürfen Senf und Meerrettich aussuchen, am heißen Topf übernehmen Erwachsene. Wer parallel [Żurek](/de/rezepte/zurek) plant, sollte den Speiseplan nicht überladen, den zeitlichen Rahmen dafür setzt der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan). Fragen zu Wurstsorten beantwortet weiterhin das Lexikon, nicht dieses Rezept.",
    diasporaPl:
      "W Niemczech biała kiełbasa to często zakup obowiązkowy przed Wielkanocą, bo półki w [sklepie polskim](/pl/blog/sklep-polski-zakupy) pustoszeją wcześnie przed świętem. Dzieci mogą wybierać musztardę i chrzan, przy gorącym garnku pomagają dorośli. Kto planuje równolegle [żurek](/pl/rezepte/zurek), niech nie przeciąża menu, ramy czasowe daje [menu wielkanocne](/pl/blog/menu-wielkanocne). Pytania o rodzaje kiełbasy wciąż należą do leksykonu, nie do tego przepisu.",
    mistakesDe:
      "Dunkle Grillwurst als „biała“ zu verkaufen führt in die Irre, denn die echte Version bleibt hell und mild. Zu starkes, sprudelndes Kochen lässt die Hülle platzen. Die Wurst wird gelegentlich mit der [Kaszanka](/de/rezepte/kaszanka) oder mit den Arten aus dem [Kiełbasa-Lexikon](/de/blog/kielbasa-arten) verwechselt, dabei behandelt dieses Rezept nur das Garen der hellen Frischwurst.",
    mistakesPl:
      "Sprzedawanie ciemnej kiełbasy grillowej jako białej wprowadza w błąd, bo prawdziwa wersja pozostaje jasna i łagodna. Zbyt mocne, gwałtowne gotowanie pęka osłonkę. Kiełbasę czasem myli się z [kaszanką](/pl/rezepte/kaszanka) albo z rodzajami z [leksykonu kiełbasy](/pl/blog/rodzaje-kielbasy), choć ten przepis dotyczy wyłącznie gotowania jasnej kiełbasy świeżej.",
    variantsDe:
      "Du kannst nur im Topf, nur im Ofen oder in Kombination garen, also kurz gar ziehen lassen und danach leicht nachbacken, gerne auch mit Zwiebeln im Ofen, ganz wie es die Poznańer Osterküche des 19. Jahrhunderts schon kannte. Die Einlage-Variante bleibt eng an [Żurek](/de/rezepte/zurek) gekoppelt, ihr dunkler Nachbar ist die [Kaszanka](/de/rezepte/kaszanka). Sorten und Qualitätsmerkmale beschreibt das [Kiełbasa-Arten-Lexikon](/de/blog/kielbasa-arten), zum Anlass passt der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan), zum Ansatz der [Zakwas-Guide](/de/blog/zakwas-zurek).",
    variantsPl:
      "Możesz gotować tylko w garnku, tylko w piekarniku, albo połączyć oba sposoby, czyli krótko ugotować i potem lekko dopiec, chętnie z cebulą w piekarniku, tak jak robiono to już w poznańskiej kuchni wielkanocnej XIX wieku. Wariant dodatkowy zostaje ściśle powiązany z [żurkiem](/pl/rezepte/zurek), jej ciemnym sąsiadem jest [kaszanka](/pl/rezepte/kaszanka). Rodzaje i jakość opisuje [leksykon rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy), do okazji pasuje [menu wielkanocne](/pl/blog/menu-wielkanocne), do zakwasu [przewodnik po zakwasie](/pl/blog/zakwas-na-zurek).",
  },
};
