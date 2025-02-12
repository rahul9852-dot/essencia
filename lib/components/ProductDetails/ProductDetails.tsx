import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Share2,
  Minus,
  Plus,
  X,
  ShoppingBag,
  ArrowUp,
} from 'lucide-react';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState('Pale Taupe');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Pale Taupe', class: 'bg-[#C5B0A0]' },
    { name: 'Forest Green', class: 'bg-[#4B5F58]' },
    { name: 'Brown', class: 'bg-[#8B6646]' },
    { name: 'Dark Brown', class: 'bg-[#593D3D]' },
    { name: 'Gray Brown', class: 'bg-[#6F635B]' },
  ];

  // Images for different sizes
  const sizeImages = {
    S: ['/images/p2.jpg', '/images/p2.jpg'],
    M: ['/images/c1.webp', '/images/c1.webp'],
    L: ['/images/b1.webp', '/images/b1.webp'],
    XL: ['/images/d1.webp', '/images/d1.webp'],
    XXL: ['/images/f1.webp', '/images/f1.webp'],
  };

  const handleQuantityChange = action => {
    if (action === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleImageNavigation = direction => {
    const currentImages = sizeImages[selectedSize];
    if (direction === 'next' && currentImageIndex < currentImages.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    } else if (direction === 'prev' && currentImageIndex > 0) {
      setCurrentImageIndex(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    const newItem = {
      name: 'Summer maxi dress',
      size: selectedSize,
      color: selectedColor,
      quantity,
      price: 399.0,
      image: sizeImages[selectedSize][0],
    };
    setCartItems([...cartItems, newItem]);
    setIsCartOpen(true);
  };

  const CartDrawer = () => (
    <div
      className={`fixed inset-y-0 right-0 w-full md:w-96 bg-[#2b2b2b] text-white transform transition-transform duration-300 ease-in-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
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
    <div className="">
      <div className="grid grid-cols-3 md:grid-cols-2 gap-8">
        <div className="relative space-y-4">
          <div className="flex col-span-2">
            {sizeImages[selectedSize].map((img, index) => (
              <div
                key={index}
                className={`flex-1 relative ${index === currentImageIndex ? 'border-2 border-gray-400' : ''}`}
                // className={`flex-1 relative`}
              >
                <img
                  src={img}
                  alt={`Summer maxi dress ${index + 1}`}
                  className="w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={() => handleImageNavigation('prev')}
              className="p-2 bg-white rounded-full shadow-lg disabled:opacity-50"
              disabled={currentImageIndex === 0}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleImageNavigation('next')}
              className="p-2 bg-white rounded-full shadow-lg disabled:opacity-50"
              disabled={
                currentImageIndex === sizeImages[selectedSize].length - 1
              }
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-6 px-4 ">
          <div>
            <h1 className="text-3xl font-semibold">Summer maxi dress</h1>
            <p className="text-sm text-gray-500">
              This is a demonstration store.
            </p>
            <p className="text-2xl font-bold mt-2">$399.00</p>
            <p className="text-sm text-gray-500">
              Shipping calculated at checkout
            </p>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium mb-2">Size</h3>
            <div className="flex gap-2">
              {sizes.map(size => (
                <button
                  key={size}
                  onClick={() => {
                    setSelectedSize(size);
                    setCurrentImageIndex(0);
                  }}
                  className={`w-12 h-12 border rounded-md flex items-center justify-center ${
                    selectedSize === size ? 'border-black' : 'border-gray-200'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium mb-2">Color: {selectedColor}</h3>
            <div className="flex gap-2">
              {colors.map(color => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full ${color.class} ${
                    selectedColor === color.name ? 'ring-2 ring-black' : ''
                  }`}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex gap-4">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => handleQuantityChange('decrement')}
                className="p-2"
              >
                <Minus className="w-4 h-4" />
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center"
              />
              <button
                onClick={() => handleQuantityChange('increment')}
                className="p-2"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#8B6646] text-white py-2 px-4 rounded-md hover:bg-[#725339]"
            >
              Add to cart
            </button>
          </div>

          {/* Share Button */}
          <div className="flex items-center gap-2 text-sm">
            <button className="flex items-center gap-1">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 right-4 p-2 bg-white rounded-full shadow-lg"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
      <CartDrawer />
    </div>
  );
};

export default ProductDetails;
