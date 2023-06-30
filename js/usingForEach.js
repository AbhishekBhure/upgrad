const books = [
  {
    id: 1,
    title: "Freakonomics",
  },
  {
    id: 2,
    title: "The Design of Everyday Things",
  },
  {
    id: 3,
    title: "Shantaram",
  },
  {
    id: 4,
    title: "Contact",
  },
];

console.log("My Favourite Books");

// Your code here...
books.forEach((elem, index) => {
  console.log(`${index + 1}. ${elem.title} `);
});
