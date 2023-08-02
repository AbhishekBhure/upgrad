const waltDisneyDOB = new Date("5 december, 1901 00:35:00");

const yearsTo = (date) => {
  const diff = (date - Date.now()) / 31536000000;
  return Math.abs(diff.toPrecision(4));
};
console.log(
  `Walt Desinry Birthday is on ${waltDisneyDOB.toLocaleString(
    "en-IN"
  )} and  he is ${yearsTo(waltDisneyDOB)} years ago!`
);
