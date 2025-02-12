import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
const HeroCardSection = () => {
  const shinyRef = useRef(null);
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (shinyRef.current && isHovered) {
      const shinyElement = shinyRef.current;
      const tl = gsap.timeline({ repeat: 0 });
      tl.fromTo(
        shinyElement,
        {
          left: '-100px',
          opacity: 1,
        },
        {
          left: '100%',
          opacity: 0,
          duration: 1,
          ease: 'power1.inOut',
        }
      );
    }
  }, [isHovered]);
  return (
    <div className="flex items-center justify-between w-full space-x-32 px-16 py-16">
      <div
        ref={containerRef}
        className="w-1/2 relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="/images/side-bar.webp"
          alt="hero-card"
          width={500}
          height={500}
          className="w-full object-cover"
        />
        <div
          ref={shinyRef}
          className={`absolute top-0 h-full w-24 rotate-12 pointer-events-none
            bg-gradient-to-r from-white/80 to-transparent
            ${!isHovered && 'hidden'}`}
        />
      </div>
      <div className="w-1/2">
        <div className="flex flex-col space-y-8">
          <p className="text-8xl font-extralight mb-8">
            Jet-setting Fashion for Summer
          </p>
          <p className="text-sm font-extralight mb-8">
            Discover versatile pieces that effortlessly transition from day
            tours to evening cocktails, ensuring you look and feel your best
            throughout your vacation.
          </p>
          <p className="text-sm font-extralight mb-8">
            Whether you&apos;re exploring exotic destinations or lounging by the
            pool, these travel-ready ensembles will make a statement wherever
            your journey takes you. Elevate your summer getaway style with our
            expert tips and outfit inspirations tailored for the modern
            globetrotter.
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeroCardSection;
