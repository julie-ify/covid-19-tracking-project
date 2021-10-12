import React from 'react';
import { useSelector } from 'react-redux';
import SelectCountry from './SelectCountry';
/* eslint-disable */

const Main = () => {
  const countries = useSelector((state) => state.countries);
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
  // console.log(CountryWithRegion);
  return (
    <div>
      <div>
        <ul>
          {CountryWithRegion.map((country) => (
            <SelectCountry country={country} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Main;
