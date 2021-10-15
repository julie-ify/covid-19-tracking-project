import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './countries/Countries';
import countryReducer from './country/country';

const reducer = combineReducers({
  countriesReducer,
  countryReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
