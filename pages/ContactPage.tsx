
import React from 'react';
import ContactSection from '../components/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24">
      <div className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 serif">Connect With Us</h1>
          <p className="text-xl text-slate-600">We respond to all inquiries within 24 business hours.</p>
        </div>
      </div>
      <ContactSection />
      
      {/* Map Placeholder */}
      <div className="w-full h-[400px] bg-slate-200 relative grayscale">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-300">
          <div className="text-center px-4">
            <h3 className="text-xl font-bold text-slate-600 mb-2 serif">Interactive Map</h3>
            <p className="text-slate-500">123 Legal Plaza, Suite 400, New York, NY 10001</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
