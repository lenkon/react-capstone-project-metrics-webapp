import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import ShowCard from '../components/ShowCard/ShowCard';

it('renders correctly', () => {
  const show = {
    id: 114885,
    name: 'Big Brother',
    poster_path: '/zmXxCP0op3PoCSiqXkSKDySbxe8.jpg',
  };

  const tree = renderer
    .create(
      <BrowserRouter>
        <ShowCard show={show} />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

ShowCard.propTypes = {
  show: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    poster_path: PropTypes.string,
  }),
};
