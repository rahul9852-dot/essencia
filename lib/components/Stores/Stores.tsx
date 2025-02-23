'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const LOCATIONS = [
  {
    id: 1,
    name: 'Canada',
    stores: 12,
    isActive: true,
    image: '/images/store_1.webp',
  },
  {
    id: 2,
    name: 'United States',
    stores: 24,
    isActive: false,
    isHighlighted: true,
    image: '/images/store_4.webp',
  },
  {
    id: 3,
    name: 'United Kingdom',
    stores: 8,
    isActive: false,
    image: '/images/store_1.webp',
  },
  {
    id: 4,
    name: 'Newport Beach',
    stores: 3,
    isActive: false,
    image: '/images/store_4.webp',
  },
];

const Stores = () => {
  const [activeImage, setActiveImage] = useState('/images/store_4.webp');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative flex w-full min-h-screen bg-[#1C1C1C]">
      {/* Left Image Section with Image Transitions */}
      <div className="w-1/2 relative overflow-hidden">
        {LOCATIONS.map(location => (
          <Image
            key={location.id}
            src={location.image}
            alt={`${location.name} store`}
            fill
            sizes="50vw"
            priority={location.id === 1}
            className={`object-cover transition-all duration-700 transform
              ${activeImage === location.image ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Right Content Section */}
      <div className="w-1/2 flex flex-col justify-center px-20">
        <div className="max-w-xl">
          <h2 className="text-white text-7xl font-light leading-tight mb-16">
            Best Location
            <br />
            Your Brands
          </h2>

          <div className="space-y-8">
            {LOCATIONS.map(location => (
              <div
                key={location.id}
                className={`group cursor-pointer ${
                  location.isHighlighted ? 'text-[#CD7F32]' : 'text-white'
                }`}
                onMouseEnter={() => {
                  setActiveImage(location.image);
                  setHoveredIndex(location.id);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                }}
              >
                <div className="flex items-center gap-6">
                  {/* Location Name with Hover Effect */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 group-hover:gap-6 transition-all duration-500">
                      <span
                        className={`text-2xl font-light tracking-wide
                        ${
                          hoveredIndex === location.id
                            ? 'text-[#CD7F32]'
                            : location.isHighlighted
                              ? 'text-[#CD7F32]'
                              : 'text-white/90'
                        }
                        group-hover:text-[#CD7F32]`}
                      >
                        {location.name}
                      </span>

                      {/* Arrow that appears on hover */}
                      <span
                        className={`transform transition-all duration-500 text-[#CD7F32]
                        ${hoveredIndex === location.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                      >
                        →
                      </span>
                    </div>

                    {/* Animated line */}
                    <div
                      className={`h-[1px] bg-[#CD7F32] transition-all duration-500 mt-2
                      ${hoveredIndex === location.id ? 'w-full' : 'w-0'}`}
                    />
                  </div>

                  {/* Store Count */}
                  <div
                    className={`text-sm transition-opacity duration-500
                    ${hoveredIndex === location.id ? 'opacity-100' : 'opacity-60'}`}
                  >
                    {location.stores} stores
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-white/60">
            <p className="text-sm">
              Find our stores in prime locations across major cities. Experience
              luxury shopping at its finest.
            </p>
          </div>
        </div>
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default Stores;
