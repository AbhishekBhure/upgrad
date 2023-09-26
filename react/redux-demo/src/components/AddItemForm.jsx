import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/inventorySlice";

const AddItemForm = () => {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(0);

  const dispatch = useDispatch();

  function onSubmit() {
    if (title !== "" && quantity > 0) {
      //Dispatch Action here
      dispatch(addItem({ title, quantity }));
      setTitle("");
      setQuantity(0);
    }
  }
  return (
    <div className="flex flex-col w-[300px]">
      <input
        onChange={(evt) => setTitle(evt.target.value)}
        type="text"
        value={title}
        className="rounded mb-3 text-black w-[200px]"
      />
      <input
        onChange={(evt) => setQuantity(Number(evt.target.value))}
        type="number"
        value={quantity}
        className="rounded mb-3 w-[70px] text-black"
      />
      <button
        onClick={onSubmit}
        className="text-white rounded bg-[green] w-[100px]"
      >
        Add Item
      </button>
    </div>
  );
};

export default AddItemForm;
