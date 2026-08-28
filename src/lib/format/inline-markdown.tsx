import type { ReactNode } from "react";

/**
 * Minimal inline markdown for short-form reader copy (recipe steps, tips,
 * article paragraphs, ingredient notes): supports **bold** and [label](url)
 * only. Anything else stays as plain text on purpose, this is not a full
 * markdown parser.
 *
 * Internal recipe/blog URLs already include the locale and the localized
 * slug (`/de/blog/majeranek` vs `/pl/blog/majeranek-leksykon`), so links
 * keep that href instead of going through next-intl Link.
 */
const INLINE_TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

function isSafeHref(href: string): boolean {
  return (
    (href.startsWith("/") && !href.startsWith("//")) ||
    href.startsWith("https://") ||
    href.startsWith("http://")
  );
}

/** Plain text for JSON-LD, buttons, and other non-HTML surfaces. */
export function stripInlineMarkdown(text: string): string {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1");
}

export function renderInlineMarkdown(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = new RegExp(INLINE_TOKEN.source, "g");
  let last = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) {
      nodes.push(text.slice(last, match.index));
    }
    const token = match[0];
    if (token.startsWith("**")) {
      nodes.push(<strong key={`b-${key++}`}>{token.slice(2, -2)}</strong>);
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const [, label, href] = link;
        if (isSafeHref(href)) {
          const external = href.startsWith("http://") || href.startsWith("https://");
          nodes.push(
            <a
              key={`a-${key++}`}
              href={href}
              className="font-semibold text-accent underline decoration-accent/40 underline-offset-2 transition hover:decoration-accent"
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {label}
            </a>,
          );
        } else {
          nodes.push(label);
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
