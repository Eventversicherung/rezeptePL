import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { BlogEditorForm } from "@/components/admin/BlogEditorForm";
import { getAdminBlogPostById } from "@/lib/data/repository";

export default async function AdminBlogEditPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);
  const post = await getAdminBlogPostById(id);
  if (!post) notFound();
  const t = await getTranslations("admin");

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <h1 className="font-display text-3xl font-semibold">{t("edit")}</h1>
      <BlogEditorForm post={post} uiLocale={locale} />
    </div>
  );
}
