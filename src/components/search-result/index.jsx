import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

export const SearchResult = ({ result }) => {
  return (
    <Link to={`/${result.date}`} className={styles.link}>
      <div className={styles.resultContainer}>
        {result.media_type === 'image' ? (
          <img
            src={result.url}
            alt={result.title}
            className={styles.resultImage}
          />
        ) : (
          <img
            src="https://apod.nasa.gov/apod/calendar/S_191118.jpg"
            alt={result.title}
            className={styles.resultImage}
          />
        )}
        <div className={styles.infoContainer}>
          <div className={styles.title}>{result.title}</div>
          <div>{result.date}</div>
          <div className={styles.description}>{result.description}</div>
        </div>
      </div>
    </Link>
  )
}
