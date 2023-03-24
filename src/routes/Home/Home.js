import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './Home.module.css';
import { updateShow } from '../../redux/show/shows';
import SearchCategory from '../../components/SearchCategory/SearchCategory';
import { getCategory } from '../../redux/show/categories';

export default function Home() {
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateShow([]));
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div>
      <h2 className={styles.title}>Show Categories</h2>
      <SearchCategory />
      <ul className={styles.showContainer} data-testid="categoryList">
        {categories.map((category) => (
          <Link key={category.id} to={`/detailPage/${category.id}`}>
            <li className={styles.showCard}>
              <div>{category.name}</div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
