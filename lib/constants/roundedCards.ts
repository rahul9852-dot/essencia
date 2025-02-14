// Types
type Image = {
  src: string;
  position?: { top?: string; left?: string; right?: string };
};

export type Category = {
  id: string;
  title: string;
  images: Image[];
};

// Existing cards data

// New categories data
export const categories: Category[] = [
  {
    id: 'popular',
    title: 'Popular',
    images: [
      {
        src: '/images/showcaseCategory/sc1.webp',
        position: { top: '20%', left: '15%' },
      },
      {
        src: '/images/showcaseCategory/sc2.jpg',
        position: { top: '20%', right: '15%' },
      },
    ],
  },
  {
    id: 'winter',
    title: 'Winter',
    images: [
      {
        src: '/images/showcaseCategory/sc3.jpg',
        position: { top: '20%', left: '15%' },
      },
      {
        src: '/images/showcaseCategory/sc4.webp',
        position: { top: '20%', right: '15%' },
      },
    ],
  },
  {
    id: 'bestseller',
    title: 'Best Seller',
    images: [
      {
        src: '/images/showcaseCategory/sc5.webp',
        position: { top: '20%', left: '15%' },
      },
      {
        src: '/images/showcaseCategory/sc6.jpg',
        position: { top: '20%', right: '15%' },
      },
    ],
  },
  {
    id: 'new-arrivals',
    title: 'New Arrivals',
    images: [
      {
        src: '/images/showcaseCategory/sc7.jpg',
        position: { top: '20%', left: '15%' },
      },
      {
        src: '/images/showcaseCategory/sc1.webp',
        position: { top: '20%', right: '15%' },
      },
    ],
  },
  {
    id: 'summer',
    title: 'Summer',
    images: [
      {
        src: '/images/showcaseCategory/sc3.jpg',
        position: { top: '20%', left: '15%' },
      },
      {
        src: '/images/showcaseCategory/sc7.webp',
        position: { top: '20%', right: '15%' },
      },
    ],
  },
];
