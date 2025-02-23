'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    image: '/images/c1.webp',
    title: 'Black Blouson Crop Top',
    price: 180.0,
    colors: ['#F3E5DC', '#C8B6A6', '#8C7C6D', '#545454'],
    alt: 'Black Blouson Crop Top model',
  },
  {
    id: 2,
    image: '/images/d1.webp',
    title: 'Black dress',
    price: 148.0,
    originalPrice: 168.0,
    discount: '11% OFF',
    alt: 'Black dress model',
  },
  {
    id: 3,
    image: '/images/b1.webp',
    title: 'Casual Blazer',
    price: 210.0,
    colors: ['#2C3539', '#414A4C', '#151B54', '#737CA1'],
    alt: 'Casual Blazer model',
  },
  {
    id: 4,
    image: '/images/m4.webp',
    title: 'Summer Collection',
    price: 160.0,
    discount: '15% OFF',
    originalPrice: 188.0,
    colors: ['#FFF8DC', '#FFEBCD', '#FFE4B5'],
    alt: 'Summer Collection model',
  },
  {
    id: 5,
    image: '/images/f1.webp',
    title: 'Winter Jacket',
    price: 220.0,
    colors: ['#1B1B1B', '#363636', '#4F4F4F', '#696969'],
    alt: 'Winter Jacket model',
  },
  {
    id: 6,
    image: '/images/i1.webp',
    title: 'Casual Wear',
    price: 175.0,
    colors: ['#E5E4E2', '#B2BEB5', '#8B8589', '#848884'],
    alt: 'Casual Wear model',
  },
  {
    id: 7,
    image: '/images/d2.webp',
    title: 'Evening Dress',
    price: 195.0,
    discount: '20% OFF',
    originalPrice: 244.0,
    colors: ['#702963', '#C8A2C8', '#E0B0FF'],
    alt: 'Evening Dress model',
  },
  {
    id: 8,
    image: '/images/b2.webp',
    title: 'Business Attire',
    price: 230.0,
    colors: ['#4B0082', '#571B7E', '#461B7E', '#663399'],
    alt: 'Business Attire model',
  },
  {
    id: 9,
    image: '/images/c2.webp',
    title: 'Summer Top',
    price: 120.0,
    colors: ['#F0F8FF', '#E6E6FA', '#B0E0E6', '#87CEEB'],
    alt: 'Summer Top model',
  },
  {
    id: 10,
    image: '/images/e2.webp',
    title: 'Casual Collection',
    price: 185.0,
    discount: '10% OFF',
    originalPrice: 205.0,
    colors: ['#CCCCFF', '#9890C7', '#4B0082'],
    alt: 'Casual Collection model',
  },
];

// Add ColorDots component from WinterFashionSection
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

const FashionShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    // Create smooth scrolling animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate the container up
    tl.to(containerRef.current, {
      y: `-${containerRef.current.scrollHeight - window.innerHeight + 100}px`,
      ease: 'none',
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="grid md:grid-cols-2 grid-cols-1 h-full">
          {/* Left: Static Image */}
          <div className="relative h-[50vh] md:h-full bg-[#F5F5F5]">
            <Image
              src="/images/e2.webp"
              alt="Fashion model"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute bottom-6 md:bottom-10 left-4 md:left-10 text-white">
              <h2 className="text-3xl md:text-5xl font-light mb-2 md:mb-4">
                New Collection
              </h2>
              <p className="text-base md:text-lg opacity-90">
                Discover our latest fashion arrivals
              </p>
            </div>
          </div>

          {/* Right: Scrolling Cards */}
          <div className="relative h-[50vh] md:h-full bg-[#F5F5F5] overflow-hidden">
            <div
              ref={containerRef}
              className="absolute inset-x-0 px-4 md:px-16 pt-8 md:pt-16"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                {products.map(card => (
                  <div
                    key={card.id}
                    className="relative animate-fadeIn cursor-pointer group"
                    onMouseEnter={() => setIsHovered(card.id)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    {card.discount && (
                      <span className="absolute top-4 right-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full z-10">
                        {card.discount}
                      </span>
                    )}
                    <div className="aspect-[3/4] relative overflow-hidden rounded-lg mb-2 md:mb-4 bg-[#F5F5F5] touch-manipulation">
                      <div
                        className={`w-full h-full transform transition-all duration-300 ${
                          isHovered === card.id ? 'scale-105' : 'scale-100'
                        }`}
                      >
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      </div>

                      {/* Color dots overlay */}
                      {isHovered === card.id && (
                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300">
                          <ColorDots
                            colors={card.colors || []}
                            showMore={true}
                          />
                        </div>
                      )}
                    </div>
                    <h3 className="text-base font-normal mb-2 transition-colors duration-300 hover:text-gray-600">
                      {card.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-medium">
                        ${card.price.toFixed(2)}
                      </span>
                      {card.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          ${card.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FashionShowcase;
