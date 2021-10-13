import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CountryHeader from './CountryHeader';
import Header from './Header';
import SelectCountry from './SelectCountry';
import SearchBar from './SearchBar';

const Main = () => {
  let cardNumber = 0;
  const countries = useSelector((state) => state.countriesReducer.countries);
  const [searchBar, setSearchBar] = useState('');

  const handleChange = (e) => {
    setSearchBar(() => e.target.value);
  };

  return (
    <div className="appWrap">
      <Header />
      <div>
        <CountryHeader region={countries} />
        <div className="countrySearch">
          <div className="countries">stats by country - 2021</div>
          <SearchBar value={searchBar} handleInput={handleChange} />
        </div>
        <ul className="mainGrid">
          {countries
            && countries
              .filter((item) => {
                if (searchBar === '') {
                  return item;
                }
                return item.name
                  .toLowerCase()
                  .includes(searchBar.toLocaleLowerCase());
              })
              .map((country) => {
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
