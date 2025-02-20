import React from 'react';

const FitnessFashion = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white mb-8">
      <p className="text-6xl text-center font-light text-white mb-4 px-4 py-4">
        Essancia Fashion
      </p>
      <div className="w-full relative flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-[500px] h-[600px] object-cover 
            transform transition-all duration-700 ease-out
            hover:w-full hover:h-[700px]"
        >
          <source src="/videos/fitness-fashion.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default FitnessFashion;
