'use client';
import React, { useState } from 'react';
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
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    animationRef.current = gsap.context(() => {}, containerRef);

    return () => {
      window.removeEventListener('resize', checkMobile);
      animationRef.current?.revert();
    };
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

  const handleCategoryClick = (categoryId: string) => {
    if (isMobile) {
      setActiveCategory(prevActive => {
        const isClosing = prevActive === categoryId;
        const targetCategory = document.getElementById(
          `category-${categoryId}`
        );
        const imageGrid = targetCategory?.nextElementSibling;

        if (targetCategory && imageGrid) {
          // Title animation
          gsap.to(targetCategory, {
            color: isClosing ? 'rgba(255, 255, 255, 0.6)' : '#ffffff',
            duration: 0.3,
            ease: 'power2.out',
          });

          // Arrow rotation and image grid animation
          if (isClosing) {
            gsap.to(targetCategory.querySelector('span:last-child'), {
              rotation: 0,
              duration: 0.3,
              ease: 'power2.inOut',
            });

            gsap.to(imageGrid, {
              height: 0,
              opacity: 0,
              duration: 0.3,
              ease: 'power2.inOut',
              onComplete: () => {
                (imageGrid as HTMLElement).style.display = 'none';
              },
            });
          } else {
            // Show grid first
            (imageGrid as HTMLElement).style.display = 'grid';

            // Get the auto height
            const autoHeight = (imageGrid as HTMLElement).scrollHeight;

            // Set initial state
            gsap.set(imageGrid, {
              height: 0,
              opacity: 0,
            });

            // Animate to auto height
            gsap.to(imageGrid, {
              height: autoHeight,
              opacity: 1,
              duration: 0.3,
              ease: 'power2.out',
            });

            gsap.to(targetCategory.querySelector('span:last-child'), {
              rotation: 180,
              duration: 0.3,
              ease: 'power2.inOut',
            });
          }
        }

        return isClosing ? null : categoryId;
      });
    }
  };

  return (
    <div
      id="category-showcase"
      ref={containerRef}
      className="relative min-h-[80vh] overflow-hidden py-12 sm:py-16"
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
        <div className="absolute inset-0 bg-[#292221]/20 backdrop-blur-[2px]" />
      </div>

      <div
        className="relative z-10 flex flex-col items-center justify-center 
        min-h-[70vh] gap-3 sm:gap-4 md:gap-6 lg:gap-8 
        px-4 sm:px-6 md:px-8"
      >
        {categories.map(category => (
          <div key={category.id} className="w-full md:w-auto">
            <h2
              id={`category-${category.id}`}
              className={`text-3xl md:text-5xl lg:text-6xl font-light cursor-pointer transform-gpu
                transition-all duration-300 ease-out select-none relative group
                ${isMobile ? 'flex items-center justify-between border-b border-white/20 pb-3' : ''}
                ${activeCategory === category.id ? 'text-white' : 'text-white/60'}
                ${!isMobile ? 'hover:text-orange-400' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
              onMouseEnter={() => !isMobile && handleCategoryHover(category.id)}
              onMouseLeave={() => !isMobile && handleCategoryExit(category.id)}
            >
              <span className="relative inline-block">
                {category.title}
                {!isMobile && (
                  <span
                    className="absolute left-0 right-0 bottom-0 h-[1px] 
                    bg-gradient-to-r from-transparent via-white/50 to-transparent 
                    transform scale-x-0 group-hover:scale-x-100 
                    transition-transform duration-300 ease-out"
                  />
                )}
              </span>
              {isMobile && (
                <span className="transform transition-transform duration-300 text-2xl">
                  ↓
                </span>
              )}
            </h2>

            {/* Mobile Image Grid */}
            {isMobile && (
              <div
                className={`grid grid-cols-2 gap-3 sm:gap-4 mt-3 pb-4 sm:pb-6 overflow-hidden
                  ${activeCategory === category.id ? 'block' : 'hidden'}`}
              >
                {category.images.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-[3/4] rounded-lg overflow-hidden 
                      transform transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={image.src}
                      alt={`${category.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t 
                      from-black/60 via-black/20 to-transparent"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop category images */}
      {!isMobile &&
        categories.map(category => (
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
                className="absolute w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] 
                  h-[420px] sm:h-[480px] md:h-[540px] lg:h-[600px] 
                  rounded-2xl overflow-hidden opacity-0 shadow-2xl transform-gpu cursor-pointer"
                style={
                  {
                    ...image.position,
                    top: `calc(${image.position.top} - 5%)`,
                  } as pos
                }
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
