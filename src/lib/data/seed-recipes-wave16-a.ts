import type { Recipe } from "@/types/content";

/**
 * Wave 16 Paket A — Surówka + Kotlet de volaille.
 * Affiliate: guide-only. NO SEED_VERSION bump here.
 */
export const seedRecipesWave16A: Recipe[] = [

  {
    id: "recipe-surowka",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-surowka/59d2b015-2967-4fcf-bc23-53afe6dbb174.webp",
    prepMinutes: 20,
    cookMinutes: 0,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: [],
    categoryIds: ["category-vegetarisch", "category-schnell"],
    relatedPostIds: [
      "post-sonntagsessen",
      "post-polenladen",
      "post-ersatzprodukte-de",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Surówka z kapusty",
        slug: "surowka",
        excerpt:
          "Surówka z kapusty ist ein knackiger polnischer Krautsalat mit Karotte, der als kühle, säuerliche Beilage neben Braten und Kartoffeln auf den Tisch kommt.",
        steps: [
          {
            text: "Weißkohl und Karotte sehr fein hobeln oder schneiden, dann in einer Schüssel mit einem Teelöffel Salz kräftig durchkneten, bis Saft austritt. Zehn Minuten stehen lassen und die überschüssige Flüssigkeit abgießen.",
            tip: "Dickere Streifen bleiben zäh, deshalb lohnt sich eine feine Hobelklinge oder ein scharfes Messer. Dieser Salat bleibt kalt und roh, ganz anders als die warm geschmorte [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana) oder die Gurken-Sahne-Variante [Mizeria](/de/rezepte/mizeria).",
          },
          {
            text: "Mit Essig oder Zitronensaft, zwei Esslöffeln Öl, Pfeffer und einer Prise Zucker abschmecken. Wer mag, rührt einen halben Teelöffel Kümmel unter oder hebt zwei Esslöffel Joghurt oder Schmand für eine mildere, cremigere Variante ein.",
            tip: "Bei der Sahnefrage hilft der Beitrag zu [Śmietana und Schmand](/de/blog/smietana-schmand) weiter. Wer stattdessen einen Mayo-Gemüsesalat sucht, findet den bei der [Sałatka jarzynowa](/de/rezepte/salatka-jarzynowa), die geschmacklich in eine ganz andere Richtung geht.",
          },
          {
            text: "Den Salat kalt stellen und vor dem Servieren noch einmal abschmecken und mit der Gabel lockern. Neben Braten, Schnitzel oder Hühnchen anrichten.",
            tip: "Aromatischen Kümmel findest du oft im [Polenladen](/de/blog/polenladen-einkaufen), und falls eine Zutat fehlt, hilft der Überblick zu [Ersatzprodukten](/de/blog/ersatzprodukte-de). Der Salat schmeckt auch am nächsten Tag noch gut, weil er durch das Salzen nicht wässrig wird.",
          },
        ],
        seoTitle: "Surówka z kapusty Rezept | Krautsalat polnisch | Alemniam",
        seoDescription:
          "Surówka z kapusty: knackiger polnischer Krautsalat mit Karotte, serviert als kühle Beilage zum Sonntagsbraten.",
      },
      pl: {
        title: "Surówka z kapusty",
        slug: "surowka",
        excerpt:
          "Surówka z kapusty to chrupiąca polska sałatka z białej kapusty i marchewki, podawana jako chłodny, kwaskowy dodatek do pieczystego i ziemniaków.",
        steps: [
          {
            text: "Kapustę i marchewkę zetrzyj lub poszatkuj bardzo drobno, potem w misce wymieszaj z łyżeczką soli i ugniataj, aż puści sok. Odstaw na dziesięć minut i odlej nadmiar płynu.",
            tip: "Grubsze paski zostają twarde, więc warto użyć drobnej tarki lub ostrego noża. Ta surówka zostaje na zimno i surowo, zupełnie inaczej niż duszona [kapusta zasmażana](/pl/rezepte/kapusta-zasmażana) czy ogórkowa [mizeria](/pl/rezepte/mizeria).",
          },
          {
            text: "Dopraw octem lub sokiem z cytryny, dwiema łyżkami oleju, pieprzem i szczyptą cukru. Kto lubi, dodaje pół łyżeczki kminku albo dwie łyżki jogurtu lub śmietany dla łagodniejszej, kremowej wersji.",
            tip: "W temacie śmietany pomoże wpis o [śmietanie i Schmandzie](/pl/blog/smietana-czy-schmand). Kto szuka majonezowej sałatki z warzyw, znajdzie ją w [sałatce jarzynowej](/pl/rezepte/salatka-jarzynowa), która smakuje zupełnie inaczej.",
          },
          {
            text: "Schłodź surówkę, a przed podaniem jeszcze raz dopraw i spulchnij widelcem. Podawaj obok pieczonego mięsa, kotleta lub kurczaka.",
            tip: "Aromatyczny kminek często znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy), a jeśli brakuje jakiegoś składnika, sprawdź [zamienniki](/pl/blog/zamienniki-skladnikow). Surówka smakuje dobrze też następnego dnia, bo solenie zapobiega wodnistości.",
          },
        ],
        seoTitle: "Surówka z kapusty przepis | Krautsalat | Alemniam",
        seoDescription:
          "Surówka z kapusty z marchewką, podawana jako chłodny dodatek do niedzielnego obiadu.",
      },
    },
    ingredients: [
      { id: "su-1", name: { de: "Weißkohl", pl: "Kapusta biała" }, amount: 600, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "su-2", name: { de: "Karotte", pl: "Marchewka" }, amount: 2, unit: { de: "Stück", pl: "szt." }, group: "produce" },
      { id: "su-3", name: { de: "Essig oder Zitronensaft", pl: "Ocet lub sok z cytryny" }, amount: 2, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "su-4", name: { de: "Öl", pl: "Olej" }, amount: 2, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "su-5", name: { de: "Salz", pl: "Sól" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
      { id: "su-6", name: { de: "Pfeffer", pl: "Pieprz" }, amount: 1, unit: { de: "Prise", pl: "szczypta" }, group: "spices" },
      { id: "su-7", name: { de: "Kümmel (optional)", pl: "Kminek (opcjonalnie)" }, amount: 0.5, unit: { de: "TL", pl: "łyżeczki" }, group: "spices", storeHintDe: "Im Polenladen oft aromatischer als im Supermarkt" },
    ],
    createdAt: "2026-07-28T12:00:00.000Z",
    updatedAt: "2026-07-28T12:00:00.000Z",
  },
  {
    id: "recipe-de-volaille",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-de-volaille/87147728-879d-49aa-9871-0e1a78285f4b.webp",
    prepMinutes: 30,
    cookMinutes: 25,
    servings: 4,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-panieren"],
    categoryIds: ["category-hauptgerichte"],
    relatedPostIds: [
      "post-panieren",
      "post-sonntagsessen",
      "post-polenladen",
    ],
    videoUrl: null,
    translations: {
      de: {
        title: "Kotlet de volaille",
        slug: "de-volaille",
        excerpt:
          "Kotlet de volaille ist ein knusprig paniertes Hähnchenfilet mit einer schmelzenden Butterfüllung, der polnische Verwandte des Cordon bleu.",
        steps: [
          {
            text: "Die Hähnchenbrust flach klopfen, damit sie sich gut füllen und einrollen lässt. Kalte Butterstücke, gern mit Kräutern oder Knoblauch vermischt, mittig auf das Filet legen, dann das Fleisch fest zuklappen und die Ränder andrücken. Bei Bedarf mit einem Zahnstocher sichern.",
            tip: "Das ist ein gefülltes Hähnchenfilet, kein flacher [Kotlet schabowy](/de/rezepte/kotlet-schabowy) aus Schweinefleisch. Wie die Panade am besten hält, erklärt der Guide zum [Panieren](/de/blog/panieren-schabowy).",
          },
          {
            text: "Das Filet in Mehl, verquirltem Ei und Semmelbröseln panieren und die Brösel gut andrücken, damit sie später nicht abfallen. Zehn Minuten kalt stellen, damit sich die Panade setzt.",
            tip: "Gute, grob geriebene Semmelbrösel bekommst du oft frischer im [Polenladen](/de/blog/polenladen-einkaufen) als im Supermarkt. Das kalte Ruhen sorgt dafür, dass die Butter beim Braten nicht sofort ausläuft.",
          },
          {
            text: "In Öl oder Butterschmalz bei mittlerer Hitze von beiden Seiten goldbraun braten, das dauert etwa acht bis zwölf Minuten. Kurz einen Deckel aufsetzen, damit die Füllung innen schmilzt, dann den Zahnstocher entfernen, das Fleisch kurz ruhen lassen und aufschneiden.",
            tip: "Zu hohe Hitze verbrennt die Panade, bevor das Innere durch ist, deshalb lieber mittlere Stufe und etwas Geduld. Ein ganzer Vogel aus dem Ofen bleibt dagegen beim [Kurczak pieczony](/de/rezepte/kurczak-pieczony).",
          },
          {
            text: "Mit Kartoffeln und Surówka servieren, wobei der Anschnitt die geschmolzene Butterfüllung zeigen sollte.",
            tip: "Als Beilage passt die [Surówka z kapusty](/de/rezepte/surowka) besonders gut zur Panade. Fehlt eine Zutat, hilft der Überblick zu [Ersatzprodukten](/de/blog/ersatzprodukte-de) weiter.",
          },
        ],
        seoTitle: "Kotlet de volaille Rezept | Cordon bleu polnisch | Alemniam",
        seoDescription:
          "Kotlet de volaille mit schmelzender Butterfüllung, knusprig paniert und aus Hähnchenbrust, nicht aus Schwein.",
      },
      pl: {
        title: "Kotlet de volaille",
        slug: "de-volaille",
        excerpt:
          "Kotlet de volaille to panierowany filet z kurczaka z roztopionym masłem w środku, polski kuzyn cordon bleu.",
        steps: [
          {
            text: "Rozbij pierś z kurczaka na płasko, żeby dało się ją łatwo zawinąć. Na środku ułóż zimne masło, najlepiej wymieszane z ziołami lub czosnkiem, a potem szczelnie zawiń filet i dociśnij brzegi. W razie potrzeby zabezpiecz wykałaczką.",
            tip: "To nadziewany filet z kurczaka, a nie płaski wieprzowy [schabowy](/pl/rezepte/kotlet-schabowy). Jak dobrze utrzymać panierkę, opisuje przewodnik o [panierowaniu](/pl/blog/panierowanie-kotlet).",
          },
          {
            text: "Panieruj filet w mące, roztrzepanym jajku i bułce tartej, dociskając bułkę, żeby się nie osypała. Schłodź dziesięć minut, żeby panierka się związała.",
            tip: "Świeżą, grubiej zmieloną bułkę tartą często znajdziesz w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Chłodzenie sprawia, że masło nie wypłynie od razu na patelni.",
          },
          {
            text: "Smaż na oleju lub smalcu na średnim ogniu z obu stron na złoto, to zajmuje około ośmiu do dwunastu minut. Na chwilę przykryj, żeby nadzienie się roztopiło, potem usuń wykałaczkę, odstaw kotlet na minutę i przekrój.",
            tip: "Za mocny ogień spali panierkę, zanim środek się dogotuje, więc lepiej trzymać średnią temperaturę i uzbroić się w cierpliwość. Cały ptak z pieca to już inny przepis, [kurczak pieczony](/pl/rezepte/kurczak-pieczony).",
          },
          {
            text: "Podawaj z ziemniakami i surówką, a przekrój ma pokazywać roztopione masło w środku.",
            tip: "Jako dodatek świetnie sprawdza się [surówka z kapusty](/pl/rezepte/surowka), która lekko przełamuje panierkę. Jeśli brakuje składnika, sprawdź [zamienniki](/pl/blog/zamienniki-skladnikow).",
          },
        ],
        seoTitle: "Kotlet de volaille przepis | Cordon bleu | Alemniam",
        seoDescription:
          "Kotlet de volaille z roztopionym masłem w środku, panierowany, z kurczaka, nie z wieprzowiny.",
      },
    },
    ingredients: [
      { id: "dv-1", name: { de: "Hähnchenbrust", pl: "Pierś z kurczaka" }, amount: 800, unit: { de: "g", pl: "g" }, group: "other" },
      { id: "dv-2", name: { de: "Kalte Butter", pl: "Zimne masło" }, amount: 80, unit: { de: "g", pl: "g" }, group: "dairy" },
      { id: "dv-3", name: { de: "Mehl", pl: "Mąka" }, amount: 60, unit: { de: "g", pl: "g" }, group: "pantry" },
      { id: "dv-4", name: { de: "Eier", pl: "Jajka" }, amount: 2, unit: { de: "Stück", pl: "szt." }, group: "dairy" },
      { id: "dv-5", name: { de: "Semmelbrösel", pl: "Bułka tarta" }, amount: 120, unit: { de: "g", pl: "g" }, group: "pantry", storeHintDe: "Im Polenladen oft frischer als im Supermarkt" },
      { id: "dv-6", name: { de: "Öl zum Braten", pl: "Olej do smażenia" }, amount: 80, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "dv-7", name: { de: "Salz, Pfeffer, Kräuter", pl: "Sól, pieprz, zioła" }, amount: 1, unit: { de: "nach Bedarf", pl: "do smaku" }, group: "spices" },
    ],
    createdAt: "2026-07-28T12:00:00.000Z",
    updatedAt: "2026-07-28T12:00:00.000Z",
  },

];
