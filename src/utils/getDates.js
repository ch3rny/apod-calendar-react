import getDay from "date-fns/getDay";
import addDays from "date-fns/addDays";
import subDays from "date-fns/subDays";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import format from "date-fns/format";

export const getDates = (year, month) => {
  const firstDay = getDay(new Date(year, month, 1));
  const firstDate = subDays(new Date(year, month, 1), firstDay);
  const lastDate = addDays(firstDate, 41);
  const dates = eachDayOfInterval({ start: firstDate, end: lastDate });
  const formattedDates = dates.map(date => {
    return format(date, "yyyy-MM-dd");
  });
  return formattedDates;
};
