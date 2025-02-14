import React from 'react';
const FitnessFashion = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-navbarBg-500 mb-8">
      <p className="text-6xl text-center font-light text-white mb-4 px-4 py-4">
        Essancia Fashion
      </p>
      <div className="w-full relative flex items-center justify-center hover:scale-105 transition-all duration-300">
        <video
          autoPlay
          muted
          loop
          playsInline
          controls
          className="w-[500px] h-[600px] object-cover hover:w-full hover:h-full hover:scale-100 "
        >
          <source src="/videos/fitness-fashion.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};
export default FitnessFashion;
