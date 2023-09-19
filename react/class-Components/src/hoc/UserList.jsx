import React from "react";
import { withFetch } from "./WithFetch";

class UserList extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.id}</p>
              <p>{user.first_name}</p>
              <p>{user.last_name}</p>
              <p>{user.email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withFetch(UserList);
// https://reqres.in/api/users
