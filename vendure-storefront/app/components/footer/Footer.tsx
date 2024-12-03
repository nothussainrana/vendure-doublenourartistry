import { RootLoaderData } from '~/root';
import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import { FaCcVisa, FaCcMastercard, FaStripeS, FaApplePay, FaGooglePay } from 'react-icons/fa'; // Import payment icons

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
<footer className="bg-black text-gray-200 py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-between">
          <div className="flex-1 flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Double Nour Artistry Logo"
                className="h-16" // Adjust the height of the logo
              />
              <div>
              <p className="font-semibold text-lg text-[#D1853A]">Double Nour</p>
              <p className="font-semibold text-lg text-[#D1853A]">Artistry</p>
              </div>
            </div>
            <p className="text-sm text-gold">info@nourartistry.com</p>
            <p className="text-sm text-gold">+1 (123) 456 789</p>
            <p className="text-sm text-gold">Address Line 1, City Example, Ottawa, Canada</p>

            {/* Payment Methods */}
            <div className="flex space-x-6 mt-4">
              <img src="visa-icon.png" alt="Visa" className="h-8" /> {/* Adjust height */}
              <img src="mastercard-icon.png" alt="Mastercard" className="h-8" />
              <img src="stripe-icon.png" alt="Stripe" className="h-8" />
              <img src="applepay-icon.png" alt="Apple Pay" className="h-8" />
              <img src="googlepay-icon.png" alt="Google Pay" className="h-8" />
            </div>
          </div>
          <div className="flex-1 flex-col items-center md:items-end">
          <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left">
              <a href="#" className="text-sm text-[#D1853A] hover:text-white">Privacy Policy</a>
              <a href="#" className="text-sm text-[#D1853A] hover:text-white">Terms & Conditions</a>
              <a href="#" className="text-sm text-[#D1853A] hover:text-white">Payment Methods</a>
              <a href="#" className="text-sm text-[#D1853A] hover:text-white">Shipping Policy</a>
              <a href="#" className="text-sm text-[#D1853A] hover:text-white">Returns & Refunds</a>
            </div>
          </div>
          <div className="flex-1 flex-col items-center md:items-end">


            {/* Subscribe Form */}
            <div className="mt-6">
              <p className="text-sm text-gold">
                Enter your email below to be the first to know about new collections and product launches
              </p>
              <div className="flex mt-2 justify-center md:justify-end">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="px-4 py-2 rounded-l-md border border-gray-600 bg-gray-800 text-white focus:outline-none"
                />
                <button className="bg-[#D1853A] text-white px-4 py-2 rounded-r-md hover:bg-[#b07a30]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-gray-500">
          <p>© 2024 Double Nour Artistry All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
