
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#fdfcfb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#d4af37]/5 rounded-full -z-10 animate-pulse"></div>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
                alt="Our legal team"
                className="w-full h-[600px] object-cover rounded-sm shadow-[0_35px_60px_-15px_rgba(26,43,35,0.3)] grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-6 -right-6 p-10 bg-[#1a2b23] border-l-4 border-[#d4af37] shadow-2xl hidden md:block">
                <p className="text-white text-lg font-bold serif italic mb-2">Excellence in practice.</p>
                <p className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">Greyline Partners LLP</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <span className="text-[#d4af37] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Identity</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b23] mb-8 serif leading-tight">
                Strategic Thinkers.<br />
                Skilled Advocates.<br />
                Legal Advisors.
              </h2>
              <div className="w-16 h-1 bg-[#d4af37] mb-8"></div>
            </div>

            <p className="text-slate-700 text-lg leading-relaxed font-light">
              Greyline Partners is a full-service commercial law firm based in Nigeria, serving a diverse portfolio of domestic and international clients. Our expertise spans across multiple jurisdictions and sectors.
            </p>
            
            <p className="text-slate-600 leading-relaxed">
              We leverage our profound understanding of the legal and regulatory landscape to provide tailored solutions that drive business growth and protect client assets. Our reputation is built on <span className="text-[#1a2b23] font-bold">precision</span>, <span className="text-[#1a2b23] font-bold">meticulous attention to detail</span>, and an unwavering commitment to professional <span className="text-[#1a2b23] font-bold">integrity</span>.
            </p>
            
            <div className="flex items-center space-x-12 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1a2b23] serif">Lagos</div>
                <div className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest mt-1">Headquarters</div>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#1a2b23] serif">Abuja</div>
                <div className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest mt-1">Regional Office</div>
              </div>
            </div>
            
            <div className="pt-6">
              <a
                href="#/about"
                className="inline-block px-10 py-5 bg-[#1a2b23] text-white font-bold rounded-sm hover:bg-[#d4af37] hover:text-[#1a2b23] transition-all duration-300 tracking-[0.2em] uppercase text-xs shadow-xl"
              >
                Our Complete Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
