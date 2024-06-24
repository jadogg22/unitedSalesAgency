import React from 'react';
import Logo from './assets/United_Hands_Master_logo.png'

const Header = () => { 
  return (
<header className="bg-grey-800 shadow-md">
<div className="container mx-auto px-4 py-3 flex justify-between items-center">
  <div className="flex items-center">
    <img src={logo} alt="Brand Logo" className="h-10 w-10 mr-2" />
    <span className="text-xl font-bold">United Sales Agency</span>
  </div>
  <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none">
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  </button>
</div>
</header>
  );
 };

export default Header;
