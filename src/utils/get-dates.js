import addDays from 'date-fns/addDays'
import eachDayOfInterval from 'date-fns/eachDayOfInterval'
import format from 'date-fns/format'
import getDay from 'date-fns/getDay'
import subDays from 'date-fns/subDays'

export const getDates = (year, month) => {
  const firstDay = getDay(new Date(year, month, 1))
  const firstDate = subDays(new Date(year, month, 1), firstDay)
  const lastDate = addDays(firstDate, 41)
  const dates = eachDayOfInterval({ start: firstDate, end: lastDate })
  return dates.map(date => format(date, 'yyyy-MM-dd'))
}
