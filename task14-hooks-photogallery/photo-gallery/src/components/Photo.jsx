import React from 'react';

const Photo = ({ photo, openModal }) => {
  return (
    <div className="cursor-pointer" onClick={() => openModal(photo)}>
      <img src={photo.urls.small} alt={photo.alt_description} className="w-full h-auto rounded" />
      <p className="text-center mt-2">{photo.alt_description || 'Untitled'}</p>
    </div>
  );
};

export default Photo;
