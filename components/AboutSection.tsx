
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#F7F5F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#C6A75E]/5 rounded-full -z-10 animate-pulse"></div>
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Our legal team"
                className="w-full h-[600px] object-cover rounded-sm shadow-[0_35px_60px_-15px_rgba(15,30,46,0.3)] grayscale group-hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-6 -right-6 p-10 bg-[#0F1E2E] border-l-4 border-[#C6A75E] shadow-2xl hidden md:block">
                <p className="text-[#F7F5F0] text-lg font-bold serif italic mb-2">Excellence in practice.</p>
                <p className="text-[#C6A75E] text-xs font-bold uppercase tracking-widest">Harrington and Co</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Identity</span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1E2E] mb-8 serif leading-tight">
                Strategic Insight.<br />
                Sophisticated Advocacy.<br />
                Proven Results.
              </h2>
              <div className="w-16 h-1 bg-[#C6A75E] mb-8"></div>
            </div>

            <p className="text-[#4A5568] text-lg leading-relaxed font-light">
              Harrington and Co is a full-service commercial law firm dedicated to excellence, serving a diverse portfolio of domestic and international clients. Our expertise spans across multiple jurisdictions and sectors.
            </p>
            
            <p className="text-[#4A5568] leading-relaxed">
              We leverage our profound understanding of the legal and regulatory landscape to provide tailored solutions that drive business growth and protect client assets. Our reputation is built on <span className="text-[#0F1E2E] font-bold">precision</span>, <span className="text-[#0F1E2E] font-bold">meticulous attention to detail</span>, and an unwavering commitment to professional <span className="text-[#0F1E2E] font-bold">integrity</span>.
            </p>
            
            <div className="flex items-center space-x-12 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0F1E2E] serif">Lagos</div>
                <div className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-widest mt-1">Headquarters</div>
              </div>
              <div className="h-10 w-px bg-slate-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0F1E2E] serif">Abuja</div>
                <div className="text-[#C6A75E] text-[10px] font-bold uppercase tracking-widest mt-1">Regional Office</div>
              </div>
            </div>
            
            <div className="pt-6">
              <a
                href="#/about"
                className="inline-block px-10 py-5 bg-[#0F1E2E] text-[#F7F5F0] font-bold rounded-sm hover:bg-[#C6A75E] hover:text-[#0F1E2E] transition-all duration-300 tracking-[0.2em] uppercase text-xs shadow-xl"
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
