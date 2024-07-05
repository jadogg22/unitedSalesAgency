
import React, { useState } from 'react';
import EmailModal from './EmailModal';

const EventCard = ({ imageUrl, title, dates }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer" onClick={handleCardClick}>
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black via-transparent to-black opacity-70 transition-opacity duration-300 group-hover:opacity-100">
          <div className="text-right text-white text-sm bg-red-600 py-1 px-2 rounded-bl-lg self-end">
            {dates}
          </div>
          <div className="text-center text-white text-xl font-bold mt-auto">
            {title}
          </div>
        </div>
      </div>
      <EmailModal isOpen={modalOpen} onClose={closeModal} eventTitle={title} />
    </>
  );
};

export default EventCard;

