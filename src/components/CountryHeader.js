import React from 'react';
import PropTypes from 'prop-types';

const CountryHeader = (props) => {
  const { region } = props;
  console.log(region);
  const totalConfirmedCases = region.reduce(
    (initial, element) => initial + element.today_confirmed,
    0,
  );

  return (
    <div>
      <h1>Total Confirmed Cases in Europe Today</h1>
      <span>{totalConfirmedCases}</span>
    </div>
  );
};

CountryHeader.propTypes = {
  region: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CountryHeader;
