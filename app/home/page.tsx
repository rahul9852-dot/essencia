import React from 'react';
import Hero from '../../lib/components/Hero/Hero';
import SubHero from '../../lib/components/Sub-Hero/SubHero';
import HeroCardSection from '../../lib/components/Hero-Card/HeroCardSection';
import MarQuee from '../../lib/components/MarQueee/MarQuee';
import WinterFashionSection from '../../lib/components/WinterFashion/WinterFashionSection';
import SportswearSection from '../../lib/components/Sportswear/SportswearSection';
import RoundedCards from '@/lib/components/RoundedCards/roundedCards';
import CategoryShowcase from '@/lib/components/Category-Showcase/Category';

import WinterCollection from '@/lib/components/WinterCollection/WinterCollection';
import SummerCollection from '@/lib/components/SummerCollection/SummerCollection';
import SpringCollections from '@/lib/components/SpringCollections/SpringCollections';
import ProductDetails from '@/lib/components/ProductDetails/ProductDetails';
import FitnessFashion from '@/lib/components/FitnessFashion/FitnessFashion';
import Stores from '@/lib/components/Stores/Stores';
import DesignerSection from '@/lib/components/Designer/Designer';
import { categories } from '@/lib/constants/roundedCards';
import FashionShowcase from '@/lib/components/FashionShowcase/FashionShowcase';

//https://colorhunt.co/palette/fff2d7ffe0b5f8c794d8ae7e
const HomeScreen = () => {
  return (
    <main className="w-full">
      <div className="w-full">
        <Hero />
        <div className="max-w-[1400px] mx-auto px-4">
          <SubHero />
          <HeroCardSection />
          <MarQuee />
          <RoundedCards categories={categories} />
          <CategoryShowcase />
          <WinterFashionSection />
          <SportswearSection />
          <SummerCollection />
          <WinterCollection />
          <SpringCollections />
          <ProductDetails />
          <FitnessFashion />
          <FashionShowcase />
          <DesignerSection />
          <Stores />
        </div>
      </div>
    </main>
  );
};

export default HomeScreen;
