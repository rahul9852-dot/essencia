'use client';
import React, { useEffect, useRef } from 'react';
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Images animation
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F5F5F5] min-h-screen flex items-center px-4 py-28 md:px-16 overflow-hidden"
    >
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
        <div className="h-full w-full bg-[linear-gradient(45deg,transparent_25%,black_25%,black_50%,transparent_50%,transparent_75%,black_75%)] bg-[length:20px_20px]" />
      </div> */}

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 py-20 relative">
        {/* Left Side - Images with enhanced positioning */}
        <div className="relative min-h-[600px]">
          {/* Main Image */}
          <div
            ref={imageRef1}
            className="relative w-full aspect-[3/4] max-w-[400px] 
              transform transition-transform duration-700 hover:scale-105"
          >
            <Image
              src="/images/image_col5.webp"
              alt="Woman in blue sportswear"
              fill
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Secondary Image - Enhanced positioning */}
          <div
            ref={imageRef2}
            className="absolute bottom-[-23%] right-[7%] w-[80%] aspect-[3/4] max-w-[400px]
              transform transition-transform duration-700 hover:scale-105"
          >
            <Image
              src="/images/image_col7.webp"
              alt="Woman in black sportswear"
              fill
              className="object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>

        {/* Right Side - Enhanced Content */}
        <div ref={contentRef} className="flex flex-col justify-center lg:pl-8">
          <h2
            className="text-5xl md:text-7xl font-normal mb-8 leading-tight
            bg-gradient-to-r from-black via-black/80 to-black bg-clip-text text-transparent"
          >
            Stylish and Perfect Sports wear Picks.
          </h2>

          <div className="space-y-6 text-gray-600">
            <p className="text-lg leading-relaxed">
              Discover the perfect blend of style and functionality with our
              curated selection of sportswear picks. From breathable fabrics to
              sleek designs, our collection offers everything you need to
              elevate your active wardrobe.
            </p>

            <p className="text-lg leading-relaxed">
              Whether you&apos;re hitting the gym, going for a run, or enjoying
              outdoor activities, our sportswear ensures you stay comfortable
              and stylish every step of the way. Explore our range today and
              embrace the perfect fusion of fashion and performance in your
              fitness routine.*
            </p>
          </div>

          <Link
            href="/collections/sportswear"
            className="group inline-flex items-center mt-10 bg-[#9c6d4e] text-white px-8 py-3 rounded-full 
              hover:bg-[#8b5e3f] transition-all duration-300 w-fit
              transform hover:-translate-y-1 hover:shadow-lg"
          >
            <span>READ MORE</span>
            <svg
              className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SportswearSection;
