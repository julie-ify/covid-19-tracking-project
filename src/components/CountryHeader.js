import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

const CountryHeader = (props) => {
  const { region } = props;

  let totalConfirmedCases = 0;
  const totalCases =
    region &&
    region.map((item) => {
      if (item.today_confirmed) {
        totalConfirmedCases = totalConfirmedCases + item.today_confirmed;
      }
      return totalConfirmedCases;
    });

  const addTotalCases =
    totalCases &&
    totalCases.reduce((initial, element) => {
      return initial + element;
    }, 0);

  return (
    <div className="countryHeader">
      <div className="imgWrap">
        <FontAwesomeIcon icon={faGlobeEurope} className="imgCover" />
      </div>
      <div className="headerTextWrap">
        <div className="headerText">
          <p className="bigHeading">Europe</p>
          <span>Confirmed cases: {addTotalCases} </span>
        </div>
      </div>
    </div>
  );
};

CountryHeader.propTypes = {
  region: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CountryHeader;
