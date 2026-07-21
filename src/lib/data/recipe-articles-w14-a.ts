/**
 * Wave 14 Paket A — FACTS for wuzetka, drozdzowka.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W14_FACTS_A } from "./recipe-articles-w14-a";
 * Object.assign(FACTS, …, W14_FACTS_A);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Wuzetka ≠ Napoleonka (Blätterteig) / Sernik / Szarlotka / Mazurek
 * - Drożdżówka ≠ Chałka (Zopf) / Babka (Gugelhupf) / Pączki / Racuchy
 * - Sonntagsessen bleibt Kultur-Owner; hier nur Cook-Primary
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

export const W14_FACTS_A: Record<string, ArticleFacts> = {
 "recipe-wuzetka": {
 dishDe: "Wuzetka",
 dishPl: "Wuzetka",
 vibeDe:
 "dunkel-schokoladig, sahnig-kalt, Bäckerei-Schnitt — Schoko-Sahne, kein Blätterteig",
 vibePl:
 "ciemno-czekoladowy, śmietankowo-zimny, cukierniczy przekrój — czekolada+śmietana, nie francuskie",
 originDe:
 "Wuzetka ist die klassische polnische Schoko-Sahne-Torte: Kakao-Biskuit, dicke geschlagene Sahne dazwischen, dunkle Schoko-Glasur oben. Der Schnitt zeigt dunkle Biskuitschichten und eine helle Sahnefüllung, oft als Rechteck vom Blech. Das ist weder Blätterteig mit Vanillecreme wie [Napoleonka](/de/rezepte/napoleonka) noch Quarkkuchen wie [Sernik](/de/rezepte/sernik) noch Apfelkuchen wie [Szarlotka](/de/rezepte/szarlotka) und auch kein flacher Osterbelag wie [Mazurek](/de/rezepte/mazurek). Am [Sonntagsessen](/de/blog/sonntagsessen-polnisch) darf sie der Kaffee-Schluss sein. In der Diaspora oft der Bäckerei-Klassiker, den man zu Hause nachbaut, wenn Kühlschrank und Ruhezeit da sind.",
 originPl:
 "Wuzetka to klasyczny polski tort czekoladowo-śmietankowy: biszkopt kakaowy, gęsta ubita śmietana w środku, ciemna polewa na wierzchu. Przekrój pokazuje ciemne warstwy biszkoptu i jasną śmietanę, często prostokąt z blachy. To ani ciasto francuskie z kremem waniliowym jak [napoleonka](/pl/rezepte/napoleonka), ani [sernik](/pl/rezepte/sernik), ani [szarlotka](/pl/rezepte/szarlotka), ani płaski [mazurek](/pl/rezepte/mazurek). Przy [obiedzie niedzielnym](/pl/blog/obiad-niedzielny) bywa domknięciem przy kawie. W diasporze często klasyk cukierniczy, który odtwarza się w domu, gdy jest lodówka i czas na chłodzenie.",
 shopDe:
 "Für Biskuit und Füllung brauchst du Kakao, Mehl, Eier, Zucker, Schlagsahne, dunkle Schokolade oder Kuvertüre und Butter — Basis im Supermarkt; gutes Kakao und manchmal bessere Kuvertüre im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt Sahne-Qualität oder Kakao, ersetze ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de), ohne in Blätterteig-Charakter zu kippen. Fertig-Blätterteig als Basis wird zu [Napoleonka](/de/rezepte/napoleonka); Quark oder Apfelkern zu [Sernik](/de/rezepte/sernik) bzw. [Szarlotka](/de/rezepte/szarlotka).",
 shopPl:
 "Na biszkopt i nadzienie potrzebujesz kakao, mąki, jajek, cukru, śmietanki, gorzkiej czekolady lub couverture i masła — baza w markecie; dobre kakao i czasem lepsza couverture w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Brak jakości śmietanki lub kakao — zamień uczciwie według [zamienników](/pl/blog/zamienniki-skladnikow), bez dryfu w francuskie. Gotowe ciasto francuskie jako baza staje się [napoleonką](/pl/rezepte/napoleonka); twaróg lub jabłko — [sernikiem](/pl/rezepte/sernik) albo [szarlotką](/pl/rezepte/szarlotka).",
 techniqueDe:
 "Biskuit luftig backen, vollständig abkühlen, dann einmal teilen — heiß reißt und saugt die Sahne falsch. Sahne sehr kalt und steif; leichte Stabilisierung verhindert Rutschen im Schnitt. Tränken sparsam (Kaffee/Kakao-Milch), nicht nass. Glasur auf kalte Torte; danach lange kühlen, bis der Schnitt sauber ist. Zu flüssige Sahne = matschiger Schnitt; zu trockener Biskuit = bröckelig. Das ist kein Blätterteig-Bau wie [Napoleonka](/de/rezepte/napoleonka) und kein Quarkboden wie [Sernik](/de/rezepte/sernik). Backruhe und Sonntagsrhythmus [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 techniquePl:
 "Biszkopt piecz puszysto, całkowicie ostudź, potem przekrój — na gorąco się rwie i źle bierze śmietanę. Śmietanka bardzo zimna i sztywna; lekka stabilizacja chroni przed ślizganiem. Nasączanie oszczędnie (kawa/kakao z mlekiem), nie mokro. Polewa na zimny tort; potem długie chłodzenie aż krojenie czyste. Za rzadka śmietana = rozmokły przekrój; za suchy biszkopt = kruszenie. To nie budowa z francuskiego jak [napoleonka](/pl/rezepte/napoleonka) i nie spód twarogowy jak [sernik](/pl/rezepte/sernik). Rytm niedzielny [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 serveDe:
 "Kalt in Rechtecken, oft mit Sahnetupfer, zu Kaffee oder Tee. Als Sonntagsschluss unter [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Auf dem Tisch klar halten: Blätterteig-Creme = [Napoleonka](/de/rezepte/napoleonka); Quark = [Sernik](/de/rezepte/sernik); Apfelblech = [Szarlotka](/de/rezepte/szarlotka). Einkaufskontext: [Polenladen](/de/blog/polenladen-einkaufen). Hält gekühlt zwei bis drei Tage; Glasur vor dem Servieren ggf. glätten.",
 servePl:
 "Na zimno w prostokątach, często z czubkiem śmietany, do kawy lub herbaty. Jako niedzielne domknięcie pod [obiadem niedzielnym](/pl/blog/obiad-niedzielny). Na stole: francuskie+krem = [napoleonka](/pl/rezepte/napoleonka); twaróg = [sernik](/pl/rezepte/sernik); jabłko z blachy = [szarlotka](/pl/rezepte/szarlotka). W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności. Trzyma 2–3 dni w chłodzie; polewę przed podaniem ewentualnie wygładź.",
 diasporaDe:
 "Wuzetka ist der Diaspora-Bäckerei-Klassiker, den deutsche Gäste als „Schoko-Sahne-Schnitt“ verstehen und polnische Familien sofort wiedererkennen, wenn Biskuit dunkel und Sahne hell ist. Ein Blech für den Sonntag, Stücke für Gäste, Rest für den nächsten Tag. Kühlzeit ist kein Luxus — ohne sie zerfließt der Schnitt. Kein Zwang zu Blätterteig-Ästhetik und kein Quark als „Ersatzfüllung“. Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen. Kulturrahmen bleibt [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 diasporaPl:
 "Wuzetka to klasyk cukierniczy diasporze, który niemieccy goście rozumieją jako „przekrój czekoladowo-śmietankowy”, a polskie rodziny rozpoznają od razu, gdy biszkopt jest ciemny, a śmietana jasna. Jedna blacha na niedzielę, kawałki dla gości, resztka na następny dzień. Czas chłodzenia nie jest luksusem — bez niego przekrój się rozjeżdża. Bez przymusu estetyki francuskiego i bez twarogu jako „zamiennika”. W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe. Rama kultury: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 mistakesDe:
 "Mit [Napoleonka](/de/rezepte/napoleonka) verwechseln (Blätterteig). Mit [Sernik](/de/rezepte/sernik) oder [Szarlotka](/de/rezepte/szarlotka) verwechseln. Sahne zu weich; Biskuit heiß schichten; zu kurz kühlen.",
 mistakesPl:
 "Mylenie z [napoleonką](/pl/rezepte/napoleonka) (francuskie). Mylenie z [sernikiem](/pl/rezepte/sernik) lub [szarlotką](/pl/rezepte/szarlotka). Za miękka śmietana; gorący biszkopt; za krótkie chłodzenie. Nie mieszać ilości i kroków z sąsiednim przepisem.",
 variantsDe:
 "Mit stärkerer Kaffee-Tränke, mit etwas Kakao in der Sahne (ehrlich benennen), mit dünnerer Glasur. Passende Nachbarn sind [Napoleonka](/de/rezepte/napoleonka), [Sernik](/de/rezepte/sernik), [Szarlotka](/de/rezepte/szarlotka). Guides: [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Polenladen](/de/blog/polenladen-einkaufen), [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
 variantsPl:
 "Z mocniejszym nasączeniem kawą, z odrobiną kakao w śmietanie (nazwać uczciwie), z cieńszą polewą. Pasujący sąsiedzi to [napoleonka](/pl/rezepte/napoleonka), [sernik](/pl/rezepte/sernik), [szarlotka](/pl/rezepte/szarlotka). Przewodniki: [obiad niedzielny](/pl/blog/obiad-niedzielny), [sklep polski](/pl/blog/sklep-polski-zakupy), [zamienniki](/pl/blog/zamienniki-skladnikow).",
 },

 "recipe-drozdzowka": {
 dishDe: "Drożdżówka / Placek drożdżowy",
 dishPl: "Drożdżówka / placek drożdżowy",
 vibeDe:
 "hefewarm, streuselig-süß, Alltag und Sonntagskaffee — Blech, kein Zopf",
 vibePl:
 "drożdżowo-ciepły, kruszonkowy, codzienność i niedzielna kawa — blacha, nie warkocz",
 originDe:
 "Drożdżówka bzw. Placek drożdżowy ist der klassische polnische Hefekuchen vom Blech: weicher Hefeteig flach ausgezogen, dicke kruszonka (Streusel) oben, optional Apfel- oder Pflaumenscheiben darunter. Das ist weder der geflochtene Hefezopf [Chałka](/de/rezepte/chalka) noch der hohe Gugelhupf [Babka](/de/rezepte/babka) noch die frittierten [Pączki](/de/rezepte/paczki) und auch keine Apfel-Pfannkuchen [Racuchy](/de/rezepte/racuchy-jablka). Am [Sonntagsessen](/de/blog/sonntagsessen-polnisch) darf sie zum Kaffee gehören. Hefe-Gefühl erklärt die [Makowiec-Technik](/de/blog/makowiec-technik). In der Diaspora oft der Blechkuchen, den man samstags backt und sonntags nur noch schneidet.",
 originPl:
 "Drożdżówka / placek drożdżowy to klasyczny polski placek drożdżowy z blachy: miękkie ciasto płasko rozciągnięte, gęsta kruszonka na wierzchu, opcjonalnie jabłko lub śliwka pod spodem. To ani pleciona [chałka](/pl/rezepte/chalka), ani wysoka [babka](/pl/rezepte/babka) z formy, ani smażone [pączki](/pl/rezepte/paczki), ani jabłkowe [racuchy](/pl/rezepte/racuchy-jablka). Przy [obiedzie niedzielnym](/pl/blog/obiad-niedzielny) bywa do kawy. Wyczucie drożdży daje [technika makowca](/pl/blog/makowiec-technika). W diasporze często placek z soboty, który w niedzielę tylko kroisz.",
 shopDe:
 "Für den Hefeteig brauchst du Mehl, Milch, Hefe, Zucker, Ei, Butter und Salz; für die Streusel zusätzliche kalte Butter, Mehl und Zucker; optional Apfel. Hefe und gute Butter findest du oft im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt Hefe oder Mehltyp, ersetze ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Gugelhupf-Form und Frittieröl führen zu [Babka](/de/rezepte/babka) bzw. [Pączki](/de/rezepte/paczki); Flechtwerk gehört zu [Chałka](/de/rezepte/chalka).",
 shopPl:
 "Na ciasto drożdżowe potrzebujesz mąki, mleka, drożdży, cukru, jajka, masła i soli; na kruszonkę dodatkowego zimnego masła, mąki i cukru; opcjonalnie jabłko. Drożdże i dobre masło często kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Brak drożdży lub typu mąki — zamień uczciwie według [zamienników](/pl/blog/zamienniki-skladnikow). Forma babkowa i olej do smażenia prowadzą do [babki](/pl/rezepte/babka) lub [pączków](/pl/rezepte/paczki); splot należy do [chałki](/pl/rezepte/chalka).",
 techniqueDe:
 "Hefe lauwarm aktivieren, Teig elastisch kneten und verdoppeln lassen. Flach aufs Blech drücken — nicht flechten, nicht in Gugelhupf pressen. Streusel aus kalter Butter zu groben Krümeln; dick streuen, damit der Charakter „kruszonka“ bleibt. Optional Obst vor dem Streusel. Zweites Gehen kurz; backen bis goldbraun und durch. Zu heiße Milch tötet Hefe; zu wenig Gehen macht den Placek kompakt; zu wenig Streusel wirkt wie nackter Hefeteig. Hefe-Kontext: [Makowiec-Technik](/de/blog/makowiec-technik). Form-Nachbar: [Chałka](/de/rezepte/chalka) (Zopf), [Babka](/de/rezepte/babka) (Form).",
 techniquePl:
 "Drożdże aktywować na letnio, ciasto elastycznie wyrabiać i podwoić. Płasko na blachę — bez splotu, bez formy babkowej. Kruszonkę z zimnego masła w grube okruchy; sypać gęsto, żeby został charakter „kruszonka”. Opcjonalnie owoce przed kruszonką. Drugie wyrastanie krótko; piec na złoto i wypieczone. Za gorące mleko zabija drożdże; za krótkie wyrastanie zbija placek; za mało kruszonki wygląda jak gołe ciasto. Wyczucie: [technika makowca](/pl/blog/makowiec-technika). Sąsiedzi formy: [chałka](/pl/rezepte/chalka) (warkocz), [babka](/pl/rezepte/babka) (forma).",
 serveDe:
 "In Rechtecken, warm oder lauwarm, zum Kaffee. Menüplatz: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer Zopf will: [Chałka](/de/rezepte/chalka); wer Formkuchen: [Babka](/de/rezepte/babka); wer frittiert: [Pączki](/de/rezepte/paczki); wer Pfanne: [Racuchy](/de/rezepte/racuchy-jablka). Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten. Reste luftdicht — toasten oder kurz aufwärmen.",
 servePl:
 "W prostokątach, ciepłe lub letnie, do kawy. Miejsce w menu: [obiad niedzielny](/pl/blog/obiad-niedzielny). Warkocz: [chałka](/pl/rezepte/chalka); forma: [babka](/pl/rezepte/babka); smażone: [pączki](/pl/rezepte/paczki); patelnia: [racuchy](/pl/rezepte/racuchy-jablka). W [sklepie polskim](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności. Resztki trzymaj szczelnie — krótko podgrzej lub zapiecz jak tosty.",
 diasporaDe:
 "Placek drożdżowy ist diaspora-freundlich: ein Blech, Hefe aus dem Vorrat, Streusel aus Butter-Mehl-Zucker, Obst aus dem Supermarkt. Samstag backen, Sonntag nur schneiden — entlastet den Morgen. Kinder dürfen Streusel reiben; heißer Ofen bei Erwachsenen. Qualität vor drei verschiedenen Hefegebäcken am selben Tag. Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen. Kultur [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 diasporaPl:
 "Placek drożdżowy lubi diasporę: jedna blacha, drożdże ze spiżarni, kruszonka z masła-mąki-cukru, owoce z marketu. Sobota pieczenie, niedziela tylko krojenie — odciąża poranek. Dzieci zetrą kruszonkę; gorący piec u dorosłych. Jakość przed trzema wypiekami drożdżowymi tego samego dnia. W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe. Kultura osobny farsz i osobne ilości.: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 mistakesDe:
 "Mit [Chałka](/de/rezepte/chalka) verwechseln (Zopf). Mit [Babka](/de/rezepte/babka) verwechseln (Form). Mit [Pączki](/de/rezepte/paczki) oder [Racuchy](/de/rezepte/racuchy-jablka) verwechseln. Zu heiße Milch; zu wenig Gehen; zu dünner Streusel. nein.",
 mistakesPl:
 "Mylenie z [chałką](/pl/rezepte/chalka) (warkocz). Mylenie z [babką](/pl/rezepte/babka) (forma). Mylenie z [pączkami](/pl/rezepte/paczki) lub [racuchami](/pl/rezepte/racuchy-jablka). Za gorące mleko; za krótkie wyrastanie; za cienka kruszonka. Nie mieszać ilości i kroków z sąsiednim przepisem.",
 variantsDe:
 "Mit mehr Apfel; mit Pflaume saisonal; ohne Obst nur Streusel; kleinere Teilchen statt ganzes Blech (Fokus bleibt Hefe+Streusel). Passende Nachbarn sind [Chałka](/de/rezepte/chalka), [Babka](/de/rezepte/babka), [Pączki](/de/rezepte/paczki), [Racuchy](/de/rezepte/racuchy-jablka). Guides: [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Makowiec-Technik](/de/blog/makowiec-technik), [Polenladen](/de/blog/polenladen-einkaufen), [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
 variantsPl:
 "Z większą ilością jabłka; ze śliwką sezonowo; bez owoców tylko kruszonka; mniejsze bułeczki zamiast całej blachy (fokus zostaje drożdże+kruszonka). Pasujący sąsiedzi to [chałka](/pl/rezepte/chalka), [babka](/pl/rezepte/babka), [pączki](/pl/rezepte/paczki), [racuchy](/pl/rezepte/racuchy-jablka). Przewodniki: [obiad niedzielny](/pl/blog/obiad-niedzielny), [technika makowca](/pl/blog/makowiec-technika), [sklep polski](/pl/blog/sklep-polski-zakupy), [zamienniki](/pl/blog/zamienniki-skladnikow).",
 },
};
