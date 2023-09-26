import { useSelector } from "react-redux";

const Total = () => {
  const { totalItems } = useSelector((state) => state.inventory);

  return (
    <div className="flex">
      <p>
        Total: <span>{totalItems}</span>
      </p>
    </div>
  );
};

export default Total;
