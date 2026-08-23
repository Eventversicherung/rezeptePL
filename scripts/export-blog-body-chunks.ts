/**
 * Writes small sequential UPDATE statements so long blog bodies can be
 * applied via execute_sql without one huge query.
 *
 * Usage: npx tsx scripts/export-blog-body-chunks.ts post-wielkanoc
 */
import { promises as fs } from "fs";
import path from "path";
import { seedBlogPosts } from "@/lib/data/seed-blog";

function sqlStr(v: string): string {
  return `'${v.replace(/'/g, "''")}'`;
}

const CHUNK = 2800;

async function main() {
  const ids = process.argv.slice(2);
  if (ids.length === 0) throw new Error("Pass post ids");
  const outDir = path.join("/tmp", "alemniam-blog-sql", "chunks");
  await fs.mkdir(outDir, { recursive: true });

  for (const id of ids) {
    const post = seedBlogPosts.find((p) => p.id === id);
    if (!post) throw new Error(`Unknown post: ${id}`);
    for (const locale of ["de", "pl"] as const) {
      const t = post.translations[locale];
      const body = t.body;
      const parts: string[] = [];
      for (let i = 0; i < body.length; i += CHUNK) {
        parts.push(body.slice(i, i + CHUNK));
      }
      const statements = [
        `update public.blog_post_translations set title = ${sqlStr(t.title)}, excerpt = ${sqlStr(t.excerpt)}, seo_title = ${sqlStr(t.seoTitle)}, seo_description = ${sqlStr(t.seoDescription)}, body = ${sqlStr(parts[0] ?? "")} where post_id = ${sqlStr(id)} and locale = ${sqlStr(locale)};`,
        ...parts.slice(1).map(
          (part) =>
            `update public.blog_post_translations set body = body || ${sqlStr(part)} where post_id = ${sqlStr(id)} and locale = ${sqlStr(locale)};`,
        ),
        `update public.blog_posts set updated_at = now() where id = ${sqlStr(id)};`,
      ];
      for (const [index, sql] of statements.entries()) {
        const file = path.join(
          outDir,
          `${id}-${locale}-${String(index).padStart(2, "0")}.sql`,
        );
        await fs.writeFile(file, sql + "\n");
        console.log(path.basename(file), Buffer.byteLength(sql));
      }
    }
  }
}

void main();
