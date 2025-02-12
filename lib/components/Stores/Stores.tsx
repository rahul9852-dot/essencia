import RightArrowIcon from '@/public/logo/RightArrow';
import StartsIcon from '@/public/logo/Starts';
import Image from 'next/image';
import React from 'react';

const Stores = () => {
  const STORES_AVAILABLE = [
    { name: 'Mumbai' },
    { name: 'Banagalore' },
    { name: 'Delhi' },
    { name: 'Chennai' },
    { name: 'Hyderabad' },
  ];
  return (
    <div className="flex mx-auto w-full bg-navbarBg-500 px-24 py-24">
      <div className="flex flex-col">
        <p className="relative top-50 left-250 text-white text-4xl font-light mb-12">
          Best Location your brands
        </p>
        <div className="h-[600px] w-[500px]">
          <Image
            src="/images/store.jpg"
            alt="stores"
            width={800}
            height={800}
            className="object-cover h-full w-full"
          />
        </div>
      </div>
      <div className="flex flex-col ml-16 justify-center">
        <div className="flex flex-col space-y-8">
          {STORES_AVAILABLE.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 group cursor-pointer transition-all duration-300"
            >
              <StartsIcon
                color="white"
                className="w-6 h-6 transition-colors duration-300 group-hover:text-modalHoverText-500"
              />
              <p
                className="text-white text-2xl font-light transition-all duration-300 
                group-hover:text-modalHoverText-500 group-hover:translate-x-2"
              >
                {item.name}
              </p>
              <RightArrowIcon
                color="white"
                className="w-6 h-6 transition-all duration-300 
                  group-hover:text-modalHoverText-500 group-hover:translate-x-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Stores;
