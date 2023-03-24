import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './ShowCard.module.css';

export default function ShowCard({ show }) {
  const imageLink = `https://image.tmdb.org/t/p/w300${show.poster_path}`;
  return (
    <li className={styles.showCard}>
      <Link to={`/tv/${show.id}`}>
        <img
          width={220}
          height={330}
          className={styles.showImage}
          src={imageLink}
          alt={show.name}
        />
        <div>{show.name}</div>
      </Link>
    </li>
  );
}

ShowCard.propTypes = {
  show: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    poster_path: PropTypes.string,
  }).isRequired,
};
