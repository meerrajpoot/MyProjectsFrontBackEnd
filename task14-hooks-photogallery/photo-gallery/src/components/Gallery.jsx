import React, { useState, useEffect } from 'react';
import { fetchPhotos } from '../utils/fetchPhotos';
import Photo from './Photo';
import PhotoModal from './PhotoModal';

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const getPhotos = async () => {
      const photos = await fetchPhotos();
      setPhotos(photos);
    };
    getPhotos();
  }, []);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <Photo key={photo.id} photo={photo} openModal={openModal} />
      ))}
      {selectedPhoto && (
        <PhotoModal photo={selectedPhoto} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Gallery;
