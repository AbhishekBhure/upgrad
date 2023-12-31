const dateA = new Date();
const dateB = new Date("6 august, 2023 12:00:00");

const dateDiff = (start, end, format) => {
  const diff = end - start;
  const hasElapsed = diff <= 0;
  const suffix = hasElapsed ? "elapsed..." : "left...";

  const days = `${((hasElapsed ? -diff : diff) / 86400000).toPrecision(
    2
  )} day's`;
  const hours = `${Math.ceil((hasElapsed ? -diff : diff) / 3600000)} hours`;
  const minutes = `${Math.ceil((hasElapsed ? -diff : diff) / 60000)} minutes`;
  const seconds = `${Math.ceil((hasElapsed ? -diff : diff) / 1000)} seconds`;

  switch (format) {
    case "D":
      return `${days} ${suffix}`;
    case "H":
      return `${hours} ${suffix}`;
    case "M":
      return `${minutes} ${suffix}`;
    case "S":
      return `${seconds} ${suffix}`;
    default:
      return "Invalid";
  }
};

console.log(dateDiff(dateA, dateB, "M"));

// const dates = [
//   ["10 Feb, 2021", "1 Mar, 2021"],
//   ["25 Dec, 2020", "25 Dec, 1999"],
//   ["1 Jan, 2021", "1 Jan, 1954"],
// ];

// const dateDiff = (start, end, format = "D") => {
//   const diff = end - start;
//   const suffix = diff <= 0 ? "elapsed..." : "left...";
//   const days = `${(Math.abs(diff) / 86400000).toPrecision(5)} days`;
//   const hours = `${Math.ceil(diff) / 3600000} hours`;
//   const minutes = `${Math.ceil(diff) / 60000} minutes`;
//   const seconds = `${Math.ceil(diff) / 1000} seconds`;

//   switch (format) {
//     case "D":
//       return `${days} ${suffix}`;
//     case "H":
//       return `${hours} ${suffix}`;
//     case "M":
//       return `${minutes} ${suffix}`;
//     case "S":
//       return `${seconds} ${suffix}`;
//   }
// };

// dates.forEach(([d1, d2]) => {
//   const dateD1 = new Date(d1);
//   const dateD2 = new Date(d2);
//   console.log(
//     `Diff between ${d1} and ${d2} is ${dateDiff(dateD1, dateD2, "D")}`
//   );
// });

let num = 0.1 + 0.2;
console.log(parseFloat(num));
console.log(0.1 + 0.2 == 0.3);
