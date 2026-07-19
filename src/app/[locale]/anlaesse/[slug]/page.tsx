import type { Metadata } from "next";
import {
  ClusterView,
  clusterMetadata,
} from "@/components/cluster/ClusterPage";
import type { Locale } from "@/types/content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  return clusterMetadata("occasion", locale as Locale, slug);
}

export default async function OccasionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  return (
    <ClusterView kind="occasion" locale={locale as Locale} slug={slug} />
  );
}
