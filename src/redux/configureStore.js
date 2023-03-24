import { configureStore } from '@reduxjs/toolkit';
import showsReducer from './show/shows';
import allDataReducer from './show/allData';
import categoriesReducer from './show/categories';
import allCategoryReducer from './show/allCategory';

const store = configureStore({
  reducer: {
    show: showsReducer,
    category: categoriesReducer,
    allCategory: allCategoryReducer,
    allData: allDataReducer,
  },
});

export default store;
