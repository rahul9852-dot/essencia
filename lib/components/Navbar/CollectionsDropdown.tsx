'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

// Available products that should redirect to customize page
const availableProducts = ['hoodies', 'tshirts', 'sweatshirts'];

const categories = [
  {
    title: 'Essancia Collections',
    links: [
      'Hoodies',
      'Tshirts',
      'Sweatshirts',
      'Trousers & Capris',
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
      'Shorts & Skirts',
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
  // {
  //   title: 'Small Leather Goods',
  //   links: ['Handbags', 'Jackets', 'Shoes', 'Hats', 'Gloves'],
  // },
  // {
  //   title: 'Accessories',
  //   links: ['Belt', 'Caps', 'Shoes', 'Sun glasses', 'Watches'],
  // },
];

interface CollectionsDropdownProps {
  isOpen: boolean;
}

const CollectionsDropdown: React.FC<CollectionsDropdownProps> = ({
  isOpen,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dropdown = dropdownRef.current;
    const content = contentRef.current;
    if (!dropdown || !content) return;

    if (isOpen) {
      // Show animation
      gsap.set(dropdown, {
        height: 'auto',
        display: 'block',
      });
      const height = dropdown.offsetHeight;

      gsap.fromTo(
        dropdown,
        {
          height: 0,
          opacity: 0,
        },
        {
          height: height,
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
        }
      );

      // Animate content from right
      gsap.fromTo(
        content,
        {
          x: 30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: 'power3.out',
        }
      );
    } else {
      // Hide animation
      gsap.to(content, {
        x: 30,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.inOut',
      });

      gsap.to(dropdown, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power3.inOut',
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      className="overflow-hidden bg-white"
      style={{ height: 0 }}
    >
      <div
        ref={contentRef}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="text-black">
              <h3 className="font-medium text-[14px] sm:text-[15px] mb-3 sm:mb-4 lg:mb-5">
                {category.title}
              </h3>
              <ul className="space-y-2 sm:space-y-[10px]">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={
                        availableProducts.includes(link.toLowerCase())
                          ? `/collections/${link.toLowerCase()}`
                          : '/collections/coming-soon'
                      }
                      className="text-gray-600 hover:text-black transition-colors 
                        text-[14px] sm:text-[14px] leading-tight block py-0.5"
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
