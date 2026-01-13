
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 serif">Get in Touch</h2>
            <p className="text-slate-600 mb-10 text-lg leading-relaxed">
              Have a legal question or need to schedule a consultation? Our team is ready to assist you. Contact us via phone, email, or visit our office.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-slate-900 p-3 rounded-sm">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-1">Call Us</h3>
                  <a href="tel:+15551234567" className="text-xl font-bold text-slate-900 hover:text-slate-600 transition-colors">
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-slate-900 p-3 rounded-sm">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-1">Email</h3>
                  <a href="mailto:info@greylinepartners.com" className="text-xl font-bold text-slate-900 hover:text-slate-600 transition-colors break-all">
                    info@greylinepartners.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-slate-900 p-3 rounded-sm">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-1">Our Office</h3>
                  <address className="not-italic text-xl font-bold text-slate-900">
                    123 Legal Plaza, Suite 400<br />
                    New York, NY 10001
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-sm shadow-inner border border-slate-100">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-900/5 transition-all"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-900/5 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-900/5 transition-all"
                  placeholder="jane.doe@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">Inquiry Topic</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-900/5 transition-all appearance-none"
                >
                  <option>Corporate Consultation</option>
                  <option>Intellectual Property</option>
                  <option>Family Law</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-slate-900/5 transition-all"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-slate-900 text-white font-bold rounded-sm hover:bg-slate-800 transition-colors tracking-widest uppercase text-sm"
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
