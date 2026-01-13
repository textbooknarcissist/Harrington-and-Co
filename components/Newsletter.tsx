
import React from 'react';
import Logo from './Logo';

const Newsletter: React.FC = () => {
  return (
    <section className="bg-[#1a2b23] py-16 border-b border-[#ffffff10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 lg:max-w-md">
            <div className="p-3 bg-white/5 border border-white/10 rounded-sm">
              <Logo className="w-16 h-16" light={true} />
            </div>
            <div>
              <p className="text-white text-lg font-medium leading-relaxed">
                Strategic Thinkers. Skilled Advocates. <br /> Legal Advisors.
              </p>
            </div>
          </div>

          <div className="w-full max-w-2xl">
            <h3 className="text-2xl font-bold text-white serif mb-6">Subscribe Our Newsletter</h3>
            <form className="flex flex-col sm:flex-row gap-0 shadow-2xl">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 bg-white text-[#1a2b23] focus:outline-none placeholder:text-slate-400"
              />
              <button className="bg-[#d4af37] text-[#1a2b23] px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-[#c19a2e] transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
