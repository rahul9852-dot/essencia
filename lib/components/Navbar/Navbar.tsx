'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import CollectionsDropdown from './CollectionsDropdown';
import PagesDropDown from '../PagesDropDown/PagesDropDown';

const Navbar = () => {
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false);
  const [isPageOpen, setIsPageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsCollectionsOpen(false);
    setIsPageOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav
        className={`
          w-full transition-all duration-300 text-black
          ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-white/90 backdrop-blur-sm'}
        `}
      >
        <div className="flex items-center justify-between h-14 px-4 max-w-[1400px] mx-auto w-full md:flex md:items-center md:justify-between md:h-20">
          {/* Logo and Brand */}
          <Link
            href="/"
            className="text-lg font-normal hover:text-gray-800 tracking-wide whitespace-nowrap"
          >
            Essancia Fashion
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 ml-10">
            <Link href="/" className="hover:text-gray-800">
              Home
            </Link>
            <div className="relative">
              <button
                className="flex items-center hover:text-gray-800"
                onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
              >
                Collections
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isCollectionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="relative">
              <button
                className="flex items-center hover:text-gray-800"
                onClick={() => setIsPageOpen(!isPageOpen)}
              >
                Pages
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isPageOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <Link href="/blog" className="hover:text-gray-800">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-gray-800">
              Contact
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="px-4 py-2 hover:text-gray-800">
              Login
            </Link>
            <Link
              href="/signup"
              className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
            >
              Sign up
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-sm border-t border-gray-100">
            <div className="flex flex-col px-4 py-2">
              <Link
                href="/"
                className="py-3 hover:text-gray-800 border-b border-gray-100"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <button
                className="flex items-center justify-between py-3 hover:text-gray-800 border-b border-gray-100"
                onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
              >
                Collections
                <svg
                  className={`w-4 h-4 transition-transform ${isCollectionsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <button
                className="flex items-center justify-between py-3 hover:text-gray-800 border-b border-gray-100"
                onClick={() => setIsPageOpen(!isPageOpen)}
              >
                Pages
                <svg
                  className={`w-4 h-4 transition-transform ${isPageOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <Link
                href="/blog"
                className="py-3 hover:text-gray-800 border-b border-gray-100"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="py-3 hover:text-gray-800 border-b border-gray-100"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              <div className="py-4 space-y-2">
                <Link
                  href="/login"
                  className="block w-full py-2 text-center hover:text-gray-800 border border-gray-200 rounded-full"
                  onClick={closeAllMenus}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="block w-full py-2 text-center bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                  onClick={closeAllMenus}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      <CollectionsDropdown isOpen={isCollectionsOpen} />
      <PagesDropDown isOpen={isPageOpen} />
    </div>
  );
};

export default Navbar;
