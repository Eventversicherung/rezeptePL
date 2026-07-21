/**
 * Wave 14 Paket B — FACTS for Jajka faszerowane + Ćwikła.
 * Isolated export `W14_FACTS_B` — Integrator merges into recipe-articles.ts FACTS map.
 * Shape matches ArticleFacts in recipe-articles.ts.
 *
 * Ownership:
 * - Jajka faszerowane Primary nur /rezepte/jajka-faszerowane
 *   ≠ Sałatka jarzynowa ≠ Mizeria ≠ Pasztet
 * - Ćwikła Primary nur /rezepte/cwikla
 *   ≠ Buraczki (warm) ≠ Barszcz ≠ Botwinka ≠ Sałatka
 * Wielkanoc Speiseplan bleibt Anlass-Owner.
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

export const W14_FACTS_B: Record<string, ArticleFacts> = {
  "recipe-jajka-faszerowane": {
    dishDe: "Jajka faszerowane",
    dishPl: "Jajka faszerowane",
    vibeDe: "cremig-eigelb, mild-würzig, Buffet und Ostern-Platte",
    vibePl: "kremowo-żółtkowy, łagodnie korzenny, bufet i półmisek wielkanocny",
    originDe:
      "Jajka faszerowane sind die Rezept für gefüllte hartgekochte Eier — hier in einer klaren Hauslinie: Eigelb mit Mayo und Schnittlauch, kalt auf der Platte. Das ist bewusst kein Mayo-Gemüsesalat und kein Gurkensalat. [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) bleibt das passende Rezept des Festsalats aus gekochtem Gemüse und Mayo; [Mizeria](/de/rezepte/mizeria) bleibt das passende Rezept der Gurke mit Śmietana und Dill. [Pasztet](/de/rezepte/pasztet) bleibt die Pastete auf dem Aufschnitt — Nachbar auf der kalten Platte, nicht dasselbe Gericht. Am [Wielkanoc Speiseplan](/de/blog/wielkanoc-speiseplan) stehen gefüllte Eier oft neben Wurst und Meerrettich — der Speiseplan bleibt Menü-Artikel, hier nur Mengen und Schritte. In der Diaspora sind Jajka faszerowane der Moment, in dem harte Eier und eine schnelle Eigelb-Mayo-Masse den Buffet-Teller füllen, ohne einen ganzen Salattopf zu rühren: kochen, halbieren, füllen, kühlen. Keine Kartoffelwürfel, keine Gurkenscheiben als Hauptgericht hier, keine Pastetenmasse im Eiweiß. Eng bei „Jajka faszerowane / gefüllte Eier polnisch“ bleiben — nicht generisches „Deviled Eggs “ ohne polnischen Namen. Sonntagskultur unter [Sonntagsessen](/de/blog/sonntagsessen-polnisch); Einkauf und Mayo-Qualität im [Polenladen](/de/blog/polenladen-einkaufen).",
    originPl:
      "Jajka faszerowane to przepis na faszerowane jajka na twardo — tu w jasnej linii domu: żółtko z majonezem i szczypiorkiem, na zimno na półmisku. Świadomie nie majonezowa sałatka warzywna i nie sałatka ogórkowa. [Sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa) zostaje przepisem na świąteczną sałatkę z ugotowanych warzyw i majonezu; [mizeria](/pl/rezepte/mizeria) zostaje przepisem na ogórki ze śmietaną i koperkiem. [Pasztet](/pl/rezepte/pasztet) zostaje pastą na zimnej półce — sąsiad, nie to samo danie. Przy [menu wielkanocnym](/pl/blog/menu-wielkanocne) jajka faszerowane bywają obok kiełbasy i chrzanu — plan menu zostaje artykułem o okazji, tu tylko ilości i kroki. W diasporze to moment, gdy twarde jajka i szybka masa żółtkowo-majonezowa wypełniają półmisek bufetowy bez mieszania całego garnka sałatki: ugotować, przekroić, nadziać, schłodzić. Bez kostek ziemniaka, bez plasterków ogórka jako fokus, bez masy pasztetowej w białku. Trzymać wąsko „jajka faszerowane” — bez generycznego „deviled eggs” bez polskiej nazwy. Kultura niedzieli pod [obiadem niedzielnym](/pl/blog/obiad-niedzielny); zakupy i jakość majonezu w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    shopDe:
      "Eier (frisch, Größe M/L), gute Mayonnaise, frischer Schnittlauch, Salz, Pfeffer, optional Senf und Paprika zum Bestreuen. Basis im Supermarkt; bessere Mayo und manchmal frischer Schnittlauch im [Polenladen](/de/blog/polenladen-einkaufen). Wenn Mayo oder Kräuter knapp: ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) — kein „Salat-Mayo-Topf“ als Ersatzgericht. Keine Kartoffeln, Erbsen und Sellerie als Kern: das wäre [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Keine Gurke und Śmietana als Kern: das wäre [Mizeria](/de/rezepte/mizeria). Keine Pastetenmasse: das bleibt [Pasztet](/de/rezepte/pasztet).",
    shopPl:
      "Jajka (świeże, M/L), dobry majonez, świeży szczypiorek, sól, pieprz, opcjonalnie musztarda i papryka do oprószenia. Baza w markecie; lepszy majonez i czasem szczypiorek w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Gdy brak majonezu lub ziół: uczciwie według [zamienników składników](/pl/blog/zamienniki-skladnikow) — bez „garnka sałatki” jako zamiennika dania. Bez ziemniaków, groszku i selera jako rdzenia: to byłaby [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Bez ogórka i śmietany jako rdzenia: to byłaby [mizeria](/pl/rezepte/mizeria). Bez masy pasztetowej: to zostaje [pasztet](/pl/rezepte/pasztet).",
    techniqueDe:
      "Eier hart, aber nicht kreidig-trocken kochen — zu lang wird das Eigelb grau und sandig; zu kurz bleibt die Mitte weich und die Masse rutscht. Abschrecken, sauber schälen, längs halbieren. Eigelb fein zerdrücken, mit Mayo und Schnittlauch zu einer streichfähigen, nicht flüssigen Masse rühren; optional ein Hauch Senf für Tiefe. Mit Löffel oder Sterntülle füllen — gleichmäßig, ohne die Eiweiße zu zerreißen. Mindestens eine halbe Stunde kühlen, damit die Füllung setzt. Zu nasse Masse = rutschende Füllung; zu trockene Masse = bröckelnde Häufchen. Mayo-Hygiene: kalt halten, nicht stundenlang auf warmem Buffet. Eine Hausvariante festhalten: Eigelb-Mayo-Schnittlauch (keine Thunfisch-Fokus, keine Pastetenfüllung als Default).",
    techniquePl:
      "Jajka ugotować na twardo, ale nie kredowo-suche — za długo żółtko staje się szare i piaszczyste; za krótko środek zostaje miękki i masa się ślizga. Ostudzić, obrać, przekroić wzdłuż. Żółtka rozetrzeć z majonezem i szczypiorkiem do smarownej, nie płynnej masy; opcjonalnie odrobina musztardy. Wypełniać łyżeczką lub rękawem — równo, bez rozrywania białek. Chłodzić co najmniej pół godziny. Za rzadka masa = ślizganie; za sucha = kruszące się kopczyki. Higiena majonezu: trzymać zimno, nie godzinami na ciepłym bufecie. Trzymać jeden wariant domu: żółtko-majonez-szczypiorek (bez fokus tuńczyka, bez pasztetu jako default).",
    serveDe:
      "Auf Platte oder Buffet, kalt, oft mit Schnittlauch oder Paprika. Als Ostern-Element unter [Wielkanoc](/de/blog/wielkanoc-speiseplan); Sonntag unter [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Abgrenzung auf dem Tisch: Mayo-Gemüse = [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa); Gurke/Śmietana = [Mizeria](/de/rezepte/mizeria); Pastete = [Pasztet](/de/rezepte/pasztet); helle Wurst = [Biała kiełbasa](/de/rezepte/biala-kielbasa). Hält einen Tag gekühlt am besten; vor dem Servieren kurz prüfen, ob die Masse noch bindet.",
    servePl:
      "Na półmisku lub bufecie, na zimno, często ze szczypiorkiem lub papryką. Jako element Wielkanocy pod [menu wielkanocnym](/pl/blog/menu-wielkanocne); niedziela pod [obiadem niedzielnym](/pl/blog/obiad-niedzielny). Na stole: majonezowe warzywa = [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa); ogórek/śmietana = [mizeria](/pl/rezepte/mizeria); pasta = [pasztet](/pl/rezepte/pasztet); jasna kiełbasa = [biała kiełbasa](/pl/rezepte/biala-kielbasa). Najlepiej trzyma dzień w chłodzie; przed podaniem sprawdzić wiązanie masy.",
    diasporaDe:
      "In deutschen Küchen retten Jajka faszerowane oft den kalten Ostern-Slot, wenn niemand einen großen Salattopf rühren will: ein Topf Eier, eine Schüssel Masse, Kühlschrank. Kinder dürfen füllen und streuen — heißer Topf bei Erwachsenen. Kein Affiliate-Zwang: gute Eier und solide Mayo reichen. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten. Alternativen stehen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Kultur-Nachbar: [Wielkanoc](/de/blog/wielkanoc-speiseplan), [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
    diasporaPl:
      "W niemieckich kuchniach jajka faszerowane często ratują zimny slot wielkanocny, gdy nikt nie chce mieszać dużego garnka sałatki: jeden garnek jaj, jedna miska masy, lodówka. Dzieci mogą nadziewać i posypywać — gorący garnek u dorosłych. Bez affiliate: dobre jajka i solidny majonez wystarczą. W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności. Zamienniki znajdziesz w [zamienniki składników](/pl/blog/zamienniki-skladnikow). Sąsiad kultury: [menu wielkanocne](/pl/blog/menu-wielkanocne), [obiad niedzielny](/pl/blog/obiad-niedzielny).",
    mistakesDe:
      "Mit Sałatka jarzynowa verwechseln (Gemüsewürfel statt gefüllter Eihälften). Mit Mizeria verwechseln (Gurke). Zu weiche Eier; zu flüssige Mayo-Masse; zu früh servieren ohne Kühlung; stundenlang warm stehen lassen. Speiseplan-Mengen hier duplizieren statt zu verlinken. Generisches Deviled-Eggs- ohne Jajka faszerowane.",
    mistakesPl:
      "Mylenie z sałatką jarzynową (kostki warzyw zamiast faszerowanych połówek). Mylenie z mizerią (ogórek). Za miękkie jajka; za rzadka masa; zbyt wczesne podanie bez chłodzenia; godziny na ciepłym stole. Duplikować menu zamiast linkować. Generyczne „deviled eggs” bez nazwy jajka faszerowane.",
    variantsDe:
      "Mit mehr Schnittlauch grüner; mit Paprika oben; milder ohne Senf. Festsalat bleibt [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa); Gurke: [Mizeria](/de/rezepte/mizeria). Aufschnitt-Nachbar: [Pasztet](/de/rezepte/pasztet), [Biała kiełbasa](/de/rezepte/biala-kielbasa). Zum Anlass passt [Wielkanoc](/de/blog/wielkanoc-speiseplan). Alltag: [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen.",
    variantsPl:
      "Z większą ilością szczypiorku bardziej zielone; z papryką na wierzchu; łagodniej bez musztardy. Sałatka: [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa); ogórek: [mizeria](/pl/rezepte/mizeria). Sąsiedzi zimnej półki: [pasztet](/pl/rezepte/pasztet), [biała kiełbasa](/pl/rezepte/biala-kielbasa). Do okazji pasuje [menu wielkanocne](/pl/blog/menu-wielkanocne). Dzień: [obiad niedzielny](/pl/blog/obiad-niedzielny). W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe.",
  },
  "recipe-cwikla": {
    dishDe: "Ćwikła",
    dishPl: "Ćwikła",
    vibeDe: "scharf-süß, betenrot, kalt und festlich neben Wurst",
    vibePl: "ostro-słodki, buraczano-czerwony, zimny i świąteczny obok kiełbasy",
    originDe:
      "Ćwikła ist die Rezept für den kalten Relish aus geriebener Roter Bete und Meerrettich — typisch Ostern und Aufschnitt, bewusst keine warme Beilage und keine Suppe. [Buraczki](/de/rezepte/buraczki) bleiben die Leitartikel der warmen Rote-Bete-Beilage (oft mit Zwiebel, heiß neben Fleisch). [Barszcz czerwony](/de/rezepte/barszcz-czerwony) bleibt die klare oder cremige Bete-Suppe; [Botwinka](/de/rezepte/botwinka) die junge-Bete-Suppe. [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) ist der Mayo-Festsalat — anderer Intent. Am [Wielkanoc Speiseplan](/de/blog/wielkanoc-speiseplan) steht Ćwikła oft neben Ei, Wurst und Brot — der Speiseplan bleibt Menü-Artikel, hier nur Mengen und Schritte. In der Diaspora ist Ćwikła der Moment, in dem geriebene Bete und Meerrettich im Glas oder in der Schüssel den scharfen Kontrast zur milden Platte liefern: kochen oder fertig nehmen, reiben, würzen, kalt ziehen. Keine Pfanne mit warmer Beilage, keine Brühe, keine Mayo-Gemüsewürfel. Eng bei „Ćwikła / Rote Bete Meerrettich“ bleiben. Einkauf und Meerrettich-Qualität: [Polenladen](/de/blog/polenladen-einkaufen); DE-Ersatzlogik: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
    originPl:
      "Ćwikła to przepis na zimny dodatek z tartego buraka i chrzanu — typowo wielkanocny i na zimną półkę, świadomie nie ciepły dodatek i nie zupa. [Buraczki](/pl/rezepte/buraczki) zostają przepisem na ciepłego dodatku z buraków (często z cebulą, gorące obok mięsa). [Barszcz czerwony](/pl/rezepte/barszcz-czerwony) zostaje zupą buraczaną; [botwinka](/pl/rezepte/botwinka) zupą z młodych buraków. [Sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa) to majonezowa sałatka — inny intent. Przy [menu wielkanocnym](/pl/blog/menu-wielkanocne) ćwikła bywa obok jaj, kiełbasy i chleba — plan menu zostaje artykułem o okazji, tu tylko ilości i kroki. W diasporze ćwikła to moment, gdy tarty burak i chrzan w słoiku lub misce dają ostry kontrast do łagodnej półki: ugotować lub wziąć gotowe, zetrzeć, doprawić, schłodzić. Bez patelni z ciepłym dodatkiem, bez bulionu, bez majonezowych kostek. Trzymać wąsko „ćwikła / burak chrzan”. W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz specjalności; zamienniki znajdziesz w [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
    shopDe:
      "Rote Bete (roh zum Kochen oder vakuumiert gekocht), geriebener Meerrettich (frisch oder Glas), Essig oder Zitrone, Zucker, Salz. Bete und oft besserer Meerrettich im [Polenladen](/de/blog/polenladen-einkaufen); Basis im Supermarkt. Wenn frischer Meerrettich fehlt: Glasware ehrlich laut [Ersatzprodukte DE](/de/blog/ersatzprodukte-de) — Schärfe nach Geschmack nachziehen. Keine warme Zwiebel-Pfanne als Hauptgericht hier: das wäre [Buraczki](/de/rezepte/buraczki). Kein Fond und keine junge Bete als Suppe: [Barszcz](/de/rezepte/barszcz-czerwony), [Botwinka](/de/rezepte/botwinka). Kein Mayo-Salat: [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa).",
    shopPl:
      "Buraki (surowe lub gotowane), starty chrzan (świeży lub ze słoika), ocet lub cytryna, cukier, sól. Buraki i często lepszy chrzan w [sklepie polskim](/pl/blog/sklep-polski-zakupy); baza w markecie. Gdy brak świeżego chrzanu: słoik uczciwie według [zamienników składników](/pl/blog/zamienniki-skladnikow) — ostrość według smaku. Bez ciepłej patelni z cebulą jako fokus: to byłyby [buraczki](/pl/rezepte/buraczki). Bez wywaru i młodych buraków jako zupy: [barszcz](/pl/rezepte/barszcz-czerwony), [botwinka](/pl/rezepte/botwinka). Bez sałatki majonezowej: [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa).",
    techniqueDe:
      "Bete weich kochen oder fertig nehmen; schälen; reiben — grob bis mittel, nicht zu Brei. Meerrettich unterrühren; mit Essig/Zitrone, Zucker und Salz auf scharf-süß-säuerlich bringen. Zu viel Flüssigkeit macht wässrigen Relish; zu wenig Säure bleibt flach. Mindestens ein bis zwei Stunden kalt ziehen, besser über Nacht — die Schärfe rundet sich. Frischen Meerrettich nicht zu früh „totkochen“: Ćwikła bleibt kalt. Handschuhe gegen Farbflecken optional. Eine Hausvariante festhalten: geriebene Bete + Meerrettich + Essig/Zucker (keine warme Zwiebel-Butter-Beilage als Hauptgericht hier).",
    techniquePl:
      "Buraki ugotować lub wziąć gotowe; obrać; zetrzeć — grubo/średnio, nie na pulpę. Wmieszać chrzan; octem/cytryną, cukrem i solą dojść do ostro-słodko-kwaśnego. Za dużo płynu = wodnisty relish; za mało kwasu = płasko. Chłodzić co najmniej godzinę–dwie, lepiej na noc — ostrość się układa. Świeżego chrzanu nie „wygotowywać”: ćwikła zostaje zimna. Rękawiczki przeciw plamom opcjonalnie. Trzymać jeden wariant domu: tarty burak + chrzan + ocet/cukier (bez ciepłego dodatku z cebulą i masłem jako fokus).",
    serveDe:
      "Kalt in Schüssel oder Glas, zu [Biała kiełbasa](/de/rezepte/biala-kielbasa), [Pasztet](/de/rezepte/pasztet), Ei und Brot. Ostern unter [Wielkanoc](/de/blog/wielkanoc-speiseplan). Abgrenzung: warm = [Buraczki](/de/rezepte/buraczki); Suppe = [Barszcz](/de/rezepte/barszcz-czerwony) / [Botwinka](/de/rezepte/botwinka); Mayo-Salat = [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Hält mehrere Tage gekühlt; vor dem Servieren umrühren und Schärfe prüfen.",
    servePl:
      "Na zimno w misce lub słoiku, do [białej kiełbasy](/pl/rezepte/biala-kielbasa), [pasztetu](/pl/rezepte/pasztet), jaj i chleba. Wielkanoc pod [menu wielkanocnym](/pl/blog/menu-wielkanocne). Na stole: ciepło = [buraczki](/pl/rezepte/buraczki); zupa = [barszcz](/pl/rezepte/barszcz-czerwony) / [botwinka](/pl/rezepte/botwinka); sałatka majonezowa = [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Trzyma kilka dni w chłodzie; przed podaniem wymieszać i sprawdzić ostrość.",
    diasporaDe:
      "Ćwikła rettet in DE oft den scharfen Ostern-Kontrast, wenn Buraczki als warme Beilage schon am Sonntag stehen: ein Glas Relish, kalt, neben Wurst und Ei. Vakuum-Bete und Glas-Meerrettich sind diaspora-ehrlich. Kein Zwang zu frischem Reiben, wenn die Qualität stimmt — ehrlich benennen. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten. Alternativen stehen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Menü-Nachbar: [Wielkanoc](/de/blog/wielkanoc-speiseplan).",
    diasporaPl:
      "Ćwikła w DE często ratuje ostry kontrast wielkanocny, gdy buraczki jako ciepły dodatek już stoją w niedzielę: jeden słoik relishu, zimny, obok kiełbasy i jaj. Buraki próżniowe i chrzan ze słoika są uczciwe w diasporze. Bez przymusu świeżego tarcia, gdy jakość jest dobra — nazwać uczciwie. W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności. Zamienniki znajdziesz w [zamienniki składników](/pl/blog/zamienniki-skladnikow). Sąsiad menu: [menu wielkanocne](/pl/blog/menu-wielkanocne).",
    mistakesDe:
      "Mit Buraczki verwechseln (warm). Mit Barszcz oder Botwinka verwechseln (Suppe). Zu wässrig; zu wenig Meerrettich; heiß servieren; Speiseplan stehlen. Mayo-Salat als „dasselbe“ verkaufen ([Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa)).",
    mistakesPl:
      "Mylenie z buraczkami (ciepłe). Mylenie z barszczem lub botwinką (zupa). Za wodnista; za mało chrzanu; podawanie na ciepło; kradzież planu menu. Sprzedawać sałatkę majonezową jako „to samo” ([sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa)).",
    variantsDe:
      "Scharfer mit mehr Meerrettich; milder mit weniger und etwas mehr Zucker; mit Apfel gerieben als Hausvariante ehrlich benennen. Warm bleibt [Buraczki](/de/rezepte/buraczki). Suppen: [Barszcz](/de/rezepte/barszcz-czerwony), [Botwinka](/de/rezepte/botwinka). Festsalat: [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Teller-Passende Nachbarn sind [Biała kiełbasa](/de/rezepte/biala-kielbasa), [Pasztet](/de/rezepte/pasztet). Zum Anlass passt [Wielkanoc](/de/blog/wielkanoc-speiseplan). Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen.",
    variantsPl:
      "Ostrzej z większą ilością chrzanu; łagodniej z mniejszą i odrobiną cukru; z tartym jabłkiem jako wariant domu — uczciwie nazwać. Ciepło: [buraczki](/pl/rezepte/buraczki). Zupy: [barszcz](/pl/rezepte/barszcz-czerwony), [botwinka](/pl/rezepte/botwinka). Sałatka: [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Pasujący sąsiedzi to [biała kiełbasa](/pl/rezepte/biala-kielbasa), [pasztet](/pl/rezepte/pasztet). Do okazji pasuje [menu wielkanocne](/pl/blog/menu-wielkanocne). W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe.",
  },
};
