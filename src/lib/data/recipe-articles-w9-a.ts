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
      "Żeberka pieczone sind polnische Ofenrippchen — Marinade mit Senf und [Majeranek](/de/blog/majeranek), dann ruhiges Backen bis die Kanten knuspern. Das ist kein Eintopf und kein [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy): hier entscheidet der Ofen, nicht der Schmortopf mit Würfelfleisch. In vielen Haushalten stehen Żeberka als Sonntags-Fleisch neben dem Klassiker [Kotlet schabowy](/de/rezepte/kotlet-schabowy) — andere Technik, gleicher Menü-Platz. Der Kultur-Rahmen bleibt beim [polnischen Sonntagsessen](/de/blog/sonntagsessen-polnisch); diese Money Page owns nur den Cook-Intent „Ofenrippchen / Żeberka pieczone“.",
    originPl:
      "Żeberka pieczone to polskie żebra z piekarnika — marynata z musztardą i [majerankiem](/pl/blog/majeranek-leksykon), potem spokojne pieczenie aż brzegi chrupią. To nie gulasz i nie [gulasz wieprzowy](/pl/rezepte/gulasz-wieprzowy): tu decyduje piec, nie garnek z kostką mięsa. W wielu domach żeberka stoją jako niedzielne mięso obok klasyka [kotleta schabowego](/pl/rezepte/kotlet-schabowy) — inna technika, to samo miejsce w menu. Ramy kulturowe zostają przy [obiedzie niedzielnym](/pl/blog/obiad-niedzielny); ta money page owns tylko cook-intent „żeberka pieczone”.",
    shopDe:
      "Schweinerippchen von der Fleischtheke — gleichmäßig, mit etwas Fett für Saft. Senf, getrockneter Majoran (Polenladen oft aromatischer), Knoblauch, Öl, Salz, Pfeffer. Spezialitäten und Gewürz-Feeling: [Polenladen-Einkaufsguide](/de/blog/polenladen-einkaufen). Majeranek bleibt Lexikon-Owner für Dosierung und Oregano-Abgrenzung; hier nur die Anwendung in der Marinade. Kein Pflicht-Schmortopf — eine feste Ofenform reicht.",
    shopPl:
      "Żeberka wieprzowe z lady — równe, z odrobiną tłuszczu. Musztarda, majeranek suszony (sklep polski często aromatyczniejszy), czosnek, olej, sól, pieprz. Specjały: [przewodnik po sklepie polskim](/pl/blog/sklep-polski-zakupy). Majeranek zostaje ownerem leksykonu dawki; tu tylko zastosowanie w marynacie. Nie musisz mieć dutch oven — wystarczy solidne naczynie do pieca.",
    techniqueDe:
      "Trocken tupfen, Marinade einreiben, Zeit geben. Mittelheißer Ofen, Flüssigkeit in der Form gegen Anbrennen, wenden, am Ende knusprig nachziehen. Innere Temperatur und Saftigkeit schlagen die Uhr allein. Zu heiß zu früh = trocken außen, roh innen.",
    techniquePl:
      "Osuszyć, natrzeć marynatą, dać czas. Średni piec, płyn w naczyniu przeciw przypaleniu, przewracać, na końcu dopiec do chrupkości. Soczystość ważniejsza niż sam zegar. Za gorąco za wcześnie = suche z zewnątrz, surowe w środku.",
    serveDe:
      "Heiß mit Kartoffeln, Kraut oder einfachem Salat. Passt in den [Sonntagsessen](/de/blog/sonntagsessen-polnisch)-Plan als ruhiger Fleisch-Mittelpunkt ohne Pfannen-Marathon. Wer denselben Tag paniert, bleibt beim Schabowy als Nachbar. Reste am nächsten Tag im Ofen aufwärmen, nicht in der Mikrowelle ausdörren. Mit [Gulasz](/de/rezepte/gulasz-wieprzowy) nicht verwechseln — andere Form, anderer Intent.",
    servePl:
      "Gorące z ziemniakami, kapustą lub prostą surówką. Pasuje do [obiadu niedzielnego](/pl/blog/obiad-niedzielny) jako spokojne mięso bez maratonu patelni. Tego samego dnia panierujesz — schabowy zostaje sąsiadem. Resztki odgrzewaj w piecu, nie w mikrofalówce. Nie myl z [gulaszem](/pl/rezepte/gulasz-wieprzowy) — inna forma, inny intent.",
    diasporaDe:
      "In DE oft einfacher als gedacht: Rippen aus dem Supermarkt, Majoran aus dem Gewürzregal oder [Polenladen](/de/blog/polenladen-einkaufen), Ofen übernimmt die Zeit. Marinade am Samstag, Sonntag nur noch backen — genau die Logik des Sonntags-Guides. Wer Topf-Feeling sucht, liest den [Dutch-Oven-Guide](/de/blog/dutch-oven-kaufberatung) descriptiv; Primary bleibt Ofenrippen hier.",
    diasporaPl:
      "W DE często prościej niż myślisz: żebra z marketu, majeranek z półki lub [sklepu polskiego](/pl/blog/sklep-polski-zakupy), piec bierze czas. Marynata w sobotę, niedziela tylko pieczenie — logika przewodnika niedzielnego. Kto szuka garnka, czyta [garnek do duszenia](/pl/blog/garnek-do-duszenia) opisowo; primary zostaje przy żeberkach z pieca.",
    mistakesDe:
      "Zu kurze Marinade, zu heißer Ofen ohne Flüssigkeit, mit Gulasz verwechseln, Majeranek-Primary stehlen, zu mageres Fleisch ohne Fettpolster.",
    mistakesPl:
      "Za krótka marynata, za gorący piec bez płynu, mylenie z gulaszem, kradzież primary majeranku, zbyt chude mięso bez tłuszczu.",
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
      "Rolada śląska ist die geschmorte Fleischroulade der schlesischen Hausmannskost: Senf, Speck, Zwiebel, lange im Topf — klassisch neben [Kluski śląskie](/de/rezepte/kluski-slaskie). Sie teilt die Idee „rollen und schmoren“ mit [Zrazy zawijane](/de/rezepte/zrazy), bleibt aber klar getrennt: Zrazy ownen die Gurken-Senf-Speck-Roulade; Rolada ownen das schlesische Sonntags-Pairing mit Kluski und oft milder Zwiebel-Speck-Füllung ohne Gurken-Primary. Kein Region-Blog und kein „Schlesien“-Pillar — nur Cook-Intent auf dieser URL. Menü-Kultur: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    originPl:
      "Rolada śląska to duszona rolada mięsna kuchni śląskiej: musztarda, boczek, cebula, długo w garnku — klasycznie obok [klusek śląskich](/pl/rezepte/kluski-slaskie). Dzieli pomysł „zwinąć i dusić” z [zrazami zawijanymi](/pl/rezepte/zrazy), ale zostaje osobno: zrazy owną roladę z ogórkiem-musztardą-boczkiem; rolada owną śląskie pairing z kluskami i często łagodniejszym farszem cebulowo-boczkowym bez ogórka jako primary. Bez bloga regionalnego — tylko cook-intent na tym URL. Kultura menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
    shopDe:
      "Dünne Fleischscheiben zum Rollen (Rind oder Schwein), Speck, Zwiebel, Senf, Brühe, Lorbeer, sparsam [Majeranek](/de/blog/majeranek). Topf mit Deckel — Kaufkriterien im [Dutch-Oven-Guide](/de/blog/dutch-oven-kaufberatung) (descriptiv, Gear-Owner bleibt dort). Beilage-Kartoffeln oder Stärke für Kluski separat einkaufen.",
    shopPl:
      "Cienkie plastry do zwijania (wołowina lub wieprzowina), boczek, cebula, musztarda, bulion, liść laurowy, oszczędnie [majeranek](/pl/blog/majeranek-leksykon). Garnek z pokrywką — kryteria w [poradniku garnka](/pl/blog/garnek-do-duszenia) (opisowo). Ziemniaki lub skrobia na kluski osobno.",
    techniqueDe:
      "Fest rollen, anbraten, ablöschen, zugedeckt schmoren bis gabelweich. Soße abschmecken. Deckel zu — sonst trocknet die Oberfläche. Nicht mit Zrazy-Schritten verwechseln: andere Füll-Priorität, gleiches ruhiges Schmoren.",
    techniquePl:
      "Szczelnie zwinąć, obsmażyć, zalać, dusić pod przykryciem do miękkości. Sos doprawić. Pokrywka zamknięta. Nie mylić kroków ze zrazami: inna hierarchia farszu, to samo spokojne duszenie.",
    serveDe:
      "In Scheiben mit Soße und [Kluski śląskie](/de/rezepte/kluski-slaskie) — das klassische Pairing. Alternativ Kartoffeln oder Kasza (siehe Kasza-Guide descriptiv). Im [Sonntagsessen](/de/blog/sonntagsessen-polnisch) als Schmor-Mittelpunkt, wenn Zeit da ist. [Zrazy](/de/rezepte/zrazy) bleiben die verwandte, aber eigene Money Page.",
    servePl:
      "W plastrach z sosem i [klusami śląskimi](/pl/rezepte/kluski-slaskie) — klasyczne pairing. Alternatywnie ziemniaki lub kasza. W [obiedzie niedzielnym](/pl/blog/obiad-niedzielny) jako danie duszone, gdy jest czas. [Zrazy](/pl/rezepte/zrazy) zostają pokrewną, ale osobną money page.",
    diasporaDe:
      "In deutschen Wohnungen lohnt der schwere Topf: Anbraten auf dem Herd, dann niedrige Hitze oder Ofen. Der [Dutch-Oven-Kaufguide](/de/blog/dutch-oven-kaufberatung) hilft bei Größe und Material — ohne Bigos-Primary zu stehlen. Majeranek und Polenladen bleiben Nachbarn; Ownership der Roulade liegt hier.",
    diasporaPl:
      "W niemieckich mieszkaniach opłaca się ciężki garnek: obsmażenie na płycie, potem niska temperatura lub piekarnik. [Poradnik dutch oven](/pl/blog/garnek-do-duszenia) pomaga przy rozmiarze — bez kradzieży primary bigosu. Majeranek i sklep polski zostają sąsiadami; ownership rolady jest tutaj.",
    mistakesDe:
      "Lose Rollen, zu kurze Schmorzeit, mit Zrazy-Primary verwechseln, Region-Blog-KW stehlen, zu viel Majoran in der Soße.",
    mistakesPl:
      "Luźne rolady, za krótkie duszenie, mylenie z primary zrazów, kradzież KW bloga regionalnego, za dużo majeranku w sosie.",
    variantsDe:
      "Mit Pilzen in der Füllung (Hausvariante), Schwein statt Rind, oder Soße mit etwas Śmietana. [Żeberka pieczone](/de/rezepte/zeberka) sind Ofenrippen — anderer Intent. Zrazy bleiben Gurken-Roulade-Owner.",
    variantsPl:
      "Z grzybami w farszu (wariant domu), wieprzowina zamiast wołowiny, sos ze śmietaną. [Żeberka pieczone](/pl/rezepte/zeberka) to żebra z pieca — inny intent. Zrazy zostają ownerem rolady z ogórkiem.",
  },
};
