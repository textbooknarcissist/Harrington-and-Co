
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b23] mb-16 serif">What Client Say About Us</h2>
        
        <div className="relative min-h-[300px] flex items-center justify-center px-12 md:px-24">
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute left-0 text-[#d4af37] hover:scale-125 transition-transform"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          
          <div className="transition-all duration-700 animate-in fade-in zoom-in-95">
            <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light mb-12 max-w-3xl mx-auto">
              {TESTIMONIALS[activeIndex].content}
            </p>
            <div className="space-y-1">
              <h4 className="text-xl font-bold text-[#1a2b23] serif">{TESTIMONIALS[activeIndex].name}</h4>
              <p className="text-[#d4af37] font-medium text-sm tracking-widest uppercase">{TESTIMONIALS[activeIndex].role}</p>
            </div>
          </div>

          <button 
            onClick={next}
            className="absolute right-0 text-[#d4af37] hover:scale-125 transition-transform"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-3 mt-12">
          {TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'bg-[#d4af37] w-8' : 'bg-slate-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
