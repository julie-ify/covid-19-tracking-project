import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faCog,
  faMicrophoneAlt,
} from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header className="appHeader">
    <div className="headerFlex">
      <div className="headerItems">
        <FontAwesomeIcon icon={faAngleLeft} className="fontawesome" />
        <span>2021</span>
      </div>
      <div>
        <span>Country&apos; death</span>
      </div>
      <div className="headerItems">
        <FontAwesomeIcon icon={faMicrophoneAlt} />
        <FontAwesomeIcon icon={faCog} />
      </div>
    </div>
  </header>
);

export default Header;
