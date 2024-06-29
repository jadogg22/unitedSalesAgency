import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">About Us</h1>
      
      <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img 
              className="h-full w-full object-cover md:w-64" 
              src="https://via.placeholder.com/400x600" 
              alt="Founders"
            />
          </div>
          <div className="p-8">
            <h2 className="text-2xl font-semibold mb-4">Meet the Founders</h2>
            <p className="text-lg mb-4 leading-relaxed">
              We are Jane and John Doe, a couple passionate about connecting people with great brands. Together, we founded this company in 2023 with a shared vision of curating high-quality brands and making them easily accessible to our customers.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              Jane brings her expertise in brand management and customer relations, while John leverages his background in e-commerce and technology. Our complementary skills allow us to provide a unique and seamless shopping experience.
            </p>
            <p className="text-lg leading-relaxed">
              We believe in the power of great brands to enhance people's lives and are committed to growing our platform to serve more customers and feature more exceptional products.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg mb-4 leading-relaxed">
          Our mission is to bridge the gap between discerning customers and exceptional brands. We strive to:
        </p>
        <ul className="list-disc list-inside text-lg mb-4 leading-relaxed">
          <li>Curate a selection of high-quality, unique brands</li>
          <li>Provide an intuitive and enjoyable shopping experience</li>
          <li>Offer personalized recommendations based on customer preferences</li>
          <li>Support both established and emerging brands in reaching their audience</li>
        </ul>
        <p className="text-lg leading-relaxed">
          We're proud of how quickly we've grown to become a trusted source for brand discovery and shopping, and we're excited about the future as we continue to expand our offerings and reach more customers.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;