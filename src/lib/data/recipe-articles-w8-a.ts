/**
 * Wave 8 Paket A — FACTS for Mizeria + Kapusta zasmażana.
 * E merges into seed.ts / recipe-articles.ts FACTS map — do not import here until Integrator.
 */

export type W8ArticleFacts = {
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

export const W8_FACTS_A: Record<string, W8ArticleFacts> = {
  "recipe-mizeria": {
    dishDe: "Mizeria",
    dishPl: "Mizeria",
    vibeDe: "kühl, cremig-säuerlich, nach Dill und frischer Gurke",
    vibePl: "chłodna, kremowo-kwaśna, z koperkiem i świeżym ogórkiem",
    originDe:
      "Mizeria ist der klassische polnische Gurkensalat mit Śmietana — keine kalte Suppe und kein [Chłodnik](/de/rezepte/chlodnik-litewski). Der Name klingt nach „Elend“, meint aber den einfachen, erfrischenden Teller neben Fleisch. In vielen Haushalten gehört Mizeria zum Sonntag und zu Ostern: sie kühlt den Gaumen nach knusprigem [Kotlet schabowy](/de/rezepte/kotlet-schabowy) und bringt Säure ohne Essig-Dominanz. Die Idee ist Präzision bei der Feuchtigkeit: Gurke salzen, Saft ziehen lassen, dann erst mit Sahne verbinden — sonst wird aus Beilage eine Pfütze.",
    originPl:
      "Mizeria to klasyczna polska sałatka z ogórków ze śmietaną — nie chłodna zupa i nie [chłodnik](/pl/rezepte/chlodnik-litewski). Nazwa brzmi surowo, ale chodzi o prosty, orzeźwiający talerz obok mięsa. W wielu domach mizeria należy do niedzieli i Wielkanocy: chłodzi podniebienie po chrupiącym [kotlecie schabowym](/pl/rezepte/kotlet-schabowy) i daje kwas bez dominacji octu. Klucz to wilgotność: ogórek posolić, odciągnąć sok, dopiero potem łączyć ze śmietaną — inaczej z dodatku robi się kałuża.",
    shopDe:
      "Feste Salat- oder Feldgurken, frischer Dill, und ein Milchprodukt mit klarer Rolle: Schmand oder saure Sahne statt „irgendeiner Sahne“. Welche Stufe wohin passt, erklärt der [Śmietana-und-Schmand-Guide](/de/blog/smietana-schmand) — dort bleibt das passende Rezeptship für Alternativen; hier nur der Anwendungsfall Mizeria. Zucker und Pfeffer sparsam. Optional sehr feine Zwiebel. Einkaufstag und Spezialitäten: [Polenladen-Guide](/de/blog/polenladen-einkaufen).",
    shopPl:
      "Jędrne ogórki sałatkowe lub gruntowe, świeży koperek i nabiał z jasną rolą: Schmand albo kwaśna śmietana zamiast „byle jakiej śmietany”. Który produkt do czego — w [przewodniku śmietana/Schmand](/pl/blog/smietana-czy-schmand); tu tylko zastosowanie w mizerii. Cukier i pieprz oszczędnie. Opcjonalnie bardzo drobna cebula. W [przewodnik po sklepie polskim](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności.",
    techniqueDe:
      "Dünn hobeln, salzen, warten, ausdrücken. Śmietana kalt unterheben, nicht schlagen. Dill erst am Ende, damit er frisch bleibt. Zucker gleicht extreme Gurkenbitterkeit aus — nicht als Dessert-Süße. Abschmecken kurz vor dem Servieren.",
    techniquePl:
      "Cienko kroić, solić, czekać, odcisnąć. Śmietanę mieszać na zimno, nie ubijać. Koperek na końcu. Cukier łagodzi goryczkę ogórka — nie jako deser. Doprawiać tuż przed podaniem.",
    serveDe:
      "Klassisch neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy) und Kartoffeln; ebenso gut zu [Kotlet mielony](/de/rezepte/kotlet-mielony). Im Festmenü als kühle Beilage nach dem [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan). Am Alltagstisch reicht eine Schüssel für vier — besser nachlegen als wässrig vorbereiten. Reste einen Tag im Kühlschrank; erneut abschmecken, ggf. Dill nachlegen.",
    servePl:
      "Klasycznie obok [kotleta schabowego](/pl/rezepte/kotlet-schabowy) i ziemniaków; też do [kotleta mielonego](/pl/rezepte/kotlet-mielony). Na święta jako chłodny dodatek według [menu wielkanocnego](/pl/blog/menu-wielkanocne). Na co dzień jedna miska na cztery — lepiej dołożyć niż przygotować wodnistą wcześniej. Resztki dzień w lodówce; doprawić, koperek uzupełnić.",
    diasporaDe:
      "In DE oft schneller gemacht als gedacht: Gurken aus dem Supermarkt, Schmand aus dem Kühlregal, Dill vom Kräuterbeutel. Wer den Sonntag plant, mischt Mizeria erst nach dem Braten — parallel zum [Panieren-Ablauf](/de/blog/panieren-schabowy) für Schabowy. Menü-Rahmen ohne Chaos: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    diasporaPl:
      "W DE często szybciej niż myślisz: ogórki z supermarketu, Schmand z chłodni, koperek z doniczki. Planując niedzielę, mieszaj mizerię dopiero po smażeniu — równolegle do [panierowania](/pl/blog/panierowanie-kotlet) schabowego. Ramy menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
    mistakesDe:
      "Gurken nicht aussalzen — wässrige Sauce. Heiße Śmietana — trennt sich. Zu viel Zwiebel — überdeckt Dill. Mit Chłodnik verwechseln oder Salat-Rezept auf kalte Suppen legen. Zu früh anmischen für Buffet.",
    mistakesPl:
      "Brak odsączenia — wodnisty sos. Gorąca śmietana — się rozdziela. Za dużo cebuli — gubi koperek. Mylenie z chłodnikiem albo mylenie z „sałatki” na zupy. Mieszanie za wcześnie na bufet.",
    variantsDe:
      "Mit Joghurt leichter; mit etwas Zitronensaft säuerlicher; ohne Zucker, wenn Gurken süß sind. Manche geben Knoblauch — ehrlich als Hausvariante benennen. Warm servieren ist nicht Mizeria. Fest-Buffetsalat mit Mayo-Gemüse (anderer Charakter): [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Verwandte kühle Linie im Sommer: Chłodnik bleibt eigenes Rezept.",
    variantsPl:
      "Z jogurtem lżej; z cytryną kwaśniej; bez cukru, gdy ogórki słodkie. Czosnek — jako wariant domu. Na ciepło to nie mizeria. Sałatka bufetowa z majonezem (inny charakter): [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Pokrewna linia latem: chłodnik zostaje osobny przepis.",
  },
  "recipe-kapusta-zasmażana": {
    dishDe: "Kapusta zasmażana",
    dishPl: "Kapusta zasmażana",
    vibeDe: "warm, säuerlich-mild, nach Butter und sanfter Schwitze",
    vibePl: "ciepła, kwaśno-łagodna, z masłem i delikatną zasmażką",
    originDe:
      "Kapusta zasmażana ist geschmortes Sauerkraut mit Mehlschwitze (zasmażka) — eine warme Beilage, kein Eintopf. Sie teilt Kraut und Säure mit [Bigos](/de/rezepte/bigos), bleibt aber klar im Fokus: Beilage zum Fleisch, nicht Schmorgericht mit Fleischlagen. In vielen Familien steht sie neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy) oder Braten, wenn der Sonntagstisch Wärme und Säure braucht. Die Zasmażka bindet Flüssigkeit und rundet ab, ohne das Kraut süß zu machen.",
    originPl:
      "Kapusta zasmażana to duszona kapusta kiszona z zasmażką — ciepły dodatek, nie gulasz. Dzieli kapustę i kwas z [bigosem](/pl/rezepte/bigos), ale fokus jest inny: dodatek do mięsa, nie danie mięsne warstwami. W wielu domach stoi obok [kotleta schabowego](/pl/rezepte/kotlet-schabowy) albo piezeni, gdy niedzielny stół chce ciepła i kwasu. Zasmażka wiąże płyn i łagodzi, bez słodzenia kapusty.",
    shopDe:
      "Gute [Sauerkraut-Qualität](/de/blog/kiszenie-guide) aus dem Glas oder Beutel — Säure und Salz prüfen, nicht blind spülen. Zwiebel, Butter oder Schmalz, Mehl, Lorbeer. Optional ein Schuss leichte Brühe vom [Rosół](/de/rezepte/rosol)-Tag. Wer selbst fermentiert, nutzt den Kiszenie-Guide nur als Technik-Nachbar; das Thema Kiszenie bleibt im Guide. Polenladen oft aromatischer als Supermarkt-Kraut.",
    shopPl:
      "Dobra [jakość kiszonki](/pl/blog/kiszenie-w-domu) ze słoika lub worka — sprawdź kwas i sól, nie płucz w ciemno. Cebula, masło lub smalec, mąka, liść laurowy. Opcjonalnie łyżka lekkiego bulionu z dnia na [rosół](/pl/rezepte/rosol). Domowy ferment: kiszenie zostaje przepisem na techniki; tu tylko wykorzystanie. Sklep polski często aromatyczniejszy niż supermarket.",
    techniqueDe:
      "Zwiebel glasig, Kraut schmoren bis weich, Zasmażka hell (nicht nussbraun-bitter), unterheben, kurz kochen. Zu viel Flüssigkeit vorher reduzieren. Abschmecken mit Salz und Pfeffer — Zucker nur als Notbremse bei aggressiver Säure.",
    techniquePl:
      "Cebula na szklisto, kapusta dusić do miękkości, zasmażka jasna (nie gorzka), wmieszać, krótko gotować. Nadmiar płynu wcześniej odparować. Doprawić solą i pieprzem — cukier tylko awaryjnie przy ostrym kwasie.",
    serveDe:
      "Heiß zu [Kotlet schabowy](/de/rezepte/kotlet-schabowy), Braten oder einfachen Kartoffeln. Passt in den Rahmen des [polnischen Sonntagsessens](/de/blog/sonntagsessen-polnisch). Mit geräucherter Note sparsam: [Kiełbasa-Arten](/de/blog/kielbasa-arten) erklären Wurst-Rollen — hier höchstens als Aroma-Tupfer, nicht als Bigos-Ersatz. Reste am nächsten Tag oft runder; erneut erhitzen, ggf. etwas Wasser.",
    servePl:
      "Gorącą do [kotleta schabowego](/pl/rezepte/kotlet-schabowy), piezeni lub ziemniaków. Pasuje do [obiadu niedzielnego](/pl/blog/obiad-niedzielny). Wędzona nuta oszczędnie: [rodzaje kiełbasy](/pl/blog/rodzaje-kielbasy) — tu najwyżej aromat, nie zamiennik bigosu. Resztki następnego dnia często lepsze; odgrzać, ewentualnie odrobinę wody.",
    diasporaDe:
      "In deutschen Wohnungen riecht Kapusta zasmażana nach ruhigem Sonntag ohne Drei-Topf-Theater. Kraut aus dem Kühlregal, Schwitze in fünf Minuten — machbar nach Schicht. Wer Majoran liebt, hält die Dosis klein und liest das [Majeranek-Lexikon](/de/blog/majeranek) als Gewürz-Nachbar, nicht als Rezept-Owner.",
    diasporaPl:
      "W niemieckich mieszkaniach kapusta zasmażana pachnie spokojną niedzielą bez maratonu garnków. Kiszona z chłodni, zasmażka w pięć minut — po zmianie też możliwe. Majeranek ostrożnie; [leksykon majeranku](/pl/blog/majeranek-leksykon) jako sąsiad przypraw, nie owner przepisu.",
    mistakesDe:
      "Zu dunkle Zasmażka (bitter). Komplett gespültes Kraut (fade). Mit Bigos verwechseln oder Kiszenie-Hitze, Feuchtigkeit oder Garzeit falsch einschätzen. Zu viel Wasser wird zur Suppe statt Beilage. Zu früh Wurst rein — anderes Gericht.",
    mistakesPl:
      "Zbyt ciemna zasmażka (gorzka). Całkiem wypłukana kapusta (mdła). Mylenie z bigosem lub mylenie z kiszenia. Za dużo wody robi się zupa zamiast dodatku. Wczesna kiełbasa — inne danie.",
    variantsDe:
      "Mit Speckwürfeln (Hausvariante), mit frischem Weißkohl gemischt milder, mit Pilzen näher an Wigilia-Feeling — ehrlich benennen. Bigos bleibt der verwandte Kohl-Eintopf mit Fleisch; Kapusta zasmażana bleibt Beilage.",
    variantsPl:
      "Z boczkiem (wariant domu), z świeżą kapustą łagodniej, z grzybami bliżej Wigilii — nazywać uczciwie. Bigos zostaje pokrewnym gulaszem mięsnym; kapusta zasmażana zostaje dodatkiem.",
  },
};
