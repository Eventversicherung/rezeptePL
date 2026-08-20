import type { Locale } from "@/types/content";
import { W8_FACTS_A } from "./recipe-articles-w8-a";
import { W8_FACTS_B } from "./recipe-articles-w8-b";
import { W8_FACTS_C } from "./recipe-articles-w8-c";
import { W8_FACTS_D } from "./recipe-articles-w8-d";
import { W8_FACTS_D_RETROFIT } from "./recipe-articles-w8-d-retrofit";
import { W9_FACTS_A } from "./recipe-articles-w9-a";
import { W9_FACTS_B } from "./recipe-articles-w9-b";
import { W9_FACTS_C } from "./recipe-articles-w9-c";
import { W9_FACTS_D } from "./recipe-articles-w9-d";
import { W9_FACTS_W8_RETROFIT } from "./recipe-articles-w9-d-retrofit";
import { W10_FACTS_A } from "./recipe-articles-w10-a";
import { W10_FACTS_B } from "./recipe-articles-w10-b";
import { W10_FACTS_C } from "./recipe-articles-w10-c";
import { W10_FACTS_D } from "./recipe-articles-w10-d";
import { W10_FACTS_W9_RETROFIT } from "./recipe-articles-w10-d-retrofit";
import { W11_FACTS_D } from "./recipe-articles-w11-d";
import { W12_FACTS_A } from "./recipe-articles-w12-a";
import { W12_FACTS_B } from "./recipe-articles-w12-b";
import { W12_FACTS_C } from "./recipe-articles-w12-c";
import { W12_FACTS_D } from "./recipe-articles-w12-d";
import { W13_FACTS_A } from "./recipe-articles-w13-a";
import { W13_FACTS_B } from "./recipe-articles-w13-b";
import { W13_FACTS_C } from "./recipe-articles-w13-c";
import { W13_FACTS_D } from "./recipe-articles-w13-d";
import { W14_FACTS_A } from "./recipe-articles-w14-a";
import { W14_FACTS_B } from "./recipe-articles-w14-b";
import { W14_FACTS_C } from "./recipe-articles-w14-c";
import { W14_FACTS_D } from "./recipe-articles-w14-d";
import { W15_FACTS_A } from "./recipe-articles-w15-a";
import { W15_FACTS_B } from "./recipe-articles-w15-b";
import { W15_FACTS_C } from "./recipe-articles-w15-c";
import { W15_FACTS_D } from "./recipe-articles-w15-d";
import { W16_FACTS_A } from "./recipe-articles-w16-a";
import { W16_FACTS_B } from "./recipe-articles-w16-b";
import { W16_FACTS_C } from "./recipe-articles-w16-c";
import { W16_FACTS_D } from "./recipe-articles-w16-d";
import { W17_FACTS } from "./recipe-articles-w17";
import { W17_MALOSOLNE_FACTS } from "./recipe-articles-w17-malosolne";

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

const FACTS: Record<string, ArticleFacts> = {
 "recipe-pierogi": {
 dishDe: "Pierogi Ruskie",
 dishPl: "Pierogi ruskie",
 vibeDe: "weich, würzig, zum Teilen am Sonntagstisch",
 vibePl: "miękkie, sycące, idealne na niedzielny stół",
 originDe:
 "Der Legende nach brachte der Dominikanermönch Hyazinth von Polen, der 1257 in Krakau starb, die ersten Teigtaschen aus einer Mission in Kiew nach Polen und soll damit während der Hungersnot nach dem Tatareneinfall von 1241 die Bevölkerung gespeist haben. Wie Pierogi wirklich entstanden sind, lässt sich heute nicht mehr sicher klären, manche Küchenhistoriker vermuten sogar eine Wanderung über die Seidenstraße bis nach China, doch das erste gedruckte Kochbuch Polens, das Compendium Ferculorum von 1682, zeigt zumindest, dass sie damals längst zur festen Küche gehörten. Lange galten sie als Essen der Bauern, bis sie mit der Zeit auch auf den Tisch des Adels kamen, und jede Region entwickelte eine eigene Füllung: Im Osten Polens sind die Buchweizen-Kartoffel-Pierogi aus Biłgoraj bekannt, zur Hochzeit gab es die gebackene, mit Huhn gefüllte Kurniki, und ausgerechnet die heute typischste Füllung aus Kartoffel und Twaróg trägt mit „ruskie“ einen Namen, der auf die historische Region Galizien im heutigen Westen der Ukraine verweist. Die Füllung selbst bleibt bis heute eine Frage der Präzision, zu nass wird sie matschig, zu trocken bricht der Teig.",
 originPl:
 "Według legendy dominikański mnich święty Jacek Odrowąż, który zmarł w Krakowie w 1257 roku, przywiózł pierwsze pierogi z misji w Kijowie i miał nimi żywić ludzi podczas głodu po najeździe tatarskim w 1241 roku. Jak pierogi naprawdę powstały, trudno dziś jednoznacznie ustalić, niektórzy historycy kuchni wskazują nawet na wędrówkę przez Szlak Jedwabny aż z Chin, ale pierwsza drukowana polska książka kucharska, Compendium Ferculorum z 1682 roku, dowodzi, że już wtedy były trwałym elementem kuchni. Długo uważano je za jedzenie chłopskie, aż z czasem trafiły też na stoły szlachty, a każdy region wypracował własny farsz: na wschodzie Polski znane są gryczano-ziemniaczane pierogi biłgorajskie, na wesela lepiono pieczone kurniki z farszem z kurczaka, a sama nazwa „ruskie” przy najbardziej znanym dziś farszu z ziemniaka i twarogu odnosi się do historycznej Galicji, dziś części zachodniej Ukrainy. Sam farsz do dziś wymaga precyzji, zbyt mokry robi się kleisty, zbyt suchy rozrywa ciasto.",
 shopDe:
 "In Deutschland findest du Twaróg im Polenladen, als Alternative eignet sich gut abgetropfter Magerquark. Mehl Typ 405 oder 550 funktioniert gut für den Teig. Technik und Form für den Grundteig vertieft der Pierogi-Guide und der Teig-Guide, hier auf dieser Seite geht es um die Ruskie-Füllung selbst.",
 shopPl:
 "W Niemczech twaróg kupisz w polskim sklepie, zamiennikiem może być dobrze odsączony Quark. Mąka typ 405 lub 550 działa dobrze do ciasta. Technikę i lepienie opisują Pierogi-Guide i przewodnik po cieście, tutaj zostaje sam farsz ruskie.",
 techniqueDe:
 "Der Teig braucht Ruhe, die Ränder müssen fest verschlossen sein, und das Salzwasser darf nur leicht köcheln. Wenn Pierogi aufsteigen, sind sie meist gar. Butter und goldene Zwiebel sind kein Extra, sondern Teil des Gerichts.",
 techniquePl:
 "Ciasto potrzebuje odpoczynku, brzegi muszą być szczelnie zlepione, a woda tylko lekko wrzeć. Gdy pierogi wypłyną, zwykle są gotowe. Masło i złota cebula to nie dodatek, tylko część dania, bo bez nich farsz smakuje płasko, nawet jeśli sam jest dobrze doprawiony.",
 serveDe:
 "Serviere die Pierogi heiß, mit Sauerrahm oder ohne. Reste brät man am nächsten Tag in der Pfanne, viele finden sie dann sogar noch besser, weil die Naht beim Anbraten schön knusprig wird.",
 servePl:
 "Podawaj pierogi gorące, ze śmietaną lub bez. Resztki smaży się następnego dnia na patelni, wielu uważa, że wtedy smakują jeszcze lepiej, bo szew robi się chrupiący.",
 diasporaDe:
 "Für Polen in Deutschland ist Pierogi-Tag oft Ritual: Teig am Vormittag, Füllen am Nachmittag, gemeinsames Essen am Abend. Mit Kindern gehen die Mengen schnell nach oben, deshalb lohnt es sich, von Anfang an großzügig zu planen.",
 diasporaPl:
 "Dla Polaków w Niemczech dzień na pierogi bywa rytuałem: ciasto rano, lepienie po południu, wspólne jedzenie wieczorem. Z dziećmi ilości rosną szybko, warto więc od razu planować z zapasem. Nadwyżkę zawsze można zamrozić na później, więc jeden dłuższy dzień lepienia zamienia się w kilka szybkich obiadów w tygodniu.",
 mistakesDe:
 "Die klassischen Fehler sind zu wenig Mehl im Teig, eine nasse Füllung und zu wildes Kochen. Teste lieber eine kleine Charge, bevor du fünfzig Stück formst, so korrigierst du Naht und Konsistenz frühzeitig.",
 mistakesPl:
 "Klasyczne błędy to za mało mąki w cieście, mokry farsz i zbyt gwałtowne gotowanie. Lepiej przetestować małą partię, zanim ulepisz pięćdziesiąt sztuk, dzięki temu wcześnie poprawisz szew i konsystencję, zamiast psuć cały garnek na raz. Warto też pamiętać, że zbyt cienko rozwałkowane ciasto łatwo pęka podczas gotowania, więc lepiej zostawić mu odpowiednią grubość.",
 variantsDe:
 "Du kannst Speck in die Füllung geben, Sauerrahm dazu reichen oder Reste am nächsten Tag in der Pfanne braten. Oben wechselst du zu [Fleisch](/de/rezepte/pierogi/fleisch), [Kraut & Pilze](/de/rezepte/pierogi/kraut-pilze) oder süßen [Heidelbeeren](/de/rezepte/pierogi/jagody). Teig und Naht vertieft der [Pierogi-Guide](/de/blog/pierogi-guide); runde Obst-Knödel sind etwas anderes: [Knedle śliwki](/de/rezepte/knedle-sliwki).",
 variantsPl:
 "Możesz dodać boczek do farszu, podać ze śmietaną albo podsmażyć resztki następnego dnia. U góry przełączysz na [mięso](/pl/rezepte/pierogi/mieso), [kapustę z grzybami](/pl/rezepte/pierogi/kapusta-grzyby) albo słodkie [jagody](/pl/rezepte/pierogi/jagody). Ciasto i szew pogłębia [przewodnik pierogi](/pl/blog/przewodnik-pierogi); okrągłe knedle owocowe to osobna sprawa: [knedle ze śliwkami](/pl/rezepte/knedle-sliwki).",
 },
 "recipe-bigos": {
 dishDe: "Bigos",
 dishPl: "Bigos",
 vibeDe: "tief, rauchig, besser am zweiten Tag",
 vibePl: "głęboki, wędzony, lepszy na drugi dzień",
 originDe:
 "Bigos gilt als polnisches Nationalgericht, wobei diese Rolle bis heute diskutiert wird, denn Wort und Grundidee stammen ursprünglich aus dem Deutschen, wie Sprachforscher aus dem mittelhochdeutschen bîgossen (etwa: aufgegossen, verrührt) rekonstruieren. In Polen wurde daraus im 16. Jahrhundert etwas Eigenes: Das erste gedruckte Kochbuch, das Compendium Ferculorum von 1682, listet noch fleischreiche, säuerlich mit Zitrone oder Essig abgeschmeckte Bigos-Rezepte ganz ohne Kraut, etwa mit Karpfen oder Kapaun. Erst im 18. Jahrhundert begann der Adel, das teure Fleisch mit günstigem Sauerkraut zu strecken, und im 19. Jahrhundert war Kraut bereits selbstverständlicher Bestandteil. Genau in dieser Zeit verewigte Adam Mickiewicz das Gericht 1834 in seinem Nationalepos Pan Tadeusz mit einer berühmten Strophe über Jäger, die nach der Jagd um einen dampfenden Kessel Bigos sitzen, dessen Duft und Farbe er in Versen kaum in Worte fassen kann. Diese literarische Szene machte Bigos endgültig zum Sinnbild der polnischen Küche, obwohl es bis heute kein festes Rezept, sondern eher eine Methode aus Kraut, Fleisch, manchmal Wild, getrockneten Pilzen und viel Zeit ist.",
 originPl:
 "Bigos uchodzi za polskie danie narodowe, choć ta rola do dziś bywa przedmiotem dyskusji, bo samo słowo i podstawowa idea pochodzą z niemieckiego, od średnio-wysoko-niemieckiego bîgossen, czyli w przybliżeniu polanego, wymieszanego. W Polsce już w XVI wieku danie zaczęło żyć własnym życiem: pierwsza drukowana polska książka kucharska, Compendium Ferculorum z 1682 roku, opisuje jeszcze mięsne, kwaszone cytryną lub octem bigosy zupełnie bez kapusty, na przykład z karpiem albo kapłonem. Dopiero w XVIII wieku szlachta zaczęła rozciągać drogie mięso tańszą kapustą kiszoną, a w XIX wieku kapusta była już naturalnym składnikiem. Właśnie w tym czasie Adam Mickiewicz unieśmiertelnił danie w 1834 roku w narodowej epopei Pan Tadeusz, słynną strofą o myśliwych, którzy po polowaniu siedzą wokół dymiącego kotła bigosu, którego smaku, koloru i woni prawie nie da się opisać słowami. Ta literacka scena ostatecznie zrobiła z bigosu symbol polskiej kuchni, choć do dziś nie ma jednego przepisu, tylko raczej metodę z kapusty, mięsa, czasem dziczyzny, suszonych grzybów i dużo czasu.",
 shopDe:
 "Sauerkraut und getrocknete Pilze holst du am zuverlässigsten im [Polenladen](/de/blog/polenladen-einkaufen). Fleisch darf gemischt sein: Schwein, Wurstreste, Speck. Lorbeer und Piment sind Pflicht. Für Topf und Schmorzeit helfen der [Bigos-Guide](/de/blog/bigos-guide) und die [Dutch-Oven-Kaufberatung](/de/blog/dutch-oven-kaufberatung).",
 shopPl:
 "Kapustę kiszoną i suszone grzyby najpewniej kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Mięso może być mieszane: wieprzowina, resztki kiełbasy, boczek. Liść laurowy i ziele angielskie są obowiązkowe. Przy garnku i czasie pomagają [przewodnik po bigosie](/pl/blog/bigos-przewodnik) oraz [garnek do duszenia](/pl/blog/garnek-do-duszenia).",
 techniqueDe:
 "Bigos will niedrige Hitze und Geduld. Brate das Fleisch zuerst an, damit Röstaromen entstehen, und schmore danach lange unter dem Deckel. Über Nacht im Kühlschrank verdichten sich die Aromen, deshalb lohnt es sich, ihn bewusst einen Tag vorher zu kochen.",
 techniquePl:
 "Bigos lubi niską temperaturę i cierpliwość. Najpierw podsmaż mięso dla aromatu, potem długo duś pod przykryciem. Noc w lodówce zagęszcza smak, dlatego warto ugotować go świadomie dzień wcześniej.",
 serveDe:
 "Serviere Bigos mit kräftigem Brot, manchmal mit Kartoffeln. Er eignet sich gleichermaßen als Reiseessen, Partytopf und Wintergericht, und schmeckt am zweiten Tag oft noch runder als frisch vom Herd.",
 servePl:
 "Podawaj bigos z mocnym chlebem, czasem z ziemniakami. Sprawdza się jako jedzenie w podróż, na imprezę i na zimę jednocześnie, a na drugi dzień smakuje często jeszcze pełniej niż prosto z garnka.",
 diasporaDe:
 "In deutschen Wohnungen riecht Bigos oft nach Wochenende: ein großer Topf reicht für Gäste, und abgekühlte Portionen lassen sich gut einfrieren. Wer unter der Woche wenig Zeit hat, kocht ihn bewusst am Vortag und wärmt nur noch auf.",
 diasporaPl:
 "W niemieckich mieszkaniach bigos często pachnie weekendem: duży garnek wystarczy dla gości, a wystudzone porcje dobrze się mrożą. Przy pełnym tygodniu warto ugotować go dzień wcześniej i tylko odgrzać.",
 mistakesDe:
 "Häufig scheitert Bigos an zu wenig Zeit, zu dünner Flüssigkeit oder unklarer Säure. Er soll löffelfest sein, nicht wie Suppe. Wird er zu sauer, spüle das Kraut kurz oder mische frischen Kohl dazu, Zucker bleibt nur die letzte Notbremse. Ein weiterer typischer Fehler ist zu viel Flüssigkeit am Anfang, die das Kraut nie richtig einkochen lässt und den Topf wässrig statt sämig hält.",
 mistakesPl:
 "Często bigos nie wychodzi przez za mało czasu, zbyt rzadki sos albo niejasny kwas. Ma być gęsty, nie jak zupa. Gdy jest zbyt kwaśny, krótko spłucz kapustę albo dodaj świeżej, cukier zostaje tylko ostatnią deską ratunku. Kolejnym częstym błędem jest zbyt dużo płynu na starcie, przez co kapusta nigdy się dobrze nie odparuje, a garnek zostaje wodnisty, zamiast gęsty i zwarty. Zbyt mało czasu na duszenie to najczęstsza przyczyna płaskiego smaku.",
 variantsDe:
 "Du kannst Äpfel, einen Schuss Rotwein, mehr Wurst oder eher vegetarisch Extra-Pilze wählen. Der [Bigos-Guide](/de/blog/bigos-guide) und die [Dutch-Oven-Kaufberatung](/de/blog/dutch-oven-kaufberatung) helfen bei Topf und Schmorzeit. Die Grundidee bleibt: Kraut, Umami und Zeit.",
 variantsPl:
 "Możesz dodać jabłka, łyk czerwonego wina, więcej kiełbasy albo iść bardziej wegetariańsko z dodatkiem grzybów. [Przewodnik po bigosie](/pl/blog/bigos-przewodnik) i [garnek do duszenia](/pl/blog/garnek-do-duszenia) pomagają z czasem. Idea zostaje: kapusta, umami i czas.",
 },
 "recipe-zurek": {
 dishDe: "Żurek",
 dishPl: "Żurek",
 vibeDe: "kräftig-säuerlich, wärmend, zwischen Fastenspeise und Festessen",
 vibePl: "mocno kwaśny, rozgrzewający, między postem a świętem",
 originDe:
 "Żurek gehört zu den ältesten belegten Suppen der polnischen Küche, erste Hinweise auf ein saures Gericht namens żur reichen bis ins 13. Jahrhundert zurück, und der Name selbst leitet sich vom mittelhochdeutschen Wort für sauer ab, seit dem 15. Jahrhundert ist er in polnischen Texten nachweisbar. Ursprünglich war Żurek vor allem Fastenspeise, denn während der vierzig Tage vor Ostern durfte in katholischen Haushalten kein Fleisch auf den Tisch, und die einfache Suppe aus fermentiertem Roggenmehl, Wasser und etwas Majoran war eine der wenigen sättigenden, warmen Mahlzeiten, die erlaubt waren. Genau aus dieser Fastentradition entstand die enge Verbindung zu Ostern, denn am Ende der Fastenzeit durfte die Suppe endlich wieder mit weißer Wurst, hartgekochtem Ei und Meerrettich ergänzt werden, drei Zutaten, die für Leben, Kraft und Wiedergeburt stehen sollen. Regional unterscheidet sich Żurek deutlich, in Schlesien wird er klassisch über Kartoffelbrei gegossen, in der Region Podlasie kommt traditionell ein ganzes hartgekochtes Ei in die Suppe, und in Krakau ist die reichere Variante Żurek galicyjski bekannt. Anders als der klare Rote-Bete-Eintopf [Barszcz](/de/rezepte/barszcz) bezieht Żurek seine Säure nicht aus Essig oder Zitrone, sondern ausschließlich aus dem eigenen, mehrtägig angesetzten Sauerteig, und anders als die goldene Hühnerbrühe [Rosół](/de/rezepte/rosol) ist er von Anfang an ein dichtes, sämiges Gericht und keine klare Vorsuppe.",
 originPl:
 "Żurek to jedna z najstarzej udokumentowanych zup polskiej kuchni, pierwsze wzmianki o kwaśnej potrawie zwanej żur sięgają XIII wieku, a samo słowo pochodzi od średnio-wysoko-niemieckiego określenia oznaczającego kwaśny i jest poświadczone w polskich tekstach od XV wieku. Pierwotnie żurek był przede wszystkim potrawą postną, bo przez czterdzieści dni przed Wielkanocą w katolickich domach nie jadano mięsa, a prosta zupa z fermentowanej mąki żytniej, wody i odrobiny majeranku była jednym z niewielu sycących, ciepłych dań, które można było zjeść w tym czasie. Właśnie z tej postnej tradycji wyrosło silne powiązanie z Wielkanocą, bo dopiero po zakończeniu postu do zupy wracały biała kiełbasa, jajko na twardo i chrzan, trzy składniki symbolizujące życie, siłę i odrodzenie. Regionalnie żurek wygląda bardzo różnie, na Śląsku klasycznie leje się go na tłuczone ziemniaki, na Podlasiu tradycyjnie dodaje się całe jajko na twardo, a w Krakowie znany jest bogatszy żurek galicyjski. W odróżnieniu od klarownego, buraczanego [barszczu](/pl/rezepte/barszcz) żurek zawdzięcza kwasowość nie octowi czy cytrynie, tylko własnemu, kiszonemu przez kilka dni zakwasowi, a w odróżnieniu od złotego [rosołu](/pl/rezepte/rosol) od początku jest gęstą, sycącą zupą, a nie klarowną przystawką.",
 shopDe:
 "Fertigen Żur-Ansatz bekommst du in Flaschen im [Polenladen](/de/blog/polenladen-einkaufen), wer lieber selbst ansetzt, folgt am besten dem [Zakwas-Guide](/de/blog/zakwas-zurek) und plant dafür ein paar Tage Vorlauf ein. Weiße Wurst findest du im selben Laden, Mengen und Garzeiten für die Wurst allein beschreibt das eigene Rezept zu [Biała kiełbasa](/de/rezepte/biala-kielbasa). Guter, frischer Majoran macht einen überraschend großen Unterschied, denn er ist genau das Aroma, das die Suppe sofort nach Żurek schmecken lässt, statt nur nach saurer Brühe.",
 shopPl:
 "Gotowy zakwas na żur kupisz w butelkach w [sklepie polskim](/pl/blog/sklep-polski-zakupy), a kto chce zrobić własny, znajdzie drogę w [przewodniku po zakwasie](/pl/blog/zakwas-na-zurek) i powinien zaplanować na to kilka dni wcześniej. Białą kiełbasę kupisz w tym samym sklepie, ilości i czas gotowania samej kiełbasy opisuje przepis na [białą kiełbasę](/pl/rezepte/biala-kielbasa). Świeży, dobry majeranek robi tu zaskakująco dużą różnicę, bo to właśnie ten aromat od razu czyni zupę żurkiem, a nie tylko kwaśnym bulionem.",
 techniqueDe:
 "Koch den Żurek nicht zu stark, denn zu heftiges Kochen macht die Suppe trüb und die Wurst zäh, ein leichtes Köcheln reicht völlig aus. Gare die Kartoffeln direkt in der Suppe mit, bis sie weich sind, und gib das Ei entweder ganz zum Schluss dazu oder lege es separat auf den Teller. Schmecke die Suppe erst am Ende mit Knoblauch und Majoran ab, weil sich die Säure des Ansatzes während des Kochens noch verändert und du sonst leicht nachjustieren musst. Die Wurst als Einlage behandelst du am besten schonend, Details dazu liefert das Rezept zu [Biała kiełbasa](/de/rezepte/biala-kielbasa).",
 techniquePl:
 "Nie gotuj żurku zbyt gwałtownie, bo zupa zmętnieje, a kiełbasa stwardnieje, lekkie pyrkanie wystarczy w pełni. Ziemniaki gotuj bezpośrednio w zupie, aż będą miękkie, a jajko dodaj na końcu albo podaj osobno na talerzu. Doprawiaj czosnkiem i majerankiem dopiero na końcu, bo kwasowość zakwasu zmienia się podczas gotowania i inaczej łatwo przesadzisz z korektą. Kiełbasę jako dodatek traktuj delikatnie, szczegóły opisuje przepis na [białą kiełbasę](/pl/rezepte/biala-kielbasa).",
 serveDe:
 "Im Teller gehören Wurstscheiben, ein halbiertes Ei und ein Stück kräftiges Brot dazu, manche Familien reichen zusätzlich einen Löffel Sauerrahm, das bleibt aber Geschmackssache im Haus. Zur Osterzeit servierst du ihn klassisch mit Meerrettich daneben, denn genau diese Kombination markiert traditionell das Ende der Fastenzeit.",
 servePl:
 "Na talerzu pasują plastry kiełbasy, przekrojone na pół jajko i kawałek mocnego chleba, niektóre rodziny dodają jeszcze łyżkę śmietany, ale to kwestia domu, nie reguły. Na Wielkanoc podaje się go klasycznie z chrzanem z boku, bo właśnie to zestawienie tradycyjnie oznacza koniec postu.",
 diasporaDe:
 "Für Feiertage in Deutschland rettet der Flaschen-Żur den Zeitplan, wenn Gäste kommen und der Kühlschrank ohnehin voll ist. Wer selbst ansetzt, braucht ein paar Tage Vorlauf, aber der reinere, rundere Geschmack lohnt sich, sobald einmal der Rhythmus zwischen Ansetzen und Kochen sitzt. Viele Familien kochen an Ostern bewusst eine große Menge, weil Żurek am nächsten Tag noch einmal aufgewärmt oft noch runder schmeckt.",
 diasporaPl:
 "Na święta w Niemczech butelkowy zakwas ratuje harmonogram, gdy przychodzą goście, a lodówka jest już pełna innych rzeczy. Kto robi zakwas sam, potrzebuje kilku dni wyprzedzenia, ale czystszy, pełniejszy smak wynagradza ten czas, gdy raz się złapie rytm między kiszeniem a gotowaniem. Wiele rodzin na Wielkanoc gotuje od razu większą porcję, bo odgrzany następnego dnia żurek smakuje często jeszcze pełniej.",
 mistakesDe:
 "Zu viel Wasser verdünnt die Suppe und macht sie flach, zu wenig Majoran lässt sie eher sauer als würzig schmecken, und ein zu spät oder zu grob eingerührter Żur-Ansatz schmeckt schnell roh-sauer statt rund. Wichtiger als die Menge der Einlage ist am Ende die Balance zwischen Säure und guter Brühe, die die Suppe trägt.",
 mistakesPl:
 "Za dużo wody rozcieńcza zupę i spłaszcza smak, za mało majeranku sprawia, że żurek jest bardziej kwaśny niż aromatyczny, a zbyt późno albo niedokładnie wmieszany zakwas smakuje surowo i kwaśno, zamiast harmonijnie. Ważniejsza niż ilość dodatków jest na końcu równowaga między kwasem i dobrym bulionem, na którym zupa stoi.",
 variantsDe:
 "Du kannst geräucherte Wurst statt weißer Wurst nehmen, das Ei ganz weglassen oder die Suppe zur Festtagsversion klarer halten, indem du weniger Kartoffeln mitkochst. Schlesische Haushalte gießen den Żurek traditionell über Kartoffelbrei statt über Kartoffelwürfel, der [Zakwas-Guide](/de/blog/zakwas-zurek) hilft beim eigenen Ansatz und der [Polenladen](/de/blog/polenladen-einkaufen) bei Wurst und fertigem Ansatz. Verwechsle Żurek nicht mit der klaren Rote-Bete-Suppe [Barszcz](/de/rezepte/barszcz) oder mit der goldenen Brühe [Rosół](/de/rezepte/rosol), beide werden völlig anders angesetzt.",
 variantsPl:
 "Możesz wziąć wędzoną kiełbasę zamiast białej, pominąć jajko albo zrobić świąteczną wersję jaśniejszą, dodając mniej ziemniaków. Domy śląskie tradycyjnie leją żurek na tłuczone ziemniaki, a nie na kostkę, [przewodnik po zakwasie](/pl/blog/zakwas-na-zurek) pomaga przy własnym zakwasie, a [sklep polski](/pl/blog/sklep-polski-zakupy) przy kiełbasie i gotowym zakwasie. Nie myl żurku z klarownym [barszczem](/pl/rezepte/barszcz) buraczanym ani ze złotym [rosołem](/pl/rezepte/rosol), oba mają zupełnie inną bazę.",
 },
 "recipe-oscypek": {
 dishDe: "gegrillter Oscypek mit Preiselbeeren",
 dishPl: "oscypek z żurawiną",
 vibeDe: "rauchig, salzig-süß, schnell und ehrlich",
 vibePl: "wędzony, słono-słodki, szybki i szczery",
 originDe:
 "Oscypek stammt aus dem Podhale und den Tatra-Bergen und wird seit über 500 Jahren von Hand hergestellt, ursprünglich von wallachischen Hirten, die mit ihren Schafherden aus den Karpaten in die Region einwanderten. Seit 2008 trägt der Käse in der EU eine geschützte Ursprungsbezeichnung, die genaue Vorgaben macht: Die Milch muss zu mindestens 60 Prozent von Schafen der Rasse Polska Owca Górska stammen, darf nur zwischen Ende April und Anfang Oktober während der Hirtensaison verarbeitet werden, und der fertige Käse muss zwischen 600 und 800 Gramm wiegen und die typische Spindelform mit den kunstvoll eingedrückten Mustern zeigen. Ein erfahrener Baca presst den geronnenen Bruch von Hand in Holzformen, legt ihn ein bis zwei Tage in Salzlake und hängt ihn danach bis zu zwei Wochen in einer Räucherhütte über Nadelholzrauch auf, bis die Rinde ihre charakteristische goldbraune Farbe bekommt. Innen bleibt der Käse fest, außen leicht glänzend, und im Geschmack rauchig-salzig mit einer feinen Süße, die mit Preiselbeeren einen Kontrast ergibt, den man aus den Berghütten der Region kennt.",
 originPl:
 "Oscypek pochodzi z Podhala i Tatr i jest ręcznie wytwarzany od ponad 500 lat, pierwotnie przez wołoskich pasterzy, którzy wraz ze stadami owiec migrowali z Karpat na te tereny. Od 2008 roku ser ma w Unii Europejskiej chronioną nazwę pochodzenia, która precyzyjnie określa zasady produkcji: mleko musi pochodzić w co najmniej 60 procentach od owiec rasy polska owca górska, przetwarzać je można tylko od końca kwietnia do początku października w sezonie pasterskim, a gotowy ser musi mieć od 600 do 800 gramów i charakterystyczny wrzecionowaty kształt z ozdobnie wytłoczonym wzorem. Doświadczony baca ręcznie formuje ścięte mleko w drewnianych foremkach, wkłada je na dobę lub dwie do solanki, a potem wędzi nawet do dwóch tygodni w dymie z drewna iglastego, aż skórka nabierze charakterystycznego złotobrązowego koloru. W środku ser zostaje zwarty, na zewnątrz lekko błyszczący, a w smaku dymno-słony z delikatną słodyczą, która z żurawiną daje kontrast znany z góralskich szałasów.",
 shopDe:
 "Echten Oscypek gibt es im guten [Polenladen](/de/blog/polenladen-einkaufen) oder saisonal auf Märkten, der [Oscypek-Guide](/de/blog/oscypek-deutschland) erklärt die geschützte Ursprungsbezeichnung und erkennbare Nachahmungen. Alternativen sind geräucherter Halloumi oder Bundz. Preiselbeeren als Kompott findest du leicht im deutschen Supermarkt.",
 shopPl:
 "Prawdziwy oscypek kupisz w dobrym [sklepie polskim](/pl/blog/sklep-polski-zakupy) lub sezonowo na targu, [przewodnik po oscypku](/pl/blog/oscypek-w-niemczech) wyjaśnia chronioną nazwę pochodzenia i typowe podróbki. Żurawinę w słoiku łatwo znaleźć w niemieckim markecie.",
 techniqueDe:
 "Scheiben nicht zu dünn schneiden. Mittlere Hitze: der Käse soll an der Oberfläche goldbraun werden und innen weich anschmelzen, ohne völlig zu zerfließen. Zu heiß verbrennt der Rauchgeschmack.",
 techniquePl:
 "Nie kroić zbyt cienko. Średni ogień: ser ma się zarumienić i lekko podtopić w środku, bez całkowitego rozpływania. Za mocny ogień pali dymny aromat.",
 serveDe:
 "Iss den Käse sofort mit Roggenbrot und Preiselbeeren. Er eignet sich als Vorspeise, als Teller nach dem Ski und als schneller Abend nach der Schicht, Hauptsache heiß vom Rost oder aus der Pfanne. In den Tatra-Hütten wird er traditionell auf einem Holzbrett serviert, direkt vom Grillrost, ohne viel Beiwerk außer der Preiselbeere.",
 servePl:
 "Jedz ser od razu z chlebem żytnim i żurawiną. Sprawdza się jako przystawka, talerz po nartach albo szybka kolacja po zmianie, byle gorący z grilla lub z patelni. W szałasach na Podhalu podaje się go tradycyjnie na drewnianej desce, prosto z rusztu, bez zbędnych dodatków poza żurawiną.",
 diasporaDe:
 "Für viele in Deutschland ist Oscypek Erinnerung an Zakopane und zugleich ein ehrliches Viertelstunden-Gericht, wenn nach der Arbeit wenig Zeit bleibt. Eine Packung und ein Glas Preiselbeeren reichen oft schon. Wer Familie im Podhale hat, bringt den Käse manchmal direkt aus Polen mit, weil der Rauchgeschmack der Originalware für viele unersetzlich bleibt.",
 diasporaPl:
 "Dla wielu w Niemczech oscypek to wspomnienie Zakopanego i jednocześnie uczciwe danie na kwadrans, gdy po pracy zostaje mało czasu. Jedno opakowanie sera i słoik żurawiny często wystarczą. Kto ma rodzinę na Podhalu, czasem przywozi ser prosto z Polski, bo dymny aromat oryginału dla wielu wciąż nie ma zastępnika w niemieckich sklepach, choćby były najlepiej zaopatrzone.",
 mistakesDe:
 "Zu langes Braten, zu viel Öl und zu süße Marmelade statt Preiselbeere zerstören den Kontrast. Der Käse soll goldbraun und innen weich bleiben, die Beilage sauer-frisch. Auch zu dünn geschnittene Scheiben zerfließen zu schnell und verlieren ihre Form auf dem Rost.",
 mistakesPl:
 "Zbyt długie smażenie, za dużo oleju i zbyt słodki dżem zamiast żurawiny niszczą kontrast. Ser ma zostać złoty i miękki w środku, a dodatek kwaśno-świeży. Zbyt cienko pokrojone plastry też zbyt szybko się rozpływają i tracą kształt na ruszcie, zamiast zostać zwarte w środku.",
 variantsDe:
 "Du kannst die Scheiben mit Speck umwickeln, mit einem Tropfen Honig verfeinern oder im Sommer direkt auf dem Grill braten. Beim Kauf hilft der [Oscypek-Guide](/de/blog/oscypek-deutschland), für eine gleichmäßige Kruste eine [Gusseisenpfanne](/de/blog/gusseisenpfanne). Die Preiselbeere bleibt dabei der klassische Partner, egal für welche Variante du dich entscheidest.",
 variantsPl:
 "Możesz owinąć plastry boczkiem, dodać kropkę miodu albo latem smażyć prosto na grillu. Przy zakupach pomaga [przewodnik po oscypku](/pl/blog/oscypek-w-niemczech), przy równomiernej skórce [patelnia żeliwna](/pl/blog/patelnia-zelivna). Żurawina zostaje klasycznym partnerem, niezależnie od wybranego wariantu i sposobu przygotowania.",
 },
 "recipe-placki": {
 dishDe: "Placki ziemniaczane",
 dishPl: "Placki ziemniaczane",
 vibeDe: "knusprig außen, weich innen, sofort weg",
 vibePl: "chrupiące na zewnątrz, miękkie w środku, znikają od razu",
 originDe:
 "Kartoffelpuffer gibt es in vielen Küchen Mittel- und Osteuropas, doch nach Polen kam die Kartoffel selbst erst spät: Erste Rezepte mit geriebenen Kartoffeln entstanden dort erst im 19. Jahrhundert, nachdem sich die Knolle über ein Jahrhundert lang nur zögerlich als Grundnahrungsmittel durchgesetzt hatte. Ärmere Familien streckten damit knappe Vorräte, wenn Getreide für Brot fehlte, und die Puffer wurden zum verlässlichen Sattmacher in kargen Wintern. Die polnische Version ist oft schlichter gewürzt als etwa das deutsche Reibekuchen-Pendant und lebt fast ausschließlich von der Technik: richtig reiben, richtig ausdrücken, richtig heiß ausbacken.",
 originPl:
 "Placki ziemniaczane zna wiele kuchni Europy Środkowej i Wschodniej, choć sam ziemniak dotarł do Polski dopiero późno: pierwsze przepisy z tartych ziemniaków powstały tu dopiero w XIX wieku, po ponad stuleciu, w którym bulwa niechętnie zdobywała status podstawowego produktu żywności. Uboższe rodziny rozciągały nimi skromne zapasy, gdy brakowało zboża na chleb, a placki stały się sprawdzonym, sycącym jedzeniem w chudych zimach. Polska wersja bywa prościej przyprawiona niż na przykład niemiecki Reibekuchen i żyje właściwie samą techniką: dobre tarcie, dobre odciśnięcie i naprawdę gorące smażenie na patelni.",
 shopDe:
 "Mehligkochende oder vorwiegend festkochende Kartoffeln funktionieren. Sauerrahm oder Schmand holst du im Kühlregal, Öl mit hohem Rauchpunkt aus dem Schrank. Technik und Varianten ordnet der [Placki-Guide](/de/blog/placki-guide); gleichmäßige Hitze hilft eine [Gusseisenpfanne](/de/blog/gusseisenpfanne).",
 shopPl:
 "Ziemniaki mączyste lub uniwersalne działają dobrze. Śmietanę lub schmand kupisz w lodówce, olej o wysokiej temperaturze dymienia w markecie. Technikę i warianty porządkuje [przewodnik po plackach](/pl/blog/placki-przewodnik); równomierne ciepło daje [patelnia żeliwna](/pl/blog/patelnia-zelivna).",
 techniqueDe:
 "Wasser aus der Reibemasse ist der Feind der Knusprigkeit. Gut ausdrücken, nicht zu viel Mehl, und die Pfanne wirklich heiß. Dicke Placki bleiben innen roh. Am besten reibst du die Kartoffeln grob, nicht fein, denn feine Reibemasse gibt mehr Wasser ab und wird schneller matschig, während gröbere Streifen mehr Struktur und Biss behalten. Presse die geriebene Masse in einem Sieb oder Tuch kräftig aus, bevor du sie mit Ei und Mehl vermischst, sonst schwimmt die Pfanne förmlich im Wasser und die Placki werden nie richtig knusprig.",
 techniquePl:
 "Woda z tarcia to wróg chrupkości. Dobrze odciśnij, nie za dużo mąki i naprawdę gorąca patelnia. Grube placki zostają surowe w środku. Najlepiej trzyj ziemniaki grubo, nie na drobno, bo drobna masa oddaje więcej wody i szybciej robi się papkowata, podczas gdy grubsze paski zachowują więcej struktury i chrupkości. Odciśnij starą masę mocno przez sitko lub ściereczkę, zanim wymieszasz ją z jajkiem i mąką, inaczej patelnia dosłownie pływa w wodzie i placki nigdy nie będą naprawdę chrupiące.",
 serveDe:
 "Serviere die Placki heiß mit Sauerrahm, mit Zucker, was wirklich viele Familien so mögen, mit Gulasch oder mit geräucherter Sahne, und stelle sie sofort auf den Tisch. Den zusammengesetzten Teller mit Gulasch obenauf findest du bei [Placek po węgiersku](/de/rezepte/placek-po-wegiersku). Kalt schmecken sie deutlich schlechter, deshalb lohnt es sich, erst kurz vor dem Essen zu braten, statt einen großen Stapel vorzubereiten.",
 servePl:
 "Podawaj placki gorące ze śmietaną, z cukrem, co w wielu domach jest naprawdę normą, z gulaszem albo z wędzoną śmietaną, i stawiaj je na stole od razu. Złożony talerz z gulaszem na wierzchu znajdziesz przy [placu po węgiersku](/pl/rezepte/placek-po-wegiersku). Na zimno smakują dużo gorzej, więc lepiej smażyć krótko przed jedzeniem, niż przygotowywać z góry cały stos.",
 diasporaDe:
 "Placki sind Weeknight-Food mit wenig Zutaten und großem Effekt, in deutschen Küchen ohne Spezialgeräte machbar, sobald die Pfanne wirklich heiß ist. Für viele polnische Familien in Deutschland sind sie außerdem ein Trostessen aus der Kindheit, das sich in wenigen Minuten aus fast nichts zaubern lässt, wenn der Kühlschrank sonst leer ist.",
 diasporaPl:
 "Placki to jedzenie na zwykły wieczór: mało składników, duży efekt, w niemieckiej kuchni bez specjalnego sprzętu, byle patelnia była naprawdę gorąca. Dla wielu polskich rodzin w Niemczech to też danie z dzieciństwa, które dodaje otuchy i które można wyczarować w kilka minut z niemal niczego, gdy lodówka jest akurat pusta.",
 mistakesDe:
 "Nasse Reibemasse, kalte Pfanne und zu viel Teig auf einmal machen weiche statt knusprige Placki. Lieber kleinere Batches braten. Den zusammengesetzten Teller mit Gulasch obenauf findest du bei [Placek po węgiersku](/de/rezepte/placek-po-wegiersku).",
 mistakesPl:
 "Mokra masa z tarcia, zimna patelnia i za dużo ciasta naraz dają miękkie zamiast chrupiących placków. Lepiej smażyć mniejszymi partiami. Złożony talerz z gulaszem na wierzchu znajdziesz przy [placu po węgiersku](/pl/rezepte/placek-po-wegiersku).",
 variantsDe:
 "Mit Zucchini gemischt, mit Knoblauch oder süß mit Zimt, alle diese Varianten ordnet der [Placki-Guide](/de/blog/placki-guide). Gusseisen hilft bei jeder Mischung gleich gut. Der Klassiker bleibt trotzdem die reine Kartoffel, und mit Gulasch als Belag wird daraus [Placek po węgiersku](/de/rezepte/placek-po-wegiersku). Manche Familien geben noch geriebene Zwiebel oder Karotte in den Teig, das hält die Placki saftig, ohne die Knusprigkeit zu verlieren.",
 variantsPl:
 "Z cukinią, z czosnkiem albo na słodko z cynamonem, wszystkie te warianty porządkuje [przewodnik po plackach](/pl/blog/placki-przewodnik). Patelnia żeliwna pomaga przy każdej mieszance równie dobrze. Klasyką zostaje sam ziemniak, a z gulaszem na wierzchu powstaje [placek po węgiersku](/pl/rezepte/placek-po-wegiersku). Niektóre rodziny dodają do ciasta jeszcze tartą cebulę albo marchewkę, co utrzymuje placki soczyste, bez utraty chrupkości.",
 },
 "recipe-golabki": {
 dishDe: "Gołąbki",
 dishPl: "Gołąbki",
 vibeDe: "zart, tomatenwarm, Sonntagsessen",
 vibePl: "delikatne, pomidorowe, niedzielne",
 originDe:
 "Gołąbki gehören zu einer großen Familie gefüllter Kohlrouladen, die sich über weite Teile Mittel- und Osteuropas erstreckt und ihre Wurzeln im osmanischen Dolma hat, jener Fülltechnik, mit der die Küche des Osmanischen Reiches zwischen dem 15. und 19. Jahrhundert Weinblätter, Gemüse und ganze Tiere umhüllte. Auf dem Weg durch die Balkanländer nach Norden ersetzten kältere Regionen die empfindlichen Weinblätter durch robuste Kohlblätter, woraus unter anderem die polnischen Gołąbki, die schwedischen Kåldolmar und die ungarischen Töltött káposzta entstanden. Der Name bedeutet wörtlich kleine Tauben, wobei die genaue Herkunft umstritten ist: Manche Sprachforscher vermuten schlicht eine Anspielung auf die taubenähnliche Form der gerollten Blätter, andere ein orientalisches Lehnwort, das über die Zeit lautlich an das Wort für den Vogel angeglichen wurde. In jedem Fall ist aus dem Gericht ein Geduldessen geworden, das sich lohnt: Der Kohl muss biegsam sein, die Füllung würzig und die Soße tragfähig, damit die Rollen über Stunden weich werden, ohne dabei zu zerfallen.",
 originPl:
 "Gołąbki należą do wielkiej rodziny nadziewanych rolek z kapusty, znanej w dużej części Europy Środkowej i Wschodniej, a jej korzenie sięgają osmańskiej dolmy, techniki nadziewania, którą kuchnia Imperium Osmańskiego między XV a XIX wiekiem owijała liście winogron, warzywa i całe zwierzęta. Na drodze przez Bałkany na północ chłodniejsze regiony zamieniły delikatne liście winogron na wytrzymałą kapustę, z czego powstały między innymi polskie gołąbki, szwedzkie kåldolmar i węgierskie töltött káposzta. Nazwa znaczy dosłownie małe gołąbki, choć jej pochodzenie budzi spory: część językoznawców widzi w tym po prostu odniesienie do kształtu zwiniętych listków przypominającego ptasią pierś, inni orientalne zapożyczenie, które z czasem brzmieniowo zbliżyło się do słowa oznaczającego ptaka. Tak czy inaczej danie stało się jedzeniem wymagającym cierpliwości, które się opłaca: kapusta musi być giętka, farsz aromatyczny, a sos na tyle gęsty, by rolki miękły godzinami bez rozpadania.",
 shopDe:
 "Du brauchst einen großen Weißkohl, gemischtes Hackfleisch, Reis und passierte Tomaten sowie Dill zum Servieren. Im [Polenladen](/de/blog/polenladen-einkaufen) gibt es manchmal vorbereitete Blätter. Sauce und Batch-Planung vertieft der [Gołąbki-Guide](/de/blog/golabki-guide). Wähle einen möglichst festen, nicht zu kleinen Kohlkopf, denn große, äußere Blätter lassen sich leichter füllen und rollen als kleine, zerbrechliche innere Blätter.",
 shopPl:
 "Potrzebujesz dużej kapusty, mielonego mieszanego, ryżu i passaty oraz kopru do podania. W [sklepie polskim](/pl/blog/sklep-polski-zakupy) bywają gotowe liście. Sos i planowanie partii pogłębia [przewodnik gołąbków](/pl/blog/golabki-przewodnik). Wybierz raczej zwartą i niezbyt małą główkę kapusty, bo duże, zewnętrzne liście łatwiej się nadziewa i zwija niż małe, kruche listki ze środka.",
 techniqueDe:
 "Blanchiere die Blätter, bis sie biegsam sind, schneide dicke Rippen flach und rolle fest, aber mit etwas Spielraum, weil der Reis noch quillt. Koche den Reis nur al dente vor und mische die Füllung kalt. Die Naht kommt nach unten, die Flüssigkeit soll die Rollen bedecken, und alles köchelt nur sanft, ohne zu sprudeln. Mehr zur Blanchier- und Rolltechnik erklärt der [Gołąbki-Guide](/de/blog/golabki-guide).",
 techniquePl:
 "Blanszuj liście, aż będą giętkie, spłaszcz grube żyłki i zwijaj mocno, ale z lekkim luzem, bo ryż jeszcze napęcznieje. Ryż ugotuj tylko al dente, a farsz mieszaj na zimno. Szew układaj do dołu, płyn powinien zakrywać rolki, a całość dusi się tylko łagodnie, bez burzenia. Więcej o blanszowaniu i zwijaniu wyjaśnia [przewodnik gołąbków](/pl/blog/golabki-przewodnik).",
 serveDe:
 "Serviere die Rouladen heiß mit Tomatensoße, Dill und Brot. Am nächsten Tag schmecken sie oft noch runder, weil sich Kohl und Soße über Nacht verbunden haben. Ein Löffel saure Sahne obendrauf mildert die Säure der Tomate und macht die Soße cremiger, ganz nach Familientradition.",
 servePl:
 "Podawaj rolki gorące z sosem pomidorowym, koperkiem i chlebem. Nazajutrz smakują często jeszcze pełniej, bo kapusta i sos połączyły się przez noc. Łyżka śmietany na wierzchu łagodzi kwasowość pomidora i robi sos bardziej kremowym, zależnie od tradycji rodzinnej.",
 diasporaDe:
 "Gołąbki sind Event-Cooking: einmal Aufwand, viele Portionen. Ideal, wenn Gäste aus der Community kommen und der Ofen den Nachmittag trägt, dann reicht am Ende ein Topf für den ganzen Tisch. In vielen Familien in Deutschland werden sie zu Allerheiligen oder an kalten Sonntagen gekocht, wenn ohnehin schon jemand am Herd steht.",
 diasporaPl:
 "Gołąbki to gotowanie na okazję: raz wkład, wiele porcji. Idealne, gdy przychodzą goście ze społeczności, a piekarnik niesie popołudnie, wtedy jeden garnek wystarczy na cały stół. W wielu polskich rodzinach w Niemczech gotuje się je na Wszystkich Świętych albo w chłodne niedziele, gdy ktoś i tak stoi przy kuchni cały dzień.",
 mistakesDe:
 "Zu hart gerollte Blätter, zu kurzes Schmoren und zu wässrige Soße sind die klassischen Fehler. Der Kohl braucht Zeit und genug Flüssigkeit, ohne in Suppe zu schwimmen. Auch zu viel rohes Fleisch im Verhältnis zum Reis macht die Füllung zäh, statt sie locker und saftig zu halten.",
 mistakesPl:
 "Zbyt twarde zwinięcie, za krótkie duszenie i zbyt wodnisty sos to klasyczne błędy. Kapusta potrzebuje czasu i dość płynu, bez pływania w zupie. Zbyt duża ilość surowego mięsa względem ryżu też robi farsz zbity, zamiast zostawić go lekkim i soczystym.",
 variantsDe:
 "Statt Reis kannst du Buchweizen wählen, vegetarisch mit Pilzen füllen oder statt Tomate eine Pilzsoße kochen. Sauce-Wege und Batch-Planung beschreibt der [Gołąbki-Guide](/de/blog/golabki-guide). In manchen Regionen Polens wird die Füllung mit etwas Speck verfeinert, andere Familien schwören auf einen Schuss Sahne in der Soße für mehr Fülle.",
 variantsPl:
 "Zamiast ryżu możesz wziąć kaszę, nadziać wegetariańsko grzybami albo zamiast pomidora ugotować sos grzybowy. Drogi sosu i plan partii opisuje [przewodnik gołąbków](/pl/blog/golabki-przewodnik). W niektórych regionach Polski farsz wzbogaca się odrobiną boczku, a inne rodziny przysięgają na łyżkę śmietany w sosie dla większej pełni smaku.",
 },
 "recipe-barszcz": {
 dishDe: "Barszcz czerwony",
 dishPl: "Barszcz czerwony",
 vibeDe: "klar, säuerlich, festlich rot",
 vibePl: "klarowny, kwaśny, odświętnie czerwony",
 originDe:
 "Barszcz ist nach der Wildpflanze Barszcz benannt, dem Wiesenbärenklau, mit dem die Suppe ursprünglich sauer eingelegt und gekocht wurde, lange bevor die Rote Bete die Hauptzutat übernahm. Zur Wigilia, dem Heiligabend-Essen, gehört traditionell die klare, rubinrote Variante, denn die zwölf Gänge des Abends, benannt nach den zwölf Aposteln, müssen nach katholischer Fastenregel vollständig fleischlos bleiben. Weil kein Rinder- oder Hühnerfond zur Verfügung steht, holt sich der Wigilia-Barszcz seine Tiefe stattdessen aus getrockneten Steinpilzen, die stundenlang mitziehen und der Suppe trotz fehlendem Fleisch einen erdig-runden Geschmack geben. Die rote Farbe soll traditionell an das Blut Christi erinnern, und die kleinen, mit Pilzen gefüllten Teigtaschen Uszka verweisen auf die alte polnische Tradition des Pilzesammelns im Wald. Ganz anders ist der Barszcz ukraiński, der in Polen ebenfalls beliebt ist, ein dicker, fleischreicher Eintopf mit Kohl, Bohnen und Kartoffeln, der mit einem Klecks Sauerrahm serviert wird und mit der klaren Festtagsbrühe kaum mehr als die rote Farbe teilt. Verwechsle Barszcz außerdem nicht mit der sauren Sauerteigsuppe [Żurek](/de/rezepte/zurek), die ihre Säure aus fermentiertem Roggen statt aus Rote Bete zieht, oder mit der goldenen Hühnerbrühe [Rosół](/de/rezepte/rosol), die als klare Vorsuppe an gewöhnlichen Sonntagen serviert wird.",
 originPl:
 "Barszcz zawdzięcza nazwę dzikiej roślinie zwanej barszczem zwyczajnym, którą dawniej kiszono i gotowano na kwaśno, długo przed tym, jak główną rolę przejął burak. Na Wigilię tradycyjnie podaje się klarowną, rubinowoczerwoną wersję, bo dwanaście dań tego wieczoru, nazwanych na cześć dwunastu apostołów, musi według katolickiej reguły postu być całkowicie bezmięsnych. Skoro nie ma wywaru z wołowiny czy kurczaka, wigilijny barszcz czerpie głębię smaku z suszonych borowików, które gotują się godzinami i dają zupie ziemisty, pełny smak mimo braku mięsa. Czerwony kolor ma tradycyjnie przypominać krew Chrystusa, a małe pierożki z grzybami, uszka, odwołują się do dawnej polskiej tradycji grzybobrania. Zupełnie inny jest popularny w Polsce barszcz ukraiński, gęsty, mięsny gulasz z kapustą, fasolą i ziemniakami, podawany z łyżką śmietany, który z klarowną wersją świąteczną łączy właściwie tylko czerwony kolor. Nie myl barszczu też z kwaśnym [żurkiem](/pl/rezepte/zurek) na zakwasie żytnim, którego kwasowość pochodzi z fermentacji, a nie z buraka, ani ze złotym [rosołem](/pl/rezepte/rosol), klarowną zupą z kurczaka podawaną na zwykłe niedzielne obiady.",
 shopDe:
 "Frische Rote Bete, gute Gemüsebrühe, Piment im Ganzen sowie Essig oder etwas Zitronensäure zum Feinabschmecken reichen für den Ansatz. Uszka kochst du separat nach dem eigenen [Uszka](/de/rezepte/uszka)-Rezept, oder du holst fertige Teigtaschen im [Polenladen](/de/blog/polenladen-einkaufen), wenn vor der Wigilia die Zeit knapp wird. Getrocknete Steinpilze für den vollen, fleischlosen Geschmack findest du im selben Laden, meist deutlich günstiger als im deutschen Feinkostregal.",
 shopPl:
 "Świeże buraki, dobry bulion warzywny, całe ziele angielskie oraz ocet lub odrobina kwasku cytrynowego do doprawienia wystarczą na bazę. Uszka gotujesz osobno według własnego przepisu na [uszka](/pl/rezepte/uszka), a gotowe pierożki na wypadek braku czasu przed Wigilią kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Suszone borowiki na pełny, bezmięsny smak znajdziesz w tym samym sklepie, zwykle znacznie taniej niż w niemieckim delikatesowym regale.",
 techniqueDe:
 "Für eine klare Festtagsbrühe siebst du den Sud ab, im Alltag darfst du ihn stückig lassen, das ist reine Geschmacksfrage. Justiere die Säure erst am Ende, denn zu langes Kochen macht den Geschmack flach und trübt die Farbe. Uszka kochst du nie in der Suppe selbst mit, sondern immer separat in Salzwasser, erst in der Schale kommen beide zusammen, sonst verlieren die Teigtaschen ihre Form und die Suppe wird stärkehaltig-trüb.",
 techniquePl:
 "Dla klarownego barszczu świątecznego przecedź wywar, na co dzień możesz zostawić go z warzywami, to czysta kwestia smaku. Kwasowość ustawiaj na końcu, bo zbyt długie gotowanie spłaszcza smak i mętni kolor. Uszek nigdy nie gotuj w samej zupie, tylko zawsze osobno w osolonej wodzie, łącz je z barszczem dopiero w misce, inaczej pierożki się rozpadają, a zupa robi się mętna od skrobi.",
 serveDe:
 "Serviere den Barszcz heiß, zur Wigilia mit Uszka aus dem eigenen Rezept in der Schale, im Alltag mit Kartoffeln oder Kartoffelklößen. Ein Schuss Sauerrahm bleibt an gewöhnlichen Tagen optional, gehört aber nicht in die klare Festtagsversion, denn genau die Klarheit macht diese Wigilia-Suppe aus.",
 servePl:
 "Podawaj barszcz gorący, na Wigilię z uszkami z osobnego przepisu w misce, na co dzień z ziemniakami albo z kluskami. Łyżka śmietany zostaje opcjonalna na zwykłe dni, ale nie pasuje do klarownej wersji świątecznej, bo właśnie przejrzystość definiuje tę wigilijną zupę.",
 diasporaDe:
 "An Heiligabend in Deutschland trägt ein klarer Barszcz oft das ganze Menü, er verbindet Generationen am Tisch und lässt sich gut ein bis zwei Tage vorher vorbereiten, während die Uszka separat warten. Viele Familien nutzen genau diese Vorlaufzeit, um am 24. Dezember selbst mehr Ruhe zu haben, wenn ohnehin schon mehrere andere Wigilia-Gerichte gleichzeitig fertig werden müssen.",
 diasporaPl:
 "W Wigilię w Niemczech klarowny barszcz często niesie całe menu, łączy pokolenia przy stole i da się przygotować dzień lub dwa wcześniej, podczas gdy uszka czekają osobno. Wiele rodzin wykorzystuje właśnie ten czas, żeby 24 grudnia mieć więcej spokoju, gdy i tak trzeba na czas skończyć kilka innych wigilijnych dań.",
 mistakesDe:
 "Häufig wird Barszcz zu süß abgeschmeckt, durch zu starkes Kochen trüb, oder durch zu wenig Säure eher fade als lebendig. Er soll wach und klar schmecken, nicht wie ein süßer Saft. Uszka gehören außerdem nicht stundenlang in die heiße Suppe, sie werden erst kurz vor dem Servieren in der Schale zusammengeführt, sonst verlieren sie ihre Form und die Brühe wird stärkehaltig.",
 mistakesPl:
 "Barszcz często wychodzi zbyt słodki, mętny przez zbyt gwałtowne gotowanie albo płaski przez za mało kwasu. Ma smakować świeżo i klarownie, a nie jak słodki sok. Uszek też nie wolno godzinami trzymać w gorącej zupie, łączy się je w misce dopiero na chwilę przed podaniem, inaczej tracą formę, a bulion robi się skrobiowo mętny.",
 variantsDe:
 "Du kannst getrocknete Pilze großzügiger in den Ansatz geben, mehr Knoblauch betonen oder für den Alltag eine schärfere, stückige Variante kochen. Kiszone Suppen ganz ohne Rote Bete sind ein eigenes Kapitel, etwa die saure [Ogórkowa](/de/rezepte/ogorkowa) oder der Kraut-Eintopf [Kapuśniak](/de/rezepte/kapusniak), und eine warme Frühlingsversion mit jungen Blättern findest du bei [Botwinka](/de/rezepte/botwinka). Verwechsle den klaren Wigilia-Barszcz nie mit dem dicken, fleischreichen Barszcz ukraiński, das sind zwei ganz verschiedene Traditionen unter demselben Namen.",
 variantsPl:
 "Możesz dodać więcej suszonych grzybów do bazy, mocniej podkreślić czosnek albo na co dzień ugotować ostrzejszą wersję z warzywami w kawałkach. Zupy kiszone bez buraków to zupełnie inny rozdział, na przykład kwaśna [ogórkowa](/pl/rezepte/ogorkowa) czy kapuściany [kapuśniak](/pl/rezepte/kapusniak), a ciepłą wiosenną wersję z młodymi listkami znajdziesz przy [botwince](/pl/rezepte/botwinka). Nie myl klarownego barszczu wigilijnego z gęstym, mięsnym barszczem ukraińskim, to dwie zupełnie różne tradycje pod tą samą nazwą.",
 },
 "recipe-schabowy": {
 dishDe: "Kotlet schabowy",
 dishPl: "Kotlet schabowy",
 vibeDe: "golden, knusprig, unapologetisch sättigend",
 vibePl: "złoty, chrupiący, bez kompleksów sycący",
 originDe:
 "Kotlet schabowy gilt heute als das polnische Nationalschnitzel, dabei ist die Panade selbst gar nicht so alt, erste gedruckte Rezepte für panierte Schweinekoteletts erscheinen erst 1860 im Kochbuch 365 obiadów za pięć złotych von Lucyna Ćwierczakiewiczowa, während das ältere Kochbuch Kucharz doskonały aus dem Jahr 1786 das Gericht noch gar nicht kennt. Die Technik selbst kam wahrscheinlich über das österreichische Wiener Schnitzel nach Polen, das ursprünglich aus Kalbfleisch gemacht wird, oder über die italienische Cotoletta alla milanese, worüber sich Österreicher und Italiener bis heute streiten. Zum festen Bestandteil des polnischen Alltags wurde Schabowy erst in der Zeit der Volksrepublik Polen, als er in Milchbars und Kantinen zum verlässlichen Fleischgericht wurde, sobald überhaupt Fleisch verfügbar war, und sogar in Liedern und Romanen der Zeit auftaucht. Wichtig ist die Abgrenzung zu zwei nahen Verwandten: [Kotlet mielony](/de/rezepte/kotlet-mielony) verwendet gemischtes Hackfleisch statt eines geklopften Fleischstücks, und Kotlet de volaille ist ein mit Butter und Käse gefülltes, paniertes Hühnerbrustfilet, ein völlig anderer Aufbau. Auch der Ofenbraten [Schab pieczony](/de/rezepte/schab-pieczony) hat mit Schabowy nur das Fleischstück gemeinsam, im Ofen gebacken statt gebraten und ganz ohne Panade.",
 originPl:
 "Kotlet schabowy dziś uchodzi za polski narodowy sznycel, choć sama panierka nie jest wcale tak stara, pierwsze drukowane przepisy na panierowany kotlet wieprzowy pojawiają się dopiero w 1860 roku w książce 365 obiadów za pięć złotych Lucyny Ćwierczakiewiczowej, podczas gdy starsza książka Kucharz doskonały z 1786 roku tego dania jeszcze nie znała. Sama technika prawdopodobnie trafiła do Polski przez austriacki sznycel wiedeński, tradycyjnie robiony z cielęciny, albo przez włoską cotoletta alla milanese, o pierwotne pochodzenie której Austriacy i Włosi spierają się do dziś. Na stałe do polskiej codzienności schabowy wszedł jednak dopiero w czasach Polskiej Rzeczpospolitej Ludowej, kiedy w barach mlecznych i stołówkach był pewnym daniem mięsnym, o ile w ogóle było jakieś mięso do kupienia, i trafił nawet do piosenek i powieści tamtych lat. Ważne jest odróżnienie od dwóch bliskich krewnych: [kotlet mielony](/pl/rezepte/kotlet-mielony) robi się z mielonego mięsa, a nie z rozbitego kawałka, a kotlet de volaille to nadziewany masłem i serem, panierowany filet z kurczaka, zupełnie inna konstrukcja. Także pieczeń [schab pieczony](/pl/rezepte/schab-pieczony) ma z schabowym wspólny tylko kawałek mięsa, bo jest pieczona w piekarniku, a nie smażona, i bez żadnej panierki.",
 shopDe:
 "Gute Schweineschnitzel aus der Lende, frische Semmelbrösel, Eier und Mehl reichen für die Panade. Butterschmalz oder Schmalz statt reinem Öl geben den typischen, satten Geschmack. Die richtige Reihenfolge beim Panieren erklärt der [Panieren-Guide](/de/blog/panieren-schabowy), gleichmäßige Hitze in der Pfanne liefert eine [Gusseisenpfanne](/de/blog/gusseisenpfanne). Semmelbrösel und gutes Schmalz findest du oft günstiger im [Polenladen](/de/blog/polenladen-einkaufen) als im deutschen Supermarkt.",
 shopPl:
 "Dobre kotlety z schabu, świeża bułka tarta, jajka i mąka wystarczą do panierki. Smalec albo masło klarowane dają ten typowy, pełny smak, jakiego czysty olej nie zapewni. Właściwą kolejność panierowania opisuje [przewodnik panierowania](/pl/blog/panierowanie-kotlet), równomierny żar na patelni daje [patelnia żeliwna](/pl/blog/patelnia-zelivna). Bułkę tartą i dobry smalec często taniej kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy) niż w niemieckim markecie.",
 techniqueDe:
 "Klopfe das Fleisch gleichmäßig, aber nicht zu dünn, paniere es in der richtigen Reihenfolge und brate es bei mittlerer statt hoher Hitze. Die Panade soll das Fleisch fest umschließen, während das Innere saftig bleibt, und nach dem Braten lohnt sich eine kurze Ruhezeit, damit sich der Fleischsaft wieder setzt. Zu dünn geklopftes Fleisch trocknet schnell aus, während zu kaltes Fett die Panade vollsaugt, statt sie knusprig werden zu lassen.",
 techniquePl:
 "Rozbij mięso równomiernie, ale nie za mocno, obtocz je w prawidłowej kolejności i smaż na średnim, a nie za mocnym ogniu. Panierka ma szczelnie otulić mięso, a środek zostać soczysty, po smażeniu warto dać kotletowi chwilę odpoczynku, żeby sok w mięsie się ułożył. Zbyt mocno rozbite mięso szybko wysycha, a zbyt zimny tłuszcz wciąga panierkę, zamiast dać jej chrupkość.",
 serveDe:
 "Serviere den Schabowy mit gekochten Kartoffeln und einer sauren Beilage, oft mit einer Zitronenspalte am Rand. Klassisch passt die saure Gurkensalat-Beilage [Mizeria](/de/rezepte/mizeria), aber auch warme [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana) oder die Rote-Bete-Beilage [Buraczki](/de/rezepte/buraczki), die trotz des Namens nichts mit der gleichnamigen Suppe zu tun hat. Ketchup dazu ist Hausbrauch, kein Muss, und den vollständigen Sonntagsrahmen liefert der Überblick zum [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 servePl:
 "Podawaj schabowego z ugotowanymi ziemniakami i kwaśnym dodatkiem, często z cytryną z boku. Klasycznie pasuje [mizeria](/pl/rezepte/mizeria), ale też ciepła [kapusta zasmażana](/pl/rezepte/kapusta-zasmażana) albo [buraczki](/pl/rezepte/buraczki) jako dodatek z buraków, a nie zupa o tej samej nazwie. Keczup to zwyczaj domu, nie obowiązek, a pełny niedzielny kontekst daje przegląd [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
 diasporaDe:
 "Nach der Arbeit ist Schabowy für viele Trostessen, die Panade bereitest du vor, solange noch Ruhe ist, und brätst erst, wenn alle am Tisch sitzen, damit die Kruste knusprig bleibt und niemand vor der Pfanne wartet. Fertige Semmelbrösel und günstiges Schmalz aus dem [Polenladen](/de/blog/polenladen-einkaufen) sind in der Diaspora eine ehrliche, zeitsparende Abkürzung, die am Ergebnis kaum etwas ändert.",
 diasporaPl:
 "Po pracy schabowy dla wielu jest jedzeniem pocieszenia, panierkę przygotowuje się wcześniej, gdy jeszcze jest spokój, a smaży dopiero, gdy wszyscy siadają do stołu, dzięki temu skórka zostaje chrupiąca i nikt nie czeka przy patelni. Gotowa bułka tarta i niedrogi smalec ze [sklepu polskiego](/pl/blog/sklep-polski-zakupy) to w diasporze uczciwy, szybszy sposób, który niemal nie zmienia efektu końcowego.",
 mistakesDe:
 "Häufig wird das Fleisch zu dünn geklopft, die Panade verbrennt bei zu hoher Hitze, oder das Fett ist beim ersten Schnitzel noch nicht heiß genug. Timing und Temperatur entscheiden deutlich mehr als die Marke der Semmelbrösel, deshalb lohnt sich mittlere Hitze und etwas Geduld. Auch zu viele Schnitzel gleichzeitig in der Pfanne kühlen das Fett zu schnell ab und lassen die Panade weich statt knusprig werden.",
 mistakesPl:
 "Często mięso jest rozbite za mocno, panierka się przypala przy zbyt wysokim ogniu, albo tłuszcz przy pierwszym kotlecie jest jeszcze niedostatecznie gorący. Timing i temperatura decydują znacznie bardziej niż marka bułki tartej, dlatego lepiej trzymać średni ogień i uzbroić się w cierpliwość. Zbyt wiele kotletów naraz na patelni też szybko wychładza tłuszcz i zostawia panierkę miękką, zamiast chrupiącej.",
 variantsDe:
 "Es gibt Varianten mit Knochen, aus Putenfleisch oder im Ofen nachgebacken, wenn Gäste am Tisch warten. Die Reihenfolge und die Kruste vertieft der [Panieren-Guide](/de/blog/panieren-schabowy), gleichmäßige Hitze liefert eine [Gusseisenpfanne](/de/blog/gusseisenpfanne). Verwechsle Schabowy nicht mit dem aus Hackfleisch geformten [Kotlet mielony](/de/rezepte/kotlet-mielony) oder mit dem Ofenbraten [Schab pieczony](/de/rezepte/schab-pieczony), der Klassiker bleibt aber das dünn geklopfte, panierte Schnitzel aus der Pfanne.",
 variantsPl:
 "Są warianty z kością, z indyka albo dogrzewane w piekarniku, gdy przy stole czekają goście. Kolejność panierowania i chrupkość pogłębia [przewodnik panierowania](/pl/blog/panierowanie-kotlet), równomierny żar daje [patelnia żeliwna](/pl/blog/patelnia-zelivna). Nie myl schabowego z formowanym z mielonego [kotletem mielonym](/pl/rezepte/kotlet-mielony) ani z pieczenią [schab pieczony](/pl/rezepte/schab-pieczony), klasyką zostaje jednak cienko rozbity, panierowany kotlet z patelni.",
 },
 "recipe-nalesniki": {
 dishDe: "Naleśniki mit Twaróg",
 dishPl: "Naleśniki z twarogiem",
 vibeDe: "zart, süß-mild, nach Nachmittag zu Hause",
 vibePl: "delikatne, słodko-łagodne, jak popołudnie w domu",
 originDe:
 "Naleśniki gehören zur großen europäischen Familie der Crêpes, Blini und Palatschinken, doch in Polen sind sie seit dem ersten gedruckten Kochbuch des Landes belegt: Das Compendium Ferculorum von Stanisław Czerniecki aus dem Jahr 1682 beschreibt bereits einen Teig aus Eiern, Milch und etwas Mehl, dünn in der Pfanne gebacken und mit Butter serviert, gefüllt etwa mit Rosinen, Zimt, Zucker oder Safran. Der Name selbst wird oft von der Wendung na liściu, also auf dem Blatt, abgeleitet, was auf eine Zeit verweist, in der der Teig auf einem großen Kohlblatt gebacken wurde, andere Sprachforscher sehen die Wurzel in na lěsě, auf dem Holzgestell. Naleśniki sind dünner und biegsamer als deutsche Eierkuchen und von Anfang an zum Füllen und Rollen gedacht, im 19. Jahrhundert dominierten in polnischen Kochbüchern vor allem süße Füllungen wie Marmelade und Twaróg, die bis heute zum Klassiker für Kinder und Gäste geworden sind. Überblick über alle Varianten gibt der [Naleśniki-Guide](/de/blog/nalesniki-guide).",
 originPl:
 "Naleśniki należą do wielkiej europejskiej rodziny naleśników, crêpes, blinów i palacsinty, ale w Polsce są udokumentowane już w pierwszej wydanej książce kucharskiej kraju: Compendium Ferculorum Stanisława Czernieckiego z 1682 roku opisuje ciasto z jajek, mleka i odrobiny mąki, smażone cienko na patelni i podawane z masłem, z nadzieniem na przykład z rodzynek, cynamonu, cukru czy szafranu. Samą nazwę część badaczy wywodzi od zwrotu na liściu, co wskazywałoby na czasy, gdy ciasto piekło się na dużym liściu kapusty, inni językoznawcy widzą źródło w na lěsě, na drewnianej płycie. Naleśniki są cieńsze i bardziej giętkie niż niemieckie Eierkuchen i od początku przeznaczone do farszu i zwijania, w XIX wieku w polskich książkach kucharskich dominowały nadzienia słodkie, takie jak dżem i twaróg, które do dziś stały się klasyką dla dzieci i gości. Mapę wszystkich wariantów daje [przewodnik naleśników](/pl/blog/nalesniki-przewodnik).",
 shopDe:
 "Milch, Mehl (Type 405 oder 550), Eier sowie Twaróg oder gut abgeseihten Quark, Zucker und Vanille tragen Teig und Füllung. Kauf und Konsistenz erklärt der [Twaróg-Guide](/de/blog/twarog-deutschland); die Platten-Technik ordnet der [Naleśniki-Guide](/de/blog/nalesniki-guide).",
 shopPl:
 "Mleko, mąka (typ 405 lub 550), jajka oraz twaróg lub dobrze odsączony Quark, cukier i wanilia niosą ciasto i farsz. Zakupy i konsystencję opisuje [przewodnik po twarogu](/pl/blog/twarog-w-niemczech); cienką płytę [przewodnik naleśników](/pl/blog/nalesniki-przewodnik).",
 techniqueDe:
 "Der Teig sollte wie dünne Sahne fließen, 20 bis 30 Minuten ruhen und dann nur dünn in eine leicht gefettete Pfanne gegossen werden, die erste Platte gilt dabei oft schon als Kalibrierung für Hitze und Menge. Die Füllung muss streichfähig und darf nicht nass sein, du lässt am Rand etwas Platz, rollst die Platte und brätst sie optional noch einmal in Butter goldbraun. Ungefüllte Platten lassen sich gut mit Backpapier dazwischen einfrieren, sodass unter der Woche nur noch gefüllt werden muss.",
 techniquePl:
 "Ciasto powinno mieć konsystencję rzadkiej śmietany, odpoczywać 20 do 30 minut, a potem być cienko wylewane na lekko natłuszczoną patelnię, przy czym pierwszy placek często służy jako kalibracja żaru i ilości ciasta. Farsz musi być smarowalny, a nie mokry, przy zwijaniu warto zostawić margines na brzegu i opcjonalnie podsmażyć zwinięty placek na maśle na złoto. Puste placki dobrze się zamrażają przełożone papierem, dzięki czemu w tygodniu trzeba je już tylko napełnić.",
 serveDe:
 "Serviere die Rollen mit Puderzucker, Obst oder [Śmietana](/de/blog/smietana-schmand). Auch kalt am nächsten Tag schmecken sie gut, aufwärmen lässt sich am besten in der Pfanne statt in der Mikrowelle.",
 servePl:
 "Podawaj rolki z cukrem pudrem, owocami albo [śmietaną](/pl/blog/smietana-czy-schmand). Nazajutrz smakują też na zimno, a odgrzewać najlepiej na patelni, nie w mikrofalówce.",
 diasporaDe:
 "Wenn die Sehnsucht nach zu Hause groß ist, sind Naleśniki schnelles Comfort Food. Quark aus dem Supermarkt geht ebenfalls gut, vorausgesetzt, du seihst ihn ab wie im Twaróg-Guide beschrieben. In vielen Familien in Deutschland ist es das erste Gericht, das Kinder selbst nachkochen lernen, weil der Teig verzeiht und die Füllung nach Geschmack wechselt.",
 diasporaPl:
 "Gdy tęsknota za domem jest duża, naleśniki są szybkim comfort foodem. Quark z marketu też działa, pod warunkiem, że odsączysz go jak w przewodniku po twarogu. W wielu polskich rodzinach w Niemczech to pierwsze danie, którego dzieci uczą się gotować samodzielnie, bo ciasto wybacza błędy, a farsz można zmieniać według smaku.",
 mistakesDe:
 "Zu dicker Teig nach nachgeschüttetem Mehl, fehlende Ruhezeit, zu heiße Pfanne, nasser Quark und überfüllte Rollen sind die klassischen Fehler. Weniger Masse auf die Pfanne und gut abgeseihten Twaróg helfen sofort. Auch eine zu kalte Pfanne beim ersten Versuch führt oft zu einer klebrigen, nicht lösbaren Platte, deshalb lohnt sich ein kurzer Test vorab.",
 mistakesPl:
 "Zbyt gęste ciasto po dokładanej mące, brak odpoczynku, za gorąca patelnia, mokry twaróg i przeładowany farsz to klasyczne błędy. Mniej masy na patelnię i dobrze odsączony twaróg pomagają od razu. Zbyt chłodna patelnia przy pierwszej próbie też często daje klejący się, nieodklejający placek, dlatego warto zrobić krótki test na początku, zanim usmażysz cały stos naraz.",
 variantsDe:
 "Oben wechseln zu [Fleisch](/de/rezepte/nalesniki/fleisch), [Spinat](/de/rezepte/nalesniki/szpinak) oder süß [Marmelade](/de/rezepte/nalesniki/dzem). Orientierung über alle Varianten: [Naleśniki-Guide](/de/blog/nalesniki-guide).",
 variantsPl:
 "Przełącz na [mięso](/pl/rezepte/nalesniki/mieso), [szpinak](/pl/rezepte/nalesniki/szpinak) albo słodki [dżem](/pl/rezepte/nalesniki/dzem). Opcje i technikę porządkuje [przewodnik naleśników](/pl/blog/nalesniki-przewodnik), który pomoże wybrać wariant na każdą okazję.",
 },
 "recipe-nalesniki-mieso": {
 dishDe: "Naleśniki mit Fleisch",
 dishPl: "Naleśniki z mięsem",
 vibeDe: "herzhaft, satt, sonntagstauglich",
 vibePl: "wytrawne, sycące, na niedzielę",
 originDe:
 "Herzhaft gefüllte Naleśniki mit gedünstetem Hack nutzen dieselbe dünne Teigplattform wie die süße Twaróg-Variante, richten sich aber klar an den salzigen Tisch. In vielen Haushalten ist das die Variante, wenn Gäste kommen und eine süße Füllung allein nicht reicht, denn der Grundteig aus Milch, Mehl und Ei bleibt bei allen Naleśniki gleich, nur die Füllung entscheidet, ob aus dem Nachmittagskaffee ein vollwertiges Mittagessen wird.",
 originPl:
 "Wytrawne naleśniki z duszonym mięsem korzystają z tej samej cienkiej platformy ciasta co słodki wariant z twarogiem, ale są przeznaczone wyraźnie na słony stół. W wielu domach to właśnie ten wariant pojawia się, gdy przychodzą goście i samo słodkie nadzienie nie wystarcza, bo podstawowe ciasto z mleka, mąki i jajka zostaje przy każdym naleśniku takie samo, a o tym, czy z popołudniowej kawy wychodzi pełny obiad, decyduje właśnie farsz.",
 shopDe:
 "Milch, Mehl und Eier tragen den Teig, für die Füllung brauchst du gemischtes Hack, Zwiebel, Majoran und Butter. Die Platten-Technik vertieft der [Naleśniki-Guide](/de/blog/nalesniki-guide), hier auf dieser Seite zählt vor allem die trockene, kalte Fleischfüllung. Gutes Hack und frischer Majoran machen dabei einen deutlich größeren Unterschied als teures Fleisch, denn beides bestimmt, wie würzig die Füllung am Ende wirklich schmeckt.",
 shopPl:
 "Mleko, mąka i jajka niosą ciasto, do farszu potrzebujesz mielonego, cebuli, majeranku i masła. Technikę placków pogłębia [przewodnik naleśników](/pl/blog/nalesniki-przewodnik), tutaj liczy się przede wszystkim suchy, zimny farsz mięsny. Dobre mięso mielone i świeży majeranek robią większą różnicę niż drogi kawałek mięsa, bo właśnie od nich zależy, jak aromatyczny wyjdzie ostateczny farsz, a mieszankę wołowo-wieprzową warto wybrać zamiast czystej wołowiny, bo zostaje soczystsza po podsmażeniu i lepiej trzyma smak wewnątrz rolki.",
 techniqueDe:
 "Die Füllung muss kalt und trocken sein, sonst weicht die Platte auf. Rolle dünne Naleśniki fest, ohne sie zu überfüllen, und brate sie in Butter goldbraun, wobei die Hitze mittel bleibt, damit die Butter nicht verbrennt. Wer die Füllung vor dem Rollen probiert und noch einmal nachwürzt, vermeidet das häufigste Problem dieser Variante, nämlich eine Füllung, die nach dem Braten fad schmeckt.",
 techniquePl:
 "Farsz musi być zimny i suchy, inaczej placek się rozmięknie. Zwijaj cienkie naleśniki bez przeładowania i smaż na maśle na złoto, przy czym ogień trzymaj średni, żeby masło się nie spaliło. Kto przed zwijaniem spróbuje farszu i ewentualnie dosoli, unika najczęstszego problemu tego wariantu, czyli farszu, który po usmażeniu wychodzi mdły.",
 serveDe:
 "Serviere die Fleischnaleśniki heiß mit Dill oder klarer Soße. Reste lassen sich gut in der Pfanne aufwärmen, die Füllung bleibt saftig, solange du sie nicht zu stark austrocknest. Als vollwertiges Abendessen reichen zwei bis drei Rollen pro Person, dazu passt ein einfacher grüner Salat mit etwas Essig und Öl.",
 servePl:
 "Podawaj naleśniki z mięsem gorące z koperkiem albo jasnym sosem. Resztki dobrze odgrzewają się na patelni, farsz zostaje soczysty, o ile nie wysuszysz go zbyt mocno. Jako pełny posiłek wystarczą dwie do trzech rolek na osobę, a do tego dobrze pasuje prosta sałata z octem i olejem.",
 diasporaDe:
 "Rest-Hack vom Sonntag findet hier einen guten zweiten Tag: leere Naleśniki einfrieren und unter der Woche nur noch frisch füllen und braten. So wird aus einer einzigen Kochaktion am Wochenende gleich mehrmals ein warmes Abendessen, ohne dass am Werktag noch Zeit für einen frischen Teig bleiben muss. Für Kinder, die kein „grünes“ oder „fremdes“ Essen mögen, ist die Fleischfüllung oft der einfachste Einstieg in die polnische Küche.",
 diasporaPl:
 "Resztki mielonego z niedzieli mają tu dobry drugi dzień: puste naleśniki zamróź, a w tygodniu tylko świeżo napełnij i podsmaż. Z jednego niedzielnego gotowania robi się w ten sposób kilka ciepłych kolacji, bez potrzeby robienia świeżego ciasta w środku tygodnia. Dla dzieci, które nie lubią „zielonego” albo „nieznanego” jedzenia, farsz mięsny bywa najłatwiejszym, oswojonym wejściem w polską kuchnię i rzadko wymaga długich negocjacji przy stole.",
 mistakesDe:
 "Heiße, nasse Füllung, zu dicke Pfannkuchen und zu viel Fett beim zweiten Braten machen die Rollen schwer statt zart. Erst eine Probeplatte kalibrieren, bevor der ganze Stapel gefüllt wird, spart am Ende Zeit und Nerven. Auch zu wenig Salz in der Füllung ist ein häufiger Fehler, weil sich der Geschmack im dünnen Teig sonst zu stark verwässert.",
 mistakesPl:
 "Gorący, mokry farsz, zbyt grube placki i za dużo tłuszczu przy drugim smażeniu czynią rolki ciężkimi zamiast delikatnymi. Najpierw skalibruj jeden placek, zanim napełnisz cały stos, to na końcu oszczędza czas i nerwy. Zbyt mało soli w farszu to również częsty błąd, bo w cienkim cieście smak łatwo się rozmywa.",
 variantsDe:
 "Pute oder Pilze in der Füllung ändern den Charakter, ohne die Technik zu wechseln, und auch eine Prise geräucherter Paprika passt gut zu Hackfleisch. Wer es milder mag, ersetzt einen Teil des Hacks durch fein gewürfeltes, gegartes Hühnerfleisch. Oben findest du [Twaróg](/de/rezepte/nalesniki/twarog), [Spinat](/de/rezepte/nalesniki/szpinak) und süße [Marmelade](/de/rezepte/nalesniki/dzem).",
 variantsPl:
 "Indyk albo grzyby w farszu zmieniają charakter bez zmiany techniki, a szczypta wędzonej papryki dobrze komponuje się z mięsem mielonym. Kto woli delikatniejszy smak, część mielonego zastępuje drobno pokrojonym, ugotowanym kurczakiem. U góry znajdziesz [twaróg](/pl/rezepte/nalesniki/twarog), [szpinak](/pl/rezepte/nalesniki/szpinak) i słodki [dżem](/pl/rezepte/nalesniki/dzem).",
 },
 "recipe-nalesniki-szpinak": {
 dishDe: "Naleśniki mit Spinat",
 dishPl: "Naleśniki ze szpinakiem",
 vibeDe: "grün, mild-salzig, alltagstauglich",
 vibePl: "zielone, łagodnie-słone, na co dzień",
 originDe:
 "Herzhafte vegetarische Naleśniki mit Spinat und Käse sind leichter als die Fleischvariante und klarer im Geschmack als die süßen Versionen. Beliebt sind sie vor allem, wenn der Tisch gemischt ist und jemand kein Fleisch essen möchte, denn der gleiche dünne Grundteig macht die vegetarische Füllung genauso vollwertig satt wie ihre herzhaften Geschwister.",
 originPl:
 "Wytrawne wegetariańskie naleśniki ze szpinakiem i serem są lżejsze niż wersja z mięsem i wyraźniejsze w smaku niż wersje słodkie. Lubiane są zwłaszcza wtedy, gdy stół jest mieszany i ktoś przy nim nie je mięsa, bo to samo cienkie ciasto sprawia, że wegetariański farsz syci równie dobrze jak jego wytrawni krewni. W wielu domach to właśnie ten wariant pojawia się najczęściej w okresie postu, kiedy mięso schodzi ze stołu, a naleśniki wciąż mają być sycące.",
 shopDe:
 "Für den Teig brauchst du Milch, Mehl und Eier; für die Füllung Spinat aus dem TK-Regal oder frisch, Knoblauch, Käse und Butter. Wie du Śmietana oder Schmand dazu reichst, erklärt der [Śmietana-Guide](/de/blog/smietana-schmand); die dünne Platte steht im [Naleśniki-Guide](/de/blog/nalesniki-guide). TK-Spinat ist dabei keine Notlösung, sondern spart nur den Schritt des Blanchierens, während der Geschmack fast gleich bleibt. Als Käse eignen sich Feta, Gouda oder ein kräftiger Bergkäse, je nachdem, wie salzig die Füllung werden soll.",
 shopPl:
 "Do ciasta potrzebujesz mleka, mąki i jajek; do farszu szpinaku z mrożonek lub świeżego, czosnku, sera i masła. Jak podawać śmietanę albo schmand, wyjaśnia [przewodnik po śmietanie](/pl/blog/smietana-czy-schmand); cienki placek opisuje [przewodnik naleśników](/pl/blog/nalesniki-przewodnik). Mrożony szpinak nie jest tu żadnym kompromisem, tylko skraca etap blanszowania, a smak zostaje prawie taki sam. Jako ser dobrze sprawdza się feta, gouda albo mocniejszy ser typu górskiego, zależnie od tego, jak słony ma być farsz.",
 techniqueDe:
 "Drücke den Spinat gründlich aus, bevor du die Füllung mischst, denn Restwasser macht die Rolle weich und lässt den Käse auslaufen. Fülle die Platten nicht zu heiß und brate die fertigen Rollen optional noch einmal in Butter goldbraun. Eine fein gehackte Knoblauchzehe mehr als im Grundrezept verstärkt den Geschmack, ohne die Füllung schwerer zu machen, und ein Löffel Frischkäse macht sie zusätzlich cremiger.",
 techniquePl:
 "Mocno odciśnij szpinak, zanim zmieszasz farsz, bo resztki wody rozmiękczają rolkę i wypychają ser. Nie napełniaj placków zbyt gorącym farszem, a gotowe rolki możesz jeszcze raz podsmażyć na maśle na złoto. Jeden ząbek czosnku więcej niż w podstawowym przepisie wzmacnia smak, bez obciążania farszu, a łyżka twarożku śmietankowego dodaje mu kremowości.",
 serveDe:
 "Serviere die Spinatrollen heiß mit etwas Butter oder leichter Sahnesoße. Sie wirken leichter als die Fleischvariante und passen gut, wenn der Tisch schon herzhaft genug ist. Zwei Rollen pro Person reichen meist als eigenständiges Abendessen, dazu passt ein einfacher Tomatensalat. Wer mag, reibt zum Schluss noch etwas Parmesan über die heißen Rollen, das bringt zusätzliche Würze ohne viel Aufwand.",
 servePl:
 "Podawaj rolki ze szpinakiem gorące z odrobiną masła albo lekkim sosem śmietanowym. Wychodzą lżejsze niż wersja z mięsem i pasują, gdy stół jest już wystarczająco treściwy. Dwie rolki na osobę zwykle wystarczą jako samodzielna kolacja, a do tego dobrze pasuje prosta sałatka z pomidorów. Kto chce, może na koniec zetrzeć nad gorącymi rolkami odrobinę parmezanu, to dodaje smaku bez większego wysiłku.",
 diasporaDe:
 "TK-Spinat aus dem deutschen Supermarkt funktioniert zuverlässig, entscheidend ist nur, dass du ihn wirklich trocken ausgedrückt hast, bevor er in die Platte kommt. Das macht diese Variante zu einer der schnellsten vegetarischen Optionen für einen Wochentag, an dem wenig Zeit für den Einkauf bleibt.",
 diasporaPl:
 "Mrożony szpinak z niemieckiego marketu działa pewnie, ważne jest tylko, żeby naprawdę odcisnąć go do sucha, zanim trafi na placek. To czyni ten wariant jedną z najszybszych opcji wegetariańskich na dzień powszedni, gdy na zakupy zostaje mało czasu.",
 mistakesDe:
 "Nasser Spinat, zu viel Käse, der beim Braten ausläuft, und zu dicke Pfannkuchen sind die typischen Stolpersteine. Lieber eine Probeplatte kalibrieren und die Füllung abtropfen lassen, bevor du den ganzen Stapel füllst. Auch zu wenig Knoblauch und Salz lässt die Füllung schnell fade wirken, weil Spinat selbst recht mild schmeckt.",
 mistakesPl:
 "Mokry szpinak, za dużo sera, który wypływa przy smażeniu, i zbyt grube placki to typowe potknięcia. Lepiej skalibrować jeden placek i odsączyć farsz, zanim napełnisz cały stos. Zbyt mało czosnku i soli też szybko czyni farsz mdłym, bo sam szpinak ma dość delikatny smak i bez przypraw łatwo ginie w cieście.",
 variantsDe:
 "Du kannst Feta unterheben, den Käse ganz weglassen oder oben zu [Twaróg](/de/rezepte/nalesniki/twarog), [Fleisch](/de/rezepte/nalesniki/fleisch) und [Marmelade](/de/rezepte/nalesniki/dzem) wechseln, den Überblick über alle Varianten gibt der [Naleśniki-Guide](/de/blog/nalesniki-guide). Etwas geriebene Muskatnuss in der Füllung ist eine kleine, aber wirkungsvolle Ergänzung, und ein Spritzer Zitrone hebt den erdigen Spinatgeschmack zusätzlich an.",
 variantsPl:
 "Możesz dodać fetę, pominąć ser albo przełączyć na [twaróg](/pl/rezepte/nalesniki/twarog), [mięso](/pl/rezepte/nalesniki/mieso) i [dżem](/pl/rezepte/nalesniki/dzem), orientację po wszystkich wariantach daje [przewodnik naleśników](/pl/blog/nalesniki-przewodnik). Odrobina startej gałki muszkatołowej w farszu to mały, ale skuteczny dodatek, a odrobina soku z cytryny dodatkowo podkreśla ziemisty smak szpinaku.",
 },
 "recipe-rosol": {
 dishDe: "Rosół",
 dishPl: "Rosół",
 vibeDe: "klar, golden, heilend und festlich",
 vibePl: "klarowny, złoty, leczniczy i odświętny",
 originDe:
 "Der Name Rosół stammt vom altpolnischen rozsolić ab, dem Auslösen von Salz, denn ursprünglich wurde damit gesalzenes, haltbar gemachtes Fleisch in Wasser entsalzt, bevor es genießbar war. Aus diesem Konservierungsschritt wurde über die Jahrhunderte die eigentliche Suppe, ein erstes Rezept steht bereits im Compendium Ferculorum von 1682, verfasst vom Hofkoch Stanisław Czerniecki für König Jan III. Sobieski, dessen Version bald als Rosół à la Czerniecki bekannt wurde. Aus dieser Zeit stammt auch die königliche Variante Rosół królewski, für die traditionell drei Fleischsorten gleichzeitig gezogen werden, etwa Rind oder Kalb, helles Geflügel wie Huhn oder Truthahn und dunkles Geflügel wie Ente oder Gans. Bis heute ist Rosół vor allem eines: die klare Hühnerbrühe des Sonntagsmittagessens, die als Vorsuppe vor dem eigentlichen Hauptgang serviert wird, außerdem gilt sie traditionell als bewährtes Hausmittel gegen Erkältungen, weshalb sie im Englischen manchmal scherzhaft „Polish penicillin“ genannt wird. Frische Fallnudeln als Einlage gehören zu einem eigenen Rezept, [Kluski kładzione](/de/rezepte/kluski-kladzione), das sich klar von Packungsnudeln unterscheidet.",
 originPl:
 "Nazwa rosół pochodzi od staropolskiego rozsolić, czyli usuwania soli, bo pierwotnie w wodzie odsalano zakonserwowane, solone mięso, żeby zrobić je jadalnym. Z tego etapu konserwacji przez wieki wykształciła się właściwa zupa, a pierwszy przepis znajduje się już w Compendium Ferculorum z 1682 roku, spisanym przez nadwornego kucharza Stanisława Czernieckiego dla króla Jana III Sobieskiego, którego wersja szybko zyskała nazwę rosołu à la Czerniecki. Z tamtych czasów pochodzi też królewski wariant, rosół królewski, do którego tradycyjnie gotuje się jednocześnie trzy rodzaje mięsa, na przykład wołowinę lub cielęcinę, białe mięso drobiowe jak kurczak czy indyk oraz ciemne jak kaczka lub gęś. Do dziś rosół to przede wszystkim klarowny bulion z kurczaka na niedzielny obiad, podawany jako pierwsze danie przed właściwym drugim, a tradycyjnie uznaje się go też za sprawdzony domowy lek na przeziębienie, dlatego po angielsku bywa żartobliwie nazywany polską penicyliną. Świeże kluski jako dodatek mają swój własny przepis, [kluski kładzione](/pl/rezepte/kluski-kladzione), który wyraźnie różni się od makaronu z paczki.",
 shopDe:
 "Nimm ein Suppenhuhn oder gute Keulen, Suppengrün, Piment, Lorbeer und Fadenudeln. Petersilienwurzel macht den Unterschied, im deutschen Markt findest du sie oft als Wurzelpetersilie. Klarheit und Schaum erklärt die [Rosół-Technik](/de/blog/rosol-technik).",
 shopPl:
 "Weź kurczaka na rosół albo dobre ćwiartki, włoszczyznę, ziele angielskie, liść laurowy i makaron nitki. Pietruszka korzeniowa robi różnicę. Klarowność i zbieranie szumowin opisuje [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol).",
 techniqueDe:
 "Setze das Fleisch kalt an, nimm den Schaum ab und lass die Brühe nie sprudelnd kochen, denn Zeit ist hier die eigentliche Hauptzutat. Klarheit kommt von Ruhe, nicht von Tricks allein. Für etwas mehr Farbe kannst du eine halbierte Zwiebel mit der Schnittfläche in einer trockenen Pfanne anrösten und mitkochen, sie darf dabei nur nicht verkohlen, sonst wird die Brühe bitter.",
 techniquePl:
 "Mięso zalej na starcie zimną wodą, zbieraj szumowiny i nie dopuszczaj do gwałtownego wrzenia, bo czas jest tu głównym składnikiem. Klarowność bierze się ze spokoju, nie z samych sztuczek. Dla koloru możesz opiec na suchej patelni przekrojoną cebulę i wrzucić ją do garnka, tylko nie może się spalić, bo bulion zgorzknieje.",
 serveDe:
 "Im Teller gehören Nudeln, Karottenstücke und Petersilie dazu; das Fleisch liegt separat oder mit in der Brühe. Wer frische Fallnudeln will, geht zu [Kluski kładzione](/de/rezepte/kluski-kladzione).",
 servePl:
 "Na talerzu pasują nitki, marchewka i pietruszka; mięso osobno albo w bulionie. Kto chce świeże kluski, idzie do [klusek kładzionych](/pl/rezepte/kluski-kladzione).",
 diasporaDe:
 "In Deutschland kocht man Rosół oft sonntags: Der Geruch füllt die Wohnung und reicht als Brühe oder Basis weit in die Woche hinein. Viele Familien frieren die klare Brühe in Portionen ein, sodass unter der Woche schnell eine wärmende Suppe oder Soßenbasis bereitsteht, ohne alles neu ansetzen zu müssen.",
 diasporaPl:
 "W Niemczech rosół często gotuje się w niedzielę: zapach wypełnia mieszkanie i wystarcza jako bulion lub baza daleko w tydzień. Wiele rodzin zamraża klarowny bulion w porcjach, dzięki czemu w tygodniu szybko powstaje rozgrzewająca zupa albo baza pod sos, bez konieczności gotowania od nowa.",
 mistakesDe:
 "Zu starkes Kochen trübt die Brühe, zu wenig Salz am Ende macht sie flach, und zu früh eingelegte Nudeln saugen Klarheit und Aroma. Gare die Nudeln separat und schmecke erst zum Schluss ab. Auch ein zu voller Topf verhindert das ruhige Ziehen, dann kocht die Brühe eher als dass sie sanft köchelt.",
 mistakesPl:
 "Zbyt mocne gotowanie mąci bulion, za mało soli na końcu spłaszcza smak, a zbyt wcześnie wrzucone nitki zabierają klarowność i aromat. Gotuj makaron osobno i doprawiaj dopiero na końcu. Zbyt pełny garnek też nie pozwala bulionowi spokojnie się gotować, wtedy zamiast delikatnie pyrkać, on się gwałtownie wrze. Warto też pilnować, żeby pokrywka nie leżała zbyt szczelnie, bo wtedy bulion łatwo się mętnieje od zbyt intensywnego wrzenia.",
 variantsDe:
 "Mit Rind gemischt, mit mehr Sellerie oder als Basis für andere Suppen bleibt Rosół flexibel. Die [Rosół-Technik](/de/blog/rosol-technik) hält die Sonntagsreferenz; als Einlage-Alternative stehen [Kluski kładzione](/de/rezepte/kluski-kladzione).",
 variantsPl:
 "Z wołowiną, z większą ilością selera albo jako baza innych zup rosół zostaje elastyczny. [Jak ugotować rosół](/pl/blog/jak-ugotowac-rosol) trzyma niedzielny wzorzec; alternatywą dodatku są [kluski kładzione](/pl/rezepte/kluski-kladzione).",
 },
 "recipe-fasolka": {
 dishDe: "Fasolka po bretońsku",
 dishPl: "Fasolka po bretońsku",
 vibeDe: "deftig, tomatenrot, ideal für hektische Wochentage",
 vibePl: "treściwa, pomidorowa, idealna na zwykły wieczór",
 originDe:
 "Mit der Bretagne hat Fasolka po bretońsku vermutlich nur den Namen gemeinsam. Im kulinarischen Wörterbuch von Alexandre Dumas aus dem Jahr 1873 taucht ein Rezept für haricots à la bretonne auf, es beschreibt aber grüne Bohnen in Buttersoße mit Zwiebel und Brühe, nicht den heutigen polnischen Topf mit Wurst und Tomate. Wahrscheinlicher stammt der Name aus der französischen Küchensprache selbst, in der à la bretonne Gerichte mit der weißen Bohnensorte coco de Paimpol aus der Bretagne bezeichnete, die dem polnischen Jaś optisch ähnelt. In Polen wird das Gericht schon in den 1920er-Jahren erwähnt, richtig populär wurde es aber erst in der PRL-Zeit in den staatlichen Milchbars, wo es günstig, sättigend und schnell zu kochen war. Je nach Region kam Kümmel wie in einer deutschen Gulaschsuppe dazu, das war in der Region Poznań üblich, oder Pilze und Paprika wie in einer Käferbohnensuppe in Kleinpolen. Mit der grünen [Fasolka szparagowa](/de/rezepte/fasolka-szparagowa), der warmen Bohnen-Beilage mit Butter, teilt der Topf nur den ersten Namensteil.",
 originPl:
 "Z Bretanią fasolkę po bretońsku łączy prawdopodobnie tylko nazwa. W słowniku kulinarnym Aleksandra Dumasa z 1873 roku pojawia się przepis na haricots à la bretonne, ale opisuje zieloną fasolkę w maślanym sosie z cebulą i bulionem, zupełnie inne danie niż dzisiejszy polski gulasz z kiełbasą i pomidorami. Bardziej prawdopodobne jest pochodzenie z francuskiego określenia à la bretonne, które w kuchni francuskiej oznaczało dania z białą fasolą coco de Paimpol z Bretanii, wizualnie bliską polskiemu Jasiowi. W Polsce nazwa pojawia się już w latach dwudziestych, ale naprawdę spopularyzowała się w czasach PRL w barach mlecznych, gdzie była tania, sycąca i szybka do przygotowania. W zależności od regionu dodawano kminek jak do niemieckiej zupy gulaszowej, co było typowe dla Poznańskiego, albo grzyby i paprykę, podobnie jak w niemieckiej zupie z fasoli karłowatej znanej jako Käferbohnensuppe, co bardziej kojarzy się z Małopolską. Z zieloną [fasolką szparagową](/pl/rezepte/fasolka-szparagowa), ciepłym dodatkiem z masłem, ten gulasz łączy tylko pierwsze słowo nazwy.",
 shopDe:
 "Weiße Bohnen aus Glas oder Dose, Kiełbasa oder Krakauer, Tomatenmark, Speck und Majoran reichen für den Topf. Grundlagen findest du im deutschen Supermarkt, bessere Wurst und aromatischen Majoran gibt es oft im [Polenladen](/de/blog/polenladen-einkaufen), welche Wurst wohin passt, zeigt der Guide zu [Kiełbasa-Arten](/de/blog/kielbasa-arten). Mehr zu Einkauf und Würzen liefert der [Fasolka-Guide](/de/blog/fasolka-po-bretonsku).",
 shopPl:
 "Biała fasola z puszki lub słoika, kiełbasa albo krakowska, koncentrat pomidorowy, boczek i majeranek wystarczą do garnka. Podstawy kupisz w niemieckim markecie, lepszą kiełbasę i aromatyczny majeranek znajdziesz w [polskim sklepie](/pl/blog/sklep-polski-zakupy), która kiełbasa dokąd pasuje, pokazuje przewodnik po [rodzajach kiełbasy](/pl/blog/rodzaje-kielbasy). Więcej o zakupach i przyprawach znajdziesz w [przewodniku po fasolce](/pl/blog/fasolka-po-bretonsku).",
 techniqueDe:
 "Brate zuerst Speck und Zwiebel an, dann die Wurstscheiben, danach kommt kurz angeröstetes Tomatenmark dazu, erst zum Schluss die Bohnen. Lass alles offen einkochen, bis der Löffel darin stehen bleibt, Majoran gehört erst gegen Ende in den Topf, damit er frisch bleibt und nicht bitter wird.",
 techniquePl:
 "Najpierw podsmaż boczek i cebulę, potem plastry kiełbasy, następnie krótko podsmażony koncentrat pomidorowy, a fasolę dodaj na końcu. Redukuj bez przykrycia, aż sos zgęstnieje na łyżce, majeranek dodaj dopiero pod koniec, żeby zachował świeżość i nie zgorzkniał.",
 serveDe:
 "Serviere die Fasolka heiß mit kräftigem Brot, eine Gewürzgurke daneben schneidet die Tomatenwärme und macht den Teller vollständig, ohne dass extra Fleisch nötig wäre.",
 servePl:
 "Podawaj fasolkę gorącą z mocnym chlebem, kiszony ogórek obok przecina pomidorowe ciepło i domyka talerz bez dodatkowego mięsa.",
 diasporaDe:
 "Nach einem Einkauf im Polenladen reicht oft eine Wurst und ein Glas Bohnen, und der Abend ist gerettet, genau diese Einfachheit macht das Gericht in deutschen Wohnungen so beliebt. Für Kinder ist die milde Tomatensoße meist unproblematisch, schärfer würzt du am besten erst auf dem eigenen Teller.",
 diasporaPl:
 "Po zakupach w polskim sklepie często wystarczy kiełbasa i słoik fasoli, a wieczór jest uratowany, właśnie ta prostota czyni danie tak lubianym w niemieckich mieszkaniach. Dla dzieci łagodny sos pomidorowy zwykle nie jest problemem, ostrzej możesz doprawić już na własnym talerzu. Wielu Polaków za granicą kojarzy fasolkę po bretońsku właśnie z barami mlecznymi czasów PRL, choć dziś gotuje się ją najczęściej w domu.",
 mistakesDe:
 "Bleibt der Topf zu wässrig, fehlt der Majoran oder landet die Wurst nur eingelegt statt angebraten, wirkt die Fasolka schnell flach. Röstaromen von Speck und Wurst tragen den Geschmack mehr als zusätzliches Tomatenmark. Verwechsle den Eintopf außerdem nicht mit [Fasolka szparagowa](/de/rezepte/fasolka-szparagowa), der ganz anderen, grünen Beilage.",
 mistakesPl:
 "Gdy garnek zostaje zbyt rzadki, brakuje majeranku albo kiełbasa ląduje tylko wrzucona, a nie podsmażona, fasolka smakuje płasko. Aromat z boczku i kiełbasy niesie smak bardziej niż dodatkowy koncentrat. Nie myl też tego gulaszu z [fasolką szparagową](/pl/rezepte/fasolka-szparagowa), zupełnie innym, zielonym dodatkiem.",
 variantsDe:
 "Du kannst mit Chili schärfer kochen, mehr Gemüse einrühren oder den Speck weglassen. Bei der Wurstwahl helfen [Kiełbasa-Arten](/de/blog/kielbasa-arten) und der [Polenladen](/de/blog/polenladen-einkaufen), die Tomaten-Bohnen-Basis bleibt dabei immer gleich.",
 variantsPl:
 "Możesz gotować ostrzej z chili, dodać więcej warzyw albo pominąć boczek. Przy wyborze wędliny pomagają [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy) i [polski sklep](/pl/blog/sklep-polski-zakupy), baza pomidorowo-fasolowa zawsze zostaje ta sama.",
 },
 "recipe-faworki": {
 dishDe: "Faworki",
 dishPl: "Faworki",
 vibeDe: "hauchdünn, knusprig, puderzuckerweiß",
 vibePl: "papierowo cienkie, chrupiące, w cukrze pudrze",
 originDe:
 "Der Name Faworki kommt vom französischen Wort faveur und bezeichnete ursprünglich die seidenen Bändchen, die Damen ihren Rittern als Zeichen der Zuneigung schenkten, die geschlungene Form des Gebäcks erinnert genau daran. Je nach Region heißt dasselbe Gebäck anders, in Zentralpolen und rund um Warschau setzte sich der gebildete Name Faworki durch, im Süden und auf Schlesisch sagt man eher Chrust, wegen der brüchigen, an Reisig erinnernden Textur, im Westen und Norden, etwa auf den Kujawy, ist Chruściki gebräuchlich. Gebacken wird traditionell zur Zapusty, dem Karneval vor der Fastenzeit, dessen Name selbst vom italienischen carne vale, Fleisch, lebe wohl, abstammt. Auf dem Land in Schlesien gehörte das Gebäck früher zu den Neujahrsbesuchen, bei denen junge Frauen mit selbst gebackenem Chrust ihre Backkünste zeigten. Ähnliche Gebäcke gibt es europaweit, in Deutschland als Liebesschleifen oder Rädchenkuchen, in den USA als angel wings. Einer Legende zufolge entstand die charakteristische Form durch einen Zufall im Mittelalter, als ein unerfahrener Konditorlehrling einen langen Teigstreifen versehentlich ins heiße Fett warf und dabei die geschlungene Schleife entdeckte, die dem Gebäck seinen Namen gab. Der weiche, mit Marmelade gefüllte Nachbar vom selben Tag sind die [Pączki](/de/rezepte/paczki), ein völlig anderer Hefeteig mit anderer Technik.",
 originPl:
 "Nazwa faworki pochodzi od francuskiego słowa faveur, którym określano wstążeczki wręczane rycerzom przez damy jako dowód przychylności, a skręcona forma ciastka nawiązuje właśnie do takiej wstążki. W różnych regionach to samo ciasto nazywa się inaczej, w centralnej Polsce i w Warszawie przyjęła się bardziej wykształcona nazwa faworki, na południu i na Śląsku mówi się częściej chrust, ze względu na łamliwą, przypominającą chrust w lesie konsystencję, a na zachodzie i północy, na przykład na Kujawach, używa się formy chruściki. Tradycyjnie piecze się je na zapusty, czyli karnawał przed Wielkim Postem, którego nazwa pochodzi od włoskiego carne vale, mięso, żegnaj. Na śląskiej wsi ciasto to należało kiedyś do noworocznych wizyt, podczas których młode panny częstowały gości własnoręcznie usmażonym chrustem, pokazując swoje umiejętności kulinarne. Podobne wypieki znajdziesz w całej Europie, w Niemczech jako Liebesschleifen albo Rädchenkuchen, w USA jako angel wings. Według legendy charakterystyczna forma powstała przez przypadek w średniowieczu, gdy niedoświadczony czeladnik cukierniczy przypadkowo wrzucił długi pasek ciasta do gorącego tłuszczu i tak odkrył skręconą pętelkę, która dała ciastku nazwę. Miękki, nadziewany marmoladą sąsiad tego samego dnia to [pączki](/pl/rezepte/paczki), zupełnie inne ciasto drożdżowe i inna technika.",
 shopDe:
 "Im deutschen Supermarkt findest du alles für den Teig: Weizenmehl, Eigelb, saure Sahne oder Schmand, Backpulver, Zucker, einen Schuss Wodka oder Rum, Frittieröl und Puderzucker. Den Feiertagskontext rund um [Tłusty Czwartek](/de/blog/tlusty-czwartek) erklärt der Guide, die reine Frittier-Technik vertieft [Faworki-Technik](/de/blog/faworki-technik).",
 shopPl:
 "W niemieckim markecie kupisz wszystko na ciasto: mąkę pszenną, żółtka, śmietanę, proszek do pieczenia, cukier, łyk wódki lub rumu, olej do smażenia i cukier puder. Kontekst święta wokół [Tłustego Czwartku](/pl/blog/tlusty-czwartek-przepisy) opisuje przewodnik, samą technikę smażenia pogłębia [technika faworków](/pl/blog/faworki-technika).",
 techniqueDe:
 "Knete den Teig lange und rolle ihn hauchdünn aus, dickere Stellen bleiben sonst innen roh. Forme die Schlingen, indem du ein Ende durch den Mittelschnitt ziehst, und frittiere bei 170 bis 180 Grad in nicht zu vollem Öl. Lass die Schleifen gut abtropfen und bestäube sie noch warm, der Alkohol im Teig reduziert dabei zusätzlich die Ölaufnahme.",
 techniquePl:
 "Długo wyrabiaj ciasto i rozwałkuj je papierowo cienko, grubsze miejsca zostają inaczej surowe w środku. Pętelki formuj, przeciągając jeden koniec przez nacięcie na środku, i smaż w temperaturze 170 do 180 stopni, nie wkładając na raz za dużo kawałków. Dobrze odsącz i posyp jeszcze ciepłe, alkohol w cieście dodatkowo zmniejsza wchłanianie tłuszczu.",
 serveDe:
 "Serviere die Faworki noch warm mit viel Puderzucker, zum Kaffee oder als Teil des Tłusty-Czwartek-Tellers neben [Pączki](/de/rezepte/paczki).",
 servePl:
 "Podawaj faworki jeszcze ciepłe, obficie w cukrze pudrze, do kawy albo jako część talerza na Tłusty Czwartek obok [pączków](/pl/rezepte/paczki).",
 diasporaDe:
 "In Deutschland ist es oft leichter, Faworki selbst zu backen, als gute frische irgendwo zu kaufen. Ein Nachmittag und ein Topf heißes Öl reichen, und der Duft in der Wohnung erinnert viele sofort an die Küche der Großmutter.",
 diasporaPl:
 "W Niemczech często łatwiej jest samemu usmażyć faworki, niż znaleźć dobre, świeże w sklepie. Wystarczy jedno popołudnie i garnek gorącego oleju, a zapach w mieszkaniu przywołuje wielu wspomnienie kuchni babci.",
 mistakesDe:
 "Zu dicker Teig, zu kaltes Öl, ein überfüllter Topf und Puderzucker erst nach dem vollständigen Abkühlen machen Faworki ölig oder weich statt knusprig. Frittiere lieber in kleineren Portionen und bestäube sofort nach dem Abtropfen.",
 mistakesPl:
 "Za grube ciasto, za chłodny olej, przepełniony garnek i cukier puder dopiero po całkowitym wystygnięciu robią faworki tłuste albo miękkie, a nie chrupiące. Lepiej smażyć mniejszymi partiami i posypywać od razu po odsączeniu.",
 variantsDe:
 "Zitronenschale im Teig gibt eine frische Note, wer nicht frittieren möchte, backt eine knusprigere, aber andere Variante im Ofen. Der kulturelle Rahmen bleibt [Tłusty Czwartek](/de/blog/tlusty-czwartek), weich und gefüllt sind dagegen die [Pączki](/de/rezepte/paczki).",
 variantsPl:
 "Skórka cytrynowa w cieście dodaje świeżości, kto nie chce smażyć, może upiec chrupszą, ale inną wersję w piekarniku. Kontekst kulturowy zostaje przy [Tłustym Czwartku](/pl/blog/tlusty-czwartek-przepisy), miękkie i nadziewane są za to [pączki](/pl/rezepte/paczki).",
 },
 "recipe-pierogi-meat": {
 dishDe: "Pierogi mit Fleisch",
 dishPl: "Pierogi z mięsem",
 vibeDe: "herzhaft, gedämpft, Sonntagsstolz",
 vibePl: "sycące, gotowane, niedzielna duma",
 originDe:
 "Pierogi mit Fleisch sind in vielen Regionen die Variante für Gäste und Festtage, während die Füllung aus Kartoffel und Twaróg, [Pierogi ruskie](/de/rezepte/pierogi/ruskie), eher für den Alltag steht und die Kraut-Pilz-Füllung fest an die Wigilia gebunden bleibt. Gut gedünstetes Hackfleisch mit Zwiebel und Majoran bildet die Basis, schlicht in der Zutatenliste, aber präzise in der Zubereitung, denn das Fleisch darf niemals roh in den Teig kommen und muss vorher vollständig durchgebraten und abgekühlt sein. Historisch war Fleisch in ärmeren Haushalten die teuerste aller Pierogi-Füllungen, deshalb kam sie seltener auf den Tisch als die genügsamere Kartoffelvariante, und genau dieser Ursprung erklärt, warum die Fleischfüllung bis heute mit Sonntag, Gästen und einem gewissen Anlass verbunden bleibt statt mit einem gewöhnlichen Wochentag. Wer viele Gäste erwartet, formt oft direkt die doppelte Menge, denn Fleisch-Pierogi lassen sich hervorragend einfrieren und verlieren beim späteren Aufkochen kaum an Textur.",
 originPl:
 "Pierogi z mięsem to w wielu domach wariant gościnny i świąteczny, podczas gdy [pierogi ruskie](/pl/rezepte/pierogi/ruskie) z ziemniakiem i twarogiem zostają bardziej codzienne, a farsz z kapusty i grzybów jest ściśle związany z Wigilią. Dobrze podsmażone mięso mielone z cebulą i majerankiem tworzy podstawę, prostą w składnikach, ale precyzyjną w wykonaniu, bo mięsa nigdy nie wkłada się surowego, tylko zawsze wcześniej dokładnie podsmażone i ostudzone. Historycznie mięso było w skromniejszych domach najdroższym z farszy pierogowych, dlatego rzadziej trafiało na stół niż bardziej przystępny ziemniak, i właśnie to pochodzenie wyjaśnia, czemu farsz mięsny do dziś wiąże się bardziej z niedzielą i gośćmi niż ze zwykłym dniem tygodnia. Kto planuje przyjęcie większej liczby gości, często od razu lepi podwójną porcję, bo pierogi z mięsem świetnie się mrożą i po ponownym ugotowaniu prawie nie zmieniają konsystencji.",
 shopDe:
 "Gemischtes Hack oder eine Mischung aus Rind und Schwein funktionieren beide gut, und Majoran ist oft aromatischer, wenn er aus dem [Polenladen](/de/blog/polenladen-einkaufen) statt aus dem deutschen Gewürzregal kommt. Butter und Zwiebel bekommst du überall, für Teig und Formen helfen der [Pierogi-Teig-Guide](/de/blog/pierogi-teig) und die [Teigmaschine](/de/blog/teigmaschine-pierogi), hier in der Fleischvariante zählt aber vor allem die Füllung selbst.",
 shopPl:
 "Mięso mielone mieszane albo wołowo-wieprzowe działa równie dobrze, a majeranek jest często lepszy ze [sklepu polskiego](/pl/blog/sklep-polski-zakupy) niż z niemieckiego regału z przyprawami. Masło i cebulę kupisz wszędzie, do ciasta i lepienia pomagają [przewodnik po cieście](/pl/blog/ciasto-na-pierogi) i [robot do ciasta](/pl/blog/robot-do-ciasta-pierogi), tu jednak liczy się przede wszystkim sam farsz mięsny.",
 techniqueDe:
 "Portioniere die Füllung immer kalt, verschließe die Ränder fest zwischen den Fingern und gare die Pierogi in leicht siedendem, nicht kochendem Salzwasser. Goldene Butterzwiebel oder eine klare Soße gehören für viele Familien fest dazu und sind kein optionales Extra, sondern Teil des Gerichts, mehr zum Grundteig liefert der [Pierogi-Teig-Guide](/de/blog/pierogi-teig).",
 techniquePl:
 "Zawsze porcjuj farsz na zimno, szczelnie sklejaj brzegi między palcami i gotuj pierogi w lekko wrzącej, a nie gwałtownie bulgotującej, osolonej wodzie. Złota cebulka na maśle albo jasny sos są dla wielu rodzin obowiązkowym dodatkiem, a nie tylko opcją, więcej o samym cieście znajdziesz w [przewodniku po cieście na pierogi](/pl/blog/ciasto-na-pierogi).",
 serveDe:
 "Serviere die Fleischpierogi heiß mit goldener Zwiebel oder einer leichten Brühe. Reste brätst du am nächsten Tag einfach in der Pfanne auf, manche mögen sie dann sogar lieber, weil die Naht dabei schön knusprig wird.",
 servePl:
 "Podawaj pierogi z mięsem gorące ze złotą cebulą albo lekkim bulionem. Resztki podsmażasz następnego dnia na patelni, niektórzy wolą je wtedy nawet bardziej niż świeżo ugotowane, bo szew robi się wtedy chrupiący.",
 diasporaDe:
 "Fleisch-Pierogi sind in vielen Familien Event-Kochen, einmal viel Aufwand, dafür viele Portionen zum Einfrieren, die [Freezer-Boxen](/de/blog/freezer-boxen) für die Diaspora besonders praktisch machen. In Deutschland kommen sie oft am Sonntag auf den Tisch, irgendwo zwischen den alltäglichen Ruskie und der Kraut-Pilz-Füllung, die eher der Wigilia vorbehalten bleibt, und gerade weil ein ganzer Nachmittag fürs Formen draufgeht, lohnt es sich, direkt die doppelte Menge zu machen und einzufrieren. Tiefgekühlte Fleisch-Pierogi wandern dann roh, ohne vorheriges Aufkochen, direkt vom Gefrierfach ins siedende Salzwasser, das spart an einem hektischen Wochentag die halbe Küchenarbeit.",
 diasporaPl:
 "Pierogi z mięsem to w wielu domach gotowanie na okazję, duży wysiłek w weekend, ale za to wiele porcji do zamrożenia, do czego dobrze służą [pudełka na zamrażarkę](/pl/blog/pudelka-na-zamrazarke). W Niemczech trafiają na stół często w niedzielę, gdzieś pomiędzy codziennymi ruskimi i wigilijną kapustą z grzybami, a skoro cały popołudnie i tak schodzi na lepienie, warto od razu zrobić podwójną porcję i zamrozić resztę. Zamrożone pierogi z mięsem wędrują później prosto z zamrażarki, surowe i bez rozmrażania, do wrzącej osolonej wody, co w zabiegany dzień tygodnia oszczędza połowę pracy w kuchni.",
 mistakesDe:
 "Rohe oder zu wenig ausgekühlte Füllung, eine zu nasse Masse und zu aggressives Kochen lassen die Nähte aufplatzen. Teste am besten zuerst eine kleine Charge, bevor du große Mengen formst, so kannst du Würzung und Verschluss früh genug korrigieren.",
 mistakesPl:
 "Surowy albo niedostatecznie ostudzony farsz, zbyt mokra masa i zbyt gwałtowne gotowanie powodują, że szwy się otwierają. Lepiej najpierw przetestować małą partię, zanim ulepisz dużą ilość, wtedy szybciej poprawisz przyprawy i sposób zamykania.",
 variantsDe:
 "Wechsle zu [Ruskie](/de/rezepte/pierogi/ruskie), zu [Kraut-Pilze](/de/rezepte/pierogi/kraut-pilze) oder zur süßen Variante mit [Heidelbeeren](/de/rezepte/pierogi/jagody). Der [Pierogi-Teig-Guide](/de/blog/pierogi-teig) und die [Teigmaschine](/de/blog/teigmaschine-pierogi) helfen dir bei Teig, Formen und Einfrieren gleichermaßen.",
 variantsPl:
 "Przełącz na [ruskie](/pl/rezepte/pierogi/ruskie), na [kapustę z grzybami](/pl/rezepte/pierogi/kapusta-grzyby) albo na słodkie [jagody](/pl/rezepte/pierogi/jagody). [Przewodnik po cieście](/pl/blog/ciasto-na-pierogi) i [robot do ciasta](/pl/blog/robot-do-ciasta-pierogi) pomagają jednocześnie przy cieście, formowaniu i mrożeniu.",
 },
 "recipe-pierogi-cabbage": {
 dishDe: "Pierogi mit Kraut und Pilzen",
 dishPl: "Pierogi z kapustą i grzybami",
 vibeDe: "würzig, festlich, ohne Fleisch",
 vibePl: "aromatyczne, odświętne, bez mięsa",
 originDe:
 "Kraut und getrocknete Pilze gehören zur Wigilia und zur Fastenzeit und zählen zu den ältesten Pierogi-Füllungen überhaupt, weil sie ganz ohne Fleisch auskommen und damit sowohl zum Fasten als auch zum strikt fleischlosen Heiligabend-Essen passen, das nach katholischer Tradition aus zwölf Gängen ohne Fleisch besteht. Sauerkraut muss dafür gut ausgedrückt sein, bevor es mit Pilzen und Zwiebel langsam geschmort wird, denn nur eine trockene Füllung hält den Teig beim Kochen dicht. Anders als die Fleischfüllung, die in ärmeren Zeiten eher Luxus war, gehörte diese Kraut-Pilz-Version gerade wegen ihrer Fleischlosigkeit selbstverständlich zu den strengen Fastenregeln, wodurch sie über Generationen zur festen, fast unveränderlichen Wigilia-Tradition wurde, während [Pierogi mit Fleisch](/de/rezepte/pierogi/fleisch) den Gästen und dem Sonntag vorbehalten blieben. Die getrockneten Pilze verweisen zudem auf die alte polnische Tradition des herbstlichen Pilzesammelns im Wald, eine Praxis, die viele Familien bis heute jährlich fortführen, bevor die getrockneten Vorräte den ganzen Winter über für Suppen und Füllungen reichen müssen.",
 originPl:
 "Kapusta kiszona i suszone grzyby należą do Wigilii i postu i są jednym z najstarszych farszy pierogowych w ogóle, bo obchodzą się bez mięsa, co sprawia, że pasują zarówno do postu, jak i do ściśle bezmięsnej kolacji wigilijnej, która według katolickiej tradycji składa się z dwunastu bezmięsnych dań. Kapusta musi być wcześniej dobrze odciśnięta, zanim zostanie duszona z grzybami i cebulą, bo tylko sucha masa utrzyma ciasto szczelne podczas gotowania. W przeciwieństwie do farszu mięsnego, który w skromniejszych czasach bywał luksusem, ta wersja z kapustą i grzybami właśnie dzięki swojej bezmięsności naturalnie wpisywała się w ścisłe reguły postu, przez co przez pokolenia stała się niemal niezmiennym elementem Wigilii, podczas gdy [pierogi z mięsem](/pl/rezepte/pierogi/mieso) zostawały dla gości i na niedzielę. Suszone grzyby przypominają też o dawnej polskiej tradycji jesiennego grzybobrania w lesie, praktyce, którą wiele rodzin kontynuuje do dziś każdego roku, zanim suszone zapasy muszą wystarczyć na całą zimę do zup i farszów.",
 shopDe:
 "Die getrockneten Pilze, meist Steinpilze aus eigenem Wald oder aus dem [Polenladen](/de/blog/polenladen-einkaufen), geben dieser Füllung die tiefe Umami-Note, die sonst eine Fleischbrühe liefern würde, und verbinden das Ganze mit der historischen polnischen Tradition des Pilzesammelns im Herbst. Zwiebel, Majoran und Pfeffer runden den Geschmack ab, zum Teig hilft der [Pierogi-Teig-Guide](/de/blog/pierogi-teig), wer selbst Sauerkraut fermentiert, findet mehr dazu im [Fermentier-Guide](/de/blog/kiszenie-guide).",
 shopPl:
 "Suszone grzyby, najczęściej borowiki z własnego lasu albo ze [sklepu polskiego](/pl/blog/sklep-polski-zakupy), dają temu farszowi głęboką, umami notę, jaką inaczej dałby bulion mięsny, i łączą całość z dawną polską tradycją grzybobrania jesienią. Cebula, majeranek i pieprz dopełniają smak, do ciasta pomaga [przewodnik po cieście](/pl/blog/ciasto-na-pierogi), a kto sam kisi kapustę, znajdzie więcej w [przewodniku o kiszeniu](/pl/blog/przewodnik-kiszenie).",
 techniqueDe:
 "Wichtige Tipps zur Zubereitung: Die Füllung muss vollständig vorgekocht und abgekühlt werden, sonst reißt der heiße Teig beim Formen. Die Ränder solltest du doppelt verschließen, um ein Auslaufen beim Kochen zu verhindern, und das Wasser nur leicht köcheln lassen statt heftig sprudeln, mehr zum Grundteig liefert der [Pierogi-Teig-Guide](/de/blog/pierogi-teig).",
 techniquePl:
 "Ważne wskazówki do przygotowania: farsz musi być całkowicie wcześniej ugotowany i ostudzony, inaczej gorące ciasto pęka podczas formowania. Brzegi warto zlepiać podwójnie, żeby nic nie wypłynęło podczas gotowania, a wodę trzymać w lekkim, a nie gwałtownym wrzeniu, więcej o samym cieście w [przewodniku po cieście na pierogi](/pl/blog/ciasto-na-pierogi).",
 serveDe:
 "Sie werden traditionell mit Zwiebeln in Butter oder ganz pur ohne Sahne gereicht, um die Säure der Füllung zu bewahren. Zur Weihnachtsvigilie stehen sie oft neben dem [Barszcz](/de/rezepte/barszcz) auf dem Tisch, werden aber nicht darin mitgekocht, sondern erst am Tisch dazugegeben.",
 servePl:
 "Podaje się je tradycyjnie z cebulką na maśle albo całkiem czyste, bez śmietany, żeby zachować kwasowość farszu. Na Wigilię często stoją obok [barszczu](/pl/rezepte/barszcz) na stole, ale nie są w nim gotowane, tylko dodawane dopiero przy stole.",
 diasporaDe:
 "Für viele in Deutschland ist genau dieser Geschmack die Essenz des Heiligabends. Die Planung lohnt sich: die Füllung schon am Vortag vorbereiten, den Teig und das Formen aber erst am Feiertag selbst, damit der Abend deutlich entspannter bleibt, wie es auch der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan) empfiehlt.",
 diasporaPl:
 "Dla wielu w Niemczech właśnie ten smak jest esencją Wigilii. Warto zaplanować farsz dzień wcześniej, a ciasto i lepienie zostawić na sam dzień święta, dzięki temu wieczór zostaje wyraźnie spokojniejszy, tak jak podsuwa też [menu wigilijne](/pl/blog/menu-wigilijne).",
 mistakesDe:
 "Die häufigsten Fehler sind zu wässriges Kraut, zu wenig Pilze und eine noch zu heiße Füllung beim Formen. Die Füllung sollte eher trocken geschmort werden statt in viel Flüssigkeit, und sie muss vollständig kalt sein, bevor sie in den Teig kommt.",
 mistakesPl:
 "Najczęstsze błędy to za mokra kapusta, za mało grzybów i wciąż za gorący farsz przy lepieniu. Farsz lepiej dusić na sucho niż w dużej ilości płynu, i musi być całkowicie zimny, zanim trafi do ciasta.",
 variantsDe:
 "Mit mehr Pfeffer oder zusätzlichen Pilzen wird die Füllung intensiver. Oben wechselst du zu [Ruskie](/de/rezepte/pierogi/ruskie), [Fleisch](/de/rezepte/pierogi/fleisch) oder [Heidelbeeren](/de/rezepte/pierogi/jagody). Fürs Wigilia-Menü hilft der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan), einen elastischen Teig vertieft der Artikel zum [Pierogi-Teig](/de/blog/pierogi-teig).",
 variantsPl:
 "Z większą ilością pieprzu albo dodatkowych grzybów farsz staje się intensywniejszy. U góry przełączysz na [ruskie](/pl/rezepte/pierogi/ruskie), [mięso](/pl/rezepte/pierogi/mieso) albo [jagody](/pl/rezepte/pierogi/jagody). Przy menu wigilijnym pomaga [menu wigilijne](/pl/blog/menu-wigilijne), elastyczne ciasto pogłębia [ciasto na pierogi](/pl/blog/ciasto-na-pierogi).",
 },
 "recipe-placki-cukinia": {
 dishDe: "Placki mit Zucchini",
 dishPl: "Placki z cukinią",
 vibeDe: "leichter, sommerlich, knusprig",
 vibePl: "lżejsze, letnie, chrupiące",
 originDe:
 "Wenn Zucchini im Garten oder im Supermarktregal überhandnehmen, rettet die Mischung mit Kartoffel die Sommersaison. Etwa zwei Drittel Kartoffel und ein Drittel Zucchini behalten die klassische Placki-Technik bei, du brauchst dabei nur deutlich mehr Kraft beim Auspressen, weil Zucchini viel mehr Wasser enthält. Anders als die reine [Kartoffelvariante](/de/rezepte/placki/ziemniaczane), die deftig und ganzjährig auf den Tisch kommt, ist diese Mischung eine bewusst sommerliche, leichtere Abwandlung, die vor allem dann entsteht, wenn im eigenen Garten oder auf dem Wochenmarkt gerade zu viele Zucchini reifen, um sie alle roh zu verarbeiten. Weil Zucchini erst im 19. Jahrhundert aus Italien nach Mitteleuropa kam, ist diese Variante deutlich jünger als der Kartoffelklassiker und in polnischen Kochbüchern erst vergleichsweise spät aufgetaucht, dafür hat sie sich in vielen Diaspora-Küchen umso schneller als praktische Sommerlösung durchgesetzt.",
 originPl:
 "Gdy cukinia zalewa ogród albo promocję w sklepie, mieszanka z ziemniakiem ratuje letni sezon. Około dwóch trzecich ziemniaka i jednej trzeciej cukinii zachowuje klasyczną technikę placków, potrzebujesz tylko wyraźnie więcej siły przy odciskaniu, bo cukinia zawiera znacznie więcej wody. W przeciwieństwie do czysto [ziemniaczanej wersji](/pl/rezepte/placki/ziemniaczane), która jest sycąca i całoroczna, ta mieszanka to świadomie letnia, lżejsza odmiana, która powstaje najczęściej właśnie wtedy, gdy w ogrodzie albo na targu dojrzewa więcej cukinii, niż da się zjeść na surowo. Cukinia trafiła do Europy Środkowej z Włoch dopiero w XIX wieku, więc ten wariant jest wyraźnie młodszy niż klasyczny placek ziemniaczany i w polskich książkach kucharskich pojawił się względnie późno, za to w wielu domach w diasporze przyjął się bardzo szybko jako praktyczne letnie rozwiązanie.",
 shopDe:
 "Nimm festkochende oder vorwiegend festkochende Kartoffeln, eine mittelgroße Zucchini, ein Ei und wenig Mehl. Śmietana findest du im [Polenladen](/de/blog/polenladen-einkaufen) oder als Schmand im Kühlregal, mehr zum Unterschied liefert das [Śmietana-Lexikon](/de/blog/smietana-schmand), die genauen Verhältnisse und die Technik vertieft der [Placki-Guide](/de/blog/placki-guide). Achte beim Kauf der Zucchini auf eine feste, glänzende Schale ohne weiche Stellen, ältere Exemplare enthalten oft noch mehr Wasser und größere Kerne, die du vor dem Reiben besser entfernst.",
 shopPl:
 "Weź ziemniaki raczej mączyste lub uniwersalne, średnią cukinię, jajko i odrobinę mąki. Śmietanę kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy) albo jako schmand, różnicę wyjaśnia wpis [śmietana czy schmand](/pl/blog/smietana-czy-schmand), dokładne proporcje i technikę pogłębia [przewodnik po plackach](/pl/blog/placki-przewodnik). Przy kupowaniu cukinii zwróć uwagę na twardą, błyszczącą skórkę bez miękkich miejsc, starsze egzemplarze mają zwykle więcej wody i większe pestki, które lepiej usunąć przed tarciem.",
 techniqueDe:
 "Zucchini gibt deutlich mehr Flüssigkeit ab als Kartoffel, presse die Masse deshalb kräftig aus, sonst bleiben die Placki weich statt knusprig. Halte die Pfanne durchgehend heiß und brate in kleinen Chargen, damit die Temperatur nicht einbricht, eine [Gusseisenpfanne](/de/blog/gusseisenpfanne) hilft dabei besonders zuverlässig.",
 techniquePl:
 "Cukinia puszcza znacznie więcej wody niż ziemniak, dlatego mocno odciśnij masę, inaczej placki będą miękkie, a nie chrupiące. Trzymaj patelnię stale gorącą i smaż małymi partiami, żeby temperatura nie spadła, w tym szczególnie pomaga [patelnia żeliwna](/pl/blog/patelnia-zelivna).",
 serveDe:
 "Serviere sie heiß mit Śmietana oder einem leichten Salat, etwa Gurke mit Dill oder einem einfachen Tomatensalat. Sie wirken sommerlich und deutlich leichter als reine Kartoffelplacki und ersetzen so den schweren Sonntagsteller an heißen Tagen, ohne dass dabei etwas an Geschmack verloren geht.",
 servePl:
 "Podawaj je gorące ze śmietaną albo lekką sałatą, na przykład z ogórkiem i koperkiem albo z prostą sałatką pomidorową. Wychodzą letnie i wyraźnie lżejsze niż same ziemniaczane, zastępując tym samym ciężki niedzielny talerz w upalne dni, bez utraty smaku.",
 diasporaDe:
 "Praktisch, wenn deutsche Sommer heiß sind und schwere Kartoffelgerichte zu viel wirken. Kinder essen Zucchini in den Placki oft lieber als im Salat, und du brauchst dafür keine Spezialzutaten aus dem Polenladen, alles findet sich im normalen deutschen Supermarkt. Wenn im eigenen Garten oder beim Nachbarn gerade zu viele Zucchini gleichzeitig reif werden, ist diese Variante oft die schnellste Art, größere Mengen sinnvoll zu verwerten, ohne dass am Ende alles im Kompost landet.",
 diasporaPl:
 "Praktyczne, gdy niemieckie lato jest gorące, a ciężkie ziemniaki to za dużo na talerzu. Dzieci często wolą cukinię w plackach niż w sałatce, a do tego przepisu nie potrzebujesz żadnych specjalnych składników, wszystko znajdziesz w zwykłym niemieckim supermarkecie. Gdy w ogrodzie albo u sąsiada dojrzewa naraz zbyt dużo cukinii, ten wariant bywa najszybszym sposobem na sensowne wykorzystanie większych ilości, zamiast wyrzucania warzyw na kompost.",
 mistakesDe:
 "Zu wenig ausgedrücktes Wasser, zu viel Teig auf einmal in der Pfanne und eine kalte Pfanne lassen die Placki weich statt knusprig werden. Ein Küchentuch oder ein Nussbeutel hilft beim gründlichen Auspressen, und die erste kleine Testcharge zeigt sofort, ob die Masse stimmt. Auch zu viel Mehl macht die Placki eher fad und teigig, halte dich deshalb an eine sparsame Menge und verlasse dich stattdessen auf das gründliche Auspressen der Feuchtigkeit.",
 mistakesPl:
 "Za słabe odciśnięcie, za dużo ciasta naraz na patelni i zimna patelnia zostawiają placki miękkie, a nie chrupiące. Ręcznik kuchenny albo worek do odciskania pomaga przy dokładnym wyciśnięciu, a pierwsza mała partia testowa od razu pokaże, czy masa jest dobra. Za dużo mąki też robi placki mdłymi i ciastowatymi, trzymaj się więc skromnej ilości i postaw raczej na dokładne odciśnięcie wilgoci z masy.",
 variantsDe:
 "Wechsle zurück zu den klassischen [Kartoffelplacki](/de/rezepte/placki/ziemniaczane), zur [Käsevariante](/de/rezepte/placki/mit-kaese) oder zur [Apfelvariante](/de/rezepte/placki/mit-apfel) in der Placki-Familie. Der [Placki-Guide](/de/blog/placki-guide) vergleicht alle Varianten und die jeweils nötige Wasserarbeit.",
 variantsPl:
 "Wróć do klasycznych [ziemniaczanych](/pl/rezepte/placki/ziemniaczane), do wersji [z serem](/pl/rezepte/placki/ser) albo [z jabłkiem](/pl/rezepte/placki/jablka) w rodzinie placków. [Przewodnik po plackach](/pl/blog/placki-przewodnik) porównuje wszystkie warianty i potrzebną pracę z wodą.",
 },
 "recipe-placki-ser": {
 dishDe: "Placki mit Käse",
 dishPl: "Placki z serem",
 vibeDe: "herzhaft, cremig, knusprig außen",
 vibePl: "sycące, kremowe, chrupiące na zewnątrz",
 originDe:
 "Twaróg in der geriebenen Kartoffelmasse macht die Placki herzhafter und cremiger, ganz ohne separate Füllung wie bei [Pierogi](/de/rezepte/pierogi/ruskie), weil der Käse direkt in den Teig eingearbeitet wird. Er muss dafür trocken und krümelig sein, sonst wird die ganze Masse zu weich und brät nicht mehr knusprig aus. Diese Variante ist in vielen Familien eine beliebte Alltagslösung, weil Twaróg ohnehin oft im Kühlschrank steht und sich damit aus der [Kartoffelplacki-Basis](/de/rezepte/placki/ziemniaczane) in wenigen Minuten ein sättigenderer, cremigerer Teller machen lässt, ohne dass eine eigene Füllung vorbereitet werden muss. Twaróg selbst ist in Polen seit Jahrhunderten der Alltagskäse schlechthin, deutlich verbreiteter als gereifte Käsesorten, und genau diese Alltäglichkeit erklärt, warum er so selbstverständlich auch in der Placki-Masse landet, statt nur als eigenständige Beilage aufzutauchen.",
 originPl:
 "Twaróg w startej masie ziemniaczanej czyni placki bardziej sycącymi i kremowymi, całkowicie bez osobnego nadzienia jak w [pierogach](/pl/rezepte/pierogi/ruskie), bo ser wmieszany jest prosto w ciasto. Musi być suchy i kruchy, inaczej cała masa robi się za miękka i nie wychodzi chrupiąca. Ten wariant to w wielu domach popularne rozwiązanie na co dzień, bo twaróg zwykle i tak stoi w lodówce, a z [ziemniaczanej bazy placków](/pl/rezepte/placki/ziemniaczane) w kilka minut powstaje bardziej sycący i kremowy talerz, bez konieczności przygotowywania osobnego nadzienia. Twaróg od wieków jest w Polsce codziennym serem, znacznie bardziej powszechnym niż sery długo dojrzewające, i właśnie ta codzienność wyjaśnia, czemu tak naturalnie trafia też do masy placków, a nie tylko na talerz jako osobny dodatek.",
 shopDe:
 "Kartoffeln und Twaróg holst du am besten im [Polenladen](/de/blog/polenladen-einkaufen), der [Twaróg-Guide](/de/blog/twarog-deutschland) erklärt die passende Konsistenz für Deutschland. Nimm nur gut abgetropften Magerquark, zur Technik und Hitze helfen der [Placki-Guide](/de/blog/placki-guide) und die [Gusseisenpfanne](/de/blog/gusseisenpfanne). Fehlt Twaróg gerade, funktioniert auch griechischer Joghurt in kleiner Menge als Notlösung, allerdings wird die Masse dabei etwas milder und weniger krümelig als mit echtem Twaróg.",
 shopPl:
 "Ziemniaki i twaróg najpewniej kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), a [przewodnik po twarogu](/pl/blog/twarog-w-niemczech) wyjaśnia właściwą konsystencję w Niemczech. Bierz tylko dobrze odsączony quark, do techniki i żaru pomagają [przewodnik po plackach](/pl/blog/placki-przewodnik) oraz [patelnia żeliwna](/pl/blog/patelnia-zelivna). Gdy akurat nie masz twarogu, w małej ilości zadziała też jogurt grecki jako rozwiązanie zastępcze, choć masa wtedy wychodzi łagodniejsza i mniej krucha niż z prawdziwym twarogiem.",
 techniqueDe:
 "Lasse den Twaróg vorher abtropfen, vermische ihn mit der Kartoffelmasse und gib nicht zu viel Mehl dazu. Backe die Placki heiß aus, innen schmilzt der Käse leicht, während außen die Kruste schließen muss, sonst wird der ganze Teller weich statt knusprig, dieselben Grundregeln erklärt ausführlicher der [Placki-Guide](/de/blog/placki-guide).",
 techniquePl:
 "Wcześniej odsącz twaróg, wymieszaj go z masą ziemniaczaną i nie dokładaj za dużo mąki. Smaż placki na gorąco, w środku ser lekko się topi, a na zewnątrz skórka musi się zamknąć, inaczej cały talerz wychodzi miękki, a nie chrupiący, te same podstawowe zasady szerzej opisuje [przewodnik po plackach](/pl/blog/placki-przewodnik). Formuj placki raczej niewielkie i płaskie, bo grubsze potrzebują dłużej, żeby ser w środku zdążył się dogrzać, a skórka nie zdąży się przypalić.",
 serveDe:
 "Serviere sie heiß mit Śmietana, einem Kräuterdip oder direkt neben [Gulasz](/de/rezepte/gulasz-wieprzowy). Der Teller soll deftig und ehrlich wirken, nicht dekorativ aufgebaut, sondern vor allem sättigend.",
 servePl:
 "Podawaj je gorące ze śmietaną, dipem ziołowym albo obok [gulaszu](/pl/rezepte/gulasz-wieprzowy). Talerz ma być treściwy i szczery, bez ozdób, za to naprawdę sycący.",
 diasporaDe:
 "Wenn Twaróg im Polenladen zur Hand ist, wird daraus ein schneller Sonntags-Trick, eine Packung reicht meist für die ganze Masse, und die Pfanne braucht nur heißes Fett und ein wenig Geduld. Viele Familien greifen genau dann zu dieser Variante, wenn ohnehin schon Twaróg für ein anderes Rezept eingekauft wurde und ein Rest übrig bleibt, der sonst schnell verdirbt.",
 diasporaPl:
 "Gdy w sklepie polskim jest twaróg, to szybki niedzielny trik, jedno opakowanie zwykle wystarczy na całą masę, a patelnia potrzebuje tylko gorącego tłuszczu i odrobiny cierpliwości. Wiele rodzin sięga po ten wariant właśnie wtedy, gdy twaróg został kupiony do innego przepisu i zostaje go trochę, a inaczej szybko by się zepsuł.",
 mistakesDe:
 "Zu nasser Quark, zu dick geformte Placki und zu wenig Hitze lassen die Masse weich statt knusprig werden. Brate zuerst eine kleine Probe, sie zeigt dir sofort, ob du noch mehr ausdrücken oder die Pfanne heißer machen musst. Auch zu viel Salz im Twaróg selbst kann den Geschmack der ganzen Masse verschieben, schmecke deshalb den Quark vor dem Mischen kurz ab.",
 mistakesPl:
 "Za mokry twaróg, za grube placki i za mało ognia zostawiają masę miękką, a nie chrupiącą. Najpierw usmaż jedną próbną sztukę, od razu pokaże, czy trzeba mocniej odcisnąć twaróg czy podgrzać patelnię. Za bardzo solony twaróg też może przesunąć smak całej masy, więc spróbuj quark przed wymieszaniem.",
 variantsDe:
 "Mit oder ohne extra Zwiebel bleibt die Grundtechnik gleich. Der [Placki-Guide](/de/blog/placki-guide) vergleicht die Käsevariante mit [Zucchini](/de/rezepte/placki/cukinia) und [Apfel](/de/rezepte/placki/mit-apfel), damit du die für dich passende Wasserarbeit wählen kannst.",
 variantsPl:
 "Z dodatkową cebulą albo bez niej podstawowa technika zostaje ta sama. [Przewodnik po plackach](/pl/blog/placki-przewodnik) porównuje wersję z serem z [cukinią](/pl/rezepte/placki/cukinia) i [jabłkiem](/pl/rezepte/placki/jablka), żebyś mógł wybrać odpowiednią metodę obsługi wody dla swojej masy.",
 },
 "recipe-placki-jablka": {
 dishDe: "Placki mit Apfel",
 dishPl: "Placki z jabłkami",
 vibeDe: "süß-salzig, knusprig, Nachmittagskaffee",
 vibePl: "słono-słodkie, chrupiące, do popołudniowej kawy",
 originDe:
 "Süße Placki mit Apfel sind kein Dessert im engeren Sinn, sondern eher ein Nachmittagsgericht oder ein leichtes Sonntagsfrühstück, das dieselbe Reib- und Brattechnik wie die herzhafte [Kartoffelvariante](/de/rezepte/placki/ziemniaczane) nutzt. Kartoffel und Apfel werden zusammen gerieben, mit Zucker und Zimt gewürzt und in der Pfanne goldbraun gebraten. Der wichtigste Unterschied zu [Racuchy](/de/rezepte/racuchy-jablka) liegt in der Teigführung, denn Racuchy basieren auf einem Hefeteig mit Apfelstücken und brauchen Gehzeit, während diese Placki-Variante komplett ohne Hefe funktioniert und in derselben Zeit fertig ist wie der klassische Kartoffelpuffer. Zimt kam über den Gewürzhandel schon im Mittelalter nach Polen und war lange ein teures Importgewürz, sodass süße, mit Zimt gewürzte Kartoffelgerichte wie diese Placki ursprünglich eher besonderen Anlässen vorbehalten waren, bevor sie mit sinkenden Gewürzpreisen zum Alltagsgebäck wurden.",
 originPl:
 "Słodkie placki z jabłkiem to nie deser w ścisłym sensie, raczej popołudniowe danie albo lekkie niedzielne śniadanie, wykorzystujące tę samą technikę tarcia i smażenia co wytrawne [placki ziemniaczane](/pl/rezepte/placki/ziemniaczane). Ziemniak i jabłko są tarte razem, doprawione cukrem i cynamonem i smażone na patelni na złoto. Najważniejsza różnica względem [racuchów](/pl/rezepte/racuchy-jablka) leży w samym cieście, bo racuchy opierają się na cieście drożdżowym z kawałkami jabłka i wymagają czasu na wyrośnięcie, a ta wersja placków działa całkowicie bez drożdży i jest gotowa w tym samym czasie co klasyczny placek ziemniaczany. Cynamon trafił do Polski przez handel przyprawami już w średniowieczu i długo był drogim towarem importowanym, więc słodkie, cynamonowe dania ziemniaczane jak te placki pierwotnie zarezerwowane były na specjalne okazje, zanim spadające ceny przypraw zrobiły z nich codzienne wypieki.",
 shopDe:
 "Mehligkochende Kartoffeln, säuerliche Äpfel wie Boskoop oder Elstar, etwas Zucker und Zimt tragen die ganze Masse. Der [Placki-Guide](/de/blog/placki-guide) unterscheidet sie klar von [Racuchy](/de/rezepte/racuchy-jablka), denn hier arbeitest du ganz ohne Hefe, nur mit geriebener Kartoffel und Apfel. Säuerliche Apfelsorten sind hier kein Zufall, sondern bewusste Wahl, weil sie beim Braten fester bleiben und nicht so schnell zu Brei zerfallen wie milde, süße Sorten.",
 shopPl:
 "Mączyste ziemniaki, kwaśne jabłka, odrobina cukru i cynamon niosą całą masę. [Przewodnik po plackach](/pl/blog/placki-przewodnik) jasno odróżnia je od [racuchów](/pl/rezepte/racuchy-jablka), bo tu pracujesz całkowicie bez drożdży, tylko ze startym ziemniakiem i jabłkiem. Kwaśne odmiany jabłek to nie przypadek, tylko świadomy wybór, bo podczas smażenia zostają twardsze i nie rozpadają się tak łatwo w papkę jak łagodne, słodkie odmiany.",
 techniqueDe:
 "Reibe die Äpfel nicht zu fein, sonst wird die Masse matschig statt griffig. Drücke das Wasser aus, aber warte damit nicht zu lange, sonst verfärbt sich der Apfel, und brate bei mittlerer Hitze, damit das Innere gleichzeitig mit der Kruste durchgart, dieselben Grundregeln beschreibt ausführlicher der [Placki-Guide](/de/blog/placki-guide).",
 techniquePl:
 "Nie ścieraj jabłek zbyt drobno, żeby masa pozostała zwarta, a nie kleista. Szybko odciśnij wodę, zanim jabłko się ściemni, i smaż na średnim ogniu, żeby wnętrze zdążyło się dopiec razem ze skórką, te same zasady szerzej opisuje [przewodnik po plackach](/pl/blog/placki-przewodnik). Masło i odrobina oleju razem dają lepszy efekt niż samo masło, bo olej podnosi temperaturę dymienia i pozwala smażyć dłużej bez przypalenia.",
 serveDe:
 "Serviere die Apfelplacki warm mit Puderzucker, Apfelmus oder Sauerrahm. Manche Familien essen sie mit Zucker und Śmietana gleichzeitig, das bleibt aber reine Hausgewohnheit und keine feste Regel.",
 servePl:
 "Podawaj placki z jabłkami ciepłe z cukrem pudrem, musem jabłkowym albo śmietaną. Niektórzy jedzą je z cukrem i śmietaną naraz, ale to kwestia tradycji domowej, a nie sztywna reguła.",
 diasporaDe:
 "Beliebt bei Kindern und praktisch, wenn Äpfel aus dem deutschen Obstregal gerade günstig sind. Schneller als [Racuchy](/de/rezepte/racuchy-jablka), weil keine Gehzeit für einen Hefeteig nötig ist, hier entscheidet vor allem die richtige Pfannentemperatur. Im Herbst, wenn im Garten oder auf dem Wochenmarkt besonders viele Äpfel reifen, sind diese Placki oft die schnellste Möglichkeit, kleinere, nicht ganz makellose Äpfel trotzdem sinnvoll zu verarbeiten.",
 diasporaPl:
 "Popularne u dzieci i praktyczne, gdy jabłka są tanie w niemieckim sklepie. Szybsze niż [racuchy](/pl/rezepte/racuchy-jablka), bo nie czekamy na wyrośnięcie ciasta drożdżowego, tu kluczowa jest właściwa temperatura patelni. Jesienią, gdy w ogrodzie albo na targu dojrzewa szczególnie dużo jabłek, te placki bywają najszybszym sposobem na sensowne wykorzystanie mniejszych, niezupełnie idealnych owoców.",
 mistakesDe:
 "Zu viel Zucker in der Masse verbrennt leicht, eine zu heiße Pfanne bräunt die Außenseite zu früh, und zu dick geformte Placki bleiben innen roh. Mittlere Hitze und eine erste Testcharge lösen die meisten dieser Probleme. Auch zu spät ausgedrückte Apfelmasse macht die Placki wässrig, presse sie deshalb erst kurz vor dem Braten noch einmal leicht aus.",
 mistakesPl:
 "Za dużo cukru w cieście łatwo się przypala, za gorąca patelnia zbyt szybko brązowi zewnętrzną stronę, a za grube placki zostają surowe w środku. Średni ogień i jedna próbna sztuka na początek rozwiązują większość tych problemów. Za późno odciśnięta masa jabłkowa też robi placki wodniste, dlatego odciśnij ją jeszcze raz lekko tuż przed smażeniem.",
 variantsDe:
 "[Racuchy](/de/rezepte/racuchy-jablka) sind mit Hefeteig deutlich fluffiger, der [Placki-Guide](/de/blog/placki-guide) erklärt den Unterschied genau. Wechsle zurück zu den herzhaften [Kartoffelplacki](/de/rezepte/placki/ziemniaczane), die klassisch neben [Gulasz](/de/rezepte/gulasz-wieprzowy) passen.",
 variantsPl:
 "[Racuchy](/pl/rezepte/racuchy-jablka) są bardziej puszyste na cieście drożdżowym, [przewodnik po plackach](/pl/blog/placki-przewodnik) wyjaśnia tę różnicę szczegółowo. Wróć do wytrawnych [ziemniaczanych](/pl/rezepte/placki/ziemniaczane), które klasycznie pasują obok [gulaszu](/pl/rezepte/gulasz-wieprzowy).",
 },
 "recipe-gulasz": {
 dishDe: "Gulasz wieprzowy",
 dishPl: "Gulasz wieprzowy",
 vibeDe: "langsam geschmort, paprikarot, Sonntag",
 vibePl: "duszony powoli, paprykowy, niedzielny",
 originDe:
 "Der Name Gulasz kommt vom ungarischen Wort für Rinderhirte, gulyás, dessen Eintopf ursprünglich draußen auf der Steppe im Kessel über offenem Feuer gekocht wurde, lange bevor Paprika überhaupt in Europa bekannt war. Erst als die Pflanze im 19. Jahrhundert in Ungarn Fuß fasste, entstand das heute bekannte, paprikarote Gericht, wobei die Ungarn selbst zwischen der dünneren Gulyásleves-Suppe und dem dickeren Schmorgericht Pörkölt unterscheiden, bei dem gemahlene Paprika direkt im heißen Schmalz angeschwitzt wird. Der polnische Gulasz wieprzowy hat mit beiden ungarischen Varianten nur die Grundidee gemeinsam, in Polen wird die Soße meist zusätzlich mit Tomatenmark gebunden, deutlich weniger scharf gewürzt und stets sämiger und dickflüssiger als der eher brühige ungarische Gulyás gekocht, dazu kamen über die Jahrzehnte Einflüsse aus der deutschen, tschechischen und ukrainischen Küche. In vielen polnischen Haushalten in Deutschland ist Gulasz vor allem der feste Partner von [Placki](/de/rezepte/placki/ziemniaczane), ein Wochenendteller, an dem zwei eigenständige Rezepte zusammenkommen. Verwechsle den Gulasz außerdem nicht mit dem krautigen Schmorgericht [Bigos](/de/rezepte/bigos), das auf Sauerkraut statt auf Paprikasoße aufbaut, oder mit dem schnell angebratenen Paprika-Gemüse-Topf [Leczo](/de/rezepte/leczo), bei dem Gemüse und Tomate führen und nicht das langsam geschmorte Fleisch.",
 originPl:
 "Nazwa gulasz pochodzi od węgierskiego słowa gulyás, oznaczającego pasterza wołów, którego danie pierwotnie gotowano na stepie, w kotle nad ogniskiem, na długo przed tym, jak papryka pojawiła się w Europie. Dopiero gdy roślina zadomowiła się na Węgrzech w XIX wieku, powstało dzisiejsze, paprykowoczerwone danie, przy czym sami Węgrzy odróżniają rzadszą zupę gulyásleves od gęstszego pörköltu, w którym mielona papryka jest podsmażana bezpośrednio w gorącym smalcu. Polski gulasz wieprzowy ma z obiema węgierskimi wersjami wspólny właściwie tylko pomysł podstawowy, w Polsce sos zwykle dodatkowo zagęszcza się koncentratem pomidorowym, jest wyraźnie mniej ostry i zawsze gęstszy niż raczej zupny węgierski gulyás, a przez dekady dołączyły do tego wpływy kuchni niemieckiej, czeskiej i ukraińskiej. W wielu polskich domach w Niemczech gulasz jest przede wszystkim stałym partnerem [placków](/pl/rezepte/placki/ziemniaczane), weekendowym talerzem, na którym spotykają się dwa samodzielne przepisy. Nie myl też gulaszu z kapuścianym [bigosem](/pl/rezepte/bigos), który opiera się na kiszonej kapuście, a nie na sosie paprykowym, ani z szybko podsmażanym warzywnym garnkiem [leczo](/pl/rezepte/leczo), w którym prowadzi warzywo i pomidor, a nie długo duszone mięso.",
 shopDe:
 "Nimm Schweinenacken oder Schulter, denn der Fettanteil hält das Fleisch auch nach langem Schmoren saftig. Paprika, Zwiebel, Tomatenmark und edelsüßes Paprikapulver tragen die Soße, ein guter Schmortopf oder [Dutch Oven](/de/blog/dutch-oven-kaufberatung) hilft dabei, die Hitze gleichmäßig zu halten. Kiełbasa als zusätzliche Einlage holst du bei Bedarf im [Polenladen](/de/blog/polenladen-einkaufen), wo auch das Paprikapulver oft aromatischer ist als im deutschen Supermarktregal.",
 shopPl:
 "Weź kark albo łopatkę, bo zawartość tłuszczu utrzymuje mięso soczyste nawet po długim duszeniu. Papryka, cebula, koncentrat pomidorowy i słodka papryka w proszku niosą sos, a dobry garnek żeliwny albo [dutch oven](/pl/blog/garnek-do-duszenia) pomaga utrzymać równy żar. Kiełbasę jako dodatkową wkładkę kupisz w razie potrzeby w [sklepie polskim](/pl/blog/sklep-polski-zakupy), gdzie papryka w proszku bywa też bardziej aromatyczna niż w niemieckim markecie.",
 techniqueDe:
 "Brate das Fleisch zuerst scharf an, damit Röstaromen entstehen, und röste das Paprikapulver danach nur kurz mit, sonst wird es schnell bitter. Schmore den Gulasz anschließend zugedeckt 60 bis 90 Minuten bei milder Hitze, bis sich das Fleisch mit der Gabel zerteilen lässt. Am Vortag gekocht schmeckt er oft noch runder, dann brätst du am Tag selbst nur noch frische Placki dazu und hältst den Gulasz einfach warm.",
 techniquePl:
 "Najpierw dobrze obsmaż mięso, żeby powstały aromaty przypieczenia, a paprykę w proszku podsmaż tylko chwilę, inaczej szybko zgorzknieje. Potem duś gulasz pod przykryciem 60 do 90 minut na małym ogniu, aż mięso będzie się rozpadać pod widelcem. Ugotowany dzień wcześniej smakuje często jeszcze pełniej, wtedy w dniu podania smażysz już tylko świeże placki, a gulasz po prostu trzymasz ciepły.",
 serveDe:
 "Serviere den Gulasz mit frisch gebratenen [Placki](/de/rezepte/placki/ziemniaczane) und einem Löffel Śmietana, das ist der klassische Sonntagsteller in vielen Diaspora-Haushalten. Den zusammengesetzten Teller mit Gulasch direkt auf den Puffern findest du außerdem im Rezept zu [Placek po węgiersku](/de/rezepte/placek-po-wegiersku).",
 servePl:
 "Podawaj gulasz ze świeżo usmażonymi [plackami](/pl/rezepte/placki/ziemniaczane) i łyżką śmietany, to klasyczny niedzielny talerz w wielu domach w diasporze. Złożony talerz z gulaszem prosto na plackach znajdziesz też w przepisie na [placek po węgiersku](/pl/rezepte/placek-po-wegiersku).",
 diasporaDe:
 "In deutschen Wohnungen riecht Gulasz nach langem Schmoren am Wochenende, ideal, wenn alle nach der Arbeitswoche hungrig ankommen und ein Topf für den ganzen Tisch reichen soll. Viele Familien bereiten ihn bewusst am Samstag vor, damit am Sonntag nur noch die Placki frisch gebraten werden müssen.",
 diasporaPl:
 "W niemieckich mieszkaniach gulasz pachnie długim duszeniem w weekend, idealny, gdy wszyscy wracają głodni po tygodniu pracy, a jeden garnek ma wystarczyć dla całego stołu. Wiele rodzin gotuje go świadomie w sobotę, żeby w niedzielę smażyć już tylko świeże placki.",
 mistakesDe:
 "Nicht angebratenes Paprikapulver, zu wenig Flüssigkeit und zu kurzes Schmoren lassen den Gulasz flach schmecken, dabei soll das Fleisch am Ende mit der Gabel zerfallen. Verwechsle Gulasz außerdem nicht mit dem schnellen Gemüsetopf [Leczo](/de/rezepte/leczo), und den zusammengesetzten Teller mit Placki obenauf findest du separat bei [Placek po węgiersku](/de/rezepte/placek-po-wegiersku).",
 mistakesPl:
 "Niepodsmażona papryka w proszku, za mało płynu i za krótkie duszenie spłaszczają smak gulaszu, a mięso powinno się na końcu rozpadać pod widelcem. Nie mylić gulaszu z szybkim warzywnym garnkiem [leczo](/pl/rezepte/leczo), a złożony talerz z plackami na wierzchu znajdziesz osobno w przepisie na [placek po węgiersku](/pl/rezepte/placek-po-wegiersku).",
 variantsDe:
 "Du kannst Kiełbasa mitschmoren, das Gericht schärfer würzen oder mit zusätzlichen Pilzen eher vegetarisch Richtung kochen. Der [Placki-Guide](/de/blog/placki-guide) hilft bei der klassischen Beilage, der [Dutch Oven](/de/blog/dutch-oven-kaufberatung) beim gleichmäßigen Schmoren. Der reine Paprika-Gemüse-Topf ohne Würfelfleisch-Marathon ist [Leczo](/de/rezepte/leczo), der zusammengesetzte Teller mit Placki als Unterlage ist [Placek po węgiersku](/de/rezepte/placek-po-wegiersku).",
 variantsPl:
 "Możesz duszyć z kiełbasą, zrobić wersję ostrzejszą albo bardziej wegetariańską z dodatkiem grzybów. [Przewodnik po plackach](/pl/blog/placki-przewodnik) pomaga przy klasycznym dodatku, [garnek do duszenia](/pl/blog/garnek-do-duszenia) przy równym duszeniu. Sam warzywny gulasz paprykowy bez maratonu kostki mięsa to [leczo](/pl/rezepte/leczo), a złożony talerz z plackami jako spodem to [placek po węgiersku](/pl/rezepte/placek-po-wegiersku).",
 },
 "recipe-kotlet-mielony": {
 dishDe: "Kotlet mielony",
 dishPl: "Kotlet mielony",
 vibeDe: "alltäglich, paniert, kinderfreundlich",
 vibePl: "codzienny, panierowany, dla dzieci",
 originDe:
 "Kotlet mielony gehört zur großen europäischen Familie der panierten Hacksteaks, verwandt mit der deutschen Frikadelle und dem österreichischen Faschierten Laibchen, doch anders als diese wird er in Polen fest in Mehl, Ei und Semmelbröseln paniert, bevor er in die Pfanne kommt. Die Grundidee ist einfach: Aus günstigem, gemischtem Hackfleisch, eingeweichtem Brötchen und Zwiebel entsteht ein Alltagsgericht, das schneller fertig ist als das geklopfte [Kotlet schabowy](/de/rezepte/kotlet-schabowy) und mit weniger teurem Fleisch auskommt. Gerade deshalb war Kotlet mielony in den Kantinen und Milchbars der Volksrepublik Polen ein verlässlicher Sattmacher, wenn ganze Fleischstücke rar oder zu teuer waren, und blieb bis heute das Kindergericht schlechthin. Verwechsle ihn nicht mit [Klopsy](/de/rezepte/klopsy), bei denen die gleiche Hackmasse zu Kugeln geformt und in Soße gegart wird statt paniert und gebraten, das ist eine völlig andere Zubereitung mit denselben Grundzutaten.",
 originPl:
 "Kotlet mielony należy do wielkiej europejskiej rodziny panierowanych kotletów z mięsa mielonego, spokrewnionej z niemiecką Frikadelle i austriackim Faschiertes Laibchen, ale inaczej niż tamte, w Polsce zawsze obtacza się go w mące, jajku i bułce tartej, zanim trafi na patelnię. Pomysł jest prosty: z niedrogiego, mieszanego mięsa mielonego, namoczonej bułki i cebuli powstaje danie codzienne, szybsze niż rozbity [kotlet schabowy](/pl/rezepte/kotlet-schabowy) i wymagające mniej kosztownego mięsa. Właśnie dlatego kotlet mielony był w stołówkach i barach mlecznych Polskiej Rzeczpospolitej Ludowej pewnym sposobem na sycący obiad, gdy całych kawałków mięsa było mało albo były drogie, i do dziś zostaje klasycznym dziecięcym daniem. Nie myl go z [klopsami](/pl/rezepte/klopsy), gdzie ta sama masa mielona formowana jest w kulki i gotowana w sosie, a nie panierowana i smażona, to zupełnie inne przygotowanie tych samych podstawowych składników.",
 shopDe:
 "Gemischtes Hackfleisch, ein altes Brötchen und Milch sowie Semmelbrösel und Butterschmalz tragen die Kotlets aus der Pfanne. Die Reihenfolge beim Panieren erklärt der [Panieren-Guide](/de/blog/panieren-schabowy), gleichmäßige Hitze liefert eine [Gusseisenpfanne](/de/blog/gusseisenpfanne). Wer lieber einen Ofenlaib mit Ei-Kern statt einzelner Kotlets möchte, findet das Rezept bei [Pieczeń rzymska](/de/rezepte/pieczen-rzymska).",
 shopPl:
 "Mięso mielone mieszane, czerstwa bułka i mleko oraz bułka tarta i smalec lub masło klarowane niosą kotlety z patelni. Kolejność panierowania opisuje [przewodnik panierowania](/pl/blog/panierowanie-kotlet), równomierny żar daje [patelnia żeliwna](/pl/blog/patelnia-zelivna). Kto woli bochenek z jajkiem w środku zamiast pojedynczych kotletów, znajdzie przepis przy [pieczeni rzymskiej](/pl/rezepte/pieczen-rzymska).",
 techniqueDe:
 "Stelle die Masse nach dem Verkneten etwa 30 Minuten kalt, forme dann flache Kotlets und ziehe sie durch Mehl, Ei und Semmelbrösel. Brate sie nicht zu heiß, denn die Panade auf Hackfleisch verbrennt schneller als beim klassischen Schabowy aus einem festen Fleischstück. Das eingeweichte, gut ausgedrückte Brötchen ist dabei kein Extra, sondern trägt maßgeblich zur Saftigkeit bei.",
 techniquePl:
 "Po wymieszaniu odstaw masę na około 30 minut do lodówki, potem formuj płaskie kotlety i obtaczaj je w mące, jajku i bułce tartej. Nie smaż za mocno, bo panierka na mielonym przypala się szybciej niż przy klasycznym schabowym z jednego kawałka mięsa. Namoczona i dobrze odciśnięta bułka to nie dodatek, tylko główny powód, dla którego kotlet zostaje soczysty.",
 serveDe:
 "Serviere die Kotlets mit Kartoffeln, [Mizeria](/de/rezepte/mizeria) oder Ketchup, ganz ohne schlechtes Gewissen, und mit Brot, wenn es einmal schnell gehen muss. Wer statt der Panade lieber Kugeln in Soße mag, findet das bei [Klopsy](/de/rezepte/klopsy).",
 servePl:
 "Podawaj kotlety z ziemniakami, [mizerią](/pl/rezepte/mizeria) albo keczupem, bez wyrzutów sumienia, a z chlebem, gdy trzeba szybko coś zjeść. Kto woli kulki w sosie zamiast panierki, znajdzie je przy [klopsach](/pl/rezepte/klopsy).",
 diasporaDe:
 "Nach der Arbeit ist Kotlet mielony ein schneller Wochentagstrost, die Panade bereitest du vor, solange noch Ruhe ist, und brätst erst, wenn alle am Tisch sitzen. Der Aufwand bleibt kleiner als beim Schabowy, der knusprige Trost am Ende aber fast derselbe, und Kinder in der Diaspora essen Hackfleisch oft lieber als ein sichtbares Fleischstück.",
 diasporaPl:
 "Po pracy kotlet mielony to szybkie pocieszenie w tygodniu, panierkę przygotowujesz wcześniej, gdy jest spokój, a smażysz dopiero, gdy wszyscy są przy stole. Roboty jest mniej niż przy schabowym, ale ten sam chrupiący komfort na talerzu, a dzieci w diasporze często wolą mielone niż widoczny kawałek mięsa.",
 mistakesDe:
 "Ohne eingeweichtes Brötchen wird die Masse zu trocken und fest, zu dicke Kotlets bleiben innen roh, während außen die Panade schon dunkel wird, und zu früh panierte Stücke saugen beim Warten unnötig Fett. Verwechsle Kotlet mielony außerdem nicht mit [Klopsy](/de/rezepte/klopsy), das sind Kugeln in Soße ohne Panade.",
 mistakesPl:
 "Bez namoczonej bułki masa wychodzi za sucha i zbita, za grube kotlety zostają surowe w środku, gdy panierka na zewnątrz już ciemnieje, a zbyt wcześnie obtoczone sztuki wciągają niepotrzebnie tłuszcz podczas czekania. Nie mylić kotletów mielonych z [klopsami](/pl/rezepte/klopsy), to kulki w sosie bez panierki.",
 variantsDe:
 "Du kannst das Hack teilweise durch Pute ersetzen, die Kotlets ohne Panade braten oder sie neben Rosół als zweites Gericht am Sonntag servieren. Der [Panieren-Guide](/de/blog/panieren-schabowy) gilt für alle Panade-Varianten gleich. Der Soßen-Nachbar mit derselben Grundmasse ist [Klopsy](/de/rezepte/klopsy), der gebackene Ofenlaib ohne Panade ist [Pasztet drobiowy](/de/rezepte/pasztet).",
 variantsPl:
 "Możesz część mielonego zastąpić indykiem, smażyć kotlety bez panierki albo podać je obok rosołu jako drugie danie w niedzielę. [Przewodnik panierowania](/pl/blog/panierowanie-kotlet) dotyczy wszystkich wariantów panierki jednakowo. Sąsiad z tej samej masy, ale w sosie, to [klopsy](/pl/rezepte/klopsy), a pieczony bochenek bez panierki to [pasztet drobiowy](/pl/rezepte/pasztet).",
 },
 "recipe-kluski-slaskie": {
 dishDe: "Kluski śląskie",
 dishPl: "Kluski śląskie",
 vibeDe: "zart, sprężyste, mit charakteristischer Mulde",
 vibePl: "delikatne, sprężyste, z charakterystycznym wgłębieniem",
 originDe:
 "Kluski śląskie gehören zu den bekanntesten Gerichten Oberschlesiens und tragen im Dialekt viele Namen, kluski białe oder biołe, gumiklyjzy oder kartofelmelklezy, alle beschreiben dieselben runden, leicht elastischen Kartoffelklöße. Das Gericht steht heute sogar auf der offiziellen Liste der traditionellen Produkte der Woiwodschaften Schlesien und Oppeln. Die Mulde in der Mitte, traditionell mit dem Finger eingedrückt, ist keine reine Verzierung, sie hilft den Klößen, im Wasser gleichmäßig zu garen, und sammelt später die Soße auf dem Teller. Anders als die länglichen, aus ähnlichem Grundteig geschnittenen [Kopytka](/de/rezepte/kopytka), die mehr Weizenmehl enthalten und dadurch weicher bleiben, bestehen Kluski śląskie fast nur aus Kartoffeln und Kartoffelstärke im Verhältnis von etwa vier zu eins, was ihnen die typische Elastizität gibt. Von den großen, mit Hackfleisch gefüllten [Pyzy](/de/rezepte/pyzy) unterscheidet sie zusätzlich die fehlende Füllung. Klassisch kommen sie sonntags neben Rolada śląska und Rotkohl auf den Tisch, ihre kräftige, neutrale Struktur passt aber ebenso gut zu dunklen Soßen und Gulasz.",
 originPl:
 "Kluski śląskie to jedno z najbardziej rozpoznawalnych dań Górnego Śląska, w gwarze noszące wiele nazw, kluski białe albo biołe, gumiklyjzy czy kartofelmelklezy, wszystkie opisują te same okrągłe, lekko sprężyste kluski ziemniaczane. Danie znajduje się dziś na oficjalnej liście produktów tradycyjnych województw śląskiego i opolskiego. Wgłębienie po środku, tradycyjnie robione palcem, to nie tylko dekoracja, pomaga kluskom równo ugotować się w wodzie i później zatrzymuje sos na talerzu. W przeciwieństwie do podłużnych [kopytek](/pl/rezepte/kopytka), krojonych z podobnego ciasta, ale z większą ilością mąki pszennej, przez co wychodzą delikatniejsze, kluski śląskie składają się prawie wyłącznie z ziemniaków i skrobi ziemniaczanej w proporcji około cztery do jednego, co daje im charakterystyczną sprężystość. Od dużych, nadziewanych mięsem [pyz](/pl/rezepte/pyzy) różni je dodatkowo brak farszu. Klasycznie trafiają na niedzielny stół razem z roladą śląską i modrą kapustą, a ich neutralna, sprężysta struktura równie dobrze pasuje do ciemnych sosów i gulaszu.",
 shopDe:
"Du brauchst mehligkochende Kartoffeln, Kartoffelstärke aus dem Supermarkt und optional ein Ei. Achte beim Kauf auf die richtige Kartoffelsorte, wachsige Kartoffeln lassen sich viel schlechter zu einem festen, formbaren Teig verarbeiten. Wenn du die Brühe für Rosół selbst ziehst, hilft die [Rosół-Technik](/de/blog/rosol-technik), Kluski śląskie sind oft genau der Sonntagspartner dazu.",
shopPl:
"Potrzebujesz mączystych ziemniaków, skrobi ziemniaczanej z marketu i opcjonalnie jajka. Zwróć uwagę na właściwą odmianę przy zakupie, ziemniaki sałatkowe dużo trudniej zamienić w zwarte, formowalne ciasto. Gdy bulion na rosół gotujesz sam, pomaga poradnik [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol), kluski śląskie są często właśnie jego niedzielnym partnerem.",
 techniqueDe:
 "Presse die Kartoffeln noch heiß und gut ausgedampft durch die Presse, das hält den Teig fest statt klebrig. Der Teig soll fest, aber formbar sein, zu weich zerfallen die Klöße im Wasser. Forme die Mulde mit dem Finger, siede sanft und nimm die Kluski kurz nach dem Aufschwimmen heraus, länger werden sie gummiartig.",
 techniquePl:
 "Przeciśnij ziemniaki przez praskę, gdy są jeszcze gorące i dobrze odparowane, dzięki temu ciasto wychodzi zwarte, a nie klejące. Ciasto ma być twarde, ale plastyczne, za miękkie kluski rozpadają się w wodzie. Wgłębienie zrób palcem, gotuj delikatnie i wyjmij zaraz po wypłynięciu, dłużej robią się gumowate.",
 serveDe:
 "Serviere sie zu Rosół, mit gebratener Zwiebel oder unter Pilzsoße, als Beilage, die den Teller trägt, ohne ihn zu dominieren. Frische Fallnudeln aus Ei-Mehl-Teig sind eine andere Linie: [Kluski kładzione](/de/rezepte/kluski-kladzione).",
 servePl:
 "Podawaj do rosołu, z cebulą na smalcu albo pod sosem grzybowym, jako dodatek, który niesie talerz bez dominacji. Świeże kluski z ciasta jajecznego to inna linia: [kluski kładzione](/pl/rezepte/kluski-kladzione).",
 diasporaDe:
"In Deutschland sind sie weniger bekannt als Pierogi, für Schlesier und Rosół-Fans aber unverzichtbar. Einmal die richtige Kartoffel-Stärke-Konsistenz getroffen, lassen sie sich Woche für Woche zuverlässig wiederholen, viele Familien kochen dabei gleich eine größere Menge und frieren die übrigen Klöße einzeln vor.",
diasporaPl:
"W Niemczech są mniej znane niż pierogi, ale dla Ślązaków i fanów rosołu niezastąpione. Gdy raz złapiesz właściwą konsystencję ziemniaków ze skrobią, da się je powtarzać tydzień po tygodniu, wiele rodzin gotuje od razu większą partię i mrozi resztę klusek pojedynczo.",
 mistakesDe:
"Zu viel Stärke macht die Kluski gummiartig, zu starkes Kochen reißt sie auf, und zu große Stücke garen ungleich. Zu frisch gekochte, kaum ausgedampfte Kartoffeln sind ein weiterer häufiger Fehler, die Restfeuchte weicht die Teigstruktur auf. Forme zuerst eine kleine Testcharge und korrigiere Mehl oder Stärke, bevor der ganze Teig geformt ist. Nicht verwechseln mit den länglichen [Kopytka](/de/rezepte/kopytka) oder den großen, gefüllten [Pyzy](/de/rezepte/pyzy).",
mistakesPl:
"Za dużo skrobi robi kluski gumowate, zbyt gwałtowne gotowanie je rozrywa, a za duże sztuki garują nierówno. Zbyt świeżo ugotowane, słabo odparowane ziemniaki to kolejny częsty błąd, resztka wilgoci rozmywa strukturę ciasta. Najpierw uformuj małą partię próbną i popraw mąkę lub skrobię, zanim uformujesz całe ciasto. Nie mylić z podłużnymi [kopytkami](/pl/rezepte/kopytka) czy dużymi, nadziewanymi [pyzami](/pl/rezepte/pyzy).",
 variantsDe:
 "Statt Zwiebel kannst du Pilzsoße wählen oder die Kluski neben Gulasz stellen. Für die passende Brühe hilft die [Rosół-Technik](/de/blog/rosol-technik), eine andere Teig-Einlage findest du bei [Kluski kładzione](/de/rezepte/kluski-kladzione), die ganze Kartoffelklöße-Familie zeigen zusätzlich [Kopytka](/de/rezepte/kopytka) und [Pyzy](/de/rezepte/pyzy).",
 variantsPl:
 "Zamiast cebuli możesz wybrać sos grzybowy albo postawić kluski obok gulaszu. Przy pasującym bulionie pomaga [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol), inny dodatek ciastowy znajdziesz przy [kluskach kładzionych](/pl/rezepte/kluski-kladzione), a całą rodzinę klusek ziemniaczanych pokazują dodatkowo [kopytka](/pl/rezepte/kopytka) i [pyzy](/pl/rezepte/pyzy).",
 },
 "recipe-racuchy": {
 dishDe: "Racuchy z jabłkami",
 dishPl: "Racuchy z jabłkami",
 vibeDe: "fluffig, hefig, goldbraun",
 vibePl: "puszyste, drożdżowe, złote",
 originDe:
 "Der Name Racuchy geht sprachhistorisch wahrscheinlich auf das ostslawische Wort hreczuszki zurück, das ursprünglich Buchweizenpfannkuchen bezeichnete, von hreczka für Buchweizen. Beim Übergang ins Polnische fiel das anlautende h weg, aus hreczuszki wurde über reczuszki schließlich racuchy, und die Bedeutung erweiterte sich von reinen Buchweizenpfannkuchen auf Hefeteig- und Kartoffelpfannkuchen aller Art. Es gibt sogar eine reine Kartoffelvariante ohne Hefe, racuchy ziemniaczane, bei der geriebene, gekochte Kartoffeln mit Ei gebunden werden, in der Region Podlasie gehören Racuchy traditionell sogar zur Wigilia. Wichtig ist die Abgrenzung zu zwei Nachbarn, [Placki mit Apfel](/de/rezepte/placki/mit-apfel) bestehen aus rohem, geriebenem Kartoffelteig, der direkt in die Pfanne kommt, ohne dass er gehen muss, Naleśniki sind ein dünnes Ei-Milch-Gemisch, das zu hauchdünnen Crêpes gebraten und meist gefüllt oder gerollt wird. Racuchy dagegen sind dicker, brauchen einen echten Hefeteig mit Gehzeit und werden mit Apfelstücken direkt in der Pfanne gebacken, was ihnen die typische, fluffige Konsistenz gibt.",
 originPl:
 "Nazwa racuchy najprawdopodobniej wywodzi się historycznie od wschodniosłowiańskiego słowa hreczuszki, które pierwotnie oznaczało placki z mąki gryczanej, od hreczka, czyli gryki. Przy przejściu do polszczyzny zniknęło nagłosowe h, z hreczuszki przez reczuszki powstało racuchy, a znaczenie rozszerzyło się z czystych placków gryczanych na placki drożdżowe i ziemniaczane wszelkiego rodzaju. Istnieje też czysto ziemniaczana wersja bez drożdży, racuchy ziemniaczane, w której starte, ugotowane ziemniaki wiąże się jajkiem, na Podlasiu racuchy tradycyjnie trafiają nawet na wigilijny stół. Ważne jest odróżnienie od dwóch sąsiadów, [placki z jabłkami](/pl/rezepte/placki/jablka) robi się ze startego, surowego ciasta ziemniaczanego, które trafia na patelnię bez wyrastania, naleśniki to rzadkie ciasto jajeczno-mleczne smażone na bardzo cienkie placki, zwykle zwijane albo nadziewane. Racuchy są grubsze, wymagają prawdziwego ciasta drożdżowego z czasem na wyrośnięcie i smaży się je z kawałkami jabłka prosto na patelni, co daje im charakterystyczną, puszystą konsystencję.",
 shopDe:
 "Mehl, Milch, ein Päckchen Trockenhefe, Zucker und fest-säuerliche Äpfel reichen für den Teig, Vanillezucker oder eine Prise Zimt runden den Geschmack zusätzlich ab. Der [Placki-Guide](/de/blog/placki-guide) erklärt zusätzlich den Unterschied zu Kartoffel-Placki mit Apfel, hier arbeitest du mit Hefe statt mit geriebener Kartoffel.",
 shopPl:
 "Mąka, mleko, saszetka drożdży suszonych, cukier i jabłka kwaskowate wystarczą na ciasto, cukier wanilinowy albo szczypta cynamonu dodatkowo podkreślają smak. [Przewodnik po plackach](/pl/blog/placki-przewodnik) dodatkowo wyjaśnia różnicę wobec placków ziemniaczanych z jabłkiem, tu pracujesz na drożdżach, nie na startym ziemniaku.",
 techniqueDe:
 "Löse die Hefe in lauwarmer, nicht heißer Milch auf, lass den Teig rund 45 Minuten gehen und schneide die Apfelspalten nicht zu dick. Backe bei mittlerer Hitze, damit die Racuchy innen durchgaren, ohne außen zu verbrennen, anders als [Pączki](/de/rezepte/paczki) brauchen sie dabei nur eine flache Pfanne, kein tiefes Fettbad.",
 techniquePl:
 "Rozpuść drożdże w ciepłym, nie gorącym mleku, zostaw ciasto około 45 minut i nie kroj jabłek zbyt grubo. Smaż na średnim ogniu, żeby racuchy upiekły się w środku, nie przypalając się na zewnątrz, w przeciwieństwie do [pączków](/pl/rezepte/paczki) potrzebują tylko płytkiej patelni, a nie głębokiego tłuszczu.",
 serveDe:
"Serviere sie noch warm mit reichlich Puderzucker, zum Nachmittagskaffee oder als süßes, einfaches Abendessen, wenn niemand ein großes Dessert will. Ein Klecks Marmelade oder etwas Apfelmus daneben passt ebenfalls gut, wenn die Apfelstücke im Teig für manche zu wenig Frucht bringen.",
servePl:
"Podawaj jeszcze ciepłe z dużą ilością cukru pudru, do popołudniowej kawy albo jako słodki, prosty obiad, gdy nikt nie chce dużego deseru. Odrobina dżemu albo musu jabłkowego z boku również dobrze komponuje się, gdy kawałki jabłka w cieście dla niektórych to za mało owocu.",
 diasporaDe:
"Kinder mögen sie sofort, und Trockenhefe aus dem deutschen Supermarkt funktioniert zuverlässig. Näher an [Tłusty Czwartek](/de/blog/tlusty-czwartek) als an Wigilia, aber ganzjährig machbar, in vielen Familien wandert die Pfanne dabei einfach an den Frühstückstisch am Wochenende.",
diasporaPl:
"Dzieci lubią je od razu, a suszone drożdże z niemieckiego sklepu działają pewnie. Bliżej [Tłustego Czwartku](/pl/blog/tlusty-czwartek-przepisy) niż Wigilii, ale da się je robić przez cały rok, w wielu rodzinach patelnia trafia po prostu na weekendowe śniadanie.",
 mistakesDe:
"Zu heiße Milch tötet die Hefe, zu dicke Apfelstücke bleiben roh, und zu hohe Pfannenhitze bräunt außen, bevor innen alles gar ist. Backe zuerst eine Probe und korrigiere Teigdicke und Hitze, bevor der ganze Teig in die Pfanne geht. Auch zu alte Hefe sorgt für Probleme, teste sie vorher kurz in warmer Milch mit einer Prise Zucker, bilden sich keine Bläschen, taugt sie nicht mehr.",
mistakesPl:
"Zbyt gorące mleko zabija drożdże, za grube kawałki jabłka zostają surowe, a za mocny ogień rumieni wierzch, zanim środek dojdzie. Usmaż najpierw jedną sztukę próbną i popraw gęstość ciasta oraz ogień, zanim reszta trafi na patelnię. Za stare drożdże też powodują problemy, przetestuj je najpierw krótko w ciepłym mleku z odrobiną cukru, jeśli nie pojawią się bąbelki, nie są już dobre.",
 variantsDe:
"Zimt im Teig, klassische Racuchy ohne Apfel oder der schnellere Weg über [Placki mit Apfel](/de/rezepte/placki/mit-apfel) bleiben verwandt, aber nicht identisch. Auch mit Birnen oder Pflaumen statt Apfel gelingt die Pfanne gut, je nach Saison. [Tłusty Czwartek](/de/blog/tlusty-czwartek) gibt kulturellen Kontext, das ist nicht dasselbe Rezept wie [Faworki](/de/rezepte/faworki).",
variantsPl:
"Cynamon w cieście, klasyczne racuchy bez jabłka albo szybsza droga przez [placki z jabłkami](/pl/rezepte/placki/jablka) zostają spokrewnione, ale nie identyczne. Ciasto smaży się dobrze także z gruszkami albo śliwkami zamiast jabłek, zależnie od sezonu. [Tłusty Czwartek](/pl/blog/tlusty-czwartek-przepisy) daje kontekst kulturowy, to nie ten sam przepis co [faworki](/pl/rezepte/faworki).",
 },
 "recipe-chlodnik": {
 dishDe: "Chłodnik litewski",
 dishPl: "Chłodnik litewski",
 vibeDe: "kalt, rosa, sommerfrisch",
 vibePl: "zimny, różowy, letnio świeży",
 originDe:
 "Chłodnik ist deutlich älter, als die einfache Sommerküche vermuten lässt, seine Wurzeln reichen laut Kulturhistorikern rund 400 Jahre zurück ins mittelalterliche Grenzgebiet zwischen Polen und Litauen, in die heutige Gegend um Sejny. Ursprünglich war es eine Feldsuppe für Bauern in der Erntezeit, gemacht aus wildem Sauerampfer, Rote-Bete-Blättern und was der Garten sonst hergab, gesäuert mit Roggen- oder Rote-Bete-Kwas oder sogar mit Sauerkraut- oder Gurkenlake, damals noch weiß oder grünlich statt rosa, denn die heute typische rote Rübe kam als Farbgeber erst in der Zwischenkriegszeit dazu. Nach der Union von Lublin 1569 wanderte die Suppe von der bäuerlichen Küche auf die Tafeln des Adels, am Hof von König Stanisław August Poniatowski bereitete der Kammerkoch Paul Tremo aufwendige Versionen zu, sein Schüler Jan Szyttler beschrieb später Chłodnik mit Stör, Krebsschwänzen und Eischnee. Adam Mickiewicz verewigte die Suppe 1834 in Pan Tadeusz als chołodziec litewski. Die heute übliche Basis aus Kefir statt teurer Śmietana setzte sich vor allem in der Nachkriegszeit durch. Litauer nennen dieselbe Suppe übrigens šaltibarščiai, kalter Barszcz, und identifizieren sich ebenso stark mit ihr wie Polen mit ihrem Chłodnik. Mit dem heißen, klaren [Barszcz czerwony](/de/rezepte/barszcz-czerwony) hat Chłodnik trotz der gemeinsamen roten Bete kaum etwas zu tun.",
 originPl:
 "Chłodnik jest znacznie starszy, niż podsuwa mu prosta letnia kuchnia, jego korzenie sięgają według historyków kuchni około czterystu lat, w średniowieczne pogranicze polsko-litewskie, w okolice dzisiejszej Sejneńszczyzny. Pierwotnie była to polowa zupa chłopska na czas żniw, robiona z dzikiego szczawiu, liści buraka i tego, co akurat rosło w ogrodzie, zakwaszana żytnim albo buraczanym kwasem, a czasem nawet zalewą z kiszonej kapusty czy ogórków, jeszcze biała lub zielonkawa, bo dzisiejszy czerwony burak jako barwnik trafił do niej dopiero w okresie międzywojennym. Po unii lubelskiej z 1569 roku zupa przeniosła się ze stołów chłopskich na stoły szlachty, na dworze króla Stanisława Augusta Poniatowskiego wykwintne wersje przygotowywał nadworny kucharz Paul Tremo, a jego uczeń Jan Szyttler opisywał później chłodnik z jesiotrem, szyjkami rakowymi i pianą z białek. Adam Mickiewicz unieśmiertelnił zupę w 1834 roku w Panu Tadeuszu jako chołodziec litewski. Dzisiejsza baza na kefirze, tańszym niż śmietana, utrwaliła się przede wszystkim po wojnie. Litwini nazywają tę samą zupę šaltibarščiai, czyli zimny barszcz, i identyfikują się z nią równie silnie jak Polacy z chłodnikiem. Z gorącym, klarownym [barszczem czerwonym](/pl/rezepte/barszcz-czerwony) chłodnik mimo wspólnego buraka ma niewiele wspólnego.",
 shopDe:
 "Gekochte Rote Bete, am schnellsten aus dem Glas, Kefir oder Buttermilch sowie Gurke, Radieschen, Dill und Śmietana tragen den kalten Becher. Der Überblick [Polnische Suppen](/de/blog/polnische-suppen) ordnet Chłodnik neben Barszcz und Żurek ein, eine dickere Śmietana zum Finish gibt es oft im [Polenladen](/de/blog/polenladen-einkaufen).",
 shopPl:
 "Ugotowane buraki, najszybciej ze słoika, kefir lub maślanka oraz ogórek, rzodkiewka, koper i śmietana niosą zimny kubek. Przegląd [polskie zupy](/pl/blog/polskie-zupy) porządkuje chłodnik obok barszczu i żurku, gęstszą śmietanę na wierzch często znajdziesz w [polskim sklepie](/pl/blog/sklep-polski-zakupy).",
 techniqueDe:
 "Mixe die Basis kalt, würfle das Gemüse fein und stelle alles mindestens zwei Stunden in den Kühlschrank, am nächsten Tag schmeckt Chłodnik oft noch besser. Säure und Salz erst am Ende justieren, denn der Kefir bindet und verändert den Geschmack noch eine Weile nach dem Mischen.",
 techniquePl:
 "Zmiksuj bazę na chłodno, warzywa pokrój drobno i wstaw wszystko na minimum dwie godziny do lodówki, następnego dnia chłodnik smakuje często jeszcze lepiej. Kwas i sól ustaw dopiero na końcu, bo kefir wiąże i zmienia smak jeszcze przez chwilę po wymieszaniu.",
 serveDe:
 "Serviere Chłodnik mit einer halben gekochten Kartoffel und hartgekochtem Ei. So wird daraus ein leichtes Hauptgericht, kein Vorspeisen-Häppchen neben dem Grill.",
 servePl:
 "Podawaj chłodnik z połówką ugotowanego ziemniaka i jajkiem na twardo. Wychodzi lekki obiad, nie tylko przystawka obok grilla.",
 diasporaDe:
 "In deutschen Sommern ohne Klimaanlage rettet die kalte Suppe oft den Appetit. Kinder mögen die rosa Farbe meist ohne viel Überredung, und sobald die Basis steht, brauchst du keinen Herd mehr.",
 diasporaPl:
 "W niemieckim lecie bez klimatyzacji zimna zupa często ratuje apetyt. Dzieci lubią różowy kolor zwykle bez większego przekonywania, a gdy baza już stoi, nie potrzebujesz już kuchenki.",
 mistakesDe:
 "Zu warm serviert, zu wässrig angesetzt und zu wenig Dill machen Chłodnik flach. Die Suppe muss richtig kalt sein, nicht lauwarm aus dem Kühlschrank, und Salz sowie Säure gehören erst ans Ende. Verwechsle Chłodnik außerdem nicht mit dem heißen [Barszcz czerwony](/de/rezepte/barszcz-czerwony), beide teilen nur die Rote Bete.",
 mistakesPl:
 "Podany za ciepły, zbyt rzadko zrobiony i z za małą ilością koperku chłodnik smakuje płasko. Zupa musi być naprawdę zimna, nie letnia z lodówki, a sól i kwas należą na koniec. Nie myl chłodnika też z gorącym [barszczem czerwonym](/pl/rezepte/barszcz-czerwony), oba dania łączy tylko burak.",
 variantsDe:
 "Mit mehr Śmietana, ganz ohne Ei oder als Kontrast zum heißen Barszcz im Winter bleibt Chłodnik wandelbar. Der [Suppen-Guide](/de/blog/polnische-suppen) ordnet ihn in die Familie ein. Warme Kiszonki-Alternativen, aber nicht kalt und rosa, sind [Ogórkowa](/de/rezepte/ogorkowa) und [Kapuśniak](/de/rezepte/kapusniak), eine warme Frühlings-Bete mit Grün, aber ebenfalls nicht kalt, ist [Botwinka](/de/rezepte/botwinka).",
 variantsPl:
 "Z większą ilością śmietany, całkiem bez jajka albo jako kontrast do gorącego barszczu zimą chłodnik zostaje wciąż tym samym daniem w innej odsłonie. Przegląd [polskie zupy](/pl/blog/polskie-zupy) porządkuje go w tej rodzinie. Ciepłe alternatywy na kiszonkach, ale nie chłodne ani różowe, to [ogórkowa](/pl/rezepte/ogorkowa) i [kapuśniak](/pl/rezepte/kapusniak), a ciepła wiosenna zupa buraczana z zielenią, również nie zimna, to [botwinka](/pl/rezepte/botwinka).",
 },
 "recipe-pierogi-leniwe": {
 dishDe: "Pierogi leniwe",
 dishPl: "Pierogi leniwe",
 vibeDe: "mild, weich, ohne Falten-Stress",
 vibePl: "łagodne, miękkie, bez stresu lepienia",
 originDe:
 "Pierogi leniwe sind keine gefalteten Pierogi: Twaróg, Mehl und Ei werden zu Klößchen geformt und gekocht. Schneller Einstieg für Kinder und für Tage ohne Zeit zum Falten — verwandt mit Naleśniki-Twaróg-Geschmack, aber andere Technik.",
 originPl:
 "Pierogi leniwe to nie sklejane pierogi: twaróg, mąka i jajko formuje się w kluseczki i gotuje. Szybki start dla dzieci i dni bez czasu na lepienie — blisko smaku naleśników z twarogiem, ale inna technika.",
 shopDe:
 "Twaróg oder abgetropfter Speisequark, Mehl und Ei sowie Butter und Semmelbrösel. Der [Twaróg-Guide](/de/blog/twarog-deutschland) hilft bei der Konsistenz in DE.",
 shopPl:
 "Twaróg lub odsączony Quark, mąka i jajko oraz masło i bułka tarta. [Przewodnik po twarogu](/pl/blog/twarog-w-niemczech) pomaga przy konsystencji w DE.",
 techniqueDe:
 "Teig weich aber formbar. Nicht zu viel Mehl. In leicht siedendem Wasser — nicht sprudelnd — garen bis sie schwimmen.",
 techniquePl:
 "Ciasto miękkie, ale formowalne. Nie za dużo mąki. Gotować w lekko wrzącej wodzie — nie burząc — aż wypłyną.",
 serveDe:
 "Klassisch mit Butterbröseln und Zucker, oder mit Śmietana. Auch herzhaft mit Salz und Dill möglich.",
 servePl:
 "Klasycznie z bułką na maśle i cukrem albo ze śmietaną. Też wytrawnie z solą i koperkiem.",
 diasporaDe:
 "Oft das erste „Pierogi“-Erlebnis für Kinder in DE — ohne Faltenlernen.",
 diasporaPl:
 "Często pierwsze „pierogi” dla dzieci w DE — bez nauki lepienia.",
 mistakesDe:
 "Zu viel Mehl, zu starkes Kochen, zu nasser Quark. Abtropfen und ruhig bleiben.",
 mistakesPl:
 "Za dużo mąki, zbyt gwałtowne gotowanie, za mokry twaróg. Odsącz i spokój.",
 variantsDe:
 "Mit Kartoffelanteil, süßer oder salziger. Nicht verwechseln mit gefalteten Pierogi Ruskie.",
 variantsPl:
 "Z udziałem ziemniaka, słodsze lub słone. Nie mylić ze sklejanymi ruskimi.",
 },
 "recipe-kopytka": {
 dishDe: "Kopytka",
 dishPl: "Kopytka",
 vibeDe: "neutral, sättigend, beilagenstark",
 vibePl: "neutralne, sycące, mocne jako dodatek",
 originDe:
 "Kopytka sind Kartoffel-Teigstückchen — verwandt mit italienischen Gnocchi, aber polnisch im Servieren: Butterzwiebeln oder Gulasz. Partner zu Gulasz wieprzowy und Sonntagsteller.",
 originPl:
 "Kopytka to kluseczki ziemniaczane — blisko gnocchi, ale polskie w podaniu: cebula na maśle albo gulasz. Partner gulaszu wieprzowego i niedzielnego stołu.",
 shopDe:
 "Kartoffeln, Mehl und Ei sowie Butter und Zwiebel reichen. Zum Gulasch passt das [Gulasz](/de/rezepte/gulasz-wieprzowy)-Rezept; zum Topf der [Dutch Oven](/de/blog/dutch-oven-kaufberatung).",
 shopPl:
 "Ziemniaki, mąka i jajko oraz masło i cebula wystarczą. Do gulaszu pasuje przepis [gulasz](/pl/rezepte/gulasz-wieprzowy); do garnka [dutch oven](/pl/blog/garnek-do-duszenia).",
 techniqueDe:
 "Kartoffeln gut ausdampfen. Teig nicht zu weich. Schräg schneiden, sanft kochen, nach dem Aufschwimmen herausnehmen.",
 techniquePl:
 "Ziemniaki dobrze odparować. Ciasto nie za miękkie. Kroić skośnie, gotować delikatnie, wyjąć po wypłynięciu.",
 serveDe:
 "Mit Butterzwiebeln, Gulasz oder Pilzsoße. Als Hauptbeilage, nicht als Snack.",
 servePl:
 "Z cebulą na maśle, gulaszem albo sosem grzybowym. Jako główny dodatek, nie przekąska.",
 diasporaDe:
 "Einfacher als Pyzy, sättigender als Reis — gute Brücke für deutsche Nachbarn.",
 diasporaPl:
 "Prostsze niż pyzy, bardziej sycące niż ryż — dobra kładka dla niemieckich sąsiadów.",
 mistakesDe:
 "Zu viel Mehl, zu nasse Kartoffeln, zu starkes Kochen. Forme zuerst eine kleine Testcharge und korrigiere die Konsistenz.",
 mistakesPl:
 "Za dużo mąki, zbyt mokre ziemniaki, zbyt gwałtowne gotowanie. Najpierw uformuj małą partię próbną i popraw konsystencję.",
 variantsDe:
 "Mit Spinat im Teig, oder neben Kluski śląskie als regionale Alternative.",
 variantsPl:
 "Ze szpinakiem w cieście albo obok klusek śląskich jako regionalna alternatywa.",
 },
 "recipe-lazanki": {
 dishDe: "Łazanki mit Kapusta",
 dishPl: "Łazanki z kapustą",
 vibeDe: "deftig, säuerlich, alltagstauglich",
 vibePl: "treściwe, kwaśne, na co dzień",
 originDe:
 "Łazanki sind quadratische Nudeln, oft mit Sauerkraut und Speck — Diaspora-Alltagsteller zwischen Bigos und Pasta. Weniger Drama als Bigos, mehr Struktur als Kraut allein.",
 originPl:
 "Łazanki to kwadratowy makaron, często z kapustą i boczkiem — talerz diasporowy między bigosem a pastą. Mniej dramatu niż bigos, więcej struktury niż sama kapusta.",
 shopDe:
 "Łazanki im Polenladen oder breite Bandnudeln, Sauerkraut, Zwiebel, Speck optional. Kiszenie-Guide für Kapusta-Kontext.",
 shopPl:
 "Łazanki w sklepie polskim lub szeroki makaron, kapusta kiszona, cebula, boczek opcjonalnie. Przewodnik kiszenia przy kontekście kapusty.",
 techniqueDe:
 "Kraut schmoren bis weich und aromatisch, Nudeln al dente, dann mischen — nicht zu wässrig.",
 techniquePl:
 "Kapustę dusić do miękkości i aromatu, makaron al dente, potem wymieszać — nie za rzadko.",
 serveDe:
 "Heiß, mit Dill oder pur. Reste braten am nächsten Tag in der Pfanne auf.",
 servePl:
 "Gorące, z koperkiem albo same. Resztki podsmaż nazajutrz na patelni.",
 diasporaDe:
 "Schneller als Bigos, nutzt dieselbe Kapusta-Logik. Gut für Wochentage.",
 diasporaPl:
 "Szybsze niż bigos, ta sama logika kapusty. Dobre na tydzień.",
 mistakesDe:
 "Zu nasses Kraut, zu weiche Nudeln, zu wenig Abschmecken. Pfeffer und Fett zählen.",
 mistakesPl:
 "Za mokra kapusta, za miękki makaron, za mało doprawienia. Pieprz i tłuszcz mają znacze",
 variantsDe:
 "Vegetarisch ohne Speck, mit Pilzen, oder neben Bigos als weiteres Krautgericht.",
 variantsPl:
 "Wegetariańskie bez boczku, z grzybami albo obok bigosu jako kolejne danie z kapusty.",
 },
 "recipe-pyzy": {
 dishDe: "Pyzy mit Fleisch",
 dishPl: "Pyzy z mięsem",
 vibeDe: "groß, sättigend, Sonntagsprojekt",
 vibePl: "duże, sycące, niedzielny projekt",
 originDe:
 "Pyzy sind große Kartoffelklöße mit Fleischfüllung — aufwendiger als Kopytka, sättigender als Pierogi. Ein ruhiges Sonntagsprojekt für Haushalte, die Zeit und Hunger haben.",
 originPl:
 "Pyzy to duże kluski ziemniaczane z farszem — bardziej pracochłonne niż kopytka, bardziej sycące niż pierogi. Spokojny niedzielny projekt dla domów z czasem i apetytem.",
 shopDe:
 "Kartoffeln, Stärke und Hack sowie Zwiebel und Butter. Chargen und Farce: [Fleischwolf-Kaufberatung](/de/blog/fleischwolf-kaufberatung). Freezer-Logik: [Pierogi einfrieren](/de/blog/freezer-meal-prep).",
 shopPl:
 "Ziemniaki, skrobia i mielone oraz cebula i masło. Partie i farsz: [wilk do mięsa](/pl/blog/wilk-do-miesa). Logika mrożenia: [mrożenie pierogów](/pl/blog/mrozenie-pierogow).",
 techniqueDe:
 "Masse muss halten. Füllung kalt. Sanft kochen, nicht werfen. Erste Probe-Pyza testen.",
 techniquePl:
 "Masa musi trzymać. Farsz zimny. Gotować delikatnie, nie rzucać. Pierwsza próbna pyza.",
 serveDe:
 "Mit Butterzwiebeln — klassisch. Ein bis zwei Pyzy pro Person reichen oft.",
 servePl:
 "Z cebulą na maśle — klasycznie. Jedna–dwie pyzy na osobę często wystarczą.",
 diasporaDe:
 "Weniger bekannt als Pierogi in DE — lohnt als Familienprojekt am Wochenende.",
 diasporaPl:
 "Mniej znane niż pierogi w DE — warto jako rodzinny projekt w weekend.",
 mistakesDe:
 "Zu weiche Masse, heiße Füllung, zu starkes Kochen. Geduld schlägt Tempo.",
 mistakesPl:
 "Za miękka masa, gorący farsz, zbyt gwałtowne gotowanie. Cierpliwość bije tempo.",
 variantsDe:
 "Mit Pilzfüllung, oder Kopytka als einfachere Alternative ohne Füllen.",
 variantsPl:
 "Z farszem grzybowym albo kopytka jako prostsza alternatywa bez nadziewania.",
 },
 "recipe-zrazy": {
 dishDe: "Zrazy zawijane",
 dishPl: "Zrazy zawijane",
 vibeDe: "festlich, langsam geschmort, sonntags",
 vibePl: "odświętne, długo duszone, niedzielne",
 originDe:
 "Zrazy sind polnische Rinderrouladen: Senf, Speck, Gurke, lange geschmort. Schlesisch und sonntagstauglich — Partner zu Kluski śląskie und klarer Soße.",
 originPl:
 "Zrazy to wołowe zawijane: musztarda, boczek, ogórek, długo duszone. Śląskie i niedzielne — partner klusek śląskich i jasnego sosu.",
 shopDe:
 "Rinderplätzchen, Senf, Speck und Gewürzgurken sowie Brühe und Majoran. Dutch Oven oder Schmortopf halten die Wärme; Würzen erklärt das [Majeranek-Lexikon](/de/blog/majeranek).",
 shopPl:
 "Plastry wołowiny, musztarda, boczek i ogórki oraz bulion i majeranek. Dutch oven lub garnek do duszenia trzyma ciepło; przyprawę opisuje [leksykon majeranku](/pl/blog/majeranek-leksykon).",
 techniqueDe:
 "Fest rollen, anbraten, zugedeckt schmoren bis gabelweich. Soße abschmecken, nicht eilig.",
 techniquePl:
 "Szczelnie zwinąć, obsmażyć, dusić pod przykryciem do miękkości. Sos doprawić bez pośpiechu.",
 serveDe:
 "Mit Kluski, Kartoffeln oder Kasza. Soße großzügig — sie trägt den Teller.",
 servePl:
 "Z kluskami, ziemniakami albo kaszą. Sos hojnie — on niesie talerz.",
 diasporaDe:
 "Länger als Gulasz, festlicher — gut wenn Gäste kommen und Zeit da ist.",
 diasporaPl:
 "Dłuższe niż gulasz, bardziej odświętne — dobre gdy są goście i czas.",
 mistakesDe:
 "Zu kurze Schmorzeit, lose Rollen, zu wenig Flüssigkeit. Deckel zu lassen.",
 mistakesPl:
 "Za krótkie duszenie, luźne rolady, za mało płynu. Pokrywkę trzymać.",
 variantsDe:
 "Mit Pilzen in der Füllung, oder Gulasz als schnellere Schmor-Alternative.",
 variantsPl:
 "Z grzybami w farszu albo gulasz jako szybsza alternatywa duszenia.",
 },
 "recipe-makowiec": {
 dishDe: "Makowiec",
 dishPl: "Makowiec",
 vibeDe: "festlich, mohnig, gerollt und geduldig",
 vibePl: "świąteczny, makowy, zwinięty i cierpliwy",
 originDe:
 "Makowiec ist die polnische Hefe-Mohnrolle — oft zur Wigilia, aber auch für Sonntagskaffee. Eigene Form, eigene Technik: Teig rollen, Mohnmasse streichen, backen. Nudel-Mohn bleibt bei [Makaron z makiem](/de/rezepte/makaron-z-makiem); die Körner-Schüssel bei [Kutia](/de/rezepte/kutia).",
 originPl:
 "Makowiec to polska rolada drożdżowa z makiem — często na Wigilię, ale też do niedzielnej kawy. Własna forma, własna technika: rozwałkować ciasto, rozsmarować masę, upiec. Makaron z makiem zostaje przy [makaronie z makiem](/pl/rezepte/makaron-z-makiem); miska z ziarnami przy [kutii](/pl/rezepte/kutia).",
 shopDe:
 "Für Rolle und Masse brauchst du blauen Mohn — gemahlen oder zum Mahlen — sowie Mehl, Hefe, Milch, Butter, Eier und Zucker; Rosinen sind optional. Guten Mohn holst du im Polenladen. Masse und Ofentemperatur erklärt die Makowiec-Technik; Menüplatz der Wigilia-Speiseplan.",
 shopPl:
 "Na rolkę i masę potrzebujesz niebieskiego maku — mielonego lub do zmielenia — oraz mąki, drożdży, mleka, masła, jajek i cukru; rodzynki są opcjonalne. Dobry mak kupisz w sklepie polskim. Technik makowca przy masie i piecu; miejsce w menu przy planie wigilijnym.",
 techniqueDe:
 "Mohnmasse streichfähig binden, Teig elastisch gehen lassen, mit Randabstand rollen, mittlere Hitze, erst nach dem Abkühlen schneiden. Zu heiß zerstört die Spirale außen und lässt innen roh.",
 techniquePl:
 "Masę makową związać do smarowania, ciasto elastycznie wyrosnąć, zwijać z zapasem od brzegu, średnia temperatura, kroić po ostudzeniu. Za gorąco niszczy spiralę z zewnątrz i zostawia środek surowy.",
 serveDe:
 "In Scheiben, oft mit Puderzucker. Am Vortag gebacken oft ruhiger für den Heiligabend. Passt als Schluss nach Barszcz und Uszka.",
 servePl:
 "W plastrach, często z cukrem pudrem. Upieczony dzień wcześniej spokojniejszy na Wigilię. Pasuje jako finał po barszczu i uszkach.",
 diasporaDe:
 "In DE rettet früher Backtag den 24.: Geruch am 23., Ruhe am Abend. Fertigware aus dem Laden ist Notfall, nicht Technikersatz.",
 diasporaPl:
 "W DE wcześniejszy dzień pieczenia ratuje 24.: zapach 23., spokój wieczorem. Gotowiec ze sklepu to awaria, nie zamiennik techniki.",
 mistakesDe:
 "Trockene Masse, zu viel Mehl, zu heißer Ofen, zu früh schneiden, Hefe mit kochender Flüssigkeit. Randzone beim Füllen nicht vergessen.",
 mistakesPl:
 "Sucha masa, za dużo mąki, zbyt gorący piec, zbyt wczesne krojenie, drożdże zabite wrzątkiem. Nie zapomnij strefy brzegowej przy smarowaniu.",
 variantsDe:
 "Mit Rosinen, mit Zuckerguss, kleinere Rollen für kleinere Öfen. Faworki sind anderes Festtagsbacken — eigene Technik-Seite.",
 variantsPl:
 "Z rodzynkami, z lukrem, mniejsze rolady do mniejszych pieców. Faworki to inne pieczenie świąteczne — osobna strona techniki.",
 },
 "recipe-uszka": {
 dishDe: "Uszka mit Pilzen",
 dishPl: "Uszka z grzybami",
 vibeDe: "klein, intensiv pilzig, wigilijny",
 vibePl: "małe, intensywnie grzybowe, wigilijne",
 originDe:
 "Uszka sind kleine Teigtaschen — oft mit Pilzfüllung — die klassisch in klarem Barszcz schwimmen. Sie sind keine große Pierogi-Charge und kein Bestandteil des Barszcz-Rezepts als Duplikat: eigenes Rezept, eigener Fokus. Barszcz bleibt Rezept für die Suppe; Uszka Rezept für die Teigtaschen.",
 originPl:
 "Uszka to małe pierogi — często z farszem grzybowym — klasycznie w klarownym barszczu. To nie wielka partia pierogów i nie duplikat przepisu na barszcz: własna Rezept, własny fokus. Barszcz zostaje przepisem na zupy; uszka zostają przepisem na pierożki.",
 shopDe:
 "Getrocknete Pilze holst du am zuverlässigsten im [Polenladen](/de/blog/polenladen-einkaufen); dazu Zwiebel, Mehl, Ei und Öl. Den Barszcz kochst du separat nach dem [Barszcz-Rezept](/de/rezepte/barszcz-czerwony) und der [Barszcz-Technik](/de/blog/barszcz-technik). Teiggefühl gibt der [Pierogi-Teig](/de/blog/pierogi-teig)-Guide; wer am Vortag formt, nutzt den [Freezer-Guide](/de/blog/freezer-meal-prep).",
 shopPl:
 "Suszone grzyby najpewniej kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy); do tego cebula, mąka, jajko i olej. Barszcz gotujesz osobno według [przepisu](/pl/rezepte/barszcz-czerwony) i [techniki](/pl/blog/jak-ugotowac-barszcz). Przy cieście pomaga [ciasto na pierogi](/pl/blog/ciasto-na-pierogi); dzień wcześniej — [mrożenie](/pl/blog/mrozenie-pierogow).",
 techniqueDe:
 "Füllung trocken schmoren, kleine Kreise, wenig Füllung, fest zu Öhrchen schließen. In leicht siedendem Wasser garen, bis sie aufschwimmen. In der Schale mit heißem Barszcz zusammenführen — nicht stundenlang in der Suppe lagern.",
 techniquePl:
 "Farsz dusić na sucho, małe koła, mało farszu, szczelnie zamykać w uszka. Gotować w lekko wrzącej wodzie aż wypłyną. W misce łączyć z gorącym barszczem — nie trzymać godzinami w zupie.",
 serveDe:
 "Als erste Gang-Logik zur Wigilia mit klarem Barszcz. Auch allein mit Butter — dann anderes Gerichtserlebnis. Kraut-Pilz-Pierogi sind verwandt, aber größer und oft Hauptgang.",
 servePl:
 "Jako logika pierwszego dania Wigilii z klarownym barszczem. Też same z masłem — wtedy inne doświadczenie. Pierogi z kapustą i grzybami są blisko, ale większe i często danie główne.",
 diasporaDe:
 "Am 23. formen, einfrieren oder kühl lagern, am 24. nur kochen — entlastet den Abend neben Barszcz und Makowiec.",
 diasporaPl:
 "23. lepić, mrozić lub chłodzić, 24. tylko gotować — odciąża wieczór obok barszczu i makowca.",
 mistakesDe:
 "Nasse Füllung, zu große Stücke, zu aggressives Kochen, Uszka in der Suppe einweichen. Barszcz trüben durch Mitkochen der Teigtaschen.",
 mistakesPl:
 "Mokry farsz, za duże sztuki, zbyt gwałtowne gotowanie, namaczanie w zupie. Mętnienie barszczu przez gotowanie uszek w wywarze.",
 variantsDe:
 "Mit Sauerkraut-Anteil in der Füllung, oder fertige Uszka aus dem Polenladen als Notfall. Klare Suppe: Barszcz-Rezept — nicht hier duplizieren.",
 variantsPl:
 "Z udziałem kapusty kiszonej w farszu albo gotowe uszka ze sklepu jako awaria. Klarowna zupa: przepis na barszcz — nie duplikować tu.",
 },
 "recipe-karp": {
 dishDe: "Karp po polsku",
 dishPl: "Karp po polsku",
 vibeDe: "festlich, zart, nach Zwiebel und Majoran",
 vibePl: "świąteczny, delikatny, z cebulą i majerankiem",
 originDe:
 "Karpfen ist für viele Familien der warme Fischgang der Wigilia — nicht Pflichtkanon, aber starkes Signal. Gebacken mit Zwiebel ist die diaspora-taugliche Variante: weniger Pfannenchaos als frittiert, klarer Geschmack. Der Wigilia-Speiseplan bleibt das passende Rezept für Menüreihenfolge und Anlass; hier bleibt der Kochfokus „Karp Rezept“.",
 originPl:
 "Karp jest dla wielu domów ciepłą rybą Wigilii — nie sztywny kanon, ale mocny sygnał. Pieczony z cebulą to wariant pod diasporę: mniej chaosu niż smażenie, czytelny smak. Menu wigilijne zostaje przepisem na kolejności i okazji; tu zostaje Rezept „karp przepis”.",
 shopDe:
 "Frisch oder tiefgekühlt an der Fischtheke / im Polenladen. Zwiebel, Zitrone, Majoran, Dill. Majeranek-Lexikon für das Gewürz; Polenladen-Guide für den Einkaufstag. Gräten und Portionsgröße vorher klären — Kinderportionen oft filetiert.",
 shopPl:
 "Świeży lub mrożony w ladzie rybnej / sklepie polskim. Cebula, cytryna, majeranek, koperek. Leksykon majeranku przy przyprawie; przewodnik po sklepie polskim przy zakupach. Ości i wielkość porcji — dla dzieci często filet.",
 techniqueDe:
 "Salzen, säuern, würzen, ziehen lassen; Zwiebeln anschwitzen; mittlere Ofentemperatur, bis sich die Fasern lösen. Nicht austrocknen. Alternativ pfannenbraten — anderes Timing, gleiche Würzlogik.",
 techniquePl:
 "Posolić, skwasić, doprawić, odstawić; cebulę zeszklić; średnia temperatura pieca aż mięso się oddziela. Nie wysuszać. Alternatywnie smażyć — inny timing, ta sama logika przypraw.",
 serveDe:
 "Mit Zitrone und Dill, oft nach klarem Barszcz und Uszka. Kartoffeln oder Brot je nach Hausbrauch. Reste kalt oder aufgewärmt — am zweiten Tag milder.",
 servePl:
 "Z cytryną i koperkiem, często po klarownym barszczu i uszkach. Ziemniaki lub chleb według domu. Resztki zimne lub odgrzane — drugiego dnia łagodniejsze.",
 diasporaDe:
 "In DE ist lebender Karpfen selten Alltag — Portionen und Filets sind praxisnäher. Am 24. vormittags würzen, abends nur backen. Śledź bleibt der kalte Fischgang; Karp der warme.",
 diasporaPl:
 "W DE żywy karp rzadko jest codziennością — porcje i filety są praktyczniejsze. 24. rano doprawić, wieczorem tylko piec. Śledź zostaje zimną rybą; karp ciepłą.",
 mistakesDe:
 "Zu heiß und zu lange = trocken. Zu wenig Säure = fade. Speiseplan-Mengen hier duplizieren statt zu verlinken. Mit Śledź-Fokus vermischen.",
 mistakesPl:
 "Za gorąco i za długo = suchy. Za mało kwasu = mdły. Duplikować menu zamiast linkować. Mieszać fokus ze śledziem.",
 variantsDe:
 "In Gelee (galareta), paniert gebraten, oder moderne Alternative Lachs — ehrlich benennen. Kalter Hering: eigenes Rezept Śledź.",
 variantsPl:
 "W galarecie, smażony w panierce albo nowoczesna alternatywa łosoś — nazywać uczciwie. Zimny śledź: osobny przepis.",
 },
 "recipe-krokiety": {
 dishDe: "Krokiety",
 dishPl: "Krokiety",
 vibeDe: "knusprig außen, weich innen, barszczfreundlich",
 vibePl: "chrupiące na zewnątrz, miękkie w środku, do barszczu",
 originDe:
 "Krokiety sind gerollte, panierte Naleśniki — klassisch mit Kraut und Pilzen, oft neben klarem Barszcz. Sie sind keine reine Naleśniki-Dessertseite und kein Duplikat von Pierogi Kraut-Pilze: eigene Form (Rolle + Panade), eigener Fokus „Krokiety Rezept“.",
 originPl:
 "Krokiety to zwinięte, panierowane naleśniki — klasycznie z kapustą i grzybami, często obok klarownego barszczu. To nie deserowe naleśniki i nie duplikat pierogów z kapustą: własna forma (rolka + panierka), własny fokus KW „krokiety przepis”.",
 shopDe:
 "Mehl, Milch und Eier für den Teig; Sauerkraut, getrocknete Pilze und Zwiebel für die Füllung; Semmelbrösel und Fett zum Braten. Teiggefühl im [Naleśniki-Guide](/de/blog/nalesniki-guide); Kraut und Pilze über [Kiszenie](/de/blog/kiszenie-guide) oder [Polenladen](/de/blog/polenladen-einkaufen); Panade-Logik im [Panieren-Guide](/de/blog/panieren-schabowy).",
 shopPl:
 "Mąka, mleko i jajka na ciasto; kapusta kiszona, suszone grzyby i cebula na farsz; bułka tarta i tłuszcz do smażenia. Przy cieście pomaga [przewodnik naleśników](/pl/blog/nalesniki-przewodnik); przy kapuście i grzybach [kiszenie](/pl/blog/kiszenie-przewodnik) lub [sklep polski](/pl/blog/sklep-polski-zakupy); przy panierce [panierowanie](/pl/blog/panierowanie-kotlet).",
 techniqueDe:
 "Dünne Naleśniki, trockene Füllung, fest rollen, panieren, goldbraun braten. Füllung muss abgekühlt sein. Zu nass = Rollen platzen; zu dick = Teig dominiert.",
 techniquePl:
 "Cienkie naleśniki, suchy farsz, mocno zwijać, panierować, smażyć na złoto. Farsz ostudzony. Za mokry = pękają; za gruby = ciasto dominuje.",
 serveDe:
 "Heiß mit klarem Barszcz oder allein mit Śmietana. Reste erneut in der Pfanne knusprig machen. Uszka sind verwandter Wigilia-Partner, aber kleine Teigtaschen — andere Rezept.",
 servePl:
 "Gorące z klarownym barszczem albo same ze śmietaną. Resztki odsmażyć na chrupko. Uszka to pokrewny partner Wigilii, ale małe pierożki — inna Rezept.",
 diasporaDe:
 "Wochenendprojekt: vormittags Teig und Füllung, nachmittags rollen und braten. Freezer: geformte Rollen vor dem Panieren einfrieren; paniert frisch braten.",
 diasporaPl:
 "Projekt weekendowy: rano ciasto i farsz, po południu zwijać i smażyć. Freezer: uformowane rolki przed panierowaniem; panierowane smażyć świeżo.",
 mistakesDe:
 "Nasse Füllung, zu dicke Pfannkuchen, kaltes Fett, Panade abplatzen lassen. Barszcz- oder ",
 mistakesPl:
 "Mokry farsz, za grube naleśniki, zimny tłuszcz albo odpadająca panierka psują krokiety. Nie mieszaj ich z przepisem na [barszcz](/pl/rezepte/barszcz-czerwony) ani z cienkimi [naleśnikami](/pl/rezepte/nalesniki/twarog) — tu liczą się rolka i panierka.",
 variantsDe:
 "Mit Fleischfüllung, mit Champignons statt Trockenpilzen, vegetarisch streng ohne Speck. Pierogi Kraut-Pilze bleiben gefaltete Variante derselben Aromen.",
 variantsPl:
 "Z farszem mięsnym, z pieczarkami zamiast suszonych, wegetariańsko bez boczku. Pierogi z kapustą zostają wariantem tych samych aromatów w formie pieroga.",
 },
 "recipe-sernik": {
 dishDe: "Sernik",
 dishPl: "Sernik",
 vibeDe: "cremig, festlich, nach Twaróg und Vanille",
 vibePl: "kremowy, świąteczny, z twarogu i wanilii",
 originDe:
 "Sernik ist der polnische Käsekuchen auf Twaróg-Basis — dichter und oft höher als mancher deutsche Käsekuchen. Er gehört zum Festtagsbacken neben Makowiec, ohne dessen Platz zu übernehmen: Makowiec bleibt die Mohnrolle; Sernik bleibt der Käsekuchen. Der Makowiec-Technik-Guide hilft bei Ofengeduld und Festtagsplanung.",
 originPl:
 "Sernik to polski sernik na twarogu — gęstszy i często wyższy niż niejedne niemieckie serniki. Należy do wypieków świątecznych obok makowca, bez przejmowania jego miejsca: makowiec zostaje roladą makową; sernik zostaje sernikiem. Technika makowca pomaga przy piecu i planie świąt, nie jako zamiennik tego przepisu.",
 shopDe:
 "Twaróg sernikowy oder gut abgetropfter Speisequark, Eier, Zucker und Butter sowie etwas Bindung (Mehl/Pudding), Vanille und optional Mürbeteigboden. [Twaróg-Guide](/de/blog/twarog-deutschland) und [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) für den Einkauf; typische Quarkqualität oft im [Polenladen](/de/blog/polenladen-einkaufen).",
 shopPl:
 "Twaróg sernikowy lub dobrze odsączony Quark, jajka, cukier i masło oraz odrobina spoiwa (mąka/budyń), wanilia i opcjonalnie kruchy spód. [Przewodnik twarogu](/pl/blog/twarog-w-niemczech) i [zamienniki](/pl/blog/zamienniki-skladnikow) przy zakupach; typową jakość często w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
 techniqueDe:
 "Masse glatt, nicht überrühren bis schaumig-kollabierend; mittlere Hitze; Mitte darf leicht wackeln; im Ofen nachruhen; erst kalt schneiden. Risse oft durch zu heiße Hitze oder Zugluft.",
 techniquePl:
 "Masę gładką, nie ubijać do zapadnięcia; średnia temperatura; środek może lekko drgać; dociągnąć w piecu; kroić zimny. Pęknięcia często od zbyt wysokiej temperatury lub przeciągu.",
 serveDe:
 "In Stücken mit Puderzucker, Früchten oder allein zum Kaffee. Zu Ostern und Sonntag häufig; zu Wigilia oft neben oder statt Makowiec — Hausbrauch entscheidet.",
 servePl:
 "W kawałkach z cukrem pudrem, owocami albo samym do kawy. Na Wielkanoc i niedzielę często; na Wigilię obok lub zamiast makowca — decyduje dom.",
 diasporaDe:
 "Am Vortag backen entlastet Gästeessen. Deutscher Quark braucht oft Abtropfen. Nicht mit Faworki/Pączki-Charakter vermischen — anderes Fettgebäck.",
 diasporaPl:
 "Pieczenie dzień wcześniej odciąża gości. Niemiecki Quark często wymaga odsączenia. Nie mieszać z faworkami ani pączkami — inne wypieki tłuszczowe.",
 mistakesDe:
 "Zu nasser Quark, zu heißer Ofen, zu früh schneiden, Makowiec nicht als Hauptname dieses Rezepts verkaufen. Boden roh lassen durch zu kurze Zeit.",
 mistakesPl:
 "Za mokry twaróg, zbyt gorący piec, zbyt wczesne krojenie, mylenie z makowcem w nazwie. Surowy spód przez za krótki czas.",
 variantsDe:
 "Ohne Boden, mit Rosinen, mit Schokotropfen (modern), kleinerer Springform. Makowiec bleibt die Mohnrolle — anderes Rezept.",
 variantsPl:
 "Bez spodu, z rodzynkami, z czekoladą (nowocześnie), mniejsza tortownica. Makowiec zostaje roladą makową — osobny przepis.",
 },
 "recipe-sledz": {
 dishDe: "Śledź w oleju",
 dishPl: "Śledź w oleju",
 vibeDe: "kalt, zwiebelig, salzig-fettig zum Brot",
 vibePl: "zimny, cebulowy, słono-tłusty do chleba",
 originDe:
 "Śledź ist der kalte Fischgang vieler Wigilia-Tische und zugleich Alltagsteller mit Brot. In Öl mit Zwiebel ist die klarste diaspora-Variante: wenig Technik, viel Ziehenlassen. Rezept für „Śledź Rezept“; Wigilia-Speiseplan bleibt Menü-Artikel; Karp bleibt warmer Fisch.",
 originPl:
 "Śledź to zimna ryba wielu stołów wigilijnych i zarazem codzienny talerz z chlebem. W oleju z cebulą to najczytelniejszy wariant diasporowy: mało techniki, dużo marynowania. menu wigilijne zostaje przepisem na menu; karp zostaje rybą ciepłą.",
 shopDe:
 "Matjes oder Salzheringfilets (Polenladen/Kühltruhe), Zwiebeln und neutrales Öl sowie Lorbeer und Piment. Abtropfen und bei Bedarf wässern. Marken und Alternativen: [Polenladen-Guide](/de/blog/polenladen-einkaufen) und [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) — Rollmops ehrlich umdeklarieren.",
 shopPl:
 "Matjasy lub filety śledziowe (sklep polski/chłodnia), cebule i olej neutralny oraz liść laurowy i ziele angielskie. Odsączyć i w razie potrzeby wymoczyć. Marki i zamienniki: [sklep polski](/pl/blog/sklep-polski-zakupy) i [zamienniki](/pl/blog/zamienniki-skladnikow) — rolmopsy nazwać uczciwie.",
 techniqueDe:
 "Schneiden, schichten, würzen, ziehen lassen — Kühlschrank, abgedeckt. Schärfe der Zwiebel mit kurzem Brühen mildern. Nicht kochen. Zu früh servieren = flach; über Nacht oft besser.",
 techniquePl:
 "Kroić, warstwić, przyprawiać, odstawić — lodówka, przykryte. Ostrość cebuli złagodzić krótkim sparzeniem. Nie gotować. Za wcześnie = płasko; przez noc często lepiej.",
 serveDe:
 "Kalt mit Brot, manchmal mit Ei oder Gurke. An Wigilia oft neben anderen kalten Speisen; an Werktagen als schneller Teller. Warm: Karp-Rezept.",
 servePl:
 "Zimne z chlebem, czasem z jajkiem lub ogórkiem. Na Wigilię obok innych zimnych; w tygodniu jako szybki talerz. Na ciepło: przepis na karpia.",
 diasporaDe:
 "Vorbereiten am 23., servieren am 24. — null Ofenstress neben Barszcz und Karp. Reste halten im Kühlschrank einige Tage.",
 diasporaPl:
 "Przygotować 23., podać 24. — zero stresu pieca obok barszczu i karpia. Resztki trzymają się w lodówce kilka dni.",
 mistakesDe:
 "Zu salzig ohne Wässern, zu wenig Öl, warme Lagerung. Karp- oder Mit Rollmops-Sauce als „klassisch“ verkaufen ohne Hinweis.",
 mistakesPl:
 "Za słony bez namaczania, za mało oleju albo trzymanie w cieple psuje filety. Nie myl z [karpem](/pl/rezepte/karp) ani z całym planem Wigili. Rolmops w sosie jako „klasyka” — tylko z dopiskiem, że to inna forma.",
 variantsDe:
 "Śledź w śmietanie, po kaszubsku mit Apfel, mit Senf. Sahnevariante: Śmietana-Lexikon. Anderer Fisch warm: Karp.",
 variantsPl:
 "Śledź w śmietanie, po kaszubsku z jabłkiem, z musztardą. Wariant śmietany: leksykon śmietany. Inna ryba na ciepło: karp.",
 },
};

/**
 * Wave 8 — merge order:
 * A Beilagen · B Suppen · C Pączki · D retrofit (W5–W7 links) · D Knedle.
 * Retrofit wins on W5–W7 keys; new W8 IDs from A–D.
 */
Object.assign(
 FACTS,
 W8_FACTS_A,
 W8_FACTS_B,
 W8_FACTS_C,
 W8_FACTS_D_RETROFIT,
 W8_FACTS_D,
);

/**
 * Wave 9 — merge order:
 * A Fleisch · B Beilage/Suppe · C Babka · W8 retrofit (Kapusta↔Kaszanka) · D Kaszanka.
 * Retrofit/D win where intentional on shared keys.
 */
Object.assign(
 FACTS,
 W9_FACTS_A,
 W9_FACTS_B,
 W9_FACTS_C,
 W9_FACTS_W8_RETROFIT,
 W9_FACTS_D,
);

/**
 * Wave 10 — merge order:
 * A Flaki+Schab · B Piernik+Pomidorowa · C Family variants ·
 * W9 retrofit (Leniwe/Łazanki↔Makaron) · D Makaron.
 * Sibling variants* patches in base FACTS (C) must remain; retrofit/D win on shared keys.
 */
Object.assign(
 FACTS,
 W10_FACTS_A,
 W10_FACTS_B,
 W10_FACTS_C,
 W10_FACTS_W9_RETROFIT,
 W10_FACTS_D,
);

/** Wave 11 D — Ryba po grecku · Golonka · Kompot z suszu */
Object.assign(FACTS, W11_FACTS_D);

/**
 * Wave 12 — merge order:
 * A Suppen · B Wigilia-Pasta+Szarlotka · C Ostern+Buraczki · D Klopsy+Kładzione.
 */
Object.assign(FACTS, W12_FACTS_A, W12_FACTS_B, W12_FACTS_C, W12_FACTS_D);

/**
 * Wave 13 — merge order:
 * A Suppen · B Kutia+Napoleonka · C Chałka+Pasztet · D Biała kiełbasa.
 */
Object.assign(FACTS, W13_FACTS_A, W13_FACTS_B, W13_FACTS_C, W13_FACTS_D);

/**
 * Wave 14 — merge order:
 * A Bäckerei · B Ostern · C Placek+Zapiekanka · D Leczo.
 */
Object.assign(FACTS, W14_FACTS_A, W14_FACTS_B, W14_FACTS_C, W14_FACTS_D);

/**
 * Wave 15 — merge order:
 * A Festfleisch · B Buffet · C Beilagen · D Suppe+Kisiel.
 */
Object.assign(FACTS, W15_FACTS_A, W15_FACTS_B, W15_FACTS_C, W15_FACTS_D);

/**
 * Wave 16 — merge order:
 * A Surówka+De volaille · B Kasza+Tatar · C Pierniczki+Knedle · D Chrzan+Kurczak.
 */
Object.assign(FACTS, W16_FACTS_A, W16_FACTS_B, W16_FACTS_C, W16_FACTS_D);

/**
 * Wave 17 — Kiszonki i marynaty: fermentowane ogórki/kapusta/czosnek, marynowane
 * grzyby/warzywa w occie (papryka, śliwki, cebula, kalafior, buraki, ogórki).
 */
Object.assign(FACTS, W17_FACTS);

/**
 * Wave 17 (malosolne gap fill) — the 3 Ogórki małosolne variants (ostre,
 * miod, deb) accidentally left out of the original Wave 17 batch.
 */
Object.assign(FACTS, W17_MALOSOLNE_FACTS);

/**
 * Longform assembler — calm cooking prose, not brand or SEO padding.
 * Prefer 2–3 earned sections; FACTS fields must already be full sentences.
 */
function expand(locale: Locale, f: ArticleFacts): string {
  if (locale === "de") {
    return [
      `${f.dishDe}, ${f.vibeDe}. ${f.originDe}`,
      `## Einkaufen und kochen`,
      f.shopDe,
      f.techniqueDe,
      f.diasporaDe,
      `## Am Tisch`,
      f.serveDe,
      f.mistakesDe,
      f.variantsDe,
    ].join("\n\n");
  }

  return [
    `${f.dishPl}, ${f.vibePl}. ${f.originPl}`,
    `## Zakupy i gotowanie`,
    f.shopPl,
    f.techniquePl,
    f.diasporaPl,
    `## Przy stole`,
    f.servePl,
    f.mistakesPl,
    f.variantsPl,
  ].join("\n\n");
}

export function getRecipeArticle(
 recipeId: string,
 locale: Locale,
): string {
 const facts = FACTS[recipeId];
 if (!facts) {
 return locale === "de"
 ? "Ausführlicher Artikel folgt. Nutze oben den Wechsel zwischen Einkaufen und Kochen."
 : "Pełny artykuł wkrótce. Użyj przełącznika Zakupy / Gotuj powyżej.";
 }
 return expand(locale, facts);
}

export function wordCount(text: string): number {
 return text.trim().split(/\s+/).filter(Boolean).length;
}

const STUB_MARKERS = [
 "Ausführlicher Artikel folgt",
 "Pełny artykuł wkrótce",
];

/** Prefer seed article only when it is real longform; else FACTS expand. */
export function resolveRecipeArticle(
 recipeId: string,
 locale: Locale,
 seedArticle?: string | null,
): string {
 const seeded = seedArticle?.trim() ?? "";
 const fromFacts = getRecipeArticle(recipeId, locale);
 const seedIsStub = STUB_MARKERS.some((m) => seeded.includes(m));
 if (seeded && !seedIsStub && wordCount(seeded) >= 400) {
 return seeded;
 }
 if (!STUB_MARKERS.some((m) => fromFacts.includes(m))) {
 return fromFacts;
 }
 return seeded || fromFacts;
}
