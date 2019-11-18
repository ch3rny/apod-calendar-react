import React, { useMemo, useState, useEffect } from 'react'
import styles from './styles.module.css'
import { checkDate } from '../../utils/checkDate'

const DEFAULT_BACKGROUND_URL = 'https://apod.nasa.gov/apod/calendar/S_190108.jpg'

const extractNumber = date => {
  return Number(date.split('-')[2])
}

const extractMonth = date => {
  return Number(date.split('-')[1] - 1)
}

export const CalendarCell = props => {
  const { date, month } = props;

  const [thumb, setThumb] = useState(DEFAULT_BACKGROUND_URL);

  useEffect(() => {
    const abortController = new AbortController();
    const fetchData = async () => {
      let resp = await fetch(`https://apodapi.herokuapp.com/api/?date=${date}&image_thumbnail_size=100&absolute_thumbnail_url=true&thumbs=true`, { signal: abortController.signal })
      resp = await resp.json()
      setThumb(`https://${resp.image_thumbnail}`)
    }
    checkDate(date) ? fetchData() : setThumb(DEFAULT_BACKGROUND_URL)
    return () => {
      abortController.abort();
    };
  }, [date])

  const number = useMemo(() => extractNumber(date), [date])

  const cellMonth = useMemo(() => extractMonth(date), [date])

  const style = useMemo(() => (
    {
      backgroundImage: `url(${thumb})`,
      cursor: "pointer",
      opacity: cellMonth === month ? 1 : 0.33
    }
  ), [thumb, month, cellMonth])

  return (
    <div className={styles.cell} style={style}>
      <div className={styles.number}> {number} </div>
    </div>
  )
}