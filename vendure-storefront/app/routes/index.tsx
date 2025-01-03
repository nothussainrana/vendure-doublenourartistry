import { useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { CollectionCard } from '~/components/collections/CollectionCard';
import { BookOpenIcon } from '@heroicons/react/24/solid';
import { LoaderArgs } from '@remix-run/server-runtime';
import { useTranslation } from 'react-i18next';

export async function loader({ request }: LoaderArgs) {
  const collections = await getCollections(request, { take: 20 });
  return {
    collections,
  };
}

export default function Index() {
  const { collections } = useLoaderData<typeof loader>();
  const { t } = useTranslation();
  const headerImage = collections[0]?.featuredAsset?.preview;

  return (
    <div className="bg-greyishblack">
      <section className="flex pt-28">
        <div className="flex w-full max-w-screen-xl mx-auto space-x-5">
          <div className="flex-1">
            <div>
              <h1 className="text-gold text-left text-3xl font-raleway w-80 font-thin">Wear Elegance, Create Masterpieces</h1>
              <button className="mt-8 border border-gold text-gold py-1 px-8 rounded-lg hover:bg-gold hover:text-black font-raleway text-lg">
                Shop Now
              </button>
            </div>
          </div>
          <div className="flex-1 pb-32">
            <img src="homepage-abstract-woman.png" alt="Image description" />
          </div>
        </div>
      </section>
    </div>

  );
}
