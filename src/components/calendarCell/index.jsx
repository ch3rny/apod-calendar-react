import React, { useMemo } from 'react'
import styles from './styles.module.css'
import useFetchData from '../../use/useFetchData'

const extractNumber = date => {
  return Number(date.split('-')[2])
}

const extractMonth = date => {
  return Number(date.split('-')[1] - 1)
}

export const CalendarCell = props => {
  const { date, month } = props;
  const { apod } = useFetchData(date)
  const number = useMemo(() => extractNumber(date), [date])
  const cellMonth = useMemo(() => extractMonth(date), [date])
  const style = useMemo(() => (
    {
      backgroundImage: `url(https://${apod.image_thumbnail})`,
      cursor: "pointer",
      opacity: cellMonth === month ? 1 : 0.33
    }
  ), [apod, month, cellMonth])

  return (
    <div className={styles.cell} style={style}>
      <div className={styles.number}> {number} </div>
    </div>
  )
}