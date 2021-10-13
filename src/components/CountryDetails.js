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
      <div className="eachCountryHead">
        <div className="eachCountry">
          <h1>{name}</h1>
          <span>{today_confirmed}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faGlobeEurope} />
        </div>
      </div>
      <div>
        {regions.map((region) => (
          <div>
            <div>{region.name}</div>
            <div>Confirmed cases: {region.today_confirmed}</div>
            <FontAwesomeIcon icon={faArrowCircleRight} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryDetails;
