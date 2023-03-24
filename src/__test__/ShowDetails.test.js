import React from 'react';
import renderer from 'react-test-renderer';
import ShowDetails from '../routes/ShowDetails/ShowDetails';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <ShowDetails />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
