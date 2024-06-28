import React, { useState, useEffect } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import SearchFilter from './components/SearchFilter';
import logo from './assets/logo1.png';

const BookApp = () => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('bookList');
    return savedBooks ? JSON.parse(savedBooks) : [];
  });
  const [currentBook, setCurrentBook] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    localStorage.setItem('bookList', JSON.stringify(books));
  }, [books]);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const handleSearch = (searchTerm) => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const filteredData = books.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(lowercasedFilter)
      );
    });
    setFilteredBooks(filteredData);
  };

  const handleFilter = (genre) => {
    if (genre) {
      const filteredData = books.filter(book => book.genre === genre);
      setFilteredBooks(filteredData);
    } else {
      setFilteredBooks(books);
    }
  };

  const handleSort = (criteria, order) => {
    const sortedBooks = [...filteredBooks].sort((a, b) => {
      if (a[criteria] < b[criteria]) {
        return order === 'asc' ? -1 : 1;
      }
      if (a[criteria] > b[criteria]) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    });
    setFilteredBooks(sortedBooks);
  };

  const handleClear = () => {
    setFilteredBooks(books);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-4">
      <div className="container mx-auto bg-white bg-opacity-70 p-4 rounded shadow-lg">
        <div className="flex items-center mb-4">
          <img src={logo} alt="Bookstore Logo" className="h-14 mr-2" />
          <h1 className="text-5xl font-bold text-gray-800">Bookstore</h1>
        </div>
        <SearchFilter onSearch={handleSearch} onFilter={handleFilter} onSort={handleSort} onClear={handleClear} />
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
          books={filteredBooks}
          onEdit={(book) => setCurrentBook(book)}
          onDelete={(bookId) => setBooks(books.filter(b => b.id !== bookId))}
        />
      </div>
    </div>
  );
};

export default BookApp;
