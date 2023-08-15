let allBooks = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Paulo Coelho",
    rating: [4.5, 4.7, 4.9],
    reviews: [
      { username: "Jane", content: "skjsidknkjnoidc cndcnjcjk" },
      { username: "Horse", content: "skjsidknkjnoidc cndcjk" },
      { username: "dog", content: "skjsidknkjnoidnjcjk" },
    ],
    year: 1988,
  },
];

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.rating = [];
  this.reviews = [];
  this.id = Date.now().toString();
}

const BookCollection = {
  books: [],

  //Add a new book
  addBook: function (book) {
    this.books.push(book);
    console.log(`Book ${book.title} added successfully with ID ${book.id}`);
  },

  //Remove a Book
  removeBook: function (removeId) {
    let bookToBeRemoved = this.books.findIndex((book) => book.id === removeId);
    if (bookToBeRemoved == -1) {
      console.log(`No Such Book with ${removeId} found in collection`);
    } else {
      let removedBook = this.books.splice(bookToBeRemoved, 1);
      console.log(`The book ${removedBook[0].title} is reoved`);
    }
  },

  //Search a Book
  searchBook: function (title) {
    let filteredBooks = this.books.filter((book) => book.title.includes(title));
    if (filteredBooks.length === 0) {
      console.log(`No Books Find with the ${title} `);
    } else {
      console.log(`Here's What we found:`);
      filteredBooks.forEach((book) =>
        console.log(
          `${book.title} realsed in the  year ${book.year} written by ${book.author}`
        )
      );
    }
  },

  //Add ratings
  let addRating = 
};

let choice = -1;

do {
  console.log(
    "Choose an option: \n1. Add a new book\n2. Remove an existing book\n3. Search an existing book\n4. Add rating\n5. Add a rating\n6.Compute all the ratings\n7. Exit "
  );

  choice = parseInt(prompt("Enter your choice: "));
  switch (choice) {
    case 1:
      let title = prompt("Enter the title of the book: ");
      let author = prompt("Enter the author of the book: ");
      let year = prompt("Enter the year of the book: ");
      let newBook = new Book(title, author, year);
      BookCollection.addBook(newBook);
      break;
    case 2:
      let removeId = prompt("Enter the Id to be removed");
      BookCollection.removeBook(removeId);
      break;
    case 3:
      let searchTitle = prompt("Enter Title:");
      BookCollection.searchBook(searchTitle);
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    default:
      console.log("Thank you!!");
      break;
  }
} while (choice >= 1 && choice < 7);
