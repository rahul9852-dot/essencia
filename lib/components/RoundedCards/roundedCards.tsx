import React, { useEffect, useState } from 'react';
import { cardsWithImage } from '../../constants/CardsWithImage';
import Image from 'next/image';

const RoundedCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const startOffset = window.innerHeight * 2; // Start after MarQuee and other sections
      const adjustedScroll = Math.max(0, scrollPosition - startOffset);
      const sectionHeight = window.innerHeight;
      const currentIndex = Math.floor(adjustedScroll / sectionHeight);

      setActiveIndex(Math.min(currentIndex, cardsWithImage.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background colors */}
        {cardsWithImage.map((_, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-700 ${
              index % 2 === 0 ? 'bg-modalBg-500' : 'bg-modalImgBg-500'
            }`}
            style={{
              opacity: index === activeIndex ? 1 : 0,
            }}
          />
        ))}

        {/* Center Image */}
        <div className="relative w-[600px] h-[600px] rounded-2xl overflow-hidden z-10">
          <Image
            src={`/images/${cardsWithImage[activeIndex].img}`}
            alt={cardsWithImage[activeIndex].alt}
            fill
            className="object-cover transition-opacity duration-700"
            priority
          />
        </div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-full flex justify-between px-20">
            {/* Previous Text */}
            {activeIndex > 0 && (
              <h2 className="text-6xl text-white/40 font-light">
                {cardsWithImage[activeIndex - 1].label}
              </h2>
            )}

            {/* Current Text */}
            <h2 className="text-8xl text-modalHoverText-500 font-light absolute left-1/2 -translate-x-1/2">
              {cardsWithImage[activeIndex].label}
            </h2>

            {/* Next Text */}
            {activeIndex < cardsWithImage.length - 1 && (
              <h2 className="text-6xl text-white/40 font-light ml-auto">
                {cardsWithImage[activeIndex + 1].label}
              </h2>
            )}
          </div>
        </div>
      </div>

      {/* Scrollable sections */}
      <div className="relative">
        {cardsWithImage.map((_, index) => (
          <div key={index} className="h-screen" />
        ))}
      </div>
    </section>
  );
};

export default RoundedCards;
