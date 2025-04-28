import React from 'react';
import { Waves } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <div className="relative">
      <Waves className={`text-primary-500 ${className}`} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/2 h-1/2 bg-secondary-400 rounded-full opacity-70"></div>
      </div>
    </div>
  );
};

export default Logo;