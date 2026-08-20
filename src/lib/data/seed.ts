import type {
  CommunitySubmission,
  Profile,
  Recipe,
  SavedRecipe,
  ShoppingList,
} from "@/types/content";
import { seedClusters as expandedClusters } from "./seed-clusters";
import { seedBlogPosts } from "./seed-blog";
import {
  seedFamilies,
  seedFamilyVariantRecipes,
} from "./seed-families";
import { seedRecipesWave5 } from "./seed-recipes-wave5";
import { seedRecipesWave6 } from "./seed-recipes-wave6";
import { seedRecipesWave7 } from "./seed-recipes-wave7";
/** Wave 8 — A Beilagen + B Suppen + C Pączki + D Knedle */
import { seedRecipesWave8 } from "./seed-recipes-wave8";
/** Wave 9 — A Fleisch + B Beilage/Suppe + C Babka + D Kaszanka */
import { seedRecipesWave9 } from "./seed-recipes-wave9";
/** Wave 10 — A Flaki+Schab · B Piernik+Pomidorowa · C Family variants · D Makaron */
import { seedRecipesWave10 } from "./seed-recipes-wave10";
/** Wave 11 — A–C cover retrofit (in place) · D +3 recipes */
import { seedRecipesWave11 } from "./seed-recipes-wave11";
/** Wave 12 — A Suppen · B Wigilia-Pasta+Szarlotka · C Ostern+Buraczki · D Klopsy+Kładzione */
import { seedRecipesWave12 } from "./seed-recipes-wave12";
/** Wave 13 — A Suppen · B Kutia+Napoleonka · C Chałka+Pasztet · D Biała kiełbasa */
import { seedRecipesWave13 } from "./seed-recipes-wave13";
/** Wave 14 — A Bäckerei · B Ostern · C Placek+Zapiekanka · D Leczo */
import { seedRecipesWave14 } from "./seed-recipes-wave14";
/** Wave 15 — A Festfleisch · B Buffet · C Beilagen · D Suppe+Kisiel */
import { seedRecipesWave15 } from "./seed-recipes-wave15";
/** Wave 16 — A Surówka+De volaille · B Kasza+Tatar · C Pierniczki+Knedle · D Chrzan+Kurczak */
import { seedRecipesWave16 } from "./seed-recipes-wave16";
/** Wave 17 — Kiszonki & Marynaty (10 eingelegte Rezepte) */
import { seedRecipesWave17 } from "./seed-recipes-wave17";
/** Wave 17 — Ogórki małosolne family variants */
import { seedRecipesWave17Malosolne } from "./seed-recipes-wave17-malosolne";

export const seedClusters = expandedClusters;
export { seedFamilies, seedBlogPosts };

const baseRecipes: Recipe[] = [
  {
    id: "recipe-pierogi",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pierogi/ffa4f850-6746-4b55-8710-b19e03abf532.webp",
    prepMinutes: 45,
    cookMinutes: 20,
    servings: 4,
    familyId: "family-pierogi",
    variantLabel: { de: "Ruskie", pl: "ruskie" },
    variantImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-pierogi/ffa4f850-6746-4b55-8710-b19e03abf532.webp",
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-niedziela"],
    techniqueIds: ["technique-teig", "technique-freezer"],
    categoryIds: ["category-hauptgerichte", "category-vegetarisch"],
    relatedPostIds: [
      "post-pierogi-guide",
      "post-pierogi-formen",
      "post-teigmaschine",
      "post-freezer-meal-prep",
      "post-freezer-boxen",
      "post-pierogi-teig",
      "post-twarog",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Pierogi Ruskie",
        slug: "ruskie",
        excerpt:
          "Klassische Pierogi mit Kartoffel und Twaróg, weich in der Füllung und würzig in der Zwiebelbutter, die Ruskie-Variante der Familie, ganz anders als die stichfesten Pierogi leniwe oder die winzigen Wigilia-Täschchen Uszka.",
        steps: [
          {
            text: "Schäle die Kartoffeln, koche sie weich und stampfe sie noch heiß, damit später keine Klümpchen in der Füllung bleiben.",
            tip: "Lass die gestampften Kartoffeln kurz offen stehen, damit überschüssige Feuchtigkeit verdampft, sonst wird die Füllung zu weich.",
          },
          {
            text: "Zerdrücke den Twaróg mit einer Gabel und vermische ihn gründlich mit den Kartoffeln, der fein gewürfelten Zwiebel und Salz.",
            tip: "Brate die Zwiebel vor dem Mischen kurz goldbraun an, das nimmt ihr die Schärfe und gibt der Füllung mehr Tiefe.",
          },
          {
            text: "Knete aus Mehl, Ei, Wasser und Öl einen glatten Teig und lass ihn 20 Minuten unter einem Tuch ruhen.",
            tip: "Der Teig soll weich und elastisch sein, aber nicht an den Fingern kleben, notfalls löffelweise Mehl nachgeben.",
          },
          {
            text: "Stich runde Kreise aus dem ausgerollten Teig, fülle sie mit einem Löffel Masse und drücke die Ränder fest zu einer Halbmondform zusammen.",
            tip: "Drücke die Naht zuerst mit den Fingern und dann noch einmal mit einer Gabel zu, so öffnet sich beim Kochen kein Pierog.",
          },
          {
            text: "Gare die Pierogi in leicht kochendem Salzwasser, bis sie an die Oberfläche steigen, und serviere sie sofort mit brauner Butter und angeschwitzter Zwiebel.",
            tip: "Lass das Wasser nur sanft köcheln, bei zu starkem Kochen reißen die Nähte auf.",
          },
        ],
        seoTitle: "Pierogi Ruskie Rezept | Alemniam",
        seoDescription:
          "Pierogi Ruskie kochen und einkaufen. Bilingual mit DE-Ladenhinweisen.",
        article: `## Pierogi Ruskie, die Hausvariante

Kartoffeln, Twaróg und Zwiebel ergeben zusammen den Geschmack, den viele einfach „Zuhause“ nennen, ganz ohne Spektakel. Oben auf der Seite kannst du zur Fleischfüllung oder zu Kraut und Pilzen wechseln, dieselbe Familie, nur ein anderer Tag.

### Twaróg in DE

Lies den [Twaróg-Guide](/de/blog/twarog-deutschland) und lass den Quark gut abtropfen, bevor du ihn verarbeitest.

### Teig

Schritt für Schritt hilft [Pierogi-Teig](/de/blog/pierogi-teig), außerdem die [Teigmaschine](/de/blog/teigmaschine-pierogi) und die [Technik Teig](/de/techniken/teig).

### Geschwister

Oben wechseln zu Fleisch, Kraut & Pilze oder Heidelbeeren.`,
      },
      pl: {
        title: "Pierogi ruskie",
        slug: "ruskie",
        excerpt:
          "Klasyczne pierogi z ziemniakami i twarogiem, miękkie w farszu i aromatyczne z cebulką na maśle, wariant ruskie, zupełnie inny niż zwarte pierogi leniwe czy maleńkie wigilijne uszka.",
        steps: [
          {
            text: "Obierz ziemniaki, ugotuj je do miękkości i ugnieć jeszcze na gorąco, żeby w farszu nie zostały grudki.",
            tip: "Odstaw ugniecione ziemniaki na chwilę bez przykrycia, żeby odparowała nadmiarowa wilgoć, inaczej farsz będzie za wodnisty.",
          },
          {
            text: "Rozgnieć twaróg widelcem i dokładnie wymieszaj go z ziemniakami, drobno posiekaną cebulą i solą.",
            tip: "Podsmaż cebulę na złoto przed dodaniem do farszu, straci ostrość i doda mu głębi smaku.",
          },
          {
            text: "Zagnieć gładkie ciasto z mąki, jajka, wody i oleju i odstaw je na 20 minut pod ściereczką.",
            tip: "Ciasto ma być miękkie i elastyczne, ale nie lepić się do rąk, w razie potrzeby dosyp łyżkę mąki.",
          },
          {
            text: "Wykrawaj kółka z rozwałkowanego ciasta, nakładaj łyżkę farszu i szczelnie zlepiaj brzegi w kształt półksiężyca.",
            tip: "Zlep szew najpierw palcami, a potem dodatkowo widelcem, dzięki temu pieróg się nie otworzy podczas gotowania.",
          },
          {
            text: "Gotuj pierogi w lekko wrzącej, osolonej wodzie, aż wypłyną na powierzchnię, i podawaj od razu z przypieczonym masłem i cebulą.",
            tip: "Gotuj wodę tylko na lekkim wrzeniu, przy zbyt intensywnym gotowaniu pierogi mogą się porozklejać.",
          },
        ],
        seoTitle: "Pierogi ruskie przepis | Alemniam",
        seoDescription:
          "Pierogi ruskie. Gotowanie i zakupy, dwujęzycznie ze wskazówkami DE.",
        article: `## Pierogi ruskie, wariant domowy

Ziemniaki, twaróg i cebula, bez żadnego widowiska, tylko smak, który wielu łączy z domem. U góry przełączysz na mięso, kapustę z grzybami albo jagody.

### Twaróg w DE

[Poradnik twaróg](/pl/blog/twarog-w-niemczech) pomoże dobrze odsączyć twaróg, zanim go użyjesz.

### Ciasto

[Ciasto na pierogi](/pl/blog/ciasto-na-pierogi) · [Robot](/pl/blog/robot-do-ciasta-pierogi) · [Technika](/pl/techniken/ciasto).`,
      },
    },
    ingredients: [
      {
        id: "pi-1",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "pi-2",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pi-3",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 600,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "pi-4",
        name: { de: "Twaróg", pl: "Twaróg" },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Quark (Magerquark / Speisequark)",
        substitute: {
          de: "Magerquark, gut abgetropft",
          pl: "Chudy twaróg lub Quark dobrze odsączony",
        },
      },
      {
        id: "pi-5",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "pi-6",
        name: { de: "Butter", pl: "Masło" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "dairy",
      },
    ],
    createdAt: "2026-01-10T10:00:00.000Z",
    updatedAt: "2026-01-10T10:00:00.000Z",
  },
  {
    id: "recipe-bigos",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-bigos/66cdab94-ccf4-4b59-8ec0-55c2a0c24c6b.webp",
    prepMinutes: 30,
    cookMinutes: 120,
    servings: 6,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Bigos",
        slug: "bigos",
        excerpt:
          "Polnischer Krautschmortopf aus Sauerkraut, Weißkohl und gemischtem Fleisch, idealerweise einen Tag vorher gekocht und aufgewärmt, herzhafter und vielschichtiger als die einfache Kapusta zasmażana und ohne die Tomatenbasis eines Gulasz.",
        steps: [
          {
            text: "Brate den Speck knusprig aus und brate das Fleisch darin scharf an, bevor du beides beiseitestellst.",
            tip: "Die Röstaromen bleiben in der Pfanne und geben später der ganzen Sauce mehr Tiefe.",
          },
          {
            text: "Schwitze Zwiebel und Pilze im Bratfett an und gib danach Sauerkraut und frischen Weißkohl dazu.",
            tip: "Weiche getrocknete Pilze vorher gut ein und verwende das Einweichwasser gleich mit, es steckt voller Aroma.",
          },
          {
            text: "Gib das Fleisch zurück in den Topf und schmore alles mit Brühe, Lorbeer und Gewürzen zugedeckt bei niedriger Hitze.",
            tip: "Mindestens 1,5 Stunden köcheln lassen, am besten über Nacht im Kühlschrank durchziehen lassen und am nächsten Tag aufwärmen.",
          },
          {
            text: "Schmecke den Bigos am Ende noch einmal ab und serviere ihn heiß mit kräftigem Brot.",
            tip: "Ist er zu sauer geraten, hilft frischer Weißkohl statt Zucker, um die Säure sanft auszugleichen.",
          },
        ],
        seoTitle: "Bigos Rezept | Alemniam",
        seoDescription:
          "Bigos klassisch. Rezept mit Einkaufshilfe für Deutschland.",
      },
      pl: {
        title: "Bigos",
        slug: "bigos",
        excerpt:
          "Polski gulasz z kapusty kiszonej, kapusty świeżej i mieszanego mięsa, najlepiej ugotowany dzień wcześniej i odgrzany, głębszy w smaku niż prosta kapusta zasmażana i bez pomidorowej bazy gulaszu.",
        steps: [
          {
            text: "Podsmaż boczek na chrupko, a potem mocno obsmaż mięso i odłóż całość na bok.",
            tip: "Aromaty z podsmażania zostają na dnie garnka i później wzmacniają cały sos.",
          },
          {
            text: "Zeszklij cebulę i grzyby na tym samym tłuszczu, a następnie dodaj kapustę kiszoną i świeżą.",
            tip: "Namocz wcześniej suszone grzyby i użyj też wody z namaczania, ma mocny, przydatny aromat.",
          },
          {
            text: "Włóż mięso z powrotem do garnka i duś wszystko pod przykryciem z bulionem, liściem laurowym i przyprawami na małym ogniu.",
            tip: "Gotuj minimum 1,5 godziny, a najlepiej odstaw na noc do lodówki i odgrzej następnego dnia.",
          },
          {
            text: "Dopraw bigos na końcu do smaku i podawaj gorący z kawałkiem chleba.",
            tip: "Jeśli wyszedł zbyt kwaśny, dodaj świeżej kapusty zamiast cukru, to łagodzi kwasowość bez słodzenia.",
          },
        ],
        seoTitle: "Bigos przepis | Alemniam",
        seoDescription: "Klasyczny bigos. Przepis i lista zakupów.",
      },
    },
    ingredients: [
      {
        id: "bi-1",
        name: { de: "Sauerkraut", pl: "Kapusta kiszona" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Sauerkraut / Kiszoná im Polenladen",
      },
      {
        id: "bi-2",
        name: { de: "Weißkohl", pl: "Kapusta biała" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "bi-3",
        name: { de: "Schweinefleisch", pl: "Wieprzowina" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "bi-4",
        name: { de: "Speck", pl: "Boczek" },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "bi-5",
        name: { de: "Getrocknete Pilze", pl: "Suszone grzyby" },
        amount: 30,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Steinpilze getrocknet",
      },
      {
        id: "bi-6",
        name: { de: "Lorbeerblatt", pl: "Liść laurowy" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "spices",
      },
    ],
    createdAt: "2026-01-12T10:00:00.000Z",
    updatedAt: "2026-01-12T10:00:00.000Z",
  },
  {
    id: "recipe-zurek",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-zurek/bbfde075-0c6c-4698-a8a0-0f8e5765ae98.webp",
    prepMinutes: 20,
    cookMinutes: 50,
    servings: 4,
    regionIds: ["region-slask"],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: [],
    categoryIds: ["category-suppen"],
    videoUrl: null,
    translations: {
      de: {
        title: "Żurek",
        slug: "zurek",
        excerpt:
          "Kräftige Sauerteigsuppe aus fermentiertem Roggen mit weißer Wurst, Kartoffeln und Ei, säuerlicher und dichter als der klare Barszcz und herzhafter als die goldene Hühnerbrühe Rosół.",
        steps: [
          {
            text: "Erhitze den Żur-Ansatz zusammen mit etwas Wasser und bring ihn langsam zum Köcheln, ohne ihn stark aufkochen zu lassen.",
            tip: "Fertigen Żur-Ansatz bekommst du in Flaschen im [Polenladen](/de/blog/polenladen-einkaufen), das rettet den Zeitplan, wenn vor Feiertagen wenig Zeit bleibt.",
          },
          {
            text: "Schneide die Kartoffeln in Würfel und gare sie zusammen mit der weißen Wurst sanft in der Suppe mit, bis beides weich, aber nicht zerfallen ist.",
            tip: "Behandle die Wurst schonend, denn zu starkes Kochen macht sie zäh, mehr zur Einlage findest du im Rezept zu [Biała kiełbasa](/de/rezepte/biala-kielbasa).",
          },
          {
            text: "Schmecke die Suppe mit zerdrücktem Knoblauch und Majoran ab und gib das Ei erst zum Schluss hinein, damit es nicht zu fest wird.",
            tip: "Der Majoran macht die Suppe erst wirklich zum Żurek, probiere am Ende noch einmal ab, denn die Säure verändert sich während des Kochens.",
          },
          {
            text: "Serviere den Żurek heiß mit den Wurstscheiben, dem halbierten Ei und einer dicken Scheibe kräftigem Brot.",
            tip: "Wer mag, gibt einen Löffel Sauerrahm dazu, das bleibt aber Geschmackssache im Haus und kein Muss.",
          },
        ],
        seoTitle: "Żurek Rezept | Alemniam",
        seoDescription:
          "Żurek kochen: Sauerteigsuppe mit Weißwurst und Ei, bilingual mit Tipps zum Żur-Einkauf in Deutschland.",
      },
      pl: {
        title: "Żurek",
        slug: "zurek",
        excerpt:
          "Gęsta zupa na żytnim zakwasie z białą kiełbasą, ziemniakami i jajkiem, kwaśniejsza i gęstsza niż klarowny barszcz i bardziej sycąca niż złoty rosół z kurczaka.",
        steps: [
          {
            text: "Zagotuj zakwas żuru z odrobiną wody i doprowadź go powoli do lekkiego wrzenia, bez gwałtownego bulgotania.",
            tip: "Gotowy zakwas na żur kupisz w butelkach w [sklepie polskim](/pl/blog/sklep-polski-zakupy), co ratuje harmonogram przed świętami, gdy zostaje mało czasu.",
          },
          {
            text: "Pokrój ziemniaki w kostkę i ugotuj je razem z białą kiełbasą delikatnie w zupie, aż oba składniki będą miękkie, ale nie rozpadną się.",
            tip: "Kiełbasę traktuj delikatnie, bo za mocne gotowanie robi ją twardą, więcej o samym dodatku znajdziesz w przepisie na [białą kiełbasę](/pl/rezepte/biala-kielbasa).",
          },
          {
            text: "Dopraw zupę roztartym czosnkiem i majerankiem, a jajko dodaj na samym końcu, żeby nie zrobiło się zbyt twarde.",
            tip: "Majeranek naprawdę czyni tę zupę żurkiem, spróbuj jeszcze raz na końcu, bo kwasowość zmienia się podczas gotowania.",
          },
          {
            text: "Podawaj żurek gorący z plastrami kiełbasy, przekrojonym na pół jajkiem i kawałkiem mocnego chleba.",
            tip: "Kto lubi, dodaje łyżkę śmietany, ale to kwestia domu, a nie obowiązkowy element przepisu.",
          },
        ],
        seoTitle: "Żurek przepis | Alemniam",
        seoDescription:
          "Żurek: przepis na zupę na zakwasie z białą kiełbasą i jajkiem, dwujęzycznie z listą zakupów w Niemczech.",
      },
    },
    ingredients: [
      {
        id: "zu-1",
        name: { de: "Żur-Ansatz", pl: "Zakwas na żur" },
        amount: 500,
        unit: { de: "ml", pl: "ml" },
        group: "polish",
        storeHintDe: "Żurek / Sauerteigsuppe-Ansatz",
        substitute: {
          de: "Roggenmehl-Sauerteig selbst ansetzen (3–4 Tage)",
          pl: "Własny zakwas żytni (3–4 dni)",
        },
      },
      {
        id: "zu-2",
        name: { de: "Weiße Wurst", pl: "Biała kiełbasa" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Weißwurst polnisch / biała kiełbasa",
      },
      {
        id: "zu-3",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "zu-4",
        name: { de: "Majoran", pl: "Majeranek" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
      {
        id: "zu-5",
        name: { de: "Eier", pl: "Jajka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
    ],
    createdAt: "2026-01-14T10:00:00.000Z",
    updatedAt: "2026-01-14T10:00:00.000Z",
  },
  {
    id: "recipe-oscypek",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-oscypek/3b3f26ff-eab8-45b5-92f8-3fa0adbc758b.webp",
    prepMinutes: 10,
    cookMinutes: 15,
    servings: 2,
    regionIds: ["region-podhale"],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: ["category-schnell", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Gegrillter Oscypek mit Preiselbeeren",
        slug: "oscypek-preiselbeeren",
        excerpt:
          "Schneller Podhale-Teller mit gebratenem, geschütztem Oscypek und süßsauren Preiselbeeren, hier ist der geräucherte Schafskäse selbst das warme Hauptgericht und nicht nur Zutat für andere Speisen.",
        steps: [
          {
            text: "Schneide den Oscypek in etwa fingerdicke Scheiben, damit er beim Braten nicht vollständig zerläuft.",
            tip: "Schneide nicht zu dünn, sonst schmilzt der Käse in der Pfanne komplett weg, statt nur an der Oberfläche anzuschmelzen.",
          },
          {
            text: "Brate die Scheiben in der Pfanne oder auf dem Grill bei mittlerer Hitze goldbraun, bis sie außen eine leichte Kruste bekommen.",
            tip: "Der Käse soll nur außen anschmelzen und innen fest bleiben, zu starke Hitze verbrennt sonst den Rauchgeschmack.",
          },
          {
            text: "Serviere den Oscypek sofort mit Preiselbeeren und Roggenbrot, solange er noch warm ist.",
            tip: "Iss ihn möglichst direkt nach dem Braten, denn abgekühlt wird die Kruste schnell zäh.",
          },
        ],
        seoTitle: "Oscypek mit Preiselbeeren | Alemniam",
        seoDescription: "Gegrillter Oscypek. Schnelles Podhale-Rezept.",
      },
      pl: {
        title: "Oscypek z żurawiną",
        slug: "oscypek-zurawina",
        excerpt:
          "Szybki talerz z Podhala z podsmażonym, chronionym oscypkiem i słodko-kwaśną żurawiną, tu sam wędzony ser owczy jest ciepłym daniem głównym, a nie tylko dodatkiem do innych potraw.",
        steps: [
          {
            text: "Pokrój oscypek w plastry o grubości mniej więcej palca, żeby nie rozpłynął się całkowicie podczas smażenia.",
            tip: "Nie kroj za cienko, bo ser stopi się na patelni całkowicie, zamiast tylko lekko podtopić się na powierzchni.",
          },
          {
            text: "Opiecz plastry na patelni lub grillu na średnim ogniu na złoto, aż zrobią się lekko przypieczone na zewnątrz.",
            tip: "Ser ma się tylko podtopić na zewnątrz i zostać zwarty w środku, za mocny ogień spala dymny aromat.",
          },
          {
            text: "Podawaj oscypek od razu z żurawiną i chlebem żytnim, jeszcze ciepły.",
            tip: "Jedz go najlepiej prosto z patelni, bo po ostudzeniu skórka szybko robi się gumowata.",
          },
        ],
        seoTitle: "Oscypek z żurawiną | Alemniam",
        seoDescription: "Oscypek z żurawiną. Szybki przepis z Podhala.",
      },
    },
    ingredients: [
      {
        id: "os-1",
        name: { de: "Oscypek", pl: "Oscypek" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Geräucherter Schafskäse / Oscypek",
        substitute: {
          de: "Geräucherter Halloumi oder Bundz",
          pl: "Wędzony halloumi lub bundz",
        },
      },
      {
        id: "os-2",
        name: { de: "Preiselbeeren", pl: "Żurawina" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Preiselbeeren / Cranberry-Kompott",
      },
      {
        id: "os-3",
        name: { de: "Roggenbrot", pl: "Chleb żytni" },
        amount: 4,
        unit: { de: "Scheiben", pl: "kromki" },
        group: "pantry",
      },
    ],
    createdAt: "2026-01-16T10:00:00.000Z",
    updatedAt: "2026-01-16T10:00:00.000Z",
  },
  {
    id: "recipe-placki",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-placki/27392e29-e109-488c-8da8-18fc88f28867.webp",
    prepMinutes: 20,
    cookMinutes: 25,
    servings: 4,
    familyId: "family-placki",
    variantLabel: { de: "Ziemniaczane", pl: "ziemniaczane" },
    variantImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-placki/27392e29-e109-488c-8da8-18fc88f28867.webp",
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-panieren"],
    categoryIds: [
      "category-schnell",
      "category-hauptgerichte",
      "category-vegetarisch",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Placki ziemniaczane",
        slug: "ziemniaczane",
        excerpt:
          "Knusprige klassische Kartoffelpuffer aus reinem Kartoffelteig, serviert mit Śmietana, Gulasch oder pur mit Zucker, die Basisvariante der Placki-Familie, anders als die Cukinia-, Käse- oder Apfel-Varianten und anders als der belegte Teller Placek po węgiersku oder der panierte Kotlet mielony.",
        steps: [
          {
            text: "Reibe Kartoffeln und Zwiebel und drücke die Masse danach kräftig aus, damit möglichst wenig Wasser übrig bleibt.",
            tip: "Wasser ist der Feind der Knusprigkeit, benutze am besten ein Küchentuch, um die geriebene Masse richtig auszudrücken.",
          },
          {
            text: "Verrühre die ausgedrückte Masse mit Ei, Mehl, Salz und Pfeffer und lass sie 5 Minuten ruhen.",
            tip: "Die kurze Ruhezeit bindet die Masse besser, dadurch fallen die Puffer beim Braten nicht so leicht auseinander.",
          },
          {
            text: "Backe die Puffer in heißem Öl, etwa 3 bis 5 Millimeter tief, von beiden Seiten goldbraun aus.",
            tip: "Forme die Puffer nicht zu dick, sonst bleiben sie innen roh, während außen schon alles verbrannt ist.",
          },
          {
            text: "Serviere die Placki heiß mit Sauerrahm, [Gulasch](/de/rezepte/gulasz-wieprzowy) oder Zucker.",
            tip: "Placki verlieren im Stapel schnell ihre Kruste, verteile sie beim Warmhalten lieber einzeln auf einem Blech im Ofen.",
          },
        ],
        seoTitle: "Placki ziemniaczane Rezept | Alemniam",
        seoDescription:
          "Polnische Kartoffelpuffer, klassische Variante, bilingual mit DE-Einkauf.",
        article: `## Placki ziemniaczane, der Klassiker

Rohe Kartoffeln werden gerieben, mit Ei und wenig Mehl gebunden und in heißem Öl gebraten, außen knusprig, innen weich. In der Diaspora ist das oft das erste polnische Gericht, das auch Nachbarn mögen.

### Technik in Kurzform

Nimm festkochende Kartoffeln, drücke die Masse **gründlich aus** und sorge dafür, dass die Pfanne wirklich heiß ist. Ausführlich erklärt das der [Placki-Guide](/de/blog/placki-guide) und der Beitrag zur [Gusseisenpfanne](/de/blog/gusseisenpfanne).

### Servieren

Śmietana, also Schmand, ist die klassische Beilage. Deftig wird es mit [Gulasz](/de/rezepte/gulasz-wieprzowy), süß mit Zucker, was in manchen Familien ganz normal ist.

### Weitere Varianten

Oben wechseln: [Zucchini](/de/rezepte/placki/cukinia), [Käse](/de/rezepte/placki/mit-kaese), [Apfel](/de/rezepte/placki/mit-apfel).`,
      },
      pl: {
        title: "Placki ziemniaczane",
        slug: "ziemniaczane",
        excerpt:
          "Chrupiące klasyczne placki z surowych ziemniaków, podawane ze śmietaną, gulaszem albo na słodko z cukrem, podstawowy wariant rodziny placków, inny niż placki z cukinią, serem czy jabłkami i inny niż złożony talerz placek po węgiersku czy panierowany kotlet mielony.",
        steps: [
          {
            text: "Zetrzyj ziemniaki i cebulę, a potem mocno odciśnij masę, żeby zostało w niej jak najmniej wody.",
            tip: "Woda to wróg chrupkości, najlepiej użyj ściereczki, żeby dobrze odciśnąć startą masę.",
          },
          {
            text: "Wymieszaj odciśniętą masę z jajkiem, mąką, solą i pieprzem i odstaw na 5 minut.",
            tip: "Krótki odpoczynek lepiej zwiąże masę, dzięki czemu placki nie rozpadają się podczas smażenia.",
          },
          {
            text: "Smaż placki na złoto z obu stron na gorącym oleju, w warstwie o głębokości 3 do 5 milimetrów.",
            tip: "Nie formuj za grubych placków, inaczej zostaną surowe w środku, gdy na zewnątrz już się przypalą.",
          },
          {
            text: "Podawaj placki gorące ze śmietaną, [gulaszem](/pl/rezepte/gulasz-wieprzowy) albo cukrem.",
            tip: "Placki w stosie szybko tracą chrupkość, przy trzymaniu ciepła lepiej rozłożyć je osobno na blasze w piekarniku.",
          },
        ],
        seoTitle: "Placki ziemniaczane przepis | Alemniam",
        seoDescription:
          "Placki ziemniaczane, wariant klasyczny, dwujęzycznie ze wskazówkami DE.",
        article: `## Placki ziemniaczane, klasyk

Surowe ziemniaki są starte, związane jajkiem i odrobiną mąki, a potem smażone na gorącym oleju, na zewnątrz chrupko, w środku miękko.

### Technika

Wybierz ziemniaki raczej mączyste, **dobrze odciśnij** masę i miej naprawdę gorącą patelnię. Więcej opisuje [przewodnik placki](/pl/blog/placki-przewodnik) i wpis o [patelni żeliwnej](/pl/blog/patelnia-zelivna).

### Podanie

Śmietana pasuje klasycznie, na ostro dobrze robi [gulasz](/pl/rezepte/gulasz-wieprzowy), a na słodko cukier, co w wielu domach jest normą.

### Inne warianty

Przełącz u góry: [cukinia](/pl/rezepte/placki/cukinia), [ser](/pl/rezepte/placki/ser), [jabłka](/pl/rezepte/placki/jablka).`,
      },
    },
    ingredients: [
      {
        id: "pl-1",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "pl-2",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "pl-3",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "pl-4",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "pl-5",
        name: { de: "Sauerrahm", pl: "Śmietana" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        storeHintDe: "Schmand / saure Sahne 20%",
      },
    ],
    createdAt: "2026-02-01T10:00:00.000Z",
    updatedAt: "2026-02-01T10:00:00.000Z",
  },
  {
    id: "recipe-golabki",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-golabki/56ae4f6d-22d3-4bcd-9886-e71c4cba3244.webp",
    prepMinutes: 40,
    cookMinutes: 60,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: ["category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Gołąbki",
        slug: "golabki",
        excerpt:
          "Gedämpfte Kohlrouladen mit Reis und Hackfleisch in Tomatensoße, langsam geschmort, bis der Kohl butterzart ist, ganz anders als das schnell angebratene Gemüsegericht Leczo.",
        steps: [
          {
            text: "Blanchiere den Weißkohl kurz in kochendem Wasser und löse die Blätter vorsichtig vom Strunk.",
            tip: "Schneide dicke Blattrippen vorher flach, sonst reißen die Blätter beim Rollen leicht ein.",
          },
          {
            text: "Würze die Füllung aus Hackfleisch, Reis und Zwiebel kräftig mit Salz, Pfeffer und etwas Majoran.",
            tip: "Koch den Reis nur al dente vor, er quillt später beim Schmoren noch weiter nach.",
          },
          {
            text: "Wickle die Füllung fest in die Kohlblätter und schmore die Rollen zugedeckt in Tomatensoße.",
            tip: "Etwa 50 bis 60 Minuten bei mittlerer Hitze köcheln lassen, die Naht sollte dabei nach unten liegen, damit sie sich nicht öffnet.",
          },
          {
            text: "Serviere die Gołąbki heiß mit Dill und einer Scheibe Brot.",
            tip: "Am nächsten Tag schmecken sie oft noch runder, weil sich Kohl und Soße über Nacht verbunden haben.",
          },
        ],
        seoTitle: "Gołąbki Rezept | Alemniam",
        seoDescription: "Polnische Kohlrouladen. Kochen und einkaufen.",
      },
      pl: {
        title: "Gołąbki",
        slug: "golabki",
        excerpt:
          "Duszone gołąbki z ryżem i mięsem mielonym w sosie pomidorowym, długo duszone, aż kapusta zrobi się miękka jak masło, zupełnie inne niż szybko podsmażane leczo.",
        steps: [
          {
            text: "Blanszuj kapustę krótko w gorącej wodzie i ostrożnie oddziel liście od głąba.",
            tip: "Spłaszcz wcześniej grube żyłki liści, inaczej łatwo się przerywają podczas zwijania.",
          },
          {
            text: "Przygotuj farsz z mięsa mielonego, ryżu i cebuli i dopraw go solą, pieprzem i odrobiną majeranku.",
            tip: "Ugotuj ryż tylko al dente, bo podczas duszenia jeszcze napęcznieje.",
          },
          {
            text: "Zawiń farsz szczelnie w liście kapusty i duś rolki pod przykryciem w sosie pomidorowym.",
            tip: "Duś około 50 do 60 minut na średnim ogniu, a szew układaj do dołu, żeby się nie rozwinął.",
          },
          {
            text: "Podawaj gołąbki gorące z koperkiem i chlebem.",
            tip: "Nazajutrz smakują często jeszcze pełniej, bo kapusta i sos połączyły się przez noc.",
          },
        ],
        seoTitle: "Gołąbki przepis | Alemniam",
        seoDescription: "Gołąbki. Przepis i lista zakupów.",
      },
    },
    ingredients: [
      {
        id: "go-1",
        name: { de: "Weißkohl", pl: "Kapusta biała" },
        amount: 1,
        unit: { de: "Kopf", pl: "główka" },
        group: "produce",
      },
      {
        id: "go-2",
        name: { de: "Hackfleisch gemischt", pl: "Mięso mielone" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "go-3",
        name: { de: "Reis", pl: "Ryż" },
        amount: 120,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "go-4",
        name: { de: "Passierte Tomaten", pl: "Passata" },
        amount: 500,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
      {
        id: "go-5",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
    ],
    createdAt: "2026-02-03T10:00:00.000Z",
    updatedAt: "2026-02-03T10:00:00.000Z",
  },
  {
    id: "recipe-barszcz",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-barszcz/efe9222b-f6b5-42df-a683-71394e5dbd21.webp",
    prepMinutes: 25,
    cookMinutes: 45,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-wigilia"],
    techniqueIds: [],
    categoryIds: ["category-suppen", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Barszcz czerwony",
        slug: "barszcz-czerwony",
        excerpt:
          "Klarer, rubinroter Rote-Bete-Sud zur Wigilia, streng vegetarisch und durchsichtig serviert, ganz anders als der dickere, fleischreiche Barszcz ukraiński und als die säuerliche Sauerteigsuppe Żurek.",
        steps: [
          {
            text: "Schäle die Rote Bete, schneide sie in Würfel und koche sie zusammen mit Piment und Lorbeer in der Gemüsebrühe, bis sie weich ist.",
            tip: "Reibe dir die Hände vor dem Schälen mit etwas Öl ein, dann verfärben sich Finger und Schneidebrett weniger stark von der Rote Bete.",
          },
          {
            text: "Schmecke den Sud mit Knoblauch, Essig und einer Prise Zucker ab, bis er angenehm säuerlich-süß schmeckt und nicht fade wirkt.",
            tip: "Die Säure entscheidet über den ganzen Geschmack, probiere lieber zweimal ab, denn ein zu milder Barszcz wirkt schnell langweilig.",
          },
          {
            text: "Siebe den Sud für eine klare Festtagsbrühe ab oder lass ihn für den Alltag stückig, ganz nach Anlass.",
            tip: "Zur Wigilia gehört traditionell die klare Variante auf den Tisch, an gewöhnlichen Tagen darfst du die Rote-Bete-Stücke ruhig drinlassen.",
          },
          {
            text: "Serviere den Barszcz heiß, zur Wigilia klassisch mit Uszka in der Schale oder im Alltag mit gekochten Kartoffeln.",
            tip: "Koche die Uszka separat, Mengen und Falttechnik stehen im eigenen Rezept zu [Uszka](/de/rezepte/uszka), die Teigtaschen kommen erst am Tisch in die Suppe.",
          },
        ],
        seoTitle: "Barszcz czerwony Rezept | Alemniam",
        seoDescription:
          "Polnischer Barszcz czerwony: klarer Rote-Bete-Eintopf zur Wigilia, bilingual mit DE-Einkaufstipps.",
      },
      pl: {
        title: "Barszcz czerwony",
        slug: "barszcz-czerwony",
        excerpt:
          "Klarowny, rubinowoczerwony wywar z buraków na Wigilię, ściśle wegetariański i przejrzysty, zupełnie inny niż gęsty, mięsny barszcz ukraiński i inny niż kwaśny żurek na zakwasie.",
        steps: [
          {
            text: "Obierz buraki, pokrój je w kostkę i gotuj razem z zielem angielskim i liściem laurowym w bulionie warzywnym, aż będą miękkie.",
            tip: "Przed obieraniem natrzyj ręce odrobiną oleju, wtedy palce i deska mniej się barwią od buraka.",
          },
          {
            text: "Dopraw wywar czosnkiem, octem i szczyptą cukru, aż będzie przyjemnie kwaśno-słodki, a nie mdły.",
            tip: "Kwasowość decyduje o całym smaku, spróbuj dwa razy, bo zbyt łagodny barszcz szybko robi się nudny.",
          },
          {
            text: "Przecedź wywar dla klarownego barszczu świątecznego albo zostaw go z warzywami na co dzień, zależnie od okazji.",
            tip: "Na Wigilię tradycyjnie podaje się wersję klarowną, w zwykłe dni możesz spokojnie zostawić kawałki buraka.",
          },
          {
            text: "Podawaj barszcz gorący, na Wigilię klasycznie z uszkami w misce albo na co dzień z ugotowanymi ziemniakami.",
            tip: "Uszka gotuj osobno, ilości i sposób lepienia znajdziesz w osobnym przepisie na [uszka](/pl/rezepte/uszka), pierożki trafiają do zupy dopiero przy stole.",
          },
        ],
        seoTitle: "Barszcz czerwony przepis | Alemniam",
        seoDescription:
          "Barszcz czerwony: klarowny wywar z buraków na Wigilię, przepis dwujęzyczny z listą zakupów.",
      },
    },
    ingredients: [
      {
        id: "ba-1",
        name: { de: "Rote Bete", pl: "Buraki" },
        amount: 600,
        unit: { de: "g", pl: "g" },
        group: "produce",
      },
      {
        id: "ba-2",
        name: { de: "Gemüsebrühe", pl: "Bulion warzywny" },
        amount: 1.2,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "ba-3",
        name: { de: "Knoblauch", pl: "Czosnek" },
        amount: 2,
        unit: { de: "Zehen", pl: "ząbki" },
        group: "produce",
      },
      {
        id: "ba-4",
        name: { de: "Essig", pl: "Ocet" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
        storeHintDe: "Weinessig / Apfelessig",
      },
      {
        id: "ba-5",
        name: { de: "Allspice", pl: "Ziele angielskie" },
        amount: 4,
        unit: { de: "Körner", pl: "szt." },
        group: "spices",
        storeHintDe: "Piment ganz",
      },
    ],
    createdAt: "2026-02-05T10:00:00.000Z",
    updatedAt: "2026-02-05T10:00:00.000Z",
  },
  {
    id: "recipe-schabowy",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-schabowy/c2614c7e-bc01-4c37-a0b8-45b4c581ec92.webp",
    prepMinutes: 20,
    cookMinutes: 20,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: ["category-schnell", "category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Kotlet schabowy",
        slug: "kotlet-schabowy",
        excerpt:
          "Dünn geklopftes, paniertes Schweineschnitzel, knusprig in der Pfanne gebraten, deutlich anders als das aus Hackfleisch geformte Kotlet mielony und als das mit Käse gefüllte Kotlet de volaille.",
        steps: [
          {
            text: "Klopfe die Schnitzel zwischen Frischhaltefolie flach, bis sie gleichmäßig dünn sind, und würze sie beidseitig mit Salz und Pfeffer.",
            tip: "Zu dünn geklopftes Fleisch trocknet beim Braten schnell aus, klopfe deshalb gleichmäßig, aber nicht bis zur Durchsichtigkeit.",
          },
          {
            text: "Ziehe die Schnitzel zuerst durch Mehl, dann durch verquirltes Ei und zum Schluss durch Semmelbrösel, damit die Panade gut hält.",
            tip: "Drücke die Brösel am Ende leicht an, so schließt die Panade lückenlos und öffnet sich beim Braten nicht.",
          },
          {
            text: "Brate die Schnitzel in reichlich heißem Butterschmalz von beiden Seiten goldbraun, bis die Panade knusprig ist.",
            tip: "Ist das Fett noch zu kalt, saugt sich die Panade voll und wird ölig, warte deshalb, bis es beim Testbrösel deutlich brutzelt.",
          },
          {
            text: "Serviere die Schnitzel heiß mit einer Zitronenspalte und klassischen Beilagen wie Mizeria oder warmem Kraut.",
            tip: "Zur Gurkensalat-Beilage [Mizeria](/de/rezepte/mizeria) passt auch warme [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana) oder die Rote-Bete-Beilage [Buraczki](/de/rezepte/buraczki), die trotz des Namens nichts mit der gleichnamigen Suppe zu tun hat.",
          },
        ],
        seoTitle: "Kotlet schabowy Rezept | Alemniam",
        seoDescription:
          "Polnisches Schnitzel Kotlet schabowy: Rezept und Einkaufsliste, bilingual mit Panier-Technik.",
      },
      pl: {
        title: "Kotlet schabowy",
        slug: "kotlet-schabowy",
        excerpt:
          "Cienko rozbity, panierowany kotlet wieprzowy, chrupiący z patelni, zupełnie inny niż formowany z mięsa mielonego kotlet mielony i inny niż nadziewany serem kotlet de volaille.",
        steps: [
          {
            text: "Rozbij kotlety między folią na równą grubość i dopraw je z obu stron solą i pieprzem.",
            tip: "Za mocno rozbite mięso szybko wysycha podczas smażenia, rozbijaj więc równomiernie, ale nie na przezroczystość.",
          },
          {
            text: "Obtocz kotlety najpierw w mące, potem w roztrzepanym jajku, a na końcu w bułce tartej, żeby panierka dobrze się trzymała.",
            tip: "Dociśnij bułkę na końcu lekko dłonią, dzięki temu panierka zamyka się szczelnie i nie odpada podczas smażenia.",
          },
          {
            text: "Smaż kotlety w dużej ilości gorącego smalcu lub masła klarowanego z obu stron na złoto, aż panierka będzie chrupiąca.",
            tip: "Jeśli tłuszcz jest jeszcze zimny, panierka wciąga go i robi się oleista, poczekaj więc, aż na próbnej odrobinie bułki wyraźnie skwierczy.",
          },
          {
            text: "Podawaj kotlety gorące z cząstką cytryny i klasycznymi dodatkami, na przykład mizerią albo ciepłą surówką.",
            tip: "Do mizerii ze świeżych ogórków dobrze pasuje też ciepła [kapusta zasmażana](/pl/rezepte/kapusta-zasmażana) albo [buraczki](/pl/rezepte/buraczki), dodatek z buraków, a nie zupa o tej samej nazwie.",
          },
        ],
        seoTitle: "Kotlet schabowy przepis | Alemniam",
        seoDescription:
          "Kotlet schabowy: przepis i zakupy, dwujęzycznie z techniką panierowania.",
      },
    },
    ingredients: [
      {
        id: "sc-1",
        name: { de: "Schweineschnitzel", pl: "Kotlety wieprzowe" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "other",
      },
      {
        id: "sc-2",
        name: { de: "Eier", pl: "Jajka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "sc-3",
        name: { de: "Semmelbrösel", pl: "Bułka tarta" },
        amount: 120,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "sc-4",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "sc-5",
        name: { de: "Butterschmalz", pl: "Smalec / masło klarowane" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-02-07T10:00:00.000Z",
    updatedAt: "2026-02-07T10:00:00.000Z",
  },
  {
    id: "recipe-nalesniki",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-nalesniki/f97065d7-8db8-4d8c-83e8-45a6aa9521ef.webp",
    prepMinutes: 15,
    cookMinutes: 25,
    servings: 4,
    familyId: "family-nalesniki",
    variantLabel: { de: "Twaróg", pl: "z twarogiem" },
    variantImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-nalesniki/f97065d7-8db8-4d8c-83e8-45a6aa9521ef.webp",
    regionIds: [],
    occasionIds: [],
    techniqueIds: ["technique-teig", "technique-freezer"],
    categoryIds: [
      "category-schnell",
      "category-suess",
      "category-vegetarisch",
    ],
    relatedPostIds: [
      "post-nalesniki-guide",
      "post-twarog",
      "post-smietana-schmand",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Naleśniki mit Twaróg",
        slug: "twarog",
        excerpt:
          "Dünne Naleśniki-Pfannkuchen mit süßer Quarkfüllung, die klassische Twaróg-Variante der Familie, anders als die herzhaften Fleisch- und Spinat-Naleśniki und anders als die panierten, frittierten Krokiety.",
        steps: [
          {
            text: "Verrühre Milch, Eier und Mehl zu einem glatten Teig und lass ihn kurz ruhen, bevor du ihn verarbeitest.",
            tip: "Der Teig sollte wie dünne Sahne fließen, ist er zu dick, gib löffelweise Milch dazu.",
          },
          {
            text: "Backe aus dem Teig in einer leicht gefetteten Pfanne dünne, gleichmäßige Pfannkuchen.",
            tip: "Die erste Platte dient oft nur zum Testen der Hitze, wundere dich nicht, wenn sie nicht perfekt wird.",
          },
          {
            text: "Vermische den Twaróg mit Zucker und Vanille zu einer streichfähigen Füllung.",
            tip: "Etwas Sauerrahm macht die Füllung cremiger und leichter zu verstreichen.",
          },
          {
            text: "Fülle die Pfannkuchen, rolle sie fest ein und brate sie optional noch einmal in Butter goldbraun.",
            tip: "Lass die Füllung vor dem Rollen etwas abkühlen, sonst wird der Pfannkuchen an dieser Stelle zu weich.",
          },
        ],
        seoTitle: "Naleśniki mit Twaróg Rezept | Alemniam",
        seoDescription:
          "Polnische Pfannkuchen mit Quark, Variante Twaróg, bilingual mit DE-Einkauf.",
      },
      pl: {
        title: "Naleśniki z twarogiem",
        slug: "twarog",
        excerpt:
          "Cienkie naleśniki ze słodkim twarogiem, klasyczny wariant twaróg w rodzinie naleśników, inny niż wytrawne naleśniki z mięsem i szpinakiem oraz inny niż panierowane, smażone krokiety.",
        steps: [
          {
            text: "Zrób gładkie ciasto z mleka, jajek i mąki i odstaw je na chwilę przed smażeniem.",
            tip: "Ciasto powinno mieć konsystencję rzadkiej śmietany, jeśli jest za gęste, dolej łyżkę mleka.",
          },
          {
            text: "Usmaż z ciasta cienkie, równe naleśniki na lekko natłuszczonej patelni.",
            tip: "Pierwszy placek często służy tylko do sprawdzenia żaru, nie przejmuj się, jeśli nie wyjdzie idealnie.",
          },
          {
            text: "Wymieszaj twaróg z cukrem i wanilią na gładki, smarowalny farsz.",
            tip: "Odrobina śmietany daje farszowi kremowość i ułatwia rozsmarowanie na placku.",
          },
          {
            text: "Nadziewaj naleśniki, zawiń je szczelnie i opcjonalnie podsmaż jeszcze raz na maśle na złoto.",
            tip: "Przed zwijaniem daj farszowi trochę ostygnąć, inaczej placek w tym miejscu zrobi się za miękki.",
          },
        ],
        seoTitle: "Naleśniki z twarogiem przepis | Alemniam",
        seoDescription:
          "Naleśniki z twarogiem, wariant klasyczny, dwujęzycznie.",
      },
    },
    ingredients: [
      {
        id: "na-1",
        name: { de: "Milch", pl: "Mleko" },
        amount: 400,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "na-2",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "na-3",
        name: { de: "Eier", pl: "Jajka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "na-4",
        name: { de: "Twaróg", pl: "Twaróg" },
        amount: 400,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Speisequark / Magerquark",
      },
      {
        id: "na-5",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 40,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-02-09T10:00:00.000Z",
    updatedAt: "2026-02-09T10:00:00.000Z",
  },
  {
    id: "recipe-rosol",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-rosol/58a70d2d-5448-4aae-ad60-d3d35e6140d0.webp",
    prepMinutes: 20,
    cookMinutes: 120,
    servings: 6,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: ["category-suppen"],
    videoUrl: null,
    translations: {
      de: {
        title: "Rosół",
        slug: "rosol",
        excerpt:
          "Klare, langsam gezogene Hühnerbrühe mit Fadennudeln, der klassische Sonntagsauftakt vor dem Hauptgang, ganz anders als die kräftig-rote Zupa pomidorowa oder der säuerliche Kapuśniak.",
        steps: [
          {
            text: "Setze das Huhn mit Suppengemüse in kaltem Wasser auf und bringe alles langsam zum Köcheln.",
            tip: "Ein kalter Start löst mehr Geschmack aus dem Fleisch, ein heißer Start macht die Brühe später trüb.",
          },
          {
            text: "Schöpfe den aufsteigenden Schaum ab und lass die Brühe 1,5 bis 2 Stunden sanft ziehen.",
            tip: "Koch die Brühe nie sprudelnd, sondern nur leicht blubbernd, so bleibt sie schön klar.",
          },
          {
            text: "Sieb die Brühe ab, würze sie kräftig und serviere sie mit Fadennudeln.",
            tip: "Koch die Nudeln separat und gib sie erst im Teller dazu, sonst werden sie in der Brühe schnell weich und trüben sie.",
          },
          {
            text: "Richte den Teller mit Petersilie und ein paar Karottenscheiben an.",
            tip: "Röste die Schnittfläche einer halbierten Zwiebel trocken an und koch sie mit, das gibt der Brühe eine goldene Farbe.",
          },
        ],
        seoTitle: "Rosół Rezept | Alemniam",
        seoDescription: "Polnische Hühnerbrühe. Rezept und Einkaufshilfe.",
      },
      pl: {
        title: "Rosół",
        slug: "rosol",
        excerpt:
          "Klarowny, długo gotowany rosół z kurczaka z makaronem nitki, klasyczne niedzielne pierwsze danie przed obiadem, zupełnie inne niż esencjonalna zupa pomidorowa czy kwaśny kapuśniak.",
        steps: [
          {
            text: "Zalej kurczaka z warzywami zimną wodą i doprowadź powoli do wrzenia.",
            tip: "Zimny start wydobywa więcej smaku z mięsa, a gorący start szybciej mętni bulion.",
          },
          {
            text: "Zbieraj szumowiny i gotuj rosół delikatnie przez 1,5 do 2 godzin.",
            tip: "Nie dopuszczaj do gwałtownego wrzenia, tylko lekkiego bulgotania, dzięki temu zostanie klarowny.",
          },
          {
            text: "Przecedź bulion, dopraw go wyraźnie i podawaj z makaronem nitki.",
            tip: "Ugotuj makaron osobno i dodaj go dopiero na talerzu, inaczej w bulionie zmiękczy się i zmętni zupę.",
          },
          {
            text: "Udekoruj talerz pietruszką i kilkoma plasterkami marchewki.",
            tip: "Przypiecz na suchej patelni przekrojoną cebulę i dorzuć ją do garnka, to daje bulionowi złoty kolor.",
          },
        ],
        seoTitle: "Rosół przepis | Alemniam",
        seoDescription: "Rosół. Przepis i lista zakupów.",
      },
    },
    ingredients: [
      {
        id: "ro-1",
        name: { de: "Suppenhuhn", pl: "Kurczak na rosół" },
        amount: 1.2,
        unit: { de: "kg", pl: "kg" },
        group: "other",
      },
      {
        id: "ro-2",
        name: { de: "Karotten", pl: "Marchew" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ro-3",
        name: { de: "Petersilienwurzel", pl: "Pietruszka" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
        storeHintDe: "Petersilienwurzel / Pastinake als Alternative",
      },
      {
        id: "ro-4",
        name: { de: "Sellerie", pl: "Seler" },
        amount: 0.25,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ro-5",
        name: { de: "Fadenudeln", pl: "Makaron nitki" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Suppennudeln / Zartmacher",
      },
    ],
    createdAt: "2026-02-11T10:00:00.000Z",
    updatedAt: "2026-02-11T10:00:00.000Z",
  },
  {
    id: "recipe-fasolka",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-fasolka/c2958257-a808-4c52-9d72-886e936921f9.webp",
    prepMinutes: 15,
    cookMinutes: 40,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: [],
    categoryIds: ["category-schnell", "category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Fasolka po bretońsku",
        slug: "fasolka-po-bretonsku",
        excerpt:
          "Fasolka po bretońsku ist ein deftiger Bohnentopf mit Wurst in würziger Tomatensoße, mit der Bretagne hat nur der Name zu tun, und mit der grünen Beilage Fasolka szparagowa hat sie außer dem ersten Wort nichts gemeinsam.",
        steps: [
          {
            text: "Speck und Zwiebel in einem großen Topf anbraten, bis der Speck Farbe bekommt und die Zwiebel glasig wird.",
            tip: "Gute Wurst und Speck findest du oft günstiger im [Polenladen](/de/blog/polenladen-einkaufen), welche Sorte wohin passt, erklärt der Guide zu [Kiełbasa-Arten](/de/blog/kielbasa-arten).",
          },
          {
            text: "Die Wurst in Scheiben dazugeben, kurz mitbraten und dann das Tomatenmark einrühren und ganz kurz mitrösten.",
            tip: "Das kurze Anrösten des Tomatenmarks nimmt ihm die Säure und bringt mehr Tiefe in die Soße, länger als eine Minute sollte es aber nicht auf dem Herd bleiben.",
          },
          {
            text: "Die Bohnen mit etwas Flüssigkeit aus dem Glas dazugeben, aufkochen und offen bei milder Hitze einkochen, bis die Soße sämig ist und der Löffel darin stehen bleibt.",
            tip: "Den Majoran erst gegen Ende einrühren, dann bleibt sein Aroma frisch statt beim langen Kochen zu verfliegen.",
          },
          {
            text: "Mit Salz und Pfeffer abschmecken und den Topf noch kurz durchziehen lassen, bevor du ihn servierst.",
            tip: "Fasolka po bretońsku ist ein sämiger Eintopf mit Wurst, verwechsle sie nicht mit [Fasolka szparagowa](/de/rezepte/fasolka-szparagowa), der warmen Beilage aus grünen Bohnen mit Butter und Semmelbröseln.",
          },
          {
            text: "Heiß mit kräftigem Brot servieren, eine Gewürzgurke daneben schneidet die Tomatenwärme gut ab.",
            tip: "Mehr zu Einkauf und Würzen liefert der [Fasolka-Guide](/de/blog/fasolka-po-bretonsku), falls der Topf beim ersten Versuch zu wässrig oder zu blass geworden ist.",
          },
        ],
        seoTitle: "Fasolka po bretońsku Rezept | Alemniam",
        seoDescription:
          "Fasolka po bretońsku: Bohnen mit Wurst in Tomatensoße. Rezept, Einkaufsliste und klare Abgrenzung zur grünen Fasolka szparagowa.",
      },
      pl: {
        title: "Fasolka po bretońsku",
        slug: "fasolka-po-bretonsku",
        excerpt:
          "Fasolka po bretońsku to sycący gulasz z białej fasoli i kiełbasy w sosie pomidorowym, z Bretanią łączy ją tylko nazwa, a z zieloną fasolką szparagową nic poza pierwszym słowem.",
        steps: [
          {
            text: "Podsmaż boczek i cebulę na dużej patelni, aż boczek się zeszkli, a cebula zrobi się szklista.",
            tip: "Dobrą kiełbasę i boczek często kupisz taniej w [polskim sklepie](/pl/blog/sklep-polski-zakupy), a który rodzaj kiełbasy do czego pasuje, wyjaśnia [przewodnik po rodzajach kiełbasy](/pl/blog/rodzaje-kielbasy).",
          },
          {
            text: "Dodaj pokrojoną w plastry kiełbasę, chwilę podsmaż, a potem wmieszaj koncentrat pomidorowy i krótko podsmaż razem.",
            tip: "Krótkie podsmażenie koncentratu zdejmuje mu kwaskowość i dodaje głębi smaku, ale dłużej niż minutę nie powinien już zostać na patelni.",
          },
          {
            text: "Dodaj fasolę razem z odrobiną zalewy ze słoika, zagotuj i redukuj na małym ogniu bez przykrycia, aż sos zgęstnieje na łyżce.",
            tip: "Majeranek dodaj dopiero pod koniec, wtedy jego aromat zostaje świeży, a nie wyparowuje przy długim gotowaniu.",
          },
          {
            text: "Dopraw solą i pieprzem i zostaw garnek na chwilę, żeby smaki się przegryzły, zanim podasz.",
            tip: "Fasolka po bretońsku to gęsty gulasz z kiełbasą, nie myl jej z [fasolką szparagową](/pl/rezepte/fasolka-szparagowa), ciepłym dodatkiem z zielonej fasoli z masłem i bułką tartą.",
          },
          {
            text: "Podawaj gorącą z mocnym chlebem, kiszony ogórek obok dobrze przecina pomidorowe ciepło.",
            tip: "Więcej o zakupach i przyprawach znajdziesz w [przewodniku po fasolce](/pl/blog/fasolka-po-bretonsku), przydatnym, gdy garnek wyjdzie za rzadki albo za mdły.",
          },
        ],
        seoTitle: "Fasolka po bretońsku przepis | Alemniam",
        seoDescription:
          "Fasolka po bretońsku: fasola z kiełbasą w sosie pomidorowym. Przepis, lista zakupów i jasna różnica wobec fasolki szparagowej.",
      },
    },
    ingredients: [
      {
        id: "fa-1",
        name: { de: "Weiße Bohnen (Glas/Dose)", pl: "Fasola jaś / biała" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "fa-2",
        name: { de: "Polnische Wurst", pl: "Kiełbasa" },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "polish",
        storeHintDe: "Kabanos oder Krakauer",
      },
      {
        id: "fa-3",
        name: { de: "Tomatenmark", pl: "Koncentrat pomidorowy" },
        amount: 3,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "fa-4",
        name: { de: "Speck", pl: "Boczek" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "fa-5",
        name: { de: "Majoran", pl: "Majeranek" },
        amount: 1,
        unit: { de: "TL", pl: "łyżeczka" },
        group: "spices",
      },
    ],
    createdAt: "2026-02-13T10:00:00.000Z",
    updatedAt: "2026-02-13T10:00:00.000Z",
  },
  {
    id: "recipe-faworki",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-faworki/2f402758-49a4-42b0-8f6e-0213ae8b749d.webp",
    prepMinutes: 15,
    cookMinutes: 30,
    servings: 50,
    regionIds: [],
    occasionIds: ["occasion-tlusty-czwartek"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-schnell", "category-suess"],
    videoUrl: null,
    translations: {
      de: {
        title: "Faworki",
        slug: "faworki",
        excerpt:
          "Faworki sind hauchdünne, frittierte Teigschlingen mit Puderzucker für Tłusty Czwartek, knuspriger und trockener als die weichen, mit Hefeteig gebackenen Pączki vom selben Tag.",
        steps: [
          {
            text: "Mehl, Eigelb, saure Sahne, Backpulver, Zucker und Wodka etwa 10 Minuten zu einem glatten, festen Teig verkneten.",
            tip: "Der Wodka ist keine Geschmackszutat, sondern Technik, denn er verdunstet im heißen Öl schnell und der Teig nimmt dadurch weniger Fett auf.",
          },
          {
            text: "Den Teig halbieren und jedes Stück mit Nudelholz oder Pastamaschine hauchdünn ausrollen.",
            tip: "Rolle wirklich papierdünn aus, dickere Stellen bleiben innen teigig, während der Rand schon braun ist.",
          },
          {
            text: "In Rechtecke von etwa 10 mal 3 Zentimetern schneiden, längs mittig einschneiden, dabei einen Rand stehen lassen, und dann ein Ende durch den Schnitt ziehen, so entsteht die charakteristische Schlinge.",
            tip: "Genau diese Schlinge gab dem Gebäck seinen Namen, denn Faworki stammt vom französischen Wort faveur für die seidenen Bändchen, die Damen einst ihren Rittern als Gunstbeweis schenkten.",
          },
          {
            text: "Öl auf 170 bis 180 Grad erhitzen und die Faworki portionsweise je eine bis zwei Minuten pro Seite goldgelb frittieren.",
            tip: "Teste die Temperatur mit einem Holzstäbchen, steigen viele kleine Blasen auf, ist das Öl heiß genug, und fülle den Topf nicht zu voll, sonst kühlt das Öl zu stark ab.",
          },
          {
            text: "Auf Küchenpapier abtropfen lassen und noch warm großzügig mit Puderzucker bestäuben.",
            tip: "Der weiche, gefüllte Nachbar vom selben Tag sind die [Pączki](/de/rezepte/paczki), sie brauchen Hefeteig und ein Fettbad, während Faworki dünn ausgerollt und ganz ohne Hefe auskommen.",
          },
        ],
        seoTitle: "Faworki Rezept | Polnisches Fasnachtsgebäck | Alemniam",
        seoDescription:
          "Faworki (Chruściki) selbst machen: knusprig, mit Puderzucker, inklusive Einkaufshilfe für Deutschland.",
        article: `## Faworki: Schleifen für den Tłusty Czwartek

Faworki, auch Chrust oder Chruściki genannt, sind dünne, frittierte Teigschlingen mit Puderzucker. Der Name geht auf das französische Wort faveur zurück, das seidene Bändchen bezeichnete, die Damen einst ihren Rittern als Gunstbeweis schenkten. Traditionell werden sie an Tłusty Czwartek gebacken, schmecken aber zu jeder Jahreszeit.

### Teig

Eigelb und saure Sahne machen den Teig zart. Ein Schuss Wodka oder Rum ist keine Geschmacksspielerei, sondern Technik, denn der Alkohol verdunstet beim Frittieren schnell, und der Teig nimmt dadurch weniger Fett auf.

### Formen

Rolle den Teig wirklich hauchdünn aus, dicke Stellen bleiben sonst innen teigig. Die charakteristische Schlinge entsteht, wenn du ein Ende durch den Mittelschnitt ziehst.

### Frittieren

Bei 170 bis 180 Grad wird der Teig gleichmäßig goldgelb. Zu heißes Öl bräunt die Oberfläche, bevor das Innere durch ist, zu kaltes Öl macht die Faworki ölig und schwer. Arbeite portionsweise, lass sie abtropfen und bestäube sie noch warm mit Puderzucker.

### Haltbarkeit

In einer gut verschlossenen Dose halten sie zwei bis vier Tage, gut verpackt lassen sie sich auch etwa zwei Monate einfrieren.`,
      },
      pl: {
        title: "Faworki",
        slug: "faworki",
        excerpt:
          "Faworki to cienkie, smażone pętelki z ciasta posypane cukrem pudrem, przygotowywane na Tłusty Czwartek, chrupiące i suche, inaczej niż miękkie, drożdżowe pączki tego samego dnia.",
        steps: [
          {
            text: "Zagnieć mąkę, żółtka, śmietanę, proszek do pieczenia, cukier i wódkę przez około 10 minut na gładkie, zwarte ciasto.",
            tip: "Wódka to nie fanaberia smakowa, tylko technika, bo szybko odparowuje w gorącym oleju, dzięki czemu ciasto wchłania mniej tłuszczu.",
          },
          {
            text: "Podziel ciasto na pół i rozwałkuj każdą część wałkiem albo maszynką do makaronu na papierową cienkość.",
            tip: "Rozwałkuj naprawdę bardzo cienko, grubsze miejsca zostają surowe w środku, choć brzegi już się przypiekają.",
          },
          {
            text: "Pokrój na prostokąty o wymiarach około 10 na 3 centymetry, natnij wzdłuż na środku, zostawiając brzeg, a potem przeciągnij jeden koniec przez nacięcie, tak powstaje charakterystyczna pętelka.",
            tip: "Właśnie ta pętelka dała ciastku nazwę, bo faworki pochodzi od francuskiego faveur, czyli wstążeczki, którą damy wręczały rycerzom jako dowód przychylności.",
          },
          {
            text: "Rozgrzej olej do temperatury 170 do 180 stopni i smaż faworki partiami po jednej do dwóch minut z każdej strony, aż będą złote.",
            tip: "Sprawdź temperaturę patyczkiem, dużo drobnych bąbelków oznacza, że olej jest wystarczająco gorący, i nie wkładaj na raz za dużo kawałków, bo olej się wychłodzi.",
          },
          {
            text: "Odsącz na papierowym ręczniku i jeszcze ciepłe obficie posyp cukrem pudrem.",
            tip: "Miękki, nadziewany sąsiad tego samego dnia to [pączki](/pl/rezepte/paczki), robione z ciasta drożdżowego i smażone w kąpieli tłuszczowej, podczas gdy faworki są rozwałkowane na cienko i całkiem bez drożdży.",
          },
        ],
        seoTitle: "Faworki przepis | Chruściki | Alemniam",
        seoDescription:
          "Faworki (chruściki) w domu: chrupiące, z cukrem pudrem, z listą zakupów w Niemczech.",
        article: `## Faworki: chruściki na Tłusty Czwartek

Faworki, zwane też chrustem albo chruścikami, to cienkie, smażone pętelki z ciasta posypane cukrem pudrem. Nazwa pochodzi od francuskiego słowa faveur, które oznaczało wstążeczkę wręczaną rycerzom przez damy jako dowód przychylności. Tradycyjnie piecze się je na Tłusty Czwartek, ale smakują w każdej porze roku.

### Ciasto

Żółtka i śmietana dają delikatność. Odrobina wódki albo rumu to nie fanaberia smakowa, tylko technika, bo alkohol szybko odparowuje w gorącym oleju i ciasto wchłania mniej tłuszczu.

### Formowanie

Rozwałkuj ciasto naprawdę bardzo cienko, grubsze miejsca zostają surowe w środku. Charakterystyczna pętelka powstaje, gdy przeciągniesz jeden koniec przez nacięcie na środku.

### Smażenie

W temperaturze 170 do 180 stopni ciasto smaży się równo na złoty kolor. Za gorący olej przypala powierzchnię, zanim środek dojdzie, za chłodny robi faworki tłustymi i ciężkimi. Smaż partiami, odsącz i posyp cukrem pudrem, jeszcze ciepłe.

### Przechowywanie

W zamkniętej blaszanej pudełce wytrzymają dwa do czterech dni, dobrze zapakowane można je też zamrozić na około dwa miesiące.`,
      },
    },
    ingredients: [
      {
        id: "fw-1",
        name: { de: "Weizenmehl (Type 550)", pl: "Mąka pszenna" },
        amount: 250,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "fw-2",
        name: { de: "Eigelb", pl: "Żółtka" },
        amount: 5,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "fw-3",
        name: { de: "Saure Sahne", pl: "Śmietana kwaśna" },
        amount: 60,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        storeHintDe: "Schmand / saure Sahne 20%",
      },
      {
        id: "fw-4",
        name: { de: "Backpulver", pl: "Proszek do pieczenia" },
        amount: 5,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "fw-5",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 20,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "fw-6",
        name: { de: "Wodka", pl: "Wódka" },
        amount: 10,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Neutraler Wodka; alternativ Rum",
        substitute: {
          de: "Rum oder Apfelessig (1 EL)",
          pl: "Rum albo ocet jabłkowy (1 łyżka)",
        },
      },
      {
        id: "fw-7",
        name: { de: "Frittieröl", pl: "Olej do smażenia" },
        amount: 1,
        unit: { de: "l", pl: "l" },
        group: "pantry",
      },
      {
        id: "fw-8",
        name: { de: "Puderzucker", pl: "Cukier puder" },
        amount: 80,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-02-15T10:00:00.000Z",
    updatedAt: "2026-02-15T10:00:00.000Z",
  },
  {
    id: "recipe-gulasz",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-gulasz/3e8865b3-7bee-49c0-8406-8905d5eee76c.webp",
    prepMinutes: 25,
    cookMinutes: 90,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-schmoren"],
    categoryIds: ["category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Gulasz wieprzowy",
        slug: "gulasz-wieprzowy",
        excerpt:
          "Langsam geschmortes Schweinefleisch in einer dicken Paprika-Tomaten-Soße, deutlich sämiger und milder als der ungarische Gulyás und eine andere Sache als der krautige Bigos oder das schnell angebratene Gemüsegericht Leczo.",
        steps: [
          {
            text: "Würfle das Schweinefleisch, salze und pfeffere es kräftig und brate es in heißem Öl von allen Seiten scharf an.",
            tip: "Brate das Fleisch in kleinen Portionen an, denn zu viel auf einmal in der Pfanne senkt die Temperatur und verhindert die Röstaromen, die später die Soße tragen.",
          },
          {
            text: "Gib Zwiebel und Paprika dazu und dünste beides einige Minuten mit, bis die Zwiebel glasig wird.",
            tip: "Schneide die Paprika in ähnlich große Stücke wie das Fleisch, dann garen beide gleichmäßig durch, ohne dass eines zu weich oder zu roh bleibt.",
          },
          {
            text: "Rühre Tomatenmark, Paprikapulver, Knoblauch und Lorbeer ein und lösche danach mit der Brühe ab.",
            tip: "Röste das Paprikapulver nur ganz kurz mit, es wird sonst schnell bitter, denn edelsüßes Pulver verträgt kaum Hitze, bevor Flüssigkeit dazukommt.",
          },
          {
            text: "Schmore den Gulasz zugedeckt 60 bis 90 Minuten bei milder Hitze, bis das Fleisch mit der Gabel zerfällt.",
            tip: "Am Vortag gekocht schmeckt der Gulasz oft noch runder, weil sich die Aromen über Nacht im Kühlschrank weiter verbinden.",
          },
          {
            text: "Serviere den Gulasz heiß mit frisch gebratenen Placki und einem Löffel Śmietana.",
            tip: "Brate die Placki erst kurz vor dem Servieren, während der Gulasz geduldig warm gehalten werden kann, mehr zur Technik im Rezept zu [Placki](/de/rezepte/placki/ziemniaczane).",
          },
        ],
        seoTitle: "Gulasz wieprzowy Rezept | Alemniam",
        seoDescription:
          "Polnischer Schweinegulasch: Schmor-Rezept bilingual mit DE-Einkauf.",
        article: `## Gulasz wieprzowy, Sonntag mit Placki

Langsam geschmortes Schweinefleisch in Paprikasoße ist in vielen polnischen Haushalten der feste Partner zu Kartoffelpuffern. Es ist nicht identisch mit ungarischem Gulasch, denn der polnische Topf hat mehr Soße, weniger Schärfe und oft Tomatenmark.

### Schmoren in Deutschland

Ein Schmortopf oder [Dutch Oven](/de/blog/dutch-oven-kaufberatung) hilft dabei, die Hitze gleichmäßig zu halten. Schweinenacken oder Schulter eignen sich am besten, denn das Fett hält das Fleisch saftig. Kiełbasa kannst du optional mitschmoren, mehr dazu im Guide zu [Kiełbasa-Arten](/de/blog/kielbasa-arten).

### Timing

Am Vortag gekocht schmeckt der Gulasz oft besser. Brate die Placki frisch, während du den Gulasch nur warm hältst.

### Verwandtes

Die [Placki-Familie](/de/rezepte/placki/ziemniaczane) passt klassisch dazu, den ganzen Menürahmen liefert das [Sonntagsessen](/de/blog/sonntagsessen-polnisch).`,
      },
      pl: {
        title: "Gulasz wieprzowy",
        slug: "gulasz-wieprzowy",
        excerpt:
          "Wolno duszona wieprzowina w gęstym sosie paprykowo-pomidorowym, znacznie gęstszym i łagodniejszym niż węgierski gulyás oraz zupełnie inna od kapuścianego bigosu i szybko podsmażanego leczo.",
        steps: [
          {
            text: "Pokrój mięso w kostkę, mocno posól i popieprz, a potem obsmaż je ze wszystkich stron na gorącym oleju.",
            tip: "Obsmażaj mięso w mniejszych partiach, bo za duża ilość naraz obniża temperaturę patelni i nie pozwala powstać aromatom przypieczenia, które później niosą sos.",
          },
          {
            text: "Dodaj cebulę i paprykę i podsmaż je razem kilka minut, aż cebula zrobi się szklista.",
            tip: "Pokrój paprykę na kawałki podobnej wielkości jak mięso, wtedy oba składniki dojdą równo, bez jednego zbyt miękkiego, a drugiego surowego.",
          },
          {
            text: "Wmieszaj koncentrat pomidorowy, paprykę w proszku, czosnek i liść laurowy, a potem zalej całość bulionem.",
            tip: "Podsmaż paprykę w proszku tylko bardzo krótko, inaczej szybko zgorzknieje, bo słodka papryka nie znosi długiej obróbki bez płynu.",
          },
          {
            text: "Duś gulasz pod przykryciem 60 do 90 minut na małym ogniu, aż mięso będzie się rozpadać pod widelcem.",
            tip: "Ugotowany dzień wcześniej gulasz smakuje często jeszcze pełniej, bo smaki łączą się przez noc w lodówce.",
          },
          {
            text: "Podawaj gulasz gorący ze świeżo usmażonymi plackami i łyżką śmietany.",
            tip: "Smaż placki tuż przed podaniem, podczas gdy gulasz spokojnie czeka ciepły, więcej o technice w przepisie na [placki](/pl/rezepte/placki/ziemniaczane).",
          },
        ],
        seoTitle: "Gulasz wieprzowy przepis | Alemniam",
        seoDescription:
          "Gulasz wieprzowy: przepis na duszone mięso, dwujęzycznie ze wskazówkami DE.",
        article: `## Gulasz wieprzowy, niedziela z plackami

Wolno duszona wieprzowina w sosie paprykowym jest w wielu domach stałym towarzyszem placków ziemniaczanych. To nie węgierski gulasz, bo polski garnek ma więcej sosu, mniej ostrości i często koncentrat pomidorowy.

### Duszenie w Niemczech

Garnek żeliwny albo [dutch oven](/pl/blog/garnek-do-duszenia) pomaga utrzymać równy żar. Łopatka lub kark działają najlepiej, bo tłuszcz trzyma mięso soczyste. Kiełbasę możesz duszić opcjonalnie razem z mięsem, więcej w przewodniku o [rodzajach kiełbasy](/pl/blog/rodzaje-kielbasy).

### Czas

Ugotowany dzień wcześniej gulasz smakuje często lepiej. Smaż placki świeżo, a gulasz po prostu trzymaj ciepły.

### Powiązane

[Rodzina placków](/pl/rezepte/placki/ziemniaczane) pasuje klasycznie, cały kontekst menu daje [obiad niedzielny](/pl/blog/obiad-niedzielny).`,
      },
    },
    ingredients: [
      {
        id: "gu-1",
        name: { de: "Schweinefleisch (Schulter/Nacken)", pl: "Mięso wieprzowe (łopatka/kark)" },
        amount: 800,
        unit: { de: "g", pl: "g" },
        group: "other",
      },
      {
        id: "gu-2",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gu-3",
        name: { de: "Paprika", pl: "Papryka" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "gu-4",
        name: { de: "Tomatenmark", pl: "Koncentrat pomidorowy" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "pantry",
      },
      {
        id: "gu-5",
        name: { de: "Paprikapulver edelsüß", pl: "Papryka słodka" },
        amount: 2,
        unit: { de: "EL", pl: "łyżki" },
        group: "spices",
      },
      {
        id: "gu-6",
        name: { de: "Knoblauch", pl: "Czosnek" },
        amount: 3,
        unit: { de: "Zehen", pl: "ząbki" },
        group: "produce",
      },
      {
        id: "gu-7",
        name: { de: "Rinder- oder Gemüsebrühe", pl: "Bulion wołowy lub warzywny" },
        amount: 400,
        unit: { de: "ml", pl: "ml" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T10:00:00.000Z",
    updatedAt: "2026-07-20T10:00:00.000Z",
  },
  {
    id: "recipe-kotlet-mielony",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kotlet-mielony/f11503e2-8ecb-4e14-919a-cbaf9489eae8.webp",
    prepMinutes: 20,
    cookMinutes: 20,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-panieren"],
    categoryIds: ["category-schnell", "category-hauptgerichte"],
    videoUrl: null,
    translations: {
      de: {
        title: "Kotlet mielony",
        slug: "kotlet-mielony",
        excerpt:
          "Panierte Hacksteaks aus gewürztem, mit eingeweichtem Brötchen gebundenem Hackfleisch, alltäglicher und schneller als der geklopfte Kotlet schabowy und mit fester Panade ganz anders als die in Soße gegarten Klopsy.",
        steps: [
          {
            text: "Weiche das alte Brötchen in Milch ein, drücke es aus und verknete es mit dem Hackfleisch, der fein gewürfelten Zwiebel, dem Ei, Salz und Pfeffer.",
            tip: "Das eingeweichte Brötchen hält die Masse saftig, ohne Brötchen wird der Kotlet schnell trocken und fest.",
          },
          {
            text: "Stelle die Masse etwa 30 Minuten kalt, damit sie sich besser formen lässt und beim Braten nicht auseinanderfällt.",
            tip: "Forme die Kotlets erst nach der Ruhezeit, kalte Masse hält ihre Form in der Pfanne deutlich besser als frisch verknetete.",
          },
          {
            text: "Forme flache Kotlets und ziehe sie durch Mehl, verquirltes Ei und Semmelbrösel.",
            tip: "Drücke die Panade am Ende leicht an, so schließt sie sich vollständig und öffnet sich beim Braten nicht.",
          },
          {
            text: "Brate die Kotlets in Butterschmalz oder Öl bei mittlerer Hitze goldbraun, bis die Panade knusprig ist.",
            tip: "Brate nicht zu heiß, denn Panade auf Hackfleisch verbrennt schneller als beim klassischen Schabowy aus einem festen Fleischstück.",
          },
          {
            text: "Serviere die Kotlets heiß mit Kartoffeln, Mizeria oder Ketchup, ganz nach Familientradition.",
            tip: "Reste schmecken am nächsten Tag kurz in der Pfanne aufgebraten oft fast so gut wie frisch.",
          },
        ],
        seoTitle: "Kotlet mielony Rezept | Alemniam",
        seoDescription:
          "Kotlet mielony paniert: Rezept bilingual mit Panier-Technik.",
        article: `## Kotlet mielony, der Alltagsteller

Panierte Hacksteaks sind nicht mit [Schabowy](/de/rezepte/kotlet-schabowy) zu verwechseln, denn hier kommt gemischtes Hack zum Einsatz, dort ein geklopftes Schnitzel. In der Diaspora ist das Gericht schnell, günstig und vertraut.

### Panade

Die Technik gleicht dem Schabowy: Mehl, Ei, Semmelbrösel. Ausführlich erklärt das der [Panieren-Guide](/de/blog/panieren-schabowy), eine [Gusseisenpfanne](/de/blog/gusseisenpfanne) sorgt dabei für eine gleichmäßige Kruste.

### Brötchen einweichen

Ein altes Brötchen oder eine Semmel in Milch eingeweicht macht den Kotlet saftig. Ohne Brötchen wird er schnell trocken und fest.

### Sonntag

Passt neben [Rosół](/de/rezepte/rosol) als zweites Gericht oder solo mit einem einfachen Salat.`,
      },
      pl: {
        title: "Kotlet mielony",
        slug: "kotlet-mielony",
        excerpt:
          "Panierowane kotlety z doprawionego mięsa mielonego związanego namoczoną bułką, codzienne i szybsze niż rozbity kotlet schabowy oraz zupełnie inne niż gotowane w sosie klopsy z panierką.",
        steps: [
          {
            text: "Namocz czerstwą bułkę w mleku, odciśnij ją i wymieszaj z mięsem mielonym, drobno posiekaną cebulą, jajkiem, solą i pieprzem.",
            tip: "Namoczona bułka utrzymuje masę soczystą, bez niej kotlet szybko robi się suchy i zbity.",
          },
          {
            text: "Odstaw masę na około 30 minut do lodówki, żeby lepiej się formowała i nie rozpadała się podczas smażenia.",
            tip: "Formuj kotlety dopiero po odpoczynku, zimna masa trzyma formę na patelni wyraźnie lepiej niż świeżo wymieszana.",
          },
          {
            text: "Formuj płaskie kotlety i obtocz je w mące, roztrzepanym jajku i bułce tartej.",
            tip: "Dociśnij panierkę na końcu lekko dłonią, dzięki temu zamyka się w całości i nie odpada podczas smażenia.",
          },
          {
            text: "Smaż kotlety na smalcu lub oleju na średnim ogniu na złoto, aż panierka będzie chrupiąca.",
            tip: "Nie smaż za mocno, bo panierka na mielonym przypala się szybciej niż przy klasycznym schabowym z jednego kawałka mięsa.",
          },
          {
            text: "Podawaj kotlety gorące z ziemniakami, mizerią albo keczupem, zależnie od tradycji rodzinnej.",
            tip: "Resztki podsmażone krótko na patelni następnego dnia smakują często niemal tak dobrze jak świeże.",
          },
        ],
        seoTitle: "Kotlet mielony przepis | Alemniam",
        seoDescription:
          "Kotlet mielony panierowany: przepis dwujęzyczny z techniką panierowania.",
        article: `## Kotlet mielony, talerz na co dzień

Kotlety z mielonego mięsa w panierce to nie to samo co [schabowy](/pl/rezepte/kotlet-schabowy), bo tu jest mięso mielone, a tam rozbity kawałek. W diasporze to danie szybkie, tanie i lubiane przez dzieci.

### Panierka

Technika jak u schabowego: mąka, jajko, bułka tarta. Więcej opisuje [przewodnik panierowania](/pl/blog/panierowanie-kotlet), a równy żar daje [patelnia żeliwna](/pl/blog/patelnia-zelivna).

### Bułka

Namoczona kajzerka trzyma soczystość mięsa. Bez bułki kotlet szybko robi się twardy i suchy.

### Niedziela

Pasuje obok [rosołu](/pl/rezepte/rosol) jako drugie danie albo solo z surówką.`,
      },
    },
    ingredients: [
      {
        id: "km-1",
        name: { de: "Hackfleisch gemischt", pl: "Mięso mielone" },
        amount: 600,
        unit: { de: "g", pl: "g" },
        group: "other",
        storeHintDe: "Hack gemischt / Schwein-Rind",
      },
      {
        id: "km-2",
        name: { de: "Brötchen (alt)", pl: "Bułka (czerstwa)" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "pantry",
      },
      {
        id: "km-3",
        name: { de: "Milch", pl: "Mleko" },
        amount: 100,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "km-4",
        name: { de: "Zwiebel", pl: "Cebula" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "km-5",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "km-6",
        name: { de: "Semmelbrösel", pl: "Bułka tarta" },
        amount: 100,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
    ],
    createdAt: "2026-07-20T10:00:00.000Z",
    updatedAt: "2026-07-20T10:00:00.000Z",
  },
  {
    id: "recipe-kluski-slaskie",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kluski-slaskie/58a41f17-ed2a-452f-94bc-05182f6a25f0.webp",
    prepMinutes: 40,
    cookMinutes: 15,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-hauptgerichte", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Kluski śląskie",
        slug: "kluski-slaskie",
        excerpt:
          "Kluski śląskie sind schlesische Kartoffelklöße aus Kartoffeln und Kartoffelstärke mit einer charakteristischen Mulde in der Mitte, spürbar fester als die länglichen Kopytka und ohne Füllung im Gegensatz zu den großen Pyzy.",
        steps: [
          {
            text: "Kartoffeln in der Schale kochen, gut ausdampfen lassen und durch eine Kartoffelpresse drücken.",
            tip: "Kartoffeln, die noch heiß und trocken durch die Presse gehen, geben später weniger Feuchtigkeit ab, das hält den Teig fest statt klebrig.",
          },
          {
            text: "Die Kartoffelmasse mit Kartoffelstärke, Ei und Salz zu einem glatten, festen Teig verkneten.",
            tip: "Nimm im Verhältnis etwa vier Teile Kartoffeln auf einen Teil Stärke, zu viel Stärke macht die Klöße später gummiartig statt zart.",
          },
          {
            text: "Aus dem Teig gleich große Kugeln formen und mit dem Finger in der Mitte eine Mulde eindrücken.",
            tip: "Die Mulde ist keine reine Dekoration, sie hilft den Klößen, gleichmäßig zu garen, und sammelt später die Soße auf dem Teller.",
          },
          {
            text: "In leicht siedendem Salzwasser gar ziehen lassen, bis die Klöße an die Oberfläche steigen.",
            tip: "Nimm sie zügig heraus, sobald sie oben schwimmen, länger im Wasser werden sie schnell zäh und gummiartig.",
          },
          {
            text: "Mit [Rosół](/de/rezepte/rosol) und gebratener Zwiebel servieren, klassisch auch neben [Rolada śląska](/de/rezepte/rolada-slaska) und Rotkohl.",
            tip: "Die Klöße sind kein Ersatz für die länglichen [Kopytka](/de/rezepte/kopytka) oder die großen, gefüllten [Pyzy](/de/rezepte/pyzy), alle drei gehören zur selben Kartoffelklöße-Familie, aber jede hat eine eigene Form und Technik.",
          },
        ],
        seoTitle: "Kluski śląskie Rezept | Alemniam",
        seoDescription:
          "Schlesische Kartoffelklöße mit Mulde: Beilage-Rezept bilingual, mit Einkaufshinweisen für Deutschland.",
        article: `## Kluski śląskie: die Mulde in der Mitte

Gekochte Kartoffeln, Kartoffelstärke und Ei werden zu einem festen Teig verknetet, zur Kugel geformt und in der Mitte mit einer charakteristischen Mulde versehen. Kluski śląskie stammen aus Schlesien und liegen in der Diaspora oft neben [Rosół](/de/rezepte/rosol) auf dem Sonntagsteller.

### Stärke statt Mehl

Kartoffelstärke, im Supermarkt auch als Speisestärke bekannt, macht den Teig glatt und leicht durchscheinend. Zu viel Stärke macht die Klöße gummiartig, der Teig soll fest, aber noch gut formbar bleiben.

### Kochen

Das Wasser darf nur sanft sieden, starkes Kochen lässt die Klöße aufreißen. Nimm sie kurz nach dem Aufschwimmen aus dem Topf, sonst werden sie zäh.

### Beilage

Gebratene Zwiebel, brauner Schmalz oder eine Pilzsoße passen klassisch dazu. Mehr zur Brühe liefert die [Rosół-Technik](/de/blog/rosol-technik).`,
      },
      pl: {
        title: "Kluski śląskie",
        slug: "kluski-slaskie",
        excerpt:
          "Kluski śląskie to śląskie kluski ziemniaczane ze skrobią, z charakterystycznym wgłębieniem po środku, wyraźnie bardziej sprężyste niż podłużne kopytka i bez nadzienia, w przeciwieństwie do dużych pyz.",
        steps: [
          {
            text: "Ugotuj ziemniaki w mundurkach, dobrze odparuj i przeciśnij przez praskę.",
            tip: "Gorące i suche ziemniaki po przeciśnięciu oddają mniej wilgoci, dzięki temu ciasto wychodzi zwarte, a nie klejące.",
          },
          {
            text: "Zagnieć masę ziemniaczaną ze skrobią ziemniaczaną, jajkiem i solą na gładkie, zwarte ciasto.",
            tip: "Zachowaj proporcję około cztery części ziemniaków na jedną część skrobi, za dużo skrobi zrobi kluski gumowate, a nie delikatne.",
          },
          {
            text: "Uformuj z ciasta równe kulki i palcem zrób w środku charakterystyczne wgłębienie.",
            tip: "Wgłębienie to nie tylko dekoracja, pomaga kluskom równo się ugotować i później zatrzymuje sos na talerzu.",
          },
          {
            text: "Gotuj w lekko wrzącej, osolonej wodzie, aż kluski wypłyną na powierzchnię.",
            tip: "Wyjmij je szybko po wypłynięciu, dłużej w wodzie robią się gumowate i twarde.",
          },
          {
            text: "Podawaj z [rosołem](/pl/rezepte/rosol) i podsmażoną cebulą, klasycznie także obok [rolady śląskiej](/pl/rezepte/rolada-slaska) i modrej kapusty.",
            tip: "Kluski śląskie to inna rodzina niż podłużne [kopytka](/pl/rezepte/kopytka) czy duże, nadziewane [pyzy](/pl/rezepte/pyzy), wszystkie trzy powstają z ziemniaków, ale każde ma inny kształt i technikę.",
          },
        ],
        seoTitle: "Kluski śląskie przepis | Alemniam",
        seoDescription:
          "Kluski śląskie: przepis na kluski z dziurką, dwujęzycznie, z poradami dotyczącymi ciasta i skrobi.",
        article: `## Kluski śląskie: wgłębienie po środku

Ugotowane ziemniaki, skrobia ziemniaczana i jajko tworzą zwarte ciasto, formowane w kulki z charakterystycznym wgłębieniem po środku. Kluski śląskie pochodzą ze Śląska i w diasporze często trafiają na talerz razem z [rosołem](/pl/rezepte/rosol) w niedzielę.

### Skrobia, nie mąka

Skrobia ziemniaczana, dostępna w każdym markecie, daje ciastu gładkość i lekką przejrzystość. Za dużo skrobi robi kluski gumowate, ciasto ma być zwarte, ale wciąż dobrze formowalne.

### Gotowanie

Woda powinna tylko delikatnie wrzeć, mocne wrzenie rozrywa kluski. Wyjmij je zaraz po wypłynięciu, dłużej w wodzie robią się twarde.

### Dodatki

Cebula podsmażona na smalcu albo sos grzybowy pasują klasycznie. Więcej o bulionie znajdziesz w przewodniku, [jak ugotować rosół](/pl/blog/jak-ugotowac-rosol).`,
      },
    },
    ingredients: [
      {
        id: "ks-1",
        name: { de: "Kartoffeln", pl: "Ziemniaki" },
        amount: 1,
        unit: { de: "kg", pl: "kg" },
        group: "produce",
      },
      {
        id: "ks-2",
        name: { de: "Kartoffelstärke", pl: "Skrobia ziemniaczana" },
        amount: 200,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Speisestärke",
      },
      {
        id: "ks-3",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
    ],
    createdAt: "2026-07-20T10:00:00.000Z",
    updatedAt: "2026-07-20T10:00:00.000Z",
  },
  {
    id: "recipe-racuchy",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-racuchy/b23f5e2d-9b31-4488-a0bc-61af0a0487ae.webp",
    prepMinutes: 90,
    cookMinutes: 20,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: ["technique-teig"],
    categoryIds: ["category-suess", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Racuchy z jabłkami",
        slug: "racuchy-jablka",
        excerpt:
          "Racuchy z jabłkami sind dicke Pfannkuchen aus Hefeteig mit Apfelstücken, deutlich fluffiger als dünne Naleśniki aus Ei-Milch-Teig und anders als die aus rohem, geriebenem Kartoffelteig gebackenen Placki mit Apfel.",
        steps: [
          {
            text: "Hefe in lauwarmer Milch mit etwas Zucker auflösen und etwa 10 Minuten gehen lassen, bis sich kleine Blasen bilden.",
            tip: "Die Milch darf nur lauwarm sein, zu heiße Milch tötet die Hefe ab und der Teig geht dann kaum noch auf.",
          },
          {
            text: "Mehl, Ei, eine Prise Salz und Vanille dazugeben, zu einem glatten Teig verarbeiten und danach etwa 45 Minuten gehen lassen.",
            tip: "Der Teig braucht diese Ruhezeit wirklich, ohne sie werden die Racuchy flach und dicht statt luftig.",
          },
          {
            text: "Äpfel schälen, entkernen und in dünne Spalten schneiden.",
            tip: "Feste, säuerliche Sorten wie Boskoop oder Granny Smith halten beim Braten die Form besser als mehlige Äpfel.",
          },
          {
            text: "Den Teig portionsweise in eine heiße, gefettete Pfanne geben, Apfelspalten hineinlegen und wenden, sobald die Unterseite goldbraun ist.",
            tip: "Brate bei mittlerer Hitze, damit die Mitte durchgart, bevor die Kruste zu dunkel wird, Hefeteig braucht dafür etwas mehr Zeit als dünner Pfannkuchenteig.",
          },
          {
            text: "Warm mit reichlich Puderzucker servieren.",
            tip: "Anders als [Pączki](/de/rezepte/paczki), die im tiefen Fettbad schwimmen, brauchen Racuchy nur eine flache Pfanne mit wenig Fett.",
          },
        ],
        seoTitle: "Racuchy z jabłkami Rezept | Alemniam",
        seoDescription:
          "Polnische Apfel-Racuchy: Hefeteig-Rezept bilingual für deutsche Küchen, mit klarer Abgrenzung zu Naleśniki und Placki.",
        article: `## Racuchy: Hefe, Apfel, Pfanne

Racuchy sind dicke Pfannkuchen aus Hefeteig mit Apfelstücken, fluffiger als die aus rohem Kartoffelteig gebackenen [Placki mit Apfel](/de/rezepte/placki/mit-apfel) und deutlich dicker als dünne Naleśniki. In der Diaspora beliebt zum Nachmittagskaffee oder als süßes, leichtes Abendessen.

### Hefe in Deutschland

Trockenhefe aus dem Supermarkt funktioniert zuverlässig, die Milch darf nur lauwarm sein, nicht heiß. Der Teig braucht echte Ruhe, ohne Geduld werden die Racuchy flach und dicht.

### Äpfel

Feste, säuerliche Äpfel halten beim Braten die Form am besten. Schneide die Spalten nicht zu dick, sonst bleibt der Teig darunter roh.

### Anlässe

Racuchy stehen der [Tłusty-Czwartek](/de/blog/tlusty-czwartek)-Tradition nahe, lassen sich aber das ganze Jahr über backen.`,
      },
      pl: {
        title: "Racuchy z jabłkami",
        slug: "racuchy-jablka",
        excerpt:
          "Racuchy z jabłkami to grube placki na cieście drożdżowym z kawałkami jabłka, znacznie puszystsze niż cienkie naleśniki na cieście jajeczno-mlecznym i inne niż placki z jabłkami ze startego, surowego ziemniaka.",
        steps: [
          {
            text: "Rozpuść drożdże w ciepłym mleku z odrobiną cukru i odstaw na około 10 minut, aż zaczną się tworzyć bąbelki.",
            tip: "Mleko musi być tylko ciepłe, za gorące zabija drożdże i ciasto wtedy w ogóle nie wyrośnie.",
          },
          {
            text: "Dodaj mąkę, jajko, szczyptę soli i wanilię, wymieszaj na gładkie ciasto i odstaw na około 45 minut.",
            tip: "Ciasto naprawdę potrzebuje tego czasu, bez niego racuchy wychodzą płaskie i zbite, a nie puszyste.",
          },
          {
            text: "Obierz jabłka, usuń gniazda i pokrój w cienkie ćwiartki.",
            tip: "Twarde, kwaskowate odmiany, na przykład koksy czy szara reneta, lepiej trzymają formę podczas smażenia niż mączyste jabłka.",
          },
          {
            text: "Kładź porcje ciasta na rozgrzaną, natłuszczoną patelnię, wkładaj kawałki jabłka i przewracaj, gdy spód się zezłoci.",
            tip: "Smaż na średnim ogniu, żeby środek zdążył się upiec, zanim skórka zrobi się za ciemna, ciasto drożdżowe potrzebuje na to nieco więcej czasu niż cienki naleśnik.",
          },
          {
            text: "Podawaj ciepłe, obficie posypane cukrem pudrem.",
            tip: "W przeciwieństwie do [pączków](/pl/rezepte/paczki), które smaży się w głębokim tłuszczu, racuchy potrzebują tylko płytkiej patelni z odrobiną oleju.",
          },
        ],
        seoTitle: "Racuchy z jabłkami przepis | Alemniam",
        seoDescription:
          "Racuchy z jabłkami na drożdżach: przepis dwujęzyczny, z jasną różnicą wobec naleśników i placków z jabłkami.",
        article: `## Racuchy: drożdże, jabłko, patelnia

Racuchy to grube placki na cieście drożdżowym z kawałkami jabłka, puszystsze niż [placki z jabłkami](/pl/rezepte/placki/jablka) ze startego, surowego ziemniaka i grubsze niż cienkie naleśniki. W diasporze popularne na popołudniową kawę albo jako słodki, lekki obiad.

### Drożdże w Niemczech

Suszone drożdże z marketu działają pewnie, mleko musi być tylko ciepłe, nie gorące. Ciasto potrzebuje czasu na wyrośnięcie, bez cierpliwości wychodzi płaskie i ciężkie.

### Jabłka

Twarde, kwaskowate jabłka najlepiej trzymają formę podczas smażenia. Nie kroj ćwiartek za grubo, inaczej środek zostaje surowy.

### Okazje

Racuchy są bliskie tradycji [Tłustego Czwartku](/pl/blog/tlusty-czwartek-przepisy), ale smaży się je przez cały rok.`,
      },
    },
    ingredients: [
      {
        id: "ra-1",
        name: { de: "Mehl", pl: "Mąka" },
        amount: 300,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "ra-2",
        name: { de: "Milch", pl: "Mleko" },
        amount: 250,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "ra-3",
        name: { de: "Hefe (frisch oder trocken)", pl: "Drożdże" },
        amount: 20,
        unit: { de: "g", pl: "g" },
        group: "pantry",
        storeHintDe: "Frischhefe oder 1 Päckchen Trockenhefe",
        substitute: {
          de: "7 g Trockenhefe",
          pl: "7 g drożdży suszonych",
        },
      },
      {
        id: "ra-4",
        name: { de: "Zucker", pl: "Cukier" },
        amount: 30,
        unit: { de: "g", pl: "g" },
        group: "pantry",
      },
      {
        id: "ra-5",
        name: { de: "Ei", pl: "Jajko" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
      {
        id: "ra-6",
        name: { de: "Äpfel", pl: "Jabłka" },
        amount: 3,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
    ],
    createdAt: "2026-07-20T10:00:00.000Z",
    updatedAt: "2026-07-20T10:00:00.000Z",
  },
  {
    id: "recipe-chlodnik",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-chlodnik/d31adac5-90fd-4815-965e-a9d243d59924.webp",
    prepMinutes: 30,
    cookMinutes: 0,
    servings: 4,
    regionIds: [],
    occasionIds: [],
    techniqueIds: ["technique-bulion"],
    categoryIds: ["category-suppen", "category-vegetarisch"],
    videoUrl: null,
    translations: {
      de: {
        title: "Chłodnik litewski",
        slug: "chlodnik-litewski",
        excerpt:
          "Chłodnik litewski ist eine kalte Suppe aus Rote Bete, Kefir oder Buttermilch, Gurke und Dill, cremig-säuerlich und eiskalt serviert, das genaue Gegenteil des heißen, klaren Barszcz czerwony.",
        steps: [
          {
            text: "Gekochte Rote Bete fein reiben oder pürieren und mit Kefir oder Buttermilch sowie kalter Brühe glattrühren.",
            tip: "Für die klassische litauisch-polnische Note nimmst du Kefir, in Deutschland funktioniert auch Buttermilch oder Naturjoghurt genauso gut.",
          },
          {
            text: "Gurke, Radieschen, Dill und hartgekochtes Ei in feine Würfel schneiden.",
            tip: "Schneide das Gemüse wirklich fein, große Stücke passen nicht zur cremigen, löffelbaren Textur der Suppe.",
          },
          {
            text: "Das Gemüse unter die kalte Basis mischen und mit Salz, etwas Zitrone und einer Prise Zucker abschmecken.",
            tip: "Probiere nach ein paar Minuten noch einmal ab, der Kefir bindet die Säure erst nach einer Weile, direkt nach dem Mischen schmeckt die Suppe oft noch zu mild.",
          },
          {
            text: "Mindestens zwei Stunden kalt stellen, damit sich die Aromen setzen, am nächsten Tag schmeckt der Chłodnik oft noch runder.",
            tip: "Anders als der klare, heiße [Barszcz czerwony](/de/rezepte/barszcz-czerwony) lebt Chłodnik von Kälte und Säure, serviere ihn nie lauwarm.",
          },
          {
            text: "Mit einer halben gekochten Kartoffel, hartgekochtem Ei und extra Śmietana servieren.",
            tip: "Eine dickere Śmietana zum Finish findest du oft im [Polenladen](/de/blog/polenladen-einkaufen), was Śmietana von Schmand unterscheidet, erklärt der Guide [Śmietana vs. Schmand](/de/blog/smietana-schmand).",
          },
        ],
        seoTitle: "Chłodnik litewski Rezept | Alemniam",
        seoDescription:
          "Kalte polnisch-litauische Rote-Bete-Suppe: Rezept bilingual mit Hinweisen zu Kefir, Śmietana und der Abgrenzung zum heißen Barszcz.",
        article: `## Chłodnik: kalte Suppe für heiße Sommer

Rote Bete, Kefir oder Buttermilch, Gurke und Dill ergeben eine rosa, kühle, säuerlich-frische Suppe. Anders als der heiße, klare [Barszcz czerwony](/de/rezepte/barszcz-czerwony) wird Chłodnik eiskalt aus dem Kühlschrank gegessen, nie warm.

### Śmietana und Kefir

Der Unterschied zwischen [Śmietana und Schmand](/de/blog/smietana-schmand) betrifft vor allem Säure und Cremigkeit. Kefir aus dem Supermarkt funktioniert gut, im [Polenladen](/de/blog/polenladen-einkaufen) findest du oft eine dickere Śmietana für das Finish.

### Rote Bete

Vorgekochte Rote Bete aus dem Glas spart Zeit, frisch gekochte schmeckt erdiger und etwas süßer. Die Suppe muss richtig gut gekühlt sein, sonst geht ihr Charakter verloren.

### Servieren

Mit einer halben Kartoffel und einem Ei wird daraus ein leichtes Hauptgericht, kein Vorspeisen-Häppchen neben dem Grill.`,
      },
      pl: {
        title: "Chłodnik litewski",
        slug: "chlodnik-litewski",
        excerpt:
          "Chłodnik litewski to zimna zupa na burakach z kefirem lub maślanką, ogórkiem i koperkiem, kremowo-kwaśna i podawana na lodzie, czyli dokładne przeciwieństwo gorącego, klarownego barszczu czerwonego.",
        steps: [
          {
            text: "Ugotowane buraki zetrzyj lub zblenduj i wymieszaj z kefirem lub maślanką oraz zimnym bulionem na gładką bazę.",
            tip: "Do klasycznej litewsko-polskiej wersji użyj kefiru, w Niemczech równie dobrze sprawdzi się maślanka albo jogurt naturalny.",
          },
          {
            text: "Ogórek, rzodkiewkę, koperek i jajko na twardo pokrój w drobną kostkę.",
            tip: "Krój warzywa naprawdę drobno, duże kawałki nie pasują do kremowej, łyżkowej konsystencji tej zupy.",
          },
          {
            text: "Warzywa dodaj do zimnej bazy i dopraw solą, odrobiną cytryny i szczyptą cukru.",
            tip: "Spróbuj jeszcze raz po chwili, kefir wiąże kwasowość dopiero po pewnym czasie, więc zaraz po wymieszaniu zupa bywa jeszcze zbyt łagodna.",
          },
          {
            text: "Wstaw na minimum dwie godziny do lodówki, żeby smaki się przegryzły, następnego dnia chłodnik smakuje często jeszcze lepiej.",
            tip: "W przeciwieństwie do gorącego, klarownego [barszczu czerwonego](/pl/rezepte/barszcz-czerwony) chłodnik żyje chłodem i kwasem, nigdy nie podawaj go letniego.",
          },
          {
            text: "Podawaj z ugotowaną połówką ziemniaka, jajkiem na twardo i dodatkową śmietaną.",
            tip: "Lepszą śmietanę na wierzch znajdziesz często w [polskim sklepie](/pl/blog/sklep-polski-zakupy), a różnicę między śmietaną i schmandem wyjaśnia poradnik [śmietana czy schmand](/pl/blog/smietana-czy-schmand).",
          },
        ],
        seoTitle: "Chłodnik litewski przepis | Alemniam",
        seoDescription:
          "Chłodnik litewski na burakach: przepis dwujęzyczny, z poradami o kefirze, śmietanie i różnicy wobec gorącego barszczu.",
        article: `## Chłodnik: zimna zupa na gorące lato

Buraki, kefir lub maślanka, ogórek i koperek dają różową, chłodną, kwaśno-świeżą zupę. W przeciwieństwie do gorącego, klarownego [barszczu czerwonego](/pl/rezepte/barszcz-czerwony) chłodnik jada się na lodzie, nigdy ciepły.

### Śmietana i kefir

Różnica między [śmietaną i schmandem](/pl/blog/smietana-czy-schmand) dotyczy głównie kwasowości i kremowości. Kefir z marketu działa dobrze, w [polskim sklepie](/pl/blog/sklep-polski-zakupy) często znajdziesz gęstszą śmietanę na wierzch.

### Buraki

Ugotowane buraki ze słoika oszczędzają czas, świeżo ugotowane smakują bardziej ziemiście i słodko. Zupa musi być naprawdę dobrze schłodzona, inaczej traci swój charakter.

### Podanie

Z połówką ziemniaka i jajkiem wychodzi lekki obiad, a nie tylko przystawka obok grilla.`,
      },
    },
    ingredients: [
      {
        id: "ch-1",
        name: { de: "Gekochte Rote Bete", pl: "Buraki ugotowane" },
        amount: 500,
        unit: { de: "g", pl: "g" },
        group: "produce",
        storeHintDe: "Vorgekocht im Glas oder frisch",
      },
      {
        id: "ch-2",
        name: { de: "Kefir oder Naturjoghurt", pl: "Kefir lub jogurt naturalny" },
        amount: 500,
        unit: { de: "ml", pl: "ml" },
        group: "dairy",
      },
      {
        id: "ch-3",
        name: { de: "Gurke", pl: "Ogórek" },
        amount: 1,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ch-4",
        name: { de: "Radieschen", pl: "Rzodkiewka" },
        amount: 4,
        unit: { de: "Stück", pl: "szt." },
        group: "produce",
      },
      {
        id: "ch-5",
        name: { de: "Dill", pl: "Koper" },
        amount: 1,
        unit: { de: "Bund", pl: "pęczek" },
        group: "produce",
      },
      {
        id: "ch-6",
        name: { de: "Sauerrahm", pl: "Śmietana" },
        amount: 150,
        unit: { de: "g", pl: "g" },
        group: "dairy",
        storeHintDe: "Schmand / saure Sahne",
      },
      {
        id: "ch-7",
        name: { de: "Eier", pl: "Jajka" },
        amount: 2,
        unit: { de: "Stück", pl: "szt." },
        group: "dairy",
      },
    ],
    createdAt: "2026-07-20T10:00:00.000Z",
    updatedAt: "2026-07-20T10:00:00.000Z",
  },
];

export const seedRecipes: Recipe[] = [
  ...baseRecipes,
  ...seedFamilyVariantRecipes,
  ...seedRecipesWave5,
  ...seedRecipesWave6,
  ...seedRecipesWave7,
  ...seedRecipesWave8,
  ...seedRecipesWave9,
  ...seedRecipesWave10,
  ...seedRecipesWave11,
  ...seedRecipesWave12,
  ...seedRecipesWave13,
  ...seedRecipesWave14,
  ...seedRecipesWave15,
  ...seedRecipesWave16,
  ...seedRecipesWave17,
  ...seedRecipesWave17Malosolne,
].map((recipe) => {
  if (recipe.id === "recipe-nalesniki") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-nalesniki-guide",
        "post-twarog",
        "post-smietana-schmand",
        "post-ersatzprodukte-de",
      ],
    };
  }
  if (recipe.id === "recipe-bigos") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-bigos-guide",
        "post-dutch-oven",
        "post-kielbasa-arten",
        "post-kiszenie",
        "post-ferment-glaeser",
        "post-kasza",
        "post-polenladen",
      ],
    };
  }
  if (recipe.id === "recipe-zurek") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-zakwas-zurek",
        "post-polnische-suppen",
        "post-kielbasa-arten",
        "post-ferment-glaeser",
        "post-polenladen",
      ],
    };
  }
  if (recipe.id === "recipe-barszcz") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-barszcz-technik",
        "post-polnische-suppen",
        "post-smietana-schmand",
        "post-wigilia",
        "post-polenladen",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-wigilia"]),
      ),
    };
  }
  if (recipe.id === "recipe-makowiec") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-makowiec-technik",
        "post-wigilia",
        "post-faworki-technik",
        "post-ersatzprodukte-de",
        "post-polenladen",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-wigilia"]),
      ),
    };
  }
  if (recipe.id === "recipe-uszka") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-barszcz-technik",
        "post-wigilia",
        "post-pierogi-teig",
        "post-polenladen",
        "post-freezer-meal-prep",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-wigilia"]),
      ),
      techniqueIds: Array.from(
        new Set([...recipe.techniqueIds, "technique-teig", "technique-fuellen"]),
      ),
    };
  }
  if (recipe.id === "recipe-rosol") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-rosol-technik",
        "post-polnische-suppen",
        "post-sonntagsessen",
        "post-dutch-oven",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-niedziela"]),
      ),
      techniqueIds: Array.from(
        new Set([...recipe.techniqueIds, "technique-bulion"]),
      ),
    };
  }
  if (recipe.id === "recipe-schabowy") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-panieren",
        "post-gusseisen",
        "post-sonntagsessen",
        "post-wielkanoc",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-niedziela"]),
      ),
    };
  }
  if (recipe.id === "recipe-placki") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-placki-guide",
        "post-gusseisen",
        "post-sonntagsessen",
        "post-kasza",
        "post-smietana-schmand",
      ],
    };
  }
  if (recipe.id === "recipe-gulasz") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-placki-guide",
        "post-sonntagsessen",
        "post-dutch-oven",
        "post-kielbasa-arten",
        "post-gusseisen",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-niedziela"]),
      ),
      techniqueIds: Array.from(
        new Set([...recipe.techniqueIds, "technique-schmoren"]),
      ),
    };
  }
  if (recipe.id === "recipe-kotlet-mielony") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-panieren",
        "post-gusseisen",
        "post-sonntagsessen",
        "post-fleischwolf",
        "post-wielkanoc",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-niedziela"]),
      ),
      techniqueIds: Array.from(
        new Set([...recipe.techniqueIds, "technique-panieren"]),
      ),
    };
  }
  if (recipe.id === "recipe-kluski-slaskie") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-rosol-technik",
        "post-sonntagsessen",
        "post-kasza",
        "post-polnische-suppen",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-niedziela"]),
      ),
    };
  }
  if (recipe.id === "recipe-racuchy") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-tlusty-czwartek",
        "post-paczek-technik",
        "post-twarog",
        "post-ersatzprodukte-de",
      ],
    };
  }
  if (recipe.id === "recipe-chlodnik") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-smietana-schmand",
        "post-polnische-suppen",
        "post-barszcz-technik",
        "post-ersatzprodukte-de",
      ],
    };
  }
  if (recipe.id === "recipe-golabki") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-golabki-guide",
        "post-sonntagsessen",
        "post-smietana-schmand",
        "post-dutch-oven",
        "post-rosol-technik",
        "post-kasza",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-niedziela"]),
      ),
    };
  }
  if (recipe.id === "recipe-faworki") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-faworki-technik",
        "post-tlusty-czwartek",
        "post-paczek-technik",
        "post-ersatzprodukte-de",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-tlusty-czwartek"]),
      ),
    };
  }
  if (recipe.id === "recipe-paczki") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-paczek-technik",
        "post-tlusty-czwartek",
        "post-polenladen",
        "post-ersatzprodukte-de",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-tlusty-czwartek"]),
      ),
    };
  }
  if (recipe.id === "recipe-fasolka") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-fasolka-guide",
        "post-kielbasa-arten",
        "post-polenladen",
        "post-majeranek",
        "post-dutch-oven",
      ],
    };
  }
  if (recipe.id === "recipe-oscypek") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-oscypek",
        "post-gusseisen",
        "post-polenladen",
        "post-ersatzprodukte-de",
      ],
    };
  }
  if (recipe.id === "recipe-pierogi-leniwe") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-twarog",
        "post-nalesniki-guide",
        "post-pierogi-guide",
        "post-ersatzprodukte-de",
      ],
    };
  }
  if (recipe.id === "recipe-kopytka") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-placki-guide",
        "post-sonntagsessen",
        "post-dutch-oven",
        "post-kasza",
      ],
    };
  }
  if (recipe.id === "recipe-lazanki") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-kiszenie",
        "post-bigos-guide",
        "post-polenladen",
        "post-sonntagsessen",
      ],
    };
  }
  if (recipe.id === "recipe-pyzy") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-fleischwolf",
        "post-sonntagsessen",
        "post-freezer-meal-prep",
        "post-majeranek",
      ],
    };
  }
  if (recipe.id === "recipe-zrazy") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-sonntagsessen",
        "post-dutch-oven",
        "post-majeranek",
        "post-rosol-technik",
      ],
    };
  }
  if (recipe.id === "recipe-karp") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-wigilia",
        "post-majeranek",
        "post-polenladen",
        "post-ersatzprodukte-de",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-wigilia"]),
      ),
    };
  }
  if (recipe.id === "recipe-krokiety") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-nalesniki-guide",
        "post-barszcz-technik",
        "post-panieren",
        "post-kiszenie",
        "post-wigilia",
      ],
      techniqueIds: Array.from(
        new Set([
          ...recipe.techniqueIds,
          "technique-teig",
          "technique-panieren",
        ]),
      ),
    };
  }
  if (recipe.id === "recipe-sernik") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-makowiec-technik",
        "post-twarog",
        "post-ersatzprodukte-de",
        "post-wielkanoc",
        "post-polenladen",
      ],
    };
  }
  if (recipe.id === "recipe-sledz") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-wigilia",
        "post-polenladen",
        "post-ersatzprodukte-de",
        "post-smietana-schmand",
      ],
      occasionIds: Array.from(
        new Set([...recipe.occasionIds, "occasion-wigilia"]),
      ),
    };
  }
  /** Wave 8 D — Knedle; Integrator E: keep when merging A/B related maps. */
  if (recipe.id === "recipe-knedle-sliwki") {
    return {
      ...recipe,
      relatedPostIds: [
        "post-pierogi-guide",
        "post-sonntagsessen",
        "post-polenladen",
        "post-ersatzprodukte-de",
      ],
    };
  }
  return recipe;
});

export const seedProfiles: Profile[] = [
  {
    id: "user-admin",
    email: "admin@alemniam.local",
    role: "admin",
    displayName: "Admin",
    preferredLocale: "de",
  },
  {
    id: "user-demo",
    email: "demo@alemniam.local",
    role: "user",
    displayName: "Demo",
    preferredLocale: "pl",
  },
];

export const seedSaved: SavedRecipe[] = [];
export const seedLists: ShoppingList[] = [];
export const seedSubmissions: CommunitySubmission[] = [];
