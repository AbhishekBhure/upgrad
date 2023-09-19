import React from "react";

export const withFetch = (WrappedComponent) => {
  class WithFetch extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        users: [],
      };
    }

    componentDidMount() {
      fetch("https://reqres.in/api/users")
        .then((res) => res.json())
        .then((data) => this.setState({ users: data.data }));
    }
    render() {
      return (
        <div>
          {this.state.users?.length > 0 && (
            <WrappedComponent users={this.state.users} />
          )}
        </div>
      );
    }
  }
  return WithFetch;
};
