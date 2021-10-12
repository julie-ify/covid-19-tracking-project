import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

const CountryHeader = (props) => {
  const { region } = props;
  const totalConfirmedCases = region.reduce(
    (initial, element) => initial + element.today_confirmed,
    0
  );

  return (
    <div className="countryHeader">
      <div className="imgWrap">
        <FontAwesomeIcon icon={faGlobeEurope} className="imgCover" />
      </div>
      <div className="headerTextWrap">
        <div className="headerText">
          <p className="bigHeading">Europe</p>
          <span>Confirmed cases: {totalConfirmedCases}</span>
        </div>
      </div>
    </div>
  );
};

CountryHeader.propTypes = {
  region: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CountryHeader;
