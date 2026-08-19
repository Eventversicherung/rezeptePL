/**
 * Wave 15 Paket D — FACTS for koperkowa, kisiel.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W15_FACTS_D } from "./recipe-articles-w15-d";
 * Object.assign(FACTS, …, W15_FACTS_D);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Zupa koperkowa (Dill + Kartoffel/Ei/Śmietana) ≠ Rosół ≠ Szczawiowa ≠ Botwinka ≠ Ogórkowa
 * - Kisiel owocowy (Stärke-Fruchtcreme) ≠ Kompot z suszu ≠ Kutia
 * - Polnische Suppen / Wigilia bleiben Broad-/Anlass-Guides
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

export const W15_FACTS_D: Record<string, ArticleFacts> = {
  "recipe-koperkowa": {
    dishDe: "Zupa koperkowa",
    dishPl: "Zupa koperkowa",
    vibeDe: "hell und kräuterfrisch, nach Dill und milder Sahne, für Alltag und Sonntagsstart",
    vibePl: "jasna i ziołowo-świeża, od koperku i łagodnej śmietany, na codzień i na start niedzieli",
    originDe:
      "Zupa koperkowa entstand aus purer Notwendigkeit: In der polnischen Bauernküche gab es im Sommer reichlich Dill aus dem Garten und Kartoffeln aus dem Keller, und aus Wasser oder Molke mit etwas Mehl wurde daraus eine einfache, sättigende Suppe, die erst mit der Zeit einen richtigen Fleisch- oder Gemüsefond bekam. Schon alte Kochbücher wie die von Lucyna Ćwierczakiewiczowa betonen, dass der frische Dill erst ganz zum Schluss in den Topf darf, weil langes Mitkochen sein feines Aroma zerstört, ein Grundsatz, der bis heute gilt. Die Farbe bleibt hell bis leicht grünlich, der Geschmack kräuterfrisch und mild, nicht scharf-sauer. Das ist keine klare Festtagsbrühe wie [Rosół](/de/rezepte/rosol), keine Sauerampfersuppe wie [Szczawiowa](/de/rezepte/szczawiowa), keine junge Rote-Bete-Suppe wie [Botwinka](/de/rezepte/botwinka) und keine Kiszone-Gurkensuppe wie [Ogórkowa](/de/rezepte/ogorkowa). Der Überblick [Polnische Suppen](/de/blog/polnische-suppen) ordnet die Landschaft, hier bleibt der enge Dill-Fokus, Menüplatz beim [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch).",
    originPl:
      "Zupa koperkowa powstała z czystej konieczności: w polskiej kuchni wiejskiej latem było pod ręką mnóstwo koperku z ogrodu i ziemniaków z piwnicy, a z wody lub serwatki z odrobiną mąki wychodziła prosta, sycąca zupa, która dopiero z czasem zyskała prawdziwy wywar mięsny lub warzywny. Już stare książki kucharskie, na przykład Lucyny Ćwierczakiewiczowej, podkreślają, że świeży koperek trzeba dodać na samym końcu, bo długie gotowanie niszczy jego delikatny aromat, i ta zasada obowiązuje do dziś. Kolor zupy zostaje jasny do lekko zielonego, smak ziołowo-świeży i łagodny, nie ostro-kwaśny. To nie klarowny wywar jak [rosół](/pl/rezepte/rosol), nie [szczawiowa](/pl/rezepte/szczawiowa), nie [botwinka](/pl/rezepte/botwinka) i nie [ogórkowa](/pl/rezepte/ogorkowa). Przegląd [polskie zupy](/pl/blog/polskie-zupy) porządkuje krajobraz, tu zostaje wąski fokus na koper, miejsce w menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
    shopDe:
      "Frischer Dill ist der Charakterträger der Suppe, den Supermarkt oder [Polenladen](/de/blog/polenladen-einkaufen) bieten meist gut, getrockneter Dill bleibt nur eine ehrliche Notlösung laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Kartoffeln, Zwiebel und Eier kommen aus dem normalen Markt, zur Śmietana- oder Schmand-Wahl hilft der [Śmietana-Guide](/de/blog/smietana-schmand). Eine leichte Brühe reicht völlig, das ist kein Rosół-Showpiece wie [Rosół](/de/rezepte/rosol), und ohne Sauerampfer-Bund oder Gurkenglas als Basis bleibt die Suppe eindeutig Koperkowa statt [Szczawiowa](/de/rezepte/szczawiowa) oder [Ogórkowa](/de/rezepte/ogorkowa).",
    shopPl:
      "Świeży koperek niesie charakter zupy, market lub [sklep polski](/pl/blog/sklep-polski-zakupy) zwykle mają go dobrego, suszony koper zostaje tylko awaryjnym rozwiązaniem według [zamienników](/pl/blog/zamienniki-skladnikow). Ziemniaki, cebula i jajka są z marketu, przy wyborze śmietany pomaga [przewodnik śmietana czy Schmand](/pl/blog/smietana-czy-schmand). Lekki bulion w pełni wystarczy, to nie showpiece jak [rosół](/pl/rezepte/rosol), a bez pęczka szczawiu czy słoika ogórków jako bazy zupa zostaje jednoznacznie koperkową, nie [szczawiową](/pl/rezepte/szczawiowa) czy [ogórkową](/pl/rezepte/ogorkowa).",
    techniqueDe:
      "Die Kartoffelbasis weich kochen und leicht binden, indem du einen Teil zerdrückst, ohne daraus Babybrei zu machen, Dill kommt spät und reichlich dazu, weil lange Hitze seinen Duft flach macht. Śmietana immer temperieren, nie direkt in den kochenden Topf geben, sonst gerinnt sie. Das Ei separat hart kochen und erst im Teller dazugeben. Abschmecken heißt hier Salz, Pfeffer und Dill-Dominanz, Säure bleibt sparsam, das ist kein Kiszone-Topf wie [Ogórkowa](/de/rezepte/ogorkowa) und kein Sauerampfer-Grün wie [Szczawiowa](/de/rezepte/szczawiowa).",
    techniquePl:
      "Bazę ziemniaczaną dogotuj i lekko zagęść, rozgniatając część ziemniaków, ale nie robiąc z tego papki, koperek dodaj późno i obficie, bo długi ogień spłaszcza jego aromat. Śmietanę zawsze zahartuj, nie wlewaj jej prosto do wrzącej zupy, bo się zwarzy. Jajko ugotuj osobno na twardo i dodaj dopiero do talerza. Doprawianie oznacza tu sól, pieprz i dominację koperku, kwasu powinno być mało, to nie garnek kiszony jak [ogórkowa](/pl/rezepte/ogorkowa) i nie zieleń szczawiu jak [szczawiowa](/pl/rezepte/szczawiowa).",
    serveDe:
      "Heiß, hell und mit Ei und Dill servieren, sie passt als ruhiger Starter oder leichter Mittag im Sinne des [Sonntagsessen-Guides](/de/blog/sonntagsessen-polnisch). Wer klare Brühe möchte, findet sie bei [Rosół](/de/rezepte/rosol), wer Sauerampfer sucht, bei [Szczawiowa](/de/rezepte/szczawiowa), wer Gurkensäure will, bei [Ogórkowa](/de/rezepte/ogorkowa), wer junge Bete mag, bei [Botwinka](/de/rezepte/botwinka). Die ganze Landschaft ordnet [Polnische Suppen](/de/blog/polnische-suppen), typische Spezialzutaten findest du im [Polenladen](/de/blog/polenladen-einkaufen).",
    servePl:
      "Podawaj gorącą, jasną, z jajkiem i koperkiem, jako spokojny starter lub lekki obiad w duchu [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Klarowny wywar znajdziesz w [rosole](/pl/rezepte/rosol), szczaw w [szczawiowej](/pl/rezepte/szczawiowa), kwas ogórkowy w [ogórkowej](/pl/rezepte/ogorkowa), młode buraki w [botwince](/pl/rezepte/botwinka). Cały krajobraz porządkują [polskie zupy](/pl/blog/polskie-zupy), typowe specjalności kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    diasporaDe:
      "Koperkowa ist diaspora-freundlich: Dill und Kartoffeln aus dem Supermarkt, Śmietana aus dem Kühlregal, ein Topf für einen einzigen Tag. Kinder dürfen Dill zupfen und Eier schälen, der heiße Topf bleibt bei Erwachsenen. Fehlt frischer Dill, hilft ehrlich benannt [Ersatzprodukte DE](/de/blog/ersatzprodukte-de), Qualität lohnt sich im [Polenladen](/de/blog/polenladen-einkaufen) zu prüfen. Kultur und Speiseplan bleiben beim [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), der Überblick bei [Polnische Suppen](/de/blog/polnische-suppen).",
    diasporaPl:
      "Koperkowa lubi diasporę: koperek i ziemniaki z marketu, śmietana z lodówki, jeden garnek na ten sam dzień. Dzieci mogą oberwać koper i obrać jajka, gorący garnek zostaje u dorosłych. Brak świeżego koperku uzupełnią uczciwie [zamienniki składników](/pl/blog/zamienniki-skladnikow), jakość warto sprawdzić w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Kultura i menu zostają w [obiedzie niedzielnym](/pl/blog/obiad-niedzielny), przegląd w [polskich zupach](/pl/blog/polskie-zupy).",
    mistakesDe:
      "Wer Koperkowa mit dem [Rosół](/de/rezepte/rosol) verwechselt, erwartet eine klare Brühe statt einer cremigen Dillsuppe, wer sie mit [Szczawiowa](/de/rezepte/szczawiowa), [Ogórkowa](/de/rezepte/ogorkowa) oder [Botwinka](/de/rezepte/botwinka) gleichsetzt, landet ebenfalls bei einem anderen Gericht. Zu sparsamer oder zu früh mitgekochter Dill nimmt der Suppe ihren Charakter, und kochend eingerührte Śmietana lässt sie gerinnen statt cremig zu binden.",
    mistakesPl:
      "Kto myli koperkową z [rosołem](/pl/rezepte/rosol), oczekuje klarownego wywaru zamiast kremowej zupy koperkowej, kto zrównuje ją z [szczawiową](/pl/rezepte/szczawiowa), [ogórkową](/pl/rezepte/ogorkowa) czy [botwinką](/pl/rezepte/botwinka), również trafia na inne danie. Za mało koperku albo koper dodany za wcześnie odbiera zupie charakter, a śmietana wlana do wrzątku zwarzy się, zamiast kremowo związać zupę.",
    variantsDe:
      "Mit mehr Dill wird die Suppe intensiver, mit weniger Śmietana leichter, vegetarisch gelingt sie auf Gemüsebrühe genauso gut. Passende Nachbarn sind [Rosół](/de/rezepte/rosol), [Szczawiowa](/de/rezepte/szczawiowa), [Ogórkowa](/de/rezepte/ogorkowa) und [Botwinka](/de/rezepte/botwinka), Orientierung geben [Polnische Suppen](/de/blog/polnische-suppen), der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), der [Śmietana-Guide](/de/blog/smietana-schmand) und der [Polenladen](/de/blog/polenladen-einkaufen).",
    variantsPl:
      "Z większą ilością koperku zupa jest intensywniejsza, z mniejszą śmietaną lżejsza, wersja wege na bulionie warzywnym wychodzi równie dobrze. Pasujący sąsiedzi to [rosół](/pl/rezepte/rosol), [szczawiowa](/pl/rezepte/szczawiowa), [ogórkowa](/pl/rezepte/ogorkowa) i [botwinka](/pl/rezepte/botwinka), orientację dają [polskie zupy](/pl/blog/polskie-zupy), [obiad niedzielny](/pl/blog/obiad-niedzielny), [przewodnik śmietana czy Schmand](/pl/blog/smietana-czy-schmand) i [sklep polski](/pl/blog/sklep-polski-zakupy).",
  },

  "recipe-kisiel": {
    dishDe: "Kisiel owocowy",
    dishPl: "Kisiel owocowy",
    vibeDe: "fruchtig-glänzend und halbtransparent, löffelbar, ein Dessert und leichter Abschluss",
    vibePl: "owocowo-błyszczący i półprzezroczysty, do łyżki, deser i lekki finał",
    originDe:
      "Das Wort Kisiel gehört zur selben slawischen Wortfamilie wie kisnąć, vergären, und kwas, sauer, und beschrieb ursprünglich etwas völlig anderes als das heutige süße Dessert: eine dicke, sauer geschmeckte Brei-Suppe aus vergorenem Hafer- oder Roggenmehl, die vor allem in der Fastenzeit gegessen wurde und dem altpolnischen Żur eng verwandt war. Adam Mickiewicz erklärt diesen älteren Kisiel in Pan Tadeusz noch als litauische Speise aus Hafer-Sauerteig, und in den östlichen Grenzgebieten hielt sich diese Bedeutung noch lange. Erst am Ende des 19. und zu Beginn des 20. Jahrhunderts, als sich der Kartoffelanbau in Russland und Polen verbreitete, verschob sich der Name zum heutigen, mit Speisestärke gebundenen Fruchtkisiel, weil sich Konsistenz und leichte Säure ähnelten, ohne dass noch fermentiert werden musste. Kisiel owocowy ist hier als Himbeer-Linie zu verstehen, Beeren auskochen, absieben, mit Stärke binden, bis der Topf dicklich-glänzend und halbtransparent ist, kein Trockenobstkompot mit ganzen Fruchtstücken wie [Kompot z suszu](/de/rezepte/kompot-z-suszu) und kein Weizen-Mohn-Dessert wie [Kutia](/de/rezepte/kutia). An Wigilia verankert ihn der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
    originPl:
      "Słowo kisiel należy do tej samej słowiańskiej rodziny co kisnąć i kwas, i pierwotnie opisywało coś zupełnie innego niż dzisiejszy słodki deser: gęstą, kwaśną papkę-zupę z zakwaszonej mąki owsianej lub żytniej, jedzoną głównie w czasie postu i bliską staropolskiemu żurowi. Adam Mickiewicz w Panu Tadeuszu opisuje ten starszy kisiel jako potrawę litewską z rozczynu owsianego, a na Kresach Wschodnich to znaczenie zachowało się jeszcze długo. Dopiero na przełomie XIX i XX wieku, wraz z rozpowszechnieniem uprawy ziemniaka w Rosji i Polsce, nazwa przesunęła się na dzisiejszy kisiel owocowy zagęszczany skrobią ziemniaczaną, bo konsystencja i lekka kwaskowość były podobne, a fermentacja stała się niepotrzebna. Kisiel owocowy w tym przepisie to linia malinowa, owoce wygotować, przecedzić, spiąć skrobią, aż masa będzie gęsta, błyszcząca i półprzezroczysta, to nie kompot z suszu z całymi owocami jak [kompot z suszu](/pl/rezepte/kompot-z-suszu) i nie deser pszenno-makowy jak [kutia](/pl/rezepte/kutia). Na Wigilii porządkuje go [menu wigilijne](/pl/blog/menu-wigilijne).",
    shopDe:
      "Himbeeren, frisch oder tiefgekühlt, gibt es im Supermarkt das ganze Jahr. Speisestärke, klassisch Kartoffelstärke, findest du im Backregal oder [Polenladen](/de/blog/polenladen-einkaufen), dazu Zucker, Zitrone und Wasser. Fehlt Himbeere, funktioniert Johannisbeere oder Erdbeere, ehrlich als andere Fruchtlinie benannt laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Ein Susz-Mix und Weizenkörner gehören hier nicht hin, sonst wird daraus [Kompot z suszu](/de/rezepte/kompot-z-suszu) oder [Kutia](/de/rezepte/kutia), der Anlass-Rahmen bleibt [Wigilia](/de/blog/wigilia-speiseplan).",
    shopPl:
      "Maliny, świeże lub mrożone, znajdziesz w markecie przez cały rok. Skrobia, klasycznie ziemniaczana, jest w dziale mąk lub [sklepie polskim](/pl/blog/sklep-polski-zakupy), do tego cukier, cytryna i woda. Brak malin zastąpi porzeczka lub truskawka, uczciwie nazwana jako inna linia owocowa według [zamienników](/pl/blog/zamienniki-skladnikow). Mieszanka suszu i pszenica nie mają tu miejsca, inaczej dryfuje w stronę [kompotu z suszu](/pl/rezepte/kompot-z-suszu) lub [kutii](/pl/rezepte/kutia), rama okazji zostaje w [menu wigilijnym](/pl/blog/menu-wigilijne).",
    techniqueDe:
      "Die Frucht zuerst auskochen und absieben, dann die Stärke kalt anrühren und unter Rühren einlaufen lassen, um Klumpen zu vermeiden. Nur kurz dick werden lassen, nicht minutenlang blubbern, sonst wird der Kisiel gummiartig statt seidig. Beim Abschmecken hält Fruchtsäure den Zucker im Gleichgewicht. Direkt abfüllen und eine Haut mit Folie auf der Oberfläche vermeiden, das ist Bindung durch Stärke, kein langes Ziehen von Trockenobst wie bei [Kompot z suszu](/de/rezepte/kompot-z-suszu) und kein Quell- und Mahlschritt wie bei [Kutia](/de/rezepte/kutia).",
    techniquePl:
      "Owoce najpierw ugotuj i przecedź, potem skrobię rozetrzyj na zimno i wlej mieszając, żeby uniknąć grudek. Zagęszczaj tylko krótko, nie burz minutami, inaczej kisiel zrobi się gumowaty, a nie aksamitny. Przy doprawianiu kwas owoców balansuje cukier. Przelej od razu i unikaj kożucha, kładąc folię na powierzchni, to wiązanie skrobią, nie długie gotowanie suszu jak w [kompocie z suszu](/pl/rezepte/kompot-z-suszu) i nie moczenie oraz mielenie jak w [kutii](/pl/rezepte/kutia).",
    serveDe:
      "Warm, lauwarm oder kalt in Glas oder Schale servieren, löffelbar, halbtransparent, mit klarer Beerenfarbe. Optional frische Beeren oder Śmietana dazugeben. Als leichter Abschluss passt er neben den [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan), ohne den Menü-Artikel zu ersetzen. Wer ein dunkles Trockenobst-Getränk möchte, findet es bei [Kompot z suszu](/de/rezepte/kompot-z-suszu), wer Getreide mit Mohn sucht, bei [Kutia](/de/rezepte/kutia).",
    servePl:
      "Podawaj ciepły, letni lub zimny, w szklance lub miseczce, do łyżki, półprzezroczysty, z jasnym kolorem owoców. Opcjonalnie dodaj świeże owoce lub śmietanę. Jako lekki finał pasuje obok [menu wigilijnego](/pl/blog/menu-wigilijne), bez zastępowania artykułu o okazji. Napój z suszu znajdziesz w [kompocie z suszu](/pl/rezepte/kompot-z-suszu), zboże z makiem w [kutii](/pl/rezepte/kutia).",
    diasporaDe:
      "Kisiel ist schnell und kinderfreundlich: Tiefkühlbeeren, Stärke aus dem Vorrat, zehn Minuten am Herd. Am Vortag kochen und kaltstellen entlastet den Festtag, der Fokus bleibt dieses Rezept, der Menü-Artikel [Wigilia](/de/blog/wigilia-speiseplan) ordnet den Rahmen. Stärke-Typen und fehlende Beeren klärt ehrlich der Beitrag zu [Ersatzprodukten DE](/de/blog/ersatzprodukte-de), Zutaten findest du im [Polenladen](/de/blog/polenladen-einkaufen).",
    diasporaPl:
      "Kisiel jest szybki i przyjazny dzieciom: mrożone owoce, skrobia ze spiżarni, dziesięć minut przy kuchence. Ugotowanie dzień wcześniej i schłodzenie odciąża święto, tu zostaje ten przepis, ramę daje [menu wigilijne](/pl/blog/menu-wigilijne). Typy skrobi i brak owoców uczciwie wyjaśniają [zamienniki składników](/pl/blog/zamienniki-skladnikow), składniki znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    mistakesDe:
      "Wer Kisiel mit [Kompot z suszu](/de/rezepte/kompot-z-suszu) verwechselt, erwartet ein Trockenobst-Getränk mit ganzen Fruchtstücken statt einer Fruchtcreme, wer ihn mit [Kutia](/de/rezepte/kutia) gleichsetzt, vermisst Weizen und Mohn völlig. Klumpig eingerührte Stärke und zu langes Kochen ruinieren die seidige Textur, die den Kisiel eigentlich ausmacht.",
    mistakesPl:
      "Kto myli kisiel z [kompotem z suszu](/pl/rezepte/kompot-z-suszu), oczekuje napoju z całymi owocami zamiast owocowej masy, kto zrównuje go z [kutią](/pl/rezepte/kutia), zupełnie pomija pszenicę i mak. Skrobia wsypana w grudkach i za długie gotowanie niszczą aksamitną teksturę, która stanowi sedno tego deseru.",
    variantsDe:
      "Johannisbeere macht den Kisiel säuerlicher, Erdbeere milder, gemischte Beeren ergeben eine bunte Variante. Dünner gelingt er als Trink-Kisiel, dicker fast wie ein Pudding. Passende Nachbarn sind [Kompot z suszu](/de/rezepte/kompot-z-suszu) und [Kutia](/de/rezepte/kutia), Orientierung geben [Wigilia](/de/blog/wigilia-speiseplan), der [Polenladen](/de/blog/polenladen-einkaufen) und die [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Porzeczka daje wersję bardziej kwaskową, truskawka łagodniejszą, mieszanka jagód wariant kolorowy. Rzadszy wychodzi jak napój, gęstszy przypomina budyń. Pasujący sąsiedzi to [kompot z suszu](/pl/rezepte/kompot-z-suszu) i [kutia](/pl/rezepte/kutia), orientację dają [menu wigilijne](/pl/blog/menu-wigilijne), [sklep polski](/pl/blog/sklep-polski-zakupy) i [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
  },
};
