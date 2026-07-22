import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; // Added routing imports
import Logo from '../../assets/Renu.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Hook for programmatic navigation

  const navLinks = [
    // { name: 'Home', path: '/', hasDropdown: false }, // Added Home
    { name: 'Home', path: '/home', hasDropdown: true,   dropdown: [
      { name: 'Case Studies', path: '/casestudies' },
    ], },
    { name: 'Capabilities', path: '/capabilities', hasDropdown: false },
    { name: 'Industries', path: '/industries', hasDropdown: false },
    { name: 'Events', path: '/events', hasDropdown: true, dropdown: [
      { name: 'About' , path: '/about' },
    ], },
  
    // { name: 'Careers', path: '#', hasDropdown: true },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo Section - Navigates to Home */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => navigate('/')}
          >
            <img 
              src={Logo} 
              alt="Api Technologies" 
              className="h-20 w-auto object-contain" 
            />
          </div>

          {/* Desktop Menu */}

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                to={link.path}
                className="text-gray-700 hover:text-[#1a237e] font-medium flex items-center gap-1 transition-colors">
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200"/>
                  )}
                </Link>

                {/* About Us Dropdown */}
                {link.dropdown && (
                  <div className="absolute left-0 mt-3 w-56 bg-white shadow-lg rounded-md
                                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                  transition-all duration-200">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-4 py-3 text-sm text-gray-700
                                  hover:bg-blue-50 hover:text-[#1a237e]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>




          {/* CTA Button */}
          {/* <div className="hidden md:block">
            <button 
              onClick={() => navigate('/contact')} // Example navigation
              className="bg-[#1a237e] text-white px-7 py-2.5 rounded-md font-semibold hover:bg-[#0d144a] transition-all active:scale-95 shadow-md"
            >
              Get Started
            </button>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[600px] border-t' : 'max-h-0'}`}>
        <div className="bg-white px-4 pt-2 pb-6 space-y-1 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)} // Close menu on click
              className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-[#1a237e] rounded-md transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-4 px-3">
            <button 
              onClick={() => { navigate('/contact'); setIsOpen(false); }}
              className="w-full bg-[#1a237e] text-white px-6 py-3 rounded-md font-semibold shadow-md"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;