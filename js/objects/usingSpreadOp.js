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
// console.log(userDetails);

const userDb = [
  {
    id: 1,
    name: "Dmitri Mishkov",
    email: "dmitri.m@sprintserve.co",
    password: "tempPass",
  },
  {
    id: 2,
    name: "Jimmy McIntyre",
    email: "jimmymc@whatmail.com",
    password: "tempPass",
  },
  {
    id: 3,
    name: "David Adams",
    email: "adams@whatmail.com",
    password: "tempPass",
  },
];

const userPriveleges = {
  profile: true,
  admin: false,
  billing: true,
};

const genPassword = (name) =>
  name.replace(/\s/, "-").toLowerCase().split("").reverse().join("");

// Write your code here...

const configureUsers = userDb.map((user) => ({
  ...user,
  password: genPassword(user.name),
  ...userPriveleges,
}));

console.log(configureUsers);
