'use client';
import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  Minus,
  Plus,
  X,
  ShoppingBag,
} from 'lucide-react';

// Define types
interface CartItem {
  name: string;
  size: string;
  color: string;
  quantity: number;
  price: number;
  image: string;
}

interface Color {
  name: string;
  class: string;
}

interface SizeImages {
  [key: string]: string[];
}

const ProductDetails = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>('S');
  const [selectedColor, setSelectedColor] = useState<string>('Pale Taupe');
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const sizes: string[] = ['S', 'M', 'L', 'XL', 'XXL'];

  const colors: Color[] = [
    { name: 'Pale Taupe', class: 'bg-[#C5B0A0]' },
    { name: 'Forest Green', class: 'bg-[#4B5F58]' },
    { name: 'Brown', class: 'bg-[#8B6646]' },
    { name: 'Dark Brown', class: 'bg-[#593D3D]' },
    { name: 'Gray Brown', class: 'bg-[#6F635B]' },
  ];

  const sizeImages: SizeImages = {
    S: ['/images/c1.webp', '/images/c2.webp'],
    M: ['/images/d1.webp', '/images/d2.webp'],
    L: ['/images/b2.webp', '/images/b1.webp'],
    XL: ['/images/d1.webp', '/images/d2.webp'],
    XXL: ['/images/f1.webp', '/images/f1.webp'],
  };

  const handleQuantityChange = (action: 'increment' | 'decrement'): void => {
    if (action === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleImageNavigation = (direction: 'next' | 'prev'): void => {
    const currentImages = sizeImages[selectedSize];
    if (direction === 'next' && currentImageIndex < currentImages.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    } else if (direction === 'prev' && currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  const handleAddToCart = (): void => {
    const newItem: CartItem = {
      name: 'Summer maxi dress',
      size: selectedSize,
      color: selectedColor,
      quantity,
      price: 399.0,
      image: sizeImages[selectedSize][0],
    };
    setCartItems(prev => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const CartDrawer = () => (
    <div
      className={`fixed inset-y-0 right-0 w-full md:w-96 bg-[#2b2b2b] text-white transform transition-transform duration-300 ease-in-out z-50 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-6 h-6" />
            <span className="text-xl">Cart</span>
          </div>
          <button onClick={() => setIsCartOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 mb-4 bg-[#333333] p-4 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-32 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-gray-400">
                  {item.size} / {item.color}
                </p>
                <p className="mt-2">${item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="number"
                    value={item.quantity}
                    className="w-16 bg-[#444444] text-center rounded p-1"
                    readOnly
                  />
                  <button className="text-gray-400">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-gray-700">
          <p className="text-sm text-gray-400 mb-4">
            Taxes and shipping calculated at checkout
          </p>
          <button className="w-full bg-[#8B6646] text-white py-3 rounded-lg mb-2">
            Checkout • $
            {cartItems
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toFixed(2)}
          </button>
          <button
            className="w-full text-center underline text-sm"
            onClick={() => setIsCartOpen(false)}
          >
            View Cart
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                Home
              </a>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                Fashion
              </a>
            </li>
            <li>
              <span className="text-gray-400">/</span>
            </li>
            <li className="text-gray-800">Summer Maxi Dress</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Image Gallery */}
          <div className="space-y-6">
            <div className="relative aspect-[4/5] bg-gray-50 rounded-2xl overflow-hidden">
              {sizeImages[selectedSize].map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 
                    ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img
                    src={img}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              {/* Navigation Controls */}
              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between">
                <button
                  onClick={() => handleImageNavigation('prev')}
                  className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-xl 
                    disabled:opacity-50 transition-all hover:scale-110 disabled:hover:scale-100"
                  disabled={currentImageIndex === 0}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={() => handleImageNavigation('next')}
                  className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-xl 
                    disabled:opacity-50 transition-all hover:scale-110 disabled:hover:scale-100"
                  disabled={
                    currentImageIndex === sizeImages[selectedSize].length - 1
                  }
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="grid grid-cols-4 gap-4">
              {sizeImages[selectedSize].map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-square rounded-lg overflow-hidden 
                    transition-all ${
                      index === currentImageIndex
                        ? 'ring-2 ring-[#8B6646] ring-offset-2'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-8">
            {/* Product Title and Price */}
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
              <p className="text-gray-600 leading-relaxed">
                Elevate your summer wardrobe with this stunning maxi dress.
                Crafted from premium fabric for all-day comfort and style.
              </p>
            </div>

            {/* Size Selection */}
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
                    onClick={() => {
                      setSelectedSize(size);
                      setCurrentImageIndex(0);
                    }}
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

            {/* Color Selection */}
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

            {/* Quantity and Add to Cart */}
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
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#8B6646] text-white rounded-xl 
                    hover:bg-[#725339] transition-all
                    active:scale-[0.98] transform"
                >
                  Add to Cart
                </button>
              </div>

              <button
                className="w-full py-3 border-2 border-[#8B6646] text-[#8B6646] 
                  rounded-xl hover:bg-[#8B6646] hover:text-white transition-colors"
              >
                Buy Now
              </button>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t">
              <button className="flex items-center gap-2 text-gray-600 hover:text-black">
                <Share2 className="w-5 h-5" />
                <span>Share this product</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <CartDrawer />
    </div>
  );
};

export default ProductDetails;
