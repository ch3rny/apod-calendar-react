import React from 'react'
import { useCalendarNavigation } from 'hooks'

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

export const CalendarNavbar = () => {
  const { year, month, setPrevMonth, setNextMonth } = useCalendarNavigation()
  return (
    <nav>
      <button disabled={month === 5 && year === 1995} onClick={setPrevMonth}>
        &lsaquo;
      </button>
      <span>
        {monthNames[month]} {year}
      </span>
      <button
        disabled={
          month === new Date().getMonth() && year === new Date().getFullYear()
        }
        onClick={setNextMonth}
      >
        &rsaquo;
      </button>
    </nav>
  )
}
