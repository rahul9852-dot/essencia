'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
const navigation = {
  home: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  collections: [
    { name: 'New Arrivals', href: '/collections/new-arrivals' },
    { name: 'Best Sellers', href: '/collections/best-sellers' },
    { name: 'Sale', href: '/collections/sale' },
  ],
  products: [
    { name: 'Clothing', href: '/products/clothing' },
    { name: 'Accessories', href: '/products/accessories' },
    { name: 'Shoes', href: '/products/shoes' },
  ],
  quickLinks: [
    { name: 'FAQs', href: '/faqs' },
    { name: 'Size Guide', href: '/size-guide' },
    { name: 'Shipping Info', href: '/shipping' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Returns Policy', href: '/returns' },
  ],
};
const paymentMethods = [
  { name: 'Visa', image: '/visa.svg' },
  { name: 'Mastercard', image: '/mastercard.svg' },
  { name: 'American Express', image: '/amex.svg' },
  { name: 'PayPal', image: '/paypal.svg' },
  { name: 'Diners Club', image: '/diners.svg' },
  { name: 'Discover', image: '/discover.svg' },
];
const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Grid */}
        <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-5">
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              Home
              <ArrowUpRight className="h-3 w-3" />
            </h3>
            <ul className="mt-6 space-y-4">
              {navigation.home.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              Collections
              <ArrowUpRight className="h-3 w-3" />
            </h3>
            <ul className="mt-6 space-y-4">
              {navigation.collections.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              Products
              <ArrowUpRight className="h-3 w-3" />
            </h3>
            <ul className="mt-6 space-y-4">
              {navigation.products.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              Quick Links
              <ArrowUpRight className="h-3 w-3" />
            </h3>
            <ul className="mt-6 space-y-4">
              {navigation.quickLinks.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold">
              Legal
              <ArrowUpRight className="h-3 w-3" />
            </h3>
            <ul className="mt-6 space-y-4">
              {navigation.legal.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="text-sm text-gray-400">© 2025</p>
              <Link
                href="https://shopify.com"
                className="text-sm text-gray-400 hover:text-white"
              >
                Powered by Essencia Fashion
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <select
                className="bg-transparent text-sm text-gray-400 hover:text-white focus:outline-none focus:ring-0"
                defaultValue="EN"
              >
                <option value="EN" className="bg-[#1a1a1a]">
                  EN
                </option>
                <option value="FR" className="bg-[#1a1a1a]">
                  HN
                </option>
                <option value="DE" className="bg-[#1a1a1a]">
                  PU
                </option>
              </select>
              <div className="flex items-center gap-2">
                {paymentMethods.map(method => (
                  <div
                    key={method.name}
                    className="h-8 w-12 rounded bg-white p-1"
                  >
                    <Image
                      src={method.image || '/placeholder.svg'}
                      alt={method.name}
                      width={40}
                      height={25}
                      className="h-full w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
