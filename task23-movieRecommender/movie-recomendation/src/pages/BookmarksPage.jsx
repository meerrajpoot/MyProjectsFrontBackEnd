import React from 'react';
import MovieCard from '../components/MovieCard';

const BookmarksPage = ({ bookmarks, movies, setBookmarks }) => {
  const bookmarkedMovies = movies.filter(movie => bookmarks.includes(movie.id));

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Bookmarked Movies</h1>
      <div className="flex flex-wrap justify-center">
        {bookmarkedMovies.length > 0 ? (
          bookmarkedMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} bookmarks={bookmarks} setBookmarks={setBookmarks} />
          ))
        ) : (
          <p>No bookmarked movies.</p>
        )}
      </div>
    </div>
  );
};

export default BookmarksPage;
