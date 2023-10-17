import React, {useEffect, useState} from "react";
import Categories from "./components/Categories";
import Quote from "./components/Quote";
import {getCategories, getQuote} from "./quotesService";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState("");
  const [quote, setQuote] = useState({});

  // Fetch categories when the app is mounted
  useEffect(() => {
    getCategories().then(categs => {
      if (categs.length > 0) {
        setCategories(categs);
        setSelected(categs[0]);
      }
    });
  }, []);

  // When the category is changed, a new quote is fetched
  useEffect(() => {
    selected && getQuote(selected).then(q => setQuote(q));
  }, [selected]);

  // When the category is changed, the timer is reset
  // When the app is unmounted, the timer instance is cleaned up
  useEffect(() => {
    let timer = setInterval(() => {
      getQuote(selected).then(q => setQuote(q));
    }, 5000);

    return () => clearInterval(timer);
  }, [selected]);

  return (
    <div className="quote-master">
      <Categories
        categories={categories}
        selected={selected}
        onSelected={category => setSelected(category)}
      />

      {quote && <Quote quote={quote.quote} author={quote.author} />}
    </div>
  );
};

export default App;
