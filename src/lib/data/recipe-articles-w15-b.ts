/**
 * Wave 15 Paket B — FACTS for Galareta + Sałatka śledziowa.
 * Isolated export `W15_FACTS_B` — Integrator merges into recipe-articles.ts FACTS map.
 * Shape matches ArticleFacts in recipe-articles.ts.
 *
 * Ownership:
 * - Galareta / nóźki w galarecie → /rezepte/galareta
 *   ≠ Pasztet ≠ Sałatka jarzynowa ≠ Jajka faszerowane
 * - Sałatka śledziowa → /rezepte/salatka-sledziowa
 *   ≠ Śledź w oleju ≠ Sałatka jarzynowa
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
      "Galareta — oft als nóźki w galarecie — ist das Rezept für kalte Sülze: Fleischstücke in klarem, schnittfestem Gelee aus lang gekochter Knochen- und Hautbrühe. Hier eine klare Hauslinie: Schweinefüße plus etwas Fleisch, Lorbeer/Piment, Knoblauch, kalt gestürzt. Das ist bewusst keine Pastete und kein Mayo-Salat. [Pasztet](/de/rezepte/pasztet) bleibt beim Rezept der gebackenen Leber-/Fleischpastete auf dem Aufschnitt. [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) bleibt der Mayo-Festsalat aus Gemüsewürfeln. [Jajka faszerowane](/de/rezepte/jajka-faszerowane) sind gefüllte Eier — Nachbar auf der kalten Platte, nicht dasselbe Gericht. Am [Wielkanoc Speiseplan](/de/blog/wielkanoc-speiseplan) und im [Sonntagsessen](/de/blog/sonntagsessen-polnisch) steht Galareta oft neben Wurst und Brot — Speiseplan und Sonntagskultur bleiben bei Speiseplan und Sonntagskultur — hier nur Mengen und Schritte. In der Diaspora ist Galareta der Moment, in dem Kollagen aus nóźki die Brühe trägt und der Kühlschrank die Arbeit beendet: lange köcheln, klären, schichten, über Nacht fest werden. Keine Pfanne mit warmer Soße, keine Pastetenmasse, keine Mayo-Gemüsewürfel. Eng bei „Galareta / nóźki w galarecie / Schweinefüße Aspik“ bleiben. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du Spezialzutaten; Alternativen stehen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
    originPl:
      "Galareta — często jako nóźki w galarecie — to przepis na zimną galaretkę: kawałki mięsa w klarnej, krajalnej galaretce z długiego wywaru z kości i skóry. Tu jasna linia domu: nóżki plus trochę mięsa, liść laurowy/ziele angielskie, czosnek, na zimno z formy. Świadomie nie pasztet i nie sałatka majonezowa. [Pasztet](/pl/rezepte/pasztet) zostaje przy przepisie na pieczoną pastę na zimnej półce. [Sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa) zostaje majonezową sałatką z kostek warzyw. [Jajka faszerowane](/pl/rezepte/jajka-faszerowane) to faszerowane jajka — sąsiad na półmisku, nie to samo danie. Przy [menu wielkanocnym](/pl/blog/menu-wielkanocne) i [obiadzie niedzielnym](/pl/blog/obiad-niedzielny) galareta bywa obok kiełbasy i chleba — plan i kultura niedzieli zostają przy planie okazji i kulturze niedzieli — tu tylko ilości i kroki. W diasporze galareta to moment, gdy kolagen z nóżek niesie wywar, a lodówka kończy pracę: długo gotować, klarować, układać, na noc zestalić. Bez patelni z gorącym sosem, bez masy pasztetowej, bez majonezowych kostek. Trzymać wąsko „galareta / nóźki w galarecie”. W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz specjalności; zamienniki znajdziesz w [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
    shopDe:
      "Schweinefüße (nóźki), etwas Schweinefleisch mit Knochen, Zwiebel, Karotte, Sellerie, Lorbeer, Piment, Pfefferkörner, Knoblauch, Salz; Essig oder Meerrettich zum Servieren. Nóźki und gute Gewürze oft im [Polenladen](/de/blog/polenladen-einkaufen); Basis im Metzger/Supermarkt. Wenn nóźki knapp: ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) — mehr Knochen/Haut oder Gelatine nur als Notlösung benennen, nicht als „dasselbe“. Keine Leber-Pastetenmasse: das wäre [Pasztet](/de/rezepte/pasztet). Keine Mayo und Gemüsewürfel als Kern: [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Keine gefüllten Eier als Fokus dieses Gerichts: [Jajka faszerowane](/de/rezepte/jajka-faszerowane).",
    shopPl:
      "Nóżki wieprzowe, trochę mięsa z kością, cebula, marchew, seler, liść laurowy, ziele angielskie, pieprz, czosnek, sól; ocet lub chrzan do podania. Nóżki i przyprawy często w [sklepie polskim](/pl/blog/sklep-polski-zakupy); baza u rzeźnika/w markecie. Gdy brak nóżek: uczciwie według [zamienników składników](/pl/blog/zamienniki-skladnikow) — więcej kości/skóry lub żelatyna tylko jako awaryjne rozwiązanie, nie jako „to samo”. Bez masy pasztetowej: to [pasztet](/pl/rezepte/pasztet). Bez majonezu i kostek warzyw jako rdzenia: [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Bez faszerowanych jaj jako fokusu tego dania: [jajka faszerowane](/pl/rezepte/jajka-faszerowane).",
    techniqueDe:
      "Lange, sanfte Kochzeit ist Pflicht: Kollagen aus Haut und Knochen muss in die Brühe. Schaum abschöpfen; nicht heftig wallen — trübe Brühe macht trübes Gelee. Fleisch zupfen, Brühe klären und entfetten, kräftig (mit Knoblauch) abschmecken. In Formen schichten, heiß übergießen, ungestört kalt fest werden lassen — mindestens über Nacht. Zu wenig Kollagen = wackelige, nicht schnittfeste Masse; zu viel Fett = milchiges Gelee. Eine Hausvariante festhalten: nóźki + Fleisch + Knoblauch-Klarbrühe (keine Pastete, keine Mayo-Bindung).",
    techniquePl:
      "Długie, delikatne gotowanie jest obowiązkowe: kolagen ze skóry i kości musi wejść do wywaru. Zbierać szumowiny; nie wrzeć gwałtownie — mętny wywar = mętna galaretka. Mięso rozdrobnić, wywar klarować i odtłuścić, doprawić (z czosnkiem). Układać w foremki, zalać gorącym, zestalić na zimno — co najmniej na noc. Za mało kolagenu = galaretka niekrajalna; za dużo tłuszczu = mleczna. Trzymać jeden wariant domu: nóżki + mięso + klarowny wywar z czosnkiem (bez pasztetu, bez majonezu).",
    serveDe:
      "Kalt gestürzt oder geschnitten, mit Essig, Meerrettich oder Senf. Als Fest-/Sonntagselement descriptiv unter [Wielkanoc](/de/blog/wielkanoc-speiseplan) und [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Abgrenzung auf dem Tisch: Pastete = [Pasztet](/de/rezepte/pasztet); Mayo-Gemüse = [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa); gefüllte Eier = [Jajka faszerowane](/de/rezepte/jajka-faszerowane). Hält einige Tage gekühlt; vor dem Servieren auf Klarheit und Schnittfestigkeit prüfen.",
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
      "Sałatka śledziowa ist das Rezept für den cremigen Heringssalat mit Mayo (oft plus Śmietana), Zwiebel, Apfel, Ei und Gurke — bewusst keine Öl-Filet-Linie und kein Gemüse-Festsalat ohne Fisch. [Śledź w oleju](/de/rezepte/sledz) bleibt beim Rezept der kalten Filets mit Zwiebel und Öl. [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) bleibt beim Rezept des Mayo-Gemüsesalats aus Kartoffel, Karotte, Erbsen — ohne Hering als Kern. Am [Wigilia Speiseplan](/de/blog/wigilia-speiseplan) stehen beide Hering-Formen oft nebeneinander — der Speiseplan bleibt beim Anlass-Guide — hier nur Mengen und Schritte für die Mayo-Salat-Linie. In der Diaspora ist Sałatka śledziowa der Moment, in dem abgetropfte Filets und eine cremige Bindung den Buffet-Topf füllen: würfeln, unterheben, kalt ziehen. Keine bloßen Filets auf dem Teller als dieses Gericht, keine Kartoffel-Erbsen-Mayo ohne Fisch. Eng bei „Sałatka śledziowa / Heringssalat Mayo“ bleiben. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du Spezialzutaten; Alternativen stehen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Sonntagskultur descriptiv unter [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    originPl:
      "Sałatka śledziowa to przepis na kremową sałatkę ze śledziem i majonezem (często ze śmietaną), cebulą, jabłkiem, jajkiem i ogórkiem — świadomie nie linia filetów w oleju i nie sałatka warzywna bez ryby. [Śledź w oleju](/pl/rezepte/sledz) zostaje przy przepisie na zimne filety z cebulą i olejem. [Sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa) zostaje przy przepisie na majonezową sałatkę z ziemniaka, marchwi, groszku — bez śledzia jako rdzenia. Przy [menu wigilijnym](/pl/blog/menu-wigilijne) obie formy śledzia bywają obok siebie — plan menu zostaje przy przewodniku okazji — tu tylko ilości i kroki linii majonezowej. W diasporze sałatka śledziowa to moment, gdy odsączone filety i kremowe spoiwo wypełniają miskę bufetową: pokroić, wmieszać, schłodzić. Bez samych filetów na talerzu jako tego dania, bez majonezu ziemniaczano-groszkowego bez ryby. Trzymać wąsko „sałatka śledziowa”. W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz specjalności; zamienniki znajdziesz w [zamienniki składników](/pl/blog/zamienniki-skladnikow). Niedziela opisowo pod [obiadem niedzielnym](/pl/blog/obiad-niedzielny).",
    shopDe:
      "Hering-/Matjesfilets, Mayonnaise, optional Śmietana, Zwiebel, säuerlicher Apfel, hartgekochte Eier, Gewürz- oder Salzgurken, Salz, Pfeffer, Prise Zucker, optional Schnittlauch. Filets und oft bessere Mayo im [Polenladen](/de/blog/polenladen-einkaufen); Basis im Supermarkt. Wenn Filets oder Mayo knapp: ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) — kein Öl-Hering als „dasselbe Gericht“. Keine reine Öl-Zwiebel-Linie: das bleibt [Śledź](/de/rezepte/sledz). Kein Kartoffel-Erbsen-Sellerie-Topf ohne Fisch: [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa).",
    shopPl:
      "Filety śledziowe/matjasy, majonez, opcjonalnie śmietana, cebula, kwaskowe jabłko, jajka na twardo, ogórki, sól, pieprz, szczypta cukru, opcjonalnie szczypiorek. Filety i często lepszy majonez w [sklepie polskim](/pl/blog/sklep-polski-zakupy); baza w markecie. Gdy brak filetów lub majonezu: uczciwie według [zamienników składników](/pl/blog/zamienniki-skladnikow) — bez śledzia w oleju jako „tego samego dania”. Bez samej linii olej-cebula: to zostaje [śledź](/pl/rezepte/sledz). Bez garnka ziemniak-groszek-seler bez ryby: [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa).",
    techniqueDe:
      "Filets gut abtropfen — zu viel Lake macht wässrigen Salat. Zwiebel gegen Schärfe optional blanchieren. Alles würfeln, dann Mayo (± Śmietana) unterheben bis cremig gebunden, nicht flüssig. Mindestens ein bis zwei Stunden kalt ziehen. Zu wenig Mayo = bröckelnd; zu viel = Matsch ohne Hering-Charakter. Eine Hausvariante festhalten: Hering + Mayo + Zwiebel + Apfel + Ei + Gurke (keine Öl-Filet-Linie, keine Jarzynowa ohne Fisch).",
    techniquePl:
      "Filety dobrze odsączyć — za dużo zalewy = wodnista sałatka. Cebulę opcjonalnie zalać wrzątkiem. Pokroić, potem wmieszać majonez (± śmietanę) do kremowego związania, nie rzadkości. Chłodzić co najmniej godzinę–dwie. Za mało majonezu = kruszy się; za dużo = papka bez charakteru śledzia. Trzymać jeden wariant domu: śledź + majonez + cebula + jabłko + jajko + ogórek (bez linii oleju, bez jarzynowej bez ryby).",
    serveDe:
      "Kalt in Schüssel, oft mit Schnittlauch. Wigilia descriptiv unter [Wigilia Speiseplan](/de/blog/wigilia-speiseplan); Sonntag unter [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Abgrenzung: Öl-Filets = [Śledź](/de/rezepte/sledz); Mayo-Gemüse ohne Hering = [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Hält einen Tag gekühlt am besten; vor dem Servieren cremig nachrühren.",
    servePl:
      "Na zimno w misce, często ze szczypiorkiem. Wigilia opisowo pod [menu wigilijnym](/pl/blog/menu-wigilijne); niedziela pod [obiadem niedzielnym](/pl/blog/obiad-niedzielny). Na stole: filety w oleju = [śledź](/pl/rezepte/sledz); warzywa majonezowe bez śledzia = [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Najlepiej trzyma dzień w chłodzie; przed podaniem wymieszać do kremowości.",
    diasporaDe:
      "In DE rettet der Mayo-Heringssalat oft den Buffet-Slot, wenn Öl-Hering schon auf dem Tisch steht — zwei Intents, ein Fisch. Matjes aus dem Glas und gute Supermarkt-Mayo sind diaspora-ehrlich. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten. Alternativen stehen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Menü-Nachbar: [Wigilia](/de/blog/wigilia-speiseplan).",
    diasporaPl:
      "W DE majonezowa sałatka śledziowa często ratuje slot bufetowy, gdy śledź w oleju już stoi na stole — dwa intent, jedna ryba. Matjasy ze słoika i dobry majonez z marketu są uczciwe w diasporze. W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności. Zamienniki znajdziesz w [zamienniki składników](/pl/blog/zamienniki-skladnikow). Sąsiad menu: [menu wigilijne](/pl/blog/menu-wigilijne).",
    mistakesDe:
      "Mit Śledź w oleju verwechseln (Filets/Öl statt Mayo-Salat). Mit Sałatka jarzynowa verwechseln (Gemüse ohne Hering). Zu wässrig; zu wenig Kühlzeit; Speiseplan stehlen. Generisches „Heringssalat“ ohne Sałatka śledziowa.",
    mistakesPl:
      "Mylenie ze śledziem w oleju (filety/olej zamiast sałatki majonezowej). Mylenie z sałatką jarzynową (warzywa bez śledzia). Za wodnista; za krótko chłodzona; kradzież planu. Generyczna nazwa bez „sałatka śledziowa”.",
    variantsDe:
      "Mehr Apfel süßer; mehr Gurke säuerlicher; mit Śmietana leichter. Öl-Linie: [Śledź](/de/rezepte/sledz). Festgemüse: [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Zum Anlass passt [Wigilia](/de/blog/wigilia-speiseplan). Alltag: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen.",
    variantsPl:
      "Z większą ilością jabłka słodziej; z większą ilością ogórka kwaśniej; ze śmietaną lżej. Linia oleju: [śledź](/pl/rezepte/sledz). Warzywa: [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Do okazji pasuje [menu wigilijne](/pl/blog/menu-wigilijne). Dzień: [obiad niedzielny](/pl/blog/obiad-niedzielny). W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe.",
  },
};
