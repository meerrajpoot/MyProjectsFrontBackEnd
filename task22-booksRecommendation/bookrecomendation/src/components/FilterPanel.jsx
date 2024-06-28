import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const FilterPanel = ({ genres, onGenreChange }) => (
  <Select
    mode="multiple"
    className="w-full md:w-1/2 mb-4"
    placeholder="Filter by genre"
    onChange={onGenreChange}
  >
    {genres.map((genre) => (
      <Option key={genre} value={genre}>{genre}</Option>
    ))}
  </Select>
);

export default FilterPanel;
