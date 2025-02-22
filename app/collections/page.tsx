'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import bannerImg from '@/public/images/showcaseCategory/hovercardbg.webp';
import { BsFilterLeft } from 'react-icons/bs';
import { LuSettings2 } from 'react-icons/lu';
import Link from 'next/link';
import { collectionItems } from '@/lib/constants/collection-items';

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

const CollectionsPage = () => {
  const [isHovered, setIsHovered] = useState<null | number>(null);

  return (
    <>
      <section>
        <div className="h-24 bg-[#3e2e2b]"></div>
        <div className="relative h-[300px] flex justify-center items-center w-full">
          <Image
            src={bannerImg}
            alt="cloths"
            className="h-full w-full object-cover absolute inset-0"
          />
          <span className="bg-black/35 block absolute inset-0" />
          <h1 className="z-10 text-5xl font-black">Products</h1>
        </div>
      </section>
      <section className="bg-white px-10 text-black">
        <div className="flex justify-between items-center py-6 text-sm">
          <div>{collectionItems.length} products</div>
          <div className="flex gap-5 items-center">
            <span className="flex items-center gap-2">
              <LuSettings2 />
              Show Filters
            </span>{' '}
            <span className="flex items-center gap-2">
              <BsFilterLeft />
              Sort By
            </span>
          </div>
        </div>
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mx-16 px-16
            transition-opacity duration-300`}
        >
          {collectionItems.map(item => (
            <Link
              href={`/collections/${item.id}`}
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
                  />
                </div>

                {/* Improved Color dots overlay - No blur effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent
                    transition-opacity duration-300 ease-out
                    ${isHovered === item.id ? 'opacity-100' : 'opacity-0'}`}
                >
                  <ColorDots colors={item.colors || []} showMore={true} />
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
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default CollectionsPage;
