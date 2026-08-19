/**
 * Wave 13 Paket C — FACTS for chalka + pasztet.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W13_FACTS_C } from "./recipe-articles-w13-c";
 * Object.assign(FACTS, …, W13_FACTS_C);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Chałka = geflochtener Hefezopf/Laib, anders als Babka (Gugelhupf), Pączki, Racuchy und Drożdżówka (/rezepte/drozdzowka)
 * - Pasztet drobiowy = Haus-Pastete, anders als Kaszanka, Kotlet mielony und Klopsy
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

export const W13_FACTS_C: Record<string, ArticleFacts> = {
  "recipe-chalka": {
    dishDe: "Chałka",
    dishPl: "Chałka",
    vibeDe: "weich süßlich, geflochten, goldbraun mit Sesam, Brotlaib statt Gugelhupf",
    vibePl: "miękko słodkawa, pleciona, złota z sezamem, bochenek, nie babka z formy",
    originDe:
      "Chałka geht auf die jüdische Challa zurück, ein geflochtenes Schabbatbrot, dessen Name vom hebräischen Wort für den Teiganteil stammt, der biblisch den Priestern geopfert werden musste. Als eigener Brotname etablierte sich Challa im Mittelalter im süddeutschen und österreichischen Raum, wo aschkenasische Jüdinnen und Juden das geflochtene Brot für den Schabbat backten, ehe es mit der Ostwanderung jüdischer Gemeinden auch nach Polen, in weite Teile Osteuropas und nach Russland gelangte. Während das traditionelle jüdische Schabbatbrot ohne Milchprodukte gebacken wird, damit es sich mit Fleisch- oder Milchgerichten kombinieren lässt, ist die polnische Chałka meist süßer und wird mit Butter und Milch gebacken, oft mit Ei bestrichen und mit Sesam bestreut. Sie hat weder mit dem hohen Hefegugelhupf [Babka](/de/rezepte/babka) noch mit den frittierten [Pączki](/de/rezepte/paczki) oder den Apfelpfannkuchen [Racuchy](/de/rezepte/racuchy-jablka) etwas zu tun, und wer einen Streusel-Hefekuchen vom Blech sucht, findet ihn bei der [Drożdżówka](/de/rezepte/drozdzowka). Den Menürahmen für Ostern liefert der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan).",
    originPl:
      "Chałka wywodzi się od żydowskiej chally, plecionego chleba szabatowego, którego nazwa pochodzi od hebrajskiego określenia porcji ciasta, jaką biblijnie należało ofiarować kapłanom. Jako osobna nazwa chleba challa upowszechniła się w średniowieczu na terenie południowych Niemiec i Austrii, gdzie aszkenazyjscy Żydzi piekli pleciony chleb na szabat, zanim wraz z migracją na wschód trafiła też do Polski, na tereny Europy Wschodniej i do Rosji. O ile tradycyjny żydowski chleb szabatowy piecze się bez nabiału, żeby można go było łączyć zarówno z daniami mięsnymi, jak i mlecznymi, o tyle polska chałka jest zwykle słodsza i pieczona z masłem i mlekiem, często posmarowana jajkiem i posypana sezamem. Nie ma nic wspólnego z wysoką babką z formy [babka](/pl/rezepte/babka), smażonymi [pączkami](/pl/rezepte/paczki) czy jabłkowymi [racuchami](/pl/rezepte/racuchy-jablka), a kto szuka placka drożdżowego z kruszonką z blachy, znajdzie go w [drożdżówce](/pl/rezepte/drozdzowka). Ramę menu na Wielkanoc daje [menu wielkanocne](/pl/blog/menu-wielkanocne).",
    shopDe:
      "Für den Zopf brauchst du Mehl, Milch, Hefe, Zucker, Eier, Butter und Salz, dazu optional Sesam für obenauf. Sesam und gute Hefe findest du oft im [Polenladen](/de/blog/polenladen-einkaufen), fehlt etwas, hilft der Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) weiter. Wie du mit Hefe umgehst, erklärt die [Makowiec-Technik](/de/blog/makowiec-technik). Die Form bleibt Backblech und Zopf, keine Gugelhupf-Form wie bei der [Babka](/de/rezepte/babka).",
    shopPl:
      "Na warkocz potrzebujesz mąki, mleka, drożdży, cukru, jajek, masła i soli, a opcjonalnie sezamu na wierzch. Sezam i dobre drożdże często kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), a gdy czegoś brakuje, pomogą [zamienniki składników](/pl/blog/zamienniki-skladnikow). O pracy z drożdżami mówi [technika makowca](/pl/blog/makowiec-technika). Forma to blacha i warkocz, a nie forma babkowa jak przy [babce](/pl/rezepte/babka).",
    techniqueDe:
      "Die Hefe lauwarm aktivieren und den Teig elastisch kneten, bis er sich verdoppelt hat. Drei oder vier gleich schwere Stränge fest flechten und die Enden gut unterschieben. Nach dem zweiten Gehen mit Ei bestreichen, mit Sesam bestreuen und dann goldbraun backen. Zu heiß verbrennt die Oberfläche, bevor der Kern durchgebacken ist, ein zu locker geflochtener Zopf fällt beim Backen auseinander, während ein zu straff geflochtener Zopf kompakt wird. Erst nach kurzem Abkühlen anschneiden, heiß reißt die Krume sonst ein.",
    techniquePl:
      "Drożdże aktywuj na letnio i wyrabiaj ciasto elastycznie, aż podwoi objętość. Trzy lub cztery równe wałki spleć mocno w warkocz i dobrze spój końce. Po drugim wyrastaniu posmaruj jajkiem, posyp sezamem i piecz na złoto. Za gorący piekarnik przypala skórkę, zanim środek się dopiecze, zbyt luźno spleciony warkocz rozpada się podczas pieczenia, a zbyt ciasny robi się zbity. Kroić dopiero po krótkim ostudzeniu, na gorąco miękisz się rwie.",
    serveDe:
      "Serviere Chałka in Scheiben mit Butter oder Konfitüre, oder als Teil des Ostertischs neben Eiern und Wurst, im Rahmen des [Wielkanoc-Speiseplans](/de/blog/wielkanoc-speiseplan) oder des [Sonntagsessens](/de/blog/sonntagsessen-polnisch). Wer einen Formkuchen sucht, findet ihn bei der [Babka](/de/rezepte/babka), wer frittierte Krapfen möchte, bei den [Pączki](/de/rezepte/paczki). Reste luftdicht aufbewahren und am Folgetag am besten toasten.",
    servePl:
      "Podawaj chałkę w kromkach z masłem lub konfiturą, albo jako część stołu wielkanocnego obok jajek i wędlin, w ramach [menu wielkanocnego](/pl/blog/menu-wielkanocne) lub [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Kto szuka ciasta z formy, znajdzie je w [babce](/pl/rezepte/babka), kto chce smażone pączki, w [pączkach](/pl/rezepte/paczki). Resztki trzymaj szczelnie, a nazajutrz najlepiej zrób z nich tosty.",
    diasporaDe:
      "In Deutschland wird Chałka oft am Samstag gebacken und am Sonntag nur noch angeschnitten, das entlastet den Ostermorgen spürbar. Kinder dürfen die Stränge rollen, am heißen Ofen übernehmen Erwachsene. Ein Laib reicht für viele Gäste, lieber ein Brot in guter Qualität als drei verschiedene Hefegebäcke gleichzeitig. Gute Zutaten dafür findest du im [Polenladen](/de/blog/polenladen-einkaufen), während der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan) den ganzen Anlass beschreibt.",
    diasporaPl:
      "W Niemczech chałkę często piecze się w sobotę, a w niedzielę tylko kroi, co wyraźnie odciąża poranek świąteczny. Dzieci mogą wałkować pasma, przy gorącym piekarniku pomagają dorośli. Jeden bochenek starcza dla wielu gości, lepiej jeden dobry chleb niż trzy różne wypieki drożdżowe naraz. Dobre składniki znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), a cały kontekst święta opisuje [menu wielkanocne](/pl/blog/menu-wielkanocne).",
    mistakesDe:
      "Zu heiße Milch tötet die Hefe ab, und eine Gugelhupf-Form statt eines Zopfs führt schnell zur Verwechslung mit der [Babka](/de/rezepte/babka). Auch eine Verwechslung mit den frittierten [Pączki](/de/rezepte/paczki) oder den [Racuchy](/de/rezepte/racuchy-jablka) kommt vor, obwohl alle drei ganz unterschiedliche Teigarten haben. Zu kurzes Gehenlassen macht den Zopf kompakt statt luftig.",
    mistakesPl:
      "Za gorące mleko zabija drożdże, a forma babkowa zamiast warkocza szybko prowadzi do pomylenia z [babką](/pl/rezepte/babka). Zdarza się też mylenie z [pączkami](/pl/rezepte/paczki) albo [racuchami](/pl/rezepte/racuchy-jablka), choć wszystkie trzy mają zupełnie inne ciasto. Zbyt krótkie wyrastanie robi warkocz zbity zamiast puszystego.",
    variantsDe:
      "Mit Rosinen im Teig wird Chałka nach Hausbrauch süßer, das gehört dann ehrlich in den Titel, ohne Sesam wirkt sie schlichter, und ein kleinerer Zopf eignet sich gut für den Alltag. Passende Nachbarn sind die [Babka](/de/rezepte/babka), die [Pączki](/de/rezepte/paczki) und die [Racuchy](/de/rezepte/racuchy-jablka), zum Anlass passen der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan) und das [Sonntagsessen](/de/blog/sonntagsessen-polnisch), Einkaufshilfen liefern der [Polenladen](/de/blog/polenladen-einkaufen) und die [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Z rodzynkami w cieście chałka robi się słodsza według zwyczaju domu, co warto uczciwie napisać w tytule, bez sezamu wygląda skromniej, a mniejszy warkocz sprawdza się dobrze na co dzień. Pasującymi sąsiadami są [babka](/pl/rezepte/babka), [pączki](/pl/rezepte/paczki) i [racuchy](/pl/rezepte/racuchy-jablka), do okazji pasują [menu wielkanocne](/pl/blog/menu-wielkanocne) i [obiad niedzielny](/pl/blog/obiad-niedzielny), a wskazówki zakupowe dają [sklep polski](/pl/blog/sklep-polski-zakupy) i [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
  },

  "recipe-pasztet": {
    dishDe: "Pasztet drobiowy",
    dishPl: "Pasztet drobiowy",
    vibeDe: "fein, streichfähig bis schnittfest, kühl auf Brot, Pastete statt Blutwurst",
    vibePl: "delikatny, do smarowania lub krojenia, chłodny na chleb, pasztet, nie kaszanka",
    originDe:
      "Pasztet geht auf das französische pâté zurück, das ursprünglich schlicht pasté hieß und mit dem Wort für Teig verwandt ist, weil im mittelalterlichen Frankreich Fleisch zum Schutz und zur Haltbarkeit in einer Teigkruste gebacken wurde. Diese Technik erreichte Polen etwa im 16. und 17. Jahrhundert und wurde schnell zum Statussymbol an königlichen und magnatischen Höfen, wo eigens angestellte Pastetenmeister arbeiteten. Der Krakauer Hofkoch Stanisław Czerniecki nahm mehrere Pasteten-Rezepte in sein Compendium Ferculorum von 1682 auf, das erste gedruckte polnische Kochbuch, entstanden am Hof der Familie Lubomirski, und würzte sie nach adliger Fantasie mit Ingwer, Zimt und Nelken. Die moderne Hausversion aus Geflügelleber ist deutlich schlichter, aber genauso im Kasten gebacken und kalt angeschnitten. Sie ist weder die gebratene Blutwurst [Kaszanka](/de/rezepte/kaszanka) noch der panierte [Kotlet mielony](/de/rezepte/kotlet-mielony) noch Fleischkugeln in Soße wie bei [Klopsy](/de/rezepte/klopsy). Mehr zu Wurstsorten und Aufschnitt bündelt der Beitrag zu [Kiełbasa-Arten](/de/blog/kielbasa-arten).",
    originPl:
      "Pasztet wywodzi się od francuskiego pâté, dawniej zapisywanego jako pasté i spokrewnionego ze słowem oznaczającym ciasto, bo w średniowiecznej Francji mięso piekło się w skorupie z ciasta dla ochrony i dłuższej trwałości. Ta technika dotarła do Polski mniej więcej w XVI i XVII wieku i szybko stała się symbolem statusu na dworach królewskich i magnackich, gdzie zatrudniano osobnych mistrzów od pieczenia pasztetów. Krakowski kuchmistrz Stanisław Czerniecki umieścił kilka przepisów na pasztety w swoim Compendium Ferculorum z 1682 roku, pierwszej drukowanej polskiej książce kucharskiej, powstałej na dworze rodu Lubomirskich, doprawiając je imbirem, cynamonem i goździkami według szlacheckiej fantazji. Współczesna domowa wersja z wątróbki drobiowej jest znacznie prostsza, ale wciąż piecze się ją w keksówce i kroi na zimno. To ani smażona [kaszanka](/pl/rezepte/kaszanka), ani panierowany [kotlet mielony](/pl/rezepte/kotlet-mielony), ani kulki mięsne w sosie jak [klopsy](/pl/rezepte/klopsy). Więcej o rodzajach wędlin opisuje [przewodnik po rodzajach kiełbasy](/pl/blog/rodzaje-kielbasy).",
    shopDe:
      "Nimm Geflügelleber, frisch oder tiefgekühlt, dazu Zwiebel, Karotte, Butter, Eier, ein altes Brötchen und Majoran, Leber und Majoran findest du oft besonders aromatisch im [Polenladen](/de/blog/polenladen-einkaufen). Zum Servieren gehören Meerrettich oder Senf. Wer Blutwurst sucht, bleibt bei der [Kaszanka](/de/rezepte/kaszanka), wer paniertes Hackfleisch möchte, greift zum [Kotlet mielony](/de/rezepte/kotlet-mielony). Einen Überblick über Aufschnitt liefert der Beitrag zu [Kiełbasa-Arten](/de/blog/kielbasa-arten).",
    shopPl:
      "Weź wątróbkę drobiową, świeżą lub mrożoną, do tego cebulę, marchew, masło, jajka, czerstwą bułkę i majeranek, wątróbkę i majeranek często kupisz bardziej aromatyczne w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Do podania chrzan lub musztarda. Kto szuka kaszanki, zostaje przy [kaszance](/pl/rezepte/kaszanka), kto chce panierowane mielone, sięga po [kotlet mielony](/pl/rezepte/kotlet-mielony). Przegląd wędlin daje [przewodnik po rodzajach kiełbasy](/pl/blog/rodzaje-kielbasy).",
    techniqueDe:
      "Die Leber nur kurz mit dem Gemüse anbraten und nicht austrocknen lassen, sonst wird die Pastete später bröckelig statt cremig. Das Brötchen gut ausdrücken und fein pürieren, grobe Krümel stören später den sauberen Schnitt. Das Wasserbad schützt die Pastete beim Backen vor Rissen und einer zu trockenen Kruste. Vor dem Anschneiden unbedingt kalt stellen, warm zerfällt die Masse leicht. Zu viel Flüssigkeit macht die Pastete matschig, zu wenig Brötchen macht sie krümelig, und beim Abschmecken lohnt es sich, den Majoran sparsam einzusetzen und erst nach dem Pürieren zu salzen.",
    techniquePl:
      "Wątróbkę smaż z warzywami tylko krótko i nie susz jej, bo pasztet zrobi się kruchy zamiast kremowy. Bułkę dobrze odciśnij i zmiksuj na gładko, grube okruchy przeszkadzają potem przy krojeniu. Kąpiel wodna chroni pasztet podczas pieczenia przed pęknięciami i zbyt suchą skórką. Przed krojeniem koniecznie schłodź, na ciepło masa się rozpada. Za dużo płynu robi z pasztetu papkę, za mało bułki sprawia, że się kruszy, a przy doprawianiu warto użyć majeranku oszczędnie i solić dopiero po zmiksowaniu.",
    serveDe:
      "Serviere die Pastete kalt in Scheiben auf einer Platte, mit Brot, Meerrettich, Senf und optional etwas Gurke, gut geeignet für das Festbuffet neben dem [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan) oder im Alltag zum [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Vermische sie nicht mit der [Kaszanka](/de/rezepte/kaszanka), die einen ganz anderen Charakter hat. Reste luftdicht kühlen und zeitnah aufbrauchen.",
    servePl:
      "Podawaj pasztet na zimno w plasterkach na półmisku, z chlebem, chrzanem, musztardą i opcjonalnie ogórkiem, dobrze pasuje do bufetu obok [menu wielkanocnego](/pl/blog/menu-wielkanocne) albo na co dzień do [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Nie miesz go z [kaszanką](/pl/rezepte/kaszanka), bo to zupełnie inny charakter. Resztki trzymaj szczelnie w lodówce i zjedz je szybko.",
    diasporaDe:
      "In Deutschland backst du die Pastete oft am Freitagabend, kühlst sie am Samstag durch und schneidest sie am Sonntag an, das entlastet den Festmorgen. Tiefgekühlte Leber solltest du ehrlich benennen und gut abtropfen lassen. Kinder dürfen das Brötchen einweichen, am heißen Ofen und am Mixer übernehmen Erwachsene. Ein Kasten reicht für viele Gäste, lieber eine gute Pastete als drei mittelmäßige Aufschnitte. Zutaten dafür findest du im [Polenladen](/de/blog/polenladen-einkaufen).",
    diasporaPl:
      "W Niemczech pasztet często pieczesz w piątek wieczorem, w sobotę chłodzisz, a w niedzielę kroisz, co odciąża poranek świąteczny. Mrożoną wątróbkę warto uczciwie tak nazwać i dobrze odsączyć. Dzieci mogą namoczyć bułkę, przy gorącym piekarniku i blenderze pomagają dorośli. Jedna keksówka wystarczy dla wielu gości, lepiej jeden dobry pasztet niż trzy przeciętne wędliny. Składniki znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    mistakesDe:
      "Wird die Leber zu lange gekocht, wird sie trocken und bitter statt zart. Pasztet wird gelegentlich mit der [Kaszanka](/de/rezepte/kaszanka) oder dem [Kotlet mielony](/de/rezepte/kotlet-mielony) verwechselt, dabei hat jedes dieser Gerichte eine eigene Form und Textur. Warmes Anschneiden lässt die Scheibe zerbröckeln statt sauber zu bleiben.",
    mistakesPl:
      "Zbyt długo gotowana wątróbka robi się sucha i gorzka zamiast delikatna. Pasztet bywa mylony z [kaszanką](/pl/rezepte/kaszanka) albo [kotletem mielonym](/pl/rezepte/kotlet-mielony), choć każde z tych dań ma inną formę i teksturę. Krojenie na ciepło rozdrabnia plaster zamiast zostawić go czystym.",
    variantsDe:
      "Mit etwas Speck in der Masse wird die Pastete nach Hausbrauch würziger, für Kinder lässt sich der Majoran milder dosieren. Passende Nachbarn sind die [Kaszanka](/de/rezepte/kaszanka), der [Kotlet mielony](/de/rezepte/kotlet-mielony) und [Klopsy](/de/rezepte/klopsy), zum Anlass passen das [Sonntagsessen](/de/blog/sonntagsessen-polnisch) und der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan), Aufschnitt-Hintergrund liefert der Beitrag zu [Kiełbasa-Arten](/de/blog/kielbasa-arten).",
    variantsPl:
      "Z odrobiną boczku w masie pasztet robi się bardziej wyrazisty według zwyczaju domu, dla dzieci można złagodzić ilość majeranku. Pasującymi sąsiadami są [kaszanka](/pl/rezepte/kaszanka), [kotlet mielony](/pl/rezepte/kotlet-mielony) i [klopsy](/pl/rezepte/klopsy), do okazji pasują [obiad niedzielny](/pl/blog/obiad-niedzielny) i [menu wielkanocne](/pl/blog/menu-wielkanocne), a tło wędlin opisuje [przewodnik po rodzajach kiełbasy](/pl/blog/rodzaje-kielbasy).",
  },
};
