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
      ref={dropdownRef}
      className="absolute top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 
        max-w-[1400px] w-[calc(100%-2rem)] bg-white rounded-3xl z-50
        shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm"
      style={{ display: 'none' }}
    >
      <div ref={contentRef} className="w-full py-12 px-8">
        <div className="grid grid-cols-6 gap-12">
          {categories.map((category, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-[#2D2422] font-medium">{category.title}</h3>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
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
