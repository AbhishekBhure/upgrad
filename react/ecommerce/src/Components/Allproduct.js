import React from "react";

const Allproduct = ({ allproduct }) => {
  return (
    <div>
      <li className="w-[300px] h-[400px] border">
        <img src="" alt="prod" />
        <h4>{allproduct.prodName}</h4>
        <h4>{allproduct.prodBrand}</h4>
        <p>{allproduct.price}</p>
        <button type="button" className="bg-black text-white rounded px-2">
          Add to cart
        </button>
      </li>
    </div>
  );
};

export default Allproduct;
