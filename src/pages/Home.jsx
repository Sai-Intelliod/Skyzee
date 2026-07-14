import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Button from '../components/Button';
import ImageCard from '../components/ImageCard';
import DirectorCard from '../components/DirectorCard';
import heroBg from '../assets/hero_background.png';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-royal-navy">
        <div className="absolute inset-0 z-0 bg-royal-navy/20">
          <img 
            src={heroBg} 
            alt="Luxury modern tower at dusk" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="max-w-5xl mx-auto flex flex-col items-center"
          >
            <p className="text-antique-gold uppercase tracking-[0.3em] text-sm md:text-base font-semibold font-sans mb-6">Skyzee Projects</p>
            <h1 className="text-ivory font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8 text-center text-shadow-sm">
              At Skyzee Projects, we craft more than just buildings &mdash; we craft experiences.
            </h1>
            <Link to="/services">
              <Button variant="primary">Explore Projects</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Strip */}
      <Section bg="ivory" className="text-center border-b border-black-accent/5">
        <div className="max-w-4xl mx-auto">
          <p className="font-serif text-2xl md:text-4xl text-royal-navy leading-relaxed mb-6">
            Rooted in timeless design, sustainability, and intentional architecture, our developments set a new benchmark for elevated living across India.
          </p>
          <p className="font-sans text-lg text-black-accent/70 leading-relaxed">
            Every Skyzee property is a curated masterpiece, harmonizing aesthetics with functionality, and elegance with purpose. We don’t just build high-rises — we build legacies.
          </p>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section bg="royal-navy">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-antique-gold uppercase tracking-[0.2em] text-sm md:text-base font-semibold font-sans mb-4">Portfolio</h2>
            <h3 className="text-ivory font-serif text-4xl md:text-5xl">Curated Masterpieces</h3>
          </div>
          <Link to="/services">
            <Button variant="secondary">View All</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ImageCard 
            image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            title="The Azure Tower"
            location="Banjara Hills, Hyderabad"
            tagline="Residential"
          />
          <ImageCard 
            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            title="Aria Corporate"
            location="BKC, Mumbai"
            tagline="Commercial"
          />
          <ImageCard 
            image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            title="Lumina Residences"
            location="Whitefield, Bangalore"
            tagline="Residential"
          />
        </div>
      </Section>

      {/* Mission / Vision Split Layouts */}
      <section>
        {/* Mission */}
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto min-h-[50vh] relative">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Interior lounge with warm lighting" className="w-full h-full object-cover" />
            
            <div className="absolute bottom-12 right-12 lg:-right-16 z-20 hidden md:block">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="glass-panel p-8 max-w-sm shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-royal-navy/60 -z-10 pointer-events-none"></div>
                <p className="font-serif text-2xl text-ivory mb-4 leading-snug">"A timeless expression of ambition and sophistication."</p>
                <div className="w-12 h-[1px] bg-antique-gold"></div>
              </motion.div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-royal-navy text-ivory flex items-center justify-center p-8 sm:p-12 md:p-24">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-lg"
            >
              <h2 className="text-antique-gold uppercase tracking-[0.2em] text-sm md:text-base font-semibold font-sans mb-4">Our Mission</h2>
              <h3 className="text-ivory font-serif text-2xl sm:text-3xl md:text-5xl mb-6">Elevating the standard of living through intentional design.</h3>
              <p className="text-ivory/70 font-sans leading-relaxed mb-8">
                At SkyZee Projects, we envision a future where architecture transcends mere functionality to become a timeless expression of ambition, sophistication, and thoughtful design. Our mission is to shape iconic spaces that harmoniously unite innovation with elegance—transforming everyday living into an elevated experience.
              </p>
              <Link to="/about">
                <Button variant="secondary">Read More</Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto min-h-[50vh] relative">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Corporate architectural details" className="w-full h-full object-cover" />
            
            <div className="absolute top-12 left-12 lg:-left-16 z-20 hidden md:block">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="glass-panel p-8 max-w-sm shadow-2xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-royal-navy/60 -z-10 pointer-events-none"></div>
                <p className="font-serif text-2xl text-ivory mb-4 leading-snug">"Redefining urban living with architectural excellence."</p>
                <div className="w-12 h-[1px] bg-antique-gold"></div>
              </motion.div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-ivory text-royal-navy flex items-center justify-center p-8 sm:p-12 md:p-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-lg"
            >
              <h2 className="text-antique-gold uppercase tracking-[0.2em] text-sm md:text-base font-semibold font-sans mb-4">Our Vision</h2>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-5xl mb-6">A legacy of landmarks across India.</h3>
              <p className="text-royal-navy/70 font-sans leading-relaxed">
                We are redefining urban living through visionary residential and commercial developments across India. With a focus on architectural excellence, intelligent planning, and enduring quality, each project exemplifies our dedication to creating spaces that inspire and elevate everyday life.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directors Preview */}
      <Section bg="ivory" className="pt-32 pb-16">
        <div className="text-center mb-20">
          <h2 className="text-antique-gold uppercase tracking-[0.2em] text-sm md:text-base font-semibold font-sans mb-4">Leadership</h2>
          <h3 className="font-serif text-4xl md:text-5xl text-royal-navy">The Visionaries</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 max-w-6xl mx-auto">
          <DirectorCard 
            image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            name="Venkatesh Vegi"
            title="Director"
            bio={["He holds a Post Graduate Diploma in Management (MIS) from IIAM and brings over 16 years of rich, cross-functional experience in the real estate sector. His global outlook and strategic mindset are key drivers in advancing sustainable, inclusive, and forward-thinking developments. He is known for blending operational efficiency with long-term vision to deliver impactful results."]}
          />
          <DirectorCard 
            image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            name="Aashish Vegi"
            title="Director"
            bio={["He brings a strong background in private equity and entrepreneurship. He has been actively involved in building and scaling ventures at the intersection of technology and business. He combines strategic financial expertise with deep technological insight. He is focused on future-driven projects that merge innovation with real-world application."]}
          />
        </div>
        <div className="text-center mt-16">
           <Link to="/about">
              <Button variant="secondary">Meet the Team</Button>
           </Link>
        </div>
      </Section>

      {/* Stats Bar */}
      {/* <section className="relative py-24 overflow-hidden bg-royal-navy">
      
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-antique-gold/20 rounded-full mix-blend-screen filter blur-[100px]"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-900/40 rounded-full mix-blend-screen filter blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { number: "16+", label: "Years Experience" },
              { number: "24", label: "Projects Delivered" },
              { number: "5M+", label: "Sq. Ft. Developed" },
              { number: "3", label: "Major Cities" }
            ].map((stat, idx) => (
              <div key={idx} className="glass-panel p-8 text-center flex flex-col justify-center min-h-[160px]">
                <p className="font-serif text-4xl md:text-5xl text-antique-gold mb-2 text-shadow-sm">{stat.number}</p>
                <p className="font-sans text-xs uppercase tracking-[0.1em] text-ivory/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

    </main>
  );
};

export default Home;
