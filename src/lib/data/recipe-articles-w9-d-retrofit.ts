/**
 * Wave 9 Paket D — Wave-8 FACTS link audit / optional neighbor patches.
 *
 * Audit (2026-07-20): all six Wave-8 recipe IDs already meet ≥4 markdown
 * links per locale (≥2 recipe + ≥2 blog) in their W8 FACTS sources.
 * No gap-fill required for gate compliance.
 *
 * Optional: Kapusta zasmażana gets a descriptive Cook-pairing → Kaszanka
 * (new dish neighbor). Full ArticleFacts replacement for that one key only.
 *
 * Agent E merge:
 *   import { W9_FACTS_W8_RETROFIT } from "./recipe-articles-w9-d-retrofit";
 *   Object.assign(FACTS, …, W9_FACTS_W8_RETROFIT, W9_FACTS_D);
 *
 * Do NOT invent Flaki/Piernik. Do NOT rewrite Kielbasa Types ownership.
 */

import type { ArticleFacts } from "./recipe-articles-w9-d";

/** Empty keys for gap-fills — W8 already green. Only optional pairing below. */
export const W9_FACTS_W8_RETROFIT: Record<string, ArticleFacts> = {
  "recipe-kapusta-zasmażana": {
    dishDe: "Kapusta zasmażana",
    dishPl: "Kapusta zasmażana",
    vibeDe: "warm, säuerlich-mild, nach Butter und sanfter Schwitze",
    vibePl: "ciepła, kwaśno-łagodna, z masłem i delikatną zasmażką",
    originDe:
      "Kapusta zasmażana ist geschmortes Sauerkraut mit Mehlschwitze (zasmażka) — eine warme Beilage, kein Eintopf. Sie teilt Kraut und Säure mit [Bigos](/de/rezepte/bigos), bleibt aber klar im Intent: Beilage zum Fleisch, nicht Schmorgericht mit Fleischlagen. In vielen Familien steht sie neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy) oder Braten, wenn der Sonntagstisch Wärme und Säure braucht. Die Zasmażka bindet Flüssigkeit und rundet ab, ohne das Kraut süß zu machen.",
    originPl:
      "Kapusta zasmażana to duszona kapusta kiszona z zasmażką — ciepły dodatek, nie gulasz. Dzieli kapustę i kwas z [bigosem](/pl/rezepte/bigos), ale intent jest inny: dodatek do mięsa, nie danie mięsne warstwami. W wielu domach stoi obok [kotleta schabowego](/pl/rezepte/kotlet-schabowy) albo piezeni, gdy niedzielny stół chce ciepła i kwasu. Zasmażka wiąże płyn i łagodzi, bez słodzenia kapusty.",
    shopDe:
      "Gute [Sauerkraut-Qualität](/de/blog/kiszenie-guide) aus dem Glas oder Beutel — Säure und Salz prüfen, nicht blind spülen. Zwiebel, Butter oder Schmalz, Mehl, Lorbeer. Optional ein Schuss leichte Brühe vom [Rosół](/de/rezepte/rosol)-Tag. Wer selbst fermentiert, nutzt den Kiszenie-Guide nur als Technik-Nachbar; Primary „Kiszenie“ bleibt dort. Polenladen oft aromatischer als Supermarkt-Kraut.",
    shopPl:
      "Dobra [jakość kiszonki](/pl/blog/kiszenie-w-domu) ze słoika lub worka — sprawdź kwas i sól, nie płucz w ciemno. Cebula, masło lub smalec, mąka, liść laurowy. Opcjonalnie łyżka lekkiego bulionu z dnia na [rosół](/pl/rezepte/rosol). Domowy ferment: kiszenie zostaje ownerem techniki; tu tylko wykorzystanie. Sklep polski często aromatyczniejszy niż supermarket.",
    techniqueDe:
      "Zwiebel glasig, Kraut schmoren bis weich, Zasmażka hell (nicht nussbraun-bitter), unterheben, kurz kochen. Zu viel Flüssigkeit vorher reduzieren. Abschmecken mit Salz und Pfeffer — Zucker nur als Notbremse bei aggressiver Säure.",
    techniquePl:
      "Cebula na szklisto, kapusta dusić do miękkości, zasmażka jasna (nie gorzka), wmieszać, krótko gotować. Nadmiar płynu wcześniej odparować. Doprawić solą i pieprzem — cukier tylko awaryjnie przy ostrym kwasie.",
    serveDe:
      "Heiß zu [Kotlet schabowy](/de/rezepte/kotlet-schabowy), Braten oder einfachen Kartoffeln. Passt in den Rahmen des [polnischen Sonntagsessens](/de/blog/sonntagsessen-polnisch). Deftige Pfannen-Nachbarschaft: [Kaszanka mit Zwiebel](/de/rezepte/kaszanka) — Cook-Intent dort, Types bleiben im [Kiełbasa-Arten-Guide](/de/blog/kielbasa-arten). Reste am nächsten Tag oft runder; erneut erhitzen, ggf. etwas Wasser.",
    servePl:
      "Gorącą do [kotleta schabowego](/pl/rezepte/kotlet-schabowy), piezeni lub ziemniaków. Pasuje do [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Treściwe sąsiedztwo z patelni: [kaszanka z cebulą](/pl/rezepte/kaszanka) — cook tam, typy w [przewodniku rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy). Resztki następnego dnia często lepsze; odgrzać, ewentualnie odrobinę wody.",
    diasporaDe:
      "In deutschen Wohnungen riecht Kapusta zasmażana nach ruhigem Sonntag ohne Drei-Topf-Theater. Kraut aus dem Kühlregal, Schwitze in fünf Minuten — machbar nach Schicht. Wer Majoran liebt, hält die Dosis klein und liest das [Majeranek-Lexikon](/de/blog/majeranek) als Gewürz-Nachbar, nicht als Rezept-Owner.",
    diasporaPl:
      "W niemieckich mieszkaniach kapusta zasmażana pachnie spokojną niedzielą bez maratonu garnków. Kiszona z chłodni, zasmażka w pięć minut — po zmianie też możliwe. Majeranek ostrożnie; [leksykon majeranku](/pl/blog/majeranek-leksykon) jako sąsiad przypraw, nie owner przepisu.",
    mistakesDe:
      "Zu dunkle Zasmażka (bitter). Komplett gespültes Kraut (fade). Mit Bigos verwechseln oder Kiszenie-Primary stehlen. Zu viel Wasser → Suppe statt Beilage. Zu früh Wurst rein → anderes Gericht.",
    mistakesPl:
      "Zbyt ciemna zasmażka (gorzka). Całkiem wypłukana kapusta (mdła). Mylenie z bigosem lub kradzież primary kiszenia. Za dużo wody → zupa zamiast dodatku. Wczesna kiełbasa → inne danie.",
    variantsDe:
      "Mit Speckwürfeln (Hausvariante), mit frischem Weißkohl gemischt milder, mit Pilzen näher an Wigilia-Feeling — ehrlich benennen. Bigos bleibt der verwandte Kohl-Eintopf mit Fleisch; Kapusta zasmażana bleibt Beilage. Pfannen-Fleisch/Wurst-Nachbar: [Kaszanka](/de/rezepte/kaszanka).",
    variantsPl:
      "Z boczkiem (wariant domu), z świeżą kapustą łagodniej, z grzybami bliżej Wigilii — nazywać uczciwie. Bigos zostaje pokrewnym gulaszem mięsnym; kapusta zasmażana zostaje dodatkiem. Sąsiad z patelni: [kaszanka](/pl/rezepte/kaszanka).",
  },
};
