const arr = [1, 2, 3, 4, 5];
const reducer = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(reducer);

const cart = [
  {
    id: 1,
    name: "Apple",
    price: 2,
    quantity: 2,
  },
  {
    id: 2,
    name: "Orange",
    price: 3,
    quantity: 3,
  },
  {
    id: 3,
    name: "Banana",
    price: 5,
    quantity: 1,
  },
];

const totalCost = cart.reduce(
  (acc, curr) => acc + curr.quantity * curr.price,
  0
);
const totalQuan = cart.reduce((acc, curr) => acc + curr.quantity, 0);
// console.log(`Total Cost : ${totalCost} of items ${totalQuan}`);

const nums = [1, 2, 3, 4, 5];
let newNums = [];
const greater = nums.some((ele) => {
  ele > 3 ? newNums.push(ele) : "false";
});
// console.log(newNums);

const myArr = [
  1,
  1,
  1,
  2,
  2,
  {
    id: 1,
    key: 12,
  },
  4,
  5,
  {
    id: 1,
    key: 12,
  },
];

const removeDup = (arr) =>
  arr.reduce(
    (acc, crr) =>
      !acc.some((ele) => JSON.stringify(ele) === JSON.stringify(crr))
        ? [...acc, crr]
        : acc,
    []
  );
console.log(removeDup(myArr));

const char2 = ["a", "b", "c", "a", "a", "c", "d"];
const removeDupliate = (arr) =>
  arr.reduce((acc, crr) => (!acc.includes(crr) ? [...acc, crr] : acc), []);

const char = ["h", "i", "j", "h", "i", "k"];
// const removeDupliate = (arr) =>
//   arr.reduce(
//     (acc, crr) => (!acc.some((ele) => ele === crr) ? [...acc, crr] : acc),
//     []
//   );
console.log(removeDupliate(char2));
