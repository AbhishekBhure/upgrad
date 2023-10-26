import React, { useState, useEffect } from "react";
import "./index.css";
import ListItem from "./components/ListItem";
import AddToDo from "./components/AddToDo";

import { getToDos, setDone, deleteToDo, addTodo } from "./services";

const App = () => {
  const [todos, setToDos] = useState();
  useEffect(() => {
    getToDos().then(data => setToDos(data));
  }, []);
  const onDoneHandler = (status, id) => {
    setDone(status, id).then(todo => {
      setToDos(
        todos.map(i =>
          i.id === id
            ? {
                ...i,
                done: todo.done
              }
            : i
        )
      );
    });
  };
  const onDeleteHandler = id => {
    deleteToDo(id).then(() => {
      setToDos(todos.filter(i => i.id !== id));
    });
  };
  const onAddHandler = task => {
    addTodo(task).then(todo => setToDos([...todos, todo]));
  };
  return (
    <div className="app">
      <div className="title">Tasks</div>
      <AddToDo onAdd={onAddHandler} />
      <div className="list">
        {todos &&
          todos.map(({ id, title, done }) => (
            <ListItem
              id={id}
              done={done}
              title={title}
              key={id}
              onDone={onDoneHandler}
              onDelete={onDeleteHandler}
            />
          ))}
      </div>
    </div>
  );
};

App.defaultProps = {
  init: []
};

export default App;
