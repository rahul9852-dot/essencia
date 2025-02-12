import React from 'react';
import Navbar from '../../lib/components/Navbar/Navbar';
import Hero from '../../lib/components/Hero/Hero';
import SubHero from '../../lib/components/Sub-Hero/SubHero';
import HeroCardSection from '../../lib/components/Hero-Card/HeroCardSection';
import MarQuee from '../../lib/components/MarQueee/MarQuee';
import WinterFashionSection from '../../lib/components/WinterFashion/WinterFashionSection';
import SportswearSection from '../../lib/components/Sportswear/SportswearSection';
import RoundedCards from '@/lib/components/RoundedCards/roundedCards';
import CategoryShowcase from '@/lib/components/Hover-Card/HoverCard';

import WinterCollection from '@/lib/components/WinterCollection/WinterCollection';
import SummerCollection from '@/lib/components/SummerCollection/SummerCollection';
import SpringCollections from '@/lib/components/SpringCollections/SpringCollections';
import ProductDetails from '@/lib/components/ProductDetails/ProductDetails';
import FitnessFashion from '@/lib/components/FitnessFashion/FitnessFashion';
import Stores from '@/lib/components/Stores/Stores';
import DesignerSection from '@/lib/components/Designer/Designer';
const HomeScreen = () => {
  type Image = {
    src: string;
  };
  type Category = {
    id: string;
    title: string;
    images: Image[];
    bgColor: string;
  };
  const categories: Category[] = [
    {
      id: 'popular',
      title: 'Popular',
      images: [
        {
          src: '/images/showcaseCategory/hoverCard.webp',
        },
        {
          src: '/images/showcaseCategory/hoverCard2.jpg',
        },
        {
          src: '/images/showcaseCategory/hoverCard3.jpg',
        },
      ],
      bgColor: '#4D3836',
    },
    {
      id: 'winter',
      title: 'Winter',
      images: [
        {
          src: '/images/showcaseCategory/hoverCard4.jpg',
        },
        {
          src: '/images/showcaseCategory/hoverCard2.webp',
        },
        {
          src: '/images/showcaseCategory/hoverCard3.jpg',
        },
      ],
      bgColor: '#0F2322',
    },
    {
      id: 'bestseller',
      title: 'Best Seller',
      images: [
        {
          src: '/images/showcaseCategory/hoverCard4.jpg',
        },
        {
          src: '/images/showcaseCategory/hoverCard2.webp',
        },
        {
          src: '/images/showcaseCategory/hoverCard3.jpg',
        },
      ],
      bgColor: '#3E2E2B',
    },
    {
      id: 'new-arrivals',
      title: 'New Arrivals',
      images: [
        {
          src: '/images/showcaseCategory/hoverCard4.jpg',
        },
        {
          src: '/images/showcaseCategory/hoverCard2.webp',
        },
        {
          src: '/images/showcaseCategory/hoverCard3.jpg',
        },
      ],
      bgColor: '#333333',
    },
    {
      id: 'summer',
      title: 'Summer',
      images: [
        {
          src: '/images/showcaseCategory/hoverCard4.jpg',
        },
        {
          src: '/images/showcaseCategory/hoverCard2.webp',
        },
        {
          src: '/images/showcaseCategory/hoverCard3.jpg',
        },
      ],
      bgColor: '#4C4433',
    },
  ];
  return (
    <main className="relative">
      <Navbar />
      <Hero />
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
      <Stores />
      <DesignerSection />
    </main>
  );
};
export default HomeScreen;
