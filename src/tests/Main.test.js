import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/ConfigureStore';
import Main from '../components/Main';

it('renders correctly', () => {
  const main = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(main).toMatchSnapshot();
});
