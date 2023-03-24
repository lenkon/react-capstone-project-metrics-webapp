import React from 'react';
import renderer from 'react-test-renderer';
import * as reactRedux from 'react-redux';
import SearchShowName from '../components/SearchShowName/SearchShowName';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

describe('Search show name component test', () => {
  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  const mockStore = {
    thing1: 'Show',
  };

  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });
  afterEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
  });

  it('renders correctly', () => {
    const component = renderer.create(
      <SearchShowName />,
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
