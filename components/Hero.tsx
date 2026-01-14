import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-start overflow-hidden pt-48 md:pt-64 lg:pt-72">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000"
          alt="Luxury Law Office"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0F1E2E]/85"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <span className="text-[#C6A75E] font-bold tracking-[0.5em] uppercase text-[10px] md:text-xs mb-8 block animate-in fade-in slide-in-from-top-4 duration-1000">
          Visionary Counsel • Decisive Action
        </span>
        <h1 className="text-4xl md:text-7xl lg:text-8xl text-[#F7F5F0] font-bold leading-[1.1] mb-10 serif animate-in fade-in slide-in-from-bottom-6 duration-1000">
          Legal Excellence <br /> Without Compromise.
        </h1>
        <p className="text-base md:text-xl text-[#F7F5F0]/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
          Harrington and Co provides bespoke legal advisory and representation, focused on delivering measurable results in complex commercial environments.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500">
          <a
            href="#/contact"
            className="w-full sm:w-auto px-10 py-5 bg-[#C6A75E] text-[#0F1E2E] font-bold rounded-sm hover:bg-[#F7F5F0] hover:text-[#0F1E2E] transition-all duration-300 tracking-[0.2em] uppercase text-[10px]"
          >
            Schedule Consultation
          </a>
          <a
            href="#/practice"
            className="w-full sm:w-auto px-10 py-5 bg-transparent border border-[#F7F5F0]/30 text-[#F7F5F0] font-bold rounded-sm hover:bg-[#F7F5F0] hover:text-[#0F1E2E] hover:border-[#F7F5F0] transition-all duration-300 tracking-[0.2em] uppercase text-[10px]"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;