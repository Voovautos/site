import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeMap = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 64, height: 64 }
  };

  const { width, height } = sizeMap[size];

  return (
    <div className={`inline-flex items-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-2"
      >
        {/* Multi-colored blue gradient background square */}
        <defs>
          <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            <stop offset="25%" style={{ stopColor: '#1d4ed8', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
            <stop offset="75%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1e3a8a', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#60a5fa', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#1d4ed8', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Rounded square background */}
        <rect
          x="2"
          y="2"
          width="60"
          height="60"
          rx="8"
          fill="url(#blueGradient)"
        />
        
        {/* Shield shape */}
        <path
          d="M32 12 L20 18 L20 32 C20 40 26 46 32 50 C38 46 44 40 44 32 L44 18 L32 12 Z"
          fill="url(#shieldGradient)"
          stroke="#1e40af"
          strokeWidth="1"
        />
        
        {/* Wave patterns on shield */}
        <path
          d="M24 24 Q28 22 32 24 Q36 26 40 24"
          stroke="#dbeafe"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M24 28 Q28 26 32 28 Q36 30 40 28"
          stroke="#bfdbfe"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M24 32 Q28 30 32 32 Q36 34 40 32"
          stroke="#93c5fd"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M26 36 Q29 34 32 36 Q35 38 38 36"
          stroke="#dbeafe"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      
      <div className="flex flex-col">
        <span className="text-blue-800 font-bold text-lg tracking-wide">
          InsuranceConnect
        </span>
        <span className="text-blue-600 text-xs font-medium -mt-1">
          Professional Network
        </span>
      </div>
    </div>
  );
}
