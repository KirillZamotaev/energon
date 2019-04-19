import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import renderProps from './renderProps';
// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer,
  renderProps,
  applyMiddleware(thunk)
);

export default store;