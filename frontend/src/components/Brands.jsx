import React from 'react';

const Brands = () => {
  const brandData = [
    { imageUrl: '/path-to-image1.jpg', title: 'Brand 1', linkUrl: 'https://brand1.com' },
    { imageUrl: '/path-to-image2.jpg', title: 'Brand 2', linkUrl: 'https://brand2.com' },
    { imageUrl: '/path-to-image3.jpg', title: 'Brand 3', linkUrl: 'https://brand3.com' },
    { imageUrl: '/path-to-image4.jpg', title: 'Brand 4', linkUrl: 'https://brand4.com' },
    // Add more brands as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Brands</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
     

      </div>
    </div>
  );
};

export default Brands;