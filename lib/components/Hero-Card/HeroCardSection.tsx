import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const HeroCardSection = () => {
  const shinyRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (shinyRef.current && isHovered) {
      const shinyElement = shinyRef.current;
      const tl = gsap.timeline({ repeat: 0 });

      tl.fromTo(
        shinyElement,
        {
          left: '-200px',
          opacity: 1,
          width: '200px',
        },
        {
          left: '100%',
          opacity: 0,
          duration: 1.5,
          ease: 'power1.inOut',
        }
      );
    }
  }, [isHovered]);

  return (
    <section
      className="bg-white w-full px-4 sm:px-8 lg:px-16 py-8 lg:py-16"
      aria-label="Summer Fashion Collection"
    >
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-32">
        <div
          ref={containerRef}
          className="w-full lg:w-1/2 relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            src="/images/side-bar.webp"
            alt="Summer fashion collection showcase"
            width={800}
            height={800}
            className="w-full h-full object-cover"
            priority
            quality={90}
          />
          <div
            ref={shinyRef}
            className={`absolute top-0 h-full w-24 rotate-[20deg] pointer-events-none
              bg-gradient-to-r from-transparent via-white to-transparent
              shadow-[0_0_30px_30px_rgba(255,255,255,0.5)]
              transition-opacity duration-300
              ${!isHovered ? 'opacity-0' : 'opacity-100'}`}
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)',
            }}
            aria-hidden="true"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <div className="flex flex-col space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-black leading-tight">
              Jet-setting Fashion for Summer
            </h2>
            <p className="text-base md:text-lg text-gray-800">
              Discover versatile pieces that effortlessly transition from day
              tours to evening cocktails, ensuring you look and feel your best
              throughout your vacation.
            </p>
            <p className="text-base md:text-lg text-gray-800">
              Whether you&apos;re exploring exotic destinations or lounging by
              the pool, these travel-ready ensembles will make a statement
              wherever your journey takes you. Elevate your summer getaway style
              with our expert tips and outfit inspirations tailored for the
              modern globetrotter.
            </p>
            <button
              className="inline-flex items-center justify-center px-6 py-3 
                bg-black text-white rounded-md hover:bg-gray-800 
                transition-colors duration-300 mt-4 max-w-xs"
              aria-label="Explore summer collection"
            >
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCardSection;
