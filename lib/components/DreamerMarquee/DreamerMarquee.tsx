import React from 'react';
const DreamerMarquee = () => {
  return (
    <div className="relative overflow-hidden whitespace-nowrap bg-gray-100 py-4">
      <div className="flex animate-marquee">
        <div className="mx-8 text-3xl text-center font-bold text-gray-500 border-r-2 border-gray-500 px-8 py-8">
          HUMAN
        </div>
        <div className="mx-8 text-3xl text-center font-bold text-gray-500 border-r-2 border-gray-500 px-8 py-8">
          WAYAN
        </div>
        <div className="mx-8 text-3xl text-center font-bold text-gray-500 border-r-2 border-gray-500 px-8 py-8">
          NANO
        </div>
        <div className="mx-8 text-3xl text-center font-bold text-gray-500 border-r-2 border-gray-500 px-8 py-8">
          vertrío
        </div>
        {/* Repeat for smooth looping */}
        <div className="mx-8 text-3xl text-center font-bold text-gray-500 border-r-2 border-gray-500 px-8 py-8">
          HUMAN
        </div>
        <div className="mx-8 text-3xl text-center font-bold text-gray-500 border-r-2 border-gray-500 px-8 py-8">
          WAYAN
        </div>
        <div className="mx-8 text-3xl text-center font-bold text-gray-500 border-r-2 border-gray-500 px-8 py-8">
          NANO
        </div>
        <div className="mx-8 text-3xl text-center font-bold text-gray-500 px-4 py-4">
          vertrío
        </div>
      </div>
    </div>
  );
};
export default DreamerMarquee;
