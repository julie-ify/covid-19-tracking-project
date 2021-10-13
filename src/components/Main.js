import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CountryHeader from './CountryHeader';
import Header from './Header';
import SelectCountry from './SelectCountry';
import SearchBar from './SearchBar';
/* eslint-disable */

const Main = () => {
  let cardNumber = 0;
  const countries = useSelector((state) => state.countriesReducer.countries);
  const [searchBar, setSearchBar] = useState('');
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

  const handleChange = (e) => {
    setSearchBar(() => e.target.value);
  };

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
          <SearchBar value={searchBar} handleInput={handleChange} />
        </div>
        <ul className="mainGrid">
          {CountryWithRegion.filter((item) => {
            if (searchBar === '') {
              return item;
            } else {
              if (
                item.name
                  .toLowerCase()
                  .includes(searchBar.toLocaleLowerCase())
              ) {
                return item;
              }
            }
          }).map((country) => {
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
