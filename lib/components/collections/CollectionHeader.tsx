import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

interface CollectionHeaderProps {
  title: string;
  description: string;
  collectionType: string;
}

const CollectionHeader: React.FC<CollectionHeaderProps> = ({
  title,
  description,
  collectionType,
}) => {
  return (
    <div className="relative w-full overflow-hidden rounded-xl mb-10">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/collection-bg.jpg"
          alt="Collection background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70 z-10" />
      </div>

      {/* Content with parallax effect */}
      <div className="relative z-20 px-6 md:px-12 py-12 md:py-20">
        <Link
          href="/collections"
          className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Back to Collections</span>
        </Link>

        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-4">
            {title}
          </h1>

          <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl">
            {description}
          </p>

          <div className="relative flex w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-white/60" />
            </div>
            <input
              type="text"
              placeholder={`Search in ${collectionType.toLowerCase()}...`}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 
                text-white rounded-lg py-3 pl-10 pr-4 placeholder-white/60
                focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent
                transition-all duration-200"
            />
          </div>
        </div>
      </div>

      {/* Design elements */}
      <div className="absolute right-10 md:right-20 top-1/2 transform -translate-y-1/2 z-10 hidden md:block">
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full border-2 border-white/20 opacity-30" />
      </div>
      <div className="absolute right-0 top-0 w-36 h-36 bg-white/5 rounded-bl-full z-10" />
    </div>
  );
};

export default CollectionHeader;
