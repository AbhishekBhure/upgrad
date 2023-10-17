import React from "react";

const Quote = ({ quote, author }) => (
  <div className="quotes-panel">
    <div className="quote">"{quote}"</div>
    <div className="author">- {author}</div>
  </div>
);

export default Quote;
