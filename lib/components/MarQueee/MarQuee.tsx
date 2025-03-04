import React from 'react';

const MarQuee = () => {
  return (
    <div className="w-full bg-primary-100 overflow-hidden relative group">
      <div className="relative flex hover:pause-animation">
        {/* First moving text */}
        <div className="animate-marquee whitespace-nowrap flex items-center transition-all duration-300 group-hover:[animation-play-state:paused]">
          {[...Array(3)].map((_, index) => (
            <span
              key={`primary-${index}`}
              className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 
                text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light
                flex items-center transition-transform duration-300 hover:scale-105"
            >
              <span className="inline-block">WINTERS SALE</span>
              <span className="mx-2 sm:mx-3 inline-block">-</span>
              <span className="inline-block">
                FLAT ₹400 OFF ON ALL PRODUCTS
              </span>
              <span className="mx-4 sm:mx-6 md:mx-8 inline-block">•</span>
            </span>
          ))}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="animate-marquee2 whitespace-nowrap flex items-center absolute top-0 left-0 transition-all duration-300 group-hover:[animation-play-state:paused]">
          {[...Array(3)].map((_, index) => (
            <span
              key={`secondary-${index}`}
              className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 
                text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light
                flex items-center transition-transform duration-300 hover:scale-105"
            >
              <span className="inline-block">WINTERS SALE</span>
              <span className="mx-2 sm:mx-3 inline-block">-</span>
              <span className="inline-block">
                FLAT ₹400 OFF ON ALL PRODUCTS
              </span>
              <span className="mx-4 sm:mx-6 md:mx-8 inline-block">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarQuee;
