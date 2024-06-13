import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import BrandCard from './BrandCard.jsx'

function App() {

  const brandData = [
    {
      imageUrl: 'https://www.roxy.com/cdn/shop/files/SEO_Boardshorts_Shopify_750x.jpg?v=1707166631',
      title: 'Brand 1',
      linkUrl: 'https://www.brand1.com',
    },
    {
      imageUrl: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/5530/stock-12.jpg',
      title: 'Brand 2',
      linkUrl: 'https://www.brand2.com',
    },
    {
      imageUrl: 'https://www.roxy.com/cdn/shop/files/Flyout_Sandals_1_750x.jpg?v=1712622743',
      title: 'Roxy Shoes',
      linkUrl: 'https://www.brand3.com',
    },
    {
      imageUrl: 'https://example.com/brand4.jpg',
      title: 'Brand 4',
      linkUrl: 'https://www.brand4.com',
    },
  ];

  const caroselData = [ 
    {
      imgUrl: 'https://us-east-2-production10-hive-20210401235309755500000002.s3.amazonaws.com/import-files/brandworksgroup/assets/jpg-251_L_2.jpg?1715054274',
      title: 'Roxy Apparel',
    },
    {
      imgUrl: 'https://www.roxy.com/cdn/shop/files/RX_shopify_1up-desktop_Beach_Classics_2_a0ac1969-ed2c-4e36-9464-b25c0d19f6f8_2000x.jpg?v=1716312327',
      title: 'Roxy Apparel',
    },
    {
      imgUrl: 'https://www.dcshoes.com/cdn/shop/files/Screenshot_2024-04-01_at_10.31.58_AM.png?v=1711982080&width=2212',
      title: 'DC Shoes',
    }
  ]

  return (
    <>
      <Header />
      <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Our Brands</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {brandData.map((brand, index) => (
          <BrandCard
            key={index}
            imageUrl={brand.imageUrl}
            brandName={brand.title}
            linkUrl={brand.linkUrl}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
