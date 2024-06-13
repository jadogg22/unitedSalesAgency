import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const GalleryItem = ({ imgUrl, linkUrl }) => {
  return (
    <div className="carousel-item mx-2 flex-shrink-0">
      <a src={linkUrl}>
        <LazyLoadImage
          src={imgUrl}
          alt="Gallery Item"
          className="w-full h-64 object-cover object-center"
        />
      </a>
    </div>
  );
};

export default GalleryItem;