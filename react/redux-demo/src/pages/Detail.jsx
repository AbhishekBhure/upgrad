import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../redux/apiSlice";

const Detail = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductQuery(id);
  return (
    <div>
      {" "}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2>{product.title}</h2>
          <span> ${product.cost} </span>
          <p> {product.description} </p>
          <p> {product.review} </p>
          <p> 👍 {product.likes} </p>
        </div>
      )}{" "}
    </div>
  );
};

export default Detail;
