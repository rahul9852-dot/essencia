import React from 'react';
import Link from 'next/link';
import { collectionsData } from '@/lib/constants/Collections';

export default async function CollectionsPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Collections</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(collectionsData).map(([key, category]) => (
          <Link
            key={key}
            href={`/collections/${key}`}
            className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {category.title}
              </h2>
              <p className="mt-2 text-gray-600">{category.description}</p>
              <div className="mt-4 text-blue-600 font-medium">
                View collection →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
