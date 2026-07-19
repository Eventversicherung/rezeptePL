import Image from "next/image";
import type { AffiliateProduct, Locale } from "@/types/content";

export function AffiliateCard({
  product,
  locale,
  disclosure,
}: {
  product: AffiliateProduct;
  locale: Locale;
  disclosure: string;
}) {
  return (
    <aside
      className="affiliate-card my-10 overflow-hidden rounded-[calc(var(--radius)+6px)] border border-[color-mix(in_srgb,#dc143c_18%,var(--border))] bg-[color-mix(in_srgb,#fffdfb_92%,#dc143c)]"
      data-affiliate={product.partner}
    >
      <a
        href={product.url}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="group grid gap-0 sm:grid-cols-[9.5rem_1fr]"
      >
        <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto sm:min-h-[9.5rem]">
          <Image
            src={product.imageUrl}
            alt={product.title[locale]}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 100vw, 152px"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 px-5 py-5 sm:px-6">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-accent">
            {disclosure}
          </p>
          <h3 className="font-display text-[1.35rem] font-semibold tracking-tight text-[var(--navy)]">
            {product.title[locale]}
          </h3>
          <p className="text-[0.98rem] leading-relaxed text-muted">
            {product.description[locale]}
          </p>
          <span className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent transition-transform duration-200 group-hover:translate-x-0.5">
            {product.cta[locale]}
            <span aria-hidden>→</span>
          </span>
        </div>
      </a>
    </aside>
  );
}
