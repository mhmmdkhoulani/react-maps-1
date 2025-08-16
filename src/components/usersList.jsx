import React from "react";

function UsersList({ users, deleteUser }) {
  return (
    <div>
      <h1>Users List</h1>
      {users.map((user) => (
        <ul
          key={user.id}
          style={{ backgroundColor: user.gender == "female" ? "red" : "blue" }}
        >
          <li>
            {user.firstName} {user.lastName || "Guest"}
          </li>
          <li>{user.email}</li>
          <li>{user.gender}</li>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </ul>
      ))}
    </div>
  );
}

export default UsersList;
