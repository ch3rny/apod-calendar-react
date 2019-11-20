import React, { useMemo } from 'react'
import { getPreviousDate, getNextDate, checkDate } from '/utils'
import { useHistory } from 'react-router-dom'

export const ApodNavbar = ({ date }) => {
  const prevDate = useMemo(() => getPreviousDate(date), [date])
  const nextDate = useMemo(() => getNextDate(date), [date])
  const history = useHistory()
  const handleClick = date => {
    history.push(`/${date}`)
  }
  return (
    <nav>
      <button
        disabled={!checkDate(prevDate)}
        onClick={() => handleClick(prevDate)}
      >
        &lsaquo;
      </button>
      <span>{date}</span>
      <button
        disabled={!checkDate(nextDate)}
        onClick={() => handleClick(nextDate)}
      >
        &rsaquo;
      </button>
    </nav>
  )
}
