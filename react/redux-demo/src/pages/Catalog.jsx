import { useGetProductsQuery } from "../redux/apiSlice";
import Product from "../components/Product";

const Catalog = () => {
  const { data: products, isLoading } = useGetProductsQuery();
  return (
    <div>
      Products
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        products.map((product) => <Product key={product.id} {...product} />)
      )}
    </div>
  );
};

export default Catalog;
