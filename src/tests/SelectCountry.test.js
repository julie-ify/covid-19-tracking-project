import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/ConfigureStore';
import SelectCountry from '../components/SelectCountry';

it('renders correctly', () => {
  const select = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <SelectCountry />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(select).toMatchSnapshot();
});
