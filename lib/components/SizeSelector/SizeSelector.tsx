'use client';

import React, { useState } from 'react';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize?: string;
  onChange?: (size: string) => void;
}

export default function SizeSelector({
  sizes,
  selectedSize,
  onChange,
}: SizeSelectorProps) {
  const [selected, setSelected] = useState(selectedSize || sizes[0]);

  const handleSizeChange = (size: string) => {
    setSelected(size);
    if (onChange) {
      onChange(size);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {sizes.map(size => (
        <button
          key={size}
          className={`min-w-[3rem] h-12 px-3 border rounded-md flex items-center justify-center ${
            (selectedSize || selected) === size
              ? 'bg-gray-900 text-white border-gray-900'
              : 'bg-white text-gray-900 border-gray-300 hover:border-gray-900'
          }`}
          onClick={() => handleSizeChange(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
