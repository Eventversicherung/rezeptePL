import { Suspense } from "react";
import { redirect } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { AdminShell } from "@/components/admin/AdminShell";
import { getSessionUser, isStaff } from "@/lib/auth/session";

async function AdminGate({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  const user = await getSessionUser();
  if (!isStaff(user) || !user) {
    redirect(`/${locale}/anmelden`);
  }
  return <AdminShell displayName={user.displayName}>{children}</AdminShell>;
}

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 z-[60] bg-[var(--bg)] p-8 text-muted">
          …
        </div>
      }
    >
      <AdminGate locale={locale}>{children}</AdminGate>
    </Suspense>
  );
}
