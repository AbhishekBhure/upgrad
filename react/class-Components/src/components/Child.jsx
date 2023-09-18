import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.count,
    };
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    return {
      count: nextProps.count,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("nextProp", nextProps);
    console.log("this.state.count", this.state.count);
    // if (nextProps.count - this.state.count < 2) return true;
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevProps.count + 5;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("snapshot", snapshot);
    return snapshot;
  }

  render() {
    return (
      <>
        <p>{this.state.count}</p>
      </>
    );
  }
}

export default Child;
