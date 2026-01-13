
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Law Office"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#1a2b23]/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <span className="text-[#d4af37] font-bold tracking-[0.4em] uppercase text-xs mb-6 block animate-in fade-in slide-in-from-top-4 duration-1000">
          Strategic Thinkers • Skilled Advocates
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.1] mb-10 serif animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Legal Excellence <br /> Without Compromise.
        </h1>
        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          Greyline Partners provides bespoke legal advisory and representation, focused on delivering measurable results in complex commercial environments.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <a
            href="#/contact"
            className="w-full sm:w-auto px-10 py-5 bg-[#d4af37] text-[#1a2b23] font-bold rounded-sm hover:bg-white hover:text-[#1a2b23] transition-all duration-300 tracking-[0.2em] uppercase text-xs"
          >
            Schedule Consultation
          </a>
          <a
            href="#/practice"
            className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/30 text-white font-bold rounded-sm hover:bg-white hover:text-[#1a2b23] hover:border-white transition-all duration-300 tracking-[0.2em] uppercase text-xs"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#fdfcfb] to-transparent"></div>
    </section>
  );
};

export default Hero;
