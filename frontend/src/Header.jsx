import React from 'react';
import Logo from './assets/United_Hands_Master_logo.png'

const Header = () => { 
  return (
    <header className="bg-gray-900 py-4 px-6 flex justify-between items-center fixed w-full z-10">
      {/* Logo */}
    <div className="flex items-center">
      <img src={Logo} alt="United Sales Agency" className="h-8 mr-4" />
      <div className="text-white font-bold text-lg">
        <span className="text-yellow-500">United</span> Sales Agency
      </div>
    </div>

      {/* Hamburger Menu */}
      <button className="text-white focus:outline-none">
        <svg
          className="h-6 w-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h16a1 1 0 100-2H4z"
          />
        </svg>
      </button>
    </header>
  );
 };

export default Header;
