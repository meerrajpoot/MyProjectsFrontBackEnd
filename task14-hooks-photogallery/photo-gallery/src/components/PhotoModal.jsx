import React from 'react';

const PhotoModal = ({ photo, closeModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 m-2 text-black text-lg font-bold"
        >
          &times;
        </button>
        <img src={photo.urls.regular} alt={photo.alt_description} className="w-full h-auto rounded" />
        <p className="text-center mt-4">{photo.alt_description || 'Untitled'}</p>
      </div>
    </div>
  );
};

export default PhotoModal;
