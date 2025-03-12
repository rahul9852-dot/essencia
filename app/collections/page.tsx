'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { collectionsData } from '@/lib/constants/Collections';
import PageContainer from '@/lib/components/PageContainer/PageContainer';

export default function CollectionsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Register ScrollTrigger plugin
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    return () => {
      // Clean up any ScrollTrigger instances to prevent memory leaks
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Main title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
        }
      );

      // Description animation
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          ease: 'power2.out',
        }
      );

      // Cards animation with stagger
      gsap.fromTo(
        cardRefs.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          delay: 0.6,
          ease: 'back.out(1.7)',
        }
      );

      // Set up hover animations for each card
      cardRefs.current.forEach(card => {
        if (!card) return;

        const arrowElement = card.querySelector('.arrow-icon');

        // Create hover animation timeline
        const hoverTimeline = gsap.timeline({ paused: true });

        hoverTimeline
          .to(card, {
            y: -10,
            scale: 1.03,
            boxShadow:
              '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            borderColor: 'rgba(59, 130, 246, 0.3)',
            duration: 0.3,
            ease: 'power2.out',
          })
          .to(
            arrowElement,
            {
              x: 5,
              duration: 0.2,
              ease: 'power1.out',
            },
            0
          );

        // Add event listeners for hover
        card.addEventListener('mouseenter', () => hoverTimeline.play());
        card.addEventListener('mouseleave', () => hoverTimeline.reverse());
      });
    }, containerRef);

    return () => ctx.revert(); // Clean up animations
  }, []);

  // Properly set up card refs
  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  return (
    <PageContainer>
      <div ref={containerRef} className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 opacity-0"
            >
              Our Collections
            </h1>

            <p
              ref={descriptionRef}
              className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto opacity-0"
            >
              Explore our carefully curated collections, each telling its own
              unique story through design and style.
            </p>
          </div>

          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {Object.entries(collectionsData).map(([key, category], index) => (
              <div
                key={key}
                ref={el => setCardRef(el, index)}
                className="h-full opacity-0 card-container"
              >
                <Link href={`/collections/${key}`} className="block h-full">
                  <div className="bg-white rounded-xl overflow-hidden shadow-md h-full flex flex-col transition-all duration-300 border border-gray-100">
                    <div className="p-8 flex flex-col flex-grow">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {category.title}
                      </h2>
                      <p className="text-gray-600 mb-6 flex-grow">
                        {category.description}
                      </p>
                      <div className="flex items-center font-medium group mt-auto text-blue-600">
                        <span>View collection</span>
                        <span className="ml-2 inline-block arrow-icon">→</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
