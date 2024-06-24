import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../assets/United_Hands_Master_logo.png';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src={brandLogo} alt="Brand Logo" className="h-8 w-8 mr-2" />
            <span className="text-white text-l font-bold">United Sales Agency</span>
          </div>
          <button onClick={toggleMenu} className="text-white hover:text-gray-400 focus:outline-none md:hidden">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 right-0 bg-blue-300 text-white md:bg-transparent shadow-md md:shadow-none`}>
            <ul className="md:flex">
              <li><Link to="/" className="block px-4 py-2 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-200">Home</Link></li>
              <li><Link to="/about" className="block px-4 py-2 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-200">About Us</Link></li>
              <li><Link to="/brands" className="block px-4 py-2 hover:bg-gray-200 md:hover:bg-transparent md:hover:text-blue-200">Brands</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;