import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Building2, Landmark, PenTool, Leaf } from 'lucide-react';

const servicesList = [
  {
    id: 'residential',
    title: 'Residential Development',
    description: 'Creating ultra-luxury homes and high-rise apartments that redefine modern living. We focus on panoramic views, bespoke interiors, and world-class amenities to offer an unparalleled lifestyle.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'commercial',
    title: 'Commercial Development',
    description: 'Designing state-of-the-art workspaces and commercial hubs. Our commercial projects are built to foster productivity, innovation, and business growth within prime urban locations.',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'architectural',
    title: 'Architectural Design & Planning',
    description: 'Collaborating with renowned global architects to deliver landmark designs. Every curve, facade, and layout is meticulously planned to ensure aesthetic superiority and structural integrity.',
    icon: PenTool,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sustainable',
    title: 'Sustainable Development Consulting',
    description: 'Integrating eco-friendly practices, green building certifications, and energy-efficient systems into every project, ensuring our developments respect and protect the environment.',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

const Services = () => {
  return (
    <main className="bg-ivory">
      {/* Page Hero */}
      <section className="bg-royal-navy pt-32 pb-24 md:pt-40 md:pb-32 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-ivory font-serif text-4xl sm:text-5xl md:text-6xl mb-6">Our Expertise</h1>
            <p className="text-ivory/70 font-sans max-w-2xl mx-auto text-lg">
              Comprehensive real estate solutions driven by a commitment to excellence, innovation, and client satisfaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <Section bg="ivory" className="py-24">
        <div className="flex flex-col gap-24">
          {servicesList.map((service, index) => {
            const isEven = index % 2 === 0;
            const Icon = service.icon;
            
            return (
              <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                
                {/* Image */}
                <div className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden relative group">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 border-[16px] border-ivory/20 pointer-events-none"></div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="w-16 h-16 rounded-full bg-royal-navy flex items-center justify-center mb-8 border border-antique-gold/30 shadow-lg">
                    <Icon className="text-antique-gold" size={28} />
                  </div>
                  <h2 className="text-royal-navy font-serif text-2xl sm:text-3xl md:text-4xl mb-6">{service.title}</h2>
                  <div className="w-12 h-[1px] bg-antique-gold mb-6"></div>
                  <p className="text-black-accent/70 font-sans leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
                
              </div>
            );
          })}
        </div>
      </Section>
    </main>
  );
};

export default Services;
