import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';
import ShowCard from '../../components/ShowCard/ShowCard';
import styles from './ShowCategories.module.css';
import SearchShowName from '../../components/SearchShowName/SearchShowName';
import { fetchShow } from '../../redux/show/shows';
import { getAllData } from '../../redux/show/allData';

export default function ShowCategories() {
  const { categoryId } = useParams();

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShow(categoryId));
    dispatch(getAllData(categoryId));
  }, [dispatch, categoryId]);

  const shows = useSelector((state) => state.show);
  const categories = useSelector((state) => state.category);
  const category = categories.filter((item) => item.id.toString() === categoryId);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div>
      {loading
        ? (
          <div>
            <div className={styles.flexTitle} data-testid="title">
              {(category.length === 0) ? '' : <h2 className={styles.title}>{category[0].name}</h2>}
              <Link to="/">
                <div className={styles.button} data-testid="backBtn">
                  <MdChevronLeft size={38} />
                  Back
                </div>
              </Link>
            </div>

            <SearchShowName />
            <ul className={styles.categoryContainer} data-testid="showList">
              {shows.map((show) => <ShowCard key={show.id} show={show} />)}
            </ul>
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
        )}

    </div>
  );
}
