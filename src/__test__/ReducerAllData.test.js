import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import reducer, { getAllData } from '../redux/show/allData';

describe('test for shows Reducer', () => {
  test('test for getAllData action', async () => {
    const store = configureStore({
      reducer,
    });

    const idGenre = 80;

    const result = await store.dispatch(getAllData(idGenre));
    expect(result.payload).toHaveLength(20);
  });

  test('test for getAllData action with wrong idGenre', async () => {
    const store = configureStore({
      reducer,
    });

    const idGenre = 0;

    const result = await store.dispatch(getAllData(idGenre));
    expect(result.payload).toHaveLength(0);
  });

  test('test for getAllData action type', async () => {
    const actionType = 'shows/GET_ALL_DATA/fulfilled';

    const store = configureStore({
      reducer,
    });

    const idGenre = 80;

    const result = await store.dispatch(getAllData(idGenre));
    expect(result.type).toEqual(actionType);
  });
});
