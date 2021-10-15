import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleRight,
  faGlobeEurope,
} from '@fortawesome/free-solid-svg-icons';

const SelectCountry = (props) => {
  const { country, cardNumber } = props;
  return (
    <div
      className={
        cardNumber === 2 || cardNumber === 3 ? 'coloredCard' : 'plainCard'
      }
    >
      <div className="countryMap">
        <FontAwesomeIcon icon={faGlobeEurope} className="map" />
        <div className="selectCountry">
          <Link to={`${country.id}`} className="regionLink">
            <FontAwesomeIcon icon={faArrowCircleRight} />
          </Link>
          <div className="countryStat">
            <div className="bigHeading">{country.name}</div>
            <div>
              {country.today_confirmed}
              {' '}
              cases
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SelectCountry.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    today_confirmed: PropTypes.number,
  }),
  cardNumber: PropTypes.number,
};

SelectCountry.defaultProps = {
  country: PropTypes.shape({
    id: '',
  }),
  cardNumber: 0,
};

export default SelectCountry;
