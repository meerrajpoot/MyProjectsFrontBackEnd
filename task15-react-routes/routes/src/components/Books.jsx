import React from 'react';

import { Link } from 'react-router-dom';

const books = [
  { id: 1, title: 'Book One', author: 'Author One' },
  { id: 2, title: 'Book Two', author: 'Author Two' },
  { id: 3, title: 'Book Three', author: 'Author Three' },
];

const Books = () => {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-5">Books</h1>
      <ul className="space-y-4">
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`} className="text-blue-500 hover:underline">
              {book.title} by {book.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
