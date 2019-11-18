import parse from "date-fns/parse";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
export const getNextDate = date => {
  const parsedDate = parse(date, "yyyy-MM-dd", new Date());

  return format(addDays(parsedDate, 1), "yyyy-MM-dd");
};
