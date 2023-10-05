import React from "react";

const titleCase = str =>
  str
    .toLowerCase()
    .split(" ")
    .map(w => {
      return w.replace(w[0], w[0].toUpperCase());
    })
    .join(" ");

const Product = ({item}) => {
  return (
    <div className="product">
      <div className="product-name">{titleCase(item.name)}</div>
      <div className="product-cost">{`$${item.cost}`}</div>
    </div>
  );
};

export default Product;
