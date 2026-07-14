import React from 'react';

const ImageCard = ({ image, title, location, tagline }) => {
  return (
    <div className="group relative overflow-hidden aspect-[3/4] sm:aspect-[4/5] bg-royal-navy cursor-pointer">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      
      {/* Subtle gold border on hover */}
      <div className="absolute inset-4 border border-antique-gold/0 group-hover:border-antique-gold/40 transition-colors duration-500 z-10 pointer-events-none"></div>

      <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="glass-panel p-6">
          <p className="text-antique-gold text-[10px] uppercase tracking-[0.2em] font-sans mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {tagline}
          </p>
          <h3 className="text-ivory font-serif text-2xl mb-1">{title}</h3>
          <p className="text-ivory/70 font-sans text-sm tracking-wide">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
