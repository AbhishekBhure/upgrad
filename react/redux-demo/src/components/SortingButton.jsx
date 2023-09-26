import { useDispatch } from "react-redux";
import { sortByQuantityAsc, sortByQuantityDesc } from "../redux/inventorySlice";

const SortingButton = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(sortByQuantityAsc());
        }}
      >
        🔼
      </button>
      <button
        onClick={() => {
          dispatch(sortByQuantityDesc());
        }}
      >
        {" "}
        🔽
      </button>
    </div>
  );
};

export default SortingButton;
