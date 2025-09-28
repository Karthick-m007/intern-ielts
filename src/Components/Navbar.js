import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-extrabold text-red-600 tracking-wide">IELTSPro</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {['Home', 'Courses', 'About', 'Contact'].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <button className="ml-4 flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition-all duration-200">
            <FiLogIn size={18} />
            Login
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-6 pt-2 shadow-md animate-slide-down">
          {['Home', 'Courses', 'About', 'Contact'].map((item, idx) => (
            <a
              key={idx}
              href="#"
              className="block py-2 text-gray-700 hover:text-red-600 font-medium transition"
            >
              {item}
            </a>
          ))}

          <button className="w-full mt-4 flex items-center justify-center gap-2 bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
            <FiLogIn />
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
