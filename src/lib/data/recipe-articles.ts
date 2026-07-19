import type { Locale } from "@/types/content";

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
      "In Deutschland findest du Twaróg im Polenladen; als Alternative eignet sich gut abgetropfter Magerquark. Mehl Typ 405 oder 550 funktioniert. Für den authentischen Geschmack lohnt sich echter Twaróg statt Frischkäse.",
    shopPl:
      "W Niemczech twaróg kupisz w polskim sklepie; zamiennikiem może być dobrze odsączony Quark. Mąka typ 405 lub 550 działa dobrze. Dla autentycznego smaku warto brać prawdziwy twaróg, nie serek kremowy.",
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
      "Varianten mit Speck in der Füllung, mit Sauerrahm-Dip oder als gebratene Reste. Süß gefüllte Pierogi sind ein anderes Gericht. Hier bleibt der Fokus auf Ruskie.",
    variantsPl:
      "Warianty z boczkiem w farszu, ze śmietaną albo jako podsmażane resztki. Słodkie pierogi to osobna historia. Tu zostajemy przy ruskich.",
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
      "Sauerkraut und getrocknete Pilze holst du am zuverlässigsten im Polenladen. Fleisch darf gemischt sein: Schwein, Wurstreste, Speck. Lorbeer und Piment sind Pflicht, nicht Deko.",
    shopPl:
      "Kapustę kiszoną i suszone grzyby najpewniej kupisz w polskim sklepie. Mięso może być mieszane: wieprzowina, resztki kiełbasy, boczek. Liść laurowy i ziele angielskie są obowiązkowe.",
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
      "Mit Äpfeln, mit Rotwein, mit mehr Wurst oder eher vegetarisch mit Extra-Pilzen. Die Grundidee bleibt: Kraut, Umami, Zeit.",
    variantsPl:
      "Z jabłkami, z czerwonym winem, z większą ilością kiełbasy albo bardziej wegetariańsko z dodatkiem grzybów. Idea zostaje: kapusta, umami, czas.",
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
      "Fertigen Żur-Ansatz gibt es im Polenladen in Flaschen. Weiße Wurst (biała kiełbasa) ebenfalls. Majoran ist das Aroma, das Żurek sofort „polnisch“ macht.",
    shopPl:
      "Gotowy zakwas na żur kupisz w butelkach w polskim sklepie. Biała kiełbasa również. Majeranek to aromat, który od razu czyni żurek „polskim”.",
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
      "Mit geräucherter Wurst, ohne Ei, oder klarer als Festtagssuppe. Schlesische Varianten sind oft kräftiger gewürzt.",
    variantsPl:
      "Z wędzoną kiełbasą, bez jajka albo jaśniejszy na święta. Warianty śląskie bywają mocniej przyprawione.",
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
      "Echten Oscypek gibt es im guten Polenladen oder saisonal auf Märkten. Alternativen: geräucherter Halloumi oder Bundz. Ähnlich in der Pfanne, anders im Charakter. Preiselbeeren als Kompott sind im deutschen Supermarkt leicht zu finden.",
    shopPl:
      "Prawdziwy oscypek kupisz w dobrym polskim sklepie lub sezonowo na targu. Zamienniki: wędzony halloumi albo bundz. Podobne na patelni, inne w charakterze. Żurawinę w słoiku łatwo znaleźć w niemieckim markecie.",
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
      "Mit Speck umwickelt, mit Honig-Tropfen oder auf dem Grill im Sommer. Die Preiselbeere bleibt der klassische Partner.",
    variantsPl:
      "Owinięty boczkiem, z kroplą miodu albo z grilla latem. Żurawina zostaje klasycznym partnerem.",
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
      "Mehligkochende oder vorwiegend festkochende Kartoffeln funktionieren. Sauerrahm (Schmand) aus dem Kühlregal, Öl mit hohem Rauchpunkt. Optional Apfelmus. Bei manchen Familien Pflicht.",
    shopPl:
      "Ziemniaki mączyste lub uniwersalne działają. Śmietana z lodówki, olej o wysokiej temperaturze dymienia. Opcjonalnie mus jabłkowy. W niektórych domach obowiązkowy.",
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
      "Mit Zucchini gemischt, mit Knoblauch, oder süß mit Zimt. Der Klassiker bleibt Kartoffel pur.",
    variantsPl:
      "Z cukinią, z czosnkiem albo na słodko z cynamonem. Klasyka to sama ziemniak.",
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
      "Ein großer Weißkohl, Hackfleisch gemischt, Reis und passierte Tomaten. Dill zum Servieren. Im Polenladen gibt es manchmal schon vorbereitete Blätter. Selten, aber hilfreich.",
    shopPl:
      "Duża kapusta, mięso mielone, ryż i passata. Koper do podania. W polskim sklepie czasem są gotowe liście. Rzadko, ale pomaga.",
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
      "Mit Buchweizen statt Reis, vegetarisch mit Pilzen, oder in Pilzsoße statt Tomate.",
    variantsPl:
      "Z kaszą zamiast ryżu, wegetariańskie z grzybami albo w sosie grzybowym zamiast pomidorowego.",
  },
  "recipe-barszcz": {
    dishDe: "Barszcz czerwony",
    dishPl: "Barszcz czerwony",
    vibeDe: "klar, säuerlich, festlich rot",
    vibePl: "klarowny, kwaśny, odświętnie czerwony",
    originDe:
      "Barszcz ist mehr als Rote-Bete-Suppe: Er ist Farbe, Ritual und Säurekultur. Zur Wigilia oft klar mit Uszka, im Alltag auch kräftiger und stückiger.",
    originPl:
      "Barszcz to więcej niż zupa z buraków: to kolor, rytuał i kultura kwasu. Na Wigilię często klarowny z uszkami, na co dzień też gęstszy i z warzywami.",
    shopDe:
      "Frische Rote Bete, gute Brühe, Allspice (Piment), Essig oder Zitronensäure zum Feinabschmecken. Uszka separat oder fertig aus dem Polenladen.",
    shopPl:
      "Świeże buraki, dobry bulion, ziele angielskie, ocet lub kwas do doprawienia. Uszka osobno lub gotowe z polskiego sklepu.",
    techniqueDe:
      "Für klare Brühe absieben; für Alltag stückig lassen. Säure erst am Ende justieren. Zu langes Kochen macht den Geschmack flach.",
    techniquePl:
      "Dla klarownego barszczu przecedź; na co dzień zostaw z warzywami. Kwasowość ustawiaj na końcu. Zbyt długie gotowanie spłaszcza smak.",
    serveDe:
      "Heiß, mit Uszka, Knödeln oder Kartoffeln. Ein Schuss Sauerrahm ist optional.",
    servePl:
      "Gorący, z uszkami, krokietami lub ziemniakami. Śmietana opcjonalna.",
    diasporaDe:
      "An Heiligabend in Deutschland rettet guter Barszcz das Menü. Und verbindet Generationen am Tisch.",
    diasporaPl:
      "W Wigilię w Niemczech dobry barszcz ratuje menu. I łączy pokolenia przy stole.",
    mistakesDe:
      "Zu süß, zu trüb durch starkes Kochen, zu wenig Säure. Barszcz soll wach schmecken.",
    mistakesPl:
      "Za słodki, zmętniony przez gwałtowne gotowanie, za mało kwasu. Barszcz ma smakować świeżo i wyraziście.",
    variantsDe:
      "Mit getrockneten Pilzen im Ansatz, mit Knoblauch betont, oder als scharfer Alltagbarszcz.",
    variantsPl:
      "Z suszonymi grzybami w bazie, mocniej czosnkowy albo ostry na co dzień.",
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
      "Gute Schweineschnitzel, frische Semmelbrösel, Eier, Mehl. Butterschmalz oder Schmalz für den richtigen Geschmack. Öl geht, ist aber anders.",
    shopPl:
      "Dobre kotlety wieprzowe, świeża bułka tarta, jajka, mąka. Smalec lub masło klarowane dla właściwego smaku. Olej działa, ale jest inny.",
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
      "Mit Knochen, aus Pute, oder im Ofen nachgebacken für Gäste. Der Klassiker bleibt Pfanne.",
    variantsPl:
      "Z kością, z indyka albo dogrzewany w piekarniku dla gości. Klasyka to patelnia.",
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
      "Milch, Mehl, Eier, Twaróg oder Quark, Zucker, Vanille. Etwas Sauerrahm macht die Füllung runder.",
    shopPl:
      "Mleko, mąka, jajka, twaróg lub Quark, cukier, wanilia. Odrobina śmietany zaokrągla farsz.",
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
      "Mit Nutella (Kinderwunsch), mit Spinat-Salz oder mit Marmelade. Twaróg bleibt die Hausvariante.",
    variantsPl:
      "Z nutellą, ze szpinakiem na słono albo z dżemem. Twaróg zostaje domową wersją.",
  },
  "recipe-rosol": {
    dishDe: "Rosół",
    dishPl: "Rosół",
    vibeDe: "klar, golden, heilend und festlich",
    vibePl: "klarowny, złoty, leczniczy i odświętny",
    originDe:
      "Rosół ist die polnische Hühnerbrühe: langsam gezogen, klar, mit Gemüse und Fadenudeln. Er ist Medizin, Sonntag und Willkommensgruß.",
    originPl:
      "Rosół to polski bulion drobiowy: długo gotowany, klarowny, z warzywami i nitkami. To lekarstwo, niedziela i powitanie.",
    shopDe:
      "Suppenhuhn oder qualitätvolle Keulen, Suppengrün, Piment, Lorbeer, Fadenudeln. Petersilienwurzel macht den Unterschied. Im deutschen Markt manchmal als Wurzelpetersilie.",
    shopPl:
      "Kurczak na rosół, włoszczyzna, ziele angielskie, liść laurowy, makaron nitki. Pietruszka korzeniowa robi różnicę.",
    techniqueDe:
      "Kalt ansetzen, Schaum nehmen, nie sprudelnd kochen. Zeit ist die Hauptzutat. Klarheit kommt von Ruhe, nicht von Tricks allein.",
    techniquePl:
      "Zimna woda na start, zbierać szumowiny, nie burzyć. Czas jest głównym składnikiem. Klarowność bierze się ze spokoju, nie z samych sztuczek.",
    serveDe:
      "Mit Nudeln, Karottenstücken, Petersilie. Fleisch separat oder im Teller.",
    servePl:
      "Z makaronem, marchewką, pietruszką. Mięso osobno lub w talerzu.",
    diasporaDe:
      "Rosół kocht man in Deutschland oft sonntags. Der Geruch füllt die Wohnung und die Woche.",
    diasporaPl:
      "Rosół w Niemczech często gotuje się w niedzielę. Zapach wypełnia mieszkanie i cały tydzień.",
    mistakesDe:
      "Zu starkes Kochen, zu wenig Salz am Ende, zu frühes Nudeln-Rein. Nudeln separat garen hält die Brühe klar.",
    mistakesPl:
      "Zbyt mocne gotowanie, za mało soli na końcu, zbyt wczesny makaron. Osobne gotowanie nitek trzyma rosół klarownym.",
    variantsDe:
      "Mit Rind gemischt, mit mehr Sellerie, oder als Basis für andere Suppen. Der Sonntags-Rosół bleibt Referenz.",
    variantsPl:
      "Z wołowiną, z większą ilością selera albo jako baza innych zup. Niedzielny rosół zostaje wzorem.",
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
      "Weiße Bohnen aus Glas oder Dose, Kiełbasa oder Krakauer, Tomatenmark, Speck, Majoran. Alles im deutschen Supermarkt plus Polenladen für bessere Wurst.",
    shopPl:
      "Fasola z puszki lub słoika, kiełbasa, koncentrat, boczek, majeranek. Wszystko w markecie, lepsza kiełbasa w polskim sklepie.",
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
      "Scharf mit Chili, mit mehr Gemüse, oder ohne Speck. Die Tomaten-Bohnen-Basis bleibt.",
    variantsPl:
      "Ostra z chili, z większą ilością warzyw albo bez boczku. Baza pomidorowo-fasolowa zostaje.",
  },
  "recipe-faworki": {
    dishDe: "Faworki",
    dishPl: "Faworki",
    vibeDe: "knusprig, zart, puderzuckerweiß",
    vibePl: "chrupiące, kruche, w cukrze pudrze",
    originDe:
      "Faworki — auch Chrust oder Chruściki — gehören zu Tłusty Czwartek und zur polnischen Faschingsküche. Hauchdünner Teig, heißes Öl, viel Puderzucker. Kein schweres Gebäck, sondern knusprige Schleifen.",
    originPl:
      "Faworki — też chrust lub chruściki — należą do Tłustego Czwartku i karnawałowej kuchni. Papierowo cienkie ciasto, gorący olej, dużo cukru pudru. Nie ciężkie ciasto, tylko chrupiące pętle.",
    shopDe:
      "Weizenmehl, Eigelb, saure Sahne/Schmand, Backpulver, Zucker, Wodka (oder Rum), Frittieröl, Puderzucker. Alles im deutschen Supermarkt.",
    shopPl:
      "Mąka, żółtka, śmietana, proszek do pieczenia, cukier, wódka (lub rum), olej, cukier puder. Wszystko w niemieckim markecie.",
    techniqueDe:
      "Lange kneten, hauchdünn ausrollen, Schlingen formen, bei 170–180 °C frittieren, abtropfen, warm bestäuben. Alkohol im Teig reduziert die Ölaufnahme.",
    techniquePl:
      "Długo wyrabiać, rozwałkować bardzo cienko, formować pętle, smażyć w 170–180 °C, odsączyć, posypać na ciepło. Alkohol w cieście zmniejsza wchłanianie tłuszczu.",
    serveDe:
      "Noch warm mit viel Puderzucker. Zur Kaffee oder als Tłusty-Czwartek-Teller neben Pączki.",
    servePl:
      "Jeszcze ciepłe, obficie w cukrze pudrze. Do kawy albo na talerz Tłustego Czwartku obok pączków.",
    diasporaDe:
      "In Deutschland oft leichter selbst zu machen als gute frische Faworki zu finden. Ein Nachmittag, ein Topf Öl — und der Geruch erinnert an zu Hause.",
    diasporaPl:
      "W Niemczech często łatwiej upiec samemu niż znaleźć dobre świeże faworki. Jedno popołudnie, garnek oleju — i zapach wraca do domu.",
    mistakesDe:
      "Zu dicker Teig, zu kaltes Öl, zu voller Topf, Puderzucker erst nach dem Abkühlen. Dann werden sie ölig oder weich.",
    mistakesPl:
      "Za grube ciasto, za chłodny olej, za pełny garnek, cukier puder dopiero po wystygnięciu. Wtedy wychodzą tłuste albo miękkie.",
    variantsDe:
      "Mit Zitronenschale im Teig, gebacken statt frittiert (knuspriger Kompromiss), oder als kleiner Batch für den Alltag.",
    variantsPl:
      "Ze skórką cytryny w cieście, pieczone zamiast smażone (chrupiący kompromis) albo mała partia na zwykły dzień.",
  },
};

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
