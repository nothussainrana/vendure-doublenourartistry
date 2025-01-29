import { HomeIcon } from '@heroicons/react/24/solid';
import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

export function Breadcrumbs({
  items,
}: {
  items: { name: string; slug: string; id: string }[];
}) {
  const { t } = useTranslation();

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center">
        {items
          .filter((item) => item.name !== '__root_collection__')
          .map((item, index) => (
            <li key={item.name}>
              <div className="flex items-center">
                <svg
                  className="flex-shrink-0 h-6 w-6 fill-gold"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                </svg>
                <Link
                  to={'/collections/' + item.slug}
                  className="ml-1 text-sm inter-600 text-gold hover:underline"
                >
                  {item.name}
                </Link>
              </div>
            </li>
          ))}
      </ol>
    </nav>
  );
}
