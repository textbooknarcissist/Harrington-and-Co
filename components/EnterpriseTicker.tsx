import React from 'react';

const EnterpriseTicker: React.FC = () => {
  const partners = [
    "DANGOTE", "MTN NIGERIA", "ZENITH BANK", "UBA GROUP", "AIRTEL AFRICA", 
    "TOTAL ENERGIES", "ACCESS BANK", "NLNG", "IHS TOWERS", "FIRST BANK"
  ];

  return (
    <section className="py-24 bg-[#0F1E2E] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F5F0] mb-4 serif">
            85% of Nigeria's Leading Enterprises <br className="hidden md:block" /> Choose Harrington & Co
          </h2>
          <p className="text-[#F7F5F0]/40 max-w-2xl mx-auto text-sm font-light leading-relaxed">
            Providing elite counsel to the continent's most ambitious commercial projects and financial institutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-center justify-center grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500 group">
              <span className="text-[#F7F5F0] font-bold tracking-[0.3em] text-[10px] md:text-xs group-hover:text-[#C6A75E]">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2"></div>
      <div className="absolute top-0 left-1/2 w-px h-full bg-white/5 -translate-x-1/2"></div>
    </section>
  );
};

export default EnterpriseTicker;