const book1 = {
  title: "Book One",
  author: "John Doe",
  year: 2013,
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

const book2 = {
  title: "Book Two",
  author: "Jane Smith",
  year: 2016,
};

// console.log("isbn" in book1);
// console.log(book1.hasOwnProperty("title"));

const showDetails = (book) =>
  book.hasOwnProperty("getSummary")
    ? console.log(book.getSummary())
    : console.log("Unable to show details");

showDetails(book1);
showDetails(book2);
