import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import completedReducer from './redux/completedReducer';
import progressReducer from './redux/progressReducer';
import reducerOpen from './redux/reducerOpen';

export default createStore(
  combineReducers({ completedReducer, progressReducer, reducerOpen }),
  applyMiddleware(logger)
);
