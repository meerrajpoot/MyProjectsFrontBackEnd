import React, { useState } from 'react';
import { Layout } from 'antd';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import BookList from './components/BookList';
import Recommendations from './components/Recommendations';
import { fetchBooks } from './api/bookApi';

const { Header, Content } = Layout;

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [bookDetails, setBookDetails] = useState(null);
  const genres = ['Fiction', 'Non-fiction', 'Science', 'Mystery', 'Fantasy', 'Romance'];

  const handleSearch = async (query) => {
    const response = await fetchBooks(query);
    setBooks(response.data.items);
  };

  const handleGenreChange = (value) => {
    setSelectedGenres(value);
  };

  const showBookDetails = (book) => {
    setBookDetails(book);
  };

  const closeBookDetails = () => {
    setBookDetails(null);
  };

  return (
    <Layout className="min-h-screen">
      <Header className="bg-gray-500-600 p-4">
        <SearchBar onSearch={handleSearch} />
        <FilterPanel genres={genres} onGenreChange={handleGenreChange} />
      </Header>
      <Content className="p-4">
        <BookList books={books} />
        <Recommendations genres={selectedGenres} />
        {bookDetails && (
          <BookDetails book={bookDetails} visible={!!bookDetails} onClose={closeBookDetails} />
        )}
      </Content>
    </Layout>
  );
};

export default App;
