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
    color: 'text-white/60 hover:text-white',
    images: [
      {
        src: '/images/showcaseCategory/sc0.webp',
        position: { top: '20%', left: '15%' },
      },
      {
        src: '/images/showcaseCategory/sc5.webp',
        position: { top: '20%', right: '15%' },
      },
    ],
  },
  {
    id: 'winter',
    title: 'Winter',
    color: 'text-white/60 hover:text-white',
    images: [
      {
        src: '/images/showcaseCategory/sc3.jpg',
        position: { top: '20%', left: '15%' },
      },
      {
        src: '/images/showcaseCategory/sc5.webp',
        position: { top: '20%', right: '15%' },
      },
    ],
  },
  {
    id: 'bestseller',
    title: 'Best Seller',
    color: 'text-white/60 hover:text-white',
    images: [
      {
        src: '/images/showcaseCategory/sc2.jpg',
        position: { top: '20%', left: '15%' },
      },
      {
        src: '/images/showcaseCategory/sc3.jpg',
        position: { top: '20%', right: '15%' },
      },
    ],
  },
  {
    id: 'new-arrivals',
    title: 'New Arrivals',
    color: 'text-white/60 hover:text-white',
    images: [
      {
        src: '/images/showcaseCategory/sc4.webp',
        position: { top: '20%', left: '15%' },
      },
      {
        src: '/images/showcaseCategory/sc5.webp',
        position: { top: '20%', right: '15%' },
      },
    ],
  },
  {
    id: 'summer',
    title: 'Summer',
    color: 'text-white/60 hover:text-white',
    images: [
      {
        src: '/images/showcaseCategory/sc6.jpg',
        position: { top: '20%', left: '15%' },
      },
      {
        src: '/images/showcaseCategory/sc7.jpg',
        position: { top: '20%', right: '15%' },
      },
    ],
  },
];

const CategoryShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<Map<string, HTMLDivElement[]>>(new Map());
  const animationRef = useRef<gsap.Context | null>(null);

  useLayoutEffect(() => {
    animationRef.current = gsap.context(() => {}, containerRef);
    return () => animationRef.current?.revert();
  }, []);

  const handleCategoryHover = (categoryId: string) => {
    const images = imagesRef.current.get(categoryId) || [];

    // Enhanced title animations with better text handling
    categories.forEach((category, index) => {
      const element = document.getElementById(`category-${category.id}`);
      if (element) {
        const isActive = category.id === categoryId;
        const delay = isActive
          ? 0
          : Math.abs(categories.findIndex(c => c.id === categoryId) - index) *
            0.05;

        gsap.to(element, {
          opacity: isActive ? 1 : 0.2,
          y: isActive ? 0 : 20,
          scale: isActive ? 1.1 : 0.95,
          filter: `blur(${isActive ? 0 : 1}px)`,
          textShadow: isActive ? '0 0 20px rgba(255,255,255,0.3)' : 'none',
          letterSpacing: isActive ? '0.05em' : '0',
          duration: 0.3,
          delay,
          ease: 'power2.out',
          overwrite: true,
        });
      }
    });

    // Enhanced image reveal animation
    images.forEach((image, index) => {
      gsap.killTweensOf(image);
      gsap.killTweensOf(image.querySelector('img'));
      gsap.killTweensOf(image.querySelector('.image-overlay'));

      const isLeft = index === 0;
      const tl = gsap.timeline();

      // Initial setup
      gsap.set(image, {
        opacity: 0,
        scale: 0.8,
        rotationY: isLeft ? -30 : 30,
        y: isLeft ? 100 : -100,
      });

      // Main animation sequence
      tl.to(image, {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      })
        .from(
          image.querySelector('.image-overlay'),
          {
            opacity: 0,
            duration: 0.4,
          },
          '-=0.5'
        )
        .to(
          image.querySelector('img'),
          {
            scale: 1.15,
            duration: 20,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          },
          '<'
        );

      // Add hover effect to images
      image.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1.05,
          duration: 0.4,
          ease: 'power2.out',
        });
      });

      image.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out',
        });
      });
    });

    // Enhanced background transition
    if (containerRef.current) {
      gsap.to(containerRef.current.querySelector('.overlay'), {
        backgroundColor: 'rgba(10, 10, 15, 0.9)',
        duration: 0.8,
        ease: 'power2.inOut',
      });

      gsap.to(containerRef.current.querySelector('.bg-image'), {
        scale: 1.1,
        duration: 1.2,
        ease: 'power2.out',
      });
    }
  };

  const handleCategoryExit = (categoryId: string) => {
    const currentImages = imagesRef.current.get(categoryId) || [];

    // Enhanced title reset animation
    categories.forEach((category, index) => {
      const element = document.getElementById(`category-${category.id}`);
      if (element) {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          textShadow: 'none',
          letterSpacing: '0',
          duration: 0.2,
          delay: index * 0.02,
          ease: 'power1.out',
          overwrite: true,
        });
      }
    });

    // Enhanced image exit animation
    currentImages.forEach((image, index) => {
      gsap.killTweensOf(image);
      gsap.killTweensOf(image.querySelector('img'));

      const isLeft = index === 0;

      gsap.to(image, {
        opacity: 0,
        scale: 0.9,
        rotationY: isLeft ? -30 : 30,
        y: isLeft ? -100 : 100,
        duration: 0.6,
        ease: 'power3.inOut',
      });
    });

    // Enhanced background reset
    if (containerRef.current) {
      gsap.to(containerRef.current.querySelector('.overlay'), {
        backgroundColor: 'rgba(10, 10, 15, 0.75)',
        duration: 0.6,
        ease: 'power2.inOut',
      });

      gsap.to(containerRef.current.querySelector('.bg-image'), {
        scale: 1,
        duration: 0.8,
        ease: 'power2.inOut',
      });
    }
  };

  return (
    <div
      id="category-showcase"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Enhanced background with better styling */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/showcaseCategory/hovercardbg.webp"
          alt="background"
          className="bg-image w-full h-full object-cover opacity-25 transform-gpu"
        />
        <div className="overlay absolute inset-0 bg-gradient-to-br from-[#0F172A]/95 to-[#1E293B]/95 transition-all duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[#000]/20 backdrop-blur-[2px]" />
      </div>

      {/* Enhanced Category Titles */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-16 px-4">
        {categories.map(category => (
          <h2
            key={category.id}
            id={`category-${category.id}`}
            className="text-6xl font-light cursor-pointer transform-gpu
              transition-all duration-200 ease-out
              text-white/80 hover:text-white select-none
              relative group"
            onMouseEnter={() => handleCategoryHover(category.id)}
            onMouseLeave={() => handleCategoryExit(category.id)}
          >
            <span className="relative inline-block">
              {category.title}
              <span
                className="absolute left-0 right-0 bottom-0 h-[1px] 
                bg-gradient-to-r from-transparent via-white/50 to-transparent 
                transform scale-x-0 group-hover:scale-x-100 
                transition-transform duration-300 ease-out"
              />
            </span>
          </h2>
        ))}
      </div>

      {/* Enhanced category images */}
      {categories.map(category => (
        <div key={category.id}>
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
              className="absolute w-[400px] h-[600px] rounded-2xl overflow-hidden opacity-0 shadow-2xl transform-gpu cursor-pointer"
              style={image.position as pos}
            >
              <div className="w-full h-full transform-gpu">
                <img
                  src={image.src}
                  alt={`${category.title} ${imageIndex + 1}`}
                  className="w-full h-full object-cover scale-105"
                />
                <div className="image-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CategoryShowcase;
