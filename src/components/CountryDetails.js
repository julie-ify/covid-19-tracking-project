import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountry } from '../redux/country/country';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './Header';
import {
  faArrowCircleRight,
  faGlobeEurope,
} from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';

const CountryDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getCountry(id));
  }, [dispatch, id]);

  const country = useSelector((state) => state.countryReducer.country);

  if (!country) {
    return null;
  }
  const { name, today_confirmed, regions } = country;

  return (
    <div>
      <div>
        <Header countryName={name} />
      </div>
      <div className="eachCountry">
        <div>
          <FontAwesomeIcon icon={faGlobeEurope} className="imgCover" />
        </div>
        <div className="eachCountryHead">
          <h1>{name}</h1>
          <span>{today_confirmed}</span>
        </div>
      </div>
      <div className="regionSearch">
        <div className="regions">region breakdown - 2021</div>
        <SearchBar />
      </div>
      <div className="eachCountryGrid">
        {regions.map((region) => (
          <div className="eachCountryCard">
            <div className="bgHeading">{region.name}</div>
            <div className="cases">
              <div>Confirmed cases: {region.today_confirmed}</div>
              <FontAwesomeIcon icon={faArrowCircleRight} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryDetails;
