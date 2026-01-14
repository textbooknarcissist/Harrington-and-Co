import React from 'react';
import Logo from './Logo';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-[#0F1E2E] py-24 border-t border-white/5 relative overflow-hidden">
      {/* Decorative subtle background element */}
      <div className="absolute -right-20 -bottom-20 opacity-[0.02] pointer-events-none">
        <Logo className="w-96 h-96" light={true} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-16">
          <div className="w-full xl:w-auto flex flex-col items-center xl:items-start text-center xl:text-left">
            <div className="flex items-center gap-6 mb-8 group">
              <div className="p-1 border border-[#C6A75E]/30 rounded-sm transition-colors group-hover:border-[#C6A75E]">
                <Logo className="w-16 h-16" light={true} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-2xl font-bold tracking-[0.25em] text-[#F7F5F0] serif uppercase leading-none mb-1">HARRINGTON</h4>
                <p className="text-[11px] tracking-[0.6em] text-[#C6A75E] font-bold uppercase">ESTABLISHED EXCELLENCE</p>
              </div>
            </div>
            <div className="max-w-md">
              <p className="text-[#F7F5F0]/80 text-xl font-light leading-relaxed serif italic">
                Visionary Counsel. Decisive Action. <br className="hidden md:block" /> Your Competitive Legal Advantage.
              </p>
              <p className="text-[#F7F5F0]/40 text-sm mt-4 font-light">
                Providing elite representation for the most complex modern legal challenges across Africa and beyond.
              </p>
            </div>
          </div>

          <div className="w-full max-w-2xl bg-white/5 p-10 backdrop-blur-sm border border-white/10 rounded-sm">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-[#F7F5F0] serif mb-3">Stay Informed</h3>
              <p className="text-[#F7F5F0]/50 text-sm font-light">Join our inner circle for exclusive legal briefs, regulatory updates, and firm insights.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-4" action="#" method="POST">
              <div className="flex-grow relative">
                <label htmlFor="newsletter-email" className="sr-only">Professional email address</label>
                <input
                  type="email"
                  id="newsletter-email"
                  name="newsletter-email"
                  autoComplete="email"
                  required
                  placeholder="Professional email address"
                  className="w-full px-6 py-4 bg-white/10 border border-white/10 text-white focus:outline-none focus:border-[#C6A75E] placeholder:text-white/30 transition-all font-light"
                />
              </div>
              <button type="submit" className="bg-[#C6A75E] text-[#0F1E2E] px-10 py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#F7F5F0] transition-all duration-300 shadow-xl">
                Subscribe
              </button>
            </form>
            <div className="flex items-center gap-2 mt-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C6A75E]"></div>
              <p className="text-white/30 text-[10px] uppercase tracking-widest">Privacy prioritized. No unsolicited spam.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;