
import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", light = false }) => {
  const color = light ? "#ffffff" : "#d4af37";
  return (
    <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 95V105H90V95H10Z" fill={color} />
      <path d="M20 15V25H80V15H20Z" fill={color} />
      <rect x="30" y="30" width="8" height="60" fill={color} opacity="0.8" />
      <rect x="46" y="30" width="8" height="60" fill={color} opacity="0.8" />
      <rect x="62" y="30" width="8" height="60" fill={color} opacity="0.8" />
      <path d="M15 25C15 25 20 35 50 35C80 35 85 25 85 25" stroke={color} strokeWidth="3" />
      <path d="M15 95C15 95 20 85 50 85C80 85 85 95 85 95" stroke={color} strokeWidth="3" />
    </svg>
  );
};

export default Logo;
