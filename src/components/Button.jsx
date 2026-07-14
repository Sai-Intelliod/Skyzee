import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-4 font-sans text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300';
  
  const variants = {
    primary: 'bg-antique-gold text-royal-navy hover:bg-[#A3854E] hover:shadow-lg',
    secondary: 'bg-transparent border border-antique-gold text-antique-gold hover:bg-antique-gold hover:text-royal-navy',
    dark: 'bg-royal-navy text-ivory hover:bg-[#08152A] hover:shadow-lg border border-royal-navy'
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
