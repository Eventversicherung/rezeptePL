/**
 * Wave 14 Paket C — FACTS for placek-po-wegiersku + zapiekanka.
 *
 * Agent E merge into recipe-articles.ts:
 *   import { W14_FACTS_C } from "./recipe-articles-w14-c";
 *   Object.assign(FACTS, …, W14_FACTS_C);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership CRITICAL:
 * - Placek po węgiersku = composed Primary (Placki + Gulasz plating)
 *   ≠ Placki ziemniaczane alone ≠ Gulasz wieprzowy alone
 * - Zapiekanka = Baguette-Street ≠ Krokiety ≠ Naleśniki ≠ Pierogi
 * - Placki-Guide / Gulasz bleiben Einzeln-Owner; hier nur descriptive Crosslinks
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

export const W14_FACTS_C: Record<string, ArticleFacts> = {
  "recipe-placek-po-wegiersku": {
    dishDe: "Placek po węgiersku",
    dishPl: "Placek po węgiersku",
    vibeDe:
      "knusprige Puffer, paprikarotes Gulasch obenauf, optional Käse — ein Composed-Teller",
    vibePl:
      "chrupiące placki, paprykowy gulasz na wierzchu, opcjonalnie ser — talerz composed",
    originDe:
      "Placek po węgiersku ist der Cook-Intent für den **composed** Sonntagsteller: knusprige Kartoffelpuffer mit Schweinegulasch als Topping — oft mit geschmolzenem Käse. Das ist weder der Broad-[Placki-Guide](/de/blog/placki-guide) noch die Einzeln-Cook-URL [Placki ziemniaczane](/de/rezepte/placki/ziemniaczane) (Puffer allein) noch [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy) (Eintopf allein). Primary-KW hier: der komplette Teller „ungarischer Kartoffelpuffer“. Menürahmen descriptiv: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Schmor-Gefäß descriptiv: [Dutch Oven](/de/blog/dutch-oven-kaufberatung). In der Diaspora oft der Moment, in dem man beide Klassiker am selben Tag verbinden will — ohne Ownership der Einzelgerichte zu stehlen.",
    originPl:
      "Placek po węgiersku to intent cook dla **composed** talerza niedzielnego: chrupiące placki ziemniaczane z gulaszem wieprzowym na wierzchu — często z roztopionym serem. To ani broad [przewodnik po plackach](/pl/blog/placki-przewodnik), ani osobny cook [placki ziemniaczane](/pl/rezepte/placki/ziemniaczane) (same placki), ani [gulasz wieprzowy](/pl/rezepte/gulasz-wieprzowy) (sam gulasz). Primary tu: cały talerz „placek po węgiersku”. Rama menu opisowo: [obiad niedzielny](/pl/blog/obiad-niedzielny). Garnek opisowo: [dutch oven](/pl/blog/garnek-do-duszenia). W diasporze często dzień, gdy łączy się dwa klasyki — bez kradzieży ownership osobnych dań.",
    shopDe:
      "Schweinenacken, Kartoffeln, Zwiebel, Paprika, Tomatenmark, Paprikapulver, Brühe, Eier, Mehl, Öl — optional Gouda/Edamer. Fleisch und Paprika oft im [Polenladen](/de/blog/polenladen-einkaufen). Wer nur Puffer will: [Placki](/de/rezepte/placki/ziemniaczane). Wer nur Schmorfleisch: [Gulasz](/de/rezepte/gulasz-wieprzowy). Technik der Masse: [Placki-Guide](/de/blog/placki-guide). Topf-Größe: [Dutch Oven](/de/blog/dutch-oven-kaufberatung).",
    shopPl:
      "Kark, ziemniaki, cebula, papryka, koncentrat, papryka w proszku, bulion, jajka, mąka, olej — opcjonalnie gouda/edam. Mięso i papryka często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Same placki: [placki](/pl/rezepte/placki/ziemniaczane). Sam gulasz: [gulasz](/pl/rezepte/gulasz-wieprzowy). Technika masy: [przewodnik](/pl/blog/placki-przewodnik). Garnek: [dutch oven](/pl/blog/garnek-do-duszenia).",
    techniqueDe:
      "Zwei Stränge, ein Teller: Gulasch früh starten (anbraten, Paprika nicht verbrennen, lange schmoren). Placki zuletzt — Masse ausdrücken, heiß ausbacken, warm halten ohne Stapeln. Anrichten: Soße **obenauf**, nicht daneben als „zwei Gerichte auf einem Tisch“. Käse optional unter Grill. Timing: Gulasch wartet, Puffer nicht — sonst matschig unter der Soße.",
    techniquePl:
      "Dwa tory, jeden talerz: gulasz wcześniej (obsmażyć, nie spalić papryki, długo dusić). Placki na końcu — odcisnąć masę, smażyć na gorąco, trzymać ciepłe bez stosu. Podanie: sos **na wierzchu**, nie obok jako „dwa dania na stole”. Ser opcjonalnie pod grillem. Timing: gulasz poczeka, placki nie — inaczej miękną pod sosem.",
    serveDe:
      "Heiß, 2–3 Puffer pro Person, Gulasch großzügig, optional Käse und Śmietana am Rand. Menü descriptiv: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer die Komponenten einzeln will: [Placki](/de/rezepte/placki/ziemniaczane) oder [Gulasz](/de/rezepte/gulasz-wieprzowy). Technik-Nachschlag: [Placki-Guide](/de/blog/placki-guide).",
    servePl:
      "Gorące, 2–3 placki na osobę, gulasz hojnie, opcjonalnie ser i śmietana z boku. Menu opisowo: [obiad niedzielny](/pl/blog/obiad-niedzielny). Osobne komponenty: [placki](/pl/rezepte/placki/ziemniaczane) lub [gulasz](/pl/rezepte/gulasz-wieprzowy). Technika: [przewodnik](/pl/blog/placki-przewodnik).",
    diasporaDe:
      "In DE oft Samstag Gulasch, Sonntag nur Placki braten und anrichten — entlastet den Tag. Kinder dürfen reiben und Käse streuen; heißes Öl und Schmortopf bei Erwachsenen. Ein Composed-Teller statt zwei getrennter Primary-Kämpfe. Einkauf früh: [Polenladen](/de/blog/polenladen-einkaufen). Kultur-Owner bleibt [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    diasporaPl:
      "W DE często sobota gulasz, niedziela tylko smażyć placki i układać — odciąża dzień. Dzieci trą i sypią ser; gorący olej i garnek u dorosłych. Jeden talerz composed zamiast dwóch walk o primary. Zakupy wcześniej: [sklep polski](/pl/blog/sklep-polski-zakupy). Owner kultury: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
    mistakesDe:
      "Nur nackte Placki fotografieren/kochen → Clash mit [Placki](/de/rezepte/placki/ziemniaczane). Nur Gulaschschüssel → Clash mit [Gulasz](/de/rezepte/gulasz-wieprzowy). Placki Broad im [Placki-Guide](/de/blog/placki-guide) stehlen. Puffer unter Soße zu lange warten lassen. Speiseplan-Ownership beanspruchen statt [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    mistakesPl:
      "Same gołe placki → clash z [plackami](/pl/rezepte/placki/ziemniaczane). Sama miska gulaszu → clash z [gulaszem](/pl/rezepte/gulasz-wieprzowy). Kradzież broad w [przewodniku](/pl/blog/placki-przewodnik). Placki za długo pod sosem. Roszczenie menu zamiast [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
    variantsDe:
      "Ohne Käse; mit Pilzgulasch (ehrlich benennen); schärfer. Nachbarn: [Placki](/de/rezepte/placki/ziemniaczane), [Gulasz](/de/rezepte/gulasz-wieprzowy), Guide [Placki](/de/blog/placki-guide), [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Dutch Oven](/de/blog/dutch-oven-kaufberatung), [Polenladen](/de/blog/polenladen-einkaufen).",
    variantsPl:
      "Bez sera; z gulaszem pieczarkowym (nazwać uczciwie); ostrzej. Sąsiedzi: [placki](/pl/rezepte/placki/ziemniaczane), [gulasz](/pl/rezepte/gulasz-wieprzowy), [przewodnik](/pl/blog/placki-przewodnik), [obiad niedzielny](/pl/blog/obiad-niedzielny), [dutch oven](/pl/blog/garnek-do-duszenia), [sklep polski](/pl/blog/sklep-polski-zakupy).",
  },

  "recipe-zapiekanka": {
    dishDe: "Zapiekanka",
    dishPl: "Zapiekanka",
    vibeDe:
      "knuspriges Baguette, Pilze, Schinken, Käse-Schmelz, Ketchup — Straßenfood-Nostalgie",
    vibePl:
      "chrupiąca bagietka, pieczarki, szynka, ser, keczup — nostalgia uliczna",
    originDe:
      "Zapiekanka ist der Cook-Intent für das polnische Straßen-Baguette: längs aufgeschnitten, mit angebratenen Pilzen (± Schinken) und Käse überbacken, klassisch mit Ketchup. Das ist weder [Krokiety](/de/rezepte/krokiety) (gerollte, panierte Füllung) noch [Naleśniki](/de/rezepte/nalesniki/twarog) noch [Pierogi](/de/rezepte/pierogi/ruskie). Primary hier: Baguette-Form + Käse-Schmelz. Einkauf und Diaspora: [Polenladen](/de/blog/polenladen-einkaufen), Ersatz ehrlich [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Alltag/Menü descriptiv: [Sonntagsessen](/de/blog/sonntagsessen-polnisch) — Kultur-Owner bleibt dort; hier nur der Street-Cook.",
    originPl:
      "Zapiekanka to intent cook polskiej bagietki ulicznej: przekrojona wzdłuż, z podsmażonymi pieczarkami (± szynką) i serem, klasycznie z keczupem. To ani [krokiety](/pl/rezepte/krokiety) (zwijane, panierowane), ani [naleśniki](/pl/rezepte/nalesniki/twarog), ani [pierogi](/pl/rezepte/pierogi/ruskie). Primary tu: forma bagietki + ser. Zakupy i diaspora: [sklep polski](/pl/blog/sklep-polski-zakupy), zamienniki [zamienniki składników](/pl/blog/zamienniki-skladnikow). Codzienność opisowo: [obiad niedzielny](/pl/blog/obiad-niedzielny) — owner kultury zostaje tam; tu tylko cook uliczny.",
    shopDe:
      "Baguette, Champignons, Zwiebel, Schinken, schmelzfähiger Käse, Butter/Öl, Ketchup — alles oft im Supermarkt; Schinken und Käse-Feeling im [Polenladen](/de/blog/polenladen-einkaufen). Käse-Ersatz: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Wer Rollen will: [Krokiety](/de/rezepte/krokiety). Wer Pfannkuchen: [Naleśniki](/de/rezepte/nalesniki/twarog).",
    shopPl:
      "Bagietka, pieczarki, cebula, szynka, ser do pieczenia, masło/olej, keczup — często supermarket; szynka i ser w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Zamienniki: [zamienniki](/pl/blog/zamienniki-skladnikow). Zwinięte: [krokiety](/pl/rezepte/krokiety). Naleśniki: [naleśniki](/pl/rezepte/nalesniki/twarog).",
    techniqueDe:
      "Pilze ausdämpfen, sonst wird das Brot nass. Baguette andrösten, Belag gleichmäßig, Käse großzügig. Backen bis Schmelz und knusprige Ränder — zu lang = hartes Brot. Ketchup erst nach dem Ofen. Vegetarisch: Schinken weglassen und ehrlich benennen.",
    techniquePl:
      "Pieczarki odparować, inaczej chleb mokry. Bagietkę podpiec, farsz równo, ser hojnie. Piec do roztopu i chrupkich brzegów — za długo = twardy chleb. Keczup po pieczeniu. Wege: bez szynki, nazwać uczciwie.",
    serveDe:
      "Heiß aus der Hand oder auf Brett, längs oder in Stücken, Ketchup-Strich, optional Schnittlauch. Alltag descriptiv neben [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Nicht mit [Pierogi](/de/rezepte/pierogi/ruskie) oder [Krokiety](/de/rezepte/krokiety) mischen. Einkauf: [Polenladen](/de/blog/polenladen-einkaufen).",
    servePl:
      "Gorące z ręki lub na desce, wzdłuż lub w kawałkach, keczup, opcjonalnie szczypiorek. Codzienność opisowo obok [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Nie mieszać z [pierogami](/pl/rezepte/pierogi/ruskie) ani [krokietami](/pl/rezepte/krokiety). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
    diasporaDe:
      "In DE oft Freitagabend oder nach dem Training — 20 Minuten, wenig Geschirr. Kinder streuen Käse; heißer Ofen bei Erwachsenen. Ein Baguette reicht für vier Portionen. Nostalgie ohne Restaurantfahrt. Einkauf: [Polenladen](/de/blog/polenladen-einkaufen); Alternativen: [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    diasporaPl:
      "W DE często piątkowy wieczór lub po treningu — 20 minut, mało naczyń. Dzieci sypią ser; gorący piekarnik u dorosłych. Jedna bagietka na cztery porcje. Nostalgia bez restauracji. Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy); zamienniki: [zamienniki](/pl/blog/zamienniki-skladnikow).",
    mistakesDe:
      "Nasse Pilze aufs Brot. Mit [Krokiety](/de/rezepte/krokiety) oder [Naleśniki](/de/rezepte/nalesniki/twarog) verwechseln. Runde Pizza statt Baguette-Form. Speiseplan-Primary stehlen statt [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Käse sparen — dann kein Street-Feeling.",
    mistakesPl:
      "Mokre pieczarki na chleb. Mylenie z [krokietami](/pl/rezepte/krokiety) lub [naleśnikami](/pl/rezepte/nalesniki/twarog). Okrągła pizza zamiast bagietki. Kradzież primary menu zamiast [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Za mało sera — brak ulicznego charakteru.",
    variantsDe:
      "Nur Pilze (vegetarisch ehrlich); mit Kiełbasa statt Schinken; schärferer Ketchup. Nachbarn: [Krokiety](/de/rezepte/krokiety), [Naleśniki](/de/rezepte/nalesniki/twarog), [Pierogi](/de/rezepte/pierogi/ruskie). Guides: [Polenladen](/de/blog/polenladen-einkaufen), [Ersatzprodukte](/de/blog/ersatzprodukte-de), [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    variantsPl:
      "Tylko pieczarki (wege uczciwie); z kiełbasą zamiast szynki; ostrzejszy keczup. Sąsiedzi: [krokiety](/pl/rezepte/krokiety), [naleśniki](/pl/rezepte/nalesniki/twarog), [pierogi](/pl/rezepte/pierogi/ruskie). Przewodniki: [sklep polski](/pl/blog/sklep-polski-zakupy), [zamienniki](/pl/blog/zamienniki-skladnikow), [obiad niedzielny](/pl/blog/obiad-niedzielny).",
  },
};
