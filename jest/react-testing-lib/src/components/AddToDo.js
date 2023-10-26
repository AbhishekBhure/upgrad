import React, { useState } from "react";

const AddToDo = ({ onAdd }) => {
  const [task, setTask] = useState("");
  return (
    <div className="add-todo">
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={e => setTask(e.target.value)}
        onKeyUp={e => {
          if (e.key === "Enter") {
            onAdd({
              title: task,
              done: false
            });
            setTask("");
          }
        }}
      />
    </div>
  );
};

AddToDo.defaultProps = {
  onAdd: () => {}
};

export default AddToDo;
