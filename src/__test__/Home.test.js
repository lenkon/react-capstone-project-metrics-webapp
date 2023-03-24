import React from 'react';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import HomePage from '../routes/Home/Home';
import categoriesReducer from '../redux/show/categories';

const createTestStore = () => {
  const store = configureStore({
    reducer: {
      category: categoriesReducer,
    },
  });

  return store;
};
export default createTestStore;

describe('My Connected React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = createTestStore();

    component = renderer.create(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    ).toJSON();
  });

  test('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
