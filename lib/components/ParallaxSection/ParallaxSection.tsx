'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Card {
  id: number;
  image: string;
  title: string;
  price: number;
  discount?: string;
  alt: string;
}

interface ParallaxSectionProps {
  backgroundImage: string;
  cards: Card[];
  heading: string;
  subheading: string;
  backgroundColor?: string;
  textColor?: string;
  imageAlt?: string;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  backgroundImage,
  cards,
  heading,
  subheading,
  backgroundColor = '#1C1C1C',
  textColor = 'white',
  imageAlt = 'Background Image',
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const background = backgroundRef.current;
    const cardsContainer = cardsContainerRef.current;
    const textContainer = textRef.current;

    // Create timeline for parallax effects
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=200%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: self => {
          // Calculate opacity based on scroll progress
          const progress = self.progress;
          if (background) {
            // Start fading out at 70% of the scroll
            const opacity = progress > 0.7 ? 1 - (progress - 0.7) / 0.3 : 1;
            background.style.opacity = Math.max(
              0,
              Math.min(1, opacity)
            ).toString();
          }
        },
      },
    });

    // Parallax effect for background with scale
    tl.fromTo(
      background,
      { scale: 1, y: 0 },
      {
        scale: 1.1,
        y: '30%',
        ease: 'none',
      }
    );

    // Parallax effect for cards container
    if (cardsContainer) {
      tl.to(
        cardsContainer,
        {
          yPercent: -50,
          ease: 'none',
        },
        0
      );
    }

    // Text animation
    if (textContainer) {
      tl.to(
        textContainer,
        {
          yPercent: -50,
          ease: 'none',
        },
        0
      );
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100vh] overflow-hidden"
      style={{ backgroundColor }}
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full transition-opacity duration-1000"
      >
        <Image
          src={backgroundImage}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div
        ref={contentRef}
        className="relative h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20"
      >
        <div
          ref={textRef}
          className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0"
        >
          <h2
            className="text-4xl md:text-7xl font-light mb-4 md:mb-8 leading-tight"
            style={{ color: textColor }}
          >
            {heading}
          </h2>
          <p
            className="text-lg md:text-xl opacity-80 max-w-md"
            style={{ color: textColor }}
          >
            {subheading}
          </p>
        </div>

        <div
          ref={cardsContainerRef}
          className="w-full md:w-1/2 h-[70vh] md:h-auto overflow-hidden"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 md:p-6">
            {cards.map(card => (
              <div
                key={card.id}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredCard === card.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  {card.discount && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {card.discount}
                    </span>
                  )}
                </div>
                <div className="mt-3 mb-4">
                  <h3 className="text-sm md:text-base font-medium text-white/90 truncate">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base font-semibold text-white/80">
                    ${card.price.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;
