import React from 'react';
import BookCard from './BookCard';

const BookmarkList = ({ bookmarks }) => (
  <div className="flex flex-wrap justify-center gap-4">
    {bookmarks.map((book) => (
      <div key={book.id} className="flex-grow md:flex-grow-0">
        <BookCard book={book} />
      </div>
    ))}
  </div>
);

export default BookmarkList;
