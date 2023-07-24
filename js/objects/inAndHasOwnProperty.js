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

// showDetails(book1);
// showDetails(book2);

("use strict");

const rectangles = [
  {
    id: "Rectangle - 01",
    width: 129.2,
    height: 80.9,
  },
  {
    id: "Rectangle - 02",
    width: 342,
    height: 120,
    area() {
      return this.width * this.height;
    },
  },
];

// Your Code Goes Here

const calcArea = function () {
  return this.width * this.height;
};

try {
  rectangles.forEach((rect) =>
    console.log(
      `${rect.id} : ${
        rect.hasOwnProperty("area") ? rect.area() : calcArea.call(rect)
      }`
    )
  );
} catch (error) {
  console.log(error.message);
}
