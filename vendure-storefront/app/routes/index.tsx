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
          <div className="flex-1 pb-4">
            <img src="homepage-abstract-woman.png" alt="Image description" />
          </div>
        </div>
      </section>
      <section>
        <div className="w-full max-w-screen-xl mx-auto space-x-5 py-12">
            <h1 className="text-gold text-left text-5xl font-raleway w-80 font-thin pb-12">Our Services</h1>
            <div className="grid grid-cols-3 grid-rows-2 gap-4">
              <div className="p-16 text-gold text-2xl">Luxury Wear</div>
              <div className="p-16 text-gold text-2xl">Traditional Art</div>
              <div className="p-16 text-gold text-2xl">Art Supplies</div>
              <div className="p-16 text-gold text-2xl">Ready To Wear Items</div>
              <div className="p-16 text-gold text-2xl">Digital Art</div>
              <div className="p-16 text-gold text-2xl">Custom Prints</div>
            </div>
        </div>
        <div>
          <hr className="bg-gold border-gold w-full h-2" />
        </div>
      </section>
      <section>
        <div className="w-full max-w-screen-xl mx-auto space-x-5 py-12">
            <h1 className="text-gold text-left text-5xl font-raleway w-80 font-thin pb-12">Featured Products</h1>
        </div>
      </section>
    </div>

  );
}
