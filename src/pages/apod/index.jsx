import React from 'react'
import styles from './styles.module.css'
import { ApodNavbar } from 'components/apod-navbar'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Loader } from 'components/loader'
import { useFetchData } from 'hooks'
const MediaContent = ({ apod }) => {

  return apod.media_type === 'image' ? (
    <div className={styles.mediaContainer}>
      <div className={styles.imageContainer}>
        <a href={apod.hdurl}>
          <img src={apod.url} alt={apod.title} />
        </a></div>
    </div>
  )
    : (
      <div className={styles.mediaContainer}>
        <iframe
          title="Media"
          src={apod.url}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    )

}

export const Apod = () => {
  const { date } = useParams();
  const { isLoaded, apod } = useFetchData(date)

  return (
    <>
      <div className="page">
        <ApodNavbar date={date} />
        {isLoaded ?
          <><MediaContent apod={apod} />
            <div className={styles.info}>
              <div className={styles.title}>{apod.title}</div>
              <div className={styles.copyright}>&copy; {apod.copyright}</div>
              <div className={styles.description}>{apod.description}</div>
              <Link className={styles.back} to='/'>
                <span role="img" aria-label="calendar" >📅</span>Back to Calendar
          </Link>
            </div></> : <Loader />}
      </div>
    </>
  )
}
