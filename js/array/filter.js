const nums = [989, 202, 123, 234, 345, 456, 567, 678];
const evenNums = nums.filter((ele) => ele % 2 === 0);
const oddNums = nums.filter((ele) => ele % 2 !== 0);
// console.log(evenNums);
// console.log(oddNums);

const employee = [
  {
    name: "John",
    age: 30,
    position: "Developer",
  },
  {
    name: "Jane",
    age: 25,
    position: "Designer",
  },
  {
    name: "Jack",
    age: 35,
    position: "Manager",
  },
  {
    name: "Jack",
    age: 35,
    position: "UI/UX",
  },
];

const findEmployee = ([prop, val], arr) =>
  arr.filter((ele) => ele[prop] === val);
// console.log(findEmployee(["position", "UI/UX"], employee));

const users = [
  {
    name: "John M",
    isVerified: true,
  },
  {
    name: "Jane S",
    isVerified: false,
  },
  {
    name: "Wanda M",
    isVerified: true,
  },
  {
    name: "Tony S",
    isVerified: false,
  },
  {
    name: "Emilio Q",
    isVerified: true,
  },
  {
    name: "Jonathan W",
    isVerified: false,
  },
];

const isVerified = users
  .filter(({ isVerified }) => isVerified)
  .map(({ name }) => name);

const notVerified = users
  .filter(({ isVerified }) => !isVerified)
  .map(({ name }) => name);

console.log(`Verified: ${isVerified}`);
console.log(`Not Verified: ${notVerified}`);
