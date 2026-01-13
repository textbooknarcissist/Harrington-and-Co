
import React from 'react';
import { Target, Eye, Star, CheckCircle2, Phone, Instagram, Twitter, Facebook } from 'lucide-react';
import Logo from '../components/Logo';
import { LAWYERS } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 bg-[#F7F5F0]">
      {/* 1. Why Choose Us Section */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0F1E2E] serif leading-tight">
                The law firm built <br /> for Boardrooms and <br /> Courtrooms.
              </h2>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#0F1E2E] serif">Why Choose Us?</h3>
                <p className="text-[#4A5568] leading-relaxed text-lg font-light">
                  We operate at the intersection of traditional legal practice, business and emerging innovations, combining legal excellence and strategic insight that turns challenges to opportunities and ambition into success.
                </p>
                <p className="text-[#4A5568] leading-relaxed font-light">
                  We help our clients navigate challenges ranging from dispute resolution to business structuring and compliance, data privacy, IP and technology-related matters.
                </p>
                <p className="text-[#4A5568] leading-relaxed font-light">
                  Whether we are representing a client in court, safeguarding data systems, protecting IP, advising on technology regulations, or guiding businesses through governance and compliance, our goal remains the same: to provide world class legal solutions that drive results.
                </p>
              </div>

              {/* Professionalism Stats */}
              <div className="pt-8 border-t border-[#8A6F3E]/20">
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center space-x-2 text-[#C6A75E]">
                    <CheckCircle2 size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0F1E2E]">Expertise</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#C6A75E]">
                    <CheckCircle2 size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0F1E2E]">Integrity</span>
                  </div>
                  <div className="flex items-center space-x-2 text-[#C6A75E]">
                    <CheckCircle2 size={18} />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0F1E2E]">Professionalism</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex text-[#C6A75E]">
                    {[1, 2, 3, 4].map(i => <Star key={i} size={20} fill="#C6A75E" />)}
                    <Star size={20} className="text-slate-200" fill="#e2e8f0" />
                  </div>
                  <div>
                    <span className="text-xl font-bold text-[#0F1E2E]">4.5</span>
                    <span className="text-[#4A5568]/60 text-sm ml-2">out of 5 based on 10,250 reviews</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 p-4 bg-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
                  alt="Justice Statue" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border border-white/30 pointer-events-none"></div>
                <div className="absolute bottom-12 left-0 right-0 flex justify-center">
                   <div className="bg-[#F7F5F0]/90 backdrop-blur-sm px-10 py-6 flex items-center gap-4 border border-[#8A6F3E]/10 shadow-lg">
                      <Logo className="w-12 h-12" />
                      <div className="text-left uppercase">
                        <p className="text-xl font-bold tracking-[0.2em] text-[#0F1E2E] serif leading-none">HARRINGTON</p>
                        <p className="text-[10px] tracking-[0.4em] text-[#C6A75E] font-bold uppercase">AND CO</p>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Numbered Strategic Pillars */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden flex items-center justify-center">
            <Logo className="w-[800px] h-[800px]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { 
                num: '01', 
                title: 'Innovative Culture', 
                desc: 'We anticipate change, leverage emerging technologies, and design innovative legal solutions to manage risks and enhance efficiency.' 
              },
              { 
                num: '02', 
                title: 'Strategic Approach', 
                desc: 'We evaluate matters through multiple lenses, assess risks, map outcomes and provide strategic legal solutions that give our clients a measurable advantage.' 
              },
              { 
                num: '03', 
                title: 'Commitment to Excellence', 
                desc: 'We operate with the highest level of precision, discipline, and standards that meet world class benchmarks.' 
              },
            ].map((pillar) => (
              <div key={pillar.num} className="bg-[#F7F5F0] p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-t-4 border-[#C6A75E] group hover:-translate-y-2 transition-transform duration-500">
                <span className="text-4xl font-bold text-[#C6A75E] serif mb-6 block">{pillar.num}</span>
                <h3 className="text-2xl font-bold text-[#0F1E2E] serif mb-4">{pillar.title}</h3>
                <p className="text-[#4A5568] leading-relaxed text-sm font-light">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Section */}
      <section className="bg-[#0F1E2E] text-[#F7F5F0] flex flex-col lg:flex-row min-h-[600px]">
        <div className="lg:w-1/2 relative overflow-hidden group">
          <img 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200" 
            alt="Gavel" 
            className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#0F1E2E]/40"></div>
          <div className="absolute bottom-12 left-12 right-12 bg-[#0F1E2E]/90 p-10 border-l-4 border-[#C6A75E]">
            <p className="text-xl md:text-2xl font-light italic mb-6 leading-relaxed text-[#F7F5F0]">
              "Injustice anywhere is a threat to justice everywhere."
            </p>
            <div>
              <p className="font-bold text-lg serif text-[#F7F5F0]">Martin Luther King Jr</p>
              <div className="flex justify-end mt-[-10px]">
                <span className="text-[#C6A75E] text-6xl serif opacity-20">”</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center space-y-16 bg-[#0F1E2E]">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold serif mb-10 leading-tight text-[#F7F5F0]">
              Your advantage in <br /> complex legal <br /> matters
            </h2>
          </div>
          
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 border border-[#C6A75E] flex items-center justify-center rounded-full">
                 <Target className="text-[#C6A75E]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold serif mb-3 text-[#F7F5F0]">Our Mission</h3>
                <p className="text-[#F7F5F0]/60 font-light leading-relaxed">
                  To deliver world class legal solutions tailored to cater to our client's needs.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 border border-[#C6A75E] flex items-center justify-center rounded-full">
                 <Eye className="text-[#C6A75E]" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold serif mb-3 text-[#F7F5F0]">Our Vision</h3>
                <p className="text-[#F7F5F0]/60 font-light leading-relaxed">
                  To be a globally recognized law firm known for excellence, innovation, and client-centered service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Meet our Lawyers Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F1E2E] serif">Meet our Lawyers</h2>
            <a 
              href="#/contact" 
              className="px-10 py-4 bg-[#C6A75E] text-[#0F1E2E] font-bold uppercase tracking-widest text-xs hover:bg-[#0F1E2E] hover:text-[#F7F5F0] transition-all duration-300"
            >
              View All Lawyers
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {LAWYERS.map((lawyer) => (
              <div key={lawyer.id} className="group text-center">
                <div className="relative overflow-hidden mb-8 aspect-[4/5] bg-slate-100 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <img 
                    src={lawyer.imageUrl} 
                    alt={lawyer.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0F1E2E]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-[#C6A75E] transition-colors cursor-pointer">
                       <Instagram size={18} className="text-white" />
                    </div>
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-[#C6A75E] transition-colors cursor-pointer">
                       <Twitter size={18} className="text-white" />
                    </div>
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-[#C6A75E] transition-colors cursor-pointer">
                       <Facebook size={18} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#0F1E2E] serif">{lawyer.name}</h3>
                  <p className="text-[#C6A75E] font-medium text-xs uppercase tracking-[0.2em]">{lawyer.role}</p>
                  <p className="text-[#4A5568] font-bold tracking-tight text-sm">{lawyer.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
