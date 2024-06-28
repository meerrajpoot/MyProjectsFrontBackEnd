import React, { useState } from 'react';

const SearchFilter = ({ onSearch, onFilter, onSort, onClear }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [genre, setGenre] = useState('');
  const [sortCriteria, setSortCriteria] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
    onFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    const [criteria, order] = e.target.value.split('-');
    setSortCriteria(criteria);
    setSortOrder(order);
    onSort(criteria, order);
  };

  return (
    <div className="mb-4 p-4 rounded shadow-md bg-white bg-opacity-50">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by title, author, or description"
        className="block w-full p-2 mb-2 border border-gray-300 rounded bg-transparent placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <select
        value={genre}
        onChange={handleGenreChange}
        className="block w-full p-2 mb-2 border border-gray-300 rounded bg-transparent placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Genres</option>
        <option value="fiction">Fiction</option>
        <option value="non-fiction">Non-Fiction</option>
        <option value="fantasy">Fantasy</option>
        <option value="science-fiction">Science Fiction</option>
        {/* Add more genres as needed */}
      </select>
      <select
        value={`${sortCriteria}-${sortOrder}`}
        onChange={handleSortChange}
        className="block w-full p-2 mb-2 border border-gray-300 rounded bg-transparent placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
        <option value="author-asc">Author (A-Z)</option>
        <option value="author-desc">Author (Z-A)</option>
        <option value="date-asc">Publication Date (Oldest First)</option>
        <option value="date-desc">Publication Date (Newest First)</option>
        <option value="rating-asc">Rating (Lowest First)</option>
        <option value="rating-desc">Rating (Highest First)</option>
      </select>
      <button onClick={onClear} className="bg-red-500 text-white py-2 px-4 rounded">
        Clear Filters
      </button>
    </div>
  );
};

export default SearchFilter;
