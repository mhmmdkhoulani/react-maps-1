import React, { use, useState } from "react";

function UserForm({ addUser }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (!username || !email) {
      setErrorMessage("username and email required");
    } else {
      setErrorMessage("");
      const user = { userName: username, email: email };
      addUser(user);
      setEmail("");
      setUsername("");
    }
  }

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <button type="submit">Add User</button>
      </form>

      <span>{errorMessage}</span>
    </div>
  );
}

export default UserForm;
