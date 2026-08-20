import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { createBlogDraftAction } from "@/app/actions/admin";
import { listAllBlogPosts } from "@/lib/data/repository";
import type { Locale } from "@/types/content";

export default async function AdminBlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = localeParam as Locale;
  setRequestLocale(locale);
  const t = await getTranslations("admin");
  const posts = await listAllBlogPosts();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="section-kicker">{t("cms")}</p>
          <h1 className="font-display text-3xl font-semibold">{t("blog")}</h1>
        </div>
        <form action={createBlogDraftAction.bind(null, locale)}>
          <button type="submit" className="btn-primary !min-h-11 px-4 text-sm">
            {t("newPost")}
          </button>
        </form>
      </div>

      <div className="overflow-hidden rounded-[var(--radius)] border border-border bg-surface">
        <ul className="divide-y divide-border">
          {posts.map((post) => {
            const tr = post.translations[locale];
            return (
              <li
                key={post.id}
                className="flex flex-wrap items-center justify-between gap-3 px-4 py-4"
              >
                <div className="min-w-0">
                  <p className="font-semibold">{tr.title || post.id}</p>
                  <p className="text-xs text-muted">
                    {post.status} · {post.postType}
                  </p>
                </div>
                <Link
                  href={`/admin/blog/${post.id}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-semibold"
                >
                  {t("edit")}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
