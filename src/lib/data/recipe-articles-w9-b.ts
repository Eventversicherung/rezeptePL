/**
 * Wave 9 Paket B — FACTS for Sałatka jarzynowa + Botwinka.
 * Isolated export `W9_FACTS_B` — Integrator merges into recipe-articles.ts FACTS map.
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

export const W9_FACTS_B: Record<string, ArticleFacts> = {
 "recipe-salatka-jarzynowa": {
 dishDe: "Sałatka jarzynowa",
 dishPl: "Sałatka jarzynowa",
 vibeDe: "cremig, mild-säuerlich, festlich und sättigend-kalt",
 vibePl: "kremowa, łagodnie kwaśna, świąteczna i sycąco-zimna",
 originDe:
 "Sałatka jarzynowa stammt, so seltsam es klingt, von einem Luxusgericht der Moskauer Oberschicht ab. Der belgisch-französische Koch Lucien Olivier servierte um 1860 in seinem Restaurant Ermitaż eine Salat-Kreation mit Haselhuhn, Krebsschwänzen, Kaviar und Kapern, deren genaues Rezept er zeitlebens geheim hielt. Nach der Oktoberrevolution und besonders in der Nachkriegszeit ersetzten Köche die teuren Zutaten durch das, was verfügbar war: Karotten statt Krebs, Erbsen aus der Dose statt Kaviar, gekochte Wurst statt Haselhuhn. So entstand die sowjetische Version, die als Festessen zu jedem Jahrestag und jeder Feier auf dem Tisch stand. Die polnische Variante ging noch einen Schritt weiter und strich meist sogar die Wurst, sodass ein reiner Gemüsesalat mit Mayonnaise übrig blieb, der bewusst kein [Mizeria](/de/rezepte/mizeria) ist, denn dort tragen Gurke und Śmietana den Geschmack. An [Wielkanoc](/de/blog/wielkanoc-speiseplan) und an vielen Sonntagen steht die Schüssel bis heute neben Schinken und Ei, als feste Buffet- und Festbeilage im Rahmen des [polnischen Sonntagsessens](/de/blog/sonntagsessen-polnisch).",
 originPl:
 "Sałatka jarzynowa wywodzi się, choć brzmi to zaskakująco, z luksusowego dania moskiewskiej socjety. Belgijsko-francuski kucharz Lucien Olivier serwował około 1860 roku w swojej restauracji Ermitaż sałatkę z jarząbka, ogonów raków, kawioru i kaparów, której dokładnego przepisu nigdy nie zdradził. Po rewolucji październikowej, a zwłaszcza w czasach powojennych niedoborów, drogie składniki zastąpiono tym, co było dostępne: marchewką zamiast raków, groszkiem z puszki zamiast kawioru, gotowaną kiełbasą zamiast jarząbka. Tak powstała wersja sowiecka, obecna na każdym większym przyjęciu i rocznicy. Polska odmiana poszła jeszcze dalej i zwykle pomija nawet wędlinę, zostawiając czysto warzywną sałatkę z majonezem, świadomie różną od [mizerii](/pl/rezepte/mizeria), gdzie smak niosą ogórek i śmietana. Na [Wielkanoc](/pl/blog/menu-wielkanocne) i wiele niedziel miska do dziś stoi obok szynki i jajek, jako stały dodatek bufetowy i świąteczny w ramach [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
 shopDe:
 "Kartoffeln, Karotten, Sellerie und Erbsen bekommst du im deutschen Supermarkt, saure Gurken und oft eine bessere Mayonnaise im [Polenladen](/de/blog/polenladen-einkaufen). Dazu einen säuerlichen Apfel und frische Eier. Die Mayonnaise darf ruhig gut sein, denn eine billige, zu süße Industrieware macht den ganzen Salat flach und eindimensional. An Feiertagen lohnt sich eine große Schüssel mehr als mehrere kleine Varianten, weil sich der Geschmack beim Durchziehen ohnehin verbessert.",
 shopPl:
 "Ziemniaki, marchew, seler i groszek kupisz w niemieckim markecie, a ogórki kiszone i często lepszy majonez w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Do tego kwaśne jabłko i świeże jajka. Majonez powinien być naprawdę dobry, bo tani, zbyt słodki przemysłowy produkt spłaszcza smak całej sałatki. Na święta bardziej opłaca się jedna duża miska niż kilka mniejszych wariantów, bo smak i tak poprawia się z czasem.",
 techniqueDe:
 "Das Gemüse weich, aber nicht matschig garen und vollständig abkühlen lassen, bevor die Mayonnaise dazukommt, sonst löst sich die Emulsion und der Salat wird wässrig. Alle Würfel möglichst gleichmäßig und klein schneiden, denn das entscheidet mehr über das Ergebnis als die Wahl der Zutaten. Gurkenlake oder Senf nur sparsam zum Abschmecken verwenden und dem Salat mindestens eine Stunde im Kühlschrank Zeit geben, damit sich die Aromen setzen.",
 techniquePl:
 "Warzywa ugotuj miękko, ale nie na papkę, i całkowicie ostudź przed dodaniem majonezu, bo inaczej emulsja się rozluźnia i sałatka robi się wodnista. Wszystkie składniki pokrój w możliwie równą, drobną kostkę, bo to decyduje o efekcie bardziej niż same składniki. Zalewę lub musztardę dodawaj tylko do doprawienia i daj sałatce co najmniej godzinę w lodówce, żeby smaki się przegryzły.",
 serveDe:
 "Kalt in einer Schüssel servieren, gerne mit etwas Petersilie obenauf. Klassisch passt sie zu Schinken, weißer Wurst, Ei und [Kotlet schabowy](/de/rezepte/kotlet-schabowy), an Ostern nach dem [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan). Als kühle Schwester mit ganz anderem Charakter steht [Mizeria](/de/rezepte/mizeria) daneben, dort tragen Gurke und Śmietana den Geschmack. Reste hält man abgedeckt im Kühlschrank und schmeckt vor dem erneuten Servieren noch einmal ab.",
 servePl:
 "Podawaj na zimno w misce, chętnie z odrobiną pietruszki na wierzchu. Klasycznie pasuje do szynki, białej kiełbasy, jajek i [kotleta schabowego](/pl/rezepte/kotlet-schabowy), na Wielkanoc według [menu wielkanocnego](/pl/blog/menu-wielkanocne). Jako chłodna siostra o zupełnie innym charakterze stoi obok [mizeria](/pl/rezepte/mizeria), gdzie smak niosą ogórek i śmietana. Resztki trzymaj szczelnie w lodówce i przed ponownym podaniem jeszcze raz dopraw.",
 diasporaDe:
 "In Deutschland ist Sałatka jarzynowa oft das Gericht, das Nachbarn spontan als polnischen Kartoffelsalat erkennen, auch wenn der Mayonnaise-Gemüse-Charakter ganz anders ist als Mizeria. Sie am Vortag vorzubereiten entlastet den Oster- oder Sonntagsmorgen spürbar, weil sich der Geschmack über Nacht sogar verbessert. Der Einkauf teilt sich meist auf: das Gemüsevolumen im Supermarkt, saure Gurken und bessere Mayonnaise im [Polenladen](/de/blog/polenladen-einkaufen).",
 diasporaPl:
 "W Niemczech sałatka jarzynowa bywa daniem, które sąsiedzi od razu rozpoznają jako polską sałatkę ziemniaczaną, choć jej majonezowo-warzywny charakter jest zupełnie inny niż mizeria. Przygotowanie dzień wcześniej wyraźnie odciąża wielkanocny lub niedzielny poranek, bo smak przez noc jeszcze się poprawia. Zakupy dzielą się zwykle na dwa sklepy, objętość warzyw z marketu, a ogórki kiszone i lepszy majonez ze [sklepu polskiego](/pl/blog/sklep-polski-zakupy).",
 mistakesDe:
 "Heißes Gemüse direkt mit Mayonnaise zu mischen lässt die Emulsion zerfallen und den Salat wässrig werden, deshalb muss alles vollständig abkühlen. Zu große Würfel wirken grob statt fein, und eine zu süße Mayonnaise ohne Nachwürzen macht den Salat eindimensional. Halte den Salat außerdem nicht stundenlang warm am Buffet, denn Mayonnaise verträgt Wärme schlecht.",
 mistakesPl:
 "Mieszanie gorących warzyw od razu z majonezem rozbija emulsję i robi sałatkę wodnistą, dlatego wszystko musi najpierw całkowicie ostygnąć. Za duża kostka wygląda niechlujnie zamiast elegancko, a zbyt słodki majonez bez doprawienia spłaszcza smak całości. Nie trzymaj też sałatki godzinami w cieple na bufecie, bo majonez źle znosi wysoką temperaturę.",
 variantsDe:
 "Mit mehr Apfel wird der Salat fruchtiger, mit weniger Mayonnaise fester, und eine vegetarische Version ohne Ei sollte man einfach ehrlich so benennen. Manche Familien geben Mais dazu, was als Hausvariante völlig legitim ist. Als kühle Verwandte mit anderem Profil passen [Mizeria](/de/rezepte/mizeria) und gefüllte Eier wie [Jajka faszerowane](/de/rezepte/jajka-faszerowane) gut in dasselbe Buffet, das der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan) beschreibt.",
 variantsPl:
 "Z większą ilością jabłka sałatka robi się bardziej owocowa, z mniejszą ilością majonezu bardziej zwarta, a wersję wegetariańską bez jajka warto po prostu uczciwie tak nazwać. Niektóre rodziny dodają kukurydzę jako wariant domowy. Jako chłodne, pokrewne dania w tym samym bufecie sprawdzają się [mizeria](/pl/rezepte/mizeria) i faszerowane jajka, czyli [jajka faszerowane](/pl/rezepte/jajka-faszerowane), które opisuje też [menu wielkanocne](/pl/blog/menu-wielkanocne).",
 },
 "recipe-botwinka": {
 dishDe: "Botwinka",
 dishPl: "Botwinka",
 vibeDe: "warm, kräuterig-rosa, leicht und frühlingshaft",
 vibePl: "ciepła, ziołowo-różowa, lekka i wiosenna",
 originDe:
 "Botwinka ist die warme Suppe aus junger Rote Bete mitsamt ihrer Blätter und Stiele, botanisch Botwina genannt, weil die Pflanze hier geerntet wird, bevor sie überhaupt eine ausgewachsene Knolle bildet. Genau das unterscheidet sie von der reifen Rote Bete, die für den klaren Festtags-[Barszcz](/de/rezepte/barszcz-czerwony) durchgeseiht wird, und vom kalten Sommer-[Chłodnik](/de/rezepte/chlodnik-litewski) auf Kefirbasis. Botwinka ist eine reine Saisonsuppe, die von Mai bis Juni auf den Markt kommt, wenn die jungen Bündel mit ihrem zarten Grün noch mild schmecken und noch nicht die erdige Note ausgewachsener Rote Bete haben. Die typische Kombination aus Säure und Śmietana am Ende dient nicht nur dem Geschmack, denn das Fett der Śmietana mildert die reizende Wirkung der in Rote-Bete-Blättern enthaltenen Oxalsäure. Der [Suppen-Überblick](/de/blog/polnische-suppen) ordnet Botwinka in die Frühlingslinie neben dem Rosół-Alltag ein.",
 originPl:
 "Botwinka to ciepła zupa z młodych buraków razem z liśćmi i ogonkami, botanicznie zwanymi botwiną, bo roślinę zbiera się tu, zanim w ogóle wykształci dojrzałą bulwę. Właśnie to odróżnia ją od dojrzałego buraka, który przecedza się do klarownego, świątecznego [barszczu](/pl/rezepte/barszcz-czerwony), oraz od zimnego letniego [chłodnika](/pl/rezepte/chlodnik-litewski) na bazie kefiru. Botwinka jest czystą zupą sezonową, która pojawia się na targach od maja do czerwca, gdy młode pęczki mają jeszcze delikatny smak i nie zdążyły nabrać ziemistej nuty dojrzałego buraka. Typowe połączenie kwasu i śmietany pod koniec gotowania ma znaczenie nie tylko smakowe, bo tłuszcz śmietany łagodzi drażniący wpływ kwasu szczawiowego zawartego w liściach buraka. [Przegląd zup](/pl/blog/polskie-zupy) umieszcza botwinkę w linii wiosennej obok codziennego rosołu.",
 shopDe:
 "Frische Botwina, also junge Bund-Rote-Bete mit Grün, findest du im Frühjahr auf dem Markt oder im Bio-Regal, außerhalb der Saison sollte man ehrlich auf eine Notvariante hinweisen. Dazu leichte Brühe, Kartoffeln, Dill und Śmietana, wobei der Beitrag zu [Śmietana und Schmand](/de/blog/smietana-schmand) bei der Wahl des Milchprodukts hilft. Dill und manchmal ein Bund Bete gibt es auch im Polenladen. Weder Sauerteig-Zakwas noch saure Gurke gehören hierher, denn das wären die Zutaten für Żurek oder [Ogórkowa](/de/rezepte/ogorkowa).",
 shopPl:
 "Świeżą botwinę, czyli młode buraki z naćią, znajdziesz wiosną na targu albo w dziale bio, poza sezonem warto uczciwie zaznaczyć wariant zastępczy. Do tego lekki wywar, ziemniaki, koperek i śmietana, a przy wyborze nabiału pomaga wpis o [śmietanie i Schmandzie](/pl/blog/smietana-czy-schmand). Koperek, a czasem i pęczek buraków, kupisz też w sklepie polskim. Ani zakwas, ani ogórek kiszony tu nie pasują, bo to składniki żurku albo [ogórkowej](/pl/rezepte/ogorkowa).",
 techniqueDe:
 "Zuerst die Knollen und Stiele weich garen und die Blätter erst spät zugeben, sonst werden sie olivgrün und matschig statt zart. Die Suppe sanft köcheln lassen, ohne sie sprudeln zu lassen, denn starkes Kochen zerstört die Farbe. Die Śmietana temperieren und erst nach dem Herunternehmen vom Herd unterziehen, damit sie nicht ausflockt, und die Säure erst ganz am Ende zugeben, um den Farbton frisch zu halten.",
 techniquePl:
 "Najpierw ugotuj bulwy i ogonki do miękkości, a liście dodaj dopiero na końcu, inaczej zrobią się oliwkowe i rozgotowane zamiast delikatne. Zupę gotuj łagodnie, bez gwałtownego wrzenia, bo mocne gotowanie niszczy kolor. Śmietanę ociepl i wmieszaj dopiero po zdjęciu garnka z ognia, żeby się nie zważyła, a kwas dodaj na samym końcu, żeby zachować świeży odcień.",
 serveDe:
 "Heiß als leichte Hauptsuppe oder Frühjahrsstarter servieren, mit Dill und optional einem halbierten Ei. Nach Ostern oder an milden Sonntagen ist sie eine willkommene, leichtere Alternative zum schwereren Barszcz, wobei der Menürahmen im [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan) und im [polnischen Sonntagsessen](/de/blog/sonntagsessen-polnisch) steht. Auf dem Tisch bleibt sie klar getrennt vom klaren [Barszcz](/de/rezepte/barszcz-czerwony) zu Wigilia und vom kalten [Chłodnik](/de/rezepte/chlodnik-litewski) im Hochsommer.",
 servePl:
 "Podawaj na gorąco jako lekką zupę główną lub wiosenny początek posiłku, z koperkiem i opcjonalnie połówką jajka. Po Wielkanocy albo w łagodne niedziele stanowi przyjemną, lżejszą alternatywę dla cięższego barszczu, a ramy stołu opisują [menu wielkanocne](/pl/blog/menu-wielkanocne) i [obiad niedzielny](/pl/blog/obiad-niedzielny). Na stole zostaje wyraźnie oddzielona od klarownego [barszczu](/pl/rezepte/barszcz-czerwony) na Wigilię i zimnego [chłodnika](/pl/rezepte/chlodnik-litewski) w upalne lato.",
 diasporaDe:
 "In deutschen Küchen ist frische Botwina eine saisonale Freude: Wer sie im Frühjahr auf dem Markt findet, kocht Botwinka, wer nicht, wartet lieber auf die nächste Saison, statt eine schlechte Ersatzvariante zu servieren. Ein großer Topf reicht meist für zwei warme Mittagessen hintereinander. Einordnung und weitere Frühlingssuppen liefert der [Suppen-Überblick](/de/blog/polnische-suppen).",
 diasporaPl:
 "W niemieckich kuchniach świeża botwina to sezonowa radość, kto znajdzie ją wiosną na targu, gotuje botwinkę, a kto nie, lepiej poczeka na kolejny sezon, niż poda słabszy zamiennik. Jeden większy garnek starcza zwykle na dwa ciepłe obiady pod rząd. Więcej o miejscu tej zupy wśród innych wiosennych dań pisze [przegląd zup](/pl/blog/polskie-zupy).",
 mistakesDe:
 "Botwinka mit dem klaren Barszcz zu verwechseln und alles durchzuseihen nimmt der Suppe genau das Gemüse und Grün, das sie ausmacht. Sie kalt wie Chłodnik zu servieren passt nicht zu ihrem Charakter, und die Blätter von Anfang an mitzukochen macht sie grau statt frisch grün. Śmietana in die kochende Suppe zu rühren lässt sie zudem leicht ausflocken.",
 mistakesPl:
 "Mylenie botwinki z klarownym barszczem i przecedzanie wszystkiego pozbawia zupę właśnie tych warzyw i zieleni, które ją definiują. Podawanie na zimno jak chłodnik nie pasuje do jej charakteru, a gotowanie liści od samego początku robi je szare zamiast świeżo zielonych. Wlewanie śmietany do wrzącej zupy dodatkowo sprawia, że łatwo się zważy.",
 variantsDe:
 "Mit mehr Kartoffel wird die Suppe sättigender, mit weniger Śmietana leichter, und eine vegetarische Version auf Gemüsefond ist ebenso möglich. Als klarer Nachbar mit anderem Charakter steht [Barszcz](/de/rezepte/barszcz-czerwony) daneben, dessen Technik der Beitrag [Barszcz-Technik](/de/blog/barszcz-technik) erklärt. Kalt und sommerlich ist [Chłodnik](/de/rezepte/chlodnik-litewski), sauer auf Gurkenbasis die [Ogórkowa](/de/rezepte/ogorkowa), und grün mit Sauerampfer die verwandte [Szczawiowa](/de/rezepte/szczawiowa).",
 variantsPl:
 "Z większą ilością ziemniaka zupa robi się bardziej sycąca, z mniejszą ilością śmietany lżejsza, możliwa jest też wersja wegetariańska na wywarze warzywnym. Jako klarowny sąsiad o innym charakterze stoi obok [barszcz](/pl/rezepte/barszcz-czerwony), którego technikę opisuje [jak ugotować barszcz](/pl/blog/jak-ugotowac-barszcz). Na zimno i latem sprawdza się [chłodnik](/pl/rezepte/chlodnik-litewski), na kwaśno z ogórkiem [ogórkowa](/pl/rezepte/ogorkowa), a zielono ze szczawiem pokrewna [szczawiowa](/pl/rezepte/szczawiowa).",
 },
};
