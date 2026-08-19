/**
 * Wave 14 Paket D — FACTS for leczo.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W14_FACTS_D } from "./recipe-articles-w14-d";
 * Object.assign(FACTS, …, W14_FACTS_D);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Cross-links to keep distinct: Leczo (Paprika-Tomaten-Eintopf mit Kiełbasa)
 * vs Gulasz wieprzowy, Bigos (Kraut-Fleisch), Fasolka po bretońsku (Bohnen).
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

export const W14_FACTS_D: Record<string, ArticleFacts> = {
  "recipe-leczo": {
    dishDe: "Leczo",
    dishPl: "Leczo",
    vibeDe: "paprika-süß, tomatig, alltagsnah, Gemüse führt, Wurst trägt",
    vibePl: "paprykowo-słodka, pomidorowa, codzienna, warzywa prowadzą, kiełbasa niesie",
    originDe:
      "Leczo geht auf das ungarische Lecsó zurück, und dessen Geschichte beginnt mit zwei amerikanischen Importen, die Europa lange ignorierte: Paprika und Tomate erreichten über die Osmanen den Balkan, wo sie zuerst von Türken, Arabern und sephardischen Juden zu einfachen Eintöpfen verarbeitet wurden. Erst im 19. Jahrhundert begannen ungarische Bäuerinnen und Bauern rund um Szeged und Kalocsa, getrocknete Paprikaschoten zu dem Gewürz zu mahlen, das heute die gesamte Küche prägt, während die dünnwandige, süße Spitzpaprika namens TV paprika (für tölteni való, „zum Füllen“) frisch in den Topf wanderte. Sprachforscher vermuten, dass der Name selbst lautmalerisch ist, abgeleitet von einem ungarischen Dialektwort für weich und breiig gekochtes Gemüse, nicht, wie oft angenommen, von bulgarischen Wandergärtnern. Von Ungarn aus verbreitete sich das Gericht über die gesamte Region, wobei jedes Land seine eigene Linie zog: Serbien entwickelte đuveč und das eingekochte ajvar, Rumänien die zacuscă, und in Polen wurde aus der ungarischen Beilage ein eigenständiges Hauptgericht, bei dem Kiełbasa fast immer mitkocht und Zucchini gelegentlich dazukommt, was das polnische Leczo der französischen Ratatouille annähert. Das ist kein [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy), dort führt langes Schmoren von Schweinewürfeln in Paprikasoße, hier bestimmen weiche Paprikastreifen und Tomatensauce das Bild. Auch kein [Bigos](/de/rezepte/bigos) mit seinen Kraut- und Fleischschichten und keine [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku) mit Bohnen als Basis.",
    originPl:
      "Leczo wywodzi się z węgierskiego lecsó, a jego historia zaczyna się od dwóch amerykańskich importów, które Europa długo ignorowała: papryka i pomidor trafiły przez Turków osmańskich na Bałkany, gdzie najpierw wykorzystywali je w prostych potrawach duszonych Turcy, Arabowie i Żydzi sefardyjscy. Dopiero w XIX wieku węgierscy chłopi w okolicach Szegedu i Kalocsy zaczęli mielić suszone strąki na przyprawę, która dziś definiuje całą kuchnię, podczas gdy cienkościenna, słodka papryka odmiany TV paprika (od tölteni való, „do nadziewania”) trafiała do garnka na świeżo. Językoznawcy przypuszczają, że sama nazwa ma charakter dźwiękonaśladowczy, pochodzący od węgierskiego gwarowego słowa oznaczającego miękko rozgotowane warzywa, a nie, jak się często sądzi, od bułgarskich ogrodników wędrownych. Z Węgier danie rozeszło się po całym regionie, a każdy kraj nadał mu własny charakter: Serbia rozwinęła đuveč i zapiekany ajvar, Rumunia zacuscă, a w Polsce z węgierskiego dodatku zrobiło się samodzielne danie główne, w którym prawie zawsze gotuje się kiełbasa, a czasem dochodzi cukinia, co upodabnia polskie leczo do francuskiej ratatouille. To nie [gulasz wieprzowy](/pl/rezepte/gulasz-wieprzowy), tam prowadzi długie duszenie kostki wieprzowiny w sosie paprykowym, tu obraz tworzą miękkie paski papryki i sos pomidorowy. To też nie [bigos](/pl/rezepte/bigos) z warstwami kapusty i mięsa ani [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku) z fasolą jako bazą.",
    shopDe:
      "Paprika und Tomaten oder Passata bekommst du im Supermarkt. Kiełbasa kaufst du am besten im [Polenladen](/de/blog/polenladen-einkaufen), geräuchert oder im Krakauer-Schnitt für Scheiben, Typen und Qualität erklärt das [Kiełbasa-Arten-Lexikon](/de/blog/kielbasa-arten). Dazu edelsüßes Paprikapulver, optional etwas [Majeranek](/de/blog/majeranek), sowie Öl oder Schmalz. Einen Schweinenacken wie für [Gulasz](/de/rezepte/gulasz-wieprzowy) brauchst du hier nicht, die Wurst übernimmt die Proteinrolle.",
    shopPl:
      "Paprykę i pomidory lub passatę kupisz w markecie. Kiełbasę najlepiej wybrać w [sklepie polskim](/pl/blog/sklep-polski-zakupy), wędzoną lub w kroju krakowskim do plastrów, typy i jakość opisuje [leksykon rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy). Do tego papryka słodka w proszku, opcjonalnie odrobina [majeranku](/pl/blog/majeranek-leksykon), oraz olej lub smalec. Karkówki jak do [gulaszu](/pl/rezepte/gulasz-wieprzowy) tu nie potrzebujesz, rolę białka przejmuje kiełbasa.",
    techniqueDe:
      "Die Zwiebel wird zuerst glasig gedünstet, danach zieht die Paprika mit, bis sie weich, aber nicht matschig ist, ein kurzer Widerstand beim Anbeißen bleibt am Ende erwünscht. Die Wurst kommt erst kurz vor der Flüssigkeit dazu und wird nur angebraten, nicht durchgekocht, damit sie ihre eigene Würze behält. Tomate und Paprikapulver bringen dann Säure und Farbe, danach köchelt alles zugedeckt, bis sich die Sauce bindet, ganz anders als die neunzig Minuten Schmorzeit bei [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy), wo das Fleisch im Mittelpunkt steht. Optional lässt sich ein Ei in Mulden einschlagen und zugedeckt stocken, wie es die ungarische bogrács-Tradition am offenen Feuer schon vorsah. Majeranek sparsam dosieren, mehr dazu im [Majeranek-Lexikon](/de/blog/majeranek).",
    techniquePl:
      "Cebulę dusi się najpierw do szklistości, potem dołącza papryka i mięknie, ale nie powinna się rozgotować, lekki opór przy gryzieniu na końcu jest pożądany. Kiełbasa trafia do garnka dopiero tuż przed płynami i tylko się podsmaża, a nie długo gotuje, żeby zachowała własny smak. Pomidor i papryka w proszku dają kwasowość i kolor, potem całość dusi się pod przykryciem, aż sos się zwiąże, zupełnie inaczej niż dziewięćdziesiąt minut duszenia w [gulaszu wieprzowym](/pl/rezepte/gulasz-wieprzowy), gdzie w centrum jest mięso. Opcjonalnie można wbić jajko w zagłębienia i zestalić pod przykryciem, tak jak robiono to od dawna przy węgierskiej tradycji bograca nad ogniem. Majeranek dawkuj oszczędnie, więcej pisze o tym [leksykon majeranku](/pl/blog/majeranek-leksykon).",
    serveDe:
      "Heiß mit Brot, Reis oder Kartoffeln servieren. Als ruhiger Alltagsteller passt Leczo neben den Rhythmus des [Sonntagsessens](/de/blog/sonntagsessen-polnisch), ohne diesen größeren Menürahmen zu ersetzen. Es ist kein Ersatz für [Bigos](/de/rezepte/bigos), Kraut und Paprika bleiben zwei verschiedene Geschmackswelten. Reste schmecken am nächsten Tag in der Pfanne aufgewärmt oft noch runder, weil sich die Aromen weiter verbinden.",
    servePl:
      "Podawaj gorące z chlebem, ryżem lub ziemniakami. Jako spokojny talerz dnia pasuje obok rytmu [obiadu niedzielnego](/pl/blog/obiad-niedzielny), nie zastępując tej szerszej ramy menu. To nie zamiennik [bigosu](/pl/rezepte/bigos), kapusta i papryka to dwa różne światy smaku. Resztki odgrzane następnego dnia na patelni często smakują jeszcze lepiej, bo smaki mają czas się przegryźć.",
    diasporaDe:
      "In Deutschland landet Leczo oft als schneller Topf nach der Schicht auf dem Tisch: Paprika aus dem Supermarkt, Kiełbasa aus dem [Polenladen](/de/blog/polenladen-einkaufen), fertig in weniger als einer Stunde. Kinder mögen meist die milde Süße der Paprika, wer es schärfer mag, gibt am Tisch noch Chili dazu. Wer sich über Wurstsorten informieren will, findet Details im [Kiełbasa-Arten-Lexikon](/de/blog/kielbasa-arten). Am Wochenende passt Leczo gut zum ruhigeren Rahmen des [Sonntagsessens](/de/blog/sonntagsessen-polnisch).",
    diasporaPl:
      "W Niemczech leczo trafia na stół często jako szybki garnek po pracy: papryka z marketu, kiełbasa ze [sklepu polskiego](/pl/blog/sklep-polski-zakupy), gotowe w niecałą godzinę. Dzieci zwykle lubią łagodną słodycz papryki, kto chce ostrzej, dosypuje chili przy stole. Kto chce dowiedzieć się więcej o rodzajach kiełbasy, znajdzie szczegóły w [leksykonie rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy). W weekend leczo dobrze pasuje do spokojniejszego rytmu [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
    mistakesDe:
      "Leczo mit [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy) zu verwechseln und Würfelfleisch neunzig Minuten zu schmoren, verfehlt den Kern des Gerichts. Rohe, noch knackige Paprika bedeutet meist zu kurze Garzeit, zu wenig Tomate macht die Sauce trocken statt sämig. Dunkle Grillwurst allein ohne die dominierende Gemüsemenge verschiebt das Gericht in eine andere Richtung, denn Leczo lebt von der Balance zwischen Paprika, Tomate und nur einer moderaten Menge Wurst.",
    mistakesPl:
      "Mylenie leczo z [gulaszem wieprzowym](/pl/rezepte/gulasz-wieprzowy) i duszenie kostki mięsa przez dziewięćdziesiąt minut mija się z sensem tego dania. Surowa, wciąż chrupiąca papryka zwykle oznacza za krótkie gotowanie, za mało pomidora robi sos suchy zamiast aksamitnego. Sama ciemna kiełbasa grillowa bez dominującej ilości warzyw przesuwa danie w inną stronę, bo leczo żyje z równowagi między papryką, pomidorem i tylko umiarkowaną ilością kiełbasy.",
    variantsDe:
      "Ganz ohne Wurst wird Leczo zur vegetarischen Variante aus Paprika und Tomate allein, mit Zucchini nähert es sich der polnischen Alltagslinie mit Ratatouille-Einschlag, mit einem eingeschlagenen Ei erinnert es an die ungarische bogrács-Tradition am offenen Feuer. Der Nachbar mit langem Schmorfleisch bleibt [Gulasz](/de/rezepte/gulasz-wieprzowy), der Krauttopf [Bigos](/de/rezepte/bigos), der Bohneneintopf [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku). Würze erklärt das [Majeranek-Lexikon](/de/blog/majeranek), Wursttypen das [Kiełbasa-Arten-Lexikon](/de/blog/kielbasa-arten), typische Zutaten findest du im [Polenladen](/de/blog/polenladen-einkaufen).",
    variantsPl:
      "Zupełnie bez kiełbasy leczo staje się wersją wegetariańską z samej papryki i pomidora, z cukinią zbliża się do polskiej, codziennej linii z nutą ratatouille, z wbitym jajkiem przypomina węgierską tradycję bograca znad ogniska. Sąsiad z długo duszonym mięsem to [gulasz](/pl/rezepte/gulasz-wieprzowy), kapuściany garnek to [bigos](/pl/rezepte/bigos), fasolowy gulasz to [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku). O przyprawie pisze [leksykon majeranku](/pl/blog/majeranek-leksykon), o rodzajach kiełbasy [leksykon rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy), typowe składniki znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
  },
};
