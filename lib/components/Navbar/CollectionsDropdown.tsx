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
        absolute top-full left-0 w-full bg-white z-50 border-t border-gray-100
        transition-all duration-500 ease-in-out overflow-hidden
        ${isOpen ? 'max-h-[264px] opacity-100' : 'max-h-0 opacity-0'}
      `}
    >
      <div className="max-w-[1400px] mx-auto py-12">
        <div className="grid grid-cols-6 gap-12">
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
              <h3 className="text-[#2D2422] font-medium mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
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
                      href={`/collections/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-gray-600 hover:text-[#2D2422] transition-colors text-sm"
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
