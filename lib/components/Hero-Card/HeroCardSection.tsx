import React from 'react';

const HeroCardSection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="w-1/2">
          <img
            src="/images/side-bar.webp"
            alt="hero-card"
            width={500}
            height={500}
          />
        </div>
        <div className="w-1/2">
          <div className="flex flex-col ">
            <p className="text-8xl font-semibold mb-4">
              Jet-setting Fashion for Summer
            </p>
            <p className="text-sm font-extralight mb-4">
              Discover versatile pieces that effortlessly transition from day
              tours to evening cocktails, ensuring you look and feel your best
              throughout your vacation.
            </p>
            <button className="text-sm font-extralight mb-4">
              Whether you&apos;re exploring exotic destinations or lounging by
              the pool, these travel-ready ensembles will make a statement
              wherever your journey takes you. Elevate your summer getaway style
              with our expert tips and outfit inspirations tailored for the
              modern globetrotter.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCardSection;
