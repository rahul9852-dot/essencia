import React from 'react';

const MarQuee = () => {
  return (
    <div className="w-full bg-movingMarquee-500 overflow-hidden py-2">
      <div className="relative flex">
        {/* First moving text */}
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...Array(4)].map((_, index) => (
            <span
              key={index}
              className="px-8 py-8 text-white text-6xl font-light"
            >
              WINTERS SALE - FLAT ₹400 OFF On All Products
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarQuee;
