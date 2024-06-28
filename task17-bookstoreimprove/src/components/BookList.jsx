import React from 'react';

const BookList = ({ books, onEdit, onDelete }) => {
  return (
    <div className="bg-white bg-opacity-70 p-4 rounded shadow-md">
      {books.length ? (
        <ul>
          {books.map((book) => (
            <li key={book.id} className="border-b p-2 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg text-gray-800">{book.title}</h3>
                <p className="font-bold text-sm text-gray-600">Author: {book.author}</p>
                <p className="text-sm text-gray-700">Description: {book.description}</p>
                <p className="text-sm text-gray-700">Genre: {book.genre}</p>
                <p className="text-sm text-gray-700">Rating: {book.rating}</p>
              </div>
              <div>
                <button onClick={() => onEdit(book)} className="bg-green-500 text-white py-1 px-2 rounded mr-2">
                  Edit
                </button>
                <button onClick={() => onDelete(book.id)} className="bg-red-500 text-white py-1 px-2 rounded">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No books available.</p>
      )}
    </div>
  );
};

export default BookList;
