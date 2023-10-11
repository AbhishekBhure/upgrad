import React, { Component } from "react";

class App extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    priveleges: {
      Author: false,
      Moderator: false,
      Reviewer: false,
    },
    verification: "",
  };
  formHandler = ({ target }) => {
    const { name, value, type } = target;
    this.setState({
      [name]:
        type === "checkbox"
          ? { ...this.state[name], [value]: !this.state[name][value] }
          : value,
    });
  };
  render() {
    return (
      <div className="form">
        <div className="field-holder">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={(evt) => this.setState({ name: evt.target.value })}
            value={this.state.name}
          />
        </div>
        <div className="field-holder">
          <input
            type="email"
            placeholder="E-Mail"
            name="email"
            onChange={this.formHandler}
            value={this.state.email}
          />
        </div>
        <div className="field-holder">
          <input
            type="phone"
            placeholder="Phone"
            name="phone"
            onChange={this.formHandler}
            value={this.state.phone}
          />
        </div>
        <div className="field-holder">
          <p>Priveleges</p>
          <label>
            Author:
            <input
              type="checkbox"
              name="priveleges"
              value="Author"
              onChange={this.formHandler}
              checked={this.state.priveleges.Author}
            />
          </label>
          <label>
            Moderator:
            <input
              type="checkbox"
              name="priveleges"
              value="Moderator"
              onChange={this.formHandler}
              checked={this.state.priveleges.Moderator}
            />
          </label>
          <label>
            Reviewer:
            <input
              type="checkbox"
              name="priveleges"
              value="Reviewer"
              onChange={this.formHandler}
              checked={this.state.priveleges.Reviewer}
            />
          </label>
        </div>
        <div className="field-holder">
          <p>Verification</p>
          <label>
            Phone:
            <input
              type="radio"
              name="verification"
              value="Phone"
              onChange={this.formHandler}
              checked={this.state.verification === "Phone" ? true : false}
            />
          </label>
          <label>
            E-Mail:
            <input
              type="radio"
              name="verification"
              value="E-Mail"
              onChange={this.formHandler}
              checked={this.state.verification === "E-Mail" ? true : false}
            />
          </label>
        </div>
        <div className="separator" />
        <div className="output">
          <ul>
            {Object.keys(this.state).map((k) => (
              <li key={k}>
                <b>{k}</b>: {JSON.stringify(this.state[k])}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
