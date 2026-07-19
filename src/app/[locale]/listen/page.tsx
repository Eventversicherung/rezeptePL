import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getSessionUser } from "@/lib/auth/session";
import { getOrCreateShoppingList } from "@/lib/data/repository";
import {
  clearCheckedListAction,
  toggleListItemAction,
} from "@/app/actions/account";
import { groupLabelKey } from "@/lib/utils";
import type { IngredientGroup } from "@/types/content";

export default async function ListsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("lists");
  const tr = await getTranslations("recipes");
  const tp = await getTranslations("profile");
  const user = await getSessionUser();

  if (!user) {
    return (
      <div className="mx-auto max-w-lg space-y-4">
        <h1 className="font-display text-3xl font-semibold">{t("title")}</h1>
        <p className="text-muted">{tp("guest")}</p>
        <Link
          href="/anmelden"
          className="inline-flex min-h-11 items-center rounded-full bg-foreground px-5 text-[var(--bg)]"
        >
          Login
        </Link>
      </div>
    );
  }

  const list = await getOrCreateShoppingList(user.id);
  const groups = Array.from(
    new Set(list.items.map((i) => i.group)),
  ) as IngredientGroup[];

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="flex items-end justify-between gap-3">
        <h1 className="font-display text-3xl font-semibold">{t("title")}</h1>
        {list.items.some((i) => i.checked) ? (
          <form action={clearCheckedListAction.bind(null, list.id)}>
            <button type="submit" className="text-sm text-muted">
              {t("clearChecked")}
            </button>
          </form>
        ) : null}
      </div>

      {list.items.length === 0 ? (
        <p className="text-muted">{t("empty")}</p>
      ) : (
        groups.map((group) => {
          const items = list.items.filter((i) => i.group === group);
          if (!items.length) return null;
          return (
            <section key={group}>
              <h2 className="font-display text-lg font-semibold">
                {tr(groupLabelKey(group))}
              </h2>
              <ul className="mt-2 space-y-2">
                {items.map((item) => (
                  <li key={item.id}>
                    <form action={toggleListItemAction.bind(null, list.id, item.id)}>
                      <button
                        type="submit"
                        className={`flex min-h-14 w-full items-start gap-3 rounded-[var(--radius)] border border-border px-3 py-3 text-left ${
                          item.checked ? "bg-elevated opacity-60" : "bg-surface"
                        }`}
                      >
                        <span
                          className={`mt-0.5 size-5 rounded border ${
                            item.checked
                              ? "border-accent bg-accent"
                              : "border-border"
                          }`}
                        />
                        <span>
                          <span
                            className={`block font-medium ${
                              item.checked ? "line-through" : ""
                            }`}
                          >
                            {item.amount} {item.unit} {item.name}
                          </span>
                          {item.storeHintDe ? (
                            <span className="text-xs text-muted">
                              {tr("storeHint")}: {item.storeHintDe}
                            </span>
                          ) : null}
                        </span>
                      </button>
                    </form>
                  </li>
                ))}
              </ul>
            </section>
          );
        })
      )}
    </div>
  );
}
