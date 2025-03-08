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
    <div className="bg-greyishblack px-4 max-w-6xl mx-auto">
      <section>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Soft gold radial light background effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/3 w-full h-full">
            <div 
              className="w-96 h-96 rounded-full transform -translate-y-1/2"
              style={{ 
                background: 'radial-gradient(circle, rgba(217,165,32,0.6) 0%, rgba(217,165,32,0.3) 30%, rgba(0,0,0,0) 70%)',
              }}
            ></div>
          </div>
        </div>
        {/* Navigation buttons */}
        <div className="relative z-10">
          {/* Top button */}
          <div className="absolute right-0 top-16 flex items-center">
            <button className="bg-gold text-black py-4 px-8 rounded-l-full flex items-center">
            <span className="mr-4 text-xl">&larr;</span>
            <span className="text-xl font-serif">Traditional & Digital Art</span>
            </button>
          </div>
          
          {/* Left button */}
          <div className="absolute left-0 top-40">
            <button className="bg-gold text-black py-4 px-8 rounded-r-full flex items-center">
              <span className="text-xl font-serif">Luxury Wear & Ready to Wear</span>
              <span className="ml-4 text-xl">&rarr;</span>
            </button>
          </div>
          
          {/* Right middle button */}
          <div className="absolute right-0 top-72">
            <button className="bg-gold text-black py-4 px-8 rounded-l-full flex items-center">
              <span className="mr-4 text-xl">&larr;</span>
              <span className="text-xl font-serif">Custom print on demand & our selection</span>
            </button>
          </div>
          
          {/* Bottom button */}
          <div className="absolute left-0 top-80 mt-20">
            <button className="bg-gold text-black py-4 px-8 rounded-r-full flex items-center">
              <span className="text-xl font-serif">Art Supplies for Artists</span>
              <span className="ml-4 text-xl">&rarr;</span>
            </button>
          </div>
        </div>
        
        {/* Central model image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="w-152 h-152 bg-transparent">
            {/* Placeholder for the model image */}
            <div className="w-full h-full flex items-center justify-center">
              <img 
                src="/model_luxury_attire.png" 
                alt="Model in luxury attire" 
                className="max-h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      </section>
      <section className="flex pt-16">
        <div className="flex w-full mx-auto space-x-5">
          <div className="flex-1">
            <div>
              <h1 className="text-gold text-left text-3xl raleway-300 w-80">Wear Elegance, Create Masterpieces</h1>
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
            <h1 className="text-gold text-left text-3xl font-raleway w-80 font-thin pb-12">Featured Products</h1>
            <div className="py-64"></div>
            <div className="flex justify-center">
              <button className="bg-gold py-2 px-4 text-2xl font-thin">View More</button>
            </div>
        </div>
      </section>
    </div>

  );
}
