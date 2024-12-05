import { useState } from "react";
import "./App.css";
import Users from "./Components/Users";
// import UserForm from "./Components/UserForm";
// import EventHandling from "./Components/EventHandling";
// import Props from "./Components/Props";
// import StateHandling from "./Components/StateHandling";

//State Handling Interface
// interface VALUE_TYPE {
//   name: string;
//   age: number;
//   alive: boolean;
// }

// UserForm Interface
// interface USERTYPE {
//   name: string;
//   email: string;
// }
function App() {
  // State Handling
  // const [value, setValue] = useState<VALUE_TYPE>({
  //   name: "",
  //   age: 0,
  //   alive: false,
  // });

  // *************************************************************************
  // Event Handling
  // const [count, setCount] = useState<number>(0);

  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };

  // const handleDecrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   }
  // };

  // *****************************************************************************************
  // User Form
  // const [users, setUsers] = useState<USERTYPE[]>([]);

  // const handleSubmit = (user: { name: string; email: string }) => {

  //   setUsers([...users, user]);
  //   console.log(users);
  // };
  return (
    <>
      {/* 
      <Props name={"Ashish"} age={25} alive={true} />
      <StateHandling Value={value} setValue={setValue} /> */}
      {/* <EventHandling
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      /> */}

      {/* <UserForm handleSubmit={handleSubmit} /> */}
      <Users />
    </>
  );
}

export default App;
