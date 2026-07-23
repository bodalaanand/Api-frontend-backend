import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Phone, Mail, MapPin, ChevronUp, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Renu.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#020617] text-gray-300 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="h-10 w-auto flex items-center">
                <img src={Logo} alt="API Logo" className="h-10 w-auto object-contain" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">Ren<span className="text-blue-500">uka</span></span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              We help you create personalized birthday wishes beautiful greeting pages memorable photo galleries heartfelt messages and joyful surprises.
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:border-blue-600 transition-all"><Facebook size={18}/></a>
              <a href="" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-sky-500 hover:border-sky-500 transition-all"><Twitter size={18}/></a>
              <a href="" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-400 hover:border-blue-400 transition-all"><Youtube size={18}/></a>
              <a href="" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-700 hover:border-blue-700 transition-all"><Linkedin size={18}/></a>
              <a href="" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-pink-600 hover:border-pink-600 transition-all"><Instagram size={18}/></a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-bold mb-6">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/capabilities" className="hover:text-blue-400 transition-colors">Birthday Wishes</Link></li>
              <li><Link to="/industries" className="hover:text-blue-400 transition-colors">Memories</Link></li>
              <li><Link to="/events" className="hover:text-blue-400 transition-colors">Renuka</Link></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-blue-500/10 p-2 rounded-lg"><Phone size={18} className="text-blue-500" /></div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Phone Number</span>
                  <a href="tel:+919123456780" className="text-white hover:text-blue-400 transition-colors">+91 79956XXXXX</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-blue-500/10 p-2 rounded-lg"><Mail size={18} className="text-blue-500" /></div>
                <div className="flex flex-col">
                  <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">Email Address</span>
                  <a href="mailto:info@apitechnologies.com" className="text-white hover:text-blue-400 transition-colors">info@koyyanarenuka.com</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
  <div className="mt-1 bg-blue-500/10 p-2 rounded-lg flex-shrink-0">
    <MapPin size={18} className="text-blue-500" />
  </div>

  <div className="flex flex-col">
    <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">
      Home Town
    </span>

    <a
      // google maps link upload here"
      target="_blank"
      rel="noopener noreferrer"
      className="leading-relaxed hover:text-blue-600 transition-colors"
    >
      Vizag, India
    </a>
  </div>
</li>

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-gray-500 tracking-wide">
            &copy; 2026 @koyyanarenuka. All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-white/5 border border-white/10 p-3 rounded-full hover:bg-blue-600 hover:border-blue-600 transition-all group"
          >
            <ChevronUp size={20} className="text-white group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;