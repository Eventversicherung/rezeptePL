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
      "Zu wenig Mehl im Teig, nasse Füllung, und zu aggressives Kochen sind die Klassiker-Fehler. Lieber eine Charge testen, bevor du fünfzig Stück formst.",
    mistakesPl:
      "Za mało mąki w cieście, mokry farsz i zbyt gwałtowne gotowanie to klasyczne błędy. Lepiej przetestować małą partię, zanim ulepisz pięćdziesiąt sztuk.",
    variantsDe:
      "Varianten mit Speck in der Füllung, mit Sauerrahm-Dip oder als gebratene Reste. Switcher: [Fleisch](/de/rezepte/pierogi/fleisch), [Kraut & Pilze](/de/rezepte/pierogi/kraut-pilze), süß [Heidelbeeren](/de/rezepte/pierogi/jagody). Teigdetails: Pierogi-Guide und Teig Guide. Süße gefaltete Pierogi ≠ [Knedle śliwki](/de/rezepte/knedle-sliwki).",
    variantsPl:
      "Warianty z boczkiem w farszu, ze śmietaną albo jako podsmażane resztki. Przełącznik: [mięso](/pl/rezepte/pierogi/mieso), [kapusta z grzybami](/pl/rezepte/pierogi/kapusta-grzyby), słodkie [jagody](/pl/rezepte/pierogi/jagody). Technika ciasta — Pierogi-Guide. Słodkie sklejane pierogi ≠ [knedle ze śliwkami](/pl/rezepte/knedle-sliwki).",
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
      "Z mocnym chlebem, czasem z ziemniakami. Bigos jest jedzeniem w podróż, na imprezę i na zimę jednocześnie.",
    diasporaDe:
      "In deutschen Wohnungen riecht Bigos nach Wochenende. Ein großer Topf reicht für Gäste, und Reste lassen sich einfrieren. Praktisch für volle Arbeitswochen.",
    diasporaPl:
      "W niemieckich mieszkaniach bigos pachnie weekendem. Duży garnek wystarczy dla gości, a resztki można zamrozić. Praktyczne na pracowity tydzień.",
    mistakesDe:
      "Zu wenig Säure, zu wenig Zeit, zu dünne Flüssigkeit. Bigos soll löffelfest sein, nicht wie Suppe.",
    mistakesPl:
      "Za mało kwasu, za mało czasu, za rzadki sos. Bigos ma być gęsty, nie jak zupa.",
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
      "Żurek ist Sauerteigsuppe auf Roggenbasis. Ein Geschmack, den viele mit Ostern verbinden, der aber das ganze Jahr trägt. Die Säure kommt vom Żur-Ansatz, nicht von Sahne oder Essig allein.",
    originPl:
      "Żurek to zupa na zakwasie żytnim. Smak, który wielu łączy z Wielkanocą, ale sprawdza się przez cały rok. Kwasowość pochodzi z zakwasu, nie z samej śmietany czy octu.",
    shopDe:
      "Fertigen Żur-Ansatz gibt es im Polenladen in Flaschen — wer selbst ansetzt, folgt dem Zakwas Guide. Weiße Wurst (biała kiełbasa) ebenfalls dort. Majoran ist das Aroma, das Żurek sofort „polnisch“ macht. Polenladen-Einkauf spart Feiertagsstress.",
    shopPl:
      "Gotowy zakwas na żur kupisz w butelkach w polskim sklepie — własny zakwas opisuje przewodnik po zakwasie. Biała kiełbasa również tam. Majeranek to aromat, który od razu czyni żurek „polskim”. Polski sklep ratuje harmonogram przed świętami.",
    techniqueDe:
      "Nicht zu stark kochen, sonst wird die Suppe trüb und die Wurst hart. Kartoffeln weich garen, Ei zum Schluss oder separat. Abschmecken erst am Ende. Die Säure verändert sich beim Kochen.",
    techniquePl:
      "Nie gotuj zbyt gwałtownie, bo zupa zmętnieje, a kiełbasa stwardnieje. Ziemniaki ugotuj miękko, jajko na końcu lub osobno. Doprawiaj na końcu. Kwasowość zmienia się podczas gotowania.",
    serveDe:
      "Im Teller mit Wurstscheiben, Ei und Brot. Manche reichen Sauerrahm extra. Geschmackssache.",
    servePl:
      "Na talerzu z kiełbasą, jajkiem i chlebem. Niektórzy podają śmietanę osobno. Kwestia gustu.",
    diasporaDe:
      "Für Feiertage in Deutschland rettet Flaschen-Żur den Zeitplan. Wer selbst ansetzt, braucht ein paar Tage Vorlauf. Lohnt sich für den reineren Geschmack.",
    diasporaPl:
      "Na święta w Niemczech butelkowy żur ratuje harmonogram. Własny zakwas wymaga kilku dni. Warto dla czystszego smaku.",
    mistakesDe:
      "Zu viel Wasser, zu wenig Majoran, und Żur zu spät einrühren. Die Balance aus Säure und Fleischbrühe entscheidet.",
    mistakesPl:
      "Za dużo wody, za mało majeranku i zbyt późne dodanie zakwasu. Decyduje równowaga kwasu i bulionu.",
    variantsDe:
      "Mit geräucherter Wurst, ohne Ei, oder klarer als Festtagssuppe. Zakwas Guide und Polenladen-Tipps für Ansatz und Wurst. Schlesische Varianten sind oft kräftiger gewürzt. Andere Säuren, anderer Intent: warme Gurkensuppe [Ogórkowa](/de/rezepte/ogorkowa), Sauerkrautsuppe [Kapuśniak](/de/rezepte/kapusniak) — nicht Zakwas.",
    variantsPl:
      "Z wędzoną kiełbasą, bez jajka albo jaśniejszy na święta. Przewodnik po zakwasie i polski sklep — przy ansatzie i kiełbasie. Warianty śląskie bywają mocniej przyprawione. Inny kwas, inny intent: ciepła [ogórkowa](/pl/rezepte/ogorkowa), [kapuśniak](/pl/rezepte/kapusniak) — nie zakwas.",
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
      "Sofort essen, mit Roggenbrot und Preiselbeeren. Als Vorspeise, Après-Ski-Teller oder schneller Abend.",
    servePl:
      "Jeść od razu, z chlebem żytnim i żurawiną. Jako przystawka, talerz po nartach albo szybka kolacja.",
    diasporaDe:
      "Für viele in Deutschland ist Oscypek Erinnerung an Urlaub in Zakopane. Und gleichzeitig ein 15-Minuten-Gericht nach der Schicht.",
    diasporaPl:
      "Dla wielu w Niemczech oscypek to wspomnienie Zakopanego. I jednocześnie 15-minutowe danie po zmianie.",
    mistakesDe:
      "Zu lange braten, zu viel Öl, und zu süße Marmelade statt Preiselbeere. Der Kontrast muss sauer-frisch bleiben.",
    mistakesPl:
      "Zbyt długie smażenie, za dużo oleju i zbyt słodki dżem zamiast żurawiny. Kontrast ma zostać kwaśno-świeży.",
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
      "Placki ziemniaczane zna wiele kuchni. Polska wersja bywa prościej przyprawiona i żyje techniką: dobre tarcie, dobre odciśnięcie, dobre, gorące smażenie.",
    shopDe:
      "Mehligkochende oder vorwiegend festkochende Kartoffeln funktionieren. Sauerrahm (Schmand) aus dem Kühlregal, Öl mit hohem Rauchpunkt. Placki-Guide für Technik; Gusseisenpfanne für gleichmäßige Kruste.",
    shopPl:
      "Ziemniaki mączyste lub uniwersalne działają. Śmietana z lodówki, olej o wysokiej temperaturze dymienia. Placki-Guide przy technice; patelnia żeliwna przy równomiernym rumieniu.",
    techniqueDe:
      "Wasser aus der Reibemasse ist der Feind der Knusprigkeit. Gut ausdrücken, nicht zu viel Mehl, und die Pfanne wirklich heiß. Dicke Placki bleiben innen roh.",
    techniquePl:
      "Woda z tarcia to wróg chrupkości. Dobrze odciśnij, nie za dużo mąki i naprawdę gorąca patelnia. Grube placki zostają surowe w środku.",
    serveDe:
      "Heiß mit Sauerrahm, Zucker (ja, wirklich), Gulasch oder geräucherter Sahne. Sofort servieren.",
    servePl:
      "Gorące ze śmietaną, cukrem (tak), gulaszem albo wędzoną śmietaną. Podawać od razu.",
    diasporaDe:
      "Placki sind Weeknight-Food: wenig Zutaten, großer Effekt. In deutschen Küchen ohne spezielle Geräte machbar.",
    diasporaPl:
      "Placki to jedzenie na zwykły wieczór: mało składników, duży efekt. W niemieckiej kuchni bez specjalnego sprzętu.",
    mistakesDe:
      "Nasse Masse, kalte Pfanne, zu viel Teig auf einmal. Lieber kleinere Batches.",
    mistakesPl:
      "Mokra masa, zimna patelnia, za dużo ciasta naraz. Lepiej mniejsze partie.",
    variantsDe:
      "Mit Zucchini gemischt, mit Knoblauch, oder süß mit Zimt — alle Varianten im Placki-Guide. Gusseisen hilft bei jeder Mischung. Der Klassiker bleibt Kartoffel pur.",
    variantsPl:
      "Z cukinią, z czosnkiem albo na słodko z cynamonem — warianty w przewodniku po plackach. Patelnia żeliwna przy każdej mieszance. Klasyka to sama ziemniak.",
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
      "Ein großer Weißkohl, Hackfleisch gemischt, Reis und passierte Tomaten. Dill zum Servieren. Im Polenladen gibt es manchmal schon vorbereitete Blätter. Gołąbki-Guide für Blanchieren, Rollen und Schmorzeit.",
    shopPl:
      "Duża kapusta, mięso mielone, ryż i passata. Koper do podania. W polskim sklepie czasem są gotowe liście. Przewodnik po gołąbkach — blanszowanie, zwijanie i duszenie.",
    techniqueDe:
      "Blätter blanchieren, dicke Rippen flach schneiden, fest aber nicht zu straff rollen. Langsam schmoren, damit der Kohl weich wird und die Füllung saftig bleibt.",
    techniquePl:
      "Blanszuj liście, spłaszcz grube głąbiki, zwijaj ciasno, ale nie za mocno. Duś powoli, aż kapusta zmięknie, a farsz zostanie soczysty.",
    serveDe:
      "Mit Tomatensoße, Dill und Brot. Am nächsten Tag oft besser.",
    servePl:
      "Z sosem pomidorowym, koperkiem i chlebem. Nazajutrz często lepsze.",
    diasporaDe:
      "Gołąbki sind Event-Cooking: einmal Aufwand, viele Portionen. Ideal für Gäste aus der Community.",
    diasporaPl:
      "Gołąbki to gotowanie wydarzeniowe: raz wkład, wiele porcji. Idealne dla gości ze społeczności.",
    mistakesDe:
      "Zu hart gerollt, zu kurz geschmort, zu wässrige Soße. Der Kohl braucht Zeit.",
    mistakesPl:
      "Zbyt twarde zwinięcie, za krótkie duszenie, zbyt wodnisty sos. Kapusta potrzebuje czasu.",
    variantsDe:
      "Mit Buchweizen statt Reis, vegetarisch mit Pilzen, oder in Pilzsoße statt Tomate. Gołąbki-Guide für Schmor-Topf und Flüssigkeitsmenge.",
    variantsPl:
      "Z kaszą zamiast ryżu, wegetariańskie z grzybami albo w sosie grzybowym zamiast pomidorowego. Przewodnik po gołąbkach przy garnku i sosie.",
  },
  "recipe-barszcz": {
    dishDe: "Barszcz czerwony",
    dishPl: "Barszcz czerwony",
    vibeDe: "klar, säuerlich, festlich rot",
    vibePl: "klarowny, kwaśny, odświętnie czerwony",
    originDe:
      "Barszcz ist mehr als Rote-Bete-Suppe: Er ist Farbe, Ritual und Säurekultur. Zur Wigilia oft klar — die kleinen Teigtaschen dazu gehören auf die eigene Uszka-Money-Page, nicht als Duplikat dieses Rezepts.",
    originPl:
      "Barszcz to więcej niż zupa z buraków: to kolor, rytuał i kultura kwasu. Na Wigilię często klarowny — małe pierogi do niego mają własną money page Uszka, nie duplikat tego przepisu.",
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
      "An Heiligabend in Deutschland rettet guter Barszcz das Menü. Und verbindet Generationen am Tisch.",
    diasporaPl:
      "W Wigilię w Niemczech dobry barszcz ratuje menu. I łączy pokolenia przy stole.",
    mistakesDe:
      "Zu süß, zu trüb durch starkes Kochen, zu wenig Säure. Barszcz soll wach schmecken. Uszka nicht in der Suppe einweichen lassen.",
    mistakesPl:
      "Za słodki, zmętniony przez gwałtowne gotowanie, za mało kwasu. Barszcz ma smakować świeżo i wyraziście. Uszka nie namaczaj w zupie.",
    variantsDe:
      "Mit getrockneten Pilzen im Ansatz, mit Knoblauch betont, oder als scharfer Alltagbarszcz. Barszcz-Technik für Klarheit und Säure. Für Teigtaschen: Uszka-Rezept. Nicht verwechseln mit Kiszone-Suppen ohne Rote Bete: [Ogórkowa](/de/rezepte/ogorkowa) und [Kapuśniak](/de/rezepte/kapusniak). Warme Frühlings-Bete mit Blättern (nicht klar): [Botwinka](/de/rezepte/botwinka).",
    variantsPl:
      "Z suszonymi grzybami w bazie, mocniej czosnkowy albo ostry na co dzień. Barszcz-Technik przy klarowności i kwasie. Na pierożki: przepis Uszka. Nie mylić z zupami kiszonymi bez buraków: [ogórkowa](/pl/rezepte/ogorkowa) i [kapuśniak](/pl/rezepte/kapusniak). Ciepła wiosenna buraczana z botwiną (nie klarowna): [botwinka](/pl/rezepte/botwinka).",
  },
  "recipe-schabowy": {
    dishDe: "Kotlet schabowy",
    dishPl: "Kotlet schabowy",
    vibeDe: "golden, knusprig, unapologetisch sättigend",
    vibePl: "złoty, chrupiący, bez kompleksów sycący",
    originDe:
      "Schabowy ist das polnische Schnitzel: oft dicker, oft mit Butterschmalz, immer mit Haltung. Es ist kein Fine-Dining-Stück, sondern Sonntagsstolz.",
    originPl:
      "Schabowy to polski kotlet: często grubszy, często na smalcu, zawsze z charakterem. To nie fine dining, tylko niedzielna duma.",
    shopDe:
      "Gute Schweineschnitzel, frische Semmelbrösel, Eier, Mehl. Butterschmalz oder Schmalz für den richtigen Geschmack. Panieren Guide für die Reihenfolge; Gusseisenpfanne für gleichmäßige Kruste.",
    shopPl:
      "Dobre kotlety wieprzowe, świeża bułka tarta, jajka, mąka. Smalec lub masło klarowane dla właściwego smaku. Przewodnik po panierce przy kolejności; patelnia żeliwna przy równomiernym rumieniu.",
    techniqueDe:
      "Klopfen, panieren, nicht zu heiß braten. Die Panade soll schließen, das Fleisch saftig bleiben. Nach dem Braten kurz ruhen lassen.",
    techniquePl:
      "Rozbić, obtoczyć, smażyć nie za mocno. Panierka ma się zamknąć, mięso zostać soczyste. Po smażeniu chwilę odpocząć.",
    serveDe:
      "Mit Kartoffeln und Krautsalat (surówka). Zitrone dazu. Kein Ketchup-Zwang.",
    servePl:
      "Z ziemniakami i surówką. Cytryna do pary. Bez obowiązku ketchupu.",
    diasporaDe:
      "Schabowy nach der Arbeit ist Trostessen. Panade vorher vorbereiten, braten wenn alle da sind.",
    diasporaPl:
      "Schabowy po pracy to jedzenie pocieszenia. Panierkę przygotuj wcześniej, smaż gdy wszyscy są w domu.",
    mistakesDe:
      "Zu dünn geklopft, verbrannte Panade, kaltes Fett. Timing und Hitze entscheiden.",
    mistakesPl:
      "Zbyt mocno rozbity, spalona panierka, zimny tłuszcz. Decyduje timing i temperatura.",
    variantsDe:
      "Mit Knochen, aus Pute, oder im Ofen nachgebacken für Gäste. Panieren Guide und Gusseisen gelten auch hier. Der Klassiker bleibt Pfanne.",
    variantsPl:
      "Z kością, z indyka albo dogrzewany w piekarniku dla gości. Panierowanie i patelnia żeliwna — te same zasady. Klasyka to patelnia.",
  },
  "recipe-nalesniki": {
    dishDe: "Naleśniki mit Twaróg",
    dishPl: "Naleśniki z twarogiem",
    vibeDe: "zart, süß-mild, nach Nachmittag zu Hause",
    vibePl: "delikatne, słodko-łagodne, jak popołudnie w domu",
    originDe:
      "Naleśniki sind polnische Pfannkuchen: dünner als deutsche Eierkuchen, vielseitig süß oder herzhaft. Mit Twaróg werden sie zum Klassiker für Kinder und Gäste.",
    originPl:
      "Naleśniki są cieńsze niż niemieckie naleśniki/eierkuchen i bywają słodkie albo wytrawne. Z twarogiem stają się klasyką dla dzieci i gości.",
    shopDe:
      "Milch, Mehl, Eier, Twaróg oder Quark, Zucker, Vanille. Twaróg Guide für Kauf und Konsistenz in DE. Naleśniki-Guide für Teig und Wenden.",
    shopPl:
      "Mleko, mąka, jajka, twaróg lub Quark, cukier, wanilia. Przewodnik po twarogu przy zakupach w Niemczech. Naleśniki-Guide przy cieście i przewracaniu.",
    techniqueDe:
      "Teig ruhen lassen, Pfanne leicht einfetten, dünn ausbacken. Füllung nicht zu nass. Optional in Butter goldbraun fertigstellen.",
    techniquePl:
      "Ciasto odstawić, patelnię lekko natłuścić, smażyć cienko. Farsz nie za mokry. Opcjonalnie domknąć na maśle na złoto.",
    serveDe:
      "Mit Puderzucker, Obst oder einfach so. Auch kalt aus der Dose am nächsten Tag gut.",
    servePl:
      "Z cukrem pudrem, owocami albo samego. Nazajutrz też smakuje na zimno.",
    diasporaDe:
      "Schnelles Comfort Food, wenn Sehnsucht nach zu Hause groß ist. Und der Polenladen Twaróg hat.",
    diasporaPl:
      "Szybki comfort food, gdy tęsknota za domem jest duża. A w sklepie jest twaróg.",
    mistakesDe:
      "Zu dicker Teig, zu heiße Pfanne, körnige trockene Füllung. Balance aus Flüssigkeit und Ruhezeit hilft.",
    mistakesPl:
      "Zbyt gęste ciasto, za gorąca patelnia, suchy farsz. Pomaga równowaga płynów i odpoczynek ciasta.",
    variantsDe:
      "Oben wechseln zu [Fleisch](/de/rezepte/nalesniki/fleisch), [Spinat](/de/rezepte/nalesniki/szpinak) oder süß [Marmelade](/de/rezepte/nalesniki/dzem). Naleśniki-Guide und Twaróg Guide für süße und herzhafte Füllungen — Dżem hat eigene Varianten-URL.",
    variantsPl:
      "Przełącz na [mięso](/pl/rezepte/nalesniki/mieso), [szpinak](/pl/rezepte/nalesniki/szpinak) albo słodki [dżem](/pl/rezepte/nalesniki/dzem). Naleśniki-Guide i przewodnik po twarogu — dżem ma własny URL wariantu.",
  },
  "recipe-nalesniki-mieso": {
    dishDe: "Naleśniki mit Fleisch",
    dishPl: "Naleśniki z mięsem",
    vibeDe: "herzhaft, satt, sonntagstauglich",
    vibePl: "wytrawne, sycące, na niedzielę",
    originDe:
      "Herzhaft gefüllte Naleśniki mit gedünstetem Hack — dieselbe dünne Plattform wie bei Twaróg, aber für den salzigen Tisch. In vielen Haushalten die Variante, wenn Gäste kommen und süß nicht reicht.",
    originPl:
      "Wytrawne naleśniki z duszonym mięsem — ta sama cienka platforma co przy twarogu, ale na słony stół. W wielu domach wariant, gdy przychodzą goście i słodkie nie wystarcza.",
    shopDe:
      "Milch, Mehl, Eier, Hack gemischt, Zwiebel, Majoran, Butter. Naleśniki-Guide für Teig; Fleischwolf wenn du selbst mahlst.",
    shopPl:
      "Mleko, mąka, jajka, mielone, cebula, majeranek, masło. Przewodnik naleśników przy cieście; wilk gdy mielisz sam.",
    techniqueDe:
      "Füllung kalt und trocken. Teig dünn, rollen, in Butter goldbraun. Nicht zu heiß — Butter soll nicht verbrennen.",
    techniquePl:
      "Farsz zimny i suchy. Ciasto cienkie, zwinąć, na maśle na złoto. Nie za mocno — masło nie może się spalić.",
    serveDe:
      "Mit Dill, klarer Soße oder einfach so. Passt neben Salat oder saurer Gurke.",
    servePl:
      "Z koperkiem, jasnym sosem albo same. Pasują obok sałatki lub kiszonego ogórka.",
    diasporaDe:
      "Gute Nutzung von Rest-Hack vom Sonntag. Freezer: leere Naleśniki einfrieren, Füllung frisch.",
    diasporaPl:
      "Dobre użycie resztek mielonego z niedzieli. Freezer: mroź puste naleśniki, farsz świeży.",
    mistakesDe:
      "Heiße nasse Füllung, zu dicke Pfannkuchen, zu viel Fett beim zweiten Braten.",
    mistakesPl:
      "Gorący mokry farsz, zbyt grube placki, za dużo tłuszczu przy drugim smażeniu.",
    variantsDe:
      "Mit Pute, mit Pilzen gemischt, oder zurück zu [Twaróg](/de/rezepte/nalesniki/twarog), [Spinat](/de/rezepte/nalesniki/szpinak) und süß [Marmelade](/de/rezepte/nalesniki/dzem) oben im Switcher.",
    variantsPl:
      "Z indykiem, z grzybami albo wróć do [twarogu](/pl/rezepte/nalesniki/twarog), [szpinaku](/pl/rezepte/nalesniki/szpinak) i słodkiego [dżemu](/pl/rezepte/nalesniki/dzem) w przełączniku.",
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
      "Milch, Mehl, Eier, Spinat TK oder frisch, Knoblauch, Käse, Butter. Śmietana-Guide zum Servieren; Naleśniki-Guide für Teig.",
    shopPl:
      "Mleko, mąka, jajka, szpinak mrożony lub świeży, czosnek, ser, masło. Przewodnik śmietany do podania; naleśniki-guide przy cieście.",
    techniqueDe:
      "Spinat gründlich ausdrücken. Füllung nicht zu heiß einfüllen. Optional zweites Braten in Butter.",
    techniquePl:
      "Szpinak mocno odciśnij. Farsz nie za gorący. Opcjonalnie drugie smażenie na maśle.",
    serveDe:
      "Mit Śmietana, Jogurt oder einem Klecks Schmand. Frischer Dill passt gut.",
    servePl:
      "Ze śmietaną, jogurtem albo kleksem schmandu. Świeży koperek pasuje.",
    diasporaDe:
      "TK-Spinat aus dem deutschen Supermarkt funktioniert — entscheidend ist das Ausdrücken.",
    diasporaPl:
      "Mrożony szpinak z niemieckiego marketu działa — decyduje odciśnięcie.",
    mistakesDe:
      "Nasser Spinat, zu viel Käse der ausläuft, zu dicke Pfannkuchen.",
    mistakesPl:
      "Mokry szpinak, za dużo sera który wypływa, zbyt grube placki.",
    variantsDe:
      "Mit Feta, ohne Käse, oder zurück zu [Twaróg](/de/rezepte/nalesniki/twarog), [Fleisch](/de/rezepte/nalesniki/fleisch) und [Marmelade](/de/rezepte/nalesniki/dzem) im Switcher.",
    variantsPl:
      "Z fetą, bez sera albo wróć do [twarogu](/pl/rezepte/nalesniki/twarog), [mięsa](/pl/rezepte/nalesniki/mieso) i [dżemu](/pl/rezepte/nalesniki/dzem) w przełączniku.",
  },
  "recipe-rosol": {
    dishDe: "Rosół",
    dishPl: "Rosół",
    vibeDe: "klar, golden, heilend und festlich",
    vibePl: "klarowny, złoty, leczniczy i odświętny",
    originDe:
      "Rosół ist die polnische Hühnerbrühe: langsam gezogen, klar, mit Gemüse und Fadenudeln. Er ist Medizin, Sonntag und Willkommensgruß. Frische Fallnudeln als Einlage: [Kluski kładzione](/de/rezepte/kluski-kladzione) — anderer Cook-Primary als Packungsnudeln.",
    originPl:
      "Rosół to polski bulion drobiowy: długo gotowany, klarowny, z warzywami i nitkami. To lekarstwo, niedziela i powitanie. Świeże kluski jako dodatek: [kluski kładzione](/pl/rezepte/kluski-kladzione) — inny cook-primary niż makaron z paczki.",
    shopDe:
      "Suppenhuhn oder qualitätvolle Keulen, Suppengrün, Piment, Lorbeer, Fadenudeln. Petersilienwurzel macht den Unterschied — im deutschen Markt manchmal als Wurzelpetersilie. Rosół-Technik für Klarheit und Schaum.",
    shopPl:
      "Kurczak na rosół, włoszczyzna, ziele angielskie, liść laurowy, makaron nitki. Pietruszka korzeniowa robi różnicę. Rosół-Technik — klarowność i zbieranie szumowin.",
    techniqueDe:
      "Kalt ansetzen, Schaum nehmen, nie sprudelnd kochen. Zeit ist die Hauptzutat. Klarheit kommt von Ruhe, nicht von Tricks allein.",
    techniquePl:
      "Zimna woda na start, zbierać szumowiny, nie burzyć. Czas jest głównym składnikiem. Klarowność bierze się ze spokoju, nie z samych sztuczek.",
    serveDe:
      "Mit Nudeln, Karottenstücken, Petersilie. Fleisch separat oder im Teller. Hausgemachte Fallnudeln: [Kluski kładzione](/de/rezepte/kluski-kladzione).",
    servePl:
      "Z makaronem, marchewką, pietruszką. Mięso osobno lub w talerzu. Domowe kluski: [kluski kładzione](/pl/rezepte/kluski-kladzione).",
    diasporaDe:
      "Rosół kocht man in Deutschland oft sonntags. Der Geruch füllt die Wohnung und die Woche.",
    diasporaPl:
      "Rosół w Niemczech często gotuje się w niedzielę. Zapach wypełnia mieszkanie i cały tydzień.",
    mistakesDe:
      "Zu starkes Kochen, zu wenig Salz am Ende, zu frühes Nudeln-Rein. Nudeln separat garen hält die Brühe klar.",
    mistakesPl:
      "Zbyt mocne gotowanie, za mało soli na końcu, zbyt wczesny makaron. Osobne gotowanie nitek trzyma rosół klarownym.",
    variantsDe:
      "Mit Rind gemischt, mit mehr Sellerie, oder als Basis für andere Suppen. Rosół-Technik für Sonntagsreferenz und klare Brühe. Einlage-Alternative: [Kluski kładzione](/de/rezepte/kluski-kladzione).",
    variantsPl:
      "Z wołowiną, z większą ilością selera albo jako baza innych zup. Rosół-Technik przy niedzielnym wzorcu i klarowności. Alternatywa dodatku: [kluski kładzione](/pl/rezepte/kluski-kladzione).",
  },
  "recipe-fasolka": {
    dishDe: "Fasolka po bretońsku",
    dishPl: "Fasolka po bretońsku",
    vibeDe: "deftig, tomatenrot, Wochennacht-tauglich",
    vibePl: "treściwa, pomidorowa, na zwykły wieczór",
    originDe:
      "Trotz des Namens ist Fasolka po bretońsku fest in der polnischen Hausmannskost verankert: Bohnen, Wurst, Tomate, Majoran. Sättigend, günstig, schnell.",
    originPl:
      "Mimo nazwy fasolka po bretońsku mocno siedzi w polskiej kuchni domowej: fasola, kiełbasa, pomidor, majeranek. Sycąca, tania, szybka.",
    shopDe:
      "Weiße Bohnen aus Glas oder Dose, Kiełbasa oder Krakauer, Tomatenmark, Speck, Majoran. Alles im deutschen Supermarkt plus Polenladen für bessere Wurst — Kiełbasa Arten erklärt die Unterschiede.",
    shopPl:
      "Fasola z puszki lub słoika, kiełbasa, koncentrat, boczek, majeranek. W markecie podstawy, w polskim sklepie lepsza kiełbasa — przewodnik po rodzajach kiełbasy.",
    techniqueDe:
      "Zuerst Speck und Zwiebel, dann Wurst, dann Tomate und Bohnen. Einreduzieren, bis es löffelstark ist. Majoran gegen Ende.",
    techniquePl:
      "Najpierw boczek i cebula, potem kiełbasa, potem pomidor i fasola. Zredukować do gęstości łyżki. Majeranek pod koniec.",
    serveDe:
      "Mit Brot. Fertig. Manchmal mit Gewürzgurke nebenbei.",
    servePl:
      "Z chlebem. I tyle. Czasem z ogórkiem kiszonym obok.",
    diasporaDe:
      "Perfektes Gericht nach dem Einkauf im Polenladen: eine Wurst, ein Glas Bohnen, Abend gerettet.",
    diasporaPl:
      "Idealne danie po zakupach w polskim sklepie: kiełbasa, słoik fasoli, wieczór uratowany.",
    mistakesDe:
      "Zu wässrig, zu wenig Majoran, Wurst nur eingelegt statt angebraten. Röstaroma fehlt sonst.",
    mistakesPl:
      "Za rzadka, za mało majeranku, kiełbasa tylko wrzucona zamiast podsmażona. Brakuje wtedy aromatu.",
    variantsDe:
      "Scharf mit Chili, mit mehr Gemüse, oder ohne Speck. Kiełbasa Arten und Polenladen helfen bei Wurstwahl. Die Tomaten-Bohnen-Basis bleibt.",
    variantsPl:
      "Ostra z chili, z większą ilością warzyw albo bez boczku. Rodzaje kiełbasy i polski sklep przy wyborze wędliny. Baza pomidorowo-fasolowa zostaje.",
  },
  "recipe-faworki": {
    dishDe: "Faworki",
    dishPl: "Faworki",
    vibeDe: "knusprig, zart, puderzuckerweiß",
    vibePl: "chrupiące, kruche, w cukrze pudrze",
    originDe:
      "Faworki — auch Chrust oder Chruściki — gehören zu Tłusty Czwartek und zur polnischen Faschingsküche. Hauchdünner Teig, heißes Öl, viel Puderzucker. Kein schweres Gebäck, sondern knusprige Schleifen. Weiche, gefüllte Nachbarn am selben Tag: [Pączki](/de/rezepte/paczki) — anderer Primary, andere Technik ([Pączki-Technik](/de/blog/paczek-technik)).",
    originPl:
      "Faworki — też chrust lub chruściki — należą do Tłustego Czwartku i karnawałowej kuchni. Papierowo cienkie ciasto, gorący olej, dużo cukru pudru. Nie ciężkie ciasto, tylko chrupiące pętle. Miękki, nadziewany sąsiad tego samego dnia: [pączki](/pl/rezepte/paczki) — inny primary, inna technika ([technika pączków](/pl/blog/paczki-technika)).",
    shopDe:
      "Weizenmehl, Eigelb, saure Sahne/Schmand, Backpulver, Zucker, Wodka (oder Rum), Frittieröl, Puderzucker. Alles im deutschen Supermarkt. Traditionell zu Tłusty Czwartek — der Guide erklärt den Feiertagskontext.",
    shopPl:
      "Mąka, żółtka, śmietana, proszek do pieczenia, cukier, wódka (lub rum), olej, cukier puder. Wszystko w niemieckim markecie. Tradycja Tłustego Czwartku — przewodnik po święcie bez zbędnej techniki tutaj.",
    techniqueDe:
      "Lange kneten, hauchdünn ausrollen, Schlingen formen, bei 170–180 °C frittieren, abtropfen, warm bestäuben. Alkohol im Teig reduziert die Ölaufnahme.",
    techniquePl:
      "Długo wyrabiać, rozwałkować bardzo cienko, formować pętle, smażyć w 170–180 °C, odsączyć, posypać na ciepło. Alkohol w cieście zmniejsza wchłanianie tłuszczu.",
    serveDe:
      "Noch warm mit viel Puderzucker. Zur Kaffee oder als Tłusty-Czwartek-Teller neben [Pączki](/de/rezepte/paczki).",
    servePl:
      "Jeszcze ciepłe, obficie w cukrze pudrze. Do kawy albo na talerz Tłustego Czwartku obok [pączków](/pl/rezepte/paczki).",
    diasporaDe:
      "In Deutschland oft leichter selbst zu machen als gute frische Faworki zu finden. Ein Nachmittag, ein Topf Öl — und der Geruch erinnert an zu Hause.",
    diasporaPl:
      "W Niemczech często łatwiej upiec samemu niż znaleźć dobre świeże faworki. Jedno popołudnie, garnek oleju — i zapach wraca do domu.",
    mistakesDe:
      "Zu dicker Teig, zu kaltes Öl, zu voller Topf, Puderzucker erst nach dem Abkühlen. Dann werden sie ölig oder weich.",
    mistakesPl:
      "Za grube ciasto, za chłodny olej, za pełny garnek, cukier puder dopiero po wystygnięciu. Wtedy wychodzą tłuste albo miękkie.",
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
      "Przełącz na [ruskie](/pl/rezepte/pierogi/ruskie), [kapustę z grzybami](/pl/rezepte/pierogi/kapusta-grzyby) albo słodkie [jagody](/pl/rezepte/pierogi/jagody). Pierogi-Guide i przewodnik po cieście — ciasto, formy, mrożenie.",
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
      "Mit mehr Pfeffer oder extra Pilzen. Switcher: [Ruskie](/de/rezepte/pierogi/ruskie) · [Fleisch](/de/rezepte/pierogi/fleisch) · [Heidelbeeren](/de/rezepte/pierogi/jagody). Pierogi-Guide für Wigilia-Menü; Teig Guide für elastischen Teig.",
    variantsPl:
      "Z większą ilością pieprzu albo grzybów. Przełącznik: [ruskie](/pl/rezepte/pierogi/ruskie) · [mięso](/pl/rezepte/pierogi/mieso) · [jagody](/pl/rezepte/pierogi/jagody). Pierogi-Guide przy menu wigilijnym; przewodnik po cieście przy elastycznym cieście.",
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
      "Festkochende Kartoffeln, mittelgroße Zucchini, Ei, wenig Mehl. Śmietana im Polenladen oder Schmand. Placki-Guide für Verhältnisse; Gusseisen für gleichmäßige Kruste.",
    shopPl:
      "Ziemniaki raczej mączyste, cukinia średnia, jajko, odrobina mąki. Śmietana w polskim sklepie. Placki-Guide przy proporcjach; patelnia żeliwna przy rumieniu.",
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
      "Zu wenig ausdrücken, zu viel Teig auf einmal, kalte Pfanne. Küchentuch oder Nussbeutel hilft.",
    mistakesPl:
      "Za słabe odciśnięcie, za dużo ciasta naraz, zimna patelnia. Ręcznik kuchenny albo worek na orzechy pomaga.",
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
      "Mehligkochende Kartoffeln, säuerliche Äpfel (Boskoop, Elstar), Zucker, Zimt. Placki-Guide unterscheidet sie von Racuchy — hier kein Hefeteig.",
    shopPl:
      "Ziemniaki mączyste, kwaśne jabłka, cukier, cynamon. Placki-Guide odróżnia je od racuchy — tu bez drożdży.",
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
      "Zu viel Zucker in der Masse (verbrennt), zu heiße Pfanne, zu dick geformt.",
    mistakesPl:
      "Za dużo cukru w masie (przypala się), za gorąca patelnia, za grube placki.",
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
      "Polnischer Schweinegulasch ist nicht ungarisches Paprikagulasch: mehr Soße, weniger Schärfe, oft Tomatenmark. Klassischer Partner zu Placki — ein Teller, zwei Gerichte, gemeinsames Wochenende.",
    originPl:
      "Polski gulasz wieprzowy to nie węgierski paprykowy: więcej sosu, mniej ostrości, często koncentrat. Klasyczny partner placków — jeden stół, dwa dania, wspólny weekend.",
    shopDe:
      "Schweinenacken oder Schulter — Fett hält saftig. Paprika, Zwiebel, Tomatenmark, Paprikapulver edelsüß. Dutch Oven oder Schmortopf; Kiełbasa Arten wenn du Wurst extra willst.",
    shopPl:
      "Kark lub łopatka — tłuszcz trzyma soczystość. Papryka, cebula, koncentrat, papryka słodka. Dutch oven albo garnek do duszenia; rodzaje kiełbasy przy dodatku wędliny.",
    techniqueDe:
      "Fleisch anbraten, Paprika kurz rösten (sonst bitter), dann zugedeckt 60–90 Minuten schmoren. Am Vortag schmeckt oft besser — Placki frisch braten, Gulasch warm halten.",
    techniquePl:
      "Mięso obsmażyć, paprykę podsmażyć chwilę (inaczej gorzka), potem pod przykryciem 60–90 min. Nazajutrz często lepszy — placki smaż świeżo, gulasz trzymaj ciepły.",
    serveDe:
      "Mit Placki und Śmietana — der klassische Sonntagsteller in vielen Diaspora-Haushalten.",
    servePl:
      "Z plackami i śmietaną — klasyczny niedzielny talerz w wielu domach w diasporze.",
    diasporaDe:
      "In deutschen Wohnungen riecht Gulasz nach langem Schmorren — ideal, wenn alle nach der Schicht hungrig sind und Placki schnell gehen.",
    diasporaPl:
      "W niemieckich mieszkaniach gulasz pachnie długim duszeniem — idealny, gdy wszyscy wracają głodni, a placki robią się szybko.",
    mistakesDe:
      "Paprika nicht angebraten, zu wenig Flüssigkeit, zu kurz geschmort. Fleisch soll mit Gabel zerfallen.",
    mistakesPl:
      "Papryka niepodsmażona, za mało płynu, za krótkie duszenie. Mięso ma się rozpadać widelcem.",
    variantsDe:
      "Mit Kiełbasa, schärfer, oder vegetarisch mit Pilzen — Placki-Guide für die Beilage; Dutch Oven für gleichmäßiges Schmoren.",
    variantsPl:
      "Z kiełbasą, ostrzejszy albo wegetariański z grzybami — Placki-Guide przy dodatku; dutch oven przy równomiernym duszeniu.",
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
      "Mit Pute, ohne Panade gebraten, oder neben Rosół am Sonntag. Panieren Guide gilt für alle Varianten. Soßen-Intent: [Klopsy](/de/rezepte/klopsy).",
    variantsPl:
      "Z indyka, bez panierki na patelni albo obok rosołu w niedzielę. Przewodnik po panierce dla wszystkich wersji. Intent sosowy: [klopsy](/pl/rezepte/klopsy).",
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
      "Kartoffeln, Kartoffelstärke (Speisestärke im Supermarkt), Ei. Rosół-Technik wenn du die Brühe selbst ziehst — Kluski sind oft der Sonntags-Partner.",
    shopPl:
      "Ziemniaki, skrobia ziemniaczana, jajko. Rosół-Technik gdy bulion gotujesz sam — kluski to często niedzielny dodatek.",
    techniqueDe:
      "Teig fest aber formbar — zu weich zerfallen im Wasser. Mulde mit dem Finger, sanft sieden, kurz nach dem Schwimmen herausnehmen.",
    techniquePl:
      "Ciasto twarde, ale plastyczne — za miękkie pękają w wodzie. Wgłębienie palcem, delikatnie gotować, wyjąć zaraz po wypłynięciu.",
    serveDe:
      "Mit Rosół, gebratener Zwiebel oder Pilzsoße — Beilage, die den Teller trägt ohne zu dominieren. Löffel-Fallnudeln: [Kluski kładzione](/de/rezepte/kluski-kladzione).",
    servePl:
      "Z rosółem, cebulą na smalcu albo sosem grzybowym — dodatek, który niesie talerz bez dominacji. Kluski łyżką: [kluski kładzione](/pl/rezepte/kluski-kladzione).",
    diasporaDe:
      "In Deutschland weniger bekannt als Pierogi, aber für Schlesier und Rosół-Fans unverzichtbar. Einmal geübt, wiederholbar.",
    diasporaPl:
      "W Niemczech mniej znane niż pierogi, ale dla Ślązaków i fanów rosołu niezastąpione. Raz opanowane — powtarzalne.",
    mistakesDe:
      "Zu viel Stärke (gummiartig), zu stark kochen, zu große Klöße. Erste Charge als Test. Nicht mit [Kluski kładzione](/de/rezepte/kluski-kladzione) verwechseln.",
    mistakesPl:
      "Za dużo skrobi (gumowate), zbyt gwałtowne gotowanie, za duże knedle. Pierwsza partia na próbę. Nie mylić z [kluskami kładzionymi](/pl/rezepte/kluski-kladzione).",
    variantsDe:
      "Mit Pilzsoße statt Zwiebel, oder neben Gulasz. Rosół-Technik für die passende Brühe. Andere Teig-Einlage: [Kluski kładzione](/de/rezepte/kluski-kladzione).",
    variantsPl:
      "Z sosem grzybowym zamiast cebuli albo obok gulaszu. Rosół-Technik przy pasującym bulionie. Inny dodatek ciastowy: [kluski kładzione](/pl/rezepte/kluski-kladzione).",
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
      "Mehl, Milch, Trockenhefe (1 Päckchen reicht), Zucker, Äpfel fest-säuerlich. Placki-Guide erklärt den Unterschied zu Kartoffel-Placki mit Apfel.",
    shopPl:
      "Mąka, mleko, drożdże suszone, cukier, jabłka twarde i kwaśne. Placki-Guide wyjaśnia różnicę względem placków ziemniaczanych z jabłkiem.",
    techniqueDe:
      "Hefe in lauwarmer Milch — nicht heiß. Teig 45 Min gehen lassen, Apfelspalten nicht zu dick, mittlere Hitze beim Backen.",
    techniquePl:
      "Drożdże w ciepłym mleku — nie gorącym. Ciasto 45 min rośnie, kawałki jabłka nie za grube, średni ogień przy smażeniu.",
    serveDe:
      "Warm mit Puderzucker — zum Kaffee oder als süßes Abendessen.",
    servePl:
      "Ciepłe z cukrem pudrem — do kawy albo na słodki obiad.",
    diasporaDe:
      "Beliebt bei Kindern; Trockenhefe aus dem deutschen Supermarkt funktioniert zuverlässig. Näher an Tłusty Czwartek als an Wigilia — ganzjährig machbar.",
    diasporaPl:
      "Popularne u dzieci; suszone drożdże z niemieckiego sklepu działają pewnie. Bliżej Tłustego Czwartku niż Wigilii — przez cały rok.",
    mistakesDe:
      "Milch zu heiß (Hefe tot), zu dicke Apfelstücke, zu hohe Pfanne. Erste Racuch als Test.",
    mistakesPl:
      "Mleko za gorące (drożdże martwe), za grube jabłka, za mocna patelnia. Pierwszy racuch na próbę.",
    variantsDe:
      "Mit Zimt im Teig, ohne Apfel (klassische Racuchy), oder Placki mit Apfel für den schnellen Weg. Tłusty Czwartek als kultureller Kontext.",
    variantsPl:
      "Z cynamonem w cieście, bez jabłka (klasyczne racuchy) albo placki z jabłkiem na szybko. Tłusty Czwartek jako kontekst — nie ten sam przepis co faworki.",
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
      "Zu warm serviert, zu wässrig, zu wenig Dill. Suppe muss richtig kalt sein — nicht lauwarm.",
    mistakesPl:
      "Podane za ciepłe, za rzadkie, za mało koperku. Zupa musi być mocno schłodzona — nie letnia.",
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
      "Zu viel Mehl, zu nasse Kartoffeln, zu starkes Kochen. Erste Charge als Test.",
    mistakesPl:
      "Za dużo mąki, zbyt mokre ziemniaki, zbyt gwałtowne gotowanie. Pierwsza partia na próbę.",
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
      "Za mokra kapusta, za miękki makaron, za mało doprawienia. Pieprz i tłuszcz mają znaczenie.",
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
      "Makowiec ist der gerollte polnische Mohnkuchen: Hefeteig, dichte Mohnmasse, oft zur Wigilia. Kein Blech-Mohnkuchen und kein Strudel — eigene Form, eigene Technik. Der Back-Pillar erklärt Handgriffe; hier bleiben Mengen und Ablauf.",
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
      "Uszka sind kleine Teigtaschen — oft mit Pilzfüllung — die klassisch in klarem Barszcz schwimmen. Sie sind keine große Pierogi-Charge und kein Bestandteil des Barszcz-Rezepts als Duplikat: eigene Money Page, eigene Primary Keywords. Barszcz bleibt Owner der Suppe; Uszka Owner der Teigtaschen.",
    originPl:
      "Uszka to małe pierogi — często z farszem grzybowym — klasycznie w klarownym barszczu. To nie wielka partia pierogów i nie duplikat przepisu na barszcz: własna money page, własne primary keywords. Barszcz zostaje ownerem zupy; uszka ownerem pierożków.",
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
      "Karpfen ist für viele Familien der warme Fischgang der Wigilia — nicht Pflichtkanon, aber starkes Signal. Gebacken mit Zwiebel ist die diaspora-taugliche Variante: weniger Pfannenchaos als frittiert, klarer Geschmack. Der Wigilia-Speiseplan bleibt Owner für Menüreihenfolge und Anlass; hier bleibt der Koch-Intent „Karp Rezept“.",
    originPl:
      "Karp jest dla wielu domów ciepłą rybą Wigilii — nie sztywny kanon, ale mocny sygnał. Pieczony z cebulą to wariant pod diasporę: mniej chaosu niż smażenie, czytelny smak. Menu wigilijne zostaje ownerem kolejności i okazji; tu zostaje cook-intent „karp przepis”.",
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
      "Zu heiß und zu lange = trocken. Zu wenig Säure = fade. Speiseplan-Mengen hier duplizieren statt zu verlinken. Mit Śledź-Intent vermischen.",
    mistakesPl:
      "Za gorąco i za długo = suchy. Za mało kwasu = mdły. Duplikować menu zamiast linkować. Mieszać intent ze śledziem.",
    variantsDe:
      "In Gelee (galareta), paniert gebraten, oder moderne Alternative Lachs — ehrlich benennen. Kalter Hering: eigene Money Page Śledź.",
    variantsPl:
      "W galarecie, smażony w panierce albo nowoczesna alternatywa łosoś — nazywać uczciwie. Zimny śledź: osobna money page.",
  },
  "recipe-krokiety": {
    dishDe: "Krokiety",
    dishPl: "Krokiety",
    vibeDe: "knusprig außen, weich innen, barszczfreundlich",
    vibePl: "chrupiące na zewnątrz, miękkie w środku, do barszczu",
    originDe:
      "Krokiety sind gerollte, panierte Naleśniki — klassisch mit Kraut und Pilzen, oft neben klarem Barszcz. Sie sind keine reine Naleśniki-Dessertseite und kein Duplikat von Pierogi Kraut-Pilze: eigene Form (Rolle + Panade), eigener Primary-KW „Krokiety Rezept“.",
    originPl:
      "Krokiety to zwinięte, panierowane naleśniki — klasycznie z kapustą i grzybami, często obok klarownego barszczu. To nie deserowe naleśniki i nie duplikat pierogów z kapustą: własna forma (rolka + panierka), własne primary KW „krokiety przepis”.",
    shopDe:
      "Mehl, Milch, Eier für den Teig; Sauerkraut, getrocknete Pilze, Zwiebel für die Füllung; Semmelbrösel und Fett zum Braten. Naleśniki-Guide für Teiggefühl; Kiszenie/Polenladen für Kraut und Pilze; Panieren-Guide für die Panade-Logik.",
    shopPl:
      "Mąka, mleko, jajka na ciasto; kapusta kiszona, suszone grzyby, cebula na farsz; bułka tarta i tłuszcz do smażenia. Przewodnik naleśników przy cieście; kiszenie/sklep polski przy kapuście i grzybach; panierowanie przy panierce.",
    techniqueDe:
      "Dünne Naleśniki, trockene Füllung, fest rollen, panieren, goldbraun braten. Füllung muss abgekühlt sein. Zu nass = Rollen platzen; zu dick = Teig dominiert.",
    techniquePl:
      "Cienkie naleśniki, suchy farsz, mocno zwijać, panierować, smażyć na złoto. Farsz ostudzony. Za mokry = pękają; za gruby = ciasto dominuje.",
    serveDe:
      "Heiß mit klarem Barszcz oder allein mit Śmietana. Reste erneut in der Pfanne knusprig machen. Uszka sind verwandter Wigilia-Partner, aber kleine Teigtaschen — andere Money Page.",
    servePl:
      "Gorące z klarownym barszczem albo same ze śmietaną. Resztki odsmażyć na chrupko. Uszka to pokrewny partner Wigilii, ale małe pierożki — inna money page.",
    diasporaDe:
      "Wochenendprojekt: vormittags Teig und Füllung, nachmittags rollen und braten. Freezer: geformte Rollen vor dem Panieren einfrieren; paniert frisch braten.",
    diasporaPl:
      "Projekt weekendowy: rano ciasto i farsz, po południu zwijać i smażyć. Freezer: uformowane rolki przed panierowaniem; panierowane smażyć świeżo.",
    mistakesDe:
      "Nasse Füllung, zu dicke Pfannkuchen, kaltes Fett, Panade abplatzen lassen. Barszcz- oder Naleśniki-Primary-KW stehlen.",
    mistakesPl:
      "Mokry farsz, za grube naleśniki, zimny tłuszcz, odpadająca panierka. Kradzież primary KW barszczu lub naleśników.",
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
      "Sernik ist der polnische Käsekuchen auf Twaróg-Basis — dichter und oft höher als mancher deutscher Käsekuchen. Er gehört zum Back-Silo neben Makowiec, ohne dessen Primary Keywords zu übernehmen: Makowiec bleibt Mohn-Rollenkuchen; Sernik bleibt Käsekuchen. Makowiec-Technik hilft bei Ofengeduld und Festtagsplanung, nicht als Rezept-Owner.",
    originPl:
      "Sernik to polski sernik na twarogu — gęstszy i często wyższy niż niejedne niemieckie serniki. Należy do silosu pieczenia obok makowca, bez przejmowania jego primary keywords: makowiec zostaje roladą makową; sernik zostaje sernikiem. Technika makowca pomaga przy piecu i planie świąt, nie jako owner przepisu.",
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
      "Am Vortag backen entlastet Gästeessen. Deutscher Quark braucht oft Abtropfen. Nicht mit Faworki/Pączki-Intent vermischen — anderes Fettgebäck.",
    diasporaPl:
      "Pieczenie dzień wcześniej odciąża gości. Niemiecki Quark często wymaga odsączenia. Nie mieszać z intentem faworków/pączków — inne wypieki tłuszczowe.",
    mistakesDe:
      "Zu nasser Quark, zu heißer Ofen, zu früh schneiden, Makowiec-Keywords im Title stehlen. Boden roh lassen durch zu kurze Zeit.",
    mistakesPl:
      "Za mokry twaróg, zbyt gorący piec, zbyt wczesne krojenie, kradzież słów kluczowych makowca w title. Surowy spód przez za krótki czas.",
    variantsDe:
      "Ohne Boden, mit Rosinen, mit Schokotropfen (modern), kleinerer Springform. Makowiec bleibt Mohnrolle — eigener Rezept-Owner.",
    variantsPl:
      "Bez spodu, z rodzynkami, z czekoladą (nowocześnie), mniejsza tortownica. Makowiec zostaje roladą makową — osobny owner.",
  },
  "recipe-sledz": {
    dishDe: "Śledź w oleju",
    dishPl: "Śledź w oleju",
    vibeDe: "kalt, zwiebelig, salzig-fettig zum Brot",
    vibePl: "zimny, cebulowy, słono-tłusty do chleba",
    originDe:
      "Śledź ist der kalte Fischgang vieler Wigilia-Tische und zugleich Alltagsteller mit Brot. In Öl mit Zwiebel ist die klarste diaspora-Variante: wenig Technik, viel Ziehenlassen. Owner für „Śledź Rezept“; Wigilia-Speiseplan bleibt Menü-Owner; Karp bleibt warmer Fisch.",
    originPl:
      "Śledź to zimna ryba wielu stołów wigilijnych i zarazem codzienny talerz z chlebem. W oleju z cebulą to najczytelniejszy wariant diasporowy: mało techniki, dużo marynowania. Owner „śledź przepis”; menu wigilijne zostaje ownerem menu; karp zostaje rybą ciepłą.",
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
      "Zu salzig ohne Wässern, zu wenig Öl, warme Lagerung. Karp- oder Speiseplan-Primary stehlen. Mit Rollmops-Sauce als „klassisch“ verkaufen ohne Hinweis.",
    mistakesPl:
      "Za słony bez namaczania, za mało oleju, trzymanie w cieple. Kradzież primary karpia lub menu. Rolmops w sosie jako „klasyka” bez dopisku.",
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

function expand(locale: Locale, f: ArticleFacts): string {
  if (locale === "de") {
    return [
      `${f.dishDe} ist ${f.vibeDe}. Auf Alemniam findest du dieses Rezept bewusst in zwei Modi: Einkaufen und Kochen. Dieselbe Seite, ohne Hin- und Herspringen zwischen Tabs. So bleibt der Fokus dort, wo er hingehört: bei den Zutaten im Laden und bei den Schritten in der Küche.`,
      `## Herkunft und Charakter`,
      f.originDe,
      `Gerade für Menschen mit polnischen Wurzeln in Deutschland ist ${f.dishDe} mehr als „ein Rezept“. Es ist Geschmackserinnerung, Sprache am Tisch und oft der Moment, in dem Kinder zum ersten Mal mithelfen. Deshalb beschreiben wir nicht nur Mengen, sondern auch den Alltag darumherum: wo man Zutaten findet, was man ersetzen kann, und welche Fehler das Gericht unnötig schwer machen.`,
      `## Zutaten in Deutschland finden`,
      f.shopDe,
      `Ein praktischer Einkaufsablauf sieht so aus: Zuerst prüfen, was im deutschen Supermarkt zuverlässig liegt (Gemüse, Milchprodukte, Grundgewürze). Danach der Polenladen für die Produkte, die den Charakter tragen. So sparst du Zeit und vermeidest Kompromisse, die den Geschmack verwässern. Im Einkaufsmodus dieses Rezepts sind die Zutaten bereits nach Gruppen sortiert. Kühlung, Vorrat, Polenladen. Damit du im Gang nicht zurücklaufen musst.`,
      `Viele Zutaten haben deutsche Etiketten mit anderen Namen. Deshalb stehen bei Bedarf Hinweise wie „in DE oft unter …“ direkt an der Zutat. Das ist keine Spielerei, sondern der Unterschied zwischen einem gelungenen Abendessen und einer frustrierten Suche im Regal.`,
      `## Technik, die den Unterschied macht`,
      f.techniqueDe,
      `Gute polnische Hausmannskost wirkt einfach, ist aber selten nachlässig. Temperatur, Zeit und Reihenfolge entscheiden mehr als exotische Zutaten. Wenn du zum ersten Mal kochst, lies die Schritte einmal komplett, stelle die Schüsseln bereit und wechsle dann in den Kochmodus: großer Schritttext, Tipps direkt am aktiven Schritt, Portionen skalierbar.`,
      `## Portionen, Timing und Alltag`,
      `Plane realistisch: Vorbereitung und Garzeit addieren sich. Wer nach der Arbeit kocht, kann manches vorbereiten. Zwiebeln schneiden, Teig ruhen lassen, Brühe ziehen. ${f.dishDe} verzeiht in der Regel Reste und Aufwärmen; oft gewinnt das Gericht sogar, wenn Aromen Zeit hatten sich zu verbinden.`,
      `Für Familien lohnt sich das Skalieren der Portionen. Die Mengen im Rezept rechnen mit, sowohl in der kompakten Zutatenliste beim Kochen als auch in der Checkliste beim Einkaufen. So entsteht weniger Food Waste und weniger Stress an der Kasse.`,
      `## Servieren und Reste`,
      f.serveDe,
      `Reste gehören zur Kultur dieses Essens. Manche Gerichte schmecken am zweiten Tag runder, andere werden in der Pfanne neu erfunden. Bewahre luftdicht, beschrifte Behälter, und friere Portionen ein, wenn du für volle Wochen vorsorgen willst.`,
      `## Leben zwischen Polen und Deutschland`,
      f.diasporaDe,
      `Alemniam denkt diesen Alltag mit: bilingual, praxisnah, ohne Folklore-Theater. Der Mode-Wechsel auf der Rezeptseite ist genau dafür da. Morgens Liste abhaken, abends Schritte führen. Ohne die Seite zu verlassen und ohne SEO-Text im Weg zu haben. Der ausführliche Hintergrundartikel steht bewusst unter dem Küchen-UI.`,
      `## Typische Fehler`,
      f.mistakesDe,
      `Wenn etwas schiefgeht: Notiere kurz, was passiert ist. Beim nächsten Mal reicht oft eine kleine Korrektur. Weniger Flüssigkeit, mehr Hitze, längere Ruhe. Kochen ist Wiederholung mit Verbesserung, kein einmaliger Perfektionszwang.`,
      `## Varianten und Weiteressen`,
      f.variantsDe,
      `Zum Aufbau echter Topical Authority gehören auch Verbindungen: ähnliche Techniken, verwandte Feiertagsgerichte, regionale Varianten. Von hier aus lohnt der Blick auf weitere Klassiker bei Alemniam. Nicht als Ablenkung, sondern als Küche, die zusammenhängt.`,
      `## Geschmack, Textur und warum Details zählen`,
      `Was ${f.dishDe} besonders macht, ist selten eine geheime Zutat. Es ist die Summe aus Produktqualität, Hitzeführung und dem Mut, abzuschmecken. Salz nicht nur am Anfang, Säure nicht nur aus Gewohnheit, Fett nicht als Schuldgefühl, sondern als Träger von Aroma. In der polnischen Hausküche ist das selbstverständlich: Man kostet, korrigiert, kostet wieder.`,
      `Wenn du in einer deutschen Küche kochst, ändern sich manchmal die Rohstoffe: anderes Mehl, anderes Quark, anderes Fleisch. Genau deshalb sind Ersatzhinweise und Laden-Tipps Teil dieses Rezepts. Ziel ist nicht museumsgleiche Reproduktion, sondern ein Ergebnis, das sich nach ${f.dishDe} anfühlt. Warm, wiedererkennbar, einladend.`,
      `## Für Einsteiger und Wiedereinsteiger`,
      `Einsteiger sollten die Schritte einmal in Ruhe lesen, Zutaten bereitstellen und dann im Kochmodus nur noch den aktiven Schritt anschauen. Wiedereinsteiger können schneller arbeiten, aber gerade bei Teig, Panade oder Brühe lohnt die kurze Pause vor dem nächsten Schritt. Kinder können abmessen, waschen, rühren. Die schweren oder heißen Schritte bleiben bei Erwachsenen.`,
      `## SEO-Hinweis in Klartext`,
      `Dieser Artikel ergänzt das Rezept bewusst mit Kontext zu Herkunft, Einkauf in Deutschland, Technik, Fehlern und Varianten. So entsteht nicht nur eine Zutatenliste, sondern ein vollständiger Leitfaden rund um ${f.dishDe}. Nützlich für Menschen, die suchen, lernen und dann wirklich kochen.`,
      `## Kurzfazit`,
      `${f.dishDe} gelingt, wenn Zutaten stimmen, Technik klar ist und der Ablauf zum Leben passt. Nutze den Einkaufsmodus für die Liste, den Kochmodus für die Schritte, und diesen Text für Kontext, Motivation und die Details, die aus „irgendwas mit …“ wieder ${f.dishDe} machen.`,
    ].join("\n\n");
  }

  return [
    `${f.dishPl} jest ${f.vibePl}. Na Alemniam przepis ma dwa tryby: zakupy i gotowanie. Ta sama strona, bez skakania między zakładkami. Skupienie zostaje tam, gdzie trzeba: przy składnikach w sklepie i przy krokach w kuchni.`,
    `## Pochodzenie i charakter`,
    f.originPl,
    `Dla osób z polskimi korzeniami w Niemczech ${f.dishPl} to więcej niż „przepis”. To pamięć smaku, język przy stole i często moment, gdy dzieci pomagają pierwszy raz. Dlatego opisujemy nie tylko ilości, ale też codzienność wokół: gdzie kupić składniki, co zamienić i jakie błędy niepotrzebnie utrudniają danie.`,
    `## Składniki w Niemczech`,
    f.shopPl,
    `Praktyczna trasa zakupów: najpierw niemiecki supermarket (warzywa, nabiał, podstawowe przyprawy), potem polski sklep po produkty, które budują charakter. Oszczędzasz czas i unikasz kompromisów, które rozwadniają smak. W trybie zakupów składniki są pogrupowane. Chłodnia, spiżarnia, polski sklep. Żeby nie wracać po alejce.`,
    `Wiele produktów ma inne nazwy na niemieckich etykietach. Dlatego przy składnikach pojawiają się wskazówki „w DE często jako …”. To nie ozdobnik, tylko różnica między udaną kolacją a frustracją przy półce.`,
    `## Technika, która robi różnicę`,
    f.techniquePl,
    `Dobra polska kuchnia domowa wygląda prosto, ale rzadko jest niedbała. Temperatura, czas i kolejność decydują bardziej niż egzotyczne dodatki. Przy pierwszym razie przeczytaj kroki, przygotuj miski, a potem przełącz tryb gotowania: duży tekst kroku, wskazówki przy aktywnym kroku, porcje do skalowania.`,
    `## Porcje, czas i codzienność`,
    `Planuj realistycznie: przygotowanie i gotowanie się sumują. Po pracy część rzeczy da się zrobić wcześniej. ${f.dishPl} zwykle dobrze znosi odgrzewanie; często zyskuje, gdy smaki mają czas się połączyć.`,
    `Dla rodzin warto skalować porcje. Ilości w przepisie przeliczają się w liście przy gotowaniu i w checkliście zakupów. Mniej marnowania, mniej stresu przy kasie.`,
    `## Podawanie i resztki`,
    f.servePl,
    `Resztki należą do kultury tego jedzenia. Jedne dania smakują lepiej następnego dnia, inne wracają na patelnię w nowej formie. Przechowuj szczelnie i mroź porcje na pracowity tydzień.`,
    `## Życie między Polską a Niemcami`,
    f.diasporaPl,
    `Alemniam myśli o tej codzienności: dwujęzycznie, praktycznie, bez folkorystycznego teatru. Przełącznik trybów na stronie przepisu jest właśnie po to. Rano lista, wieczorem kroki. Bez opuszczania strony i bez ściany SEO-tekstu na drodze. Dłuższy artykuł jest świadomie pod UI kuchennym.`,
    `## Typowe błędy`,
    f.mistakesPl,
    `Gdy coś pójdzie nie tak: zanotuj krótko. Następnym razem często wystarczy drobna korekta. Gotowanie to powtarzanie z poprawą, nie jednorazowy przymus perfekcji.`,
    `## Warianty i dalsze jedzenie`,
    f.variantsPl,
    `Budowanie topical authority to też połączenia: podobne techniki, święta, regionalne wersje. Stąd warto zajrzeć do innych klasyków na Alemniam. Jako kuchnia, która się spaja.`,
    `## Smak, tekstura i dlaczego detale mają znaczenie`,
    `To, co robi z ${f.dishPl} coś wyjątkowego, rzadko jest tajnym składnikiem. To suma jakości produktów, prowadzenia ognia i odwagi, by doprawiać. Sól nie tylko na początku, kwas nie tylko z przyzwyczajenia, tłuszcz nie jako wyrzut sumienia, lecz nośnik aromatu. W polskiej kuchni domowej to oczywiste: smakujesz, poprawiasz, smakujesz znowu.`,
    `Gdy gotujesz w niemieckiej kuchni, bywa, że surowce są inne: inna mąka, inny twaróg, inne mięso. Dlatego zamienniki i wskazówki sklepowe są częścią przepisu. Celem nie jest muzealna kopia, tylko efekt, który smakuje jak ${f.dishPl}. Ciepło, rozpoznawalnie, gościnnie.`,
    `## Dla początkujących i wracających do kuchni`,
    `Początkujący powinni raz spokojnie przeczytać kroki, przygotować składniki i w trybie gotowania patrzeć tylko na aktywny krok. Wracający mogą iść szybciej, ale przy cieście, panierce czy bulionie warto zrobić krótką pauzę. Dzieci mogą odmierzać, myć, mieszać. Gorące i trudne kroki zostają dla dorosłych.`,
    `## Dlaczego ten dłuższy tekst`,
    `Ten artykuł świadomie dopowiada kontekst: pochodzenie, zakupy w Niemczech, technikę, błędy i warianty. Powstaje nie tylko lista składników, lecz kompletny przewodnik wokół ${f.dishPl}. Dla tych, którzy szukają, uczą się i naprawdę gotują.`,
    `## Checklist przed startem`,
    `Zanim włączysz kuchenkę: składniki wyjęte, deska czysta, ścierka pod ręką, telefon w trybie gotowania z dużym tekstem kroku. Jeśli brakuje produktu z polskiego sklepu, sprawdź zamiennik w przepisie. Lepiej świadoma zamiana niż improwizacja w ostatniej chwili. Po zakupach odhacz listę, wróć na tę samą stronę i przełącz na Gotuj. To jest cały pomysł Alemniam: jedna strona, dwa zadania, zero chaosu.`,
    `Jeśli gotujesz dla gości, policz porcje z zapasem. ${f.dishPl} często znika szybciej, niż myślisz, zwłaszcza gdy na stole pojawia się chleb i rozmowa wraca do domu. Zostaw sobie 10–15 minut buforu na podanie. Spokój przy talerzu smakuje lepiej niż pośpiech.`,
    `## Na skrócie`,
    `${f.dishPl} wychodzi, gdy składniki grają, technika jest jasna, a przebieg pasuje do życia. Użyj trybu zakupów do listy, trybu gotowania do kroków, a tego tekstu do kontekstu i szczegółów, które z „czegoś jak …” znów robią ${f.dishPl}.`,
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
