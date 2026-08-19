/**
 * Wave 13 Paket A — FACTS for krupnik, szczawiowa.
 *
 * Agent E merge into recipe-articles.ts:
 * import { W13_FACTS_A } from "./recipe-articles-w13-a";
 * Object.assign(FACTS, …, W13_FACTS_A);
 *
 * Gates: expand ≥400 words/locale; ≥4 inline markdown links/locale
 * (≥2 recipe + ≥2 blog) in FACTS longform fields.
 * Affiliate: guide-only (no relatedProductIds on recipes).
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

export const W13_FACTS_A: Record<string, ArticleFacts> = {
  "recipe-krupnik": {
    dishDe: "Krupnik",
    dishPl: "Krupnik",
    vibeDe: "getreidewarm, nach Gerste und Wurzelgemüse, Alltag und Sonntagstopf",
    vibePl: "zbożowy, od kaszy jęczmiennej i włoszczyzny, codzienność i niedziela",
    originDe:
      "Der Name Krupnik kommt vom altpolnischen Wort krupy, das schlicht Grütze oder Graupen bedeutet, und die Suppe reicht bis ins Mittelalter zurück. Ursprünglich war sie eine schlichte, oft fastentaugliche Grützsuppe für Bauern und Landarbeiter, erst ab dem 18. Jahrhundert fand sie den Weg auf bürgerliche und adlige Tische, unter anderem in Lucyna Ćwierczakiewiczowas berühmtes Kochbuch „365 obiadów za 5 złotych“ aus dem 19. Jahrhundert. Je nach Region unterscheidet sich Krupnik bis heute: In den Bergen der Podhale kommt traditionell mehr Wurzelgemüse hinein, in Masowien wird die Suppe deutlich fleischiger gekocht. Krupnik ist dabei weder die dicke Erbsensuppe [Grochówka](/de/rezepte/grochowka) noch die klare Festtagsbrühe [Rosół](/de/rezepte/rosol) noch die Sauerkrautsuppe [Kapuśniak](/de/rezepte/kapusniak). Einen Überblick über die ganze Suppenlandschaft gibt der Beitrag zu [polnischen Suppen](/de/blog/polnische-suppen).",
    originPl:
      "Nazwa krupnik pochodzi od staropolskiego słowa krupy, czyli kasza, a sama zupa sięga korzeniami średniowiecza. Początkowo była to prosta, często postna polewka z kaszą, jedzona przez chłopów i robotników rolnych, dopiero od XVIII wieku trafiła też na stoły mieszczańskie i szlacheckie, między innymi do słynnej książki kucharskiej Lucyny Ćwierczakiewiczowej „365 obiadów za 5 złotych” z XIX wieku. Do dziś krupnik różni się w zależności od regionu: na Podhalu dodaje się więcej warzyw korzeniowych, na Mazowszu zupa bywa bardziej mięsna. To ani gęsta [grochówka](/pl/rezepte/grochowka), ani klarowny [rosół](/pl/rezepte/rosol), ani kiszony [kapuśniak](/pl/rezepte/kapusniak). Przegląd całej rodziny zup znajdziesz w artykule o [polskich zupach](/pl/blog/polskie-zupy).",
    shopDe:
      "Perlgerste ist der Charakterträger von Krupnik und liegt oft im [Polenladen](/de/blog/polenladen-einkaufen) griffbereit, genauso gut findest du sie aber auch im Getreideregal jedes Supermarkts. Dazu kommen Wurzelgemüse, Zwiebel, Lorbeer und Dill vom Markt, optional etwas Hühnerfleisch aus der Kühltheke. Fehlt eine bestimmte Gerstensorte, hilft der Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) weiter, ohne dass daraus eine Erbsensuppe wird. Getrocknete Erbsen oder ein Fond aus Trockenpilzen gehören nicht in den Topf, sonst landest du bei der [Grochówka](/de/rezepte/grochowka) oder der [Zupa grzybowa](/de/rezepte/zupa-grzybowa). Wie du eine klare Brühe als Basis kochst, zeigt die [Rosół-Technik](/de/blog/rosol-technik).",
    shopPl:
      "Kasza jęczmienna niesie cały charakter krupniku i często czeka gotowa w [sklepie polskim](/pl/blog/sklep-polski-zakupy), ale równie dobrze znajdziesz ją w dziale zbożowym każdego marketu. Do tego warzywa korzeniowe, cebula, liść laurowy i koperek z targu, opcjonalnie trochę kurczaka z lady chłodniczej. Gdy brakuje konkretnej kaszy, pomogą uczciwe [zamienniki składników](/pl/blog/zamienniki-skladnikow), bez zamiany zupy w grochową. Suszony groch albo wywar z suszonych grzybów nie pasują do tego garnka, bo wtedy wychodzi [grochówka](/pl/rezepte/grochowka) albo [zupa grzybowa](/pl/rezepte/zupa-grzybowa). Jak ugotować klarowny bulion jako bazę, pokazuje [technika rosołu](/pl/blog/jak-ugotowac-rosol).",
    techniqueDe:
      "Die Gerste zunächst abspülen und kurz mitrösten, dann ruhig köcheln lassen, denn zu starkes Sprudeln macht den Topf trüb und gart die Körner ungleichmäßig. Fleisch und spätere Zutaten so timen, dass nichts zerkocht, während die Gerste selbst gerne etwas länger ziehen darf. Ein teilweises Pürieren ist möglich, aber selten nötig, denn Krupnik soll Biss haben und nicht zu Babybrei werden wie eine dicke [Grochówka](/de/rezepte/grochowka). Salz gestaffelt zugeben und mit Säure sparsam bleiben, denn diese Suppe lebt von der Wärme des Getreides und nicht von einem Waldpilzaroma wie die [Zupa grzybowa](/de/rezepte/zupa-grzybowa). Für die Klarheit der Brühe lohnt sich ein Blick in die [Rosół-Technik](/de/blog/rosol-technik).",
    techniquePl:
      "Kaszę najpierw przepłucz i krótko podsmaż, a potem gotuj spokojnie, bo mocne bulgotanie mąci zupę i nierówno gotuje ziarna. Mięso i późniejsze dodatki dodawaj w takim momencie, żeby nic się nie rozgotowało, a sama kasza spokojnie może pociągnąć dłużej. Częściowe zblendowanie jest możliwe, ale rzadko potrzebne, bo krupnik ma mieć wyczuwalne ziarna, a nie zamieniać się w papkę jak gęsta [grochówka](/pl/rezepte/grochowka). Sól dodawaj etapami, a z kwasem obchodź się oszczędnie, bo ta zupa żyje ciepłem zboża, a nie aromatem leśnych grzybów jak [zupa grzybowa](/pl/rezepte/zupa-grzybowa). Klarowność bulionu opisuje bliżej [technika rosołu](/pl/blog/jak-ugotowac-rosol).",
    serveDe:
      "Serviere Krupnik heiß mit reichlich Dill und frischem Brot dazu, als sättigender Starter oder als ganzes Mittagessen im Alltag, so wie es auch beim [polnischen Sonntagsessen](/de/blog/sonntagsessen-polnisch) üblich ist. Wer lieber Erbsen mag, findet sein Gericht bei der [Grochówka](/de/rezepte/grochowka), wer eine klare Festtagsbrühe sucht, bei [Rosół](/de/rezepte/rosol). Einen Überblick über die ganze Suppenfamilie liefert der Beitrag zu [polnischen Suppen](/de/blog/polnische-suppen), gute Zutaten dafür findest du im [Polenladen](/de/blog/polenladen-einkaufen).",
    servePl:
      "Podawaj krupnik gorący, z dużą ilością koperku i świeżym chlebem obok, jako sycącą przystawkę albo cały obiad na co dzień, podobnie jak przy [obiedzie niedzielnym](/pl/blog/obiad-niedzielny). Kto woli groch, znajdzie swoje danie w [grochówce](/pl/rezepte/grochowka), a kto szuka klarownego wywaru świątecznego, w [rosole](/pl/rezepte/rosol). Przegląd całej rodziny zup daje artykuł o [polskich zupach](/pl/blog/polskie-zupy), a dobre składniki znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
    diasporaDe:
      "Krupnik passt gut in den Alltag der Diaspora, weil ein Topf reicht: Gerste aus dem Vorrat, Gemüse aus dem Supermarkt, fertig. Du kannst gut für zwei Tage vorkochen, solltest beim Aufwärmen aber etwas Brühe nachgießen, weil die Gerste weiter Flüssigkeit zieht. Kinder dürfen die Gerste abmessen und Gemüse waschen, am heißen Topf übernehmen Erwachsene. Guten Vorrat an Gerste findest du im [Polenladen](/de/blog/polenladen-einkaufen), während die Kultur rund um den Sonntagstisch im [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch) beschrieben ist.",
    diasporaPl:
      "Krupnik dobrze wpisuje się w codzienność diaspory, bo wystarczy jeden garnek: kasza ze spiżarni, warzywa z marketu i gotowe. Można spokojnie ugotować zapas na dwa dni, tylko przy odgrzewaniu warto dolać trochę bulionu, bo kasza dalej wchłania płyn. Dzieci mogą odmierzyć kaszę i umyć warzywa, przy gorącym garnku pomagają dorośli. Dobry zapas kaszy znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), a o kulturze niedzielnego stołu opowiada [obiad niedzielny](/pl/blog/obiad-niedzielny).",
    mistakesDe:
      "Krupnik wird gelegentlich mit der Erbsensuppe [Grochówka](/de/rezepte/grochowka) oder der Pilzsuppe [Zupa grzybowa](/de/rezepte/zupa-grzybowa) verwechselt, dabei ist die Gerste der eigentliche Charakterträger. Zu starkes Pürieren macht aus der Suppe Brei, und ungewaschene Gerste trübt den Topf unnötig. Auch zu frühes Zugeben von bereits gegartem Fleisch lässt es beim Nachkochen austrocknen, deshalb kommt es besser erst gegen Ende in den Topf.",
    mistakesPl:
      "Krupnik bywa mylony z grochową [grochówką](/pl/rezepte/grochowka) albo z [zupą grzybową](/pl/rezepte/zupa-grzybowa), a przecież to kasza jęczmienna nadaje mu charakter. Zbyt mocne blendowanie zamienia zupę w papkę, a nieprzepłukana kasza niepotrzebnie mąci wywar. Zbyt wczesne dodanie już ugotowanego mięsa sprawia, że podczas dalszego gotowania wysycha, dlatego lepiej wrzucić je dopiero pod koniec.",
    variantsDe:
      "Mit mehr Hühnerfleisch wird Krupnik deutlich sättigender, in der vegetarischen Version bleibt das Fleisch ganz weg und wird im Titel ehrlich benannt. Getrocknete Pilze dürfen als leiser Unterton mitkochen, sollten die Suppe aber nicht zur [Zupa grzybowa](/de/rezepte/zupa-grzybowa) machen, denn der Fokus bleibt bei der Gerste. Passende Suppen-Nachbarn sind die [Grochówka](/de/rezepte/grochowka), der [Kapuśniak](/de/rezepte/kapusniak) und der [Rosół](/de/rezepte/rosol), einen Überblick über alle gibt der Beitrag zu [polnischen Suppen](/de/blog/polnische-suppen), und für den Sonntagstisch passt der [Sonntagsessen-Guide](/de/blog/sonntagsessen-polnisch).",
    variantsPl:
      "Z większą ilością kurczaka krupnik robi się dużo bardziej sycący, a w wersji wegetariańskiej mięso po prostu znika i jest to uczciwie napisane w tytule. Suszone grzyby mogą dorzucić cichy podton, ale nie powinny zamieniać zupy w [zupę grzybową](/pl/rezepte/zupa-grzybowa), bo fokus zostaje przy kaszy. Pasującymi sąsiadami są [grochówka](/pl/rezepte/grochowka), [kapuśniak](/pl/rezepte/kapusniak) i [rosół](/pl/rezepte/rosol), ich przegląd znajdziesz w artykule o [polskich zupach](/pl/blog/polskie-zupy), a do niedzielnego stołu pasuje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
  },

  "recipe-szczawiowa": {
    dishDe: "Zupa szczawiowa",
    dishPl: "Zupa szczawiowa",
    vibeDe: "grün, säuerlich frisch, nach Sauerampfer und Dill, Frühling und früher Sommer",
    vibePl: "zielona, kwaskowato świeża, od szczawiu i koperku, wiosna i wczesne lato",
    originDe:
      "Szczaw wächst praktisch auf der ganzen Nordhalbkugel und war schon im alten Ägypten und Rom als saures Blattgemüse bekannt, ehe die Pflanze im Mittelalter auch nach Polen kam. Der saure Geschmack gab ihr in vielen Sprachen ihren Namen: Im Althochdeutschen hieß Sauerampfer schlicht „suri“, im Altfranzösischen „surele“, beides bedeutet einfach sauer. In Polen wurde daraus schnell die Szczawiówka, eine kwaskowa Suppe, die bis heute vor allem im Frühling und Frühsommer gekocht wird, wenn frische Blätter verfügbar sind. Weil sich Sauerampfer kaum lagern lässt, bleibt Zupa szczawiowa ein echtes Saisongericht, anders als die junge Rote-Bete-Suppe [Botwinka](/de/rezepte/botwinka), die Kiszone-Gurkensuppe [Ogórkowa](/de/rezepte/ogorkowa) oder der kalte, oft rosa [Chłodnik](/de/rezepte/chlodnik-litewski). Einen Überblick über die ganze Suppenfamilie gibt [polnische Suppen](/de/blog/polnische-suppen).",
    originPl:
      "Szczaw rośnie właściwie na całej półkuli północnej i był znany jako kwaśne warzywo liściaste już w starożytnym Egipcie i Rzymie, zanim w średniowieczu trafił także do Polski. Kwaśny smak dał mu nazwę w wielu językach: w staroniemieckim kwaśny liść nazywano „suri”, w starofrancuskim „surele”, oba słowa znaczą po prostu kwaśny. W Polsce szybko powstała z tego szczawiówka, czyli kwaskowa zupa, którą do dziś gotuje się głównie wiosną i wczesnym latem, gdy dostępne są świeże liście. Ponieważ szczaw trudno przechowywać, zupa szczawiowa pozostaje prawdziwym daniem sezonowym, inaczej niż ciepła [botwinka](/pl/rezepte/botwinka) z młodej buraczanej łodygi, kiszona [ogórkowa](/pl/rezepte/ogorkowa) czy zimny, często różowy [chłodnik](/pl/rezepte/chlodnik-litewski). Przegląd całej rodziny zup daje artykuł o [polskich zupach](/pl/blog/polskie-zupy).",
    shopDe:
      "Frischen Sauerampfer bekommst du in Deutschland saisonal auf dem Markt, im eigenen Garten oder im [Polenladen](/de/blog/polenladen-einkaufen), gefrorene Ware solltest du ehrlich als solche benennen laut den [Ersatzprodukten](/de/blog/ersatzprodukte-de). Dazu kommen Kartoffeln, Eier und Dill aus dem Supermarkt sowie Śmietana, deren Handhabung der [Śmietana-Guide](/de/blog/smietana-schmand) erklärt. Junge Rote-Bete-Blätter sind kein stiller Ersatz, sonst landest du bei der [Botwinka](/de/rezepte/botwinka), und ein Glas Gurken oder ein Becher Kefir gehören ebenfalls nicht in diesen Topf, sonst wird daraus [Ogórkowa](/de/rezepte/ogorkowa) oder [Chłodnik](/de/rezepte/chlodnik-litewski).",
    shopPl:
      "Świeży szczaw w Niemczech kupisz sezonowo na targu, we własnym ogrodzie albo w [sklepie polskim](/pl/blog/sklep-polski-zakupy), a mrożony warto uczciwie nazwać mrożonym zgodnie z [zamiennikami składników](/pl/blog/zamienniki-skladnikow). Do tego ziemniaki, jajka i koperek z marketu oraz śmietana, o której obchodzeniu się opowiada [przewodnik po śmietanie](/pl/blog/smietana-czy-schmand). Młoda botwina nie jest cichym zamiennikiem, bo wtedy wychodzi [botwinka](/pl/rezepte/botwinka), a słoik ogórków czy szklanka kefiru też nie pasują do tego garnka, bo z nich powstaje [ogórkowa](/pl/rezepte/ogorkowa) albo [chłodnik](/pl/rezepte/chlodnik-litewski).",
    techniqueDe:
      "Die Kartoffelbasis zuerst weich kochen und den Sauerampfer erst spät und nur kurz mitköcheln lassen, denn lange Hitze macht ihn olivgrün und bitter. Die Śmietana immer temperieren, niemals direkt in den kochenden Topf geben, sonst gerinnt sie. Das Ei separat hart kochen und erst im Teller dazugeben, damit es nicht zerfällt. Beim Abschmecken reichen Salz, etwas Pfeffer und Dill, Zucker braucht diese Suppe fast nie. Sie hat weder die Kiszone-Note der [Ogórkowa](/de/rezepte/ogorkowa) noch die Kühle des [Chłodnik](/de/rezepte/chlodnik-litewski), und ihr Bete-Nachbar bleibt die [Botwinka](/de/rezepte/botwinka).",
    techniquePl:
      "Bazę ziemniaczaną ugotuj najpierw do miękkości, a szczaw dodaj późno i gotuj tylko krótko, bo długi ogień robi go oliwkowym i gorzkim. Śmietanę zawsze zahartuj, nigdy nie wlewaj jej wprost do wrzącego garnka, bo się zważy. Jajko ugotuj osobno na twardo i dodaj dopiero na talerzu, żeby się nie rozpadło. Do smaku wystarczy sól, odrobina pieprzu i koperek, cukier prawie nigdy nie jest tu potrzebny. Ta zupa nie ma ani kiszonej nuty [ogórkowej](/pl/rezepte/ogorkowa), ani chłodu [chłodnika](/pl/rezepte/chlodnik-litewski), a jej buraczana sąsiadka to [botwinka](/pl/rezepte/botwinka).",
    serveDe:
      "Serviere die Suppe heiß und grün, mit Ei und Dill, als typischen Frühlings- und Frühsommerteller, dazu passt frisches Brot. Wer lieber junge Bete mit Blättern mag, findet sein Gericht bei der [Botwinka](/de/rezepte/botwinka), wer Gurkensäure sucht, bei der [Ogórkowa](/de/rezepte/ogorkowa), und wer es kalt und oft rosa mag, beim [Chłodnik](/de/rezepte/chlodnik-litewski). Den Überblick über die ganze Landschaft gibt [polnische Suppen](/de/blog/polnische-suppen), zum Milchprodukt selbst mehr im [Śmietana-Guide](/de/blog/smietana-schmand).",
    servePl:
      "Podawaj zupę gorącą i zieloną, z jajkiem i koperkiem, jako typowy talerz na wiosnę i wczesne lato, z chlebem obok. Kto woli młode buraki z botwiną, znajdzie swoje danie w [botwince](/pl/rezepte/botwinka), kto szuka kwasu ogórkowego, w [ogórkowej](/pl/rezepte/ogorkowa), a kto lubi na zimno i często na różowo, w [chłodniku](/pl/rezepte/chlodnik-litewski). Przegląd całej rodziny daje artykuł o [polskich zupach](/pl/blog/polskie-zupy), a o samej śmietanie więcej mówi [przewodnik po śmietanie](/pl/blog/smietana-czy-schmand).",
    diasporaDe:
      "In Deutschland ist frischer Sauerampfer oft das Nadelöhr: Wer ihn findet, kocht sofort, wer nicht, wartet auf die nächste Saison oder greift ehrlich zur gefrorenen Variante. Am besten kochst du die Suppe für den gleichen Tag, damit die Farbe frisch bleibt. Kinder dürfen die Eier schälen, am heißen Topf und mit scharfen Messern übernehmen Erwachsene. Einkaufshilfen liefern die [Ersatzprodukte](/de/blog/ersatzprodukte-de) und der [Polenladen](/de/blog/polenladen-einkaufen), einen Überblick über die ganze Suppenfamilie gibt [polnische Suppen](/de/blog/polnische-suppen).",
    diasporaPl:
      "W Niemczech świeży szczaw bywa wąskim gardłem: kto go znajdzie, gotuje od razu, kto nie, czeka na sezon albo uczciwie sięga po mrożonkę. Najlepiej ugotować zupę tego samego dnia, żeby kolor został świeży. Dzieci mogą obierać jajka, przy gorącym garnku i ostrych nożach pomagają dorośli. Wskazówki zakupowe dają [zamienniki składników](/pl/blog/zamienniki-skladnikow) i [sklep polski](/pl/blog/sklep-polski-zakupy), a przegląd całej rodziny zup daje artykuł o [polskich zupach](/pl/blog/polskie-zupy).",
    mistakesDe:
      "Zupa szczawiowa wird gelegentlich mit der [Botwinka](/de/rezepte/botwinka), der [Ogórkowa](/de/rezepte/ogorkowa) oder dem kalten [Chłodnik](/de/rezepte/chlodnik-litewski) verwechselt, dabei hat jede dieser Suppen einen ganz eigenen Charakter. Wird der Sauerampfer zu lange gekocht, kippt die Farbe ins Olivgrüne und der Geschmack wird bitter. Kommt die Śmietana kochend in den Topf, gerinnt sie und die Suppe wirkt körnig statt cremig.",
    mistakesPl:
      "Zupę szczawiową łatwo pomylić z [botwinką](/pl/rezepte/botwinka), [ogórkową](/pl/rezepte/ogorkowa) czy zimnym [chłodnikiem](/pl/rezepte/chlodnik-litewski), a przecież każda z tych zup ma zupełnie inny charakter. Zbyt długo gotowany szczaw robi się oliwkowy i gorzki. Śmietana wlana do wrzątku się zważy i zupa wyjdzie grudkowata zamiast kremowa.",
    variantsDe:
      "Mit mehr Dill schmeckt die Suppe frischer, mit weniger Śmietana wird sie deutlich säuerlicher, und auf Gemüsebrühe gekocht wird sie vegetarisch. Passende Suppen-Nachbarn sind die [Botwinka](/de/rezepte/botwinka), die [Ogórkowa](/de/rezepte/ogorkowa) und der [Chłodnik](/de/rezepte/chlodnik-litewski), einen Überblick gibt [polnische Suppen](/de/blog/polnische-suppen). Zur Śmietana selbst mehr im [Śmietana-Guide](/de/blog/smietana-schmand), Einkaufstipps liefern die [Ersatzprodukte](/de/blog/ersatzprodukte-de).",
    variantsPl:
      "Z większą ilością koperku zupa smakuje świeżej, z mniejszą ilością śmietany robi się wyraźnie bardziej kwaskowa, a ugotowana na warzywnym bulionie staje się wegetariańska. Pasującymi sąsiadami są [botwinka](/pl/rezepte/botwinka), [ogórkowa](/pl/rezepte/ogorkowa) i [chłodnik](/pl/rezepte/chlodnik-litewski), ich przegląd daje artykuł o [polskich zupach](/pl/blog/polskie-zupy). O samej śmietanie więcej w [przewodniku po śmietanie](/pl/blog/smietana-czy-schmand), a wskazówki zakupowe dają [zamienniki składników](/pl/blog/zamienniki-skladnikow).",
  },
};
