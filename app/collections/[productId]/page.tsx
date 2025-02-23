'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Minus, Plus, Share2 } from 'lucide-react';
import img2 from '@/public/images/showcaseCategory/sc2.jpg';
import img3 from '@/public/images/showcaseCategory/sc3.jpg';
import img6 from '@/public/images/showcaseCategory/sc6.jpg';
import img7 from '@/public/images/showcaseCategory/sc7.jpg';
import { Accordion, AccordionItem } from '@heroui/accordion';

const images = [img2, img3, img6, img7];
const sizes = ['S', 'M', 'L', 'XL'];
const colors = [
  { name: 'Red', class: 'bg-red-500' },
  { name: 'Blue', class: 'bg-blue-500' },
  { name: 'Green', class: 'bg-green-500' },
  { name: 'Black', class: 'bg-black' },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
  desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
  tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Red');
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type: 'increment' | 'decrement') => {
    setQuantity(prev =>
      type === 'increment' ? prev + 1 : Math.max(1, prev - 1)
    );
  };

  return (
    <div className="w-full">
      <div className="w-full pt-20">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay={false}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          showDots={true}
          itemClass="px-2"
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-[500px] overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 ease-in-out scale-100 group-hover:scale-105"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <Accordion variant="light">
              <AccordionItem
                key="1"
                aria-label="Description"
                title={
                  <h3 className="text-lg text-left font-semibold">
                    Description
                  </h3>
                }
                className="border-b last:border-none focus:outline-none focus:ring-0"
              >
                <p className="text-gray-600 leading-relaxed">
                  Our men's brown long coat is the perfect addition to any
                  gentleman's wardrobe...
                </p>
              </AccordionItem>

              <AccordionItem
                key="2"
                aria-label="Shipping"
                title={
                  <h3 className="text-lg text-left font-semibold">Shipping</h3>
                }
                className="border-b last:border-none"
              >
                <p className="text-gray-600 leading-relaxed">
                  Orders placed before 8am are processed the same business
                  day...
                </p>
              </AccordionItem>

              <AccordionItem
                key="3"
                aria-label="Return Policy"
                title={
                  <h3 className="text-lg text-left font-semibold">
                    Return Policy
                  </h3>
                }
              >
                <p className="text-gray-600 leading-relaxed">
                  Returns are accepted within 30 days of purchase...
                </p>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-light">Summer Maxi Dress</h1>
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-medium">$399.00</span>
                <span className="text-lg text-gray-500 line-through">
                  $499.00
                </span>
                <span className="px-3 py-1 text-sm bg-red-50 text-red-600 rounded-full">
                  20% OFF
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">Select Size</h3>
                <button className="text-sm text-gray-600 hover:underline">
                  Size Guide
                </button>
              </div>
              <div className="flex gap-3">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-14 h-14 rounded-xl flex items-center justify-center 
                      border-2 transition-all
                      ${
                        selectedSize === size
                          ? 'border-[#8B6646] bg-[#8B6646] text-white'
                          : 'border-gray-200 hover:border-[#8B6646]'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">
                Color: <span className="text-gray-600">{selectedColor}</span>
              </h3>
              <div className="flex gap-3">
                {colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`group relative w-14 h-14 rounded-xl ${color.class} 
                      transition-transform hover:scale-105
                      ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-[#8B6646]' : ''}`}
                  >
                    {selectedColor === color.name && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-full bg-white/40 backdrop-blur-sm" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex gap-4">
                <div className="flex items-center border-2 rounded-xl overflow-hidden">
                  <button
                    onClick={() => handleQuantityChange('decrement')}
                    className="px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-16 text-center"
                  />
                  <button
                    onClick={() => handleQuantityChange('increment')}
                    className="px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button className="flex-1 bg-[#8B6646] text-white rounded-xl hover:bg-[#725339] transition-all active:scale-[0.98] transform">
                  Add to Cart
                </button>
              </div>

              <button className="w-full py-3 border-2 border-[#8B6646] text-[#8B6646] rounded-xl hover:bg-[#8B6646] hover:text-white transition-colors">
                Buy Now
              </button>
            </div>

            <div className="pt-6 border-t">
              <button className="flex items-center gap-2 text-gray-600 hover:text-black">
                <Share2 className="w-5 h-5" />
                <span>Share this product</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
