import axios from 'axios';

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchPhotos = async () => {
  try {
    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        count: 30,
      },
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
};
