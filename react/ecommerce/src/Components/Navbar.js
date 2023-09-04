import React from "react";

const Navbar = (props) => {
  const { cartCount } = props;
  return (
    <div>
      Navbar{" "}
      <h4>
        Cart <span>{cartCount}</span>{" "}
      </h4>
    </div>
  );
};

export default Navbar;
