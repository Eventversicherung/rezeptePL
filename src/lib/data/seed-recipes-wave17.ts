import type { Recipe } from "@/types/content";

const CAT = ["category-eingelegt", "category-vegetarisch"] as const;
const RELATED = [
  "post-kiszenie",
  "post-ferment-glaeser",
  "post-polenladen",
  "post-ersatzprodukte-de",
] as const;

/**
 * Wave 17 — Kiszonki & Marynaty (10 traditional pickle/preserve recipes).
 * Ferment: Ogórki kiszone, Małosolne, Kapusta kiszona, Czosnek kiszony.
 * Vinegar: Grzyby, Papryka, Śliwki, Cebulka, Kalafior, Buraki w occie.
 */
export const seedRecipesWave17: Recipe[] = [
  {
    id: "recipe-ogorki-kiszone",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-ogorki-kiszone/f2b33a93-8e78-4d79-b0c2-f12de2e81f3c.webp",
    prepMinutes: 30,
    cookMinutes: 0,
    servings: 10,
    regionIds: [],
    occasionIds: ["occasion-grill", "occasion-niedziela"],
    techniqueIds: ["technique-kiszenie"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Ogórki kiszone",
        slug: "ogorki-kiszone",
        excerpt:
          "Klassische milchsauer eingelegte Gurken mit Dill und Knoblauch — trübe Lake, knackig. Nicht die schnellen Małosolne und nicht Essiggurken.",
        steps: [
          {
            text: "Feste, kleine Einlegegurken waschen, Blütenansatz abschneiden. Gläser (Weck oder Twist-off) heiß ausspülen. Je Glas Knoblauch, Dilldolden, Senfkörner, Lorbeer und optional ein Stück Meerrettichwurzel einlegen.",
            tip: "Das ist echte Kiszone — nicht [Ogórki małosolne](/de/rezepte/ogorki-malosolne) (kurz) und nicht Essiggläser wie [Papryka konserwowa](/de/rezepte/papryka-konserwowa). Technik: [Kiszenie](/de/blog/kiszenie-guide).",
          },
          {
            text: "Lake: 1,5 l kaltes Trinkwasser mit 45 g unjodiertem Salz (3 %) lösen — kein Jodsalz, kein Essig. Gurken senkrecht fest packen, vollständig mit Lake bedecken, 1–2 cm Abstand zum Rand.",
            tip: "Unjodiertes Salz oft im [Polenladen](/de/blog/polenladen-einkaufen). Gläser: [Fermentiergläser](/de/blog/fermentier-glaeser-kaufberatung).",
          },
          {
            text: "Bei 18–22 °C 4–7 Tage gären lassen. Täglich Lake prüfen: alles muss unter der Flüssigkeit bleiben (Gewicht oder eingelegtes Blatt). Kahmhefe (weiß, flach) abschöpfen; farbigen Schimmel verwerfen.",
            tip: "Nach dem Gären immer in den Kühlschrank. Daraus wird später [Ogórkowa](/de/rezepte/ogorkowa) — hier bleibt das Glas.",
          },
          {
            text: "Gekühlt mindestens 2 Wochen nachreifen. Zu Brot, Schabowy oder Grill servieren. Hält gekühlt mehrere Monate, solange die Lake klar-trüb sauer riecht, nicht faul.",
            tip: "Nachbar im Vorrat: [Kapusta kiszona](/de/rezepte/kapusta-kiszona). Ersatzfragen: [Ersatzprodukte DE](/de/blog/ersatzprodukte-de).",
          },
        ],
        seoTitle: "Ogórki kiszone Rezept | Eingelegte Gurken polnisch | Alemniam",
        seoDescription:
          "Ogórki kiszone: milchsauer eingelegte Gurken mit 3 %-Lake. Bilingual, sicher, klar getrennt von Małosolne und Essiggurken.",
      },
      pl: {
        title: "Ogórki kiszone",
        slug: "ogorki-kiszone",
        excerpt:
          "Klasyczne ogórki kiszone z koperkiem i czosnkiem — mętna zalewa, chrupkie. Nie małosolne i nie konserwowe z octem.",
        steps: [
          {
            text: "Umyj twarde, małe ogórki, odetnij kwiat. Słoiki wypłucz gorącą wodą. Do każdego włóż czosnek, kwiatostany kopru, ziarna gorczycy, liść laurowy i opcjonalnie kawałek chrzanu.",
            tip: "To kiszonka — nie [ogórki małosolne](/pl/rezepte/ogorki-malosolne) i nie linia octowa jak [papryka konserwowa](/pl/rezepte/papryka-konserwowa). Technika: [kiszenie](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Zalewa: 1,5 l zimnej wody z 45 g soli niejodowanej (3 %) — bez jodu, bez octu. Ułóż ogórki pionowo, zalej całkowicie, 1–2 cm do krawędzi.",
            tip: "Sól często w [sklepie polskim](/pl/blog/sklep-polski-zakupy). Słoiki: [poradnik](/pl/blog/sloiki-do-kiszenia).",
          },
          {
            text: "Kis 4–7 dni w 18–22 °C. Codziennie sprawdzaj: wszystko pod zalewą. Biały kożuch zbierz; kolorową pleśń wyrzuć cały słoik.",
            tip: "Po kiszeniu do lodówki. Z tych ogórków powstaje [ogórkowa](/pl/rezepte/ogorkowa) — tu zostaje słoik.",
          },
          {
            text: "W lodówce dojrzewaj min. 2 tygodnie. Podawaj do chleba, schabowego, grilla. Trzyma miesiące, jeśli pachnie kwaśno, nie zepsucie.",
            tip: "Sąsiad: [kapusta kiszona](/pl/rezepte/kapusta-kiszona). Zamienniki: [zamienniki](/pl/blog/zamienniki-skladnikow).",
          },
        ],
        seoTitle: "Ogórki kiszone przepis | Kiszonki | Alemniam",
        seoDescription:
          "Ogórki kiszone z zalewą 3 %. Dwujęzycznie — nie małosolne, nie konserwa octowa.",
      },
    },
    ingredients: [
      { id: "ok-1", name: { de: "Kleine Einlegegurken", pl: "Małe ogórki gruntowe" }, amount: 1500, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "ok-2", name: { de: "Kaltes Trinkwasser", pl: "Zimna woda pitna" }, amount: 1500, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "ok-3", name: { de: "Unjodiertes Salz", pl: "Sól niejodowana" }, amount: 45, unit: { de: "g", pl: "g" }, group: "spices", storeHintDe: "Kein Jodsalz — Polenladen oder Reformhaus" },
      { id: "ok-4", name: { de: "Knoblauchzehen", pl: "Ząbki czosnku" }, amount: 6, unit: { de: "Stück", pl: "szt." }, group: "produce" },
      { id: "ok-5", name: { de: "Dilldolden", pl: "Kwiatostany kopru" }, amount: 4, unit: { de: "Stück", pl: "szt." }, group: "produce" },
      { id: "ok-6", name: { de: "Senfkörner", pl: "Ziarna gorczycy" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
      { id: "ok-7", name: { de: "Meerrettichwurzel (optional)", pl: "Chrzan (opcjonalnie)" }, amount: 40, unit: { de: "g", pl: "g" }, group: "produce", storeHintDe: "Polenladen" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-ogorki-malosolne",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-ogorki-malosolne/3fc53722-42c1-4572-870c-99f960c7ceaa.webp",
    prepMinutes: 20,
    cookMinutes: 0,
    servings: 6,
    regionIds: [],
    occasionIds: ["occasion-grill"],
    techniqueIds: ["technique-kiszenie"],
    categoryIds: [...CAT, "category-schnell"],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Ogórki małosolne",
        slug: "ogorki-malosolne",
        excerpt:
          "Junge, leicht gesalzene Gurken nach 1–3 Tagen — hellgrün, knackig, mild. Nicht die langen Kiszone und nicht Essiggurken.",
        steps: [
          {
            text: "Frische, feste Gurken waschen, Enden anschneiden. In ein großes Glas oder eine Schüssel mit Knoblauch, Dill und Senfkörnern schichten.",
            tip: "Kurzferment — nicht [Ogórki kiszone](/de/rezepte/ogorki-kiszone) (Tage bis Wochen). Guide: [Kiszenie](/de/blog/kiszenie-guide).",
          },
          {
            text: "Lake: 1 l kaltes Wasser + 20 g unjodiertes Salz (2 %). Vollständig bedecken. Bei Zimmertemperatur 24–72 Stunden — im Sommer eher kürzer kosten.",
            tip: "Sobald sie nach Gurke und leichter Säure schmecken, in den Kühlschrank. Länger werden sie zu Kiszone.",
          },
          {
            text: "Gekühlt in 2–4 Tagen aufessen. Zu Brot, Wurst oder Grill. Trübe Lake ist normal; Schimmel oder Fäulnisgeruch: verwerfen.",
            tip: "Essig-Nachbar: [Kalafior w occie](/de/rezepte/kalafior-w-occie). Einkauf: [Polenladen](/de/blog/polenladen-einkaufen).",
          },
        ],
        seoTitle: "Ogórki małosolne Rezept | Leicht gesalzene Gurken | Alemniam",
        seoDescription:
          "Ogórki małosolne in 1–3 Tagen. Bilingual — jung und mild, nicht lange Kiszone, nicht Essig.",
      },
      pl: {
        title: "Ogórki małosolne",
        slug: "ogorki-malosolne",
        excerpt:
          "Młode, lekko solone ogórki po 1–3 dniach — jasnozielone, chrupkie, łagodne. Nie długie kiszone i nie octowe.",
        steps: [
          {
            text: "Umyj twarde ogórki, przytnij końce. Ułóż w słoju z czosnkiem, koperkiem i gorczycą.",
            tip: "Krótki kis — nie [ogórki kiszone](/pl/rezepte/ogorki-kiszone). Poradnik: [kiszenie](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Zalewa: 1 l wody + 20 g soli niejodowanej (2 %). Przykryj całkowicie. 24–72 h w temperaturze pokojowej — latem próbuj wcześniej.",
            tip: "Gdy smakują ogórkiem i lekkim kwasem, do lodówki. Dłużej stają się kiszone.",
          },
          {
            text: "Zjedz w 2–4 dni z lodówki. Do chleba, kiełbasy, grilla. Mętna zalewa jest OK; pleśń lub smród: wyrzuć.",
            tip: "Sąsiad octowy: [kalafior w occie](/pl/rezepte/kalafior-w-occie). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
        ],
        seoTitle: "Ogórki małosolne przepis | Lekko solone | Alemniam",
        seoDescription:
          "Ogórki małosolne w 1–3 dni. Dwujęzycznie — młode, nie długie kiszone.",
      },
    },
    ingredients: [
      { id: "om-1", name: { de: "Feste Gurken", pl: "Twarde ogórki" }, amount: 1000, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "om-2", name: { de: "Kaltes Wasser", pl: "Zimna woda" }, amount: 1000, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "om-3", name: { de: "Unjodiertes Salz", pl: "Sól niejodowana" }, amount: 20, unit: { de: "g", pl: "g" }, group: "spices", storeHintDe: "Kein Jodsalz" },
      { id: "om-4", name: { de: "Knoblauch", pl: "Czosnek" }, amount: 4, unit: { de: "Zehen", pl: "ząbki" }, group: "produce" },
      { id: "om-5", name: { de: "Dill", pl: "Koper" }, amount: 3, unit: { de: "Dolden", pl: "kwiatostany" }, group: "produce" },
      { id: "om-6", name: { de: "Senfkörner", pl: "Gorczyca" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-kapusta-kiszona",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kapusta-kiszona/1bf932e9-22f0-4366-ae7a-81759f9a83ed.webp",
    prepMinutes: 45,
    cookMinutes: 0,
    servings: 12,
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-niedziela"],
    techniqueIds: ["technique-kiszenie"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED, "post-bigos-guide"],
    videoUrl: null,
    translations: {
      de: {
        title: "Kapusta kiszona",
        slug: "kapusta-kiszona",
        excerpt:
          "Selbst gemachtes Sauerkraut — fein gehobelt, 2 % Salz, beschwert. Grundlage für Bigos, nicht die warme Beilage.",
        steps: [
          {
            text: "Weißkohl vierteln, Strunk entfernen, sehr fein hobeln. Mit 40 g unjodiertem Salz (2 % auf 2 kg) in einer großen Schüssel fest kneten, bis reichlich Saft austritt — 8–12 Minuten.",
            tip: "Roh fermentiert — nicht [Kapusta zasmażana](/de/rezepte/kapusta-zasmażana) (warme Beilage). Technik: [Kiszenie](/de/blog/kiszenie-guide).",
          },
          {
            text: "Fest in einen sauberen Steintopf oder ein großes Glas stampfen, Schicht für Schicht, bis der eigene Saft alles bedeckt. Optional Kümmel. Mit Gewicht (kleiner Teller + Glas Wasser) beschweren. 1–2 cm Lake über dem Kraut.",
            tip: "Fehlt Saft: 200 ml Wasser + 4 g Salz nachgießen — nie ungesalzenes Wasser. Gläser: [Fermentiergläser](/de/blog/fermentier-glaeser-kaufberatung).",
          },
          {
            text: "Bei 18–22 °C 7–14 Tage. Täglich Gewicht prüfen, Schaum abschöpfen. Farbigen Schimmel: Charge verwerfen. Dann in saubere Gläser füllen und kühlen.",
            tip: "Einsatz: [Bigos](/de/rezepte/bigos), [Kapuśniak](/de/rezepte/kapusniak), Pierogi mit Kraut. Einkaufshilfe: [Polenladen](/de/blog/polenladen-einkaufen).",
          },
          {
            text: "Gekühlt reift das Kraut weiter und wird milder-säuerlich. Vor der Verwendung kosten; zu scharf kurz kalt abspülen, nicht auswaschen.",
            tip: "Nachbar-Gurke: [Ogórki kiszone](/de/rezepte/ogorki-kiszone).",
          },
        ],
        seoTitle: "Kapusta kiszona Rezept | Sauerkraut selbst machen | Alemniam",
        seoDescription:
          "Kapusta kiszona mit 2 % Salz. Bilingual — Rohferment, nicht zasmażana, Grundlage für Bigos.",
      },
      pl: {
        title: "Kapusta kiszona",
        slug: "kapusta-kiszona",
        excerpt:
          "Domowa kapusta kiszona — drobno szatkowana, 2 % soli, obciążona. Baza do bigosu, nie ciepły dodatek.",
        steps: [
          {
            text: "Kapustę pokrój, usuń głąb, szatkuj bardzo drobno. Z 40 g soli niejodowanej (2 % na 2 kg) ugniataj 8–12 min, aż puści dużo soku.",
            tip: "Surowy kis — nie [kapusta zasmażana](/pl/rezepte/kapusta-zasmażana). Technika: [kiszenie](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Ubija j warstwami w czystym naczyniu, aż własny sok przykryje. Opcjonalnie kminek. Obciąż (talerzyk + słoik wody). 1–2 cm zalewy nad kapustą.",
            tip: "Za mało soku: 200 ml wody + 4 g soli — nigdy sama woda. Słoiki: [poradnik](/pl/blog/sloiki-do-kiszenia).",
          },
          {
            text: "Kis 7–14 dni w 18–22 °C. Codziennie sprawdzaj ciężarek, zbieraj pianę. Kolorowa pleśń: wyrzuć. Potem do czystych słoików i do lodówki.",
            tip: "Użycie: [bigos](/pl/rezepte/bigos), [kapuśniak](/pl/rezepte/kapusniak). Zakupy: [sklep polski](/pl/blog/sklep-polski-zakupy).",
          },
          {
            text: "W lodówce łagodnieje. Przed użyciem skosztuj; za ostro — krótko przepłucz zimną wodą, nie wypłukuj.",
            tip: "Sąsiad: [ogórki kiszone](/pl/rezepte/ogorki-kiszone).",
          },
        ],
        seoTitle: "Kapusta kiszona przepis | Domowy kis | Alemniam",
        seoDescription:
          "Kapusta kiszona 2 % soli. Dwujęzycznie — nie zasmażana, baza do bigosu.",
      },
    },
    ingredients: [
      { id: "kk-1", name: { de: "Weißkohl", pl: "Kapusta biała" }, amount: 2000, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "kk-2", name: { de: "Unjodiertes Salz", pl: "Sól niejodowana" }, amount: 40, unit: { de: "g", pl: "g" }, group: "spices", storeHintDe: "Kein Jodsalz" },
      { id: "kk-3", name: { de: "Kümmel (optional)", pl: "Kminek (opcjonalnie)" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices", storeHintDe: "Polenladen oft aromatischer" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-czosnek-kiszony",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-czosnek-kiszony/b2446c85-61fc-4d87-bd39-1b55e4f4c353.webp",
    prepMinutes: 20,
    cookMinutes: 0,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-grill"],
    techniqueIds: ["technique-kiszenie"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Czosnek kiszony",
        slug: "czosnek-kiszony",
        excerpt:
          "Milchsauer eingelegte Knoblauchzehen — milder, rund, zum Brot. Nicht geriebener Chrzan und nicht Essigzwiebeln.",
        steps: [
          {
            text: "Zehen schälen, beschädigte verwerfen. Fest in ein kleines Glas schichten, optional eine Dilldolde.",
            tip: "Ferment, nicht Dip: [Chrzan tarty](/de/rezepte/chrzan) bleibt weiß-scharf. Guide: [Kiszenie](/de/blog/kiszenie-guide).",
          },
          {
            text: "Lake: 400 ml Wasser + 12 g unjodiertes Salz (3 %). Vollständig bedecken, beschweren. 18–22 °C für 7–14 Tage, dann kühlen.",
            tip: "Zehen können blau-grün anlaufen — harmlos (Schwefel + Säure). Schimmel oder Fäulnis: Glas weg.",
          },
          {
            text: "Gekühlt zu Brot, Grill, Wurst. Lake nicht trinken, wenn sie unangenehm riecht. Hält gekühlt Wochen.",
            tip: "Nachbar: [Ogórki kiszone](/de/rezepte/ogorki-kiszone). Gläser: [Fermentiergläser](/de/blog/fermentier-glaeser-kaufberatung).",
          },
        ],
        seoTitle: "Czosnek kiszony Rezept | Eingelegter Knoblauch | Alemniam",
        seoDescription:
          "Czosnek kiszony in 3 %-Lake. Bilingual — fermentiert, nicht Chrzan, nicht Essigzwiebel.",
      },
      pl: {
        title: "Czosnek kiszony",
        slug: "czosnek-kiszony",
        excerpt:
          "Kiszone ząbki czosnku — łagodniejsze, do chleba. Nie tarty chrzan i nie cebulka w occie.",
        steps: [
          {
            text: "Obierz ząbki, uszkodzone wyrzuć. Ułóż szczelnie w małym słoiku, opcjonalnie koper.",
            tip: "Kiszonka, nie dip: [chrzan tarty](/pl/rezepte/chrzan) zostaje ostry. Poradnik: [kiszenie](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Zalewa: 400 ml wody + 12 g soli niejodowanej (3 %). Przykryj, obciąż. 7–14 dni w 18–22 °C, potem lodówka.",
            tip: "Niebiesko-zielony kolor bywa — nieszkodliwy. Pleśń lub zgnilizna: wyrzuć.",
          },
          {
            text: "Z lodówki do chleba, grilla, kiełbasy. Nie pij zalewy, jeśli pachnie źle. Trzyma tygodnie.",
            tip: "Sąsiad: [ogórki kiszone](/pl/rezepte/ogorki-kiszone). Słoiki: [poradnik](/pl/blog/sloiki-do-kiszenia).",
          },
        ],
        seoTitle: "Czosnek kiszony przepis | Kiszonki | Alemniam",
        seoDescription:
          "Czosnek kiszony, zalewa 3 %. Dwujęzycznie — nie chrzan, nie cebula w occie.",
      },
    },
    ingredients: [
      { id: "cz-1", name: { de: "Knoblauchzehen, geschält", pl: "Ząbki czosnku, obrane" }, amount: 400, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "cz-2", name: { de: "Kaltes Wasser", pl: "Zimna woda" }, amount: 400, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "cz-3", name: { de: "Unjodiertes Salz", pl: "Sól niejodowana" }, amount: 12, unit: { de: "g", pl: "g" }, group: "spices", storeHintDe: "Kein Jodsalz" },
      { id: "cz-4", name: { de: "Dilldolde (optional)", pl: "Koper (opcjonalnie)" }, amount: 1, unit: { de: "Stück", pl: "szt." }, group: "produce" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-grzyby-marynowane",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-grzyby-marynowane/aea3b76f-74ca-4228-96e0-82b4436f092b.webp",
    prepMinutes: 25,
    cookMinutes: 20,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-wigilia", "occasion-sylwester"],
    techniqueIds: ["technique-konserven"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED, "post-wigilia"],
    videoUrl: null,
    translations: {
      de: {
        title: "Grzyby marynowane",
        slug: "grzyby-marynowane",
        excerpt:
          "Champignons in würzigem Essigsud — kalter Vorspeisen-Klassiker. Nicht die Wigilia-Pilzsuppe.",
        steps: [
          {
            text: "Nur Speisepilze aus dem Handel (Champignons oder fertig geputzte Mischpilze). Putzen, große halbieren. 8 Minuten in Salzwasser köcheln, abtropfen.",
            tip: "Kein Wildsammeln ohne Sicherheit. Suppe bleibt bei [Zupa grzybowa](/de/rezepte/zupa-grzybowa). Wigilia: [Speiseplan](/de/blog/wigilia-speiseplan).",
          },
          {
            text: "Sud: 250 ml Tafelessig (5 %) + 250 ml Wasser + 2 EL Zucker + 1 TL Salz, Piment, Pfeffer, Lorbeer, Zwiebelringe. 5 Minuten köcheln.",
            tip: "Immer 5 %-Essig — kein milderer Hausessig. Vorratstechnik: [Kiszenie-Guide](/de/blog/kiszenie-guide) erklärt den Unterschied Ferment/Essig.",
          },
          {
            text: "Pilze in heiße, saubere Gläser, mit kochendem Sud bedecken. Verschließen, abkühlen, mindestens 3 Tage im Kühlschrank ziehen lassen. Gekühlt lagern.",
            tip: "Zu Brot oder als Vorspeise. Nachbar: [Papryka konserwowa](/de/rezepte/papryka-konserwowa).",
          },
        ],
        seoTitle: "Grzyby marynowane Rezept | Eingelegte Pilze | Alemniam",
        seoDescription:
          "Grzyby marynowane in 5 %-Essig. Bilingual — Vorspeise, nicht Pilzsuppe. Kühl lagern.",
      },
      pl: {
        title: "Grzyby marynowane",
        slug: "grzyby-marynowane",
        excerpt:
          "Pieczarki w zalewie octowej — zimna przystawka. Nie wigilijna zupa grzybowa.",
        steps: [
          {
            text: "Tylko grzyby ze sklepu (pieczarki). Oczyść, większe przetnij. Gotuj 8 min w osolonej wodzie, odsącz.",
            tip: "Bez zbierania bez pewności. Zupa zostaje przy [zupie grzybowej](/pl/rezepte/zupa-grzybowa). Wigilia: [menu](/pl/blog/menu-wigilijne).",
          },
          {
            text: "Zalewa: 250 ml octu 5 % + 250 ml wody + 2 łyżki cukru + 1 łyżeczka soli, ziele, pieprz, liść, cebula. Gotuj 5 min.",
            tip: "Zawsze ocet 5 %. Różnica kis / ocet: [kiszenie](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Grzyby do gorących słoików, zalej wrzątkiem. Zamknij, ostudź, min. 3 dni w lodówce. Przechowuj chłodno.",
            tip: "Do chleba. Sąsiad: [papryka konserwowa](/pl/rezepte/papryka-konserwowa).",
          },
        ],
        seoTitle: "Grzyby marynowane przepis | Marynaty | Alemniam",
        seoDescription:
          "Grzyby marynowane w occie 5 %. Dwujęzycznie — przystawka, nie zupa. Do lodówki.",
      },
    },
    ingredients: [
      { id: "gm-1", name: { de: "Champignons", pl: "Pieczarki" }, amount: 800, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "gm-2", name: { de: "Tafelessig 5 %", pl: "Ocet 5 %" }, amount: 250, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "gm-3", name: { de: "Wasser", pl: "Woda" }, amount: 250, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "gm-4", name: { de: "Zucker", pl: "Cukier" }, amount: 2, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "gm-5", name: { de: "Zwiebel", pl: "Cebula" }, amount: 1, unit: { de: "Stück", pl: "szt." }, group: "produce" },
      { id: "gm-6", name: { de: "Piment, Pfeffer, Lorbeer", pl: "Ziele, pieprz, liść laurowy" }, amount: 1, unit: { de: "nach Bedarf", pl: "do smaku" }, group: "spices" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-papryka-konserwowa",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-papryka-konserwowa/344f8465-9afd-4f59-b728-27758d471345.webp",
    prepMinutes: 30,
    cookMinutes: 15,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-grill", "occasion-niedziela"],
    techniqueIds: ["technique-konserven"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Papryka konserwowa",
        slug: "papryka-konserwowa",
        excerpt:
          "Süße Paprikastreifen in Essigsud — Glas vom Sonntagstisch. Nicht Leczo und nicht fermentierte Gurken.",
        steps: [
          {
            text: "Feste Paprika entkernen, in Streifen. Optional 3 Minuten blanchieren, abtropfen — bleibt knackiger ohne Blanchieren.",
            tip: "Das ist Essigglas — nicht das Schmorgericht [Leczo](/de/rezepte/leczo). Vorrat: [Kiszenie-Guide](/de/blog/kiszenie-guide) (Essig vs. Kis).",
          },
          {
            text: "Sud: 300 ml Essig 5 % + 200 ml Wasser + 3 EL Zucker + 1 TL Salz, Piment, Lorbeer. Aufkochen.",
            tip: "Nur 5 %-Essig. Gläser heiß ausspülen.",
          },
          {
            text: "Streifen fest in Gläser, mit kochendem Sud bedecken. Verschließen, abkühlen, 3 Tage kühlen, dann servieren. Gekühlt lagern.",
            tip: "Zu Fleisch, Brot, Grill. Nachbar: [Cebulka marynowana](/de/rezepte/cebulka-marynowana).",
          },
        ],
        seoTitle: "Papryka konserwowa Rezept | Eingelegte Paprika | Alemniam",
        seoDescription:
          "Papryka konserwowa in 5 %-Essig. Bilingual — Glas, nicht Leczo. Kühl lagern.",
      },
      pl: {
        title: "Papryka konserwowa",
        slug: "papryka-konserwowa",
        excerpt:
          "Słodka papryka w zalewie octowej — słoik na niedzielę. Nie leczo i nie kiszone ogórki.",
        steps: [
          {
            text: "Paprykę oceń, pokrój w paski. Opcjonalnie 3 min blansz, odsącz.",
            tip: "To słoik z octem — nie [leczo](/pl/rezepte/leczo). Kis vs ocet: [kiszenie](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Zalewa: 300 ml octu 5 % + 200 ml wody + 3 łyżki cukru + 1 łyżeczka soli, ziele, liść. Zagotuj.",
            tip: "Tylko ocet 5 %. Słoiki wypłucz gorącą wodą.",
          },
          {
            text: "Paski do słoików, zalej wrzątkiem. Zamknij, ostudź, 3 dni w lodówce. Przechowuj chłodno.",
            tip: "Do mięsa, chleba, grilla. Sąsiad: [cebulka marynowana](/pl/rezepte/cebulka-marynowana).",
          },
        ],
        seoTitle: "Papryka konserwowa przepis | Marynaty | Alemniam",
        seoDescription:
          "Papryka konserwowa w occie 5 %. Dwujęzycznie — nie leczo. Do lodówki.",
      },
    },
    ingredients: [
      { id: "pk-1", name: { de: "Rote und gelbe Paprika", pl: "Papryka czerwona i żółta" }, amount: 1000, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "pk-2", name: { de: "Tafelessig 5 %", pl: "Ocet 5 %" }, amount: 300, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "pk-3", name: { de: "Wasser", pl: "Woda" }, amount: 200, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "pk-4", name: { de: "Zucker", pl: "Cukier" }, amount: 3, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "pk-5", name: { de: "Salz", pl: "Sól" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
      { id: "pk-6", name: { de: "Piment, Lorbeer", pl: "Ziele angielskie, liść laurowy" }, amount: 1, unit: { de: "nach Bedarf", pl: "do smaku" }, group: "spices" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-sliwki-w-occie",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-sliwki-w-occie/66f92054-016a-48f6-bf9f-484702dcfb3e.webp",
    prepMinutes: 25,
    cookMinutes: 15,
    servings: 10,
    regionIds: [],
    occasionIds: ["occasion-niedziela", "occasion-imieniny"],
    techniqueIds: ["technique-konserven"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Śliwki w occie",
        slug: "sliwki-w-occie",
        excerpt:
          "Feste Pflaumen in süß-saurem Sud — zu Braten und Aufschnitt. Nicht Powidła und nicht Knedle.",
        steps: [
          {
            text: "Feste, nicht überreife Pflaumen waschen, Stiele entfernen, ganz lassen (Stein bleibt). In saubere Gläser schichten.",
            tip: "Essigpflaume — nicht [Knedle ze śliwkami](/de/rezepte/knedle-sliwki) und nicht Mus. Vorrat: [Kiszenie](/de/blog/kiszenie-guide).",
          },
          {
            text: "Sud: 300 ml Essig 5 % + 200 ml Wasser + 150 g Zucker, Zimt, 3 Nelken. Aufkochen, 3 Minuten ziehen.",
            tip: "Nur 5 %-Essig. Zu süß? Zucker später kürzen, nicht den Essiganteil.",
          },
          {
            text: "Mit kochendem Sud bedecken, schließen, abkühlen. Mindestens 1 Woche im Kühlschrank ziehen. Zu Braten, Käse, Aufschnitt. Gekühlt lagern.",
            tip: "Nachbar süß-sauer: [Buraki w occie](/de/rezepte/buraki-w-occie).",
          },
        ],
        seoTitle: "Śliwki w occie Rezept | Pflaumen süß-sauer | Alemniam",
        seoDescription:
          "Śliwki w occie mit 5 %-Essig. Bilingual — Glas zu Braten, nicht Knedle, nicht Mus.",
      },
      pl: {
        title: "Śliwki w occie",
        slug: "sliwki-w-occie",
        excerpt:
          "Twarde śliwki w słodko-kwaśnej zalewie — do pieczystego. Nie powidła i nie knedle.",
        steps: [
          {
            text: "Umyj twarde śliwki, zostaw pestkę. Ułóż w czystych słoikach.",
            tip: "Marynata — nie [knedle ze śliwkami](/pl/rezepte/knedle-sliwki). Kis vs ocet: [kiszenie](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Zalewa: 300 ml octu 5 % + 200 ml wody + 150 g cukru, cynamon, 3 goździki. Zagotuj, 3 min.",
            tip: "Tylko ocet 5 %. Za słodko — mniej cukru, nie mniej octu.",
          },
          {
            text: "Zalej wrzątkiem, zamknij, ostudź. Min. tydzień w lodówce. Do pieczystego, serów. Przechowuj chłodno.",
            tip: "Sąsiad: [buraki w occie](/pl/rezepte/buraki-w-occie).",
          },
        ],
        seoTitle: "Śliwki w occie przepis | Marynaty | Alemniam",
        seoDescription:
          "Śliwki w occie 5 %. Dwujęzycznie — do pieczystego, nie knedle.",
      },
    },
    ingredients: [
      { id: "sw-1", name: { de: "Feste Pflaumen", pl: "Twarde śliwki" }, amount: 1000, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "sw-2", name: { de: "Tafelessig 5 %", pl: "Ocet 5 %" }, amount: 300, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "sw-3", name: { de: "Wasser", pl: "Woda" }, amount: 200, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "sw-4", name: { de: "Zucker", pl: "Cukier" }, amount: 150, unit: { de: "g", pl: "g" }, group: "pantry" },
      { id: "sw-5", name: { de: "Zimtstange", pl: "Laska cynamonu" }, amount: 1, unit: { de: "Stück", pl: "szt." }, group: "spices" },
      { id: "sw-6", name: { de: "Nelken", pl: "Goździki" }, amount: 3, unit: { de: "Stück", pl: "szt." }, group: "spices" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-cebulka-marynowana",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-cebulka-marynowana/4cefa73e-e5fc-4897-8175-81c4fd6d3b38.webp",
    prepMinutes: 25,
    cookMinutes: 10,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-grill", "occasion-sylwester"],
    techniqueIds: ["technique-konserven"],
    categoryIds: [...CAT, "category-schnell"],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Cebulka marynowana",
        slug: "cebulka-marynowana",
        excerpt:
          "Silberzwiebeln oder rote Ringe in Essig — zu Hering, Aufschnitt, Grill. Nicht fermentierter Knoblauch.",
        steps: [
          {
            text: "Silberzwiebeln 2 Minuten blanchieren, pellen. Oder rote Zwiebel in dicke Ringe. In saubere Gläser.",
            tip: "Essig, nicht Kis: [Czosnek kiszony](/de/rezepte/czosnek-kiszony) ist die Ferment-Linie. Zu Hering: [Śledź](/de/rezepte/sledz).",
          },
          {
            text: "Sud: 250 ml Essig 5 % + 150 ml Wasser + 2 EL Zucker + 1 TL Salz, Pfeffer, Lorbeer, Piment. Aufkochen.",
            tip: "Nur 5 %-Essig. Heiß aufgießen.",
          },
          {
            text: "Bedecken, schließen, 2 Tage kühlen. Zu Wurst, Hering, Grill. Gekühlt lagern, in 3–4 Wochen aufbrauchen.",
            tip: "Nachbar: [Papryka konserwowa](/de/rezepte/papryka-konserwowa).",
          },
        ],
        seoTitle: "Cebulka marynowana Rezept | Eingelegte Zwiebeln | Alemniam",
        seoDescription:
          "Cebulka marynowana in 5 %-Essig. Bilingual — zu Hering und Grill, nicht fermentierter Knoblauch.",
      },
      pl: {
        title: "Cebulka marynowana",
        slug: "cebulka-marynowana",
        excerpt:
          "Cebulka perłowa lub czerwone krążki w occie — do śledzia, wędlin, grilla. Nie kiszony czosnek.",
        steps: [
          {
            text: "Cebulkę 2 min blanszuj i obierz. Albo czerwoną pokrój w krążki. Do czystych słoików.",
            tip: "Ocet, nie kis: [czosnek kiszony](/pl/rezepte/czosnek-kiszony). Do śledzia: [śledź](/pl/rezepte/sledz).",
          },
          {
            text: "Zalewa: 250 ml octu 5 % + 150 ml wody + 2 łyżki cukru + 1 łyżeczka soli, pieprz, liść, ziele. Zagotuj.",
            tip: "Tylko ocet 5 %. Zlewaj gorącą.",
          },
          {
            text: "Zamknij, 2 dni w lodówce. Do kiełbasy, śledzia, grilla. Zużyj w 3–4 tygodnie z chłodu.",
            tip: "Sąsiad: [papryka konserwowa](/pl/rezepte/papryka-konserwowa).",
          },
        ],
        seoTitle: "Cebulka marynowana przepis | Marynaty | Alemniam",
        seoDescription:
          "Cebulka marynowana w occie 5 %. Dwujęzycznie — do śledzia, nie kiszony czosnek.",
      },
    },
    ingredients: [
      { id: "cm-1", name: { de: "Silberzwiebeln oder rote Zwiebeln", pl: "Cebulka perłowa lub czerwona" }, amount: 500, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "cm-2", name: { de: "Tafelessig 5 %", pl: "Ocet 5 %" }, amount: 250, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "cm-3", name: { de: "Wasser", pl: "Woda" }, amount: 150, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "cm-4", name: { de: "Zucker", pl: "Cukier" }, amount: 2, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "cm-5", name: { de: "Salz", pl: "Sól" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
      { id: "cm-6", name: { de: "Lorbeer, Piment, Pfeffer", pl: "Liść, ziele, pieprz" }, amount: 1, unit: { de: "nach Bedarf", pl: "do smaku" }, group: "spices" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-kalafior-w-occie",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-kalafior-w-occie/7af3ac94-43ca-46fe-8767-fcbb4861d19c.webp",
    prepMinutes: 30,
    cookMinutes: 15,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-niedziela"],
    techniqueIds: ["technique-konserven"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED],
    videoUrl: null,
    translations: {
      de: {
        title: "Kalafior w occie",
        slug: "kalafior-w-occie",
        excerpt:
          "Blanchierter Blumenkohl mit Karotte in Essigsud — knackige Pikle. Nicht Rohkost-Surówka.",
        steps: [
          {
            text: "Blumenkohl in Röschen, Karotte in Scheiben. 2–3 Minuten in Salzwasser blanchieren, kalt abschrecken, gut abtropfen.",
            tip: "Essigglas — nicht [Surówka](/de/rezepte/surowka) (Rohkost). Technikunterschied: [Kiszenie](/de/blog/kiszenie-guide).",
          },
          {
            text: "Sud: 300 ml Essig 5 % + 200 ml Wasser + 2 EL Zucker + 1 TL Salz, Senfkörner, Lorbeer. Aufkochen.",
            tip: "Nur 5 %-Essig. Gemüse muss vollständig unter dem Sud liegen.",
          },
          {
            text: "Fest in Gläser, heiß aufgießen, schließen. 3 Tage kühlen. Zu Aufschnitt und Sonntagsbraten. Gekühlt lagern.",
            tip: "Nachbar: [Grzyby marynowane](/de/rezepte/grzyby-marynowane).",
          },
        ],
        seoTitle: "Kalafior w occie Rezept | Eingelegter Blumenkohl | Alemniam",
        seoDescription:
          "Kalafior w occie mit Karotte, 5 %-Essig. Bilingual — Pikle, nicht Surówka. Kühl lagern.",
      },
      pl: {
        title: "Kalafior w occie",
        slug: "kalafior-w-occie",
        excerpt:
          "Blanszowany kalafior z marchewką w occie — chrupiące pikle. Nie surowa surówka.",
        steps: [
          {
            text: "Kalafior na różyczki, marchew w plasterki. 2–3 min blansz, schłodź, odsącz.",
            tip: "Słoik z octem — nie [surówka](/pl/rezepte/surowka). Kis vs ocet: [kiszenie](/pl/blog/kiszenie-w-domu).",
          },
          {
            text: "Zalewa: 300 ml octu 5 % + 200 ml wody + 2 łyżki cukru + 1 łyżeczka soli, gorczyca, liść. Zagotuj.",
            tip: "Tylko ocet 5 %. Warzywa całkowicie pod zalewą.",
          },
          {
            text: "Do słoików, zalej gorącą, zamknij. 3 dni w lodówce. Do wędlin i pieczystego.",
            tip: "Sąsiad: [grzyby marynowane](/pl/rezepte/grzyby-marynowane).",
          },
        ],
        seoTitle: "Kalafior w occie przepis | Pikle | Alemniam",
        seoDescription:
          "Kalafior w occie z marchewką. Dwujęzycznie — nie surówka. Do lodówki.",
      },
    },
    ingredients: [
      { id: "ka-1", name: { de: "Blumenkohl", pl: "Kalafior" }, amount: 1, unit: { de: "Kopf", pl: "główka" }, group: "produce" },
      { id: "ka-2", name: { de: "Karotten", pl: "Marchewki" }, amount: 2, unit: { de: "Stück", pl: "szt." }, group: "produce" },
      { id: "ka-3", name: { de: "Tafelessig 5 %", pl: "Ocet 5 %" }, amount: 300, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "ka-4", name: { de: "Wasser", pl: "Woda" }, amount: 200, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "ka-5", name: { de: "Zucker", pl: "Cukier" }, amount: 2, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "ka-6", name: { de: "Senfkörner, Lorbeer, Salz", pl: "Gorczyca, liść, sól" }, amount: 1, unit: { de: "nach Bedarf", pl: "do smaku" }, group: "spices" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
  {
    id: "recipe-buraki-w-occie",
    status: "published",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/recipes/recipe-buraki-w-occie/331581a5-e279-4b1c-a999-ce59b9c86357.webp",
    prepMinutes: 20,
    cookMinutes: 50,
    servings: 8,
    regionIds: [],
    occasionIds: ["occasion-wielkanoc", "occasion-niedziela"],
    techniqueIds: ["technique-konserven"],
    categoryIds: [...CAT],
    relatedPostIds: [...RELATED, "post-wielkanoc"],
    videoUrl: null,
    translations: {
      de: {
        title: "Buraki w occie",
        slug: "buraki-w-occie",
        excerpt:
          "Gekochte Rote-Bete-Spalten im Essigglas — süß-sauer, ganz. Nicht Ćwikła, nicht warme Buraczki, nicht Barszcz.",
        steps: [
          {
            text: "Rote Bete ungeputzt weich kochen (35–45 Min), abkühlen, schälen, in Spalten oder Scheiben. In saubere Gläser schichten.",
            tip: "Glas mit Stücken — nicht geriebene [Ćwikła](/de/rezepte/cwikla), nicht warme [Buraczki](/de/rezepte/buraczki), nicht [Barszcz](/de/rezepte/barszcz-czerwony).",
          },
          {
            text: "Sud: 250 ml Essig 5 % + 200 ml Kochwasser + 3 EL Zucker + 1 TL Salz, 2 Nelken, Lorbeer. Aufkochen.",
            tip: "Nur 5 %-Essig. Ostern-Kontext: [Wielkanoc](/de/blog/wielkanoc-speiseplan).",
          },
          {
            text: "Heiß aufgießen, schließen, 3 Tage kühlen. Zu Aufschnitt und Braten. Gekühlt lagern.",
            tip: "Meerrettich-Relish bleibt bei Ćwikła. Nachbar: [Śliwki w occie](/de/rezepte/sliwki-w-occie).",
          },
        ],
        seoTitle: "Buraki w occie Rezept | Rote Bete eingelegt | Alemniam",
        seoDescription:
          "Buraki w occie — Spalten in 5 %-Essig. Bilingual, klar ≠ Ćwikła, ≠ Buraczki, ≠ Barszcz.",
      },
      pl: {
        title: "Buraki w occie",
        slug: "buraki-w-occie",
        excerpt:
          "Gotowane ćwiartki buraka w słoiku z octem — słodko-kwaśne. Nie ćwikła, nie ciepłe buraczki, nie barszcz.",
        steps: [
          {
            text: "Ugotuj buraki w skórce (35–45 min), ostudź, obierz, pokrój w ćwiartki. Do czystych słoików.",
            tip: "Kawałki w słoiku — nie tarta [ćwikła](/pl/rezepte/cwikla), nie ciepłe [buraczki](/pl/rezepte/buraczki), nie [barszcz](/pl/rezepte/barszcz-czerwony).",
          },
          {
            text: "Zalewa: 250 ml octu 5 % + 200 ml wywaru + 3 łyżki cukru + 1 łyżeczka soli, 2 goździki, liść. Zagotuj.",
            tip: "Tylko ocet 5 %. Wielkanoc: [menu](/pl/blog/menu-wielkanocne).",
          },
          {
            text: "Zalej gorącą, zamknij, 3 dni w lodówce. Do wędlin i pieczystego.",
            tip: "Chrzan zostaje przy ćwikle. Sąsiad: [śliwki w occie](/pl/rezepte/sliwki-w-occie).",
          },
        ],
        seoTitle: "Buraki w occie przepis | Marynaty | Alemniam",
        seoDescription:
          "Buraki w occie — ćwiartki, ocet 5 %. Dwujęzycznie ≠ ćwikła, ≠ buraczki, ≠ barszcz.",
      },
    },
    ingredients: [
      { id: "bw-1", name: { de: "Rote Bete", pl: "Buraki" }, amount: 1000, unit: { de: "g", pl: "g" }, group: "produce" },
      { id: "bw-2", name: { de: "Tafelessig 5 %", pl: "Ocet 5 %" }, amount: 250, unit: { de: "ml", pl: "ml" }, group: "pantry" },
      { id: "bw-3", name: { de: "Zucker", pl: "Cukier" }, amount: 3, unit: { de: "EL", pl: "łyżki" }, group: "pantry" },
      { id: "bw-4", name: { de: "Salz", pl: "Sól" }, amount: 1, unit: { de: "TL", pl: "łyżeczka" }, group: "spices" },
      { id: "bw-5", name: { de: "Nelken, Lorbeer", pl: "Goździki, liść laurowy" }, amount: 1, unit: { de: "nach Bedarf", pl: "do smaku" }, group: "spices" },
    ],
    createdAt: "2026-08-20T10:00:00.000Z",
    updatedAt: "2026-08-20T10:00:00.000Z",
  },
];
