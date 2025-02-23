'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

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

interface Props {
  isOpen: boolean;
}

const CollectionsDropdown: React.FC<Props> = ({ isOpen }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropdownRef.current || !contentRef.current) return;

    const dropdown = dropdownRef.current;
    const content = contentRef.current;
    const ctx = gsap.context(() => {
      if (isOpen) {
        // Show animation
        gsap.set(dropdown, {
          display: 'block',
          opacity: 0,
          y: -20,
        });

        gsap.to(dropdown, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
        });

        // Animate content
        gsap.fromTo(
          content.children,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.05,
            ease: 'power2.out',
            delay: 0.1,
          }
        );
      } else {
        const tl = gsap.timeline();
        tl.to(content.children, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          stagger: 0.02,
          ease: 'power2.in',
        }).to(
          dropdown,
          {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: 'power2.in',
          },
          '-=0.1'
        );
      }
    });

    return () => ctx.revert(); // Cleanup animations
  }, [isOpen]);

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
                  <li key={linkIndex}>
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
