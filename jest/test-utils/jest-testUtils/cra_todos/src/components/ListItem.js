import React from "react";
import StatusButton from "./StatusButton";
import DeleteButton from "./DeleteButton";

const ListItem = ({ id, title, done, onDone, onDelete }) => (
  <div className="list-item">
    <div className="task">{title}</div>
    <StatusButton status={done} onDone={status => onDone(status, id)} />
    <DeleteButton onDelete={() => onDelete(id)} />
  </div>
);

export default ListItem;
