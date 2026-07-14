import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center px-8 py-4 font-sans text-sm font-semibold tracking-[0.15em] uppercase transition-all duration-300 rounded-lg backdrop-blur-md shadow-lg';
  
  const variants = {
    primary: 'bg-antique-gold/30 border border-antique-gold/50 text-ivory hover:bg-antique-gold/50 hover:border-antique-gold',
    secondary: 'bg-white/5 border border-antique-gold/30 text-antique-gold hover:bg-white/10 hover:border-antique-gold',
    dark: 'bg-royal-navy/40 border border-white/20 text-ivory hover:bg-royal-navy/60 hover:border-white/40'
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
