import React from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  ariaLabel,
}) => {
  // Base styles for all buttons
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black';

  // Size variations
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Variant styles
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-800 active:bg-gray-900',
    secondary:
      'bg-white text-black border border-black hover:bg-gray-100 active:bg-gray-200',
    outline:
      'bg-transparent text-black border border-black hover:bg-gray-100 active:bg-gray-200',
    text: 'bg-transparent text-black hover:underline hover:bg-gray-100 px-2',
  };

  // Disabled styles
  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-pointer';

  // Full width style
  const widthStyle = fullWidth ? 'w-full' : '';

  // Combine all styles
  const buttonStyles = twMerge(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    disabledStyles,
    widthStyle,
    className
  );

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={buttonStyles} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={buttonStyles}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default Button;
