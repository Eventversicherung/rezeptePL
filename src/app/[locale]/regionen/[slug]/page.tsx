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
  return clusterMetadata("region", locale as Locale, slug);
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  return <ClusterView kind="region" locale={locale as Locale} slug={slug} />;
}
