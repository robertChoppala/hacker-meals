import CONSTANTS from "./constants";

/**
 * check date is valid/invalid
 */
const isDateValid = (date) => {
  const [startDate, endDate] = date;
  if (
    new Date(startDate) != CONSTANTS.NOT_VALID &&
    new Date(endDate) != CONSTANTS.NOT_VALID
  ) {
    return true;
  }
  return false;
};

/**
 * get all dates btw two dates
 */
const getDateRange = (start, end) => {
  const date1 = new Date(start);
  const date2 = new Date(end);
  return Math.ceil(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
};

/**
 * sorts meals based on date
 */
const getSortedMeals = (meals) => {
  return meals.sort((a, b) => new Date(a.date) - new Date(b.date));
};

export { isDateValid, getDateRange, getSortedMeals };
