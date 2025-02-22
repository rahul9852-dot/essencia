'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
} from '../SocialIcons/SocialIcons';

gsap.registerPlugin(ScrollTrigger);

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

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const navRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    gsap.from(newsletterRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: newsletterRef.current,
        start: 'top bottom',
        end: 'bottom bottom',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(navRefs.current, {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: navRefs.current[0],
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.from(bottomRef.current, {
      opacity: 0,
      duration: 0.8,
      delay: 0.5,
      scrollTrigger: {
        trigger: bottomRef.current,
        start: 'top bottom',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <footer ref={footerRef} className="bg-white text-black overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div ref={newsletterRef} className="py-20 border-b border-gray-100">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h2 className="text-4xl font-light mb-3">Join Our Newsletter</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Subscribe to receive updates, access to exclusive deals, and
                more.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-gray-50 border border-gray-200 
                    text-gray-900 placeholder:text-gray-400 flex-1 md:w-80 
                    focus:outline-none focus:border-gray-900 hover:border-gray-300 
                    transition-colors duration-300"
                />
                <button
                  className="px-8 py-3 bg-black text-white hover:bg-gray-900 
                  transition-all duration-300 hover:px-10"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 md:grid-cols-5">
          {Object.entries(navigation).map(([key, items], index) => (
            <div
              key={key}
              ref={(el: HTMLDivElement | null) => {
                if (navRefs.current) navRefs.current[index] = el;
              }}
              className="group"
            >
              <h3
                className="flex items-center gap-2 text-sm font-medium tracking-wider uppercase 
                cursor-pointer"
              >
                <span className="text-gray-900">{key}</span>
                <ArrowUpRight
                  className="h-3 w-3 transform group-hover:translate-x-1 
                  group-hover:-translate-y-1 transition-transform duration-300"
                />
              </h3>
              <ul className="mt-6 space-y-4">
                {items.map(item => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-500 hover:text-black transition-all 
                        duration-300 flex items-center gap-1 group hover:pl-2"
                    >
                      {item.name}
                      <span
                        className="opacity-0 group-hover:opacity-100 transition-all 
                        duration-300 transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div ref={bottomRef} className="border-t border-gray-100 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link href="/" className="group">
                <span
                  className="text-xl font-light tracking-wider hover:text-gray-600 
                  transition-colors duration-300"
                >
                  ESSENCIA
                </span>
              </Link>
              <p className="text-sm text-gray-500">
                © 2025 All rights reserved
              </p>
            </div>

            <div className="flex items-center gap-8">
              {/* Language Selector */}
              <select
                className="bg-transparent text-sm text-gray-500 hover:text-black 
                  focus:outline-none cursor-pointer border-none appearance-none 
                  hover:bg-gray-50 px-2 py-1 rounded transition-colors duration-300"
                defaultValue="EN"
              >
                <option value="EN" className="bg-white">
                  English
                </option>
                <option value="HN" className="bg-white">
                  Hindi
                </option>
                <option value="PU" className="bg-white">
                  Punjabi
                </option>
              </select>

              {/* Social Links */}
              <div className="flex items-center gap-8">
                {[
                  {
                    name: 'TWITTER',
                    icon: <TwitterIcon />,
                    href: 'https://twitter.com',
                  },
                  {
                    name: 'FACEBOOK',
                    icon: <FacebookIcon />,
                    href: 'https://facebook.com',
                  },
                  {
                    name: 'INSTAGRAM',
                    icon: <InstagramIcon />,
                    href: 'https://instagram.com',
                  },
                  {
                    name: 'LINKEDIN',
                    icon: <LinkedInIcon />,
                    href: 'https://linkedin.com',
                  },
                ].map(social => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-black transition-all duration-300 
                      group flex items-center gap-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className="opacity-80 group-hover:opacity-100 transition-all duration-300 
                      transform group-hover:scale-110"
                    >
                      {social.icon}
                    </span>
                    <span className="hidden sm:block text-xs tracking-wider group-hover:text-gray-500">
                      {social.name}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Payment Methods */}
              {/* <div className="border-l border-gray-100 pl-8 py-2">
                <div className="flex flex-col items-end gap-3">
                  <PaymentMethods />
                  <span className="text-[11px] text-gray-400 tracking-wider">
                    SECURE PAYMENT
                  </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
