'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { IoSearchOutline } from 'react-icons/io5';
import { IoCloseOutline } from 'react-icons/io5';

gsap.registerPlugin(ScrollTrigger);

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Summer 2024's Most Anticipated Fashion Trends",
    excerpt:
      'Discover the hottest trends that will dominate the fashion scene this summer season.',
    category: 'Fashion Trends',
    date: 'March 15, 2024',
    readTime: '5 min read',
    image: '/images/blog/aboutUs-innerImg2.webp',
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/avatars/sarah.webp',
    },
  },
  {
    id: 2,
    title: 'Sustainable Fashion: A Guide to Eco-Friendly Style',
    excerpt:
      'Learn how to build a sustainable wardrobe without compromising on style.',
    category: 'Sustainability',
    date: 'March 12, 2024',
    readTime: '7 min read',
    image: '/images/blog/sustainable.webp',
    author: {
      name: 'Michael Chen',
      avatar: '/images/avatars/michael.webp',
    },
  },
  {
    id: 3,
    title: 'Winter Wardrobe Essentials You Need Now',
    excerpt:
      'Stay stylish and warm with these must-have winter fashion pieces.',
    category: 'Style Guide',
    date: 'March 10, 2024',
    readTime: '6 min read',
    image: '/images/blog/winter-fashion.webp',
    author: {
      name: 'Emma Davis',
      avatar: '/images/avatars/emma.webp',
    },
  },
  {
    id: 4,
    title: 'Accessorizing 101: Complete Your Look',
    excerpt:
      'Master the art of accessorizing with these expert tips and tricks.',
    category: 'Style Guide',
    date: 'March 8, 2024',
    readTime: '4 min read',
    image: '/images/blog/accessories.webp',
    author: {
      name: 'James Wilson',
      avatar: '/images/avatars/james.webp',
    },
  },
  {
    id: 5,
    title: '10 Styling Tips for a Perfect Outfit',
    excerpt: 'Professional styling advice to elevate your everyday looks.',
    category: 'Style Guide',
    date: 'March 5, 2024',
    readTime: '8 min read',
    image: '/images/blog/styling-tips.webp',
    author: {
      name: 'Sarah Johnson',
      avatar: '/images/avatars/sarah.webp',
    },
  },
];

const categories = [
  { name: 'All', count: 12 },
  { name: 'Trends', count: 5 },
  { name: 'Style Guide', count: 3 },
  { name: 'Sustainability', count: 2 },
  { name: 'Collections', count: 2 },
];

const BlogPage = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const postsRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const searchRef = useRef<HTMLDivElement>(null);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    // Enhanced header and hero content animations
    const tl = gsap.timeline();

    tl.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power3.out',
    }).from(
      heroContentRef.current,
      {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      },
      '-=0.8'
    );

    // Enhanced posts animation
    const posts = postsRef.current?.children;
    if (posts) {
      gsap.from(posts, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: postsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    }

    // Add search animation
    if (searchRef.current) {
      gsap.from(searchRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.5,
      });
    }
  }, []);

  // Add search handler
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Animate search results
    if (postsRef.current) {
      gsap.from(postsRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery('');
    if (postsRef.current) {
      gsap.from(postsRef.current.children, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <div
        ref={headerRef}
        className="relative h-[70vh] flex items-center justify-center"
      >
        <Image
          src="/images/blog/bannerImage.webp"
          alt="Blog hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        <div
          ref={heroContentRef}
          className="relative z-10 text-center text-white px-4 max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
            Essancia Fashion Blog
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
            Discover the latest trends, styling tips, and fashion insights
          </p>

          {/* Enhanced Search Bar */}
          <div ref={searchRef} className="relative max-w-xl mx-auto">
            <div
              className={`relative transition-all duration-300 ${
                isSearchFocused ? 'scale-105' : 'scale-100'
              }`}
            >
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearch}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full px-6 py-3 pl-12 rounded-full bg-white/10 
                  backdrop-blur-sm border border-white/20 text-white 
                  placeholder-white/60 focus:outline-none focus:ring-2 
                  focus:ring-white/50 transition-all duration-300"
              />
              <IoSearchOutline
                className="absolute left-4 top-1/2 -translate-y-1/2 
                text-white/60 text-xl"
              />

              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 
                    text-white/60 hover:text-white transition-colors
                    p-1 rounded-full hover:bg-white/10"
                >
                  <IoCloseOutline className="text-xl" />
                </button>
              )}
            </div>

            {/* Search Results Count */}
            {searchQuery && (
              <div className="absolute -bottom-8 left-0 right-0 text-center text-white/80 text-sm">
                Found {filteredPosts.length}{' '}
                {filteredPosts.length === 1 ? 'result' : 'results'}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Categories Section */}
      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`group relative px-6 py-3 rounded-full transition-all duration-300
                ${
                  selectedCategory === category.name
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {category.name}
                <span className="text-sm opacity-60">({category.count})</span>
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Enhanced Blog Posts Grid */}
      <div ref={postsRef} className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className="group relative bg-white rounded-xl overflow-hidden
                hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700
                    group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm
                  px-4 py-1 rounded-full text-sm font-medium"
                >
                  {post.category}
                </span>
                <span
                  className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm
                  px-3 py-1 rounded-full text-xs text-white"
                >
                  {post.readTime}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h2 className="text-xl font-semibold group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="block text-sm font-medium">
                        {post.author.name}
                      </span>
                      <span className="block text-xs text-gray-500">
                        {post.date}
                      </span>
                    </div>
                  </div>
                  <span className="text-sm text-black/60 group-hover:text-black transition-colors">
                    Read More →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
