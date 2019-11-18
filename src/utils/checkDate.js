import parse from "date-fns/parse";
import isAfter from "date-fns/isAfter";
import isBefore from "date-fns/isBefore";

export const checkDate = date => {
  const parsedDate = parse(date, "yyyy-MM-dd", new Date());
  if (isAfter(parsedDate, new Date())) {
    return false;
  }
  if (isBefore(parsedDate, parse("1995-06-16", "yyyy-MM-dd", new Date()))) {
    return false;
  }
  return true;
};
