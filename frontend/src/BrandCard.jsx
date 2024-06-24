import React from 'react';

const BrandCard = ({ imageUrl, title, linkUrl }) => {
  return (
    <div className="relative overflow-hidden rounded-lg group">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center transform transition-transform duration-300 group-hover:-translate-y-6">
          <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-0 top-full mt-2">
            <a 
              href={linkUrl} 
              className="bg-white text-black font-bold py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-300"
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;