/**
 * Wave 13 Paket C — FACTS for chalka + pasztet.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W13_FACTS_C } from "./recipe-articles-w13-c";
 * Object.assign(FACTS, …, W13_FACTS_C);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Chałka = geflochtener Hefezopf/Laib ≠ Babka (Gugelhupf) ≠ Pączki ≠ Racuchy ≠ Drożdżówka (Streusel-Blech → /rezepte/drozdzowka)
 * - Pasztet drobiowy = Haus-Pastete ≠ Kaszanka ≠ Kotlet mielony ≠ Klopsy
 * - Wielkanoc / Sonntagsessen bleiben Anlass-/Kultur-Owner; hier nur Cook
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

export const W13_FACTS_C: Record<string, ArticleFacts> = {
 "recipe-chalka": {
 dishDe: "Chałka",
 dishPl: "Chałka",
 vibeDe: "weich-süßlich, geflochten, goldbraun mit Sesam — Brotlaib, kein Gugelhupf",
 vibePl: "miękko-słodkawa, pleciona, złota z sezamem — bochenek, nie babka z formy",
 originDe:
 "Chałka ist das Rezept für das geflochtene helle Hefebrot der polnischen Fest- und Alltagsküche: Zopf oder Laib, oft mit Ei bestrichen und Sesam — angeschnitten zum Frühstück, Ostern oder Sonntagskaffee. Das ist weder der hohe Hefegugelhupf [Babka](/de/rezepte/babka) noch die frittierten [Pączki](/de/rezepte/paczki) noch die Apfel-Pfannkuchen [Racuchy](/de/rezepte/racuchy-jablka). Wer Streusel-Hefekuchen vom Blech sucht: [Drożdżówka](/de/rezepte/drozdzowka) — anderer Rezept. Menürahmen und Timeline bleiben im [Wielkanoc Speiseplan](/de/blog/wielkanoc-speiseplan) oder im [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch); hier liegt der enge Brot-Fokus. In der Diaspora oft der Laib, den man am Vortag backt und am Festmorgen nur noch schneidet.",
 originPl:
 "Chałka to przepis na jasny pleciony chleb drożdżowy polskiej kuchni świątecznej i codziennej — warkocz lub bochenek, często z jajkiem i sezamem — krojony na śniadanie, Wielkanoc lub niedzielną kawę. To ani wysoka [babka](/pl/rezepte/babka) z formy, ani smażone [pączki](/pl/rezepte/paczki), ani jabłkowe [racuchy](/pl/rezepte/racuchy-jablka). Kto szuka placka drożdżowego z kruszonką: [drożdżówka](/pl/rezepte/drozdzowka) — inny Rezept. Ramę menu zostawiamy w [menu wielkanocnym](/pl/blog/menu-wielkanocne) lub [obiadzie niedzielnym](/pl/blog/obiad-niedzielny); tu wąski fokus pieczywa. W diasporze często bochenek z dnia wcześniej, rano tylko kroje",
 shopDe:
 "Mehl, Milch, Hefe, Zucker, Eier, Butter, Salz, optional Sesam — Sesam und gute Hefe oft im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt etwas: ehrlich ersetzen laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Hefe-Gefühl: [Makowiec-Technik](/de/blog/makowiec-technik). Form: Backblech und Zopf — keine Gugelhupf-Form wie bei [Babka](/de/rezepte/babka).",
 shopPl:
 "Mąka, mleko, drożdże, cukier, jajka, masło, sól, opcjonalnie sezam — sezam i dobre drożdże często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Brak: uczciwa zamiana według [zamienników](/pl/blog/zamienniki-skladnikow). Wyczucie drożdży: [technika makowca](/pl/blog/makowiec-technika), bez mieszania z makowcem lub babką. Forma: blacha i warkocz — nie forma babkowa jak [babka](/pl/rezepte/babka).",
 techniqueDe:
 "Hefe lauwarm aktivieren, Teig elastisch kneten und verdoppeln lassen. Drei oder vier Stränge gleich schwer, fest flechten, Enden unterschieben. Zweites Gehen, Ei-Wash, Sesam. Backen bis goldbraun — zu heiß verbrennt die Oberfläche, bevor der Kern gar ist. Zu lockerer Zopf fällt auseinander; zu straff wird er kompakt. Schneiden erst nach kurzem Abkühlen — heiß reißt die Krume.",
 techniquePl:
 "Drożdże aktywować na letnio, ciasto elastycznie wyrabiać i podwoić. Trzy lub cztery wałki równej wagi, mocno spleść, końce spiąć. Drugie wyrastanie, jajko, sezam. Piec na złoto — za gorąco pali skórkę przed środkiem. Za luźny warkocz się rozpada; za ciasny robi się zbity. Kroić po krótkim studzeniu — na gorąco miękisz się rwie.",
 serveDe:
 "In Scheiben mit Butter, Konfitüre oder zum Ostertisch neben Eiern und Wurst. Menüplatz: [Wielkanoc](/de/blog/wielkanoc-speiseplan) oder [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer Formkuchen will: [Babka](/de/rezepte/babka). Wer frittierte Krapfen: [Pączki](/de/rezepte/paczki). Reste luftdicht — toasten am Folgetag.",
 servePl:
 "W kromki z masłem, konfiturą albo przy stole obok jaj i wędlin. Miejsce w menu: [menu wielkanocne](/pl/blog/menu-wielkanocne) lub [obiad niedzielny](/pl/blog/obiad-niedzielny). Forma: [babka](/pl/rezepte/babka). Smażone: [pączki](/pl/rezepte/paczki). Resztki szczelnie — nazajutrz tosty.",
 diasporaDe:
 "In DE oft Samstag backen, Sonntag nur schneiden — entlastet den Ostermorgen. Kinder dürfen Stränge rollen; heißer Ofen bei Erwachsenen. Ein Laib reicht für viele Gäste; Qualität vor drei verschiedenen Hefegebäcken. Einkauf früh im [Polenladen](/de/blog/polenladen-einkaufen). Speiseplan nicht als Rezept ersetzen — [Wielkanoc](/de/blog/wielkanoc-speiseplan) bleibt Anlass.",
 diasporaPl:
 "W DE często piecz sobotę, niedzielę tylko kroić — odciąża poranek. Dzieci uwałkują wałki; gorący piec u dorosłych. Jeden bochenek wystarczy dla gości; jakość przed trzema wypiekami drożdżowymi. Zakupy wcześniej w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Nie kopiuj planu menu — [menu wielkanocne](/pl/blog/menu-wielkanocne) zostaje okazją.",
 mistakesDe:
 "Zu heiße Milch (Hefe tot). Gugelhupf-Form statt Zopf — verwechseln mit [Babka](/de/rezepte/babka). Mit [Pączki](/de/rezepte/paczki) oder [Racuchy](/de/rezepte/racuchy-jablka) verwechseln. Zu kurzes Gehen. Den Speiseplan hier nicht ersetzen — dafür gibt es [Wielkanoc](/de/blog/wielkanoc-speiseplan).",
 mistakesPl:
 "Za gorące mleko (zabite drożdże). Forma babkowa zamiast warkocza — mylenie z [babką](/pl/rezepte/babka). Mylenie z [pączkami](/pl/rezepte/paczki) lub [racuchami](/pl/rezepte/racuchy-jablka). Za krótkie wyrastanie. Roszczenie rozróżnienie menu zamiast [menu wielkanocnego](/pl/blog/menu-wielkanocne).",
 variantsDe:
 "Mit Rosinen im Teig (Hausbrauch, ehrlich im Title); ohne Sesam; kleinerer Zopf. Passende Nachbarn sind [Babka](/de/rezepte/babka), [Pączki](/de/rezepte/paczki), [Racuchy](/de/rezepte/racuchy-jablka). Anlass: [Wielkanoc](/de/blog/wielkanoc-speiseplan), [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen.",
 variantsPl:
 "Z rodzynkami w cieście (zwyczaj domu, uczciwie w tytule); bez sezamu; mniejszy warkocz. Pasujący sąsiedzi to [babka](/pl/rezepte/babka), [pączki](/pl/rezepte/paczki), [racuchy](/pl/rezepte/racuchy-jablka). Okazja: [menu wielkanocne](/pl/blog/menu-wielkanocne), [obiad niedzielny](/pl/blog/obiad-niedzielny). W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe.",
 },

 "recipe-pasztet": {
 dishDe: "Pasztet drobiowy",
 dishPl: "Pasztet drobiowy",
 vibeDe: "fein, streichfähig bis schnittfest, kühl auf Brot — Pastete, keine Blutwurst",
 vibePl: "delikatny, do smarowania lub krojenia, chłodny na chleb — pasztet, nie kaszanka",
 originDe:
 "Pasztet ist das Rezept für die gebackene Haus-Pastete der polnischen Fest- und Sonntagsküche — hier die klare Linie drobiowy: Geflügelleber mit Zwiebel, Karotte, Ei und Brötchen, im Kasten gebacken, kalt angeschnitten. Das ist weder die gebratene Blutwurst [Kaszanka](/de/rezepte/kaszanka) noch der panierte [Kotlet mielony](/de/rezepte/kotlet-mielony) noch Kugeln in Soße ([Klopsy](/de/rezepte/klopsy)). Arten und Qualitätslesen von Wurst bleiben im [Kiełbasa-Arten-Lexikon](/de/blog/kielbasa-arten) — hier nur das Pasteten-Rezept. Menüplatz: [Sonntagsessen](/de/blog/sonntagsessen-polnisch) oder [Wielkanoc](/de/blog/wielkanoc-speiseplan).",
 originPl:
 "Pasztet to przepis na pieczona pasteta domowa kuchni świątecznej i niedzielnej — tu jasna linia drobiowa: wątróbka z cebulą, marchewką, jajkiem i bułką, w keksówce, zimna pokrojona. To ani smażona [kaszanka](/pl/rezepte/kaszanka), ani panierowany [kotlet mielony](/pl/rezepte/kotlet-mielony), ani kulki w sosie ([klopsy](/pl/rezepte/klopsy)). Typy i jakość wędlin zostają w [leksykonie rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy) — tu tylko przepis na pasztet. Miejsce w menu: [obiad niedzielny](/pl/blog/obiad-niedzielny) lub [menu wielkanocne](/pl/blog/menu-wielkanocne).",
 shopDe:
 "Geflügelleber frisch oder TK, Zwiebel, Karotte, Butter, Eier, altes Brötchen, Majeranek — Leber und Majeranek oft im [Polenladen](/de/blog/polenladen-einkaufen). Meerrettich/Senf zum Servieren. Wer Blutwurst sucht, bleibt bei [Kaszanka](/de/rezepte/kaszanka). Wer paniertes Hack will: [Kotlet mielony](/de/rezepte/kotlet-mielony). Aufschnitt-Kontext.: [Kiełbasa-Arten](/de/blog/kielbasa-arten).",
 shopPl:
 "Wątróbka drobiowa świeża lub mrożona, cebula, marchew, masło, jajka, czerstwa bułka, majeranek — wątróbka i majeranek często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Chrzan/musztarda do podania. Kto szuka kaszanki: [kaszanka](/pl/rezepte/kaszanka). Panierowane mielone: [kotlet mielony](/pl/rezepte/kotlet-mielony). Kontekst wędlin osobny farsz i osobne ilości.: [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy).",
 techniqueDe:
 "Leber kurz mit Gemüse anbraten, nicht ausdörren. Brötchen ausdrücken, fein pürieren — Körner stören den Schnitt. Wasserbad schützt vor Rissen und trockener Kruste. Kalt stellen vor dem Resetzen: warm bricht die Masse. Zu viel Flüssigkeit macht Matsch; zu wenig Brötchen macht krümelig. Abschmecken: Majeranek sparsam, Salz nach dem Pürieren.",
 techniquePl:
 "Wątróbkę krótko z warzywami — nie wysuszać. Bułkę odcisnąć, zmiksować gładko — ziarna psują plaster. Kąpiel wodna chroni przed pęknięciami i suchą skórką. Schłodzić przed krojeniem: na ciepło masa się kruszy. Za dużo płynu = papka; za mało bułki = krucha. Dopraw: majeranek oszczędnie, sól po zmiksowaniu.",
 serveDe:
 "Kalt in Scheiben auf Platte mit Brot, Meerrettich, Senf, optional Gurke. Festbuffet neben [Wielkanoc](/de/blog/wielkanoc-speiseplan); Alltag: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Nicht mit [Kaszanka](/de/rezepte/kaszanka) mischen — anderer Charakter. Reste luftdicht kühlen, zeitnah verbrauchen.",
 servePl:
 "Zimny w plasterkach na półmisku z chlebem, chrzanem, musztardą, opcjonalnie ogórkiem. Bufet obok [menu wielkanocnego](/pl/blog/menu-wielkanocne); codzienność: [obiad niedzielny](/pl/blog/obiad-niedzielny). Nie mieszać z [kaszanką](/pl/rezepte/kaszanka). Resztki szczelnie w lodówce, zużyć szybko.",
 diasporaDe:
 "In DE oft Freitagabend backen, Samstag kühlen, Sonntag schneiden — entlastet den Festmorgen. TK-Leber ehrlich benennen und gut abtropfen. Kinder dürfen Brötchen einweichen; heißer Ofen und Mixer bei Erwachsenen. Ein Kasten reicht für Gäste; Qualität vor drei Fleischaufschnitten. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten.",
 diasporaPl:
 "W DE często piecz w piątek, sobotę chłodź, niedzielę kroić — odciąża poranek. Mrożona wątróbka — nazwać uczciwie i odsączyć. Dzieci namoczą bułkę; gorący piec i blender u dorosłych. Jedna keksówka wystarczy; jakość przed trzema wędlinami. W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności.",
 mistakesDe:
 "Leber verkochen (trocken/bitter). Mit [Kaszanka](/de/rezepte/kaszanka) oder [Kotlet mielony](/de/rezepte/kotlet-mielony) verwechseln. Warm schneiden. Den Speiseplan hier nicht ersetzen — dafür gibt es [Wielkanoc](/de/blog/wielkanoc-speiseplan).",
 mistakesPl:
 "Wygotowana wątróbka (sucha/gorzka). Mylenie z [kaszanką](/pl/rezepte/kaszanka) lub [kotletem mielonym](/pl/rezepte/kotlet-mielony). Krojenie na ciepło. Kradzież fokus rodzajów kiełbasy zamiast [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy). Roszczenie menu zamiast [menu wielkanocnego](/pl/blog/menu-wielkanocne).",
 variantsDe:
 "Mit etwas Speck im Teig (Hausbrauch); mildere Kinderportion ohne starken Majeranek. Passende Nachbarn sind [Kaszanka](/de/rezepte/kaszanka) (≠ Pastete), [Kotlet mielony](/de/rezepte/kotlet-mielony), [Klopsy](/de/rezepte/klopsy). Guides: [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Wielkanoc](/de/blog/wielkanoc-speiseplan), [Kiełbasa-Arten](/de/blog/kielbasa-arten), [Polenladen](/de/blog/polenladen-einkaufen).",
 variantsPl:
 "Z odrobiną boczku w masie (zwyczaj domu); łagodniej dla dzieci bez mocnego majeranku. Pasujący sąsiedzi to [kaszanka](/pl/rezepte/kaszanka) (≠ pasztet), [kotlet mielony](/pl/rezepte/kotlet-mielony), [klopsy](/pl/rezepte/klopsy). Przewodniki: [obiad niedzielny](/pl/blog/obiad-niedzielny), [menu wielkanocne](/pl/blog/menu-wielkanocne), [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy), [sklep polski](/pl/blog/sklep-polski-zakupy).",
 },
};
