import React from "react";

const DeleteButton = ({ onDelete }) => {
  const onDeleteHandler = () => {
    if (window.confirm("Do you want to delete this task?")) {
      onDelete();
    }
  };
  return (
    <div className="delete-btn" onClick={onDeleteHandler}>
      X
    </div>
  );
};

export default DeleteButton;
