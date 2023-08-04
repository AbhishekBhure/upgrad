const date = new Date(2021, 4, 10);

const addDays = (dateObj, days = 0) => {
  const daysToMs = days * 864_00_000;
  return new Date(dateObj.getTime() + daysToMs);
};

const addHours = (dateObj, hours = 0) => {
  const hoursToMs = hours * 36_00_000;
  return new Date(dateObj.getTime() + hoursToMs);
};

const addMin = (dateObj, minutes = 0) => {
  const minToMs = minutes * 60_000;
  return new Date(dateObj.getTime() + minToMs);
};

console.log(
  `International Family Day is on ${addDays(
    date,
    5
  ).toLocaleString()} and  ${addHours(date, 5).toLocaleString()} and ${addMin(
    date,
    30
  ).toLocaleString()}`
);
