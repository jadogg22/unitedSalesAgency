import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import BrandCard from './BrandCard.jsx'
import Carousel from './Carosel.jsx'
import GalleryItem from './GalleryItem.jsx'

function App() {

  const brandData = [
    {
      imageUrl: 'https://www.roxy.com/cdn/shop/files/RX_shopify_3up_Dresses_7e3f0184-4df9-4f68-bc9f-f94f9f34b851_1100x.jpg?v=1717784481',
      title: 'Roxy Dresses',
      linkUrl: 'https://www.brand1.com',
    },
    {
      imageUrl: 'https://www.roxy.com/cdn/shop/files/RX_shopify_3up_Sandals_1100x.jpg?v=1717784481',
      title: 'Roxy Sandals',
      linkUrl: 'https://www.brand2.com',
    },
    {
      imageUrl: 'https://us-east-2-production1-hive-20190501031443711100000002.s3.amazonaws.com/import-files/tlg/assets/jpg-251-RoxySwim_M_01.jpg?1714064791',
      title: 'Roxy Swim',
      linkUrl: 'https://www.brand3.com',
    },
    {
      imageUrl: 'https://www.dcshoes.com/cdn/shop/files/FathersDay_Flyout_HP.jpg?v=1716909636&width=266',
      title: 'DC Shoes',
      linkUrl: 'https://www.brand4.com',
    },
  ];

  const caroselData = [ 
    {
      imgUrl: 'https://www.roxy.com/cdn/shop/files/ERJKD03469_MLN0_LS-1_jpg.jpg?v=1712352090&width=825',
      title: 'Roxy Apparel',
    },
    {
      imgUrl: 'https://www.roxy.com/cdn/shop/files/RX_shopify_1up-desktop_Beach_Classics_2_a0ac1969-ed2c-4e36-9464-b25c0d19f6f8_2000x.jpg?v=1716312327',
      title: 'Roxy Apparel',
    },
    {
      imgUrl: 'https://www.dcshoes.com/cdn/shop/files/THOMAS.jpg?v=1714157863&width=1600',
      title: 'DC Shoes',
    },
    {
      imgUrl: 'https://www.dcshoes.com/cdn/shop/files/DC_1up-desktop_Snow_2.jpg?v=1716312327',
      title: 'DC Shoes',
    },
    {
      imgUrl: 'https://www.downdays.eu/wp-content/uploads/2020/12/Roxy-On-The-Snow-Collection-Header.jpg',
      title: 'Roxy Swim',
    },
    {
      imgUrl: 'https://www.quiksilver.com/cdn/shop/files/Quiksilver_1up-desktop_Snow_2.jpg?v=1716312327',
      title: 'Quiksilver Apparel',
    }
  ]

  return (
    <>
      <Header />
      <div className="container mx-auto py-10"></div>
      <Carousel >
        {caroselData.map((item, index) => (
          <GalleryItem key={index} imgUrl={item.imgUrl} title={item.title} />
        ))}
      </Carousel>
      <div className="container mx-auto py-12">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium enim iusto soluta optio possimus totam inventore suscipit. Voluptas, maiores ducimus, exercitationem illum eius nemo ea excepturi sapiente fugit nesciunt odit!</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Book Now</button>
      </div>
      <div className="container mx-auto px-8">
      <h1 className="text-3xl font-bold mb-8 items-center">Our Brands</h1>
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
      <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
