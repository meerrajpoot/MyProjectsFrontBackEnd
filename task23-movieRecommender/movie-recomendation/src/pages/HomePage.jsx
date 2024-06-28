import React, { useState, useEffect, useCallback } from 'react';
import { fetchMovies } from '../api';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';

const HomePage = ({ bookmarks, setBookmarks, movies, setMovies }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetchMovies(searchQuery, filter, page);
      setMovies(response.results);
      setTotalPages(response.total_pages);
    };

    getMovies();
  }, [searchQuery, filter, page]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setPage(1);
  };

  const handleFilterChange = (genre) => {
    setFilter(genre);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="p-4">
      <div className='mb-12'> <SearchBar  onSearch={handleSearch} /></div>
     
     <div><Filter filter={filter} setFilter={handleFilterChange} /></div> 
      <div className="flex flex-wrap justify-center">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} bookmarks={bookmarks} setBookmarks={setBookmarks} />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default HomePage;
