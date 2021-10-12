import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountry } from '../redux/country/country';
import Header from './Header';

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
  const { name,  } = country;
  console.log(country);

  return (
    <div>
     <Header countryName={name} />
      <h1>{name}</h1>
      <span>{}</span>
    </div>
  );
};

export default CountryDetails;
