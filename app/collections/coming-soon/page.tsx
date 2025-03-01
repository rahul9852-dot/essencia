'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,black_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full filter blur-3xl opacity-30 -z-10"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 text-center md:text-left"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
                Something
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-900">
                  Exciting
                </span>
                is Coming
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
                We are crafting something extraordinary. Stay tuned for our
                latest collection that will redefine style.
              </p>
            </div>

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-md space-y-4"
            >
              <h3 className="text-lg font-medium text-gray-900">
                Be the first to know when we launch
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg
                            focus:outline-none focus:border-gray-900 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium
                            hover:bg-black transition-colors"
                >
                  Notify Me
                </motion.button>
              </div>
            </motion.div>

            {/* Back to Home Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/"
                className="inline-flex items-center text-gray-600 hover:text-black transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Back to Home
              </Link>
            </motion.div>
          </motion.div>

          {/* Decorative Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform rotate-3" />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl transform -rotate-3" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl font-bold text-gray-200">ES</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
