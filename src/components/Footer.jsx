import React from 'react';
import { Link } from 'react-router-dom';

const InstagramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>;
const LinkedinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;

const Footer = () => {
  return (
    <footer className="bg-black-accent pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-serif text-ivory tracking-widest uppercase flex flex-col mb-6 inline-block">
              <span>Skyzee</span>
              <span className="text-[10px] tracking-[0.3em] text-antique-gold -mt-1 font-sans">Projects</span>
            </Link>
            <p className="text-ivory/60 font-sans text-sm leading-relaxed max-w-xs">
              Crafting experiences, not just buildings. Timeless design and intentional architecture for the modern world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-antique-gold text-xs tracking-[0.2em] uppercase font-sans mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {['Home', 'About', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-ivory/80 hover:text-antique-gold text-sm font-sans transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-antique-gold text-xs tracking-[0.2em] uppercase font-sans mb-6">Contact</h4>
            <address className="not-italic text-ivory/80 text-sm font-sans flex flex-col gap-4">
              <p>
                123 Jubilee Hills Road<br />
                Hyderabad, Telangana 500033
              </p>
              <p>
                <a href="mailto:contact@skyzeeprojects.com" className="hover:text-antique-gold transition-colors">
                  contact@skyzeeprojects.com
                </a>
                <br />
                <a href="tel:+919876543210" className="hover:text-antique-gold transition-colors">
                  +91 98765 43210
                </a>
              </p>
            </address>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-antique-gold text-xs tracking-[0.2em] uppercase font-sans mb-6">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-ivory/80 hover:bg-antique-gold hover:text-royal-navy hover:border-antique-gold transition-all duration-300">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-ivory/80 hover:bg-antique-gold hover:text-royal-navy hover:border-antique-gold transition-all duration-300">
                <LinkedinIcon />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-ivory/80 hover:bg-antique-gold hover:text-royal-navy hover:border-antique-gold transition-all duration-300">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-ivory/40 text-xs font-sans">
            &copy; {new Date().getFullYear()} Skyzee Projects India Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-ivory/40 hover:text-ivory text-xs font-sans transition-colors">Privacy Policy</a>
            <a href="#" className="text-ivory/40 hover:text-ivory text-xs font-sans transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
