import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const reducer = combineReducers({
  bookReducer,
  categoriesReducer,
});

const store = configureStore(reducer);

export default store;
