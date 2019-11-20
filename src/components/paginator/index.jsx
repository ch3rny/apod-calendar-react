import React from 'react'
import styles from './styles.module.css'
export const Paginator = ({
  setNextPage,
  setPrevPage,
  nextDisabled,
  prevDisabled
}) => {
  return (
    <div className={styles.pagination}>
      <button
        disabled={prevDisabled}
        onClick={setPrevPage}
        className={styles.paginationButton}
      >
        prev
      </button>
      <button
        disabled={nextDisabled}
        onClick={setNextPage}
        className={styles.paginationButton}
      >
        next
      </button>
    </div>
  )
}
