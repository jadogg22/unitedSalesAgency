import React from 'react';
import BrandCard from '../BrandCard';
import ROXYDRESS from '/src/assets/ROXY_Dresses.webp';
import ROXYSWIM from '/src/assets/roxySwim.jpeg';
import DCSHOES from '/src/assets/DCSHOES.webp';
import ROXYSHOES from '/src/assets/ROXYSHOES.webp';

const Brands = () => {
  const brandsData = [
    {
      title: 'ROXY',
      subBrands: [
        { imageUrl: ROXYDRESS, title: 'ROXY APPAREL', linkUrl: 'https://brandworksgroup.elasticsuite.com/#explore,catalogList' },
        { imageUrl: ROXYSWIM, title: 'ROXY SWIM', linkUrl: 'https://tlg.elasticsuite.com/#explore' },
        { imageUrl: ROXYSHOES, title: 'ROXY FOOTWEAR', linkUrl: 'https://tlg.elasticsuite.com/#explore' },
        { imageUrl: ROXYDRESS, title: 'ROXY APPAREL', linkUrl: 'https://brandworksgroup.elasticsuite.com/#explore,catalogList' },
      ],
    },
    {
      title: 'DC SHOES',
      subBrands: [
        { imageUrl: DCSHOES, title: 'DC SHOES', linkUrl: 'dcshoes.com' },
        { imageUrl: DCSHOES, title: 'DC SHOES', linkUrl: 'dcshoes.com' },
        { imageUrl: DCSHOES, title: 'DC SHOES', linkUrl: 'dcshoes.com' },
      ],
    },
    {
      title: 'Example Brand 3',
      subBrands: [
        { imageUrl: '/src/assets/ROXYSHOES.webp', title: 'SubBrand 3-1', linkUrl: 'https://subbrand3-1.com' },
        { imageUrl: '/src/assets/ROXYSHOES.webp', title: 'SubBrand 3-2', linkUrl: 'https://subbrand3-1.com' },
      ],
    },
    {
      title: 'Brand 4',
      subBrands: [
        { imageUrl: '/path-to-subbrand4-1.jpg', title: 'SubBrand 4-1', linkUrl: 'https://subbrand4-1.com' },
        { imageUrl: '/path-to-subbrand4-2.jpg', title: 'SubBrand 4-2', linkUrl: 'https://subbrand4-2.com' },
        { imageUrl: '/path-to-subbrand4-3.jpg', title: 'SubBrand 4-3', linkUrl: 'https://subbrand4-3.com' },
      ],
    },
    {
      title: 'Brand 5',
      subBrands: [
        { imageUrl: '/path-to-subbrand5-1.jpg', title: 'SubBrand 5-1', linkUrl: 'https://subbrand5-1.com' },
        { imageUrl: '/path-to-subbrand5-2.jpg', title: 'SubBrand 5-2', linkUrl: 'https://subbrand5-2.com' },
        { imageUrl: '/path-to-subbrand5-3.jpg', title: 'SubBrand 5-3', linkUrl: 'https://subbrand5-3.com' },
        { imageUrl: '/path-to-subbrand5-4.jpg', title: 'SubBrand 5-4', linkUrl: 'https://subbrand5-4.com' },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Our Brands</h1>
      {brandsData.map((brand, index) => (
        <div key={index} className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{brand.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brand.subBrands.map((subBrand, subIndex) => (
              <BrandCard 
                key={subIndex} 
                imageUrl={subBrand.imageUrl} 
                title={subBrand.title} 
                linkUrl={subBrand.linkUrl} 
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Brands;
