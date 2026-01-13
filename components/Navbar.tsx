
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-[#0F1E2E]/80 backdrop-blur-md shadow-2xl py-2' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#/" className="flex items-center space-x-3 group">
            <Logo className="w-12 h-12 transition-transform duration-300 group-hover:scale-110" light={true} />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-[0.2em] text-[#F7F5F0] serif leading-tight uppercase">HARRINGTON</span>
              <span className="text-[10px] tracking-[0.5em] text-[#C6A75E] font-semibold uppercase -mt-1">AND CO</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-[#F7F5F0]/80 hover:text-[#C6A75E] transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C6A75E] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#/contact"
              className="px-6 py-2 border border-[#C6A75E] text-[#C6A75E] text-xs font-bold uppercase tracking-widest hover:bg-[#C6A75E] hover:text-[#0F1E2E] transition-all duration-300"
            >
              Consultation
            </a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#0F1E2E]/95 backdrop-blur-lg z-40 transition-transform duration-500 ease-in-out md:hidden ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full items-center justify-center space-y-8">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-[#F7F5F0]">
            <X className="w-8 h-8" />
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-[#F7F5F0] serif hover:text-[#C6A75E] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#/contact"
            onClick={() => setIsOpen(false)}
            className="px-10 py-4 bg-[#C6A75E] text-[#0F1E2E] font-bold uppercase tracking-widest text-sm"
          >
            Book Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
