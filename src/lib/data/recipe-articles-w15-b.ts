/**
 * Wave 15 Paket B — FACTS for Galareta + Sałatka śledziowa.
 * Isolated export `W15_FACTS_B` — Integrator merges into recipe-articles.ts FACTS map.
 * Shape matches ArticleFacts in recipe-articles.ts.
 *
 * Ownership:
 * - Galareta / nóźki w galarecie → /rezepte/galareta
 * ≠ Pasztet ≠ Sałatka jarzynowa ≠ Jajka faszerowane
 * - Sałatka śledziowa → /rezepte/salatka-sledziowa
 * ≠ Śledź w oleju ≠ Sałatka jarzynowa
 * Wigilia / Wielkanoc / Sonntagsessen bleiben Anlass-/Kultur-Guides.
 * Affiliate: guide-only
 */

type ArticleFacts = {
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

export const W15_FACTS_B: Record<string, ArticleFacts> = {
 "recipe-galareta": {
 dishDe: "Galareta / nóźki w galarecie",
 dishPl: "Galareta / nóźki w galarecie",
 vibeDe: "kalt, klar-gelee, knoblauchwürzig, Festbuffet und Aufschnitt",
 vibePl: "zimna, klarna galaretka, czosnkowa, bufet i zimna półka",
 originDe:
 "Galareta — oft als nóźki w galarecie — ist kalte Sülze: Fleischstücke in klarem, schnittfestem Gelee aus lang gekochter Knochen- und Hautbrühe. Schweinefüße plus etwas Fleisch, Lorbeer, Piment und Knoblauch, kalt gestürzt. Das ist keine Pastete und kein Mayo-Salat: [Pasztet](/de/rezepte/pasztet) bleibt gebackene Leber-/Fleischpastete, [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) der Festsalat aus Gemüsewürfeln, [Jajka faszerowane](/de/rezepte/jajka-faszerowane) gefüllte Eier auf der kalten Platte. Am [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan) und im [Sonntagsessen](/de/blog/sonntagsessen-polnisch) steht Galareta oft neben Wurst und Brot. In der Diaspora ist sie der Moment, in dem Kollagen aus nóźki die Brühe trägt und der Kühlschrank die Arbeit erledigt.",
 originPl:
 "Galareta — często nóźki w galarecie — to zimna galareta: kawałki mięsa w klarownym, krojonym galarecie z długo gotowanego wywaru z kości i skóry. Nóżki plus trochę mięsa, liść laurowy, ziele angielskie i czosnek, studzone i stężone. To nie pasztet i nie sałatka majonezowa: [pasztet](/pl/rezepte/pasztet) zostaje pieczoną pastą, [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa) sałatką z warzyw, [jajka faszerowane](/pl/rezepte/jajka-faszerowane) jajkami na zimnej półmise. Przy [menu wielkanocnym](/pl/blog/menu-wielkanocne) i [obiedzie niedzielnym](/pl/blog/obiad-niedzielny) często stoi obok kiełbasy i chleba. W diasporze to moment, gdy kolagen z nóżek niesie wywar, a lodówka kończy robotę.",
 shopDe:
 "Für tragfähiges Gelee brauchst du Schweinefüße (nóźki) und etwas Fleisch mit Knochen — dazu Zwiebel, Karotte, Sellerie, Lorbeer, Piment, Pfefferkörner, Knoblauch und Salz. Essig oder Meerrettich reichst du erst am Tisch. Nóżki und typische Gewürze holst du oft im [Polenladen](/de/blog/polenladen-einkaufen); fehlt etwas, hilft [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Pastete und Mayo-Salat bleiben eigene Rezepte: [Pasztet](/de/rezepte/pasztet) und [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa).",
 shopPl:
 "Żeby galareta stężała, potrzebujesz nóżek wieprzowych i trochę mięsa z kością — plus cebula, marchew, seler, liść laurowy, ziele angielskie, pieprz, czosnek i sól. Ocet lub chrzan podajesz dopiero przy stole. Nóżki i typowe przyprawy często kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy); brak — pomaga [zamienniki](/pl/blog/zamienniki-skladnikow). Pasztet i sałatka majonezowa zostają osobnymi przepisami: [pasztet](/pl/rezepte/pasztet) i [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa).",
 techniqueDe:
 "Lange, sanfte Kochzeit ist Pflicht: Kollagen aus Haut und Knochen muss in die Brühe. Schaum abschöpfen; nicht heftig wallen — trübe Brühe macht trübes Gelee. Fleisch zupfen, Brühe klären und entfetten, kräftig (mit Knoblauch) abschmecken. In Formen schichten, heiß übergießen, ungestört kalt fest werden lassen — mindestens über Nacht. Zu wenig Kollagen = wackelige, nicht schnittfeste Masse; zu viel Fett = milchiges Gelee. Eine Hausvariante festhalten: nóźki + Fleisch + Knoblauch-Klarbrühe (keine Pastete, keine Mayo-Bindung).",
 techniquePl:
 "Długie, delikatne gotowanie jest obowiązkowe: kolagen ze skóry i kości musi wejść do wywaru. Zbierać szumowiny; nie wrzeć gwałtownie — mętny wywar = mętna galaretka. Mięso rozdrobnić, wywar klarować i odtłuścić, doprawić (z czosnkiem). Układać w foremki, zalać gorącym, zestalić na zimno — co najmniej na noc. Za mało kolagenu = galaretka niekrajalna; za dużo tłuszczu = mleczna. Trzymać jeden wariant domu: nóżki + mięso + klarowny wywar z czosnkiem (bez pasztetu, bez majonezu).",
 serveDe:
 "Kalt gestürzt oder geschnitten, mit Essig, Meerrettich oder Senf. Als Fest-/Sonntagselement unter [Wielkanoc](/de/blog/wielkanoc-speiseplan) und [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Auf dem Tisch klar halten: Pastete = [Pasztet](/de/rezepte/pasztet); Mayo-Gemüse = [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa); gefüllte Eier = [Jajka faszerowane](/de/rezepte/jajka-faszerowane). Hält einige Tage gekühlt; vor dem Servieren auf Klarheit und Schnittfestigkeit prüfen.",
 servePl:
 "Na zimno z formy lub pokrojona, z octem, chrzanem lub musztardą. Jako element świąt/niedzieli opisowo pod [menu wielkanocnym](/pl/blog/menu-wielkanocne) i [obiadem niedzielnym](/pl/blog/obiad-niedzielny). Na stole: pasta = [pasztet](/pl/rezepte/pasztet); warzywa majonezowe = [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa); jajka = [jajka faszerowane](/pl/rezepte/jajka-faszerowane). Trzyma kilka dni w chłodzie; przed podaniem sprawdzić klarowność i krajalność.",
 diasporaDe:
 "In DE retten nóźki aus dem Polenladen oft den Kollagen-Job, wenn Supermarkt-Haxe allein zu mager ist. Lange Kochzeit am Vortag, Kühlschrank über Nacht — der Festtag selbst bleibt ruhig. Kein Affiliate-Zwang: Topf, Sieb, Formen reichen. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten. Alternativen stehen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Kultur-Passende Nachbarn sind [Wielkanoc](/de/blog/wielkanoc-speiseplan), [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 diasporaPl:
 "W DE nóżki ze sklepu polskiego często ratują kolagen, gdy sama golonka z marketu jest zbyt chuda. Długie gotowanie dzień wcześniej, lodówka na noc — sam dzień świąt zostaje spokojny. Bez affiliate: garnek, sito, foremki wystarczą. W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności. Zamienniki znajdziesz w [zamienniki składników](/pl/blog/zamienniki-skladnikow). Sąsiedzi kultury: [menu wielkanocne](/pl/blog/menu-wielkanocne), [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 mistakesDe:
 "Mit Pasztet verwechseln (Pastete statt Gelee). Mit Sałatka oder Jajka faszerowane verwechseln. Zu kurze Kochzeit; trübe ungeklärte Brühe; heiß servieren; den Speiseplan ersetzen wollen. Generisches „Aspik“ ohne Galareta/nóźki.",
 mistakesPl:
 "Mylenie z pasztetem (pasta zamiast galaretki). Mylenie z sałatką lub jajkami faszerowanymi. Za krótkie gotowanie; mętny wywar; podawanie na ciepło; chęć zastąpienia planu menu. Generyczne „aspic” bez nazwy galareta/nóźki.",
 variantsDe:
 "Mehr Knoblauch schärfer; mit Karottenscheiben in der Form; milder mit weniger Piment. Pastete bleibt [Pasztet](/de/rezepte/pasztet). Festsalat: [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Buffet-Nachbar: [Jajka faszerowane](/de/rezepte/jajka-faszerowane). Anlass: [Wielkanoc](/de/blog/wielkanoc-speiseplan), [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen.",
 variantsPl:
 "Z większą ilością czosnku ostrzej; z plasterkami marchewki w formie; łagodniej z mniejszą ilością ziela. Pasta: [pasztet](/pl/rezepte/pasztet). Sałatka: [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Sąsiad bufetu: [jajka faszerowane](/pl/rezepte/jajka-faszerowane). Okazja: [menu wielkanocne](/pl/blog/menu-wielkanocne), [obiad niedzielny](/pl/blog/obiad-niedzielny). W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe.",
 },
 "recipe-salatka-sledziowa": {
 dishDe: "Sałatka śledziowa",
 dishPl: "Sałatka śledziowa",
 vibeDe: "cremig-mayo, zwiebelig-apflig, kalt für Buffet und Wigilia",
 vibePl: "kremowo-majonezowa, cebulowo-jabłkowa, zimna na bufet i Wigilię",
 originDe:
 "Sałatka śledziowa ist der cremige Heringssalat mit Mayo (oft plus Śmietana), Zwiebel, Apfel, Ei und Gurke — bewusst keine Öl-Filet-Linie und kein Gemüse-Festsalat ohne Fisch. [Śledź w oleju](/de/rezepte/sledz) bleibt bei kalten Filets mit Zwiebel und Öl; [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) beim Mayo-Gemüsesalat ohne Hering als Kern. Am [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan) stehen beide Hering-Formen oft nebeneinander. In der Diaspora füllen abgetropfte Filets und eine cremige Bindung den Buffet-Topf. Einkauf im [Polenladen](/de/blog/polenladen-einkaufen); Alternativen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
 originPl:
 "Sałatka śledziowa to kremowa sałatka ze śledziem i majonezem (często ze śmietaną), cebulą, jabłkiem, jajkiem i ogórkiem — świadomie nie linia filetów w oleju i nie sałatka warzywna bez ryby. [Śledź w oleju](/pl/rezepte/sledz) zostaje przy zimnych filetach; [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa) przy majonezowej sałatce bez śledzia jako rdzenia. Przy [menu wigilijnym](/pl/blog/menu-wigilijne) obie formy bywają obok siebie. W diasporze odsączone filety i kremowe spoiwo wypełniają miskę bufetową. Zakupy w [sklepie polskim](/pl/blog/sklep-polski-zakupy); zamienniki pod [zamiennikami](/pl/blog/zamienniki-skladnikow).",
 shopDe:
 "Nimm Hering- oder Matjesfilets, gute Mayonnaise und optional etwas Śmietana — dazu Zwiebel, einen säuerlichen Apfel, hartgekochte Eier, Gewürz- oder Salzgurken sowie Salz, Pfeffer und eine Prise Zucker; Schnittlauch zum Schluss. Filets und oft bessere Mayo findest du im [Polenladen](/de/blog/polenladen-einkaufen). Das ist bewusst kein klarer [Śledź w oleju](/de/rezepte/sledz) und kein Gemüse-[Jarzynowa](/de/rezepte/salatka-jarzynowa)-Salat — hier trägt der Hering die Mayo-Schüssel.",
 shopPl:
 "Weź filety śledziowe lub matjasy, dobry majonez i opcjonalnie odrobinę śmietany — plus cebula, kwaskowe jabłko, jajka na twardo, ogórki kiszone lub konserwowe oraz sól, pieprz i szczypta cukru; na koniec szczypiorek. Filety i często lepszy majonez kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). To świadomie nie klarowny [śledź w oleju](/pl/rezepte/sledz) i nie warzywna [jarzynowa](/pl/rezepte/salatka-jarzynowa) — tu śledź prowadzi miskę majonezową.",
 techniqueDe:
 "Filets gut abtropfen — zu viel Lake macht wässrigen Salat. Zwiebel gegen Schärfe optional blanchieren. Alles würfeln, dann Mayo (± Śmietana) unterheben bis cremig gebunden, nicht flüssig. Mindestens ein bis zwei Stunden kalt ziehen. Zu wenig Mayo = bröckelnd; zu viel = Matsch ohne Hering-Charakter. Eine Hausvariante festhalten: Hering + Mayo + Zwiebel + Apfel + Ei + Gurke (keine Öl-Filet-Linie, keine Jarzynowa ohne Fisch).",
 techniquePl:
 "Filety dobrze odsączyć — za dużo zalewy = wodnista sałatka. Cebulę opcjonalnie zalać wrzątkiem. Pokroić, potem wmieszać majonez (± śmietanę) do kremowego związania, nie rzadkości. Chłodzić co najmniej godzinę–dwie. Za mało majonezu = kruszy się; za dużo = papka bez charakteru śledzia. Trzymać jeden wariant domu: śledź + majonez + cebula + jabłko + jajko + ogórek (bez linii oleju, bez jarzynowej bez ryby).",
 serveDe:
 "Kalt in Schüssel, oft mit Schnittlauch. Wigilia unter [Wigilia Speiseplan](/de/blog/wigilia-speiseplan); Sonntag unter [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Auf dem Tisch klar halten: Öl-Filets = [Śledź](/de/rezepte/sledz); Mayo-Gemüse ohne Hering = [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Hält einen Tag gekühlt am besten; vor dem Servieren cremig nachrühren.",
 servePl:
 "Na zimno w misce, często ze szczypiorkiem. Wigilia opisowo pod [menu wigilijnym](/pl/blog/menu-wigilijne); niedziela pod [obiadem niedzielnym](/pl/blog/obiad-niedzielny). Na stole: filety w oleju = [śledź](/pl/rezepte/sledz); warzywa majonezowe bez śledzia = [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Najlepiej trzyma dzień w chłodzie; przed podaniem wymieszać do kremowości.",
 diasporaDe:
 "In DE rettet der Mayo-Heringssalat oft den Buffet-Slot, wenn Öl-Hering schon auf dem Tisch steht — zwei Gerichte, ein Fisch. Matjes aus dem Glas und gute Supermarkt-Mayo sind diaspora-ehrlich. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten. Alternativen stehen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Menü-Nachbar: [Wigilia](/de/blog/wigilia-speiseplan).",
 diasporaPl:
 "W DE majonezowa sałatka śledziowa często ratuje slot bufetowy, gdy śledź w oleju już stoi na stole — dwa dania, jedna ryba. Matjasy ze słoika i dobry majonez z marketu są uczciwe w diasporze. W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności. Zamienniki znajdziesz w [zamienniki składników](/pl/blog/zamienniki-skladnikow). Sąsiad menu: [menu wigilijne](/pl/blog/menu-wigilijne).",
 mistakesDe:
 "Mit Śledź w oleju verwechseln (Filets/Öl statt Mayo-Salat). Mit Sałatka jarzynowa verwechseln (Gemüse ohne Hering). Zu wässrig; zu wenig Kühlzeit; den Speiseplan hier zu duplizieren. Generisches „Heringssalat“ ohne Sałatka śledziowa.",
 mistakesPl:
 "Mylenie ze śledziem w oleju (filety/olej zamiast sałatki majonezowej). Mylenie z sałatką jarzynową (warzywa bez śledzia). Za wodnista; za krótko chłodzona; kopiowanie planu. Generyczna nazwa bez „sałatka śledziowa”.",
 variantsDe:
 "Mehr Apfel süßer; mehr Gurke säuerlicher; mit Śmietana leichter. Öl-Linie: [Śledź](/de/rezepte/sledz). Festgemüse: [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Zum Anlass passt [Wigilia](/de/blog/wigilia-speiseplan). Alltag: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen.",
 variantsPl:
 "Z większą ilością jabłka słodziej; z większą ilością ogórka kwaśniej; ze śmietaną lżej. Linia oleju: [śledź](/pl/rezepte/sledz). Warzywa: [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Do okazji pasuje [menu wigilijne](/pl/blog/menu-wigilijne). Dzień: [obiad niedzielny](/pl/blog/obiad-niedzielny). W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe.",
 },
};
