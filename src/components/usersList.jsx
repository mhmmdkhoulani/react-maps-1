import React from "react";

function UsersList({ users, deleteUser }) {
  return (
    <div>
      <h1>Users List</h1>
      {users.map((user) => (
        <ul key={Math.random()}>
          <li>{user.userName}</li>
          <li>{user.email}</li>
          <button onClick={() => deleteUser(user.userName)}>Delete</button>
        </ul>
      ))}
    </div>
  );
}

export default UsersList;
