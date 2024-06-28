import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBar = ({ onSearch }) => (
  <div className="mb-4">
    <Search
      placeholder="Search for books"
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      className="w-full md:w-1/2"
    />
  </div>
);

export default SearchBar;
