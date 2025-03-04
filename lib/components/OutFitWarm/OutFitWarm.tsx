import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const OutFitWarm = () => {
  return (
    <section className="bg-[#F5F5F5] min-h-screen flex items-center px-4 md:px-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 py-20">
        <div className="relative">
          <div className="relative w-full aspect-[3/4] max-w-[500px]">
            <Image
              src="/aboutUs/aboutUs-innerImg2.webp"
              alt="Woman in blue sportswear"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[80%] aspect-[3/4] max-w-[400px]">
            <Image
              src="/aboutUs/aboutUs-innerImg2.webp"
              alt="Woman in black sportswear"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center lg:pl-8">
          <h2 className="text-5xl md:text-7xl font-normal mb-8 leading-tight">
            Outfits Warm & Stylish in the Cold Months.
          </h2>
          <div className="space-y-6 text-gray-600">
            <p className="text-lg mb-8">
              Winter fashion is all about keeping warm and cozy while still
              looking stylish. With the colder weather comes a variety of
              clothing options that are both functional and fashionable. Here
              are some popular winter fashion trends to consider:
            </p>
            <p className="text-lg mb-4">
              Winter is the perfect time to invest in a good coat or jacket.
              From puffer coats to wool coats, there are plenty of options to
              choose from. Parkas, shearling jackets, and faux fur coats are
              also popular choices.
            </p>
            <p className="text-lg">
              Fashion clothes are constantly evolving, and new styles and
              designs are introduced every season.
            </p>
          </div>
          <Link
            href="/collections/sportswear"
            className="inline-flex mt-10 bg-[#9c6d4e] text-white px-8 py-3 rounded-lg 
              hover:bg-[#8B5E3F] transition-colors duration-300 w-fit"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
};
export default OutFitWarm;
