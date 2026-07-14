import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ 
  children, 
  className = '', 
  id, 
  bg = 'ivory', 
  animate = true,
  delay = 0 
}) => {
  const bgClasses = {
    ivory: 'bg-ivory',
    navy: 'bg-royal-navy',
    'royal-navy': 'bg-royal-navy',
  };

  const ContentWrapper = animate ? motion.div : 'div';
  const animationProps = animate ? {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }
  } : {};

  return (
    <section id={id} className={`py-16 md:py-24 lg:py-32 ${bgClasses[bg]} ${className}`}>
      <div className="container mx-auto px-5 md:px-12 lg:px-24">
        <ContentWrapper {...animationProps}>
          {children}
        </ContentWrapper>
      </div>
    </section>
  );
};

export default Section;
