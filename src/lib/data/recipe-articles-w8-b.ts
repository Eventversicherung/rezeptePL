/**
 * Wave 8 Paket B — FACTS for Ogórkowa + Kapuśniak.
 * Isolated export `W8_FACTS_B` — Integrator merges into recipe-articles.ts FACTS map.
 * Shape matches ArticleFacts in recipe-articles.ts.
 */

type ArticleFacts = {
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

export const W8_FACTS_B: Record<string, ArticleFacts> = {
 "recipe-ogorkowa": {
 dishDe: "Zupa ogórkowa",
 dishPl: "Zupa ogórkowa",
 vibeDe: "säuerlich-frisch, cremig, alltagstauglich warm",
 vibePl: "kwaśno-świeża, kremowa, ciepła na co dzień",
 originDe:
 "Ogórkowa entstand vermutlich im 17. oder 18. Jahrhundert als kluge Lösung für ein ganz praktisches Problem: zu weich gewordene, fermentierte Gurken, die sich nicht mehr für den Salat eigneten, aber in einer warmen Brühe ihre volle Säure und Würze entfalteten. Bäuerliche Haushalte verwandelten so einfachen Kartoffel- und Gemüsefond in etwas Besonderes, das zusätzlich beim Verdauen half und im Winter wärmte. Im 19. Jahrhundert schaffte es die Suppe dann in erste polnische Kochbücher und auf herrschaftliche Tische, wo eine spätere Verfeinerung mit saurer Sahne aus dem Bauerngericht ein elegantes Gericht machte. Verwandt ist sie mit der russischen Rassolnik, und auch aschkenasische jüdische Gemeinden in Mitteleuropa trugen zur Verbreitung ähnlicher Suppen auf Basis von Salzgurken bei. Wer [Żurek](/de/rezepte/zurek) kennt, merkt den Unterschied sofort, denn dort trägt Roggen-Zakwas die Säure, während hier Kartoffeln und Dill neben der fermentierten Gurke stehen. Im Überblick ordnet der Guide [Polnische Suppen](/de/blog/polnische-suppen) sie neben Rosół, Barszcz und Kapuśniak ein, und mit dem kalten Sommergericht [Chłodnik](/de/rezepte/chlodnik-litewski) hat sie trotz ähnlicher Zutaten nichts zu tun.",
 originPl:
 "Ogórkowa powstała prawdopodobnie w XVII lub XVIII wieku jako sprytne rozwiązanie bardzo praktycznego problemu: zbyt zmiękłych, kiszonych ogórków, które nie nadawały się już do sałatki, ale w ciepłym wywarze ujawniały pełnię kwasu i aromatu. Wiejskie gospodarstwa domowe zamieniały w ten sposób prosty wywar ziemniaczano-warzywny w coś wyjątkowego, co dodatkowo wspomagało trawienie i grzało zimą. W XIX wieku zupa trafiła do pierwszych polskich książek kucharskich i na pańskie stoły, gdzie późniejsze dodanie kwaśnej śmietany zamieniło chłopskie danie w coś eleganckiego. Jest spokrewniona z rosyjskim rassolnikiem, a do rozpowszechnienia podobnych zup na bazie kiszonych ogórków przyczyniły się też społeczności aszkenazyjskie w Europie Środkowej. Kto zna [żurek](/pl/rezepte/zurek), czuje różnicę od razu, bo tam kwas niesie żytni zakwas, podczas gdy tutaj grają ziemniaki i koperek obok kiszonego ogórka. W przeglądzie ustawia ją przewodnik [polskie zupy](/pl/blog/polskie-zupy) obok rosołu, barszczu i kapuśniaka, a z letnim [chłodnikiem](/pl/rezepte/chlodnik-litewski) mimo podobnych składników nie ma nic wspólnego.",
 shopDe:
 "Ogórki kiszone und ihre Lake holst du zuverlässig im [Polenladen](/de/blog/polenladen-einkaufen), Salzgurken aus dem Supermarkt eignen sich nur, wenn sie wirklich fermentiert und nicht süß-sauer industriell hergestellt sind. Kartoffeln, Karotte, Dill und Schmand findest du problemlos im deutschen Supermarkt. Wer selbst fermentiert, folgt dem [Kiszenie-Guide](/de/blog/kiszenie-guide), denn Essiggurken ergeben ein spürbar anderes Gericht. Die Brühe darf ruhig Hausfond sein, Technik dazu liefert [Rosół-Technik](/de/blog/rosol-technik), ohne dass Ogórkowa eine klare Festtagsbrühe braucht. Śmietana solltest du vor dem Einrühren temperieren, damit sie nicht ausflockt.",
 shopPl:
 "Ogórki kiszone i zalewę najpewniej kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), supermarketowe nadają się tylko wtedy, gdy naprawdę są kiszone, a nie słodko-kwaśne octowe. Ziemniaki, marchew, koperek i śmietana są dostępne w każdym niemieckim markecie. Kto kisi sam, korzysta z [kiszenia w domu](/pl/blog/kiszenie-w-domu), bo ogórki z octu dają wyraźnie inne danie. Wywar może być domowy, wyczucie podpowiada [technika rosołu](/pl/blog/jak-ugotowac-rosol), choć ogórkowa nie wymaga klarownego wywaru świątecznego. Śmietanę warto ocieplić przed dodaniem, żeby się nie zwarzyła.",
 techniqueDe:
 "Zuerst das Gemüse in der Brühe weich garen, danach erst Gurken und Lake dazugeben, sonst zerfallen die Kartoffeln, bevor die nötige Säure überhaupt in der Suppe ist. Die Lake vorsichtig dosieren und lieber nachlegen als sofort zu viel zu verwenden, denn zu saure Suppe lässt sich schwer korrigieren. Śmietana erst nach dem Herunternehmen vom Herd unterziehen, damit sie nicht gerinnt. Die Suppe sollte sanft köcheln statt zu sprudeln, und der Dill kommt frisch erst zum Schluss dazu.",
 techniquePl:
 "Najpierw ugotuj warzywa w wywarze do miękkości, dopiero potem dodaj ogórki i zalewę, inaczej ziemniaki się rozpadną, zanim zupa zdąży nabrać kwasu. Zalewę dawkuj ostrożnie, lepiej dolać więcej niż od razu przesadzić, bo zbyt kwaśną zupę trudno później skorygować. Śmietanę wmieszaj dopiero po zdjęciu garnka z ognia, żeby się nie zwarzyła. Zupa powinna gotować się łagodnie, nie burzyć, a koperek dodawaj świeży dopiero na końcu.",
 serveDe:
 "Heiß als Hauptsuppe mit Brot serviert ist sie sättigend genug für einen ganz normalen Wochentag. Optional passen Speckwürfel oder ein gekochtes Ei dazu, der Kern bleibt aber Gurke und Dill. Neben [Kapuśniak](/de/rezepte/kapusniak) ist sie die zweite große Suppe aus Kiszone-Vorräten in dieser Reihe, während zu Festtagen eher [Barszcz](/de/rezepte/barszcz-czerwony) oder Żurek auf den Tisch kommen. Reste kühlst du am besten schnell und erwärmst sie am nächsten Tag vorsichtig, dabei die Śmietana erneut prüfen.",
 servePl:
 "Gorąca jako zupa główna z chlebem jest wystarczająco sycąca na zwykły dzień powszedni. Opcjonalnie pasuje boczek albo ugotowane jajko, ale rdzeń dania to zawsze ogórek i koperek. Obok [kapuśniaka](/pl/rezepte/kapusniak) to druga duża zupa z kiszonek w tej rodzinie, podczas gdy na święta częściej gości [barszcz](/pl/rezepte/barszcz-czerwony) albo żurek. Resztki najlepiej szybko schłodzić, a nazajutrz ogrzewać ostrożnie, sprawdzając ponownie konsystencję śmietany.",
 diasporaDe:
 "In deutschen Küchen rettet Ogórkowa oft das angebrochene Gurkenglas nach dem Grillabend, denn ein Topf reicht für zwei Mittagessen zwischen Schicht und Kita. Wer Fermentieren lernen möchte, verbindet Einkauf und Kochtopf über den [Kiszenie-Guide](/de/blog/kiszenie-guide) und findet im Suppen-Überblick weitere Ideen für die Woche.",
 diasporaPl:
 "W niemieckich kuchniach ogórkowa często ratuje niedojedzony słoik po grillu, bo jeden garnek starcza na dwa obiady między zmianą a przedszkolem. Kto chce nauczyć się kiszenia, łączy zakupy i garnek przez [kiszenie w domu](/pl/blog/kiszenie-w-domu) i znajduje w przeglądzie zup kolejne pomysły na tydzień.",
 mistakesDe:
 "Essiggurken statt richtig fermentierter Kiszone-Gurken verändern den Geschmack komplett. Zu früh und zu viel Lake macht die Suppe unkontrollierbar sauer, während kochende Śmietana sich leicht trennt. Die Suppe mit Żurek zu verwechseln und dann vergeblich nach Zakwas zu suchen, ist ein häufiges Missverständnis. Zu wenig Kartoffel lässt die Suppe zudem dünn und unangenehm sauer wirken.",
 mistakesPl:
 "Ogórki z octu zamiast prawdziwie kiszonych całkowicie zmieniają smak. Za wcześnie i za dużo zalewy sprawia, że zupa robi się niekontrolowanie kwaśna, a wrzątek niszczy strukturę śmietany. Mylenie tej zupy z żurkiem i szukanie w niej zakwasu to częste nieporozumienie. Za mało ziemniaka robi zupę rzadką i nieprzyjemnie ostro kwaśną.",
 variantsDe:
 "Mit geräuchertem Fleisch wird sie kräftiger, vegetarisch gelingt sie mit reinem Gemüsefond, und wer mag, püriert sie am Ende etwas dicker. Die Schwester-Säure aus Kohl liefert [Kapuśniak](/de/rezepte/kapusniak), und wer die ganze Suppenfamilie sortieren möchte, findet Orientierung bei [Polnische Suppen](/de/blog/polnische-suppen) und beim Einkauf im [Polenladen](/de/blog/polenladen-einkaufen). Eine kalte Alternative im Sommer bleibt der Chłodnik mit ganz anderem Charakter, und ein Frühlings-Gegenstück mit Rote-Bete-Blättern statt Gurkensäure findet sich bei [Botwinka](/de/rezepte/botwinka).",
 variantsPl:
 "Z wędzonką wychodzi mocniejsza, wegetariańska udaje się na czystym wywarze warzywnym, a kto lubi, może na końcu lekko ją zblendować dla gęstości. Siostrzany kwas z kapusty daje [kapuśniak](/pl/rezepte/kapusniak), a kto chce uporządkować całą rodzinę zup, znajdzie punkt odniesienia w [polskich zupach](/pl/blog/polskie-zupy) i przy zakupach w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Zimną alternatywą latem zostaje chłodnik o zupełnie innym charakterze, a wiosenny odpowiednik z botwiną zamiast kwasu ogórkowego znajdziesz przy [botwince](/pl/rezepte/botwinka).",
 },
 "recipe-kapusniak": {
 dishDe: "Kapuśniak",
 dishPl: "Kapuśniak",
 vibeDe: "säuerlich-rauchig, sättigend, winterfest",
 vibePl: "kwaśno-wędzony, sycący, zimowy",
 originDe:
 "Kapuśniak ist seit mindestens dem 15. oder 16. Jahrhundert in mehreren regionalen Varianten in Polen belegt, aus einer Zeit, in der Kohl über den Königshof von Władysław Jagiełło aus Italien nach Polen kam, sich aber erst unter der Wasa-Dynastie im ganzen Land durchsetzte. Fermentierter Kohl in Holzfässern war neben eingelegtem Hering damals das Rückgrat der Vorratshaltung, weil die Milchsäuregärung Vitamin C über Monate erhielt, wenn frisches Gemüse längst verbraucht war. Aus dieser Notwendigkeit wurde ein Alltagsgericht, das gleichzeitig festtagstauglich war: einfache Brühe für den Wochentag, kräftige Rippchen und viel Speck für Hochzeiten und Taufen. Charmant ist auch die sprachliche Nebenbedeutung, denn Kapuśniaczek bezeichnet im Polnischen bis heute den feinen Herbstregen, der einst genau zur Erntezeit des Kohls fiel. Regional trägt die Suppe eigene Namen: in den Bergen des Podhale heißt sie Kwaśnica und verzichtet auf Wurzelgemüse, in Pommern unterscheidet man Szarpak mit kiszonem Kraut von Parzybroda mit frischem Kohl. Bewusst getrennt bleibt sie von [Bigos](/de/rezepte/bigos), der als Schmorgericht ganz ohne Suppencharakter auskommt. Die Säure kommt hier von Kapusta kiszona, nicht von Zakwas wie bei [Żurek](/de/rezepte/zurek) und nicht von Roter Bete wie bei [Barszcz](/de/rezepte/barszcz-czerwony).",
 originPl:
 "Kapuśniak jest udokumentowany w kilku regionalnych odmianach co najmniej od XV lub XVI wieku, z czasów gdy kapusta trafiła do Polski za sprawą dworu Władysława Jagiełły z Italii, ale upowszechniła się w całym kraju dopiero za czasów Wazów. Kiszona kapusta w drewnianych beczkach była wtedy, obok śledzi w occie, podstawą przechowywania żywności, bo fermentacja mlekowa zachowywała witaminę C przez wiele miesięcy, gdy świeże warzywa dawno się skończyły. Z tej konieczności powstało danie zarazem codzienne i świąteczne: skromny wywar na co dzień, mocne żeberka i dużo boczku na wesela i chrzciny. Ciekawa jest też językowa uboczna historia, bo kapuśniaczek do dziś oznacza w polszczyźnie drobny jesienny deszcz, który padał właśnie w porze zbioru kapusty. Regionalnie zupa nosi własne nazwy: w górach Podhala to kwaśnica bez warzyw korzeniowych, na Pomorzu rozróżnia się szarpak z kapusty kiszonej od parzybrody z kapusty świeżej. Świadomie oddzielona zostaje od [bigosu](/pl/rezepte/bigos), który jako danie duszone obywa się bez charakteru zupy. Kwas pochodzi tu z kapusty kiszonej, nie z zakwasu jak w [żurku](/pl/rezepte/zurek) i nie z buraków jak w [barszczu](/pl/rezepte/barszcz-czerwony).",
 shopDe:
 "Gute Kapusta kiszona und geräucherte Wurst findest du im [Polenladen](/de/blog/polenladen-einkaufen), Qualität und passende Wurstsorte erklärt [Kiełbasa-Arten](/de/blog/kielbasa-arten). Majoran sollte frisch genug riechen, dazu mehr im Lexikon zu [Majeranek](/de/blog/majeranek). Wer selbst säuert, findet Details im [Kiszenie-Guide](/de/blog/kiszenie-guide). Kartoffeln und Zwiebel bekommst du im normalen Supermarkt, wichtig ist eine Brühe mit Körper und nicht nur Wasser mit Würfel.",
 shopPl:
 "Dobrą kapustę kiszoną i wędzoną kiełbasę kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), jakość i rodzaj opisują [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy). Majeranek powinien pachnieć świeżo, więcej w [leksykonie majeranku](/pl/blog/majeranek-leksykon). Kto kisi sam, znajdzie szczegóły w [kiszeniu w domu](/pl/blog/kiszenie-w-domu). Ziemniaki i cebulę kupisz w zwykłym supermarkecie, ważny jest wywar z ciałem, a nie sama woda z kostką.",
 techniqueDe:
 "Die Rauchware zuerst anbraten, damit sie Tiefe entwickelt, danach Brühe und Kartoffeln dazugeben. Das Kraut nicht zu lange nachkochen, wenn es bereits sehr weich ist, sonst zerfällt es komplett. Kraut vorher ausdrücken, damit die Suppe nicht wässrig-salzig kippt, und die Lake nur vorsichtig nachjustieren. Majoran erst gegen Ende dazugeben. Die Suppe sanft köcheln lassen, denn die Bigos-Logik mit stundenlangem Einkochen gehört hier nicht hin.",
 techniquePl:
 "Najpierw podsmaż wędzonkę, żeby dała głębię smaku, potem dodaj wywar i ziemniaki. Kapusty nie gotuj zbyt długo, jeśli jest już bardzo miękka, bo się rozpadnie. Kapustę wcześniej odciśnij, żeby zupa nie zrobiła się wodnisto-słona, a zalewę koryguj ostrożnie. Majeranek dodaj dopiero pod koniec. Gotuj łagodnie, bo logika bigosu z wielogodzinnym gęstnieniem tutaj nie pasuje.",
 serveDe:
 "Als Hauptsuppe mit kräftigem Brot, optional mit Schmand. Nach Kapuśniak passt eher ein leichter Nachtisch oder gar nichts Schweres mehr. Für Gurkensäure greift man zu [Ogórkowa](/de/rezepte/ogorkowa), für den Zakwas-Festtag zu [Żurek](/de/rezepte/zurek), und wer lieber schmoren statt löffeln möchte, kocht Bigos.",
 servePl:
 "Jako zupa główna z mocnym chlebem, opcjonalnie ze śmietaną. Po kapuśniaku pasuje raczej lekki deser albo nic ciężkiego. Kwas ogórkowy daje [ogórkowa](/pl/rezepte/ogorkowa), świąteczny zakwas [żurek](/pl/rezepte/zurek), a kto chce dusić zamiast jeść łyżką, gotuje bigos.",
 diasporaDe:
 "Kapuśniak ist freezer-freundlich, weil im Topf keine Milchprodukte stecken, also portionieren, beschriften, auftauen und frisch abschmecken. In Deutschland ist es oft das Gericht, das Nachbarn ohne weitere Erklärung einfach als Sauerkrautsuppe verstehen, ohne dass man den Unterschied zu Bigos ausführen muss. So wird aus dem Vorrat im Kiszenie-Glas ganz nebenbei ein Essen für die ganze Woche.",
 diasporaPl:
 "Kapuśniak lubi zamrażarkę, bo w garnku nie ma nabiału, więc wystarczy porcjować, opisywać, rozmrażać i doprawiać świeżo. W Niemczech to często danie, które sąsiedzi rozumieją po prostu jako zupę z kapusty, bez tłumaczenia różnicy wobec bigosu. Tak zapas z kiszenia zamienia się bez wysiłku w obiad na cały tydzień.",
 mistakesDe:
 "Zu nasses, nicht ausgedrücktes Kraut und danach zu starkes Überwürzen sind ein häufiges Muster. Kapuśniak wie Bigos stundenlang einzukochen, bis eine Art Paste entsteht, passt nicht zum Charakter der Suppe. Zu wenig Raucharoma zu Beginn führt oft dazu, dass später zu stark nachgewürzt wird. Zu starkes Kochen macht außerdem die Kartoffeln matschig und die Suppe insgesamt trüb und aggressiv sauer.",
 mistakesPl:
 "Za mokra, nieodciśnięta kapusta i późniejsza przesada z przyprawami to częsty błąd. Gotowanie kapuśniaku jak bigosu, aż zamieni się w pastę, nie pasuje do charakteru tej zupy. Za mało dymu na początku często prowadzi do przesadnego doprawiania później. Zbyt gwałtowne gotowanie rozgotowuje ziemniaki i robi zupę mętną oraz nieprzyjemnie ostro kwaśną.",
 variantsDe:
 "Mit Räucherrippchen wird die Suppe deftiger, vegetarisch gelingt sie mit geräuchertem Tofu, wenn man den fehlenden Rauchgeschmack ehrlich benennt, oder mit mehr Kartoffel als sättigender Winterteller. Die Bergversion Kwaśnica verzichtet komplett auf Wurzelgemüse, während Szarpak und Parzybroda in Pommern zwischen kiszonem und frischem Kohl unterscheiden. Übersicht und Einordnung liefert [Polnische Suppen](/de/blog/polnische-suppen), den Kraut-Kontext der [Kiszenie-Guide](/de/blog/kiszenie-guide) und die Wurstwahl [Kiełbasa-Arten](/de/blog/kielbasa-arten). Mit Bigos-Varianten sollte man das Gericht trotzdem nicht verwechseln.",
 variantsPl:
 "Z żeberkami wędzonymi zupa robi się bardziej sycąca, wegetariańsko można ją zrobić z wędzonym tofu, jeśli uczciwie zaznaczy się brak prawdziwego dymu, albo z większą ilością ziemniaka jako zimowy talerz. Górska kwaśnica całkiem rezygnuje z warzyw korzeniowych, a pomorski szarpak i parzybroda różnią się kapustą kiszoną i świeżą. Przegląd i uporządkowanie daje [polskie zupy](/pl/blog/polskie-zupy), kontekst kapusty [kiszenie w domu](/pl/blog/kiszenie-w-domu), a wybór kiełbasy [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy). Mimo to nie warto mylić tego dania z wariantami bigosu.",
 },
};
