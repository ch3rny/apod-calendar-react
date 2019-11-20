import { useContext } from 'react'
import { CalendarContext } from 'components/calendar-provider'

export const useCalendarNavigation = () => {
  const [state, setState] = useContext(CalendarContext)
  const setNextMonth = () => {
    state.month < 11
      ? setState(state => ({ ...state, month: state.month + 1 }))
      : setState(state => ({ month: 0, year: state.year + 1 }))
  }
  const setPrevMonth = () => {
    state.month > 0
      ? setState(state => ({ ...state, month: state.month - 1 }))
      : setState(state => ({ month: 11, year: state.year - 1 }))
  }
  return {
    setNextMonth,
    setPrevMonth,
    year: state.year,
    month: state.month
  }
}
