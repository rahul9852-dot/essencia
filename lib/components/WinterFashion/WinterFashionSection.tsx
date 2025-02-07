import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FashionItem {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: string;
}

const fashionItems: FashionItem[] = [
  {
    id: 1,
    image: '/images/a1.webp',
    title: 'Brown sweatshirt with muffler',
    price: 130.0,
  },
  {
    id: 2,
    image: '/images/b1.webp',
    title: 'Black Blouson Crop Top',
    price: 180.0,
  },
  {
    id: 3,
    image: '/images/c1.webp',
    title: 'Women black high-neck dress',
    price: 45.0,
  },
  {
    id: 4,
    image: '/images/f1.webp',
    title: 'Women black Long coat',
    price: 4580.0,
    originalPrice: 5500.0,
    discount: '15% OFF',
  },
  {
    id: 5,
    image: '/images/m4.webp',
    title: 'Women Cream sweater',
    price: 288.0,
  },
  {
    id: 6,
    image: '/images/d1.webp',
    title: 'Women coat with brown shirt',
    price: 260.0,
  },
  {
    id: 7,
    image: '/images/i1.webp',
    title: 'Summer maxi dress',
    price: 399.0,
  },
  {
    id: 8,
    image: '/images/i1.webp',
    title: 'Black dress',
    price: 148.0,
    originalPrice: 168.0,
    discount: '11% OFF',
  },
];

const WinterFashionSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(fashionItems.length / itemsPerPage);

  const currentItems = fashionItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrevious = () => {
    setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <section className="px-4 py-16 max-w-[1400px] mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-normal">
          Colorful Winter Fashion
          <span className="text-sm text-gray-500 ml-4">
            {currentPage * itemsPerPage + 1}-
            {Math.min((currentPage + 1) * itemsPerPage, fashionItems.length)} of{' '}
            {fashionItems.length}
          </span>
        </h2>
        <Link
          href="/collections/winter-fashion"
          className="text-base flex items-center hover:opacity-80 transition-opacity group"
        >
          View all
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </Link>
      </div>

      <div className="relative">
        <div className="overflow-visible relative">
          {/* Previous Button */}
          {currentPage > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute left-[-20px] top-[35%] -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110"
              aria-label="Previous items"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* Next Button */}
          {currentPage < totalPages - 1 && (
            <button
              onClick={handleNext}
              className="absolute right-[-20px] top-[35%] -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300 hover:scale-110"
              aria-label="Next items"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          <div className="grid grid-cols-4 gap-6 -mx-16 px-16">
            {currentItems.map(item => (
              <div
                key={item.id}
                className="relative animate-fadeIn cursor-pointer"
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {item.discount && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full z-10">
                    {item.discount}
                  </span>
                )}
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-4 bg-[#F5F5F5] group">
                  <div
                    className={`w-full h-full transform transition-all duration-500 ${
                      isHovered === item.id ? 'scale-105' : 'scale-100'
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority={currentPage === 0 && item.id <= 4}
                    />
                  </div>
                  <div
                    className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${
                      isHovered === item.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
                <h3 className="text-base font-normal mb-2 transition-colors duration-300 hover:text-gray-600">
                  {item.title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-medium">
                    ${item.price.toFixed(2)}
                  </span>
                  {item.originalPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      ${item.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Page Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? 'w-8 bg-black'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterFashionSection;
