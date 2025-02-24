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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        end: isMobile ? 'bottom bottom' : '+=200%',
        scrub: true,
        pin: true,
        anticipatePin: 1,
        onUpdate: self => {
          const progress = self.progress;
          if (background) {
            const opacity = progress > 0.7 ? 1 - (progress - 0.7) / 0.3 : 1;
            background.style.opacity = Math.max(
              0,
              Math.min(1, opacity)
            ).toString();
          }
        },
      },
    });

    if (isMobile) {
      // Mobile-specific animations
      tl.fromTo(
        background,
        { scale: 1.1, y: 0 },
        { scale: 1, y: '5%', ease: 'none' }
      );

      if (textContainer) {
        tl.fromTo(
          textContainer,
          { y: 0, opacity: 1 },
          { y: -20, opacity: 0.8, ease: 'none' },
          0
        );
      }

      if (cardsContainer) {
        tl.fromTo(cardsContainer, { y: 0 }, { y: 0, ease: 'none' }, 0);
      }
    } else {
      // Desktop animations
      tl.fromTo(
        background,
        { scale: 1, y: 0 },
        { scale: 1.1, y: '30%', ease: 'none' }
      );

      if (cardsContainer) {
        tl.to(cardsContainer, { yPercent: -50, ease: 'none' }, 0);
      }

      if (textContainer) {
        tl.to(textContainer, { yPercent: -50, ease: 'none' }, 0);
      }
    }

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-transparent to-black/10"
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
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-start md:justify-center px-4 md:px-20 pt-24 md:pt-0 pb-16 md:pb-0 gap-8 md:gap-0"
      >
        <div
          ref={textRef}
          className="w-full md:w-1/2 text-center md:text-left space-y-4 transition-all duration-300"
        >
          <h2
            className="text-3xl sm:text-5xl md:text-7xl font-light mb-4 md:mb-8 leading-tight"
            style={{ color: textColor }}
          >
            {heading}
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl opacity-80 max-w-md mx-auto md:mx-0"
            style={{ color: textColor }}
          >
            {subheading}
          </p>
        </div>

        <div
          ref={cardsContainerRef}
          className="w-full md:w-1/2 md:h-screen transition-all duration-300"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 p-4 md:p-6 max-w-4xl mx-auto">
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
                    className={`object-cover transition-all duration-500 ${
                      hoveredCard === card.id
                        ? 'scale-110 brightness-110'
                        : 'scale-100'
                    }`}
                  />
                  {card.discount && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      {card.discount}
                    </span>
                  )}
                </div>
                <div className="mt-3 px-1">
                  <h3 className="text-sm font-medium text-white/90 truncate">
                    {card.title}
                  </h3>
                  <p className="text-sm font-semibold text-white/80">
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
