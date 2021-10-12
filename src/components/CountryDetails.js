import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCountry } from '../redux/country/country';

const CountryDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  useEffect(() => {
    dispatch(getCountry(id))
  }, [dispatch, id])
  
  const country = useSelector((state) => state.countryReducer.country);
  
  if (!country) {
    return null
  }
  console.log(country)
  const { name } = country;

  return <h1>{name}</h1>;
};

export default CountryDetails;
