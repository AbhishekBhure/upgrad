import React, { Component, createRef } from "react";
import getBooks from "./db";
import BookCard from "./BookCard";
import debounce from "lodash.debounce";

class App extends Component {
  searchRef = createRef();
  state = {
    results: [],
    selectedBook: null,
  };
  searchBooks = debounce((keyword) => {
    console.log(`Searching for ${keyword}`);
    if (keyword !== "") {
      const getTitles = getBooks(keyword);
      this.setState({
        results: getTitles,
      });
    } else {
      this.setState({
        results: [],
      });
    }
  }, 400);
  clear = () => {
    this.searchRef.current.value = "";
    this.setState({ results: [] });
  };
  showDetails = (book) => {
    this.setState({ selectedBook: book });
    this.clear();
  };
  render() {
    return (
      <div className="books-app">
        <div className="title">The Library Catalogue</div>
        <div className="search-box">
          <input
            type="text"
            onChange={(evt) => this.searchBooks(evt.target.value)}
            ref={this.searchRef}
          />
          <div className="clear-btn" onClick={() => this.clear()}>
            X
          </div>
          <div className="search-results">
            {this.state.results.length > 0 ? (
              <ul>
                {this.state.results.map((b, index) => (
                  <li key={index} onClick={() => this.showDetails(b)}>
                    {b.title}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
        <div className="book-details">
          <BookCard data={this.state.selectedBook} />
        </div>
      </div>
    );
  }
}

export default App;
