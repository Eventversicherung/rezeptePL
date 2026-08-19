/**
 * Wave 12 Paket A — FACTS for zupa-grzybowa, grochowka.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W12_FACTS_A } from "./recipe-articles-w12-a";
 * Object.assign(FACTS, …, W12_FACTS_A);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Zupa grzybowa ≠ Barszcz / Flaki / Ogórkowa (Pilz ≠ Bete ≠ Kutteln ≠ Gurke)
 * - Grochówka ≠ Fasolka (Erbsen≠Bohnen) / Kapuśniak (≠ Sauerkrautsuppe)
 * - Polnische Suppen Overview bleibt Broad-Owner
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

export const W12_FACTS_A: Record<string, ArticleFacts> = {
 "recipe-zupa-grzybowa": {
 dishDe: "Zupa grzybowa",
 dishPl: "Zupa grzybowa",
 vibeDe:
 "waldig und klar, mit dem Aroma von Trockenpilzen und Lorbeer, ein Gericht für Wigilia und für den Herbst",
 vibePl:
 "leśny i klarowny, z aromatem suszonych grzybów i liścia laurowego, danie na Wigilię i na jesień",
 originDe:
 "Zupa grzybowa gehört zu den zwölf traditionellen Gerichten der Wigilia, dem festlichen, fleischlosen Heiligabend-Essen. Ihre Wurzeln liegen in der bäuerlichen Küche, wo wild gesammelte Pilze eine der wenigen verlässlichen Eiweißquellen während der Fastenzeit waren. Das erste bekannte polnische Kochbuch, Stanisław Czernieckis „Compendium Ferculorum“ von 1682, beschreibt bereits sogenannte grzybowe polewki, die Vorläufer der heutigen Pilzsuppen. Getrocknet hielten die im Herbst gesammelten Steinpilze den ganzen Winter über, weshalb sie zum festen Bestandteil der Weihnachtsküche wurden, lange bevor wieder frisches Gemüse verfügbar war. Für viele ist der intensive, erdige Duft beim Einweichen der Geruch, der die Wigilia überhaupt erst einläutet. Klar getrennt bleibt die Suppe von der roten [Barszcz](/de/rezepte/barszcz-czerwony), von der deftigen [Flaki](/de/rezepte/flaki)-Kuttelsuppe und von sauren Linien wie [Ogórkowa](/de/rezepte/ogorkowa); einen Überblick über die ganze Suppenfamilie gibt [Polnische Suppen](/de/blog/polnische-suppen).",
 originPl:
 "Zupa grzybowa należy do dwunastu tradycyjnych potraw wigilijnych, czyli bezmięsnej, świątecznej kolacji. Jej korzenie sięgają kuchni chłopskiej, w której dziko zbierane grzyby były jednym z niewielu pewnych źródeł białka w czasie postu. Pierwsza znana polska książka kucharska, „Compendium Ferculorum” Stanisława Czernieckiego z 1682 roku, opisuje już tak zwane polewki grzybowe, poprzedniczki dzisiejszych zup grzybowych. Suszone jesienią borowiki wytrzymywały całą zimę, dlatego stały się stałym elementem świątecznej kuchni na długo przed tym, zanim znów pojawiały się świeże warzywa. Dla wielu osób intensywny, ziemisty zapach podczas moczenia jest wręcz zapachem, który otwiera Wigilię. Zupa ta zostaje wyraźnie osobno od czerwonego [barszczu](/pl/rezepte/barszcz-czerwony), od treściwych [flaków](/pl/rezepte/flaki) i od kwaśnych dań jak [ogórkowa](/pl/rezepte/ogorkowa); przegląd całej rodziny zup daje wpis [polskie zupy](/pl/blog/polskie-zupy).",
 shopDe:
 "Getrocknete Steinpilze sind der wichtigste Posten auf der Einkaufsliste, und gute Qualität lohnt sich mehr als eine große Menge. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du oft kräftigere Ware als in anonymen Supermarktmischungen. Zwiebel, Karotte, Lorbeer und Dill bekommst du überall, frische Champignons können den Fond ergänzen, ersetzen aber nicht den Geschmack der getrockneten Pilze. Fehlt eine bestimmte Sorte, hilft der Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) weiter. Wer stattdessen Rote Bete oder Kutteln kochen möchte, findet das bei [Barszcz](/de/rezepte/barszcz-czerwony) oder [Flaki](/de/rezepte/flaki).",
 shopPl:
 "Suszone borowiki to najważniejsza pozycja na liście zakupów, i lepiej postawić na jakość niż na ilość. W [sklepie polskim](/pl/blog/sklep-polski-zakupy) znajdziesz zwykle mocniejsze grzyby niż w anonimowych mieszankach z marketu. Cebulę, marchew, liść laurowy i koperek kupisz wszędzie, świeże pieczarki mogą uzupełnić wywar, ale nie zastąpią smaku suszu. Jeśli brakuje konkretnej odmiany, pomocne będą [zamienniki składników](/pl/blog/zamienniki-skladnikow). Kto woli ugotować buraki albo flaki, znajdzie to w [barszczu](/pl/rezepte/barszcz-czerwony) lub we [flakach](/pl/rezepte/flaki).",
 techniqueDe:
 "Beim Einweichen setzt sich oft Sand am Boden der Schüssel ab, deshalb lohnt es sich, die Flüssigkeit durch ein feines Sieb oder ein Tuch zu gießen, statt sie direkt zu verwenden. Die Pilze kurz mitrösten, bevor der Fond dazukommt, bringt mehr Röstaroma in die Suppe. Danach sollte sie nur sanft köcheln, denn zu starkes Sprudeln trübt die Brühe und macht sie bitter. Nudeln oder Kartoffeln kommen erst spät dazu, damit sie nicht zerfallen. Für die Wigilia bleibt die Suppe meist klar, im Alltag darf ein Löffel temperierte [Śmietana](/de/blog/smietana-schmand) hinein, kalt in den heißen Topf gerührt würde sie sonst gerinnen.",
 techniquePl:
 "Podczas moczenia na dnie miski często osiada piasek, dlatego warto przecedzić płyn przez gęste sito lub gazę, zamiast używać go od razu. Krótkie podsmażenie grzybów przed dodaniem wywaru daje więcej aromatu pieczenia. Potem zupa powinna gotować się łagodnie, bo zbyt mocne wrzenie mąci wywar i dodaje mu goryczy. Makaron albo ziemniaki wrzucaj późno, żeby się nie rozpadły. Na Wigilię zupa zwykle zostaje klarowna, na co dzień można dodać łyżkę zahartowanej [śmietany](/pl/blog/smietana-czy-schmand), bo zimna śmietana wlana do gorącego wywaru łatwo się zwarzy.",
 serveDe:
 "Am besten heiß in tiefen Tellern mit frischem Dill, an der Wigilia neben Pierogi und Fisch, eingebettet in den [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan). Wer lieber Rote Bete möchte, bleibt bei [Barszcz](/de/rezepte/barszcz-czerwony), wer eine deftige Suppe mit Majoran sucht, bei [Flaki](/de/rezepte/flaki). Als Alltagsnachbar passt die mildere [Zupa pomidorowa](/de/rezepte/zupa-pomidorowa), einen Überblick über die ganze Familie gibt [Polnische Suppen](/de/blog/polnische-suppen).",
 servePl:
 "Najlepiej podawać gorącą w głębokich talerzach ze świeżym koperkiem, na Wigilię obok pierogów i ryby, w ramach [menu wigilijnego](/pl/blog/menu-wigilijne). Kto woli buraki, zostaje przy [barszczu](/pl/rezepte/barszcz-czerwony), kto szuka treściwej zupy z majerankiem, przy [flakach](/pl/rezepte/flaki). Na co dzień dobrze pasuje łagodniejsza [zupa pomidorowa](/pl/rezepte/zupa-pomidorowa), a przegląd całej rodziny zup znajdziesz w [polskich zupach](/pl/blog/polskie-zupy).",
 diasporaDe:
 "In Deutschland ist diese Suppe oft der pragmatische Wigilia-Topf: Die Trockenpilze weichen schon am Vorabend ein, der Fond entsteht am nächsten Morgen, und am Heiligabend selbst muss nur noch erhitzt werden. Kinder dürfen die Pilze abwiegen und den Fond durchsieben, während der heiße Topf bei den Erwachsenen bleibt. Vor den Feiertagen lohnt sich ein früher Einkauf im [Polenladen](/de/blog/polenladen-einkaufen), denn die Regale mit guten Steinpilzen sind kurz vor Weihnachten oft leer. Den festlichen Rahmen für den ganzen Abend liefert der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
 diasporaPl:
 "W Niemczech to często pragmatyczny garnek wigilijny: susz moczy się już wieczorem, wywar powstaje następnego ranka, a w samą Wigilię trzeba już tylko podgrzać. Dzieci mogą odważyć grzyby i przecedzić wywar, gorący garnek zostaje przy dorosłych. Przed świętami warto zrobić zakupy wcześnie w [sklepie polskim](/pl/blog/sklep-polski-zakupy), bo półki z dobrymi borowikami tuż przed Bożym Narodzeniem bywają puste. Ramę całego wieczoru daje [menu wigilijne](/pl/blog/menu-wigilijne).",
 mistakesDe:
 "Wird die Einweichflüssigkeit nicht gefiltert, landet der Sand mit in der Suppe und stört jeden Löffel. Zu kurzes Einweichen lässt die Pilze zäh bleiben, selbst nach langem Köcheln. Wer die Śmietana kochend statt temperiert einrührt, riskiert eine geronnene Suppe. Und wer eigentlich eine Gerstensuppe wollte, sollte gleich bei [Krupnik](/de/rezepte/krupnik) nachschauen, denn Zupa grzybowa bringt trotz ähnlicher Optik keine Graupen mit.",
 mistakesPl:
 "Kiedy płyn z moczenia trafia do zupy bez przecedzenia, piasek psuje każdą łyżkę. Zbyt krótkie moczenie zostawia grzyby twarde, nawet po długim gotowaniu. Wlanie zimnej śmietany do wrzącej zupy grozi jej zwarzeniem. A kto szukał właściwie zupy z kaszą jęczmienną, powinien od razu zajrzeć do [krupniku](/pl/rezepte/krupnik), bo zupa grzybowa mimo podobnego wyglądu nie ma w składzie kaszy.",
 variantsDe:
 "Frische Champignons ergänzen die getrockneten Pilze und machen die Suppe etwas milder im Geschmack. Statt Nudeln passen auch kleine Uszka-Teigtaschen hinein, ein Nachbar aus der gleichen Feiertagsküche. Cremig mit viel Śmietana bleibt eher der Alltagsvariante vorbehalten, an der Wigilia serviert man sie meist klar. Wer stattdessen [Barszcz](/de/rezepte/barszcz-czerwony), [Ogórkowa](/de/rezepte/ogorkowa), [Flaki](/de/rezepte/flaki) oder [Krupnik](/de/rezepte/krupnik) kochen möchte, findet dort die passenden Rezepte. Einkaufshilfen liefern der [Polenladen](/de/blog/polenladen-einkaufen) und die [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
 variantsPl:
 "Świeże pieczarki uzupełniają suszone grzyby i łagodzą smak całej zupy. Zamiast makaronu można wrzucić drobne uszka, sąsiada z tej samej świątecznej kuchni. Kremowa wersja z dużą ilością śmietany zostaje raczej na co dzień, na Wigilię podaje się ją zwykle klarowną. Kto szuka [barszczu](/pl/rezepte/barszcz-czerwony), [ogórkowej](/pl/rezepte/ogorkowa), [flaków](/pl/rezepte/flaki) lub [krupniku](/pl/rezepte/krupnik), znajdzie tam osobne przepisy. Zakupy ułatwią [sklep polski](/pl/blog/sklep-polski-zakupy) i [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
 },

 "recipe-grochowka": {
 dishDe: "Grochówka",
 dishPl: "Grochówka",
 vibeDe:
 "deftig und rauchig, mit Erbse und Majoran, ein Topf für den Alltag und zum Vorkochen",
 vibePl:
 "treściwy i wędzony, z grochem i majerankiem, garnek na co dzień i na zapas",
 originDe:
 "Grochówka ist die klassische polnische Erbsensuppe und gilt als eine der ältesten Suppen des Landes. Das erste bekannte Rezept, damals noch polewka grochowa genannt, steht bereits in Stanisław Czernieckis „Compendium Ferculorum“ von 1682. Jahrhundertelang war sie ein rein pflanzliches Bauerngericht, denn Fleisch blieb den Reichen vorbehalten. Berühmt wurde sie als Suppe der polnischen Armee, so sehr, dass polnische Emigranten nach dem Novemberaufstand von 1830 und 1831 jedes Jahr am 25. Februar in Paris zusammenkamen, um mit einem Teller Grochówka an die Schlacht bei Grochów zu erinnern. Erst das Kochbuch „Kuchnia Polska“ von 1972 etablierte die heutige Version mit reichlich Wurzelgemüse und geräucherter Wurst. Der Spruch, die Suppe müsse so dick sein, dass der Löffel darin stehen bleibt, beschreibt ihren Charakter bis heute. Das ist weder das Bohnenschmorgericht [Fasolka po bretonsku](/de/rezepte/fasolka-po-bretonsku) noch die Sauerkrautsuppe [Kapuśniak](/de/rezepte/kapusniak) noch die klare Brühe [Rosół](/de/rezepte/rosol) noch die Gerstensuppe [Krupnik](/de/rezepte/krupnik).",
 originPl:
 "Grochówka to jedna z najstarszych polskich zup. Pierwszy znany przepis, wtedy jeszcze pod nazwą polewka grochowa, znajduje się już w „Compendium Ferculorum” Stanisława Czernieckiego z 1682 roku. Przez wieki była daniem czysto roślinnym, bo mięso zostawało dla bogatych. Sławę zdobyła jako zupa polskiego wojska, na tyle wielką, że polscy emigranci po powstaniu listopadowym 1830 i 1831 roku spotykali się co roku 25 lutego w Paryżu, żeby przy talerzu grochówki wspominać bitwę pod Grochowem. Dopiero książka „Kuchnia Polska” z 1972 roku ustaliła dzisiejszą wersję z warzywami korzeniowymi i wędzoną kiełbasą. Powiedzenie, że zupa powinna być na tyle gęsta, żeby łyżka w niej stała, opisuje jej charakter do dziś. To ani fasola duszona [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku), ani [kapuśniak](/pl/rezepte/kapusniak), ani klarowny [rosół](/pl/rezepte/rosol), ani [krupnik](/pl/rezepte/krupnik).",
 shopDe:
 "Gelbe Trockenerbsen und geräucherte Wurst bilden den Kern dieser Suppe. Welche Wurst wohin passt, erklärt das [Kiełbasa-Arten](/de/blog/kielbasa-arten)-Lexikon, den Einkauf erledigst du oft am günstigsten im [Polenladen](/de/blog/polenladen-einkaufen). Kartoffeln, Zwiebel, Karotte und Majoran bekommst du im normalen Supermarkt. Fehlt geräucherte Kiełbasa, hilft milder Speck oder Schinken laut den [Ersatzprodukten DE](/de/blog/ersatzprodukte-de) weiter. Weiße Bohnen und Sauerkraut gehören nicht hinein, sonst landest du eher bei [Fasolka](/de/rezepte/fasolka-po-bretonsku) oder [Kapuśniak](/de/rezepte/kapusniak).",
 shopPl:
 "Żółty groch i wędzona kiełbasa to podstawa tej zupy. Który rodzaj kiełbasy pasuje najlepiej, opisują [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy), a zakupy najtaniej zrobisz zwykle w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Ziemniaki, cebulę, marchew i majeranek znajdziesz w zwykłym markecie. Brak wędzonej kiełbasy zastąpi łagodna słonina lub szynka, jak podpowiadają [zamienniki składników](/pl/blog/zamienniki-skladnikow). Biała fasola i kapusta kiszona nie mają tu miejsca, inaczej zbliżysz się do [fasolki](/pl/rezepte/fasolka-po-bretonsku) albo [kapuśniaku](/pl/rezepte/kapusniak).",
 techniqueDe:
 "Die Erbsen müssen weich fallen, bevor Kartoffeln und Wurst dazukommen, sonst bleibt die Suppe ungleichmäßig gegart. Einen Teil davon mit dem Pürierstab anzustoßen gibt Körper, ohne die Suppe zu Brei zu machen. Die Wurst zuerst anbraten und erst spät in den Topf geben, damit das Raucharoma nicht verkocht. Majoran sparsam dosieren, denn zu viel davon erschlägt den Erbsengeschmack schnell. Zu dünn gerät die Suppe wässrig, zu kurz gegart bleiben die Erbsen bissfest, beides sind typische Anfängerfehler bei diesem Rezept.",
 techniquePl:
 "Groch musi zmięknąć, zanim dodasz ziemniaki i kiełbasę, inaczej zupa ugotuje się nierówno. Zblendowanie części grochu daje gęstość bez zamieniania całości w papkę. Kiełbasę obsmaż osobno i dodaj późno, żeby nie stracić aromatu wędzenia. Majeranku używaj oszczędnie, bo w nadmiarze szybko zagłusza smak grochu. Za rzadka zupa wychodzi wodnista, za krótko gotowana zostawia twardy groch, oba błędy są typowe dla początkujących.",
 serveDe:
 "Heiß mit frischem Dill oder Majoran und einer Scheibe Brot, als Starter am Sonntag oder als vollwertiges Mittagessen im Sinne des [polnischen Sonntagsessens](/de/blog/sonntagsessen-polnisch). Wer Bohnen möchte, findet sie bei [Fasolka](/de/rezepte/fasolka-po-bretonsku), wer eine Krautsuppe sucht, bei [Kapuśniak](/de/rezepte/kapusniak), und wer klare Brühe will, bei [Rosół](/de/rezepte/rosol). Einen Überblick über die ganze Suppenlandschaft gibt [Polnische Suppen](/de/blog/polnische-suppen), Wurst-Wissen liefert das [Kiełbasa-Arten](/de/blog/kielbasa-arten)-Lexikon.",
 servePl:
 "Podawaj gorącą ze świeżym koperkiem lub majerankiem i kromką chleba, jako przystawkę w niedzielę albo pełny obiad w duchu [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Kto szuka fasoli, znajdzie ją w [fasolce](/pl/rezepte/fasolka-po-bretonsku), kto szuka kapusty, w [kapuśniaku](/pl/rezepte/kapusniak), a kto chce klarowny bulion, w [rosole](/pl/rezepte/rosol). Przegląd całej rodziny zup daje [polskie zupy](/pl/blog/polskie-zupy), a wiedzę o wędlinie [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy).",
 diasporaDe:
 "Grochówka ist ein diasporafreundlicher Topf: einmal kochen, für zwei Tage satt werden, Reste portionsweise einfrieren. Am Samstag die Erbsen einweichen, am Sonntag köcheln lassen, oder an einem Wochentag, wenn Schichtarbeit den Rhythmus verschiebt. Kinder dürfen die Erbsen abspülen, während die heiße Wurstpfanne bei den Erwachsenen bleibt. Die Einkaufsliste bleibt kurz: Erbsen, Wurst, Kartoffeln, Details zur passenden Wurst liefert das [Kiełbasa-Arten](/de/blog/kielbasa-arten)-Lexikon, erhältlich meist im [Polenladen](/de/blog/polenladen-einkaufen).",
 diasporaPl:
 "Grochówka to danie przyjazne diasporze: raz ugotowana, syci przez dwa dni, a resztki można zamrozić w porcjach. W sobotę groch moczy się, w niedzielę zupa gotuje się na wolnym ogniu, albo w dzień powszedni, gdy praca zmianowa zmienia rytm dnia. Dzieci mogą przepłukać groch, gorąca patelnia z kiełbasą zostaje przy dorosłych. Lista zakupów jest krótka: groch, kiełbasa, ziemniaki, a szczegóły o wędlinie znajdziesz w [rodzajach kiełbasy](/pl/blog/rodzaje-kielbasy), dostępnej najczęściej w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
 mistakesDe:
 "Wer Grochówka mit dem Bohnengericht [Fasolka](/de/rezepte/fasolka-po-bretonsku) verwechselt, landet bei einer ganz anderen Hülsenfrucht. Auch die Verwechslung mit der Sauerkrautsuppe [Kapuśniak](/de/rezepte/kapusniak) oder mit der Gerstensuppe [Krupnik](/de/rezepte/krupnik) führt in die falsche Richtung. Zu kurze Garzeit lässt die Erbsen hart bleiben, und wer die Wurst von Anfang an mitkocht, statt sie erst spät zuzugeben, verliert genau das Raucharoma, das die Suppe ausmacht.",
 mistakesPl:
 "Mylenie grochówki z fasolą duszoną w [fasolce](/pl/rezepte/fasolka-po-bretonsku) prowadzi do zupełnie innego strączka. Podobnie mylenie jej z [kapuśniakiem](/pl/rezepte/kapusniak) albo z [krupnikiem](/pl/rezepte/krupnik) prowadzi w złą stronę. Za krótkie gotowanie zostawia twardy groch, a dodanie kiełbasy od samego początku zamiast na końcu odbiera jej cały aromat wędzenia.",
 variantsDe:
 "Mehr Speck macht die Suppe rauchiger, eine vegetarische Version mit geräuchertem Paprikapulver lässt sich ehrlich als solche kennzeichnen, und je nach Hausbrauch darf sie dicker oder dünner ausfallen. Passende Nachbarn sind [Fasolka](/de/rezepte/fasolka-po-bretonsku), [Kapuśniak](/de/rezepte/kapusniak) und [Rosół](/de/rezepte/rosol). Mehr zur Landschaft der Suppen liefert [Polnische Suppen](/de/blog/polnische-suppen), zur Wurstwahl das [Kiełbasa-Arten](/de/blog/kielbasa-arten)-Lexikon, zum Menürahmen das [Sonntagsessen](/de/blog/sonntagsessen-polnisch), und Ersatzideen liefern die [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
 variantsPl:
 "Więcej słoniny daje bardziej wędzony smak, wersja wegetariańska z wędzoną papryką w proszku może być uczciwie tak nazwana, a gęstość zupy zależy od zwyczaju domu. Pasującymi sąsiadami są [fasolka](/pl/rezepte/fasolka-po-bretonsku), [kapuśniak](/pl/rezepte/kapusniak) i [rosół](/pl/rezepte/rosol). Więcej o krajobrazie zup znajdziesz w [polskich zupach](/pl/blog/polskie-zupy), o wyborze wędliny w [rodzajach kiełbasy](/pl/blog/rodzaje-kielbasy), o miejscu w menu w [obiedzie niedzielnym](/pl/blog/obiad-niedzielny), a o zamiennikach w [zamiennikach składników](/pl/blog/zamienniki-skladnikow).",
 },
};
