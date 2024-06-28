import React, { useEffect, useState } from 'react';
import BookList from './BookList';
import { fetchBooksByGenre } from '../api/bookApi';

const Recommendations = ({ genres }) => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  useEffect(() => {
    const fetchRecommendedBooks = async () => {
      let allRecommendedBooks = [];
      for (const genre of genres) {
        const response = await fetchBooksByGenre(genre);
        allRecommendedBooks = allRecommendedBooks.concat(response.data.items);
      }
      setRecommendedBooks(allRecommendedBooks);
    };

    if (genres.length) {
      fetchRecommendedBooks();
    } else {
      setRecommendedBooks([]);
    }
  }, [genres]);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Recommended Books</h2>
      {recommendedBooks.length > 0 ? (
        <BookList books={recommendedBooks} />
      ) : (
        <p>No recommendations available for the selected genres.</p>
      )}
    </div>
  );
};

export default Recommendations;
