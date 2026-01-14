import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import Logo from './Logo';

interface NavbarProps {
  currentPath?: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath = '#/' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '#/' && currentPath === '#/') return true;
    if (href !== '#/' && currentPath.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0F1E2E]/95 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#/" className="flex items-center space-x-3 group shrink-0">
            <Logo className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110" light={true} />
            <div className="flex flex-col">
              <span className="text-sm md:text-lg font-bold tracking-[0.2em] text-[#F7F5F0] serif leading-tight uppercase">HARRINGTON</span>
              <span className="text-[8px] md:text-[9px] tracking-[0.5em] text-[#C6A75E] font-semibold uppercase -mt-0.5 md:-mt-1">AND CO</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-[10px] font-bold uppercase tracking-[0.25em] transition-all relative group py-2 ${
                    active ? 'text-[#C6A75E]' : 'text-[#F7F5F0]/70 hover:text-[#C6A75E]'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-[#C6A75E] transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              );
            })}
            <a
              href="#/contact"
              className="px-5 py-2 lg:px-6 lg:py-2.5 border border-[#C6A75E] text-[#C6A75E] text-[10px] font-bold uppercase tracking-widest hover:bg-[#C6A75E] hover:text-[#0F1E2E] transition-all duration-300 whitespace-nowrap"
            >
              Consultation
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[#F7F5F0] p-2 hover:text-[#C6A75E] transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Redesigned Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#0F1E2E] z-50 transform transition-transform duration-500 ease-in-out border-l border-[#C6A75E]/20 shadow-[-20px_0_60px_rgba(0,0,0,0.5)] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full p-8 pt-24">
          <button 
            onClick={() => setIsOpen(false)} 
            className="absolute top-8 right-8 text-[#F7F5F0]"
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="flex flex-col space-y-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-bold serif tracking-wider py-2 border-b border-white/5 transition-colors ${isActive(link.href) ? 'text-[#C6A75E] border-[#C6A75E]/20' : 'text-[#F7F5F0]'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#/contact"
              onClick={() => setIsOpen(false)}
              className="mt-8 px-6 py-4 bg-[#C6A75E] text-[#0F1E2E] font-bold uppercase tracking-widest text-center text-xs"
            >
              Book Consultation
            </a>
          </div>

          <div className="mt-auto pb-8">
            <p className="text-[10px] text-white/30 tracking-[0.3em] uppercase mb-4">Harrington and Co</p>
            <div className="w-12 h-0.5 bg-[#C6A75E]"></div>
          </div>
        </div>
      </div>
      
      {/* Overlay Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40 transition-opacity" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;