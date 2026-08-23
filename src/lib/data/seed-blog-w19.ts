import type { BlogPost } from "@/types/content";
import {
  bodyChlodnikDe,
  bodyFastenzeitDe,
  bodyHeringDe,
  bodyKluskiDe,
  bodySylwesterDe,
} from "./blog-bodies-w19-de";
import {
  bodyChlodnikPl,
  bodyFastenzeitPl,
  bodyHeringPl,
  bodyKluskiPl,
  bodySylwesterPl,
} from "./blog-bodies-w19-pl";

export const seedBlogPostsW19: BlogPost[] = [
  {
    id: "post-fastenzeit",
    status: "published",
    postType: "culture",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-fastenzeit/c2a1a5b6-df48-4640-aa45-af2ac23de4af.webp",
    siloIds: ["occasion", "culture"],
    relatedRecipeIds: [
      "recipe-sledz",
      "recipe-karp",
      "recipe-ryba-po-grecku",
      "recipe-kapusniak",
      "recipe-ogorkowa",
      "recipe-kluski-kladzione",
    ],
    relatedPostIds: [
      "post-hering",
      "post-wielkanoc",
      "post-tlusty-czwartek",
      "post-zakwas-zurek",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-post"],
    translations: {
      de: {
        title: "Fastenzeit Speiseplan: Freitag ohne Fleisch in DE",
        slug: "fastenzeit-speiseplan",
        excerpt:
          "Post in Deutschland ruhig halten: Hering, eine klare Suppe, Gemüse, ohne sechs Wochen Hunger und ohne Dogma.",
        seoTitle: "Fastenzeit Speiseplan | Freitagsküche DE | Alemniam",
        seoDescription:
          "Fastenzeit in Deutschland: Śledź, Fisch, Gemüsesuppe. Speiseplan für Freitage, bilingual, ohne Rezeptduplikat.",
        body: bodyFastenzeitDe.trim(),
      },
      pl: {
        title: "Menu na post: piątek bez mięsa w DE",
        slug: "menu-post",
        excerpt:
          "Post w Niemczech spokojnie: śledź, jasna zupa, warzywa, bez sześciu tygodni głodu i bez dogmatu.",
        seoTitle: "Menu na post | Kuchnia piątkowa DE | Alemniam",
        seoDescription:
          "Post w Niemczech: śledź, ryba, zupa warzywna. Plan menu na piątki, dwujęzycznie, bez duplikatu przepisu.",
        body: bodyFastenzeitPl.trim(),
      },
    },
    publishedAt: "2026-08-23T13:00:00.000Z",
    updatedAt: "2026-08-23T13:00:00.000Z",
  },
  {
    id: "post-sylwester",
    status: "published",
    postType: "culture",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-sylwester/1afeec59-0661-4562-a8bb-79b91d527c95.webp",
    siloIds: ["occasion", "culture"],
    relatedRecipeIds: [
      "recipe-sledz",
      "recipe-salatka-sledziowa",
      "recipe-tatar",
      "recipe-zapiekanka",
      "recipe-karp",
    ],
    relatedPostIds: [
      "post-hering",
      "post-wigilia",
      "post-kielbasa-arten",
      "post-sonntagsessen",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-sylwester"],
    translations: {
      de: {
        title: "Sylwester Speiseplan: Hering um Mitternacht",
        slug: "silvester-speiseplan",
        excerpt:
          "Jahreswechsel ohne zweites Weihnachten: eine kalte Platte, optional Tartar, Zapiekanka in Chargen, Hygiene nach der Wigilia.",
        seoTitle: "Silvester Speiseplan | Hering Mitternacht | Alemniam",
        seoDescription:
          "Sylwester in Deutschland: Śledź, Salat, optional Tartar. Speiseplan für Mitternacht, bilingual, machbar.",
        body: bodySylwesterDe.trim(),
      },
      pl: {
        title: "Menu na sylwestra: śledź o północy",
        slug: "menu-sylwester",
        excerpt:
          "Zmiana roku bez drugich Świąt: zimna półmiska, opcjonalnie tatar, zapiekanka porcjami, higiena po Wigilii.",
        seoTitle: "Menu na sylwestra | Śledź o północy | Alemniam",
        seoDescription:
          "Sylwester w Niemczech: śledź, sałatka, opcjonalnie tatar. Plan menu na północ, dwujęzycznie, wykonalnie.",
        body: bodySylwesterPl.trim(),
      },
    },
    publishedAt: "2026-08-23T13:10:00.000Z",
    updatedAt: "2026-08-23T13:10:00.000Z",
  },
  {
    id: "post-kluski",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-kluski/11c13037-8d34-43ed-8dca-cf82fb1ac357.webp",
    siloIds: ["dishFamily", "technique"],
    relatedRecipeIds: [
      "recipe-kopytka",
      "recipe-kluski-slaskie",
      "recipe-kluski-kladzione",
      "recipe-pierogi-leniwe",
      "recipe-pyzy",
      "recipe-knedle-sliwki",
    ],
    relatedPostIds: [
      "post-pierogi-guide",
      "post-placki-guide",
      "post-twarog",
      "post-sonntagsessen",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-niedziela", "technique-teig"],
    translations: {
      de: {
        title: "Kluski-Familie: Kopytka, śląskie, Leniwe, Pyzy",
        slug: "kluski-familie",
        excerpt:
          "Welche Kluski auf den Teller gehören: Kopytka, schlesische Mulde, Fallnudeln, Leniwe, Pyzy. Namen, Teig, Alltag in DE.",
        seoTitle: "Kluski Familie | Kopytka und Leniwe | Alemniam",
        seoDescription:
          "Kluski unterscheiden: Kopytka, śląskie, kładzione, Leniwe, Pyzy. Lexikon neben den Rezepten, bilingual, für Küchen in DE.",
        body: bodyKluskiDe.trim(),
      },
      pl: {
        title: "Rodzina klusek: kopytka, śląskie, leniwe, pyzy",
        slug: "rodzina-klusek",
        excerpt:
          "Które kluski na talerz: kopytka, dziurka śląska, kładzione, leniwe, pyzy. Nazwy, ciasto, codzienność w DE.",
        seoTitle: "Rodzina klusek | Kopytka i leniwe | Alemniam",
        seoDescription:
          "Kluski: kopytka, śląskie, kładzione, leniwe, pyzy. Leksykon obok przepisów, dwujęzycznie, dla kuchni w DE.",
        body: bodyKluskiPl.trim(),
      },
    },
    publishedAt: "2026-08-23T13:20:00.000Z",
    updatedAt: "2026-08-23T13:20:00.000Z",
  },
  {
    id: "post-hering",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-hering/2d623b62-e092-403e-b55d-cf9ffb09ffac.webp",
    siloIds: ["ingredient"],
    relatedRecipeIds: [
      "recipe-sledz",
      "recipe-salatka-sledziowa",
      "recipe-karp",
      "recipe-ryba-po-grecku",
    ],
    relatedPostIds: [
      "post-fastenzeit",
      "post-sylwester",
      "post-wigilia",
      "post-polenladen",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-wigilia", "occasion-post", "occasion-sylwester"],
    translations: {
      de: {
        title: "Hering in Deutschland: Śledź, Öl, Sahne, Salat",
        slug: "hering-deutschland",
        excerpt:
          "Öl, Sahne oder Salat: welcher Śledź zur Wigilia, zum Freitag und zu Sylwester gehört, und woran gute Filets zu erkennen sind.",
        seoTitle: "Hering kaufen DE | Śledź Guide | Alemniam",
        seoDescription:
          "Śledź in Deutschland: Öl, Sahne, Salat, Matjes. Lexikon für Wigilia, Post und Sylwester, bilingual, ohne Rezeptduplikat.",
        body: bodyHeringDe.trim(),
      },
      pl: {
        title: "Śledź w Niemczech: olej, śmietana, sałatka",
        slug: "sledz-w-niemczech",
        excerpt:
          "Olej, śmietana albo sałatka: który śledź na Wigilię, piątek i sylwestra, i po czym poznać dobre filety.",
        seoTitle: "Śledź w Niemczech | Przewodnik | Alemniam",
        seoDescription:
          "Śledź w Niemczech: olej, śmietana, sałatka, matjas. Leksykon na Wigilię, post i sylwestra, dwujęzycznie, bez duplikatu przepisu.",
        body: bodyHeringPl.trim(),
      },
    },
    publishedAt: "2026-08-23T13:30:00.000Z",
    updatedAt: "2026-08-23T13:30:00.000Z",
  },
  {
    id: "post-chlodnik",
    status: "published",
    postType: "lexicon",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-chlodnik/43cdc6c8-676d-43d8-bf5c-effce582f47f.webp",
    siloIds: ["ingredient", "dishFamily"],
    relatedRecipeIds: [
      "recipe-chlodnik",
      "recipe-botwinka",
      "recipe-szczawiowa",
      "recipe-buraczki",
    ],
    relatedPostIds: [
      "post-polnische-suppen",
      "post-barszcz-technik",
      "post-smietana-schmand",
      "post-fastenzeit",
    ],
    relatedProductIds: [],
    clusterIds: ["technique-bulion"],
    translations: {
      de: {
        title: "Chłodnik: kalte Bete, kein Barszcz",
        slug: "chlodnik-deutschland",
        excerpt:
          "Warum Chłodnik kalt und milchig bleibt: Kefir, Buttermilch, Gurke, Abgrenzung zu Barszcz, Botwinka und Szczawiowa.",
        seoTitle: "Chłodnik Guide | Kalte Rote Bete | Alemniam",
        seoDescription:
          "Chłodnik litewski in Deutschland: Kefir, Buttermilch, kein heißer Barszcz. Lexikon neben dem Rezept, bilingual.",
        body: bodyChlodnikDe.trim(),
      },
      pl: {
        title: "Chłodnik: zimny burak, nie barszcz",
        slug: "chlodnik-w-niemczech",
        excerpt:
          "Dlaczego chłodnik zostaje zimny i mleczny: kefir, maślanka, ogórek, różnica wobec barszczu, botwinki i szczawiowej.",
        seoTitle: "Chłodnik | Zimny burak | Alemniam",
        seoDescription:
          "Chłodnik litewski w Niemczech: kefir, maślanka, nie gorący barszcz. Leksykon obok przepisu, dwujęzycznie.",
        body: bodyChlodnikPl.trim(),
      },
    },
    publishedAt: "2026-08-23T13:40:00.000Z",
    updatedAt: "2026-08-23T13:40:00.000Z",
  },
];
