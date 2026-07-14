import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-royal-navy/70 backdrop-blur-md border-antique-gold/25 shadow-lg py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif text-ivory tracking-widest uppercase flex flex-col">
            <span>Skyzee</span>
            <span className="text-[10px] tracking-[0.3em] text-antique-gold -mt-1 font-sans">Projects</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-ivory text-sm font-sans tracking-[0.1em] uppercase relative group"
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-antique-gold transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-ivory p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 md:hidden backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-royal-navy z-50 shadow-2xl flex flex-col md:hidden border-l border-white/10"
            >
              <div className="flex justify-end p-6 border-b border-white/10">
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-ivory p-2 focus:outline-none hover:text-antique-gold transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-6 p-10 mt-10">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path}
                    className="text-ivory font-serif text-3xl tracking-wide hover:text-antique-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-10 pb-12">
                <p className="text-antique-gold text-xs tracking-[0.2em] uppercase font-sans mb-2">Get in touch</p>
                <p className="text-ivory/70 text-sm font-sans">contact@skyzeeprojects.com<br/>+91 98765 43210</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
