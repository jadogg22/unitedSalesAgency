import React, { useState } from "react"; 

const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const childrenCount = React.Children.count(children);
  
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? childrenCount - 3 : prevIndex - 1
      );
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === childrenCount - 3 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <div className="carousel relative">
        <div className="carousel-inner flex overflow-hidden">
          {React.Children.map(children, (child, index) =>
            index >= currentIndex && index < currentIndex + 3 ? child : null
          )}
        </div>
        <button
          onClick={goToPrevious}
          className="carousel-control prev absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
        >
          &#8249;
        </button>
        <button
          onClick={goToNext}
          className="carousel-control next absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 focus:outline-none"
        >
          &#8250;
        </button>
      </div>
    );
  };
  
  export default Carousel;