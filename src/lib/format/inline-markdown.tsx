import type { ReactNode } from "react";

/**
 * Minimal inline markdown for short-form reader copy (recipe tips, article
 * paragraphs, ingredient notes): supports **bold** and [label](url) only.
 * Anything else stays as plain text on purpose, this is not a full markdown
 * parser.
 */
export function renderInlineMarkdown(text: string): ReactNode[] {
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
      nodes.push(<strong key={`b-${key++}`}>{token.slice(2, -2)}</strong>);
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const [, label, href] = link;
        nodes.push(
          <a
            key={`a-${key++}`}
            href={href}
            className="font-semibold text-accent underline decoration-accent/30 underline-offset-2 transition hover:decoration-accent"
          >
            {label}
          </a>,
        );
      }
    }
    last = match.index + token.length;
  }

  if (last < text.length) {
    nodes.push(text.slice(last));
  }

  return nodes.length > 0 ? nodes : [text];
}
