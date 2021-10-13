import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const SelectCountry = (props) => {
  const { country, cardNumber } = props;
  return (
    <div
      className={
        cardNumber === 2 || cardNumber === 3 ? 'coloredCard' : 'plainCard'
      }
    >
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
  );
};

SelectCountry.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    today_confirmed: PropTypes.number,
  }).isRequired,
  cardNumber: PropTypes.number.isRequired,
};

export default SelectCountry;
