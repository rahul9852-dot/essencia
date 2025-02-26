'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SportswearSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef1 = useRef<HTMLDivElement>(null);
  const imageRef2 = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (isMobile) {
        // Simplified mobile animations
        const elements = [imageRef1.current, imageRef2.current];
        elements.forEach((el, index) => {
          gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'top center',
              toggleActions: 'play none none none',
            },
          });
        });

        // Content animation for mobile
        const contentElements =
          contentRef.current?.querySelectorAll('h2, p, .cta-button') || [];
        gsap.from(contentElements, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top bottom',
            end: 'top center',
            toggleActions: 'play none none none',
          },
        });
      } else {
        // Desktop animations
        gsap.from(imageRef1.current, {
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef1.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          },
        });

        gsap.from(imageRef2.current, {
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef2.current,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          },
        });

        // Content animation
        gsap.from(contentRef.current?.querySelectorAll('h2, p, a') || [], {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F5F5F5] min-h-screen flex items-center 
        px-4 sm:px-6 md:px-8 lg:px-16 py-16 sm:py-20 md:py-24 lg:py-28 
        overflow-hidden"
    >
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
        <div className="h-full w-full bg-[linear-gradient(45deg,transparent_25%,black_25%,black_50%,transparent_50%,transparent_75%,black_75%)] bg-[length:20px_20px]" />
      </div> */}

      <div
        className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 
        gap-8 sm:gap-12 md:gap-16 lg:gap-20 relative"
      >
        {/* Left Side - Images with enhanced positioning */}
        <div
          className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] 
          w-full max-w-[600px] mx-auto lg:mx-0"
        >
          {/* Main Image */}
          <div
            ref={imageRef1}
            className="relative w-full aspect-[3/4] max-w-[300px] sm:max-w-[350px] 
              md:max-w-[400px] transform transition-transform duration-700 
              hover:scale-105 mx-auto lg:mx-0"
          >
            <Image
              src="/images/image_col5.webp"
              alt="Woman in blue sportswear"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 33vw"
            />
            <div
              className="absolute inset-0 rounded-2xl 
              bg-gradient-to-t from-black/20 to-transparent"
            />
          </div>

          {/* Secondary Image - Enhanced positioning */}
          <div
            ref={imageRef2}
            className="absolute bottom-[-15%] sm:bottom-[-20%] md:bottom-[-23%] 
              right-[0%] sm:right-[3%] md:right-[7%] 
              w-[70%] sm:w-[75%] md:w-[80%] aspect-[3/4] 
              max-w-[300px] sm:max-w-[350px] md:max-w-[400px]
              transform transition-transform duration-700 hover:scale-105"
          >
            <Image
              src="/images/image_col7.webp"
              alt="Woman in black sportswear"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              sizes="(max-width: 768px) 60vw, (max-width: 1200px) 35vw, 30vw"
            />
            <div
              className="absolute inset-0 rounded-2xl 
              bg-gradient-to-t from-black/20 to-transparent"
            />
          </div>
        </div>

        {/* Right Side - Enhanced Content */}
        <div
          ref={contentRef}
          className="flex flex-col justify-center lg:pl-8 
            text-center lg:text-left mt-12 lg:mt-0"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal 
              mb-6 sm:mb-8 leading-tight
              bg-gradient-to-r from-black via-black/80 to-black 
              bg-clip-text text-transparent"
          >
            Stylish and Perfect Sports wear Picks.
          </h2>

          <div className="space-y-4 sm:space-y-6 text-gray-600">
            <p className="text-base sm:text-lg leading-relaxed">
              Discover the perfect blend of style and functionality with our
              curated selection of sportswear picks. From breathable fabrics to
              sleek designs, our collection offers everything you need to
              elevate your active wardrobe.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Whether you&apos;re hitting the gym, going for a run, or enjoying
              outdoor activities, our sportswear ensures you stay comfortable
              and stylish every step of the way. Explore our range today and
              embrace the perfect fusion of fashion and performance in your
              fitness routine.*
            </p>
          </div>

          {/*  bg-[#9c6d4e] text-white px-6 sm:px-8 py-3 rounded-md 
              hover:bg-[#8b5e3f] transition-all duration-300  */}

          <Link
            href="/collections/sportswear"
            className="cta-button group inline-flex items-center mt-8 sm:mt-10 
              bg-[#9c6d4e] text-white px-6 sm:px-8 py-3 rounded-md 
              hover:bg-[#8b5e3f] active:bg-[#8b5e3f]
              transition-all duration-300 ease-out
              w-fit mx-auto lg:mx-0
              shadow-md hover:shadow-xl
              relative overflow-hidden
              transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="relative z-10 font-medium">READ MORE</span>
            <svg
              className="ml-2 w-5 h-5 transform transition-transform 
                duration-300 group-hover:translate-x-1 relative z-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <div
              className="absolute inset-0 bg-gradient-to-r 
                from-[#8b5e3f] to-[#9c6d4e]
                opacity-0 group-hover:opacity-100 
                transition-opacity duration-300 ease-out"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SportswearSection;
