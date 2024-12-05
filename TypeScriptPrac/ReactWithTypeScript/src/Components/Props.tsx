import React from "react";

interface MYPROPS {
  name: string;
  age: number;
  alive: boolean;
}

const Props: React.FC<MYPROPS> = ({ name, age, alive }) => {
  return (
    <>
      <h1>Name: {name}</h1>
      <h2>age: {age}</h2>
      <h3>Life Status: {alive ? "alive" : "dead"}</h3>
    </>
  );
};

export default Props;
