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
      "süßlich-buttrig, warm glänzend, Dillgrün — die ruhige Sonntagsbeilage neben Fleisch",
    vibePl:
      "maślano-słodkawa, ciepła i błyszcząca, z koprem — spokojny dodatek niedzielny obok mięsa",
    originDe:
      "Marchewka z groszkiem ist die warme Möhren-Erbsen-Beilage der polnischen Haus- und Sonntagsküche: gewürfelt oder in Scheiben, in Butter glasig geschwenkt, oft mit Dill — heiß neben Fleisch und Kartoffeln. Das ist weder der kalte Gurkensalat [Mizeria](/de/rezepte/mizeria) noch die warme Rote-Bete-Beilage [Buraczki](/de/rezepte/buraczki) und auch kein Rohkostsalat. Wie der Teller am Sonntag zusammenkommt, beschreibt der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch); hier bleiben Mengen und Schritte der Beilage. Klassischer Nachbar auf dem Teller ist [Kotlet schabowy](/de/rezepte/kotlet-schabowy). Frischen Dill und typische Spezialitäten findest du im [Polenladen](/de/blog/polenladen-einkaufen).",
    originPl:
      "Marchewka z groszkiem to ciepły dodatek z marchewki i groszku w polskiej kuchni domowej i niedzielnej: kostka lub plasterki, zeszkliwione na maśle, często z koprem — gorące obok mięsa i ziemniaków. To ani zimna [mizeria](/pl/rezepte/mizeria), ani ciepłe [buraczki](/pl/rezepte/buraczki), ani surowa surówka. Jak ułożyć niedzielny talerz, opisuje [obiad niedzielny](/pl/blog/obiad-niedzielny); tu zostają ilości i kroki dodatku. Klasyczny sąsiad to [kotlet schabowy](/pl/rezepte/kotlet-schabowy). Świeży koper i typowe specjalności kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    shopDe:
      "Du brauchst Möhren, Erbsen (frisch oder TK), Butter, optional eine Prise Zucker, Dill oder Petersilie, Salz und Pfeffer — das gibt es im deutschen Supermarkt; frischer Dill oft im [Polenladen](/de/blog/polenladen-einkaufen). Wenn Butter oder Kräuter fehlen, hilft der Überblick unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Wer Gurke mit Śmietana will, kocht [Mizeria](/de/rezepte/mizeria); wer Rote Bete warm mag, [Buraczki](/de/rezepte/buraczki). Den Menürahmen findest du unter [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    shopPl:
      "Potrzebujesz marchewki, groszku (świeżego lub mrożonego), masła, opcjonalnie szczypty cukru, kopru lub pietruszki, soli i pieprzu — to supermarket; świeży koper często jest w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Gdy brakuje masła lub ziół, zajrzyj do [zamienników składników](/pl/blog/zamienniki-skladnikow). Na ogórek ze śmietaną jest [mizeria](/pl/rezepte/mizeria); na ciepłe buraki — [buraczki](/pl/rezepte/buraczki). Ramę menu znajdziesz pod [obiadem niedzielnym](/pl/blog/obiad-niedzielny).",
    techniqueDe:
      "Schneide die Möhren gleichmäßig, damit sie gleichzeitig gar sind. Mit wenig Wasser bissfest garen und gut abgießen — Matsch zerstört die Beilage. In der Pfanne Butter schmelzen, optional eine Prise Zucker, dann Erbsen und Möhren schwenken, bis sie glänzen; Dill erst am Ende darunterheben. Es braucht keine dicke Soße und kein Mayo — das gehört zu Salaten wie [Mizeria](/de/rezepte/mizeria). Plane die Beilage parallel zu [Schabowy](/de/rezepte/kotlet-schabowy) oder Braten; offen steht sie schlecht.",
    techniquePl:
      "Kroj marchewkę równo, żeby gotowała się jednocześnie. Gotuj w małej ilości wody al dente i dobrze odsącz — papka psuje dodatek. Na patelni rozpuść masło, opcjonalnie szczyptę cukru, potem zeszklij groszek i marchewkę do połysku; koper dodaj na końcu. Nie potrzeba gęstego sosu ani majonezu — to domena sałatek jak [mizeria](/pl/rezepte/mizeria). Planuj dodatek równolegle do [schabowego](/pl/rezepte/kotlet-schabowy) lub pieczenia; otwarty długo nie czeka.",
    serveDe:
      "Serviere heiß in einer Schüssel oder direkt neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy), Kartoffeln oder Kasza. Am Sonntagstisch ordnet der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch) den Überblick. Verwechsele die Beilage nicht mit [Buraczki](/de/rezepte/buraczki) oder [Mizeria](/de/rezepte/mizeria) — andere Farbe, andere Temperatur, anderer Charakter. Nachschlag zum Einkaufen: [Polenladen](/de/blog/polenladen-einkaufen).",
    servePl:
      "Podawaj gorące w misce albo obok [schabowego](/pl/rezepte/kotlet-schabowy), ziemniaków lub kaszy. Niedzielny przegląd daje [obiad niedzielny](/pl/blog/obiad-niedzielny). Nie myl z [buraczkami](/pl/rezepte/buraczki) ani [mizerią](/pl/rezepte/mizeria) — inny kolor, temperatura i charakter. Specjalności kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    diasporaDe:
      "TK-Erbsen und vorbereitete Möhrenwürfel retten den Sonntag nach Schichtarbeit — das darf man ehrlich sagen. Kinder können Dill hacken; die heiße Pfanne bleibt bei Erwachsenen. Reste am Folgetag kurz mit Butter in der Pfanne aufwärmen. Speiseplan und Sonntagskultur bleiben beim [Sonntagsessen](/de/blog/sonntagsessen-polnisch); Zutatenhilfe findest du unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) und im [Polenladen](/de/blog/polenladen-einkaufen).",
    diasporaPl:
      "Mrożony groszek i przygotowana kostka marchewki ratują niedzielę po zmianie — warto nazwać to uczciwie. Dzieci mogą siekać koper; gorąca patelnia zostaje u dorosłych. Resztki nazajutrz krótko podsmaż z masłem. Kulturę niedzieli opisuje [obiad niedzielny](/pl/blog/obiad-niedzielny); pomoc przy składnikach dają [zamienniki](/pl/blog/zamienniki-skladnikow) i [sklep polski](/pl/blog/sklep-polski-zakupy).",
    mistakesDe:
      "Roh oder als Surówka serviert verfehlt die warme Beilage. Wer [Mizeria](/de/rezepte/mizeria) oder [Buraczki](/de/rezepte/buraczki) kocht, hat ein anderes Gericht vor sich. Zu langes Kochen macht Brei statt Glanz. Den ganzen Speiseplan hier nachzubauen lohnt nicht — dafür gibt es [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Zu wenig Butter nimmt der Beilage den Charakter.",
    mistakesPl:
      "Podanie na surowo albo jako surówka mija się z ciepłym dodatkiem. [Mizeria](/pl/rezepte/mizeria) i [buraczki](/pl/rezepte/buraczki) to osobne dania. Zbyt długie gotowanie robi papkę zamiast połysku. Nie przepisuj tu całego menu — do tego jest [obiad niedzielny](/pl/blog/obiad-niedzielny). Za mało masła odbiera dodatkowi charakter.",
    variantsDe:
      "Du kannst nur Möhren mit Butter machen, Petersilie statt Dill nehmen oder die Prise Zucker weglassen. Passende Nachbar-Beilagen sind [Mizeria](/de/rezepte/mizeria), [Buraczki](/de/rezepte/buraczki) und [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana); zum Fleisch passt [Schabowy](/de/rezepte/kotlet-schabowy). Orientierung geben [Sonntagsessen](/de/blog/sonntagsessen-polnisch), [Polenladen](/de/blog/polenladen-einkaufen) und [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Możesz zrobić samą marchewkę z masłem, wziąć pietruszkę zamiast kopru albo pominąć cukier. Pasujące dodatki to [mizeria](/pl/rezepte/mizeria), [buraczki](/pl/rezepte/buraczki) i [kapusta zasmażana](/pl/rezepte/kapusta-zasmażana); do mięsa pasuje [schabowy](/pl/rezepte/kotlet-schabowy). Orientację dają [obiad niedzielny](/pl/blog/obiad-niedzielny), [sklep polski](/pl/blog/sklep-polski-zakupy) i [zamienniki](/pl/blog/zamienniki-skladnikow).",
  },

  "recipe-fasolka-szparagowa": {
    dishDe: "Fasolka szparagowa po polsku",
    dishPl: "Fasolka szparagowa po polsku",
    vibeDe:
      "knackig-grün, butterig, Semmelbrösel-Gold — Beilage, kein Eintopf",
    vibePl:
      "chrupiąco-zielona, maślana, złota bułka tarta — dodatek, nie gulasz",
    originDe:
      "Fasolka szparagowa po polsku meint grüne Stangenbohnen als warme Beilage: bissfest gegart, in Butter und oft mit Semmelbröseln (bułka tarta) geschwenkt — neben Fleisch am Sonntagstisch. Das ist nicht der Tomaten-Wurst-Eintopf mit weißen Bohnen [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku); Einkauf und Überblick dazu bleiben beim [Fasolka-Guide](/de/blog/fasolka-po-bretonsku). Zum Menü passt der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch). Im [Polenladen](/de/blog/polenladen-einkaufen) findest du gute Brösel und Kräuter. Auf dem Teller steht oft [Kotlet schabowy](/de/rezepte/kotlet-schabowy) daneben.",
    originPl:
      "Fasolka szparagowa po polsku to zielone strąki jako ciepły dodatek: ugotowane al dente, zeszkliwione na maśle, często z bułką tartą — obok mięsa w niedzielę. To nie pomidorowo-kiełbasiany gulasz z białą fasolą [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku); zakupy i przegląd zostają przy [przewodniku fasolki](/pl/blog/fasolka-po-bretonsku). Układ talerza opisuje [obiad niedzielny](/pl/blog/obiad-niedzielny). W [sklepie polskim](/pl/blog/sklep-polski-zakupy) kupisz dobrą bułkę i zioła. Obok często stoi [kotlet schabowy](/pl/rezepte/kotlet-schabowy).",
    shopDe:
      "Grüne Stangenbohnen (frisch oder TK), Butter, bułka tarta, optional Zwiebel oder Knoblauch und Dill reichen. Basis im Supermarkt; gute Brösel und Kräuter im [Polenladen](/de/blog/polenladen-einkaufen). Weiße Bohnen aus Glas oder Dose gehören hier nicht in den Topf — das ist [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku) und Thema des [Fasolka-Guides](/de/blog/fasolka-po-bretonsku). Den Sonntagsrahmen findest du unter [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    shopPl:
      "Fasolka szparagowa (świeża lub mrożona), masło, bułka tarta, opcjonalnie cebula lub czosnek i koper wystarczą. Baza w markecie; dobra bułka i zioła w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Biała fasola ze słoika nie należy do tego dania — to [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku) i temat [przewodnika](/pl/blog/fasolka-po-bretonsku). Ramę niedzieli znajdziesz pod [obiadem niedzielnym](/pl/blog/obiad-niedzielny).",
    techniqueDe:
      "Enden abschneiden, bissfest kochen und gut abtropfen. Butter heiß werden lassen, Brösel goldbraun rösten, dann die Bohnen unterheben. Zu lange Garzeit macht sie matschig und grau. Tomatenmark und Kiełbasa gehören in den Eintopf [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku), nicht hier. Nur Butter ohne Brösel ist in Ordnung — einfach so benennen. Timing mit [Schabowy](/de/rezepte/kotlet-schabowy) funktioniert gut.",
    techniquePl:
      "Obetnij końce, ugotuj al dente i dobrze odsącz. Rozgrzej masło, zrumień bułkę na złoto, potem wmieszaj fasolkę. Zbyt długie gotowanie robi papkę i szarość. Przecier pomidorowy i kiełbasa należą do gulaszu [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku), nie tutaj. Same masło bez bułki jest w porządku — po prostu tak nazwij. Timing z [schabowym](/pl/rezepte/kotlet-schabowy) działa dobrze.",
    serveDe:
      "Serviere heiß als Beilage neben [Kotlet schabowy](/de/rezepte/kotlet-schabowy), Braten oder Kasza — nicht als sättigenden Eintopf mit Brot wie [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku). Menühilfe gibt [Sonntagsessen](/de/blog/sonntagsessen-polnisch); der Eintopf-Überblick bleibt beim [Fasolka-Guide](/de/blog/fasolka-po-bretonsku). Spezialzutaten holst du im [Polenladen](/de/blog/polenladen-einkaufen).",
    servePl:
      "Podawaj gorące jako dodatek obok [schabowego](/pl/rezepte/kotlet-schabowy), pieczenia lub kaszy — nie jako sycący gulasz z chlebem jak [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku). Pomoc przy menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny); przegląd gulaszu zostaje przy [przewodniku fasolki](/pl/blog/fasolka-po-bretonsku). Specjalności kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    diasporaDe:
      "TK-Bohnen und fertige bułka tarta machen den Alltag kurz — ehrlich benennen. Kinder dürfen Brösel streuen; heiße Butter bleibt bei Erwachsenen. Reste kurz in der Pfanne aufwärmen, sonst werden die Krümel weich. Den Speiseplan findest du unter [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Wer den Eintopf will, bleibt bei [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku) und dem [Fasolka-Guide](/de/blog/fasolka-po-bretonsku).",
    diasporaPl:
      "Mrożona fasolka i gotowa bułka skracają dzień — nazwij to uczciwie. Dzieci mogą sypać bułkę; gorące masło zostaje u dorosłych. Resztki krótko podsmaż na patelni, inaczej okruchy miękną. Menu niedzielne opisuje [obiad niedzielny](/pl/blog/obiad-niedzielny). Na gulasz zostań przy [fasolce po bretońsku](/pl/rezepte/fasolka-po-bretonsku) i [przewodniku](/pl/blog/fasolka-po-bretonsku).",
    mistakesDe:
      "Weiße Bohnen mit Tomate und Kiełbasa ergeben [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku), nicht diese Beilage — der Überblick dazu steht im [Fasolka-Guide](/de/blog/fasolka-po-bretonsku). Zu weiche Bohnen und verbrannte Brösel verderben Textur und Biss. Als Hauptgericht-Eintopf verkauft, verfehlt das Gericht seinen Platz neben Fleisch. Den Sonntagsplan hier zu duplizieren lohnt nicht; dafür gibt es [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    mistakesPl:
      "Biała fasola z pomidorem i kiełbasą to [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku), nie ten dodatek — przegląd jest w [przewodniku](/pl/blog/fasolka-po-bretonsku). Za miękka fasolka i spalona bułka psują teksturę. Sprzedawane jako gulasz główny mija się z rolą dodatku. Nie kopiuj tu całego menu niedzielnego — do tego jest [obiad niedzielny](/pl/blog/obiad-niedzielny).",
    variantsDe:
      "Nur Butter ohne Brösel, mit Knoblauch oder mit Dill sind übliche Hausvarianten. Der Eintopf-Nachbar bleibt [Fasolka po bretońsku](/de/rezepte/fasolka-po-bretonsku) mit dem [Fasolka-Guide](/de/blog/fasolka-po-bretonsku). Andere Beilagen: [Marchewka z groszkiem](/de/rezepte/marchewka-groszek), [Mizeria](/de/rezepte/mizeria), [Buraczki](/de/rezepte/buraczki). Orientierung: [Sonntagsessen](/de/blog/sonntagsessen-polnisch) und [Polenladen](/de/blog/polenladen-einkaufen).",
    variantsPl:
      "Same masło bez bułki, z czosnkiem albo z koprem to zwykłe warianty domu. Sąsiad-gulasz to [fasolka po bretońsku](/pl/rezepte/fasolka-po-bretonsku) z [przewodnikiem](/pl/blog/fasolka-po-bretonsku). Inne dodatki: [marchewka z groszkiem](/pl/rezepte/marchewka-groszek), [mizeria](/pl/rezepte/mizeria), [buraczki](/pl/rezepte/buraczki). Orientacja: [obiad niedzielny](/pl/blog/obiad-niedzielny) i [sklep polski](/pl/blog/sklep-polski-zakupy).",
  },
};
