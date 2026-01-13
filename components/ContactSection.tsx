
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a2b23] mb-8 serif">Get in Touch</h2>
            <p className="text-slate-500 mb-12 text-lg leading-relaxed font-light">
              Have a legal question or need to schedule a consultation? Our team is ready to assist you. Contact us via phone, email, or visit our office.
            </p>
            
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#1a2b23] p-4 rounded-sm shadow-lg">
                  <Phone className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Call Us</h3>
                  <a href="tel:09065624016" className="text-2xl font-bold text-[#1a2b23] hover:text-[#d4af37] transition-colors serif">
                    09065624016
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#1a2b23] p-4 rounded-sm shadow-lg">
                  <Mail className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email</h3>
                  <a href="mailto:mfredebel@gmail.com" className="text-2xl font-bold text-[#1a2b23] hover:text-[#d4af37] transition-colors break-all serif">
                    mfredebel@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-[#1a2b23] p-4 rounded-sm shadow-lg">
                  <MapPin className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div className="ml-6">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Our Office</h3>
                  <address className="not-italic text-2xl font-bold text-[#1a2b23] serif leading-snug">
                    Harrington House, Suite 101<br />
                    Lagos, Nigeria
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-12 rounded-sm shadow-2xl border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/5 rounded-bl-full -z-0"></div>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-widest">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-widest">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-widest">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all"
                  placeholder="jane.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-widest">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-5 py-4 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#d4af37]/20 transition-all"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-[#1a2b23] text-white font-bold rounded-sm hover:bg-[#d4af37] hover:text-[#1a2b23] transition-all duration-300 tracking-[0.2em] uppercase text-xs"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
