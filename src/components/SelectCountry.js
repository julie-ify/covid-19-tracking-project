import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SelectCountry = (props) => {
  const { country } = props;
  return (
    <div>
      <Link to={`${country.id}`} className="regionLink">
        <div>
          Country Name:
          {country.name}
        </div>
        <div>
          Confirmed Cases:
          {country.today_confirmed}
        </div>
      </Link>
    </div>
  );
};

SelectCountry.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    today_confirmed: PropTypes.number,
  }).isRequired,
};

export default SelectCountry;
