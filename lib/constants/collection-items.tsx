interface CollectionItem {
  id: number;
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  colors: string[]; // Array of color hex codes
}

export const collectionItems: CollectionItem[] = [
  {
    id: 1,
    image: '/images/a1.webp',
    title: 'Brown sweatshirt with muffler',
    price: 1299.0,
    colors: ['#8B7355', '#2F2F2F', '#4A3728', '#6B4423'], // Brown, Black, Dark Brown, Copper
  },
  {
    id: 2,
    image: '/images/showcaseCategory/sc5.webp',
    title: 'Black Blouson Crop Top',
    price: 1199.0,
    colors: ['#000000', '#4A4A4A', '#2C2C2C'], // Black, Dark Gray, Charcoal
  },
  {
    id: 3,
    image: '/images/c1.webp',
    title: 'Women black high-neck dress',
    price: 1455.0,
    colors: ['#000000', '#1A1A1A', '#333333'], // Black, Rich Black, Dark Gray
  },
  {
    id: 4,
    image: '/images/f1.webp',
    title: 'Women black Long coat',
    price: 1980.0,
    originalPrice: 5500.0,
    discount: '15% OFF',
    colors: ['#000000', '#36454F', '#1B1B1B'], // Black, Charcoal, Deep Black
  },
  {
    id: 5,
    image: '/images/m4.webp',
    title: 'Women Cream sweater',
    price: 1888.0,
    colors: ['#FFFDD0', '#F5F5DC', '#E8E5D7'], // Cream, Beige, Light Beige
  },
  {
    id: 6,
    image: '/images/d1.webp',
    title: 'Women coat with brown shirt',
    price: 2360.0,
    colors: ['#8B7355', '#6B4423', '#483C32'], // Brown, Saddle Brown, Dark Brown
  },
  {
    id: 7,
    image: '/images/i1.webp',
    title: 'Summer maxi dress',
    price: 1399.0,
    colors: ['#FFFFFF', '#F5F5F5', '#ECECEC'], // White, Off White, Light Gray
  },
  {
    id: 8,
    image: '/images/c1.webp',
    title: 'Black dress',
    price: 1248.0,
    originalPrice: 168.0,
    discount: '11% OFF',
    colors: ['#000000', '#2C2C2C', '#1A1A1A'], // Black, Dark Gray, Rich Black
  },
  {
    id: 9,
    image: '/images/z1.webp',
    title: 'Black Blouson Crop Top',
    price: 180.0,
    colors: ['#8B7355', '#6B4423', '#483C32', '#2F2F2F', '#4A3728'], // Black, Dark Gray, Rich Black
  },
  {
    id: 10,
    image: '/images/p2.jpg',
    title: 'Black dress',
    price: 148.0,
    originalPrice: 168.0,
    discount: '10% OFF',
    colors: ['#333', '#4A4A4A', '#2C2C2C'], // Black, Dark Gray, Rich Black
  },
  {
    id: 11,
    image: '/images/e2.webp',
    title: 'White full sleeve t shirt',
    price: 2800.0,
    colors: ['#FFFFFF', '#F5F5F5', '#ECECEC'], // White, Off White, Light Gray
  },
  {
    id: 12,
    image: '/images/d3.webp',
    title: 'Women Black Longline Overcoat',
    price: 180.0,
    colors: ['#000000', '#4A4A4A', '#2C2C2C'], // Black, Dark Gray, Rich Black
  },
  {
    id: 13,
    image: '/images/b1.webp',
    title: 'Women Cream sweater',
    price: 288.0,
    colors: ['#FFFDD0', '#F5F5DC', '#E8E5D7'], // Cream, Beige, Light Beige
  },
  {
    id: 14,
    image: '/images/j1.webp',
    title: 'Men brown long coat',
    price: 158.0,
    originalPrice: 168.0,
    discount: '6% OFF',
    colors: ['#8B7355', '#6B4423', '#483C32', '#2F2F2F', '#4A3728'], // Brown, Dark Brown, Dark Gray
  },
  {
    id: 15,
    image: '/images/h1.webp',
    title: 'Men Black Long Coat',
    price: 89.0,
    colors: ['#000000', '#4A4A4A', '#2C2C2C'], // Black, Dark Gray, Rich Black
  },
  {
    id: 16,
    image: '/images/g1.webp',
    title: 'High Neck Sweatshirt',
    price: 170.0,
    colors: ['#8B7355', '#6B4423', '#483C32', '#2F2F2F', '#4A3728'], // Black, Dark Gray, Rich Black
  },
];
