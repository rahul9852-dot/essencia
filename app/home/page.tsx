import React from 'react';
import Navbar from '../../lib/components/Navbar/Navbar';
import Hero from '../../lib/components/Hero/Hero';
import SubHero from '../../lib/components/Sub-Hero/SubHero';
import HeroCardSection from '../../lib/components/Hero-Card/HeroCardSection';
import MarQuee from '../../lib/components/MarQueee/MarQuee';
// import RoundedCards from '../../lib/components/RoundedCards/roundedCards';
import WinterFashionSection from '../../lib/components/WinterFashion/WinterFashionSection';
import SportswearSection from '../../lib/components/Sportswear/SportswearSection';

const HomeScreen = () => {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <SubHero />
      <HeroCardSection />
      <MarQuee />
      {/* <RoundedCards /> */}
      <WinterFashionSection />
      <SportswearSection />
    </main>
  );
};

export default HomeScreen;
