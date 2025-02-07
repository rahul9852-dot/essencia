import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-4 md:px-20 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <Link href="/" className="text-white text-2xl font-light">
            Essancia Fashion
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-white/80">
              HOME
            </Link>
            <Link
              href="/collections"
              className="text-white hover:text-white/80"
            >
              COLLECTIONS
            </Link>
            <Link href="/pages" className="text-white hover:text-white/80">
              PAGES
            </Link>
            <Link href="/contact" className="text-white hover:text-white/80">
              CONTACT
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-white">
            <SearchIcon />
          </button>
          <button className="text-white">
            <UserIcon />
          </button>
          <button className="text-white">
            <CartIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);

export default Navbar;
