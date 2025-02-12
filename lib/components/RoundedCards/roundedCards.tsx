'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
type Image = {
  src: string;
};
type Category = {
  id: string;
  title: string;
  images: Image[];
  bgColor: string;
};
interface RoundedCardsProps {
  categories: Category[];
}
gsap.registerPlugin(ScrollTrigger);
const RoundedCards: React.FC<RoundedCardsProps> = ({ categories }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionRefs.current.filter(
      (ref): ref is HTMLElement => ref !== null
    );
    if (!container || sections.length === 0) return;
    // Horizontal scroll setup
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        end: '+=3000',
        snap: 1 / (sections.length - 1),
      },
    });
    // Section animations
    sections.forEach(section => {
      const bg = section.querySelector('.category-bg');
      const text = section.querySelector('.category-text');
      const bgColor = section.getAttribute('data-bg-color') || '#000';
      if (!bg || !text) return;
      // Background expansion animation
      gsap.fromTo(
        bg,
        {
          clipPath: 'circle(0% at center)',
          backgroundColor: bgColor,
        },
        {
          clipPath: 'circle(150% at center)',
          backgroundColor: bgColor,
          duration: 1.5,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: section,
            start: 'left center',
            end: 'right center',
            scrub: true,
          },
        }
      );
      // Text animation
      gsap.fromTo(
        text,
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: section,
            start: 'left center',
            end: 'right center',
            scrub: true,
          },
        }
      );
    });
  }, []);
  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
      <div className="flex h-full">
        {categories.map((category, index) => (
          <section
            key={category.id}
            ref={el => (sectionRefs.current[index] = el)}
            data-bg-color={category.bgColor}
            className="w-screen h-full flex-shrink-0 relative overflow-hidden flex items-center justify-center"
          >
            <div
              className="category-bg absolute inset-0 transform origin-center"
              style={{
                backgroundColor: category.bgColor,
                clipPath: 'circle(0% at center)',
              }}
            />
            <div className="relative z-10 flex flex-col items-center">
              <div
                className="category-text absolute z-20 px-4 py-2 text-[#ff5019]  text-4xl font-bold"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {category.title}
              </div>
              <div className="category-image z-10">
                <img
                  src={category.images[0].src}
                  alt={category.title}
                  className="w-[600px] h-[600px] object-cover rounded-lg"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
export default RoundedCards;
