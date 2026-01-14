import React from 'react';
import ContactSection from '../components/ContactSection';
import Logo from '../components/Logo';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0]">
      {/* Dark Hero Header */}
      <section className="bg-[#0F1E2E] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <Logo className="w-[500px] h-[500px]" light={true} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-[#C6A75E] font-bold tracking-[0.4em] uppercase text-xs mb-6 block">Direct Access</span>
          <h1 className="text-4xl md:text-7xl font-bold text-[#F7F5F0] mb-8 serif leading-tight">
            Consult the Firm.
          </h1>
          <div className="w-24 h-1 bg-[#C6A75E] mb-8 mx-auto"></div>
          <p className="max-w-2xl text-lg md:text-xl text-[#F7F5F0]/70 font-light leading-relaxed mx-auto">
            We respond to elite inquiries with the urgency and discretion they command.
          </p>
        </div>
      </section>

      {/* This component is now Dark bg */}
      <ContactSection />
      
      {/* Dark Map Section */}
      <div className="w-full h-[500px] bg-[#0F1E2E] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center grayscale"></div>
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[2px]">
          <div className="text-center px-6 bg-[#F7F5F0] p-10 md:p-16 border border-[#C6A75E]/30 shadow-[0_50px_100px_rgba(0,0,0,0.4)]">
            <h3 className="text-xl md:text-2xl font-bold text-[#0F1E2E] mb-4 serif uppercase tracking-widest">Global Presence</h3>
            <p className="text-[#C6A75E] font-bold text-[10px] md:text-xs tracking-[0.4em] mb-8 uppercase">LAGOS • LONDON • DUBAI</p>
            <p className="text-slate-500 font-light max-w-xs mx-auto text-sm">Harrington House, Financial District, Lagos. Secure deployment across 24+ jurisdictions.</p>
            <div className="mt-8 flex justify-center items-center space-x-4">
               <div className="w-2 h-2 rounded-full bg-[#C6A75E] animate-ping"></div>
               <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#0F1E2E]">Operational Network Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;