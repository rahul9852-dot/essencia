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
import Button from '../ui/Button';

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
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);
  const [measurementUnit, setMeasurementUnit] = useState<'inches' | 'cms'>(
    'inches'
  );

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
      name: 'Summer dress',
      size: selectedSize,
      color: selectedColor,
      quantity,
      price: 399.0,
      image: sizeImages[selectedSize][0],
    };
    setCartItems(prev => [...prev, newItem]);
    setIsCartOpen(true);
  };

  // Size guide data
  const sizeChartData = {
    inches: [
      { size: 'S', chest: 46, toFitChest: 38, shoulder: 24, length: 26.5 },
      { size: 'M', chest: 48, toFitChest: 40, shoulder: 25, length: 27.5 },
      { size: 'L', chest: 50, toFitChest: 42, shoulder: 26, length: 28.5 },
      { size: 'XL', chest: 52, toFitChest: 44, shoulder: 27, length: 29 },
      { size: 'XXL', chest: 54, toFitChest: 46, shoulder: 28, length: 29.5 },
      { size: 'XXXL', chest: 56, toFitChest: 48, shoulder: 29, length: 30 },
    ],
    cms: [
      { size: 'S', chest: 117, toFitChest: 97, shoulder: 61, length: 67 },
      { size: 'M', chest: 122, toFitChest: 102, shoulder: 64, length: 70 },
      { size: 'L', chest: 127, toFitChest: 107, shoulder: 66, length: 72 },
      { size: 'XL', chest: 132, toFitChest: 112, shoulder: 69, length: 74 },
      { size: 'XXL', chest: 137, toFitChest: 117, shoulder: 71, length: 75 },
      { size: 'XXXL', chest: 142, toFitChest: 122, shoulder: 74, length: 76 },
    ],
  };

  const SizeGuideModal = () => (
    <div
      className={`fixed inset-0 bg-black/50 z-50 flex items-center justify-center transition-opacity duration-300 ${isSizeGuideOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto">
        <div className="p-6 text-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Size Guide</h2>
            <button
              onClick={() => setIsSizeGuideOpen(false)}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mb-4 flex justify-end">
            <div className="inline-flex rounded-lg overflow-hidden border border-gray-200">
              <button
                onClick={() => setMeasurementUnit('inches')}
                className={`px-4 py-2 text-sm ${measurementUnit === 'inches' ? 'bg-gray-100 font-medium' : 'bg-white'}`}
              >
                Inches
              </button>
              <button
                onClick={() => setMeasurementUnit('cms')}
                className={`px-4 py-2 text-sm ${measurementUnit === 'cms' ? 'bg-gray-100 font-medium' : 'bg-white'}`}
              >
                Cms
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left border-b border-gray-200">
                    Size
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-200">
                    Chest
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-200">
                    To Fit Chest
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-200">
                    Shoulder
                  </th>
                  <th className="py-3 px-4 text-left border-b border-gray-200">
                    Length
                  </th>
                </tr>
              </thead>
              <tbody>
                {sizeChartData[measurementUnit].map(row => (
                  <tr key={row.size} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b border-gray-200">
                      {row.size}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200">
                      {row.chest}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200">
                      {row.toFitChest}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200">
                      {row.shoulder}
                    </td>
                    <td className="py-3 px-4 border-b border-gray-200">
                      {row.length}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  const CartDrawer = () => (
    <div
      className={`fixed inset-y-0 right-0 w-full md:w-96 bg-white text-black transform transition-transform duration-300 ease-in-out z-50 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center p-4 border-b border-black/10">
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
              className="flex gap-4 mb-4 bg-white border border-black/10 p-4 rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-32 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm text-black/60">
                  {item.size} / {item.color}
                </p>
                <p className="mt-2">₹{item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="number"
                    value={item.quantity}
                    className="w-16 bg-white border border-black/10 text-center rounded p-1"
                    readOnly
                  />
                  <button
                    className="text-black/60"
                    onClick={() => setIsCartOpen(false)}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-black/10">
          <p className="text-sm text-black/60 mb-4">
            Taxes and shipping calculated at checkout
          </p>
          <Button
            variant="primary"
            fullWidth
            className="mb-2"
            onClick={() => {
              /* Add checkout logic here */
            }}
          >
            Checkout • $
            {cartItems
              .reduce((sum, item) => sum + item.price * item.quantity, 0)
              .toFixed(2)}
          </Button>
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
            <li className="text-gray-800">Summer Dress</li>
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
                  <ChevronRight className="w-6 h-6 text-black" />
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
                        ? 'ring-2 ring-black ring-offset-2'
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
              <h1 className="text-4xl text-black font-light">Summer Dress</h1>
              <div className="flex items-baseline gap-4">
                <span className="text-3xl font-medium text-gray-900">
                  ₹2999.00
                </span>
                <span className="text-lg text-gray-900 line-through">
                  ₹4999.00
                </span>
                <span className="px-3 py-1 text-sm bg-red-50 text-red-600 rounded-full">
                  20% OFF
                </span>
              </div>
              <p className="text-gray-900 leading-relaxed">
                Elevate your summer wardrobe with this stunning maxi dress.
                Crafted from premium fabric for all-day comfort and style.
              </p>
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className=" text-gray-900 font-medium">Select Size</h3>
                <button
                  className="text-sm text-gray-900 hover:underline"
                  onClick={() => setIsSizeGuideOpen(true)}
                >
                  Size Guide
                </button>
              </div>
              <div className=" flex gap-3">
                {sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => {
                      setSelectedSize(size);
                      setCurrentImageIndex(0);
                    }}
                    className={`w-14 h-14 text-gray-900 rounded-xl  flex items-center justify-center 
                      border-2 transition-all
                      ${
                        selectedSize === size
                          ? 'border-black bg-black text-white'
                          : 'border-black hover:border-black'
                      }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <h3 className=" text-gray-900 font-medium">
                Color: <span className="text-gray-900">{selectedColor}</span>
              </h3>
              <div className="flex gap-3">
                {colors.map(color => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`group relative w-14 h-14 rounded-xl ${color.class} 
                      transition-transform hover:scale-105
                      ${selectedColor === color.name ? 'ring-2 ring-offset-2 ring-black' : ''}`}
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
                <div className="flex items-center border-2 border-black rounded-xl overflow-hidden">
                  <button
                    onClick={() => handleQuantityChange('decrement')}
                    className="px-4 py-3 hover:bg-black/5 transition-colors text-gray-900"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-16 text-center text-gray-900"
                  />
                  <button
                    onClick={() => handleQuantityChange('increment')}
                    className="px-4 py-3 hover:bg-black/5 transition-colors text-gray-900"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-black text-white rounded-xl 
                    hover:bg-black/80 transition-all
                    active:scale-[0.98] transform"
                >
                  Add to Cart
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full py-3 border-2 border-black text-black 
                  rounded-xl hover:bg-black hover:text-white transition-colors"
              >
                Buy Now
              </button>
            </div>

            {/* Additional Info */}
            <div className="pt-6 border-t">
              <button className="flex items-center gap-2 text-black/60 hover:text-black">
                <Share2 className="w-5 h-5" />
                <span>Share this product</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <CartDrawer />
      <SizeGuideModal />
    </div>
  );
};

export default ProductDetails;
