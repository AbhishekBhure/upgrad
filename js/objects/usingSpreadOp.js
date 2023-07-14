const book = {
  id: 1,
  title: "Ego is the Enemy",
  authors: [
    {
      authorCode: 1,
      name: "Ryan Holiday",
    },
    {
      authorCode: 2,
      name: "Robert Greene",
    },
  ],
  publisher: "Harper",
  isbn10: "0-0960-XYZ",
  cost: 7.99,
};

// console.log(book);

const { title, authors, publisher, cost } = {
  ...book,
  title: "The Obstacle is the Way",
};

// console.log(
//   `The ${title} book author's are ${authors
//     .map((ele) => ele.name)
//     .join(" and ")} was published by ${publisher} for the cost $${cost}`
// );

const user = {
  id: 1,
  name: "John Doe",
  age: 23,
};

const banking = {
  accType: "saving",
  accNum: 983791023,
  bankName: "Chase",
};

// const userDetails = Object.assign({}, user, banking);
const userDetails = { ...user, ...banking, address: "ghar", id: 2 }; //we can also add properties and update the exixting one
console.log(userDetails);
