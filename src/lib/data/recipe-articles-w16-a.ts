/**
 * Wave 16 Paket A — FACTS for surowka, de-volaille.
 * Affiliate: guide-only. Voice: full sentences, no SEO jargon in reader text.
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

export const W16_FACTS_A: Record<string, ArticleFacts> = {
 "recipe-surowka": {
 dishDe: "Surówka z kapusty",
 dishPl: "Surówka z kapusty",
 vibeDe: "knackig, säuerlich-frisch, als kühle Beilage zum Sonntagsbraten",
 vibePl: "chrupiąca, kwaskowo-świeża, jako chłodna sałatka do niedzielnego mięsa",
 originDe:
 "Surówka z kapusty ist der klassische polnische Krautsalat: fein gehobelter Weißkohl, oft mit Karotte, leicht gesäuert und mit Öl oder einer milden Sahne-/Joghurtbindung. Er gehört auf den Teller neben Braten und Kartoffeln — knackig und kühl, nicht als Mayo-Buffetsalat. Das ist keine Gurkensalat-Linie wie [Mizeria](/de/rezepte/mizeria) und kein festlicher Gemüsemayo-Salat wie [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Menü-Rahmen beim [Sonntagsessen](/de/blog/sonntagsessen-polnisch); Einkauf und Ersatzlogik klären [Polenladen](/de/blog/polenladen-einkaufen) und [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
 originPl:
 "Surówka z kapusty to klasyczna polska sałatka z kapusty: drobno szatkowana kapusta biała, często z marchewką, lekko kwaszona, z olejem lub łagodną śmietaną/jogurtem. Trafia na talerz obok mięsa i ziemniaków — chrupiąca i chłodna, nie jako majonezowa sałatka buffetowa. To nie linia ogórkowa jak [mizeria](/pl/rezepte/mizeria) i nie świąteczna sałatka jarzynowa jak [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Ramy menu: [obiad niedzielny](/pl/blog/obiad-niedzielny); zakupy i zamienniki: [sklep polski](/pl/blog/sklep-polski-zakupy) oraz [zamienniki](/pl/blog/zamienniki-skladnikow).",
 shopDe:
 "Fester Weißkohl ohne welke Blätter — Supermarkt oder Wochenmarkt. Karotte für Farbe und Süße. Essig oder Zitronensaft, Öl, Salz, Pfeffer, optional Zucker-Prise und Kümmel. Wer Sahne-/Joghurtbindung mag: [Śmietana/Schmand](/de/blog/smietana-schmand) prüfen. Fehlt guter Kohl: ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Im [Polenladen](/de/blog/polenladen-einkaufen) findest du oft aromatischeren Kümmel. Keine fertige Jarzynowa-Mischung — sonst driftet der Teller zu [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa).",
 shopPl:
 "Twarda kapusta biała bez więdnących liści — market lub bazar. Marchewka dla koloru i słodyczy. Ocet lub cytryna, olej, sól, pieprz, opcjonalnie szczypta cukru i kminek. Kto lubi śmietanę/jogurt: sprawdź [śmietana/Schmand](/pl/blog/smietana-czy-schmand). Brak dobrej kapusty: uczciwie według [zamienników](/pl/blog/zamienniki-skladnikow). W [sklepie polskim](/pl/blog/sklep-polski-zakupy) często lepszy kminek. Bez gotowej mieszanki jarzynowej — inaczej dryfuje w stronę [sałatki jarzynowej](/pl/rezepte/salatka-jarzynowa).",
 techniqueDe:
 "Kohl und Karotte sehr fein hobeln oder schneiden — dicke Streifen bleiben zäh. Mit Salz leicht kneten oder quetschen, bis Saft austritt; kurz stehen lassen. Abschmecken: Säure vor Süße, Öl sparsam, Kümmel nach Hausbrauch. Sahneversion erst zum Schluss, damit nichts wässert. Das bleibt Rohkost-Salat, kein warmes Schmorenkraut wie [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana) und keine Gurke wie [Mizeria](/de/rezepte/mizeria). Kühler lagern und vor dem Servieren nochmals abschmecken.",
 techniquePl:
 "Kapustę i marchewkę szatkuj bardzo drobno — grube paski zostają twarde. Lekko zgnieć z solą, aż puści sok; odstaw na chwilę. Dopraw: kwas przed słodyczą, oleju mało, kminek według domu. Wersję ze śmietaną na końcu, żeby nie wodniała. To surówka na zimno, nie duszona kapusta jak [kapusta zasmażana](/pl/rezepte/kapusta-zasmażana) i nie ogórek jak [mizeria](/pl/rezepte/mizeria). Trzymaj chłodno i przed podaniem dopraw ponownie.",
 serveDe:
 "Kühl neben Braten, Schnitzel oder Huhn — zum Beispiel neben [Kurczak pieczony](/de/rezepte/kurczak-pieczony) oder [Kotlet schabowy](/de/rezepte/kotlet-schabowy). Wer Gurke will: [Mizeria](/de/rezepte/mizeria); wer Mayo-Buffet: [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Sonntagsrahmen: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch). Im [Polenladen](/de/blog/polenladen-einkaufen) holst du fehlende Gewürze nach.",
 servePl:
 "Chłodna obok pieczystego, kotleta lub kurczaka — na przykład przy [kurczaku pieczonym](/pl/rezepte/kurczak-pieczony) albo [kotlecie schabowym](/pl/rezepte/kotlet-schabowy). Kto chce ogórek: [mizeria](/pl/rezepte/mizeria); kto majonezowy buffet: [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Ramy niedzieli: [obiad niedzielny](/pl/blog/obiad-niedzielny). W [sklepie polskim](/pl/blog/sklep-polski-zakupy) dogadasz przyprawy.",
 diasporaDe:
 "Surówka ist diaspora-freundlich: Kohl und Karotte aus dem Supermarkt, zehn Minuten Hobeln, kühlt im Kühlschrank mit. Kinder dürfen hobeln helfen, wenn die Klinge sicher geführt wird. Fehlt Kümmel oder guter Essig: Alternativen laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) und Qualität im [Polenladen](/de/blog/polenladen-einkaufen). Der Speiseplan bleibt beim [Sonntagsessen](/de/blog/sonntagsessen-polnisch); hier bleibt der klare Krautsalat-Cook.",
 diasporaPl:
 "Surówka lubi diasporę: kapusta i marchewka z marketu, dziesięć minut szatkowania, chłodzi się w lodówce. Dzieci pomogą przy szatkownicy, gdy nóż jest bezpieczny. Brak kminku lub octu: według [zamienników](/pl/blog/zamienniki-skladnikow) i jakości w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Plan menu zostaje w [obiadzie niedzielnym](/pl/blog/obiad-niedzielny); tu zostaje jasny przepis na surówkę.",
 mistakesDe:
 "Zu grob schneiden — dann bleibt der Kohl zäh. Zu viel Zucker — der Salat wird Dessert. Mit [Mizeria](/de/rezepte/mizeria) verwechseln (Gurke/Śmietana). Mit [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) verwechseln (Mayo-Gemüse). Warme [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana) ist ein anderes Gericht. Zu früh mit Sahne binden und wässrig werden lassen.",
 mistakesPl:
 "Za grubo krojona kapusta zostaje twarda. Za dużo cukru — surówka smakuje jak deser. Mylenie z [mizerią](/pl/rezepte/mizeria). Mylenie z [sałatką jarzynową](/pl/rezepte/salatka-jarzynowa). Ciepła [kapusta zasmażana](/pl/rezepte/kapusta-zasmażana) to inne danie. Za wcześnie śmietana i wodnisty efekt.",
 variantsDe:
 "Nur Öl-Essig leichter; mit Joghurt milder; mit Kümmel herber. Passende Nachbarn: [Mizeria](/de/rezepte/mizeria), [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa), [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana). Guides: [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Polenladen](/de/blog/polenladen-einkaufen), [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
 variantsPl:
 "Tylko olej-ocet lżej; z jogurtem łagodniej; z kminkiem ostrzej. Sąsiedzi: [mizeria](/pl/rezepte/mizeria), [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa), [kapusta zasmażana](/pl/rezepte/kapusta-zasmażana). Przewodniki: [obiad niedzielny](/pl/blog/obiad-niedzielny), [sklep polski](/pl/blog/sklep-polski-zakupy), [zamienniki](/pl/blog/zamienniki-skladnikow).",
 },
 "recipe-de-volaille": {
 dishDe: "Kotlet de volaille",
 dishPl: "Kotlet de volaille",
 vibeDe: "knusprig paniert, saftig innen, mit schmelzender Butter- oder Käsefüllung",
 vibePl: "chrupiąca panierka, soczysty środek, z roztapiającym się masłem lub serem",
 originDe:
 "Kotlet de volaille ist der polnische Cordon-bleu-Klassiker: dünn geklopftes Hähnchenfilet, gefüllt mit kalter Butter (oft mit Kräutern) oder Käse und Schinken, fest verschlossen, paniert und in der Pfanne goldbraun ausgebraten. Der Schnitt zeigt die Füllung — das ist der Charakter. Das ist kein flacher Schweineschnitzel-Pfad wie [Kotlet schabowy](/de/rezepte/kotlet-schabowy) und kein Ofenbraten wie [Kurczak pieczony](/de/rezepte/kurczak-pieczony). Panier-Technik vertieft der Guide [Panieren](/de/blog/panieren-schabowy); Menüplatz beim [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 originPl:
 "Kotlet de volaille to polski klasyk à la cordon bleu: rozbite filet z kurczaka, nadzienie zimnym masłem (często z ziołami) albo serem i szynką, szczelnie zamknięte, panierowane i smażone na złoto. Przekrój pokazuje nadzienie — to charakter dania. To nie płaski schabowy wieprzowy jak [kotlet schabowy](/pl/rezepte/kotlet-schabowy) i nie pieczeń z pieca jak [kurczak pieczony](/pl/rezepte/kurczak-pieczony). Technikę panierowania pogłębia [panierowanie](/pl/blog/panierowanie-kotlet); miejsce w menu: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 shopDe:
 "Große Hähnchenbrust ohne Haut, kalte Butter oder Käsescheiben, optional Schinken. Mehl, Ei, Semmelbrösel für die Panade — Qualität der Brösel entscheidet über Knusprigkeit. Öl oder Butterschmalz zum Braten. Fehlt gutes Fleisch: ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Im [Polenladen](/de/blog/polenladen-einkaufen) findest du oft bessere Brösel und Majeranek. Kein Schweinekotelett als Basis — sonst wird daraus [Kotlet schabowy](/de/rezepte/kotlet-schabowy).",
 shopPl:
 "Duża pierś z kurczaka bez skóry, zimne masło lub plasterki sera, opcjonalnie szynka. Mąka, jajko, bułka tarta — jakość tartej bułki daje chrupkość. Olej lub smalec do smażenia. Brak dobrego mięsa: według [zamienników](/pl/blog/zamienniki-skladnikow). W [sklepie polskim](/pl/blog/sklep-polski-zakupy) często lepsza bułka i majeranek. Bez kotleta wieprzowego jako bazy — inaczej powstaje [schabowy](/pl/rezepte/kotlet-schabowy).",
 techniqueDe:
 "Filet flach klopfen, Füllung mittig legen, Ränder fest zuklappen und mit Zahnstocher sichern falls nötig. Panade: Mehl → Ei → Brösel, gut andrücken. In mittlerer Hitze ausbraten, damit die Füllung schmilzt ohne die Panade zu verbrennen — Deckel kurz hilft. Ruhen lassen, dann aufschneiden. Das bleibt gefülltes Huhn, kein Schweine-Schabowy wie [Kotlet schabowy](/de/rezepte/kotlet-schabowy). Details zur Panade: [Panieren-Guide](/de/blog/panieren-schabowy).",
 techniquePl:
 "Rozbij filet, włóż nadzienie na środek, brzegi szczelnie zawiń i ewentualnie zabezpiecz wykałaczką. Panierka: mąka → jajko → bułka, mocno dociśnij. Smaż na średnim ogniu, by nadzienie się roztopiło bez przypalenia panierki — krótko pod pokrywką. Odstaw, potem przekrój. To nadziewany kurczak, nie wieprzowy [schabowy](/pl/rezepte/kotlet-schabowy). Szczegóły panierki: [przewodnik panierowania](/pl/blog/panierowanie-kotlet).",
 serveDe:
 "Heiß, mit sichtbarem Schnitt, Kartoffeln und Surówka — etwa [Surówka z kapusty](/de/rezepte/surowka) oder [Mizeria](/de/rezepte/mizeria). Wer Schweinepanade will: [Kotlet schabowy](/de/rezepte/kotlet-schabowy); wer ganzen Vogel: [Kurczak pieczony](/de/rezepte/kurczak-pieczony). Sonntag: [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch). Panier-Hilfe: [Panieren](/de/blog/panieren-schabowy).",
 servePl:
 "Gorący, z widocznym przekrojem, ziemniaki i surówka — np. [surówka z kapusty](/pl/rezepte/surowka) lub [mizeria](/pl/rezepte/mizeria). Kto chce wieprzowinę: [schabowy](/pl/rezepte/kotlet-schabowy); kto całego ptaka: [kurczak pieczony](/pl/rezepte/kurczak-pieczony). Niedziela: [obiad niedzielny](/pl/blog/obiad-niedzielny). Panierka: [panierowanie](/pl/blog/panierowanie-kotlet).",
 diasporaDe:
 "De volaille lohnt den Sonntag: Füllung vorbereiten, Filets klopfen, panieren, braten. Butter vorher tiefkühlen, damit sie nicht ausläuft. Kinder dürfen panieren helfen; heißes Fett bleibt bei Erwachsenen. Fehlt Schinken oder Käse: laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) und Einkauf im [Polenladen](/de/blog/polenladen-einkaufen). Kulturrahmen: [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
 diasporaPl:
 "De volaille lubi niedzielę: przygotuj nadzienie, rozbij filety, panieruj, smaż. Masło wcześniej schłodź, by nie wypłynęło. Dzieci pomogą przy panierce; gorący tłuszcz u dorosłych. Brak szynki lub sera: według [zamienników](/pl/blog/zamienniki-skladnikow) i [sklepu polskiego](/pl/blog/sklep-polski-zakupy). Ramy kultury: [obiad niedzielny](/pl/blog/obiad-niedzielny).",
 mistakesDe:
 "Füllung zu warm — läuft aus. Ränder schlecht verschlossen. Zu hohe Hitze — Panade schwarz, innen roh. Mit [Kotlet schabowy](/de/rezepte/kotlet-schabowy) verwechseln (Schwein, keine Butterfüllung). Mit [Kurczak pieczony](/de/rezepte/kurczak-pieczony) verwechseln (Ofenvogel). Panade-Technik nachlesen: [Panieren](/de/blog/panieren-schabowy).",
 mistakesPl:
 "Nadzienie za ciepłe — wypływa. Brzegi źle zamknięte. Za mocny ogień — panierka czarna, środek surowy. Mylenie z [schabowym](/pl/rezepte/kotlet-schabowy). Mylenie z [kurczakiem pieczonym](/pl/rezepte/kurczak-pieczony). Panierka: [panierowanie](/pl/blog/panierowanie-kotlet).",
 variantsDe:
 "Butter-Kräuter klassisch; Käse-Schinken restaurantnah; nur Käse milder. Nachbarn: [Kotlet schabowy](/de/rezepte/kotlet-schabowy), [Kurczak pieczony](/de/rezepte/kurczak-pieczony), [Surówka](/de/rezepte/surowka). Guides: [Panieren](/de/blog/panieren-schabowy), [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Polenladen](/de/blog/polenladen-einkaufen).",
 variantsPl:
 "Masło z ziołami klasycznie; ser-szynka jak w restauracji; sam ser łagodniej. Sąsiedzi: [schabowy](/pl/rezepte/kotlet-schabowy), [kurczak pieczony](/pl/rezepte/kurczak-pieczony), [surówka](/pl/rezepte/surowka). Przewodniki: [panierowanie](/pl/blog/panierowanie-kotlet), [obiad niedzielny](/pl/blog/obiad-niedzielny), [sklep polski](/pl/blog/sklep-polski-zakupy).",
 },
};
