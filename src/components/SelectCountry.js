import React from 'react';
import PropTypes from 'prop-types';

const SelectCountry = (props) => {
  const { country } = props;
  return <li key={country.id}>{country.name}</li>;
};

SelectCountry.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default SelectCountry;
