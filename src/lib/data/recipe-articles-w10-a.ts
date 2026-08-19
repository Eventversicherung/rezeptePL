/**
 * Wave 10 Paket A — FACTS for Flaki + Schab pieczony.
 * E merges into recipe-articles.ts FACTS map — do not import here until Integrator.
 */

export type W10ArticleFacts = {
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

export const W10_FACTS_A: Record<string, W10ArticleFacts> = {
  "recipe-flaki": {
    dishDe: "Flaki",
    dishPl: "Flaki",
    vibeDe: "deftig, majeranek-würzig, stundenlang geköchelt, sonntäglich",
    vibePl: "treściwe, majerankowe, godzinami gotowane, niedzielne",
    originDe:
      "Flaki gehören zu den ältesten Gerichten der polnischen Küche: Schon im 14. Jahrhundert stand die Kuttelsuppe auf dem Tisch, und König Władysław II. Jagiełło soll sie zu seinen Lieblingsspeisen gezählt haben. Der Name kommt vom polnischen Wort flak für Eingeweide, das wiederum vom deutschen Fleck (Flecken, Stück) abstammt, weshalb die Suppe im Deutschen früher auch Flecksuppe hieß. Die alte polnische Küche würzte kräftig, oft sogar mit teurem Safran, heute trägt vor allem reichlich [Majeranek](/de/blog/majeranek) den Geschmack. Traditionell kam Flaki bei Hochzeiten auf den Tisch und gilt bis heute als bewährtes Mittel gegen den Kater nach einer langen Feier. Das ist ausdrücklich kein [Barszcz](/de/rezepte/barszcz-czerwony), kein [Żurek](/de/rezepte/zurek) und keine [Ogórkowa](/de/rezepte/ogorkowa): Rote Bete, Sauerteig und Kiszone-Gurke geben jeweils einen ganz anderen Charakter, während Flaki über zarte Kuttelstreifen und Majoran funktioniert. Einen Überblick über die ganze Suppenfamilie gibt der Beitrag [Polnische Suppen](/de/blog/polnische-suppen).",
    originPl:
      "Flaki należą do najstarszych dań polskiej kuchni: już w XIV wieku zupa z flaków trafiała na stół, a król Władysław Jagiełło miał ją bardzo lubić. Nazwa pochodzi od polskiego słowa flak, oznaczającego wnętrzności, które z kolei wywodzi się z niemieckiego Fleck, czyli kawałek albo plama, dlatego po niemiecku zupę tę nazywano też Flecksuppe. Kuchnia staropolska mocno przyprawiała potrawy, często drogim szafranem, dziś smak niosą przede wszystkim duże ilości [majeranku](/pl/blog/majeranek-leksykon). Flaki tradycyjnie podawano na weselach, a do dziś uznaje się je za sprawdzony sposób na kaca po dłuższej zabawie. To zdecydowanie nie [barszcz](/pl/rezepte/barszcz-czerwony), nie [żurek](/pl/rezepte/zurek) i nie [ogórkowa](/pl/rezepte/ogorkowa): burak, zakwas i kiszony ogórek budują zupełnie inny charakter, podczas gdy flaki opierają się na miękkich paskach flaków i majeranku. Przegląd całej rodziny zup znajdziesz w artykule o [polskich zupach](/pl/blog/polskie-zupy).",
    shopDe:
      "Vorbereitete Rinderkutteln bekommst du am einfachsten im [Polenladen](/de/blog/polenladen-einkaufen) oder an einer guten Fleischtheke, oft sind sie dort schon geputzt. Für die Brühe brauchst du außerdem Suppengrün, Tomatenmark, Paprikapulver, Lorbeer und Piment. Guter Majoran macht hier den größten Unterschied, ungewürzte Kutteln schmecken schnell fade. Wer eine klare Brühe ohne Einlage sucht, findet sie bei [Rosół](/de/rezepte/rosol), nicht in diesem Rezept.",
    shopPl:
      "Przygotowane flaki wołowe najłatwiej kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy) albo u dobrego rzeźnika, gdzie często są już oczyszczone. Do wywaru potrzebujesz jeszcze włoszczyzny, koncentratu pomidorowego, papryki w proszku, liścia laurowego i ziela angielskiego. Dobry majeranek robi tu największą różnicę, bez przyprawy flaki szybko wychodzą mdłe. Kto szuka klarownego wywaru bez dodatków, powinien sięgnąć po [rosół](/pl/rezepte/rosol), nie po ten przepis.",
    techniqueDe:
      "Die Kutteln müssen zuerst vorgekocht und gut abgespült werden, sonst bleibt ein strenger Geruch in der Suppe zurück. Das Gemüse anschwitzen, Paprika und Mark kurz mitrösten, dann mit Brühe auffüllen und lange sanft köcheln lassen, bis die Streifen wirklich weich sind. Der Majoran gehört früh in den Topf, denn er braucht Zeit, um sich zu entfalten, zu spätes Würzen macht die Suppe flach. Nicht sprudelnd kochen und den Schaum regelmäßig abnehmen, das hält die Brühe klar. Das Fond-Gefühl kann an [Rosół](/de/rezepte/rosol) erinnern, doch Einlage und Würzung machen bei Flaki den entscheidenden Unterschied.",
    techniquePl:
      "Flaki trzeba najpierw podgotować i dobrze spłukać, inaczej w zupie zostaje ostry zapach. Warzywa zeszklić, paprykę i koncentrat krótko podsmażyć, zalać bulionem i długo, łagodnie gotować, aż paski będą naprawdę miękkie. Majeranek dodaj wcześnie, bo potrzebuje czasu, aby się rozwinąć, za późne doprawienie robi zupę płaską. Nie gotuj gwałtownie i regularnie zbieraj pianę, dzięki temu wywar zostaje klarowny. Wyczucie bulionu może przypominać [rosół](/pl/rezepte/rosol), ale to dodatek i przyprawy odróżniają flaki od klarownej zupy.",
    serveDe:
      "Heiß mit frischem Brot oder Kartoffeln servieren. Als deftiger Suppen-Mittelpunkt passt Flaki gut in ein [polnisches Sonntagsessen](/de/blog/sonntagsessen-polnisch), wenn der Tisch nach Wärme und Majoran verlangt. Mehr Zusammenhang liefert der Überblick [Polnische Suppen](/de/blog/polnische-suppen). Reste schmecken am nächsten Tag oft noch runder, einfach erneut erhitzen, abschmecken und bei Bedarf etwas Brühe nachgießen.",
    servePl:
      "Podawaj gorące z chlebem lub ziemniakami. Jako treściwa zupa na środku stołu pasuje flaki do [obiadu niedzielnego](/pl/blog/obiad-niedzielny), gdy dom potrzebuje ciepła i majeranku. Szerszy kontekst daje przegląd [polskich zup](/pl/blog/polskie-zupy). Resztki następnego dnia często smakują jeszcze lepiej, wystarczy odgrzać, doprawić i ewentualnie dolać bulionu.",
    diasporaDe:
      "In Deutschland sind schon geputzte Kutteln der Schlüssel zu diesem Rezept, denn ohne stundenlanges Putzen bleibt Flaki gut planbar. Fleisch und aromatischer Majoran kommen oft aus dem Polenladen, Gemüse und Tomatenmark aus jedem Supermarkt. Wer die ganze Suppenlandschaft ordnen will, startet beim Überblick [Polnische Suppen](/de/blog/polnische-suppen) und landet hier beim konkreten Topf.",
    diasporaPl:
      "W Niemczech kluczem do tego przepisu są już oczyszczone flaki, bo bez wielogodzinnego czyszczenia dania łatwo zaplanować. Mięso i aromatyczny majeranek kupisz w sklepie polskim, warzywa i koncentrat w każdym markecie. Kto chce uporządkować całą rodzinę zup, zaczyna od przeglądu [polskich zup](/pl/blog/polskie-zupy) i trafia tu przy konkretnym garnku.",
    mistakesDe:
      "Unzureichend gereinigte Kutteln, zu wenig Majoran und zu hartes Kochen machen Flaki streng im Geruch oder zäh im Biss. Nimm dir Zeit fürs Vorkochen, Spülen und Würzen, das entscheidet mehr als jede Zutatenliste. Verwechsle den Topf außerdem nicht mit [Barszcz](/de/rezepte/barszcz-czerwony), [Żurek](/de/rezepte/zurek) oder [Ogórkowa](/de/rezepte/ogorkowa), die alle einen ganz anderen Charakter haben.",
    mistakesPl:
      "Niedostatecznie oczyszczone flaki, za mało majeranku i zbyt gwałtowne gotowanie robią zupę ostrą w zapachu albo łykowatą w kęsie. Daj sobie czas na wstępne gotowanie, płukanie i doprawianie, to decyduje bardziej niż sama lista składników. Nie myl też tego garnka z [barszczem](/pl/rezepte/barszcz-czerwony), [żurkiem](/pl/rezepte/zurek) czy [ogórkową](/pl/rezepte/ogorkowa), które mają zupełnie inny charakter.",
    variantsDe:
      "In manchen Häusern kommt mehr Paprika oder etwas Chili in den Topf, andere lassen das Tomatenmark ganz weg für eine hellere Brühe, solche Hausvarianten sollte man ehrlich benennen. [Rosół](/de/rezepte/rosol) bleibt die klare Brühe ohne Einlage, während Flaki die deftige Kuttelsuppe ist. Die frühlingshafte [Botwinka](/de/rezepte/botwinka) hat einen völlig anderen, leichteren Charakter.",
    variantsPl:
      "W niektórych domach do garnka trafia więcej papryki albo odrobina chili, inni całkiem pomijają koncentrat pomidorowy dla jaśniejszego wywaru, takie warianty domowe warto uczciwie nazywać. [Rosół](/pl/rezepte/rosol) zostaje klarownym wywarem bez dodatku, a flaki treściwą zupą z flakami. Wiosenna [botwinka](/pl/rezepte/botwinka) ma zupełnie inny, lżejszy charakter.",
  },
  "recipe-schab-pieczony": {
    dishDe: "Schab pieczony",
    dishPl: "Schab pieczony",
    vibeDe: "ofenwarm, majeranek-würzig, saftig, sonntäglich",
    vibePl: "z pieca, majerankowe, soczyste, niedzielne",
    originDe:
      "Schweinefleisch galt in Polen jahrhundertelang als das weniger edle Fleisch: Auf herrschaftlichen Tischen landeten eher Wild und Geflügel, während Schwein vor allem das Essen der Landbevölkerung und des Gesindes war. Erst im Zweiten Weltkrieg und besonders in der Zeit der Volksrepublik stieg Schab pieczony zum festlichen Sonntagsbraten auf, einfach weil Schwein verfügbarer war als andere Fleischsorten und der Ofenbraten wenig Aufwand für viele Portionen bedeutete. Aus dem einstigen Notbehelf wurde so mit der Zeit ein richtiges Festtagsgericht. Die Marinade aus Knoblauch und [Majeranek](/de/blog/majeranek) ist bis heute die polnische Klassik schlechthin, oft ergänzt um etwas Senf oder Honig für eine dunklere Kruste. Wichtig ist die Abgrenzung zu [Kotlet schabowy](/de/rezepte/kotlet-schabowy): Dort wird das Fleisch dünn geschnitten, paniert und in der Pfanne gebraten, hier bleibt es als ganzes Stück im Ofen und bekommt keine Panade. Den Menürahmen liefert das [polnische Sonntagsessen](/de/blog/sonntagsessen-polnisch), der Rippen-Nachbar am gleichen Tag ist oft [Żeberka pieczone](/de/rezepte/zeberka).",
    originPl:
      "Wieprzowina przez wieki uchodziła w Polsce za mięso mniej wytworne: na pańskich stołach częściej gościły dziczyzna i drób, a wieprzowinę jadła głównie wieś i służba. Dopiero podczas drugiej wojny światowej, a potem w czasach Polskiej Rzeczpospolitej Ludowej, schab pieczony awansował do rangi świątecznej pieczeni, po prostu dlatego, że wieprzowina była łatwiej dostępna niż inne mięsa, a pieczenie w całości dawało dużo porcji z małym wysiłkiem. Z dawnego rozwiązania na trudne czasy z czasem zrobiło się prawdziwe danie świąteczne. Marynata z czosnku i [majeranku](/pl/blog/majeranek-leksykon) do dziś zostaje polską klasyką, czasem wzbogaconą musztardą albo miodem dla ciemniejszej skórki. Ważne jest rozróżnienie od [kotleta schabowego](/pl/rezepte/kotlet-schabowy): tam mięso kroi się na plastry, panieruje i smaży na patelni, tu zostaje w całości i piecze się bez panierki. Ramę menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny), a sąsiadem na kości tego samego dnia bywają [żeberka pieczone](/pl/rezepte/zeberka).",
    shopDe:
      "An der Fleischtheke lohnt sich ein gleichmäßiger Schab oder Schweinenacken mit etwas Fettrand, zu mageres Fleisch trocknet im Ofen schnell aus. Knoblauch, Majoran, Senf, Öl, Salz und Pfeffer reichen für die Marinade völlig aus, guten Majoran mit Charakter findest du oft im [Polenladen](/de/blog/polenladen-einkaufen). Eine feste Form oder ein [Dutch Oven](/de/blog/dutch-oven-kaufberatung) hält die Hitze im Ofen gleichmäßiger. Semmelbrösel und eine Panierstation brauchst du hier nicht, das gehört zum ganz anderen [Kotlet schabowy](/de/rezepte/kotlet-schabowy).",
    shopPl:
      "Przy ladzie warto wybrać równy schab lub kark z odrobiną tłuszczu na wierzchu, bo zbyt chude mięso szybko wysycha w piekarniku. Czosnek, majeranek, musztarda, olej, sól i pieprz wystarczą do natarcia, a majeranek z charakterem często znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Solidne naczynie lub [garnek do duszenia](/pl/blog/garnek-do-duszenia) trzyma ciepło równomiernie. Bułka tarta i stanowisko do panierowania tu nie są potrzebne, to należy do zupełnie innego [kotleta schabowego](/pl/rezepte/kotlet-schabowy).",
    techniqueDe:
      "Das Fleisch trocken tupfen, kräftig einreiben und wirklich ruhen lassen, denn die Gewürze brauchen Zeit, um in die Fasern zu ziehen. Im mittelheißen Ofen mit etwas Flüssigkeit in der Form backen und regelmäßig mit dem eigenen Saft begießen, das schützt die Oberfläche vor dem Austrocknen. Zu heißer Ofen ohne Flüssigkeit macht die Kruste zwar dunkel, trocknet aber den Kern aus, deshalb lieber geduldig bei moderater Hitze arbeiten. Vor dem Schneiden unbedingt ruhen lassen, sonst läuft der ganze Saft auf das Brett statt in das Fleisch zurückzuziehen.",
    techniquePl:
      "Mięso osusz, dokładnie natrzyj i naprawdę odczekaj, bo przyprawy potrzebują czasu, aby wniknąć w włókna. Piecz w średnio nagrzanym piekarniku z odrobiną płynu w naczyniu i regularnie polewaj własnym sokiem, to chroni powierzchnię przed wysuszeniem. Za gorący piekarnik bez płynu robi ciemną skórkę, ale wysusza środek, więc lepiej działać cierpliwie w umiarkowanej temperaturze. Przed krojeniem koniecznie odstaw mięso, inaczej cały sok wypłynie na deskę, zamiast wrócić do środka kawałka.",
    serveDe:
      "In Scheiben schneiden und mit Kartoffeln sowie kühler [Mizeria](/de/rezepte/mizeria) oder einem einfachen Salat servieren. Am Buffet steht oft die [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) daneben, ein völlig anderer Charakter aus Mayonnaise und Gemüse. Im Rahmen des [Sonntagsessens](/de/blog/sonntagsessen-polnisch) ist der Braten der ruhige Fleisch-Mittelpunkt, der keinen Pfannen-Marathon in letzter Minute braucht. Reste lassen sich am besten im Ofen wieder aufwärmen.",
    servePl:
      "Kraj w plastry i podawaj z ziemniakami oraz chłodną [mizerią](/pl/rezepte/mizeria) lub prostą surówką. Na bufecie sąsiaduje często [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa), zupełnie inny charakter na bazie majonezu i warzyw. W ramach [obiadu niedzielnego](/pl/blog/obiad-niedzielny) pieczeń jest spokojnym centrum stołu, bez maratonu przy patelni w ostatniej chwili. Resztki najlepiej odgrzać ponownie w piekarniku.",
    diasporaDe:
      "In deutschen Wohnungen lohnt sich der Ofen-Sonntag: Marinade am Samstag vorbereiten, am Sonntag nur noch backen, das entlastet den Tag enorm. Majoran und Polenladen bleiben dabei feste Begleiter, während der Panier-Guide nur für tatsächlich panierte Schnitzel gilt. Wer am selben Tag panieren möchte, greift stattdessen zum Rezept für Kotlet schabowy.",
    diasporaPl:
      "W niemieckich mieszkaniach opłaca się niedziela z pieca: marynata przygotowana w sobotę, w niedzielę tylko pieczenie, co znacznie odciąża dzień. Majeranek i sklep polski zostają stałymi towarzyszami, natomiast przewodnik po panierowaniu dotyczy tylko faktycznie panierowanych kotletów. Kto chce panierować tego samego dnia, sięga po przepis na kotlet schabowy.",
    mistakesDe:
      "Der häufigste Fehler ist die Verwechslung mit dem panierten [Kotlet schabowy](/de/rezepte/kotlet-schabowy), hier gibt es keine Panade und keine Pfanne. Zu mageres Fleisch ohne Fettrand trocknet aus, und ein zu heißer Ofen ohne Flüssigkeit in der Form verschärft das Problem zusätzlich. Schneide das Fleisch erst nach einer kurzen Ruhezeit, sonst läuft der Saft sofort aus und der Braten wirkt trocken, obwohl er es gar nicht ist.",
    mistakesPl:
      "Najczęstszy błąd to mylenie z panierowanym [kotletem schabowym](/pl/rezepte/kotlet-schabowy), tu nie ma panierki i nie ma patelni. Zbyt chude mięso bez tłuszczu na wierzchu wysycha, a zbyt gorący piekarnik bez płynu w naczyniu jeszcze to pogłębia. Krój mięso dopiero po krótkim odpoczynku, inaczej sok natychmiast wypłynie i pieczeń wyda się sucha, choć wcale taka nie jest.",
    variantsDe:
      "Mit Knochen bekommt der Braten mehr Geschmack, eine Honig-Senf-Glasur ist eine beliebte süßliche Hausvariante, und Kümmel bringt eine erdigere Note, solche Abweichungen sollte man ehrlich benennen. [Żeberka pieczone](/de/rezepte/zeberka) bleiben das Rippenrezept mit eigener Textur, während der [Kotlet schabowy](/de/rezepte/kotlet-schabowy) das panierte Schnitzel ist. Als Beilage-Klassiker bleibt kühle Mizeria die naheliegendste Wahl.",
    variantsPl:
      "Z kością pieczeń zyskuje głębszy smak, glazura miodowo-musztardowa jest popularnym słodkim wariantem domowym, a kminek dodaje bardziej ziemistej nuty, takie odstępstwa warto uczciwie nazywać. [Żeberka pieczone](/pl/rezepte/zeberka) zostają przepisem na żebra z inną teksturą, a [kotlet schabowy](/pl/rezepte/kotlet-schabowy) panierowanym kotletem. Klasycznym dodatkiem zostaje chłodna mizeria.",
  },
};
