import { useState } from "react";
import { Link } from "react-router-dom";
import { useUpdateLikesMutation } from "../redux/apiSlice";
import LikeButtons from "./LikeButtons";

const Product = ({ id, title, cost, description, review, likes }) => {
  const [updateLikes, { isLoading }] = useUpdateLikesMutation();
  //   const [like, setLike] = useState(likes);
  const handleIncrement = (e) => {
    e.preventDefault();
    updateLikes({ id, likes: likes + 1 });
  };
  const handleDecrement = (e) => {
    e.preventDefault();
    if (likes > 0) {
      updateLikes({ id, likes: likes - 1 });
    }
  };

  return (
    <>
      <Link to={`/product/${id}`}>
        <div>
          <h2>{title}</h2>
          <span>{cost}</span>
          <p>{description}</p>
          <p>{review}</p>

          <LikeButtons
            value={likes}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
            disable={isLoading}
          />
        </div>
      </Link>
    </>
  );
};

export default Product;
