import React from "react";

export default class TodoItems extends React.Component {
  render() {
    return (
      <>
        <div>
          <div>
            <span className="text-white"> {this.props.name} </span>
          </div>
        </div>
      </>
    );
  }
}
