import React from 'react';

interface ProgressBarProps {
  isActive: boolean;
  progress: number;
  onClick: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  isActive,
  progress,
  onClick,
}) => {
  return (
    <div
      className="h-[2px] w-48 bg-white/20 cursor-pointer overflow-hidden relative 
        rounded-full group hover:bg-white/30 transition-all duration-300"
      onClick={onClick}
    >
      {/* Background shimmer effect */}
      <div
        className="absolute inset-0 w-full bg-gradient-to-r from-transparent 
        via-white/10 to-transparent -translate-x-full animate-shimmer"
      />

      {/* Main progress bar */}
      <div
        className={`h-full bg-gradient-to-r from-white/90 via-white to-white/90 
          transform-gpu relative ${
            isActive
              ? 'transition-[width] duration-[16ms] ease-linear'
              : 'transition-none'
          }`}
        style={{
          width: `${isActive ? progress : 0}%`,
        }}
      >
        {/* Leading edge glow */}
        <div
          className="absolute top-1/2 -right-[2px] h-[4px] w-[20px] 
          bg-gradient-to-r from-white/0 via-white to-white 
          blur-[3px] transform -translate-y-1/2"
        />

        {/* Active glow effect */}
        <div className="absolute inset-0 bg-white/20 blur-[2px]" />
      </div>

      {/* Hover highlight */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 
        bg-gradient-to-r from-white/0 via-white/20 to-white/0 
        transition-opacity duration-300"
      />
    </div>
  );
};

export default ProgressBar;
