import { Link } from "@/i18n/navigation";

export function ArticleInlineCta({
  kicker,
  title,
  body,
  href,
  cta,
}: {
  kicker: string;
  title: string;
  body: string;
  href: "/listen" | "/rezepte";
  cta: string;
}) {
  return (
    <aside className="article-inline-cta my-12 rounded-[calc(var(--radius)+6px)] border border-[color-mix(in_srgb,#1a2744_12%,transparent)] bg-[linear-gradient(135deg,color-mix(in_srgb,#1a2744_94%,#dc143c),#1a2744)] px-6 py-7 text-white sm:px-8">
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white/70">
        {kicker}
      </p>
      <h3 className="mt-2 font-display text-[clamp(1.4rem,3vw,1.85rem)] font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 max-w-[40ch] text-[0.98rem] leading-relaxed text-white/80">
        {body}
      </p>
      <Link
        href={href}
        className="article-inline-cta__btn mt-5 inline-flex min-h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5"
      >
        {cta}
      </Link>
    </aside>
  );
}
