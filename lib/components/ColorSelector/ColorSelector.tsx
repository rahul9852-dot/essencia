'use client';

import React, { useState } from 'react';

interface ColorSelectorProps {
  colors: string[];
  selectedColor?: string;
  onChange?: (color: string) => void;
}

const colorMap: Record<string, string> = {
  coffee: 'bg-amber-800',
  darkbrown: 'bg-stone-700',
  olive: 'bg-olive-700',
  tan: 'bg-amber-300',
  black: 'bg-black',
  beige: 'bg-amber-100',
  navy: 'bg-navy-800',
  white: 'bg-white border border-gray-200',
  gray: 'bg-gray-500',
  red: 'bg-red-600',
  charcoal: 'bg-gray-700',
  khaki: 'bg-khaki-300',
  burgundy: 'bg-red-900',
  blue: 'bg-blue-700',
  'light-wash': 'bg-blue-200',
};

export default function ColorSelector({
  colors,
  selectedColor,
  onChange,
}: ColorSelectorProps) {
  const [selected, setSelected] = useState(selectedColor || colors[0]);

  const handleColorChange = (color: string) => {
    setSelected(color);
    if (onChange) {
      onChange(color);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {colors.map(color => (
        <button
          key={color}
          className={`w-10 h-10 rounded-md ${colorMap[color] || 'bg-gray-500'} ${
            (selectedColor || selected) === color
              ? 'ring-2 ring-offset-2 ring-black'
              : ''
          }`}
          onClick={() => handleColorChange(color)}
          aria-label={`Select ${color} color`}
          title={color.charAt(0).toUpperCase() + color.slice(1)}
        />
      ))}
    </div>
  );
}
