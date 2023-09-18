import React from "react";
import Timer from "./components/Timer";
import Child from "./components/Child";

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
      </>
    );
  }
}

export default App;
