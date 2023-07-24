const user = {
  id: 1,
  name: "John Doe",
  age: 23,
  address: "123 Main St",
  city: "New York",
  state: "NY",
  zip: 10001,
};

// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// if (Object.keys(user).includes("city")) {
//   console.log(user.city);
// }

const findVal = (val, obj) => Object.values(obj).includes(val);
// console.log(findVal("Main Street", user));

for (let [key, val] of Object.entries(user)) {
  //   console.log(key, val);
}

const book = {
  isbn: "0-671-00410-7",
  title: "Contact",
  author: "Carl Sagan",
  publisher: "Pocket Books",
};

const findKey = (val, obj) => Object.keys(obj).includes(val);
console.log(`ISBN : ${findKey("isbn", book) ? "Yes" : "No"}`);

const findValue = (val, obj) => Object.values(obj).includes(val);
console.log(
  `Did Carl Sagan write the book? ${
    findValue("Carl Sagan", book) ? "Yes" : "No"
  } `
);

for (const [key, val] of Object.entries(book)) {
  console.log(`${key}: ${val}`);
}
