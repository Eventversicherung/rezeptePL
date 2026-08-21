import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export function LegalPage({
  title,
  crumbs,
  crumbsLabel,
  children,
}: {
  title: string;
  crumbs: { label: string; href?: string }[];
  crumbsLabel: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-2xl pb-8">
      <Breadcrumbs ariaLabel={crumbsLabel} items={crumbs} />
      <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <div className="mt-8 space-y-10 text-[0.975rem] leading-relaxed text-foreground">
        {children}
      </div>
    </article>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-display text-lg font-semibold sm:text-xl">{title}</h2>
      {children}
    </section>
  );
}

export function LegalBox({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-[calc(var(--radius)+2px)] border border-border bg-surface px-4 py-4 sm:px-5">
      {children}
    </div>
  );
}
