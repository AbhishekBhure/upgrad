import React from "react";

const ProductItem = (props) => {
  const { product, onAddToCart } = props;
  const addTocart = () => {
    onAddToCart();
  };
  return (
    <div>
      <li className="w-[300px] h-[400px] border">
        <img src="" alt="prod" className="w-full h-[250px]" />
        <h4>{product.prodName}</h4>
        <h4>{product.prodBrand}</h4>
        <p>{product.price}</p>
        <button
          type="button"
          className="bg-black text-white rounded px-2"
          onClick={addTocart}
        >
          Add to cart
        </button>
      </li>
    </div>
  );
};

export default ProductItem;
