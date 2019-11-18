import parse from "date-fns/parse";
import format from "date-fns/format";
import subDays from "date-fns/subDays";
export const getPreviousDate = date => {
  const parsedDate = parse(date, "yyyy-MM-dd", new Date());
  return format(subDays(parsedDate, 1), "yyyy-MM-dd");
};
