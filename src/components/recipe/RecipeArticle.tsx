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
          if (block.startsWith("## ")) {
            return (
              <h3
                key={i}
                className="font-display pt-6 text-[1.35rem] font-semibold tracking-tight text-accent"
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
