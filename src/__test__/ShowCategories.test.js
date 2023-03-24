import React from 'react';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import ShowCategories from '../routes/ShowCategories/ShowCategories';
import showsReducer from '../redux/show/shows';
import categoriesReducer from '../redux/show/categories';

const createTestStore = () => {
  const store = configureStore({
    reducer: {
      show: showsReducer,
      category: categoriesReducer,
    },
  });

  return store;
};
export default createTestStore;

describe('Show Categories React-Redux Component Test', () => {
  let store;
  let component;

  beforeEach(() => {
    store = createTestStore();

    component = renderer.create(
      <Provider store={store}>
        <ShowCategories />
      </Provider>,
    ).toJSON();
  });

  test('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
