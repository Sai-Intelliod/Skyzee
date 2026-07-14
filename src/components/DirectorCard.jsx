import React from 'react';

const DirectorCard = ({ image, name, title, bio }) => {
  return (
    <div className="relative group overflow-hidden aspect-[3/4] sm:aspect-square md:aspect-[4/5] cursor-pointer">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
      />
      
      {/* Subtle gold border on hover */}
      <div className="absolute inset-4 border border-antique-gold/0 group-hover:border-antique-gold/40 transition-colors duration-500 z-10 pointer-events-none"></div>

      <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="glass-panel-light relative overflow-hidden p-6 md:p-8">
          {/* Inner dark scrim for contrast over varying image lightness */}
          <div className="absolute inset-0 bg-royal-navy/60 -z-10 pointer-events-none"></div>
          
          <div className="w-12 h-[1px] bg-antique-gold mb-4"></div>
          <h3 className="text-ivory font-serif text-2xl md:text-3xl mb-1">{name}</h3>
          <p className="text-antique-gold uppercase tracking-[0.2em] text-[10px] font-sans mb-4 font-semibold">{title}</p>
          <div className="text-ivory/80 font-sans space-y-3 leading-relaxed text-xs md:text-sm">
            {bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorCard;
