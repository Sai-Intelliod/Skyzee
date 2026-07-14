import React from 'react';

const ImageCard = ({ image, title, location, tagline }) => {
  return (
    <div className="group relative overflow-hidden aspect-[3/4] sm:aspect-[4/5] bg-royal-navy cursor-pointer">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      
      {/* Dark gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-royal-navy/80 via-royal-navy/20 to-transparent z-10 pointer-events-none"></div>

      {/* Subtle gold border on hover */}
      <div className="absolute inset-4 border border-antique-gold/0 group-hover:border-antique-gold/40 transition-colors duration-500 z-20 pointer-events-none"></div>

      <div className="absolute bottom-4 left-4 right-4 z-30 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="bg-royal-navy/60 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-xl">
          <p className="text-antique-gold text-[10px] uppercase tracking-[0.2em] font-sans mb-2 font-bold shadow-sm">
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
