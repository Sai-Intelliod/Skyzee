import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy submit handler
    alert("Thank you for your enquiry. Our team will contact you shortly.");
  };

  return (
    <main className="bg-royal-navy">
      {/* Page Hero */}
      <section className="bg-royal-navy pt-32 pb-24 md:pt-40 md:pb-32 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-ivory font-serif text-4xl sm:text-5xl md:text-6xl mb-6">Enquire Now</h1>
            <p className="text-ivory/70 font-sans max-w-2xl mx-auto text-lg">
              Begin your journey towards an extraordinary lifestyle. Reach out to our team to discuss opportunities and bespoke arrangements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Split Layout with Glassmorphism */}
      <section className="relative py-24 overflow-hidden">
        {/* Blurred Architectural Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Interior architecture" 
            className="w-full h-full object-cover filter blur-[8px] opacity-40 scale-105"
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Form Side - Glass Panel */}
            <div className="w-full lg:w-1/2">
              <div className="glass-panel p-8 md:p-12">
                <h2 className="text-antique-gold uppercase tracking-[0.2em] text-sm md:text-base font-semibold font-sans mb-4">Get in touch</h2>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory mb-8">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="firstName" className="text-ivory/70 font-sans text-sm tracking-wide">First Name</label>
                      <input type="text" id="firstName" required className="bg-white/5 border border-white/10 focus:border-antique-gold focus:ring-1 focus:ring-antique-gold outline-none px-4 py-3 text-ivory font-sans transition-all rounded-md" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="lastName" className="text-ivory/70 font-sans text-sm tracking-wide">Last Name</label>
                      <input type="text" id="lastName" required className="bg-white/5 border border-white/10 focus:border-antique-gold focus:ring-1 focus:ring-antique-gold outline-none px-4 py-3 text-ivory font-sans transition-all rounded-md" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-ivory/70 font-sans text-sm tracking-wide">Email Address</label>
                      <input type="email" id="email" required className="bg-white/5 border border-white/10 focus:border-antique-gold focus:ring-1 focus:ring-antique-gold outline-none px-4 py-3 text-ivory font-sans transition-all rounded-md" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-ivory/70 font-sans text-sm tracking-wide">Phone Number</label>
                      <input type="tel" id="phone" className="bg-white/5 border border-white/10 focus:border-antique-gold focus:ring-1 focus:ring-antique-gold outline-none px-4 py-3 text-ivory font-sans transition-all rounded-md" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="project" className="text-ivory/70 font-sans text-sm tracking-wide">Project Interest</label>
                    <select id="project" defaultValue="" className="bg-white/5 border border-white/10 focus:border-antique-gold focus:ring-1 focus:ring-antique-gold outline-none px-4 py-3 text-ivory font-sans transition-all appearance-none rounded-md">
                      <option value="" disabled className="text-royal-navy">Select a project</option>
                      <option value="azure" className="text-royal-navy">The Azure Tower</option>
                      <option value="aria" className="text-royal-navy">Aria Corporate</option>
                      <option value="lumina" className="text-royal-navy">Lumina Residences</option>
                      <option value="general" className="text-royal-navy">General Enquiry</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-ivory/70 font-sans text-sm tracking-wide">Message</label>
                    <textarea id="message" rows="5" required className="bg-white/5 border border-white/10 focus:border-antique-gold focus:ring-1 focus:ring-antique-gold outline-none px-4 py-3 text-ivory font-sans transition-all resize-none rounded-md"></textarea>
                  </div>

                  <div className="mt-4">
                    <Button type="submit" variant="primary" className="w-full md:w-auto">Submit Enquiry</Button>
                  </div>
                </form>
              </div>
            </div>

            {/* Details & Map Side */}
            <div className="w-full lg:w-1/2 flex flex-col gap-12 text-ivory">
              <div className="glass-panel p-8 md:p-12 h-full flex flex-col">
                <h2 className="text-antique-gold uppercase tracking-[0.2em] text-sm md:text-base font-semibold font-sans mb-4">Headquarters</h2>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ivory mb-8">Visit our office</h3>
                
                <div className="flex flex-col gap-6 flex-grow">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-antique-gold"><MapPin size={24} /></div>
                    <div>
                      <p className="font-sans font-semibold mb-1">Corporate Office</p>
                      <p className="text-ivory/70 font-sans">123 Jubilee Hills Road, Plot 45<br/>Hyderabad, Telangana 500033<br/>India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-antique-gold"><Phone size={24} /></div>
                    <div>
                      <p className="font-sans font-semibold mb-1">Phone</p>
                      <p className="text-ivory/70 font-sans">+91 98765 43210</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-antique-gold"><Mail size={24} /></div>
                    <div>
                      <p className="font-sans font-semibold mb-1">Email</p>
                      <p className="text-ivory/70 font-sans">contact@skyzeeprojects.com</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="w-full h-48 mt-8 border border-white/10 relative overflow-hidden rounded-md group">
                  <img 
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Map location" 
                    className="w-full h-full object-cover filter grayscale opacity-50 group-hover:opacity-80 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-10 h-10 bg-royal-navy/80 backdrop-blur-sm rounded-full flex items-center justify-center text-antique-gold shadow-xl border border-antique-gold/30">
                      <MapPin size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
