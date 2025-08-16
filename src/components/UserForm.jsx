import React, { use, useState } from "react";

function UserForm({ addUser }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (!firstName || !email) {
      setErrorMessage("username and email required");
    } else {
      setErrorMessage("");
      const user = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        email: email,
      };

      addUser(user);
      setEmail("");
      setFirstName("");
      setLastName("");
    }
  }

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="firstname">First Name</label>
        <input
          type="text"
          id="firstname"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          id="lastname"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
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
        <p>Choose gender</p>
        <input
          type="radio"
          name="gender"
          value={email}
          onChange={(e) => setGender("male")}
        />
        Male
        <br />
        <input
          type="radio"
          name="gender"
          value={email}
          onChange={(e) => setGender("female")}
        />
        Female
        <br />
        <button type="submit">Add User</button>
      </form>

      <span>{errorMessage}</span>
    </div>
  );
}

export default UserForm;
