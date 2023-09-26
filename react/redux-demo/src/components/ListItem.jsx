import { useDispatch } from "react-redux";
import { removeItem } from "../redux/inventorySlice";

const ListItem = ({ id, title, quantity }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className="flex justify-around w-full">
      <div>
        <p>{title}</p>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div>
        <button
          onClick={() => {
            onDelete();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ListItem;
