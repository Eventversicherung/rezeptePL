/**
 * Wave 14 Paket B — FACTS for Jajka faszerowane + Ćwikła.
 * Isolated export `W14_FACTS_B` — Integrator merges into recipe-articles.ts FACTS map.
 * Shape matches ArticleFacts in recipe-articles.ts.
 *
 * Ownership:
 * - Jajka faszerowane Primary nur /rezepte/jajka-faszerowane
 * ≠ Sałatka jarzynowa ≠ Mizeria ≠ Pasztet
 * - Ćwikła Primary nur /rezepte/cwikla
 * ≠ Buraczki (warm) ≠ Barszcz ≠ Botwinka ≠ Sałatka
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
 "Jajka faszerowane sind gefüllte hartgekochte Eier: Eigelb mit Mayo und Schnittlauch, kalt auf der Platte. Das ist bewusst kein Mayo-Gemüsesalat und kein Gurkensalat. [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) bleibt der Festsalat aus gekochtem Gemüse und Mayo; [Mizeria](/de/rezepte/mizeria) die Gurke mit Śmietana und Dill; [Pasztet](/de/rezepte/pasztet) die Pastete auf dem Aufschnitt — Nachbar, nicht dasselbe Gericht. Am [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan) stehen gefüllte Eier oft neben Wurst und Meerrettich. In der Diaspora füllen harte Eier und eine schnelle Eigelb-Mayo-Masse den Buffet-Teller, ohne einen ganzen Salattopf zu rühren. Sonntagskultur unter [Sonntagsessen](/de/blog/sonntagsessen-polnisch); Einkauf im [Polenladen](/de/blog/polenladen-einkaufen).",
 originPl:
 "Jajka faszerowane to faszerowane jajka na twardo: żółtko z majonezem i szczypiorkiem, na zimno na półmisku. Świadomie nie majonezowa sałatka warzywna i nie sałatka ogórkowa. [Sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa) zostaje świąteczną sałatką z ugotowanych warzyw; [mizeria](/pl/rezepte/mizeria) ogórkiem ze śmietaną; [pasztet](/pl/rezepte/pasztet) pastą na zimnej półce — sąsiad, nie to samo danie. Przy [menu wielkanocnym](/pl/blog/menu-wielkanocne) bywają obok kiełbasy i chrzanu. W diasporze twarde jajka i szybka masa żółtkowo-majonezowa wypełniają półmisek bez mieszania całego garnka sałatki. Kultura niedzieli: [obiad niedzielny](/pl/blog/obiad-niedzielny); zakupy w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
 shopDe:
 "Nimm frische Eier (Größe M/L), gute Mayonnaise, frischen Schnittlauch, Salz und Pfeffer — optional Senf und Paprika zum Bestreuen. Basis im Supermarkt; bessere Mayo und manchmal frischeren Schnittlauch im [Polenladen](/de/blog/polenladen-einkaufen). Das ist kein Mayo-Gemüsesalat wie [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) und keine Sülze wie [Galareta](/de/rezepte/galareta) — hier tragen gefüllte Hälften die kalte Platte.",
 shopPl:
 "Weź świeże jajka (M/L), dobry majonez, świeży szczypiorek, sól i pieprz — opcjonalnie musztardę i paprykę do oprószenia. Baza w markecie; lepszy majonez i czasem świeższy szczypiorek w [sklepie polskim](/pl/blog/sklep-polski-zakupy). To nie sałatka warzywna jak [jarzynowa](/pl/rezepte/salatka-jarzynowa) i nie galareta jak [galareta](/pl/rezepte/galareta) — tu wypełnione połówki niosą zimną półmise.",
 techniqueDe:
 "Eier hart, aber nicht kreidig-trocken kochen — zu lang wird das Eigelb grau und sandig; zu kurz bleibt die Mitte weich und die Masse rutscht. Abschrecken, sauber schälen, längs halbieren. Eigelb fein zerdrücken, mit Mayo und Schnittlauch zu einer streichfähigen, nicht flüssigen Masse rühren; optional ein Hauch Senf für Tiefe. Mit Löffel oder Sterntülle füllen — gleichmäßig, ohne die Eiweiße zu zerreißen. Mindestens eine halbe Stunde kühlen, damit die Füllung setzt. Zu nasse Masse = rutschende Füllung; zu trockene Masse = bröckelnde Häufchen. Mayo-Hygiene: kalt halten, nicht stundenlang auf warmem Buffet. Eine Hausvariante festhalten: Eigelb-Mayo-Schnittlauch (keine Thunfisch-Fokus, keine Pastetenfüllung als Default).",
 techniquePl:
 "Jajka ugotować na twardo, ale nie kredowo-suche — za długo żółtko staje się szare i piaszczyste; za krótko środek zostaje miękki i masa się ślizga. Ostudzić, obrać, przekroić wzdłuż. Żółtka rozetrzeć z majonezem i szczypiorkiem do smarownej, nie płynnej masy; opcjonalnie odrobina musztardy. Wypełniać łyżeczką lub rękawem — równo, bez rozrywania białek. Chłodzić co najmniej pół godziny. Za rzadka masa = ślizganie; za sucha = kruszące się kopczyki. Higiena majonezu: trzymać zimno, nie godzinami na ciepłym bufecie. Trzymać jeden wariant domu: żółtko-majonez-szczypiorek (bez fokus tuńczyka, bez pasztetu jako default).",
 serveDe:
 "Auf Platte oder Buffet, kalt, oft mit Schnittlauch oder Paprika. Als Ostern-Element unter [Wielkanoc](/de/blog/wielkanoc-speiseplan); Sonntag unter [Sonntagsessen](/de/blog/sonntagsessen-polnisch). Auf dem Tisch klar halten: Mayo-Gemüse = [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa); Gurke/Śmietana = [Mizeria](/de/rezepte/mizeria); Pastete = [Pasztet](/de/rezepte/pasztet); helle Wurst = [Biała kiełbasa](/de/rezepte/biala-kielbasa). Hält einen Tag gekühlt am besten; vor dem Servieren kurz prüfen, ob die Masse noch bindet.",
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
 "Ćwikła ist der kalte Relish aus geriebener Roter Bete und Meerrettich — typisch Ostern und Aufschnitt, bewusst keine warme Beilage und keine Suppe. [Buraczki](/de/rezepte/buraczki) bleiben die warme Rote-Bete-Beilage; [Barszcz czerwony](/de/rezepte/barszcz-czerwony) die Bete-Suppe; [Botwinka](/de/rezepte/botwinka) die junge-Bete-Suppe; [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) der Mayo-Festsalat. Am [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan) steht Ćwikła oft neben Ei, Wurst und Brot. In der Diaspora liefern geriebene Bete und Meerrettich den scharfen Kontrast zur milden Platte. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du guten chrzan; Alternativen stehen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
 originPl:
 "Ćwikła to zimny dodatek z tartego buraka i chrzanu — typowo wielkanocny i na zimną półkę, świadomie nie ciepły dodatek i nie zupa. [Buraczki](/pl/rezepte/buraczki) zostają ciepłym dodatkiem; [barszcz czerwony](/pl/rezepte/barszcz-czerwony) zupą buraczaną; [botwinka](/pl/rezepte/botwinka) zupą z młodych buraków; [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa) sałatką majonezową. Przy [menu wielkanocnym](/pl/blog/menu-wielkanocne) ćwikła bywa obok jaj, kiełbasy i chleba. W diasporze tarty burak i chrzan dają ostry kontrast do łagodnej półki. W [sklepie polskim](/pl/blog/sklep-polski-zakupy) kupisz dobry chrzan; zamienniki znajdziesz pod [zamiennikami składników](/pl/blog/zamienniki-skladnikow).",
 shopDe:
 "Gekochte oder geröstete Rote Bete und frischer Meerrettich tragen die Schüssel — dazu etwas Essig oder Zitrone, Salz, Zucker und optional ein Schuss Öl. Bete und guten chrzan findest du oft im [Polenladen](/de/blog/polenladen-einkaufen); Alternativen stehen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Warm geriebene Bete ohne Meerrettich ist eher [Buraczki](/de/rezepte/buraczki); kalter Kefir-Becher ist [Chłodnik](/de/rezepte/chlodnik-litewski).",
 shopPl:
 "Ugotowane lub pieczone buraki i świeży chrzan niosą miskę — plus odrobina octu lub cytryny, sól, cukier i opcjonalnie łyk oleju. Buraki i dobry chrzan często kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy); zamienniki znajdziesz pod [zamiennikami](/pl/blog/zamienniki-skladnikow). Ciepłe tarte buraczki bez chrzanu to raczej [buraczki](/pl/rezepte/buraczki); zimny kefir to [chłodnik](/pl/rezepte/chlodnik-litewski).",
 techniqueDe:
 "Bete weich kochen oder fertig nehmen; schälen; reiben — grob bis mittel, nicht zu Brei. Meerrettich unterrühren; mit Essig/Zitrone, Zucker und Salz auf scharf-süß-säuerlich bringen. Zu viel Flüssigkeit macht wässrigen Relish; zu wenig Säure bleibt flach. Mindestens ein bis zwei Stunden kalt ziehen, besser über Nacht — die Schärfe rundet sich. Frischen Meerrettich nicht zu früh „totkochen“: Ćwikła bleibt kalt. Handschuhe gegen Farbflecken optional. Eine Hausvariante festhalten: geriebene Bete + Meerrettich + Essig/Zucker (keine warme Zwiebel-Butter-Beilage als Hauptgericht hier).",
 techniquePl:
 "Buraki ugotować lub wziąć gotowe; obrać; zetrzeć — grubo/średnio, nie na pulpę. Wmieszać chrzan; octem/cytryną, cukrem i solą dojść do ostro-słodko-kwaśnego. Za dużo płynu = wodnisty relish; za mało kwasu = płasko. Chłodzić co najmniej godzinę–dwie, lepiej na noc — ostrość się układa. Świeżego chrzanu nie „wygotowywać”: ćwikła zostaje zimna. Rękawiczki przeciw plamom opcjonalnie. Trzymać jeden wariant domu: tarty burak + chrzan + ocet/cukier (bez ciepłego dodatku z cebulą i masłem jako fokus).",
 serveDe:
 "Kalt in Schüssel oder Glas, zu [Biała kiełbasa](/de/rezepte/biala-kielbasa), [Pasztet](/de/rezepte/pasztet), Ei und Brot. Ostern unter [Wielkanoc](/de/blog/wielkanoc-speiseplan). Auf dem Tisch klar halten: warm = [Buraczki](/de/rezepte/buraczki); Suppe = [Barszcz](/de/rezepte/barszcz-czerwony) / [Botwinka](/de/rezepte/botwinka); Mayo-Salat = [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Hält mehrere Tage gekühlt; vor dem Servieren umrühren und Schärfe prüfen.",
 servePl:
 "Na zimno w misce lub słoiku, do [białej kiełbasy](/pl/rezepte/biala-kielbasa), [pasztetu](/pl/rezepte/pasztet), jaj i chleba. Wielkanoc pod [menu wielkanocnym](/pl/blog/menu-wielkanocne). Na stole: ciepło = [buraczki](/pl/rezepte/buraczki); zupa = [barszcz](/pl/rezepte/barszcz-czerwony) / [botwinka](/pl/rezepte/botwinka); sałatka majonezowa = [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Trzyma kilka dni w chłodzie; przed podaniem wymieszać i sprawdzić ostrość.",
 diasporaDe:
 "Ćwikła rettet in DE oft den scharfen Ostern-Kontrast, wenn Buraczki als warme Beilage schon am Sonntag stehen: ein Glas Relish, kalt, neben Wurst und Ei. Vakuum-Bete und Glas-Meerrettich sind diaspora-ehrlich. Kein Zwang zu frischem Reiben, wenn die Qualität stimmt — ehrlich benennen. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du typische Spezialzutaten. Alternativen stehen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de). Menü-Nachbar: [Wielkanoc](/de/blog/wielkanoc-speiseplan).",
 diasporaPl:
 "Ćwikła w DE często ratuje ostry kontrast wielkanocny, gdy buraczki jako ciepły dodatek już stoją w niedzielę: jeden słoik relishu, zimny, obok kiełbasy i jaj. Buraki próżniowe i chrzan ze słoika są uczciwe w diasporze. Bez przymusu świeżego tarcia, gdy jakość jest dobra — nazwać uczciwie. W [sklep polski](/pl/blog/sklep-polski-zakupy) kupisz typowe specjalności. Zamienniki znajdziesz w [zamienniki składników](/pl/blog/zamienniki-skladnikow). Sąsiad menu: [menu wielkanocne](/pl/blog/menu-wielkanocne).",
 mistakesDe:
 "Mit Buraczki verwechseln (warm). Mit Barszcz oder Botwinka verwechseln (Suppe). Zu wässrig; zu wenig Meerrettich; heiß servieren; den Speiseplan hier zu duplizieren. Mayo-Salat als „dasselbe“ verkaufen ([Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa)).",
 mistakesPl:
 "Mylenie z buraczkami (ciepłe). Mylenie z barszczem lub botwinką (zupa). Za wodnista; za mało chrzanu; podawanie na ciepło; kopiowanie planu menu. Sprzedawać sałatkę majonezową jako „to samo” ([sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa)).",
 variantsDe:
 "Scharfer mit mehr Meerrettich; milder mit weniger und etwas mehr Zucker; mit Apfel gerieben als Hausvariante ehrlich benennen. Warm bleibt [Buraczki](/de/rezepte/buraczki). Suppen: [Barszcz](/de/rezepte/barszcz-czerwony), [Botwinka](/de/rezepte/botwinka). Festsalat: [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Teller-Passende Nachbarn sind [Biała kiełbasa](/de/rezepte/biala-kielbasa), [Pasztet](/de/rezepte/pasztet). Zum Anlass passt [Wielkanoc](/de/blog/wielkanoc-speiseplan). Im [Polenladen](/de/blog/polenladen-einkaufen) und unter [Ersatzprodukte](/de/blog/ersatzprodukte-de) findest du Einkaufshilfen.",
 variantsPl:
 "Ostrzej z większą ilością chrzanu; łagodniej z mniejszą i odrobiną cukru; z tartym jabłkiem jako wariant domu — uczciwie nazwać. Ciepło: [buraczki](/pl/rezepte/buraczki). Zupy: [barszcz](/pl/rezepte/barszcz-czerwony), [botwinka](/pl/rezepte/botwinka). Sałatka: [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Pasujący sąsiedzi to [biała kiełbasa](/pl/rezepte/biala-kielbasa), [pasztet](/pl/rezepte/pasztet). Do okazji pasuje [menu wielkanocne](/pl/blog/menu-wielkanocne). W [sklep polski](/pl/blog/sklep-polski-zakupy) i pod [zamienniki](/pl/blog/zamienniki-skladnikow) znajdziesz wskazówki zakupowe.",
 },
};
