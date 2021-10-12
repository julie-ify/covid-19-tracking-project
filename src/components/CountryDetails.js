import React from 'react';
import { useSelector } from 'react-redux';

const CountryDetails = () => {
  const country = useSelector((state) => state.countryReducer.country);
  console.log(country);

  return <h1>hello</h1>;
};

export default CountryDetails;
