import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/ConfigureStore';
import CountryDetails from '../components/CountryDetails';

it('renders correctly', () => {
  const countryDetails = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <CountryDetails />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(countryDetails).toMatchSnapshot();
});
