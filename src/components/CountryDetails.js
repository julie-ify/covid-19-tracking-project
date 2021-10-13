import React, { useEffect, useState } from 'react';
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
        <SearchBar value={searchValue} handleChange={handleChange} />
      </div>
      <div className="eachCountryGrid">
        {regions && regions
          .filter((item) => {
            if (searchValue === '') {
              return item;
            } else {
              if (
                item.name
                  .toLowerCase()
                  .includes(searchValue.toLocaleLowerCase())
              ) {
                return item;
              }
            }
          })
          .map((region) => (
            <div className="eachCountryCard">
              <div className="bgHeading">{region.name}</div>
              <div className="cases">
                <div>Confirmed cases: {region.today_confirmed}</div>
                <FontAwesomeIcon icon={faArrowCircleRight} />
              </div>
            </div>
          ))}
          {!regions.length && (
            <h1 className="errorMsg">There're no listed regions for this country!!</h1>
          )}
      </div>
    </div>
  );
};

export default CountryDetails;
