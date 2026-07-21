/**
 * Wave 12 Paket A — FACTS for zupa-grzybowa, grochowka.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W12_FACTS_A } from "./recipe-articles-w12-a";
 * Object.assign(FACTS, …, W12_FACTS_A);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Zupa grzybowa ≠ Barszcz / Flaki / Ogórkowa (Pilz ≠ Bete ≠ Kutteln ≠ Gurke)
 * - Grochówka ≠ Fasolka (Erbsen≠Bohnen) / Kapuśniak (≠ Sauerkrautsuppe)
 * - Polnische Suppen Overview bleibt Broad-Owner
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

export const W12_FACTS_A: Record<string, ArticleFacts> = {
 "recipe-zupa-grzybowa": {
 dishDe: "Zupa grzybowa",
 dishPl: "Zupa grzybowa",
 vibeDe: "waldig, klar, nach Trockenpilz und Lorbeer — Wigilia und Herbst",
 vibePl: "leśny, klarowny, od suszonych grzybów i liścia laurowego — Wigilia i jesień",
 originDe:
 "Zupa grzybowa ist die klassische polnische Pilzsuppe — hier aus eingeweichten Trockenpilzen (Borowiki), mit optionalen Nudeln oder Kartoffeln. Der Fond trägt den Waldgeschmack; Sahne bleibt Alltag-Optional, nicht Pflicht. Klar getrennt von [Barszcz](/de/rezepte/barszcz-czerwony) (Rote Bete), von [Flaki](/de/rezepte/flaki) und von Kiszone-Linien wie [Ogórkowa](/de/rezepte/ogorkowa). Der Überblick [Polnische Suppen](/de/blog/polnische-suppen) ordnet die Landschaft; hier bleibt der enge Pilz-Teller. An Wigilia verankert sie der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
 originPl:
 "Zupa grzybowa to klasyczna polska zupa grzybowa — tu z namoczonych suszonych borowików, z opcjonalnym makaronem lub ziemniakami. Wywar niesie smak lasu; śmietana to opcja na co dzień, nie obowiązek. Wyraźnie osobno od [barszczu](/pl/rezepte/barszcz-czerwony), od [flaków](/pl/rezepte/flaki) i od linii kiszonych jak [ogórkowa](/pl/rezepte/ogorkowa). Przegląd [polskie zupy](/pl/blog/polskie-zupy) porządkuje krajobraz; tu zostaje wąski talerz grzybowy. Na Wigilii porządkuje ją [menu wigilijne](/pl/blog/menu-wigilijne).",
 shopDe:
 "Getrocknete Steinpilze sind der Geschmacksträger — Qualität im [Polenladen](/de/blog/polenladen-einkaufen) oft besser als anonyme Mischungen. Fehlt eine Sorte: ehrlich mit weniger, aber guten Pilzen arbeiten laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Zwiebel, Karotte, Lorbeer, Dill aus dem Supermarkt. Frische Champignons ergänzen optional, ersetzen den Trockenpilz-Fond nicht. Kein Rote-Bete-Saft und keine Kutteln — sonst wird daraus [Barszcz](/de/rezepte/barszcz-czerwony) oder [Flaki](/de/rezepte/flaki).",
 shopPl:
 "Suszone borowiki niosą smak — jakość w [sklepie polskim](/pl/blog/sklep-polski-zakupy) często lepsza niż anonimowe mieszanki. Brak sorty: uczciwie mniej, ale dobre grzyby według [zamienników](/pl/blog/zamienniki-skladnikow). Cebula, marchew, liść laurowy, koperek z supermarketu. Świeże pieczarki opcjonalnie, nie zastępują wywaru z suszu. Bez soku z buraka i bez flaków — inaczej dryfuje w stronę [barszcz](/pl/rezepte/barszcz-czerwony) lub [flaki](/pl/rezepte/flaki).",
 techniqueDe:
 "Einweichen, abseihen, Fond nutzen — Sand und Bitternis bleiben im Tuch. Pilze kurz mitrösten, dann ruhig köcheln; zu starkes Blubbern trübt und macht den Topf bitter. Einlagen spät, damit Nudeln nicht zerkochen. Für Wigilia oft klar lassen; Śmietana nur temperiert einrühren, Technik wie im [Śmietana/Schmand](/de/blog/smietana-schmand)-Guide. Säure sparsam — das ist kein Kiszone-Topf wie [Ogórkowa](/de/rezepte/ogorkowa).",
 techniquePl:
 "Moczenie, przecedzenie, wykorzystanie płynu — piasek i gorycz zostają w gazie. Grzyby krótko podsmaż, potem spokojnie gotuj; zbyt mocne burzenie mąci i gorzknieje. Dodatki późno, by makaron się nie rozpadł. Na Wigilię często klarownie; śmietanę tylko zahartowaną, jak w [śmietana/Schmand](/pl/blog/smietana-czy-schmand). Kwasu mało — to nie garnek kiszony jak [ogórkowa](/pl/rezepte/ogorkowa).",
 serveDe:
 "Heiß in tiefen Tellern, mit Dill. Am Festtag neben Pierogi und Fisch — Menürahmen [Wigilia](/de/blog/wigilia-speiseplan). Wer Rote Bete will, bleibt bei [Barszcz](/de/rezepte/barszcz-czerwony); wer deftige Einlage mit Majeranek sucht, bei [Flaki](/de/rezepte/flaki). Alltagsnachbar [Zupa pomidorowa](/de/rezepte/zupa-pomidorowa). Übersicht der Familie: [Polnische Suppen](/de/blog/polnische-suppen).",
 servePl:
 "Gorąca w głębokich talerzach, z koperkiem. Święta: obok pierogów i ryby — rama [menu wigilijne](/pl/blog/menu-wigilijne). Buraki: [barszcz](/pl/rezepte/barszcz-czerwony); treściwe flaki z majerankiem: [flaki](/pl/rezepte/flaki). Sąsiad codzienny [zupa pomidorowa](/pl/rezepte/zupa-pomidorowa). Przegląd: [polskie zupy](/pl/blog/polskie-zupy).",
 diasporaDe:
 "In DE oft der pragmatische Wigilia- oder Herbsttopf: Trockenpilze früh einweichen, Fond am Vortag, am Tag nur erhitzen. Kinder dürfen Pilze abmessen; heißer Topf bei Erwachsenen. Einkauf vor den Feiertagen im [Polenladen](/de/blog/polenladen-einkaufen), bevor die Regale leer sind. Speiseplan entlasten heißt: klare Cook-URLs, Anlass bleibt [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
 diasporaPl:
 "W DE często pragmatyczny garnek wigilijny lub jesienny: susz namocz wcześniej, wywar dzień wcześniej, w dniu tylko podgrzej. Dzieci odmierzą grzyby; gorący garnek u dorosłych. Zakupy przed świętami w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Odciążenie menu: jasne cook-URL, okazja zostaje w [menu wigilijnym](/pl/blog/menu-wigilijne).",
 mistakesDe:
 "Pilzflüssigkeit ungefiltert (Sand). Mit [Barszcz](/de/rezepte/barszcz-czerwony) oder [Flaki](/de/rezepte/flaki) verwechseln. Mit Gerstensuppe [Krupnik](/de/rezepte/krupnik) verwechseln. Zu kurze Einweichzeit. Sahne kochend einrühren. Anlass.",
 mistakesPl:
 "Płyn z moczenia bez przecedzenia (piasek). Mylenie z [barszczem](/pl/rezepte/barszcz-czerwony) lub [flakami](/pl/rezepte/flaki). Mylenie z zupą jęczmienną [krupnik](/pl/rezepte/krupnik). Za krótkie moczenie. Śmietana do wrzątku. Nie mieszać ilości i kroków z sąsiednim przepisem.",
 variantsDe:
 "Mit frischen Champignons ergänzt; mit Uszka-Nachbar statt Nudeln; cremig nur im Alltag. Passende Nachbarn sind [Barszcz](/de/rezepte/barszcz-czerwony), [Ogórkowa](/de/rezepte/ogorkowa), [Flaki](/de/rezepte/flaki), [Krupnik](/de/rezepte/krupnik). Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen; zum Anlass passt [Wigilia](/de/blog/wigilia-speiseplan).",
 variantsPl:
 "Ze świeżymi pieczarkami; uszka zamiast makaronu; kremowo tylko na co dzień. Pasujący sąsiedzi to [barszcz](/pl/rezepte/barszcz-czerwony), [ogórkowa](/pl/rezepte/ogorkowa), [flaki](/pl/rezepte/flaki), [krupnik](/pl/rezepte/krupnik). W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe; do okazji pasuje [menu wigilijne](/pl/blog/menu-wigilijne).",
 },

 "recipe-grochowka": {
 dishDe: "Grochówka",
 dishPl: "Grochówka",
 vibeDe: "deftig, rauchig, nach Erbse und Majoran — Batch- und Sonntagstopf",
 vibePl: "treściwy, wędzony, od grochu i majeranku — garnek na zapas i niedzielę",
 originDe:
 "Grochówka ist die klassische polnische Erbsensuppe aus gelben Trockenerbsen — dick, mit Kartoffeln und oft geräucherter Kiełbasa oder Speck. Das ist weder Bohnenschmorgericht [Fasolka po bretonsku](/de/rezepte/fasolka-po-bretonsku) noch Sauerkrautsuppe [Kapuśniak](/de/rezepte/kapusniak) noch klare Brühe [Rosół](/de/rezepte/rosol) noch Gerstensuppe [Krupnik](/de/rezepte/krupnik). Der Überblick [Polnische Suppen](/de/blog/polnische-suppen) ordnet die Landschaft; hier bleibt der enge Erbsen-Fokus. Menüplatz beim [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 originPl:
 "Grochówka to klasyczna polska zupa grochowa z żółtego grochu — gęsta, z ziemniakami i często wędzoną kiełbasą lub boczkiem. To ani fasolka duszona [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku), ani [kapuśniak](/pl/rezepte/kapusniak), ani klarowny [rosół](/pl/rezepte/rosol), ani [krupnik](/pl/rezepte/krupnik). Przegląd [polskie zupy](/pl/blog/polskie-zupy) porządkuje krajobraz; tu zostaje wąski fokus na groch. Miejsce w menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 shopDe:
 "Gelbe Trockenerbsen und geräucherte Wurst sind der Kern — Wurstwahl im [Kiełbasa-Arten](/de/blog/kielbasa-arten)-Lexikon, Einkauf oft im [Polenladen](/de/blog/polenladen-einkaufen). Kartoffeln, Zwiebel, Karotte, Majoran aus dem Supermarkt. Fehlt geräucherte Kiełbasa: ehrlich milden Speck oder Schinken laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Keine weißen Bohnen und keine Kapusta kiszona — sonst wird daraus [Fasolka](/de/rezepte/fasolka-po-bretonsku) oder [Kapuśniak](/de/rezepte/kapusniak).",
 shopPl:
 "Żółty groch i wędzona kiełbasa to rdzeń — wybór wędliny w [rodzajach kiełbasy](/pl/blog/rodzaje-kielbasy), zakupy często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Ziemniaki, cebula, marchew, majeranek z supermarketu. Brak wędzonki: uczciwie łagodna słonina według [zamienników](/pl/blog/zamienniki-skladnikow). Bez białej fasoli i bez kapusty kiszonej — inaczej dryfuje w stronę [fasolkę](/pl/rezepte/fasolka-po-bretonsku) lub [kapuśniak](/pl/rezepte/kapusniak).",
 techniqueDe:
 "Einweichen oder lange Garzeit — Erbsen müssen weich fallen, bevor Kartoffeln und Wurst den Topf füllen. Teilweise pürieren für Körper, nicht zu Brei. Wurst anbraten und spät zugeben, damit der Rauch bleibt. Majoran dosieren, nicht wie Oregano kippen. Zu dünn = wässrig; zu kurz = bissfeste Erbsen. Das ist kein Sauerkraut-Säurespiel wie [Kapuśniak](/de/rezepte/kapusniak).",
 techniquePl:
 "Moczenie lub długie gotowanie — groch musi zmięknąć, zanim ziemniaki i kiełbasa wypełnią garnek. Częściowe blendowanie na ciało, nie na papkę. Kiełbasę podsmaż i dodaj późno, by został dym. Majeranek dawkuje, nie jak oregano. Za rzadko = wodnisto; za krótko = twardy groch. To nie kwas kapusty jak [kapuśniak](/pl/rezepte/kapusniak).",
 serveDe:
 "Heiß mit Dill oder Majoran, Brot dazu. Passt als Sonntagsstarter oder Alltagsmittag im Sinne von [polnischem Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer Bohnen will: [Fasolka](/de/rezepte/fasolka-po-bretonsku); wer Krautsuppe: [Kapuśniak](/de/rezepte/kapusniak); wer klare Brühe: [Rosół](/de/rezepte/rosol). Landschaft: [Polnische Suppen](/de/blog/polnische-suppen). Wurst-Kontext: [Kiełbasa-Arten](/de/blog/kielbasa-arten).",
 servePl:
 "Gorąca z koperkiem lub majerankiem, chleb obok. Starter niedzielny lub obiad w duchu [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Fasola: [fasolka](/pl/rezepte/fasolka-po-bretonsku); kapusta: [kapuśniak](/pl/rezepte/kapusniak); klarowny wywar: [rosół](/pl/rezepte/rosol). Krajobraz: [polskie zupy](/pl/blog/polskie-zupy). Kontekst wędliny: [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy).",
 diasporaDe:
 "Grochówka ist Diaspora-freundlich: ein Topf, Batch für zwei Tage, Freezer portionsweise. Samstag einweichen, Sonntag köcheln — oder Wochentag, wenn Schichtarbeit den Rhythmus verschiebt. Kinder dürfen Erbsen spülen; heiße Wurstpfanne bei Erwachsenen. Einkaufsliste kurz halten: Erbsen, Wurst, Kartoffeln — Details zu Wurst im [Kiełbasa](/de/blog/kielbasa-arten)-Lexikon und [Polenladen](/de/blog/polenladen-einkaufen).",
 diasporaPl:
 "Grochówka lubi diasporę: jeden garnek, zapas na dwa dni, freezer porcjami. Sobota moczenie, niedziela gotowanie — albo dzień roboczy przy zmianach. Dzieci przepłuczą groch; gorąca patelnia u dorosłych. Krótka lista: groch, kiełbasa, ziemniaki — szczegóły w [rodzajach kiełbasy](/pl/blog/rodzaje-kielbasy) i [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
 mistakesDe:
 "Mit [Fasolka](/de/rezepte/fasolka-po-bretonsku) verwechseln (Bohnen). Mit [Kapuśniak](/de/rezepte/kapusniak) verwechseln (Kraut). Mit [Krupnik](/de/rezepte/krupnik) verwechseln (Gerste). Zu wenig Garzeit. Wurst von Anfang an mitkochen bis fade. nein.",
 mistakesPl:
 "Mylenie z [fasolką](/pl/rezepte/fasolka-po-bretonsku). Mylenie z [kapuśniakiem](/pl/rezepte/kapusniak). Mylenie z [krupnikiem](/pl/rezepte/krupnik). Za krótko gotowane. Kiełbasa od początku do bladości. Nie mieszać ilości i kroków z sąsiednim przepisem.",
 variantsDe:
 "Mit mehr Speck rauchiger; vegetarisch mit geräuchertem Paprika ehrlich benannt; dicker oder dünner nach Hausbrauch. Passende Nachbarn sind [Fasolka](/de/rezepte/fasolka-po-bretonsku), [Kapuśniak](/de/rezepte/kapusniak), [Rosół](/de/rezepte/rosol). Guides: [Polnische Suppen](/de/blog/polnische-suppen), [Kiełbasa-Arten](/de/blog/kielbasa-arten), [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
 variantsPl:
 "Z większą ilością słoniny bardziej wędzona; wege z wędzoną papryką uczciwie nazwana; gęstsza lub rzadsza według domu. Pasujący sąsiedzi to [fasolka](/pl/rezepte/fasolka-po-bretonsku), [kapuśniak](/pl/rezepte/kapusniak), [rosół](/pl/rezepte/rosol). Przewodniki: [polskie zupy](/pl/blog/polskie-zupy), [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy), [obiad niedzielny](/pl/blog/obiad-niedzielny), [zamienniki](/pl/blog/zamienniki-skladnikow).",
 },
};
