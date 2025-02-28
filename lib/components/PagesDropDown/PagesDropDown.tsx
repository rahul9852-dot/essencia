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
    title: 'Shipping Policy',
    link: '/shipping-policy',
  },
  {
    title: 'Privacy',
    link: '/privacy',
  },
];

const PagesDropDown: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dropdown = dropdownRef.current;
    const content = contentRef.current;
    if (!dropdown || !content) return;

    if (isOpen) {
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

      // Animate content from left
      gsap.fromTo(
        content,
        {
          x: -30,
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
      gsap.to(content, {
        x: -30,
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
