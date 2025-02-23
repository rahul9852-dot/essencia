import React from 'react';
import Link from 'next/link';

const categories = [
  {
    title: 'Innerwear & Sleepwear',
    links: [
      'Dresses',
      'Tshirts',
      'Trousers & Capris',
      'Shorts & Skirts',
      "Men's Jeans",
      'Loungewear suits',
      'Coats and Jackets',
    ],
  },
  {
    title: 'Fusion Wear Clothes',
    links: [
      'Kurtas & Suits',
      'Ethnic Wear',
      'Lehenga Cholis',
      'Skirts & Palazzos',
    ],
  },
  {
    title: 'Western Wear',
    links: [
      'Dresses',
      'Playsuits',
      'Shorts & Skirts',
      'Trousers & Capris',
      'Tshirts',
    ],
  },
  {
    title: 'Handbags',
    links: [
      'Long Wallets',
      'Compact Wallets',
      'Card Holders',
      'Phone Cases',
      'Pouches',
    ],
  },
  {
    title: 'Small Leather Goods',
    links: ['Handbags', 'Jackets', 'Shoes', 'Hats', 'Gloves'],
  },
  {
    title: 'Accessories',
    links: ['Belt', 'Caps', 'Handbags', 'Shoes', 'Sun glasses', 'Watches'],
  },
];

const CollectionsDropdown = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`
        absolute top-0 sm:top-[calc(100%+0.75rem)] left-0 sm:left-1/2 sm:-translate-x-1/2
        w-full sm:w-[calc(100%-2rem)] sm:max-w-[1400px] bg-white/95 backdrop-blur-sm sm:rounded-3xl z-50
        transition-all duration-300 ease-in-out overflow-hidden shadow-lg sm:shadow-xl
        ${isOpen ? 'max-h-[80vh] lg:max-h-[400px] opacity-100 visible' : 'max-h-0 opacity-0 invisible pointer-events-none'}
      `}
    >
      <div className="w-full h-full py-4 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-10 overflow-y-auto max-h-[80vh] lg:max-h-[400px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 sm:gap-x-8 lg:gap-x-16 gap-y-6 sm:gap-y-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="transition-all duration-500 ease-out"
              style={{
                transform: `translateY(${isOpen ? '0' : '-10px'})`,
                opacity: isOpen ? 1 : 0,
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <h3 className="text-[#2D2422] font-medium text-[14px] sm:text-[15px] mb-3 sm:mb-4 lg:mb-5">
                {category.title}
              </h3>
              <ul className="space-y-2 sm:space-y-[10px]">
                {category.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="transition-all duration-500 ease-out"
                    style={{
                      transform: `translateY(${isOpen ? '0' : '-10px'})`,
                      opacity: isOpen ? 1 : 0,
                      transitionDelay: `${index * 50 + linkIndex * 25}ms`,
                    }}
                  >
                    <Link
                      href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-500 hover:text-[#2D2422] transition-colors text-[12px] sm:text-[13px] leading-tight block py-0.5"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionsDropdown;
