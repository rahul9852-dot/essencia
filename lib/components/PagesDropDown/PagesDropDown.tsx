'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const categories = [
  {
    title: 'About Us',
    link: '/about-us',
  },
  {
    title: 'Fusion Wear Clothes',
    link: '/faq',
  },
  {
    title: 'Terms & Conditions',
    link: '/terms-conditions',
  },
  {
    title: 'Privacy',
    link: '/privacy',
  },
  {
    title: 'Shipping Policy',
    link: '/shipping-policy',
  },
];

interface Props {
  isOpen: boolean;
}

const PagesDropDown: React.FC<Props> = ({ isOpen }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!dropdownRef.current || !contentRef.current) return;

    const dropdown = dropdownRef.current;
    const content = contentRef.current;
    const ctx = gsap.context(() => {
      if (isOpen) {
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
        w-[200px] bg-white rounded-xl z-50 shadow-[0_4px_30px_rgba(0,0,0,0.1)]
        backdrop-blur-sm"
      style={{ display: 'none' }}
    >
      <div ref={contentRef} className="py-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.link}
            className="block px-4 py-2 text-gray-600 hover:text-[#2D2422] hover:bg-gray-50
              transition-colors"
            onClick={e => e.stopPropagation()}
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PagesDropDown;
