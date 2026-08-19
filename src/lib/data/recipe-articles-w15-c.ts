/**
 * Wave 15 Paket C — FACTS for marchewka-groszek + fasolka-szparagowa.
 *
 * Ownership (internal only):
 * - Marchewka z groszkiem = warme Möhren+Erbsen-Beilage ≠ Mizeria ≠ Buraczki
 * - Fasolka szparagowa = grüne Stangenbohnen-Beilage ≠ Fasolka po bretońsku
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

export const W15_FACTS_C: Record<string, ArticleFacts> = {
  "recipe-marchewka-groszek": {
    dishDe: "Marchewka z groszkiem",
    dishPl: "Marchewka z groszkiem",
    vibeDe:
      "süßlich und buttrig, warm glänzend mit Dillgrün, die ruhige Sonntagsbeilage neben Fleisch",
    vibePl:
      "maślano-słodkawa, ciepła i błyszcząca, z koprem, spokojny dodatek niedzielny obok mięsa",
    originDe:
      "Marchewka z groszkiem gilt vielen als uraltes polnisches Hausrezept, hat aber tatsächlich französische Wurzeln: Die Technik, klein geschnittenes Wurzelgemüse in einer leichten Mehlschwitze zu schwenken, stammt aus der klassischen französischen Küche und ähnelt den glasierten carottes Vichy, wie sie unter anderem Auguste Escoffier beschrieb, vermutlich über Köche an polnischen Adelshöfen eingewandert. Ihre bis heute typische Form bekam die Beilage aber erst in der Volksrepublik Polen: Möhren waren das ganze Jahr über billig verfügbar, und mit der industriellen Tiefkühlkost kam der küchenfertige Erbsengroszek in die Kantinen und Bar mleczny genannten Milchbars, wo eine mit Butter geglänzte oder mit Mehl gebundene Gemüseportion half, ein karges Mittagsgericht mit nur wenig Fleisch spürbar sättigender zu machen. Das ist weder der kalte Gurkensalat [Mizeria](/de/rezepte/mizeria) noch die warme Rote-Bete-Beilage [Buraczki](/de/rezepte/buraczki) und auch kein Rohkostsalat. Wie der Teller am Sonntag zusammenkommt, beschreibt der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), klassischer Nachbar auf dem Teller ist [Kotlet schabowy](/de/rezepte/kotlet-schabowy).",
    originPl:
      "Wiele osób uważa marchewkę z groszkiem za prastary, staropolski przepis, ale w rzeczywistości ma korzenie francuskie: technika duszenia drobno pokrojonych warzyw korzeniowych w lekkiej zasmażce pochodzi z klasycznej kuchni francuskiej i przypomina glazurowane carottes Vichy, opisywane między innymi przez Auguste'a Escoffiera, prawdopodobnie przywiezione przez kucharzy działających na polskich dworach magnackich. Swoją dzisiejszą, znaną wszystkim formę dodatek zyskał jednak w Polskiej Rzeczypospolitej Ludowej: marchew była tania i dostępna cały rok, a wraz z przemysłem mrożonek do stołówek i barów mlecznych trafił gotowy groszek, dzięki czemu błyszcząca od masła albo zagęszczona mąką porcja warzyw pomagała skromnemu obiadowi z niewielką ilością mięsa wydawać się bardziej sycącym. To ani zimna [mizeria](/pl/rezepte/mizeria), ani ciepłe [buraczki](/pl/rezepte/buraczki), ani surowa surówka. Jak ułożyć niedzielny talerz, opisuje [obiad niedzielny](/pl/blog/obiad-niedzielny), klasyczny sąsiad to [kotlet schabowy](/pl/rezepte/kotlet-schabowy).",
    shopDe:
      "Möhren und Erbsen, frisch oder tiefgekühlt, Butter, optional eine Prise Zucker sowie Dill oder Petersilie, Salz und Pfeffer reichen völlig aus, das liegt im deutschen Supermarkt bereit, frischen Dill findest du oft im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt Butter oder gutes Kraut, hilft der Beitrag zu [Ersatzprodukten DE](/de/blog/ersatzprodukte-de). Wer Gurke mit Śmietana möchte, kocht [Mizeria](/de/rezepte/mizeria), wer Rote Bete warm mag, [Buraczki](/de/rezepte/buraczki), den Menürahmen setzt der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch).",
    shopPl:
      "Marchew i groszek, świeże lub mrożone, masło, opcjonalnie szczypta cukru oraz koper lub pietruszka, sól i pieprz w pełni wystarczą, baza jest w każdym markecie, świeży koper często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Brak masła lub dobrych ziół uzupełnią [zamienniki składników](/pl/blog/zamienniki-skladnikow). Kto chce ogórek ze śmietaną, gotuje [mizerię](/pl/rezepte/mizeria), kto ciepłe buraczki, [buraczki](/pl/rezepte/buraczki), ramę menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
    techniqueDe:
      "Schneide die Möhren gleichmäßig, damit sie zeitgleich gar werden. Mit wenig Wasser bissfest garen und gut abgießen, denn zerkochte Möhren zerfallen später beim Schwenken in der Butter. In der Pfanne Butter schmelzen, optional mit einer Prise Zucker, dann Erbsen und Möhren schwenken, bis sie glänzen, den Dill erst am Ende darunterheben, damit sein Aroma nicht verkocht. Es braucht keine dicke Mehlsoße und keine Mayonnaise, das gehört zu Salaten wie [Mizeria](/de/rezepte/mizeria), plane die Beilage parallel zu [Schabowy](/de/rezepte/kotlet-schabowy) oder einem Braten, denn offen und lauwarm stehend verliert sie schnell ihren Glanz.",
    techniquePl:
      "Kroj marchewkę równo, żeby gotowała się jednocześnie. Gotuj w małej ilości wody al dente i dobrze odcedź, bo rozgotowana marchewka rozpadnie się później podczas duszenia w maśle. Na patelni rozpuść masło, opcjonalnie ze szczyptą cukru, potem zeszklij groszek i marchewkę do połysku, koper dodaj na końcu, żeby jego aromat nie wyparował podczas gotowania. Nie potrzeba gęstego sosu z mąki ani majonezu, to domena sałatek jak [mizeria](/pl/rezepte/mizeria), planuj dodatek równolegle do [schabowego](/pl/rezepte/kotlet-schabowy) lub pieczenia, bo stojąc długo na blacie szybko traci połysk.",
    serveDe:
      "Serviere heiß in einer Schüssel oder direkt neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy), Kartoffeln oder Kasza, am Sonntagstisch ordnet der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch) den Überblick. Verwechsele die Beilage nicht mit [Buraczki](/de/rezepte/buraczki) oder [Mizeria](/de/rezepte/mizeria), beide unterscheiden sich in Farbe, Temperatur und Charakter deutlich. Zutaten mit Charakter findest du im [Polenladen](/de/blog/polenladen-einkaufen).",
    servePl:
      "Podawaj gorące w misce albo obok [schabowego](/pl/rezepte/kotlet-schabowy), ziemniaków lub kaszy, niedzielny przegląd daje [obiad niedzielny](/pl/blog/obiad-niedzielny). Nie myl dodatku z [buraczkami](/pl/rezepte/buraczki) ani z [mizerią](/pl/rezepte/mizeria), obie różnią się wyraźnie kolorem, temperaturą i charakterem. Specjalności kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    diasporaDe:
      "Tiefkühlerbsen und vorgeschnittene Möhrenwürfel retten den Sonntag nach Schichtarbeit, das darf man ehrlich so sagen, so wie schon die Kantinen der Volksrepublik von industrieller Tiefkühlkost profitierten. Kinder können Dill hacken, die heiße Pfanne bleibt bei Erwachsenen. Reste am Folgetag kurz mit Butter in der Pfanne aufwärmen. Speiseplan und Sonntagskultur bleiben beim [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), Zutatenhilfe findest du unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) und im [Polenladen](/de/blog/polenladen-einkaufen).",
    diasporaPl:
      "Mrożony groszek i przygotowana kostka marchewki ratują niedzielę po zmianie, warto to nazwać uczciwie, podobnie jak kantyny w PRL korzystały z przemysłowych mrożonek. Dzieci mogą siekać koper, gorąca patelnia zostaje u dorosłych. Resztki nazajutrz krótko podsmaż z masłem. Kulturę niedzieli opisuje [obiad niedzielny](/pl/blog/obiad-niedzielny), pomoc przy składnikach dają [zamienniki składników](/pl/blog/zamienniki-skladnikow) i [sklep polski](/pl/blog/sklep-polski-zakupy).",
    mistakesDe:
      "Roh oder als Surówka serviert verfehlt die warme Beilage, wer [Mizeria](/de/rezepte/mizeria) oder [Buraczki](/de/rezepte/buraczki) kocht, hat ohnehin ein anderes Gericht vor sich. Zu langes Kochen macht Brei statt Glanz, und zu wenig Butter nimmt der Beilage genau den Charakter, der sie von einer reinen Gemüsebeilage unterscheidet.",
    mistakesPl:
      "Podanie na surowo albo jako surówka mija się z ciepłym dodatkiem, [mizeria](/pl/rezepte/mizeria) i [buraczki](/pl/rezepte/buraczki) to i tak osobne dania. Zbyt długie gotowanie robi papkę zamiast połysku, a za mało masła odbiera dodatkowi właśnie ten charakter, który odróżnia go od zwykłych gotowanych warzyw.",
    variantsDe:
      "Du kannst nur Möhren mit Butter machen, Petersilie statt Dill nehmen oder die Prise Zucker weglassen. Passende Nachbar-Beilagen sind [Mizeria](/de/rezepte/mizeria), [Buraczki](/de/rezepte/buraczki) und [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana), zum Fleisch passt [Schabowy](/de/rezepte/kotlet-schabowy), Orientierung geben der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), der [Polenladen](/de/blog/polenladen-einkaufen) und die [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Możesz zrobić samą marchewkę z masłem, wziąć pietruszkę zamiast kopru albo pominąć cukier. Pasujące dodatki to [mizeria](/pl/rezepte/mizeria), [buraczki](/pl/rezepte/buraczki) i [kapusta zasmażana](/pl/rezepte/kapusta-zasmażana), do mięsa pasuje [schabowy](/pl/rezepte/kotlet-schabowy), orientację dają [obiad niedzielny](/pl/blog/obiad-niedzielny), [sklep polski](/pl/blog/sklep-polski-zakupy) i [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
  },

  "recipe-fasolka-szparagowa": {
    dishDe: "Fasolka szparagowa po polsku",
    dishPl: "Fasolka szparagowa po polsku",
    vibeDe:
      "knackig-grün, butterig und mit goldenen Semmelbröseln, eine Beilage, kein Eintopf",
    vibePl:
      "chrupiąco-zielona, maślana, ze złotą bułką tartą, dodatek, nie gulasz",
    originDe:
      "Der Zusatz po polsku steht in der polnischen Küche für eine feste Technik, nicht für ein bestimmtes Gemüse: gegartes Gemüse wird mit in Butter goldbraun gerösteten Semmelbröseln übergossen. Hanna Szymanderska beschreibt diese Kombination in ihrer Encyklopedia Kuchni Polskiej klassisch am Beispiel von Kalafior po polsku, Blumenkohl mit Butter und Bröseln, und genau dieselbe Technik übertragen Hausköchinnen seit Generationen auch auf grüne Stangenbohnen, Bohnenkraut, Erbsen oder Spargel. Fasolka szparagowa po polsku ist damit bissfest gegarte grüne Bohne, in Butter und Bröseln geschwenkt, neben Fleisch am Sonntagstisch, klar getrennt vom Tomaten-Wurst-Eintopf mit weißen Bohnen [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku), Einkauf und Überblick dazu bleiben beim [Fasolka-Guide](/de/blog/fasolka-po-bretonsku). Auf dem Teller steht oft [Kotlet schabowy](/de/rezepte/kotlet-schabowy) daneben.",
    originPl:
      "Dopisek po polsku w polskiej kuchni oznacza konkretną technikę, nie konkretne warzywo: ugotowane warzywo polewa się bułką tartą zrumienioną na złoto na maśle. Hanna Szymanderska opisuje to połączenie w swojej Encyklopedii Kuchni Polskiej klasycznie na przykładzie kalafiora po polsku, czyli kalafiora z masłem i bułką, a domowe kucharki od pokoleń przenoszą tę samą technikę również na zieloną fasolkę szparagową, bób, groszek czy szparagi. Fasolka szparagowa po polsku to więc ugotowana al dente zielona fasolka, zeszkliwiona w maśle i bułce, obok mięsa w niedzielę, jasno oddzielona od pomidorowo-kiełbasianego gulaszu z białą fasolą [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku), zakupy i przegląd zostają przy [przewodniku fasolki](/pl/blog/fasolka-po-bretonsku). Obok często stoi [kotlet schabowy](/pl/rezepte/kotlet-schabowy).",
    shopDe:
      "Grüne Stangenbohnen, frisch oder tiefgekühlt, Butter, bułka tarta, optional Zwiebel oder Knoblauch und Dill reichen völlig. Die Basis liegt im Supermarkt bereit, gute Brösel und Kräuter findest du im [Polenladen](/de/blog/polenladen-einkaufen). Weiße Bohnen aus Glas oder Dose gehören hier nicht in den Topf, das ist [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku) und Thema des [Fasolka-Guides](/de/blog/fasolka-po-bretonsku), den Sonntagsrahmen findest du unter dem [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch).",
    shopPl:
      "Fasolka szparagowa, świeża lub mrożona, masło, bułka tarta, opcjonalnie cebula lub czosnek i koper w pełni wystarczą. Baza jest w markecie, dobra bułka i zioła w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Biała fasola ze słoika nie ma tu miejsca, to [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku) i temat [przewodnika](/pl/blog/fasolka-po-bretonsku), ramę niedzieli znajdziesz pod [obiadem niedzielnym](/pl/blog/obiad-niedzielny).",
    techniqueDe:
      "Enden abschneiden, die Bohnen bissfest kochen und danach gut abtropfen und kurz ruhen lassen, denn feuchtes Gemüse macht die Semmelbrösel weich statt knusprig. Butter heiß werden lassen, Brösel goldbraun rösten, dann die Bohnen unterheben, zu lange Garzeit macht sie dagegen matschig und grau. Tomatenmark und Kiełbasa gehören in den Eintopf [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku), nicht in diese Beilage, nur Butter ohne Brösel ist völlig in Ordnung, wenn man das einfach so benennt.",
    techniquePl:
      "Obetnij końce, ugotuj fasolkę al dente, a potem dobrze odsącz i krótko odstaw, bo mokre warzywo sprawia, że bułka mięknie, zamiast być chrupiąca. Rozgrzej masło, zrumień bułkę na złoto, potem wmieszaj fasolkę, za długie gotowanie robi z niej papkę i szarość. Przecier pomidorowy i kiełbasa należą do gulaszu [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku), nie tutaj, samo masło bez bułki jest w porządku, jeśli po prostu tak to nazwiesz.",
    serveDe:
      "Serviere heiß als Beilage neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy), einem Braten oder Kasza, nicht als sättigenden Eintopf mit Brot wie [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku). Menühilfe gibt der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), der Eintopf-Überblick bleibt beim [Fasolka-Guide](/de/blog/fasolka-po-bretonsku), Spezialzutaten holst du im [Polenladen](/de/blog/polenladen-einkaufen).",
    servePl:
      "Podawaj gorące jako dodatek obok [schabowego](/pl/rezepte/kotlet-schabowy), pieczenia lub kaszy, nie jako sycący gulasz z chlebem jak [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku). Pomoc przy menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny), przegląd gulaszu zostaje przy [przewodniku fasolki](/pl/blog/fasolka-po-bretonsku), specjalności kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    diasporaDe:
      "Tiefkühlbohnen und fertige bułka tarta machen den Alltag kurz, das darf man ehrlich benennen. Kinder dürfen Brösel streuen, heiße Butter bleibt bei Erwachsenen. Reste kurz in der Pfanne aufwärmen, sonst werden die Krümel weich. Den Speiseplan findest du unter dem [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), wer den Eintopf will, bleibt bei [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku) und dem [Fasolka-Guide](/de/blog/fasolka-po-bretonsku).",
    diasporaPl:
      "Mrożona fasolka i gotowa bułka skracają dzień, warto to nazwać uczciwie, bo świeże strąki po sezonie bywają w Niemczech drogie i twarde. Dzieci mogą sypać bułkę, gorące masło zostaje u dorosłych. Resztki krótko podsmaż na patelni, inaczej okruchy zmiękną. Menu niedzielne opisuje [obiad niedzielny](/pl/blog/obiad-niedzielny), na gulasz zostań przy [fasolce po bretońsku](/pl/rezepte/fasolka-po-bretonsku) i [przewodniku](/pl/blog/fasolka-po-bretonsku).",
    mistakesDe:
      "Weiße Bohnen mit Tomate und Kiełbasa ergeben [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku), nicht diese Beilage, der Überblick dazu steht im [Fasolka-Guide](/de/blog/fasolka-po-bretonsku). Zu weiche Bohnen und verbrannte Brösel verderben Textur und Biss, und als Hauptgericht-Eintopf verkauft, verfehlt das Gericht seinen eigentlichen Platz neben Fleisch.",
    mistakesPl:
      "Biała fasola z pomidorem i kiełbasą to [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku), nie ten dodatek, przegląd jest w [przewodniku](/pl/blog/fasolka-po-bretonsku). Za miękka fasolka i spalona bułka psują teksturę, a sprzedawane jako gulasz główny mija się z rolą dodatku obok mięsa. Warto też pamiętać, że zbyt duża ilość bułki potrafi zdominować smak samej fasolki, więc lepiej dodawać ją stopniowo i próbować w trakcie smażenia.",
    variantsDe:
      "Nur Butter ohne Brösel, mit Knoblauch oder mit Dill sind übliche Hausvarianten. Der Eintopf-Nachbar bleibt [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku) mit dem [Fasolka-Guide](/de/blog/fasolka-po-bretonsku), andere Beilagen sind [Marchewka z groszkiem](/de/rezepte/marchewka-groszek), [Mizeria](/de/rezepte/mizeria) und [Buraczki](/de/rezepte/buraczki), Orientierung geben der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch) und der [Polenladen](/de/blog/polenladen-einkaufen).",
    variantsPl:
      "Same masło bez bułki, z czosnkiem albo z koprem to zwykłe warianty domu. Sąsiad-gulasz to [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku) z [przewodnikiem](/pl/blog/fasolka-po-bretonsku), inne dodatki to [marchewka z groszkiem](/pl/rezepte/marchewka-groszek), [mizeria](/pl/rezepte/mizeria) i [buraczki](/pl/rezepte/buraczki), orientację dają [obiad niedzielny](/pl/blog/obiad-niedzielny) i [sklep polski](/pl/blog/sklep-polski-zakupy).",
  },
};
