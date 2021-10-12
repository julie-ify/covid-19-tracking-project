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

  const totalConfirmedCases = CountryWithRegion.reduce((initial, element) => {
    return initial + element.today_confirmed;
  }, 0);
  return (
    <div>
      <div>
        <div>
          <h1>Total Confirmed Cases in Europe Today</h1>
          <span>{totalConfirmedCases}</span>
        </div>
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
