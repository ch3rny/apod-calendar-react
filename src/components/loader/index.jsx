import React from 'react'
import styles from './styles.module.css'
export const Loader = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.loader}>
        <div className={styles.satellite}>
          <span role="img" aria-label="moon">
            🌑
          </span>
        </div>
        <div className={styles.earth} />
        <div>loading...</div>
      </div>
    </div>
  )
}
