import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0F1E2E] border-y border-white/5" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-[#C6A75E] font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Engagement</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F7F5F0] mb-8 serif">Book a Consultation</h2>
            <p className="text-[#F7F5F0]/60 mb-12 text-lg leading-relaxed font-light">
              Strategic counsel begins with a conversation. Reach out via the channels below or provide your details for a prioritized callback.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white/5 p-4 rounded-sm border border-white/10">
                  <Phone className="w-5 h-5 text-[#C6A75E]" />
                </div>
                <div className="ml-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#C6A75E]/70 mb-2">Priority Line</h3>
                  <a href="tel:09065624016" className="text-xl md:text-2xl font-bold text-[#F7F5F0] hover:text-[#C6A75E] transition-colors serif">
                    09065624016
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white/5 p-4 rounded-sm border border-white/10">
                  <Mail className="w-5 h-5 text-[#C6A75E]" />
                </div>
                <div className="ml-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#C6A75E]/70 mb-2">Secure Email</h3>
                  <a href="mailto:mfredebel@gmail.com" className="text-xl md:text-2xl font-bold text-[#F7F5F0] hover:text-[#C6A75E] transition-colors break-all serif">
                    mfredebel@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white/5 p-4 rounded-sm border border-white/10">
                  <MapPin className="w-5 h-5 text-[#C6A75E]" />
                </div>
                <div className="ml-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-[#C6A75E]/70 mb-2">The Office</h3>
                  <address className="not-italic text-xl md:text-2xl font-bold text-[#F7F5F0] serif leading-snug">
                    Harrington House, Lagos
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#F7F5F0] p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C6A75E]/5 rounded-bl-full -z-0"></div>
            <form className="space-y-6 relative z-10" action="#" method="POST">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-bold text-[#0F1E2E] mb-2 uppercase tracking-widest">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    name="first-name"
                    autoComplete="given-name"
                    required
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C6A75E] transition-all"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-xs font-bold text-[#0F1E2E] mb-2 uppercase tracking-widest">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    name="last-name"
                    autoComplete="family-name"
                    required
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C6A75E] transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-[#0F1E2E] mb-2 uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C6A75E] transition-all"
                  placeholder="jane.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-[#0F1E2E] mb-2 uppercase tracking-widest">Nature of Inquiry</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#C6A75E] transition-all"
                  placeholder="Summarize your requirements..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-[#0F1E2E] text-white font-bold rounded-sm hover:bg-[#C6A75E] hover:text-[#0F1E2E] transition-all duration-300 tracking-[0.2em] uppercase text-xs shadow-lg"
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;