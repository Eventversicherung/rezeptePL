/**
 * Wave 9 Paket A — FACTS for Żeberka + Rolada śląska.
 * E merges into recipe-articles.ts FACTS map — do not import here until Integrator.
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

export const W9_FACTS_A: Record<string, W9ArticleFacts> = {
 "recipe-zeberka": {
 dishDe: "Żeberka pieczone",
 dishPl: "Żeberka pieczone",
 vibeDe: "ofenwarm, majeranek-würzig, knusprig am Rand",
 vibePl: "z pieca, majerankowo-korzenne, chrupiące na brzegach",
 originDe:
 "Żeberka pieczone sind polnische Ofenrippchen — Marinade mit Senf und [Majeranek](/de/blog/majeranek), dann ruhiges Backen bis die Kanten knuspern. Das ist kein Eintopf und kein [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy): hier entscheidet der Ofen, nicht der Schmortopf mit Würfelfleisch. In vielen Haushalten stehen Żeberka als Sonntags-Fleisch neben dem Klassiker [Kotlet schabowy](/de/rezepte/kotlet-schabowy) — andere Technik, gleicher Menü-Platz. Der Kultur-Rahmen bleibt beim [polnischen Sonntagsessen](/de/blog/sonntagsessen-polnisch); hier bleibt nur das Rezept „Ofenrippchen / Żeberka pieczone“.",
 originPl:
 "Żeberka pieczone to polskie żebra z piekarnika — marynata z musztardą i [majerankiem](/pl/blog/majeranek-leksykon), potem spokojne pieczenie aż brzegi chrupią. To nie gulasz i nie [gulasz wieprzowy](/pl/rezepte/gulasz-wieprzowy): tu decyduje piec, nie garnek z kostką mięsa. W wielu domach żeberka stoją jako niedzielne mięso obok klasyka [kotleta schabowego](/pl/rezepte/kotlet-schabowy) — inna technika, to samo miejsce w menu. Ramy kulturowe zostają przy [obiedzie niedzielnym](/pl/blog/obiad-niedzielny); tu zostaje tylko przepis „żeberka pieczone”.",
 shopDe:
 "Schweinerippchen von der Fleischtheke — gleichmäßig, mit etwas Fett für Saft. Senf, getrockneter Majoran (Polenladen oft aromatischer), Knoblauch, Öl, Salz, Pfeffer. Spezialitäten und Gewürz-Feeling: [Polenladen-Einkaufsguide](/de/blog/polenladen-einkaufen). Majeranek hilft bei der Dosierung; hier zählt die Anwendung in der Marinade. Kein Pflicht-Schmortopf — eine feste Ofenform reicht.",
 shopPl:
 "Żeberka wieprzowe z lady — równe, z odrobiną tłuszczu. Musztarda, majeranek suszony (sklep polski często aromatyczniejszy), czosnek, olej, sól, pieprz. Specjały: [przewodnik po sklepie polskim](/pl/blog/sklep-polski-zakupy). Majeranek zostaje przepisem na leksykonu dawki; tu tylko zastosowanie w marynacie. Nie musisz mieć dutch oven — wystarczy solidne naczynie do pieca.",
 techniqueDe:
 "Tupfe die Rippchen trocken, reibe die Marinade ein und gib ihnen Zeit im Kühlschrank. Backe bei mittlerer Hitze mit etwas Flüssigkeit in der Form, wende zwischendurch und ziehe am Ende knusprig nach. Innere Temperatur und Saftigkeit schlagen die Uhr allein — zu heiß zu früh macht sie außen trocken und innen roh.",
 techniquePl:
 "Osusz żebra, natrzyj marynatą i daj im czas w lodówce. Piecz w średniej temperaturze z odrobiną płynu w naczyniu, przewracaj i na końcu dopiecz do chrupkości. Soczystość ważniejsza niż sam zegar — za gorąco za wcześnie robi je suche z zewnątrz i surowe w środku.",
 serveDe:
 "Heiß mit Kartoffeln, Kraut oder einfachem Salat. Passt in den [Sonntagsessen](/de/blog/sonntagsessen-polnisch)-Plan als ruhiger Fleisch-Mittelpunkt ohne Pfannen-Marathon. Wer denselben Tag paniert, bleibt beim Schabowy als Nachbar. Reste am nächsten Tag im Ofen aufwärmen, nicht in der Mikrowelle ausdörren. Mit [Gulasz](/de/rezepte/gulasz-wieprzowy) nicht verwechseln — andere Form, anderer Charakter.",
 servePl:
 "Gorące z ziemniakami, kapustą lub prostą surówką. Pasuje do [obiadu niedzielnego](/pl/blog/obiad-niedzielny) jako spokojne mięso bez maratonu patelni. Tego samego dnia panierujesz — schabowy zostaje sąsiadem. Resztki odgrzewaj w piecu, nie w mikrofalówce. Nie myl z [gulaszem](/pl/rezepte/gulasz-wieprzowy) — inna forma, inny charakter.",
 diasporaDe:
 "In DE oft einfacher als gedacht: Rippen aus dem Supermarkt, Majoran aus dem Gewürzregal oder [Polenladen](/de/blog/polenladen-einkaufen), Ofen übernimmt die Zeit. Marinade am Samstag, Sonntag nur noch backen — genau die Logik des Sonntags-Guides. Wer Topf-Feeling sucht, liest den [Dutch-Oven-Guide](/de/blog/dutch-oven-kaufberatung); Fokus bleibt Ofenrippen hier.",
 diasporaPl:
 "W DE często prościej niż myślisz: żebra z marketu, majeranek z półki lub [sklepu polskiego](/pl/blog/sklep-polski-zakupy), piec bierze czas. Marynata w sobotę, niedziela tylko pieczenie — logika przewodnika niedzielnego. Kto szuka garnka, czyta [garnek do duszenia](/pl/blog/garnek-do-duszenia); tu zostaje przy żeberkach z pieca.",
 mistakesDe:
 "Zu kurze Marinade, ein zu heißer Ofen ohne Flüssigkeit und zu mageres Fleisch ohne Fett machen die Rippchen trocken. Verwechsle sie nicht mit [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy) — hier zählt Knochen und lange Garzeit.",
 mistakesPl:
 "Za krótka marynata, za gorący piec bez płynu i zbyt chude mięso bez tłuszczu zostawiają żebra suche. Nie myl ich z [gulaszem wieprzowym](/pl/rezepte/gulasz-wieprzowy) — tu liczą się kość i długie pieczenie, nie kostka w garnku.",
 variantsDe:
 "Mit Honig-Senf-Glasur (Hausvariante, ehrlich benennen), mit etwas Chili, oder am Grill statt Ofen — dann andere Textur. [Rolada śląska](/de/rezepte/rolada-slaska) ist geschmorte Roulade, kein Rippen-Ersatz. Schabowy bleibt der panierte Nachbar.",
 variantsPl:
 "Z glazurą miodowo-musztardową (wariant domu), z chili, albo z grilla zamiast pieca — inna tekstura. [Rolada śląska](/pl/rezepte/rolada-slaska) to duszona rolada, nie zamiennik żeber. Schabowy zostaje panierowanym sąsiadem.",
 },
 "recipe-rolada-slaska": {
 dishDe: "Rolada śląska",
 dishPl: "Rolada śląska",
 vibeDe: "geschmort, sonntäglich, soßenreich, zu Kluski",
 vibePl: "duszona, niedzielna, z sosem, do klusek",
 originDe:
 "Rolada śląska ist die geschmorte Fleischroulade der schlesischen Hausmannskost: Senf, Speck, Zwiebel, lange im Topf — klassisch neben [Kluski śląskie](/de/rezepte/kluski-slaskie). Sie teilt die Idee „rollen und schmoren“ mit [Zrazy zawijane](/de/rezepte/zrazy), bleibt aber klar getrennt: Zrazy bleiben bei der Gurken-Senf-Speck-Roulade; Rolada bleibt beim schlesische Sonntags-Pairing mit Kluski und oft milder Zwiebel-Speck-Füllung ohne Gurken-Fokus. Kein Region-Blog und kein Schlesien-Guide — nur dieses Rezept. Menü-Kultur: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 originPl:
 "Rolada śląska to duszona rolada mięsna kuchni śląskiej: musztarda, boczek, cebula, długo w garnku — klasycznie obok [klusek śląskich](/pl/rezepte/kluski-slaskie). Dzieli pomysł „zwinąć i dusić” z [zrazami](/pl/rezepte/zrazy), ale zostaje osobno: zrazy często niosą ogórek i mocniejszą musztardę, rolada śląska lubi łagodniejszy farsz cebulowo-boczkowy i parowanie z kluskami. Kultura menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 shopDe:
 "Nimm dünne Fleischscheiben zum Rollen (Rind oder Schwein), Speck, Zwiebel, Senf und Brühe — dazu Lorbeer und sparsam [Majeranek](/de/blog/majeranek). Ein Topf mit Deckel hält die Wärme; Kaufkriterien stehen im [Dutch-Oven](/de/blog/dutch-oven-kaufberatung)-Guide. Das ist kein flacher [Zrazy](/de/rezepte/zrazy)-Braten ohne Roll-Logik und kein panierter [Schabowy](/de/rezepte/kotlet-schabowy).",
 shopPl:
 "Weź cienkie plastry do zwijania (wołowina lub wieprzowina), boczek, cebulę, musztardę i bulion — plus liść laurowy i oszczędnie [majeranek](/pl/blog/majeranek-leksykon). Garnek z pokrywką trzyma ciepło; kryteria zakupu są w przewodniku [dutch oven](/pl/blog/garnek-do-duszenia). To nie płaskie [zrazy](/pl/rezepte/zrazy) bez logiki rolki i nie panierowany [schabowy](/pl/rezepte/kotlet-schabowy).",
 techniqueDe:
 "Rolle das Fleisch fest ein, brate es an, lösche ab und schmore zugedeckt bis gabelweich. Die Soße zum Schluss abschmecken und den Deckel geschlossen halten — sonst trocknet die Oberfläche. Nicht mit den Schritten von [Zrazy](/de/rezepte/zrazy) verwechseln: andere Füll-Priorität, gleiches ruhiges Schmoren.",
 techniquePl:
 "Zwiń mięso szczelnie, obsmaż, zalej i duś pod przykryciem do miękkości. Sos dopraw na końcu i trzymaj pokrywkę zamkniętą — inaczej powierzchnia wysycha. Nie myl kroków ze [zrazami](/pl/rezepte/zrazy): inna hierarchia farszu, to samo spokojne duszenie.",
 serveDe:
 "Serviere die Rolada in Scheiben mit Soße und [Kluski śląskie](/de/rezepte/kluski-slaskie) — das klassische Pairing. Alternativ passen Kartoffeln oder Kasza. Im [Sonntagsessen](/de/blog/sonntagsessen-polnisch) ist sie der Schmor-Mittelpunkt, wenn Zeit da ist. [Zrazy](/de/rezepte/zrazy) bleiben verwandt, aber ein eigenes Rezept.",
 servePl:
 "Podawaj roladę w plastrach z sosem i [kluskami śląskimi](/pl/rezepte/kluski-slaskie) — klasyczne połączenie. Alternatywnie pasują ziemniaki albo kasza. W [obiedzie niedzielnym](/pl/blog/obiad-niedzielny) jest daniem duszonym, gdy jest czas. [Zrazy](/pl/rezepte/zrazy) zostają pokrewne, ale osobnym przepisem.",
 diasporaDe:
 "In deutschen Wohnungen lohnt der schwere Topf: Anbraten auf dem Herd, dann niedrige Hitze oder Ofen. Der [Dutch-Oven-Kaufguide](/de/blog/dutch-oven-kaufberatung) hilft bei Größe und Material — ohne Bigos-Zeiten zu vermischen.",
 diasporaPl:
 "W niemieckich mieszkaniach opłaca się ciężki garnek: obsmażenie na płycie, potem niska temperatura albo piekarnik. [Poradnik dutch oven](/pl/blog/garnek-do-duszenia) pomaga przy rozmiarze — osobny farsz i osobne ilości, bez mieszania z rytmem bigosu.",
 mistakesDe:
 "Lose Rollen und zu kurze Schmorzeit lassen die Füllung austreten oder das Fleisch zäh. Binde die Rouladen fest und gib dem Topf Zeit — und verwechsle die Technik nicht mit [Zrazy](/de/rezepte/zrazy).",
 mistakesPl:
 "Luźne rolady i za krótkie duszenie wypuszczają farsz albo zostawiają mięso twarde. Mocno zwiąż rolady i daj garnkowi czas — nie myl techniki ze [zrazami](/pl/rezepte/zrazy) i nie przesadzaj z majerankiem w sosie.",
 variantsDe:
 "Mit Pilzen in der Füllung (Hausvariante), Schwein statt Rind, oder Soße mit etwas Śmietana. [Żeberka pieczone](/de/rezepte/zeberka) sind Ofenrippen — anderer Charakter. Zrazy bleiben die Gurken-Roulade.",
 variantsPl:
 "Z grzybami w farszu (wariant domu), wieprzowina zamiast wołowiny, sos ze śmietaną. [Żeberka pieczone](/pl/rezepte/zeberka) to żebra z pieca — inny charakter. Zrazy zostają przepisem na rolady z ogórkiem.",
 },
};
