import { Component } from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import ProductItem from "./Components/ProductItem";
import Allproduct from "./Components/Allproduct";
import ScrollToTop from "./Components/ScrollToTop";

const dealProducts = [
  {
    id: 1,
    imgUrl: "",
    prodName: "iPhone 15",
    prodBrand: "iPhone",
    price: "$6500",
  },
  {
    id: 2,
    imgUrl: "",
    prodName: "Samsung A50",
    prodBrand: "Samsung",
    price: "$500",
  },
  {
    id: 3,
    imgUrl: "",
    prodName: "Motorola M53",
    prodBrand: "Motorola",
    price: "$200",
  },
  {
    id: 4,
    imgUrl: "",
    prodName: "Redmi Note8 Pro",
    prodBrand: "Redmi",
    price: "$6500",
  },
  {
    id: 5,
    imgUrl: "",
    prodName: "iPhone 12 Pro",
    prodBrand: "iPhone",
    price: "$900",
  },
];

const allProd = [
  {
    id: 1,
    imgUrl: "",
    prodName: "iPhone 15",
    prodBrand: "iPhone",
    price: "$6500",
  },
  {
    id: 2,
    imgUrl: "",
    prodName: "Samsung A50",
    prodBrand: "Samsung",
    price: "$500",
  },
  {
    id: 3,
    imgUrl: "",
    prodName: "Motorola M53",
    prodBrand: "Motorola",
    price: "$200",
  },
  {
    id: 4,
    imgUrl: "",
    prodName: "Redmi Note8 Pro",
    prodBrand: "Redmi",
    price: "$6500",
  },
  {
    id: 5,
    imgUrl: "",
    prodName: "iPhone 12 Pro",
    prodBrand: "iPhone",
    price: "$900",
  },
  {
    id: 6,
    imgUrl: "",
    prodName: "iPhone 15",
    prodBrand: "iPhone",
    price: "$6500",
  },
  {
    id: 7,
    imgUrl: "",
    prodName: "Samsung A50",
    prodBrand: "Samsung",
    price: "$500",
  },
  {
    id: 8,
    imgUrl: "",
    prodName: "Motorola M53",
    prodBrand: "Motorola",
    price: "$200",
  },
  {
    id: 9,
    imgUrl: "",
    prodName: "Redmi Note8 Pro",
    prodBrand: "Redmi",
    price: "$6500",
  },
  {
    id: 10,
    imgUrl: "",
    prodName: "iPhone 12 Pro",
    prodBrand: "iPhone",
    price: "$900",
  },
];

class App extends Component {
  state = { cartCount: 0 };

  onAddToCart = () => {
    this.setState((prev) => ({
      cartCount: prev.cartCount + 1,
    }));
  };
  render() {
    const { cartCount } = this.state;

    return (
      <div>
        <div>
          <Navbar cartCount={cartCount} />
          <Banner />
        </div>
        <div>
          <h2 className="text-center text-xl font-bold">Deals Of the Day</h2>
          <ul className="flex flex-wrap gap-5 justify-evenly">
            {dealProducts.map((product) => (
              <ProductItem
                product={product}
                key={product.id}
                onAddToCart={this.onAddToCart}
              />
            ))}
          </ul>
        </div>
        <div className="w-full">
          <h2 className="text-center text-xl font-bold">All Products</h2>
          <ul className="flex flex-wrap w-full gap-5 justify-evenly ">
            {allProd.map((allproduct) => (
              <Allproduct allproduct={allproduct} key={allproduct.id} />
            ))}
          </ul>
        </div>
        <ScrollToTop />
      </div>
    );
  }
}

export default App;
