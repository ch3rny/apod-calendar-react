import React, { useRef } from 'react'
import styles from './styles.module.css'
import { useHistory } from 'react-router-dom'

export const SearchBar = () => {
  const history = useHistory();
  const inputEl = useRef(null);
  const onButtonClick = () => {
    inputEl.current.focus();
  };
  const searchData = (key) => {
    if (key === 'Enter') {
      history.push(`/search/${inputEl.current.value}`);
      inputEl.current.blur();
    }
  }
  return (
    <div className={styles.searchContainer}>
      <input ref={inputEl} type="text" className={styles.input} onKeyUp={(e) => searchData(e.key)} />
      < button className={styles.searchButton} onClick={onButtonClick}>
        <span role="img" aria-label="search">
          🔎
        </span>
      </button>
    </div>
  );
}