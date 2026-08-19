/**
 * Wave 16 Paket C — FACTS for pierniczki, knedle-truskawki.
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

export const W16_FACTS_C: Record<string, ArticleFacts> = {
  "recipe-pierniczki": {
    dishDe: "Pierniczki",
    dishPl: "Pierniczki",
    vibeDe: "würzig-süß, knusprig oder weich, als Plätzchen zur Winterzeit",
    vibePl: "korzennie-słodkie, chrupiące lub miękkie, jako ciasteczka na zimę",
    originDe:
      "Der Name Pierniczki, die Verkleinerungsform von Piernik, geht auf das altpolnische Wort pierny zurück, das würzig oder pfeffrig bedeutet und die kräftige Mischung aus Zimt, Nelken, Ingwer und manchmal echtem Pfeffer beschreibt. Berühmt wurde das Gebäck vor allem durch die Stadt Toruń, die seit dem Mittelalter an wichtigen Handelsrouten der Hanse lag und dadurch früh Zugang zu teuren Gewürzen aus Fernost hatte, während Honig und feines Mehl aus der Umgebung kamen. Die erste schriftliche Erwähnung eines Toruner Lebkuchenbäckers stammt aus dem Jahr 1380, und die Rezepte wurden über Jahrhunderte als Familiengeheimnis gehütet. Aus dem großen, oft mit Marmelade gefüllten Piernik-Laib entwickelte sich mit der Zeit die kleinere Plätzchenform, die als Pierniczki einzeln ausgestochen und gebacken wird, häufig in der Form der sogenannten Katarzynki, die traditionell rund um den vierundzwanzigsten November gebacken werden. Für dieses Rezept zählt nur die Plätzchenform, der geschnittene Laib bleibt beim [Piernik](/de/rezepte/piernik).",
    originPl:
      "Nazwa pierniczki, zdrobnienie od piernik, wywodzi się ze staropolskiego słowa pierny, czyli korzenny albo pikantny, i opisuje mocną mieszankę cynamonu, goździków, imbiru, a czasem także pieprzu. Gatunek rozsławił przede wszystkim Toruń, leżący od średniowiecza na ważnych szlakach handlowych Hanzy, dzięki czemu miasto miało wczesny dostęp do drogich przypraw z Dalekiego Wschodu, a miód i dobrą mąkę dawała okolica. Pierwsza pisemna wzmianka o toruńskim piekarzu piernikarskim pochodzi z 1380 roku, a receptury przez wieki były strzeżone jako tajemnica rodzinna. Z dużego bochenka piernika, często przekładanego marmoladą, z czasem wyodrębniła się mniejsza forma ciasteczek wykrawanych i pieczonych pojedynczo jako pierniczki, często w kształcie tak zwanych katarzynek, tradycyjnie pieczonych około dwudziestego czwartego listopada. W tym przepisie liczy się tylko forma ciasteczek, krojony bochenek zostaje przy [pierniku](/pl/rezepte/piernik).",
    shopDe:
      "Für Pierniczki brauchst du Mehl, Honig, Butter, ein Ei, Backpulver und eine Piernik-Gewürzmischung aus Zimt, Nelke, Ingwer und Piment, die es fertig gemischt oft im [Polenladen](/de/blog/polenladen-einkaufen) gibt. Puderzucker für die Glasur ist optional. Fehlt guter Honig, hilft der Überblick zu [Ersatzprodukten](/de/blog/ersatzprodukte-de). Das ist Plätzchenteig, kein Laibteig wie beim [Piernik](/de/rezepte/piernik).",
    shopPl:
      "Na pierniczki potrzebujesz mąki, miodu, masła, jajka, proszku do pieczenia i mieszanki przypraw do piernika z cynamonem, goździkami, imbirem i zielem angielskim, którą gotową często kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Cukier puder na lukier jest opcjonalny. Brak dobrego miodu? Sprawdź [zamienniki](/pl/blog/zamienniki-skladnikow). To ciasto na ciasteczka, nie na bochenek jak w [pierniku](/pl/rezepte/piernik).",
    techniqueDe:
      "Den Teig gut durchkneten und mindestens eine Stunde kalt ruhen lassen, damit er sich später leichter ausrollen lässt. Dünn ausrollen und zügig backen, denn zu lange im Ofen werden die kleinen Plätzchen schnell steinhart, während weichere Pierniczki etwas mehr Honig und eine kürzere Backzeit brauchen. Nach dem Backen vollständig auf einem Rost abkühlen lassen, erst dann glasieren, sonst zieht die Glasur Feuchtigkeit und wird klebrig. Geduld beim Backen zeigt sich ähnlich beim Hefeteig der [Makowiec-Technik](/de/blog/makowiec-technik), auch wenn es dort um einen ganz anderen Teig geht.",
    techniquePl:
      "Ciasto dobrze wygnieć i schłodzić co najmniej godzinę, żeby później łatwiej się wałkowało. Wałkuj cienko i piecz krótko, bo za długie pieczenie szybko zamienia małe ciasteczka w kamień, a miękkie pierniczki potrzebują więcej miodu i krótszego czasu w piecu. Po pieczeniu ostudź całkowicie na kratce, dopiero potem lukruj, inaczej lukier wciąga wilgoć i się klei. Podobną cierpliwość przy pieczeniu wymaga drożdżowe ciasto z [techniki makowca](/pl/blog/makowiec-technika), choć to zupełnie inny rodzaj ciasta.",
    serveDe:
      "Zu Tee oder Kompot servieren, in gut verschlossenen Dosen für die Adventszeit, neben dem festlichen [Wigilia](/de/blog/wigilia-speiseplan)-Tisch als zusätzliches Gebäck. Wer den ganzen Laib möchte, findet ihn beim [Piernik](/de/rezepte/piernik), wer lieber Hefegebäck backt, bei der [Drożdżówka](/de/rezepte/drozdzowka). Gewürze dafür gibt es im [Polenladen](/de/blog/polenladen-einkaufen).",
    servePl:
      "Podawaj do herbaty lub kompotu, przechowując w dobrze zamkniętej puszce na cały adwent, jako dodatkowe ciasto obok świątecznego [menu wigilijnego](/pl/blog/menu-wigilijne). Kto chce cały bochenek, znajdzie go w [pierniku](/pl/rezepte/piernik), a kto woli ciasto drożdżowe, w [drożdżówce](/pl/rezepte/drozdzowka). Przyprawy do tego kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    diasporaDe:
      "Pierniczki lassen sich gut in Etappen backen, der Teig entsteht am Vorabend, gebacken wird am Wochenende, und die fertigen Plätzchen wandern in Dosen für Gäste und Nachbarn. Kinder dürfen die Formen ausstechen, während der heiße Ofen bei den Erwachsenen bleibt. Gewürze findest du im [Polenladen](/de/blog/polenladen-einkaufen), fehlender Honig lässt sich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) ersetzen.",
    diasporaPl:
      "Pierniczki dobrze dzielą się na etapy, ciasto robi się wieczorem, pieczenie zostawia się na weekend, a gotowe ciasteczka trafiają do puszek dla gości i sąsiadów. Dzieci mogą wykrawać foremki, gorący piekarnik zostaje przy dorosłych. Przyprawy znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), brak miodu zastąpisz według [zamienników](/pl/blog/zamienniki-skladnikow).",
    mistakesDe:
      "Zu langes Backen macht die kleinen Plätzchen steinhart, deshalb lieber pünktlich aus dem Ofen nehmen. Ein zu warm ausgerollter Teig klebt und lässt sich schwer verarbeiten. Zu dick ausgestochene Plätzchen bleiben innen roh, während außen schon alles fest ist. Glasur auf noch warme Kekse läuft einfach herunter, statt eine feste Schicht zu bilden. Und wer Pierniczki mit dem geschnittenen [Piernik](/de/rezepte/piernik)-Laib verwechselt, erwartet die falsche Form.",
    mistakesPl:
      "Za długie pieczenie zamienia małe ciasteczka w kamień, więc lepiej wyjąć je z piekarnika na czas. Za ciepłe ciasto klei się i trudno je obrabiać. Za grubo wykrojone ciasteczka zostają surowe w środku, choć na zewnątrz są już twarde. Lukier na ciepłe ciasteczka po prostu ścieka, zamiast tworzyć równą warstwę. A kto myli pierniczki z krojonym bochenkiem [piernika](/pl/rezepte/piernik), oczekuje złej formy.",
    variantsDe:
      "Mit mehr Honig werden Pierniczki weicher, dünner ausgerollt und länger gebacken dagegen knuspriger, verziert werden sie mit Zuckerglasur oder einfach nur mit Puderzucker. Nachbarn im Gebäckregal sind der [Piernik](/de/rezepte/piernik)-Laib, der [Makowiec](/de/rezepte/makowiec) und die [Drożdżówka](/de/rezepte/drozdzowka). Anlassrahmen und Backgeduld liefern [Wigilia](/de/blog/wigilia-speiseplan) und die [Makowiec-Technik](/de/blog/makowiec-technik).",
    variantsPl:
      "Z większą ilością miodu pierniczki wychodzą miększe, wałkowane cieniej i pieczone dłużej stają się chrupiące, a dekoruje się je lukrem albo po prostu cukrem pudrem. Sąsiadami na półce z wypiekami są bochenek [piernika](/pl/rezepte/piernik), [makowiec](/pl/rezepte/makowiec) i [drożdżówka](/pl/rezepte/drozdzowka). Okazję i cierpliwość przy pieczeniu opisują [menu wigilijne](/pl/blog/menu-wigilijne) i [technika makowca](/pl/blog/makowiec-technika).",
  },
  "recipe-knedle-truskawki": {
    dishDe: "Knedle z truskawkami",
    dishPl: "Knedle z truskawkami",
    vibeDe: "weich, fruchtig, mit Butterbröseln, ein Sommerdessert",
    vibePl: "miękkie, owocowe, z bułką na maśle, deser latem",
    originDe:
      "Knedle ist die polnische Form des deutschen Wortes Knödel und zeigt, wie eng die mitteleuropäische Küche über Grenzen hinweg verbunden ist, ähnlich wie die böhmischen Knedlíky oder die österreichischen Zwetschgenknödel. Gefüllte Obstknödel gelten als Erfindung der bäuerlichen Küche Mitteleuropas, wo man reife Sommerfrüchte in einen Teig aus Kartoffeln, manchmal auch aus Topfen oder Hefeteig, einwickelte, um sie satt und haltbar zu machen. In Polen ist Knedle z truskawkami die sommerliche Erdbeer-Variante, die ganze, süße Frucht steckt im Inneren und wird beim Anschneiden sichtbar. Traditionell werden die Knödel mit gebutterten Semmelbröseln und Zucker bestreut serviert, in manchen Familien kommt noch ein Löffel Śmietana dazu. Das ist die Fruchtlinie mit Erdbeere, Pflaumen gehören zu den [Knedle ze śliwkami](/de/rezepte/knedle-sliwki), und gefaltete Beeren-Teigtaschen sind wieder ein anderes Rezept, das bei den [Pierogi mit Heidelbeeren](/de/rezepte/pierogi/jagody) steht.",
    originPl:
      "Knedle to polska forma niemieckiego słowa Knödel i dobrze pokazuje, jak blisko związana jest kuchnia środkowoeuropejska ponad granicami, podobnie jak czeskie knedlíky czy austriackie knedle ze śliwkami. Nadziewane owocem knedle uważa się za wynalazek wiejskiej kuchni środkowej Europy, gdzie dojrzałe letnie owoce zawijano w ciasto ziemniaczane, czasem twarogowe albo drożdżowe, by były sycące i lepiej się przechowywały. W Polsce knedle z truskawkami to letnia, truskawkowa wersja, cały, słodki owoc znajduje się w środku i widać go po przekrojeniu. Tradycyjnie podaje się je posypane bułką tartą podsmażoną na maśle i cukrem, w niektórych rodzinach dodaje się jeszcze łyżkę śmietany. To linia owocowa z truskawką, śliwki zostają przy [knedlach ze śliwkami](/pl/rezepte/knedle-sliwki), a zwijane pierogi z jagodami to już inny przepis, opisany w [pierogach z jagodami](/pl/rezepte/pierogi/jagody).",
    shopDe:
      "Reife, feste Erdbeeren sind entscheidend, frisch in der Saison oder gute tiefgekühlte Ware, die nach dem Auftauen gut abgetropft werden muss. Dazu mehlige Kartoffeln, Mehl, Ei, Butter, Semmelbrösel und Zucker, wer eine Twaróg-Variante mag, findet Hintergrund im [Twaróg-Guide](/de/blog/twarog-deutschland). Fehlt eine reife Erdbeere, hilft ehrlich eine andere Beere laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de), dann verändert sich aber der Charakter des Gerichts. Gute Semmelbrösel bekommst du oft im [Polenladen](/de/blog/polenladen-einkaufen).",
    shopPl:
      "Dojrzałe, jędrne truskawki są tu najważniejsze, świeże w sezonie albo dobre mrożone, dobrze odsączone po rozmrożeniu. Do tego mączyste ziemniaki, mąka, jajko, masło, bułka tarta i cukier, kto lubi wersję twarogową, znajdzie więcej w [przewodniku o twarogu](/pl/blog/twarog-w-niemczech). Brak dojrzałej truskawki? Inna jagoda też się nada według [zamienników](/pl/blog/zamienniki-skladnikow), choć zmienia to charakter dania. Dobrą bułkę tartą znajdziesz często w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    techniqueDe:
      "Der Teig darf nicht zu weich sein, sonst fallen die Knödel beim Kochen auseinander, deshalb lieber schrittweise Mehl zugeben, bis die Konsistenz stimmt. Die Erdbeeren vor dem Einwickeln gut trocken tupfen, denn zu feuchte Früchte reißen den Teig auf. Die Naht am Teig fest verschließen und die Knödel in leicht siedendem, nicht sprudelnd kochendem Wasser garen, bis sie aufsteigen, dann noch kurz nachziehen lassen. Goldbraun angebratene Butterbrösel darüber geben. Das ist die Erdbeer-Linie, nicht die Pflaumenvariante der [Knedle ze śliwkami](/de/rezepte/knedle-sliwki).",
    techniquePl:
      "Ciasto nie może być za miękkie, inaczej knedle się rozpadną podczas gotowania, więc lepiej dodawać mąkę stopniowo, aż konsystencja będzie odpowiednia. Truskawki dobrze osusz przed zawinięciem, bo zbyt mokry owoc rozrywa ciasto. Zaklej dokładnie brzeg i gotuj knedle w lekko wrzącej, nie gwałtownie bulgoczącej wodzie, aż wypłyną, potem jeszcze chwilę dogotuj. Na wierzch daj zrumienioną na maśle bułkę tartą. To linia truskawkowa, nie śliwkowa jak w [knedlach ze śliwkami](/pl/rezepte/knedle-sliwki).",
    serveDe:
      "Heiß mit Butterbröseln und Zucker servieren, optional mit einem Löffel Śmietana, als sommerliches Dessert nach dem [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer die Pflaumenvariante möchte, findet sie bei [Knedle ze śliwkami](/de/rezepte/knedle-sliwki), wer lieber gefaltete Beeren-Teigtaschen mag, bei den [Pierogi mit Heidelbeeren](/de/rezepte/pierogi/jagody). Frisches Obst dafür gibt es oft im [Polenladen](/de/blog/polenladen-einkaufen).",
    servePl:
      "Podawaj na gorąco z bułką tartą i cukrem, opcjonalnie z łyżką śmietany, jako letni deser po [obiedzie niedzielnym](/pl/blog/obiad-niedzielny). Kto chce wersję śliwkową, znajdzie ją w [knedlach ze śliwkami](/pl/rezepte/knedle-sliwki), a kto woli zwijane pierogi z jagodami, w [pierogach z jagodami](/pl/rezepte/pierogi/jagody). Świeże owoce kupisz często w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    diasporaDe:
      "Erdbeerknödel sind stark an die Saison gebunden, tiefgekühlte Beeren machen sie aber fast das ganze Jahr möglich, wenn sie gut abgetropft werden. Den Teig am Vortag vorbereiten und kalt stellen entlastet den eigentlichen Kochtag. Kinder dürfen beim Einwickeln der Früchte helfen, kochendes Wasser bleibt bei den Erwachsenen. Fehlt Twaróg, hilft der [Twaróg-Guide](/de/blog/twarog-deutschland) und der Überblick zu [Ersatzprodukten](/de/blog/ersatzprodukte-de).",
    diasporaPl:
      "Knedle truskawkowe są silnie sezonowe, ale mrożone owoce pozwalają je robić prawie cały rok, jeśli dobrze się je odsączy. Przygotowanie ciasta dzień wcześniej i schłodzenie go odciąża dzień właściwego gotowania. Dzieci mogą pomagać przy zawijaniu owoców, wrzątek zostaje przy dorosłych. Brak twarogu? Pomoże [przewodnik o twarogu](/pl/blog/twarog-w-niemczech) i [zamienniki](/pl/blog/zamienniki-skladnikow).",
    mistakesDe:
      "Zu nasse Früchte reißen den Teig beim Kochen auf, deshalb Erdbeeren immer gut trocken tupfen. Ein zu weicher Teig lässt die Knödel im Wasser zerfallen. Zu starkes Kochen statt sanftem Sieden lässt die Knödel aufplatzen. Und wer die Erdbeer-Knödel mit den [Knedle ze śliwkami](/de/rezepte/knedle-sliwki) oder den gefalteten [Pierogi mit Heidelbeeren](/de/rezepte/pierogi/jagody) verwechselt, erwartet ein anderes Gericht.",
    mistakesPl:
      "Zbyt mokry owoc rozrywa ciasto podczas gotowania, więc truskawki trzeba dobrze osuszyć. Za miękkie ciasto sprawia, że knedle się rozpadają w wodzie. Zbyt mocne gotowanie zamiast delikatnego mrukania powoduje, że knedle pękają. A kto myli knedle truskawkowe z [knedlami ze śliwkami](/pl/rezepte/knedle-sliwki) albo zwijanymi [pierogami z jagodami](/pl/rezepte/pierogi/jagody), oczekuje innego dania.",
    variantsDe:
      "Mit Kartoffelteig bleibt das Rezept klassisch, mit Twaróg-Teig wird es luftiger, und mit gut abgetropften Tiefkühlerdbeeren funktioniert es fast ganzjährig. Passende Nachbarn sind [Knedle ze śliwkami](/de/rezepte/knedle-sliwki), [Pierogi mit Heidelbeeren](/de/rezepte/pierogi/jagody) und die gebratenen [Racuchy z jabłkami](/de/rezepte/racuchy-jablka). Hintergrund zum Twaróg liefert der [Twaróg-Guide](/de/blog/twarog-deutschland).",
    variantsPl:
      "Z ciastem ziemniaczanym przepis zostaje klasyczny, z ciastem twarogowym robi się bardziej puszysty, a z dobrze odsączonymi mrożonymi truskawkami działa właściwie cały rok. Dobrymi sąsiadami są [knedle ze śliwkami](/pl/rezepte/knedle-sliwki), [pierogi z jagodami](/pl/rezepte/pierogi/jagody) i smażone [racuchy z jabłkami](/pl/rezepte/racuchy-jablka). Więcej o twarogu znajdziesz w [przewodniku o twarogu](/pl/blog/twarog-w-niemczech).",
  },
};
