/**
 * Writes per-locale UPDATE SQL for selected blog posts.
 * Usage: npx tsx scripts/export-blog-update-sql.ts post-wielkanoc post-rosol-technik
 */
import { promises as fs } from "fs";
import path from "path";
import { seedBlogPosts } from "@/lib/data/seed-blog";

function sqlStr(v: string | null | undefined): string {
  if (v == null) return "null";
  return `'${v.replace(/'/g, "''")}'`;
}

async function main() {
  const ids = process.argv.slice(2);
  if (ids.length === 0) {
    throw new Error("Pass at least one post id, e.g. post-wielkanoc");
  }

  const outDir = path.join("/tmp", "alemniam-blog-sql");
  await fs.mkdir(outDir, { recursive: true });

  for (const id of ids) {
    const post = seedBlogPosts.find((p) => p.id === id);
    if (!post) throw new Error(`Unknown post: ${id}`);
    for (const locale of ["de", "pl"] as const) {
      const t = post.translations[locale];
      const sql = `update public.blog_post_translations
set
  title = ${sqlStr(t.title)},
  excerpt = ${sqlStr(t.excerpt)},
  seo_title = ${sqlStr(t.seoTitle)},
  seo_description = ${sqlStr(t.seoDescription)},
  body = ${sqlStr(t.body)}
where post_id = ${sqlStr(id)} and locale = ${sqlStr(locale)};

update public.blog_posts
set updated_at = now()
where id = ${sqlStr(id)};
`;
      const file = path.join(outDir, `${id}-${locale}.sql`);
      await fs.writeFile(file, sql);
      console.log(file, Buffer.byteLength(sql), "bytes");
    }
  }
}

void main();
