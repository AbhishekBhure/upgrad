import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
    };
  }
  render() {
    return (
      <>
        <div>
          <input
            value={this.state.userInput}
            onChange={(e) => {
              this.setState({ userInput: e.target.value });
            }}
            type="text"
            className="text-black ml-5"
          />
          <br />
          {this.props.render(this.state.userInput)}
        </div>
      </>
    );
  }
}

export default Input;
