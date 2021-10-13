import React from 'react';
import { useSelector } from 'react-redux';
import CountryHeader from './CountryHeader';
import Header from './Header';
import SelectCountry from './SelectCountry';
import SearchBar from './SearchBar';
/* eslint-disable */

const Main = () => {
  let cardNumber = 0;
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
    <div className="appWrap">
      <Header />
      <div>
        <CountryHeader region={CountryWithRegion} />
        <div className="countrySearch">
          <div className="countries">region breakdown - 2021</div>
          <SearchBar />
        </div>
        <ul className="mainGrid">
          {CountryWithRegion.map((country) => {
            if (cardNumber + 1 > 4) {
              cardNumber = 1;
            } else {
              cardNumber += 1;
            }
            return (
              <SelectCountry
                country={country}
                key={country.id}
                cardNumber={cardNumber}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Main;
