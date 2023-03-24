import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import reducer, { updateShow, fetchShow } from '../redux/show/shows';

describe('test for shows Reducer', () => {
  test('test for updateShow action when previousState is empty', () => {
    const previousState = [];

    const newState = [
      { id: 73586, name: 'Yellowstone', poster_path: '/peNC0eyc3TQJa6x4TdKcBPNP4t0.jpg' },
    ];

    const result = reducer(previousState, updateShow(newState));

    expect(result).toEqual(newState);
  });

  test('test for updateShow action when previousState has a value', () => {
    const previousState = [{ id: 73586, name: 'Yellowstone', poster_path: '/peNC0eyc3TQJa6x4TdKcBPNP4t0.jpg' },
    ];

    const newState = [
      { id: 195868, title: 'Gotham Knights', poster_path: '/tbCGmkR3TRDug4weDnHEGCu3WEC.jpg' },
    ];

    const result = reducer(previousState, updateShow(newState));

    expect(result).toEqual(newState);
  });

  test('test for updateShow action type', () => {
    const actionType = 'shows/UPDATE_SHOW';

    const newState = [
      { id: 195868, title: 'Gotham Knights', poster_path: '/tbCGmkR3TRDug4weDnHEGCu3WEC.jpg' },
    ];

    const result = updateShow(newState);

    expect(result.type).toEqual(actionType);
  });

  test('test for fetchShow action', async () => {
    const store = configureStore({
      reducer,
    });

    const idGenre = 80;

    const result = await store.dispatch(fetchShow(idGenre));
    expect(result.payload).toHaveLength(20);
  });

  test('test for fetchShow action with wrong idGenre', async () => {
    const store = configureStore({
      reducer,
    });

    const idGenre = 0;

    const result = await store.dispatch(fetchShow(idGenre));
    expect(result.payload).toHaveLength(0);
  });

  test('test for fetchShow action type', async () => {
    const actionType = 'shows/GET_SHOW/fulfilled';

    const store = configureStore({
      reducer,
    });

    const idGenre = 80;
    const result = await store.dispatch(fetchShow(idGenre));
    expect(result.type).toEqual(actionType);
  });
});
