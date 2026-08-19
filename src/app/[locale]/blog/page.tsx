import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogTopicTiles } from "@/components/blog/BlogTopicTiles";
import { RecipeGridControls } from "@/components/recipe/RecipeGridControls";
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

const TOPICS: {
  key: string;
  type: BlogPostType;
  coverImage: string;
}[] = [
  {
    key: "guide",
    type: "guide",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-pierogi-guide/d1e4f6b2-280f-49a2-9a34-bf6a2d42a8a4.webp",
  },
  {
    key: "lexicon",
    type: "lexicon",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-twarog/8948afdf-bc98-4abc-a5eb-10ce0213e069.webp",
  },
  {
    key: "culture",
    type: "culture",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-wigilia/5d4a7a91-2d49-4f18-a8b0-a1d265c65de8.webp",
  },
  {
    key: "diaspora",
    type: "diaspora",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-polenladen/a241ecc3-c9c5-4acd-ac5f-94ba76f76790.webp",
  },
  {
    key: "gear",
    type: "buying-guide",
    coverImage:
      "https://kdrbtwwhmzszzukcffsu.supabase.co/storage/v1/object/public/recipe-media/blog/post-teigmaschine/5e38d094-ee79-4c83-88ed-ef36d24e654b.webp",
  },
];

export default async function BlogIndexPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ typ?: string; q?: string }>;
}) {
  const { locale: localeParam } = await params;
  const { typ, q = "" } = await searchParams;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("blog");
  const tCommon = await getTranslations("common");
  const tRecipes = await getTranslations("recipes");
  const posts = await listPublishedBlogPosts();

  const activeTopic =
    TOPICS.find((topic) => topic.key === typ) ??
    TOPICS.find((topic) => topic.type === typ) ??
    null;

  const needle = q.trim().toLowerCase();
  const filtered = posts.filter((post) => {
    if (activeTopic && post.postType !== activeTopic.type) return false;
    if (!needle) return true;
    const tr = post.translations[locale];
    return (
      tr.title.toLowerCase().includes(needle) ||
      tr.excerpt.toLowerCase().includes(needle) ||
      tr.slug.includes(needle)
    );
  });

  const topics = TOPICS.map((topic) => ({
    ...topic,
    title: t(`filter.${topic.key}`),
    description: t(`topicDesc.${topic.key}`),
  }));

  return (
    <div className="space-y-12 sm:space-y-16">
      <Breadcrumbs
        ariaLabel={tCommon("breadcrumbs")}
        items={[
          { label: tCommon("home"), href: "/" },
          { label: t("title") },
        ]}
      />

      <header className="reveal flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h1 className="font-display text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
          {t("title")}
        </h1>
        <p className="text-sm text-muted">{t("topicsLabel")}</p>
      </header>

      <section className="reveal -mt-4 space-y-4 sm:-mt-6">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="font-display text-[clamp(1.55rem,3.5vw,2.15rem)] font-semibold">
            {t("browseByTopic")}
          </h2>
          {activeTopic ? (
            <Link
              href="/blog"
              className="text-sm font-semibold text-accent"
            >
              {t("clearFilter")} →
            </Link>
          ) : null}
        </div>
        <BlogTopicTiles
          topics={topics}
          activeKey={activeTopic?.key}
          postsLabel={t("browseTopic")}
        />
      </section>

      <section
        className="hub-search reveal"
        aria-labelledby="blog-search-heading"
      >
        <div className="hub-search__inner">
          <p className="hub-search__label" id="blog-search-heading">
            {t("searchKicker")}
          </p>
          <form className="hub-search__form">
            {activeTopic ? (
              <input type="hidden" name="typ" value={activeTopic.key} />
            ) : null}
            <label className="sr-only" htmlFor="blog-q">
              {t("search")}
            </label>
            <input
              id="blog-q"
              name="q"
              defaultValue={q}
              placeholder={t("search")}
              className="hub-search__input"
            />
            <button type="submit" className="hub-search__submit">
              {t("searchSubmit")}
            </button>
          </form>
          {activeTopic || q ? (
            <p className="hub-search__meta">
              {activeTopic ? (
                <span>
                  {t("filteringTopic", {
                    topic: t(`filter.${activeTopic.key}`),
                  })}
                </span>
              ) : null}
              {q ? (
                <span>
                  {activeTopic ? " · " : null}
                  {t("filteringQuery", { query: q })}
                </span>
              ) : null}
            </p>
          ) : null}
        </div>
      </section>

      <section className="reveal space-y-5">
        <h2 className="font-display text-[clamp(1.4rem,3vw,1.85rem)] font-semibold">
          {activeTopic
            ? t(`filter.${activeTopic.key}`)
            : t("allPosts")}
        </h2>

        {filtered.length === 0 ? (
          <p className="text-lg text-muted">{t("empty")}</p>
        ) : (
          <RecipeGridControls
            label={tRecipes("gridDensity")}
            optionLabels={{
              3: tRecipes("gridCols3"),
              4: tRecipes("gridCols4"),
              5: tRecipes("gridCols5"),
            }}
            storageKey="alemniam-blog-grid-cols"
          >
            {filtered.map((post) => (
              <BlogCard key={post.id} post={post} locale={locale} />
            ))}
          </RecipeGridControls>
        )}
      </section>
    </div>
  );
}
