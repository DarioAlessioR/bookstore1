import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
