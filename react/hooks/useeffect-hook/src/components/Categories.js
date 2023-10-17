import React from "react";
import Button from "./Button";

const Categories = ({ categories, onSelected, selected }) => (
  <div className="categories-panel">
    {categories.map((title, index) => (
      <Button title={title} key={index} onClicked={cat => onSelected(cat)} />
    ))}
    <div className="selected-category">{selected.toUpperCase()}</div>
  </div>
);

export default Categories;
