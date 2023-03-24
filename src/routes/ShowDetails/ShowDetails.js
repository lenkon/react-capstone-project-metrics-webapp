import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';
import styles from './ShowDetails.module.css';

const API = 'https://api.themoviedb.org/3';

function fetchShowDetails(PATH) {
  return fetch(API + PATH, {
    headers: {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWE0NGY4ODQ1ZjAxZDEwMjA4Y2M4OGY1ZDQxZjQzNiIsInN1YiI6IjY0MTljZWFmNTY5MGI1MDEwMTYzYjAwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mma1ugVX_egItAagz_22PfRbFsSBnZp7vpCirBWvsys',
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
    .then((response) => response.json());
}

export default function ShowDetails() {
  const [loading, setLoading] = useState(false);

  const { showId } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetchShowDetails(`/tv/${showId}`).then((data) => {
      setShow(data);
      setLoading(true);
    });
    return () => {
      setShow({});
    };
  }, [showId]);

  if (!show) {
    return null;
  }

  const imageLink = `https://image.tmdb.org/t/p/w500${show.poster_path}`;
  return (
    <div>
      {
    loading

      ? (
        <div className={styles.detailsContainer}>
          <img className={`${styles.col} ${styles.showImg}`} src={imageLink} alt={show.name} />
          <div className={`${styles.col} ${styles.showDetails}`}>
            <Link to="/">
              <div className={styles.button}>
                <MdChevronLeft size={35} />
                Back
              </div>
            </Link>
            <p className={styles.firstItem}>
              <strong>Title: </strong>
              {show.name}
            </p>
            <p>
              <strong>Genres: </strong>
              {show.genres.map((genre) => genre.name).join(', ')}
            </p>
            <p>
              <strong>Description: </strong>
              {show.overview}
            </p>
          </div>
        </div>
      )

      : (
        <div className="categoryFlex">
          <div className="categoryFill">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      )

  }
    </div>
  );
}
