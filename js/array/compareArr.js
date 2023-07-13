// const arrA = [1, 2, 3, 4, 5, { id: 1 }, "Hello"];
// const arrB = [1, 2, 3, 4, 5, "Hello", { id: 1 }];

// const compare = (arrA, arrB) => JSON.stringify(arrA) === JSON.stringify(arrB);

// const isIdentical = (arrA, arrB) => {
//   const stringA = arrA.map((ele) => JSON.stringify(ele));
//   const stringB = arrB.map((ele) => JSON.stringify(ele));

//   return [
//     arrA.length === arrB.length,
//     ...stringA.map((ele) => stringB.includes(ele)),
//     ...stringB.map((ele) => stringA.includes(ele)),
//   ].every((ele) => ele);
// };
// console.log(
//   isIdentical(arrA, arrB) ? "Array a is identical to Array B" : "not"
// );

const shoppingList = ["Apples", "Milk", "Pasta", "Cheese Cubes", "Coke Zero"];
const itemsBought = ["Cheese Cubes", "Pasta", "Apples", "Milk", "Coke Zero"];

const hasSameContents = (arrA, arrB) => {
  const stringA = arrA.map((el) => JSON.stringify(el));
  const stringB = arrB.map((el) => JSON.stringify(el));

  return [
    arrA.length === arrB.length,
    ...stringA.map((el) => stringB.includes(el)),
    ...stringB.map((el) => stringA.includes(el)),
  ].every((el) => el);
};

console.log(
  hasSameContents(shoppingList, itemsBought)
    ? "All items bought"
    : "Items missing..."
);
