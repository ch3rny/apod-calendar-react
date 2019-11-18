// eslint-disable-next-line
import React, { useMemo } from "react";
import styles from './styles.module.css'
import useCalendarNavigation from '../../use/useCalendarNavigation'
import { CalendarCell } from '../../components/calendarCell'
import { CalendarNavbar } from '../../components/calendarNavbar'
import { NavLink } from 'react-router-dom'
import { checkDate, getDates } from '../../utils'


const days = ['Sun', 'Mon', "Tue", "Wed", "Thu", "Fri", "Sat"]

const WeekDays = (props) => {
  const dayItems = props.days.map((day) =>
    <div key={day}>{day}</div>
  );
  return (
    <>
      {dayItems}
    </>
  );
}

const CalendarDays = (props) => {
  const { month } = props
  const dateItems = props.dates.map((date) => {
    return checkDate(date) ? < NavLink to={date} key={date} >
      <CalendarCell date={date} month={month} />
    </NavLink >
      : <CalendarCell date={date} month={month} key={date} />
  })
  return (
    <>
      {dateItems}
    </>
  )
}


export const Calendar = () => {
  const { year, month } = useCalendarNavigation()

  const dates = useMemo(() => getDates(year, month), [year, month])

  return (
    <div className="page">
      <CalendarNavbar />
      <div className={styles.calendar}>
        <WeekDays days={days} />
        <CalendarDays dates={dates} month={month} />
      </div>
    </div>
  )
}
