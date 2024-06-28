import axios from 'axios';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

export const fetchBooks = (query) => {
  return axios.get(API_URL, {
    params: {
      q: query,
    },
  });
};

export const fetchBooksByGenre = (genre) => {
  return axios.get(API_URL, {
    params: {
      q: `subject:${genre}`,
    },
  });
};
