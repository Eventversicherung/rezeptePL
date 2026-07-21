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
 "Trotz des Namens „ruskie“ stammen diese Pierogi aus der galizischen Küche und gehören heute zu den bekanntesten Gerichten Polens. Die Füllung aus Kartoffel und Twaróg ist schlicht, aber präzise: zu nass wird sie matschig, zu trocken bricht der Teig.",
 originPl:
 "Mimo nazwy „ruskie” pierogi te wywodzą się z kuchni galicyjskiej i dziś są jednym z najbardziej rozpoznawalnych dań Polski. Farsz z ziemniaka i twarogu jest prosty, ale precyzyjny: zbyt mokry robi się kleisty, zbyt suchy rozrywa ciasto.",
 shopDe:
 "In Deutschland findest du Twaróg im Polenladen; als Alternative eignet sich gut abgetropfter Magerquark. Mehl Typ 405 oder 550 funktioniert. Für Teig und Form siehe Pierogi-Guide und Teig Guide — dort gehört die Technik hin, hier die Ruskie-Füllung.",
 shopPl:
 "W Niemczech twaróg kupisz w polskim sklepie; zamiennikiem może być dobrze odsączony Quark. Mąka typ 405 lub 550 działa dobrze. Ciasto i lepienie opisuje Pierogi-Guide i przewodnik po cieście — tu zostaje farsz ruskie.",
 techniqueDe:
 "Der Teig braucht Ruhe, die Ränder müssen fest verschlossen sein, und das Salzwasser darf nur leicht köcheln. Wenn Pierogi aufsteigen, sind sie meist gar. Butter und goldene Zwiebel sind kein Extra, sondern Teil des Gerichts.",
 techniquePl:
 "Ciasto potrzebuje odpoczynku, brzegi muszą być szczelnie zlepione, a woda tylko lekko wrzeć. Gdy pierogi wypłyną, zwykle są gotowe. Masło i złota cebula to nie dodatek, tylko część dania.",
 serveDe:
 "Serviere heiß, mit Sauerrahm oder ohne. Reste brät man am nächsten Tag in der Pfanne. Viele finden sie dann sogar besser.",
 servePl:
 "Podawaj gorące, ze śmietaną lub bez. Resztki smaży się następnego dnia na patelni. Wielu uważa, że wtedy smakują jeszcze lepiej.",
 diasporaDe:
 "Für Polen in Deutschland ist Pierogi-Tag oft Ritual: Teig am Vormittag, Füllen am Nachmittag, gemeinsames Essen am Abend. Mit Kindern gehen die Mengen schnell nach oben. Plane großzügig.",
 diasporaPl:
 "Dla Polaków w Niemczech dzień na pierogi bywa rytuałem: ciasto rano, lepienie po południu, wspólne jedzenie wieczorem. Z dziećmi ilości rosną szybko. Planuj z zapasem.",
 mistakesDe:
 "Die klassischen Fehler sind zu wenig Mehl im Teig, eine nasse Füllung und zu wildes Kochen. Teste lieber eine kleine Charge, bevor du fünfzig Stück formst — so korrigierst du Naht und Konsistenz früh.",
 mistakesPl:
 "Klasyczne błędy to za mało mąki w cieście, mokry farsz i zbyt gwałtowne gotowanie. Lepiej przetestować małą partię, zanim ulepisz pięćdziesiąt sztuk — wtedy wcześnie poprawisz szew i konsystencję.",
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
 "Bigos ist das polnische Nationalgericht im besten Sinne: kein starres Rezept, sondern eine Methode. Sauerkraut, Fleisch, manchmal Wild, getrocknete Pilze und Zeit. Daraus entsteht ein Eintopf, der Geschichte und Haushalt gleichzeitig erzählt.",
 originPl:
 "Bigos to polskie danie narodowe w najlepszym sensie: nie sztywny przepis, lecz metoda. Kapusta kiszona, mięso, czasem dziczyzna, suszone grzyby i czas. Powstaje gulasz, który opowiada historię domu.",
 shopDe:
 "Sauerkraut und getrocknete Pilze holst du am zuverlässigsten im Polenladen. Fleisch darf gemischt sein: Schwein, Wurstreste, Speck. Lorbeer und Piment sind Pflicht. Für Schmor-Topf und Timing: Bigos-Guide und Dutch Oven.",
 shopPl:
 "Kapustę kiszoną i suszone grzyby najpewniej kupisz w polskim sklepie. Mięso może być mieszane: wieprzowina, resztki kiełbasy, boczek. Liść laurowy i ziele angielskie są obowiązkowe. Garnek i czas — w przewodniku po bigosie i Dutch oven.",
 techniqueDe:
 "Bigos will Niedrigtemperatur und Geduld. Anbraten für Röstaromen, dann langes Schmoren. Über Nacht im Kühlschrank verdichten sich die Aromen. Plane ihn bewusst einen Tag vorher.",
 techniquePl:
 "Bigos lubi niską temperaturę i cierpliwość. Podsmażenie dla aromatu, potem długie duszenie. Noc w lodówce zagęszcza smak. Planuj go świadomie dzień wcześniej.",
 serveDe:
 "Mit kräftigem Brot, manchmal mit Kartoffeln. Bigos ist Reiseessen, Partyessen und Winteressen zugleich.",
 servePl:
 "Z mocnym chlebem, czasem z ziemniakami. Bigos jest jedzeniem w podróż, na imprezę i na zimę jednocześ",
 diasporaDe:
 "In deutschen Wohnungen riecht Bigos oft nach Wochenende: ein großer Topf reicht für Gäste, und abgekühlte Portionen lassen sich gut einfrieren. Wer unter der Woche wenig Zeit hat, kocht ihn bewusst am Vortag und wärmt nur noch auf.",
 diasporaPl:
 "W niemieckich mieszkaniach bigos często pachnie weekendem: duży garnek wystarczy dla gości, a wystudzone porcje dobrze się mrożą. Przy pełnym tygodniu warto ugotować go dzień wcześniej i tylko odgrzać.",
 mistakesDe:
 "Häufig scheitert Bigos an zu wenig Zeit, zu dünner Flüssigkeit oder unklarer Säure. Er soll löffelfest sein, nicht wie Suppe. Wird er zu sauer, spüle das Kraut kurz oder mische frischen Kohl dazu — Zucker nur als letzte Notbremse.",
 mistakesPl:
 "Często bigos nie wychodzi przez za mało czasu, zbyt rzadki sos albo niejasny kwas. Ma być gęsty, nie jak zupa. Gdy jest zbyt kwaśny, krótko spłucz kapustę albo dodaj świeżej — cukier tylko jako ostatnia deska ratunku.",
 variantsDe:
 "Mit Äpfeln, mit Rotwein, mit mehr Wurst oder eher vegetarisch mit Extra-Pilzen. Bigos-Guide und Dutch-Oven-Tipps helfen bei Topf und Schmorzeit. Die Grundidee bleibt: Kraut, Umami, Zeit.",
 variantsPl:
 "Z jabłkami, z czerwonym winem, z większą ilością kiełbasy albo bardziej wegetariańsko z dodatkiem grzybów. Przewodnik po bigosie i garnek do duszenia pomagają z czasem. Idea zostaje: kapusta, umami, czas.",
 },
 "recipe-zurek": {
 dishDe: "Żurek",
 dishPl: "Żurek",
 vibeDe: "säuerlich, würzig, festlich und alltagstauglich zugleich",
 vibePl: "kwaśny, aromatyczny, odświętny i codzienny zarazem",
 originDe:
 "Żurek ist Sauerteigsuppe auf Roggenbasis — ein Geschmack, den viele mit Ostern verbinden, der aber das ganze Jahr trägt. Die Säure kommt vom Żur-Ansatz, nicht von Sahne oder Essig allein; Majoran und eine gute Brühe halten die Suppe würzig statt nur sauer.",
 originPl:
 "Żurek to zupa na zakwasie żytnim — smak, który wielu łączy z Wielkanocą, ale sprawdza się przez cały rok. Kwasowość pochodzi z zakwasu, nie z samej śmietany czy octu; majeranek i dobry bulion trzymają zupę aromatyczną, a nie tylko kwaśną.",
 shopDe:
 "Fertigen Żur-Ansatz gibt es im [Polenladen](/de/blog/polenladen-einkaufen) in Flaschen; wer selbst ansetzt, folgt dem [Zakwas-Guide](/de/blog/zakwas-zurek). Weiße Wurst findest du dort ebenfalls — Mengen und Garzeiten für die Wurst allein stehen bei [Biała kiełbasa](/de/rezepte/biala-kielbasa). Majoran ist das Aroma, das Żurek sofort „polnisch“ macht und vor Feiertagen den Einkauf rettet.",
 shopPl:
 "Gotowy zakwas na żur kupisz w butelkach w [sklepie polskim](/pl/blog/sklep-polski-zakupy); własny zakwas opisuje [przewodnik po zakwasie](/pl/blog/zakwas-na-zurek). Białą kiełbasę znajdziesz tam też — ilości i czasy samej kiełbasy są przy [białej kiełbasie](/pl/rezepte/biala-kielbasa). Majeranek to aromat, który od razu czyni żurek „polskim” i ratuje zakupy przed świętami.",
 techniqueDe:
 "Koch Żurek nicht zu stark, sonst wird die Suppe trüb und die Wurst hart. Kartoffeln garst du weich mit; Ei kommt zum Schluss oder separat auf den Teller. Abschmecken lohnt erst am Ende, weil sich die Säure beim Kochen noch verändert. Die Einlage-Wurst behandelst du schonend — Details dazu bei [Biała kiełbasa](/de/rezepte/biala-kielbasa).",
 techniquePl:
 "Nie gotuj żurku zbyt gwałtownie, bo zupa zmętnieje, a kiełbasa stwardnieje. Ziemniaki ugotuj miękko razem z zupą; jajko dodaj na końcu albo podaj osobno. Doprawiaj dopiero na końcu, bo kwasowość zmienia się podczas gotowania. Kiełbasę jako dodatek traktuj delikatnie — szczegóły przy [białej kiełbasie](/pl/rezepte/biala-kielbasa).",
 serveDe:
 "Im Teller gehören Wurstscheiben, Ei und kräftiges Brot dazu. Manche reichen Sauerrahm extra dazu — das bleibt Geschmackssache im Haus. Wer die Wurst auch separat kochen will, findet den Weg unter [Biała kiełbasa](/de/rezepte/biala-kielbasa).",
 servePl:
 "Na talerzu pasują plastry kiełbasy, jajko i mocny chleb. Niektórzy podają śmietanę osobno — to kwestia domu, nie reguły. Kiełbasę osobno ugotujesz według [białej kiełbasy](/pl/rezepte/biala-kielbasa).",
 diasporaDe:
 "Für Feiertage in Deutschland rettet Flaschen-Żur den Zeitplan, wenn Gäste kommen und der Kühlschrank voll ist. Wer selbst ansetzt, braucht ein paar Tage Vorlauf — der reinere Geschmack lohnt sich, sobald du den Rhythmus kennst.",
 diasporaPl:
 "Na święta w Niemczech butelkowy żur ratuje harmonogram, gdy przychodzą goście i lodówka jest pełna. Własny zakwas wymaga kilku dni — czystszy smak się opłaca, gdy już znasz rytm.",
 mistakesDe:
 "Zu viel Wasser verdünnt die Suppe, zu wenig Majoran macht sie flach, und zu spät eingerührter Żur schmeckt oft roh-sauer. Die Balance aus Säure und Fleischbrühe entscheidet mehr als die Menge der Einlage.",
 mistakesPl:
 "Za dużo wody rozcieńcza zupę, za mało majeranku spłaszcza smak, a zbyt późno dodany zakwas bywa surowo-kwaśny. Równowaga kwasu i bulionu decyduje bardziej niż ilość dodatków.",
 variantsDe:
 "Du kannst geräucherte Wurst nehmen, das Ei weglassen oder die Suppe klarer als Festtagsvariante halten. Der [Zakwas-Guide](/de/blog/zakwas-zurek) und der [Polenladen](/de/blog/polenladen-einkaufen) helfen bei Ansatz und Wurst; schlesische Häuser würzen oft kräftiger. Andere Säuren, anderer Charakter: warme [Ogórkowa](/de/rezepte/ogorkowa) oder [Kapuśniak](/de/rezepte/kapusniak) — das ist kein Zakwas.",
 variantsPl:
 "Możesz wziąć wędzoną kiełbasę, pominąć jajko albo trzymać zupę jaśniejszą na święta. [Przewodnik po zakwasie](/pl/blog/zakwas-na-zurek) i [sklep polski](/pl/blog/sklep-polski-zakupy) pomagają przy ansatzie i kiełbasie; domy śląskie często przyprawiają mocniej. Inny kwas, inny charakter: ciepła [ogórkowa](/pl/rezepte/ogorkowa) albo [kapuśniak](/pl/rezepte/kapusniak) — to nie zakwas.",
 },
 "recipe-oscypek": {
 dishDe: "gegrillter Oscypek mit Preiselbeeren",
 dishPl: "oscypek z żurawiną",
 vibeDe: "rauchig, salzig-süß, schnell und ehrlich",
 vibePl: "wędzony, słono-słodki, szybki i szczery",
 originDe:
 "Oscypek kommt aus dem Podhale, der Tatra-Region. Der geräucherte Schafskäse ist geschützt und geschmacklich unverwechselbar: fest, rauchig, leicht salzig. Mit Preiselbeeren entsteht der typische Kontrast, den man von Berghütten kennt.",
 originPl:
 "Oscypek pochodzi z Podhala. Wędzony ser owczy jest chroniony i niepowtarzalny w smaku: zwarty, dymny, lekko słony. Z żurawiną powstaje kontrast znany z góralskich szałasów.",
 shopDe:
 "Echten Oscypek gibt es im guten Polenladen oder saisonal auf Märkten — der Oscypek Guide erklärt PDO vs. Nachahmung. Alternativen: geräucherter Halloumi oder Bundz. Preiselbeeren als Kompott sind im deutschen Supermarkt leicht zu finden.",
 shopPl:
 "Prawdziwy oscypek kupisz w dobrym polskim sklepie lub sezonowo na targu — przewodnik po oscypku wyjaśnia PDO i zamienniki. Żurawinę w słoiku łatwo znaleźć w niemieckim markecie.",
 techniqueDe:
 "Scheiben nicht zu dünn schneiden. Mittlere Hitze: der Käse soll an der Oberfläche goldbraun werden und innen weich anschmelzen, ohne völlig zu zerfließen. Zu heiß verbrennt der Rauchgeschmack.",
 techniquePl:
 "Nie kroić zbyt cienko. Średni ogień: ser ma się zarumienić i lekko podtopić w środku, bez całkowitego rozpływania. Za mocny ogień pali dymny aromat.",
 serveDe:
 "Iss den Käse sofort mit Roggenbrot und Preiselbeeren — als Vorspeise, Après-Ski-Teller oder schneller Abend nach der Schicht.",
 servePl:
 "Jedz ser od razu z chlebem żytnim i żurawiną — jako przystawkę, talerz po nartach albo szybką kolację po zmia",
 diasporaDe:
 "Für viele in Deutschland ist Oscypek Erinnerung an Urlaub in Zakopane und gleichzeitig ein ehrliches 15-Minuten-Gericht, wenn nach der Arbeit wenig Zeit bleibt.",
 diasporaPl:
 "Dla wielu w Niemczech oscypek to wspomnienie Zakopanego i jednocześnie uczciwe 15-minutowe danie, gdy po pracy zostaje mało czasu.",
 mistakesDe:
 "Zu langes Braten, zu viel Öl und zu süße Marmelade statt Preiselbeere zerstören den Kontrast. Der Käse soll goldbraun und innen weich bleiben, die Beilage sauer-frisch.",
 mistakesPl:
 "Zbyt długie smażenie, za dużo oleju i zbyt słodki dżem zamiast żurawiny niszczą kontrast. Ser ma zostać złoty i miękki w środku, a dodatek kwaśno-świeży.",
 variantsDe:
 "Mit Speck umwickelt, mit Honig-Tropfen oder auf dem Grill im Sommer. Oscypek Guide für Kauf; Gusseisen für gleichmäßige Kruste. Die Preiselbeere bleibt der klassische Partner.",
 variantsPl:
 "Owinięty boczkiem, z kroplą miodu albo z grilla latem. Przewodnik po oscypku przy zakupach; patelnia żeliwna przy smażeniu. Żurawina zostaje klasycznym partnerem.",
 },
 "recipe-placki": {
 dishDe: "Placki ziemniaczane",
 dishPl: "Placki ziemniaczane",
 vibeDe: "knusprig außen, weich innen, sofort weg",
 vibePl: "chrupiące na zewnątrz, miękkie w środku, znikają od razu",
 originDe:
 "Kartoffelpuffer gibt es in vielen Küchen. Die polnische Version ist oft schlichter gewürzt und lebt von Technik: richtig reiben, richtig ausdrücken, richtig heiß ausbacken.",
 originPl:
 "Placki ziemniaczane zna wiele kuchni. Polska wersja bywa prościej przyprawiona i żyje techniką: dobre tarcie, dobre odciśnięcie, dobre, gorące smaże",
 shopDe:
 "Mehligkochende oder vorwiegend festkochende Kartoffeln funktionieren. Sauerrahm (Schmand) aus dem Kühlregal, Öl mit hohem Rauchpunkt. Placki-Guide für Technik; Gusseisenpfanne für gleichmäßige Kruste.",
 shopPl:
 "Ziemniaki mączyste lub uniwersalne działają. Śmietana z lodówki, olej o wysokiej temperaturze dymienia. Placki-Guide przy technice; patelnia żeliwna przy równomiernym rumieniu.",
 techniqueDe:
 "Wasser aus der Reibemasse ist der Feind der Knusprigkeit. Gut ausdrücken, nicht zu viel Mehl, und die Pfanne wirklich heiß. Dicke Placki bleiben innen roh.",
 techniquePl:
 "Woda z tarcia to wróg chrupkości. Dobrze odciśnij, nie za dużo mąki i naprawdę gorąca patelnia. Grube placki zostają surowe w środku.",
 serveDe:
 "Heiß mit Sauerrahm, Zucker (ja, wirklich), Gulasch oder geräucherter Sahne. Sofort servieren. Composed Teller Puffer+Gulasch obenauf: [Placek po węgiersku](/de/rezepte/placek-po-wegiersku) — das Rezept dafür findest du dort.",
 servePl:
 "Gorące ze śmietaną, cukrem (tak), gulaszem albo wędzoną śmietaną. Podawać od razu. Composed talerz placki+gulasz na wierzchu: [placek po węgiersku](/pl/rezepte/placek-po-wegiersku) — tu zostaje tam.",
 diasporaDe:
 "Placki sind Weeknight-Food mit wenig Zutaten und großem Effekt — in deutschen Küchen ohne Spezialgeräte machbar, sobald die Pfanne wirklich heiß ist.",
 diasporaPl:
 "Placki to jedzenie na zwykły wieczór: mało składników, duży efekt — w niemieckiej kuchni bez specjalnego sprzętu, byle patelnia była naprawdę gorąca.",
 mistakesDe:
 "Nasse Reibemasse, kalte Pfanne und zu viel Teig auf einmal machen weiche statt knusprige Placki. Lieber kleinere Batches braten. Den zusammengesetzten Teller mit Gulasch obenauf findest du bei [Placek po węgiersku](/de/rezepte/placek-po-wegiersku).",
 mistakesPl:
 "Mokra masa z tarcia, zimna patelnia i za dużo ciasta naraz dają miękkie zamiast chrupiących placków. Lepiej smażyć mniejszymi partiami. Złożony talerz z gulaszem na wierzchu znajdziesz przy [placu po węgiersku](/pl/rezepte/placek-po-wegiersku).",
 variantsDe:
 "Mit Zucchini gemischt, mit Knoblauch, oder süß mit Zimt — alle Varianten im Placki-Guide. Gusseisen hilft bei jeder Mischung. Der Klassiker bleibt Kartoffel pur. Composed mit Gulasch-Topping: [Placek po węgiersku](/de/rezepte/placek-po-wegiersku).",
 variantsPl:
 "Z cukinią, z czosnkiem albo na słodko z cynamonem — warianty w przewodniku po plackach. Patelnia żeliwna przy każdej mieszance. Klasyka to sama ziemniak. Composed z gulaszem na wierzchu: [placek po węgiersku](/pl/rezepte/placek-po-wegiersku).",
 },
 "recipe-golabki": {
 dishDe: "Gołąbki",
 dishPl: "Gołąbki",
 vibeDe: "zart, tomatenwarm, Sonntagsessen",
 vibePl: "delikatne, pomidorowe, niedzielne",
 originDe:
 "Gołąbki sind Kohlrouladen mit Reis-Fleisch-Füllung. Geduldessen, das sich lohnt. Der Kohl muss biegsam sein, die Füllung würzig, die Soße tragen.",
 originPl:
 "Gołąbki to rolki z kapusty z farszem mięsno-ryżowym. Danie cierpliwości, które się opłaca. Kapusta musi być giętka, farsz aromatyczny, sos nośny.",
 shopDe:
 "Ein großer Weißkohl, Hackfleisch gemischt, Reis und passierte Tomaten. Dill zum Servieren. Im Polenladen manchmal vorbereitete Blätter. Sauce- und Batch-Kontext: [Gołąbki-Guide](/de/blog/golabki-guide).",
 shopPl:
 "Duża kapusta, mięso mielone, ryż i passata. Koper do podania. W polskim sklepie czasem gotowe liście. Kontekst sosu i batcha: [przewodnik gołąbków](/pl/blog/golabki-przewodnik).",
 techniqueDe:
 "Blätter blanchieren bis biegsam, dicke Rippen flach schneiden, fest aber mit Spielraum rollen (Reis quillt). Reis al dente vorkochen, Füllung kalt mischen. Naht unten, Flüssigkeit bedeckt die Rollen, sanft köcheln — nicht sprudeln.",
 techniquePl:
 "Blanszuj liście do giętkości, spłaszcz grube żyłki, zwijaj z luzem (ryż pęcznieje). Ryż ugotuj al dente, farsz mieszaj zimny. Szem do dołu, płyn zakrywa rolki, duś łagodnie — bez burzenia.",
 serveDe:
 "Serviere die Rouladen heiß mit Tomatensoße, Dill und Brot — am nächsten Tag schmecken sie oft noch runder, weil sich Kohl und Soße verbunden haben.",
 servePl:
 "Podawaj rolki gorące z sosem pomidorowym, koperkiem i chlebem — nazajutrz smakują często jeszcze pełniej, bo kapusta i sos się połączyły.",
 diasporaDe:
 "Gołąbki sind Event-Cooking: einmal Aufwand, viele Portionen, ideal wenn Gäste aus der Community kommen und der Ofen den Nachmittag trägt.",
 diasporaPl:
 "Gołąbki to gotowanie na okazję: raz wkład, wiele porcji — idealne, gdy przychodzą goście ze społeczności, a piekarnik niesie popołud",
 mistakesDe:
 "Zu hart gerollte Blätter, zu kurzes Schmoren und zu wässrige Soße sind die klassischen Fehler. Der Kohl braucht Zeit und genug Flüssigkeit, ohne in Suppe zu schwimmen.",
 mistakesPl:
 "Zbyt twarde zwinięcie, za krótkie duszenie i zbyt wodnisty sos to klasyczne błędy. Kapusta potrzebuje czasu i dość płynu, bez pływania w zupie.",
 variantsDe:
 "Mit Buchweizen statt Reis, vegetarisch mit Pilzen, oder in Pilzsoße statt Tomate. Sauce-Wege und Batch: [Gołąbki-Guide](/de/blog/golabki-guide).",
 variantsPl:
 "Z kaszą zamiast ryżu, wegetariańskie z grzybami albo w sosie grzybowym zamiast pomidorowego. Sosy i batch: [przewodnik gołąbków](/pl/blog/golabki-przewodnik).",
 },
 "recipe-barszcz": {
 dishDe: "Barszcz czerwony",
 dishPl: "Barszcz czerwony",
 vibeDe: "klar, säuerlich, festlich rot",
 vibePl: "klarowny, kwaśny, odświętnie czerwony",
 originDe:
 "Barszcz ist mehr als Rote-Bete-Suppe: Er ist Farbe, Ritual und Säurekultur. Zur Wigilia oft klar — die kleinen Teigtaschen dazu gehören auf das eigene [Uszka](/de/rezepte/uszka)-Rezept, nicht als Duplikat hier.",
 originPl:
 "Barszcz to więcej niż zupa z buraków: to kolor, rytuał i kultura kwasu. Na Wigilię często klarowny — małe pierogi do niego mają własny przepis [uszka](/pl/rezepte/uszka), nie duplikat tutaj.",
 shopDe:
 "Frische Rote Bete, gute Brühe, Allspice (Piment), Essig oder Zitronensäure zum Feinabschmecken. Uszka separat kochen — Rezept Uszka — oder fertig aus dem Polenladen. Barszcz-Technik für klare Brühe vs. Alltagsvariante.",
 shopPl:
 "Świeże buraki, dobry bulion, ziele angielskie, ocet lub kwas do doprawienia. Uszka gotuj osobno — przepis Uszka — albo gotowe z polskiego sklepu. Barszcz-Technik — klarowny wigilijny vs. codzienny.",
 techniqueDe:
 "Für klare Brühe absieben; für Alltag stückig lassen. Säure erst am Ende justieren. Zu langes Kochen macht den Geschmack flach. Uszka nie in der Suppe mitkochen — separat garen und erst in der Schale zusammenführen.",
 techniquePl:
 "Dla klarownego barszczu przecedź; na co dzień zostaw z warzywami. Kwasowość ustawiaj na końcu. Zbyt długie gotowanie spłaszcza smak. Uszka nie gotuj w zupie — osobno, łącz dopiero w misce.",
 serveDe:
 "Heiß, mit Uszka (eigene Seite), Knödeln oder Kartoffeln. Ein Schuss Sauerrahm ist optional.",
 servePl:
 "Gorący, z uszkami (osobna strona), krokietami lub ziemniakami. Śmietana opcjonalna.",
 diasporaDe:
 "An Heiligabend in Deutschland trägt ein klarer Barszcz oft das Menü: er verbindet Generationen am Tisch und lässt sich gut vorbereiten, während Uszka separat warten.",
 diasporaPl:
 "W Wigilię w Niemczech klarowny barszcz często trzyma menu: łączy pokolenia przy stole i da się przygotować wcześniej, podczas gdy uszka czekają osobno.",
 mistakesDe:
 "Häufig wird Barszcz zu süß, trüb durch starkes Kochen oder flach durch zu wenig Säure. Er soll wach schmecken. Uszka gehören nicht stundenlang in die Suppe — erst in der Schale zusammenführen.",
 mistakesPl:
 "Często barszcz wychodzi zbyt słodki, mętny przez gwałtowne gotowanie albo płaski przez za mało kwasu. Ma smakować świeżo. Uszka nie namaczaj godzinami w zupie — łącz dopiero w misce.",
 variantsDe:
 "Du kannst getrocknete Pilze in den Ansatz geben, Knoblauch betonen oder eine schärfere Alltagsvariante kochen. Klarheit und Säure vertieft der [Barszcz-Technik](/de/blog/barszcz-technik)-Guide; die Teigtaschen stehen im [Uszka](/de/rezepte/uszka)-Rezept. Kiszone Suppen ohne Rote Bete sind etwas anderes: [Ogórkowa](/de/rezepte/ogorkowa) und [Kapuśniak](/de/rezepte/kapusniak). Warme Frühlings-Bete mit Blättern findest du bei [Botwinka](/de/rezepte/botwinka).",
 variantsPl:
 "Możesz dodać suszone grzyby do bazy, mocniej czosnek albo ostrzejszą wersję na co dzień. Klarowność i kwas pogłębia [jak ugotować barszcz](/pl/blog/jak-ugotowac-barszcz); pierożki są w przepisie na [uszka](/pl/rezepte/uszka). Zupy kiszone bez buraków to osobna sprawa: [ogórkowa](/pl/rezepte/ogorkowa) i [kapuśniak](/pl/rezepte/kapusniak). Ciepłą wiosenną buraczaną z botwiną znajdziesz przy [botwince](/pl/rezepte/botwinka).",
 },
 "recipe-schabowy": {
 dishDe: "Kotlet schabowy",
 dishPl: "Kotlet schabowy",
 vibeDe: "golden, knusprig, unapologetisch sättigend",
 vibePl: "złoty, chrupiący, bez kompleksów sycący",
 originDe:
 "Schabowy ist das polnische Schnitzel: oft dicker als das Wiener Pendant, oft in Butterschmalz oder Schmalz gebraten, immer mit Haltung. Es ist kein Fine-Dining-Stück, sondern Sonntagsstolz neben Kartoffeln und Surówka. Wie der Teller zusammenkommt, beschreibt der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch); Mengen und Pfannentechnik stehen oben im Rezept.",
 originPl:
 "Schabowy to polski kotlet: często grubszy niż wiedeński, często na smalcu lub maśle klarowanym, zawsze z charakterem. To nie fine dining, tylko niedzielna duma obok ziemniaków i surówki. Układ talerza opisuje [obiad niedzielny](/pl/blog/obiad-niedzielny); tu zostają ilości i patelnia.",
 shopDe:
 "Gute Schweineschnitzel, frische Semmelbrösel, Eier und Mehl reichen. Butterschmalz oder Schmalz geben den richtigen Geschmack. Die Reihenfolge erklärt der [Panieren-Guide](/de/blog/panieren-schabowy); gleichmäßige Hitze hilft eine [Gusseisenpfanne](/de/blog/gusseisenpfanne). Semmelbrösel und Schmalz findest du oft im [Polenladen](/de/blog/polenladen-einkaufen).",
 shopPl:
 "Dobre kotlety wieprzowe, świeża bułka tarta, jajka i mąka wystarczą. Smalec lub masło klarowane dają właściwy smak. Kolejność opisuje [przewodnik panierowania](/pl/blog/panierowanie-kotlet); równomierny żar pomaga [patelnia żeliwna](/pl/blog/patelnia-zelivna). Bułkę i smalec kupisz często w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
 techniqueDe:
 "Klopfen, panieren, nicht zu heiß braten. Die Panade soll schließen, das Fleisch saftig bleiben. Nach dem Braten kurz ruhen lassen, damit der Saft sich setzt. Zu dünn geklopft trocknet das Fleisch; zu kaltes Fett saugt die Panade.",
 techniquePl:
 "Rozbij, obtocz, smaż nie za mocno. Panierka ma się zamknąć, mięso zostać soczyste. Po smażeniu chwilę odpocznij, żeby sok się ułożył. Zbyt mocno rozbite mięso wysycha; zbyt zimny tłuszcz wciąga panierkę.",
 serveDe:
 "Serviere mit Kartoffeln und Surówka, oft mit Zitrone am Rand. Ketchup ist Hausbrauch, kein Muss. Am Sonntagstisch passt der Überblick unter [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 servePl:
 "Podawaj z ziemniakami i surówką, często z cytryną z boku. Ketchup to zwyczaj domu, nie obowiązek. Niedzielny przegląd daje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 diasporaDe:
 "Nach der Arbeit ist Schabowy oft Trostessen: Panade vorbereiten, wenn noch Ruhe ist, und erst braten, wenn alle am Tisch sind. So bleibt die Kruste knusprig und niemand wartet auf die Pfanne. Fertige Brösel aus dem [Polenladen](/de/blog/polenladen-einkaufen) sind diaspora-ehrlich.",
 diasporaPl:
 "Po pracy schabowy często jest jedzeniem pocieszenia: panierkę przygotuj, gdy jest spokój, a smaż dopiero gdy wszyscy są przy stole. Krusta zostaje chrupiąca, nikt nie czeka przy patelni. Gotowa bułka ze [sklepu polskiego](/pl/blog/sklep-polski-zakupy) jest uczciwa w diasporze.",
 mistakesDe:
 "Häufig wird das Fleisch zu dünn geklopft, die Panade verbrennt oder das Fett ist noch kalt. Timing und Hitze entscheiden mehr als die Marke der Semmelbrösel — lieber mittlere Hitze und Geduld. Die Technik vertieft der [Panieren-Guide](/de/blog/panieren-schabowy).",
 mistakesPl:
 "Często mięso jest zbyt mocno rozbite, panierka się pali albo tłuszcz jest jeszcze zimny. Timing i temperatura decydują bardziej niż marka bułki tartej — lepiej średni ogień i cierpliwość. Technikę pogłębia [przewodnik panierowania](/pl/blog/panierowanie-kotlet).",
 variantsDe:
 "Es gibt Varianten mit Knochen, aus Pute oder im Ofen nachgebacken für Gäste. Reihenfolge und Kruste vertieft der [Panieren-Guide](/de/blog/panieren-schabowy); gleichmäßige Hitze hilft eine [Gusseisenpfanne](/de/blog/gusseisenpfanne). Der Klassiker bleibt die Pfanne.",
 variantsPl:
 "Są warianty z kością, z indyka albo dogrzewane w piekarniku dla gości. Kolejność i chrupkość pogłębia [przewodnik panierowania](/pl/blog/panierowanie-kotlet); równomierny żar pomaga [patelnia żeliwna](/pl/blog/patelnia-zelivna). Klasyka to patelnia.",
 },
 "recipe-nalesniki": {
 dishDe: "Naleśniki mit Twaróg",
 dishPl: "Naleśniki z twarogiem",
 vibeDe: "zart, süß-mild, nach Nachmittag zu Hause",
 vibePl: "delikatne, słodko-łagodne, jak popołudnie w domu",
 originDe:
 "Naleśniki sind polnische Pfannkuchen: dünner und biegsamer als deutsche Eierkuchen, zum Füllen und Rollen gedacht. Mit Twaróg werden sie zum Klassiker für Kinder und Gäste. Überblick Varianten: [Naleśniki-Guide](/de/blog/nalesniki-guide).",
 originPl:
 "Naleśniki są cieńsze i bardziej giętkie niż niemieckie Eierkuchen — do farszu i zwijania. Z twarogiem stają się klasyką dla dzieci i gości. Mapa wariantów: [przewodnik naleśników](/pl/blog/nalesniki-przewodnik).",
 shopDe:
 "Milch, Mehl Type 405 oder 550, Eier, Twaróg oder gut abgeseihten Quark, Zucker und Vanille tragen Teig und Füllung. Kauf und Konsistenz erklärt der [Twaróg-Guide](/de/blog/twarog-deutschland); die Platten-Technik ordnet der [Naleśniki-Guide](/de/blog/nalesniki-guide).",
 shopPl:
 "Mleko, mąka typ 405 lub 550, jajka, twaróg lub dobrze odsączony Quark, cukier i wanilia niosą ciasto i farsz. Zakupy i konsystencję wyjaśnia [twaróg w Niemczech](/pl/blog/twarog-w-niemczech); technikę placków porządkuje [przewodnik naleśników](/pl/blog/nalesniki-przewodnik).",
 techniqueDe:
 "Teig wie dünne Sahne, 20–30 Minuten ruhen, Pfanne nur leicht einfetten, dünn ausgießen. Erste Platte ist oft Kalibrierung. Füllung streichfähig, nicht nass; Rand freilassen, rollen, optional in Butter goldbraun. Ungefüllte Platten mit Backpapier einfrieren — unter der Woche nur füllen.",
 techniquePl:
 "Ciasto jak rzadka śmietana, 20–30 minut odpoczynku, patelnia lekko natłuszczona, cienko rozlewać. Pierwszy placek często kalibracja. Farsz smarowalny, nie mokry; zostaw margines, zwiń, opcjonalnie na maśle na złoto. Puste placki z papierem do mrożenia — w tygodniu tylko farsz.",
 serveDe:
 "Mit Puderzucker, Obst oder [Śmietana](/de/blog/smietana-schmand). Auch kalt am nächsten Tag gut. Aufwärmen in der Pfanne, nicht in der Mikrowelle.",
 servePl:
 "Z cukrem pudrem, owocami albo [śmietaną](/pl/blog/smietana-czy-schmand). Nazajutrz też na zimno. Odgrzewać na patelni, nie w mikrofalówce.",
 diasporaDe:
 "Wenn die Sehnsucht nach zu Hause groß ist, sind Naleśniki schnelles Comfort Food. Quark aus dem Supermarkt geht — vorausgesetzt, du seiht ihn ab wie im Twaróg-Guide beschrieben.",
 diasporaPl:
 "Gdy tęsknota za domem jest duża, naleśniki są szybkim comfort foodem. Quark z marketu działa — pod warunkiem, że odsączysz go jak w przewodniku po twarogu.",
 mistakesDe:
 "Zu dicker Teig (nachkorrigiertes Mehl), keine Ruhe, zu heiße Pfanne, nasser Quark, überfüllte Rolle. Weniger gießen und Füllung abseihen hilft mehr als mehr Mehl.",
 mistakesPl:
 "Zbyt gęste ciasto (dokładana mąka), brak odpoczynku, za gorąca patelnia, mokry twaróg, przeładowany farsz. Mniej masy na patelnię i odsączenie pomaga bardziej niż dokładanie mąki.",
 variantsDe:
 "Oben wechseln zu [Fleisch](/de/rezepte/nalesniki/fleisch), [Spinat](/de/rezepte/nalesniki/szpinak) oder süß [Marmelade](/de/rezepte/nalesniki/dzem). Orientierung über alle Varianten: [Naleśniki-Guide](/de/blog/nalesniki-guide).",
 variantsPl:
 "Przełącz na [mięso](/pl/rezepte/nalesniki/mieso), [szpinak](/pl/rezepte/nalesniki/szpinak) albo słodki [dżem](/pl/rezepte/nalesniki/dzem). Orientacja po wariantach: [przewodnik naleśników](/pl/blog/nalesniki-przewodnik).",
 },
 "recipe-nalesniki-mieso": {
 dishDe: "Naleśniki mit Fleisch",
 dishPl: "Naleśniki z mięsem",
 vibeDe: "herzhaft, satt, sonntagstauglich",
 vibePl: "wytrawne, sycące, na niedzielę",
 originDe:
 "Herzhaft gefüllte Naleśniki mit gedünstetem Hack — Dieselbe dünne Teigplattform wie bei Twaróg, aber für den salzigen Tisch. In vielen Haushalten die Variante, wenn Gäste kommen und süß nicht reicht.",
 originPl:
 "Wytrawne naleśniki z duszonym mięsem — ta sama cienka platforma co przy twarogu, ale na słony stół. W wielu domach wariant, gdy przychodzą goście i słodkie nie wystarcza.",
 shopDe:
 "Milch, Mehl und Eier tragen den Teig; für die Füllung brauchst du gemischtes Hack, Zwiebel, Majoran und Butter. Die Platten-Technik vertieft der [Naleśniki-Guide](/de/blog/nalesniki-guide) — hier zählt die trockene, kalte Fleischfüllung.",
 shopPl:
 "Mleko, mąka i jajka niosą ciasto; do farszu potrzebujesz mielonego, cebuli, majeranku i masła. Technikę placków pogłębia [przewodnik naleśników](/pl/blog/nalesniki-przewodnik) — tu liczy się suchy, zimny farsz mięsny.",
 techniqueDe:
 "Die Füllung muss kalt und trocken sein, sonst weicht die Platte auf. Rolle dünne Naleśniki fest, ohne sie zu überfüllen, und brate sie in Butter goldbraun — die Hitze bleibt mittel, damit die Butter nicht verbrennt.",
 techniquePl:
 "Farsz musi być zimny i suchy, inaczej placek się rozmięknie. Zwijaj cienkie naleśniki bez przeładowania i smaż na maśle na złoto — ogień trzymaj średni, żeby masło się nie spaliło.",
 serveDe:
 "Am Tisch reichen Dill, eine klare Soße oder einfach die Butterkruste. Ein saurer Gurkensalat oder knackiger Salat nebenbei hält den herzhaften Teller frisch.",
 servePl:
 "Przy stole pasuje koperek, jasny sos albo sama maślana skórka. Kiszony ogórek albo chrupiąca sałatka obok trzyma wytrawny talerz świeżym.",
 diasporaDe:
 "Rest-Hack vom Sonntag findet hier einen guten zweiten Tag: leere Naleśniki einfrieren und unter der Woche nur noch frisch füllen und braten.",
 diasporaPl:
 "Resztki mielonego z niedzieli mają tu dobry drugi dzień: puste naleśniki zamróź, a w tygodniu tylko świeżo napełnij i podsmaż.",
 mistakesDe:
 "Heiße, nasse Füllung, zu dicke Pfannkuchen und zu viel Fett beim zweiten Braten machen die Rollen schwer statt zart. Erst eine Probeplatte kalibrieren, bevor der ganze Stapel gefüllt wird.",
 mistakesPl:
 "Gorący, mokry farsz, zbyt grube placki i za dużo tłuszczu przy drugim smażeniu czynią rolki ciężkimi zamiast delikatnymi. Najpierw skalibruj jeden placek, zanim napełnisz cały stos.",
 variantsDe:
 "Pute oder Pilze in der Füllung ändern den Charakter, ohne die Technik zu wechseln. Oben findest du [Twaróg](/de/rezepte/nalesniki/twarog), [Spinat](/de/rezepte/nalesniki/szpinak) und süße [Marmelade](/de/rezepte/nalesniki/dzem).",
 variantsPl:
 "Indyk albo grzyby w farszu zmieniają charakter bez zmiany techniki. U góry znajdziesz [twaróg](/pl/rezepte/nalesniki/twarog), [szpinak](/pl/rezepte/nalesniki/szpinak) i słodki [dżem](/pl/rezepte/nalesniki/dzem).",
 },
 "recipe-nalesniki-szpinak": {
 dishDe: "Naleśniki mit Spinat",
 dishPl: "Naleśniki ze szpinakiem",
 vibeDe: "grün, mild-salzig, alltagstauglich",
 vibePl: "zielone, łagodnie-słone, na co dzień",
 originDe:
 "Herzhafte vegetarische Naleśniki mit Spinat und Käse — leichter als Fleisch, klarer als süß. Beliebt, wenn der Tisch gemischt ist und jemand kein Fleisch will.",
 originPl:
 "Wytrawne wegetariańskie naleśniki ze szpinakiem i serem — lżejsze niż mięso, wyraźniejsze niż słodkie. Lubiane, gdy stół jest mieszany i ktoś nie je mięsa.",
 shopDe:
 "Für den Teig brauchst du Milch, Mehl und Eier; für die Füllung Spinat aus dem TK-Regal oder frisch, Knoblauch, Käse und Butter. Wie du Śmietana oder Schmand dazu reichst, erklärt der [Śmietana-Guide](/de/blog/smietana-schmand); die dünne Platte steht im [Naleśniki-Guide](/de/blog/nalesniki-guide).",
 shopPl:
 "Do ciasta potrzebujesz mleka, mąki i jajek; do farszu szpinaku z mrożonek lub świeżego, czosnku, sera i masła. Jak podawać śmietanę albo schmand, wyjaśnia [przewodnik po śmietanie](/pl/blog/smietana-czy-schmand); cienki placek opisuje [przewodnik naleśników](/pl/blog/nalesniki-przewodnik).",
 techniqueDe:
 "Drücke den Spinat gründlich aus, bevor du die Füllung mischst — Restwasser macht die Rolle weich und lässt Käse auslaufen. Fülle die Platten nicht zu heiß und brate die fertigen Rollen optional noch einmal in Butter goldbraun.",
 techniquePl:
 "Mocno odciśnij szpinak, zanim zmieszasz farsz — resztki wody rozmiękczają rolkę i wypychają ser. Nie napełniaj placków zbyt gorącym farszem; gotowe rolki możesz jeszcze raz podsmażyć na maśle na złoto.",
 serveDe:
 "Serviere die Spinat-Naleśniki mit Śmietana, Jogurt oder einem Klecks Schmand; frischer Dill hebt die milde Füllung, ohne sie zu überdecken.",
 servePl:
 "Podawaj naleśniki ze szpinakiem ze śmietaną, jogurtem albo kleksem schmandu; świeży koperek podnosi łagodny farsz, nie przykrywając go.",
 diasporaDe:
 "TK-Spinat aus dem deutschen Supermarkt funktioniert zuverlässig — entscheidend ist nur, dass du ihn wirklich trocken ausgedrückt hast, bevor er in die Platte kommt.",
 diasporaPl:
 "Mrożony szpinak z niemieckiego marketu działa pewnie — ważne tylko, żeby naprawdę odcisnąć go do sucha, zanim trafi na placek.",
 mistakesDe:
 "Nasser Spinat, zu viel Käse, der beim Braten ausläuft, und zu dicke Pfannkuchen sind die typischen Stolpersteine. Lieber eine Probeplatte kalibrieren und die Füllung abtropfen lassen, bevor du den ganzen Stapel füllst.",
 mistakesPl:
 "Mokry szpinak, za dużo sera, który wypływa przy smażeniu, i zbyt grube placki to typowe potknięcia. Lepiej skalibrować jeden placek i odsączyć farsz, zanim napełnisz cały stos.",
 variantsDe:
 "Du kannst Feta unterheben, den Käse ganz weglassen oder oben zu [Twaróg](/de/rezepte/nalesniki/twarog), [Fleisch](/de/rezepte/nalesniki/fleisch) und [Marmelade](/de/rezepte/nalesniki/dzem) wechseln — der Überblick bleibt im [Naleśniki-Guide](/de/blog/nalesniki-guide).",
 variantsPl:
 "Możesz dodać fetę, pominąć ser albo przełączyć na [twaróg](/pl/rezepte/nalesniki/twarog), [mięso](/pl/rezepte/nalesniki/mieso) i [dżem](/pl/rezepte/nalesniki/dzem) — orientację daje [przewodnik naleśników](/pl/blog/nalesniki-przewodnik).",
 },
 "recipe-rosol": {
 dishDe: "Rosół",
 dishPl: "Rosół",
 vibeDe: "klar, golden, heilend und festlich",
 vibePl: "klarowny, złoty, leczniczy i odświętny",
 originDe:
 "Rosół ist die polnische Hühnerbrühe: langsam gezogen, klar, mit Gemüse und Fadenudeln. Er ist Medizin, Sonntag und Willkommensgruß. Frische Fallnudeln als Einlage: [Kluski kładzione](/de/rezepte/kluski-kladzione) — anderer Rezept als Packungsnudeln.",
 originPl:
 "Rosół to polski bulion drobiowy: długo gotowany, klarowny, z warzywami i nitkami. To lekarstwo, niedziela i powitanie. Świeże kluski jako dodatek: [kluski kładzione](/pl/rezepte/kluski-kladzione) — inny Rezept niż makaron z paczki.",
 shopDe:
 "Nimm ein Suppenhuhn oder gute Keulen, Suppengrün, Piment, Lorbeer und Fadenudeln. Petersilienwurzel macht den Unterschied — im deutschen Markt oft als Wurzelpetersilie. Klarheit und Schaum erklärt die [Rosół-Technik](/de/blog/rosol-technik).",
 shopPl:
 "Weź kurczaka na rosół albo dobre ćwiartki, włoszczyznę, ziele angielskie, liść laurowy i makaron nitki. Pietruszka korzeniowa robi różnicę. Klarowność i zbieranie szumowin opisuje [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol).",
 techniqueDe:
 "Kalt ansetzen, Schaum nehmen, nie sprudelnd kochen. Zeit ist die Hauptzutat. Klarheit kommt von Ruhe, nicht von Tricks allein. Optionale Farbe: halbierte Zwiebel mit Schnittfläche in trockener Pfanne anrösten und mitkochen — nicht verkohlen, sonst bitter.",
 techniquePl:
 "Zimna woda na start, zbierać szumowiny, nie burzyć. Czas jest głównym składnikiem. Klarowność bierze się ze spokoju, nie z samych sztuczek. Opcjonalny kolor: przekrojona cebula opieczona na suchej patelni i wrzucona do garnka — nie spalić, bo gorzknieje.",
 serveDe:
 "Im Teller gehören Nudeln, Karottenstücke und Petersilie dazu; das Fleisch liegt separat oder mit in der Brühe. Wer frische Fallnudeln will, geht zu [Kluski kładzione](/de/rezepte/kluski-kladzione).",
 servePl:
 "Na talerzu pasują nitki, marchewka i pietruszka; mięso osobno albo w bulionie. Kto chce świeże kluski, idzie do [klusek kładzionych](/pl/rezepte/kluski-kladzione).",
 diasporaDe:
 "In Deutschland kocht man Rosół oft sonntags: Der Geruch füllt die Wohnung und reicht als Brühe oder Basis weit in die Woche hinein.",
 diasporaPl:
 "W Niemczech rosół często gotuje się w niedzielę: zapach wypełnia mieszkanie i wystarcza jako bulion lub baza daleko w tydzień.",
 mistakesDe:
 "Zu starkes Kochen trübt die Brühe, zu wenig Salz am Ende macht sie flach, und zu früh eingelegte Nudeln saugen Klarheit und Aroma. Gare die Nudeln separat und schmecke erst zum Schluss ab.",
 mistakesPl:
 "Zbyt mocne gotowanie mąci bulion, za mało soli na końcu spłaszcza smak, a zbyt wcześnie wrzucone nitki zabierają klarowność i aromat. Gotuj makaron osobno i doprawiaj dopiero na końcu.",
 variantsDe:
 "Mit Rind gemischt, mit mehr Sellerie oder als Basis für andere Suppen bleibt Rosół flexibel. Die [Rosół-Technik](/de/blog/rosol-technik) hält die Sonntagsreferenz; als Einlage-Alternative stehen [Kluski kładzione](/de/rezepte/kluski-kladzione).",
 variantsPl:
 "Z wołowiną, z większą ilością selera albo jako baza innych zup rosół zostaje elastyczny. [Jak ugotować rosół](/pl/blog/jak-ugotowac-rosol) trzyma niedzielny wzorzec; alternatywą dodatku są [kluski kładzione](/pl/rezepte/kluski-kladzione).",
 },
 "recipe-fasolka": {
 dishDe: "Fasolka po bretońsku",
 dishPl: "Fasolka po bretońsku",
 vibeDe: "deftig, tomatenrot, Wochennacht-tauglich",
 vibePl: "treściwa, pomidorowa, na zwykły wieczór",
 originDe:
 "Trotz des Namens sitzt Fasolka po bretońsku fest in der polnischen Hausmannskost: weiße Bohnen, Wurst, Tomate und Majoran ergeben einen Topf, der sättigt, wenig kostet und an Wochentagen schnell fertig ist.",
 originPl:
 "Mimo nazwy fasolka po bretońsku mocno siedzi w polskiej kuchni domowej: biała fasola, kiełbasa, pomidor i majeranek dają garnek, który syci, mało kosztuje i w tygodniu jest szybko gotowy.",
 shopDe:
 "Weiße Bohnen aus Glas oder Dose, Kiełbasa oder Krakauer, Tomatenmark, Speck und Majoran reichen für den Topf. Grundlagen holst du im deutschen Supermarkt; bessere Wurst und typischen Majoran findest du im [Polenladen](/de/blog/polenladen-einkaufen) — welche Wurst wohin passt, erklärt der Guide zu [Kiełbasa-Arten](/de/blog/kielbasa-arten).",
 shopPl:
 "Biała fasola z puszki lub słoika, kiełbasa albo krakowska, koncentrat pomidorowy, boczek i majeranek wystarczą do garnka. Podstawy kupisz w niemieckim markecie; lepszą kiełbasę i typowy majeranek znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy) — która kiełbasa dokąd pasuje, wyjaśnia przewodnik po [rodzajach kiełbasy](/pl/blog/rodzaje-kielbasy).",
 techniqueDe:
 "Zuerst brätst du Speck und Zwiebel an, dann die Wurstscheiben, danach Tomatenmark und Bohnen. Lass alles einreduzieren, bis der Löffel stehen bleibt — Majoran kommt erst gegen Ende dazu, damit er frisch bleibt.",
 techniquePl:
 "Najpierw podsmaż boczek i cebulę, potem plastry kiełbasy, na końcu koncentrat i fasolę. Zredukuj do gęstości łyżki — majeranek dodaj pod koniec, żeby został świeży.",
 serveDe:
 "Serviere die Fasolka heiß mit kräftigem Brot; eine Gewürzgurke nebenbei schneidet die Tomatenwärme und macht den Teller vollständiger.",
 servePl:
 "Podawaj fasolkę gorącą z mocnym chlebem; kiszony ogórek obok przecina pomidorowe ciepło i domyka talerz.",
 diasporaDe:
 "Nach dem Einkauf im Polenladen reicht oft eine Wurst und ein Glas Bohnen, und der Abend ist gerettet — genau diese Einfachheit macht das Gericht in deutschen Wohnungen so beliebt.",
 diasporaPl:
 "Po zakupach w polskim sklepie często wystarczy kiełbasa i słoik fasoli, a wieczór jest uratowany — właśnie ta prostota czyni danie tak lubianym w niemieckich mieszkaniach.",
 mistakesDe:
 "Bleibt der Topf zu wässrig, fehlt Majoran oder landet die Wurst nur eingelegt statt angebraten, wirkt die Fasolka flach. Röstaroma von Speck und Wurst trägt den Geschmack mehr als extra Tomatenmark.",
 mistakesPl:
 "Gdy garnek zostaje zbyt rzadki, brakuje majeranku albo kiełbasa ląduje tylko wrzucona zamiast podsmażona, fasolka smakuje płasko. Aromat z boczku i kiełbasy niesie smak bardziej niż dodatkowy koncentrat.",
 variantsDe:
 "Du kannst mit Chili schärfer kochen, mehr Gemüse einrühren oder den Speck weglassen. Bei der Wurstwahl helfen [Kiełbasa-Arten](/de/blog/kielbasa-arten) und der [Polenladen](/de/blog/polenladen-einkaufen); die Tomaten-Bohnen-Basis bleibt.",
 variantsPl:
 "Możesz ostrzej z chili, z większą ilością warzyw albo bez boczku. Przy wyborze wędliny pomagają [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy) i [sklep polski](/pl/blog/sklep-polski-zakupy); baza pomidorowo-fasolowa zostaje.",
 },
 "recipe-faworki": {
 dishDe: "Faworki",
 dishPl: "Faworki",
 vibeDe: "knusprig, zart, puderzuckerweiß",
 vibePl: "chrupiące, kruche, w cukrze pudrze",
 originDe:
 "Faworki — auch Chrust oder Chruściki — gehören zu Tłusty Czwartek und zur polnischen Faschingsküche. Hauchdünner Teig, heißes Öl, viel Puderzucker. Kein schweres Gebäck, sondern knusprige Schleifen. Weiche, gefüllte Nachbarn am selben Tag: [Pączki](/de/rezepte/paczki) — anderes Gericht, andere Technik ([Pączki-Technik](/de/blog/paczek-technik)).",
 originPl:
 "Faworki — też chrust lub chruściki — należą do Tłustego Czwartku i karnawałowej kuchni. Papierowo cienkie ciasto, gorący olej, dużo cukru pudru. Nie ciężkie ciasto, tylko chrupiące pętle. Miękki, nadziewany sąsiad tego samego dnia: [pączki](/pl/rezepte/paczki) — inny fokus, inna technika ([technika pączków](/pl/blog/paczki-technika)).",
 shopDe:
 "Im deutschen Supermarkt findest du alles: Weizenmehl, Eigelb, saure Sahne oder Schmand, Backpulver, Zucker, einen Schuss Wodka oder Rum, Frittieröl und Puderzucker. Traditionell gehören Faworki zu Tłusty Czwartek — den Feiertagskontext erklärt der Guide, die Technik bleibt hier im Rezept.",
 shopPl:
 "W niemieckim markecie kupisz wszystko: mąkę, żółtka, śmietanę, proszek do pieczenia, cukier, łyk wódki lub rumu, olej do smażenia i cukier puder. Tradycyjnie faworki należą do Tłustego Czwartku — kontekst święta zostaje w przewodniku, technika w tym przepisie.",
 techniqueDe:
 "Knete den Teig lange, rolle ihn hauchdünn aus, forme Schlingen und frittiere bei 170–180 °C. Lasse die Schleifen gut abtropfen und bestäube sie noch warm — der Alkohol im Teig reduziert die Ölaufnahme.",
 techniquePl:
 "Długo wyrabiaj ciasto, rozwałkuj je papierowo cienko, formuj pętle i smaż w 170–180 °C. Dobrze odsącz i posyp jeszcze ciepłe — alkohol w cieście zmniejsza wchłanianie tłuszczu.",
 serveDe:
 "Noch warm mit viel Puderzucker servieren, zur Kaffee oder als Tłusty-Czwartek-Teller neben [Pączki](/de/rezepte/paczki).",
 servePl:
 "Podawaj jeszcze ciepłe, obficie w cukrze pudrze — do kawy albo na talerz Tłustego Czwartku obok [pączków](/pl/rezepte/paczki).",
 diasporaDe:
 "In Deutschland oft leichter selbst zu machen als gute frische Faworki zu finden. Ein Nachmittag, ein Topf Öl — und der Geruch erinnert an zu Hause.",
 diasporaPl:
 "W Niemczech często łatwiej upiec samemu niż znaleźć dobre świeże faworki. Jedno popołudnie, garnek oleju — i zapach wraca do domu.",
 mistakesDe:
 "Zu dicker Teig, zu kaltes Öl, ein überfüllter Topf und Puderzucker erst nach dem Abkühlen machen Faworki ölig oder weich. Lieber kleinere Batches frittieren und sofort bestäuben.",
 mistakesPl:
 "Za grube ciasto, za chłodny olej, przepełniony garnek i cukier puder dopiero po wystygnięciu robią faworki tłuste albo miękkie. Lepiej smażyć mniejszymi partiami i posypać od razu.",
 variantsDe:
 "Mit Zitronenschale im Teig, gebacken statt frittiert (knuspriger Kompromiss), oder als kleiner Batch für den Alltag. Tłusty Czwartek als Anlass — Technikdetails bleiben im Rezept oben. Weich und gefüllt: [Pączki](/de/rezepte/paczki).",
 variantsPl:
 "Ze skórką cytryny w cieście, pieczone zamiast smażone albo mała partia na zwykły dzień. Tłusty Czwartek jako okazja — szczegóły techniki w przepisie powyżej. Miękkie i nadziewane: [pączki](/pl/rezepte/paczki).",
 },
 "recipe-pierogi-meat": {
 dishDe: "Pierogi mit Fleisch",
 dishPl: "Pierogi z mięsem",
 vibeDe: "herzhaft, gedämpft, Sonntagsstolz",
 vibePl: "sycące, gotowane, niedzielna duma",
 originDe:
 "Pierogi mit Fleisch sind in vielen Regionen die Variante für Gäste und Festtage. Gedünstetes Hack mit Zwiebel und Majoran — schlicht, aber präzise. Nicht roh in den Teig: das Fleisch muss vorher durchgebraten und abgekühlt sein.",
 originPl:
 "Pierogi z mięsem to w wielu domach wariant gościnny i świąteczny. Duszone mielone z cebulą i majerankiem — prosto, ale precyzyjnie. Mięsa nie wkładamy surowego: zawsze podsmażyć i ostudzić.",
 shopDe:
 "Hack gemischt oder Rind/Schwein nach Geschmack, Majoran oft aromatischer im Polenladen. Butter und Zwiebel überall. Teig und Form: Pierogi-Guide und Teig Guide — hier zählt die Fleischfüllung.",
 shopPl:
 "Mielone mieszane albo wołowo-wieprzowe, majeranek często lepszy w sklepie polskim. Masło i cebula wszędzie. Ciasto i lepienie — Pierogi-Guide i przewodnik po cieście; tu farsz mięsny.",
 techniqueDe:
 "Füllung kalt portionieren, Ränder fest verschließen, in leicht siedendem Salzwasser garen. Butterzwiebel oder klare Soße sind klassische Begleiter — nicht optional bei vielen Familien.",
 techniquePl:
 "Farsz na zimno, szczelnie sklejone brzegi, gotowanie w osolonej wodzie na wolnym ogniu. Cebulka na maśle albo jasny sos to klasyk — w wielu domach obowiązkowy.",
 serveDe:
 "Heiß mit goldener Zwiebel oder leichter Brühe. Reste am nächsten Tag in der Pfanne — manche mögen sie dann knuspriger.",
 servePl:
 "Gorące ze złotą cebulą albo lekkim bulionem. Resztki na patelni następnego dnia — niektórzy wolą je wtedy chrupiące.",
 diasporaDe:
 "Fleisch-Pierogi sind Event-Kochen: einmal Aufwand, viele Portionen. In Deutschland oft am Sonntag, wenn Ruskie zu alltäglich und Kraut-Pilze der Wigilia vorbehalten sind.",
 diasporaPl:
 "Pierogi z mięsem to gotowanie na okazję: raz wkład, wiele porcji. W Niemczech często w niedzielę — między codziennymi ruskimi a wigilijną kapustą.",
 mistakesDe:
 "Rohe Füllung, zu nasse Masse, zu aggressives Kochen. Erste Charge testen, bevor du große Mengen formst.",
 mistakesPl:
 "Surowy farsz, zbyt mokra masa, zbyt gwałtowne gotowanie. Przetestuj małą partię, zanim ulepisz dużo.",
 variantsDe:
 "Wechsle zu [Ruskie](/de/rezepte/pierogi/ruskie), [Kraut-Pilze](/de/rezepte/pierogi/kraut-pilze) oder süß [Heidelbeeren](/de/rezepte/pierogi/jagody). Pierogi-Guide und Teig Guide für Teig, Formen und Einfrieren.",
 variantsPl:
 "Przełącz na [ruskie](/pl/rezepte/pierogi/ruskie), [kapustę z grzybami](/pl/rezepte/pierogi/kapusta-grzyby) albo słodkie [jagody](/pl/rezepte/pierogi/jagody). Pierogi-Guide i przewodnik po cieście — ciasto, formy, mroże",
 },
 "recipe-pierogi-cabbage": {
 dishDe: "Pierogi mit Kraut und Pilzen",
 dishPl: "Pierogi z kapustą i grzybami",
 vibeDe: "würzig, festlich, ohne Fleisch",
 vibePl: "aromatyczne, odświętne, bez mięsa",
 originDe:
 "Kraut und getrocknete Pilze gehören zur Wigilia und zum Fasten — eine der ältesten Pierogi-Füllungen. Sauerkraut muss gut ausgedrückt und mit Pilzen aus dem Polenladen langsam geschmort sein.",
 originPl:
 "Kapusta kiszona i suszone grzyby należą do Wigilii i postu — jeden z najstarszych farszy. Kapusta musi być dobrze odciśnięta, grzyby z polskiego sklepu długo duszone z cebulą.",
 shopDe:
 "Sauerkraut und getrocknete Pilze im Polenladen — Rewe-Alternativen sind oft milder. Zwiebel, Majoran, Pfeffer. Pierogi-Guide und Teig Guide für Teigarbeit; Kiszenie-Guide wenn du selbst fermentierst.",
 shopPl:
 "Kapusta kiszona i suszone grzyby w polskim sklepie — zamienniki z supermarketu bywają łagodniejsze. Cebula, majeranek, pieprz. Pierogi-Guide i przewodnik po cieście; przewodnik po kiszeniu przy własnej kapuście.",
 techniqueDe:
 "Füllung vorher einkochen und vollständig abkühlen — heiße Masse reißt den Teig. Ränder doppelt andrücken, damit nichts ausläuft beim Kochen.",
 techniquePl:
 "Farsz wcześniej dusić i całkowicie ostudzić — gorąca masa pęka ciasto. Brzegi mocno zlepiać, żeby nic nie wypłynęło podczas gotowania.",
 serveDe:
 "Mit Zwiebel auf Butter oder klar — ohne Sahne, damit die Säure der Füllung bleibt. Auf der Wigilia oft neben Barszcz.",
 servePl:
 "Z cebulką na maśle albo jasno — bez śmietany, żeby kwas farszu został. Na Wigilię często obok barszczu.",
 diasporaDe:
 "Für viele in Deutschland ist diese Variante der Geschmack von Heiligabend. Planung lohnt: Füllung am Vortag, Teig am Tag selbst.",
 diasporaPl:
 "Dla wielu w Niemczech to smak Wigilii. Warto planować: farsz dzień wcześniej, ciasto w święto.",
 mistakesDe:
 "Zu wässriges Kraut, zu wenig Pilz, zu heiße Füllung beim Formen. Lieber trocken schmoren als flüssig kochen.",
 mistakesPl:
 "Za mokra kapusta, za mało grzybów, za gorący farsz przy lepieniu. Lepiej dusić na sucho niż w wodzie.",
 variantsDe:
 "Mit mehr Pfeffer oder extra Pilzen wird die Füllung intensiver. Oben wechselst du zu [Ruskie](/de/rezepte/pierogi/ruskie), [Fleisch](/de/rezepte/pierogi/fleisch) oder [Heidelbeeren](/de/rezepte/pierogi/jagody). Fürs Wigilia-Menü hilft der [Pierogi-Guide](/de/blog/pierogi-guide); elastischen Teig vertieft der [Pierogi-Teig](/de/blog/pierogi-teig)-Artikel.",
 variantsPl:
 "Z większą ilością pieprzu albo grzybów farsz staje się intensywniejszy. U góry przełączysz na [ruskie](/pl/rezepte/pierogi/ruskie), [mięso](/pl/rezepte/pierogi/mieso) albo [jagody](/pl/rezepte/pierogi/jagody). Przy menu wigilijnym pomaga [przewodnik pierogi](/pl/blog/przewodnik-pierogi); elastyczne ciasto pogłębia [ciasto na pierogi](/pl/blog/ciasto-na-pierogi).",
 },
 "recipe-placki-cukinia": {
 dishDe: "Placki mit Zucchini",
 dishPl: "Placki z cukinią",
 vibeDe: "leichter, sommerlich, knusprig",
 vibePl: "lżejsze, letnie, chrupiące",
 originDe:
 "Wenn Zucchini im Garten oder Rewe-Regal überhand nehmen, rettet die Mischung mit Kartoffel die Saison. Etwa zwei Drittel Kartoffel, ein Drittel Zucchini — gleiche Technik, mehr Wasserarbeit.",
 originPl:
 "Gdy cukinia zalewa ogród albo promocję, mieszanka z ziemniakiem ratuje sezon. Około ⅔ ziemniaka, ⅓ cukinii — ta sama technika, więcej odciśnięcia.",
 shopDe:
 "Nimm festkochende oder vorwiegend festkochende Kartoffeln, eine mittelgroße Zucchini, Ei und wenig Mehl. Śmietana holst du im [Polenladen](/de/blog/polenladen-einkaufen) oder als Schmand im Kühlregal; Verhältnisse und Technik vertieft der [Placki-Guide](/de/blog/placki-guide).",
 shopPl:
 "Weź ziemniaki raczej mączyste lub uniwersalne, średnią cukinię, jajko i odrobinę mąki. Śmietanę kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy) albo jako schmand; proporcje i technikę pogłębia [przewodnik po plackach](/pl/blog/placki-przewodnik).",
 techniqueDe:
 "Zucchini gibt mehr Flüssigkeit — kräftig auspressen, sonst bleiben die Placki weich statt knusprig. Pfanne heiß halten, kleine Batches.",
 techniquePl:
 "Cukinia puszcza więcej wody — mocno odciśnij, inaczej placki będą miękkie zamiast chrupiących. Patelnia gorąca, małe partie.",
 serveDe:
 "Heiß mit Śmietana oder leichtem Salat — Sommeressen, kein schwerer Sonntag.",
 servePl:
 "Gorące ze śmietaną albo lekką sałatą — letni obiad, nie ciężka niedziela.",
 diasporaDe:
 "Praktisch, wenn deutsche Sommer heiß sind und schwere Kartoffelgerichte zu viel wirken. Kinder essen Zucchini oft eher als Salat.",
 diasporaPl:
 "Praktyczne, gdy niemieckie lato jest gorące, a ciężkie ziemniaki to za dużo. Dzieci często wolą cukinię w plackach niż w sałatce.",
 mistakesDe:
 "Zu wenig ausgedrücktes Wasser, zu viel Teig auf einmal und eine kalte Pfanne lassen die Placki weich. Küchentuch oder Nussbeutel hilft beim Auspressen — und die erste kleine Charge zeigt, ob die Masse stimmt.",
 mistakesPl:
 "Za słabe odciśnięcie, za dużo ciasta naraz i zimna patelnia zostawiają placki miękkie. Ręcznik kuchenny albo worek pomaga przy odciśnięciu — a pierwsza mała partia pokaże, czy masa jest dobra.",
 variantsDe:
 "Zurück zu Kartoffelklassiker, Käse oder Apfel in der Placki-Familie. Placki-Guide vergleicht alle Varianten.",
 variantsPl:
 "Wróć do ziemniaczanych, z sera albo jabłka w rodzinie placków. Placki-Guide porównuje warianty.",
 },
 "recipe-placki-ser": {
 dishDe: "Placki mit Käse",
 dishPl: "Placki z serem",
 vibeDe: "herzhaft, cremig, knusprig außen",
 vibePl: "sycące, kremowe, chrupiące na zewnątrz",
 originDe:
 "Twaróg in der geriebenen Kartoffelmasse macht die Placki herzhafter und cremiger — ohne Füllung wie bei Pierogi. Der Käse muss trocken und krümelig sein, sonst wird die Masse weich.",
 originPl:
 "Twaróg w startej ziemniakowej masie czyni placki bardziej sycące i kremowe — bez nadzienia jak w pierogach. Ser musi być suchy i kruchy, inaczej masa robi się miękka.",
 shopDe:
 "Kartoffeln, Twaróg im Polenladen — Twaróg Guide für Konsistenz in DE. Magerquark nur gut abgetropft. Placki-Guide und Gusseisen für Technik.",
 shopPl:
 "Ziemniaki, twaróg w polskim sklepie — przewodnik po twarogu przy konsystencji w DE. Placki-Guide i patelnia żeliwna przy technice.",
 techniqueDe:
 "Twaróg vorher abtropfen, mit Kartoffelmasse vermischen, nicht zu viel Mehl. Heiß ausbacken — der Käse schmilzt innen, die Kruste muss außen schließen.",
 techniquePl:
 "Twaróg wcześniej odsączyć, wymieszać z masą ziemniaczaną, nie za dużo mąki. Smażyć na gorąco — ser topi się w środku, skórka musi się zamknąć na zewnątrz.",
 serveDe:
 "Heiß mit Śmietana, Kräuterdip oder neben Gulasch — deftig, nicht dekorativ.",
 servePl:
 "Gorące ze śmietaną, dipem ziołowym albo obok gulaszu — treściwie, bez ozdób.",
 diasporaDe:
 "Wenn Twaróg im Polenladen da ist, ist das ein schneller Sonntags-Trick: eine Packung reicht für die ganze Masse.",
 diasporaPl:
 "Gdy w polskim sklepie jest twaróg, to szybki niedzielny trik — jedno opakowanie wystarczy na całą masę.",
 mistakesDe:
 "Zu nasser Quark, zu dicke Placki, zu wenig Hitze. Erst eine Probe braten.",
 mistakesPl:
 "Za mokry twaróg, za grube placki, za mało ognia. Najpierw jedna próbna sztuka.",
 variantsDe:
 "Mit extra Zwiebel oder ohne — Placki-Guide vergleicht mit Zucchini und Apfel.",
 variantsPl:
 "Z dodatkową cebulą albo bez — Placki-Guide porównuje z cukinią i jabłkiem.",
 },
 "recipe-placki-jablka": {
 dishDe: "Placki mit Apfel",
 dishPl: "Placki z jabłkami",
 vibeDe: "süß-salzig, knusprig, Nachmittagskaffee",
 vibePl: "słono-słodkie, chrupiące, do popołudniowej kawy",
 originDe:
 "Süße Placki mit Apfel sind nicht Dessert im engeren Sinn — eher Nachmittagsgericht oder leichtes Abendessen. Kartoffel und Apfel zusammen gerieben, mit Zucker und Zimt, in der Pfanne goldbraun.",
 originPl:
 "Słodkie placki z jabłkiem to nie deser w wąskim sensie — raczej popołudnie albo lekka kolacja. Ziemniak i jabłko starte razem, z cukrem i cynamonem, złote na patelni.",
 shopDe:
 "Mehligkochende Kartoffeln, säuerliche Äpfel wie Boskoop oder Elstar, Zucker und Zimt tragen die Masse. Der [Placki-Guide](/de/blog/placki-guide) unterscheidet sie von Racuchy — hier arbeitest du ohne Hefe, nur mit geriebener Kartoffel und Apfel.",
 shopPl:
 "Mączyste ziemniaki, kwaśne jabłka, cukier i cynamon niosą masę. [Przewodnik po plackach](/pl/blog/placki-przewodnik) odróżnia je od racuchy — tu pracujesz bez drożdży, tylko ze startym ziemniakiem i jabłkiem.",
 techniqueDe:
 "Äpfel nicht zu dick reiben — sonst wird es matschig. Wasser ausdrücken, aber nicht zu lange warten, sonst braun. Mittlere Hitze, damit innen gar wird.",
 techniquePl:
 "Jabłka nie za grubo — inaczej masa będzie kleista. Odciśnij wodę, ale nie czekaj zbyt długo, bo ściemnieje. Średni ogień, żeby środek się upiekł.",
 serveDe:
 "Warm mit Puderzucker, Apfelmus oder Sauerrahm — manche essen sie auch mit Zucker und Śmietana gleichzeitig.",
 servePl:
 "Ciepłe z cukrem pudrem, musem jabłkowym albo śmietaną — niektórzy jedzą z cukrem i śmietaną naraz.",
 diasporaDe:
 "Beliebt bei Kindern und wenn Äpfel aus dem deutschen Obstregal günstig sind. Schneller als Racuchy, weil kein Gehzeit.",
 diasporaPl:
 "Popularne u dzieci i gdy jabłka z niemieckiego sklepu są tanie. Szybsze niż racuchy — bez czasu na drożdże.",
 mistakesDe:
 "Zu viel Zucker in der Masse verbrennt leicht, zu heiße Pfanne bräunt außen zu früh, und zu dicke Placki bleiben innen roh. Lieber mittlere Hitze und eine Probe zuerst.",
 mistakesPl:
 "Za dużo cukru w masie łatwo się przypala, za gorąca patelnia rumieni wierzch za wcześnie, a za grube placki zostają surowe w środku. Lepiej średni ogień i najpierw jedna próba.",
 variantsDe:
 "Racuchy sind fluffiger mit Hefe — Placki-Guide erklärt den Unterschied. Zurück zu herzhaften Kartoffelplacki für Gulasch.",
 variantsPl:
 "Racuchy są bardziej puszyste na drożdżach — Placki-Guide wyjaśnia różnicę. Wróć do wytrawnych ziemniaczanych obok gulaszu.",
 },
 "recipe-gulasz": {
 dishDe: "Gulasz wieprzowy",
 dishPl: "Gulasz wieprzowy",
 vibeDe: "langsam geschmort, paprikarot, Sonntag",
 vibePl: "duszony powoli, paprykowy, niedzielny",
 originDe:
 "Polnischer Schweinegulasch ist nicht ungarisches Paprikagulasch: mehr Soße, weniger Schärfe, oft Tomatenmark. Klassischer Partner zu Placki — ein Teller, zwei Gerichte, gemeinsames Wochenende. Paprika-Gemüse-Eintopf mit Wurst ist eine andere Linie: [Leczo](/de/rezepte/leczo) — dort führen Paprika und Tomate, nicht das Schmorfleisch-Rezept.",
 originPl:
 "Polski gulasz wieprzowy to nie węgierski paprykowy: więcej sosu, mniej ostrości, często koncentrat. Klasyczny partner placków — jeden stół, dwa dania, wspólny weekend. Gulasz warzywny z kiełbasą to inna linia: [leczo](/pl/rezepte/leczo) — tam papryka i pomidor prowadzą, nie fokus duszonnego mięsa.",
 shopDe:
 "Schweinenacken oder Schulter — Fett hält saftig. Paprika, Zwiebel, Tomatenmark, Paprikapulver edelsüß. Dutch Oven oder Schmortopf; Kiełbasa Arten wenn du Wurst extra willst.",
 shopPl:
 "Kark lub łopatka — tłuszcz trzyma soczystość. Papryka, cebula, koncentrat, papryka słodka. Dutch oven albo garnek do duszenia; rodzaje kiełbasy przy dodatku wędliny.",
 techniqueDe:
 "Fleisch anbraten, Paprika kurz rösten (sonst bitter), dann zugedeckt 60–90 Minuten schmoren. Am Vortag schmeckt oft besser — Placki frisch braten, Gulasch warm halten. Schneller Gemüse-Topf ohne Würfelfleisch-Marathon: [Leczo](/de/rezepte/leczo).",
 techniquePl:
 "Mięso obsmażyć, paprykę podsmażyć chwilę (inaczej gorzka), potem pod przykryciem 60–90 min. Nazajutrz często lepszy — placki smaż świeżo, gulasz trzymaj ciepły. Szybszy garnek warzywny bez maratonu kostki: [leczo](/pl/rezepte/leczo).",
 serveDe:
 "Mit Placki und Śmietana — der klassische Sonntagsteller in vielen Diaspora-Haushalten. Composed auf einem Teller (Puffer + Gulasch obenauf): [Placek po węgiersku](/de/rezepte/placek-po-wegiersku) — das Rezept dafür findest du dort.",
 servePl:
 "Z plackami i śmietaną — klasyczny niedzielny talerz w wielu domach w diasporze. Composed na jednym talerzu (placki + gulasz na wierzchu): [placek po węgiersku](/pl/rezepte/placek-po-wegiersku) — tu zostaje tam.",
 diasporaDe:
 "In deutschen Wohnungen riecht Gulasz nach langem Schmorren — ideal, wenn alle nach der Schicht hungrig sind und Placki schnell gehen.",
 diasporaPl:
 "W niemieckich mieszkaniach gulasz pachnie długim duszeniem — idealny, gdy wszyscy wracają głodni, a placki robią się szybko.",
 mistakesDe:
 "Paprika nicht angebraten, zu wenig Flüssigkeit, zu kurz geschmort. Fleisch soll mit Gabel zerfallen. Nicht mit [Leczo](/de/rezepte/leczo) verwechseln (Paprika-Tomate ± Wurst, kein Schweine-Schmor-Rezept). Zusammengesetzter Teller separat: [Placek po węgiersku](/de/rezepte/placek-po-wegiersku).",
 mistakesPl:
 "Papryka niepodsmażona, za mało płynu, za krótkie duszenie. Mięso ma się rozpadać widelcem. Nie mylić z [leczo](/pl/rezepte/leczo) (papryka-pomidor ± kiełbasa, bez fokus duszonnej wieprzowiny). Talerza composed nie tu: [placek po węgiersku](/pl/rezepte/placek-po-wegiersku).",
 variantsDe:
 "Mit Kiełbasa, schärfer, oder vegetarisch mit Pilzen — Placki-Guide für die Beilage; Dutch Oven für gleichmäßiges Schmoren. Paprika-Gemüse-Cook: [Leczo](/de/rezepte/leczo). Composed mit Placki-Topping: [Placek po węgiersku](/de/rezepte/placek-po-wegiersku).",
 variantsPl:
 "Z kiełbasą, ostrzejszy albo wegetariański z grzybami — Placki-Guide przy dodatku; dutch oven przy równomiernym duszeniu. Cook warzywny: [leczo](/pl/rezepte/leczo). Composed z plackami na wierzchu: [placek po węgiersku](/pl/rezepte/placek-po-wegiersku).",
 },
 "recipe-kotlet-mielony": {
 dishDe: "Kotlet mielony",
 dishPl: "Kotlet mielony",
 vibeDe: "alltäglich, paniert, kinderfreundlich",
 vibePl: "codzienny, panierowany, dla dzieci",
 originDe:
 "Hacksteaks paniert — nicht Schabowy: hier gemischtes Hack, dort geklopftes Schnitzel. In der Diaspora schnell, günstig, vertraut. Ein altes Brötchen in Milch hält sie saftig. Kugeln in Dillsoße sind eine andere Linie: [Klopsy](/de/rezepte/klopsy).",
 originPl:
 "Kotlety z mielonego mięsa w panierce — nie schabowy: tu mielone, tam rozbite kotlety. W diasporze szybko, tanio, znajomo. Namoczona bułka trzyma soczystość. Kulki w sosie koperkowym to inna linia: [klopsy](/pl/rezepte/klopsy).",
 shopDe:
 "Hack gemischt, altes Brötchen, Milch, Semmelbrösel, Butterschmalz. Panieren Guide für Reihenfolge; Gusseisenpfanne für gleichmäßige Kruste.",
 shopPl:
 "Mięso mielone, czerstwa bułka, mleko, bułka tarta, smalec. Przewodnik po panierce; patelnia żeliwna przy rumieniu.",
 techniqueDe:
 "Masse 30 Min kalt stellen, flache Kotlets formen, durch Mehl-Ei-Panade. Nicht zu heiß — Panade verbrennt schneller als bei Schabowy.",
 techniquePl:
 "Masę 30 min w lodówce, formuj płaskie kotlety, obtocz mąka-jajko-bułka. Nie za mocno — panierka przypala się szybciej niż u schabowego.",
 serveDe:
 "Mit Kartoffeln, Mizeria oder Ketchup — ohne Urteil, mit Brot wenn es schnell gehen muss. Soßen-Kugeln ohne Panade: [Klopsy](/de/rezepte/klopsy).",
 servePl:
 "Z ziemniakami, mizerią albo keczupem — bez oceniania, z chlebem gdy trzeba szybko. Kulki w sosie bez panierki: [klopsy](/pl/rezepte/klopsy).",
 diasporaDe:
 "Wochentags-Trost nach der Arbeit. Panade vorbereiten, braten wenn alle da sind — wie Schabowy, aber weniger Aufwand.",
 diasporaPl:
 "Pocieszenie w tygodniu po pracy. Panierkę przygotuj wcześniej, smaż gdy wszyscy w domu — jak schabowy, ale mniej roboty.",
 mistakesDe:
 "Ohne Brötchen zu trocken, zu dick geformt, Panade zu früh. Erst eine Probe. Nicht mit [Klopsy](/de/rezepte/klopsy) verwechseln (Kugeln in Soße).",
 mistakesPl:
 "Bez bułki za sucho, za grube kotlety, panierka za wcześnie. Najpierw jedna próba. Nie mylić z [klopsami](/pl/rezepte/klopsy) (kulki w sosie).",
 variantsDe:
 "Mit Pute, ohne Panade gebraten, oder neben Rosół am Sonntag. Panieren Guide gilt für alle Varianten. Soßen-Nachbar: [Klopsy](/de/rezepte/klopsy). Gebackene Pastete (≠ Panade-Hack): [Pasztet drobiowy](/de/rezepte/pasztet).",
 variantsPl:
 "Z indyka, bez panierki na patelni albo obok rosołu w niedzielę. Przewodnik po panierce dla wszystkich wersji. Sąsiad z sosem: [klopsy](/pl/rezepte/klopsy). Pieczony pasztet (≠ panierowane mielone): [pasztet drobiowy](/pl/rezepte/pasztet).",
 },
 "recipe-kluski-slaskie": {
 dishDe: "Kluski śląskie",
 dishPl: "Kluski śląskie",
 vibeDe: "zart, neutral, charakteristische Mulde",
 vibePl: "delikatne, neutralne, charakterystyczna dziurka",
 originDe:
 "Schlesische Kartoffelklöße mit Mulde in der Mitte — aus gekochten Kartoffeln, Stärke und Ei. Klassische Beilage zu Rosół, oft mit gebratener Zwiebel oder Pilzsoße. Fallnudeln aus Ei-Mehl-Teig sind eine andere Linie: [Kluski kładzione](/de/rezepte/kluski-kladzione).",
 originPl:
 "Śląskie knedle ziemniaczane z wgłębieniem po środku — z ugotowanych ziemniaków, skrobi i jajka. Klasyk obok rosołu, często z cebulą na smalcu albo sosem grzybowym. Kluski z ciasta jajecznego to inna linia: [kluski kładzione](/pl/rezepte/kluski-kladzione).",
 shopDe:
 "Du brauchst mehligkochende Kartoffeln, Kartoffelstärke aus dem Supermarkt und ein Ei. Wenn du die Brühe selbst ziehst, hilft die [Rosół-Technik](/de/blog/rosol-technik) — Kluski śląskie sind oft genau der Sonntagspartner dazu.",
 shopPl:
 "Potrzebujesz mączystych ziemniaków, skrobi ziemniaczanej z marketu i jajka. Gdy bulion gotujesz sam, pomaga [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol) — kluski śląskie często są właśnie niedzielnym partnerem.",
 techniqueDe:
 "Der Teig soll fest, aber formbar sein; zu weich zerfallen die Klöße im Wasser. Forme die Mulde mit dem Finger, siede sanft und nimm die Kluski kurz nach dem Aufschwimmen heraus — länger werden sie gummiartig.",
 techniquePl:
 "Ciasto ma być twarde, ale plastyczne; za miękkie kluski rozpadają się w wodzie. Wgłębienie zrób palcem, gotuj delikatnie i wyjmij zaraz po wypłynięciu — dłużej robią się gumowate.",
 serveDe:
 "Serviere sie zu Rosół, mit gebratener Zwiebel oder unter Pilzsoße — als Beilage, die den Teller trägt, ohne ihn zu dominieren. Frische Fallnudeln aus Ei-Mehl-Teig sind eine andere Linie: [Kluski kładzione](/de/rezepte/kluski-kladzione).",
 servePl:
 "Podawaj do rosołu, z cebulą na smalcu albo pod sosem grzybowym — jako dodatek, który niesie talerz bez dominacji. Świeże kluski z ciasta jajecznego to inna linia: [kluski kładzione](/pl/rezepte/kluski-kladzione).",
 diasporaDe:
 "In Deutschland sind sie weniger bekannt als Pierogi, für Schlesier und Rosół-Fans aber unverzichtbar. Einmal die Konsistenz getroffen, lassen sie sich Woche für Woche wiederholen.",
 diasporaPl:
 "W Niemczech są mniej znane niż pierogi, ale dla Ślązaków i fanów rosołu niezastąpione. Gdy raz złapiesz konsystencję, da się je powtarzać tydzień po tygodniu.",
 mistakesDe:
 "Zu viel Stärke macht die Kluski gummiartig, zu starkes Kochen reißt sie auf, und zu große Stücke garen ungleich. Forme zuerst eine kleine Testcharge und korrigiere Mehl oder Stärke, bevor der ganze Teig geformt ist. Nicht mit [Kluski kładzione](/de/rezepte/kluski-kladzione) verwechseln.",
 mistakesPl:
 "Za dużo skrobi robi kluski gumowate, zbyt gwałtowne gotowanie je rozrywa, a za duże sztuki garują nierówno. Najpierw uformuj małą partię próbną i popraw mąkę lub skrobię, zanim uformujesz całe ciasto. Nie mylić z [kluskami kładzionymi](/pl/rezepte/kluski-kladzione).",
 variantsDe:
 "Statt Zwiebel kannst du Pilzsoße wählen oder die Kluski neben Gulasz stellen. Für die passende Brühe hilft die [Rosół-Technik](/de/blog/rosol-technik); eine andere Teig-Einlage findest du bei [Kluski kładzione](/de/rezepte/kluski-kladzione).",
 variantsPl:
 "Zamiast cebuli możesz wybrać sos grzybowy albo postawić kluski obok gulaszu. Przy pasującym bulionie pomaga [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol); inny dodatek ciastowy znajdziesz przy [kluskach kładzionych](/pl/rezepte/kluski-kladzione).",
 },
 "recipe-racuchy": {
 dishDe: "Racuchy z jabłkami",
 dishPl: "Racuchy z jabłkami",
 vibeDe: "fluffig, hefig, goldbraun",
 vibePl: "puszyste, drożdżowe, złote",
 originDe:
 "Racuchy sind Hefeteig-Pfannkuchen mit Apfel — fluffiger als Placki mit Apfel. Teig braucht Ruhe; ohne Geduld werden sie flach und dicht.",
 originPl:
 "Racuchy to racuchy drożdżowe z jabłkiem — bardziej puszyste niż placki z jabłkami. Ciasto potrzebuje czasu; bez cierpliwości wychodzą płaskie i ciężkie.",
 shopDe:
 "Mehl, Milch, ein Päckchen Trockenhefe, Zucker und fest-säuerliche Äpfel reichen. Der [Placki-Guide](/de/blog/placki-guide) erklärt den Unterschied zu Kartoffel-Placki mit Apfel — hier arbeitest du mit Hefe, nicht mit geriebener Kartoffel.",
 shopPl:
 "Wystarczą mąka, mleko, saszetka drożdży suszonych, cukier i twarde, kwaśne jabłka. [Przewodnik po plackach](/pl/blog/placki-przewodnik) wyjaśnia różnicę względem placków ziemniaczanych z jabłkiem — tu pracujesz na drożdżach, nie na startej ziemniaku.",
 techniqueDe:
 "Löse die Hefe in lauwarmer, nicht heißer Milch, lass den Teig rund 45 Minuten gehen und schneide die Apfelspalten nicht zu dick. Backe bei mittlerer Hitze, damit die Racuchy innen durchgaren, ohne außen zu verbrennen.",
 techniquePl:
 "Rozpuść drożdże w ciepłym, nie gorącym mleku, zostaw ciasto około 45 minut i nie kroić jabłek zbyt grubo. Smaż na średnim ogniu, żeby racuchy upiekły się w środku, nie przypalając się na zewnątrz.",
 serveDe:
 "Serviere sie noch warm mit reichlich Puderzucker — zum Nachmittagskaffee oder als süßes, einfaches Abendessen.",
 servePl:
 "Podawaj jeszcze ciepłe z dużą ilością cukru pudru — do popołudniowej kawy albo jako słodki, prosty obiad.",
 diasporaDe:
 "Kinder mögen sie sofort, und Trockenhefe aus dem deutschen Supermarkt funktioniert zuverlässig. Näher an Tłusty Czwartek als an Wigilia, aber ganzjährig machbar.",
 diasporaPl:
 "Dzieci lubią je od razu, a suszone drożdże z niemieckiego sklepu działają pewnie. Bliżej Tłustego Czwartku niż Wigilii, ale da się je robić przez cały rok.",
 mistakesDe:
 "Zu heiße Milch tötet die Hefe, zu dicke Apfelstücke bleiben roh, und zu hohe Pfannenhitze bräunt außen bevor innen gar ist. Backe zuerst eine Probe und korrigiere Teigdicke und Hitze, bevor der ganze Teig in die Pfanne geht.",
 mistakesPl:
 "Zbyt gorące mleko zabija drożdże, za grube kawałki jabłka zostają surowe, a za mocny ogień rumieni wierzch zanim środek dojdzie. Usmaż najpierw jedną sztukę próbną i popraw gęstość ciasta oraz ogień, zanim reszta trafi na patelnię.",
 variantsDe:
 "Zimt im Teig, klassische Racuchy ohne Apfel oder der schnellere Weg über [Placki mit Apfel](/de/rezepte/placki-jablka) bleiben verwandt, aber nicht identisch. Tłusty Czwartek gibt kulturellen Kontext — das ist nicht dasselbe Rezept wie [Faworki](/de/rezepte/faworki).",
 variantsPl:
 "Cynamon w cieście, klasyczne racuchy bez jabłka albo szybsza droga przez [placki z jabłkami](/pl/rezepte/placki-jablka) zostają spokrewnione, ale nie identyczne. Tłusty Czwartek daje kontekst kulturowy — to nie ten sam przepis co [faworki](/pl/rezepte/faworki).",
 },
 "recipe-chlodnik": {
 dishDe: "Chłodnik litewski",
 dishPl: "Chłodnik litewski",
 vibeDe: "kalt, rosa, sommerfrisch",
 vibePl: "zimny, różowy, letnio świeży",
 originDe:
 "Chłodnik ist kalte Suppe aus Rote Bete, Kefir oder Joghurt, Gurke und Dill — säuerlich-frisch, nicht heißer Barszcz. Litauisch-polnische Sommertradition für heiße Diaspora-Tage.",
 originPl:
 "Chłodnik to zimna zupa z buraków, kefiru lub jogurtu, ogórka i koperku — kwaśno-świeża, nie gorący barszcz. Letnia tradycja na gorące dni w diasporze.",
 shopDe:
 "Gekochte Rote Bete (Glas spart Zeit), Kefir oder Naturjoghurt, Gurke, Radieschen, Dill, Śmietana. Polnische Suppen-Guide ordnet Chłodnik neben Barszcz und Żurek ein.",
 shopPl:
 "Buraki ugotowane (słoik oszczędza czas), kefir lub jogurt, ogórek, rzodkiewka, koperek, śmietana. Przewodnik po polskich zupach — chłodnik obok barszczu i żurku.",
 techniqueDe:
 "Basis kalt mixen, Gemüse fein würfeln, mindestens zwei Stunden kühlen — am nächsten Tag oft besser. Säure und Salz erst am Ende justieren.",
 techniquePl:
 "Bazę schładzać, warzywa drobno kroić, minimum 2 h w lodówce — często lepszy następnego dnia. Kwas i sól dopiero na końcu.",
 serveDe:
 "Mit halber Kartoffel und hartgekochtem Ei — leichtes Hauptgericht, kein Vorspeisen-Schnipsel.",
 servePl:
 "Z połówką ugotowanego ziemniaka i jajkiem na twardo — lekki obiad, nie tylko przystawka.",
 diasporaDe:
 "W deutschen Sommern ohne Klimaanlage rettet kalte Suppe den Appetit. Kinder mögen die rosa Farbe — ohne viel Überredung.",
 diasporaPl:
 "W niemieckim lecie bez klimy zimna zupa ratuje apetyt. Dzieci lubią różowy kolor — bez przekonywania.",
 mistakesDe:
 "Zu warm serviert, zu wässrig angesetzt und zu wenig Dill machen Chłodnik flach. Die Suppe muss richtig kalt sein — nicht lauwarm aus dem Topf — und Salz sowie Säure erst am Ende finden.",
 mistakesPl:
 "Podane za ciepłe, zbyt rzadko zestawione i z za małą ilością koperku spłaszczają chłodnik. Zupa musi być mocno schłodzona — nie letnia z garnka — a sól i kwas znajdują się dopiero na końcu.",
 variantsDe:
 "Mit mehr Śmietana, ohne Ei, oder neben heißem Barszcz im Winter kontrastieren. Polnische Suppen-Guide für die Suppenfamilie. Warme Kiszone-Alternativen (nicht kalt/rosa): [Ogórkowa](/de/rezepte/ogorkowa) und [Kapuśniak](/de/rezepte/kapusniak). Warme Frühlings-Bete mit Grün (nicht kalt): [Botwinka](/de/rezepte/botwinka).",
 variantsPl:
 "Z większą ilością śmietany, bez jajka albo kontrast z gorącym barszczem zimą. Przewodnik po polskich zupach przy rodzinie zup. Ciepłe alternatywy kiszone (nie zimne/różowe): [ogórkowa](/pl/rezepte/ogorkowa) i [kapuśniak](/pl/rezepte/kapusniak). Ciepła wiosenna buraczana z zielenią (nie zimna): [botwinka](/pl/rezepte/botwinka).",
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
 "Twaróg oder abgetropfter Speisequark, Mehl, Ei, Butter, Semmelbrösel. Twaróg-Guide für Konsistenz in DE.",
 shopPl:
 "Twaróg lub odsączony Quark, mąka, jajko, masło, bułka tarta. Przewodnik po twarogu przy konsystencji w DE.",
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
 "Kartoffeln, Mehl, Ei, Butter, Zwiebel. Gulasz-Rezept und Dutch Oven wenn die Soße mitkommt.",
 shopPl:
 "Ziemniaki, mąka, jajko, masło, cebula. Przepis na gulasz i dutch oven gdy idzie sos.",
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
 "Vegetarisch ohne Speck, mit Pilzen, oder neben Bigos als Kraut-Silo.",
 variantsPl:
 "Wegetariańskie bez boczku, z grzybami albo obok bigosu w silosie kapusty.",
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
 "Kartoffeln, Stärke, Hack, Zwiebel, Butter. Fleischwolf und Freezer-Logik helfen bei Chargen.",
 shopPl:
 "Ziemniaki, skrobia, mielone, cebula, masło. Wilk i logika Freezer pomagają przy partiach.",
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
 "Rinderplätzchen, Senf, Speck, Gewürzgurken, Brühe, Majoran. Dutch Oven oder Schmortopf; Majeranek-Lexikon fürs Würzen.",
 shopPl:
 "Plastry wołowiny, musztarda, boczek, ogórki, bulion, majeranek. Dutch oven lub garnek; leksykon majeranku przy doprawianiu.",
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
 "Makowiec ist der gerollte polnische Mohnkuchen: Hefeteig, dichte Mohnmasse, oft zur Wigilia. Kein Blech-Mohnkuchen und kein Strudel — eigene Form, eigene Technik. Der Back-Guide erklärt Handgriffe; Mengen und Ablauf stehen oben im Rezept.",
 originPl:
 "Makowiec to polska rolada makowa: ciasto drożdżowe, gęsta masa, często na Wigilię. Nie ciasto z blachy i nie strudel — własna forma, własna technika. Filar pieczenia tłumaczy gesty; tu zostają ilości i przebieg.",
 shopDe:
 "Blauer Mohn (gemahlen oder zum Mahlen), Mehl, Hefe, Milch, Butter, Eier, Zucker, optional Rosinen. Polenladen für guten Mohn. Makowiec-Technik für Masse und Ofentemperatur; Wigilia-Speiseplan für den Menüplatz.",
 shopPl:
 "Mak niebieski (mielony lub do zmielenia), mąka, drożdże, mleko, masło, jajka, cukier, opcjonalnie rodzynki. Sklep polski po dobry mak. Technika makowca przy masie i piecu; menu wigilijne przy miejscu w menu.",
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
 "Getrocknete Pilze (Polenladen), Zwiebel, Mehl, Ei, Öl. Barszcz separat nach Barszcz-Rezept und Barszcz-Technik. Pierogi-Teig-Guide für Teiggefühl; Freezer-Guide wenn ihr am Vortag formt.",
 shopPl:
 "Suszone grzyby (sklep polski), cebula, mąka, jajko, olej. Barszcz osobno według przepisu i techniki barszczu. Przewodnik po cieście na pierogi przy wyczuciu; freezer gdy lepicie dzień wcześniej.",
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
 "Mehl, Milch, Eier für den Teig; Sauerkraut, getrocknete Pilze, Zwiebel für die Füllung; Semmelbrösel und Fett zum Braten. Naleśniki-Guide für Teiggefühl; Kiszenie/Polenladen für Kraut und Pilze; Panieren-Guide für die Panade-Logik.",
 shopPl:
 "Mąka, mleko, jajka na ciasto; kapusta kiszona, suszone grzyby, cebula na farsz; bułka tarta i tłuszcz do smażenia. Przewodnik naleśników przy cieście; kiszenie/sklep polski przy kapuście i grzybach; panierowanie przy panierce.",
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
 "Mokry farsz, za grube naleśniki, zimny tłuszcz, odpadająca panierka. Kradzież fokus KW barszczu lub naleśników.",
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
 "Sernik ist der polnische Käsekuchen auf Twaróg-Basis — dichter und oft höher als mancher deutscher Käsekuchen. Er gehört zum Back-Silo neben Makowiec, ohne dessen Fokus zu übernehmen: Makowiec bleibt die Mohnrolle; Sernik bleibt der Käsekuchen. Der Makowiec-Technik-Guide hilft bei Ofengeduld und Festtagsplanung.",
 originPl:
 "Sernik to polski sernik na twarogu — gęstszy i często wyższy niż niejedne niemieckie serniki. Należy do silosu pieczenia obok makowca, bez przejmowania jego Fokus: makowiec zostaje roladą makową; sernik zostaje sernikiem. Technika makowca pomaga przy piecu i planie świąt, nie jako owner przepisu.",
 shopDe:
 "Twaróg sernikowy oder gut abgetropfter Speisequark, Eier, Zucker, Butter, etwas Bindung (Mehl/Pudding), Vanille, optional Mürbeteigboden. Twaróg-Guide und Ersatzprodukte für DE-Einkauf; Polenladen für typische Quarkqualität.",
 shopPl:
 "Twaróg sernikowy lub dobrze odsączony Quark, jajka, cukier, masło, odrobina spoiwa (mąka/budyń), wanilia, opcjonalnie kruchy spód. Przewodnik twarogu i zamienniki przy zakupach w DE; sklep polski po typową jakość.",
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
 "Pieczenie dzień wcześniej odciąża gości. Niemiecki Quark często wymaga odsączenia. Nie mieszać z intentem faworków/pączków — inne wypieki tłuszczowe.",
 mistakesDe:
 "Zu nasser Quark, zu heißer Ofen, zu früh schneiden, Makowiec nicht als Hauptname dieses Rezepts verkaufen. Boden roh lassen durch zu kurze Zeit.",
 mistakesPl:
 "Za mokry twaróg, zbyt gorący piec, zbyt wczesne krojenie, mylenie z makowcem w nazwie. Surowy spód przez za krótki czas.",
 variantsDe:
 "Ohne Boden, mit Rosinen, mit Schokotropfen (modern), kleinerer Springform. Makowiec bleibt die Mohnrolle — anderes Rezept.",
 variantsPl:
 "Bez spodu, z rodzynkami, z czekoladą (nowocześnie), mniejsza tortownica. Makowiec zostaje roladą makową — osobny owner.",
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
 "Matjes oder Salzheringfilets (Polenladen/Kühltruhe), Zwiebeln, neutrales Öl, Lorbeer, Piment. Abtropfen und bei Bedarf wässern. Polenladen-Guide für Marken; Ersatzprodukte wenn nur Rollmops verfügbar — ehrlich umdeklarieren.",
 shopPl:
 "Matjas lub filety solone (sklep polski/chłodnia), cebula, olej, liść laurowy, ziele angielskie. Odsączyć, w razie potrzeby namoczyć. Przewodnik sklepu przy markach; zamienniki gdy tylko rolmops — uczciwie nazwać.",
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
 "Za słony bez namaczania, za mało oleju, trzymanie w cieple. Kradzież fokus karpia lub menu. Rolmops w sosie jako „klasyka” bez dopisku.",
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
 * Longform assembler — calm cooking prose, not brand or SEO padding.
 * Prefer 2–3 earned sections; FACTS fields must already be full sentences.
 */
function expand(locale: Locale, f: ArticleFacts): string {
 if (locale === "de") {
 return [
 `${f.dishDe} — ${f.vibeDe}. ${f.originDe}`,
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
 `${f.dishPl} — ${f.vibePl}. ${f.originPl}`,
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
