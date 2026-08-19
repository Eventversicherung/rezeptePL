import type { Recipe } from "@/types/content";

/**
 * Wave 11 Paket D — +3 Rezepte (ownership-safe Diaspora-/Wigilia-Lücken).
 * - recipe-ryba-po-grecku — Fisch griechische Art (Gemüse-Sauce) ≠ Karp
 * - recipe-golonka — geschmorte/gebratene Haxe ≠ Schabowy / Schab / Żeberka
 * - recipe-kompot-z-suszu — Trockenobstkompot (Getränk) ≠ Wigilia-Pillar-Steal
 *
 * Integrator (E): merge into seed aggregator + recipe-articles + related maps.
 * Affiliate: guide-only (no relatedProductIds).
 * NO SEED_VERSION bump here. No commit/push.
 */
export const seedRecipesWave11D: Recipe[] = [
  {
    id: "recipe-ryba-po-grecku",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-ryba-po-grecku/ca6be591-ccd8-433d-871e-8ff1420926af.webp",
    prepMinutes: 35,
    cookMinutes: 45,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-wigilia",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Ryba po grecku",
        slug: "ryba-po-grecku",
        excerpt:
          "Gebratener Weißfisch unter einer würzig-süßen Gemüsesauce aus Karotte, Zwiebel und Tomate, kalt oder lauwarm serviert als Klassiker der Wigilia und des Buffets.",
        steps: [
          {
            text: "Weißfischfilets wie Kabeljau oder Seelachs trockentupfen, salzen und pfeffern. Leicht in Mehl wenden und in heißem Öl von beiden Seiten goldbraun braten, dann auf Küchenpapier abtropfen lassen und in eine flache Auflaufform legen.",
            tip: "Diese Filet-Sauce-Version ist ein anderes Gericht als der ganze Ofenkarpfen im Rezept für [Karp](/de/rezepte/karp). Den Platz im Menü zeigt der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan).",
          },
          {
            text: "Für die Sauce Karotten und Petersilienwurzel in feine Streifen schneiden oder grob raspeln und die Zwiebeln in Halbringe schneiden. Alles in Öl weich dünsten, bis das Gemüse süß und glasig wird, ohne dabei zu rösten oder bitter zu werden.",
            tip: "Wurzelgemüse und Tomatenmark bekommst du oft frischer im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt eine Zutat, findest du im Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) einen ehrlichen Ersatz.",
          },
          {
            text: "Tomatenmark einrühren und mit etwas Wasser oder Brühe verdünnen, dabei Lorbeer und optional eine Gewürznelke zugeben. Die Sauce 10 bis 15 Minuten köcheln lassen, bis sie dick und bindig ist, dann mit Salz, Pfeffer, einer Prise Zucker und Zitronensaft süß-säuerlich abschmecken.",
            tip: "Die Säure macht den Unterschied: Ohne Zitronensaft schmeckt die Sauce schnell nur süß und flach, mit zu viel davon kippt sie sauer. Lieber in kleinen Schritten abschmecken.",
          },
          {
            text: "Die heiße Sauce über den Fisch geben, sodass die Filets vollständig bedeckt sind. Abkühlen lassen und dann am besten mehrere Stunden oder über Nacht im Kühlschrank durchziehen lassen.",
            tip: "Kalt servieren ist bei diesem Gericht die klassische Variante. Wer lieber einen warmen Fischgang möchte, ist beim [Karp](/de/rezepte/karp) besser aufgehoben, denn das ist ein eigenständiges Rezept.",
          },
          {
            text: "Mit Zitronenscheiben und Dill oder Petersilie servieren, als Vorspeise, Buffetstück oder Wigilia-Fischgang neben Barszcz und Pierogi.",
            tip: "Am zweiten Tag schmeckt das Gericht oft noch runder, weil sich Fisch und Sauce weiter verbinden. Im Kühlschrank hält es sich gut zwei bis drei Tage.",
          },
        ],
        seoTitle: "Ryba po grecku Rezept | Fisch griechische Art | Alemniam",
        seoDescription:
          "Ryba po grecku: Weißfisch mit Karotten-Zwiebel-Tomatensauce, bilingual, Wigilia-tauglich und klar getrennt vom Karpfen-Rezept.",
      },
      pl: {
        title: "Ryba po grecku",
        slug: "ryba-po-grecku",
        excerpt:
          "Smażony biały filet pod warzywnym, słodko-kwaśnym sosem z marchewki, cebuli i pomidora, podawany na zimno lub letnio jako danie wigilijne i bufetowe.",
        steps: [
          {
            text: "Filety białej ryby, na przykład dorsza lub mintaja, osusz papierowym ręcznikiem, posól i popieprz. Lekko obtocz w mące i usmaż na złoto z obu stron na gorącym oleju, odsącz na papierowym ręczniku i ułóż w płaskim naczyniu żaroodpornym.",
            tip: "Ta wersja z filetem i sosem to zupełnie inne danie niż cały karp z pieca w przepisie na [karpia](/pl/rezepte/karp). Miejsce w menu pokazuje [menu wigilijne](/pl/blog/menu-wigilijne).",
          },
          {
            text: "Do sosu pokrój marchew i pietruszkę korzeniową w drobne paski albo zetrzyj na tarce, a cebulę pokrój w półplasterki. Wszystko duś na oleju do miękkości, aż warzywa zrobią się słodkie i szkliste, uważając, żeby się nie przypaliły i nie zgorzkniały.",
            tip: "Warzywa korzeniowe i koncentrat pomidorowy często kupisz świeższe w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Gdy czegoś brakuje, uczciwy zamiennik znajdziesz w [zamiennikach składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Dodaj koncentrat pomidorowy i rozcieńcz go odrobiną wody lub bulionu, wrzucając liść laurowy i opcjonalnie goździk. Gotuj sos 10 do 15 minut, aż zgęstnieje, a na koniec dopraw solą, pieprzem, szczyptą cukru i sokiem z cytryny, żeby wyszedł słodko-kwaśny.",
            tip: "To właśnie kwas z cytryny robi różnicę: bez niego sos smakuje płasko i tylko słodko, a z nadmiarem zrobi się zbyt kwaśny. Lepiej dodawać go stopniowo i próbować.",
          },
          {
            text: "Gorący sos wylej na rybę tak, żeby filety były całkowicie przykryte. Ostudź, a najlepiej odstaw na kilka godzin albo na całą noc do lodówki, żeby smaki się przegryzły.",
            tip: "Podawanie na zimno to klasyczna wersja tego dania. Kto woli ciepłą rybę wigilijną, powinien sięgnąć po [karpia](/pl/rezepte/karp), bo to osobny przepis.",
          },
          {
            text: "Podawaj z plasterkami cytryny i koperkiem lub natką pietruszki, jako przystawkę, danie bufetowe albo rybę wigilijną obok barszczu i pierogów.",
            tip: "Drugiego dnia smak często robi się jeszcze pełniejszy, bo ryba i sos dalej się przegryzają. W lodówce danie wytrzyma spokojnie dwa do trzech dni.",
          },
        ],
        seoTitle: "Ryba po grecku przepis | Ryba z warzywami | Alemniam",
        seoDescription:
          "Ryba po grecku: biała ryba z sosem marchewkowo-cebulowo-pomidorowym, dwujęzycznie, na Wigilię i jasno osobno od karpia.",
      },
    },
    ingredients: [
      {
        id: "rpg-1",
        name: {
          de: "Weißfischfilets (Kabeljau, Seelachs o. ä.)",
          pl: "Filety białej ryby (dorsz, mintaj itp.)",
        },
        amount: 700,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Frischtheke oder Tiefkühltruhe, vorher auf Gräten prüfen",
      },
      {
        id: "rpg-2",
        name: { de: "Karotten", pl: "Marchew" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "rpg-3",
        name: {
          de: "Petersilienwurzel oder Sellerie",
          pl: "Pietruszka korzeniowa lub seler",
        },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "produce",
        storeHintDe: "Polenladen / Gemüseabteilung",
        substitute: {
          de: "Mehr Karotte und eine Selleriestange, dann aber ehrlich als Variante benennen",
          pl: "Więcej marchewki i łodyga selera, ale trzeba uczciwie nazwać to wariantem",
        },
      },
      {
        id: "rpg-4",
        name: { de: "Zwiebeln", pl: "Cebule" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "rpg-5",
        name: { de: "Tomatenmark", pl: "Koncentrat pomidorowy" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "rpg-6",
        name: { de: "Mehl zum Panieren", pl: "Mąka do obtoczenia" },
        amount: 4,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "rpg-7",
        name: { de: "Öl zum Braten und Dünsten", pl: "Olej do smażenia i duszenia" },
        amount: 6,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "rpg-8",
        name: {
          de: "Zitrone, Salz, Pfeffer, Prise Zucker",
          pl: "Cytryna, sól, pieprz, szczypta cukru",
        },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
      {
        id: "rpg-9",
        name: {
          de: "Lorbeerblatt (optional)",
          pl: "Liść laurowy (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
    ],
    createdAt: "2026-07-21T00:00:00.000Z",
    updatedAt: "2026-07-21T00:00:00.000Z",
  },
  {
    id: "recipe-golonka",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-golonka/619daf3f-4788-4842-986a-3631ef928027.webp",
    prepMinutes: 30,
    cookMinutes: 180,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-schmoren"],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-majeranek",
      "post-polenladen",
      "post-dutch-oven",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Golonka",
        slug: "golonka",
        excerpt:
          "Schweinshaxe langsam geschmort, bis das Fleisch gabelweich vom Knochen fällt, mit knuspriger Haut optional aus dem Ofen als deftiges Sonntagsfleisch.",
        steps: [
          {
            text: "Die Haxe abspülen, trockentupfen und großzügig mit Salz, Pfeffer und Majoran einreiben. Am besten über Nacht abgedeckt im Kühlschrank ziehen lassen, damit die Gewürze einziehen.",
            tip: "Mit Majoran lieber sparsam würzen, im [Majeranek-Lexikon](/de/blog/majeranek) steht, wie viel wirklich nötig ist. Das ist ein ganz anderes Gericht als die panierte [Schabowy](/de/rezepte/kotlet-schabowy).",
          },
          {
            text: "Die Haxe in einem schweren Topf oder [Schmortopf](/de/blog/dutch-oven-kaufberatung) von allen Seiten scharf anbraten. Zwiebeln, Möhre, Lorbeer und etwas Knoblauch mit anrösten, dann mit Brühe oder Wasser ablöschen, bis die Haxe etwa zu zwei Dritteln in der Flüssigkeit steht.",
            tip: "Ein schwerer Topf mit dickem Boden hält die Hitze gleichmäßig und verhindert, dass am Boden etwas anbrennt, während die Haxe stundenlang köchelt.",
          },
          {
            text: "Zugedeckt 2,5 bis 3 Stunden bei niedriger Hitze schmoren, alternativ im Ofen bei etwa 160 Grad, bis sich das Fleisch leicht vom Knochen löst. Zwischendurch die Flüssigkeit kontrollieren und bei Bedarf etwas Brühe nachgießen, damit nichts austrocknet.",
            tip: "Wer statt Haxe einen Braten ohne Knochen möchte, findet das bei [Schab pieczony](/de/rezepte/schab-pieczony), und wer lieber Rippen mag, bei [Żeberka](/de/rezepte/zeberka). Den Platz im Menü zeigt der Guide zum [Sonntagsessen](/de/blog/sonntagsessen-polnisch).",
          },
          {
            text: "Für knusprige Haut die Haxe aus der Flüssigkeit heben und bei 220 Grad noch 15 bis 25 Minuten im Ofen nachbräunen. In der Zwischenzeit den Fond abseihen, abschmecken und bei Bedarf leicht binden.",
            tip: "Die Haut wird nur richtig knusprig, wenn sie am Ende trocken ist und hohe Hitze bekommt. Vorher mit Küchenpapier abtupfen hilft dabei.",
          },
          {
            text: "Mit Senf, Meerrettich, Sauerkraut oder Kartoffeln servieren. Reste schmecken am nächsten Tag in der Soße aufgewärmt oft noch runder, weil sich die Aromen weiter verbinden.",
            tip: "Fleisch und Gewürze für Knochenfleisch findest du oft günstiger im [Polenladen](/de/blog/polenladen-einkaufen).",
          },
        ],
        seoTitle: "Golonka Rezept | Schweinshaxe polnisch | Alemniam",
        seoDescription:
          "Golonka: geschmorte Schweinshaxe mit Majoran, bilingualer Sonntagsbraten, klar unterschieden von Schabowy, Schab pieczony und Żeberka.",
      },
      pl: {
        title: "Golonka",
        slug: "golonka",
        excerpt:
          "Golonka wieprzowa długo duszona, aż mięso odchodzi od kości, ze skórką chrupiącą opcjonalnie z pieca jako treściwe mięso na niedzielny obiad.",
        steps: [
          {
            text: "Golonkę opłucz, osusz papierowym ręcznikiem i natrzyj obficie solą, pieprzem i majerankiem. Najlepiej odstaw na noc pod przykryciem do lodówki, żeby przyprawy dobrze się wchłonęły.",
            tip: "Majeranku lepiej użyć oszczędnie, w [leksykonie majeranku](/pl/blog/majeranek-leksykon) znajdziesz właściwe proporcje. To zupełnie inne danie niż panierowany [schabowy](/pl/rezepte/kotlet-schabowy).",
          },
          {
            text: "Golonkę obsmaż ze wszystkich stron na mocnym ogniu w ciężkim garnku lub [garnku do duszenia](/pl/blog/garnek-do-duszenia). Dodaj cebulę, marchew, liść laurowy i trochę czosnku, podsmaż razem, a potem zalej bulionem lub wodą, tak żeby golonka była zanurzona mniej więcej w dwóch trzecich.",
            tip: "Ciężki garnek z grubym dnem trzyma równomierne ciepło i zapobiega przypaleniu podczas wielogodzinnego duszenia.",
          },
          {
            text: "Duś pod przykryciem 2,5 do 3 godzin na małym ogniu, ewentualnie w piekarniku w temperaturze około 160 stopni, aż mięso zacznie łatwo odchodzić od kości. Co jakiś czas sprawdzaj poziom płynu i w razie potrzeby dolej trochę bulionu, żeby nic nie wyschło.",
            tip: "Kto zamiast golonki chce pieczeń bez kości, znajdzie ją w przepisie na [schab pieczony](/pl/rezepte/schab-pieczony), a miłośnicy żeberek w przepisie na [żeberka](/pl/rezepte/zeberka). Miejsce w menu pokazuje [obiad niedzielny](/pl/blog/obiad-niedzielny).",
          },
          {
            text: "Jeśli zależy ci na chrupiącej skórce, wyjmij golonkę z płynu i zapiecz jeszcze w piekarniku w 220 stopniach przez 15 do 25 minut. W tym czasie przecedź sos, dopraw go i w razie potrzeby lekko zagęść.",
            tip: "Skórka zrobi się naprawdę chrupiąca tylko wtedy, gdy będzie sucha i trafi na wysoką temperaturę, więc warto ją wcześniej osuszyć papierowym ręcznikiem.",
          },
          {
            text: "Podawaj z musztardą, chrzanem, kapustą kiszoną lub ziemniakami. Resztki odgrzane następnego dnia w sosie smakują często jeszcze lepiej, bo smaki mają czas się przegryźć.",
            tip: "Mięso na kości i przyprawy do golonki często taniej kupisz w [sklepie polskim](/pl/blog/sklep-polski-zakupy).",
          },
        ],
        seoTitle: "Golonka przepis | Golonka wieprzowa | Alemniam",
        seoDescription:
          "Golonka: duszona golonka z majerankiem, dwujęzyczny obiad niedzielny, jasno odróżniona od schabowego, schabu pieczonego i żeberek.",
      },
    },
    ingredients: [
      {
        id: "gol-1",
        name: {
          de: "Schweinshaxe(n), mit Haut",
          pl: "Golonka wieprzowa ze skórą",
        },
        amount: 1.5,
        unit: { de: "kg", pl: "kg" },
        group: "other",
        storeHintDe: "Metzger oder Polenladen, hintere Haxe bevorzugen",
      },
      {
        id: "gol-2",
        name: { de: "Zwiebeln", pl: "Cebule" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gol-3",
        name: { de: "Karotte", pl: "Marchew" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gol-4",
        name: { de: "Knoblauchzehen", pl: "Ząbki czosnku" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gol-5",
        name: { de: "Fleischbrühe oder Wasser", pl: "Bulion lub woda" },
        amount: 1,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "gol-6",
        name: { de: "Majoran", pl: "Majeranek" },
        amount: 2,
        unit: { de: "TL", pl: "łyżeczki" },
        group: "spices",
        storeHintDe: "Polenladen, siehe Majeranek-Lexikon",
      },
      {
        id: "gol-7",
        name: { de: "Lorbeerblätter", pl: "Liście laurowe" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "gol-8",
        name: { de: "Öl oder Schmalz zum Anbraten", pl: "Olej lub smalec" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "gol-9",
        name: { de: "Salz, Pfeffer", pl: "Sól, pieprz" },
        amount: 1,
        unit: { de: "nach Geschmack", pl: "do smaku" },
        group: "spices",
      },
      {
        id: "gol-10",
        name: {
          de: "Senf / Meerrettich zum Servieren",
          pl: "Musztarda / chrzan do podania",
        },
        amount: 1,
        unit: { de: "nach Bedarf", pl: "według uznania" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-21T00:05:00.000Z",
    updatedAt: "2026-07-21T00:05:00.000Z",
  },
  {
    id: "recipe-kompot-z-suszu",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kompot-z-suszu/13a705e3-541c-4681-9b6d-a4e18a1451a0.webp",
    prepMinutes: 15,
    cookMinutes: 45,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: [],
    categoryIds: ["category-suess", "category-vegetarisch", "category-schnell"],
    relatedPostIds: [
      "post-wigilia",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Kompot z suszu",
        slug: "kompot-z-suszu",
        excerpt:
          "Dunkler Trockenobstkompot aus Pflaume, Apfel, Birne und Aprikose, der als Getränk und fruchtiger Ausklang zur Wigilia gehört.",
        steps: [
          {
            text: "Das Trockenobst, also Pflaumen, Äpfel, Birnen, Aprikosen und optional Rosinen, kurz abspülen und in einen großen Topf mit 2 bis 2,5 Litern kaltem Wasser geben. Sind die Früchte sehr hart, vorher etwa 30 Minuten einweichen lassen.",
            tip: "Eine fertige Mischung gibt es oft im [Polenladen](/de/blog/polenladen-einkaufen). Fehlt eine bestimmte Sorte, hilft der Beitrag zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) mit einer ehrlichen Alternative.",
          },
          {
            text: "Mit Zimtstange, 2 bis 3 Gewürznelken und optional Orangenschale aufsetzen. Einmal aufkochen, dann 30 bis 40 Minuten bei kleiner Hitze köcheln, bis die Früchte weich und die Flüssigkeit aromatisch dunkel ist.",
            tip: "Wie der Kompot ins Wigilia-Menü passt, zeigt der [Wigilia-Speiseplan](/de/blog/wigilia-speiseplan), hier geht es nur um das Rezept für den Kompot selbst.",
          },
          {
            text: "Mit Zucker oder Honig abschmecken, dabei sparsam süßen, denn die Süße der Früchte soll den Geschmack tragen. Zum Schluss die Zimtstange und die Nelken herausnehmen.",
            tip: "Wer den Kompot lieber klar möchte, seiht die Flüssigkeit durch ein feines Sieb ab und hebt die Früchte für ein Frühstücksmüsli auf.",
          },
          {
            text: "Den Kompot abkühlen lassen und kalt oder lauwarm in einer Karaffe oder Schüssel servieren, entweder mit den Früchten oder abgeseiht als klares Getränk.",
            tip: "Am Wigilia-Tisch passt er gut neben Barszcz und dem Fischgang, egal ob das [Karp](/de/rezepte/karp) oder [Ryba po grecku](/de/rezepte/ryba-po-grecku) ist.",
          },
          {
            text: "Reste halten sich im Kühlschrank 2 bis 3 Tage und schmecken dabei oft noch runder. Am nächsten Morgen passt der Kompot gut zum Frühstück oder als Begleitung zu Makowiec.",
            tip: "Am besten in einem verschlossenen Gefäß im Kühlschrank aufbewahren, damit der Kompot keine fremden Gerüche annimmt.",
          },
        ],
        seoTitle: "Kompot z suszu Rezept | Trockenobstkompot | Alemniam",
        seoDescription:
          "Kompot z suszu: polnischer Trockenobstkompot für die Wigilia, bilingual mit Einkaufstipps in Deutschland und klarem Fokus auf das Getränk.",
      },
      pl: {
        title: "Kompot z suszu",
        slug: "kompot-z-suszu",
        excerpt:
          "Ciemny kompot z suszonych śliwek, jabłek, gruszek i moreli, który na Wigilii pełni rolę napoju i owocowego deseru.",
        steps: [
          {
            text: "Susz, czyli suszone śliwki, jabłka, gruszki, morele i opcjonalnie rodzynki, krótko opłucz i wsyp do dużego garnka z 2 do 2,5 litra zimnej wody. Jeśli owoce są bardzo twarde, namocz je wcześniej przez około 30 minut.",
            tip: "Gotową mieszankę suszu często znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Gdy brakuje jakiejś odmiany, uczciwy zamiennik podpowiada wpis o [zamiennikach składników](/pl/blog/zamienniki-skladnikow).",
          },
          {
            text: "Dodaj laskę cynamonu, 2 do 3 goździków i opcjonalnie skórkę pomarańczy. Zagotuj raz, a potem gotuj 30 do 40 minut na małym ogniu, aż owoce zmiękną, a płyn zrobi się aromatyczny i ciemny.",
            tip: "To, jak kompot wpisuje się w menu wigilijne, pokazuje [menu wigilijne](/pl/blog/menu-wigilijne), a tutaj chodzi wyłącznie o sam przepis na kompot.",
          },
          {
            text: "Dopraw cukrem lub miodem, ale oszczędnie, bo słodycz owoców powinna prowadzić smak. Na koniec wyjmij laskę cynamonu i goździki.",
            tip: "Kto woli klarowny kompot, może przecedzić płyn przez drobne sitko, a owoce zachować na przykład do porannej owsianki.",
          },
          {
            text: "Ostudź kompot i podawaj go zimny lub letni w karafce albo misce, z owocami w środku lub przecedzony jako czysty napój.",
            tip: "Przy stole wigilijnym dobrze komponuje się z barszczem i daniem rybnym, niezależnie od tego, czy to [karp](/pl/rezepte/karp) czy [ryba po grecku](/pl/rezepte/ryba-po-grecku).",
          },
          {
            text: "Resztki wytrzymają w lodówce 2 do 3 dni i często smakują wtedy jeszcze pełniej. Następnego ranka kompot pasuje do śniadania albo jako dodatek do makowca.",
            tip: "Najlepiej przechowywać go w zamkniętym naczyniu w lodówce, żeby nie nabrał obcych zapachów.",
          },
        ],
        seoTitle: "Kompot z suszu przepis | Kompot wigilijny | Alemniam",
        seoDescription:
          "Kompot z suszu: polski kompot z suszonych owoców na Wigilię, dwujęzycznie z poradami zakupowymi w Niemczech i wyraźnym skupieniem na napoju.",
      },
    },
    ingredients: [
      {
        id: "kzs-1",
        name: {
          de: "Gemischtes Trockenobst (Pflaume, Apfel, Birne, Aprikose)",
          pl: "Mieszanka suszu (śliwka, jabłko, gruszka, morela)",
        },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe:
          "Polenladen, fertige Wigilia-Mischung oder eigene Mischung zusammenstellen",
      },
      {
        id: "kzs-2",
        name: { de: "Wasser", pl: "Woda" },
        amount: 2.5,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "kzs-3",
        name: { de: "Zimtstange", pl: "Laska cynamonu" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "kzs-4",
        name: { de: "Gewürznelken", pl: "Goździki" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
      {
        id: "kzs-5",
        name: {
          de: "Zucker oder Honig",
          pl: "Cukier lub miód",
        },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "kzs-6",
        name: {
          de: "Orangenschale (optional, ungespritzt)",
          pl: "Skórka pomarańczy (opcjonalnie)",
        },
        amount: 1,
        unit: { de: "Streifen", pl: "pasek" },
        group: "produce",
      },
      {
        id: "kzs-7",
        name: {
          de: "Rosinen (optional)",
          pl: "Rodzynki (opcjonalnie)",
        },
        amount: 50,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-21T00:10:00.000Z",
    updatedAt: "2026-07-21T00:10:00.000Z",
  },
];
