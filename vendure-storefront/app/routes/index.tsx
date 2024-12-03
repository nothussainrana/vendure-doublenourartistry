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
    <div className="mt-32 p-5">
  <h2 className="text-purple-700 text-2xl font-bold mb-4">Welcome to the Colorful Store!</h2>
  <p className="text-gray-700 mb-6">Browse our vibrant selection of products below:</p>

  <div className="flex flex-wrap gap-5">
    {/* Product 1 */}
    <div className="border-2 border-purple-700 rounded-lg p-4 w-48 text-center">
      <img src="product1.jpg" alt="Product 1" className="w-full rounded-lg mb-3" />
      <h3 className="text-teal-500 text-lg font-semibold">Product 1</h3>
      <p className="text-gray-700">$19.99</p>
      <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
        Add to Cart
      </button>
    </div>

    {/* Product 2 */}
    <div className="border-2 border-purple-700 rounded-lg p-4 w-48 text-center">
      <img src="product2.jpg" alt="Product 2" className="w-full rounded-lg mb-3" />
      <h3 className="text-teal-500 text-lg font-semibold">Product 2</h3>
      <p className="text-gray-700">$29.99</p>
      <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
        Add to Cart
      </button>
    </div>

    {/* Product 3 */}
    <div className="border-2 border-purple-700 rounded-lg p-4 w-48 text-center">
      <img src="product3.jpg" alt="Product 3" className="w-full rounded-lg mb-3" />
      <h3 className="text-teal-500 text-lg font-semibold">Product 3</h3>
      <p className="text-gray-700">$39.99</p>
      <button className="mt-3 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600">
        Add to Cart
      </button>
    </div>
  </div>
</div>
  );
}
