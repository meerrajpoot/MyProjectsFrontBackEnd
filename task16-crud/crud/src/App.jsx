import React, { useState, useEffect } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import logo from "./images/BookStore.jpg"

const BookApp = () => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });
  const [currentBook, setCurrentBook] = useState(null);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  return (
    <>
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
       <div className="flex items-center mb-4">
        <img src={logo} alt="Bookstore Logo" className="h-12 mr-4" />
        <h1 className="text-2xl font-bold">Bookstore</h1>
      </div>
      <BookForm
        currentBook={currentBook}
        onSave={(book) => {
          if (currentBook) {
            setBooks(books.map(b => b.id === book.id ? book : b));
            setCurrentBook(null);
          } else {
            setBooks([...books, { ...book, id: Date.now() }]);
          }
        }}
        onCancel={() => setCurrentBook(null)}
      />
      <BookList
        books={books}
        onEdit={(book) => setCurrentBook(book)}
        onDelete={(bookId) => setBooks(books.filter(b => b.id !== bookId))}
      />
    </div>
    </>
  );
};

export default BookApp;
