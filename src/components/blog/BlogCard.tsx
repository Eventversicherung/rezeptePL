import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { BlogPost, Locale } from "@/types/content";

const TYPE_LABEL: Record<BlogPost["postType"], Record<Locale, string>> = {
  guide: { de: "Guide", pl: "Poradnik" },
  lexicon: { de: "Lexikon", pl: "Leksykon" },
  culture: { de: "Tradition", pl: "Tradycja" },
  diaspora: { de: "In Deutschland", pl: "W Niemczech" },
  "buying-guide": { de: "Küche & Geräte", pl: "Kuchnia i sprzęt" },
};

export function BlogCard({
  post,
  locale,
}: {
  post: BlogPost;
  locale: Locale;
}) {
  const t = post.translations[locale];
  return (
    <Link
      href={`/blog/${t.slug}`}
      className="recipe-card group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="recipe-card__media">
        <Image
          src={post.coverImage}
          alt={t.title}
          fill
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
        <span className="recipe-card__badge">
          {TYPE_LABEL[post.postType][locale]}
        </span>
      </div>
      <div className="pt-3">
        <h2 className="font-display text-[clamp(1.15rem,2.4vw,1.45rem)] font-semibold tracking-tight">
          {t.title}
        </h2>
        <p className="mt-1.5 line-clamp-2 max-w-[42ch] text-sm text-muted">
          {t.excerpt}
        </p>
      </div>
    </Link>
  );
}
