'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Image from 'next/image'; // Using Next.js Image for better performance

type Image = {
  src: string;
};

type Category = {
  id: string;
  title: string;
  images: Image[];
};

interface RoundedCardsProps {
  categories: Category[];
}

gsap.registerPlugin(ScrollTrigger);

const RoundedCards: React.FC<RoundedCardsProps> = ({ categories }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event handler
  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation setup
  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionRefs.current.filter((ref): ref is HTMLElement =>
      Boolean(ref)
    );

    if (!container || sections.length === 0) return;

    // Smooth horizontal scroll with improved settings
    const horizontalScroll = gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: `+=${sections.length * 100}%`,
        pin: true,
        anticipatePin: 1, // Prevents jerk when pinning
        scrub: 1.5, // Increased for smoother scrolling
        snap: {
          snapTo: 1 / (sections.length - 1),
          duration: { min: 0.3, max: 0.6 }, // Dynamic duration based on scroll speed
          ease: 'power2.inOut',
          inertia: true, // Adds momentum-based snapping
        },
        invalidateOnRefresh: true, // Recalculates on resize
      },
    });

    // Section animations with improved timing
    const cleanupFns = sections.map(section => {
      const card = section.querySelector('.card-wrapper');
      const title = section.querySelector('.card-title');

      if (!card || !title) return () => {};

      gsap.set(title, {
        y: 100,
        opacity: 0,
      });

      const titleTrigger = ScrollTrigger.create({
        trigger: section,
        containerAnimation: horizontalScroll,
        start: 'left center',
        end: 'right center',
        toggleActions: 'play reverse play reverse', // Smoother reversing
        onEnter: () => {
          gsap.to(title, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            overwrite: 'auto', // Prevents animation conflicts
          });
        },
        onLeave: () => {
          gsap.to(title, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in',
            overwrite: 'auto',
          });
        },
        onEnterBack: () => {
          gsap.to(title, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        },
        onLeaveBack: () => {
          gsap.to(title, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in',
            overwrite: 'auto',
          });
        },
      });

      // Smoother hover animations
      const handleMouseEnter = () => {
        gsap.to(card, {
          scale: 1.02,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto',
        });
        gsap.to(title, {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(8px)',
          duration: 0.4,
          ease: 'power2.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          scale: 1,
          duration: 0.5,
          ease: 'power2.inOut',
          overwrite: 'auto',
        });
        gsap.to(title, {
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(8px)',
          duration: 0.4,
          ease: 'power2.inOut',
        });
      };

      section.addEventListener('mouseenter', handleMouseEnter);
      section.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        titleTrigger.kill();
        section.removeEventListener('mouseenter', handleMouseEnter);
        section.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    // Cleanup
    return () => {
      horizontalScroll.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
      cleanupFns.forEach(fn => fn());
    };
  }, []);

  const handleSkip = (): void => {
    const categoryShowcase = document.querySelector('#category-showcase');
    if (categoryShowcase) {
      const yOffset = -80;
      const y =
        categoryShowcase.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-hidden bg-black relative will-change-transform"
    >
      <button
        onClick={handleSkip}
        className={`
          fixed bottom-8 right-8 z-50 
          px-6 py-3 rounded-full flex items-center gap-2
          transition-all duration-300
          text-white/50 hover:text-white
          ${isScrolled ? 'bg-white/10' : 'bg-white/20'} 
          backdrop-blur-sm hover:bg-white/30
        `}
        aria-label="Skip to next section"
      >
        <span>Skip</span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>

      <div className="flex h-full">
        {categories.map((category, index) => (
          <section
            key={category.id}
            ref={el => {
              sectionRefs.current[index] = el;
            }}
            className="w-screen h-full flex-shrink-0 relative flex items-center justify-center will-change-transform"
          >
            <div className="absolute inset-0">
              <Image
                src={category.images[0].src}
                alt=""
                fill
                className="object-cover opacity-40"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-10" />
            </div>

            <div className="card-wrapper relative z-10 w-[500px] h-[500px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={category.images[0].src}
                  alt={category.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

                <div
                  className="card-title absolute bottom-0 left-0 right-0 p-8 transition-all duration-500 bg-white/10 backdrop-blur-sm"
                  style={{
                    willChange: 'transform, opacity',
                    transform: 'translateY(100px)',
                    opacity: 0,
                  }}
                >
                  <h2 className="text-4xl font-bold text-white text-center">
                    {category.title}
                  </h2>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default RoundedCards;
