import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const cards = [
  {
    id: 1,
    image: '/images/f1.webp',
    alt: 'Summer fashion model 1',
  },
  {
    id: 2,
    image: '/images/i4.webp',
    alt: 'Summer fashion model 2',
  },
  {
    id: 3,
    image: '/images/m4.webp',
    alt: 'Summer fashion model 3',
  },
  {
    id: 4,
    image: '/images/b1.webp',
    alt: 'Summer fashion model 4',
  },
];

const SummerCollection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate progress when section is in view
      if (sectionTop <= windowHeight && sectionTop >= -sectionHeight) {
        const progress = Math.abs(sectionTop) / (sectionHeight - windowHeight);
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[200vh] bg-[#1C1C1C]">
      {/* Fixed content container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/a1.webp"
            alt="Summer collection background"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative h-full">
          {/* Text content */}
          <div className="absolute inset-0 flex flex-col justify-center px-4 md:px-16 max-w-[1400px] mx-auto text-white">
            <h2 className="text-5xl md:text-7xl font-normal mb-6 leading-tight max-w-[600px]">
              Perfect Picks for Hot Summer Days
            </h2>
            <p className="text-lg mb-8 max-w-[500px]">
              Stay cool & stylish all summer long with our perfect picks for hot
              summer days.
            </p>
            <Link
              href="/collections/summer"
              className="inline-flex bg-white text-black px-8 py-3 rounded-none hover:bg-gray-100 transition-colors duration-300 w-fit uppercase text-sm tracking-wider"
            >
              SHOP NOW
            </Link>
          </div>

          {/* Scrolling cards */}
          <div className="absolute right-[10%] h-full flex items-center">
            <div className="relative h-[140%] flex flex-col gap-6">
              {cards.map((card, index) => {
                // Calculate individual card movement
                const cardProgress = Math.max(
                  0,
                  Math.min(1, (scrollProgress - index * 0.2) * 2)
                );

                return (
                  <div
                    key={card.id}
                    className="w-[400px] aspect-[3/4] transition-all duration-300"
                    style={{
                      transform: `translateY(${-cardProgress * 100}%)`,
                      opacity: 1 - cardProgress,
                    }}
                  >
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerCollection;
