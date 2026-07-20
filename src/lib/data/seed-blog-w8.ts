import type { BlogPost } from "@/types/content";
import { bodyPaczekTechnikDe } from "./blog-bodies-w8-de";
import { bodyPaczekTechnikPl } from "./blog-bodies-w8-pl";

/**
 * Wave 8 Paket C — Pączki Technik pillar.
 * Export for Integrator E: merge into seed-blog aggregator.
 * Also exported as `seedBlogW8` alias per plan naming.
 */
export const seedBlogPostsW8: BlogPost[] = [
  {
    id: "post-paczek-technik",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1558326567-98ae2405596b?w=1600&q=80",
    siloIds: ["technique", "occasion"],
    relatedRecipeIds: ["recipe-paczki", "recipe-faworki", "recipe-racuchy"],
    relatedPostIds: [
      "post-tlusty-czwartek",
      "post-faworki-technik",
      "post-makowiec-technik",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-tlusty-czwartek", "technique-teig"],
    translations: {
      de: {
        title: "Pączki-Technik: Hefe, Füllung, heißes Fett",
        slug: "paczek-technik",
        excerpt:
          "Hefeteig, Füllung und Frittieren — Technik-Guide zu Pączki für Tłusty Czwartek in DE, ohne Rezept zu duplizieren.",
        seoTitle: "Pączki Technik Guide | Hefe frittieren | Alemniam",
        seoDescription:
          "Pączki richtig machen: Hefe, Füllung, Fett-Temperatur, Fehler. Ergänzt Rezept und Tłusty-Czwartek-Artikel.",
        body: bodyPaczekTechnikDe.trim(),
      },
      pl: {
        title: "Technika pączków: drożdże, nadzienie, gorący tłuszcz",
        slug: "paczki-technika",
        excerpt:
          "Ciasto drożdżowe, nadzienie i smażenie — przewodnik techniki pączków na Tłusty Czwartek w DE, bez powielania przepisu.",
        seoTitle: "Pączki technika | Drożdże i smażenie | Alemniam",
        seoDescription:
          "Jak robić pączki: drożdże, nadzienie, temperatura tłuszczu, błędy. Uzupełnia przepis i artykuł o Tłustym Czwartku.",
        body: bodyPaczekTechnikPl.trim(),
      },
    },
    publishedAt: "2026-07-29T09:00:00.000Z",
    updatedAt: "2026-07-29T09:00:00.000Z",
  },
];

/** Plan alias — Integrator E may import this name. */
export const seedBlogW8 = seedBlogPostsW8;
