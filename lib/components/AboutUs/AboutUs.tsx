import React from 'react';

import DreamerMarquee from '../DreamerMarquee/DreamerMarquee';
import DreamerProduct from '../DreamerProduct/DreamerProduct';
import OutFitWarm from '../OutFitWarm/OutFitWarm';
import FashionStages from '../FashionStage/FashionStage';

const AboutUs = () => {
  return (
    <>
      <div className="w-full relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white z-10 text-center px-4 drop-shadow-lg">
          About Us
        </p>
        <div className="absolute inset-0 bg-black/30 z-[1]"></div>
        <img
          src="/AboutUs/aboutUs.jpg"
          alt="About Us"
          className="w-full h-full object-cover absolute inset-0"
        />
      </div>
      <OutFitWarm />
      <DreamerProduct />
      <FashionStages />
      <DreamerMarquee />
    </>
  );
};
export default AboutUs;
