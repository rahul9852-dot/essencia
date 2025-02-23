import React from 'react';

const SubHero = () => {
  return (
    <div className="bg-subhero-900 min-h-[200px] relative group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent animate-shimmer" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent animate-shimmer" />
      </div>
      <div className="flex flex-col items-center justify-center h-full px-8 py-8 relative">
        <span className="text-black/60 text-sm tracking-widest uppercase mb-6 animate-fadeIn">
          Summer Style Guide
        </span>
        <div className="relative">
          <h1
            className="text-6xl text-center font-light relative z-10 
            bg-clip-text text-transparent bg-gradient-to-r from-black via-black/80 to-black"
          >
            Tips for staying cool and comfortable while maintaining style in hot
            weather.
          </h1>
        </div>
        <div
          className="flex items-center gap-4 mt-8 opacity-0 group-hover:opacity-100 
          transition-opacity duration-500"
        >
          <button
            className="px-6 py-2 text-sm text-black/70 hover:text-black 
            transition-colors duration-300"
          >
            Read More →
          </button>
          <span className="w-[1px] h-4 bg-black/20" />
          <button
            className="px-6 py-2 text-sm text-black/70 hover:text-black 
            transition-colors duration-300"
          >
            Share Guide →
          </button>
        </div>
      </div>
      <div
        className="absolute top-4 left-4 w-8 h-8 border-l border-t border-black/10 
        group-hover:w-12 group-hover:h-12 transition-all duration-300"
      />
      <div
        className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-black/10 
        group-hover:w-12 group-hover:h-12 transition-all duration-300"
      />
    </div>
  );
};

export default SubHero;
