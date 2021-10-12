import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './countries/Countries';

const store = createStore(countriesReducer, applyMiddleware(logger, thunk));
 
export default store;