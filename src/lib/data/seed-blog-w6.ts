import type { BlogPost } from "@/types/content";
import { bodyMakowiecTechnikDe } from "./blog-bodies-w6-de";
import { bodyMakowiecTechnikPl } from "./blog-bodies-w6-pl";

export const seedBlogPostsW6: BlogPost[] = [
  {
    id: "post-makowiec-technik",
    status: "published",
    postType: "guide",
    coverImage:
      "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1600&q=80",
    siloIds: ["technique", "occasion"],
    relatedRecipeIds: [
      "recipe-makowiec",
      "recipe-sernik",
      "recipe-babka",
      "recipe-faworki",
      "recipe-racuchy",
      "recipe-uszka",
    ],
    relatedPostIds: [
      "post-wigilia",
      "post-faworki-technik",
      "post-ersatzprodukte-de",
      "post-polenladen",
    ],
    relatedProductIds: [],
    clusterIds: ["occasion-wigilia", "technique-teig"],
    translations: {
      de: {
        title: "Makowiec-Technik: Hefeteig, Mohnmasse, ruhig rollen",
        slug: "makowiec-technik",
        excerpt:
          "Mohn, Teigführung und Ofentemperatur — Back-Pillar zu Makowiec für Wigilia in DE.",
        seoTitle: "Makowiec Technik Guide | Polnisches Backen | Alemniam",
        seoDescription:
          "Makowiec richtig backen: Mohnmasse, Hefeteig, Rollen, Fehler. Ergänzt Rezept und Wigilia-Speiseplan.",
        body: bodyMakowiecTechnikDe.trim(),
      },
      pl: {
        title: "Technika makowca: ciasto drożdżowe, masa makowa, spokojne zwijanie",
        slug: "makowiec-technika",
        excerpt:
          "Mak, prowadzenie ciasta i temperatura pieca — filar pieczenia makowca na Wigilię w DE.",
        seoTitle: "Makowiec technika | Polskie pieczenie | Alemniam",
        seoDescription:
          "Jak upiec makowiec: masa makowa, ciasto drożdżowe, zwijanie, błędy. Uzupełnia przepis i menu wigilijne.",
        body: bodyMakowiecTechnikPl.trim(),
      },
    },
    publishedAt: "2026-07-29T09:00:00.000Z",
    updatedAt: "2026-07-29T09:00:00.000Z",
  },
];
