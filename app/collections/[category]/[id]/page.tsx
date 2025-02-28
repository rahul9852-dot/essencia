import React from 'react';
import Link from 'next/link';
import { Star, Share2 } from 'lucide-react';
import { collectionsData } from '@/lib/constants/Collections';
import ProductCarousel from '@/lib/components/Carousel/Carousel';
import ColorSelector from '@/lib/components/ColorSelector/ColorSelector';
import SizeSelector from '@/lib/components/SizeSelector/SizeSelector';

// Define valid categories type
type Category = keyof typeof collectionsData;

type Props = {
  params: {
    category: Category;
    id: string;
  };
};

// Generate static params for all products in all categories
export async function generateStaticParams() {
  const params: Array<{ category: string; id: string }> = [];

  Object.entries(collectionsData).forEach(([category, data]) => {
    data.items.forEach(item => {
      params.push({
        category,
        id: item.id,
      });
    });
  });

  return params;
}

export default async function ProductPage({ params }: Props) {
  const { category, id } = await params;

  // Find the product data
  const categoryData = collectionsData[category];
  const product = categoryData?.items.find(item => item.id === id);

  if (!product) {
    return <div className="p-8 text-center">Product not found</div>;
  }

  // Ensure images is an array
  const productImages = Array.isArray(product.images)
    ? product.images
    : [product.images];

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      <div className="mb-4">
        <Link
          href={`/collections/${category}`}
          className="text-gray-600 hover:text-gray-900"
        >
          ← Back to {categoryData.title}
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images Carousel */}
        <div className="bg-gray-50 rounded-lg overflow-hidden">
          <ProductCarousel images={productImages} name={product.name} />
        </div>

        {/* Product Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

          <div className="flex items-center mt-2 mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating || 0)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
            {product.reviews && (
              <span className="ml-2 text-gray-600">
                {product.reviews} review{product.reviews !== 1 ? 's' : ''}
              </span>
            )}
          </div>

          <div className="flex items-center mb-6">
            <span className="text-3xl font-bold text-gray-900">
              {product.price}
            </span>
            {product.originalPrice && (
              <>
                <span className="ml-2 text-gray-500 line-through">
                  {product.originalPrice}
                </span>
                <span className="ml-2 text-red-600 text-sm font-medium">
                  {product.discount}
                </span>
              </>
            )}
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          {product.colors && (
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-2">Color</h2>
              <ColorSelector colors={product.colors} />
            </div>
          )}

          {product.sizes && (
            <div className="mb-6">
              <h2 className="text-lg font-medium mb-2">Size</h2>
              <SizeSelector sizes={product.sizes} />
            </div>
          )}

          <div className="mb-6">
            <h2 className="text-lg font-medium mb-2">Quantity</h2>
            <div className="flex items-center border border-gray-300 rounded-md w-32">
              <button
                className="px-3 py-2 text-gray-600 hover:text-gray-900"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="flex-1 text-center">1</span>
              <button
                className="px-3 py-2 text-gray-600 hover:text-gray-900"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors">
              Add to cart
            </button>
            <button className="bg-gray-100 text-gray-900 py-3 px-6 rounded-md hover:bg-gray-200 transition-colors">
              Buy it now
            </button>
          </div>

          {product.features && (
            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-bold mb-4">Key Features:</h2>
              <ul className="list-disc pl-5 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 flex items-center">
            <button className="flex items-center text-gray-600 hover:text-gray-900">
              <Share2 className="w-5 h-5 mr-2" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
