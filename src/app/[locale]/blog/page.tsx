import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { Link } from "@/i18n/navigation";
import { listPublishedBlogPosts } from "@/lib/data/repository";
import { siteUrl } from "@/lib/utils";
import type { BlogPostType, Locale } from "@/types/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  const base = siteUrl();
  return {
    title: locale === "de" ? "Blog | Alemniam" : "Blog | Alemniam",
    description:
      locale === "de"
        ? "Guides, Zutaten, Tradition und Kaufberater zur polnischen Küche."
        : "Poradniki, składniki, tradycja i sprzęt do polskiej kuchni.",
    alternates: {
      canonical: `${base}/${locale}/blog`,
      languages: {
        de: `${base}/de/blog`,
        pl: `${base}/pl/blog`,
        "x-default": `${base}/de/blog`,
      },
    },
  };
}

const FILTERS: { type: BlogPostType | "all"; key: string }[] = [
  { type: "all", key: "all" },
  { type: "guide", key: "guide" },
  { type: "lexicon", key: "lexicon" },
  { type: "culture", key: "culture" },
  { type: "diaspora", key: "diaspora" },
  { type: "buying-guide", key: "gear" },
];

export default async function BlogIndexPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ typ?: string }>;
}) {
  const { locale: localeParam } = await params;
  const { typ } = await searchParams;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const tCommon = await getTranslations("common");
  const posts = await listPublishedBlogPosts();
  const active =
    FILTERS.find((f) => f.key === typ)?.type ??
    (FILTERS.find((f) => f.type === typ)?.type as BlogPostType | "all") ??
    "all";
  const filtered =
    active === "all" ? posts : posts.filter((p) => p.postType === active);

  return (
    <div className="space-y-10">
      <Breadcrumbs
        ariaLabel={tCommon("breadcrumbs")}
        items={[
          { label: tCommon("home"), href: "/" },
          { label: t("title") },
        ]}
      />
      <header className="reveal max-w-2xl">
        <p className="section-kicker">Alemniam</p>
        <h1 className="mt-3 font-display text-[clamp(2.6rem,8vw,4.5rem)] font-semibold">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-muted">{t("sub")}</p>
      </header>

      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => {
          const href =
            f.type === "all" ? "/blog" : (`/blog?typ=${f.key}` as "/blog");
          const isActive =
            (active === "all" && f.type === "all") || active === f.type;
          return (
            <Link
              key={f.key}
              href={href}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                isActive
                  ? "bg-accent text-white"
                  : "border border-border bg-surface text-muted"
              }`}
            >
              {t(`filter.${f.key}`)}
            </Link>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="text-muted">{t("empty")}</p>
      ) : (
        <div className="stagger grid gap-10 sm:grid-cols-2">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}
