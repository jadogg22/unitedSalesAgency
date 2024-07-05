import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import brandLogo from '../assets/United_Hands_Master_logo.png';

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const NavLinks = ({ onClick }) => (
    <ul className="flex flex-col md:flex-row">
      <li><Link to="/" className="block py-2 px-4 text-white hover:bg-gray-800" onClick={onClick}>Home</Link></li>
      <li><Link to="/about" className="block py-2 px-4 text-white hover:bg-gray-800" onClick={onClick}>About Us</Link></li>
      <li><Link to="/brands" className="block py-2 px-4 text-white hover:bg-gray-800" onClick={onClick}>Brands</Link></li>
    </ul>
  );

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Hamburger menu */}
      <nav className={`fixed inset-y-0 left-0 bg-blue-900 text-white w-64 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden z-50`}>
        <NavLinks onClick={closeMenu} />
      </nav>

      {/* Header */}
      <header className="bg-gray-900 shadow-md relative z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src={brandLogo} alt="Brand Logo" className="h-8 w-8 mr-2" />
            <span className="text-white text-l font-bold">United Sales Agency</span>
          </div>
          <div className="hidden md:block">
            <NavLinks />
          </div>
          <button onClick={toggleMenu} className="text-white hover:text-gray-400 focus:outline-none md:hidden">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main content */}
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
