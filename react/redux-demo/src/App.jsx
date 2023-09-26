import { useSelector } from "react-redux";
import AddItemForm from "./components/AddItemForm";
import ListItem from "./components/ListItem";
import SortingButton from "./components/SortingButton";
import Total from "./components/Total";
import { Link } from "react-router-dom";

function App() {
  const { items } = useSelector((state) => state.inventory);
  console.log(items);
  return (
    <>
      <div className="flex justify-center items-center w-full h-[100vh] bg-black text-white">
        <div className="border w-full flex m-4 p-4">
          <div>
            <AddItemForm />
          </div>
          <div className="w-full">
            <div>
              <SortingButton />
            </div>
            <div>
              {/* <ListItem /> */}
              {/* items.map((item) => {
                    <ListItem key={item.id} {...item} />;
                  }) */}
              {items.length > 0
                ? items.map((item) => <ListItem key={item.id} {...item} />)
                : "No items in inventory"}
            </div>
            <div>
              <Total />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Redux toolkit + RTK Query</h1>
        <Link to="/products">
          <p>Products</p>
        </Link>
      </div>
    </>
  );
}

export default App;
