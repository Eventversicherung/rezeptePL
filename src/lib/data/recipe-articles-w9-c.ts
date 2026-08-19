/**
 * Wave 9 Paket C — FACTS for recipe-babka (Markdown inline links).
 * Integrator E merges `W9_FACTS_C` into recipe-articles.ts FACTS map.
 * No baking pillar — Makowiec-Technik only descriptively (Hefe-/Ofen-Feeling).
 */

export type W9ArticleFacts = {
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

export const W9_FACTS_C: Record<string, W9ArticleFacts> = {
 "recipe-babka": {
 dishDe: "Babka",
 dishPl: "Babka",
 vibeDe: "luftig, formgebacken, puderzuckerweiß zu Ostern",
 vibePl: "puszysta, z formy, w cukrze pudrze na Wielkanoc",
 originDe:
 "Babka wielkanocna hieß ursprünglich einfach Baba, ein Wort, das im Altpolnischen eine verheiratete oder ältere Frau bezeichnete. Die gängigste Erklärung für den Namen ist, dass der nach oben ausgestellte, gerippte Kuchen der weiten, gefältelten Rockform erinnerte, die verheiratete Bäuerinnen früher trugen, oder dem unter einem Kopftuch versteckten, geflochtenen Haarknoten dieser Frauen. Die ersten Baby wurden Ende des 17. Jahrhunderts in der polnisch-litauischen Adelsküche gebacken, oft mit Safran gefärbt und deshalb auch gelbes Brot genannt. Internationale Bekanntheit verdankt das Gebäck ausgerechnet einem entmachteten polnischen König: Stanisław Leszczyński, der nach dem Verlust der Krone von seinem Schwiegersohn Ludwig XV. das Herzogtum Lothringen erhielt, ließ dort seine Lieblingsbabka mit Rum tränken, was später zur französischen Baba au Rhum wurde. Das Backen selbst war in polnischen Haushalten ein fast heiliger Vorgang: Männer durften die Küche während des Aufgehens nicht betreten, laute Geräusche waren verboten, und die frisch gebackene Babka wurde auf Federkissen gebettet, damit sie beim Abkühlen nicht in sich zusammenfiel. Sie ist ein eigenständiges Gebäck mit eigener Form, kein gerollter Mohnkuchen wie [Makowiec](/de/rezepte/makowiec) und kein Käsekuchen wie [Sernik](/de/rezepte/sernik). Den Menürahmen für den ganzen Ostertisch findest du im [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan).",
 originPl:
 "Babka wielkanocna nazywała się pierwotnie po prostu babą, słowem, które w dawnej polszczyźnie oznaczało zamężną lub starszą kobietę. Najczęściej podawane wyjaśnienie nazwy mówi, że wysoka, karbowana forma ciasta przypominała szeroką, sfałdowaną spódnicę noszoną przez zamężne wiejskie kobiety albo spleciony warkocz ukryty pod chustą, jaki nosiły te same kobiety. Pierwsze baby piekła szlachecka kuchnia Rzeczpospolitej pod koniec XVII wieku, często barwione szafranem, dlatego nazywano je też żółtym chlebem. Międzynarodową sławę ciasto zawdzięcza paradoksalnie zdetronizowanemu polskiemu królowi: Stanisław Leszczyński, który po utracie korony otrzymał od zięcia, Ludwika XV, Księstwo Lotaryngii, kazał tam nasączać swoją ulubioną babę rumem, co dało początek francuskiej babie au rhum. Samo pieczenie było w polskich domach niemal rytuałem: mężczyznom nie wolno było wchodzić do kuchni podczas wyrastania ciasta, zabraniano głośnych rozmów i biegania, a świeżo upieczoną babę kładziono na puchowych poduszkach, żeby nie opadła podczas stygnięcia. To osobny wypiek z własną formą, nie zwinięty makowiec jak [makowiec](/pl/rezepte/makowiec) i nie sernik jak [sernik](/pl/rezepte/sernik). Ramy całego wielkanocnego stołu opisuje [menu wielkanocne](/pl/blog/menu-wielkanocne).",
 shopDe:
 "Für die Form brauchst du Mehl vom Typ 405 oder 550, frische oder trockene Hefe, Milch, Butter, Eier, Zucker sowie Vanille oder Zitronenschale, Puderzucker und eine gut gefettete Gugelhupf- oder Babka-Form. Hefe und oft bessere Butter findest du im [Polenladen](/de/blog/polenladen-einkaufen). Ein flacher Blechkuchen mit Streuseln ist [Drożdżówka](/de/rezepte/drozdzowka), ein geflochtener Zopf ist [Chałka](/de/rezepte/chalka), und frittiert werden [Pączki](/de/rezepte/paczki).",
 shopPl:
 "Na formę potrzebujesz mąki typu 405 lub 550, drożdży świeżych lub suszonych, mleka, masła, jajek, cukru oraz wanilii lub skórki cytryny, cukru pudru i dobrze natłuszczonej formy babkowej. Drożdże i często lepsze masło kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Płaski placek z kruszonką to [drożdżówka](/pl/rezepte/drozdzowka), pleciony warkocz to [chałka](/pl/rezepte/chalka), a smażone są [pączki](/pl/rezepte/paczki).",
 techniqueDe:
 "Die Hefe nur lauwarm aktivieren, den Teig elastisch kneten und geduldig verdoppeln lassen, die Form nicht überfüllen und dem Teig ein zweites Gehen in der Form gönnen. Bei mittlerer Ofentemperatur backen und mit der Stäbchenprobe prüfen, dann nach kurzer Ruhe stürzen. Ein zu heißer Ofen bräunt die Kruste, bevor der Kern durchgebacken ist, was genau die gleiche Geduld verlangt wie beim Hefeteig im [Makowiec-Technik](/de/blog/makowiec-technik)-Guide, allerdings ohne Rollen und ohne Mohnfüllung.",
 techniquePl:
 "Drożdże aktywuj tylko na letnio, ciasto wyrabiaj elastycznie i cierpliwie pozwól mu podwoić objętość, nie przepełniaj formy i daj ciastu drugie wyrastanie już w formie. Piecz w średniej temperaturze piekarnika, sprawdzaj patyczkiem i wyjmuj z formy dopiero po krótkim odpoczynku. Zbyt gorący piekarnik rumieni skórkę, zanim środek się dopiecze, co wymaga dokładnie tej samej cierpliwości co ciasto drożdżowe w [technice makowca](/pl/blog/makowiec-technika), tyle że bez zwijania i bez masy makowej.",
 serveDe:
 "Abgekühlt mit Puderzucker oder einer leichten Glasur, dazu Kaffee oder Tee. Am [Wielkanoc](/de/blog/wielkanoc-speiseplan)-Tisch steht sie oft neben Eiern und Żurek. Andere festliche Süßspeisen sind [Sernik](/de/rezepte/sernik) oder der gerollte [Makowiec](/de/rezepte/makowiec), während am Fettdonnerstag stattdessen frittierte [Pączki](/de/rezepte/paczki) auf den Tisch kommen, ein ganz anderer Anlass mit einem ganz anderen Gebäck.",
 servePl:
 "Ostudzoną podawaj z cukrem pudrem lub lekkim lukrem, do kawy albo herbaty. Przy [menu wielkanocnym](/pl/blog/menu-wielkanocne) stoi często obok jajek i żurku. Inne świąteczne słodkości to [sernik](/pl/rezepte/sernik) albo zwinięty [makowiec](/pl/rezepte/makowiec), a na Tłusty Czwartek zamiast tego podaje się smażone [pączki](/pl/rezepte/paczki), zupełnie inną okazję z zupełnie innym wypiekiem.",
 diasporaDe:
 "In Deutschland rettet das Backen am Vortag den Ostersonntagmorgen, denn die Babka schmeckt auch am nächsten Tag noch frisch. Eine gewöhnliche Gugelhupfform aus dem Haushaltsregal reicht völlig aus, der Name Babka bleibt trotzdem klar erkennbar. Wer keine Zeit zum Backen hat, greift notfalls zur Fertigbabka aus dem [Polenladen](/de/blog/polenladen-einkaufen), ohne dass das ein Scheitern wäre. Den Kulturrahmen dazu liefert der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan).",
 diasporaPl:
 "W Niemczech pieczenie dzień wcześniej ratuje niedzielny ranek wielkanocny, bo babka smakuje świeżo jeszcze następnego dnia. Zwykła forma do gugelhupfa z domowej szafki w zupełności wystarczy, nazwa babka i tak zostaje czytelna. Kto nie ma czasu na pieczenie, sięga awaryjnie po gotową babkę ze [sklepu polskiego](/pl/blog/sklep-polski-zakupy), co wcale nie jest porażką. Ramy kulturowe opisuje [menu wielkanocne](/pl/blog/menu-wielkanocne).",
 mistakesDe:
 "Zu heiße Milch tötet die Hefe sofort ab, zu viel Mehl und eine überfüllte Form machen die Babka dicht statt luftig, ein zu heißer Ofen bräunt die Kruste, bevor der Kern gar ist, und zu frühes Stürzen lässt sie in sich zusammenfallen. Verwechsle die Form außerdem nicht mit [Makowiec](/de/rezepte/makowiec), [Sernik](/de/rezepte/sernik) oder den frittierten [Pączki](/de/rezepte/paczki), denn alle drei sind ganz eigene Gebäcke.",
 mistakesPl:
 "Za gorące mleko od razu zabija drożdże, za dużo mąki i przepełniona forma robią babkę zbitą zamiast puszystej, zbyt gorący piekarnik rumieni skórkę, zanim środek dojdzie, a zbyt wczesne wyjmowanie z formy powoduje opadanie ciasta. Nie myl też tej formy z [makowcem](/pl/rezepte/makowiec), [sernikiem](/pl/rezepte/sernik) ani smażonymi [pączkami](/pl/rezepte/paczki), bo to trzy zupełnie osobne wypieki.",
 variantsDe:
 "Beliebt sind Varianten mit Rosinen, ein Kakao-Marmor-Muster als Hausbrauch oder eine Zitronenglasur statt Puderzucker. Eine kleinere Napfform eignet sich gut für kleinere Öfen. Die Mohnrolle bleibt [Makowiec](/de/rezepte/makowiec), der Käsekuchen [Sernik](/de/rezepte/sernik), das Honiggewürzgebäck [Piernik](/de/rezepte/piernik), und der geflochtene Hefezopf ohne Gugelhupfform ist [Chałka](/de/rezepte/chalka). Zum Anlass passt der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan).",
 variantsPl:
 "Popularne są warianty z rodzynkami, kakaowy marmurek jako zwyczaj domowy albo lukier cytrynowy zamiast cukru pudru. Mniejsza forma sprawdza się dobrze w mniejszych piekarnikach. Rolada makowa zostaje przy [makowcu](/pl/rezepte/makowiec), sernik przy [serniku](/pl/rezepte/sernik), wypiek miodowo-korzenny przy [pierniku](/pl/rezepte/piernik), a pleciony chleb drożdżowy bez formy babkowej to [chałka](/pl/rezepte/chalka). Do okazji pasuje [menu wielkanocne](/pl/blog/menu-wielkanocne).",
 },
};
