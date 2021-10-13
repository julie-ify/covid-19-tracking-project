import React from 'react';

const SearchBar = ({ searchValue, handleChange, handleInput }) => (
  <input placeholder="search country" className="searchBar" value={searchValue} onChange={handleChange ? handleChange : handleInput} />
);

export default SearchBar;
