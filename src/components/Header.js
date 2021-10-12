import React from 'react';
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
          <Link to='/' exact className="regionLink">
            <FontAwesomeIcon icon={faAngleLeft} className="fontawesome" />
          </Link>
          <span>2021</span>
        </div>
        <div>
          {countryName && <span>{countryName}</span>}
          {!countryName && <span>All countries</span>}
        </div>
        <div className="headerItems">
          <FontAwesomeIcon icon={faMicrophoneAlt} />
          <FontAwesomeIcon icon={faCog} />
        </div>
      </div>
    </header>
  );
};

export default Header;
