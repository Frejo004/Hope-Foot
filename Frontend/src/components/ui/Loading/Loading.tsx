import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  type?: 'spinner' | 'skeleton' | 'pulse';
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({ 
  size = 'md', 
  type = 'spinner',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  if (type === 'spinner') {
    return (
      <div className={`${sizeClasses[size]} ${className}`}>
        <div className="animate-spin rounded-full border-2 border-gray-300 border-t-green-600"></div>
      </div>
    );
  }

  if (type === 'skeleton') {
    return (
      <div className={`animate-pulse space-y-3 ${className}`}>
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>
    );
  }

  return (
    <div className={`flex space-x-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="w-2 h-2 bg-green-600 rounded-full animate-pulse"
          style={{ animationDelay: `${i * 0.2}s` }}
        ></div>
      ))}
    </div>
  );
};

export default Loading;