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
      "Babka (Babka wielkanocna) ist der polnische Hefegugelhupf aus der Form — oft Ostern, manchmal Sonntagskaffee. Sie ist kein gerollter Mohnkuchen und kein Käsekuchen: eigene Form, eigener Rezept „Babka Rezept“. Der Menü-Rahmen bleibt bei der [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan); Hefe- und Ofengeduld im [Makowiec-Technik](/de/blog/makowiec-technik)-Guide, ohne dessen Mohn-Rollen-Hitze, Feuchtigkeit oder Garzeit falsch einschätzen. [Makowiec](/de/rezepte/makowiec) bleibt die gerollte Wigilia-Linie; [Sernik](/de/rezepte/sernik) die Twaróg-Linie.",
    originPl:
      "Babka (babka wielkanocna) to polskie ciasto drożdżowe z formy — często na Wielkanoc, czasem do niedzielnej kawy. To nie rolada makowa i nie sernik: własna forma, własny Rezept „babka przepis”. Artykuł o okazji zostaje [menu wielkanocne](/pl/blog/menu-wielkanocne); wyczucie drożdży i pieca w [technice makowca](/pl/blog/makowiec-technika), osobny farsz i osobne ilości. rolady makowej. [Makowiec](/pl/rezepte/makowiec) zostaje linią wigilijną; [sernik](/pl/rezepte/sernik) linią twarogową.",
    shopDe:
      "Mehl 405/550, Frisch- oder Trockenhefe, Milch, Butter, Eier, Zucker, Vanille oder Zitronenschale, Puderzucker, gut gefettete Gugelhupf-/Babka-Form. Hefe und oft die Form im [Polenladen](/de/blog/polenladen-einkaufen). Wenn etwas fehlt: [Zutaten ersetzen](/de/blog/ersatzprodukte-de). Hefe-Kontext: vor dem Einkauf [Makowiec-Technik](/de/blog/makowiec-technik) — Mengen bleiben hier.",
    shopPl:
      "Mąka 405/550, drożdże świeże lub suszone, mleko, masło, jajka, cukier, wanilia lub skórka cytryny, cukier puder, dobrze natłuszczona forma babkowa. Drożdże i często forma w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Gdy czegoś brakuje: [zamienniki składników](/pl/blog/zamienniki-skladnikow). Wyczucie drożdży: przed zakupami [technika makowca](/pl/blog/makowiec-technika) — ilości zostają tu.",
    techniqueDe:
      "Hefe lauwarm aktivieren, Teig elastisch kneten und verdoppeln lassen, Form nicht überfüllen, zweites Gehen, mittlere Ofentemperatur, Stäbchenprobe, stürzen nach kurzer Ruhe. Zu heiß = dunkle Kruste, roher Kern — dieselbe Ofengeduld wie im [Makowiec-Technik](/de/blog/makowiec-technik)-Guide, aber ohne Rollen und ohne Mohnmasse. Keine Füll-Spirale wie bei [Makowiec](/de/rezepte/makowiec); keine Quarkmasse wie bei [Sernik](/de/rezepte/sernik).",
    techniquePl:
      "Drożdże aktywować na letnio, ciasto elastycznie wyrabiać i podwoić, nie przepełniać formy, drugie wyrastanie, średnia temperatura pieca, patyczek, wyjmować po krótkim odpoczynku. Za gorąco = ciemna skórka, surowy środek — ta sama cierpliwość pieca co w [technice makowca](/pl/blog/makowiec-technika), ale bez zwijania i bez masy makowej. Bez spirali jak w [makowcu](/pl/rezepte/makowiec); bez masy twarogowej jak w [serniku](/pl/rezepte/sernik).",
    serveDe:
      "Abgekühlt mit Puderzucker oder leichter Glasur, Kaffee oder Tee. Am [Wielkanoc](/de/blog/wielkanoc-speiseplan)-Tisch oft neben Eiern und Żurek — Speiseplan bleibt Menü-Artikel, Babka nur das Gebäck. Andere Festtagsüße: [Sernik](/de/rezepte/sernik) oder gerollt [Makowiec](/de/rezepte/makowiec). Frittiert am Fettdonnerstag: [Pączki](/de/rezepte/paczki) — anderer Anlass, anderes Gericht.",
    servePl:
      "Ostudzone z cukrem pudrem lub lekkim lukrem, kawa albo herbata. Przy [menu wielkanocnym](/pl/blog/menu-wielkanocne) często obok jajek i żurku — artykuł menu zostaje przepisem na planu, babka tylko wypiekiem. Inne słodkości: [sernik](/pl/rezepte/sernik) albo zwinięty [makowiec](/pl/rezepte/makowiec). Smażone na Tłusty Czwartek: [pączki](/pl/rezepte/paczki) — inna okazja, inny fokus.",
    diasporaDe:
      "In DE rettet Backen am Vortag den Ostersonntagmorgen. Gugelhupfform aus dem Haushaltsregal ist legitim — Name Babka bleibt klar. Fertigbabka aus dem [Polenladen](/de/blog/polenladen-einkaufen) ist Notfall, kein Scheitern. Kulturrahmen ohne Rezept-Steal: [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan).",
    diasporaPl:
      "W DE pieczenie dzień wcześniej ratuje niedzielny ranek wielkanocny. Forma babkowa z domowej szafki jest w porządku — nazwa babka zostaje czytelna. Gotowa babka ze [sklepu polskiego](/pl/blog/sklep-polski-zakupy) to awaria, nie porażka. Ramy kulturowe bez kradzieży przepisu: [menu wielkanocne](/pl/blog/menu-wielkanocne).",
    mistakesDe:
      "Zu heiße Milch (Hefe tot), zu viel Mehl, Form überfüllt, zu heißer Ofen, zu früh stürzen, Makowiec-/Sernik-/Pączki-Hitze, Feuchtigkeit oder Garzeit falsch einschätzen.",
    mistakesPl:
      "Za gorące mleko (zabite drożdże), za dużo mąki, przepełniona forma, zbyt gorący piec, zbyt wczesne wyjmowanie, kradzież fokus makowca/sernika/pączków w title, roszczenie menu wielkanocnego jako Rezeptseitea.",
    variantsDe:
      "Mit Rosinen, Kakao-Marmor (Hausbrauch), Zitronenglasur. Kleinerer Napfkuchen für kleinere Öfen. Mohnrolle bleibt [Makowiec](/de/rezepte/makowiec); Käsekuchen [Sernik](/de/rezepte/sernik); Honig-Gewürz [Piernik](/de/rezepte/piernik). Geflochtener Hefezopf/Laib (nicht Gugelhupf): [Chałka](/de/rezepte/chalka). Hefe-Kontext: [Makowiec-Technik](/de/blog/makowiec-technik). Anlass: [Wielkanoc](/de/blog/wielkanoc-speiseplan).",
    variantsPl:
      "Z rodzynkami, marmurkiem kakaowym (zwyczaj domu), lukrem cytrynowym. Mniejsza babka do mniejszego pieca. Rolada makowa: [makowiec](/pl/rezepte/makowiec); sernik: [sernik](/pl/rezepte/sernik); miód i korzeń: [piernik](/pl/rezepte/piernik). Pleciony chleb drożdżowy (nie forma): [chałka](/pl/rezepte/chalka). Wyczucie drożdży: [technika makowca](/pl/blog/makowiec-technika). Okazja: [Wielkanoc](/pl/blog/menu-wielkanocne).",
  },
};
