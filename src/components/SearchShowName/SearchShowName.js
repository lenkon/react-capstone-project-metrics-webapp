/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchShowName.module.css';
import { updateShow } from '../../redux/show/shows';

function SearchShowName() {
  const allData = useSelector((state) => state.allData);
  const dispatch = useDispatch();

  const searchShowHandler = (event) => {
    const keyword = event.target.value;

    if (keyword !== '') {
      const results = allData.filter((user) => user.name.toLowerCase().includes(keyword.toLowerCase()));
      dispatch(updateShow(results));
    } else {
      dispatch(updateShow(allData));
    }
  };
  return (
    <div>
      <div className={styles.categoryContainer} data-testid="SearchShowName">
        <input className={styles.inputCategory} type="text" placeholder="Search show name.." onChange={(event) => searchShowHandler(event)} />
      </div>
    </div>
  );
}

export default SearchShowName;
