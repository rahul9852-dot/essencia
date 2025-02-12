'use client';
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: 1,
    image: '/images/f1.webp',
    title: 'Men leather jacket',
    price: 210.0,
    alt: 'Summer fashion model 1',
  },
  {
    id: 2,
    image: '/images/i1.webp',
    title: 'Women casual wear',
    price: 180.0,
    discount: '15% OFF',
    alt: 'Summer fashion model 2',
  },
  {
    id: 3,
    image: '/images/m4.webp',
    title: 'Summer collection',
    price: 150.0,
    alt: 'Summer fashion model 3',
  },
  {
    id: 4,
    image: '/images/d1.webp',
    title: 'Men leather jacket',
    price: 210.0,
    alt: 'Summer fashion model 1',
  },
  {
    id: 5,
    image: '/images/c1.webp',
    title: 'Women casual wear',
    price: 180.0,
    discount: '15% OFF',
    alt: 'Summer fashion model 2',
  },
  {
    id: 6,
    image: '/images/b1.webp',
    title: 'Summer collection',
    price: 150.0,
    alt: 'Summer fashion model 3',
  },
];

const WinterCollection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current || cardsRef.current.length === 0) return;

    const cardHeight = cardsRef.current[0]?.offsetHeight || 0;
    const totalScroll = cardHeight * (cards.length - 1);

    // Set initial positions
    gsap.set(cardsRef.current, {
      y: i => i * cardHeight,
    });

    // Create a timeline for smoother animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: `+=${totalScroll}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate each card
    cardsRef.current.forEach((card, index) => {
      if (card) {
        tl.to(
          card,
          {
            y: -totalScroll,
            ease: 'none',
          },
          0
        ); // The '0' ensures all animations start at the same time
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 bg-[#F8F8F8]">
          <Image
            src="/images/slider_1.webp"
            alt="Winter collection background"
            fill
            className="object-cover object-right"
            priority
          />
        </div>

        <div className="relative h-full max-w-[1400px] mx-auto px-4">
          <div className="absolute left-0 top-[25%] max-w-[600px] text-white z-20">
            <h2 className="text-[64px] font-light leading-[1.1] mb-6">
              Perfect Picks for Hot Summer Days
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Stay cool & stylish all summer long with our perfect picks for hot
              summer days.
            </p>
            <button className="bg-white text-black px-8 py-3 hover:bg-gray-100 transition-colors">
              SHOP NOW
            </button>
          </div>
          <div className="absolute right-[8%] top-1/2 -translate-y-1/2">
            <div className="relative flex flex-col">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  ref={el => {
                    cardsRef.current[index] = el;
                  }}
                  className="relative w-[450px]"
                >
                  <div className="bg-[#F8F8F8] rounded-2xl overflow-hidden shadow-md">
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                      {card.discount && (
                        <span className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-sm z-10">
                          {card.discount}
                        </span>
                      )}
                      <Image
                        src={card.image || '/placeholder.svg'}
                        alt={card.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-[15px] text-gray-900">
                        {card.title}
                      </h3>
                      <p className="text-[15px] text-gray-900">
                        ${card.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterCollection;
