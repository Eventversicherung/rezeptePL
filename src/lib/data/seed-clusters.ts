import type { Cluster } from "@/types/content";

export const seedClusters: Cluster[] = [
  {
    id: "region-slask",
    kind: "region",
    slug: { de: "schlesien", pl: "slask" },
    title: { de: "Schlesien", pl: "Śląsk" },
    description: {
      de: "Herzhafte Hausmannskost aus Schlesien. Roladen, Klöße und Sonntagsessen.",
      pl: "Sycąca kuchnia śląska. Rolady, kluski i niedzielne obiady.",
    },
    seoTitle: {
      de: "Schlesische Rezepte | Alemniam",
      pl: "Przepisy śląskie | Alemniam",
    },
    seoDescription: {
      de: "Authentische schlesische Gerichte zum Kochen und Einkaufen.",
      pl: "Autentyczne dania śląskie do gotowania i zakupów.",
    },
  },
  {
    id: "region-podhale",
    kind: "region",
    slug: { de: "podhale", pl: "podhale" },
    title: { de: "Podhale", pl: "Podhale" },
    description: {
      de: "Bergküche aus der Tatra. Oscypek, Sauerkraut und würzige Eintöpfe.",
      pl: "Kuchnia góralska z Tatr. Oscypek, kapusta i aromatyczne gulasze.",
    },
    seoTitle: {
      de: "Podhale Rezepte | Alemniam",
      pl: "Przepisy z Podhala | Alemniam",
    },
    seoDescription: {
      de: "Góralskie Klassiker für zu Hause in Deutschland.",
      pl: "Góralskie klasyki do przygotowania w domu.",
    },
  },
  {
    id: "region-mazowsze",
    kind: "region",
    slug: { de: "masowien", pl: "mazowsze" },
    title: { de: "Masowien", pl: "Mazowsze" },
    description: {
      de: "Warschauer Tischkultur und zentrale Klassiker — klar, satt, alltagstauglich.",
      pl: "Stołowa kultura Warszawy i centralne klasyki — jasne, sycące, na co dzień.",
    },
    seoTitle: {
      de: "Masowien Rezepte | Alemniam",
      pl: "Przepisy z Mazowsza | Alemniam",
    },
    seoDescription: {
      de: "Rezepte aus Masowien und dem Warschauer Umfeld.",
      pl: "Przepisy z Mazowsza i okolic Warszawy.",
    },
  },
  {
    id: "region-malopolska",
    kind: "region",
    slug: { de: "kleinpolen", pl: "malopolska" },
    title: { de: "Kleinpolen", pl: "Małopolska" },
    description: {
      de: "Krakauer und südpolnische Küche — von Obwarzanek bis Sonntagsbraten.",
      pl: "Kuchnia krakowska i południowa — od obwarzanka po niedzielny obiad.",
    },
    seoTitle: {
      de: "Kleinpolen Rezepte | Alemniam",
      pl: "Przepisy z Małopolski | Alemniam",
    },
    seoDescription: {
      de: "Małopolska auf den Teller: Tradition ohne Folklore-Kitsch.",
      pl: "Małopolska na talerzu: tradycja bez kiczu.",
    },
  },
  {
    id: "region-wielkopolska",
    kind: "region",
    slug: { de: "grosspolen", pl: "wielkopolska" },
    title: { de: "Großpolen", pl: "Wielkopolska" },
    description: {
      de: "Deftige westpolnische Küche — Kartoffeln, Fleisch, klare Sonntagsgerichte.",
      pl: "Sycąca kuchnia zachodnia — ziemniaki, mięso, klarowne niedzielne dania.",
    },
    seoTitle: {
      de: "Großpolen Rezepte | Alemniam",
      pl: "Przepisy z Wielkopolski | Alemniam",
    },
    seoDescription: {
      de: "Wielkopolska Klassiker bilingual kochen und einkaufen.",
      pl: "Wielkopolskie klasyki dwujęzycznie.",
    },
  },
  {
    id: "region-pomorze",
    kind: "region",
    slug: { de: "pommern", pl: "pomorze" },
    title: { de: "Pommern", pl: "Pomorze" },
    description: {
      de: "Küche der Küste und Kaschubei — Fisch, klarer Geschmack, Nordwind.",
      pl: "Kuchnia wybrzeża i Kaszub — ryby, czysty smak, północ.",
    },
    seoTitle: {
      de: "Pommern Rezepte | Alemniam",
      pl: "Przepisy z Pomorza | Alemniam",
    },
    seoDescription: {
      de: "Pommersche und kaschubische Impulse für zu Hause.",
      pl: "Pomorskie i kaszubskie inspiracje do domu.",
    },
  },
  {
    id: "region-podlasie",
    kind: "region",
    slug: { de: "podlachien", pl: "podlasie" },
    title: { de: "Podlachien", pl: "Podlasie" },
    description: {
      de: "Ostpolnische Vielfalt — Kartoffeln, Wald, Nachbarschaftsküche.",
      pl: "Wschodnia różnorodność — ziemniaki, las, kuchnia sąsiedzka.",
    },
    seoTitle: {
      de: "Podlachien Rezepte | Alemniam",
      pl: "Przepisy z Podlasia | Alemniam",
    },
    seoDescription: {
      de: "Podlaskie Gerichte mit Respekt vor regionaler Vielfalt.",
      pl: "Podlaskie dania z szacunkiem dla różnorodności.",
    },
  },
  {
    id: "region-lublin",
    kind: "region",
    slug: { de: "lublin", pl: "lubelszczyzna" },
    title: { de: "Lublin", pl: "Lubelszczyzna" },
    description: {
      de: "Ostliche Tischkultur — behutsam, respektvoll, geschmacksstark.",
      pl: "Wschodnia kultura stołu — uważnie, z szacunkiem, z smakiem.",
    },
    seoTitle: {
      de: "Lublin Rezepte | Alemniam",
      pl: "Przepisy z Lubelszczyzny | Alemniam",
    },
    seoDescription: {
      de: "Lubelskie Klassiker für den Alltag und Festtage.",
      pl: "Lubelskie klasyki na co dzień i od święta.",
    },
  },
  {
    id: "occasion-wigilia",
    kind: "occasion",
    slug: { de: "wigilia", pl: "wigilia" },
    title: { de: "Wigilia", pl: "Wigilia" },
    description: {
      de: "Weihnachtsabend-Gerichte. Barszcz, Pierogi, Karp und mehr.",
      pl: "Potrawy wigilijne. Barszcz, pierogi, karp i więcej.",
    },
    seoTitle: {
      de: "Wigilia Rezepte | Alemniam",
      pl: "Przepisy wigilijne | Alemniam",
    },
    seoDescription: {
      de: "Polnische Weihnachtsrezepte bilingual zum Vorbereiten und Einkaufen.",
      pl: "Polskie przepisy wigilijne dwujęzycznie. Gotowanie i zakupy.",
    },
  },
  {
    id: "occasion-wielkanoc",
    kind: "occasion",
    slug: { de: "ostern", pl: "wielkanoc" },
    title: { de: "Ostern", pl: "Wielkanoc" },
    description: {
      de: "Osterfrühstück und Festessen — Żurek, Weißwurst, Babka.",
      pl: "Śniadanie wielkanocne i święta — żurek, biała kiełbasa, babka.",
    },
    seoTitle: {
      de: "Polnische Osterrezepte | Alemniam",
      pl: "Przepisy wielkanocne | Alemniam",
    },
    seoDescription: {
      de: "Wielkanoc zu Hause in Deutschland planen und kochen.",
      pl: "Wielkanoc w domu — plan i gotowanie.",
    },
  },
  {
    id: "occasion-tlusty-czwartek",
    kind: "occasion",
    slug: { de: "tlusty-czwartek", pl: "tlusty-czwartek" },
    title: { de: "Tłusty Czwartek", pl: "Tłusty Czwartek" },
    description: {
      de: "Fetter Donnerstag — Pączki und süße Klassiker ohne Drama.",
      pl: "Tłusty Czwartek — pączki i słodkie klasyki bez chaosu.",
    },
    seoTitle: {
      de: "Tłusty Czwartek Rezepte | Alemniam",
      pl: "Przepisy na Tłusty Czwartek | Alemniam",
    },
    seoDescription: {
      de: "Pączki und mehr für den Fettsdonnerstag.",
      pl: "Pączki i więcej na Tłusty Czwartek.",
    },
  },
  {
    id: "occasion-niedziela",
    kind: "occasion",
    slug: { de: "sonntagsessen", pl: "niedziela" },
    title: { de: "Sonntagsessen", pl: "Niedziela" },
    description: {
      de: "Rosół, Schabowy, Kompott — der ruhige Sonntagstisch.",
      pl: "Rosół, schabowy, kompot — spokojny niedzielny stół.",
    },
    seoTitle: {
      de: "Polnisches Sonntagsessen | Alemniam",
      pl: "Polski obiad niedzielny | Alemniam",
    },
    seoDescription: {
      de: "Klassiker für den Sonntag — planen, einkaufen, kochen.",
      pl: "Klasyki na niedzielę — plan, zakupy, gotowanie.",
    },
  },
  {
    id: "occasion-imieniny",
    kind: "occasion",
    slug: { de: "imieniny", pl: "imieniny" },
    title: { de: "Imieniny", pl: "Imieniny" },
    description: {
      de: "Namenstag zu Hause — Torte, Kaffee, etwas Herzhaftes.",
      pl: "Imieniny w domu — tort, kawa, coś konkretnego.",
    },
    seoTitle: {
      de: "Imieniny Rezepte | Alemniam",
      pl: "Przepisy na imieniny | Alemniam",
    },
    seoDescription: {
      de: "Ideen für Imieniny ohne Event-Stress.",
      pl: "Pomysły na imieniny bez stresu.",
    },
  },
  {
    id: "occasion-komunia",
    kind: "occasion",
    slug: { de: "kommunion", pl: "komunia" },
    title: { de: "Kommunion", pl: "Komunia" },
    description: {
      de: "Familienfeier mit ruhigem Buffet — satt, klar, teilbar.",
      pl: "Uroczystość rodzinna — sycąco, czytelnie, do dzielenia.",
    },
    seoTitle: {
      de: "Kommunion Speisen | Alemniam",
      pl: "Potrawy na komunię | Alemniam",
    },
    seoDescription: {
      de: "Gerichte für Kommunion und große Familientische.",
      pl: "Dania na komunię i duże stoły rodzinne.",
    },
  },
  {
    id: "occasion-grill",
    kind: "occasion",
    slug: { de: "grill", pl: "grill" },
    title: { de: "Grill", pl: "Grill" },
    description: {
      de: "Sommer, Kielbasa, Beilagen — polnisch grillen ohne Show.",
      pl: "Lato, kiełbasa, dodatki — grill po polsku bez show.",
    },
    seoTitle: {
      de: "Polnisch grillen | Alemniam",
      pl: "Grill po polsku | Alemniam",
    },
    seoDescription: {
      de: "Grillideen mit polnischem Fokus.",
      pl: "Pomysły na grill z polskim akcentem.",
    },
  },
  {
    id: "occasion-post",
    kind: "occasion",
    slug: { de: "fastenzeit", pl: "post" },
    title: { de: "Fastenzeit", pl: "Post" },
    description: {
      de: "Leichte Freitags- und Post-Ideen — Fisch, Gemüse, Respekt ohne Dogma.",
      pl: "Lżejsze pomysły na piątek i post — ryba, warzywa, bez dogmatu.",
    },
    seoTitle: {
      de: "Post & Freitagsküche | Alemniam",
      pl: "Post i kuchnia piątkowa | Alemniam",
    },
    seoDescription: {
      de: "Ruhige Gerichte für Post und Fischfreitage.",
      pl: "Spokojne dania na post i piątki.",
    },
  },
  {
    id: "occasion-sylwester",
    kind: "occasion",
    slug: { de: "silvester", pl: "sylwester" },
    title: { de: "Silvester", pl: "Sylwester" },
    description: {
      de: "Silvester-Snacks und Mitternachtstisch — feierlich, machbar.",
      pl: "Przekąski i stół o północy — odświętnie, wykonalnie.",
    },
    seoTitle: {
      de: "Silvester polnisch | Alemniam",
      pl: "Sylwester po polsku | Alemniam",
    },
    seoDescription: {
      de: "Ideen für Sylwester mit polnischem Touch.",
      pl: "Pomysły na sylwestra z polskim akcentem.",
    },
  },
  {
    id: "technique-teig",
    kind: "technique",
    slug: { de: "teig", pl: "ciasto" },
    title: { de: "Teig", pl: "Ciasto" },
    description: {
      de: "Pierogi-, Nudel- und Hefeteige. Mit Tipps für die deutsche Küche.",
      pl: "Ciasta na pierogi, kluski i drożdżowe. Ze wskazówkami.",
    },
    seoTitle: {
      de: "Polnische Teige | Alemniam",
      pl: "Polskie ciasta | Alemniam",
    },
    seoDescription: {
      de: "Techniken für Teige der polnischen Küche.",
      pl: "Techniki ciasta w polskiej kuchni.",
    },
  },
  {
    id: "technique-kiszenie",
    kind: "technique",
    slug: { de: "fermentieren", pl: "kiszenie" },
    title: { de: "Fermentieren", pl: "Kiszenie" },
    description: {
      de: "Kapusta, Ogórki, Zakwas — sauber fermentieren zu Hause.",
      pl: "Kapusta, ogórki, zakwas — czyste kiszenie w domu.",
    },
    seoTitle: {
      de: "Kiszonki & Fermentieren | Alemniam",
      pl: "Kiszonki i fermentacja | Alemniam",
    },
    seoDescription: {
      de: "Grundlagen für polnische Fermente.",
      pl: "Podstawy polskich kiszonek.",
    },
  },
  {
    id: "technique-bulion",
    kind: "technique",
    slug: { de: "bruehe", pl: "bulion" },
    title: { de: "Brühe", pl: "Bulion" },
    description: {
      de: "Rosół und klare Brühen — Fundament vieler Suppen.",
      pl: "Rosół i jasne buliony — baza wielu zup.",
    },
    seoTitle: {
      de: "Polnische Brühe | Alemniam",
      pl: "Polski bulion | Alemniam",
    },
    seoDescription: {
      de: "Technik für klaren Rosół und Suppengrund.",
      pl: "Technika jasnego rosołu i bazy zup.",
    },
  },
  {
    id: "technique-panieren",
    kind: "technique",
    slug: { de: "panieren", pl: "panierowanie" },
    title: { de: "Panieren", pl: "Panierowanie" },
    description: {
      de: "Schabowy und Co. — knusprige Panade ohne Stress.",
      pl: "Schabowy i nie tylko — chrupiąca panierka bez stresu.",
    },
    seoTitle: {
      de: "Panieren wie bei Schabowy | Alemniam",
      pl: "Panierowanie jak do schabowego | Alemniam",
    },
    seoDescription: {
      de: "Technik für perfekte Panade.",
      pl: "Technika idealnej panierki.",
    },
  },
  {
    id: "technique-schmoren",
    kind: "technique",
    slug: { de: "schmoren", pl: "duszenie" },
    title: { de: "Schmoren", pl: "Duszenie" },
    description: {
      de: "Langsam garen — Bigos, Gulasch, zarte Soßen.",
      pl: "Wolne gotowanie — bigos, gulasz, sosy.",
    },
    seoTitle: {
      de: "Schmoren polnisch | Alemniam",
      pl: "Duszenie po polsku | Alemniam",
    },
    seoDescription: {
      de: "Schmortechnik für Klassiker der polnischen Küche.",
      pl: "Technika duszenia polskich klasyków.",
    },
  },
  {
    id: "technique-fuellen",
    kind: "technique",
    slug: { de: "fuellen-rollen", pl: "nadziewanie" },
    title: { de: "Füllen & Rollen", pl: "Nadziewanie" },
    description: {
      de: "Gołąbki, Rolada, gefüllte Klassiker sauber wickeln.",
      pl: "Gołąbki, rolada, faszerowane klasyki.",
    },
    seoTitle: {
      de: "Füllen & Rollen | Alemniam",
      pl: "Nadziewanie i zawijanie | Alemniam",
    },
    seoDescription: {
      de: "Technik für gefüllte polnische Gerichte.",
      pl: "Technika polskich dań faszerowanych.",
    },
  },
  {
    id: "technique-grill-rauch",
    kind: "technique",
    slug: { de: "grill-raeuchern", pl: "grill-wedzenie" },
    title: { de: "Grill & Räuchern", pl: "Grill i wędzenie" },
    description: {
      de: "Oscypek, Kielbasa, Raucharomen zu Hause.",
      pl: "Oscypek, kiełbasa, dym w domowej kuchni.",
    },
    seoTitle: {
      de: "Grill & Räuchern | Alemniam",
      pl: "Grill i wędzenie | Alemniam",
    },
    seoDescription: {
      de: "Techniken für gegrillte und geräucherte Klassiker.",
      pl: "Techniki grillowanych i wędzonych klasyków.",
    },
  },
  {
    id: "technique-konserven",
    kind: "technique",
    slug: { de: "vorrat", pl: "przetwory" },
    title: { de: "Vorrat", pl: "Przetwory" },
    description: {
      de: "Kompot, Powidła, Gläser — Vorrat ohne Überkomplex.",
      pl: "Kompot, powidła, słoiki — zapasy bez komplikacji.",
    },
    seoTitle: {
      de: "Polnische Vorräte | Alemniam",
      pl: "Polskie przetwory | Alemniam",
    },
    seoDescription: {
      de: "Einmachen und Vorrat polnischer Klassiker.",
      pl: "Przetwory polskich klasyków.",
    },
  },
  {
    id: "technique-freezer",
    kind: "technique",
    slug: { de: "freezer", pl: "mrozenie" },
    title: { de: "Freezer", pl: "Mrożenie" },
    description: {
      de: "Pierogi und mehr batchen, einfrieren, später kochen.",
      pl: "Pierogi i nie tylko — mrożenie partiami.",
    },
    seoTitle: {
      de: "Meal Prep Freezer polnisch | Alemniam",
      pl: "Mrożenie i meal prep | Alemniam",
    },
    seoDescription: {
      de: "Freezer-Technik für polnische Hausküche.",
      pl: "Technika mrożenia polskiej kuchni domowej.",
    },
  },
];
