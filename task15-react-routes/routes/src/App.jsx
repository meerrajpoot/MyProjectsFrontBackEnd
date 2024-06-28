import "./index.css"
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Books from './components/Books';
import BookDetail from './components/BookDetail';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <nav className="bg-gray-600 text-white p-4">
          <div className="container mx-auto flex justify-evenly">
            <Link to="/" className="text-lg font-bold">Home</Link>
            <Link to="/books" className="text-lg font-bold">Books</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
