const books = [
  {
    id: 1,
    title: "The Design of Everyday Things",
    author: "Don Norman",
    formats: ["Paperback", "Hardbound", "eBook"],
  },
  {
    id: 2,
    title: "No Logo",
    author: "Naomi Klein",
    formats: ["Paperback", "eBook"],
  },
  {
    id: 3,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    formats: ["Paperback", "eBook"],
  },
  {
    id: 4,
    title: "Gold",
    author: "Isaac Asimov",
    formats: ["Hardbound", "eBook"],
  },
];

const isAvailable = (title, format, arr) => {
  const getBook = arr.find((book) => book.title === title);

  return getBook && getBook.formats.includes(format);
};

console.log(
  `No Logo by Naomi Klein (Paperback): ${
    isAvailable("No Logo", "Paperback", books) ? "Available" : "Not Available"
  }`
);

console.log(
  `The Da Vinci Code by Dan Brown (Hardbound): ${
    isAvailable("The Da Vinci Code", "Hardbound", books)
      ? "Available"
      : "Not Available"
  }`
);


