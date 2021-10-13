import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';
import CountryHeader from '../components/CountryHeader';

it('renders correctly', () => {
  const countryHeader = renderer
    .create(
      <Provider store={store}>
        <CountryHeader />
      </Provider>,
    )
    .toJSON();
  expect(countryHeader).toMatchSnapshot();
});
