/**
 * Wave 14 Paket C — FACTS for placek-po-wegiersku + zapiekanka.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W14_FACTS_C } from "./recipe-articles-w14-c";
 * Object.assign(FACTS, …, W14_FACTS_C);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership CRITICAL:
 * - Placek po węgiersku = composed Primary (Placki + Gulasz plating)
 * ≠ Placki ziemniaczane alone ≠ Gulasz wieprzowy alone
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
 "knusprige Puffer, paprikarotes Gulasch obenauf, optional Käse — ein zusammengesetzter Teller",
 vibePl:
 "chrupiące placki, paprykowy gulasz na wierzchu, opcjonalnie ser — jeden złożony talerz",
 originDe:
 "Placek po węgiersku ist der zusammengesetzte Sonntagsteller: knusprige Kartoffelpuffer mit paprikarotem Schweinegulasch obenauf — oft noch mit geschmolzenem Käse. Er verbindet zwei Klassiker zu einem Gericht, ohne die Einzelrezepte zu ersetzen: die Puffer allein bleiben bei [Placki ziemniaczane](/de/rezepte/placki/ziemniaczane), der Eintopf allein bei [Gulasz wieprzowy](/de/rezepte/gulasz-wieprzowy). Masse und Pfannentechnik vertieft der [Placki-Guide](/de/blog/placki-guide); den Menürahmen setzt [Sonntagsessen](/de/blog/sonntagsessen-polnisch). In der Diaspora ist das oft der Tag, an dem man beide Stränge bewusst plant — Gulasch früh, Placki zuletzt.",
 originPl:
 "Placek po węgiersku to złożony talerz niedzielny: chrupiące placki ziemniaczane z paprykowym gulaszem wieprzowym na wierzchu — często jeszcze z roztopionym serem. Łączy dwa klasyki w jedno danie, bez zastępowania osobnych przepisów: same placki zostają przy [plackach ziemniaczanych](/pl/rezepte/placki/ziemniaczane), sam gulasz przy [gulaszu wieprzowym](/pl/rezepte/gulasz-wieprzowy). Masę i patelnię pogłębia [przewodnik po plackach](/pl/blog/placki-przewodnik); ramę menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny). W diasporze to często dzień, gdy świadomie planujesz dwa tory — gulasz wcześniej, placki na końcu.",
 shopDe:
 "Plane zwei Einkaufskörbe: fürs Gulasch Schweinenacken mit Fettanteil, Paprika und Zwiebel sowie Tomatenmark, edelsüßes Paprikapulver und Brühe; für die Placki festkochende Kartoffeln plus Ei, Mehl und Öl — optional Gouda oder Edamer. Fleisch und Paprika-Feeling holst du oft im [Polenladen](/de/blog/polenladen-einkaufen). Wer nur Puffer will, bleibt bei [Placki](/de/rezepte/placki/ziemniaczane); wer nur schmoren will, bei [Gulasz](/de/rezepte/gulasz-wieprzowy). Zur Masse hilft der [Placki-Guide](/de/blog/placki-guide), zum Topf der [Dutch Oven](/de/blog/dutch-oven-kaufberatung).",
 shopPl:
 "Zaplanuj dwa koszyki: na gulasz kark z tłuszczem, paprykę i cebulę oraz koncentrat, słodką paprykę w proszku i bulion; na placki ziemniaki typu sałatkowego plus jajko, mąkę i olej — opcjonalnie gouda lub edam. Mięso i paprykę z charakterem często kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Kto chce same placki, zostaje przy [plackach](/pl/rezepte/placki/ziemniaczane); kto tylko dusić — przy [gulaszu](/pl/rezepte/gulasz-wieprzowy). Przy masie pomaga [przewodnik](/pl/blog/placki-przewodnik), przy garnku [dutch oven](/pl/blog/garnek-do-duszenia).",
 techniqueDe:
 "Zwei Stränge, ein Teller: Gulasch früh starten (anbraten, Paprika nicht verbrennen, lange schmoren). Placki zuletzt — Masse ausdrücken, heiß ausbacken, warm halten ohne Stapeln. Anrichten: Soße **obenauf**, nicht daneben als „zwei Gerichte auf einem Tisch“. Käse optional unter Grill. Timing: Gulasch wartet, Puffer nicht — sonst matschig unter der Soße.",
 techniquePl:
 "Dwa tory, jeden talerz: gulasz wcześniej (obsmażyć, nie spalić papryki, długo dusić). Placki na końcu — odcisnąć masę, smażyć na gorąco, trzymać ciepłe bez stosu. Podanie: sos **na wierzchu**, nie obok jako „dwa dania na stole”. Ser opcjonalnie pod grillem. Timing: gulasz poczeka, placki nie — inaczej miękną pod sosem.",
 serveDe:
 "Serviere heiß zwei bis drei Puffer pro Person, Gulasch großzügig darüber, optional Käse und Śmietana am Rand. Den Menürahmen setzt [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer die Komponenten einzeln will, bleibt bei [Placki](/de/rezepte/placki/ziemniaczane) oder [Gulasz](/de/rezepte/gulasz-wieprzowy); Technik nachschlagen hilft der [Placki-Guide](/de/blog/placki-guide).",
 servePl:
 "Podawaj gorące dwa do trzech placków na osobę, gulasz hojnie na wierzchu, opcjonalnie ser i śmietanę z boku. Ramę menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny). Osobne komponenty zostają przy [plackach](/pl/rezepte/placki/ziemniaczane) lub [gulaszu](/pl/rezepte/gulasz-wieprzowy); technikę pogłębia [przewodnik po plackach](/pl/blog/placki-przewodnik).",
 diasporaDe:
 "In DE oft Samstag Gulasch, Sonntag nur Placki braten und anrichten — entlastet den Tag. Kinder dürfen reiben und Käse streuen; heißes Öl und Schmortopf bei Erwachsenen. Ein zusammengesetzter Teller statt zwei getrennter Gerichte. Einkauf früh: [Polenladen](/de/blog/polenladen-einkaufen). Kulturrahmen bleibt bei [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 diasporaPl:
 "W DE często sobota gulasz, niedziela tylko smażyć placki i układać — odciąża dzień. Dzieci trą i sypią ser; gorący olej i garnek u dorosłych. Jeden złożony talerz zamiast dwóch osobnych dań. Zakupy wcześniej: [sklep polski](/pl/blog/sklep-polski-zakupy). Kultura: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 mistakesDe:
 "Nur nackte Placki zu kochen verfehlt den Teller — dafür gibt es [Placki](/de/rezepte/placki/ziemniaczane). Nur eine Gulaschschüssel ist [Gulasz](/de/rezepte/gulasz-wieprzowy), nicht Placek po węgiersku. Puffer unter der Soße zu lange warten lassen macht sie matschig; Gulasch darf warten, Placki nicht. Den Sonntagsplan ersetzt du hier nicht — dafür steht [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 mistakesPl:
 "Same gołe placki mijają ten talerz — na to jest przepis [placki](/pl/rezepte/placki/ziemniaczane). Sama miska gulaszu to [gulasz](/pl/rezepte/gulasz-wieprzowy), nie placek po węgiersku. Placki za długo pod sosem miękną; gulasz poczeka, placki nie. Planu niedzieli tu nie zastępujesz — jest [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 variantsDe:
 "Ohne Käse; mit Pilzgulasch (ehrlich benennen); schärfer. Passende Nachbarn sind [Placki](/de/rezepte/placki/ziemniaczane), [Gulasz](/de/rezepte/gulasz-wieprzowy), Guide [Placki](/de/blog/placki-guide), [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Dutch Oven](/de/blog/dutch-oven-kaufberatung), [Polenladen](/de/blog/polenladen-einkaufen).",
 variantsPl:
 "Bez sera; z gulaszem pieczarkowym (nazwać uczciwie); ostrzej. Pasujący sąsiedzi to [placki](/pl/rezepte/placki/ziemniaczane), [gulasz](/pl/rezepte/gulasz-wieprzowy), [przewodnik](/pl/blog/placki-przewodnik), [obiad niedzielny](/pl/blog/obiad-niedzielny), [dutch oven](/pl/blog/garnek-do-duszenia), [sklep polski](/pl/blog/sklep-polski-zakupy).",
 },

 "recipe-zapiekanka": {
 dishDe: "Zapiekanka",
 dishPl: "Zapiekanka",
 vibeDe:
 "knuspriges Baguette, Pilze, Schinken, Käse-Schmelz, Ketchup — Straßenfood-Nostalgie",
 vibePl:
 "chrupiąca bagietka, pieczarki, szynka, ser, keczup — nostalgia uliczna",
 originDe:
 "Zapiekanka ist das polnische Straßen-Baguette: längs aufgeschnitten, mit ausgedämpften Champignons (± Schinken) und Käse überbacken, klassisch mit Ketchup. Form und Schmelz machen den Charakter — nicht die gerollte Panade von [Krokiety](/de/rezepte/krokiety) und nicht die dünne Platte von [Naleśniki](/de/rezepte/nalesniki/twarog). Einkauf und Alltag in der Diaspora klärt der [Polenladen](/de/blog/polenladen-einkaufen); ehrliche Alternativen stehen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Am Feierabend oft schneller als ein volles [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 originPl:
 "Zapiekanka to polska bagietka uliczna: przekrojona wzdłuż, z odparowanymi pieczarkami (± szynką) i serem, klasycznie z keczupem. Formę i roztopienie sera niosą charakter — nie zwijaną panierkę [krokietów](/pl/rezepte/krokiety) i nie cienką płytę [naleśników](/pl/rezepte/nalesniki/twarog). Zakupy i codzienność diasporową porządkuje [sklep polski](/pl/blog/sklep-polski-zakupy); uczciwe zamienniki znajdziesz pod [zamiennikami](/pl/blog/zamienniki-skladnikow). Po pracy często szybsza niż pełny [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 shopDe:
 "Für Street-Feeling reichen ein knuspriges Baguette, Champignons und Zwiebel sowie Schinken, schmelzfähiger Käse, Butter oder Öl und Ketchup. Basis liegt im Supermarkt; Schinken und Käse mit Charakter findest du im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt eine Sorte, hilft [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Wer Rollen mit Panade will, geht zu [Krokiety](/de/rezepte/krokiety); wer Pfannkuchen füllen will, zu [Naleśniki](/de/rezepte/nalesniki/twarog).",
 shopPl:
 "Na uliczny charakter wystarczy chrupiąca bagietka, pieczarki i cebula oraz szynka, ser do pieczenia, masło lub olej i keczup. Baza jest w markecie; szynkę i ser z charakterem kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Brakuje odmiany — pomaga [zamienniki](/pl/blog/zamienniki-skladnikow). Kto chce rolki z panierką, idzie do [krokietów](/pl/rezepte/krokiety); kto naleśniki — do [naleśników](/pl/rezepte/nalesniki/twarog).",
 techniqueDe:
 "Dämpfe die Pilze gut aus, sonst wird das Brot nass. Röste das Baguette an, verteile den Belag gleichmäßig und gib Käse großzügig darüber. Backe bis zum Schmelz mit knusprigen Rändern — zu lange wird das Brot hart. Ketchup kommt erst nach dem Ofen. Vegetarisch: Schinken weglassen und ehrlich benennen.",
 techniquePl:
 "Odparuj pieczarki dokładnie, inaczej chleb robi się mokry. Podpiecz bagietkę, rozłóż farsz równo i daj ser hojnie. Piecz do roztopu i chrupkich brzegów — za długo chleb twardnieje. Keczup dodaj dopiero po pieczeniu. Wersja wegetariańska: bez szynki, nazwij uczciwie.",
 serveDe:
 "Heiß aus der Hand oder auf Brett, längs oder in Stücken, Ketchup-Strich, optional Schnittlauch. Alltag neben [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Nicht mit [Pierogi](/de/rezepte/pierogi/ruskie) oder [Krokiety](/de/rezepte/krokiety) mischen. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten.",
 servePl:
 "Gorące z ręki lub na desce, wzdłuż lub w kawałkach, keczup, opcjonalnie szczypiorek. Codzienność obok [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Nie mieszać z [pierogami](/pl/rezepte/pierogi/ruskie) ani [krokietami](/pl/rezepte/krokiety). W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności.",
 diasporaDe:
 "In DE oft Freitagabend oder nach dem Training — 20 Minuten, wenig Geschirr. Kinder streuen Käse; heißer Ofen bei Erwachsenen. Ein Baguette reicht für vier Portionen. Nostalgie ohne Restaurantfahrt. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du Spezialzutaten; Alternativen stehen unter [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
 diasporaPl:
 "W DE często piątkowy wieczór lub po treningu — 20 minut, mało naczyń. Dzieci sypią ser; gorący piekarnik u dorosłych. Jedna bagietka na cztery porcje. Nostalgia bez restauracji. W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz specjalności; zamienniki znajdziesz w [zamienniki](/pl/blog/zamienniki-skladnikow).",
 mistakesDe:
 "Nasse Pilze aufs Brot. Mit [Krokiety](/de/rezepte/krokiety) oder [Naleśniki](/de/rezepte/nalesniki/twarog) verwechseln. Runde Pizza statt Baguette-Form. Käse sparen — dann kein Street-Feeling.",
 mistakesPl:
 "Mokre pieczarki na chlebie robią bagietkę rozmokłą. Mylenie z [krokietami](/pl/rezepte/krokiety) lub [naleśnikami](/pl/rezepte/nalesniki/twarog) gubi formę. Okrągła pizza zamiast bagietki zmienia danie. Za mało sera — brakuje ulicznego charakteru.",
 variantsDe:
 "Nur Pilze (vegetarisch ehrlich); mit Kiełbasa statt Schinken; schärferer Ketchup. Passende Nachbarn sind [Krokiety](/de/rezepte/krokiety), [Naleśniki](/de/rezepte/nalesniki/twarog), [Pierogi](/de/rezepte/pierogi/ruskie). Guides: [Polenladen](/de/blog/polenladen-einkaufen), [Ersatzprodukte](/de/blog/ersatzprodukte-de), [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 variantsPl:
 "Tylko pieczarki (wege uczciwie); z kiełbasą zamiast szynki; ostrzejszy keczup. Pasujący sąsiedzi to [krokiety](/pl/rezepte/krokiety), [naleśniki](/pl/rezepte/nalesniki/twarog), [pierogi](/pl/rezepte/pierogi/ruskie). Przewodniki: [sklep polski](/pl/blog/sklep-polski-zakupy), [zamienniki](/pl/blog/zamienniki-skladnikow), [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 },
};
