import React, {createRef, useState} from "react";
import ListApp from "./components/ListApp";
import withStorage from "./services/withStorage";
import Portal from "./components/Portal";
import TaskCount from "./components/TaskCount";

const ListAppWithStorage = withStorage(ListApp);

const App = () => {
  const inputBox = createRef();
  const [task, setTask] = useState("");
  return (
    <div className="main">
      <input
        type="text"
        ref={inputBox}
        placeholder="Type and press enter..."
        onKeyUp={e => {
          if (e.keyCode === 13) {
            setTask(e.target.value);
            inputBox.current.value = "";
          }
        }}
      />
      <ListAppWithStorage task={task}>
        {({list, remove, count}) => (
          <>
            <div className="list-app">
              {list.length > 0
                ? list.map(({id, task}) => (
                    <div className="list-item" key={id}>
                      <span>{task}</span>
                      <button onClick={() => remove(id)}>X</button>
                    </div>
                  ))
                : null}
            </div>
            <Portal domNode={document.getElementById("task-count")}>
              <TaskCount count={count} />
            </Portal>
          </>
        )}
      </ListAppWithStorage>
    </div>
  );
};

export default App;
