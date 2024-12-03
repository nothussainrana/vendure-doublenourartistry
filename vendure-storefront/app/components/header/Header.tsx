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
    <header>
          <nav className="bg-black fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="logo.png"
            className="h-16"
            alt="Nour Artistry Logo"
          />
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-black bg-gold hover:bg-black hover:text-gold hover:outline hover:outline-1 hover:outline-gold focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            Login
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">            <li>
            <a
                href="/"
                className="block py-2 px-3 rounded hover:text-white md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-gold"
              >
                Home
              </a>
            </li>
            <li>
            <a
                href="#"
                className="block py-2 px-3 rounded hover:text-white md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-gold"
              >
                Shop
              </a>
            </li>
            <li>
            <a
                href="#"
                className="block py-2 px-3 rounded hover:text-white md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-gold"
              >
                About us
              </a>
            </li>
            <li>
            <a
                href="#"
                className="block py-2 px-3 rounded hover:text-white md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-gold"
              >
                Search
              </a>
            </li>
            <li>
            <a
                href="#"
                className="block py-2 px-3 rounded hover:text-white md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-gold"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="pt-24"></div>
    </header>
  );
}