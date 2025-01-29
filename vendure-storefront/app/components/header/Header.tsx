import { Link } from "@remix-run/react";
import { ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import type { SVGProps } from 'react';
import { Icon } from '@iconify/react';
import { useState } from "react";


export function CodiconChevronDown(props: SVGProps<SVGSVGElement>) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" {...props}><path fill="currentColor" fillRule="evenodd" d="m7.976 10.072l4.357-4.357l.62.618L8.284 11h-.618L3 6.333l.619-.618z" clipRule="evenodd"></path></svg>);
}

export function Header({
  onCartIconClick,
  cartQuantity,
}: {
  onCartIconClick: () => void;
  cartQuantity: number;
}) {
  return (
    <header>
      <nav className="bg-greyishblack fixed w-full z-20 top-0 start-0 shadow-md">
        <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <div className="flex items-center">
              <img
              src="/logo.png"
              className="h-16"
              alt="Nour Artistry Logo"
            />
              <div className="pl-4">
              <p className="font-raleway text-lg text-[#FFB300]">Double Nour</p>
              <p className="font-raleway text-lg text-[#FFB300]">Artistry</p>
              </div>
            </div>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="">
              <button
                className="relative w-9 h-9 bg-white bg-opacity-20 rounded text-white p-1"
                onClick={onCartIconClick}
                aria-label="Open cart tray"
              >
                <ShoppingBagIcon></ShoppingBagIcon>
                {cartQuantity ? (
                  <div className="absolute rounded-full -top-2 -right-2 bg-primary-600 min-w-6 min-h-6 flex items-center justify-center text-xs p-1">
                    {cartQuantity}
                  </div>
                ) : (
                  ''
                )}
              </button>
            </div>
            <a href="/account">
              <button
                type="button"
                className="text-black bg-gold hover:bg-greyishblack hover:text-gold hover:outline hover:outline-1 hover:outline-gold focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-1 text-center"
              >
                Login
              </button>
            </a>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3 rounded hover:underline md:p-0 text-gold"
                >
                  Home
                </a>
              </li>
              <li className="relative group">
                {/* Shop Tab */}
                <a
                  href="#"
                  className="flex items-center py-2 px-3 rounded hover:underline md:p-0 text-gold"
                >
                  <span>Shop</span>
                  <Icon icon="codicon:chevron-down" className="w-4 h-4 ml-1" />
                </a>
                {/* Dropdown Menu */}
                <div className="absolute hidden group-hover:flex flex-col bg-grey text-gold rounded-lg shadow-lg w-[900px] p-4 space-y-4 left-[-350px]">
                  {/* Categories in Columns */}
                  <div className="grid grid-cols-4 divide-x divide-gold">
                    {/* Column 1 */}
                    <div className="px-8">
                      <a href="/collections/traditional-digital-art"><h4 className="font-raleway text-gold mb-2">Traditional & Digital Art</h4></a>
                      <ul className="space-y-1">
                        <li>
                          <a
                            href="#"
                            className="block hover:text-black hover:bg-gold rounded px-2 py-1"
                          >
                            
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block hover:text-black hover:bg-gold rounded px-2 py-1"
                          >
                            
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block hover:text-black hover:bg-gold rounded px-2 py-1"
                          >
                            
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Column 2 */}
                    <div className="px-4">
                      <a href="/collections/luxury-wear-ready-to-wear"><h4 className="font-raleway text-gold mb-2">Luxury Wear & Ready to Wear</h4></a>
                      <ul className="space-y-1">
                        <li>
                          <a
                            href="#"
                            className="block hover:text-black hover:bg-gold rounded px-2 py-1"
                          >
                            
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block hover:text-black hover:bg-gold rounded px-2 py-1"
                          >
                            
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block hover:text-black hover:bg-gold rounded px-2 py-1"
                          >
                            
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Column 3 */}
                    <div className="px-4">
                      <h4 className="font-raleway text-gold mb-2">Custom print on demand & our selection</h4>
                      <ul className="space-y-1">
                        <li>
                          <a
                            href="#"
                            className="block hover:text-black hover:bg-gold rounded px-2 py-1"
                          >
                            
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block hover:text-black hover:bg-gold rounded px-2 py-1"
                          >
                            
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block hover:text-black hover:bg-gold rounded px-2 py-1"
                          >
                            
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Column 4 */}
                    <div className="px-4">
                      <a href="/collections/art-supplies-for-artists"><h4 className="font-raleway text-gold mb-2">Art Supplies for Artists</h4></a>
                      <ul className="space-y-1">
                        <li>
                          <a
                            href="#"
                            className="block hover:text-black hover:bg-gold rounded px-2 py-1"
                          >
                            
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block hover:text-black hover:bg-gold rounded px-2 py-1"
                          >
                            
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block hover:text-black hover:bg-gold rounded px-2 py-1"
                          >
                            
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:underline md:p-0 text-gold"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:underline md:p-0 text-gold"
                >
                  Search
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 rounded hover:underline md:p-0 text-gold"
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