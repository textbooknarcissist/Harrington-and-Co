
import React from 'react';
import { Scale, Shield, Briefcase, Users, FileText, Landmark, ArrowRight } from 'lucide-react';
import { PRACTICE_AREAS } from '../constants';
import Logo from '../components/Logo';

const iconMap: { [key: string]: React.ReactNode } = {
  Scale: <Scale className="w-10 h-10" />,
  Shield: <Shield className="w-10 h-10" />,
  Briefcase: <Briefcase className="w-10 h-10" />,
  Users: <Users className="w-10 h-10" />,
  FileText: <FileText className="w-10 h-10" />,
  Landmark: <Landmark className="w-10 h-10" />,
};

const PracticeAreasPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Premium Hero Header */}
      <section className="bg-[#1a2b23] py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <Logo className="w-[600px] h-[600px]" light={true} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-[#d4af37] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Our Expertise</span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 serif leading-tight">
              Legal Services <br /> Tailored for Success.
            </h1>
            <div className="w-24 h-1 bg-[#d4af37] mb-8"></div>
            <p className="text-xl text-white/70 font-light leading-relaxed">
              Greyline Partners provides a comprehensive suite of legal services designed to meet the complex needs of modern businesses and individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PRACTICE_AREAS.map((area) => (
              <div 
                key={area.id} 
                className="group relative bg-white p-10 border border-slate-100 hover:border-[#d4af37]/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(26,43,35,0.05)]"
              >
                {/* Number Background Decoration */}
                <div className="absolute top-8 right-8 text-6xl font-bold text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 serif pointer-events-none">
                  0{area.id}
                </div>

                <div className="mb-10 text-[#d4af37] group-hover:scale-110 transition-transform duration-500 origin-left">
                  {iconMap[area.icon] || <FileText className="w-10 h-10" />}
                </div>

                <h3 className="text-2xl font-bold text-[#1a2b23] mb-6 serif transition-colors group-hover:text-[#d4af37]">
                  {area.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed mb-10 font-light">
                  {area.description} Our firm combines deep industrial knowledge with innovative legal strategy to protect your interests and foster sustainable growth.
                </p>

                <div className="pt-6 border-t border-slate-50">
                  <a 
                    href="#/contact" 
                    className="inline-flex items-center text-[10px] font-bold text-[#1a2b23] uppercase tracking-[0.3em] group/btn transition-colors hover:text-[#d4af37]"
                  >
                    Request Consultation 
                    <ArrowRight className="ml-3 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-2" />
                  </a>
                </div>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-r-[20px] border-transparent group-hover:border-r-[#d4af37]/20 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Approach Works */}
      <section className="py-24 bg-[#1a2b23]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl font-bold text-white serif">The Intersection of Innovation and Tradition</h2>
              <p className="text-white/60 leading-relaxed text-lg font-light">
                We don't just provide legal advice; we provide strategic partnership. Our services are built on three core pillars that ensure we remain the advantage you need in complex legal environments.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-[#d4af37]/30 flex items-center justify-center flex-shrink-0 text-[#d4af37] font-bold serif">1</div>
                  <div>
                    <h4 className="text-white font-bold mb-2 serif text-lg">Cross-Border Capability</h4>
                    <p className="text-white/40 text-sm">Managing complex multijurisdictional matters with a singular, high standard of excellence.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-[#d4af37]/30 flex items-center justify-center flex-shrink-0 text-[#d4af37] font-bold serif">2</div>
                  <div>
                    <h4 className="text-white font-bold mb-2 serif text-lg">Data-Driven Strategy</h4>
                    <p className="text-white/40 text-sm">Utilizing emerging technology to predict outcomes and mitigate risks before they manifest.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-[#d4af37]/30 flex items-center justify-center flex-shrink-0 text-[#d4af37] font-bold serif">3</div>
                  <div>
                    <h4 className="text-white font-bold mb-2 serif text-lg">Personal Partner Involvement</h4>
                    <p className="text-white/40 text-sm">Ensuring every brief receives the direct oversight and expertise of our senior partners.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-white/5 p-4 border border-white/10 relative group overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" 
                  alt="Modern Office Space" 
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[#1a2b23]/40"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <Logo className="w-32 h-32 opacity-20" light={true} />
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#d4af37] -z-10 opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-[#1a2b23] mb-8 serif">Ready to move forward?</h2>
          <p className="text-slate-600 mb-12 text-lg">
            Let us discuss how our specialized expertise can provide the results you need. Schedule a confidential consultation with one of our partners today.
          </p>
          <a 
            href="#/contact" 
            className="inline-block px-12 py-5 bg-[#d4af37] text-[#1a2b23] font-bold uppercase tracking-[0.2em] text-xs hover:bg-[#1a2b23] hover:text-white transition-all duration-300 shadow-xl"
          >
            Connect with Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreasPage;
