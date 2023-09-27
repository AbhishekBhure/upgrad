import React from "react";
import TodoItems from "./TodoItems";
export default class Todo extends React.Component {
  state = {
    items: [],
  };

  add = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        items: [
          ...this.state.items,
          { name: e.target.value, id: new Date().getTime() },
        ],
      });
      e.target.value = "";
    }
  };
  render() {
    return (
      <>
        <div>
          <div>
            <h1>Todo</h1>
          </div>
          <div>
            <input type="text" className="text-black" onKeyUp={this.add} />
          </div>
          <div>
            {this.state.items.map((item) => (
              <TodoItems name={item.name} key={item.id} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
