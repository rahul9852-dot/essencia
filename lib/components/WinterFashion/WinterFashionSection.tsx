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
  colors: string[]; // Array of color hex codes
}

const fashionItems: FashionItem[] = [
  {
    id: 1,
    image: '/images/a1.webp',
    title: 'Brown sweatshirt with muffler',
    price: 1299.0,
    colors: ['#8B7355', '#2F2F2F', '#4A3728', '#6B4423'], // Brown, Black, Dark Brown, Copper
  },
  {
    id: 2,
    image: '/images/showcaseCategory/sc5.webp',
    title: 'Black Blouson Crop Top',
    price: 1199.0,
    colors: ['#000000', '#4A4A4A', '#2C2C2C'], // Black, Dark Gray, Charcoal
  },
  {
    id: 3,
    image: '/images/c1.webp',
    title: 'Women black high-neck dress',
    price: 1455.0,
    colors: ['#000000', '#1A1A1A', '#333333'], // Black, Rich Black, Dark Gray
  },
  {
    id: 4,
    image: '/images/f1.webp',
    title: 'Women black Long coat',
    price: 1980.0,
    originalPrice: 5500.0,
    discount: '15% OFF',
    colors: ['#000000', '#36454F', '#1B1B1B'], // Black, Charcoal, Deep Black
  },
  {
    id: 5,
    image: '/images/m4.webp',
    title: 'Women Cream sweater',
    price: 1888.0,
    colors: ['#FFFDD0', '#F5F5DC', '#E8E5D7'], // Cream, Beige, Light Beige
  },
  {
    id: 6,
    image: '/images/d1.webp',
    title: 'Women coat with brown shirt',
    price: 2360.0,
    colors: ['#8B7355', '#6B4423', '#483C32'], // Brown, Saddle Brown, Dark Brown
  },
  {
    id: 7,
    image: '/images/i1.webp',
    title: 'Summer maxi dress',
    price: 1399.0,
    colors: ['#FFFFFF', '#F5F5F5', '#ECECEC'], // White, Off White, Light Gray
  },
  {
    id: 8,
    image: '/images/c1.webp',
    title: 'Black dress',
    price: 1248.0,
    originalPrice: 168.0,
    discount: '11% OFF',
    colors: ['#000000', '#2C2C2C', '#1A1A1A'], // Black, Dark Gray, Rich Black
  },
];

// Add ColorDots component
const ColorDots = ({
  colors,
  showMore = false,
}: {
  colors: string[];
  showMore?: boolean;
}) => (
  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
    {colors.slice(0, 3).map((color, index) => (
      <button
        key={index}
        className="w-6 h-6 rounded-full border-2 border-white hover:scale-110 transition-transform duration-200"
        style={{ backgroundColor: color }}
        aria-label={`Select color ${index + 1}`}
      />
    ))}
    {showMore && colors.length > 3 && (
      <button
        className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xs"
        aria-label="More colors available"
      >
        +{colors.length - 3}
      </button>
    )}
  </div>
);

const WinterFashionSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(fashionItems.length / itemsPerPage);

  const currentItems = fashionItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrevious = () => {
    setIsLoading(true);
    setCurrentPage(prev => prev - 1);
    setTimeout(() => setIsLoading(false), 300);
  };

  const handleNext = () => {
    setIsLoading(true);
    setCurrentPage(prev => prev + 1);
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <section className="px-4 py-16 max-w-[1400px] mx-auto">
      {/* Enhanced Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
        <div>
          <h2 className="text-4xl sm:text-5xl font-normal mb-2">
            Essancia Winter Fashion
          </h2>
          <p className="text-sm text-gray-500">
            {currentPage * itemsPerPage + 1}-
            {Math.min((currentPage + 1) * itemsPerPage, fashionItems.length)} of{' '}
            {fashionItems.length} items
          </p>
        </div>
        <Link
          href="/collections/winter-fashion"
          className="group flex items-center space-x-2 px-6 py-2 bg-black text-white rounded-full 
            hover:bg-gray-900 transition-all duration-300 ease-out"
        >
          <span>View Collection</span>
          <span className="transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </Link>
      </div>

      <div className="relative">
        <div className="overflow-visible relative">
          {/* Enhanced Navigation Buttons */}
          {currentPage > 0 && (
            <button
              onClick={handlePrevious}
              className="absolute -left-6 top-[35%] -translate-y-1/2 z-10 
                w-12 h-12 bg-white/80 backdrop-blur rounded-full shadow-lg 
                flex items-center justify-center
                hover:bg-white hover:scale-110
                transition-all duration-300 ease-out"
              aria-label="Previous items"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-6 h-6 text-black"
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

          {currentPage < totalPages - 1 && (
            <button
              onClick={handleNext}
              className="absolute -right-6 top-[35%] -translate-y-1/2 z-10 
                w-12 h-12 bg-white/80 backdrop-blur rounded-full shadow-lg 
                flex items-center justify-center
                hover:bg-white hover:scale-110
                transition-all duration-300 ease-out"
              aria-label="Next items"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-6 h-6 text-black"
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

          {/* Enhanced Product Grid */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mx-16 px-16
            transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}
          >
            {currentItems.map(item => (
              <div
                key={item.id}
                className="relative animate-fadeIn cursor-pointer group"
                onMouseEnter={() => setIsHovered(item.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {item.discount && (
                  <span
                    className="absolute top-4 right-4 z-10
                    bg-red-500 text-white text-sm px-4 py-1 rounded-full
                    shadow-lg"
                  >
                    {item.discount}
                  </span>
                )}
                <div
                  className="aspect-[3/4] relative overflow-hidden rounded-xl mb-4 
                  bg-gradient-to-b from-gray-50 to-gray-100 
                  group-hover:shadow-xl
                  transition-all duration-500 ease-out"
                >
                  <div
                    className={`w-full h-full transform transition-all duration-700
                    ${isHovered === item.id ? 'scale-110' : 'scale-100'}`}
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

                  {/* Improved Color dots overlay - No blur effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
                    transition-opacity duration-300 ease-out
                    ${isHovered === item.id ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <ColorDots colors={item.colors} showMore={true} />
                  </div>
                </div>

                <div
                  className="space-y-2 transition-transform duration-300 ease-out
                  group-hover:translate-y-[-4px]"
                >
                  <h3
                    className="text-base font-medium transition-colors duration-300 
                    group-hover:text-gray-600"
                  >
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold">
                      ₹{item.price.toFixed(2)}
                    </span>
                    {item.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        ₹{item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Page Indicators */}
          <div className="flex justify-center mt-12 gap-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2 rounded-full transition-all duration-500 ease-out
                  ${
                    currentPage === index
                      ? 'w-8 bg-black'
                      : 'w-2 bg-gray-300 hover:bg-gray-400 hover:scale-110'
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
