/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleRight,
  faGlobeEurope,
} from '@fortawesome/free-solid-svg-icons';
import { getCountry } from '../redux/country/country';
import Header from './Header';

const CountryDetails = () => {
  const [searchValue, setSearchValue] = useState('');
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

  const handleChange = (e) => {
    setSearchValue(() => e.target.value);
  };

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
        <input placeholder="Search..." className="searchBar" value={searchValue} onChange={handleChange} />
      </div>
      <div className="eachCountryGrid">
        {regions && regions
          .filter((item) => {
            if (searchValue === '') {
              return item;
            }
            return item.name
              .toLowerCase()
              .includes(searchValue.toLocaleLowerCase());
          })
          .map((region) => (
            <div className="eachCountryCard" key={region.id}>
              <div className="bgHeading">{region.name}</div>
              <div className="cases">
                <div>
                  {region.today_confirmed}
                  {' '}
                  confirmed cases
                </div>
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </div>
            </div>
          ))}
        {!regions.length && (
          <h1 className="errorMsg">
            There&apos;re no listed regions for this country!!
          </h1>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
