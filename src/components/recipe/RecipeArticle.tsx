import type { ReactNode } from "react";
import { AffiliateCard } from "@/components/affiliate/AffiliateCard";
import { ArticleInlineCta } from "@/components/affiliate/ArticleInlineCta";
import type { AffiliateProduct, Locale } from "@/types/content";

/** Minimal markdown: **bold** and [label](url). */
function renderInline(text: string): ReactNode[] {
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
        <strong key={`b-${key++}`}>{token.slice(2, -2)}</strong>,
      );
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

function headingLevel(block: string): 1 | 2 | 3 | null {
  if (/^###\s+/.test(block)) return 3;
  if (/^##\s+/.test(block)) return 2;
  if (/^#\s+/.test(block)) return 1;
  return null;
}

function headingText(block: string): string {
  return block.replace(/^#{1,3}\s+/, "").trim();
}

export function RecipeArticle({
  title,
  article,
  heading,
  locale,
  products,
  labels,
}: {
  title: string;
  article: string;
  heading: string;
  locale: Locale;
  products: AffiliateProduct[];
  labels: {
    disclosure: string;
    ctaKicker: string;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
}) {
  const blocks = article.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);
  let productCursor = 0;

  /** Insert product after every ~3 prose paragraphs; CTA once mid-article */
  const ctaAfterParagraph = Math.max(3, Math.floor(blocks.length * 0.45));
  const productEvery = 3;

  let proseCount = 0;

  return (
    <section
      className="recipe-article mt-20 border-t-2 border-accent/20 pt-14"
      aria-labelledby="recipe-article-heading"
    >
      <p className="section-kicker">Alemniam</p>
      <h2
        id="recipe-article-heading"
        className="mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-semibold"
      >
        {heading}
      </h2>
      <p className="mt-2 max-w-[65ch] text-base text-muted">{title}</p>
      <div className="mt-10 max-w-[65ch] space-y-5 text-[1.08rem] leading-[1.75] text-foreground">
        {blocks.map((block, i) => {
          const nodes: ReactNode[] = [];
          const level = headingLevel(block);

          if (level === 1 || level === 2) {
            nodes.push(
              <h3
                key={`h-${i}`}
                className="font-display pt-6 text-[1.45rem] font-semibold tracking-tight text-accent"
              >
                {headingText(block)}
              </h3>,
            );
          } else if (level === 3) {
            nodes.push(
              <h3
                key={`h-${i}`}
                className="font-display pt-5 text-[1.25rem] font-semibold tracking-tight text-[var(--navy)]"
              >
                {headingText(block)}
              </h3>,
            );
          } else {
            proseCount += 1;
            nodes.push(<p key={`p-${i}`}>{renderInline(block)}</p>);

            if (
              productCursor < products.length &&
              proseCount > 0 &&
              proseCount % productEvery === 0
            ) {
              const product = products[productCursor];
              productCursor += 1;
              nodes.push(
                <AffiliateCard
                  key={`aff-${product.id}`}
                  product={product}
                  locale={locale}
                  disclosure={labels.disclosure}
                />,
              );
            }

            if (proseCount === ctaAfterParagraph) {
              nodes.push(
                <ArticleInlineCta
                  key="inline-cta"
                  kicker={labels.ctaKicker}
                  title={labels.ctaTitle}
                  body={labels.ctaBody}
                  href="/listen"
                  cta={labels.ctaButton}
                />,
              );
            }
          }

          return nodes;
        })}

        {productCursor < products.length
          ? products.slice(productCursor).map((product) => (
              <AffiliateCard
                key={`aff-tail-${product.id}`}
                product={product}
                locale={locale}
                disclosure={labels.disclosure}
              />
            ))
          : null}
      </div>
    </section>
  );
}
