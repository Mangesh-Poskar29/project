import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  to, 
  href,
  variant = 'primary', 
  size = 'md',
  className = '',
  onClick
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all transform hover:scale-105 rounded-full";
  
  const variantStyles = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-md",
    secondary: "bg-secondary-500 hover:bg-secondary-600 text-white shadow-md",
    outline: "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
    text: "text-primary-600 hover:text-primary-700 underline"
  };
  
  const sizeStyles = {
    sm: "text-sm px-4 py-1.5",
    md: "px-6 py-2.5",
    lg: "text-lg px-8 py-3"
  };
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;