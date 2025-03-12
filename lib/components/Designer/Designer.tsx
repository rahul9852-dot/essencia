import React from 'react';
import PageContainer from '../PageContainer/PageContainer';

const DesignerSection = () => {
  return (
    <PageContainer withExtraPadding={false}>
      <div className="flex flex-col justify-center items-center min-h-screen text-center px-6">
        <p className="text-black text-3xl md:text-4xl font-extralight mb-6 md:mb-12 max-w-[90%] md:max-w-[800px]">
          Spotlight on emerging designers and their bold reinterpretations of
          streetwear essentials.
        </p>
        <p className="text-black text-sm md:text-md font-light mb-6 md:mb-12 max-w-[90%] md:max-w-[800px]">
          Discover the latest in urban fashion as we redefine casual wear with a
          fresh and modern touch. From statement graphic T-shirts to premium
          hoodies, joggers, and sweatshirts, our collection blends style,
          comfort, and innovation. Elevate your wardrobe with high-quality
          fabrics, bold designs, and trendsetting essentials that make a
          statement wherever you go.
        </p>
      </div>
    </PageContainer>
  );
};

export default DesignerSection;
