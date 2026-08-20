/**
 * Wave 17 — FACTS for the 10 Kiszonki & Marynaty recipes (pickled/fermented vegetables).
 * These recipes had no article content before this wave; FACTS created from scratch.
 *
 * Integrator: merge into recipe-articles.ts:
 * import { W17_FACTS } from "./recipe-articles-w17";
 * Object.assign(FACTS, W17_FACTS);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale.
 * Ownership CRITICAL: kiszenie (lacto-ferment, no vinegar) vs marynowanie w occie
 * (vinegar-based) are genuinely different preservation techniques with different
 * histories; keep that distinction accurate across all 10 dishes.
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

export const W17_FACTS: Record<string, ArticleFacts> = {
  "recipe-ogorki-kiszone": {
    dishDe: "Ogórki kiszone",
    dishPl: "Ogórki kiszone",
    vibeDe: "trübe Salzlake, knackige Säure, der Gurkenglasklassiker aus dem Keller",
    vibePl: "mętna zalewa, chrupiąca kwaskowatość, klasyczny słoik z piwnicy",
    originDe:
      "Ogórki kiszone gehören zu den ältesten Konservierungstechniken Polens und waren schon vor den Teilungen Polens im 18. Jahrhundert in jedem größeren Haushalt bekannt. In Wielkopolska rührte man traditionell etwas Honig in die Lake, um die Säure abzurunden, in Małopolska nahm man reichlich Knoblauch und Senfkörner für mehr Schärfe, im Osten Polens legte man gern Weinlaub oder zusätzliche Meerrettichblätter dazu. Gekist wurde in großen Holzfässern oder Steintöpfen, die Gurken schichtete man mit Kirsch, Johannisbeer, Eichen oder Meerrettichblättern, weil deren Gerbstoffe die Gurken knackig hielten und Schimmel bremsten, danach beschwerte man alles mit einem Stein oder Brett, damit nichts an die Luft kam. Anders als bei den essiggesäuerten [Ogórki konserwowe](/de/rezepte/ogorki-konserwowe) entsteht die Säure hier ausschließlich durch Milchsäurebakterien, die den natürlichen Zucker der Gurke umwandeln, genau der Prozess, der auch bei der [Kapusta kiszona](/de/rezepte/kapusta-kiszona) und beim [Czosnek kiszony](/de/rezepte/czosnek-kiszony) arbeitet. Die polnische Norm empfiehlt für die Lake 2 bis 2,5 Prozent Salz, in der Praxis reichen Hausrezepte von 1,5 bis 3,5 Prozent, unjodiertes Salz ist wichtig, weil Jod und Rieselhilfen die empfindlichen Fermentationskulturen stören können.",
    originPl:
      "Kiszenie ogórków to jedna z najstarszych metod konserwowania warzyw w Polsce, znana w niemal każdym gospodarstwie jeszcze przed rozbiorami. W Wielkopolsce do zalewy dodawano odrobinę miodu, żeby złagodzić kwas, w Małopolsce sypano więcej czosnku i gorczycy dla ostrości, na wschodzie kraju chętnie dokładano liście winogron albo dodatkowy chrzan. Kiszono w dużych drewnianych beczkach lub kamiennych garnkach, ogórki przekładano liśćmi wiśni, porzeczki, dębu lub chrzanu, bo zawarte w nich garbniki utrzymywały chrupkość i hamowały rozwój pleśni, a całość obciążano kamieniem lub deską, żeby nic nie miało kontaktu z powietrzem. W przeciwieństwie do octowych [ogórków konserwowych](/pl/rezepte/ogorki-konserwowe) kwas nie pochodzi tu z octu, lecz z bakterii kwasu mlekowego, które przetwarzają naturalny cukier ogórka, dokładnie ten sam proces działa też przy [kapuście kiszonej](/pl/rezepte/kapusta-kiszona) i przy [czosnku kiszonym](/pl/rezepte/czosnek-kiszony). Polska Norma zaleca dla zalewy 2 do 2,5 procent soli, w praktyce domowe przepisy wahają się od 1,5 do 3,5 procent, sól musi być niejodowana, bo jod i substancje przeciwzbrylające mogą zaburzać delikatne kultury fermentacyjne.",
    shopDe:
      "Kaufe kleine, feste Einlegegurken direkt nach der Ernte, sie halten sich beim Kiszen deutlich besser als große Salatgurken. Dazu unjodiertes Salz, das oft günstiger im [Polenladen](/de/blog/polenladen-einkaufen) liegt, Knoblauch, Dilldolden, Senfkörner, Lorbeer und optional ein Stück Meerrettichwurzel. Passende Gläser mit weitem Hals oder ein kleiner Steintopf machen das Beschweren einfacher, eine Übersicht dazu bietet die [Kaufberatung für Fermentiergläser](/de/blog/fermentier-glaeser-kaufberatung).",
    shopPl:
      "Kup małe, twarde ogórki gruntowe najlepiej prosto po zbiorach, bo trzymają się podczas kiszenia znacznie lepiej niż duże ogórki sałatkowe. Do tego sól niejodowaną, którą często taniej kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), czosnek, kwiatostany kopru, ziarna gorczycy, liść laurowy i opcjonalnie kawałek chrzanu. Słoiki z szerokim wlotem albo mały kamionkowy garnek ułatwiają obciążanie, przegląd sprzętu opisuje [poradnik o słoikach do kiszenia](/pl/blog/sloiki-do-kiszenia).",
    techniqueDe:
      "Die Salzmenge von etwa 3 Prozent ist kein Zufall, sie liegt am oberen Rand der für Gurken üblichen Spanne und bremst unerwünschte Fäulniskeime, ohne die Milchsäurebakterien zu behindern, die die Fermentation tragen. Bei 18 bis 22 Grad läuft die Gärung stetig, aber nicht zu hitzig ab, deutlich wärmer begünstigt eher Fäulnis als Säure. Entscheidend ist, dass die Gurken jederzeit vollständig unter der Lake bleiben, denn an der Luft entsteht zuerst eine harmlose weiße Kahmhefe, die sich einfach abschöpfen lässt, während farbiger oder pelziger Schimmel bedeutet, dass die ganze Charge weg muss. Nach dem Gären stoppt der Kühlschrank die Fermentation weitgehend, ohne sie ganz zum Erliegen zu bringen, deshalb reifen die Gurken dort noch spürbar nach.",
    techniquePl:
      "Około 3 procent soli to nie przypadek, to górna granica zakresu typowego dla ogórków, który hamuje niepożądane bakterie gnilne, nie przeszkadzając bakteriom kwasu mlekowego, na których opiera się cała fermentacja. W temperaturze 18 do 22 stopni kiszenie postępuje równomiernie, ale bez nadmiaru ciepła, które sprzyja raczej zepsuciu niż dobrej kwaśności. Kluczowe jest, żeby ogórki cały czas zostawały pod zalewą, bo na powietrzu najpierw pojawia się nieszkodliwy biały kożuch, który wystarczy zebrać łyżką, natomiast kolorowa lub puszysta pleśń oznacza, że cała partia nadaje się do wyrzucenia. Po ukiszeniu lodówka w dużej mierze zatrzymuje fermentację, choć nie całkiem, dlatego ogórki w chłodzie jeszcze delikatnie dojrzewają.",
    serveDe:
      "Serviere die Ogórki kiszone gekühlt zu Brot, zu Kotlet schabowy oder direkt vom Grillteller, ein Glas reicht meist für eine ganze Runde am Tisch. Im Vorratsschrank passt gut die [Kapusta kiszona](/de/rezepte/kapusta-kiszona) daneben, aus überschüssiger Lake und ein paar Gurken lässt sich außerdem die [Ogórkowa](/de/rezepte/ogorkowa) kochen.",
    servePl:
      "Podawaj ogórki kiszone schłodzone, do chleba, do kotleta schabowego albo prosto z grilla, jeden słoik zwykle starcza na całe spotkanie przy stole. W spiżarni dobrze komponuje się obok nich [kapusta kiszona](/pl/rezepte/kapusta-kiszona), a z nadmiaru zalewy i kilku ogórków można ugotować [ogórkową](/pl/rezepte/ogorkowa).",
    diasporaDe:
      "In Deutschland lohnt sich ein größerer Ansatz, sobald im Spätsommer feste kleine Gurken im Wochenmarkt oder im [Polenladen](/de/blog/polenladen-einkaufen) auftauchen, denn fertig gekist halten sie sich gekühlt monatelang. Kinder dürfen beim Schichten von Knoblauch und Dill helfen, das Ansetzen der Salzlake und das tägliche Prüfen der Gläser bleibt bei den Erwachsenen. Fehlt unjodiertes Salz oder eine bestimmte Kräuterzutat, hilft der Überblick zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) weiter.",
    diasporaPl:
      "W Niemczech warto kisić od razu większą partię, gdy późnym latem na targu albo w [sklepie polskim](/pl/blog/sklep-polski-zakupy) pojawią się małe, twarde ogórki, bo gotowe trzymają się w chłodzie miesiącami. Dzieci mogą pomagać przy układaniu czosnku i kopru, przygotowanie zalewy i codzienne sprawdzanie słoików zostaje przy dorosłych. Gdy brakuje soli niejodowanej albo konkretnego ziela, pomocne są [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
    mistakesDe:
      "Jodsalz statt unjodiertem Salz verlangsamt oder stört die Fermentation und macht die Lake oft unangenehm trüb. Gurken, die nicht vollständig unter der Lake bleiben, verderben an der Luft, deshalb ist ein Gewicht kein optionaler Schritt. Harmlose weiße Kahmhefe wegzuwerfen ist unnötig, sie gehört nur abgeschöpft, während farbiger Schimmel tatsächlich das ganze Glas kostet. Und wer nur ein bis drei Tage warten will, landet ohnehin bei den milden [Ogórki małosolne](/de/rezepte/ogorki-malosolne), nicht bei echten Kiszone.",
    mistakesPl:
      "Sól jodowana zamiast niejodowanej spowalnia lub zaburza fermentację i często robi zalewę nieprzyjemnie mętną. Ogórki, które nie zostają całkowicie pod zalewą, psują się na powietrzu, dlatego obciążenie to nie jest krok do pominięcia. Wyrzucanie całego słoika przez nieszkodliwy biały kożuch jest zbędne, wystarczy go zebrać, natomiast kolorowa pleśń rzeczywiście kosztuje cały słoik. A kto chce czekać tylko jeden do trzech dni, i tak wyląduje przy łagodnych [ogórkach małosolnych](/pl/rezepte/ogorki-malosolne), a nie przy prawdziwych kiszonych.",
    variantsDe:
      "Mit mehr Knoblauch und Senfkörnern wird die Lake schärfer, mit einem zusätzlichen Weinblatt bleiben die Gurken besonders knackig, mit etwas Honig in der Lake wird die Säure runder, eine Vorliebe aus Wielkopolska. Wer nur ein bis drei Tage warten möchte, findet die milde Schwester bei [Ogórki małosolne](/de/rezepte/ogorki-malosolne) mit eigenen Varianten wie scharf, mit Honig oder mit Eichenblatt, wer stattdessen Essig bevorzugt, landet bei [Ogórki konserwowe](/de/rezepte/ogorki-konserwowe).",
    variantsPl:
      "Z większą ilością czosnku i gorczycy zalewa robi się ostrzejsza, z dodatkowym liściem winogron ogórki zostają wyjątkowo chrupiące, z odrobiną miodu w zalewie kwas robi się łagodniejszy, to zwyczaj z Wielkopolski. Kto chce czekać tylko jeden do trzech dni, znajdzie łagodniejszą siostrę w [ogórkach małosolnych](/pl/rezepte/ogorki-malosolne) z własnymi wariantami ostrym, miodowym i z liściem dębu, a kto woli ocet, trafi na [ogórki konserwowe](/pl/rezepte/ogorki-konserwowe).",
  },

  "recipe-ogorki-malosolne": {
    dishDe: "Ogórki małosolne",
    dishPl: "Ogórki małosolne",
    vibeDe: "junge, mild gesäuerte Gurken, fertig in ein paar Tagen, der Sommersnack schlechthin",
    vibePl: "młode, lekko kiszone ogórki gotowe w kilka dni, letni przysmak par excellence",
    originDe:
      "Ogórki małosolne, wörtlich leicht gesalzene Gurken, sind die junge, ungeduldige Schwester der lange gegorenen [Ogórki kiszone](/de/rezepte/ogorki-kiszone) und in Polen untrennbar mit dem Sommer verbunden, sobald die ersten festen kleinen Gurken auf dem Markt liegen. Während die klassischen Kiszone auf wochenlange Haltbarkeit für den Winter ausgelegt sind, nutzt die Małosolne dieselbe Milchsäuregärung nur für ein bis drei Tage, gerade lange genug, damit die Gurke noch knackig-frisch schmeckt, aber schon eine leichte, runde Säure entwickelt. Diese Halbfermentation war historisch praktisch, weil sie kein Fass und keine wochenlange Lagerung im Keller brauchte, sondern in Glas oder Schüssel direkt in der Küche entstand. Die niedrigere Salzkonzentration von rund 2 Prozent unterstützt genau dieses kurze Zeitfenster, bei längerem Stehen kippt die Gurke unweigerlich in Richtung der kräftigeren Kiszone.",
    originPl:
      "Ogórki małosolne, czyli dosłownie lekko posolone ogórki, to młodsza, niecierpliwa siostra długo kiszonych [ogórków kiszonych](/pl/rezepte/ogorki-kiszone) i w Polsce nierozerwalnie kojarzą się z latem, gdy tylko na targu pojawiają się pierwsze twarde, małe ogórki. Podczas gdy klasyczne kiszone są pomyślane na tygodnie przechowywania na zimę, małosolne wykorzystują dokładnie tę samą fermentację mlekową tylko przez jeden do trzech dni, na tyle długo, żeby ogórek zachował chrupkość, ale zdążył nabrać delikatnej, okrągłej kwaskowatości. Ta półfermentacja była historycznie praktyczna, bo nie wymagała beczki ani tygodni przechowywania w piwnicy, tylko powstawała w słoju albo misce prosto w kuchni. Niższe stężenie soli, około 2 procent, wspiera właśnie to krótkie okno czasowe, przy dłuższym staniu ogórek nieuchronnie przechyla się w stronę mocniejszych kiszonych.",
    shopDe:
      "Kaufe wirklich frische, feste kleine Gurken, ältere oder weiche Ware wird bei diesem kurzen Ferment nie richtig knackig. Dazu unjodiertes Salz, Knoblauch, Dill und Senfkörner, alles günstig im [Polenladen](/de/blog/polenladen-einkaufen) erhältlich. Wer mehr Auswahl sucht, findet oben in den Varianten scharfe, mit Honig oder mit Eichenblatt gekiste Linien.",
    shopPl:
      "Kup naprawdę świeże, twarde małe ogórki, starsze albo miękkie sztuki przy tak krótkim kiszeniu nigdy nie zrobią się porządnie chrupiące. Do tego sól niejodowaną, czosnek, koper i gorczycę, wszystko tanio dostaniesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Kto szuka większego wyboru, znajdzie w wariantach wyżej wersję ostrą, miodową i z liściem dębu.",
    techniqueDe:
      "Zwei Prozent Salz reichen hier bewusst aus, weil die Gurken nur ein bis drei Tage bei Zimmertemperatur ziehen und nicht wochenlang haltbar sein müssen. Im Sommer bei hoher Raumtemperatur geht die Gärung schneller, deshalb lohnt sich schon nach 24 Stunden eine erste Kostprobe, im kühleren Frühherbst dauert es eher Richtung 72 Stunden. Sobald die Gurken nach Gurke mit einer leichten, runden Säure schmecken, gehören sie sofort in den Kühlschrank, denn die Fermentation läuft weiter und aus der Małosolne wird sonst langsam eine kräftigere Kiszone. Eine leicht trübe Lake ist bei diesem kurzen Prozess völlig normal.",
    techniquePl:
      "Dwa procent soli w zupełności wystarczą, bo ogórki kiszą się tylko jeden do trzech dni w temperaturze pokojowej i nie muszą być trwałe na tygodnie. Latem przy wyższej temperaturze fermentacja przyspiesza, dlatego warto spróbować już po 24 godzinach, w chłodniejszym okresie potrwa to bliżej 72 godzin. Gdy tylko ogórki nabiorą smaku ogórka z delikatną, okrągłą kwaskowatością, od razu przenieś je do lodówki, bo fermentacja trwa dalej i z małosolnych powoli robią się mocniejsze kiszone. Lekko mętna zalewa przy tak krótkim procesie jest całkowicie normalna.",
    serveDe:
      "Am besten schmecken sie gekühlt und ganz frisch, zu Brot, zu Wurst oder direkt vom Grillteller, meist reicht ein Glas für einen Nachmittag im Garten. Wer die kräftigere, lange gegorene Version sucht, findet sie bei [Ogórki kiszone](/de/rezepte/ogorki-kiszone), wer lieber Essig mag, bei [Ogórki konserwowe](/de/rezepte/ogorki-konserwowe).",
    servePl:
      "Najlepiej smakują schłodzone i naprawdę świeże, do chleba, do kiełbasy albo prosto z grilla, zwykle jeden słoik starcza na popołudnie w ogrodzie. Kto szuka mocniejszej, długo kiszonej wersji, znajdzie ją w [ogórkach kiszonych](/pl/rezepte/ogorki-kiszone), a kto woli ocet, w [ogórkach konserwowych](/pl/rezepte/ogorki-konserwowe).",
    diasporaDe:
      "In Deutschland sind Małosolne der perfekte Sommerimpuls, sobald man im [Polenladen](/de/blog/polenladen-einkaufen) frische kleine Gurken sieht, denn in wenigen Tagen steht ein fertiges Glas auf dem Tisch. Kinder dürfen beim Schichten helfen und selbst kosten, wann die Gurken fertig sind, das macht das kurze Warten spannend. Fehlt eine Zutat, hilft der Überblick zu [Ersatzprodukten](/de/blog/ersatzprodukte-de).",
    diasporaPl:
      "W Niemczech małosolne to idealny letni impuls, gdy tylko w [sklepie polskim](/pl/blog/sklep-polski-zakupy) pojawią się świeże małe ogórki, bo już po kilku dniach na stole stoi gotowy słoik. Dzieci mogą pomagać przy układaniu i same sprawdzać, kiedy ogórki są gotowe, co czyni krótkie czekanie ciekawszą zabawą. Gdy brakuje jakiegoś składnika, pomogą [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
    mistakesDe:
      "Zu alte oder weiche Gurken werden auch nach der Gärung nie knackig, hier zählt wirklich frische Ware. Wer die Gurken zu lange bei Zimmertemperatur stehen lässt, bekommt am Ende ungewollt kräftige Kiszone statt der milden Małosolne. Und Małosolne mit den essiggesäuerten [Ogórki konserwowe](/de/rezepte/ogorki-konserwowe) zu verwechseln führt zu falschen Erwartungen an Säure und Haltbarkeit, denn nur eine der beiden Linien hält sich monatelang.",
    mistakesPl:
      "Zbyt stare albo miękkie ogórki nigdy nie zrobią się chrupiące nawet po kiszeniu, tu naprawdę liczy się świeżość. Kto zostawi ogórki zbyt długo w temperaturze pokojowej, dostanie niechcący mocne kiszone zamiast łagodnych małosolnych. Mylenie małosolnych z octowymi [ogórkami konserwowymi](/pl/rezepte/ogorki-konserwowe) prowadzi do złych oczekiwań co do kwasu i trwałości, bo tylko jedna z tych linii trzyma się miesiącami.",
    variantsDe:
      "Neben der klassischen Version mit Dill und Knoblauch gibt es eine scharfe Linie mit Chili, eine mit Honig für mehr Süße und eine mit Eichenblatt für zusätzliche Knackigkeit, alle drei als eigene Varianten oben in der Auswahl. Wer lieber lange gegorene Gurken für den Winter möchte, findet sie bei [Ogórki kiszone](/de/rezepte/ogorki-kiszone), die essiggesäuerte Linie bleibt bei [Ogórki konserwowe](/de/rezepte/ogorki-konserwowe).",
    variantsPl:
      "Obok klasycznej wersji z koperkiem i czosnkiem istnieje wariant ostry z chili, wariant z miodem dla większej słodyczy i wariant z liściem dębu dla dodatkowej chrupkości, wszystkie trzy jako osobne warianty w wyborze powyżej. Kto woli długo kiszone ogórki na zimę, znajdzie je w [ogórkach kiszonych](/pl/rezepte/ogorki-kiszone), a linia octowa zostaje przy [ogórkach konserwowych](/pl/rezepte/ogorki-konserwowe).",
  },

  "recipe-kapusta-kiszona": {
    dishDe: "Kapusta kiszona",
    dishPl: "Kapusta kiszona",
    vibeDe: "fein geschnittenes, roh vergorenes Weißkraut, die Basis für Bigos und Kapuśniak",
    vibePl: "drobno szatkowana, surowo ukiszona kapusta, baza pod bigos i kapuśniak",
    originDe:
      "Kapusta kiszona verdankt ihren festen Platz in der polnischen Küche vor allem dem Bigos, dessen Name aus dem Lateinischen für zwei Geschmäcker kommen soll, gemeint sind frischer und saurer Kohl im selben Topf. Im 17. und 18. Jahrhundert war Bigos noch ein Gericht aus gehacktem Fleisch mit Zitrone, Limette oder Weinessig, erst im 18. Jahrhundert ersetzte man die teuren sauren Zutaten zunehmend durch die deutlich günstigere kiszona Kapusta, eine Anpassung, die sich im 19. Jahrhundert endgültig durchsetzte. Traditionell wurde der geschnittene Kohl in Holzfässern mit Salz eingestampft, oft buchstäblich mit den Füßen, wie es Władysław Reymont in seinem Roman Chłopi eindrücklich beschreibt, ärmere Haushalte kisten sogar lose Blätter und Strunkreste, wenn ganze Köpfe knapp waren, weil auf den Wintervorrat niemand verzichten wollte. Die Fermentation verläuft in zwei Phasen, eine stürmische Anfangsphase von 2 bis 3 Tagen mit sichtbarer Blasenbildung und Schaum, danach die ruhigere eigentliche Milchsäuregärung bis etwa zum 10. bis 16. Tag. Bis heute zählt Polen zu den größten Sauerkrautproduzenten Europas, mit einem Pro-Kopf-Verbrauch von rund 3 kg im Jahr, und die Region um Charsznica in Kleinpolen ist für ihre Qualität so bekannt, dass dort jährlich ein eigenes Kohlfest mit gewähltem Kohlkönig gefeiert wird. Dieselbe Milchsäuregärung ohne Essig verbindet Kapusta kiszona mit den [Ogórki kiszone](/de/rezepte/ogorki-kiszone) und dem [Czosnek kiszony](/de/rezepte/czosnek-kiszony).",
    originPl:
      "Kapusta kiszona zawdzięcza swoje stałe miejsce w polskiej kuchni przede wszystkim bigosowi, którego nazwa ma pochodzić z łaciny i oznaczać podwójny smak, czyli świeżą i kwaśną kapustę w jednym garnku. W XVII i XVIII wieku bigos był jeszcze potrawą z siekanego mięsa z cytryną, limonką albo octem winnym, dopiero w XVIII wieku te drogie kwaśne dodatki zaczęto zastępować znacznie tańszą kiszoną kapustą, a w XIX wieku ta zamiana utrwaliła się na dobre. Tradycyjnie posiekaną kapustę ubijano z solą w drewnianych beczkach, często dosłownie bosymi stopami, co barwnie opisał Władysław Reymont w Chłopach, a najbiedniejsi kisili nawet luźne liście i odcięte kawałki głąbów, byle tylko mieć zapas na zimę. Fermentacja przebiega w dwóch etapach, najpierw burzliwa faza początkowa trwająca 2 do 3 dni z wyraźnym pienieniem i wydzielaniem gazu, potem spokojniejsza właściwa fermentacja mlekowa trwająca do 10 lub 16 dnia. Polska do dziś jest jednym z największych producentów kiszonej kapusty w Europie, ze spożyciem rzędu 3 kg na osobę rocznie, a region Charsznicy w Małopolsce słynie z jej jakości na tyle, że co roku odbywa się tam własne święto kapusty z wyborem króla i królowej. Ta sama fermentacja mlekowa bez octu łączy kapustę kiszoną z [ogórkami kiszonymi](/pl/rezepte/ogorki-kiszone) i [czosnkiem kiszonym](/pl/rezepte/czosnek-kiszony).",
    shopDe:
      "Kaufe festen, möglichst spät im Jahr geernteten Weißkohl, er hat mehr Zucker für die Milchsäurebakterien und wird knackiger als früher Sommerkohl. Dazu nur unjodiertes Salz, optional Kümmel für mehr Aroma, beides gibt es günstig im [Polenladen](/de/blog/polenladen-einkaufen). Für größere Mengen lohnt sich ein Steintopf oder ein großes Fermentierglas, eine Übersicht bietet die [Kaufberatung für Fermentiergläser](/de/blog/fermentier-glaeser-kaufberatung).",
    shopPl:
      "Kup twardą, najlepiej późno zebraną kapustę białą, ma więcej cukru dla bakterii kwasu mlekowego i zostaje bardziej chrupiąca niż wczesna kapusta letnia. Do tego tylko sól niejodowana, opcjonalnie kminek dla aromatu, oba składniki tanio kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Przy większych ilościach przyda się kamionkowy garnek albo duży słój do fermentacji, przegląd sprzętu opisuje [poradnik o słoikach do kiszenia](/pl/blog/sloiki-do-kiszenia).",
    techniqueDe:
      "Zwei Prozent Salz sind bei Kapusta kiszona bewusst niedriger angesetzt als bei Gurken, weil Kohl beim Kneten viel eigenen Saft freisetzt, der die Salzkonzentration in der Lake zusätzlich verdünnt. Entscheidend ist kräftiges Kneten, bis wirklich reichlich Saft austritt, denn nur unter Flüssigkeit läuft die Gärung sauerstofffrei und ohne Fäulnis ab. Die stürmische Anfangsphase mit Schaum und Bläschen in den ersten Tagen ist normal und muss nur regelmäßig abgeschöpft werden, farbiger Schimmel dagegen bedeutet immer, dass die betroffene Charge entsorgt werden muss. Nach etwa 7 bis 14 Tagen bei 18 bis 22 Grad ist die Hauptgärung abgeschlossen, im Kühlschrank reift das Kraut danach nur noch langsam nach und wird milder.",
    techniquePl:
      "Dwa procent soli w kapuście kiszonej to celowo mniej niż przy ogórkach, bo kapusta podczas ugniatania oddaje mnóstwo własnego soku, który dodatkowo rozcieńcza stężenie soli w zalewie. Kluczowe jest mocne ugniatanie, aż naprawdę popłynie sok, bo tylko pod płynem fermentacja przebiega bez dostępu tlenu i bez ryzyka zgnilizny. Burzliwa faza początkowa z pianą i bąbelkami w pierwszych dniach jest normalna i wystarczy ją regularnie zbierać, natomiast kolorowa pleśń zawsze oznacza, że dana partia nadaje się do wyrzucenia. Po około 7 do 14 dniach w 18 do 22 stopniach główna fermentacja się kończy, a w lodówce kapusta jeszcze powoli dojrzewa i łagodnieje.",
    serveDe:
      "Serviere frisch gegorene Kapusta kiszona als Basis für [Bigos](/de/rezepte/bigos) oder für [Kapuśniak](/de/rezepte/kapusniak), auch als Füllung für Pierogi funktioniert sie gut. Im Vorratsregal steht sie sinnvoll neben den [Ogórki kiszone](/de/rezepte/ogorki-kiszone).",
    servePl:
      "Podawaj świeżo ukiszoną kapustę jako bazę do [bigosu](/pl/rezepte/bigos) albo do [kapuśniaku](/pl/rezepte/kapusniak), dobrze sprawdza się też jako nadzienie do pierogów. W spiżarni sensownie stoi obok [ogórków kiszonych](/pl/rezepte/ogorki-kiszone).",
    diasporaDe:
      "In Deutschland lohnt sich eine größere Charge, sobald im Herbst fester Weißkohl günstig zu haben ist, denn fertig gegoren hält sich das Kraut im Kühlschrank monatelang und wird zur Wintervorratsbasis für Bigos. Kinder dürfen beim Hobeln und Schichten helfen, das feste Einstampfen und das tägliche Prüfen bleibt bei den Erwachsenen. Guten Kümmel und unjodiertes Salz gibt es im [Polenladen](/de/blog/polenladen-einkaufen).",
    diasporaPl:
      "W Niemczech warto ukisić większą partię, gdy jesienią tania jest twarda kapusta biała, bo gotowa trzyma się w lodówce miesiącami i staje się zimową bazą na bigos. Dzieci mogą pomagać przy szatkowaniu i układaniu warstw, mocne ugniatanie i codzienne sprawdzanie zostaje przy dorosłych. Dobry kminek i sól niejodowaną znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    mistakesDe:
      "Zu wenig Kneten lässt zu wenig Saft austreten, dann bleibt der Kohl an der Luft und verdirbt statt zu gären. Ungesalzenes Wasser zum Auffüllen verdünnt die schützende Salzkonzentration und öffnet Fäulnisbakterien Tür und Tor. Farbigen Schimmel zu übersehen statt die ganze Charge zu entsorgen ist riskant. Und wer Kapusta kiszona mit der bereits geschmorten [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana) verwechselt, erwartet die falsche Konsistenz und den falschen Geschmack.",
    mistakesPl:
      "Zbyt słabe ugniatanie sprawia, że wypływa za mało soku, wtedy kapusta zostaje na powietrzu i psuje się zamiast fermentować. Dolewanie niesolonej wody rozcieńcza ochronne stężenie soli i otwiera drogę bakteriom gnilnym. Przeoczenie kolorowej pleśni zamiast wyrzucenia całej partii jest ryzykowne. A kto myli kapustę kiszoną z już duszoną [kapustą zasmażaną](/pl/rezepte/kapusta-zasmażana), oczekuje złej konsystencji i złego smaku.",
    variantsDe:
      "Mit Kümmel wird das Kraut würziger, mit etwas Karotte in den Schichten leicht süßer, eine ältere Landvariante kiste sogar nur lose Blätter und Strunkreste, wenn ganze Köpfe knapp waren. Wer die geschmorte, warme Beilage sucht, findet sie bei [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana), der nächste Nachbar im Regal bleiben die [Ogórki kiszone](/de/rezepte/ogorki-kiszone).",
    variantsPl:
      "Z kminkiem kapusta robi się bardziej wyrazista, z odrobiną marchewki między warstwami lekko słodsza, starsza wiejska wersja kisiła nawet same luźne liście i odcięte głąby, gdy całych główek brakowało. Kto szuka duszonej, ciepłej wersji, znajdzie ją w [kapuście zasmażanej](/pl/rezepte/kapusta-zasmażana), a najbliższym sąsiadem w spiżarni zostają [ogórki kiszone](/pl/rezepte/ogorki-kiszone).",
  },

  "recipe-czosnek-kiszony": {
    dishDe: "Czosnek kiszony",
    dishPl: "Czosnek kiszony",
    vibeDe: "milde, rund gegorene Knoblauchzehen, ein neuerer Zuwachs im Kiszonki-Regal",
    vibePl: "łagodne, okrągłe w smaku kiszone ząbki czosnku, nowszy przybysz w regale kiszonek",
    originDe:
      "Anders als Ogórki kiszone oder Kapusta kiszona, die auf jahrhundertealte Höfe und Bauernhaushalte zurückgehen, ist Czosnek kiszony vor allem ein Kind der jüngeren Fermentations und Probiotik-Welle, die seit einigen Jahren auch in Polen viele traditionelle Kiszonki neu populär macht. Die zugrunde liegende Technik, Milchsäuregärung in Salzlake, ist exakt dieselbe wie bei den alten Klassikern, nur wird sie hier gezielt auf rohe Knoblauchzehen angewendet statt auf Kohl oder Gurken. Während der Gärung reagieren die schwefelhaltigen Aromastoffe des Knoblauchs mit Spurenelementen und der entstehenden Säure, wodurch die Zehen harmlos blau oder grün anlaufen können, ein Effekt, der lange bekannt war, aber erst mit dem neuen Interesse an Fermenten wieder Beachtung findet. Wichtig ist die Abgrenzung zum traditionellen [Chrzan tarty](/de/rezepte/chrzan), dem weißen, scharfen Meerrettich, der mit Sahne und Essig sauer gemacht wird und fest zur österlichen Święconka gehört, Czosnek kiszony verfolgt ein ganz anderes Ziel, nämlich mildere, besser verträgliche Knoblauchzehen mit lebendigen Milchsäurebakterien für den ganzjährigen Vorrat.",
    originPl:
      "W przeciwieństwie do ogórków kiszonych czy kapusty kiszonej, które mają rodowód sięgający wielowiekowej tradycji wiejskich gospodarstw, czosnek kiszony jest przede wszystkim dzieckiem nowszej fali fermentacji i mody na probiotyki, która od kilku lat na nowo popularyzuje w Polsce wiele starych kiszonek. Technika pozostaje dokładnie ta sama, fermentacja mlekowa w słonej zalewie, tyle że tutaj stosuje się ją celowo do surowych ząbków czosnku zamiast do kapusty czy ogórków. Podczas kiszenia siarkowe związki aromatyczne czosnku reagują ze śladowymi pierwiastkami i powstającym kwasem, przez co ząbki mogą nieszkodliwie zmienić kolor na niebieski lub zielonkawy, zjawisko znane od dawna, ale dopiero teraz na nowo zauważane dzięki rosnącemu zainteresowaniu fermentami. Ważne jest odróżnienie od tradycyjnego [chrzanu tartego](/pl/rezepte/chrzan), białego i ostrego korzenia zakwaszanego octem i śmietaną, który jest stałym elementem wielkanocnej święconki, czosnek kiszony ma zupełnie inny cel, czyli łagodniejsze, lepiej strawne ząbki z żywymi bakteriami kwasu mlekowego na cały rok.",
    shopDe:
      "Kaufe festen, unbeschädigten Knoblauch, am besten frisch geerntete polnische Sorten, die es oft im [Polenladen](/de/blog/polenladen-einkaufen) gibt. Dazu nur unjodiertes Salz und optional eine Dilldolde für mehr Aroma. Kleine Gläser mit weitem Hals machen das dichte Schichten der Zehen leichter.",
    shopPl:
      "Kup twardy, nieuszkodzony czosnek, najlepiej świeżo zebrane polskie odmiany, które często znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Do tego tylko sól niejodowana i opcjonalnie gałązka kopru dla aromatu. Małe słoiki z szerokim wlotem ułatwiają ciasne układanie ząbków.",
    techniqueDe:
      "Die 3 Prozent Salz in der Lake bremsen unerwünschte Keime zuverlässig, ohne die Milchsäurebakterien zu stören, die dem Knoblauch seine mildere, rundere Note geben. Wichtig ist, beschädigte Zehen vorher auszusortieren, denn kleine Verletzungen sind die häufigste Eintrittsstelle für echten Schimmel. Die blaue oder grüne Verfärbung während der Gärung ist eine rein chemische Reaktion und kein Warnsignal, gefährlich wird es erst bei sichtbarem Flaum oder unangenehmem Fäulnisgeruch. Nach 7 bis 14 Tagen bei 18 bis 22 Grad bremst der Kühlschrank die Gärung weitgehend, danach reift der Knoblauch dort noch mehrere Wochen mild nach.",
    techniquePl:
      "Trzy procent soli w zalewie skutecznie hamują niepożądane drobnoustroje, nie przeszkadzając bakteriom kwasu mlekowego, które nadają czosnkowi łagodniejszy, bardziej okrągły smak. Ważne jest wcześniejsze odrzucenie uszkodzonych ząbków, bo drobne skaleczenia to najczęstsze miejsce, przez które wnika prawdziwa pleśń. Niebieskie lub zielonkawe zabarwienie podczas fermentacji to czysto chemiczna reakcja, a nie sygnał ostrzegawczy, niebezpiecznie robi się dopiero przy widocznym meszku albo nieprzyjemnym zapachu gnilnym. Po 7 do 14 dniach w 18 do 22 stopniach lodówka w dużej mierze hamuje fermentację, a czosnek jeszcze przez kilka tygodni łagodnie w niej dojrzewa.",
    serveDe:
      "Serviere die milden Zehen zu Brot, vom Grill oder zu deftiger Wurst, wo sie eine sanftere Knoblauchnote setzen als frische Zehen. Im Vorratsregal passen die [Ogórki kiszone](/de/rezepte/ogorki-kiszone) gut dazu, für den scharfen weißen Dip bleibt der [Chrzan tarty](/de/rezepte/chrzan) zuständig.",
    servePl:
      "Podawaj łagodne ząbki do chleba, prosto z grilla albo do wyrazistej kiełbasy, gdzie dają subtelniejszą nutę czosnkową niż surowe ząbki. W spiżarni dobrze pasują obok [ogórki kiszone](/pl/rezepte/ogorki-kiszone), za ostry biały dip nadal odpowiada [chrzan tarty](/pl/rezepte/chrzan).",
    diasporaDe:
      "In Deutschland ist Czosnek kiszony ein einfacher Einstieg ins Fermentieren, weil ein einziges kleines Glas genügt und guter Knoblauch leicht im [Polenladen](/de/blog/polenladen-einkaufen) zu finden ist. Kinder dürfen beim Schälen und Schichten zusehen und mitmachen, das Ansetzen der Lake bleibt bei den Erwachsenen. Für alle, die neu ins Fermentieren einsteigen, ist der [Kiszenie-Guide](/de/blog/kiszenie-guide) ein guter erster Anlaufpunkt.",
    diasporaPl:
      "W Niemczech czosnek kiszony to prosty początek przygody z fermentacją, bo wystarczy jeden mały słoik, a dobry czosnek łatwo znaleźć w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Dzieci mogą patrzeć i pomagać przy obieraniu i układaniu, przygotowanie zalewy zostaje przy dorosłych. Dla osób zaczynających przygodę z kiszeniem dobrym punktem startu jest [poradnik o kiszeniu](/pl/blog/kiszenie-w-domu).",
    mistakesDe:
      "Beschädigte Zehen mit einzukisen erhöht das Schimmelrisiko deutlich, sie gehören konsequent aussortiert. Die harmlose blaugrüne Verfärbung für verdorben zu halten führt dazu, gutes Ferment unnötig wegzuwerfen. Jodsalz stört die Gärung und sollte grundsätzlich vermieden werden. Und wer Czosnek kiszony mit dem weißen, scharfen [Chrzan tarty](/de/rezepte/chrzan) verwechselt, erwartet den falschen Geschmack auf dem Brot.",
    mistakesPl:
      "Kiszenie uszkodzonych ząbków wyraźnie zwiększa ryzyko pleśni, dlatego trzeba je konsekwentnie odrzucać. Uznanie nieszkodliwego niebiesko-zielonego zabarwienia za zepsucie prowadzi do niepotrzebnego wyrzucania dobrej kiszonki. Sól jodowana zaburza fermentację i lepiej jej całkowicie unikać. A kto myli czosnek kiszony z białym, ostrym [chrzanem tartym](/pl/rezepte/chrzan), spodziewa się złego smaku na kanapce.",
    variantsDe:
      "Mit einer zusätzlichen Dilldolde wird die Lake aromatischer, mit einem Lorbeerblatt runder, wer es würziger mag, gibt ein paar Pfefferkörner dazu. Ganze Knoblauchknollen statt einzelner Zehen kisen sich milder und lassen sich später leichter ausdrücken. Nachbarn im Regal bleiben die [Ogórki kiszone](/de/rezepte/ogorki-kiszone), wer stattdessen Essigzwiebeln sucht, findet sie bei [Cebulka marynowana](/de/rezepte/cebulka-marynowana).",
    variantsPl:
      "Z dodatkową gałązką kopru zalewa robi się bardziej aromatyczna, z liściem laurowym łagodniejsza, kto lubi ostrzej, dorzuca kilka ziaren pieprzu. Całe główki czosnku zamiast pojedynczych ząbków kiszą się łagodniej i później łatwiej się je wyciska. Sąsiadem w regale zostają [ogórki kiszone](/pl/rezepte/ogorki-kiszone), a kto szuka cebuli w occie, znajdzie ją w [cebulce marynowanej](/pl/rezepte/cebulka-marynowana).",
  },

  "recipe-grzyby-marynowane": {
    dishDe: "Grzyby marynowane",
    dishPl: "Grzyby marynowane",
    vibeDe: "Champignons im würzigen Essigsud, der kalte Vorspeisenklassiker für Wigilia und Silvester",
    vibePl: "pieczarki w wyrazistej zalewie octowej, klasyczna zimna przystawka na Wigilię i Sylwestra",
    originDe:
      "Pilze sammeln und haltbar machen hat in Polen eine sehr lange Tradition, schon Adam Mickiewicz beschreibt in Pan Tadeusz ausführlich das herbstliche Grzybobranie, das gemeinsame Pilzesammeln im Wald, und die Kulinarik-Autorin Lucyna Ćwierczakiewiczowa veröffentlichte bereits im 19. Jahrhundert zahlreiche Rezepte für Pilzkonserven. Grzyby marynowane, in Essig eingelegte Pilze, gehören traditionell zu Wigilia und zur Fastenzeit, weil an diesen fleischlosen Tagen Pilze eine der wenigen kräftig-herzhaften Zutaten waren, entlang des Bug bei Siemiatycze und in den Wäldern der Puszcza Białowieska ist das sommerliche Pilzesammeln und Einwecken bis heute lebendig. Eine regionale Sonderform aus Westpommern, Grzyby marynowane z szyszką, wird sogar mit einem noch grünen Kiefernzapfen und etwas Honig mariniert, ein Rezept, das seit den 1950er Jahren von Generation zu Generation weitergegeben wird. Anders als bei den Kiszonki entsteht die Haltbarkeit hier nicht durch Milchsäuregärung, sondern ausschließlich durch den zugesetzten Essig, deshalb dürfen ausschließlich sichere Pilze aus dem Handel verwendet werden, nie selbst gesammelte Pilze ohne fachkundige Bestimmung. Wichtig ist auch die Abgrenzung zur warmen [Zupa grzybowa](/de/rezepte/zupa-grzybowa), die aus ähnlichen Zutaten ein völlig anderes, gekochtes Gericht macht.",
    originPl:
      "Zbieranie i przetwarzanie grzybów ma w Polsce bardzo długą tradycję, już Adam Mickiewicz w Panu Tadeuszu barwnie opisuje jesienne grzybobranie, a Lucyna Ćwierczakiewiczowa publikowała już w XIX wieku liczne przepisy na przetwory grzybowe. Grzyby marynowane, czyli grzyby w occie, tradycyjnie towarzyszą Wigilii i Wielkiemu Postowi, bo w te bezmięsne dni grzyby były jednym z niewielu wyrazistych i sytych składników, nad Bugiem koło Siemiatycz i w lasach Puszczy Białowieskiej letnie grzybobranie i wekowanie żyje do dziś. Regionalna odmiana z Pomorza Zachodniego, grzyby marynowane z szyszką, marynuje się nawet z jeszcze zieloną szyszką sosnową i odrobiną miodu, przepis przekazywany z pokolenia na pokolenie od lat pięćdziesiątych. W przeciwieństwie do kiszonek trwałość nie bierze się tu z fermentacji mlekowej, lecz wyłącznie z dodanego octu, dlatego wolno używać tylko pewnych grzybów ze sklepu, nigdy samodzielnie zebranych bez fachowej weryfikacji. Ważne jest też odróżnienie od ciepłej [zupy grzybowej](/pl/rezepte/zupa-grzybowa), która z podobnych składników robi zupełnie inne, gotowane danie.",
    shopDe:
      "Kaufe ausschließlich Speisepilze aus dem Handel, Champignons oder fertig geputzte Mischpilze, dazu Essig mit 5 Prozent Säure, Zucker, Salz, Piment, Pfeffer, Lorbeer und eine Zwiebel. Fehlt eine Zutat, hilft der Überblick zu [Ersatzprodukten](/de/blog/ersatzprodukte-de).",
    shopPl:
      "Kupuj wyłącznie grzyby ze sklepu, pieczarki albo gotowe mieszanki, do tego ocet 5 procent, cukier, sól, ziele angielskie, pieprz, liść laurowy i cebulę. Gdy czegoś brakuje, pomogą [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
    techniqueDe:
      "Fünf Prozent Essig sind hier kein Zufall, diese Säurestärke senkt den pH-Wert zuverlässig so weit, dass Fäulniskeime keine Chance haben, ein milderer Essig würde die Haltbarkeit spürbar verkürzen. Die Pilze werden zuerst in Salzwasser vorgegart, damit sie später im Essigsud nicht zäh werden, danach müssen sie vollständig vom heißen Sud bedeckt sein, damit auch der letzte Winkel im Glas sauer genug bleibt. Weil dieses Rezept ohne echte Einweck-Sterilisation auskommt, gehört das fertige Glas zwingend in den Kühlschrank, dort entfaltet es über mindestens drei Tage sein volles Aroma, bevor es aufgegessen wird.",
    techniquePl:
      "Pięć procent octu to nie przypadek, taka kwasowość skutecznie obniża pH na tyle, że bakterie gnilne nie mają szans, słabszy ocet wyraźnie skróciłby trwałość. Grzyby najpierw gotuje się w osolonej wodzie, żeby później w zalewie octowej nie zrobiły się gumowate, potem muszą być całkowicie zalane gorącym sosem, żeby nawet najdalszy kącik słoika pozostał wystarczająco kwaśny. Ponieważ ten przepis obywa się bez prawdziwej sterylizacji słoików, gotowy słoik musi trafić do lodówki, gdzie przez co najmniej trzy dni nabiera pełni smaku, zanim zostanie zjedzony.",
    serveDe:
      "Serviere die Pilze kalt zu Brot oder als eigenständige Vorspeise, besonders gern zur Wigilia oder zu Silvester. Im Regal daneben passt gut die [Papryka konserwowa](/de/rezepte/papryka-konserwowa).",
    servePl:
      "Podawaj grzyby na zimno do chleba albo jako samodzielną przystawkę, szczególnie chętnie na Wigilię i Sylwestra. Obok dobrze komponuje się [papryka konserwowa](/pl/rezepte/papryka-konserwowa).",
    diasporaDe:
      "In Deutschland lassen sich die Gläser gut auf Vorrat für Wigilia oder Silvester vorbereiten, weil sie im Kühlschrank problemlos mehrere Wochen durchhalten. Kinder dürfen beim Einfüllen der Zwiebelringe helfen, der heiße Essigsud bleibt bei den Erwachsenen. Frische Champignons gibt es ganzjährig, saisonale Mischpilze manchmal günstiger im [Polenladen](/de/blog/polenladen-einkaufen).",
    diasporaPl:
      "W Niemczech słoiki dobrze przygotować z zapasem na Wigilię albo Sylwestra, bo w lodówce spokojnie wytrzymują kilka tygodni. Dzieci mogą pomagać przy układaniu krążków cebuli, gorąca zalewa zostaje przy dorosłych. Świeże pieczarki są dostępne cały rok, sezonowe mieszanki czasem taniej znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    mistakesDe:
      "Selbst gesammelte Wildpilze ohne sichere Bestimmung zu verwenden ist ein echtes Sicherheitsrisiko und gehört hier nicht hin. Milderer Essig statt der vollen 5 Prozent verkürzt die Haltbarkeit erheblich. Die Gläser zu früh zu öffnen bringt nur einen Bruchteil des Aromas, mindestens drei Tage im Kühlschrank sollten es sein. Und wer Grzyby marynowane mit der warmen [Zupa grzybowa](/de/rezepte/zupa-grzybowa) verwechselt, erwartet ein ganz anderes Gericht.",
    mistakesPl:
      "Używanie samodzielnie zebranych grzybów bez pewnej identyfikacji to realne zagrożenie i tutaj nie ma na to miejsca. Słabszy ocet zamiast pełnych 5 procent wyraźnie skraca trwałość. Zbyt wczesne otwarcie słoika daje tylko ułamek smaku, potrzeba minimum trzech dni w lodówce. A kto myli grzyby marynowane z ciepłą [zupą grzybową](/pl/rezepte/zupa-grzybowa), spodziewa się zupełnie innego dania.",
    variantsDe:
      "Mit etwas mehr Zucker wird der Sud milder, mit zusätzlichem Chili schärfer, die westpommersche Spezialversion nimmt sogar einen grünen Kiefernzapfen und Honig für einen ganz eigenen Ton. Wer die warme Variante sucht, findet sie bei der [Zupa grzybowa](/de/rezepte/zupa-grzybowa), im Essigregal passt die [Papryka konserwowa](/de/rezepte/papryka-konserwowa) gut dazu.",
    variantsPl:
      "Z odrobiną więcej cukru zalewa robi się łagodniejsza, z dodatkowym chili ostrzejsza, zachodniopomorska specjalność dodaje nawet zieloną szyszkę sosnową i miód dla zupełnie innego charakteru. Kto szuka ciepłej wersji, znajdzie ją w [zupie grzybowej](/pl/rezepte/zupa-grzybowa), w regale octowym dobrze pasuje obok [papryka konserwowa](/pl/rezepte/papryka-konserwowa).",
  },

  "recipe-papryka-konserwowa": {
    dishDe: "Papryka konserwowa",
    dishPl: "Papryka konserwowa",
    vibeDe: "süß-saure Paprikastreifen im klaren Essigsud, das haltbare Glas vom Sonntagstisch",
    vibePl: "słodko-kwaśne paski papryki w klarownej zalewie octowej, trwały słoik na niedzielny stół",
    originDe:
      "Anders als Ogórki oder Kapusta ist die Paprika in Polen eine vergleichsweise junge Zutat, richtig verbreitet wurde sie erst im 20. Jahrhundert, und Papryka konserwowa gehört zu jener Welle von Weckglas-Vorräten, die ab den 1960er Jahren mit industriell hergestelltem Speiseessig und erschwinglichen Twist-off-Gläsern in praktisch jeden polnischen Haushalt Einzug hielt. Der Sud aus fünfprozentigem Essig, Zucker und Gewürzen macht die Paprikastreifen monatelang haltbar und lieferte im Winter eine willkommene Portion Frische, wenn frisches Gemüse knapp war. Wichtig ist die Abgrenzung zum Leczo, dessen Name vom ungarischen lecsó stammt, einem gekochten Gemüseeintopf aus Paprika, Tomaten und Zwiebel, der warm gegessen wird, während Papryka konserwowa als rohe, essiggesäuerte Beilage kalt aus dem Glas kommt. Beide Gerichte teilen sich zwar die Hauptzutat Paprika, funktionieren aber technisch und kulinarisch völlig unterschiedlich, genauso wie sich Essigkonserven grundsätzlich von den milchsauer vergorenen [Ogórki kiszone](/de/rezepte/ogorki-kiszone) unterscheiden.",
    originPl:
      "W przeciwieństwie do ogórków czy kapusty papryka jest w Polsce stosunkowo młodym składnikiem, na dobre rozpowszechniła się dopiero w XX wieku, a papryka konserwowa należy do tej fali słoikowych zapasów, która od lat sześćdziesiątych XX wieku, wraz z przemysłowym octem spirytusowym i przystępnymi cenowo słoikami typu twist off, weszła praktycznie do każdego polskiego domu. Zalewa z pięcioprocentowego octu, cukru i przypraw utrzymuje paski papryki świeże przez wiele miesięcy i zimą dawała cenną porcję świeżości, gdy brakowało świeżych warzyw. Ważne jest odróżnienie od leczo, którego nazwa pochodzi od węgierskiego lecsó, gotowanego gulaszu warzywnego z papryki, pomidorów i cebuli, jedzonego na ciepło, podczas gdy papryka konserwowa to surowa, zakwaszona octem przekąska podawana na zimno prosto ze słoika. Oba dania łączy główny składnik, ale różnią się techniką i charakterem, podobnie jak przetwory octowe różnią się zasadniczo od mlekowo kiszonych [ogórków kiszonych](/pl/rezepte/ogorki-kiszone).",
    shopDe:
      "Kaufe feste, unbeschädigte rote und gelbe Paprika, sie halten im Sud die Form besser als weiche Früchte. Dazu 5-prozentigen Tafelessig, Zucker, Salz, Piment und Lorbeer, alles im gut sortierten Supermarkt oder im [Polenladen](/de/blog/polenladen-einkaufen) erhältlich.",
    shopPl:
      "Kup twarde, nieuszkodzone papryki czerwone i żółte, w zalewie trzymają kształt lepiej niż miękkie owoce. Do tego ocet spirytusowy 5 procent, cukier, sól, ziele angielskie i liść laurowy, wszystko dostaniesz w dobrze zaopatrzonym markecie albo w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    techniqueDe:
      "Der Essig mit 5 Prozent Säure senkt den pH-Wert im Glas so weit, dass Fäulnisbakterien keine Chance haben, deshalb sollte niemals mit einem milderen Essig experimentiert werden. Kurzes Blanchieren macht die Streifen weicher und aromatischer, wer lieber Biss möchte, lässt diesen Schritt bewusst weg. Entscheidend ist, dass der kochende Sud die Paprika im Glas vollständig bedeckt, sonst bleibt eine Ecke ungeschützt und kann schneller verderben. Ohne echte Sterilisation gehört das fertige Glas zwingend in den Kühlschrank und sollte mindestens drei Tage durchziehen, bevor es serviert wird.",
    techniquePl:
      "Ocet o mocy 5 procent obniża pH w słoiku na tyle, że bakterie gnilne nie mają szans, dlatego nigdy nie warto eksperymentować ze słabszym octem. Krótkie blanszowanie zmiękcza paski i wzmacnia aromat, kto woli chrupkość, świadomie ten krok pomija. Kluczowe jest, żeby gorąca zalewa całkowicie przykryła paprykę w słoiku, inaczej niezabezpieczony kawałek może szybciej się popsuć. Bez prawdziwej sterylizacji gotowy słoik musi trafić do lodówki i poczekać co najmniej trzy dni, zanim zostanie podany.",
    serveDe:
      "Serviere die Paprikastreifen kalt zu Fleisch, Brot oder direkt vom Grill, ein Glas reicht meist für eine ganze Tischrunde. Im Essigregal steht daneben sinnvoll die [Cebulka marynowana](/de/rezepte/cebulka-marynowana).",
    servePl:
      "Podawaj paski na zimno do mięsa, chleba albo prosto z grilla, jeden słoik zwykle starcza na całe spotkanie przy stole. W regale octowym sensownie stoi obok [cebulka marynowana](/pl/rezepte/cebulka-marynowana).",
    diasporaDe:
      "In Deutschland lohnt sich ein größerer Ansatz im Spätsommer, wenn Paprika günstig und reif zu haben ist, denn gekühlt hält sich das Glas mehrere Wochen. Kinder dürfen beim Schneiden der Streifen mit einem stumpfen Messer helfen, der kochende Essigsud bleibt bei den Erwachsenen. Fehlende Zutaten klärt der Überblick zu [Ersatzprodukten](/de/blog/ersatzprodukte-de).",
    diasporaPl:
      "W Niemczech warto przygotować większą partię późnym latem, gdy papryka jest tania i dojrzała, bo schłodzony słoik trzyma się kilka tygodni. Dzieci mogą pomagać przy krojeniu pasków tępym nożem, gorąca zalewa octowa zostaje przy dorosłych. Brakujące składniki podpowiadają [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
    mistakesDe:
      "Milderer Essig statt der vollen 5 Prozent verkürzt die Haltbarkeit spürbar. Paprika, die nicht vollständig im Sud liegt, kann an der ungeschützten Stelle schneller verderben. Zu frühes Anschneiden des Glases bringt nur einen Bruchteil des Aromas. Und wer Papryka konserwowa mit dem warmen [Leczo](/de/rezepte/leczo) verwechselt, erwartet ein ganz anderes Gericht auf dem Teller.",
    mistakesPl:
      "Słabszy ocet zamiast pełnych 5 procent wyraźnie skraca trwałość. Papryka, która nie leży całkowicie w zalewie, w niezabezpieczonym miejscu psuje się szybciej. Zbyt wczesne otwarcie słoika daje tylko ułamek smaku. A kto myli paprykę konserwową z ciepłym [leczo](/pl/rezepte/leczo), spodziewa się zupełnie innego dania na talerzu.",
    variantsDe:
      "Mit mehr Zucker wird der Sud milder, mit Chiliflocken schärfer, mit zusätzlichen Zwiebelringen würziger. Wer das warme Pendant sucht, findet es beim [Leczo](/de/rezepte/leczo), im Essigregal passen außerdem die [Cebulka marynowana](/de/rezepte/cebulka-marynowana) und der [Kalafior w occie](/de/rezepte/kalafior-w-occie) gut dazu.",
    variantsPl:
      "Z większą ilością cukru zalewa robi się łagodniejsza, z płatkami chili ostrzejsza, z dodatkowymi krążkami cebuli bardziej pikantna. Kto szuka ciepłego odpowiednika, znajdzie go w [leczo](/pl/rezepte/leczo), w regale octowym dobrze pasują też [cebulka marynowana](/pl/rezepte/cebulka-marynowana) i [kalafior w occie](/pl/rezepte/kalafior-w-occie).",
  },

  "recipe-sliwki-w-occie": {
    dishDe: "Śliwki w occie",
    dishPl: "Śliwki w occie",
    vibeDe: "feste Węgierka-Pflaumen in warmem Gewürzsud, die süß-saure Beilage zum Festtagsbraten",
    vibePl: "jędrne węgierki w korzennej zalewie, słodko-kwaśny dodatek do świątecznego pieczystego",
    originDe:
      "Śliwki w occie sind vor allem als Spezialität aus dem Powiśle bekannt, der Region um Kwidzyn im Norden Polens, wo nach 1946 wieder große Obstplantagen mit Węgierka-Pflaumen angelegt wurden. Die Rezeptur wird bis heute vor allem von den örtlichen Landfrauenvereinen, den Koła Gospodyń Wiejskich, weitergegeben, historisch beteiligte sich die ganze Familie an der Zubereitung, die Kinder pflückten die Früchte, die Mutter kochte den Sud aus Essig, Zucker, Zimt, Nelken und Vanillezucker, der Vater übernahm das mehrfache Abgießen und erneute Aufgießen des heißen Essigs. Aus demselben Powiśle entstand außerdem ein eigener Pflaumenessig, der viermal aufgekocht und traditionell im Barszcz und in der Czernina statt gewöhnlichem Essig verwendet wurde, ebenso zum Einlegen von Hering. Wichtig für formstabile Śliwki w occie sind reife, aber noch feste Węgierka-Pflaumen, überreife Früchte platzen im heißen Sud auf und trüben das Glas. Anders als die in Teig gehüllten [Knedle ze śliwkami](/de/rezepte/knedle-sliwki) oder ein zu Mus verkochtes Pflaumenkompott bleibt die Frucht hier ganz und wird als pikant-süße Beilage serviert, nicht zerkocht und nicht in Teig gehüllt.",
    originPl:
      "Śliwki w occie znane są przede wszystkim jako specjalność z Powiśla, regionu wokół Kwidzyna na północy Polski, gdzie po 1946 roku na nowo obsadzono duże sady śliwką węgierką. Receptura do dziś jest przekazywana głównie przez lokalne Koła Gospodyń Wiejskich, a historycznie w przygotowaniach uczestniczyła cała rodzina, dzieci zbierały owoce, matka warzyła zalewę z octu, cukru, cynamonu, goździków i cukru wanilinowego, ojciec zajmował się wielokrotnym odlewaniem i ponownym zalewaniem gorącego octu. Z tego samego Powiśla powstał też osobny ocet śliwkowy, czterokrotnie przegotowywany i tradycyjnie używany do barszczu i do czerniny zamiast zwykłego octu, a także do marynowania śledzi. Dla trwałych, niepękających śliwek w occie ważne są dojrzałe, ale wciąż jędrne węgierki, przejrzałe owoce pękają w gorącej zalewie i mętnieją słoik. W przeciwieństwie do zawijanych w ciasto [knedli ze śliwkami](/pl/rezepte/knedle-sliwki) albo rozgotowanego na przecier kompotu owoc zostaje tu cały i podaje się go jako pikantno-słodki dodatek, a nie rozgotowany czy zawinięty w ciasto.",
    shopDe:
      "Kaufe reife, aber feste Węgierka-Pflaumen, sie halten im Sud die Form am besten, weiche Sorten platzen leicht auf. Dazu 5-prozentigen Essig, Zucker, eine Zimtstange und Nelken, alles im gut sortierten Supermarkt oder im [Polenladen](/de/blog/polenladen-einkaufen) erhältlich.",
    shopPl:
      "Kup dojrzałe, ale wciąż jędrne węgierki, w zalewie trzymają kształt najlepiej, miękkie odmiany łatwo pękają. Do tego ocet 5 procent, cukier, laskę cynamonu i goździki, wszystko dostaniesz w markecie albo w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    techniqueDe:
      "Der Essig mit 5 Prozent Säure sorgt zuverlässig für Haltbarkeit, ein schwächerer Essig würde das Glas deutlich schneller verderben lassen. Die Pflaumen bleiben ganz mit Stein, das hält sie beim Ziehen im heißen Sud stabiler als entsteinte Hälften, die schneller zerfallen. Der Gewürzsud mit Zimt und Nelken darf nur kurz aufkochen, zu langes Köcheln macht die Schale rissig und lässt zu viel Fruchtfleisch austreten. Mindestens eine Woche im Kühlschrank braucht es, damit die Gewürze wirklich bis zum Kern durchziehen, vorher schmecken die Pflaumen nur an der Oberfläche gewürzt.",
    techniquePl:
      "Ocet o mocy 5 procent gwarantuje trwałość, słabszy ocet sprawiłby, że słoik zepsuje się znacznie szybciej. Śliwki zostają całe z pestką, co utrzymuje je stabilniej w gorącej zalewie niż przekrojone na pół owoce, które łatwiej się rozpadają. Korzenna zalewa z cynamonem i goździkami powinna tylko krótko się zagotować, za długie gotowanie sprawia, że skórka pęka i wypływa za dużo miąższu. Potrzebny jest co najmniej tydzień w lodówce, żeby przyprawy naprawdę przeniknęły do środka, wcześniej owoce są doprawione tylko na powierzchni.",
    serveDe:
      "Serviere die Pflaumen zu Braten, Käse oder kaltem Aufschnitt, ihre Süße und Säure schneiden gut durch fettige Gerichte. Im Regal daneben passt ein weiterer süß-saurer Nachbar, die [Buraki w occie](/de/rezepte/buraki-w-occie).",
    servePl:
      "Podawaj śliwki do pieczystego, serów albo wędlin na chłodno, ich słodycz i kwas dobrze przełamują tłuste dania. Obok w regale dobrze pasuje kolejny słodko-kwaśny sąsiad, [buraki w occie](/pl/rezepte/buraki-w-occie).",
    diasporaDe:
      "In Deutschland lohnt sich eine größere Charge im Spätsommer, wenn reife Pflaumen günstig zu haben sind, denn gekühlt hält sich das Glas viele Wochen und liefert im Winter eine willkommene Beilage. Kinder dürfen beim Waschen und Einschichten der Früchte helfen, das Kochen des heißen Sudes bleibt bei den Erwachsenen. Zimtstangen und Nelken gibt es günstig im [Polenladen](/de/blog/polenladen-einkaufen).",
    diasporaPl:
      "W Niemczech warto ukisić większą partię późnym latem, gdy dojrzałe śliwki są tanie, bo schłodzony słoik trzyma się wiele tygodni i zimą stanowi mile widziany dodatek. Dzieci mogą pomagać przy myciu i układaniu owoców w słoiku, gotowanie gorącej zalewy zostaje przy dorosłych. Laski cynamonu i goździki tanio kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    mistakesDe:
      "Überreife, weiche Pflaumen platzen im heißen Sud auf und machen das Glas trüb, hier zählt wirklich feste Ware. Zu langes Kochen des Gewürzsuds lässt die Schale reißen und zu viel Fruchtfleisch austreten. Wer das Glas schon nach ein oder zwei Tagen öffnet, bekommt nur einen Bruchteil des Aromas, mindestens eine Woche sollte es im Kühlschrank ziehen. Und Śliwki w occie mit den gefüllten [Knedle ze śliwkami](/de/rezepte/knedle-sliwki) zu verwechseln führt zu falschen Erwartungen an Textur und Süße.",
    mistakesPl:
      "Przejrzałe, miękkie śliwki pękają w gorącej zalewie i mętnieją słoik, tu naprawdę liczy się jędrność. Za długie gotowanie korzennej zalewy sprawia, że skórka pęka i wypływa za dużo miąższu. Kto otworzy słoik już po dniu lub dwóch, poczuje tylko ułamek smaku, potrzeba minimum tygodnia w lodówce. A kto myli śliwki w occie z nadziewanymi [knedlami ze śliwkami](/pl/rezepte/knedle-sliwki), oczekuje złej tekstury i złej słodyczy.",
    variantsDe:
      "Mit etwas Vanillezucker im Sud wird der Geschmack runder, mit mehr Nelken würziger, wer es schärfer mag, gibt ein Stück Ingwer dazu. Aus demselben Powiśle stammt außerdem ein eigener, viermal aufgekochter Pflaumenessig für Barszcz und zum Einlegen von Hering. Im Regal daneben passt die [Buraki w occie](/de/rezepte/buraki-w-occie) gut dazu.",
    variantsPl:
      "Z odrobiną cukru wanilinowego w zalewie smak robi się bardziej okrągły, z większą ilością goździków bardziej korzenny, kto lubi ostrzej, dodaje kawałek imbiru. Z tego samego Powiśla pochodzi też osobny, czterokrotnie przegotowywany ocet śliwkowy do barszczu i do marynowania śledzi. Obok w regale dobrze pasują [buraki w occie](/pl/rezepte/buraki-w-occie).",
  },

  "recipe-cebulka-marynowana": {
    dishDe: "Cebulka marynowana",
    dishPl: "Cebulka marynowana",
    vibeDe: "in Essig gezogene Silber- oder Rotzwiebeln, die klassische Beigabe zu Hering und zur Sylwester-Tafel",
    vibePl: "cebulka perłowa albo czerwona w occie, klasyczny dodatek do śledzia i na sylwestrowy stół",
    originDe:
      "Marinierte Zwiebeln zum Hering gehören in Polen zu den ältesten belegten Konservenrezepten überhaupt, schon die vermögende Kochbuchautorin Lucyna Ćwierczakiewiczowa beschrieb im 19. Jahrhundert Rezepte für in Essig eingelegten Hering mit Zwiebelscheiben, die bis heute kaum verändert weitergegeben werden. Traditionell wird die Zwiebel vor dem eigentlichen Essigsud kurz in Wasser mit etwas Zucker vorgekocht, das nimmt ihr die aggressive Schärfe und macht sie milder, gerade rechtzeitig für die reichlich gedeckte Sylwester-Tafel, an der Hering und seine Beilagen traditionell nicht fehlen dürfen. Silberzwiebeln liefern durch ihre runde, kompakte Form gleichmäßig durchgezogene Bissen, während rote Zwiebelringe vor allem wegen ihrer Farbe und der etwas milderen Süße beliebt sind. Wichtig ist die Abgrenzung zum [Czosnek kiszony](/de/rezepte/czosnek-kiszony), der auf demselben Gewürzregal steht, aber durch Milchsäuregärung statt Essig entsteht, eine völlig andere Technik mit einem völlig anderen Geschmacksprofil.",
    originPl:
      "Marynowana cebulka do śledzia to jeden z najlepiej dokumentowanych polskich przepisów na przetwory, już zamożna autorka kucharskich poradników Lucyna Ćwierczakiewiczowa opisywała w XIX wieku przepisy na śledzie w occie z plastrami cebuli, które do dziś przekazuje się właściwie bez zmian. Tradycyjnie cebulę przed właściwą zalewą octową krótko obgotowuje się w wodzie z odrobiną cukru, co zabiera jej agresywną ostrość i robi ją łagodniejszą, w samą porę na obficie zastawiony stół sylwestrowy, na którym śledź i jego dodatki tradycyjnie nie mogą zabraknąć. Cebulka perłowa dzięki okrągłej, kompaktowej formie daje równo przemarynowane kęsy, a czerwone krążki są popularne przede wszystkim ze względu na kolor i odrobinę łagodniejszą słodycz. Ważne jest odróżnienie od [czosnku kiszonego](/pl/rezepte/czosnek-kiszony), który stoi na tej samej półce z przyprawami, ale powstaje przez fermentację mlekową, a nie ocet, czyli zupełnie inną technikę z zupełnie innym profilem smakowym.",
    shopDe:
      "Kaufe feste Silberzwiebeln oder knackige rote Zwiebeln, dazu 5-prozentigen Essig, Zucker, Salz, Pfeffer, Lorbeer und Piment. Guten Essig und frische Zwiebeln gibt es günstig im [Polenladen](/de/blog/polenladen-einkaufen).",
    shopPl:
      "Kup twardą cebulkę perłową albo chrupiącą czerwoną cebulę, do tego ocet 5 procent, cukier, sól, pieprz, liść laurowy i ziele angielskie. Dobry ocet i świeżą cebulę tanio kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    techniqueDe:
      "Das kurze Blanchieren der Zwiebel vor dem eigentlichen Essigsud nimmt ihr die schärfsten Aromastoffe und macht sie milder und leichter verdaulich, ganz ohne dieses Vorkochen bliebe der Biss unangenehm scharf. Fünf Prozent Essig sind auch hier die Grenze, unter der die Haltbarkeit nicht mehr zuverlässig gesichert ist. Die Zwiebeln müssen vollständig von der heißen Lake bedeckt sein, sonst bleibt eine Ecke ungeschützt und verdirbt schneller. Zwei Tage im Kühlschrank reichen für den ersten Genuss, spätestens nach drei bis vier Wochen sollte das Glas aufgebraucht sein, danach lässt die Qualität spürbar nach.",
    techniquePl:
      "Krótkie blanszowanie cebuli przed właściwą zalewą octową zabiera jej najostrzejsze związki aromatyczne i robi ją łagodniejszą oraz lżej strawną, bez tego wstępnego gotowania smak zostałby nieprzyjemnie ostry. Pięć procent octu to również tutaj granica, pod którą trwałość nie jest już pewna. Cebula musi być całkowicie zalana gorącą zalewą, inaczej niezabezpieczony kawałek szybciej się psuje. Dwa dni w lodówce wystarczą na pierwszą degustację, najpóźniej po trzech do czterech tygodniach słoik powinien być zjedzony, potem jakość wyraźnie spada.",
    serveDe:
      "Serviere die Zwiebeln zu Hering, Aufschnitt oder direkt vom Grill, ein kleines Glas reicht für eine ganze Sylwester-Tafel. Im Regal daneben passt gut die [Papryka konserwowa](/de/rezepte/papryka-konserwowa).",
    servePl:
      "Podawaj cebulkę do śledzia, wędlin albo prosto z grilla, jeden mały słoik zwykle wystarcza na całą sylwestrową tacę. Obok dobrze komponuje się [papryka konserwowa](/pl/rezepte/papryka-konserwowa).",
    diasporaDe:
      "In Deutschland ist Cebulka marynowana ein schneller Sylwester-Helfer, weil sie in zwei Tagen fertig ist und den Hering-Teller ohne großen Aufwand ergänzt. Kinder dürfen beim Schälen der Silberzwiebeln helfen, der heiße Essigsud bleibt bei den Erwachsenen. Guten Hering und passenden Essig gibt es im [Polenladen](/de/blog/polenladen-einkaufen).",
    diasporaPl:
      "W Niemczech cebulka marynowana to szybki sylwestrowy ratunek, bo jest gotowa w dwa dni i bez większego wysiłku uzupełnia talerz ze śledziem. Dzieci mogą pomagać przy obieraniu cebulki perłowej, gorąca zalewa octowa zostaje przy dorosłych. Dobrego śledzia i odpowiedni ocet znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    mistakesDe:
      "Die Zwiebel ohne Vorblanchieren direkt in den Essigsud zu geben lässt sie unangenehm scharf und roh schmecken. Milderer Essig statt der vollen 5 Prozent verkürzt die Haltbarkeit merklich. Das Glas länger als vier Wochen im Kühlschrank aufzuheben bringt spürbar nachlassende Qualität statt eines gefährlichen Verderbs, frisch schmeckt es trotzdem deutlich besser. Und wer Cebulka marynowana mit dem fermentierten [Czosnek kiszony](/de/rezepte/czosnek-kiszony) verwechselt, erwartet ein ganz anderes Geschmacksprofil.",
    mistakesPl:
      "Wrzucenie cebuli bez wcześniejszego blanszowania prosto do zalewy octowej daje nieprzyjemnie ostry, surowy smak. Słabszy ocet zamiast pełnych 5 procent wyraźnie skraca trwałość. Trzymanie słoika dłużej niż cztery tygodnie w lodówce nie jest niebezpieczne, ale smak zauważalnie się pogarsza, świeża cebulka smakuje po prostu lepiej. A kto myli cebulkę marynowaną z fermentowanym [czosnkiem kiszonym](/pl/rezepte/czosnek-kiszony), oczekuje zupełnie innego profilu smaku.",
    variantsDe:
      "Mit mehr Zucker wird die Zwiebel milder, mit zusätzlichen Pfefferkörnern schärfer, mit einem Lorbeerblatt runder im Aroma. Wer die fermentierte Linie sucht, findet sie beim [Czosnek kiszony](/de/rezepte/czosnek-kiszony), im Essigregal passt außerdem die [Papryka konserwowa](/de/rezepte/papryka-konserwowa) gut dazu.",
    variantsPl:
      "Z większą ilością cukru cebula robi się łagodniejsza, z dodatkowymi ziarnami pieprzu ostrzejsza, z liściem laurowym bardziej aromatyczna. Kto szuka linii fermentowanej, znajdzie ją w [czosnku kiszonym](/pl/rezepte/czosnek-kiszony), w regale octowym dobrze pasuje też [papryka konserwowa](/pl/rezepte/papryka-konserwowa).",
  },

  "recipe-kalafior-w-occie": {
    dishDe: "Kalafior w occie",
    dishPl: "Kalafior w occie",
    vibeDe: "blanchierte Röschen und Karotte in klarem Essigsud, knackige Pikles aus der Vorratskammer",
    vibePl: "blanszowane różyczki z marchewką w jasnej zalewie, chrupiące pikle ze spiżarni",
    originDe:
      "Kalafior w occie gehört zur großen Familie der Pikle, bunt gemischter Essiggemüse-Gläser, die in Polen vor allem in der Zeit der Volksrepublik populär wurden, als Hausgärten und eigene Vorräte über den Winter hinweg für Abwechslung auf dem eher kargen Speiseplan sorgten. Das kurze Blanchieren von nur 2 bis 3 Minuten ist entscheidend, länger gekocht würde der Blumenkohl im Essigsud vollständig weich statt angenehm knackig bleiben. Wichtig ist außerdem die klare Abgrenzung zur frisch geriebenen [Surówka](/de/rezepte/surowka), die roh und ohne Essig zubereitet wird, während hier ein echtes Essigglas mit deutlich längerer Haltbarkeit entsteht. In vielen Familien wanderten Karotte, Blumenkohl, Paprika und manchmal auch Kohl gemeinsam ins Glas, die Version mit nur Blumenkohl und Karotte ist eine schlichtere, alltägliche Variante dieser bunten Tradition.",
    originPl:
      "Kalafior w occie należy do dużej rodziny pikli, czyli kolorowych, mieszanych warzyw w occie, które w Polsce szczególnie spopularyzowały się w czasach Polskiej Rzeczypospolitej Ludowej, kiedy własne ogrody i domowe zapasy na zimę urozmaicały dość skromny jadłospis. Krótkie blanszowanie, tylko 2 do 3 minut, ma kluczowe znaczenie, dłużej gotowany kalafior zmiękłby w zalewie zupełnie, a nie zostałby przyjemnie chrupiący. Ważne jest też jasne odróżnienie od świeżo startej [surówki](/pl/rezepte/surowka), którą przygotowuje się na surowo i bez octu, podczas gdy tu powstaje prawdziwy słoik octowy o znacznie dłuższej trwałości. W wielu rodzinach do słoika trafiały razem marchewka, kalafior, papryka, a czasem też kapusta, wersja tylko z kalafiorem i marchewką jest prostszym, codziennym wariantem tej kolorowej tradycji.",
    shopDe:
      "Kaufe einen festen, weißen Blumenkohlkopf ohne braune Stellen, dazu Karotten, 5-prozentigen Essig, Senfkörner und Lorbeer. Alles gibt es günstig im gut sortierten Supermarkt oder im [Polenladen](/de/blog/polenladen-einkaufen).",
    shopPl:
      "Kup jędrną, białą główkę kalafiora bez brązowych plam, do tego marchewki, ocet 5 procent, gorczycę i liść laurowy. Wszystko dostaniesz w markecie albo w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    techniqueDe:
      "Nur 2 bis 3 Minuten Blanchieren reichen, um den Blumenkohl vorzugaren und ihn später im Sud gleichmäßig durchzusäuern, ohne dass er matschig wird, das kalte Abschrecken danach stoppt den Garprozess sofort. Fünf Prozent Essig sind auch bei Pikles die verlässliche Grenze für sichere Haltbarkeit, schwächerer Essig würde das Glas anfälliger machen. Das Gemüse muss vollständig unter dem heißen Sud liegen, sonst zieht ein Stück an der Oberfläche nicht gleichmäßig durch. Drei Tage im Kühlschrank reichen für den ersten Biss, danach wird der Geschmack mit jeder Woche runder.",
    techniquePl:
      "Zaledwie 2 do 3 minuty blanszowania wystarczą, by kalafior był wstępnie ugotowany i później równomiernie zakisł w zalewie, bez rozpadania się na papkę, a szybkie schłodzenie w zimnej wodzie natychmiast zatrzymuje gotowanie. Pięć procent octu to również przy piklach bezpieczna granica trwałości, słabszy ocet zrobiłby słoik bardziej podatnym na zepsucie. Warzywa muszą być całkowicie zalane gorącą zalewą, inaczej kawałek na powierzchni nie zakisi się równomiernie. Trzy dni w lodówce wystarczą na pierwszy kęs, a smak z każdym kolejnym tygodniem robi się coraz bardziej okrągły.",
    serveDe:
      "Serviere die Röschen zu kaltem Aufschnitt oder Sonntagsbraten, ihre Säure bringt Frische an einen schweren Teller. Im Regal daneben passt gut die [Grzyby marynowane](/de/rezepte/grzyby-marynowane).",
    servePl:
      "Podawaj różyczki do wędlin albo niedzielnego pieczystego, ich kwasowość dodaje świeżości ciężkiemu talerzowi. Obok dobrze komponują się [grzyby marynowane](/pl/rezepte/grzyby-marynowane).",
    diasporaDe:
      "In Deutschland ist Kalafior w occie ein dankbarer Vorrat für die kalte Jahreszeit, weil Blumenkohl das ganze Jahr verfügbar ist und das Glas gekühlt viele Wochen durchhält. Kinder dürfen beim Zerteilen der Röschen helfen, das Blanchieren und der heiße Sud bleiben bei den Erwachsenen. Senfkörner und Essig gibt es günstig im [Polenladen](/de/blog/polenladen-einkaufen).",
    diasporaPl:
      "W Niemczech kalafior w occie to wdzięczny zapas na chłodniejsze miesiące, bo kalafior jest dostępny cały rok, a schłodzony słoik trzyma się wiele tygodni. Dzieci mogą pomagać przy dzieleniu różyczek, blanszowanie i gorąca zalewa zostają przy dorosłych. Gorczycę i ocet tanio kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    mistakesDe:
      "Zu langes Blanchieren macht den Blumenkohl weich statt knackig, hier zählen wirklich nur 2 bis 3 Minuten. Ein zu schwacher Essig verkürzt die Haltbarkeit merklich, immer die vollen 5 Prozent verwenden. Gemüse, das nicht vollständig unter dem Sud liegt, zieht ungleichmäßig durch und verdirbt an dieser Stelle schneller. Und wer Kalafior w occie mit frischer [Surówka](/de/rezepte/surowka) verwechselt, erwartet die falsche Textur und den falschen Geschmack.",
    mistakesPl:
      "Za długie blanszowanie robi z kalafiora warzywo miękkie, a nie chrupiące, tu naprawdę liczą się tylko 2 do 3 minuty. Za słaby ocet wyraźnie skraca trwałość, zawsze używaj pełnych 5 procent. Warzywa, które nie są całkowicie zalane zalewą, kiszą się nierówno i w tym miejscu szybciej się psują. A kto myli kalafior w occie ze świeżą [surówką](/pl/rezepte/surowka), oczekuje złej tekstury i złego smaku.",
    variantsDe:
      "Mit Paprikastreifen und Kohl wird daraus die bunte große Pikle-Mischung, mit mehr Senfkörnern schärfer, mit einem Lorbeerblatt würziger im Sud. Im Regal daneben passt außerdem die [Papryka konserwowa](/de/rezepte/papryka-konserwowa) gut dazu.",
    variantsPl:
      "Z paskami papryki i kapustą powstaje z tego kolorowa, wielowarzywna mieszanka pikli, z większą ilością gorczycy ostrzejsza, z liściem laurowym bardziej korzenna zalewa. Obok w regale dobrze pasuje też [papryka konserwowa](/pl/rezepte/papryka-konserwowa).",
  },

  "recipe-buraki-w-occie": {
    dishDe: "Buraki w occie",
    dishPl: "Buraki w occie",
    vibeDe: "gekochte Rote-Bete-Spalten in süß-saurem Essigsud, der stille Nachbar der geriebenen Ćwikła",
    vibePl: "gotowane ćwiartki buraka w słodko-kwaśnej zalewie, spokojny sąsiad tartej ćwikły",
    originDe:
      "Die Rote Bete kam vermutlich im 14. Jahrhundert aus dem byzantinischen Raum nach Polen und stand bereits im 15. Jahrhundert am Hof von König Władysław Jagiełło auf dem Tisch. In der polnischen Volkskultur galt ihre rote Farbe seit jeher als Symbol für Liebe und Fruchtbarkeit, weshalb Rote-Bete-Salate traditionell zu Hochzeiten und Taufen gehörten, in manchen Regionen aß die Braut vor dem Auszug aus dem Elternhaus sogar ein Stück Rote Bete für Glück in der Ehe. Buraki w occie ist die haltbare, essiggesäuerte Variante dieser langen Tradition und unterscheidet sich klar von der geriebenen [Ćwikła](/de/rezepte/cwikla) mit Meerrettich, von den warmen, cremigen [Buraczki](/de/rezepte/buraczki) zum Mittagessen und vom [Barszcz](/de/rezepte/barszcz-czerwony), der Suppe aus demselben Gemüse. Entscheidend für die kräftige Farbe ist, die Rote Bete ungeschält zu kochen und erst danach zu schälen, schneidet man sie vor dem Kochen an, verliert sie einen Teil ihres Farbstoffs ins Kochwasser.",
    originPl:
      "Burak czerwony przywędrował do Polski prawdopodobnie w XIV wieku ze świata bizantyjskiego, a już w XV wieku jadano go na dworze króla Władysława Jagiełły. W polskiej kulturze ludowej jego czerwona barwa od dawna symbolizowała miłość i płodność, dlatego sałatki z buraków tradycyjnie podawano na weselach i chrzcinach, a w niektórych regionach panna młoda jadła kawałek buraka przed wyjściem z domu rodzinnego na szczęście w małżeństwie. Buraki w occie to trwała, zakonserwowana octem odmiana tej długiej tradycji i różni się wyraźnie od tartej [ćwikły](/pl/rezepte/cwikla) z chrzanem, od ciepłych, kremowych [buraczków](/pl/rezepte/buraczki) do obiadu i od [barszczu](/pl/rezepte/barszcz-czerwony), zupy z tego samego warzywa. Dla intensywnego koloru kluczowe jest ugotowanie buraków w całości, w skórce, i obranie ich dopiero potem, przekrojenie przed gotowaniem sprawia, że część barwnika ucieka do wywaru.",
    shopDe:
      "Kaufe feste Rote Bete ohne weiche Stellen, am besten mittelgroße Knollen, die gleichmäßig garen. Dazu 5-prozentigen Essig, Nelken und Lorbeer, erhältlich im Supermarkt oder im [Polenladen](/de/blog/polenladen-einkaufen).",
    shopPl:
      "Kup jędrne buraki bez miękkich miejsc, najlepiej średniej wielkości, które równo się gotują. Do tego ocet 5 procent, goździki i liść laurowy, dostępne w markecie albo w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    techniqueDe:
      "Rote Bete ungeschält zu kochen bewahrt den größten Teil des roten Farbstoffs, der sonst ins Kochwasser übergehen würde, erst nach dem Abkühlen wird geschält und geschnitten. Fünf Prozent Essig sichern auch hier zuverlässig die Haltbarkeit im Kühlschrank. Etwas vom Kochwasser der Roten Bete im Sud mitzuverwenden verstärkt die Farbe und die erdige Süße zusätzlich. Drei Tage im Kühlschrank braucht es mindestens, bis Essig und Gewürze bis zum Kern der Spalten durchgezogen sind.",
    techniquePl:
      "Gotowanie buraków w skórce zachowuje większość czerwonego barwnika, który inaczej przeszedłby do wywaru, obieranie i krojenie następuje dopiero po ostudzeniu, gdy skórka schodzi łatwo bez noża. Ocet 5 procent również tutaj gwarantuje trwałość w lodówce, a goździki dodane w całości oddają aromat wolniej niż zmielone, dzięki czemu zalewa nie robi się z czasem zbyt korzenna. Dodanie odrobiny wywaru z gotowania buraków do zalewy wzmacnia kolor i ziemistą słodycz. Potrzeba minimum trzech dni w lodówce, żeby ocet i przyprawy przeniknęły aż do środka ćwiartek, a nie tylko do zewnętrznej warstwy.",
    serveDe:
      "Serviere die Spalten zu kaltem Aufschnitt oder Sonntagsbraten, ihre Süße und Säure passen gut zu deftigem Fleisch. Ein weiterer süß-saurer Nachbar im Regal ist die [Śliwki w occie](/de/rezepte/sliwki-w-occie).",
    servePl:
      "Podawaj ćwiartki do wędlin albo niedzielnego pieczystego, ich słodycz i kwasowość dobrze łączą się z solidnym mięsem. Kolejnym słodko-kwaśnym sąsiadem w regale są [śliwki w occie](/pl/rezepte/sliwki-w-occie).",
    diasporaDe:
      "In Deutschland ist Buraki w occie ein einfacher Weg, Rote Bete das ganze Jahr über haltbar zu machen, ohne auf saisonale Erntefenster angewiesen zu sein. Kinder dürfen beim Schälen der abgekühlten Roten Bete helfen, das heiße Kochen und Aufgießen bleibt bei den Erwachsenen. Nelken und Essig gibt es günstig im [Polenladen](/de/blog/polenladen-einkaufen).",
    diasporaPl:
      "W Niemczech buraki w occie to prosty sposób na trwały zapas buraków przez cały rok, bez oglądania się na krótkie okno sezonu. Dzieci mogą pomagać przy obieraniu ostudzonych buraków, gorące gotowanie i zalewanie zostaje przy dorosłych. Goździki i ocet tanio kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    mistakesDe:
      "Rote Bete vor dem Kochen zu schälen oder anzuschneiden lässt einen Großteil der Farbe ins Wasser ausbluten, immer ungeschält kochen und erst danach schälen. Zu schwacher Essig verkürzt die Haltbarkeit merklich. Wer das Glas schon nach einem Tag öffnet, bekommt nur einen Bruchteil des Aromas, mindestens drei Tage im Kühlschrank sind nötig. Und Buraki w occie mit der geriebenen [Ćwikła](/de/rezepte/cwikla) zu verwechseln führt zu falschen Erwartungen an Textur und Schärfe.",
    mistakesPl:
      "Obieranie lub przekrajanie buraków przed gotowaniem sprawia, że duża część koloru wypływa do wody, zawsze gotuj w skórce i obieraj dopiero potem. Za słaby ocet wyraźnie skraca trwałość. Kto otworzy słoik już po dniu, poczuje tylko ułamek smaku, potrzeba minimum trzech dni w lodówce. A kto myli buraki w occie z tartą [ćwikłą](/pl/rezepte/cwikla), oczekuje złej tekstury i złej ostrości.",
    variantsDe:
      "Mit einem Stück Meerrettich in der Lake wird daraus fast eine milde Ćwikła, mit mehr Nelken würziger, mit einem Schuss Zitrone frischer in der Säure. Im Regal daneben passt die [Śliwki w occie](/de/rezepte/sliwki-w-occie) gut dazu.",
    variantsPl:
      "Z kawałkiem chrzanu w zalewie robi się z tego niemal łagodna ćwikła, z większą ilością goździków bardziej korzenne, z odrobiną soku z cytryny świeższe w kwasowości. Obok w regale dobrze pasują [śliwki w occie](/pl/rezepte/sliwki-w-occie).",
  },

  "recipe-ogorki-konserwowe": {
    dishDe: "Ogórki konserwowe",
    dishPl: "Ogórki konserwowe",
    vibeDe: "kleine, feste Gurken in klarem Essigsud mit Zwiebel und Senf, der lagerfähige Essiggurken-Klassiker",
    vibePl: "małe, twarde ogórki w jasnej zalewie octowej z cebulą i gorczycą, trwały klasyk na zapas",
    originDe:
      "Erste Hinweise auf in Essig eingelegte Gurken finden sich in Polen bereits im frühen 17. Jahrhundert, der Kräuterkundler Szymon Syreński schrieb 1613 in seinem Zielnik, man salze und säure Gurken in Essig mit Salz, Dill und Majoran, wie es schon die Alten taten. Zur wirklich verbreiteten Konservierungsmethode wurde Essig bei Gurken aber erst in den 1960er Jahren, als in Städten wie Łowicz große Gemüseverarbeitungsbetriebe entstanden und die industrielle Rezeptur schnell auch von den Hausfrauen der Region übernommen wurde. Bis heute gelten mehrere regionale Varianten als geschütztes Traditionsprodukt, darunter die Ogórki konserwowe po łowicku mit Pfeffer, Piment, Lorbeer, Senfkörnern und Dill sowie eine Version aus Ścinawa mit Karotte, Senf und Meerrettich. Anders als die milchsauer gegorenen [Ogórki kiszone](/de/rezepte/ogorki-kiszone) oder die nur kurz ziehenden [Ogórki małosolne](/de/rezepte/ogorki-malosolne) entsteht die Säure hier ausschließlich durch Essig, nicht durch Fermentation, was das Glas deutlich länger haltbar, aber auch geschmacklich milder und weniger komplex macht.",
    originPl:
      "Pierwsze wzmianki o ogórkach w occie znajdujemy w Polsce już na początku XVII wieku, zielnikoznawca Szymon Syreński pisał w 1613 roku w swoim Zielniku, że sola się i kwasi ogórki w occie z solą, koprem i majerankiem, tak jak czynili to starożytni. Naprawdę powszechną metodą konserwacji ocet w przypadku ogórków stał się jednak dopiero w latach 60. XX wieku, kiedy w miastach jak Łowicz powstały duże zakłady przetwórstwa owocowo-warzywnego, a przemysłowa receptura szybko trafiła też do domowych kuchni regionu. Do dziś kilka regionalnych odmian ma status chronionego produktu tradycyjnego, między innymi ogórki konserwowe po łowicku z pieprzem, zielem angielskim, liściem laurowym, gorczycą i koprem, oraz wersja ze Ścinawy z marchewką, gorczycą i chrzanem. W przeciwieństwie do fermentowanych mlekowo [ogórków kiszonych](/pl/rezepte/ogorki-kiszone) czy tylko krótko marynowanych [ogórków małosolnych](/pl/rezepte/ogorki-malosolne) kwas powstaje tu wyłącznie z octu, a nie z fermentacji, co czyni słoik znacznie trwalszym, ale też łagodniejszym i mniej złożonym w smaku.",
    shopDe:
      "Kaufe kleine, feste Einlegegurken ohne weiche Stellen, dazu 5-prozentigen Essig, Senfkörner, Dill und Lorbeer. Alles gibt es günstig im Supermarkt oder im [Polenladen](/de/blog/polenladen-einkaufen).",
    shopPl:
      "Kup małe, twarde ogórki gruntowe bez miękkich miejsc, do tego ocet 5 procent, gorczycę, koper i liść laurowy. Wszystko dostaniesz w markecie albo w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    techniqueDe:
      "Fünf Prozent Essigsäure sind bei Ogórki konserwowe die verlässliche Untergrenze, weniger saure Hausessige sichern die Haltbarkeit nicht mehr zuverlässig. Die Gurken müssen vollständig unter dem kochenden Sud liegen, sonst bleibt eine Stelle ungeschützt und verdirbt schneller. Mindestens 3 Tage im Kühlschrank braucht es, bis Essig, Zucker und Gewürze wirklich bis zum Kern durchgezogen sind, vorher schmeckt nur die Schale sauer. Weil hier keine echte Sterilisation im Wasserbad stattfindet, gehört das Glas durchgehend in den Kühlschrank und nicht ins Vorratsregal.",
    techniquePl:
      "Pięć procent kwasu octowego to przy ogórkach konserwowych bezpieczna dolna granica, słabszy domowy ocet nie zapewnia już pewnej trwałości. Ogórki muszą być całkowicie zalane wrzącą zalewą, inaczej niezabezpieczone miejsce szybciej się psuje. Potrzeba minimum 3 dni w lodówce, żeby ocet, cukier i przyprawy naprawdę przeniknęły do środka, wcześniej kwaśna jest tylko skórka. Skoro nie ma tu prawdziwej sterylizacji w kąpieli wodnej, słoik należy trzymać stale w lodówce, a nie w spiżarni.",
    serveDe:
      "Serviere die Gurken zu Grillfleisch, kaltem Aufschnitt oder als Beilage zum Sonntagsbraten, ihre Säure schneidet gut durch Fett. Im Regal daneben passen die milchsauren [Ogórki kiszone](/de/rezepte/ogorki-kiszone) und die milden [Ogórki małosolne](/de/rezepte/ogorki-malosolne).",
    servePl:
      "Podawaj ogórki do grillowanego mięsa, wędlin albo jako dodatek do niedzielnego pieczystego, ich kwasowość dobrze przełamuje tłuste dania. Obok w regale pasują kiszone mlekowo [ogórki kiszone](/pl/rezepte/ogorki-kiszone) i łagodne [ogórki małosolne](/pl/rezepte/ogorki-malosolne).",
    diasporaDe:
      "In Deutschland sind Ogórki konserwowe der unkomplizierte Essigvorrat für alle, die keine Fermentation im Keller managen wollen, das Glas ist in wenigen Tagen fertig und hält gekühlt viele Wochen. Kinder dürfen beim Waschen und Einschichten der Gurken helfen, der kochende Sud bleibt bei den Erwachsenen. Kleine Einlegegurken und Senfkörner gibt es günstig im [Polenladen](/de/blog/polenladen-einkaufen).",
    diasporaPl:
      "W Niemczech ogórki konserwowe są prostym octowym zapasem dla tych, którzy nie chcą pilnować fermentacji w piwnicy, słoik jest gotowy w kilka dni i trzyma się schłodzony wiele tygodni. Dzieci mogą pomagać przy myciu i układaniu ogórków w słoiku, gorąca zalewa zostaje przy dorosłych. Małe ogórki gruntowe i gorczycę tanio kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    mistakesDe:
      "Milderer Hausessig statt der vollen 5 Prozent verkürzt die Haltbarkeit merklich. Gurken, die nicht vollständig unter dem Sud liegen, verderben an der freien Stelle zuerst. Wer das Glas schon nach einem Tag öffnet, bekommt nur außen etwas Säure, mindestens 3 Tage im Kühlschrank sind nötig. Und wer Ogórki konserwowe mit den milchsauer gegorenen [Ogórki kiszone](/de/rezepte/ogorki-kiszone) verwechselt, erwartet ein ganz anderes Geschmacksprofil und eine andere Lagerlogik.",
    mistakesPl:
      "Słabszy domowy ocet zamiast pełnych 5 procent wyraźnie skraca trwałość. Ogórki, które nie są całkowicie zalane zalewą, psują się najpierw w niezabezpieczonym miejscu. Kto otworzy słoik już po dniu, poczuje kwas tylko na powierzchni, potrzeba minimum 3 dni w lodówce. A kto myli ogórki konserwowe z fermentowanymi mlekowo [ogórkami kiszonymi](/pl/rezepte/ogorki-kiszone), oczekuje zupełnie innego profilu smaku i innej logiki przechowywania.",
    variantsDe:
      "Mit Karotte und Meerrettich entsteht die Ścinawa-Variante, mit mehr Pfeffer, Piment und Senfkörnern die Łowicz-Version, mit einer Scheibe Chili wird der Sud schärfer. Wer die fermentierte Linie sucht, findet sie bei den [Ogórki kiszone](/de/rezepte/ogorki-kiszone) oder den milden [Ogórki małosolne](/de/rezepte/ogorki-malosolne).",
    variantsPl:
      "Z marchewką i chrzanem powstaje wariant ścinawski, z większą ilością pieprzu, ziela angielskiego i gorczycy wersja łowicka, z krążkiem chili zalewa robi się ostrzejsza. Kto szuka linii fermentowanej, znajdzie ją w [ogórkach kiszonych](/pl/rezepte/ogorki-kiszone) albo w łagodnych [ogórkach małosolnych](/pl/rezepte/ogorki-malosolne).",
  },
};
