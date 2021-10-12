import React from 'react';
import { useSelector } from 'react-redux';
import CountryHeader from './CountryHeader';
import Header from './Header';
import SelectCountry from './SelectCountry';
/* eslint-disable */

const Main = () => {
  const countries = useSelector((state) => state.countriesReducer.countries);
  const CountryWithRegion = [];
  const cont = [
    'Spain',
    'Italy',
    'Germany',
    'United Kingdom',
    'France',
    'Netherlands',
    'Belgium',
    'Portugal',
    'Switzerland',
    'Denmark',
  ];

  countries &&
    countries.map((country) => {
      cont.forEach((element) => {
        if (element === country.name) {
          CountryWithRegion.push(country);
        }
      });
    });
  return (
    <div>
      <Header />
      <div>
      <CountryHeader region={CountryWithRegion} />
        <ul>
          {CountryWithRegion.map((country) => (
            <SelectCountry country={country} key={country.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
