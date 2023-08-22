function Book(title, author, rating) {
  this.title = title;
  this.author = author;

  this.rating = rating;
  this.reviews = [];
  this.id = Date.now().toString();
}

const BookCollection = {
  books: JSON.parse(localStorage.getItem("books")) || [],

  //Add a new book
  addBook: function () {
    let bookTitle = document.getElementById("booktitle").value;
    let bookAuthor = document.getElementById("author").value;
    let rating = document.getElementById("rating").value;
    let book = new Book(bookTitle, bookAuthor, rating);
    this.books.push(book);
    this.displayBook(this.books);
    saveData();
  },

  //Remove a Book
  removeBook: function (removeId) {
    let bookToBeRemoved = this.books.findIndex((book) => book.id === removeId);
    if (bookToBeRemoved == -1) {
      document.getElementsByClassName("userMessage").innerText =
        "No Book Found";
    } else {
      let removedBook = this.books.splice(bookToBeRemoved, 1);
      console.log(removedBook);
      this.displayBook(this.books);
    }
  },

  //Search a Book
  searchBook: function (title) {
    let filteredBooks = this.books.filter((book) => book.title.includes(title));
    if (filteredBooks.length === 0) {
      document.getElementsByClassName("userMessage").innerText =
        "No Books found";
    } else {
      this.displayBook(filteredBooks);
    }
  },

  //display Books
  displayBook: function (inputArray) {
    let content = "";

    inputArray.forEach((book) => {
      let indiviualBook = `<div>
      <h2>title:${book.title}</h2>
      <h2>author:${book.author}</h2>
      <h2>rating:${book.rating}</h2>
      <button class="removeBtn" id="${book.id}">Remove</button>
      </div>`;
      content += indiviualBook;
    });

    document.getElementById("allbooks").innerHTML = content;
  },
};

BookCollection.displayBook(BookCollection.books);

//Adding eventListener to Add book
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  BookCollection.addBook();
});

//removing book
// let removeBook = document.getElementById("");
// removeBook.addEventListener("click", (e) => {
//   BookCollection.removeBook(e.target.id);
// });

//removeBtn
function removeBook(books) {
  let allRemoveBtn = document.querySelectorAll(".removeBtn");
  console.log(allRemoveBtn);
  allRemoveBtn.forEach((button) => {
    button.addEventListener("click", () => {
      BookCollection.removeBook(button.id);
    });
  });
}
removeBook();

//search
let search = document.getElementById("search");
search.addEventListener("change", () => {
  BookCollection.searchBook(search.value);
});

//local storage
function saveData() {
  localStorage.setItem("books", JSON.stringify(BookCollection.books));
}
