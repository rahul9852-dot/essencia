'use client';

import React, { ReactNode } from 'react';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  withGradient?: boolean;
  withExtraPadding?: boolean;
}

/**
 * PageContainer - A reusable component that provides consistent spacing and padding
 * for page content, accounting for the fixed navbar.
 *
 * @param children - The page content
 * @param className - Additional classes to apply to the container
 * @param withGradient - Whether to apply a gradient background
 * @param withExtraPadding - Whether to add extra padding at the bottom
 */
const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className = '',
  withGradient = false,
  withExtraPadding = false,
}) => {
  // Base classes for the container
  const baseClasses = 'min-h-screen pt-28 sm:pt-32';

  // Gradient classes if enabled
  const gradientClasses = withGradient
    ? 'bg-gradient-to-b from-white via-gray-50 to-white'
    : 'bg-white';

  // Bottom padding classes
  const paddingClasses = withExtraPadding ? 'pb-20 sm:pb-24' : 'pb-16';

  return (
    <div
      className={`${baseClasses} ${gradientClasses} ${paddingClasses} ${className}`}
    >
      {children}
    </div>
  );
};

export default PageContainer;
