import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Filter = ({ filter, setFilter }) => (
  <FormControl fullWidth className="mb-4">
    <InputLabel>Genre</InputLabel>
    <Select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    >
      <MenuItem value="all">All</MenuItem>
      <MenuItem value="28">Action</MenuItem>
      <MenuItem value="35">Comedy</MenuItem>
      <MenuItem value="18">Drama</MenuItem>
      <MenuItem value="10">Thrill</MenuItem>
      
    </Select>
  </FormControl>
);

export default Filter;
