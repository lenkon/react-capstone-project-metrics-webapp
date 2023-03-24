import React from 'react';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import categoriesReducer from '../redux/show/categories';
import allCategoryReducer from '../redux/show/allCategory';
import SearchCategory from '../components/SearchCategory/SearchCategory';

const createTestStore = () => {
  const store = configureStore({
    reducer: {
      category: categoriesReducer,
      allCategory: allCategoryReducer,
    },
  });

  return store;
};
export default createTestStore;

describe('Search Category React-Redux Component test', () => {
  let store;
  let component;

  beforeEach(() => {
    store = createTestStore();

    component = renderer.create(
      <Provider store={store}>
        <SearchCategory />
      </Provider>,
    ).toJSON();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
