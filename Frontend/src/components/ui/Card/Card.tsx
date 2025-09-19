import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'glass' | 'gradient';
  animate?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = true, 
  variant = 'default',
  animate = false,
  onClick
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variantClasses = {
    default: 'bg-white/90 backdrop-blur-sm shadow-lg border border-white/20 hover:shadow-xl',
    glass: 'glass shadow-xl border border-white/30',
    gradient: 'gradient-primary text-white shadow-xl'
  };
  
  const hoverClasses = hover ? 'hover-lift cursor-pointer transform hover:scale-[1.02]' : '';
  const animateClasses = animate ? 'animate-scaleIn' : '';
  
  const classes = [baseClasses, variantClasses[variant], hoverClasses, animateClasses, className]
    .filter(Boolean)
    .join(' ');
  
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
  const classes = ['px-6 py-4 border-b border-white/20', className].filter(Boolean).join(' ');
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => {
  const classes = ['px-6 py-4', className].filter(Boolean).join(' ');
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => {
  const classes = ['px-6 py-4 border-t border-white/20', className].filter(Boolean).join(' ');
  
  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;