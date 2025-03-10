import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

const OutFitWarm = () => {
  return (
    <section className="bg-white min-h-screen flex items-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div className="relative order-2 lg:order-1 mx-auto lg:mx-0 w-full max-w-md lg:max-w-none">
          <div className="relative w-full aspect-[3/4] max-w-[450px] mx-auto lg:mx-0">
            <Image
              src="/aboutUs/aboutUs-innerImg2.webp"
              alt="Woman in blue sportswear"
              fill
              className="object-cover rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="absolute bottom-[-5%] sm:bottom-[-10%] right-[-5%] sm:right-[-10%] w-[60%] sm:w-[70%] md:w-[80%] aspect-[3/4] max-w-[400px] hidden sm:block">
            <Image
              src="/aboutUs/aboutUs-innerImg2.webp"
              alt="Woman in black sportswear"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center order-1 lg:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light px-2 sm:px-4 text-black mb-4 sm:mb-6">
            Outfit yourself in warmth and style
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-800 mb-6 sm:mb-8 leading-relaxed px-2 sm:px-4">
            Our collection features premium quality fabrics that provide both
            comfort and durability. Each piece is carefully crafted to ensure
            you stay warm without compromising on style. From casual everyday
            wear to statement pieces for special occasions, we have something
            for everyone.
          </p>
          <div className="flex flex-wrap gap-4 px-2 sm:px-4 sm:items-center">
            <Button href="/collections/all" variant="primary" size="lg">
              Shop Collection
            </Button>
            <Button href="/customize" variant="secondary" size="lg">
              Customize Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutFitWarm;
