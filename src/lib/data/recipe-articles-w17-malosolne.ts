/**
 * Wave 17 (malosolne gap fill) — FACTS for the 3 Ogórki małosolne variants
 * that were accidentally left out of the original Wave 17 batch: ostre
 * (chili), miod (honey), deb (oak leaf). The classic variant's FACTS live
 * in recipe-articles-w17.ts under "recipe-ogorki-malosolne" and stay the
 * primary cross-link partner and quality reference for these three.
 *
 * Integrator: merge into recipe-articles.ts:
 * import { W17_MALOSOLNE_FACTS } from "./recipe-articles-w17-malosolne";
 * Object.assign(FACTS, W17_MALOSOLNE_FACTS);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale.
 * Ownership: all three stay short-ferment Małosolne (1-3 days at room
 * temperature, ~2% brine), never the long-fermented Ogórki kiszone or the
 * vinegar-based Ogórki konserwowe; keep that distinction accurate.
 */

import type { ArticleFacts } from "./recipe-articles-w17";

export const W17_MALOSOLNE_FACTS: Record<string, ArticleFacts> = {
  "recipe-ogorki-malosolne-ostre": {
    dishDe: "Ogórki małosolne scharf",
    dishPl: "Ogórki małosolne ostre",
    vibeDe: "die scharfe Linie der Małosolne, mit frischen Chilischoten und Meerrettich in derselben milden Lake",
    vibePl: "ostra linia małosolnych, ze świeżym chili i chrzanem w tej samej łagodnej zalewie",
    originDe:
      "Die scharfe Linie der [Ogórki małosolne](/de/rezepte/ogorki-malosolne) übernimmt die komplette Technik der klassischen Version, nur Chili und ein Stück Meerrettich kommen als Würze mit ins Glas. Historisch war Meerrettich in Kleinpolen und im Süden Polens ohnehin fester Bestandteil vieler Kiszonki, weil seine Schärfe und seine Gerbstoffe Fäulniskeimen entgegenwirken und den Gurken zugleich einen kräftigeren, erdigeren Ton geben, frische Chilischoten sind dagegen ein jüngerer Zusatz, der erst mit der breiteren Verfügbarkeit von Chili in polnischen Supermärkten in die Hausrezepte einzog. Anders als bei den essiggesäuerten [Ogórki konserwowe](/de/rezepte/ogorki-konserwowe) trägt hier weiterhin ausschließlich die Milchsäuregärung die Säure, Chili verändert nur den Geschmack, nicht die zugrunde liegende Technik oder die Haltbarkeitslogik. Wie bei der Grundversion bleibt das Zeitfenster kurz, ein bis drei Tage bei Zimmertemperatur, denn genau dieses kurze Fenster unterscheidet die Małosolne von den lange gegorenen [Ogórki kiszone](/de/rezepte/ogorki-kiszone).",
    originPl:
      "Ostra linia [ogórków małosolnych](/pl/rezepte/ogorki-malosolne) przejmuje całą technikę wersji klasycznej, do słoika trafiają tylko chili i kawałek chrzanu jako przyprawa. Historycznie chrzan w Małopolsce i na południu Polski był i tak stałym elementem wielu kiszonek, bo jego ostrość i garbniki działają przeciw bakteriom gnilnym, a ogórkom dają mocniejszy, bardziej ziemisty ton, świeże papryczki chili są za to dodatkiem nowszym, który trafił do domowych przepisów wraz z szerszą dostępnością chili w polskich marketach. W przeciwieństwie do octowych [ogórków konserwowych](/pl/rezepte/ogorki-konserwowe) kwas nadal powstaje tu wyłącznie przez fermentację mlekową, chili zmienia jedynie smak, a nie samą technikę czy logikę trwałości. Tak jak w wersji podstawowej okno czasowe zostaje krótkie, jeden do trzech dni w temperaturze pokojowej, bo właśnie to krótkie okno odróżnia małosolne od długo kiszonych [ogórków kiszonych](/pl/rezepte/ogorki-kiszone).",
    shopDe:
      "Kaufe dieselben festen, frischen kleinen Gurken wie für die klassische Version, dazu ein bis zwei frische Chilischoten, ein Stück Meerrettichwurzel, Knoblauch und Dill. Frische Chilischoten gibt es meist günstig im Supermarkt, unjodiertes Salz und Meerrettichwurzel oft zuverlässiger im [Polenladen](/de/blog/polenladen-einkaufen).",
    shopPl:
      "Kup te samo twarde, świeże małe ogórki co do wersji klasycznej, do tego jedną lub dwie świeże papryczki chili, kawałek korzenia chrzanu, czosnek i koper. Chili dostaniesz zwykle w markecie, sól niejodowaną i chrzan czasem pewniej znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    techniqueDe:
      "Die 2-prozentige Lake bleibt exakt wie bei der klassischen Version, denn Chili verändert die Milchsäuregärung selbst nicht, es liefert nur Capsaicin für die Schärfe, keine zusätzliche Säure oder Haltbarkeit. Die längs eingeschnittenen Chilischoten geben ihre Schärfe schneller an die Lake ab als ganze Schoten, deshalb schmeckt diese Linie oft schon nach 24 Stunden deutlich würziger als die milde Grundversion. Wie immer müssen die Gurken vollständig unter der Lake bleiben, und sobald sie nach einer leichten, runden Säure mit spürbarer Schärfe schmecken, gehören sie in den Kühlschrank, sonst kippt auch diese Linie langsam Richtung kräftigerer Kiszone.",
    techniquePl:
      "Zalewa w 2 procentach zostaje identyczna jak w wersji klasycznej, bo chili nie zmienia samej fermentacji mlekowej, dostarcza tylko kapsaicynę odpowiedzialną za ostrość, a nie dodatkowy kwas czy trwałość. Papryczki chili nacięte wzdłuż oddają ostrość do zalewy szybciej niż całe, dlatego ten wariant często smakuje wyraźnie ostrzej już po 24 godzinach niż łagodna wersja bazowa. Tak jak zawsze ogórki muszą zostać całkowicie pod zalewą, a gdy tylko nabiorą lekkiej, okrągłej kwaskowatości z wyczuwalną ostrością, przenieś je do lodówki, inaczej i ten wariant powoli przechyli się w stronę mocniejszych kiszonych.",
    serveDe:
      "Serviere die scharfen Gurken zu Grillwurst oder deftigem Aufschnitt, ihre Schärfe passt gut zu fettigem Fleisch vom Grill. Wer es milder mag, findet die Linie mit [Honig](/de/rezepte/ogorki-malosolne/honig), die klassische Version bleibt bei den [Ogórki małosolne klassisch](/de/rezepte/ogorki-malosolne/klassisch).",
    servePl:
      "Podawaj ostre ogórki do kiełbasy z grilla albo wyrazistych wędlin, ich ostrość dobrze przełamuje tłuste mięso z rusztu. Kto woli łagodniej, znajdzie wariant z [miodem](/pl/rezepte/ogorki-malosolne/miod), wersja klasyczna zostaje przy [ogórkach małosolnych klasycznych](/pl/rezepte/ogorki-malosolne/klasyczne).",
    diasporaDe:
      "In Deutschland lässt sich diese Linie genauso schnell ansetzen wie die klassische Version, sobald im Sommer frische kleine Gurken und Chili im Supermarkt oder im [Polenladen](/de/blog/polenladen-einkaufen) liegen. Kinder dürfen beim Schichten von Knoblauch und Dill helfen, das Einschneiden der Chilischoten und das Ansetzen der Lake bleibt bei den Erwachsenen. Fehlt Meerrettichwurzel, hilft der Überblick zu [Ersatzprodukten](/de/blog/ersatzprodukte-de).",
    diasporaPl:
      "W Niemczech ten wariant przygotujesz tak samo szybko jak klasyczny, gdy tylko latem w markecie albo w [sklepie polskim](/pl/blog/sklep-polski-zakupy) pojawią się świeże małe ogórki i chili. Dzieci mogą pomagać przy układaniu czosnku i koperku, nacinanie chili i przygotowanie zalewy zostaje przy dorosłych. Gdy brakuje korzenia chrzanu, pomogą [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
    mistakesDe:
      "Zu viel Chili auf einmal macht die Lake unangenehm brennend statt angenehm scharf, hier lohnt sich Zurückhaltung und ein Nachwürzen erst beim zweiten Glas. Die Salzmenge trotz Chili zu erhöhen ist unnötig, denn die Schärfe kommt vom Capsaicin und nicht vom Salz. Und wer diese Linie mit den essiggesäuerten [Ogórki konserwowe](/de/rezepte/ogorki-konserwowe) verwechselt, erwartet die falsche Haltbarkeit und den falschen Säuregrad.",
    mistakesPl:
      "Za dużo chili na raz robi zalewę nieprzyjemnie piekącą, a nie przyjemnie ostrą, tu lepiej zachować umiar i dołożyć więcej przy następnym słoiku. Zwiększanie ilości soli z powodu chili jest zbędne, bo ostrość pochodzi z kapsaicyny, a nie z soli. A kto myli ten wariant z octowymi [ogórkami konserwowymi](/pl/rezepte/ogorki-konserwowe), oczekuje złej trwałości i złego poziomu kwasu.",
    variantsDe:
      "Wer die Schärfe noch weiter steigern will, nimmt zwei statt einer Chilischote oder lässt die Kerne drin, wer es lieber rund und süß mag, wechselt zur Linie mit [Honig](/de/rezepte/ogorki-malosolne/honig) oder zur besonders knackigen Linie mit [Eichenblatt](/de/rezepte/ogorki-malosolne/eichenblatt). Alle drei teilen sich die klassische Basis bei den [Ogórki małosolne](/de/rezepte/ogorki-malosolne), wer stattdessen lange gegorene Gurken für den Winter sucht, findet sie bei den [Ogórki kiszone](/de/rezepte/ogorki-kiszone).",
    variantsPl:
      "Kto chce jeszcze ostrzej, bierze dwie papryczki chili zamiast jednej albo zostawia w nich pestki, kto woli okrągło i słodko, przechodzi do wariantu z [miodem](/pl/rezepte/ogorki-malosolne/miod) albo do szczególnie chrupiącego wariantu z [liściem dębu](/pl/rezepte/ogorki-malosolne/lisc-debu). Wszystkie trzy dzielą klasyczną bazę [ogórków małosolnych](/pl/rezepte/ogorki-malosolne), a kto szuka długo kiszonych ogórków na zimę, znajdzie je w [ogórkach kiszonych](/pl/rezepte/ogorki-kiszone).",
  },

  "recipe-ogorki-malosolne-miod": {
    dishDe: "Ogórki małosolne mit Honig",
    dishPl: "Ogórki małosolne z miodem",
    vibeDe: "die runde, leicht süße Linie der Małosolne, mit einem Löffel Honig in der milden Lake",
    vibePl: "okrągła, lekko słodka linia małosolnych, z łyżką miodu w łagodnej zalewie",
    originDe:
      "Ein Löffel Honig in der Lake ist ein alter Trick aus Wielkopolska, der schon bei den lange gegorenen [Ogórki kiszone](/de/rezepte/ogorki-kiszone) die Säure abrundet, und bei den kurz gezogenen [Ogórki małosolne](/de/rezepte/ogorki-malosolne) wirkt er genauso, nur schneller spürbar, weil die Gärzeit hier nur ein bis drei Tage beträgt. Honig liefert zusätzlichen Zucker, den die Milchsäurebakterien neben dem natürlichen Zucker der Gurke verstoffwechseln, dadurch wirkt die entstehende Säure runder und weniger scharf, ohne dass die Gurke dabei tatsächlich süß schmeckt, der Zucker wird im kurzen Zeitfenster größtenteils mitvergoren. Wichtig ist die Menge, ein einzelner Esslöffel auf einen Liter Lake reicht völlig, mehr Honig kann die empfindliche Balance aus Milchsäurebakterien und wilden Hefen kippen und die Lake unruhig schäumen lassen statt sie nur milder zu machen.",
    originPl:
      "Łyżka miodu w zalewie to stary trik z Wielkopolski, który łagodzi kwas już przy długo kiszonych [ogórkach kiszonych](/pl/rezepte/ogorki-kiszone), a przy krótko kiszonych [ogórkach małosolnych](/pl/rezepte/ogorki-malosolne) działa tak samo, tylko szybciej widocznie, bo czas fermentacji trwa tu zaledwie jeden do trzech dni. Miód dostarcza dodatkowego cukru, który bakterie kwasu mlekowego przetwarzają obok naturalnego cukru ogórka, dzięki temu powstający kwas jest bardziej okrągły i mniej ostry, choć sam ogórek nie robi się przy tym słodki, cukier w krótkim oknie czasowym w większości zostaje sfermentowany. Ważna jest ilość, jedna łyżka na litr zalewy w zupełności wystarcza, więcej miodu może zaburzyć delikatną równowagę między bakteriami kwasu mlekowego i dzikimi drożdżami i sprawić, że zalewa zacznie się niespokojnie pienić, zamiast tylko złagodnieć.",
    shopDe:
      "Kaufe dieselben festen, frischen kleinen Gurken wie für die klassische Version, dazu flüssigen Honig, Senfkörner, Knoblauch und Dill. Guten Honig gibt es oft im Supermarkt, unjodiertes Salz und Senfkörner günstig im [Polenladen](/de/blog/polenladen-einkaufen).",
    shopPl:
      "Kup te samo twarde, świeże małe ogórki co do wersji klasycznej, do tego płynny miód, gorczycę, czosnek i koper. Dobry miód znajdziesz zwykle w markecie, sól niejodowaną i gorczycę tanio w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    techniqueDe:
      "Honig muss sich vollständig in der kalten Lake auflösen, bevor die Gurken damit bedeckt werden, sonst zieht ein Teil der Süße ungleichmäßig durch. Ein Esslöffel auf einen Liter Wasser ist die Obergrenze, mehr Honig füttert wilde Hefen stärker als die gewünschten Milchsäurebakterien und kann die Lake schäumen lassen statt sie nur abzurunden. Ansonsten gilt exakt dieselbe Regel wie bei der klassischen Version, sobald die Gurken nach einer runden, milden Säure schmecken, gehören sie in den Kühlschrank.",
    techniquePl:
      "Miód musi się całkowicie rozpuścić w chłodnej zalewie, zanim zalejesz nim ogórki, inaczej słodycz przenika nierówno. Łyżka na litr wody to górna granica, więcej miodu żywi bardziej dzikie drożdże niż pożądane bakterie kwasu mlekowego i może sprawić, że zalewa zacznie pienić się zamiast tylko złagodnieć. Poza tym obowiązuje ta sama zasada co w wersji klasycznej, gdy tylko ogórki nabiorą okrągłej, łagodnej kwaskowatości, przenieś je do lodówki.",
    serveDe:
      "Serviere die milde, runde Version zu kaltem Aufschnitt oder Braten, ihre sanfte Süße passt gut zu salzigem Fleisch. Wer es lieber scharf mag, findet die Linie mit [Chili](/de/rezepte/ogorki-malosolne/scharf), Essiggurken bleiben bei den [Ogórki konserwowe](/de/rezepte/ogorki-konserwowe).",
    servePl:
      "Podawaj tę łagodną, okrągłą wersję do wędlin albo pieczystego na chłodno, jej delikatna słodycz dobrze łączy się z solonym mięsem. Kto woli ostro, znajdzie wariant z [chili](/pl/rezepte/ogorki-malosolne/ostre), octowa wersja zostaje przy [ogórkach konserwowych](/pl/rezepte/ogorki-konserwowe).",
    diasporaDe:
      "In Deutschland ist diese Linie ein einfacher Einstieg für alle, die Milchsäuregärung noch nicht kennen, weil Honig die Säure sofort milder macht und weniger Anpassung an den Geschmack braucht. Kinder dürfen beim Schichten von Knoblauch und Dill helfen, das Auflösen des Honigs in der Lake bleibt bei den Erwachsenen. Guten Honig und Senfkörner gibt es im [Polenladen](/de/blog/polenladen-einkaufen).",
    diasporaPl:
      "W Niemczech ten wariant to prosty początek dla tych, którzy nie znają jeszcze fermentacji mlekowej, bo miód od razu łagodzi kwas i wymaga mniejszego przyzwyczajenia się do smaku. Dzieci mogą pomagać przy układaniu czosnku i koperku, rozpuszczanie miodu w zalewie zostaje przy dorosłych. Dobry miód i gorczycę znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    mistakesDe:
      "Zu viel Honig macht die Lake nicht süßer, sondern unruhig und schäumend, weil er wilde Hefen stärker füttert als die Milchsäurebakterien. Honig ungelöst direkt auf die Gurken zu geben lässt ihn ungleichmäßig durchziehen. Und wer von dieser milden Linie eine tatsächlich süße Gurke erwartet, verwechselt sie mit einem Kompott, der Zucker wird im kurzen Ferment größtenteils umgesetzt und schmeckt am Ende kaum noch süß.",
    mistakesPl:
      "Za dużo miodu nie robi zalewy słodszą, tylko niespokojną i pieniącą się, bo silniej żywi dzikie drożdże niż bakterie kwasu mlekowego. Wlewanie nierozpuszczonego miodu prosto na ogórki sprawia, że słodycz przenika nierówno. A kto oczekuje po tej łagodnej linii naprawdę słodkiego ogórka, myli ją z kompotem, bo cukier w krótkim kiszeniu w większości się przetwarza i na końcu smaku prawie nie czuć.",
    variantsDe:
      "Wer es schärfer mag, wechselt zur Linie mit [Chili](/de/rezepte/ogorki-malosolne/scharf), wer mehr Biss sucht, zur Linie mit [Eichenblatt](/de/rezepte/ogorki-malosolne/eichenblatt). Alle drei teilen sich die klassische Basis bei den [Ogórki małosolne](/de/rezepte/ogorki-malosolne), der lange gegorene Nachbar für den Winter bleiben die [Ogórki kiszone](/de/rezepte/ogorki-kiszone).",
    variantsPl:
      "Kto lubi ostrzej, przechodzi do wariantu z [chili](/pl/rezepte/ogorki-malosolne/ostre), kto szuka więcej chrupkości, do wariantu z [liściem dębu](/pl/rezepte/ogorki-malosolne/lisc-debu). Wszystkie trzy dzielą klasyczną bazę [ogórków małosolnych](/pl/rezepte/ogorki-malosolne), długo kiszonym sąsiadem na zimę zostają [ogórki kiszone](/pl/rezepte/ogorki-kiszone).",
  },

  "recipe-ogorki-malosolne-deb": {
    dishDe: "Ogórki małosolne mit Eichenblatt",
    dishPl: "Ogórki małosolne z liściem dębu",
    vibeDe: "die besonders knackige Linie der Małosolne, mit einem Eichenblatt für mehr Biss in der Lake",
    vibePl: "szczególnie chrupiąca linia małosolnych, z liściem dębu dla dodatkowej chrupkości w zalewie",
    originDe:
      "Ein Blatt vom Eichenbaum in der Lake ist derselbe alte Trick, der auch bei den lange gegorenen [Ogórki kiszone](/de/rezepte/ogorki-kiszone) für Biss sorgt, dort schichtete man traditionell Kirsch-, Johannisbeer- oder Eichenblätter zwischen die Gurken, weil ihre Gerbstoffe den Enzymen entgegenwirken, die die Zellwände der Gurke sonst langsam weich kochen. Bei den kurz gezogenen [Ogórki małosolne](/de/rezepte/ogorki-malosolne) ist die Gärzeit zwar viel kürzer, aber gerade deshalb macht sich der Unterschied schnell bemerkbar, ein Glas mit Eichenblatt bleibt am dritten Tag deutlich knackiger als eines ohne. Wichtig ist, nur unbehandelte Blätter vom eigenen Baum oder aus sicherer Quelle zu verwenden, Blätter von befahrenen Straßenrändern oder aus gespritzten Anlagen gehören nicht ins Glas. Wer kein Eichenblatt findet, kann ebenso gut ein Kirsch- oder Meerrettichblatt nehmen, die Wirkung bleibt dieselbe.",
    originPl:
      "Liść z dębu w zalewie to ten sam stary trik, który przy długo kiszonych [ogórkach kiszonych](/pl/rezepte/ogorki-kiszone) daje chrupkość, tam między ogórki tradycyjnie wkładano liście wiśni, porzeczki albo dębu, bo zawarte w nich garbniki działają przeciw enzymom, które inaczej powoli rozmiękczają ściany komórkowe ogórka. Przy krótko kiszonych [ogórkach małosolnych](/pl/rezepte/ogorki-malosolne) czas fermentacji jest wprawdzie znacznie krótszy, ale właśnie dlatego różnica jest szybko widoczna, słoik z liściem dębu trzeciego dnia zostaje wyraźnie bardziej chrupiący niż ten bez liścia. Ważne jest, żeby używać tylko nieopryskanych liści z własnego drzewa albo z pewnego źródła, liście z pobocza ruchliwej drogi albo z opryskiwanych nasadzeń nie nadają się do słoika. Kto nie znajdzie liścia dębu, może równie dobrze użyć liścia wiśni albo chrzanu, działanie zostaje takie samo.",
    shopDe:
      "Kaufe dieselben festen, frischen kleinen Gurken wie für die klassische Version, dazu ein gewaschenes, ungespritztes Eichenblatt oder ersatzweise ein Kirsch- oder Meerrettichblatt, Knoblauch und Dill. Unjodiertes Salz gibt es günstig im [Polenladen](/de/blog/polenladen-einkaufen), das Blatt findet sich am besten im eigenen Garten oder bei einem vertrauten Baum.",
    shopPl:
      "Kup te samo twarde, świeże małe ogórki co do wersji klasycznej, do tego umyty, niepryskany liść dębu albo zamiennie liść wiśni lub chrzanu, czosnek i koper. Sól niejodowaną tanio kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), liść najlepiej znaleźć we własnym ogrodzie albo przy zaufanym drzewie.",
    techniqueDe:
      "Die Gerbstoffe im Eichenblatt binden an die Enzyme, die beim Gären die Zellwände der Gurke aufweichen, dadurch bleibt der Biss auch nach der vollen Gärzeit erhalten. Ein einziges Blatt pro Glas reicht völlig, mehr würde die Lake unnötig bitter und dunkel färben. Ansonsten gilt exakt dieselbe Lake und dieselbe Zeit wie bei der klassischen Version, das Blatt verändert die Salzmenge oder die Gärdauer nicht, es wirkt rein auf die Textur.",
    techniquePl:
      "Garbniki w liściu dębu wiążą się z enzymami, które podczas kiszenia rozmiękczają ściany komórkowe ogórka, dzięki czemu chrupkość zostaje zachowana nawet po pełnym czasie fermentacji. Jeden liść na słoik w zupełności wystarczy, więcej niepotrzebnie zabarwiłoby zalewę na ciemniej i dodało jej goryczy. Poza tym obowiązuje dokładnie ta sama zalewa i ten sam czas co w wersji klasycznej, liść nie zmienia ilości soli ani długości kiszenia, działa wyłącznie na teksturę.",
    serveDe:
      "Serviere die besonders knackigen Gurken zu Grillfleisch oder Brot, ihr fester Biss macht sie zum Lieblingssnack für zwischendurch. Wer es scharf mag, findet die Linie mit [Chili](/de/rezepte/ogorki-malosolne/scharf), lange gegorene Gurken mit demselben Blatt-Trick bleiben bei den [Ogórki kiszone](/de/rezepte/ogorki-kiszone).",
    servePl:
      "Podawaj te szczególnie chrupiące ogórki do grillowanego mięsa albo chleba, ich twardy kęs robi z nich ulubioną przekąskę na co dzień. Kto lubi ostro, znajdzie wariant z [chili](/pl/rezepte/ogorki-malosolne/ostre), długo kiszone ogórki z tym samym trikiem na liść zostają przy [ogórkach kiszonych](/pl/rezepte/ogorki-kiszone).",
    diasporaDe:
      "In Deutschland lohnt sich ein Blick in den eigenen Garten oder Park, bevor man extra danach sucht, ein gesunder Eichen- oder Kirschbaum ohne Straßennähe reicht meist völlig aus. Kinder dürfen beim Aussuchen und Waschen des Blattes helfen, das Schichten der Gurken bleibt bei den Erwachsenen. Frische Gurken und unjodiertes Salz gibt es günstig im [Polenladen](/de/blog/polenladen-einkaufen).",
    diasporaPl:
      "W Niemczech warto najpierw zajrzeć do własnego ogrodu albo parku, zanim zaczniesz szukać dalej, zdrowe drzewo dębu czy wiśni z dala od ruchliwej drogi zwykle w pełni wystarcza. Dzieci mogą pomagać przy wybieraniu i myciu liścia, układanie ogórków zostaje przy dorosłych. Świeże ogórki i sól niejodowaną tanio kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    mistakesDe:
      "Blätter von befahrenen Straßenrändern oder aus gespritzten Anlagen zu verwenden ist ein echtes Risiko und gehört hier nicht hin, nur Blätter aus sicherer Quelle sind geeignet. Mehr als ein Blatt pro Glas macht die Lake nur bitterer, ohne den Biss weiter zu verbessern. Und wer von diesem Blatt eine geschmackliche Veränderung wie bei Chili oder Honig erwartet, verwechselt Textur mit Würze, das Eichenblatt wirkt fast ausschließlich auf die Konsistenz.",
    mistakesPl:
      "Używanie liści z pobocza ruchliwej drogi albo z opryskiwanych nasadzeń to realne ryzyko i tutaj nie ma na to miejsca, nadają się tylko liście z pewnego źródła. Więcej niż jeden liść na słoik tylko dodaje goryczy, nie poprawiając już chrupkości. A kto oczekuje po tym liściu zmiany smaku podobnej do chili czy miodu, myli teksturę z przyprawą, liść dębu działa właściwie wyłącznie na konsystencję.",
    variantsDe:
      "Wer es schärfer mag, wechselt zur Linie mit [Chili](/de/rezepte/ogorki-malosolne/scharf), wer es lieber rund und mild möchte, zur Linie mit [Honig](/de/rezepte/ogorki-malosolne/honig). Alle drei teilen sich die klassische Basis bei den [Ogórki małosolne](/de/rezepte/ogorki-malosolne), denselben Blatt-Trick für mehr Biss nutzen auch die lange gegorenen [Ogórki kiszone](/de/rezepte/ogorki-kiszone).",
    variantsPl:
      "Kto lubi ostrzej, przechodzi do wariantu z [chili](/pl/rezepte/ogorki-malosolne/ostre), kto woli okrągło i łagodnie, do wariantu z [miodem](/pl/rezepte/ogorki-malosolne/miod). Wszystkie trzy dzielą klasyczną bazę [ogórków małosolnych](/pl/rezepte/ogorki-malosolne), ten sam trik na chrupkość wykorzystują też długo kiszone [ogórki kiszone](/pl/rezepte/ogorki-kiszone).",
  },
};
