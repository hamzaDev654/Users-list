import React, { useState } from "react";
import { AddUsers } from "./Components/Users/AddUsers";
import { UserList } from "./Components/Users/UserList";

function App() {
  const [usersData, setUserData] = useState([]);
  const getUsers = (uName, uAge) => {
   const usersObj ={
    id: Math.random().toString(),
    name: uName,
    age: uAge,
   };

   setUserData((prevUserData)=>{
    return [...prevUserData , usersObj]
   })

  };
console.log(usersData);
  return (
    <>
      <AddUsers onAddUsers={getUsers} />
      <UserList users={usersData} />
    </>
  );
}

export default App;
