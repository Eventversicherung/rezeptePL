function renderInline(text: string) {
  return text;
}

export function RecipeArticle({
  title,
  article,
  heading,
}: {
  title: string;
  article: string;
  heading: string;
}) {
  const blocks = article.split(/\n\n+/).filter(Boolean);

  return (
    <section
      className="recipe-article mt-16 border-t border-border pt-12"
      aria-labelledby="recipe-article-heading"
    >
      <h2
        id="recipe-article-heading"
        className="font-display text-2xl font-semibold sm:text-3xl"
      >
        {heading}
      </h2>
      <p className="mt-2 max-w-[65ch] text-sm text-muted">{title}</p>
      <div className="mt-8 max-w-[65ch] space-y-5 text-[1.05rem] leading-[1.7] text-foreground">
        {blocks.map((block, i) => {
          if (block.startsWith("## ")) {
            return (
              <h3
                key={i}
                className="font-display pt-4 text-xl font-semibold tracking-tight"
              >
                {block.replace(/^##\s+/, "")}
              </h3>
            );
          }
          return <p key={i}>{renderInline(block)}</p>;
        })}
      </div>
    </section>
  );
}
