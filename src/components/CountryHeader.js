import React from 'react';
import PropTypes from 'prop-types';

const CountryHeader = (props) => {
  const { region } = props;

  let totalConfirmedCases = 0;
  const totalCases = region
    && region.map((item) => {
      if (item.today_confirmed) {
        totalConfirmedCases += item.today_confirmed;
      }
      return totalConfirmedCases;
    });

  const addTotalCases = totalCases
    && totalCases.reduce((initial, element) => initial + element, 0);

  return (
    <div className="countryHeader">
      <div className="headerTextWrap">
        <div className="headerText">
          <p className="bigHeading">All Countries with Covid-19 cases</p>
          <span>
            {addTotalCases}
            {' '}
            confirmed cases
          </span>
        </div>
      </div>
    </div>
  );
};

CountryHeader.propTypes = {
  region: PropTypes.arrayOf(PropTypes.object),
};

CountryHeader.defaultProps = {
  region: [],
};

export default CountryHeader;
