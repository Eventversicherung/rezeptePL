import type { BlogPost } from "@/types/content";
import { bodyFehlerDiasporaDe } from "./blog-bodies-w16-de";
import { bodyFehlerDiasporaPl } from "./blog-bodies-w16-pl";

/**
 * Wave 16 — silo-safe mistakes post (cross-dish, no cook-dupe).
 */
export const seedBlogPostsW16: BlogPost[] = [
  {
    id: "post-fehler-diaspora",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1781019450243-ba76b4a1b789?w=1600&q=80",
    siloIds: ["diaspora", "technique"],
    relatedRecipeIds: [
      "recipe-surowka",
      "recipe-de-volaille",
      "recipe-kasza-gryczana",
      "recipe-kurczak-pieczony",
      "recipe-tatar",
      "recipe-pierniczki",
    ],
    relatedPostIds: [
      "post-polenladen",
      "post-ersatzprodukte-de",
      "post-sonntagsessen",
      "post-panieren",
    ],
    relatedProductIds: [],
    clusterIds: ["technique-panieren", "occasion-niedziela"],
    translations: {
      de: {
        title: "Häufigste Fehler beim polnischen Kochen in Deutschland",
        slug: "fehler-polnisch-kochen-deutschland",
        excerpt:
          "Hitze, Feuchtigkeit, Ersatz und Zeitdruck — typische Fehler über Gerichte hinweg, mit Links zu den Rezepten statt Mengenlisten.",
        seoTitle:
          "Fehler polnisch kochen DE | Diaspora Tipps | Alemniam",
        seoDescription:
          "Die häufigsten Fehler beim polnischen Kochen in Deutschland: Hitze, Feuchtigkeit, Ersatz, Batches. Praxisnah, bilingual, ohne Rezept-Duplikat.",
        body: bodyFehlerDiasporaDe.trim(),
      },
      pl: {
        title: "Najczęstsze błędy przy polskim gotowaniu w Niemczech",
        slug: "bledy-polskie-gotowanie-niemcy",
        excerpt:
          "Ogień, wilgoć, zamienniki i pośpiech — typowe błędy ponad daniami, z linkami do przepisów zamiast list ilości.",
        seoTitle:
          "Błędy polskiego gotowania w DE | Diaspora | Alemniam",
        seoDescription:
          "Najczęstsze błędy przy polskim gotowaniu w Niemczech: ogień, wilgoć, zamienniki, partie. Praktycznie, dwujęzycznie, bez duplikatu przepisu.",
        body: bodyFehlerDiasporaPl.trim(),
      },
    },
    publishedAt: "2026-07-28T14:00:00.000Z",
    updatedAt: "2026-07-28T14:00:00.000Z",
  },
];

export const seedBlogW16 = seedBlogPostsW16;
