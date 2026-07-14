import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <main className="w-full">
      {/* Page Hero */}
      <section className="bg-royal-navy pt-32 pb-24 md:pt-40 md:pb-32 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-ivory font-serif text-4xl sm:text-5xl md:text-6xl mb-6">About Skyzee</h1>
            <p className="text-ivory/70 font-sans max-w-2xl mx-auto text-lg leading-relaxed">
              Rooted in timeless design, sustainability, and intentional architecture, our developments set a new benchmark for elevated living across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Full Mission & Vision */}
      <Section bg="ivory">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-antique-gold uppercase tracking-[0.2em] text-sm md:text-base font-semibold font-sans mb-4">Our Philosophy</h2>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-royal-navy leading-relaxed mb-12">
            Every Skyzee property is a curated masterpiece, harmonizing aesthetics with functionality, and elegance with purpose. We don’t just build high-rises — we build legacies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <h3 className="font-serif text-3xl text-royal-navy mb-6">Mission</h3>
            <p className="text-black-accent/70 font-sans leading-relaxed mb-6">
              At SkyZee Projects, we envision a future where architecture transcends mere functionality to become a timeless expression of ambition, sophistication, and thoughtful design. Our mission is to shape iconic spaces that harmoniously unite innovation with elegance—transforming everyday living into an elevated experience.
            </p>
            <p className="text-black-accent/70 font-sans leading-relaxed">
              Guided by an unwavering attention to detail and a passion for purposeful design, we are committed to crafting environments that inspire and endure. By merging aspirational aesthetics with practical accessibility, we deliver refined living spaces that embody distinction, comfort, and lasting value for discerning individuals and families.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-3xl text-royal-navy mb-6">Vision</h3>
            <p className="text-black-accent/70 font-sans leading-relaxed mb-6">
              We are redefining urban living through visionary residential and commercial developments across India. With a focus on architectural excellence, intelligent planning, and enduring quality, each project exemplifies our dedication to creating spaces that inspire and elevate everyday life.
            </p>
            <p className="text-black-accent/70 font-sans leading-relaxed">
              Our commitment to modern luxury, seamless connectivity, and environmentally responsible design drives us to deliver projects that not only meet the evolving needs of today’s urban dwellers but also stand as benchmarks for the future of sustainable development.
            </p>
          </div>
        </div>
      </Section>

      {/* Detailed Directors */}
      <Section bg="royal-navy">
        <div className="text-center mb-20">
          <h2 className="text-antique-gold uppercase tracking-[0.2em] text-sm md:text-base font-semibold font-sans mb-4">Leadership</h2>
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ivory">Board of Directors</h3>
        </div>
        
        <div className="flex flex-col gap-24 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center">
            <div className="w-full md:w-2/5 shrink-0 relative">
              <div className="aspect-[3/4] overflow-hidden bg-ivory">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Venkatesh Vegi" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -inset-4 border border-antique-gold/20 -z-10 translate-x-4 translate-y-4"></div>
            </div>
            <div className="w-full md:w-3/5">
              <div className="w-12 h-[1px] bg-antique-gold mb-6"></div>
              <h3 className="text-ivory font-serif text-3xl md:text-4xl mb-2">Venkatesh Vegi</h3>
              <p className="text-antique-gold uppercase tracking-[0.2em] text-sm font-sans mb-8">Director</p>
              <div className="text-ivory/70 font-sans space-y-6 leading-relaxed">
                <p>He holds a Post Graduate Diploma in Management (MIS) from IIAM and brings over 16 years of rich, cross-functional experience in the real estate sector.</p>
                <p>His global outlook and strategic mindset are key drivers in advancing sustainable, inclusive, and forward-thinking developments. He is known for blending operational efficiency with long-term vision to deliver impactful results.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse gap-12 lg:gap-16 items-center">
            <div className="w-full md:w-2/5 shrink-0 relative">
              <div className="aspect-[3/4] overflow-hidden bg-ivory">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Aashish Vegi" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -inset-4 border border-antique-gold/20 -z-10 -translate-x-4 translate-y-4"></div>
            </div>
            <div className="w-full md:w-3/5 text-left md:text-right flex flex-col md:items-end">
              <div className="w-12 h-[1px] bg-antique-gold mb-6"></div>
              <h3 className="text-ivory font-serif text-3xl md:text-4xl mb-2">Aashish Vegi</h3>
              <p className="text-antique-gold uppercase tracking-[0.2em] text-sm font-sans mb-8">Director</p>
              <div className="text-ivory/70 font-sans space-y-6 leading-relaxed text-left md:text-right">
                <p>He brings a strong background in private equity and entrepreneurship. He has been actively involved in building and scaling ventures at the intersection of technology and business.</p>
                <p>He combines strategic financial expertise with deep technological insight. He is focused on future-driven projects that merge innovation with real-world application.</p>
              </div>
            </div>
          </div>

        </div>
      </Section>
    </main>
  );
};

export default About;
