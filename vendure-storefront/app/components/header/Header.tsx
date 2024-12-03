import { Link } from "@remix-run/react";
import { ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";

export function Header({
  onCartIconClick,
  cartQuantity,
}: {
  onCartIconClick: () => void;
  cartQuantity: number;
}) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center text-white font-bold text-xl">
          <img
            src="/logo.JPEG"
            alt="Logo"
            className="h-8 w-auto mr-3"
          />
          Double Nour Artistry
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="text-white hover:text-gold">
            Home
          </Link>
          <div className="relative group">
            <button className="flex items-center text-white hover:text-gold">
              Shop
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* Dropdown */}
            <div className="absolute left-0 hidden group-hover:block bg-black border border-gold mt-2 rounded-lg shadow-lg">
              <Link
                to="/shop/category1"
                className="block px-4 py-2 text-white hover:bg-gold hover:text-black"
              >
                Category 1
              </Link>
              <Link
                to="/shop/category2"
                className="block px-4 py-2 text-white hover:bg-gold hover:text-black"
              >
                Category 2
              </Link>
            </div>
          </div>
          <Link to="/about" className="text-white hover:text-gold">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-gold">
            Contact
          </Link>
        </nav>

        {/* Search Bar & Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-800 text-white text-sm px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute right-3 top-2.5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 4a6 6 0 100 12 6 6 0 000-12zM21 21l-4.35-4.35"
              />
            </svg>
          </div>

          {/* Icons */}
          <Link to="/wishlist" className="text-white hover:text-gold">
            <HeartIcon className="h-6 w-6" />
          </Link>
          <button onClick={onCartIconClick} className="relative text-white hover:text-gold">
            <ShoppingBagIcon className="h-6 w-6" />
            {cartQuantity > 0 && (
              <span className="absolute top-0 right-0 bg-gold text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartQuantity}
              </span>
            )}
          </button>
          <Link to="/account" className="text-white hover:text-gold">
            <UserIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}