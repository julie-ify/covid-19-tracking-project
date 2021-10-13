import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStore';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';

it('renders correctly', () => {
  const header = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    )
    .toJSON();
  expect(header).toMatchSnapshot();
});
