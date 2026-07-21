import type { ReactNode } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

/** Inline: **bold**, [label](url) — same token style as RecipeArticle. */
export function renderInline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(
        <strong key={`b-${key++}`} className="font-semibold text-foreground">
          {token.slice(2, -2)}
        </strong>,
      );
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const [, label, href] = link;
        const internal = href.match(/^\/(de|pl)(\/.*)$/);
        if (internal) {
          nodes.push(
            <Link
              key={`a-${key++}`}
              href={internal[2]}
              className="font-medium text-accent underline-offset-2 hover:underline"
            >
              {label}
            </Link>,
          );
        } else if (href.startsWith("/")) {
          nodes.push(
            <Link
              key={`a-${key++}`}
              href={href}
              className="font-medium text-accent underline-offset-2 hover:underline"
            >
              {label}
            </Link>,
          );
        } else {
          nodes.push(
            <a
              key={`a-${key++}`}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-accent underline-offset-2 hover:underline"
            >
              {label}
            </a>,
          );
        }
      }
    }
    last = match.index + token.length;
  }

  if (last < text.length) {
    nodes.push(text.slice(last));
  }

  return nodes.length > 0 ? nodes : [text];
}

const IMAGE_ONLY = /^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)$/;

function isTableBlock(trimmed: string): boolean {
  const lines = trimmed.split("\n").filter((l) => l.trim());
  if (lines.length < 2) return false;
  if (!lines.every((l) => l.trim().startsWith("|"))) return false;
  return lines.some((l) => /^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?$/.test(l.trim()));
}

function renderTable(trimmed: string, key: number) {
  const rows = trimmed
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .filter((l) => !/^\|?\s*:?-+:?\s*(\|\s*:?-+:?\s*)+\|?$/.test(l));

  const parseRow = (line: string) =>
    line
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());

  if (rows.length === 0) return null;
  const header = parseRow(rows[0]);
  const body = rows.slice(1).map(parseRow);

  return (
    <div key={key} className="mt-6 overflow-x-auto rounded-[var(--radius)] border border-border">
      <table className="w-full min-w-[280px] border-collapse text-left text-sm leading-relaxed">
        <thead className="bg-elevated">
          <tr>
            {header.map((cell, i) => (
              <th
                key={i}
                className="border-b border-border px-3 py-2.5 font-semibold text-foreground"
              >
                {renderInline(cell)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri} className="odd:bg-surface even:bg-elevated/40">
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className="border-b border-border/70 px-3 py-2.5 text-foreground/90 last:border-b-0"
                >
                  {renderInline(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function renderImage(alt: string, src: string, key: number, title?: string) {
  const caption = title || alt;
  return (
    <figure
      key={key}
      className="my-8 overflow-hidden rounded-[calc(var(--radius)+6px)] bg-elevated shadow-[0_12px_32px_rgba(28,20,18,0.08)]"
    >
      <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
        <Image
          src={src}
          alt={alt || caption}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
        />
      </div>
      {caption ? (
        <figcaption className="px-3 py-2.5 text-sm text-muted sm:px-4">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/**
 * Blog body markdown: ## / ###, paragraphs, lists, blockquotes,
 * GFM-ish tables, ![alt](url), **bold**, [links](url).
 */
export function renderBlogBody(body: string): ReactNode[] {
  const blocks = body.split(/\n\n+/);
  return blocks.map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    const img = trimmed.match(IMAGE_ONLY);
    if (img) {
      return renderImage(img[1], img[2], i, img[3]);
    }

    if (isTableBlock(trimmed)) {
      return renderTable(trimmed, i);
    }

    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="mt-12 font-display text-[clamp(1.45rem,3vw,1.85rem)] font-semibold first:mt-0"
        >
          {renderInline(trimmed.slice(3))}
        </h2>
      );
    }
    if (trimmed.startsWith("### ")) {
      return (
        <h3 key={i} className="mt-8 text-lg font-semibold text-[var(--navy)]">
          {renderInline(trimmed.slice(4))}
        </h3>
      );
    }
    if (trimmed.startsWith("> ")) {
      return (
        <blockquote
          key={i}
          className="mt-6 border-l-4 border-accent bg-accent-soft/40 px-4 py-3 text-base leading-relaxed"
        >
          {renderInline(trimmed.replace(/^>\s?/gm, ""))}
        </blockquote>
      );
    }
    if (trimmed.startsWith("- ")) {
      const items = trimmed.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul
          key={i}
          className="mt-4 list-disc space-y-2.5 pl-5 text-base leading-relaxed"
        >
          {items.map((item, j) => (
            <li key={j}>{renderInline(item.slice(2))}</li>
          ))}
        </ul>
      );
    }
    if (/^\d+\.\s/.test(trimmed)) {
      const items = trimmed.split("\n").filter((l) => /^\d+\.\s/.test(l));
      return (
        <ol
          key={i}
          className="mt-4 list-decimal space-y-2.5 pl-5 text-base leading-relaxed"
        >
          {items.map((item, j) => (
            <li key={j}>{renderInline(item.replace(/^\d+\.\s/, ""))}</li>
          ))}
        </ol>
      );
    }

    // Soft line breaks inside a paragraph block
    const lines = trimmed.split("\n");
    if (lines.length > 1) {
      return (
        <p key={i} className="mt-4 text-base leading-[1.75] text-foreground/90">
          {lines.map((line, li) => (
            <span key={li}>
              {li > 0 ? <br /> : null}
              {renderInline(line)}
            </span>
          ))}
        </p>
      );
    }

    return (
      <p key={i} className="mt-4 text-base leading-[1.75] text-foreground/90">
        {renderInline(trimmed)}
      </p>
    );
  });
}
