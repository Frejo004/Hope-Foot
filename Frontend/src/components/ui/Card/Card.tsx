import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'glass' | 'gradient';
  animate?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false, 
  variant = 'default',
  animate = false 
}) => {
  const baseClasses = 'rounded-lg transition-all-smooth';
  
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700',
    glass: 'glass shadow-lg',
    gradient: 'gradient-primary text-white shadow-lg'
  };
  
  const hoverClasses = hover ? 'hover-lift hover:shadow-lg cursor-pointer transform' : '';
  const animateClasses = animate ? 'animate-fade-in-up' : '';
  
  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${animateClasses} ${className}`}>
      {children}
    </div>
  );
};

export default Card;