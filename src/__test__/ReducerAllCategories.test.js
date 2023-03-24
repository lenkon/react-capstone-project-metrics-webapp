import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import reducer, { getAllCategories } from '../redux/show/allCategory';

describe('test for show Reducer', () => {
  test('test for getAllCategories action', async () => {
    const store = configureStore({
      reducer,
    });

    const result = await store.dispatch(getAllCategories());
    expect(result.payload).toHaveLength(16);
  });

  test('test for getAllCategories action type', async () => {
    const actionType = 'shows/GET_ALL_CATEGORY/fulfilled';

    const store = configureStore({
      reducer,
    });

    const result = await store.dispatch(getAllCategories());
    expect(result.type).toEqual(actionType);
  });
});
