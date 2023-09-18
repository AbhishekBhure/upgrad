import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    clearInterval(this.timerId);
  }

  tick = () => {
    this.setState({
      date: new Date(),
    });
  };

  render() {
    return (
      <div className="">
        <div className="text-center rounded-full bg-white w-[200px] h-[200px] text-black m-auto flex flex-col items-center justify-center">
          <h1 className="text-3xl mb-3">Time CLock</h1>
          <p className=" text-2xl">{this.state.date.toLocaleTimeString()}</p>
        </div>
      </div>
    );
  }
}

export default Timer;
