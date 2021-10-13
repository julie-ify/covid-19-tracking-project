import React from 'react';

const SearchBar = ({ searchValue, handleChange }) => (
  <input placeholder="search country" className="searchBar" value={searchValue} onChange={handleChange} />
);

export default SearchBar;
