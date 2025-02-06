import React from 'react';
import Navbar from '../../lib/components/Navbar/Navbar';
import Hero from '../../lib/components/Hero/Hero';
import SubHero from '../../lib/components/Sub-Hero/SubHero';
import HeroCardSection from '../../lib/components/Hero-Card/HeroCardSection';
import MarQuee from '../../lib/components/MarQueee/MarQuee';
import RoundedCards from '../../lib/components/RoundedCards/roundedCards';
const HomeScreen = () => {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <SubHero />
      <HeroCardSection />
      <MarQuee />
      <RoundedCards />
    </main>
  );
};

export default HomeScreen;
