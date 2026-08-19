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
    vibeDe:
      "kalt und klar, mit Knoblauch gewürzt, ein Gelee mit Fleischstücken für Festbuffet und Aufschnittplatte",
    vibePl:
      "zimna i klarowna, czosnkowa, galaretka z kawałkami mięsa na świąteczny bufet i zimną półkę",
    originDe:
      "Galareta, oft nóźki w galarecie genannt, ist kalte Sülze aus Fleischstücken in klarem, schnittfestem Gelee, das allein aus lang gekochter Knochen- und Hautbrühe entsteht, ganz ohne zugesetzte Gelatine. Die früheste bekannte Erwähnung stammt aus dem Jahr 1518, als bei der Hochzeit von König Zygmunt Stary und Bona Sforza in Krakau eine Fleischgalerte mit Salat serviert wurde, damals noch aus Kapaunen oder Fisch statt Schweinefüßen. Ihren heutigen Namen und ihre Form aus Schweinefüßen und Kollagen verdankt sie der bäuerlichen Küche, die keine Zutat verschwenden wollte: Füße, Haut und Knochen sind reich an Kollagen, das beim langen Köcheln in die Brühe übergeht und sie beim Abkühlen selbst zum Gelee macht. In Wielkopolska heißt das Gericht bis heute Galart, ein Lehnwort vom deutschen Gallert, in anderen Regionen Zylc, Studzienina oder Drygle. Das ist keine Pastete und kein Mayo-Salat: [Pasztet](/de/rezepte/pasztet) bleibt gebackene Leber- und Fleischpastete, [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) der Festsalat aus Gemüsewürfeln, [Jajka faszerowane](/de/rezepte/jajka-faszerowane) gefüllte Eier auf der kalten Platte.",
    originPl:
      "Galareta, często nóźki w galarecie, to zimna galareta z kawałków mięsa w klarownym, krojonym żelu, który powstaje wyłącznie z długo gotowanego wywaru z kości i skóry, bez dodatku żelatyny. Najstarsza znana wzmianka pochodzi z 1518 roku, kiedy na weselu króla Zygmunta Starego i Bony Sforzy w Krakowie podano galaretę mięsną z sałatą, wtedy jeszcze z kapłonów lub ryb, a nie z nóżek wieprzowych. Dzisiejszą nazwę i formę z nóżek wieprzowych galareta zawdzięcza kuchni wiejskiej, która nie chciała niczego wyrzucać: nóżki, skóra i kości są bogate w kolagen, który podczas długiego gotowania przechodzi do wywaru i sam ścina go po ostudzeniu. W Wielkopolsce danie do dziś nazywa się galart, co jest zapożyczeniem z niemieckiego Gallert, w innych regionach funkcjonuje jako zylc, studzienina albo drygle. To nie pasztet i nie sałatka majonezowa: [pasztet](/pl/rezepte/pasztet) zostaje pieczoną pastą z wątróbki, [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa) świąteczną sałatką z warzyw, [jajka faszerowane](/pl/rezepte/jajka-faszerowane) jajkami na zimnym półmisku.",
    shopDe:
      "Für tragfähiges Gelee brauchst du Schweinefüße (nóźki) und etwas Fleisch mit Knochen, dazu Zwiebel, Karotte, Sellerie, Lorbeer, Piment, Pfefferkörner, Knoblauch und Salz, Essig oder Meerrettich reichst du erst am Tisch. Nóżki und die typischen Gewürze holst du oft frischer im [Polenladen](/de/blog/polenladen-einkaufen), fehlt etwas, hilft der Beitrag zu [Ersatzprodukten DE](/de/blog/ersatzprodukte-de). Pastete und Mayo-Salat bleiben eigene Rezepte, nämlich [Pasztet](/de/rezepte/pasztet) und [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa).",
    shopPl:
      "Żeby galareta dobrze stężała, potrzebujesz nóżek wieprzowych i odrobiny mięsa z kością, do tego cebuli, marchwi, selera, liścia laurowego, ziela angielskiego, pieprzu, czosnku i soli, ocet lub chrzan podajesz dopiero przy stole. Nóżki i typowe przyprawy często kupisz świeższe w [sklepie polskim](/pl/blog/sklep-polski-zakupy), a jeśli czegoś brakuje, pomagają [zamienniki składników](/pl/blog/zamienniki-skladnikow). Pasztet i sałatka majonezowa zostają osobnymi przepisami, czyli [pasztetem](/pl/rezepte/pasztet) i [sałatką jarzynową](/pl/rezepte/salatka-jarzynowa).",
    techniqueDe:
      "Die lange, sanfte Kochzeit ist entscheidend, denn nur so löst sich genug Kollagen aus Haut und Knochen und geht in die Brühe über. Schaum konsequent abschöpfen und die Brühe nicht heftig wallen lassen, sonst wird sie trüb und das fertige Gelee ebenfalls milchig statt klar. Fleisch zupfen, Brühe klären und entfetten, dann kräftig mit Knoblauch abschmecken, weil kalt der Geschmack merklich zurückgeht. In Formen schichten, heiß übergießen und ungestört kalt fest werden lassen, mindestens über Nacht, denn zu wenig Kollagen ergibt eine wacklige, nicht schnittfeste Masse, während zu viel Fett das Gelee milchig macht.",
    techniquePl:
      "Długie, delikatne gotowanie jest tu kluczowe, bo tylko wtedy wystarczająco dużo kolagenu ze skóry i kości przechodzi do wywaru. Systematycznie zbieraj szumowiny i nie doprowadzaj wywaru do gwałtownego wrzenia, inaczej zrobi się mętny, a gotowa galaretka również będzie mleczna, nie klarowna. Mięso rozdrobnij, wywar sklarowuj i odtłuść, a potem dopraw wyraźnie czosnkiem, bo na zimno smak zauważalnie łagodnieje. Ułóż w foremkach, zalej gorącym wywarem i zostaw do zastygnięcia w chłodzie, najlepiej na całą noc, bo za mało kolagenu daje galaretkę rozlazłą i niekrajalną, a za dużo tłuszczu robi ją mleczną.",
    serveDe:
      "Kalt gestürzt oder geschnitten servieren, mit Essig, Meerrettich oder Senf, als Fest- oder Sonntagselement passt sie unter den [Wielkanoc-Speiseplan](/de/blog/wielkanoc-speiseplan) und den [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch). Auf dem Tisch klar unterscheiden: Pastete ist [Pasztet](/de/rezepte/pasztet), Mayo-Gemüse ist [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa), gefüllte Eier sind [Jajka faszerowane](/de/rezepte/jajka-faszerowane). Sie hält einige Tage gekühlt, vor dem Servieren solltest du sie auf Klarheit und Schnittfestigkeit prüfen.",
    servePl:
      "Podawaj na zimno, wyjętą z formy albo pokrojoną, z octem, chrzanem lub musztardą, jako element świąt lub niedzieli pasuje pod [menu wielkanocne](/pl/blog/menu-wielkanocne) i [obiad niedzielny](/pl/blog/obiad-niedzielny). Na stole warto rozróżniać: pasta to [pasztet](/pl/rezepte/pasztet), warzywa z majonezem to [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa), jajka to [jajka faszerowane](/pl/rezepte/jajka-faszerowane). Trzyma się kilka dni w chłodzie, przed podaniem sprawdź klarowność i krajalność.",
    diasporaDe:
      "In Deutschland retten nóźki aus dem Polenladen oft den Kollagen-Job, wenn die Haxe aus dem Supermarkt allein zu mager ist. Die lange Kochzeit legt man am besten auf den Vortag, der Kühlschrank übernimmt über Nacht, sodass der Festtag selbst ruhig bleibt. Für die Zubereitung reichen Topf, Sieb und Formen, mehr braucht es nicht. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du die typischen Zutaten, Alternativen stehen unter [Ersatzprodukte DE](/de/blog/ersatzprodukte-de), kulturell passt Galareta zu [Wielkanoc](/de/blog/wielkanoc-speiseplan) und zum [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch).",
    diasporaPl:
      "W Niemczech nóżki ze sklepu polskiego często ratują kolagen, gdy sama golonka z marketu jest zbyt chuda. Długie gotowanie najlepiej zaplanować dzień wcześniej, a lodówka kończy pracę przez noc, więc sam dzień świąteczny zostaje spokojny. Do przygotowania wystarczy garnek, sito i foremki. W [sklepie polskim](/pl/blog/sklep-polski-zakupy) kupisz typowe składniki, zamienniki opisują [zamienniki składników](/pl/blog/zamienniki-skladnikow), kulturowo pasuje do [menu wielkanocnego](/pl/blog/menu-wielkanocne) i [obiadu niedzielnego](/pl/blog/obiad-niedzielny).",
    mistakesDe:
      "Wer Galareta mit dem [Pasztet](/de/rezepte/pasztet) verwechselt, erwartet eine Pastete statt eines Gelees, wer sie mit [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) oder [Jajka faszerowane](/de/rezepte/jajka-faszerowane) gleichsetzt, verfehlt ebenfalls das Gericht. Zu kurze Kochzeit lässt zu wenig Kollagen frei, eine trübe, ungeklärte Brühe ergibt trübes Gelee, und heiß serviert verliert Galareta ihre charakteristische Konsistenz vollständig.",
    mistakesPl:
      "Kto myli galaretę z [pasztetem](/pl/rezepte/pasztet), oczekuje pasty zamiast żelu, kto zrównuje ją z [sałatką jarzynową](/pl/rezepte/salatka-jarzynowa) albo [jajkami faszerowanymi](/pl/rezepte/jajka-faszerowane), również mija się z daniem. Za krótkie gotowanie zostawia za mało kolagenu, mętny, niesklarowany wywar daje mętną galaretkę, a podana na ciepło galareta całkowicie traci swoją charakterystyczną konsystencję.",
    variantsDe:
      "Mehr Knoblauch macht die Galareta schärfer, Karottenscheiben in der Form sehen dekorativ aus, und weniger Piment ergibt eine mildere Variante. Die Pastete bleibt [Pasztet](/de/rezepte/pasztet), der Festsalat [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa), auf dem Buffet steht daneben oft [Jajka faszerowane](/de/rezepte/jajka-faszerowane), zum Anlass passen [Wielkanoc](/de/blog/wielkanoc-speiseplan) und der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), zum Einkauf der [Polenladen](/de/blog/polenladen-einkaufen) und die [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Więcej czosnku daje ostrzejszą galaretę, plasterki marchewki w formie wyglądają dekoracyjnie, a mniej ziela angielskiego robi wariant łagodniejszy. Pasta zostaje przy [pasztecie](/pl/rezepte/pasztet), sałatka świąteczna przy [sałatce jarzynowej](/pl/rezepte/salatka-jarzynowa), na bufecie obok stoją często [jajka faszerowane](/pl/rezepte/jajka-faszerowane), do okazji pasują [menu wielkanocne](/pl/blog/menu-wielkanocne) i [obiad niedzielny](/pl/blog/obiad-niedzielny), do zakupów [sklep polski](/pl/blog/sklep-polski-zakupy) i [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
  },
  "recipe-salatka-sledziowa": {
    dishDe: "Sałatka śledziowa",
    dishPl: "Sałatka śledziowa",
    vibeDe:
      "cremig durch Mayonnaise, mit Zwiebel und Apfel, ein kalter Salat für Buffet und Wigilia",
    vibePl:
      "kremowa przez majonez, z cebulą i jabłkiem, zimna sałatka na bufet i Wigilię",
    originDe:
      "Hering ist in Polen seit dem Mittelalter die Fastenspeise schlechthin: Als kaltblütiges Tier durfte er an den zahlreichen Fasttagen des Kirchenjahres gegessen werden, während Fleisch verboten war, und war zugleich, in Salzlake konserviert, das ganze Jahr über verfügbar und für arme wie reiche Haushalte erschwinglich. Sałatka śledziowa ist die cremige, spätere Weiterentwicklung dieser Tradition: abgetropfte Filets, gebunden mit Mayonnaise statt nur mit Öl, ergänzt um Zwiebel, Apfel, Ei und Gurke, oft neben dem klassischen [Śledź w oleju](/de/rezepte/sledz) auf dem Wigilia-Tisch. [Śledź w oleju](/de/rezepte/sledz) bleibt bei kalten Filets mit Zwiebel und Öl, [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) beim Gemüse-Mayo-Salat ohne Hering als Kern. Am [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan) stehen beide Hering-Formen oft nebeneinander, weil die Fastentradition eine Vielfalt an Fischgerichten hervorgebracht hat, nicht nur eine.",
    originPl:
      "Śledź jest w Polsce od średniowiecza rybą postną w czystej postaci: jako zwierzę zimnokrwiste mógł być jedzony w liczne dni postne roku liturgicznego, gdy mięso było zakazane, a solony był dostępny przez cały rok i osiągalny finansowo zarówno dla biednych, jak i bogatych domów. Sałatka śledziowa to kremowa, późniejsza wersja tej tradycji: odsączone filety związane majonezem, a nie tylko olejem, wzbogacone cebulą, jabłkiem, jajkiem i ogórkiem, często obok klasycznego [śledzia w oleju](/pl/rezepte/sledz) na wigilijnym stole. [Śledź w oleju](/pl/rezepte/sledz) zostaje przy zimnych filetach z cebulą i olejem, [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa) przy majonezowej sałatce warzywnej bez śledzia jako rdzenia. Przy [menu wigilijnym](/pl/blog/menu-wigilijne) obie formy śledzia bywają obok siebie, bo tradycja postna wykształciła wiele różnych dań rybnych, nie tylko jedno.",
    shopDe:
      "Nimm Hering- oder Matjesfilets, gute Mayonnaise und optional etwas Śmietana, dazu Zwiebel, einen säuerlichen Apfel, hartgekochte Eier, Gewürz- oder Salzgurken sowie Salz, Pfeffer und eine Prise Zucker, Schnittlauch zum Schluss. Filets und oft bessere Mayonnaise findest du im [Polenladen](/de/blog/polenladen-einkaufen). Das ist bewusst kein klarer [Śledź w oleju](/de/rezepte/sledz) und kein Gemüsesalat wie die [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa), hier trägt der Hering die Mayo-Schüssel.",
    shopPl:
      "Weź filety śledziowe lub matjasy, dobry majonez i opcjonalnie odrobinę śmietany, do tego cebulę, kwaskowe jabłko, jajka na twardo, ogórki kiszone lub konserwowe oraz sól, pieprz i szczyptę cukru, na koniec szczypiorek. Filety i często lepszy majonez kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). To świadomie nie klarowny [śledź w oleju](/pl/rezepte/sledz) i nie warzywna [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa), tu śledź prowadzi miskę majonezową.",
    techniqueDe:
      "Filets gründlich abtropfen lassen, denn zu viel Lake macht den Salat wässrig statt cremig. Wer die Schärfe der Zwiebel mildern möchte, blanchiert sie kurz. Alles würfeln, dann Mayonnaise, mit oder ohne Śmietana, unterheben, bis die Masse cremig gebunden ist und nicht flüssig wirkt. Mindestens ein bis zwei Stunden kalt durchziehen lassen, denn zu wenig Mayonnaise lässt den Salat bröckeln, zu viel erschlägt den Hering-Charakter komplett.",
    techniquePl:
      "Filety dobrze odsącz, bo za dużo zalewy robi sałatkę wodnistą, nie kremową. Jeśli chcesz zmniejszyć ostrość cebuli, krótko ją zblanszuj. Wszystko pokrój w kostkę, potem wmieszaj majonez, ze śmietaną albo bez niej, do kremowego związania, bez rzadkości. Chłodź co najmniej godzinę do dwóch, bo za mało majonezu sprawia, że sałatka się kruszy, a za dużo całkowicie zabija charakter śledzia.",
    serveDe:
      "Kalt in einer Schüssel servieren, oft mit Schnittlauch, zur Wigilia passt der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan), am Sonntag der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch). Auf dem Tisch klar halten: Öl-Filets sind [Śledź](/de/rezepte/sledz), Mayo-Gemüse ohne Hering ist [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa). Am besten hält sie einen Tag gekühlt, vor dem Servieren noch einmal cremig nachrühren.",
    servePl:
      "Podawaj na zimno w misce, często ze szczypiorkiem, na Wigilię pasuje [menu wigilijne](/pl/blog/menu-wigilijne), w niedzielę [obiad niedzielny](/pl/blog/obiad-niedzielny). Na stole rozróżniaj: filety w oleju to [śledź](/pl/rezepte/sledz), warzywa z majonezem bez śledzia to [sałatka jarzynowa](/pl/rezepte/salatka-jarzynowa). Najlepiej trzyma dzień w chłodzie, przed podaniem wymieszaj ją jeszcze raz do kremowości.",
    diasporaDe:
      "In Deutschland rettet der Mayo-Heringssalat oft den zweiten Buffet-Slot, wenn Öl-Hering schon auf dem Tisch steht, zwei Gerichte, ein Fisch. Matjes aus dem Glas und gute Supermarkt-Mayonnaise sind in der Diaspora ganz ehrliche Zutaten. Im [Polenladen](/de/blog/polenladen-einkaufen) findest du die typischen Zutaten, Alternativen beschreibt [Ersatzprodukte DE](/de/blog/ersatzprodukte-de), zum Menü passt [Wigilia](/de/blog/wigilia-speiseplan).",
    diasporaPl:
      "W Niemczech majonezowa sałatka śledziowa często ratuje drugi slot bufetowy, gdy śledź w oleju już stoi na stole, dwa dania, jedna ryba. Matjasy ze słoika i dobry majonez z marketu są w diasporze zupełnie uczciwym wyborem. W [sklepie polskim](/pl/blog/sklep-polski-zakupy) kupisz typowe składniki, zamienniki opisują [zamienniki składników](/pl/blog/zamienniki-skladnikow), do menu pasuje [menu wigilijne](/pl/blog/menu-wigilijne).",
    mistakesDe:
      "Wer die Sałatka śledziowa mit [Śledź w oleju](/de/rezepte/sledz) verwechselt, erwartet Filets in Öl statt einen Mayo-Salat, wer sie mit [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa) gleichsetzt, vermisst den Hering als eigentlichen Kern. Zu wässrig abgetropfte Filets und zu kurze Kühlzeit lassen den Salat flach schmecken statt cremig durchgezogen.",
    mistakesPl:
      "Kto myli sałatkę śledziową ze [śledziem w oleju](/pl/rezepte/sledz), oczekuje filetów w oleju zamiast sałatki majonezowej, kto zrównuje ją z [sałatką jarzynową](/pl/rezepte/salatka-jarzynowa), traci śledzia jako właściwy rdzeń dania. Za wodniste filety i za krótkie chłodzenie sprawiają, że sałatka smakuje płasko, a nie kremowo przegryzła.",
    variantsDe:
      "Mehr Apfel macht sie süßer, mehr Gurke säuerlicher, und mit etwas mehr Śmietana wird sie leichter. Die Öl-Linie bleibt beim [Śledź](/de/rezepte/sledz), das Festgemüse bei der [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa), zum Anlass passt der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan), im Alltag der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch), zum Einkauf der [Polenladen](/de/blog/polenladen-einkaufen) und die [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Więcej jabłka daje słodszy smak, więcej ogórka kwaśniejszy, a odrobina więcej śmietany robi sałatkę lżejszą. Linia olejowa zostaje przy [śledziu](/pl/rezepte/sledz), warzywa świąteczne przy [sałatce jarzynowej](/pl/rezepte/salatka-jarzynowa), do okazji pasuje [menu wigilijne](/pl/blog/menu-wigilijne), na co dzień [obiad niedzielny](/pl/blog/obiad-niedzielny), do zakupów [sklep polski](/pl/blog/sklep-polski-zakupy) i [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
  },
};
