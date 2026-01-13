
import React from 'react';
import { Mail, Phone, Twitter, Instagram, Linkedin } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1a2b23] text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Menu */}
          <div>
            <h3 className="text-2xl font-bold serif mb-8">Menu</h3>
            <ul className="space-y-4">
              <li><a href="#/about" className="text-slate-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#/practice" className="text-slate-400 hover:text-white transition-colors">Practice</a></li>
              <li><a href="#/blog" className="text-slate-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#/contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-2xl font-bold serif mb-8">Useful Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Disclaimer</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-2xl font-bold serif mb-8">Follow Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2 group">
                <Twitter className="w-4 h-4 text-slate-400 group-hover:text-[#d4af37]" />
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Twitter</a>
              </li>
              <li className="flex items-center space-x-2 group">
                <Instagram className="w-4 h-4 text-slate-400 group-hover:text-[#d4af37]" />
                <a href="#" className="text-slate-400 hover:text-white transition-colors">Instagram</a>
              </li>
              <li className="flex items-center space-x-2 group">
                <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-[#d4af37]" />
                <a href="#" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-2xl font-bold serif mb-8">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm">
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Email</p>
                  <a href="mailto:info@greylinepartners.com" className="font-medium text-white hover:text-[#d4af37] break-all">
                    info@greylinepartners.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-sm">
                  <Phone className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Phone</p>
                  <a href="tel:+2349014490090" className="font-medium text-white hover:text-[#d4af37]">
                    +234 901 449 0090
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-slate-500 text-sm gap-4">
          <p>Greyline Partners law firm</p>
          <p>Copyright © {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
