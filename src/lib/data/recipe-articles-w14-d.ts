/**
 * Wave 14 Paket D — FACTS for leczo.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W14_FACTS_D } from "./recipe-articles-w14-d";
 * Object.assign(FACTS, …, W14_FACTS_D);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Leczo (Paprika-Tomaten-Eintopf ± Kiełbasa) ≠ Gulasz wieprzowy Primary
 * - ≠ Bigos (Kraut-Fleisch) ≠ Fasolka po bretońsku (Bohnen)
 * - Sonntagsessen bleibt Kultur-Owner; hier nur Cook
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

export const W14_FACTS_D: Record<string, ArticleFacts> = {
 "recipe-leczo": {
 dishDe: "Leczo",
 dishPl: "Leczo",
 vibeDe: "paprika-süß, tomatig, alltagsnah — Gemüse führt, Wurst trägt",
 vibePl: "paprykowo-słodka, pomidorowa, codzienna — warzywa prowadzą, kiełbasa niesie",
 originDe:
 "Leczo ist der polnische (und mitteleuropäische) Paprika-Tomaten-Eintopf: Zwiebel, Paprika, Tomate, oft Kiełbasa in Scheiben — Gemüse-dominant, Pfannen- oder Topfgericht für den Alltag. Das ist kein [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy): dort führt langes Schmoren von Schweinewürfeln in Paprikasoße als Fleisch-Fokus; hier entscheiden weiche Paprikastreifen und Tomatensauce. Auch kein [Bigos](/de/rezepte/bigos) (Kraut und Fleischschichten) und keine [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku) (Bohnen-Eintopf). Menühilfe gibt [Sonntagsessen](/de/blog/sonntagsessen-polnisch) — Anlass und Kultur bleiben beim Guide; hier bleibt nur das Rezept Leczo / Paprikagemüse.",
 originPl:
 "Leczo to polski (i środkowoeuropejski) gulasz warzywny z papryką i pomidorem: cebula, papryka, pomidor, często kiełbasa w plasterkach — warzywa prowadzą, danie na patelnię lub garnek na co dzień. To nie [gulasz wieprzowy](/pl/rezepte/gulasz-wieprzowy): tam fokus to długie duszenie kostki wieprzowiny w sosie paprykowym; tu miękkie paski papryki i sos pomidorowy. To też nie [bigos](/pl/rezepte/bigos) (kapusta i warstwy mięsa) ani [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku) (fasola). Rama kulturowa opcjonalnie przy [obiedzie niedzielnym](/pl/blog/obiad-niedzielny) — owner okazji/kultury zostaje tam; tu zostaje tylko przepis leczo / paprykowe warzywa.",
 shopDe:
 "Paprika und Tomaten (oder Passata) im Supermarkt. Kiełbasa im [Polenladen](/de/blog/polenladen-einkaufen): geräuchert oder Krakauer-Schnitt für Scheiben — Typen und Qualität im [Kiełbasa-Arten-Lexikon](/de/blog/kielbasa-arten). Paprikapulver edelsüß, optional [Majeranek](/de/blog/majeranek). Öl oder Schmalz. Kein Schweinenacken wie für [Gulasz](/de/rezepte/gulasz-wieprzowy) nötig — hier reicht Wurst als Protein-Linie.",
 shopPl:
 "Papryka i pomidory (lub passata) z marketu. Kiełbasa w [sklepie polskim](/pl/blog/sklep-polski-zakupy): wędzona lub krakowska do plastrów — typy i jakość w [leksykonie rodzajów kiełbasy](/pl/blog/rodzaje-kielbasy). Papryka słodka w proszku, opcjonalnie [majeranek](/pl/blog/majeranek-leksykon). Olej lub smalec. Nie potrzebujesz karkówki jak do [gulaszu](/pl/rezepte/gulasz-wieprzowy) — tu linia białka to kiełbasa.",
 techniqueDe:
 "Zwiebel glasig, Paprika weichdünsten, Wurst kurz braten, dann Tomate und Paprikapulver — zugedeckt köcheln bis gebunden. Nicht 90 Minuten Fleisch schmoren wie bei [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy). Optional Eier in Mulden stocken lassen. Abschmecken: Tomatensäure gegen Paprikasüße. Majeranek sparsam — Lexikon: [Majeranek](/de/blog/majeranek).",
 techniquePl:
 "Cebula szklista, papryka mięknie, kiełbasa krótko podsmażona, potem pomidor i papryka w proszku — duś pod przykryciem aż zwiąże. Nie 90 minut mięsa jak w [gulaszu wieprzowym](/pl/rezepte/gulasz-wieprzowy). Opcjonalnie jajka w zagłębieniach. Dopraw: kwas pomidora kontra słodycz papryki. Majeranek oszczędnie — [leksykon](/pl/blog/majeranek-leksykon).",
 serveDe:
 "Heiß mit Brot, Reis oder Kartoffeln. Als ruhiger Alltagsteller neben dem [Sonntagsessen](/de/blog/sonntagsessen-polnisch)-Rhythmus — ohne den Kultur-Guide zu ersetzen. Nicht neben [Bigos](/de/rezepte/bigos) als „dasselbe“ verkaufen: Kraut vs. Paprika. Reste am nächsten Tag in der Pfanne aufwärmen; oft runder.",
 servePl:
 "Gorące z chlebem, ryżem lub ziemniakami. Spokojny talerz dnia obok rytmu [obiadu niedzielnego](/pl/blog/obiad-niedzielny) — bez zastępowania przewodnika kultury. Nie sprzedawać obok [bigosu](/pl/rezepte/bigos) jako „to samo”: kapusta vs papryka. Resztki nazajutrz na patelni; często lepsze.",
 diasporaDe:
 "In DE oft der schnelle Topf nach der Schicht: Paprika aus dem Supermarkt, Wurst aus dem [Polenladen](/de/blog/polenladen-einkaufen). Kinder mögen die Süße der Paprika; Schärfe optional weglassen. Wer Typen von Wurst klären will, bleibt beim [Kiełbasa-Arten](/de/blog/kielbasa-arten)-Lexikon — hier nur der Eintopf-Cook. Wochenend-Kontext [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 diasporaPl:
 "W DE często szybki garnek po zmianie: papryka z marketu, kiełbasa ze [sklepu polskiego](/pl/blog/sklep-polski-zakupy). Dzieci lubią słodycz papryki; ostrość opcjonalnie odpuścić. Typy kiełbasy zostają w [leksykonie rodzajów](/pl/blog/rodzaje-kielbasy) — tu tylko cook gulaszu warzywnego. Weekend [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 mistakesDe:
 "Mit [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy) verwechseln und Würfelfleisch 90 Minuten schmoren — falscher Fokus. Paprika roh-knackig lassen (zu kurz). Zu wenig Tomate (trocken). Dunkle Grillwurst allein ohne Gemüse-Dominanz. nein. Kultur-Guide [Sonntagsessen](/de/blog/sonntagsessen-polnisch) nicht überschreiben.",
 mistakesPl:
 "Mylenie z [gulaszem wieprzowym](/pl/rezepte/gulasz-wieprzowy) i 90 minut kostki mięsa — złe fokus. Papryka surowa (za krótko). Za mało pomidora (sucho). Sama ciemna grillowa bez dominacji warzyw. Nie mieszać ilości i kroków z sąsiednim przepisem. nie. Nie nadpisywać [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
 variantsDe:
 "Ohne Wurst vegetarisch (Paprika-Tomate allein). Mit Ei zugedeckt gestockt. Schärfer mit Chili. Nachbar-Schmor-Fleisch bleibt [Gulasz](/de/rezepte/gulasz-wieprzowy); Kraut-Topf [Bigos](/de/rezepte/bigos); Bohnen [Fasolka](/de/rezepte/fasolka-po-bretonsku). Würze: [Majeranek](/de/blog/majeranek). Wurst-Typen: [Kiełbasa-Arten](/de/blog/kielbasa-arten). Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten.",
 variantsPl:
 "Bez kiełbasy wegetariańsko (sama papryka-pomidor). Z jajkiem pod przykryciem. Ostrzej z chili. Sąsiad mięsny zostaje [gulaszem](/pl/rezepte/gulasz-wieprzowy); kapusta [bigos](/pl/rezepte/bigos); fasola [fasolka](/pl/rezepte/fasolka-po-bretonsku). Przyprawa: [majeranek](/pl/blog/majeranek-leksykon). Typy kiełbasy: [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy). W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności.",
 },
};
