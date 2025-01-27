export const convertDateToUnixTimestamp = (date) => {
  return Math.floor(date.getTime() / 1000);
};

export const convertUnixTimestampToDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString();
};

export const createDate = (date, days, weeks, months, years) => {
  let newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days + weeks * 7);
  newDate.setMonth(newDate.getMonth() + months);
  newDate.setFullYear(newDate.getFullYear() + years);
};
