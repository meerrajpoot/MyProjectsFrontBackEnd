import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => (
  <div className="flex flex-wrap justify-center gap-4">
    {books.map((book) => (
      <div key={book.id} className="flex-grow md:flex-grow-0">
        <BookCard book={book} />
      </div>
    ))}
  </div>
);

export default BookList;
