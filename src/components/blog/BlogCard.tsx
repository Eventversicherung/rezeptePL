import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { BlogPost, Locale } from "@/types/content";

const TYPE_LABEL: Record<
  BlogPost["postType"],
  Record<Locale, string>
> = {
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
      className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[calc(var(--radius)+6px)] bg-elevated">
        <Image
          src={post.coverImage}
          alt={t.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        {TYPE_LABEL[post.postType][locale]}
      </p>
      <h2 className="mt-2 font-display text-[clamp(1.35rem,3vw,1.75rem)] font-semibold leading-tight">
        {t.title}
      </h2>
      <p className="mt-2 line-clamp-2 text-[0.95rem] text-muted">{t.excerpt}</p>
    </Link>
  );
}
