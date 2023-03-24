/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchCategory.module.css';
import { updateCategory } from '../../redux/show/categories';

function SearchCategory() {
  const allCategory = useSelector((state) => state.allCategory);

  const dispatch = useDispatch();

  const searchHandler = (event) => {
    const keyword = event.target.value;

    if (keyword !== '') {
      const results = allCategory.filter((user) => user.name.toLowerCase().includes(keyword.toLowerCase()));
      dispatch(updateCategory(results));
    } else {
      dispatch(updateCategory(allCategory));
    }
  };
  return (
    <div className={styles.categoryContainer} data-testid="SearchCategory">
      <input className={styles.inputCategory} type="text" placeholder="Search show category.." onChange={(event) => searchHandler(event)} />
    </div>
  );
}

export default SearchCategory;
