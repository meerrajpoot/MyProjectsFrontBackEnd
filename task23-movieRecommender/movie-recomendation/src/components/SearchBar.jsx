import React from 'react';
import { TextField } from '@mui/material';

const SearchBar = ({ onSearch }) => (
  <TextField
    variant="outlined"
    placeholder="Search for movies..."
    onChange={(e) => onSearch(e.target.value)}
    fullWidth
    className="mb-4"
  />
);

export default SearchBar;
