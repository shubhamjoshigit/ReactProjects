import { useState } from "react";
import AddUser from "./components/User/AddUser.js";
import UsersList from "./components/User/UsersList.js";

function App() {
  const [usersList,setUsersList] = useState([]);

  const addUsersHandler=(uName,uAge)=>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name: uName, age: uAge, id: Math.random().toString()}];
    });
  };

  const delUserHandler=(usr)=>{
    // setUsersList((prevUsersList)=>{
    //   return [...prevUsersList,{}]
    // });
    setUsersList(usersList.filter(item=>item.id!== usr.id));
  }

  return (
    <div>
      <AddUser onAddUser={addUsersHandler} />
      <UsersList  users={usersList} onTouch={delUserHandler} />
    </div>
  );
}

export default App;
