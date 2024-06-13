import React from 'react';
const BrandCard = ({ imageUrl, title, linkUrl }) => {
  return (
    <a
      href={linkUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center">
          <span className="text-white font-bold text-2xl">{title}</span>
        </div>
      </div>
    </a>
  );
};
export default BrandCard;
