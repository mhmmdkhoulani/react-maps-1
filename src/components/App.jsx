// import Greeting from "./Greeting";
// import "../style.css";
// import ProfileCard from "./ProfileCard";
// import Container from "./Container";

import ProfileCard from "./ProfileCard";
import Greeting from "./Greeting";
import Counter from "./Counter";
import UserForm from "./UserForm";
import UsersList from "./usersList";
import { useEffect, useState } from "react";
import useFetchData from "../hooks/useFetchData";

// function App() {
//   const users = [
//     {
//       firstName: "Mohammad",
//       lastName: "Ahamd",
//       age: 12,
//       email: "test@gmai.com",
//       isGraduated: true,
//     },
//     {
//       firstName: "Ahamad",
//       lastName: "Ahamd",
//       age: 12,
//       email: "test@gmai.com",
//       isGraduated: true,
//     },
//     {
//       firstName: "Rami",
//       lastName: "Ahamd",
//       age: 12,
//       email: "test@gmai.com",
//       isGraduated: true,
//     },
//     {
//       firstName: "Rami",
//       lastName: "Ahamd",
//       age: 12,
//       email: "test@gmai.com",
//       isGraduated: true,
//     },
//   ];
//   return (
//     <>
//       <Container background>
//         <div style={{ display: "flex", flexWrap: "wrap" }}>
//           {users.map((x) => (
//             <ProfileCard user={x} />
//           ))}
//         </div>
//       </Container>
//     </>
//   );
// }

// export default App;

// function App() {
//   const user = {
//     firstName: "Mohammad",
//     lastName: "Ahamd",
//     age: 12,
//     email: "test@gmai.com",
//     isGraduated: true,
//   };
//   const isProfile = false;

//   return (
//     <div style={{ background: "gray" }}>
//       {isProfile ? (
//         <ProfileCard user={user} />
//       ) : (
//         <Greeting username="Mohammad" age={20} />
//       )}
//     </div>
//   );
// }

// export default App;

function App() {
  const [data, isLoading, error] = useFetchData("https://dummyjson.com/users");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data);
  }, [data]);
  const [counter, setCounter] = useState(0);

  async function addUser(user) {
    try {
      const response = await fetch("https://dummyjson.com/users/add", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const newUser = await response.json();
      console.log(newUser);
      setUsers([...users, newUser]);
    } catch (error) {
      console.error(error);
    }
  }
  function deleteUser(id) {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
  }

  return (
    <>
      {/* <Counter /> */}
      <UserForm addUser={addUser} />
      {error && <span style={{ color: "red" }}>{error}</span>}
      {isLoading && <span>Loading...</span>}
      {!isLoading && !error && (
        <UsersList users={users} deleteUser={deleteUser} />
      )}
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Check Effect</button>
    </>
  );
}
export default App;
