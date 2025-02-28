import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { collectionsData } from '@/lib/constants/Collections';

// Define valid categories type
type Category = keyof typeof collectionsData;

type Props = {
  params: { category: Category };
};

// Generate static params for all categories
export async function generateStaticParams() {
  const categories = Object.keys(collectionsData) as Category[];
  return categories.map(category => ({
    category: category,
  }));
}

// Static page component
export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const collection = collectionsData[category];

  if (!collection) {
    return <div className="p-8 text-center">Collection not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{collection.title}</h1>
        <p className="mt-2 text-gray-600">{collection.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collection.items.map(item => (
          <Link
            key={item.id}
            href={`/collections/${category}/${item.id}`}
            className="group"
          >
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-80 w-full">
                <Image
                  src={
                    Array.isArray(item.images) ? item.images[0] : item.images
                  }
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-medium text-gray-900">
                  {item.name}
                </h2>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">
                      {item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {item.originalPrice}
                      </span>
                    )}
                  </div>
                  {item.discount && (
                    <span className="text-xs font-medium text-red-600">
                      {item.discount}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
