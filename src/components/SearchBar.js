import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ searchValue, handleChange, handleInput }) => (
  <input placeholder="search country" className="searchBar" value={searchValue} onChange={handleChange || handleInput} />
);

SearchBar.propTypes = {
  searchValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default SearchBar;
