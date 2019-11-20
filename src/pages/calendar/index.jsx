// eslint-disable-next-line
import React, { useMemo } from 'react'
import styles from './styles.module.css'
import { CalendarCell } from 'components/calendar-cell'
import { CalendarNavbar } from 'components/calendar-navbar'
import { NavLink } from 'react-router-dom'
import { checkDate, getDates } from 'utils'
import { useCalendarNavigation } from 'hooks'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const CalendarDays = ({ month, dates }) => {
  const dateItems = dates.map(date => {
    return checkDate(date) ? (
      <NavLink to={date} key={date}>
        <CalendarCell date={date} month={month} />
      </NavLink>
    ) : (
      <CalendarCell date={date} month={month} key={date} />
    )
  })
  return <>{dateItems}</>
}

export const Calendar = () => {
  const { year, month } = useCalendarNavigation()
  const dates = useMemo(() => getDates(year, month), [year, month])

  return (
    <div className="page">
      <CalendarNavbar />
      <div className={styles.calendar}>
        {days.map(day => (
          <div key={day}>{day}</div>
        ))}
        <CalendarDays dates={dates} month={month} />
      </div>
    </div>
  )
}
