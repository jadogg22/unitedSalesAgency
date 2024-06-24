import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="mb-4">
          Welcome to our company! We are passionate about connecting people with great brands.
        </p>
        <p className="mb-4">
          Our mission is to curate a selection of high-quality brands and make them easily accessible to our customers.
        </p>
        <p>
          Founded in 2023, we have quickly grown to become a trusted source for brand discovery and shopping.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;