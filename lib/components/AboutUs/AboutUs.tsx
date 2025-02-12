import React from 'react';

import DreamerMarquee from '../DreamerMarquee/DreamerMarquee';
import DreamerProduct from '../DreamerProduct/DreamerProduct';
import OutFitWarm from '../OutFitWarm/OutFitWarm';
import FashionStages from '../FashionStage/FashionStage';
const AboutUs = () => {
  return (
    <>
      <div className="w-full">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl font-extralight text-white">
          About Us
        </p>
        <img
          src="/AboutUs/aboutUs.jpg"
          alt="About Us"
          className="w-full h-full object-cover"
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
