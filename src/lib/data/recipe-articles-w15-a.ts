/**
 * Wave 15 Paket A — FACTS for kaczka, pieczen-rzymska.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W15_FACTS_A } from "./recipe-articles-w15-a";
 * Object.assign(FACTS, …, W15_FACTS_A);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
 *
 * Ownership:
 * - Kaczka pieczona ≠ Schab pieczony / Golonka / Żeberka
 * - Pieczeń rzymska ≠ Kotlet mielony (Pfanne) / Pasztet
 * - Sonntagsessen bleibt Kultur-Guide; hier nur Cook-Rezept
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

export const W15_FACTS_A: Record<string, ArticleFacts> = {
  "recipe-kaczka": {
    dishDe: "Kaczka pieczona",
    dishPl: "Kaczka pieczona",
    vibeDe:
      "festlich und ofenwarm, mit knuspriger Haut, Apfelduft und Majoran, der ganze Vogel statt eines Schweinebratens",
    vibePl:
      "świątecznie i piecowo, z chrupiącą skórką, zapachem jabłka i majeranku, cały ptak zamiast pieczeni wieprzowej",
    originDe:
      "Kaczka pieczona teilt Salz, Majoran und Apfelfülle mit dem Vogel, der in Polen traditionell als der eigentliche Festbraten des Jahres gilt: der Gans zum Martinstag am 11. November, an dem die alte Legende von der schnatternden Gans erzählt wird, die den heiligen Martin verriet. Weil eine ganze Gans für den Sonntagstisch oft zu groß ist, übernimmt die kleinere Ente dieselbe Technik, außen und innen mit Salz, Pfeffer und Majoran eingerieben, mit säuerlichen Äpfeln gefüllt und so lange gebacken, bis die Haut knusprig und das Fleisch saftig bleibt. Historische Kochbücher wie das von Marja Ochorowicz-Monatowa aus den 1930er Jahren beschreiben genau dieses Vorgehen und empfehlen dazu Pyzy und Rotkohl, eine Kombination, die in Wielkopolska bis heute als klassische Beilage zur Ente gilt. Das ist weder der Schweinebraten [Schab pieczony](/de/rezepte/schab-pieczony) noch die geschmorte Haxe [Golonka](/de/rezepte/golonka) noch die knusprigen [Żeberka pieczone](/de/rezepte/zeberka), alle drei stammen von einem anderen Tier und brauchen eine andere Technik. Zum Gewürz mehr im [Majeranek](/de/blog/majeranek)-Beitrag, zum Menürahmen im [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch).",
    originPl:
      "Kaczka pieczona dzieli sól, majeranek i jabłkowy farsz z ptakiem, który w Polsce tradycyjnie uchodzi za prawdziwego bohatera świątecznego stołu, gęsią na świętego Marcina 11 listopada, gdy wraca legenda o gęsi, która swoim gęganiem zdradziła świętego Marcina. Ponieważ cała gęś bywa za duża na niedzielny obiad, tę samą technikę przejmuje mniejsza kaczka, natarta solą, pieprzem i majerankiem w środku i na zewnątrz, nadziewana kwaskowymi jabłkami i pieczona, aż skóra zrobi się chrupiąca, a mięso zostanie soczyste. Przedwojenne książki kucharskie, na przykład ta Marii Ochorowicz-Monatowej z lat trzydziestych, opisują właśnie taki sposób i radzą podawać do tego pyzy oraz modrą kapustę, co w Wielkopolsce do dziś jest klasycznym zestawem przy kaczce. To ani pieczeń wieprzowa jak [schab pieczony](/pl/rezepte/schab-pieczony), ani duszona [golonka](/pl/rezepte/golonka), ani chrupiące [żeberka pieczone](/pl/rezepte/zeberka), bo wszystkie trzy pochodzą z innego zwierzęcia i wymagają innej techniki. O przyprawie więcej w [leksykonie majeranku](/pl/blog/majeranek-leksykon), o ramie menu w [obiedzie niedzielnym](/pl/blog/obiad-niedzielny).",
    shopDe:
      "Für die klassische Kaczka brauchst du eine ganze Ente, am besten frisch oder vollständig aufgetaut, dazu säuerliche Äpfel, Majoran, Salz und Pfeffer sowie etwas Wasser oder leichte Brühe für die Form. Ente und aromatischen Majoran findest du oft frischer und günstiger im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt eine frische Ente, hilft eine ehrlich benannte Tiefkühlware, Hinweise dazu gibt der Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de). Schweinenacken gehört nicht in diesen Topf, dafür gibt es den [Schab pieczony](/de/rezepte/schab-pieczony), Haxe und Rippen bleiben bei [Golonka](/de/rezepte/golonka) und [Żeberka](/de/rezepte/zeberka).",
    shopPl:
      "Na klasyczną kaczkę potrzebujesz całego ptaka, najlepiej świeżego albo dobrze rozmrożonego, do tego kwaskowych jabłek, majeranku, soli i pieprzu oraz odrobiny wody lub lekkiego bulionu do naczynia. Kaczkę i dobry, aromatyczny majeranek często kupisz świeższy i taniej w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Jeśli nie masz świeżej kaczki, sięgnij po mrożoną i uczciwie to nazwij, pomocne wskazówki znajdziesz w [zamiennikach składników](/pl/blog/zamienniki-skladnikow). Karkówka nie ma tu miejsca, na to jest [schab pieczony](/pl/rezepte/schab-pieczony), golonka i żebra zostają przy [golonce](/pl/rezepte/golonka) i [żeberkach](/pl/rezepte/zeberka).",
    techniqueDe:
      "Die Haut muss vor dem Würzen trocken sein, sonst wird sie im Ofen nicht knusprig, sondern bleibt zäh. Salz, Pfeffer und Majoran gehören auch in die Bauchhöhle, damit der Geschmack nicht nur außen bleibt, und die Apfelviertel dürfen locker liegen, damit heiße Luft zirkulieren kann. Die ersten 20 Minuten bei höherer Hitze bräunen die Haut an, danach sorgt die niedrigere Temperatur dafür, dass das Fleisch gleichmäßig durchzieht, ohne auszutrocknen. Regelmäßiges Begießen mit dem eigenen Bratensaft ersetzt zusätzliches Fett und macht die Haut gleichmäßig knusprig. Vor dem Tranchieren sollte die Ente kurz ruhen, damit sich der Saft verteilt und nicht sofort auf dem Brett landet, anders als bei der geschmorten [Golonka](/de/rezepte/golonka), die im Topf statt im Ofen zart wird.",
    techniquePl:
      "Skóra musi być sucha przed przyprawieniem, inaczej w piekarniku nie zrobi się chrupiąca, tylko zostanie gumowata. Sól, pieprz i majeranek trzeba wetrzeć także w brzuch, żeby smak nie został tylko na powierzchni, a ćwiartki jabłka powinny leżeć swobodnie, żeby gorące powietrze mogło krążyć. Pierwsze 20 minut w wyższej temperaturze przypieka skórę, potem niższa temperatura pozwala mięsu równomiernie się dopiec bez wysuszenia. Regularne polewanie własnym sokiem zastępuje dodatkowy tłuszcz i daje równą, błyszczącą skórę. Przed krojeniem kaczka powinna chwilę odpocząć, żeby sok się rozłożył, a nie od razu wylądował na desce, inaczej niż przy duszonej [golonce](/pl/rezepte/golonka), która mięknie w garnku, nie w piekarniku.",
    serveDe:
      "Serviere die tranchierte Ente mit ihrer knusprigen Haut heiß, klassisch mit Kartoffeln oder Pyzy und Rotkohl, wie es die Wielkopolska-Tradition vorsieht, den Menürahmen dafür liefert der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch). Den Bratensaft kannst du vor dem Servieren noch abschmecken und überschüssiges Fett abschöpfen. Verwechsle den Vogel nicht mit dem Schweinebraten [Schab pieczony](/de/rezepte/schab-pieczony) oder der Schmorhaxe [Golonka](/de/rezepte/golonka), beide teilen sich zwar den Sonntagstisch, kommen aber von einem anderen Tier. Reste schmecken auch kalt, am nächsten Tag hältst du die Haut am besten getrennt vom Fleisch, damit sie beim Aufwärmen wieder knusprig wird.",
    servePl:
      "Podawaj porcjowaną kaczkę z chrupiącą skórką na gorąco, klasycznie z ziemniakami albo pyzami i czerwoną kapustą, jak chce tradycja wielkopolska, ramę menu opisuje [obiad niedzielny](/pl/blog/obiad-niedzielny). Sos przed podaniem dopraw i zbierz nadmiar tłuszczu. Nie myl tego ptaka z pieczenią wieprzową [schab pieczony](/pl/rezepte/schab-pieczony) czy duszoną [golonką](/pl/rezepte/golonka), obie dzielą z kaczką niedzielny stół, ale pochodzą z innego zwierzęcia. Resztki smakują też na zimno, a skórę następnego dnia trzymaj osobno od mięsa, żeby po podgrzaniu znów była chrupiąca.",
    diasporaDe:
      "In der Diaspora ist die Ente oft der Vogel, den man sich für besondere Anlässe aufhebt, weil er seltener auf den Tisch kommt als ein schnelles Feierabend-Schnitzel. Kinder dürfen beim Füllen mit Apfel helfen, während der heiße Ofen und das Tranchieren bei den Erwachsenen bleiben. Ente und aromatischer Majoran aus dem [Polenladen](/de/blog/polenladen-einkaufen) machen an der Kruste oft einen hörbaren Unterschied zur Supermarktware. Den kulturellen Rahmen für den Sonntag liefert weiterhin der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), Nachbarbraten bleiben [Schab](/de/rezepte/schab-pieczony) und [Golonka](/de/rezepte/golonka).",
    diasporaPl:
      "W diasporze kaczka bywa ptakiem, którego robi się na szczególne okazje, bo rzadziej trafia na stół niż szybki schabowy po pracy. Dzieci mogą pomagać przy nadziewaniu jabłkiem, a gorący piekarnik i krojenie zostają przy dorosłych. Kaczka i aromatyczny majeranek ze [sklepu polskiego](/pl/blog/sklep-polski-zakupy) często słyszalnie różnią się od wersji marketowej już przy chrupaniu skórki. Kulturową ramę niedzieli daje wciąż [obiad niedzielny](/pl/blog/obiad-niedzielny), a sąsiadami na stole zostają [schab](/pl/rezepte/schab-pieczony) i [golonka](/pl/rezepte/golonka).",
    mistakesDe:
      "Nasse Haut wird im Ofen nicht knusprig, deshalb lohnt sich gründliches Trockentupfen vor dem Würzen. Zu hohe Hitze über die gesamte Backzeit trocknet das Fleisch aus, während zu wenig Ruhezeit vor dem Tranchieren den Saft auf dem Brett statt im Fleisch landen lässt. Verwechsle die Ente außerdem nicht mit dem Schweinebraten [Schab pieczony](/de/rezepte/schab-pieczony), der Schmorhaxe [Golonka](/de/rezepte/golonka) oder den knusprigen [Żeberka](/de/rezepte/zeberka), alle drei brauchen ein anderes Stück Fleisch und eine andere Technik.",
    mistakesPl:
      "Mokra skóra nie zrobi się chrupiąca w piekarniku, więc warto dokładnie osuszyć kaczkę przed przyprawieniem. Za wysoka temperatura przez cały czas pieczenia wysusza mięso, a za krótki odpoczynek przed krojeniem sprawia, że sok ląduje na desce, a nie w mięsie. Nie myl też kaczki z pieczenią wieprzową [schab pieczony](/pl/rezepte/schab-pieczony), duszoną [golonką](/pl/rezepte/golonka) czy chrupiącymi [żeberkami](/pl/rezepte/zeberka), bo wszystkie trzy potrzebują innego kawałka mięsa i innej techniki.",
    variantsDe:
      "Wer mehr Fruchtigkeit mag, füllt die Ente mit mehr Apfel oder ergänzt getrocknete Pflaumen, solange das ehrlich im Titel steht. Für kleinere Haushalte reicht auch eine halbe Ente, die etwas kürzer im Ofen bleibt. Als Nachbarn auf dem Festtagstisch passen der Schweinebraten [Schab pieczony](/de/rezepte/schab-pieczony), die Schmorhaxe [Golonka](/de/rezepte/golonka) und die knusprigen [Żeberka](/de/rezepte/zeberka), zum Menü passt der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), zum Gewürz der [Majeranek](/de/blog/majeranek)-Beitrag und zum Einkauf der [Polenladen](/de/blog/polenladen-einkaufen).",
    variantsPl:
      "Kto lubi więcej owocowości, nadziewa kaczkę większą ilością jabłka albo dorzuca suszone śliwki, o ile uczciwie napisze to w tytule. Dla mniejszych gospodarstw wystarczy też pół kaczki, które krócej siedzi w piekarniku. Na świątecznym stole sąsiadują z nią pieczeń wieprzowa [schab pieczony](/pl/rezepte/schab-pieczony), duszona [golonka](/pl/rezepte/golonka) i chrupiące [żeberka](/pl/rezepte/zeberka), do menu pasuje [obiad niedzielny](/pl/blog/obiad-niedzielny), do przyprawy [leksykon majeranku](/pl/blog/majeranek-leksykon), a do zakupów [sklep polski](/pl/blog/sklep-polski-zakupy).",
  },

  "recipe-pieczen-rzymska": {
    dishDe: "Pieczeń rzymska",
    dishPl: "Pieczeń rzymska",
    vibeDe:
      "ofenwarm, mit überraschendem Anschnitt und Ei-Kern, ein Hackbraten aus dem Ofen, keine Frikadelle",
    vibePl:
      "ciepła z pieca, z zaskakującym przekrojem i jajkiem w środku, pieczeń mielona, nie kotlet z patelni",
    originDe:
      "Der Name Pieczeń rzymska hat trotz seines Klangs nichts mit der Küche des antiken Rom zu tun, er gehört zu einer Reihe polnischer Alltagsgerichte, die im 19. und frühen 20. Jahrhundert bewusst klangvolle, fremd wirkende Namen bekamen, um einem einfachen Hackfleischlaib mehr Glanz zu verleihen. Tatsächlich ist die Pieczeń rzymska ein Ofen-Hackbraten aus gemischtem Hack, eingeweichtem Brötchen, Zwiebel und Majoran, der um ganze hartgekochte Eier herum geformt wird, sodass jede Scheibe beim Aufschneiden den charakteristischen Ei-Kern zeigt. Das unterscheidet sie deutlich von den flachen, in der Pfanne gebratenen [Kotlet mielony](/de/rezepte/kotlet-mielony) und von der gebackenen Leberpastete [Pasztet](/de/rezepte/pasztet), die beide aus ähnlichen Zutaten, aber völlig anderer Form entstehen. Am [Sonntagsessen](/de/blog/sonntagsessen-polnisch) und an Ostern zählt sie zu den Gerichten, die sich gut vorbereiten lassen, weil sie kalt genauso gut schmeckt wie warm, feineres Hack gelingt dafür mit der [Fleischwolf-Kaufberatung](/de/blog/fleischwolf-kaufberatung).",
    originPl:
      "Nazwa pieczeń rzymska, mimo swojego brzmienia, nie ma nic wspólnego z kuchnią starożytnego Rzymu, należy do grupy polskich domowych dań, które w XIX i na początku XX wieku dostawały efektowne, egzotycznie brzmiące nazwy, żeby zwykłemu bochenkowi z mięsa mielonego dodać nieco blasku. W rzeczywistości pieczeń rzymska to pieczony w piekarniku bochenek z mielonego mięsa, namoczonej bułki, cebuli i majeranku, uformowany wokół całych jajek na twardo, dzięki czemu każdy plaster po przekrojeniu pokazuje charakterystyczny rdzeń z jajka. To odróżnia ją od płaskich, smażonych na patelni [kotletów mielonych](/pl/rezepte/kotlet-mielony) i od pieczonego [pasztetu](/pl/rezepte/pasztet) z wątróbką, które powstają z podobnych składników, ale mają zupełnie inną formę. Przy [obiedzie niedzielnym](/pl/blog/obiad-niedzielny) i na Wielkanoc bywa daniem, które dobrze się przygotowuje wcześniej, bo na zimno smakuje tak samo dobrze jak na ciepło, a drobniejsze mielenie ułatwia [wilk do mięsa](/pl/blog/wilk-do-miesa).",
    shopDe:
      "Für die Masse brauchst du gemischtes Hack, alte Brötchen, Milch und ein Ei, für den Kern hartgekochte Eier, dazu Zwiebel, Majoran, Salz und Pfeffer, optional Speck zum Umwickeln. Gutes Hack und aromatischen Majoran findest du oft im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt Brötchen oder gute Hack-Qualität, ersetze ehrlich benannt laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Flache panierte Kotlets gehören zum [Kotlet mielony](/de/rezepte/kotlet-mielony), Leber-Pastetenmasse zum [Pasztet](/de/rezepte/pasztet).",
    shopPl:
      "Na masę weź mielone mieszane, czerstwe bułki, mleko i jajko, do środka jajka na twardo, do tego cebulę, majeranek, sól i pieprz, opcjonalnie boczek do owinięcia. Dobre mięso i aromatyczny majeranek często znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Brak bułki albo dobrej jakości mięsa, zamień uczciwie według [zamienników](/pl/blog/zamienniki-skladnikow). Płaskie panierowane kotlety należą do [kotleta mielonego](/pl/rezepte/kotlet-mielony), masa pasztetowa do [pasztetu](/pl/rezepte/pasztet).",
    techniqueDe:
      "Das Brötchen muss gut ausgedrückt werden, sonst rutscht der Laib beim Formen auseinander, weil zu viel Flüssigkeit die Bindung schwächt. Die Masse gut binden und kurz kalt stellen, dann die Eier mittig und längs einlegen und fest verschließen, damit der Anschnitt später saubere Ringe zeigt statt eines verrutschten Kerns. Bei 180 °C durchbacken und vor dem Schneiden ruhen lassen, sonst zerfällt der Laib beim ersten Schnitt. Zu mageres Hack trocknet leicht aus, zu locker geformt reißt der Kern beim Backen auf, anders als beim Pfannenbraten [Kotlet mielony](/de/rezepte/kotlet-mielony) oder der Terrine [Pasztet](/de/rezepte/pasztet), die beide keinen zentrierten Ei-Kern brauchen.",
    techniquePl:
      "Bułkę trzeba dobrze odcisnąć, inaczej bochenek się rozjeżdża podczas formowania, bo nadmiar płynu słabo wiąże masę. Masę dobrze zwiąż i krótko schłódź, potem ułóż jajka na środku wzdłuż i domknij mocno, żeby przekrój dał równe pierścienie, a nie przesunięty rdzeń. Piecz w 180 °C do końca i przed krojeniem daj odpocząć, inaczej bochenek się rozpadnie przy pierwszym cięciu. Za chude mięso łatwo wysycha, a za luźno uformowany bochenek pęka przy pieczeniu wokół jajek, inaczej niż przy patelnianym [kotlecie mielonym](/pl/rezepte/kotlet-mielony) albo terrinie [pasztet](/pl/rezepte/pasztet), które nie mają wyśrodkowanego rdzenia z jajka.",
    serveDe:
      "In Scheiben mit sichtbarem Ei-Kern servieren, oft mit Kartoffeln, Surówka oder einer leichten Soße, zum Menü passt der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch). Wer flache Pfannen-Kotlets möchte, findet sie beim [Kotlet mielony](/de/rezepte/kotlet-mielony), wer eine Pastete sucht, beim [Pasztet](/de/rezepte/pasztet). Reste halten gekühlt zwei bis drei Tage und schmecken kalt genauso gut wie aufgewärmt, was den Braten für vorbereitete Sonntage praktisch macht.",
    servePl:
      "Podawaj w plastrach z widocznym jajkiem, często z ziemniakami, surówką albo lekkim sosem, do menu pasuje [obiad niedzielny](/pl/blog/obiad-niedzielny). Kto szuka płaskich kotletów z patelni, znajdzie je pod [kotletem mielonym](/pl/rezepte/kotlet-mielony), kto szuka pasztetu, pod [pasztetem](/pl/rezepte/pasztet). Resztki trzymają się w chłodzie dwa do trzech dni i smakują na zimno tak samo dobrze jak na ciepło, co czyni tę pieczeń praktyczną na przygotowaną wcześniej niedzielę.",
    diasporaDe:
      "Pieczeń rzymska ist diaspora-freundlich: ein Laib, Hack aus der Theke oder dem Wolf, Eier aus dem Kühlschrank, Ofen statt Pfannenrunde für viele Gäste auf einmal. Samstag formen, Sonntag nur noch schneiden entlastet den Morgen deutlich. Kinder dürfen beim Eierschälen helfen, der heiße Ofen bleibt bei den Erwachsenen. Gutes Hack aus dem [Polenladen](/de/blog/polenladen-einkaufen) und der kulturelle Rahmen im [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch) machen den Braten alltagstauglich, verwechsle ihn dabei nicht mit dem [Kotlet mielony](/de/rezepte/kotlet-mielony).",
    diasporaPl:
      "Pieczeń rzymska lubi diasporę: jeden bochenek, mięso z lady lub wilka, jajka z lodówki, piekarnik zamiast rundy smażenia dla wielu gości naraz. Formowanie w sobotę i krojenie w niedzielę odciąża poranek. Dzieci mogą pomagać przy obieraniu jajek, gorący piekarnik zostaje u dorosłych. Dobre mięso ze [sklepu polskiego](/pl/blog/sklep-polski-zakupy) i kulturowa rama z [obiadu niedzielnego](/pl/blog/obiad-niedzielny) czynią ten bochenek praktycznym na co dzień, nie myląc go z [kotletem mielonym](/pl/rezepte/kotlet-mielony).",
    mistakesDe:
      "Wer die Pieczeń rzymska mit dem in der Pfanne gebratenen [Kotlet mielony](/de/rezepte/kotlet-mielony) oder mit dem [Pasztet](/de/rezepte/pasztet) verwechselt, erwartet die falsche Textur. Zu nasse Masse hält den Laib nicht zusammen, nicht mittig eingelegte Eier zerstören den sauberen Anschnitt, und zu kurze Backzeit lässt den Kern roh. Panade gehört in den [Panieren-Guide](/de/blog/panieren-schabowy) und nicht in diesen Ofen-Laib.",
    mistakesPl:
      "Kto myli pieczeń rzymską z smażonym na patelni [kotletem mielonym](/pl/rezepte/kotlet-mielony) albo z [pasztetem](/pl/rezepte/pasztet), oczekuje innej tekstury. Za mokra masa nie utrzyma formy, źle wyśrodkowane jajka psują ładny przekrój, a za krótkie pieczenie zostawia surowy środek. Panierka należy do [przewodnika o panierowaniu](/pl/blog/panierowanie-kotlet), nie do tego bochenka z pieca.",
    variantsDe:
      "Mit Speckmantel wird die Kruste würziger, ohne Ei-Kern bleibt es ein einfacherer Ofen-Laib, solange das ehrlich benannt ist, und eine feinere Hackmischung macht den Anschnitt glatter. Passende Nachbarn sind [Kotlet mielony](/de/rezepte/kotlet-mielony) und [Pasztet](/de/rezepte/pasztet), zum Menü passt der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), zum Feinmahlen die [Fleischwolf-Kaufberatung](/de/blog/fleischwolf-kaufberatung) und zum Ersatz [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Z boczkiem skórka staje się bardziej wyrazista, bez jajka w środku zostaje prostszy bochenek z pieca, o ile jasno to nazwiesz, a drobniejsze mielone daje gładszy przekrój. Pasującymi sąsiadami są [kotlet mielony](/pl/rezepte/kotlet-mielony) i [pasztet](/pl/rezepte/pasztet), do menu pasuje [obiad niedzielny](/pl/blog/obiad-niedzielny), do mielenia [wilk do mięsa](/pl/blog/wilk-do-miesa), a do zamienników [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
  },
};
