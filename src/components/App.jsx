// import Greeting from "./Greeting";
// import "../style.css";
// import ProfileCard from "./ProfileCard";
// import Container from "./Container";

import ProfileCard from "./ProfileCard";
import Greeting from "./Greeting";
import Counter from "./Counter";
import UserForm from "./UserForm";
import UsersList from "./usersList";
import { useState } from "react";

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
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users, user]);
  }
  function deleteUser(userName) {
    const newUsers = users.filter((user) => user.userName !== userName);
    setUsers(newUsers);
  }

  return (
    <>
      {/* <Counter /> */}
      <UserForm addUser={addUser} />
      <UsersList users={users} deleteUser={deleteUser} />
    </>
  );
}
export default App;
