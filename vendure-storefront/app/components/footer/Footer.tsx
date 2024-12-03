import { RootLoaderData } from '~/root';
import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

const navigation = {
  support: [
    { page: 'help', href: '#' },
    { page: 'trackOrder', href: '#' },
    { page: 'shipping', href: '#' },
    { page: 'returns', href: '#' },
  ],
  company: [
    { page: 'about', href: '#' },
    { page: 'blog', href: '#' },
    { page: 'responsibility', href: '#' },
    { page: 'press', href: '#' },
  ],
};

export default function Footer({
  collections,
}: {
  collections: RootLoaderData['collections'];
}) {
  const { t } = useTranslation();

  return (
    <footer>
      <div>Footer</div>
    </footer>
  );
}
