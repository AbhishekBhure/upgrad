const log = (str) => console.log(str);

const showTime = (date = Date()) => {
  const dateObj = new Date(date);
  return `${dateObj.getHours()}:${dateObj.getMinutes()}:${dateObj.getSeconds()}`;
};

// log(showTime(new Date("3 April, 2021 20:35")));

const date = new Date(2020, 2, 20);

date.setHours(15);
date.setMinutes(35);
date.setSeconds(23);
date.setMilliseconds(12);

const getDate = date.getDate();
const getDay = date.getDay();
const getMonth = date.getMonth();
const getFullYear = date.getFullYear();

const getHours = date.getHours();
const getMinutes = date.getMinutes();
const getSeconds = date.getSeconds();
const getMilliseconds = date.getMilliseconds();
const getTime = date.getTime();

console.log(`Date: ${date}`);
console.log(`The date: ${getDate}`);
console.log(`The day: ${getDay}`);
console.log(`The Month: ${getMonth}`);
console.log(`The year: ${getFullYear}`);
console.log(`Time: ${getHours}:${getMinutes}:${getSeconds}:${getMilliseconds}`);
console.log(`Time (ms since Epoch): ${getTime}`);
