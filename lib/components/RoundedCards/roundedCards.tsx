import React, { useEffect, useState } from 'react';
import { cardsWithImage } from '../../constants/CardsWithImage';
import Image from 'next/image';

const RoundedCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionHeight = windowHeight; // Each section is one viewport height
      const currentIndex = Math.floor(scrollPosition / sectionHeight);

      setActiveIndex(Math.min(currentIndex, cardsWithImage.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed position content */}
      <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
        {/* Center Image */}
        <div className="relative w-[600px] h-[600px] rounded-2xl overflow-hidden transition-all duration-700">
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
              <h2 className="text-6xl text-white/40 font-light transition-all duration-500">
                {cardsWithImage[activeIndex - 1].label}
              </h2>
            )}

            {/* Current Text */}
            <h2 className="text-8xl text-modalHoverText-500 font-light absolute left-1/2 -translate-x-1/2 transition-all duration-500">
              {cardsWithImage[activeIndex].label}
            </h2>

            {/* Next Text */}
            {activeIndex < cardsWithImage.length - 1 && (
              <h2 className="text-6xl text-white/40 font-light ml-auto transition-all duration-500">
                {cardsWithImage[activeIndex + 1].label}
              </h2>
            )}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute right-8 flex flex-col gap-4">
          {cardsWithImage.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-white h-8' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scrollable sections for background colors */}
      <div className="relative">
        {cardsWithImage.map((_, index) => (
          <div
            key={index}
            className={`h-screen transition-colors duration-700 ${
              index % 2 === 0 ? 'bg-modalBg-500' : 'bg-modalImgBg-500'
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default RoundedCards;
