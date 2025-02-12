'use client';
import React from 'react';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

type pos = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
};
const categories = [
  {
    id: 'popular',
    title: 'Popular',
    color: 'text-white',
    images: [
      {
        src: '/images/showcaseCategory/hoverCard.webp',
        position: { top: '10%', left: '5%' },
      },
      {
        src: '/images/showcaseCategory/hoverCard2.jpg',
        position: { top: '5%', right: '5%' },
      },
      {
        src: '/images/showcaseCategory/hoverCard3.jpg',
        position: { top: '10%', right: '5%' },
      },
    ],
  },
  {
    id: 'winter',
    title: 'Winter',
    color: 'text-white',
    images: [
      {
        src: '/images/showcaseCategory/hoverCard4.jpg',
        position: { top: '25%', left: '15%' },
      },
      {
        src: '/images/showcaseCategory/hoverCard2.webp',
        position: { top: '20%', right: '20%' },
      },
      {
        src: '/images/showcaseCategory/hoverCard3.jpg',
        position: { top: '25%', right: '5%' },
      },
    ],
  },
  {
    id: 'bestseller',
    title: 'Best Seller',
    color: 'text-[#C17758]',
    images: [
      {
        src: '/images/showcaseCategory/hoverCard4.jpg',
        position: { top: '45%', left: '10%' },
      },
      {
        src: '/images/showcaseCategory/hoverCard2.webp',
        position: { top: '40%', right: '15%' },
      },
      {
        src: '/images/showcaseCategory/hoverCard3.jpg',
        position: { top: '45%', right: '5%' },
      },
    ],
  },
  {
    id: 'new-arrivals',
    title: 'New Arrivals',
    color: 'text-[#C17758]',
    images: [
      {
        src: '/images/showcaseCategory/hoverCard4.jpg',
        position: { bottom: '35%', left: '5%' },
      },
      {
        src: '/images/showcaseCategory/hoverCard2.webp',
        position: { bottom: '30%', right: '10%' },
      },
      {
        src: '/images/showcaseCategory/hoverCard3.jpg',
        position: { bottom: '35%', right: '5%' },
      },
    ],
  },
  {
    id: 'summer',
    title: 'Summer',
    color: 'text-white',
    images: [
      {
        src: '/images/showcaseCategory/hoverCard4.jpg',
        position: { bottom: '15%', left: '20%' },
      },
      {
        src: '/images/showcaseCategory/hoverCard2.webp',
        position: { bottom: '10%', right: '25%' },
      },
      {
        src: '/images/showcaseCategory/hoverCard3.jpg',
        position: { bottom: '15%', right: '5%' },
      },
    ],
  },
];

export default function CategoryShowcase() {
  // const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<Map<string, HTMLDivElement[]>>(new Map());
  const ctx = useRef<gsap.Context>(null);

  // Initialize GSAP context
  useLayoutEffect(() => {
    ctx.current = gsap.context(() => {}, containerRef);
    return () => ctx.current?.revert();
  }, []);

  // Handle category hover animations
  const handleCategoryHover = (categoryId: string) => {
    // setActiveCategory(categoryId);
    const images = imagesRef.current.get(categoryId) || [];

    // Animate other categories' opacity
    categories.forEach(category => {
      const element = document.getElementById(`category-${category.id}`);
      if (element) {
        gsap.to(element, {
          opacity: category.id === categoryId ? 1 : 0.3,
          duration: 0.3,
        });
      }
    });

    // Animate images
    images.forEach((image, index) => {
      gsap.fromTo(
        image,
        {
          opacity: 0,
          scale: 0.8,
          rotate: index % 2 === 0 ? -15 : 15,
          x: index % 2 === 0 ? -100 : 100,
          y: index % 2 === 0 ? -100 : 100,
        },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          delay: index * 0.1,
        }
      );
    });
  };

  // Handle category hover exit
  const handleCategoryExit = () => {
    // setActiveCategory(null);

    // Reset category opacities
    categories.forEach(category => {
      const element = document.getElementById(`category-${category.id}`);
      if (element) {
        gsap.to(element, {
          opacity: 1,
          duration: 0.3,
        });
      }
    });

    // Hide all images
    const allImages = Array.from(imagesRef.current.values()).flat();
    allImages.forEach((image, index) => {
      gsap.to(image, {
        opacity: 0,
        scale: 0.8,
        rotate: index % 2 === 0 ? -15 : 15,
        x: index % 2 === 0 ? -100 : 100,
        y: index % 2 === 0 ? -100 : 100,
        duration: 0.6,
        ease: 'power2.in',
      });
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#1C1C1C] to-[#2D2D2D]"
    >
      {/* Category Titles */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-8 px-4">
        {categories.map(category => (
          <h2
            key={category.id}
            id={`category-${category.id}`}
            className={`text-6xl font-light transition-colors duration-300 cursor-pointer ${category.color}`}
            onMouseEnter={() => handleCategoryHover(category.id)}
            onMouseLeave={handleCategoryExit}
          >
            {category.title}
          </h2>
        ))}
      </div>

      {/* Category Images */}
      {categories.map(category => (
        <div key={category.id} className="pointer-events-none">
          {category.images.map((image, imageIndex) => (
            <div
              key={`${category.id}-${imageIndex}`}
              ref={el => {
                if (el) {
                  const images = imagesRef.current.get(category.id) || [];
                  images[imageIndex] = el;
                  imagesRef.current.set(category.id, images);
                }
              }}
              className="absolute w-64 h-80 rounded-2xl overflow-hidden opacity-0"
              style={image.position as pos}
            >
              <div className="w-full h-full">
                <img
                  src={image.src || '/placeholder.svg'}
                  alt={`${category.title} ${imageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
