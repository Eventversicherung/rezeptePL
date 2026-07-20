/**
 * Wave 9 Paket D — Kaszanka FACTS (new).
 *
 * Agent E merge into recipe-articles.ts:
 *   import { W9_FACTS_D } from "./recipe-articles-w9-d";
 *   import { W9_FACTS_W8_RETROFIT } from "./recipe-articles-w9-d-retrofit";
 *   Object.assign(FACTS, W9_FACTS_W8_RETROFIT, W9_FACTS_D);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Ownership: Cook-Primary „Kaszanka Rezept“ — Types bleiben bei post-kielbasa-arten.
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

export const W9_FACTS_D: Record<string, ArticleFacts> = {
  "recipe-kaszanka": {
    dishDe: "Kaszanka",
    dishPl: "Kaszanka",
    vibeDe: "deftig, würzig, nach Zwiebel und knuspriger Hülle",
    vibePl: "treściwa, korzenna, z cebulą i chrupką osłonką",
    originDe:
      "Kaszanka ist der Cook-Intent: gebratene oder gegrillte Blutwurst mit Buchweizen oder Gerste, klassisch mit Zwiebel. Sie ist kein Eintrag im [Kiełbasa-Arten-Lexikon](/de/blog/kielbasa-arten) — dort bleiben Types, Qualität und Einsatz in Żurek/Bigos Owner. Hier geht es um Pfanne, Hitze und Beilagen. In vielen Diaspora-Küchen ist Kaszanka der schnelle Sonntags- oder Abendteller, wenn der [Polenladen](/de/blog/polenladen-einkaufen) gute Ware geführt hat. Sie teilt Würz-Feeling mit geräucherter Wurst, bleibt aber ein eigenes Gericht mit eigener Money Page.",
    originPl:
      "Kaszanka to intent cook: smażona lub grillowana kaszanka z gryką albo jęczmieniem, klasycznie z cebulą. To nie wpis w [leksykonie rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy) — tam zostają typy, jakość i użycie w żurku/bigosie. Tu chodzi o patelnię, ogień i dodatki. W wielu kuchniach diaspory kaszanka to szybki niedzielny lub wieczorny talerz, gdy [sklep polski](/pl/blog/sklep-polski-zakupy) ma dobrą partię. Dzieli korzenne feeling z wędzoną kiełbasą, ale zostaje własnym daniem i money page.",
    shopDe:
      "Feste, würzige Kaszanka aus dem [Polenladen](/de/blog/polenladen-einkaufen): kurze Liste, sichtbare Grütze, kein wässriger Anschnitt. Zwiebeln, Schmalz oder Öl, optional Apfel, Majoran, Brot oder Kartoffeln. Welche Wurstsorten wohin gehören, erklärt weiter der Types-Guide — hier nur Kauf fürs Braten. Kühlkette und MHD prüfen; geöffnete Packung zügig verbrauchen.",
    shopPl:
      "Zwarta, korzenna kaszanka ze [sklepu polskiego](/pl/blog/sklep-polski-zakupy): krótki skład, widoczna kasza, bez wodnistego przekroju. Cebula, smalec lub olej, opcjonalnie jabłko, majeranek, chleb lub ziemniaki. Które rodzaje kiełbasy gdzie pasują, zostaje w przewodniku typów — tu tylko zakup pod smażenie. Sprawdź łańcuch chłodniczy i datę; otwarte opakowanie zużyj szybko.",
    techniqueDe:
      "Mittlere Hitze, Zwiebel zuerst Farbe holen, dann Kaszanka-Scheiben — Hülle knusprig, Inneres warm, ohne zu pressen. Zu heiß: Platzen und trockene Füllung. Zu kalt: gummiig und fettig. Majeranek sparsam am Ende; Dosierung und Charakter im [Majeranek-Lexikon](/de/blog/majeranek). Grillvariante: indirekte Hitze, oft wenden, Apfel oder Zwiebel als Beilage separat.",
    techniquePl:
      "Średni ogień, najpierw cebula na kolor, potem plastry kaszanki — osłonka chrupka, środek ciepły, bez wyciskania. Za mocno: pęka i wysycha. Za słabo: gumowata i tłusta. Majeranek oszczędnie na końcu; dawkowanie w [leksykonie majeranku](/pl/blog/majeranek-leksykon). Grill: ciepło pośrednie, częste obracanie, jabłko lub cebula osobno.",
    serveDe:
      "Klassisch mit Zwiebel und Brot oder Kartoffeln. Warme Beilage: [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana). Als deftiger Teller im Rahmen des [polnischen Sonntagsessens](/de/blog/sonntagsessen-polnisch) — Kultur-Owner bleibt dort, hier nur das Gericht. Wer eher Schmor-Kohl mit Fleischlagen will: [Bigos](/de/rezepte/bigos) ist der Nachbar, nicht dieselbe Seite.",
    servePl:
      "Klasycznie z cebulą i chlebem lub ziemniakami. Ciepły dodatek: [kapusta zasmażana](/pl/rezepte/kapusta-zasmażana). Jako treściwy talerz w ramach [obiadu niedzielnego](/pl/blog/obiad-niedzielny) — owner kultury zostaje tam, tu tylko danie. Kto chce duszoną kapustę z mięsem warstwami: [bigos](/pl/rezepte/bigos) jest sąsiadem, nie tą stroną.",
    diasporaDe:
      "In DE oft Freitagabend- oder Sonntags-Schnellgericht: eine Packung aus dem Laden, zwei Zwiebeln, fertig. Kinder dürfen Zwiebeln sortieren — heiße Pfanne bei Erwachsenen. Reste am nächsten Tag in der Pfanne aufwärmen; nicht stundenlang warmhalten. Nach Schicht machbar, ohne Drei-Topf-Theater.",
    diasporaPl:
      "W DE często szybki piątkowy lub niedzielny obiad: jedna paczka ze sklepu, dwie cebule, gotowe. Dzieci mogą sortować cebulę — gorąca patelnia u dorosłych. Resztki następnego dnia na patelni; nie trzymać godzinami na ciepło. Po zmianie możliwe bez maratonu garnków.",
    mistakesDe:
      "Zu hohe Hitze (platzt). Mit dem Kiełbasa-Arten-Primary verwechseln oder Types-Guide umschreiben. Zu viel Majeranek (bitter). Wässrige Billigware. Flaki oder andere HOLD-Gerichte hier miterfinden — nein. Ownership bleibt: Cook hier, Lexikon dort.",
    mistakesPl:
      "Za mocny ogień (pęka). Mylenie z primary rodzajów kiełbasy albo przepisywanie leksykonu. Za dużo majeranku (gorzki). Wodnista tania kaszanka. Flaki lub inne HOLD tu wymyślać — nie. Ownership: cook tutaj, leksykon tam.",
    variantsDe:
      "Mit Apfel, mit Senf am Rand, gegrillt statt Pfanne, oder als Beilage-Teller neben Kapusta. Schmor-Nachbar bleibt [Bigos](/de/rezepte/bigos); Beilagen-Kohl [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana). Types und Qualitätslesen weiter im [Kiełbasa-Arten-Guide](/de/blog/kielbasa-arten).",
    variantsPl:
      "Z jabłkiem, z musztardą z boku, grill zamiast patelni, albo jako talerz z kapustą. Sąsiad duszony: [bigos](/pl/rezepte/bigos); dodatek: [kapusta zasmażana](/pl/rezepte/kapusta-zasmażana). Typy i jakość dalej w [przewodniku rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy).",
  },
};
