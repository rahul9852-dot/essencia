import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SportswearSection = () => {
  return (
    <section className="bg-[#F5F5F5] min-h-screen flex items-center px-4 md:px-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 py-20">
        {/* Left Side - Images */}
        <div className="relative">
          {/* Main Image */}
          <div className="relative w-full aspect-[3/4] max-w-[500px]">
            <Image
              src="/images/image_col7.webp"
              alt="Woman in blue sportswear"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Secondary Image - Positioned absolutely */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[80%] aspect-[3/4] max-w-[400px]">
            <Image
              src="/images/image_col5.webp"
              alt="Woman in black sportswear"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex flex-col justify-center lg:pl-8">
          <h2 className="text-5xl md:text-7xl font-normal mb-8 leading-tight">
            Stylish and Perfect Sports wear Picks.
          </h2>

          <div className="space-y-6 text-gray-600">
            <p className="text-lg">
              Discover the perfect blend of style and functionality with our
              curated selection of sportswear picks. From breathable fabrics to
              sleek designs, our collection offers everything you need to
              elevate your active wardrobe.
            </p>

            <p className="text-lg">
              Whether you&apos;re hitting the gym, going for a run, or enjoying
              outdoor activities, our sportswear ensures you stay comfortable
              and stylish every step of the way. Explore our range today and
              embrace the perfect fusion of fashion and performance in your
              fitness routine.*
            </p>
          </div>

          <Link
            href="/collections/sportswear"
            className="inline-flex mt-10 bg-[#9c6d4e] text-white px-8 py-3 rounded-full 
              hover:bg-[#8b5e3f] transition-colors duration-300 w-fit"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SportswearSection;
