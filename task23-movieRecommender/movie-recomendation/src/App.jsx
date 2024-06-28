import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import BookmarksPage from './pages/BookmarksPage';
import Navbar from './components/Navbar';

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [movies, setMovies] = useState([]); 

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage bookmarks={bookmarks} setBookmarks={setBookmarks} movies={movies} setMovies={setMovies} />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/bookmarks" element={<BookmarksPage bookmarks={bookmarks} movies={movies} setBookmarks={setBookmarks} />} />
      </Routes>
    </Router>
  );
};

export default App;

