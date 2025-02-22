'use client';

import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="space-y-3 text-center">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full animate-spin mx-auto" />
        <p className="text-gray-500">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
