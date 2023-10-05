import React, {useState, useEffect} from "react";
import getProducts from "./services/getProducts";
import Product from "./components/Product";
import ErrorManager from "./ErrorManager";

const App = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  useEffect(() => {
    getProducts().then(products => setProducts(products));
  });
  const filterByCategory = cat => {
    category === cat ? setCategory("") : setCategory(cat);
  };
  return (
    <div className="container">
      <ErrorManager onClose={() => setCategory("")}>
        <div className="categories">
          {[...new Set(products.map(p => p.type))].map(cat => (
            <div
              className={category === cat ? "cat-btn cat-btn-on" : "cat-btn"}
              key={cat}
              onClick={() => filterByCategory(cat)}
            >
              {cat}
            </div>
          ))}
        </div>

        {category ? (
          products
            .filter(p => p.type === category)
            .map(p => <Product item={p} key={p.id} />)
        ) : (
          <p className="pick-text">Pick a category</p>
        )}
      </ErrorManager>
    </div>
  );
};

export default App;
