/**
 * Wave 12 Paket C — FACTS for mazurek + buraczki.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W12_FACTS_C } from "./recipe-articles-w12-c";
 * Object.assign(FACTS, …, W12_FACTS_C);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Mazurek orzechowy ≠ Babka (Hefegugelhupf) ≠ Sernik ≠ Makowiec ≠ Piernik
 * - Buraczki = warme Beilage ≠ Botwinka (Suppe) ≠ Barszcz ≠ Sałatka jarzynowa
 * - Wielkanoc Speiseplan bleibt Anlass-Owner; Mazurek nur Cook
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

export const W12_FACTS_C: Record<string, ArticleFacts> = {
 "recipe-mazurek": {
 dishDe: "Mazurek orzechowy",
 dishPl: "Mazurek orzechowy",
 vibeDe:
 "flach und knusprig-nussig, festlich und schnittfest, Ostern ohne hohen Turmkuchen",
 vibePl:
 "płaski i chrupiąco-orzechowy, świąteczny i do krojenia, Wielkanoc bez wysokiej babki z formy",
 originDe:
 "Der Name Mazurek geht auf „Mazur“ zurück, das alte Wort für einen Bewohner Masowiens, ein Mazurek war also ursprünglich schlicht ein „masowischer Kuchen“, genau wie der gleichnamige Tanz ein masowischer Tanz ist. Die ältesten polnischen Wörterbücher kannten dabei noch keine Verbindung zu Ostern: Bei Linde war ein Mazurek Anfang des 19. Jahrhunderts einfach ein „Kuchen aus Mandeln“. Seine Wurzeln reichen zurück zu orientalischer Mandelkonfekt-Kunst, die über osmanische Handelskontakte im 17. Jahrhundert nach Polen kam und in den Küchen der Adelshöfe verfeinert wurde, in Klosterküchen soll Ähnliches schon im Mittelalter gebacken worden sein. Fest mit Ostern verbunden wurde der Mazurek erst in Wörterbüchern nach dem Zweiten Weltkrieg. Genau diese Herkunft erklärt die charakteristische Form: ein dünner, knuspriger Boden mit einem reichen Belag obenauf, statt eines hohen, aufgehenden Kuchens. Das ist weder der hohe Hefegugelhupf [Babka](/de/rezepte/babka) noch der Quarkkuchen [Sernik](/de/rezepte/sernik) noch die Mohnrolle [Makowiec](/de/rezepte/makowiec) noch der Gewürzkuchen [Piernik](/de/rezepte/piernik).",
 originPl:
 "Nazwa mazurek pochodzi od słowa Mazur, czyli dawnego określenia mieszkańca Mazowsza, mazurek był więc pierwotnie po prostu „ciastem mazowieckim”, tak jak taniec o tej samej nazwie jest tańcem mazowieckim. Najstarsze polskie słowniki nie łączyły go jeszcze ze świętami: u Lindego na początku XIX wieku mazurek to po prostu „placek z migdałów”. Jego korzenie sięgają orientalnej sztuki wyrobu słodyczy migdałowych, która dotarła do Polski przez kontakty handlowe z Imperium Osmańskim w XVII wieku i została dopracowana na dworach szlacheckich, podobne wypieki miały powstawać już wcześniej w kuchniach klasztornych. Na stałe z Wielkanocą połączyły go dopiero słowniki powojenne. Właśnie to pochodzenie tłumaczy charakterystyczną formę: cienki, chrupiący spód z bogatym wierzchem, a nie wysokie, wyrastające ciasto. To ani wysoka drożdżowa [babka](/pl/rezepte/babka), ani [sernik](/pl/rezepte/sernik), ani rolada [makowiec](/pl/rezepte/makowiec), ani korzenny [piernik](/pl/rezepte/piernik).",
 shopDe:
 "Mehl, kalte Butter, Zucker und Ei bilden den Boden, gemischte Nüsse und Honig den Belag, beides findest du oft besonders frisch im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt eine bestimmte Nusssorte, hilft ein ehrlicher Ersatz laut den [Ersatzprodukten DE](/de/blog/ersatzprodukte-de) weiter. Hefe braucht dieses Rezept nicht, wer das Gefühl für Hefeteig sucht, wird eher bei der [Makowiec-Technik](/de/blog/makowiec-technik) fündig. Als Form reicht ein flaches Blech, eine Gugelhupfform wie bei der Babka ist hier nicht nötig.",
 shopPl:
 "Mąka, zimne masło, cukier i jajko budują spód, mieszanka orzechów i miód wierzch, oba te składniki znajdziesz często szczególnie świeże w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Jeśli brakuje konkretnej odmiany orzechów, pomogą uczciwe [zamienniki składników](/pl/blog/zamienniki-skladnikow). Drożdże nie są tu potrzebne, kto szuka wyczucia ciasta drożdżowego, znajdzie je raczej w [technice makowca](/pl/blog/makowiec-technika). Wystarczy płaska blacha, forma jak do babki nie jest tu potrzebna.",
 techniqueDe:
 "Der Mürbeteig sollte kurz und kalt verarbeitet werden, warmes Kneten macht ihn zäh statt kurz und mürbe. Nach dem dünnen Ausrollen wird der Boden vorgebacken, danach kommen die mit Butter und Honig gerösteten Nüsse sofort heiß darauf. Der zweite Backgang setzt den Belag fest, ohne den Boden zu verbrennen, deshalb sollte er beim ersten Mal nur leicht golden werden. Eine zu dicke Teigschicht wirkt schnell wie ein Keksboden ohne den typischen Mazurek-Charakter, während zu wenig Belag den Kuchen karg erscheinen lässt. Geschnitten wird erst nach vollständigem Abkühlen, heiß bricht der Belag sonst leicht.",
 techniquePl:
 "Kruche ciasto trzeba wyrabiać krótko i na zimno, na ciepło robi się gumowate zamiast krótkiego i kruchego. Po cienkim rozwałkowaniu spód podpieka się wcześniej, a potem od razu na gorąco kładzie orzechy związane z masłem i miodem. Drugie pieczenie utwardza wierzch, nie paląc przy tym spodu, dlatego za pierwszym razem wystarczy lekkie złocenie. Zbyt gruba warstwa ciasta szybko przypomina spód ciasteczkowy bez charakteru mazurka, a zbyt mało wierzchu sprawia, że placek wygląda ubogo. Kroi się dopiero po całkowitym ostudzeniu, na gorąco wierzch łatwo pęka.",
 serveDe:
 "In Rauten oder Rechtecken auf einer Platte, optional mit getrockneten Früchten dekoriert, am Ostertisch neben Żurek und bunten Eiern. Wer Höhe und Hefeteig sucht, findet das bei [Babka](/de/rezepte/babka), wer Quark bevorzugt, bei [Sernik](/de/rezepte/sernik), und wer die Mohnspirale möchte, bei [Makowiec](/de/rezepte/makowiec). Luftdicht verpackt bleibt der Belag mehrere Tage knusprig-nussig.",
 servePl:
 "W romby lub prostokąty na półmisku, opcjonalnie z suszonymi owocami, przy stole wielkanocnym obok żurku i kolorowych jajek. Kto szuka wysokości i drożdży, znajdzie to w [babce](/pl/rezepte/babka), kto woli twaróg, w [serniku](/pl/rezepte/sernik), a kto chce spiralę makową, w [makowcu](/pl/rezepte/makowiec). Szczelnie zapakowany wierzch zostaje chrupiący przez kilka dni.",
 diasporaDe:
 "In Deutschland wird oft am Samstag gebacken und am Sonntag nur noch angerichtet, das entlastet den Ostermorgen spürbar. Kinder dürfen Nüsse abzählen und die Rauten einteilen, der heiße Ofen bleibt bei den Erwachsenen. Ein Blech reicht für viele Gäste, Qualität schlägt hier drei verschiedene Kuchen. Der Einkauf lohnt sich früh im [Polenladen](/de/blog/polenladen-einkaufen), bevor die Nuss- und Honigregale vor Ostern leer sind.",
 diasporaPl:
 "W Niemczech często piecze się w sobotę, a w niedzielę tylko układa na stole, co odciąża poranek wielkanocny. Dzieci mogą liczyć orzechy i układać romby, gorący piekarnik zostaje przy dorosłych. Jedna blacha wystarcza dla wielu gości, jakość liczy się tu bardziej niż trzy różne wypieki. Zakupy warto zrobić wcześnie w [sklepie polskim](/pl/blog/sklep-polski-zakupy), zanim półki z orzechami i miodem opustoszeją przed świętami.",
 mistakesDe:
 "Ein zu dicker Boden erdrückt schnell den feinen Belag, und wer den Belag ohne Vorbacken des Bodens aufträgt, riskiert einen matschigen Kuchen. Mit dem hohen [Babka](/de/rezepte/babka) oder dem Quarkkuchen [Sernik](/de/rezepte/sernik) verwechselt man ihn schnell, dabei ist die flache Form gerade sein Markenzeichen. Wer den Kuchen noch heiß schneidet, bekommt einen brechenden Belag statt sauberer Rauten.",
 mistakesPl:
 "Zbyt gruby spód szybko przytłacza delikatny wierzch, a nałożenie go bez wcześniejszego podpieczenia spodu grozi rozmoknięciem całości. Łatwo pomylić go z wysoką [babką](/pl/rezepte/babka) lub [sernikiem](/pl/rezepte/sernik), choć to właśnie płaska forma jest jego znakiem rozpoznawczym. Krojenie na gorąco łamie wierzch zamiast dawać równe romby.",
 variantsDe:
 "Ein Kajmak-Belag statt Nüssen ist eine verbreitete Hausvariante, die sich ehrlich im Titel ankündigen lässt, ebenso eine Version nur mit Walnüssen oder mit getrockneten Aprikosen. Passende Nachbarn sind [Babka](/de/rezepte/babka), [Sernik](/de/rezepte/sernik), [Makowiec](/de/rezepte/makowiec) und [Piernik](/de/rezepte/piernik). Zum Anlass passt der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan), und Einkaufshilfen liefern der [Polenladen](/de/blog/polenladen-einkaufen) und die [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
 variantsPl:
 "Wierzch kajmakowy zamiast orzechów to popularny zwyczaj domowy, który warto uczciwie zapowiedzieć w tytule, podobnie jak wersja tylko z orzechami włoskimi lub z suszonymi morelami. Pasującymi sąsiadami są [babka](/pl/rezepte/babka), [sernik](/pl/rezepte/sernik), [makowiec](/pl/rezepte/makowiec) i [piernik](/pl/rezepte/piernik). Do okazji pasuje [menu wielkanocne](/pl/blog/menu-wielkanocne), a zakupy ułatwią [sklep polski](/pl/blog/sklep-polski-zakupy) i [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
 },

 "recipe-buraczki": {
 dishDe: "Buraczki",
 dishPl: "Buraczki",
 vibeDe:
 "erdig-süß und säuerlich-scharf, warm auf dem Teller, eine Beilage und keine Suppe",
 vibePl:
 "ziemisto-słodkie i kwaśno-ostre, ciepłe na talerzu, dodatek, a nie zupa",
 originDe:
 "Rote Bete ist in Polen seit dem 16. Jahrhundert dokumentiert, schon der Dichter und Gutsherr Mikołaj Rej beschrieb damals ein eingelegtes Rezept, das dem heutigen Ćwikła nahekommt. Als eigenständiges Wurzelgemüse gewann die Bete in der Renaissance an Bedeutung, als italienische Techniken der Gemüsezubereitung an polnischen Höfen Einzug hielten, und ihre Frostresistenz sowie einfache Lagerung in Erdmieten machten sie zu einem festen Winterlebensmittel. Die Technik des Zasmażanie, also das Anschwitzen mit einer Mehlschwitze aus Butter und Mehl, geht auf französische Kücheneinflüsse an adligen Höfen zurück, die sich in den Teilungszeiten mit ländlicher Tradition vermischten. Erst nach dem Zweiten Weltkrieg wurden Buraczki zum festen Pflichtbestandteil der PRL-Milchbars, dort untrennbar verbunden mit dem panierten Kotlet mielony und Kartoffelpüree. Das ist weder die Suppe aus jungen Beten [Botwinka](/de/rezepte/botwinka) noch die klare oder cremige Rote-Bete-Suppe [Barszcz czerwony](/de/rezepte/barszcz-czerwony) noch der kalte Mayo-Festsalat [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa), sondern eine warme Beilage, klassisch neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy).",
 originPl:
 "Burak ćwikłowy jest w Polsce udokumentowany już od XVI wieku, poeta i ziemianin Mikołaj Rej opisywał wtedy przepis na kiszone buraczki, bliski dzisiejszej ćwikle. Jako samodzielne warzywo korzeniowe burak zyskał na znaczeniu w okresie odrodzenia, gdy na polskie dwory trafiły włoskie techniki obróbki warzyw, a jego odporność na mróz i łatwość przechowywania w kopcach uczyniły go stałym elementem zimowej kuchni. Technika zasmażania, czyli podprażania na zasmażce z masła i mąki, wywodzi się z francuskich wpływów na szlacheckich dworach, które z czasem połączyły się z wiejską tradycją. Dopiero po drugiej wojnie światowej buraczki zasmażane stały się obowiązkowym daniem w barach mlecznych PRL-u, nierozerwalnie związanym z panierowanym kotletem mielonym i tłuczonymi ziemniakami. To ani zupa z młodych buraków [botwinka](/pl/rezepte/botwinka), ani [barszcz czerwony](/pl/rezepte/barszcz-czerwony), ani zimna majonezowa [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa), tylko ciepły dodatek, klasycznie obok [kotleta schabowego](/pl/rezepte/kotlet-schabowy).",
 shopDe:
 "Rote Bete roh oder vorgekocht, Zwiebel, ein saurer Apfel und Meerrettich aus dem Glas oder frisch geraspelt, oft günstig im [Polenladen](/de/blog/polenladen-einkaufen). Dazu Butter oder Öl, Salz, Pfeffer und eine Prise Zucker. Wie du Śmietana separat dazu servierst, zeigt der Guide zu [Śmietana und Schmand](/de/blog/smietana-schmand). Wer eigentlich eine Bete-Suppe sucht, findet die bei [Botwinka](/de/rezepte/botwinka) oder [Barszcz](/de/rezepte/barszcz-czerwony), das ist ein ganz anderer Charakter als diese Beilage.",
 shopPl:
 "Buraki surowe lub gotowane, cebula, kwaśne jabłko i chrzan ze słoika lub świeżo starty, często korzystnie w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Do tego masło lub olej, sól, pieprz i szczypta cukru. Jak podać śmietanę osobno, pokazuje przewodnik [śmietana czy schmand](/pl/blog/smietana-czy-schmand). Kto właściwie szuka zupy z buraków, znajdzie ją w [botwince](/pl/rezepte/botwinka) lub w [barszczu](/pl/rezepte/barszcz-czerwony), to zupełnie inny charakter niż ten dodatek.",
 techniqueDe:
 "Die Bete wird weich gekocht oder fertig vorgekocht verwendet, geschält und geraspelt, Handschuhe schützen dabei die Hände vor Verfärbung. Die Zwiebel zieht glasig an, die Bete zieht danach mit wenig Flüssigkeit warm, Apfel und Meerrettich kommen erst gegen Ende dazu, sonst verkocht ihre Schärfe. Zu viel Wasser macht daraus schnell eine kleine Suppe und rückt die Beilage optisch zu nah an Botwinka oder Barszcz heran. Am Ende braucht es eine ausgewogene Balance aus Säure, Salz und einer Prise Süße, serviert wird heiß, ohne die Beilage stundenlang offen warmzuhalten.",
 techniquePl:
 "Buraki gotuje się do miękkości albo używa gotowych, obiera i ściera, rękawiczki chronią ręce przed zabarwieniem. Cebula dusi się do szklistości, buraki duszą się potem z małą ilością płynu, jabłko i chrzan dodaje się dopiero pod koniec, inaczej ich ostrość się wygotuje. Za dużo wody zamienia danie w małą zupkę i wizualnie zbliża je do botwinki lub barszczu. Na końcu liczy się balans kwasu, soli i szczypty słodyczy, podaje się na gorąco, bez trzymania godzinami na cieple.",
 serveDe:
 "Heiß neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy), Kartoffeln oder Kasza, Śmietana separat in einem Schälchen dazu. Der Menüplatz steht im [polnischen Sonntagsessen](/de/blog/sonntagsessen-polnisch), Panier-Technik liefert der [Panieren-Guide](/de/blog/panieren-schabowy). An Ostern passt sie optional als Beilage im Rahmen des [Wielkanoc-Speiseplans](/de/blog/wielkanoc-speiseplan), gemischt werden sollte sie aber nicht mit der ganz anders aufgebauten [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa).",
 servePl:
 "Gorące obok [schabowego](/pl/rezepte/kotlet-schabowy), ziemniaków lub kaszy, śmietana osobno w miseczce. Miejsce w menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny), o panierce opowiada [poradnik panierowania](/pl/blog/panierowanie-kotlet). Na Wielkanoc pasują opcjonalnie jako dodatek w ramach [menu wielkanocnego](/pl/blog/menu-wielkanocne), nie warto ich jednak mieszać z zupełnie inaczej zbudowaną [sałatką jarzynową](/pl/rezepte/salatka-jarzynowa).",
 diasporaDe:
 "Vorgekochte Bete aus der Vakuumpackung spart nach der Schicht wertvolle Zeit, das lässt sich auch ganz ehrlich so sagen. Die Farbe färbt schnell ab, deshalb schützen ein separates Brett und notfalls Handschuhe die Küche. Kinder dürfen den Apfel raspeln, während die Schärfe des Meerrettichs bei den Erwachsenen dosiert wird. Reste halten sich gut im Kühlschrank und lassen sich am Folgetag kurz erhitzen, den Rahmen für den ganzen Sonntag liefert der Guide zum [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 diasporaPl:
 "Gotowane buraki z próżniowego opakowania oszczędzają czas po zmianie, i można to śmiało uczciwie przyznać. Kolor szybko się przenosi, dlatego osobna deska, a czasem i rękawiczki, chronią kuchnię. Dzieci mogą zetrzeć jabłko, ostrość chrzanu dawkują dorośli. Resztki dobrze trzymają się w lodówce i nadają się do krótkiego podgrzania następnego dnia, ramę na całą niedzielę daje przewodnik [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 mistakesDe:
 "Zu viel Flüssigkeit macht aus der Beilage schnell eine kleine Suppe, die optisch an [Botwinka](/de/rezepte/botwinka) oder [Barszcz](/de/rezepte/barszcz-czerwony) erinnert, ohne deren Charakter zu haben. Wer sie mit der kalten [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) verwechselt, erwartet fälschlich einen gemischten Salat statt einer warmen Beilage. Meerrettich von Anfang an mitzukochen verkocht seine Schärfe, und roher, ungegarter Verzehr bringt weder die richtige Textur noch den vollen Geschmack.",
 mistakesPl:
 "Za dużo płynu szybko zamienia dodatek w małą zupkę, przypominającą wyglądem [botwinkę](/pl/rezepte/botwinka) lub [barszcz](/pl/rezepte/barszcz-czerwony), bez ich charakteru. Mylenie z zimną [sałatką jarzynową](/pl/rezepte/salatka-jarzynowa) prowadzi do błędnego oczekiwania mieszanej sałatki zamiast ciepłego dodatku. Dodanie chrzanu od samego początku gotowania wygotowuje jego ostrość, a jedzenie na surowo, bez ugotowania, nie daje ani właściwej tekstury, ani pełnego smaku.",
 variantsDe:
 "Ohne Apfel nur mit Meerrettich schmeckt es schärfer, mit etwas Butter am Ende runder, milder abgeschmeckt eignet sich die Beilage auch für Kinder. Wer stattdessen einen kalten Relish aus Bete und Meerrettich sucht, findet den bei [Ćwikła](/de/rezepte/cwikla), das ist ein ganz anderer Charakter als diese warme Beilage. Passende Nachbarn sind [Schabowy](/de/rezepte/kotlet-schabowy), die Suppe [Botwinka](/de/rezepte/botwinka), [Barszcz](/de/rezepte/barszcz-czerwony) und [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa), dazu passende Guides sind das [Sonntagsessen](/de/blog/sonntagsessen-polnisch), das [Panieren](/de/blog/panieren-schabowy) und die [Śmietana](/de/blog/smietana-schmand).",
 variantsPl:
 "Bez jabłka, tylko z chrzanem, smakuje ostrzej, z odrobiną masła na końcu łagodniej, a delikatniej doprawiona nadaje się też dla dzieci. Kto szuka zimnego relishu z buraka i chrzanu, znajdzie go w [ćwikle](/pl/rezepte/cwikla), to zupełnie inny charakter niż ten ciepły dodatek. Pasującymi sąsiadami są [schabowy](/pl/rezepte/kotlet-schabowy), zupa [botwinka](/pl/rezepte/botwinka), [barszcz](/pl/rezepte/barszcz-czerwony) i [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa), a dobrymi przewodnikami [obiad niedzielny](/pl/blog/obiad-niedzielny), [panierowanie](/pl/blog/panierowanie-kotlet) i [śmietana](/pl/blog/smietana-czy-schmand).",
 },
};
