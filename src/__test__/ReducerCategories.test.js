import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import reducer, { updateCategory, getCategory } from '../redux/show/categories';

describe('test for shows Reducer', () => {
  test('test for updateCategory action when previousState is empty', () => {
    const previousState = [];
    const newState = [
      { id: 73586, name: 'Yellowstone', poster_path: '/peNC0eyc3TQJa6x4TdKcBPNP4t0.jpg' },
    ];

    const result = reducer(previousState, updateCategory(newState));
    expect(result).toEqual(newState);
  });

  test('test for updateCategory action when previousState has a value', () => {
    const previousState = [{ id: 73586, name: 'Yellowstone', poster_path: '/peNC0eyc3TQJa6x4TdKcBPNP4t0.jpg' },
    ];

    const newState = [
      { id: 195868, title: 'Gotham Knights', poster_path: '/tbCGmkR3TRDug4weDnHEGCu3WEC.jpg' },
    ];

    const result = reducer(previousState, updateCategory(newState));
    expect(result).toEqual(newState);
  });

  test('test for updateCategory action type', () => {
    const actionType = 'shows/UPDATE_CATEGORY';

    const newState = [
      { id: 195868, title: 'Gotham Knights', poster_path: '/tbCGmkR3TRDug4weDnHEGCu3WEC.jpg' },
    ];

    const result = updateCategory(newState);

    expect(result.type).toEqual(actionType);
  });

  test('test for getCategory action', async () => {
    const store = configureStore({
      reducer,
    });

    const result = await store.dispatch(getCategory());
    expect(result.payload).toHaveLength(16);
  });

  test('test for getCategory action type', async () => {
    const actionType = 'shows/GET_CATEGORY/fulfilled';

    const store = configureStore({
      reducer,
    });

    const result = await store.dispatch(getCategory());
    expect(result.type).toEqual(actionType);
  });
});
