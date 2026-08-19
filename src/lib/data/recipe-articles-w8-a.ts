/**
 * Wave 8 Paket A — FACTS for Mizeria + Kapusta zasmażana.
 * E merges into seed.ts / recipe-articles.ts FACTS map — do not import here until Integrator.
 */

export type W8ArticleFacts = {
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

export const W8_FACTS_A: Record<string, W8ArticleFacts> = {
 "recipe-mizeria": {
 dishDe: "Mizeria",
 dishPl: "Mizeria",
 vibeDe: "kühl, cremig-säuerlich, nach Dill und frischer Gurke",
 vibePl: "chłodna, kremowo-kwaśna, z koperkiem i świeżym ogórkiem",
 originDe:
 "Der Name Mizeria kommt vom lateinischen und französischen Wort für Elend, misère, und das ist eine Art Ironie: Sprachforscher wie Aleksander Brückner ordnen ihn dem Wortfeld für Armut zu, weil Gurken einst genau in der kargen Vorsommerzeit reiften, wenn sonst kaum Gemüse verfügbar war, und arme Landfamilien oft nur diesen einen schlichten Salat auf dem Tisch hatten. Die bekanntere Legende, dass Königin Bona Sforza vor Heimweh nach Italien weinte, wenn sie polnische Gurken aß, gilt unter Historikern als hübsche, aber unbelegte Geschichte. Ursprünglich wurde die Gurke nicht nur mit Sahne, sondern auch mit Milch, Essig und reichlich Zucker angemacht, teils sogar kurz mit heißem Wasser überbrüht, wie es Kochbücher des 19. Jahrhunderts festhalten. Erst mit der Zeit setzte sich sure Śmietana als die polnische Variante durch und machte aus dem kargen Elend-Essen einen festen Bestandteil des Sonntagstischs, oft neben knusprigem [Kotlet schabowy](/de/rezepte/kotlet-schabowy). Mit einer kalten Suppe wie [Chłodnik](/de/rezepte/chlodnik-litewski) hat Mizeria trotz ähnlicher Zutaten nichts zu tun, denn sie bleibt Salat, keine Suppe.",
 originPl:
 "Nazwa mizeria pochodzi od łacińskiego i francuskiego słowa oznaczającego nędzę, misère, i to jest pewna ironia: językoznawcy, jak Aleksander Brückner, wiążą ją z ubóstwem, bo ogórki dojrzewały właśnie w chudym okresie przedletnim, gdy innych warzyw brakowało, a biedne rodziny na wsi miały na stole często tylko tę jedną prostą sałatkę. Popularna legenda, jakoby królowa Bona Sforza płakała z tęsknoty za Italią przy jedzeniu polskich ogórków, uchodzi wśród historyków za ładną, ale niepotwierdzoną opowieść. Pierwotnie ogórki mieszano nie tylko ze śmietaną, ale i z mlekiem, octem oraz sporą ilością cukru, a czasem nawet krótko parzono wrzątkiem, co potwierdzają XIX-wieczne książki kucharskie. Dopiero z czasem kwaśna śmietana stała się polską wersją klasyczną i zmieniła dawne biedne danie w stały punkt niedzielnego stołu, często obok chrupiącego [kotleta schabowego](/pl/rezepte/kotlet-schabowy). Z chłodną zupą jak [chłodnik](/pl/rezepte/chlodnik-litewski) mizeria mimo podobnych składników nie ma nic wspólnego, bo zostaje sałatką, nie zupą.",
 shopDe:
 "Feste Salat- oder Feldgurken, frischer Dill und ein Milchprodukt mit klarer Rolle, Schmand oder saure Sahne statt irgendeiner Sahne aus dem Kühlregal. Welche Stufe wohin passt, erklärt der [Śmietana-und-Schmand-Guide](/de/blog/smietana-schmand), dort findest du auch Alternativen, während hier der Anwendungsfall Mizeria im Mittelpunkt steht. Zucker und Pfeffer sparsam dosieren, optional etwas sehr fein geriebene Zwiebel. Einkaufstag und Spezialitäten dazu liefert der [Polenladen-Guide](/de/blog/polenladen-einkaufen).",
 shopPl:
 "Jędrne ogórki sałatkowe lub gruntowe, świeży koperek i nabiał z jasną rolą, Schmand albo kwaśna śmietana zamiast byle jakiej śmietany z chłodni. Który produkt do czego pasuje, wyjaśnia [przewodnik śmietana albo Schmand](/pl/blog/smietana-czy-schmand), tam znajdziesz też alternatywy, a tu zostaje samo zastosowanie w mizerii. Cukier i pieprz dawkuj oszczędnie, opcjonalnie dodaj bardzo drobno startą cebulę. W [przewodniku po sklepie polskim](/pl/blog/sklep-polski-zakupy) kupisz typowe specjały do tego dania.",
 techniqueDe:
 "Die Gurke dünn hobeln, salzen und warten lassen, dann ausdrücken, denn genau diese Reihenfolge entscheidet über die Konsistenz. Śmietana kalt unterheben, nicht schlagen, sonst gerinnt sie leicht. Dill kommt erst am Ende dazu, damit er frisch bleibt und sein Aroma nicht verkocht. Zucker gleicht die natürliche Bitterkeit mancher Gurken aus, er soll den Salat nicht süß wie ein Dessert machen. Abschmecken lohnt sich erst kurz vor dem Servieren, weil die Gurke währenddessen weiter Wasser abgibt.",
 techniquePl:
 "Ogórek kroić cienko, solić i odczekać, potem odcisnąć, bo właśnie ta kolejność decyduje o konsystencji. Śmietanę mieszać na zimno, nie ubijać, bo łatwo się zważy. Koperek dodawaj dopiero na końcu, żeby zachował świeżość aromatu. Cukier łagodzi naturalną goryczkę niektórych ogórków, ale sałatka nie ma smakować jak deser. Doprawiać warto dopiero tuż przed podaniem, bo ogórek cały czas oddaje wodę.",
 serveDe:
 "Klassisch neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy) und Kartoffeln, ebenso gut zu [Kotlet mielony](/de/rezepte/kotlet-mielony). Im Festmenü taucht sie als kühle Beilage im [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan) auf. Am Alltagstisch reicht eine Schüssel für vier Personen, dabei lieber kurz vor dem Essen nachlegen, als den Salat lange wässrig stehen zu lassen. Reste halten sich einen Tag im Kühlschrank, sollten aber erneut abgeschmeckt und mit frischem Dill ergänzt werden.",
 servePl:
 "Klasycznie obok [kotleta schabowego](/pl/rezepte/kotlet-schabowy) i ziemniaków, równie dobrze pasuje do [kotleta mielonego](/pl/rezepte/kotlet-mielony). Na święta pojawia się jako chłodny dodatek w [menu wielkanocnym](/pl/blog/menu-wielkanocne). Na co dzień jedna miska wystarcza na cztery osoby, lepiej dokładać porcje tuż przed jedzeniem, niż trzymać całość długo wodnistą. Resztki wytrzymują dzień w lodówce, ale warto je ponownie doprawić i dosypać świeżego koperku.",
 diasporaDe:
 "In deutschen Küchen geht Mizeria oft schneller als gedacht: Gurken aus dem Supermarkt, Schmand aus dem Kühlregal, Dill vom Kräutertopf auf der Fensterbank. Wer den Sonntag durchplant, mischt Mizeria erst nach dem Braten an, parallel zum [Panieren-Ablauf](/de/blog/panieren-schabowy) für den Schabowy, damit sie nicht zu lange wässrig zieht. Den größeren Menü-Rahmen ohne Küchenchaos liefert das [polnische Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 diasporaPl:
 "W niemieckich kuchniach mizeria powstaje często szybciej, niż się wydaje: ogórki z supermarketu, Schmand z chłodni, koperek z doniczki na parapecie. Kto planuje całą niedzielę, miesza mizerię dopiero po usmażeniu mięsa, równolegle do [panierowania](/pl/blog/panierowanie-kotlet) schabowego, żeby nie stała za długo wodnista. Szerszy kontekst menu bez chaosu w kuchni daje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 mistakesDe:
 "Wer die Gurken nicht aussalzt, bekommt eine wässrige Sauce statt einer cremigen Beilage. Heiße oder zu kalte Śmietana direkt aus dem Kühlschrank kann sich leicht trennen. Zu viel Zwiebel überdeckt den Dill komplett. Mizeria mit dem kalten Chłodnik zu verwechseln oder sie als Basis für kalte Suppen misszuverstehen, führt ebenfalls in die falsche Richtung. Für ein Buffet sollte man den Salat erst kurz vorher anmischen, sonst wird er bis zum Servieren zu weich.",
 mistakesPl:
 "Brak odsączenia ogórków daje wodnisty sos zamiast kremowego dodatku. Zbyt zimna śmietana prosto z lodówki albo za gorące otoczenie może się rozdzielić. Za dużo cebuli całkowicie zagłusza koperek. Mylenie mizerii z zimnym chłodnikiem albo traktowanie jej jako bazy do zimnych zup też prowadzi na manowce. Na bufet lepiej mieszać sałatkę tuż przed podaniem, bo inaczej zdąży zmięknąć.",
 variantsDe:
 "Mit Joghurt wird die Beilage leichter, mit etwas Zitronensaft säuerlicher, und wenn die Gurken schon süß sind, kann der Zucker ganz entfallen. Manche Familien geben eine Spur Knoblauch dazu, das ist dann ehrlich als Hausvariante zu benennen und nicht als Standardrezept. Warm serviert ist es keine Mizeria mehr. Ein festlicher Buffetsalat mit Mayonnaise und Gemüse hat einen ganz anderen Charakter und heißt [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Die verwandte kühle Linie im Sommer bleibt der Chłodnik, der als eigenes Rezept weiterlebt.",
 variantsPl:
 "Z jogurtem sałatka robi się lżejsza, z cytryną bardziej kwaśna, a jeśli ogórki są już słodkie, cukier można całkiem pominąć. Niektóre rodziny dodają odrobinę czosnku, ale to warto uczciwie nazwać wariantem domowym, nie standardem. Podana na ciepło przestaje być mizerią. Odświętna sałatka bufetowa z majonezem i warzywami ma zupełnie inny charakter i nazywa się [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Pokrewna chłodna linia latem to chłodnik, który zostaje osobnym przepisem.",
 },
 "recipe-kapusta-zasmażana": {
 dishDe: "Kapusta zasmażana",
 dishPl: "Kapusta zasmażana",
 vibeDe: "warm, säuerlich-mild, nach Butter und sanfter Schwitze",
 vibePl: "ciepła, kwaśno-łagodna, z masłem i delikatną zasmażką",
 originDe:
 "Kapusta zasmażana ist geschmortes Sauerkraut, das erst am Ende mit einer Zasmażka gebunden wird, einer hellen Mehlschwitze aus Butter oder Schmalz und Mehl, die der polnischen Küche seit Jahrhunderten ihre samtige Textur gibt. Der Name trägt die Technik direkt im Wort: zasmażać heißt so viel wie anschwitzen und binden. Kohl war in Polen lange ein Grundnahrungsmittel, weil er leicht anzubauen und durch Fermentation zu Kapusta kiszona über den ganzen Winter haltbar war, oft in Fässern im Keller, gleichrangig neben eingelegtem Hering. Aus dieser Vorratshaltung entstand mit der Zeit ein eigenständiges Beilagengericht, klar getrennt vom aufwendigeren [Bigos](/de/rezepte/bigos), der als Schmorgericht mit mehreren Fleischsorten über Stunden köchelt. Kapusta zasmażana bleibt schlanker: eine warme Beilage zum Fleisch, kein eigenständiger Schmortopf. In manchen Regionen wird sie fast suppig dünn serviert, in anderen so dick eingekocht, dass sie an Kartoffelpüree erinnert, und sie taucht bis heute neben Schlesischen Klößen, Eisbein oder gebratener Ente auf.",
 originPl:
 "Kapusta zasmażana to duszona kapusta kiszona, którą dopiero na końcu wiąże się zasmażką, jasną zasmażką z masła lub smalcu i mąki, która od wieków nadaje polskiej kuchni jej aksamitną konsystencję. Nazwa niesie technikę wprost w słowie: zasmażać znaczy tyle co podsmażyć i związać. Kapusta była w Polsce od dawna podstawą wyżywienia, bo łatwo ją uprawiać, a dzięki fermentacji jako kapusta kiszona przetrwać całą zimę, często w beczkach w piwnicy, obok śledzi jako fundament przetrwania. Z tej tradycji przechowywania powstało z czasem samodzielne danie dodatkowe, wyraźnie oddzielone od bardziej rozbudowanego [bigosu](/pl/rezepte/bigos), który jako danie duszone z kilkoma rodzajami mięsa gotuje się godzinami. Kapusta zasmażana zostaje skromniejsza: ciepły dodatek do mięsa, nie osobny gulasz. W niektórych regionach podaje się ją niemal jak zupę, w innych zagęszcza tak mocno, że przypomina puree ziemniaczane, a do dziś towarzyszy kluskom śląskim, golonce albo pieczonej kaczce.",
 shopDe:
 "Gute [Sauerkraut-Qualität](/de/blog/kiszenie-guide) aus dem Glas oder Beutel, dabei Säure und Salz vorher prüfen statt blind zu spülen. Dazu Zwiebel, Butter oder Schmalz, Mehl und Lorbeer. Optional passt ein Schuss leichte Brühe vom [Rosół](/de/rezepte/rosol)-Tag hinein. Wer selbst fermentiert, nutzt den Kiszenie-Guide nur als Technik-Nachbar, denn das eigentliche Thema Fermentieren bleibt dort ausführlich behandelt. Kraut aus dem Polenladen schmeckt oft aromatischer als industrielle Supermarktware, weil es langsamer und mit weniger Zucker fermentiert wird. Wer eine mildere Variante sucht, greift zu jüngerem Kraut mit kürzerer Gärzeit, wer kräftigere Säure will, nimmt ein Glas vom Boden des Fasses.",
 shopPl:
 "Dobra [jakość kiszonki](/pl/blog/kiszenie-w-domu) ze słoika lub worka, przy czym warto sprawdzić kwas i sól, zamiast płukać na ślepo. Do tego cebula, masło lub smalec, mąka i liść laurowy. Opcjonalnie pasuje łyżka lekkiego bulionu z dnia, gdy gotuje się [rosół](/pl/rezepte/rosol). Kto kisi sam, traktuje przewodnik kiszenia jedynie jako technicznego sąsiada, bo samo kiszenie zostaje tam opisane osobno i szczegółowo. Kapusta ze sklepu polskiego bywa aromatyczniejsza niż przemysłowa z supermarketu, bo kisi się wolniej i z mniejszą ilością cukru. Kto szuka łagodniejszej wersji, sięga po młodszą kapustę o krótszym czasie fermentacji, a kto lubi mocny kwas, bierze słoik z dna beczki.",
 techniqueDe:
 "Die Zwiebel zunächst glasig anschwitzen, dann das Kraut schmoren, bis es weich ist, und erst danach die helle, nicht nussbraun-bittere Zasmażka unterheben und kurz mitkochen. Zu viel Flüssigkeit sollte vorher reduzieren, sonst wird die Bindung am Ende zu dünn. Abschmecken mit Salz und Pfeffer, während Zucker nur als Notbremse gegen zu aggressive Säure dient und nicht standardmäßig dazugehört. Wichtig ist auch die Reihenfolge beim Binden: die Zasmażka löst sich am glattesten auf, wenn man sie zunächst mit etwas warmer Flüssigkeit aus dem Topf verrührt, bevor man sie ins Kraut zurückgibt, denn direkt hineingegeben klumpt sie leicht.",
 techniquePl:
 "Cebulę najpierw zeszklić, potem kapustę dusić do miękkości, a dopiero na końcu wmieszać jasną, nie gorzką zasmażkę i krótko podgotować. Nadmiar płynu lepiej wcześniej odparować, inaczej zasmażka nie zwiąże całości. Doprawić solą i pieprzem, a cukier trzymać w odwodzie tylko na wypadek zbyt ostrego kwasu, nie jako stały składnik. Ważna jest też kolejność przy wiązaniu: zasmażka rozpuszcza się najgładziej, gdy najpierw rozprowadzi się ją odrobiną ciepłego płynu z garnka, zanim wróci do kapusty, bo wrzucona wprost łatwo się zbryla.",
 serveDe:
 "Heiß zu [Kotlet schabowy](/de/rezepte/kotlet-schabowy), Braten oder einfachen Kartoffeln, eingebettet in den Rahmen des [polnischen Sonntagsessens](/de/blog/sonntagsessen-polnisch). Mit geräucherter Note sparsam umgehen, denn [Kiełbasa-Arten](/de/blog/kielbasa-arten) erklärt die Wurst-Rollen im Detail, hier dient sie höchstens als Aroma-Tupfer und nicht als Ersatz für Bigos. Reste schmecken am nächsten Tag oft runder, dafür beim Erwärmen etwas Wasser nachgießen. In manchen Familien landet sie auch neben Schlesischen Kartoffelklößen oder einem Löffel Apfelmus, was ihr eine mildere, fast süßliche Note verleiht.",
 servePl:
 "Gorąca do [kotleta schabowego](/pl/rezepte/kotlet-schabowy), pieczeni lub zwykłych ziemniaków, w ramach [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Wędzoną nutę warto dawkować oszczędnie, bo [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy) opisują dokładnie role poszczególnych wędlin, a tu wędzonka jest najwyżej akcentem smakowym, nie zamiennikiem bigosu. Resztki następnego dnia często smakują lepiej, przy odgrzewaniu warto dolać odrobinę wody. W niektórych rodzinach podaje się ją też obok śląskich klusek albo z łyżką musu jabłkowego, co dodaje jej łagodniejszej, niemal słodkawej nuty.",
 diasporaDe:
 "In deutschen Wohnungen riecht Kapusta zasmażana nach einem ruhigen Sonntag ohne stundenlanges Schmoren in mehreren Töpfen. Kraut kommt direkt aus dem Kühlregal, die Schwitze ist in fünf Minuten fertig, was das Gericht auch nach einer Spätschicht machbar macht. Wer Majoran mag, dosiert ihn zurückhaltend und findet im [Majeranek-Lexikon](/de/blog/majeranek) einen guten Gewürz-Nachbarn, ohne dass dieses Rezept dadurch ersetzt würde. Für Kinder, die Sauerkraut pur ablehnen, wirkt die milde, buttrige Zasmażka oft überzeugender als reines Kraut, weil die Säure abgerundet statt roh daherkommt.",
 diasporaPl:
 "W niemieckich mieszkaniach kapusta zasmażana pachnie spokojną niedzielą bez maratonu kilku garnków naraz. Kapusta pochodzi prosto z chłodni, zasmażka jest gotowa w pięć minut, co sprawdza się nawet po popołudniowej zmianie. Kto lubi majeranek, dawkuje go ostrożnie, a [leksykon majeranku](/pl/blog/majeranek-leksykon) podpowiada, jak dobierać przyprawy, choć samego przepisu nie zastępuje. Dzieciom, które nie lubią surowej kiszonki, łagodna, maślana zasmażka często smakuje lepiej, bo łagodzi kwas zamiast podawać go na surowo.",
 mistakesDe:
 "Eine zu dunkel geröstete Zasmażka schmeckt schnell bitter. Komplett gespültes Kraut verliert dagegen fast seine ganze Säure und wirkt fade. Das Gericht mit Bigos zu verwechseln oder mit zu viel Wasser zu einer Suppe statt einer Beilage zu verdünnen, sind zwei typische Fehler. Wurst zu früh hinzuzugeben verändert außerdem den Charakter komplett und macht daraus ein anderes Gericht. Wer die Zasmażka kalt in kochendes Kraut gießt, riskiert zudem Klümpchen, die sich später kaum noch glattrühren lassen.",
 mistakesPl:
 "Zbyt ciemno zasmażona mąka szybko robi się gorzka. Całkiem wypłukana kapusta traci za to niemal cały kwas i wychodzi mdła. Mylenie tego dania z bigosem albo rozwadnianie go zbyt dużą ilością wody, aż zamieni się w zupę zamiast dodatku, to dwa częste błędy. Zbyt wczesne dodanie kiełbasy zmienia charakter potrawy w zupełnie inne danie. Wlanie zimnej zasmażki wprost do wrzącej kapusty grozi grudkami, których później trudno się pozbyć.",
 variantsDe:
 "Mit Speckwürfeln entsteht eine herzhaftere Hausvariante, mit frischem Weißkohl gemischt wird sie milder, und mit Pilzen rückt sie näher an das Wigilia-Gefühl heran, was man dann auch ehrlich benennen sollte. In manchen Regionen kommen Schlesische Kartoffelklöße oder ein Löffel Apfelmus dazu, andernorts landet sie neben Eisbein oder gebratener Ente. Der verwandte, deftigere Kohl-Eintopf mit mehreren Fleischsorten bleibt der [Bigos](/de/rezepte/bigos), während Kapusta zasmażana klar eine Beilage bleibt.",
 variantsPl:
 "Z boczkiem powstaje bardziej wytrawny wariant domowy, ze świeżą kapustą robi się łagodniej, a z grzybami zbliża się do smaku wigilijnego, co warto uczciwie zaznaczyć. W niektórych regionach dodaje się śląskie kluski albo łyżkę musu jabłkowego, gdzie indziej podaje się ją do golonki albo pieczonej kaczki. Pokrewnym, bardziej sytym gulaszem z kilkoma rodzajami mięsa zostaje [bigos](/pl/rezepte/bigos), a kapusta zasmażana pozostaje jasno dodatkiem.",
 },
};
