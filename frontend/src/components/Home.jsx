import React, { useState } from 'react';
import logo from '/src/assets/United_Hands_Master_logo.png';
import bannerImage from '/src/assets/bannerImage.webp';
import BrandCard from '../BrandCard';
import roxyDress from '/src/assets/ROXY_Dresses.webp';
import roxySwim from '/src/assets/roxySwim.jpeg';
import roxyShoes from '/src/assets/ROXYSHOES.webp';
import dcShoes from '/src/assets/DCSHOES.webp';

import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigate = useNavigate();

  return (
    <> 
      <div className="relative">
        <img src={bannerImage} alt="Banner" className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-white text-4xl font-bold mb-4">Welcome to Our Site</h1>
            <button onClick={() => navigate('/about')} className="bg-white hover:bg-blue-300 text-black font-bold py-2 px-4 rounded">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Card Grid */}
      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Repeat this card structure for each link */}

          <BrandCard
            imageUrl={roxyDress}
            title="ROXY Dresses"
            linkUrl="#" />

            <BrandCard
            imageUrl={roxySwim}
            title="ROXY SWIM"
            linkUrl="#" />

            <BrandCard
            imageUrl={roxyShoes}
            title="ROXY SHOES"
            linkUrl="#" />

            <BrandCard
            imageUrl={dcShoes}
            title="DC SHOES"
            linkUrl="#" />
           
        </div>
      </div>
    </>
  );
};

export default Home;