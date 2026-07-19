import { Link } from "@/i18n/navigation";

export type BreadcrumbItem = {
  label: string;
  /** Omit href on the current page (last crumb). Path relative to locale. */
  href?: "/" | "/rezepte" | "/listen" | "/profil" | string;
};

export function Breadcrumbs({
  items,
  ariaLabel,
}: {
  items: BreadcrumbItem[];
  ariaLabel: string;
}) {
  if (items.length === 0) return null;

  return (
    <nav className="breadcrumbs" aria-label={ariaLabel}>
      <ol className="breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="breadcrumbs__item">
              {index > 0 ? (
                <span className="breadcrumbs__sep" aria-hidden>
                  /
                </span>
              ) : null}
              {item.href && !isLast ? (
                <Link href={item.href} className="breadcrumbs__link">
                  {item.label}
                </Link>
              ) : (
                <span className="breadcrumbs__current" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
