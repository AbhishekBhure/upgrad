import React from "react";
import Timer from "./components/Timer";
import Child from "./components/Child";
import Input from "./components/Input";
import UserList from "./hoc/UserList";
import WordCount from "./components/WordCount";
import Todo from "./components/Todo";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.state = {
      showTime: true,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  onSwitchClock = () => {
    this.setState({ showTime: !this.state.showTime });
  };

  render() {
    return (
      <>
        <h1>Hello</h1>
        <button onClick={this.decrement}> - </button>

        <Child count={this.state.count} />
        {/* <p>{this.state.count}</p> */}
        <button onClick={this.increment}>+</button>

        <div className="flex flex-col justify-center">
          <button
            onClick={this.onSwitchClock}
            type="button"
            className="bg-white w-[50px] m-auto rounded text-black mb-4"
          >
            {this.state.showTime ? "Hide" : "Show"}
          </button>
          {this.state.showTime && <Timer toggle={this.state.showTime} />}
        </div>
        <div>
          <Input
            render={(value) => <b className="text-white ml-5 pt-4">{value}</b>}
          />
          <Input
            render={(value) => (
              <p className="text-white ml-5 pt-4">{value.toUpperCase()}</p>
            )}
          />
        </div>

        <div>
          <UserList />
        </div>
        <div>
          <WordCount />
        </div>
        <div>
          <Todo />
        </div>
      </>
    );
  }
}

export default App;
