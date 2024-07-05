import React from 'react';
import Slider from 'react-slick';
import EventCard from './EventCard';

const UpcomingEvents = () => {


  const eventsData = [
    {
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMM4mZKR2f4P6lb0PC7vpnhcgZlwAI_i1Ea4Pme=s680-w680-h510',
      title: 'Event 1',
      dates: 'July 5 - July 7',
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipNvA9dsDfL24XXwcz2Jw9RMbisjeWufJI7VsW-C=s680-w680-h510',
      title: 'Event 2',
      dates: 'July 10 - July 12',
    },
    {
      imageUrl: 'https://lh3.googleusercontent.com/p/AF1QipMUQa0pgO3Y_rfISTgTKSlPuK1W7BJY2YGY6Rp2=s680-w680-h510',
      title: 'Event 3',
      dates: 'July 15 - July 17',
    },
    // Add more events as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
      <Slider {...settings} className="slick-slider-spacing">
        {eventsData.map((event, index) => (
          <div key={index} className="px-4">
            <EventCard 
              imageUrl={event.imageUrl} 
              title={event.title} 
              dates={event.dates} 
            />
          </div>
        ))}
      </Slider>
  );
};

export default UpcomingEvents;
