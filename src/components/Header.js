import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faCog,
  faMicrophoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { countryName } = props;

  return (
    <header className="appHeader">
      <div className="headerFlex">
        <div className="headerItems">
          <Link to="/" exact={`${true}`} className="regionLink">
            <FontAwesomeIcon icon={faAngleLeft} className="fontawesome" />
          </Link>
          <span>2021</span>
        </div>
        <div>
          {countryName && <span>{countryName}</span>}
          {!countryName && <span>All Countries Data</span>}
        </div>
        <div className="headerItems">
          <FontAwesomeIcon icon={faMicrophoneAlt} />
          <FontAwesomeIcon icon={faCog} />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  countryName: PropTypes.string,
};

Header.defaultProps = {
  countryName: '',
};
export default Header;
