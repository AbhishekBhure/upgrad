import React, { useState } from "react";

const sentenceCase = (str) => {
  if (str === null || str === "") return false;
  else str = str.toString();

  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const MessageBox = ({ nameVal, natureVal, queryVal }) => {
  const [name, setName] = useState(nameVal);
  const [nature, setNature] = useState(natureVal);
  const [query, setQuery] = useState(queryVal);
  return (
    <div className="form-container">
      <div className="form-fields">
        <div className="field-holder">
          <span className="label">Name</span>
          <input
            value={name}
            onChange={(e) => setName(sentenceCase(e.target.value))}
          />
        </div>
        <div className="field-holder">
          <span className="label">Nature of Query</span>
          <select value={nature} onChange={(e) => setNature(e.target.value)}>
            <option>Billing</option>
            <option>Sales</option>
            <option>Tech Support</option>
          </select>
        </div>
        <div className="field-holder">
          <span className="label">Query</span>
          <textarea value={query} onChange={(e) => setQuery(e.target.value)} />
        </div>
      </div>
      <div className="output">
        <div className="ot-field bold">Name: {name}</div>
        <div className="ot-field bold">Nature of Query: {nature}</div>
        <div className="ot-field">Query: {query}</div>
      </div>
    </div>
  );
};

MessageBox.defaultProps = {
  nameVal: "",
  natureVal: "",
  queryVal: "",
};

export default MessageBox;
