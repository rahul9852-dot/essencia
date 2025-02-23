import React from 'react';
import Hero from '../../lib/components/Hero/Hero';
import SubHero from '../../lib/components/Sub-Hero/SubHero';
import HeroCardSection from '../../lib/components/Hero-Card/HeroCardSection';
import MarQuee from '../../lib/components/MarQueee/MarQuee';
import WinterFashionSection from '../../lib/components/WinterFashion/WinterFashionSection';
import SportswearSection from '../../lib/components/Sportswear/SportswearSection';
import RoundedCards from '@/lib/components/RoundedCards/roundedCards';
import CategoryShowcase from '@/lib/components/Category-Showcase/Category';

// import WinterCollection from '@/lib/components/WinterCollection/WinterCollection';
// import SummerCollection from '@/lib/components/SummerCollection/SummerCollection';
// import SpringCollections from '@/lib/components/SpringCollections/SpringCollections';
import ProductDetails from '@/lib/components/ProductDetails/ProductDetails';
import FitnessFashion from '@/lib/components/FitnessFashion/FitnessFashion';
import Stores from '@/lib/components/Stores/Stores';
import DesignerSection from '@/lib/components/Designer/Designer';
import { categories } from '@/lib/constants/roundedCards';
import FashionShowcase from '@/lib/components/FashionShowcase/FashionShowcase';
import ParallaxSection from '@/lib/components/ParallaxSection/ParallaxSection';

//https://colorhunt.co/palette/fff2d7ffe0b5f8c794d8ae7e
const HomeScreen = () => {
  return (
    <main className="w-full">
      <div className="w-full">
        <Hero />
        <div className="max-w-[1400px] mx-auto">
          <SubHero />
          <HeroCardSection />
          <MarQuee />
          <RoundedCards categories={categories} />
          <CategoryShowcase />
          <WinterFashionSection />
          <SportswearSection />
          {/* <SummerCollection />
          <WinterCollection />
          <SpringCollections /> */}
          <ParallaxSection
            backgroundImage="/images/slider_3.webp"
            cards={[
              {
                id: 1,
                image: '/images/f1.webp',
                title: 'Men leather jacket',
                price: 210.0,
                alt: 'Spring fashion model 1',
              },
              {
                id: 2,
                image: '/images/i1.webp',
                title: 'Women casual wear',
                price: 180.0,
                discount: '15% OFF',
                alt: 'Spring fashion model 2',
              },
              {
                id: 3,
                image: '/images/m4.webp',
                title: 'Spring collection',
                price: 150.0,
                alt: 'Spring fashion model 3',
              },
              {
                id: 4,
                image: '/images/d1.webp',
                title: 'Men leather jacket',
                price: 210.0,
                alt: 'Spring fashion model 4',
              },
              {
                id: 5,
                image: '/images/c1.webp',
                title: 'Women casual wear',
                price: 180.0,
                discount: '15% OFF',
                alt: 'Spring fashion model 5',
              },
              {
                id: 6,
                image: '/images/b1.webp',
                title: 'Spring collection',
                price: 150.0,
                alt: 'Spring fashion model 6',
              },
            ]}
            heading="Winter Elegance"
            subheading="Explore our premium winter collection featuring luxurious materials and timeless designs."
            backgroundColor="#2C3539"
          />
          <ParallaxSection
            backgroundImage="/images/slider_1.webp"
            cards={[
              {
                id: 1,
                image: '/images/m4.webp',
                title: 'Summer collection',
                price: 150.0,
                alt: 'Summer fashion model 1',
              },
              {
                id: 2,
                image: '/images/d1.webp',
                title: 'Summer dress',
                price: 180.0,
                discount: '20% OFF',
                alt: 'Summer fashion model 2',
              },
              {
                id: 3,
                image: '/images/c1.webp',
                title: 'Casual wear',
                price: 160.0,
                alt: 'Summer fashion model 3',
              },
              {
                id: 4,
                image: '/images/b1.webp',
                title: 'Beach collection',
                price: 190.0,
                alt: 'Summer fashion model 4',
              },
              {
                id: 5,
                image: '/images/i1.webp',
                title: 'Evening wear',
                price: 220.0,
                discount: '10% OFF',
                alt: 'Summer fashion model 5',
              },
              {
                id: 6,
                image: '/images/f1.webp',
                title: 'Party collection',
                price: 240.0,
                alt: 'Summer fashion model 6',
              },
            ]}
            heading="Summer Vibes"
            subheading="Discover our latest summer collection with breathtaking designs and comfortable fits."
            backgroundColor="#1C1C1C"
          />
          <ParallaxSection
            backgroundImage="/images/slider_2.webp"
            cards={[
              {
                id: 1,
                image: '/images/c1.webp',
                title: 'Spring dress',
                price: 170.0,
                alt: 'Spring fashion model 1',
              },
              {
                id: 2,
                image: '/images/b1.webp',
                title: 'Casual blazer',
                price: 190.0,
                discount: '15% OFF',
                alt: 'Spring fashion model 2',
              },
              {
                id: 3,
                image: '/images/i1.webp',
                title: 'Spring collection',
                price: 160.0,
                alt: 'Spring fashion model 3',
              },
              {
                id: 4,
                image: '/images/f1.webp',
                title: 'Light jacket',
                price: 200.0,
                alt: 'Spring fashion model 4',
              },
              {
                id: 5,
                image: '/images/d1.webp',
                title: 'Floral dress',
                price: 175.0,
                discount: '10% OFF',
                alt: 'Spring fashion model 5',
              },
              {
                id: 6,
                image: '/images/m4.webp',
                title: 'Spring wear',
                price: 165.0,
                alt: 'Spring fashion model 6',
              },
            ]}
            heading="Spring Fashion"
            subheading="Experience the freshness of spring with our latest collection of lightweight and stylish pieces."
            backgroundColor="#1C1C1C"
          />
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
