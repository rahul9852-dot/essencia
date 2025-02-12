import React from 'react';
const RightArrowIcon = ({
  color,
  className,
}: {
  color: string;
  className: string;
}) => (
  <svg fill={color} viewBox="0 0 23.04 8.94" className={className}>
    <g>
      <polygon points="18.57 0 17.3 1.27 19.86 3.83 0 3.83 0 5.12 19.86 5.12 17.3 7.67 18.57 8.94 23.04 4.47 18.57 0" />
    </g>
  </svg>
);
export default RightArrowIcon;
